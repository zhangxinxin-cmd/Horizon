# Horizon Daily - 2026-07-27

> From 31 items, 9 important content pieces were selected

---

1. [Kimi K3: First Open-Source 2.8T Model, Tops Frontend Code Arena](#item-1) ⭐️ 9.0/10
2. [Critical RCE in Fastjson 1.x Without Gadget or AutoType](#item-2) ⭐️ 9.0/10
3. [vLLM v0.26.0 adds Inkling support, DeepSeek-V4 optimizations](#item-3) ⭐️ 8.0/10
4. [Anthropic clarifies stance on open-weights models](#item-4) ⭐️ 8.0/10
5. [Paged Out #9: Free Hacker Magazine Released](#item-5) ⭐️ 8.0/10
6. [Bun's Rust Rewrite Ships in Claude Code, v1.4 Delayed](#item-6) ⭐️ 8.0/10
7. [6 Frontier LLMs Evaluated for Bias: All Left-Leaning Including Grok](#item-7) ⭐️ 8.0/10
8. [Google Gemini 4 Announced as Most Ambitious Pre-training Yet](#item-8) ⭐️ 8.0/10
9. [SMIC Tests China's First Domestic DUV Lithography Machine](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Kimi K3: First Open-Source 2.8T Model, Tops Frontend Code Arena](https://t.me/zaihuapd/42793) ⭐️ 9.0/10

Moonshot AI has open-sourced Kimi K3, the first 2.8 trillion parameter model, which achieved the top score of 1,679 points on the Frontend Code Arena leaderboard, surpassing Fable 5. This marks a major milestone in open-source AI, as K3 is the largest open-source dense model to date and sets a new state-of-the-art in front-end code generation, potentially accelerating AI-assisted web development. K3 employs two novel architectural innovations: Kimi Delta Attention (KDA), a linear attention mechanism with fine-grained gating, and Attention Residuals, which replace standard residual connections with learned depth-wise attention. The model supports 1 million token context, native vision capabilities, and agentic features like tool calling and web browsing.

telegram · zaihuapd · Jul 27, 06:27

**Background**: Traditional Transformer models use standard attention with a KV cache that grows linearly with sequence length, making long-context inference expensive. Kimi Delta Attention is a linear attention variant of Gated DeltaNet that introduces diagonal gating to control memory decay, enabling 6x faster decoding at long contexts while reducing KV cache usage by up to 75%. Attention Residuals replace the fixed additive residual connections with softmax attention over previous layer outputs, allowing each layer to selectively aggregate representations and improving training stability at scale.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2510.26692">[2510.26692] Kimi Linear: An Expressive, Efficient Attention ... GitHub - MoonshotAI/Kimi-Linear GitHub - hwilner/kimi-delta-attention: Educational ... Linear Attention: Kimi Delta Attention | Jianyu Huang Kimi Linear: An Expressive, Efficient Attention Architecture KDA (Kimi Delta Attention) | fla-org/flash-linear-attention ... Kimi K3 Technical Advancements Explained - nextbigfuture.com</a></li>
<li><a href="https://arxiv.org/abs/2603.15031">[2603.15031] Attention Residuals - arXiv.org GitHub - MoonshotAI/Attention-Residuals Attention Residuals - arXiv.org Attention Residuals wdlctc/open-attention-residuals - GitHub Attention Residuals - openlm.ai Attention Residuals Explained: Rethinking Transformer Depth</a></li>
<li><a href="https://fourweekmba.com/ai-kimi-k3-moonshot-ai-arena-frontend-code-leaderboard-open-wei/">Kimi-K3 Takes the Top Spot on Arena.ai's Frontend Code Leaderboard ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#open-source`, `#large language model`, `#AI model release`, `#code generation`

---

<a id="item-2"></a>
## [Critical RCE in Fastjson 1.x Without Gadget or AutoType](https://t.me/zaihuapd/42797) ⭐️ 9.0/10

Security researcher Kirill Firsov disclosed a critical remote code execution vulnerability in Fastjson 1.x versions 1.2.68 through 1.2.83, which can be exploited without enabling autoType or relying on classpath gadgets, and works on JDK 8, 17, and 21. This vulnerability is severe because Fastjson is widely used in Java applications for JSON parsing, and the exploit does not require previously common prerequisites like autoType or specific gadget chains, making it easier to exploit across many environments. Since Fastjson 1.x reached end-of-life in October 2024 and no patch will be provided, users must urgently upgrade to Fastjson2 to mitigate the risk. The vulnerability affects Fastjson 1.x versions from 1.2.68 up to 1.2.83 inclusive, and is confirmed to be exploitable on JDK 8, 17, and 21. The only recommended fix is to upgrade to Fastjson2, as Fastjson 1.x is no longer supported and no security patch will be released.

telegram · zaihuapd · Jul 27, 10:31

**Background**: Fastjson is a popular Java library for serializing and deserializing JSON data, developed by Alibaba. Deserialization vulnerabilities often arise when untrusted data is parsed, and attackers can craft malicious JSON to execute arbitrary code. Traditionally, such exploits required the autoType feature (which allows type specification in JSON) or specific gadget chains (classes available on the classpath). This new vulnerability bypasses both requirements, making it more dangerous. Fastjson2 is a completely rewritten version that addresses many security issues of Fastjson1, including a safer autoType mechanism.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/alibaba/fastjson/wiki/enable_autotype">enable_autotype · alibaba/fastjson Wiki · GitHub</a></li>
<li><a href="https://github.com/alibaba/fastjson/wiki/fastjson_safemode_en">fastjson_safemode_en · alibaba/fastjson Wiki</a></li>
<li><a href="https://www.besthub.dev/articles/why-upgrade-to-fastjson2-performance-boosts-and-safer-autotype-handling-de6e99564c12">Why Upgrade to fastjson2? Performance Boosts and Safer ...</a></li>

</ul>
</details>

**Tags**: `#security`, `#vulnerability`, `#java`, `#fastjson`, `#rce`

---

<a id="item-3"></a>
## [vLLM v0.26.0 adds Inkling support, DeepSeek-V4 optimizations](https://github.com/vllm-project/vllm/releases/tag/v0.26.0) ⭐️ 8.0/10

vLLM v0.26.0 is released with 411 commits from 212 contributors, introducing full support for the Inkling model family, significant performance optimizations for DeepSeek-V4, and new features such as flexible attention backends and fp32 lm_head. This release solidifies vLLM as a leading open-source LLM serving framework, enabling efficient deployment of cutting-edge models like Inkling and DeepSeek-V4, and delivers performance gains across hardware vendors, benefiting the entire AI inference ecosystem. Key optimizations for DeepSeek-V4 include a specialized routing kernel (2.94% E2E TPOT gain), fused_topk_bias kernel (1.5-2x improvement), and sparsity optimizations. The release also adds per-KV-cache-group attention backend selection, fp32 lm_head for better accuracy, and Rust frontend support for multimodal inputs.

github · khluu · Jul 27, 01:06

**Background**: vLLM is an open-source high-throughput LLM serving system that manages GPU memory efficiently. Inkling is a 975B-parameter Mixture-of-Experts model from Thinking Machines Lab, with 41B active parameters and a 1M-token context window. DeepSeek-V4 Pro is a 1.6T-parameter MoE model (49B activated) released by DeepSeek.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/introducing-inkling/">Inkling: Our Open-Weights Model - Thinking Machines Lab</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>

</ul>
</details>

**Tags**: `#vllm`, `#LLM serving`, `#performance optimization`, `#open-source`, `#DeepSeek`

---

<a id="item-4"></a>
## [Anthropic clarifies stance on open-weights models](https://www.anthropic.com/news/position-open-weights-models) ⭐️ 8.0/10

Anthropic explicitly states it does not advocate banning open-weights models, but proposes mandatory safety testing for all sufficiently capable models and a crackdown on industrial-scale distillation operations. This position is significant as it could influence AI regulation debates, highlighting the tension between promoting openness and ensuring safety. The proposal to crack down on distillation also raises concerns about restricting model access. The mandatory safety testing applies to both open and closed models that reach a certain capability threshold. Anthropic specifically targets 'industrial-scale distillation operations,' which involve systematically extracting knowledge from large models to create smaller ones without authorization.

hackernews · surprisetalk · Jul 27, 22:03 · [Discussion](https://news.ycombinator.com/item?id=49076057)

**Background**: Open-weights models are AI models whose trained parameters (weights) are publicly available, allowing anyone to download and use them. Knowledge distillation is a technique where a smaller model learns from a larger 'teacher' model, often used to create efficient models. Anthropic's proposals are part of ongoing debates about how to regulate increasingly capable AI systems.

<details><summary>References</summary>
<ul>
<li><a href="https://allthings.how/what-is-an-open-weight-ai-model-and-how-to-use-one/">What is an Open Weight AI Model and How to Use One</a></li>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation</a></li>
<li><a href="https://www.ibm.com/think/topics/knowledge-distillation">What is Knowledge distillation? | IBM</a></li>

</ul>
</details>

**Discussion**: Community comments are highly critical. Many argue that mandatory safety testing and cracking down on distillation effectively ban open-weights models by introducing costly barriers. Some point out the hypocrisy of Anthropic advocating against distillation while settling a piracy lawsuit over training data.

**Tags**: `#AI safety`, `#open-weights`, `#regulation`, `#Anthropic`, `#AI policy`

---

<a id="item-5"></a>
## [Paged Out #9: Free Hacker Magazine Released](https://pagedout.institute/download/PagedOut_009.pdf) ⭐️ 8.0/10

Paged Out #9 has been released as a free PDF, featuring deeply technical articles on diverse topics like C programming and subpixel rendering, and is described as a modern take on classic hacker magazines 2600 and Phrack. This release matters because it continues the tradition of community-driven, high-quality technical writing in hacker culture, offering free access to deep technical knowledge that could inspire new hackers and programmers to explore low-level topics. The magazine includes articles such as 'Baby Steps in C' and 'The Subpixel Zoo,' which covers subpixel rendering, and a piece on computable tilings that rediscovered Hao Wang's 1960s work.

hackernews · laurensr · Jul 27, 14:22 · [Discussion](https://news.ycombinator.com/item?id=49070138)

**Background**: Paged Out is a free online hacker magazine known for its deeply technical content and beautiful design, similar to historic zines like 2600 and Phrack that were influential in hacker culture. This release is its ninth issue.

**Discussion**: Community comments were overwhelmingly positive, praising the humor and depth of articles. Users highlighted specific articles like 'Baby Steps in C' and 'The Subpixel Zoo,' and one commenter provided technical context about the computable tilings piece.

**Tags**: `#hacker-culture`, `#magazine`, `#programming`, `#technical-articles`, `#community`

---

<a id="item-6"></a>
## [Bun's Rust Rewrite Ships in Claude Code, v1.4 Delayed](https://lockwood.dev/ai/2026/07/27/how-is-the-bun-rewrite-in-rust-going.html) ⭐️ 8.0/10

Bun's Rust rewrite has shipped in Claude Code over a month ago, but the release of Bun v1.4 is delayed until the promised number of newly passing Node.js tests is achieved. This rewrite marks a significant technical transition from Zig to Rust for a widely-used JavaScript runtime, potentially improving performance and safety. Its progress directly impacts developers relying on Bun for fast JavaScript tooling. The Rust rewrite was largely done using LLM-assisted translation. The v1.4 release is currently blocked by pull requests that need to be merged to meet the Node.js compatibility goal announced in a previous video.

hackernews · tomlockwood · Jul 27, 11:12 · [Discussion](https://news.ycombinator.com/item?id=49067854)

**Background**: Bun is a fast all-in-one JavaScript runtime originally written in Zig. The project is undergoing a significant rewrite of its core into Rust, leveraging LLMs to accelerate the process. Claude Code is an AI-assisted coding tool by Anthropic that was used to ship the rewritten runtime.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Bun_(software)">Bun (software) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_Code">Claude Code</a></li>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>

</ul>
</details>

**Discussion**: Jarred, the project lead, confirmed the rewrite shipped quietly and that v1.4 is delayed. Community members discussed the difficulty of judging progress from commit counts, and some questioned the justification for the rewrite, pointing to an alternative Zig-based fork with sub-second build times.

**Tags**: `#Bun`, `#Rust`, `#JavaScript`, `#rewrite`, `#software engineering`

---

<a id="item-7"></a>
## [6 Frontier LLMs Evaluated for Bias: All Left-Leaning Including Grok](https://www.reddit.com/r/MachineLearning/comments/1v8fnzw/evaluated_6_frontier_llms_gpt54_claude_sonnet_46/) ⭐️ 8.0/10

A solo evaluation tested six frontier LLMs (GPT-5.4, Claude Sonnet 4.6, Claude Opus 4.7, Gemini Pro/Flash, Grok 4.3) across 8 bias benchmarks with ~20,600 examples, finding all models exhibit left-leaning behavior, including Grok which self-reports as right-leaning. This finding challenges assumptions about model alignment based on self-reported stances, highlighting that LLMs may behave differently from their stated political leanings, which has implications for fairness and bias mitigation in deployed AI systems. Grok self-reports as right-leaning on the PoliticalCompass benchmark but behaves left-leaning across other political bias benchmarks. Additionally, GPT-5.4 refused 20.3% of BBQ race-related questions, the highest refusal rate among models, while Claude Sonnet 4.6 and Gemini Pro refused only ~5%.

reddit · r/MachineLearning · /u/marggggggggg · Jul 27, 22:37

**Background**: Bias benchmarks like WinoBias, BBQ, and SeeGULL are designed to measure stereotypes and social biases in LLMs. WinoBias focuses on gender bias in coreference resolution, BBQ covers multiple social biases, and SeeGULL provides broad geo-cultural stereotype coverage. The study used these benchmarks along with political bias datasets to evaluate both self-reported and behavioral biases.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2110.08193">BBQ : A Hand-Built Bias Benchmark for Question Answering</a></li>
<li><a href="https://github.com/google-research-datasets/seegull">GitHub - google-research- datasets / seegull : SeeGULL is...</a></li>
<li><a href="https://www.emergentmind.com/topics/winobias">WinoBias : Gender Bias in Coreference Benchmark</a></li>

</ul>
</details>

**Tags**: `#LLM bias`, `#political bias`, `#fairness evaluation`, `#frontier models`, `#AI safety`

---

<a id="item-8"></a>
## [Google Gemini 4 Announced as Most Ambitious Pre-training Yet](https://9to5google.com/2026/07/26/google-gemini-4-teases/) ⭐️ 8.0/10

Google CEO Sundar Pichai revealed during the Alphabet Q2 2026 earnings call that Gemini 4 is currently in training, describing it as the company's most ambitious pre-training project to date, with a target release in late 2026. This announcement signals Google's continued heavy investment in frontier AI models, potentially shaping the next generation of large language models and AGI research, and could intensify competition with other tech giants like OpenAI and Anthropic. Pichai emphasized that Google will prioritize compute allocation for cutting-edge AGI R&D to ensure Gemini 4 remains at the forefront upon release, and the Gemini 3.x Flash series will continue with near-monthly updates focusing on intelligent coding and other capabilities.

telegram · zaihuapd · Jul 27, 04:06

**Background**: Pre-training is the initial phase in building large language models where the model learns from vast amounts of unlabeled data to capture general patterns and knowledge. Google's Gemini models are a family of multimodal AI models designed to compete with other state-of-the-art systems like OpenAI's GPT-4. AGI (Artificial General Intelligence) refers to a hypothetical AI that can perform any intellectual task that a human can.

<details><summary>References</summary>
<ul>
<li><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-is-pre-training-and-its-objective/">What is Pre Training and its Objective - GeeksforGeeks</a></li>
<li><a href="https://www.grammarly.com/blog/ai/what-is-google-gemini/">What Is Google Gemini ? An In-depth Overview</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Google`, `#Gemini`, `#LLM`, `#Pre-training`

---

<a id="item-9"></a>
## [SMIC Tests China's First Domestic DUV Lithography Machine](https://t.me/zaihuapd/42800) ⭐️ 8.0/10

SMIC is piloting the first domestically developed advanced deep ultraviolet (DUV) lithography machine, built by Shanghai startup Yuliangsheng Technology, targeting 28nm chip production and exploring 7nm via multiple patterning. This marks a strategic milestone for China's semiconductor self-sufficiency, reducing reliance on ASML equipment amid US export controls; successful mass production could reshape global chip supply chains. The machine's components are mostly domestic, but some parts still require imports; SMIC aims to achieve mass production by 2027, though yield and stability challenges remain.

telegram · zaihuapd · Jul 27, 14:10

**Background**: Deep ultraviolet (DUV) lithography is a mature technology used to pattern features on chips, while extreme ultraviolet (EUV) is needed for advanced nodes below 7nm. Multiple patterning, which uses multiple exposures to increase resolution, enables DUV tools to produce smaller nodes like 7nm at the cost of lower throughput and yield. China currently relies on ASML's DUV tools, as EUV sales are blocked by US-led export restrictions.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Multiple_patterning">Multiple patterning - Wikipedia</a></li>
<li><a href="https://cryptobriefing.com/china-homegrown-duv-lithography-production/">China begins limited production of homegrown immersion DUV ...</a></li>

</ul>
</details>

**Tags**: `#semiconductor`, `#lithography`, `#China`, `#SMIC`, `#chip manufacturing`

---

