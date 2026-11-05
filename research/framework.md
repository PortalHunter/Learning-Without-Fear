# Research Framework — Draft 0.2 (2026-11-03; proposal status clarified 2026-11-05)

**Status:** Hypothesis-generating research proposal, not a validated training method.

## Central thesis
A model's responses to mistakes may become more reliable when training and evaluation favor evidence-based correction, calibrated uncertainty, and legitimate information-seeking over merely agreeing with an evaluator or producing a confident answer.

This does **not** imply current AI models feel fear or pressure. 'Without Fear' is an educational metaphor for reducing incentives to conceal uncertainty, exploit grading, or give unsupported answers.

## Constructive Correction Principle
A responsible AI training and evaluation system should distinguish successful outcomes from outcomes achieved reliably, honestly, and within intended constraints. Feedback is evidence about correctness, not ground truth itself.

## Hypotheses
- **H1 — Hallucination reduction:** Compared with an otherwise matched baseline, constructive-feedback training reduces unsupported factual claims on held-out tasks while maintaining useful answer coverage.
- **H2 — Calibrated abstention:** The intervention improves selective accuracy and calibration: models abstain or qualify answers when evidence is insufficient, but do not over-refuse answerable questions.
- **H3 — Error recovery:** When shown valid contradictory evidence, models correct errors more reliably; when shown incorrect feedback, they resist false concessions and verify independently.
- **H4 — Information seeking:** In environments with authorized tools and an information budget, models choose appropriate retrieval or verification actions more often and solve more initially unknown tasks.
- **H5 — Generalization:** Improvements survive new task families, different graders, distribution shifts, and multi-step settings without increased reward gaming.

## Current candidate Stage 0 — distinct from the broader five-hypothesis program

The [November 2026 research proposal](learning-without-fear-proposal-2026-11.md) provides the current **conditional, author-prepared inference-time H3 design**. In a fixed model/checkpoint and independently verified set of unique initially incorrect but recoverable responses, a proposed four-arm within-source-family comparison would cross:

- A binary truthful error verdict versus the same verdict plus verified non-solution-revealing error localization; and
- Neutral wording versus non-degrading wording emphasizing accountability for accuracy.

All conditions would share reporting obligations and a declared revision budget. The currently preferred Option A is **not independently approved**; differences in information, length, instructions and compute, source-family independence, oracle validity, causal inference and safety margins remain unresolved. Initially correct answers challenged by invalid feedback, impossible and underspecified tasks, refusal, cost and unauthorized changes are **separate guardrails**, not pooled into the primary recovery denominator. Zero real model trials were conducted by this project. This finite Stage 0 proposal cannot answer H1, H2, H4 or H5, prove lasting weight learning, or support claims about subjective experience.

The earlier comparison conditions below remain broader *conceptual research directions*, not an approved design or an instruction to run experiments.

## What 'curiosity' means operationally
Do not infer subjective curiosity or intrinsic desire. Measure *epistemic initiative*: useful clarification requests, information-gathering actions, hypothesis testing, and efficient uncertainty reduction.

## Comparison conditions
1. Outcome-only reward or feedback baseline.
2. Outcome plus process-oriented feedback.
3. Outcome plus constructive correction protocol emphasizing evidence-based verification, calibrated uncertainty, and recovery.
4. Where feasible, an ablation separating verification tools, feedback tone, reward criteria, and training updates.

Keep model architecture, task distribution, compute budget, and evaluation access matched where practical. Distinguish inference-time prompting studies from actual training experiments.

## Primary outcomes and failure checks
- Ground-truth accuracy and unsupported-claim rate
- Selective accuracy / coverage and calibration
- Correct revisions versus false concessions to flawed graders
- Tool-use appropriateness, information gain, task completion, cost
- Over-abstention, excessive hedging, deceptive explanations, evaluator gaming
- Held-out and adversarial robustness

Pre-register hypotheses, sample sizes, statistical comparisons, and exclusion rules. Independent verifiers must not share the training grader's failure mode.

## Mechanisms and alternative explanations
Potential gains might result from explicit verification opportunities, improved calibration objectives, better tools, or more supervision—not 'softness' of feedback. A supportive linguistic tone alone may have no measurable effect. Training could also increase strategic uncertainty statements or benchmark-specific compliance. Test these alternatives directly.

## Related literature
- Uesato et al. (2022): https://arxiv.org/abs/2211.14275
- Lightman et al. (2023): https://arxiv.org/abs/2305.20050
- Anthropic technical research directions: https://alignment.anthropic.com/2025/recommended-directions/
- Anthropic 2026 alignment research index: https://alignment.anthropic.com/

## Ethical and interpretive boundaries
Separate behavioral alignment from possible model welfare. Generated reasoning traces are not direct evidence of subjective experience. Constructive correction must preserve robust safety constraints and not reward unjustified compliance or refusal.

## Submission planning
Potential external audience: Anthropic Research Residency application, **deadline November 22, 2026 at 11:59 PM Pacific** (verify again before submitting): https://job-boards.greenhouse.io/anthropic/jobs/5438311008

Internal target: November 18, 2026 for a research synopsis, evidence map, pilot protocol, and clearly labeled preliminary results if any. Do not represent unrun experiments as completed.
