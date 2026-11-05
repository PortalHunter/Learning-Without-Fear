#!/usr/bin/env python3
"""Deterministic checks for the public static site and its evidence inventory.

This checks structure, safety and traceability. It is not a full HTML standards
validator, a fact-checker, or evidence that the research hypothesis is true.
"""
from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"


class Page(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.links: list[tuple[str, str, dict[str, str]]] = []
        self.tags: Counter[str] = Counter()
        self.title_parts: list[str] = []
        self.in_title = False
        self.studies: list[dict[str, object]] = []
        self.current_study: dict[str, object] | None = None
        self.active_study_field: str | None = None
        self.images_without_alt = 0
        self.unsafe_blank_links = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        props = {key: value or "" for key, value in attrs}
        self.tags[tag] += 1
        if "id" in props:
            self.ids.append(props["id"])
        if tag == "title":
            self.in_title = True
        if tag == "img" and "alt" not in props:
            self.images_without_alt += 1
        if tag == "a" and props.get("target") == "_blank":
            rel = props.get("rel", "").split()
            if "noopener" not in rel:
                self.unsafe_blank_links += 1
        if tag in {"a", "link", "script", "img", "iframe"}:
            for key in ("href", "src"):
                if key in props:
                    self.links.append((key, props[key], props))
        if tag == "article" and "study" in props.get("class", "").split():
            self.current_study = {"metadata": props, "source_links": 0,
                                  "citation": False, "summary": False, "design": False,
                                  "connection": False, "boundary": False,
                                  "design_text": "", "connection_text": ""}
            self.studies.append(self.current_study)
        if self.current_study is not None:
            classes = props.get("class", "").split()
            for name, field in (("study-citation", "citation"),
                                ("study-summary", "summary"),
                                ("study-design", "design"),
                                ("study-connection", "connection"),
                                ("study-limit", "boundary")):
                if name in classes:
                    self.current_study[field] = True
                    if tag == "p" and field in {"design", "connection"}:
                        self.active_study_field = field + "_text"
            if tag == "a" and props.get("href", "").startswith("https://"):
                self.current_study["source_links"] = int(self.current_study["source_links"]) + 1

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if tag == "p":
            self.active_study_field = None
        if tag == "article":
            self.current_study = None
            self.active_study_field = None

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.current_study is not None and self.active_study_field:
            field = self.active_study_field
            self.current_study[field] = str(self.current_study[field]) + data


def validate() -> list[str]:
    errors: list[str] = []
    pages = sorted(DOCS.glob("*.html"))
    if not pages:
        return ["No HTML pages found in docs/"]
    parsed: dict[Path, Page] = {}
    for page in pages:
        parser = Page()
        parser.feed(page.read_text(encoding="utf-8"))
        parser.close()
        parsed[page.resolve()] = parser
        if parser.tags["main"] != 1:
            errors.append(f"{page}: expected exactly one main element")
        if parser.tags["h1"] != 1:
            errors.append(f"{page}: expected exactly one h1")
        if not "".join(parser.title_parts).strip():
            errors.append(f"{page}: missing page title")
        if parser.images_without_alt:
            errors.append(f"{page}: {parser.images_without_alt} images without alt")
        if parser.unsafe_blank_links:
            errors.append(f"{page}: {parser.unsafe_blank_links} target=_blank links without noopener")
        repeated = [name for name, n in Counter(parser.ids).items() if n > 1]
        if repeated:
            errors.append(f"{page}: duplicate ids: {', '.join(repeated)}")

    docs_root = DOCS.resolve()
    for page, parser in parsed.items():
        for _, url, _ in parser.links:
            if not url:
                errors.append(f"{page}: empty link or resource URL")
                continue
            parsed_url = urlsplit(url)
            if parsed_url.scheme:
                if parsed_url.scheme in {"https", "http"} and not parsed_url.hostname:
                    errors.append(f"{page}: malformed external URL: {url}")
                elif parsed_url.scheme not in {"https", "http", "mailto", "tel", "data"}:
                    errors.append(f"{page}: disallowed link scheme: {url}")
                continue
            if parsed_url.netloc:
                errors.append(f"{page}: protocol-relative URL needs explicit https: {url}")
                continue
            relative = unquote(parsed_url.path)
            target = (page.parent / relative).resolve() if relative else page
            if not target.is_relative_to(docs_root):
                errors.append(f"{page}: local URL escapes public docs folder: {url}")
            elif not target.is_file():
                errors.append(f"{page}: broken local link: {url}")
            elif parsed_url.fragment and target.suffix.lower() == ".html":
                fragment = unquote(parsed_url.fragment)
                if target not in parsed or fragment not in parsed[target].ids:
                    errors.append(f"{page}: broken page anchor: {url}")

    library_file = (DOCS / "library.html").resolve()
    library = parsed.get(library_file)
    if library is None:
        errors.append("Missing docs/library.html")
        return errors
    count = len(library.studies)
    if count == 0:
        errors.append("Evidence library has no study entries")
    for idx, study in enumerate(library.studies, start=1):
        metadata = study["metadata"]
        if not all(metadata.get(x) for x in ("data-year", "data-topic", "data-discipline", "data-role")):
            errors.append(f"Library entry {idx}: missing topic, discipline, year or evidence role")
        if not all(study[x] for x in ("citation", "summary", "design", "connection", "boundary")):
            errors.append(f"Library entry {idx}: missing citation, summary, study design, connection or boundary")
        for field in ("design_text", "connection_text"):
            if len(str(study[field]).strip()) < 70:
                errors.append(f"Library entry {idx}: {field} is empty or too generic")
        if not re.search(r"\bH[1-5]\b", str(study["connection_text"])):
            errors.append(f"Library entry {idx}: connection does not identify an LWF hypothesis")
        if not study["source_links"]:
            errors.append(f"Library entry {idx}: no HTTPS source link")

    root_readme = (ROOT / "README.md").read_text(encoding="utf-8")
    docs_readme = (DOCS / "README.md").read_text(encoding="utf-8")
    library_html = library_file.read_text(encoding="utf-8")
    declarations = {
        "root README": re.search(r"\[Curated evidence library\]\([^)]+\)[^\n]*?\b(\d+) annotated publications", root_readme),
        "docs README": re.search(r"\blibrary\.html\b[^\n]*?\b(\d+) research publications", docs_readme),
        "public library counter": re.search(r'id="library-count"[^>]*>\s*(\d+) sources shown', library_html),
    }
    for label, match in declarations.items():
        if match is None:
            errors.append(f"{label}: unable to find the declared evidence-library count")
        elif int(match.group(1)) != count:
            errors.append(f"{label}: says {match.group(1)}, but library contains {count} entries")
    print(f"Checked {len(pages)} pages, {count} study entries, local links, anchors, and release-facing counts.")
    print("External HTTP URLs are syntax-checked, not independently fact-checked or availability-tested.")
    return errors


if __name__ == "__main__":
    failures = validate()
    if failures:
        for failure in failures:
            print("ERROR:", failure, file=sys.stderr)
        raise SystemExit(1)
    print("Static site and evidence-inventory checks passed.")
