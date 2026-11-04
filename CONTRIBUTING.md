# Contributing to Learning Without Fear

This is an early-stage research proposal, not a validated AI intervention. Prioritize accuracy, transparent uncertainty, attribution and reproducibility over publication speed.

## Lightweight GitHub Flow

1. Create a short-lived feature/..., research/... or fix/... branch from main.
2. Open a pull request with a concise scope and Given / When / Then acceptance criteria.
3. Allow the "Validate research site" GitHub Action to pass before merging.
4. The repository owner must explicitly sign off on *any* change to public research interpretation, attribution, experimental claims, or website content. A self-authored PR should record that decision in its description or a comment. An independent reviewer is valuable when available, but should not block a solo-maintainer workflow by default.
5. Merge only after validation and sign-off; keep main deployable. Use annotated milestone/release tags such as v0.1.0 and include change notes. Do not imply a research result is scientifically validated because it has a release number.

## Research acceptance criteria

For new or changed substantive research claims, document:

- Primary source URL, full bibliographic details, publication year and study type.
- What was actually measured, what was inferred, and the relevant limitations.
- Whether the source supports, challenges, or only motivates the hypothesis.
- The specific project hypothesis or experimental design decision affected.
- A human review of the source and quotation/attribution before publishing.

Never describe an unrun experiment as a result or claim that human learning research demonstrates subjective experience in current AI models. Distinguish inference-time responses from model-weight updates. Don't imply a collaborator's endorsement, consent or participation without explicit authorization.

For public-facing changes, verify local navigation, keyboard access, alternative text, external links and the source counter. Existing tests check syntax, local targets, source entry completeness, and three illustrative demonstration cases; they cannot validate the scientific truth of research claims or whether all external citation links remain accessible.

## Privacy and ethical boundaries

Do not add tracking, analytics, personal data collection, identifiable case studies, unpublished collaborator materials, or third-party source content without a deliberate privacy/consent/license review. Any human-subject or model-training experiment should have its own protocol, ethics review where appropriate, independent verification and data-handling plan.

## Repository settings (owner action)

In GitHub Settings > Rules > Rulesets, create a rule targeting main that requires pull requests and the passing "validate" status check. Start with zero required approvals while there is only one maintainer; introduce independent review requirements once reviewers are available. Avoid bypasses if direct pushes must truly be prohibited. The connector used to prepare this change cannot write repository rulesets, so settings must be enabled in GitHub directly.

GitHub Pages currently publishes from main. It also reruns these same checks before deployment; this prevents the deployment workflow from uploading an unchecked site. PR checks protect proposed changes, while the repository ruleset is necessary to prevent direct pushes.

## Release / rollback

For a substantial published milestone, review the merged main commit, record a version tag and release notes linking evidence changes and limitations, and verify the live Pages build. Roll back with a new revert commit and PR rather than rewriting public history. For accidental publication of secrets or private information, follow a dedicated security remediation procedure; reverting does not remove the information from Git history.
