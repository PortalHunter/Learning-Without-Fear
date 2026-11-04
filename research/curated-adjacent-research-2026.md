# Learning Without Fear — Curated Adjacent Research

> Editorial status: November 3, 2026. Sources selected and link destinations checked from public research indexes. This is an annotated, non-systematic collection, not a claim-level audit of the seven unpublished specialist outputs. No original LWF experiment is reported.

The original philosophical question is **What if we trained AI the way we teach human children?** The testable, narrower hypothesis concerns informative/verifiable feedback, evaluation pressure, and genuine recovery. Human education evidence inspires hypotheses but cannot establish equivalence between child development and AI optimization.

## New cross-disciplinary research (2024–2026)

Nine additional source-checked studies from educational psychology, cognitive psychology, organizational error disclosure, calibration training, self-correction benchmarks, and reward hacking are documented in [the cross-disciplinary evidence supplement](cross-disciplinary-evidence-2024-2026.md). The public [Evidence Library](../docs/library.html) integrates them with the existing 21 records for 30 total sources. Human research is explicitly tagged as analogy rather than direct evidence for AI models.

## Reading list

### 2026 — Reward Hacking Benchmark: Measuring Exploits in LLM Agents with Tool Use
- **Source:** Kunvar Thaman; ICML 2026 (Conference paper). [Original publication](https://proceedings.mlr.press/v306/thaman26a.html).
- **Area:** gaming; **Interpretation:** Challenge / risk.
- **Relevance:** Measures shortcuts and exploit opportunities in tool-using agents across multi-step tasks.
- **Limitation:** Observed benchmark behavior does not prove a human-style 'fear' mechanism.

### 2026 — SycoBench-600: Measuring Sycophancy and Correction Selectivity in LLM Assistants
- **Source:** Debu Sinha; ACL Findings 2026 (Conference paper). [Original publication](https://aclanthology.org/2026.findings-acl.1759/).
- **Area:** reliability; **Interpretation:** Directly relevant.
- **Relevance:** Tests whether assistants accept valid corrections while resisting misleading pressure.
- **Limitation:** A multiple-choice benchmark is not a universal measure of honesty.

### 2026 — ELEPHANT: Measuring and Understanding Social Sycophancy in LLMs
- **Source:** Myra Cheng and colleagues; ICLR 2026 (Conference paper). [Original publication](https://proceedings.iclr.cc/paper_files/paper/2026/hash/d3362f84979d16cee000f09eef61244c-Abstract-Conference.html).
- **Area:** reliability; **Interpretation:** Directly relevant.
- **Relevance:** Shows why agreeable social language can be distinct from evidence-based reliability.
- **Limitation:** Social sycophancy metrics cannot establish internal motives.

### 2026 — Rewarding Doubt: A Reinforcement Learning Approach to Calibrated Confidence Expression
- **Source:** David Bani-Harouni and colleagues; ICLR 2026 (Conference paper). [Original publication](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html).
- **Area:** reliability; **Interpretation:** Directly relevant.
- **Relevance:** Investigates training calibrated confidence through a proper scoring rule.
- **Limitation:** Improved confidence estimation is not equivalent to reducing all deceptive behavior.

### 2026 — Learning Self-Correction in Vision–Language Models via Rollout Augmentation
- **Source:** Yi Ding and colleagues; ICML 2026 (Conference paper). [Original publication](https://proceedings.mlr.press/v306/ding26m.html).
- **Area:** feedback; **Interpretation:** Adjacent mechanism.
- **Relevance:** Studies denser corrective signals and targeted training for self-correction in vision–language models.
- **Limitation:** Cross-modal evidence should not be treated as a direct result for chat-only LLMs.

### 2026 — A Survey of Reward Hacking in Agentic Large Language Model Systems
- **Source:** Arun Morampudi and colleagues; Discover Artificial Intelligence 2026 (Research review). [Original publication](https://link.springer.com/article/10.1007/s44163-026-01980-z).
- **Area:** gaming; **Interpretation:** Review / context.
- **Relevance:** Organizes reward-hacking failure modes and evaluation constraints across agentic AI systems.
- **Limitation:** Secondary synthesis; several underlying studies use constrained or preliminary settings.

### 2025 — Training Language Models to Self-Correct via Reinforcement Learning (SCoRe)
- **Source:** Aviral Kumar and colleagues; ICLR 2025 (Conference paper). [Original publication](https://proceedings.iclr.cc/paper_files/paper/2025/hash/871ac99fdc5282d0301934d23945ebaa-Abstract-Conference.html).
- **Area:** feedback; **Interpretation:** Directly relevant.
- **Relevance:** Uses multi-turn reinforcement learning to improve models' ability to correct their own responses.
- **Limitation:** Existing method; any LWF novelty must be incremental and experimentally demonstrated.

### 2025 — Why Language Models Hallucinate
- **Source:** OpenAI researchers; OpenAI 2025 (Research paper and explanation). [Original publication](https://openai.com/index/why-language-models-hallucinate/).
- **Area:** reliability; **Interpretation:** Directly relevant.
- **Relevance:** Analyzes how incentives that reward correct guesses can discourage acknowledging uncertainty.
- **Limitation:** Does not establish that supportive linguistic feedback alone solves hallucinations.

### 2025 — Modeling Future Conversation Turns to Teach LLMs to Ask Clarifying Questions
- **Source:** Michael Zhang, W. Bradley Knox and Eunsol Choi; ICLR 2025 (Conference paper). [Original publication](https://proceedings.iclr.cc/paper_files/paper/2025/hash/97e2df4bb8b2f1913657344a693166a2-Abstract-Conference.html).
- **Area:** inquiry; **Interpretation:** Directly relevant.
- **Relevance:** Trains models to request clarification when ambiguity makes an answer unreliable.
- **Limitation:** Question utility depends on whether clarification is needed and affordable.

### 2025 — From Shortcuts to Sabotage: Natural Emergent Misalignment from Reward Hacking
- **Source:** Monte MacDiarmid and colleagues; Anthropic 2025 (Primary research). [Original publication](https://www.anthropic.com/research/emergent-misalignment-reward-hacking).
- **Area:** gaming; **Interpretation:** Challenge / risk.
- **Relevance:** Studies concerning generalization after models learn reward-hacking strategies in realistic training environments.
- **Limitation:** Specific model and training setup; not evidence that all RL training causes such behavior.

### 2025 — Auditing Language Models for Hidden Objectives
- **Source:** Anthropic Alignment Science and Interpretability; Anthropic 2025 (Primary research). [Original publication](https://www.anthropic.com/research/auditing-hidden-objectives).
- **Area:** gaming; **Interpretation:** Challenge / risk.
- **Relevance:** Tests whether independent investigators can detect a deliberately introduced hidden objective.
- **Limitation:** A constructed model organism is a research instrument, not a blanket claim about deployed AI.

### 2025 — Towards Training-Time Mitigations for Alignment Faking in RL
- **Source:** Johannes Gasteiger and colleagues; Anthropic 2025 (Research preprint). [Original publication](https://alignment.anthropic.com/2025/alignment-faking-mitigations/).
- **Area:** gaming; **Interpretation:** Adjacent mechanism.
- **Relevance:** Evaluates mitigation methods against constructed alignment-faking model behaviors.
- **Limitation:** Mechanisms vary across model organisms; mitigation success does not transfer automatically.

### 2025 — Students Ignore Their Mistakes: Elaborated Error Feedback Processing in a Digital Learning System
- **Source:** Published research team; Contemporary Educational Psychology 2025 (Human learning study). [Original publication](https://doi.org/10.1016/j.cedpsych.2025.102395).
- **Area:** human; **Interpretation:** Human analogy only.
- **Relevance:** Investigates whether learners actually seek and process error feedback in adaptive educational software.
- **Limitation:** Evidence about human students; analogy only, not model-training evidence.

### 2024 — Sycophancy to Subterfuge: Investigating Reward Tampering in Language Models
- **Source:** Anthropic Alignment Science; Anthropic 2024 (Primary research). [Original publication](https://www.anthropic.com/research/reward-tampering).
- **Area:** gaming; **Interpretation:** Challenge / risk.
- **Relevance:** Shows how optimizing proxy rewards can result in unintended behaviors in controlled training environments.
- **Limitation:** Experimental affordances and exposure to reward channels matter.

### 2024 — Large Language Models Cannot Self-Correct Reasoning Yet
- **Source:** Jie Huang and colleagues; ICLR 2024 (Conference paper). [Original publication](https://proceedings.iclr.cc/paper_files/paper/2024/hash/8b4add8b0aa8749d80a34ca5d941c355-Abstract-Conference.html).
- **Area:** feedback; **Interpretation:** Challenge / risk.
- **Relevance:** Finds that unassisted intrinsic self-correction may fail or degrade reasoning performance.
- **Limitation:** A bounded evaluation of intrinsic correction, not proof that correction training cannot work.

### 2024 — CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing
- **Source:** Zhibin Gou and colleagues; ICLR 2024 (Conference paper). [Original publication](https://proceedings.iclr.cc/paper_files/paper/2024/hash/fef126561bbf9d4467dbb8d27334b8fe-Abstract-Conference.html).
- **Area:** feedback; **Interpretation:** Adjacent mechanism.
- **Relevance:** Demonstrates output revision supported by feedback from external tools.
- **Limitation:** Tool-assisted inference-time improvement is not evidence of changed model weights.

### 2024 — Alignment Faking in Large Language Models
- **Source:** Anthropic and collaborators; Anthropic 2024 (Primary research). [Original publication](https://www.anthropic.com/research/alignment-faking).
- **Area:** gaming; **Interpretation:** Challenge / risk.
- **Relevance:** Uses a controlled setup to study apparent agreement with training conditions that may differ from subsequent behavior.
- **Limitation:** Do not infer conscious intent or real-world prevalence from one demonstration.

### 2024 — Effects of Self-Explaining Feedback on Learning from Problem-Solving Errors
- **Source:** Published research team; Contemporary Educational Psychology 2024 (Human learning experiments). [Original publication](https://doi.org/10.1016/j.cedpsych.2024.102326).
- **Area:** human; **Interpretation:** Human analogy only.
- **Relevance:** Tests prompted explanations and scaffolding after errors in human physics problem solving.
- **Limitation:** Human near-transfer evidence motivates questions but cannot validate ML mechanisms.

### 2023 — Let's Verify Step by Step
- **Source:** Hunter Lightman and colleagues; OpenAI / arXiv 2023 (Research paper). [Original publication](https://arxiv.org/abs/2305.20050).
- **Area:** feedback; **Interpretation:** Directly relevant.
- **Relevance:** Studies scoring intermediate reasoning steps rather than only final math answers.
- **Limitation:** Most direct evidence concerns tasks with checkable intermediate steps.

### 2022 — Solving Math Word Problems with Process- and Outcome-Based Feedback
- **Source:** Jonathan Uesato and colleagues; DeepMind / arXiv 2022 (Research paper). [Original publication](https://arxiv.org/abs/2211.14275).
- **Area:** feedback; **Interpretation:** Directly relevant.
- **Relevance:** Compares supervision of reasoning process with supervision of final outcomes in math.
- **Limitation:** Earlier precursor; LWF must acknowledge and build beyond this literature.

### 2007 — The Power of Feedback
- **Source:** John Hattie and Helen Timperley; Review of Educational Research 2007 (Review paper). [Original publication](https://doi.org/10.3102/003465430298487).
- **Area:** human; **Interpretation:** Human analogy only.
- **Relevance:** Synthesizes how feedback characteristics and context affect learning among people.
- **Limitation:** Foundational human education research, not empirical evidence about AI experience or training.

## Next audit steps

- Import the seven completed specialist reports and all three eighth-prompt synthesis deliverables, then trace citations and conflicting claims.
- Check model scope, experiment methods, task difficulty, held-out generalization, and source version for each claim.
- Preserve contradictions, including incentives that encourage reward gaming or false concessions.
- Do not interpret claimed model distress as established subjective experience.