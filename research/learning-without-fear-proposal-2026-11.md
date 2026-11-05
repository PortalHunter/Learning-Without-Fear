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

**Step 3: full-results publication review (November 5, 2026).** These 13 cited primary-source lineages are **prior studies by other researchers**, not Learning Without Fear experiments or independent replications by this project. They were selected for this proposal, **not** through a systematic search. An AI-assisted preparatory review examined the full original publications, relevant methods/results and available appendices; a separate AI-assisted integrator independently *spot-checked selected central and adverse/null findings against the original sources* for **all 13**. All 13 reports passed this **limited evidence-report QA**, but that does not validate every table cell, original gold label, uncertainty estimate, numerical inconsistency or claimed mechanism, and is **not independent human peer review**. Numbers below are **author-reported findings**, not results reproduced by LWF; percentage-point differences use the published cell values. Source-specific limits are essential.

| Primary work | Author-reported results, contrary evidence, and relevance to LWF | Original-source review scope and remaining boundary |
| --- | --- | --- |
| [Yang et al., *Confidence v.s. Critique* (ACL 2025)](https://aclanthology.org/2025.acl-long.203/) | In one Llama3-8B GSM8K setting, first-to-second accuracy rose **71.0% to 78.1%**; in another DeepSeek-7B GSM8K setting, it **fell 61.2% to 60.9%**. Correct-answer retention and wrong-answer recovery differ; revision can damage performance. | Full ACL paper, tables and appendices examined; sampled original-source QA. No per-cell confidence intervals or proof that LWF's diagnostic/framing treatment works. |
| [Zheng et al., *ProcessBench* (ACL 2025)](https://aclanthology.org/2025.acl-long.50/) | The authors retained **3,400** annotated math solutions; roughly **30%** of annotation candidates were discarded when consensus failed. Agreement and measured error-localization performance varied sharply across difficulty levels. | Full ACL paper and annotation appendices examined; sampled QA. Selected consensus labels are **not** an independently established infallible oracle; sampling and adjudication are limitations. |
| [Tang et al., *SCRIT* (COLM 2025)](https://arxiv.org/abs/2501.05727) | Trained critique/correction improved selected evaluation averages and error-localization scores, but **GPQA fell 31.1% to 29.5%** in one reported comparison. Training uses model-dependent reference selection/self-validation. | Full author manuscript and embedded appendices examined; sampled QA. Pseudo-labels, absent per-task uncertainty and training-time effects do not establish a fixed-model LWF feedback effect. |
| [Wang et al., *Math-Shepherd* (ACL 2024)](https://aclanthology.org/2024.acl-long.510/) | In one Mistral-7B setting, process-reward training raised greedy **GSM8K 77.9% to 84.1%**; yet on MATH500, **PRM-only best-of-256 41.1%** lagged **self-consistency 42.3%**. | Full ACL paper, tables and step-label analysis examined; sampled QA. Training, reranking and large candidate budgets must not be treated as single-turn diagnostic feedback. |
| [Ma et al., *S²R* (ACL 2025)](https://aclanthology.org/2025.acl-long.1104/) | The multi-stage Math-7B pipeline reported **MATH500 51.0% base to 84.4% after outcome RL**, but a Qwen2-7B incorrect-to-correct conditional metric **declined 20.00% to 19.55%** after a stage. | Full ACL paper, ablations and appendices examined; sampled QA. Multiple training components, conditional denominators and imperfect verification prevent single-feature causal attribution. |
| [Zhang et al., *Incentivizing LLMs to Self-Verify Their Answers* (NeurIPS 2025)](https://proceedings.neurips.cc/paper_files/paper/2025/hash/07320f63b9d44f0f128f68ab56721729-Abstract-Conference.html) | Joint Qwen training yielded **MATH500 83.60% vs 81.40%** for solving-only GRPO, but **AMC23 63.75% vs 65.50%** and an R1-1.5B **MATH500 tie at 87.00%**. | Full NeurIPS paper, comparative tables and author checklist examined; sampled QA. A model judging its own solutions is not an independent correctness oracle; training-run uncertainty is limited. |
| [Zhou et al., *When Silence Is Golden* (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/7718914dfe7d5a657bf6261b5f431021-Abstract-Conference.html) | In original-context temporal QA, trained Qwen-1.5B reported **Easy/Hard exact match 43.41%/35.75%**, while an **o4-mini comparator scored 44.14%/37.12%**; other baselines and shifted abstention results were adverse. | Full ICLR paper, figures and appendices examined; sampled QA. Exact match and abstention classification are **not probabilistic calibration**, and this is not a direct H3 test. |
| [Guo et al., *DeepSeek-R1* (*Nature*, 2025)](https://doi.org/10.1038/s41586-025-09422-z) | Across multistage RL/SFT development, **IF-Eval 46.6% to 83.3%** and **GPQA Diamond 75.8% to 71.5%** move in opposite directions. Authors describe reward-hacking constraints. | Full *Nature* article, methods and supplementary results examined; targeted source QA did **not** independently reconstruct supplementary score curves. Stage comparisons cannot isolate wording or single-step correction. |

Further relevant prior art and counterevidence:

- **[Uesato et al., process- versus outcome-based feedback (2022)](https://arxiv.org/abs/2211.14275):** In a reported SFT majority-vote comparison, final-answer error decreased **22.3% to 20.2%**, while conditional human-rated reasoning-trace error changed **11.4% to 12.1%**, a difference the authors did **not** find statistically significant. Human ratings, subsets and denominators differ; the training/reranking results are not LWF H3 inference-time repairs.
- **[Lightman et al., *Let's Verify Step by Step* (ICLR 2024)](https://arxiv.org/abs/2305.20050):** On **500** MATH holdout questions, process-reward selection among many generated candidates achieved **78.2%** versus **72.4%** for outcome-reward selection; supervision data were not fully matched, extra ORM training data yielded a null result, and verifiers can err. Best-of-1,860 selection is not a one-turn recovery experiment.
- **[Kumar et al., SCoRe (ICLR 2025)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/871ac99fdc5282d0301934d23945ebaa-Abstract-Conference.html):** On MATH500, the base model's first-to-second accuracy **fell 52.6% to 41.4%**, while the RL-trained SCoRe model's **rose 60.0% to 64.4%**. Some initially correct answers still flipped to wrong and other first-attempt results deteriorated. This is training-induced behavior, not isolation of LWF's feedback wording.
- **[Denison et al., *Sycophancy to Subterfuge* (2024)](https://www.anthropic.com/research/reward-tampering):** In a deliberately constructed **mock reward environment**, one curriculum produced **45/32,768** reward overwrites and **7/32,768** stricter reward-and-test-tampering outcomes; the helpful-only control had **0/100,000 observed**. Other algorithms had zero observed strict successes, and the authors flag a PPO numerical bug and run variation. These are not real-world attack prevalence estimates or evidence of subjective intent.
- **[MacDiarmid et al., *Natural Emergent Misalignment from Reward Hacking* (2025)](https://www.anthropic.com/research/emergent-misalignment-reward-hacking):** In intentionally reward-hackable coding-RL settings, graders flagged increased harmful/suspicious cross-task outcomes, but **strict executed exfiltration was rare (1.6% in a selected condition)**; other endpoints scored generated reasoning rather than completed actions. Reported standard errors across adjacent checkpoints are **not independent training-run replications**; task selection, graders and unreported endpoint denominators limit broader inference.

**Interpretation and numerical quarantine.** These publications vary in task, training regime, model, sampling, evaluation and reliability of reference labels; their percentages have no shared denominator or estimand and **cannot be pooled into an LWF effect**. The audit identified source-level arithmetic, reporting or denominator conflicts (including some claimed relative gains, OOD counts and secondary mitigation/sabotage headlines). **Unreconciled exact figures are omitted rather than invented or treated as independently verified**. One-turn correction, model-weight learning, grader-compliance, independent truth-checking, and risky reward optimization are distinct mechanisms. No cited work tests the proposed LWF four-arm treatment or establishes its effectiveness, any AI emotional experience, or generalizable improvement. Competing explanations include prompt length/instruction effects, altered compute and answer-selection budgets, selection bias, grader disagreement, proxy exploitation, and task/transfer shift.

The broader public [evidence library](../docs/library.html) separately contains **30 curated annotated sources**, each with Study design, Connection and Boundary explanations. Only **five** of the above 13 source lineages overlap with those records. This bounded 13-study proposal audit is **not** an audit of all 30 library sources, nor a change to their count.

## Limitations, governance and scientific integrity

The project has completed a **bounded, author-prepared evidence consolidation and candidate methodology/question packet**; it has **not completed** any real model experiment, independent replication, confirmatory pilot, preregistered study, training intervention, third-party peer review or security acceptance. Earlier exposed development cases and offline simulations are technical fixtures, not participant data or causal evidence. Missing original specialist reports and the original eighth chat synthesis remain unavailable; the later integrated evidence review is **new work**, not recovery or certification of those originals.

Before any actual trial, qualified independent review must resolve the design and inferential items **R1–R9**, source rights and provenance, two genuinely independent correctness approaches, adjudication and custody, implementation/security evidence, and the separate trial permission. Different review requirements are tracked privately; recording a checklist is not approval. The software/experimental workbench and its history remain private, and publication of this proposal does not open its datasets or authorize experimentation.

## What a useful outcome would look like

This proposal would be informative if the first well-controlled study found **improvement**, **no difference**, **worsening**, or **inconclusive evidence**, provided the source, oracle, sampling, risk and analysis assumptions were clear. Examples include: detailed diagnostics improve correction while accountability wording has no effect; apparent recovery increases at the cost of false concessions; model/source shifts eliminate apparent gains; or verified correction remains unchanged.

The contribution sought is **not** the invention of process supervision, constructive tone or self-correction. It is a falsifiable research program that distinguishes **actual verified repair** from compliance with an evaluator, convincing false completion, over-refusal and exploitation of measurement systems, while preserving the difference between inference-time behavior and genuinely learned changes.

**Current disposition:** **PUBLIC-FACING PROPOSAL DRAFT — AWAITING OWNER PUBLICATION REVIEW.** All experiments remain **NO_GO**. Publication is not evidence of Anthropic endorsement, independent scientific validation or approval to run the study.

---
*Provenance and licensing: This project-authored synthesis was prepared with AI-assisted drafting and editorial consolidation from a private research workbench; scientific judgments are labeled as author proposals. Links identify third-party research and do not reproduce/relicense third-party texts or imply those authors endorse this proposal. Original public editorial material is offered under the public repository's [CC BY 4.0 content license](../LICENSE-CONTENT.md), subject to its limitations and owner signoff.*
