"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "docs", "library.html"), "utf8");
const css = fs.readFileSync(path.join(root, "docs", "assets", "polish.css"), "utf8");

test("every library entry has meaningful study design, hypothesis connection, and boundary", () => {
  const entries = [...html.matchAll(/<article class="study"[^>]*>[\s\S]*?<\/article>/g)].map(m => m[0]);
  assert.equal(entries.length, 30);
  const categories = new Set();
  entries.forEach((entry, idx) => {
    for (const field of ["study-summary", "study-design", "study-connection", "study-limit"]) {
      const match = entry.match(new RegExp('<p class="' + field + '">([\\s\\S]*?)<\\/p>'));
      assert.ok(match, "Missing " + field + " in article " + (idx + 1));
      assert.ok(match[1].replace(/<[^>]+>/g, "").trim().length > 65,
        "Insufficient " + field + " text in article " + (idx + 1));
    }
    const connection = entry.match(/<p class="study-connection">([\s\S]*?)<\/p>/)[1];
    assert.match(connection, /\bH[1-5]\b/, "Connection must map to a hypothesis");
    if (/Challenge|Contradictory/.test(connection)) categories.add("challenge");
    if (/Indirect|Conceptual/.test(connection)) categories.add("indirect");
    if (/Direct AI|Directly relevant/.test(connection)) categories.add("direct");
    if (/Safety|safety|Methodological|methodological/.test(connection)) categories.add("safety");
    assert.match(entry, /<h3><a href="https:\/\//);
    assert.ok(entry.includes('data-topic=') && entry.includes('data-discipline=') && entry.includes('data-year='));
  });
  for (const category of ["challenge", "indirect", "direct", "safety"]) {
    assert.ok(categories.has(category), "Missing evidence interpretation category: " + category);
  }
  assert.match(html, /0<\/strong> LWF interventions validated/);
});

function mockFilters() {
  function field(value = "") {
    return {
      value, textContent: "", hidden: false, handlers: {},
      addEventListener(name, fn) { this.handlers[name] = fn; },
      fire(name) { assert.ok(this.handlers[name]); this.handlers[name](); }
    };
  }
  const cards = [
    { dataset: { topic: "feedback", discipline: "ai", year: "2025" }, textContent: "SCoRe reinforcement learning correction", hidden: false },
    { dataset: { topic: "human", discipline: "learning", year: "2007" }, textContent: "Power of Feedback review", hidden: false },
    { dataset: { topic: "gaming", discipline: "ai", year: "2026" }, textContent: "Reward hacking benchmark", hidden: false }
  ];
  const ids = {
    "library-search": field(), "topic-filter": field("all"),
    "year-filter": field("all"), "discipline-filter": field("all"),
    "library-count": field(), "library-empty": field()
  };
  const document = {
    getElementById: id => ids[id] || null,
    querySelectorAll: selector => {
      if (selector === ".video-mount[data-youtube-id]") return [];
      if (selector === "#study-list .study") return cards;
      return [];
    }
  };
  const script = fs.readFileSync(path.join(root, "docs", "assets", "extras.js"), "utf8");
  vm.runInNewContext(script, { document });
  return { cards, ids };
}

test("library search and filters remain functional, with accessible empty-state feedback", () => {
  const { cards, ids } = mockFilters();
  assert.equal(ids["library-count"].textContent, "3 of 3 sources shown");
  ids["library-search"].value = "SCoRe";
  ids["library-search"].fire("input");
  assert.deepEqual(cards.map(c => c.hidden), [false, true, true]);
  assert.equal(ids["library-count"].textContent, "1 of 3 sources shown");
  ids["library-search"].value = "";
  ids["library-search"].fire("input");
  ids["discipline-filter"].value = "learning";
  ids["discipline-filter"].fire("change");
  assert.deepEqual(cards.map(c => c.hidden), [true, false, true]);
  ids["discipline-filter"].value = "all";
  ids["topic-filter"].value = "gaming";
  ids["year-filter"].value = "2025";
  ids["year-filter"].fire("change");
  assert.ok(cards.every(c => c.hidden));
  assert.equal(ids["library-empty"].hidden, false);
  assert.equal(ids["library-count"].textContent, "0 of 3 sources shown");
  ids["year-filter"].value = "all";
  ids["topic-filter"].value = "all";
  ids["topic-filter"].fire("change");
  assert.equal(ids["library-empty"].hidden, true);
});

test("study content retains responsive one-column mobile presentation and labeled controls", () => {
  assert.match(css, /@media\(max-width:750px\)/);
  assert.match(css, /\.study-list,\.evidence-teasers\{grid-template-columns:1fr\}/);
  for (const id of ["library-search", "topic-filter", "year-filter", "discipline-filter"]) {
    assert.ok(html.includes('for="' + id + '"'), "Missing label for " + id);
  }
  assert.match(html, /id="library-count" role="status"/);
});
