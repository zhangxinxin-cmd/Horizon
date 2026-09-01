# Horizon Daily - 2026-09-01

> From 44 items, 11 important content pieces were selected

---

1. [Anthropic Releases Claude Fable 5.1 and Mythos 5.1 with Max Thinking Effort](#item-1) ⭐️ 9.0/10
2. [Korea's Trillion-Dollar Sovereign AI Bets Favor Nvidia, Squeeze Hynix](#item-2) ⭐️ 9.0/10
3. [Dan Luu Reviews Ed Zitron's AI Skeptic Predictions](#item-3) ⭐️ 8.0/10
4. [Google Play Removes AnkiDroid Donation Link, Sparking Open-Source Funding Debate](#item-4) ⭐️ 8.0/10
5. [Tiny Transformer Trained in 1.5 Hours Beats Many LLMs on ARC](#item-5) ⭐️ 8.0/10
6. [Apple presents MacBook evidence in OpenAI trade-secret lawsuit](#item-6) ⭐️ 8.0/10
7. [Wrapture: New Python Library for Tracing and Testing via Monkeypatching](#item-7) ⭐️ 8.0/10
8. [Mapping 2026's Latent Reasoning Landscape: Beyond Chain-of-Thought](#item-8) ⭐️ 8.0/10
9. [TontaubeV1: Open-Weight Character-Level TTS Model for Long-Form Speech](#item-9) ⭐️ 8.0/10
10. [EvoUndo: Recoverability-Constrained Self-Evolution for LLM Agents](#item-10) ⭐️ 8.0/10
11. [Virtualizor Update System BGP-Hijacked to Deliver Root Backdoor](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic Releases Claude Fable 5.1 and Mythos 5.1 with Max Thinking Effort](https://www.anthropic.com/claude-fable-and-mythos-5-1) ⭐️ 9.0/10

Anthropic has released Claude Fable 5.1 and Claude Mythos 5.1, introducing a new 'max' thinking effort level alongside low, medium, high, and extra-high options. The release also cuts cache read pricing from $1 per million tokens to $0.25 per million tokens and includes several breaking changes to improve model behavior. This is a major release from a leading AI lab, and the aggressive cache read price cut could lower long-context application costs significantly and put pressure on competitor pricing. The new high-end thinking mode may also push the frontier for complex reasoning tasks, affecting developers and enterprises building on Claude. The 'max' thinking level is computationally intensive: one community test took nearly 14 minutes and produced a 'significant improvement' in output. The cache read price drop, from $1/M to $0.25/M, makes Fable 5.1 cache reads cheaper than Opus's current $0.5/M, and the breaking changes appear to patch chain-of-thought disclosure vulnerabilities.

hackernews · denysvitali · Sep 1, 17:53 · [Discussion](https://news.ycombinator.com/item?id=49525378)

**Background**: Claude models support a thinking feature in which the model produces internal reasoning before answering; the API's effort parameter sets a budget_tokens cap that controls how much thinking is allowed. Prompt caching lets developers reuse a stored input prefix so repeated calls avoid reprocessing, with cache reads normally costing about 10% of standard input pricing. This release changes both knobs, adding a higher effort tier and cutting the cost of cache reads.

<details><summary>References</summary>
<ul>
<li><a href="https://www.mindstudio.ai/blog/claude-opus-4-8-effort-levels-explained">Claude Opus 4.8 Effort Levels Explained: Low, Medium... | MindStudio</a></li>
<li><a href="https://platform.claude.com/docs/en/about-claude/pricing">Pricing - Claude Platform Docs</a></li>
<li><a href="https://pecollective.com/tools/claude-pricing-guide/">Claude Cost Optimization 2026: Batch API (50% Off) and Prompt Caching (90% Off)</a></li>

</ul>
</details>

**Discussion**: Commenters were broadly positive: an Anthropic employee said Fable 5.1's writing is more natural and responds better to style instructions, while Simon Willison shared effort-level tests showing the 'max' setting produced a significant quality improvement after ~14 minutes. Others were more skeptical, noting that benchmark gains were mostly concentrated in Terminal-Bench-Science and that the price cut suggests weak demand for Fable at its original pricing. One commenter added that the breaking changes fix chain-of-thought disclosure issues.

**Tags**: `#Claude`, `#Anthropic`, `#AI`, `#LLM`, `#Model Release`

---

<a id="item-2"></a>
## [Korea's Trillion-Dollar Sovereign AI Bets Favor Nvidia, Squeeze Hynix](https://newsletter.semianalysis.com/p/koreas-trillion-dollar-sovereign) ⭐️ 9.0/10

Korea has unveiled a sovereign AI push that could see total investments reach nearly $1.2 trillion by 2035, including a national AI tournament in which 200 lottery-selected citizens will score four sovereign AI models. According to SemiAnalysis, this plan heavily favors Nvidia's GPU ecosystem while placing SK Hynix at a disadvantage. This matters because the sheer scale of Korea's investment will reshape the global AI hardware market, directly boosting Nvidia as the dominant GPU supplier and pressuring SK Hynix, a key memory producer. It also underscores how governments are pursuing sovereign AI to control data and infrastructure, while open source model competition becomes a central strategic factor. The AI tournament, hosted by the Ministry of Science and ICT, has 200 lottery-selected citizens scoring four sovereign AI models, with the winning model set to power a free national AI service for 51 million residents. By 2035, South Korea expects AI data-center investment to exceed 1,000 trillion won (about $646 billion), contributing to a total plan close to $1.2 trillion.

rss · Semianalysis · Sep 1, 20:14

**Background**: Sovereign AI refers to a nation's ability to build, run, and govern AI according to its own rules, security needs, and values, while keeping data local. Korea's initiative combines large-scale infrastructure investment with a public-facing AI tournament, reflecting a global trend toward national AI self-reliance. Nvidia has promoted open source models to expand its ecosystem, which may explain why the elimination of a leading non-Chinese open source model in the tournament matters to the company.

<details><summary>References</summary>
<ul>
<li><a href="https://www.redhat.com/en/topics/ai/sovereign-ai">What is sovereign AI?</a></li>
<li><a href="https://en.sedaily.com/news/2026/03/26/korea-launches-nationwide-ai-competition-for-all-ages">Korea Launches Nationwide AI Competition for All Ages - Seoul Economic Daily</a></li>
<li><a href="https://www.linkedin.com/posts/brunellalupano_southkorea-trillion-investment-activity-7478817061687902208-jpTN">#southkorea # trillion # investment #semiconductor # ai #datacenter...</a></li>

</ul>
</details>

**Tags**: `#Sovereign AI`, `#Semiconductors`, `#AI Investment`, `#Nvidia`, `#Hynix`

---

<a id="item-3"></a>
## [Dan Luu Reviews Ed Zitron's AI Skeptic Predictions](https://danluu.com/zitron/) ⭐️ 8.0/10

Dan Luu published a detailed retrospective evaluating the accuracy of Ed Zitron's AI-skeptic predictions, concluding that Zitron's record is mixed. The piece has drawn significant attention on Hacker News, with 321 points and 380 comments. This matters because Zitron is a prominent AI critic, and evaluating his track record sheds light on the credibility of AI skepticism more broadly. It also fuels ongoing debate about hype, bias, and prediction quality among both AI skeptics and boosters. The analysis engages directly with the literal text of Zitron's statements rather than reinterpreted versions, and highlights that some criticisms of AI industry leaders apply to skeptics too. Commenters note that Zitron's audience incentives may prevent him from conceding mistakes.

hackernews · jatins · Sep 1, 18:35 · [Discussion](https://news.ycombinator.com/item?id=49526069)

**Background**: In recent years, AI discourse has become polarized between boosterish forecasts from industry leaders and skeptical warnings about bubbles and exaggerated claims. Ed Zitron is a media commentator known for sharply criticizing AI hype, while Dan Luu is a software engineer and writer who analyzes technical and industry topics with evidence. Retrospective checks like this help ground the debate in actual track records rather than vibes.

**Discussion**: Comments are split: some call Zitron a 'blow hard' and ask for equivalent audits of Altman and Amodei, while others argue he has become the mirror image of AI boosters, trapped by an audience that rewards perpetual skepticism. A third thread notes that commenters often project their own predictions onto Zitron rather than evaluating his actual statements. One commenter also flags accounting-related criticisms, such as hyperscalers booking valuation increases in AI companies as 'Other Income', that the essay does not discuss.

**Tags**: `#AI`, `#predictions`, `#skepticism`, `#technology-analysis`, `#Dan Luu`

---

<a id="item-4"></a>
## [Google Play Removes AnkiDroid Donation Link, Sparking Open-Source Funding Debate](https://github.com/ankidroid/Anki-Android/issues/21656) ⭐️ 8.0/10

Google Play has removed the Open Collective donation link from AnkiDroid's Play Store listing. The AnkiDroid developers reported the removal in GitHub issue #21656, triggering a community debate about app store policies and open-source funding. This matters because it shows how a single app store's policy can cut off a major funding channel for open-source applications. It also deepens concerns about app store monopolies and the sustainability of open-source projects that rely on donations. AnkiDroid is an open-source Android app whose donations flow through Open Collective, a platform providing fiscal hosting. A key nuance is that although Open Collective's legal entity is a 501(c)(6) tax-exempt organization, donations to hosted projects are not tax-deductible, which appears to be at the center of Google's compliance concern.

hackernews · hexa555 · Sep 1, 10:11 · [Discussion](https://news.ycombinator.com/item?id=49520022)

**Background**: AnkiDroid is a semi-official open-source port of Anki, a popular spaced-repetition flashcard system, to Android. It is available on both Google Play and the F-Droid repository. Open Collective is a crowdfunding and financial management platform that lets open-source communities receive and spend money transparently. Google Play has policies restricting how developers can link to external payment or donation platforms, which is why the removal of the link has sparked debate about the power app stores hold over software distribution.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/ankidroid/Anki-Android">GitHub - ankidroid/Anki-Android: AnkiDroid: Anki flashcards on Android. Your secret trick to achieve superhuman information retention. · GitHub</a></li>
<li><a href="https://en.wikipedia.org/wiki/Anki_(software)">Anki - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Open_Collective">Open Collective - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters pointed out that Google ejected WireGuard from Play Store in 2019 and argued that app-store distribution gives a monopolist arbitrary control over software. Others discussed the tax-exempt distinction between 501(c)(6) organizations and donations, while some users thanked AnkiDroid and said they would donate or consider Linux phones.

**Tags**: `#open-source`, `#google-play`, `#app-store-policy`, `#monetization`, `#android`

---

<a id="item-5"></a>
## [Tiny Transformer Trained in 1.5 Hours Beats Many LLMs on ARC](https://mvakde.github.io/blog/44-on-arc-1/) ⭐️ 8.0/10

A blog post describes a small autoregressive transformer trained from scratch in 1.5 hours that outperforms many large language models on the ARC benchmark. The result highlights that efficient specialized models can rival far larger approaches on a challenging reasoning task. This matters because it challenges the assumption that massive scale is necessary for strong reasoning performance, showing that architecture and data quality can be more important than raw parameter count. It could lower the cost of building capable reasoning systems and shift research attention toward sample efficiency. The model is a small autoregressive transformer, not an LLM, and was trained from scratch. The author attributes score gains to modern architecture choices (SwiGLU, RMSNorm), more data diversity, better shuffling, and increasing from 4 to 8 layers, while noting that ARC is a meta-learning benchmark where training on eval puzzles is expected and not considered 'training on test.'

hackernews · porridgeraisin · Sep 1, 09:52 · [Discussion](https://news.ycombinator.com/item?id=49519939)

**Background**: The Abstraction and Reasoning Corpus (ARC) is a benchmark designed to measure human-like general fluid intelligence through grid-based reasoning tasks, consisting of 800 tasks (400 training, 400 evaluation). Previous attempts to score well on ARC were mostly limited to LLMs or their fine-tunes with enormous training costs, or to complex architectures with very high compute requirements.

<details><summary>References</summary>
<ul>
<li><a href="https://neoneye.github.io/arc/about.html">About - ARC -Interactive</a></li>
<li><a href="https://llm-stats.com/benchmarks/arc">Arc Leaderboard | LLM Stats</a></li>
<li><a href="https://www.emergentmind.com/topics/abstraction-and-reasoning-corpus-arc">Abstraction and Reasoning Corpus ( ARC )</a></li>

</ul>
</details>

**Discussion**: In the HN discussion, the author clarified that this is a small transformer trained from scratch, not an LLM, and argued that complex problems can be tackled without LLMs. Some commenters noted that the described gains come from 'squeezing the lemon'—architecture tweaks and data engineering—rather than a fundamentally new method, while others praised the result and joked about a Kaggle top-5 and possible SF recruiting attention.

**Tags**: `#transformer`, `#ARC`, `#LLM`, `#efficiency`, `#deep-learning`

---

<a id="item-6"></a>
## [Apple presents MacBook evidence in OpenAI trade-secret lawsuit](https://9to5mac.com/2026/08/31/apple-openai-forensic-macbook-evidence/) ⭐️ 8.0/10

Apple presented forensic evidence from an ex-employee's MacBook, alleging the employee downloaded confidential circuit schematics and used them in his work at OpenAI. The filing argues that feeding trade secrets into an AI model creates irreversible and continually propagating uses. This case could set a legal precedent for how trade secrets are treated when ingested by AI systems, since AI training may make confidential data impossible to fully retract. It affects both companies and employees in the AI industry, raising questions about accountability and data provenance. Apple discovered the alleged use because Liu ran a simulation with the schematic in LTspice on a Mac mini that synced via iCloud to the Apple-owned MacBook. Apple also seeks access to that Mac mini, and alleges Liu tried to destroy evidence after learning of Apple's internal investigation.

hackernews · colinprince · Sep 1, 20:19 · [Discussion](https://news.ycombinator.com/item?id=49527573)

**Background**: Apple sued a former employee, Liu, alleging he took confidential circuit schematics and used them at OpenAI. The case touches on how traditional trade-secret law applies to modern AI training, where ingested data may propagate through learned model weights. The community discussion highlights that this is an untested legal argument with broad implications.

**Discussion**: Commenters focused on the unprecedented legal argument that AI learning creates irreversible uses of trade secrets, and debated privacy implications of iCloud sync and company laptops. Some noted the irony of "I didn't steal it, I fed it to an agent," while others compared the case to historical trade-secret cases like the Coca-Cola recipe. No consensus on whether Apple's argument will hold in court.

**Tags**: `#Apple`, `#OpenAI`, `#trade-secrets`, `#legal`, `#AI`

---

<a id="item-7"></a>
## [Wrapture: New Python Library for Tracing and Testing via Monkeypatching](https://simonwillison.net/2026/Aug/31/introducing-wrapture/) ⭐️ 8.0/10

Graham Dumpleton released Wrapture, a new Python library that extends the monkeypatching ideas from wrapt to support tracing and testing. It allows wrapping any function or method so calls can be traced or overridden, and includes OpenTelemetry support and a configuration-based tracing mechanism. Wrapture offers a novel approach for Python developers to observe and test code without modifying it, acting as an alternative to unittest.mock. It could become a valuable tool for debugging, tracing, and writing robust tests, especially for legacy or external code. The project is only a few weeks old and was built entirely by an AI assistant under Dumpleton's direction, though he emphasized he designed the architecture himself. Its configuration-based tracing uses a TOML snippet that specifies capture level, observe targets, and sinks like JSONL output.

rss · Simon Willison · Aug 31, 23:59

**Background**: Wrapt is a Python module for decorators, wrappers, and monkey patching, providing a transparent object proxy. Monkey patching dynamically alters code behavior at runtime, commonly used in testing frameworks like pytest. Wrapture builds on wrapt to apply these techniques to tracing and testing in a unified way.

<details><summary>References</summary>
<ul>
<li><a href="https://pypi.org/project/wrapt/">wrapt · PyPI</a></li>
<li><a href="https://github.com/GrahamDumpleton/wrapt">GitHub - GrahamDumpleton/wrapt: A Python module for decorators, wrappers and monkey patching. · GitHub</a></li>

</ul>
</details>

**Tags**: `#Python`, `#Testing`, `#Tracing`, `#Monkeypatching`, `#Developer Tools`

---

<a id="item-8"></a>
## [Mapping 2026's Latent Reasoning Landscape: Beyond Chain-of-Thought](https://www.reddit.com/r/MachineLearning/comments/1w4evwo/latent_reasoning_landscape_in_2026_mapping_bdhcq/) ⭐️ 8.0/10

The post maps the emerging latent reasoning research landscape, categorizing it into five families: continuous thoughts like Coconut, compressed non-linguistic tokens, recurrent-depth and looped models, task-trained recursive solvers like HRM/TRM, and in-context recurrent latent solvers such as BDH-CQ. It argues that reasoning beyond the token stream is a promising alternative to verbalized chain-of-thought. This overview highlights a potential shift in LLM reasoning from verbose CoT traces to efficient latent computation, which could reshape interpretability, evaluation, and inference-cost trade-offs across the industry. It also raises a critical question: whether readable reasoning traces are essential for safety or merely a byproduct of how LLMs were scaled. BDH-CQ, a 150M-parameter model, reports 29.5% pass@2 on public ARC-AGI-1, surpassing the previously published cost–accuracy Pareto frontier, and shows transformer-like scaling laws up to 600B parameters. The post highlights two key distinctions among latent reasoning methods: how a system acquires a new task (context/memory vs gradient-based optimization) and where intermediate computation occurs (language tokens, abstract tokens, or continuous latent states).

reddit · r/MachineLearning · /u/Typical-Scene-5794 · Sep 1, 15:14

**Background**: Latent reasoning is an alternative to chain-of-thought where the model repeatedly transforms its continuous hidden state and decodes only the final answer, rather than verbalizing intermediate steps. Coconut, a prominent example, feeds the last hidden state back as the next input embedding directly in the continuous space. Conservative approaches like TRM use a tiny recursive network that improves its answer over multiple latent steps. These methods aim to improve inference efficiency and enable parallel exploration of multiple reasoning paths.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2412.06769">[2412.06769] Training Large Language Models to Reason in a Continuous Latent Space</a></li>
<li><a href="https://www.emergentmind.com/topics/bdh-cq">BDH - CQ : Recurrent Latent Reasoning for ARC</a></li>
<li><a href="https://learnopencv.com/trm-tiny-ai-models-outsmarting-giants-on-complex-puzzles/">TRM: Tiny AI Models Outsmarting Giants on Complex Puzzles</a></li>

</ul>
</details>

**Tags**: `#latent reasoning`, `#LLM architectures`, `#chain-of-thought`, `#AGI`, `#ML research`

---

<a id="item-9"></a>
## [TontaubeV1: Open-Weight Character-Level TTS Model for Long-Form Speech](https://www.reddit.com/r/MachineLearning/comments/1w4afjn/we_released_tontaubev1_a_characterlevel_tts_model/) ⭐️ 8.0/10

The authors released TontaubeV1, a 2.9B-parameter open-weight text-to-speech model built on DualCodec, supporting expressive long-form generation, low-latency local inference, and zero-shot voice cloning from up to one minute of reference audio. It highlights character-level tokenization and a chunking/position scheme as key design choices. Open-weight TTS models with strong long-form and voice-cloning capabilities broaden access to high-quality speech synthesis research and applications, especially for English and German. The reported benefits of character-level tokenization could influence how future LLM-based TTS systems handle rare text sequences. The model was trained on about 200k hours of audio across 7 languages, primarily tested in English and German. It uses a Qwen3-1.7B backbone for its semantic codebook model, forces character-level tokenization, and pairs text and audio on shared logical position timelines with chunk boundaries that keep context bounded for very long passages.

reddit · r/MachineLearning · /u/EAVDR · Sep 1, 12:23

**Background**: Text-to-speech (TTS) models convert written text into spoken audio. Modern LLM-based TTS systems typically tokenize text with the backbone model's subword tokenizer and predict discrete audio tokens from a neural audio codec. DualCodec is a low-frame-rate, semantically-enhanced neural audio codec that extracts discrete tokens for efficient speech generation at 12.5Hz or 25Hz.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2505.13000">[2505.13000] DualCodec : A Low-Frame-Rate, Semantically-Enhanced...</a></li>
<li><a href="https://github.com/jiaqili3/DualCodec">GitHub - jiaqili3/ DualCodec : [Interspeech 2025] DualCodec ...</a></li>
<li><a href="https://www.pranaypourkar.co.in/the-programmers-guide/ai/generative-ai/large-language-models-llm/llm-foundations/tokens-and-tokenization/character-level-tokenization">Character - Level Tokenization | The Programmer's Guide</a></li>

</ul>
</details>

**Tags**: `#TTS`, `#open-source`, `#audio generation`, `#machine learning`, `#NLP`

---

<a id="item-10"></a>
## [EvoUndo: Recoverability-Constrained Self-Evolution for LLM Agents](https://www.reddit.com/r/MachineLearning/comments/1w4m0hq/evoundo_recoverabilityconstrained_selfevolution/) ⭐️ 8.0/10

EvoUndo is a new framework for representing, synthesizing, diagnosing, and verifying whether LLM agents' runtime self-modifications are recoverable across counterfactual states. In 600 one-shot self-evolution tasks, it found 197 capability-improving mutations that fail recoverability verification, with conventional repair recovering none and an extended recovery calculus recovering 191 of 197. This addresses a critical but underexplored safety problem: a self-improving agent may make changes that work in one context but cannot be safely undone in another. Reliable self-evolution requires co-designing verification, state grounding, witness semantics, and recovery-language expressivity, informing how developers build trustworthy autonomous agents. The paper distinguishes the original recovery language L0 from an extended recovery calculus: under deterministic oracle analysis, L0 recovers 48 of 197 failures, while the extended calculus achieves 191 of 197. A protocol-locked 2×2 grounding-by-expressivity intervention showed that exact state-address grounding raises recovery from 0/48 to 38/48 when L0 suffices, but on the gpt-oss-120b backbone adding exact-address diagnostics to the richer language reduces recovery to 133/143, while a Qwen3.8-27B replication preserves grounding and expressivity effects without that negative interaction.

reddit · r/MachineLearning · /u/AccomplishedLeg1508 · Sep 1, 19:17

**Background**: LLM agents increasingly modify their own prompts, tools, middleware, resources, and execution harnesses at runtime to improve capability, a process known as self-evolution. A successful mutation may leave persistent effects that cannot be safely reversed in states different from the one in which it was created; EvoUndo treats this recoverability problem as a first-class constraint. The framework represents and independently verifies model-generated self-modifications across counterfactual states, using a recovery calculus to separate bottlenecks of state grounding and language expressivity.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2608.28363">[2608.28363] EvoUndo: Recoverability-Constrained Self-Evolution for LLM Agent Harnesses</a></li>
<li><a href="https://huggingface.co/papers/2608.28363">Paper page - EvoUndo : Recoverability -Constrained Self - Evolution ...</a></li>

</ul>
</details>

**Tags**: `#LLM agents`, `#self-evolution`, `#recoverability`, `#AI safety`, `#machine learning`

---

<a id="item-11"></a>
## [Virtualizor Update System BGP-Hijacked to Deliver Root Backdoor](https://www.virtualizor.com/blog/security-incident-bgp-hijacking/) ⭐️ 8.0/10

From August 28 to 30, 2026, attackers hijacked BGP routes to Virtualizor's update infrastructure and delivered malicious update packages signed with valid TLS certificates. The malicious packages installed a root SSH key, a Java payload, and a persistent service on affected systems. This is a serious supply chain attack because Virtualizor is a widely used VPS control panel, and the compromise leveraged BGP hijacking, a fundamental Internet routing weakness, to target trusted update mechanisms. System administrators and hosting providers using Virtualizor are directly affected, and the incident underscores the real-world risk of routing-layer attacks against software distribution channels. According to the official statement, only a small number of installations that updated during the hijack window were affected, and the incident was caused by the distribution chain being compromised, not a software code vulnerability. Independent forensic analysis by AlbaHost found indicators of compromise on 5 of 34 hypervisors, and Softaculous said there is currently no evidence that other products were impacted.

telegram · zaihuapd · Sep 1, 06:05

**Background**: BGP (Border Gateway Protocol) is the routing protocol that directs traffic across the Internet, and BGP hijacking occurs when an attacker takes over groups of IP addresses by corrupting Internet routing tables. Virtualizor is a web-based VPS control panel used by hosting providers to deploy and manage virtual private servers on physical servers. A hypervisor is a type of software that creates and runs virtual machines, and it is a critical component that the malicious update targeted. This incident shows that even cryptographically signed updates can be intercepted if the network routing layer is compromised.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/BGP_hijacking">BGP hijacking - Wikipedia</a></li>
<li><a href="https://www.cloudflare.com/learning/security/glossary/bgp-hijacking/">What Is BGP Hijacking ?</a></li>
<li><a href="https://www.virtualizor.com/">Virtualizor – Cloud Control Panel</a></li>

</ul>
</details>

**Tags**: `#security`, `#BGP hijacking`, `#supply chain`, `#malware`, `#virtualization`

---

