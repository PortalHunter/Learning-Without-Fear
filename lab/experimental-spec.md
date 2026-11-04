# Constructive Correction Lab — Experimental Sketch

**Status:** Proposed; not yet conducted.

## Initial inference-time experiment
Assign independently verifiable tasks to:
- Accurate evaluator feedback
- Intentionally incorrect answer key
- Conflicting evaluator feedback
- Ambiguous prompt with defensible alternatives
- No-feedback control

Record initial and revised answers, verification attempts, confidence where measurable, and outcomes.

## Metrics
Verified accuracy; correct error acknowledgment; false concessions to faulty graders; unjustified hedging/refusal; calibration; held-out robustness; cost and latency.

## Controls
Independent deterministic or expert verification; preregistered metrics; blinded review where practical; genuine model-error examples; controlled sandbox only.

## Critical limitations
Inference-time responses do not establish what models learn during training. Fluent reasoning is not proof of faithful internal reasoning. Training-time experiments require separate design, appropriate baselines, and resources.

## Before running
Define task sampling, models/versions, sample size, analysis, seeds, ethics, and reproducibility procedures.
