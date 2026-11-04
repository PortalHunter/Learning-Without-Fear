# Learning Without Fear — GitHub Pages website

This directory contains the standalone, dependency-free public education website.

## Pages
- index.html — the original philosophy and an illustrative, scripted feedback exercise
- research.html — research scope, provisional seven-track synopsis, status and methods
- voices.html — source-linked original videos and privacy-enhanced, click-to-load embedded YouTube videos
- library.html — an annotated library of 30 research publications with filters and explicit limitations

All resources are relative to this directory for compatibility with project sites at /Learning-Without-Fear/.

## Publishing

A publishing workflow is provided at `.github/workflows/pages.yml`. In GitHub Settings → Pages, select **GitHub Actions** as the source. The workflow serves this `docs/` folder without a framework build. If Pages is already configured for branch deployment, that alternative remains possible, but the automated workflow uses GitHub Actions.
The recommended path is **Settings → Pages → Build and deployment → Source → GitHub Actions**. The workflow `.github/workflows/pages.yml` automatically packages `/docs` and deploys on updates to `main`. Source `main` / `/docs` remains an alternative if you prefer branch-based publishing. A public Pages site does not imply that its source repository must be public on plans that support private-repository Pages.

The repository is publicly readable as of November 3, 2026. Public repository visibility does not itself enable GitHub Pages; the owner must select **GitHub Actions** under Settings → Pages → Source. The site is not confirmed deployed until the Pages workflow succeeds. Publication and licensing are separate decisions.

## Integrity and accessibility
- This site makes no claim of a tested intervention or completed project experiments.
- Research-track summaries were reconstructed from project conversation context; the full seven finished reports and the three completed integration deliverables from prompt 08 still require import and source-by-source verification.
- Media points to original publishers. No auto-play, tracking scripts, ads, or re-hosted footage.
- The demonstration is a deterministic local script, not a live AI evaluation.
- Uses semantic HTML, visible focus states, reduced-motion support and responsive layout.
- No build step, install, dependency or secret is required.

## Editorial follow-up
1. Import reports 01–07 under research/ with canonical names, plus the confirmed Prompt 08 synthesis when available.
2. Review each claim against its actual report and primary sources; add an evidence ledger that records disagreements and uncertainty.
3. Replace provisional report synopsis with claim-level linked evidence without silently increasing certainty.
4. Run independent accessibility and cross-browser tests; check live publication URL and links.
5. Add further verified video clips and captions without copying third-party footage.

## Featured Musk interview excerpt

The X Takeover 2026 YouTube interview (`tUHHZsN7tPM`) is embedded on the homepage and perspectives page with `data-start=2320` (38:40) and `data-end=2594` (43:14). The click-to-load player appends YouTube's absolute-second `start` and `end` parameters. A separate link to 38:10 invites viewers to compare the speaker's delivery before the question. Tone observations are attributed as interpretations, not empirical evidence that AI experiences fear or that any audience reaction is universal.
