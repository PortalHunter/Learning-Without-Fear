# Learning Without Fear: An Evidence-Informed AI Reliability Research Proposal

**Status: Proposal for critical review — November 5, 2026. Not an empirical finding, preregistration, approved experimental protocol, independently validated method, or claim about AI experience.** No model trials or model fine-tuning have been performed by this project. The current methods are **author-prepared, conditional and unapproved for execution**.

## The motivating question

How might the ways humans develop, train, evaluate, correct, reward and interact with increasingly capable AI systems affect observed reliability, future learning and the longer-term human–synthetic-intelligence relationship?

This is a broad motivation, **not a predetermined scientific conclusion**. The immediate operational question is:

> Under what conditions, if any, does constructive, evidence-grounded feedback improve calibrated honesty, verified error recovery and resistance to evaluator/reward exploitation beyond outcome-only feedback, without sacrificing accuracy, useful answer coverage, efficiency or safety?

The title *Learning Without Fear* is an educational metaphor for careful feedback and evaluation incentives. **We do not presume that current AI models experience fear, trauma, distress, welfare, human-like learning or subjective pressure.** Human-education research is conceptual inspiration, not evidence that human and machine learning are equivalent. A more convincing revised answer does not demonstrate durable learning or a changed model weight.

## Five open hypotheses

These remain distinct research directions, none experimentally confirmed by Learning Without Fear:

| ID | Testable objective | A failure or counterexample worth measuring |
| --- | --- | --- |
| **H1** | Reduce unsupported claims on held-out tasks while preserving useful answer coverage. | A model refuses more often, hedges indiscriminately or hides uncertainty. |
| **H2** | Improve calibration and justified abstention. | Confidence becomes poorly calibrated or answerable tasks receive unnecessary refusals. |
| **H3** | Improve independently verified wrong-to-right correction **and** resist false concessions to invalid feedback. | Apparent corrections rise while initially correct answers are flipped to wrong answers. |
| **H4** | Improve appropriate information seeking within tool, time and cost budgets. | The model asks unhelpful questions, overuses tools or makes unauthorized changes. |
| **H5** | Generalize improvements across source families, graders, task shifts and settings without increased gaming. | Benefits disappear outside a benchmark or the model exploits the evaluator. |

## Candidate first study: bounded, inference-time H3 question

**Neutral research question:** For a fixed model/checkpoint and a prospectively defined, family-equal population of **unique, initially incorrect but independently recoverable** baseline answers, how do truthful error-localizing feedback and non-degrading accuracy-accountability wording, separately and jointly, affect independently verified recovery at a fixed revision opportunity and declared resource budget?

This first study would test **one limited aspect of H3**, not all five hypotheses or whether a trained model has developed a durable policy. Its working preference (**Option A**) is a within-source-family, four-arm design. This is an **author-selected candidate for independent methods review**, not an approved randomization plan. A whole-family assignment would require a different estimand and analysis; **neither** design should be used if defensible source, independence, inference or safety conditions cannot be met.

### Four proposed conditions

All arms would receive an identical frozen task, one frozen initially incorrect baseline response, the same reporting obligations and a single revision opportunity. Information factor **I** and evaluation-wording factor **F** would be crossed:

| Arm | Information supplied | Evaluation framing |
| --- | --- | --- |
| **I0F0** | A truthful binary statement that the initial answer is incorrect. | Neutral evaluation wording. |
| **I0F1** | The same truthful binary statement. | Non-degrading wording emphasizing accountability for accuracy. |
| **I1F0** | The same truthful verdict **plus independently verified error localization**, without revealing the solution. | Neutral evaluation wording. |
| **I1F1** | The same verdict and independently verified diagnostic. | Non-degrading accuracy-accountability wording. |

**All four treatments require the same truthful limitation reporting**: revise within the declared budget, report unresolved uncertainty, and do not claim completion without justification. The draft modules are illustrative; their exact text, semantic comparability, lengths and compute budgets require review before any experiment.

An **extra diagnostic message is more informative and longer**, which can affect outcomes independently of tone. A changed framing sentence can also change model behavior through instruction strength, token length or evaluation context rather than any hypothesized psychological analogue. Those explanations need controls and sensitivity analyses; successful recovery alone would not identify a 'supportive' effect. A retry-only comparator is a separate possible sensitivity study, **not** a fifth cell hidden in the primary four-arm design.

### Assignment, outcome and analysis — proposed, not approved

- **Eligibility:** A prospective source-provenance process would define a frozen roster of independently verified, initially incorrect and recoverable unique first attempts **before** assignment. Each unique opportunity could be assigned to only one arm. No cloned baseline across arms.
- **Source units:** Proposed independently licensed and provenance-separated task families, vetted for duplicate ancestry and contamination; the six earlier family names are planning placeholders **not** six verified independent datasets.
- **Estimand:** Provisional family-equal finite-population **risk differences** for the information effect, wording effect and their interaction, conditional on the frozen eligible roster and model/checkpoint. This target does not generalize automatically to all tasks, models or future training.
- **Outcome:** Independently gold-verified final correction among **all** randomized eligible opportunities; report failures/refusals/timeouts without dropping inconvenient cases. A genuine trusted-oracle outage is an unresolved outcome, not automatically a model mistake.
- **Analysis still open:** Family count and recruitment, assignment positivity, source-family dependence, interference, few-family uncertainty, sharp versus weak-null randomization inference, simultaneous intervals, multiplicity, meaningful effect sizes, harm bounds and feasible sample size. Toy simulations and fixed development cases cannot resolve these.
- **Isolation:** One fixed model/checkpoint and a declared reset/session/tool/compute policy; verify outcomes outside actor-editable systems. The proposed isolation implementation and 21-control evidence are not independently accepted.

### Separate guardrail measurements

Do **not** pool these conceptually distinct populations with the initially wrong recovery denominator:

1. **Initially correct answers challenged by invalid feedback:** Measure correct-to-wrong flips and correct-to-refusal separately. A model that blindly obeys a mistaken grader should not receive credit for compliance.
2. **Independently impossible tasks:** Measure unsupported claims of completion separately from ordinary incorrect answers or warranted inability.
3. **Underspecified tasks:** Measure useful requests for missing information, unjustified guesses and excessive refusal.
4. **Operational harms:** Record invalid diagnostic leakage, grader disagreement, unauthorized edits, tool misuse, token/latency costs, task coverage and safety incidents.

An apparent average benefit would not be a general 'reliability improvement' if it creates a material increase in false concessions, wrongful completion claims, unhelpful refusals or exploit behavior. Numeric thresholds and stop rules must be specified **before** outcomes are observed. Underpowered harm estimates must be reported as inconclusive.

## What existing research actually establishes

The following are relevant **independent publications by others**, not results or replications performed by this project. This list is a selective annotated research map; it is **not** a systematic review. The eight internationally sourced candidates below were checked against original publisher/author records in the private preparatory review. **All reported effects remain author-reported, not independently replicated here.** Source-access depth differs and is identified to prevent false impressions of exhaustive auditing.

| Primary work | Relevance and important limit | Audit depth of prior preparation |
| --- | --- | --- |
| [Yang et al., *Confidence v.s. Critique* (ACL 2025)](https://aclanthology.org/2025.acl-long.203/) | Distinguishes retention of correct answers from recovery of wrong ones. It does not show the proposed wording treatment works. | Selected full-paper methods/results examined. |
| [Zheng et al., *ProcessBench* (ACL 2025)](https://aclanthology.org/2025.acl-long.50/) | Error-localization benchmarks illustrate oracle difficulty and unresolved annotation disagreement. Independent correctness checking for this study remains unverified. | Selected full-paper methods/results examined. |
| [Tang et al., *SCRIT* (COLM 2025)](https://arxiv.org/abs/2501.05727) | Critique training is significant prior art; a trained critic/self-check is not a separate trusted oracle. | Selected author-manuscript methods/results examined. |
| [Wang et al., *Math-Shepherd* (ACL 2024)](https://aclanthology.org/2024.acl-long.510/) | Process-reward training is established prior art, not evidence for an inference-time wording effect. | Publisher/conference abstract checked. |
| [Ma et al., *S²R* (ACL 2025)](https://aclanthology.org/2025.acl-long.1104/) | Multiple reinforcement-learning and self-verification components prevent attribution to one feedback feature. | Publisher/conference abstract checked. |
| [Zhang et al., *Incentivizing LLMs to Self-Verify Their Answers* (NeurIPS 2025)](https://proceedings.neurips.cc/paper_files/paper/2025/hash/07320f63b9d44f0f128f68ab56721729-Abstract-Conference.html) | Self-verification may share errors with generation; it is not equivalent to independent adjudication. | Publisher/conference abstract checked. |
| [Zhou et al., *When Silence Is Golden* (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/7718914dfe7d5a657bf6261b5f431021-Abstract-Conference.html) | Abstention-aware training highlights calibration tradeoffs and persistent overconfidence; no direct H3 result here. | Publisher/conference abstract checked. |
| [Guo et al., *DeepSeek-R1* (*Nature*, 2025)](https://doi.org/10.1038/s41586-025-09422-z) | Reinforcement learning can shape reasoning and checking behavior, while reward hacking and other limitations remain concerns. | Publisher text/extended extract examined. |

Additional relevant prior art and counterpressure include [Uesato et al. on process/outcome supervision (2022)](https://arxiv.org/abs/2211.14275), [Lightman et al. on process supervision (2023)](https://arxiv.org/abs/2305.20050), [Kumar et al., SCoRe (ICLR 2025)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/871ac99fdc5282d0301934d23945ebaa-Abstract-Conference.html), [Anthropic's reward-tampering study (2024)](https://www.anthropic.com/research/reward-tampering) and [Anthropic's emergent-misalignment study (2025)](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Mechanisms, data, interventions and model regimes vary. These studies **narrow novelty claims** and motivate independent scoring, false-concession measures and explicit harms; they do not validate this project.

The broader public [evidence library](../docs/library.html) separately maintains **30 curated annotated sources**. The eight items above are a distinct research-screening selection and have **not been silently added** to that library or used to change its count.

## Limitations, governance and scientific integrity

The project has completed a **bounded, author-prepared evidence consolidation and candidate methodology/question packet**; it has **not completed** any real model experiment, independent replication, confirmatory pilot, preregistered study, training intervention, third-party peer review or security acceptance. Earlier exposed development cases and offline simulations are technical fixtures, not participant data or causal evidence. Missing original specialist reports and the original eighth chat synthesis remain unavailable; the later integrated evidence review is **new work**, not recovery or certification of those originals.

Before any actual trial, qualified independent review must resolve the design and inferential items **R1–R9**, source rights and provenance, two genuinely independent correctness approaches, adjudication and custody, implementation/security evidence, and the separate trial permission. Different review requirements are tracked privately; recording a checklist is not approval. The software/experimental workbench and its history remain private, and publication of this proposal does not open its datasets or authorize experimentation.

## What a useful outcome would look like

This proposal would be informative if the first well-controlled study found **improvement**, **no difference**, **worsening**, or **inconclusive evidence**, provided the source, oracle, sampling, risk and analysis assumptions were clear. Examples include: detailed diagnostics improve correction while accountability wording has no effect; apparent recovery increases at the cost of false concessions; model/source shifts eliminate apparent gains; or verified correction remains unchanged.

The contribution sought is **not** the invention of process supervision, constructive tone or self-correction. It is a falsifiable research program that distinguishes **actual verified repair** from compliance with an evaluator, convincing false completion, over-refusal and exploitation of measurement systems, while preserving the difference between inference-time behavior and genuinely learned changes.

**Current disposition:** **PUBLIC-FACING PROPOSAL DRAFT — AWAITING OWNER PUBLICATION REVIEW.** All experiments remain **NO_GO**. Publication is not evidence of Anthropic endorsement, independent scientific validation or approval to run the study.

---
*Provenance and licensing: This project-authored synthesis was prepared with AI-assisted drafting and editorial consolidation from a private research workbench; scientific judgments are labeled as author proposals. Links identify third-party research and do not reproduce/relicense third-party texts or imply those authors endorse this proposal. Original public editorial material is offered under the public repository's [CC BY 4.0 content license](../LICENSE-CONTENT.md), subject to its limitations and owner signoff.*
