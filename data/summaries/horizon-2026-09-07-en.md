# Horizon Daily - 2026-09-07

> From 33 items, 7 important content pieces were selected

---

1. [OpenAI Reveals Coding Agents Fuelling Research Push Toward Recursive Self-Improvement](#item-1) ⭐️ 9.0/10
2. [China's Top Court Issues Landmark Judicial Interpretation on AI Dispute Liability](#item-2) ⭐️ 9.0/10
3. [LG Smart TVs Are Caught Logging Audio and Snooping on Devices](#item-3) ⭐️ 8.0/10
4. [TPU Externalization via InferenceX Gains Steam, Eroding Nvidia's CUDA Moat](#item-4) ⭐️ 8.0/10
5. [Rustuna: High-Performance Rust Implementation of Optuna Released](#item-5) ⭐️ 8.0/10
6. [LLM-Evolved Optimization Algorithm Breaks 10 Circle-Packing Records](#item-6) ⭐️ 8.0/10
7. [Huawei Unveils First High-Performance Kirin Chip in Six Years](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI Reveals Coding Agents Fuelling Research Push Toward Recursive Self-Improvement](https://simonwillison.net/2026/Sep/6/research-acceleration-the-view-inside-openai/) ⭐️ 9.0/10

OpenAI published a new post, 'Research acceleration: The view inside OpenAI,' alongside chief scientist Jakub Pachocki's essay 'An Alien Mind,' framing recursive self-improvement as the company's AGI direction. It reveals that coding agents have reshaped internal research workflows in 2026, with median spend per researcher jumping from near zero to roughly $600 per day by late August. This is one of the clearest signals yet that OpenAI treats recursive self-improvement not as a distant theory but as its current AGI strategy. Given that OpenAI's research methods often become industry practice, the rapid growth of agentic coding inside its labs suggests autonomous coding agents will increasingly drive AI research across the field. The article includes a chart titled 'Coding agents are reshaping daily work for OpenAI researchers—Median researcher,' showing daily AI spend per researcher plateauing around $150–165 through mid-July, then climbing steeply to about $600 by late August. Simon Willison speculates that the late-July inflection followed internal access to the model later released as GPT-6 Astra; notably, the post does not bother to expand the RSI acronym at all.

rss · Simon Willison · Sep 6, 23:57

**Background**: Recursive self-improvement (RSI) is a hypothesized process in which an AGI system helps rewrite or improve its own code, potentially leading to an intelligence explosion as each improvement unlocks further gains. Coding agents bundle a large language model with scaffolding such as tool calling, execution and feedback loops, allowing them to plan, write, run and debug code without waiting for step-by-step human direction. Anthropic's research institute has also highlighted that RSI is becoming more concrete but may increase the risk of humans losing control over AI systems.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement">Recursive self - improvement - Wikipedia</a></li>
<li><a href="https://www.anthropic.com/institute/recursive-self-improvement">Our progress toward recursive self - improvement , and its implications.</a></li>
<li><a href="https://www.uipath.com/ai/what-are-coding-agents">What Are Coding Agents? | UiPath</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#AGI`, `#AI research`, `#coding agents`

---

<a id="item-2"></a>
## [China's Top Court Issues Landmark Judicial Interpretation on AI Dispute Liability](https://www.cnr.cn/news/20260907/t20260907_527806795.shtml) ⭐️ 9.0/10

On September 7, China's Supreme People's Court issued a 24-article judicial interpretation addressing AI-related disputes, explicitly stating that unauthorized AI-generated face-swapping or voice cloning may constitute infringement of personality rights and that algorithmic price discrimination can give rise to legal liability. The interpretation also covers AI impersonation in endorsements, autonomous driving, and intellectual property. This interpretation gives Chinese courts a unified legal framework for resolving disputes over deepfakes, algorithmic pricing, and AI-generated content, filling a regulatory gap in rapid AI commercialization. It will directly affect technology platforms, advertisers, content creators, and compliance teams in China, and may also serve as a reference for AI governance debates in other jurisdictions. The 24-article interpretation is organized into five parts, covering AI face-swapping, algorithmic price discrimination, unauthorized AI impersonation in advertising, autonomous driving, and intellectual property. Notably, when AI impersonates a real person to induce consumption, courts may award punitive damages, and the interpretation also regulates the use of AI for 'network open-box' doxxing and privacy invasions.

telegram · zaihuapd · Sep 7, 09:32

**Background**: In China, 'big data price discrimination' (算法杀熟) refers to online platforms using consumer data to charge different users different prices for the same product, often charging higher prices to loyal or higher-willingness-to-pay customers. 'Open-box' (网络开盒) is a newer form of cyber-violence in which someone illegally obtains and publicly exposes another person's private information, often considered more harmful than traditional doxxing. Previous Chinese regulations, such as the 2022 provisions on algorithmic recommendation, addressed these practices from an administrative perspective, but this judicial interpretation translates them into clear civil liability rules for courts to apply.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wpipcn.com/newsinfo/4938641.html">你被大数据“杀熟”了吗？-企业官网</a></li>
<li><a href="https://finance.jschina.com.cn/jrcj/202201/t20220111_2927707.shtml">《算法规定》剑指大数据“杀熟”_中国江苏网</a></li>
<li><a href="https://m.mp.oeeee.com/a/BAAFRD0000202503211061784.html">起底“ 开 盒 ”背后的“社工库”：签到1次便可查1次他人信息 | 南都N视频</a></li>

</ul>
</details>

**Tags**: `#AI regulation`, `#legal`, `#deepfake`, `#algorithmic pricing`, `#China`

---

<a id="item-3"></a>
## [LG Smart TVs Are Caught Logging Audio and Snooping on Devices](https://www.youtube.com/watch?v=6IFVTcM28KA) ⭐️ 8.0/10

A new report and video detail how LG Smart TVs record audio even when the screen is off and scan other devices on the home network. LG's advertising technology division reportedly claims access to 363 million secondary addressable devices in the United States alone. This matters because the report implicates roughly 216 million LG Smart TVs in invasive data collection that most owners never consciously approved. It also raises legal questions under consent and wiretap rules, since guests and household members who never accepted LG's terms could be recorded. The investigation focuses on Automatic Content Recognition (ACR), a feature that samples on-screen audio so the TV can identify content and serve targeted ads. Captured data may be uploaded after the TV reconnects to the internet, and users can completely stop the tracking by unplugging the TV's Wi-Fi/BT chip.

hackernews · treve · Sep 7, 00:22 · [Discussion](https://news.ycombinator.com/item?id=49592375)

**Background**: Automatic Content Recognition (ACR) is a common smart-TV technology that identifies what is being watched in real time so broadcasters and advertisers can measure viewership and target ads. LG's ad division reportedly tracks not only the TV itself but other hardware on the same local network, building a broader picture of a household. User agreements can also require owners to tell guests they may be recorded, a practice critics say many people never fully understand.

<details><summary>References</summary>
<ul>
<li><a href="https://www.notebookcheck.net/LG-smart-TVs-caught-logging-audio-with-screen-off-and-snooping-on-local-devices.1391214.0.html">LG smart TVs caught logging audio with screen off and snooping on local devices - Notebookcheck News</a></li>
<li><a href="https://en.wikipedia.org/wiki/Automatic_content_recognition">Automatic content recognition - Wikipedia</a></li>
<li><a href="https://appleinsider.com/inside/mac/tips/how-to-stop-your-lg-or-samsung-smart-tv-from-tracking-you">How to stop LG & Samsung smart TV tracking, screen captures</a></li>

</ul>
</details>

**Discussion**: Commenters expressed a mix of outrage and vindication: one user who kept network functions disabled for five years said he had been ridiculed by friends, while another unplugged the Wi-Fi/BT chip from two LG OLEDs. Several pointed to LG's consent terms, which require owners to notify people nearby about recording, and argued such practices should conflict with all-party wiretap laws.

**Tags**: `#privacy`, `#smart-tv`, `#IoT security`, `#surveillance`, `#LG`

---

<a id="item-4"></a>
## [TPU Externalization via InferenceX Gains Steam, Eroding Nvidia's CUDA Moat](https://newsletter.semianalysis.com/p/tpu-inferencex-full-steam) ⭐️ 8.0/10

SemiAnalysis reports that Google is rapidly pushing its TPU stack outward through what it describes as InferenceX, claiming up to 50% better performance per dollar for AI inference. The effort is adding customers and new silicon such as Ironwood and TPUv8i, while Google has also open-sourced its Raiden inference library to court external developers. This could give inference-heavy customers a credible, cost-effective alternative to Nvidia GPUs and gradually weaken CUDA lock-in, which has long been the foundation of Nvidia's dominance. It is especially significant because AI workloads are increasingly shifting from training to inference. The headline claim of up to 50% better performance per dollar likely reflects TPU efficiency on targeted inference workloads, but the public summary does not disclose the exact benchmark methodology. Google's externalization push pairs chips such as Ironwood (TPUv7x) and TPUv8i with open-source software moves, including Raiden, to lower the barrier for non-Google developers.

rss · Semianalysis · Sep 7, 20:00

**Background**: Google's TPUs are custom AI accelerators that were initially built mainly for Google's internal workloads, but Google has been expanding access through Google Cloud and, more recently, through open tools and libraries. 'Externalization' describes this shift from a mostly internal stack to an externally adopted platform. Nvidia's CUDA ecosystem has been a powerful moat because its software, tools, and developer habits deeply bind users to Nvidia hardware. Google's aggressive release cadence and price-performance claims, framed under the InferenceX label, are among the clearest attempts to break that bind.

<details><summary>References</summary>
<ul>
<li><a href="https://newsletter.semianalysis.com/p/tpu-inferencex-full-steam">TPU Inference Externalization Full Steam Ahead - InferenceX</a></li>
<li><a href="https://officechai.com/ai/google-has-open-sourced-its-tpu-raiden-inference-library-in-apparent-bid-to-externalize-tpu-stack/">Google Has Open-Sourced Its TPU Raiden Inference Library In...</a></li>
<li><a href="https://multigrid.ai/learn/cuda-moat">CUDA and the Software Moat: What It Is Actually Made Of</a></li>

</ul>
</details>

**Tags**: `#TPU`, `#AI inference`, `#Google`, `#hardware`, `#CUDA`

---

<a id="item-5"></a>
## [Rustuna: High-Performance Rust Implementation of Optuna Released](https://www.reddit.com/r/MachineLearning/comments/1w9nyhz/rustuna_a_highperformance_rust_implementation_of/) ⭐️ 8.0/10

The Optuna development team has released Rustuna, a high-performance, memory-efficient implementation of Optuna built entirely in Rust. It keeps Optuna's familiar API and concept while having zero Python dependencies, reducing supply chain risk. This release matters because Optuna is one of the most widely used hyperparameter optimization frameworks in machine learning, and Rustuna addresses real production concerns around supply-chain security and memory overhead. It may also signal growing momentum for Rust-based tooling in the ML ecosystem. Rustuna is hosted under the official Optuna GitHub organization and was announced via a Medium blog post. It achieves a lower memory footprint through Rust's native memory management while maintaining a compatible API, so existing Optuna workflows can migrate with minimal changes.

reddit · r/MachineLearning · /u/c-bata · Sep 7, 10:01

**Background**: Optuna is an open-source Python library for automatic hyperparameter tuning of machine learning models, first introduced in 2018 by Preferred Networks. Hyperparameter optimization is the process of choosing hyperparameter values that control the learning algorithm before training, in order to minimize a loss function on a given dataset. Rustuna reimplements this framework in Rust rather than Python, offering a compatible alternative.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Optuna">Optuna</a></li>
<li><a href="https://en.wikipedia.org/wiki/Hyperparameter_optimization">Hyperparameter optimization</a></li>
<li><a href="https://optuna.org/">Optuna - A hyperparameter optimization framework</a></li>

</ul>
</details>

**Tags**: `#Rust`, `#Optuna`, `#hyperparameter-optimization`, `#machine-learning`, `#supply-chain-security`

---

<a id="item-6"></a>
## [LLM-Evolved Optimization Algorithm Breaks 10 Circle-Packing Records](https://www.reddit.com/r/MachineLearning/comments/1w9xlyi/llmguided_program_evolution_improves_10_bestknown/) ⭐️ 8.0/10

Using an LLM-guided program evolution loop, the author improved the best-known sum-of-radii for 10 circle-packing instances on the Packomania csqv benchmark (N = 101–114), by 2.4–5.4% in 15 iterations. The total LLM cost was only $27.72, and the results were independently accepted by Packomania. This is a notable example of an LLM not directly solving an optimization instance but evolving the solver algorithm itself, reaching state-of-the-art results on a recognized benchmark. It highlights a cheap, scalable route for AI-guided algorithm discovery that could transfer to other optimization and engineering problems. The system starts from a simple seed solver; the LLM proposes algorithmic changes, scores them against a scoreboard, and discards failures using an independent verifier. The author specifically invites critique of the plateau-detection stopping rule, which determines when evolution should halt.

reddit · r/MachineLearning · /u/SIGH_I_CALL · Sep 7, 16:54

**Background**: Circle packing asks how to arrange N circles inside a given container so that some objective, such as the sum of the circles' radii, is optimized. Packomania is a respected repository of best-known packings maintained since 1998 by Eckard Specht, making it a long-running benchmark for numerical optimization. Program evolution is related to prior work such as LLM Guided Evolution and AlphaEvolve, where a language model proposes, mutates, and tests algorithmic code rather than tuning a fixed algorithm. The csqv benchmark is a Packomania circle-packing suite, and the paper's results were accepted into that repository.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2609.05093">LLM-Guided Program Evolution for Circle Packing :Breaking 10...</a></li>
<li><a href="https://arxiv.org/html/2403.11446v1">LLM Guided Evolution - The Automation of Models Advancing Models</a></li>
<li><a href="https://packomania.com/">Packomania (52C17)</a></li>

</ul>
</details>

**Tags**: `#LLM`, `#program evolution`, `#optimization`, `#circle-packing`, `#AI research`

---

<a id="item-7"></a>
## [Huawei Unveils First High-Performance Kirin Chip in Six Years](https://www.news.cn/20260907/adf46c5c003240d28cc3cf6de54f9b5f/c.html) ⭐️ 8.0/10

On September 7, Huawei launched the Kirin 9050 Pro at its Mate XT 2 tri-fold phone event in Guangzhou, marking its first new flagship high-performance chip in six years. The chip is described as the world's first mobile processor to adopt logic folding technology. The Kirin 9050 Pro signals Huawei's return to the flagship chip arena after six years, potentially reshaping competition in mobile SoCs. Its logic folding approach could also reduce reliance on the most advanced lithography machines, influencing how the semiconductor industry continues past Moore's Law. According to Huawei, logic folding arranges logic cells in layered stacks within a single chip—like upgrading from a single-story layout to a duplex—and adds vertical interconnect channels, likened to elevators, to shorten signal paths and reduce latency. Technical coverage also says the technique can increase transistor density by about 53 percent for AI computing and targets reducing the time constant τ to improve speed, energy efficiency, and density.

telegram · zaihuapd · Sep 7, 08:20

**Background**: Huawei's Mate 40 global launch in 2020 was the last time it introduced a brand-new Kirin flagship chip; later US export controls cut off access to advanced foundry services, forcing the company to rely on stockpiled or less advanced chips. Logic folding is a design and packaging method that stacks chip layers vertically instead of shrinking transistors, offering a way to add density when traditional lithography scaling is constrained. This context helps explain why the Kirin 9050 Pro is viewed as a major milestone and a potential shift in Huawei's chip strategy.

<details><summary>References</summary>
<ul>
<li><a href="https://www.geeky-gadgets.com/huawei-logic-folding-moores-law/">Huawei Logic Folding: A New Approach to Moore's Law - Geeky Gadgets</a></li>
<li><a href="https://www.huaweicentral.com/huawei-logicfolding-architecture-everything-you-need-to-know/">Huawei LogicFolding Architecture: Everything you need to know</a></li>
<li><a href="https://inf.news/en/digital/2689d47ccc2d7159a83a7f1299a0c453.html">Huawei releases its first high-performance chip in six years, the Kirin ...</a></li>

</ul>
</details>

**Tags**: `#Huawei`, `#chip`, `#semiconductor`, `#technology`, `#mobile`

---

