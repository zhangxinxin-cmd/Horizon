---
layout: default
title: "Horizon Summary: 2026-07-27 (ZH)"
date: 2026-07-27
lang: zh
---

> 从 31 条内容中筛选出 9 条重要资讯。

---

1. [Kimi K3：首个开源 2.8 万亿参数模型，登顶前端编程排行榜](#item-1) ⭐️ 9.0/10
2. [Fastjson 1.x 曝无 gadget 高危 RCE 漏洞](#item-2) ⭐️ 9.0/10
3. [vLLM v0.26.0 发布，支持 Inkling 模型并优化 DeepSeek-V4](#item-3) ⭐️ 8.0/10
4. [Anthropic 澄清对开放权重模型的立场](#item-4) ⭐️ 8.0/10
5. [Paged Out #9：免费黑客杂志发布](#item-5) ⭐️ 8.0/10
6. [Bun 的 Rust 重写登陆 Claude Code，v1.4 延期](#item-6) ⭐️ 8.0/10
7. [六大前沿 LLM 偏见评估：所有模型包括 Grok 均为左倾](#item-7) ⭐️ 8.0/10
8. [谷歌 Gemini 4：迄今最雄心勃勃的预训练项目](#item-8) ⭐️ 8.0/10
9. [中芯国际测试中国首台国产 DUV 光刻机](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Kimi K3：首个开源 2.8 万亿参数模型，登顶前端编程排行榜](https://t.me/zaihuapd/42793) ⭐️ 9.0/10

月之暗面开源了 Kimi K3，这是全球首个公开的 2.8 万亿参数模型，在 Frontend Code Arena 排行榜上以 1679 分排名第一，超越了 Fable 5。 这标志着开源 AI 的一个重要里程碑，K3 是迄今为止最大的开源稠密模型，并在前端代码生成方面树立了新的标杆，有望加速 AI 辅助网页开发。 K3 采用了两种新颖的架构创新：Kimi Delta Attention (KDA)，一种具有细粒度门控机制的线性注意力机制；以及 Attention Residuals，用学习的深度注意力替代了标准残差连接。该模型支持 100 万 token 上下文、原生视觉能力和工具调用、网页浏览等智能体功能。

telegram · zaihuapd · 7月27日 06:27

**背景**: 传统 Transformer 模型使用标准注意力机制，其 KV 缓存随序列长度线性增长，导致长上下文推理成本高昂。Kimi Delta Attention 是 Gated DeltaNet 的线性注意力变体，引入了对角门控来控制记忆衰减，在长上下文中实现 6 倍解码加速，同时将 KV 缓存使用量减少高达 75%。Attention Residuals 则将固定的加法残差连接替换为对之前层输出的 softmax 注意力，使得每一层能够有选择地聚合表示，从而在大规模训练中提高稳定性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2510.26692">[2510.26692] Kimi Linear: An Expressive, Efficient Attention ... GitHub - MoonshotAI/Kimi-Linear GitHub - hwilner/kimi-delta-attention: Educational ... Linear Attention: Kimi Delta Attention | Jianyu Huang Kimi Linear: An Expressive, Efficient Attention Architecture KDA (Kimi Delta Attention) | fla-org/flash-linear-attention ... Kimi K3 Technical Advancements Explained - nextbigfuture.com</a></li>
<li><a href="https://arxiv.org/abs/2603.15031">[2603.15031] Attention Residuals - arXiv.org GitHub - MoonshotAI/Attention-Residuals Attention Residuals - arXiv.org Attention Residuals wdlctc/open-attention-residuals - GitHub Attention Residuals - openlm.ai Attention Residuals Explained: Rethinking Transformer Depth</a></li>
<li><a href="https://fourweekmba.com/ai-kimi-k3-moonshot-ai-arena-frontend-code-leaderboard-open-wei/">Kimi-K3 Takes the Top Spot on Arena.ai's Frontend Code Leaderboard ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#open-source`, `#large language model`, `#AI model release`, `#code generation`

---

<a id="item-2"></a>
## [Fastjson 1.x 曝无 gadget 高危 RCE 漏洞](https://t.me/zaihuapd/42797) ⭐️ 9.0/10

安全研究人员 Kirill Firsov 披露了 Fastjson 1.x 版本 1.2.68 至 1.2.83 中存在一个高危远程代码执行漏洞，该漏洞无需开启 autoType，也无需依赖 classpath gadget，在 JDK 8、17 和 21 上均可利用。 该漏洞非常严重，因为 Fastjson 在 Java 应用程序中广泛用于 JSON 解析，且利用不需要像 autoType 或特定 gadget 链这类先前常见的先决条件，使得它在许多环境中更容易被利用。由于 Fastjson 1.x 已于 2024 年 10 月停止维护，官方不会提供补丁，用户必须紧急升级到 Fastjson2 以规避风险。 该漏洞影响 Fastjson 1.x 版本 1.2.68 至 1.2.83（含），并确认在 JDK 8、17 和 21 上可利用。唯一的修复建议是升级到 Fastjson2，因为 Fastjson 1.x 已不再受支持，官方不会发布安全补丁。

telegram · zaihuapd · 7月27日 10:31

**背景**: Fastjson 是阿里巴巴开发的一个流行的 Java 库，用于序列化和反序列化 JSON 数据。反序列化漏洞通常出现在解析不可信数据时，攻击者可以构造恶意 JSON 来执行任意代码。传统上，此类利用需要 autoType 功能（允许在 JSON 中指定类型）或特定的 gadget 链（类路径中可用的类）。这个新漏洞绕过了这两个要求，使其更加危险。Fastjson2 是完全重写的版本，解决了 Fastjson1 的许多安全问题，包括更安全的 autoType 机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/alibaba/fastjson/wiki/enable_autotype">enable_autotype · alibaba/fastjson Wiki · GitHub</a></li>
<li><a href="https://github.com/alibaba/fastjson/wiki/fastjson_safemode_en">fastjson_safemode_en · alibaba/fastjson Wiki</a></li>
<li><a href="https://www.besthub.dev/articles/why-upgrade-to-fastjson2-performance-boosts-and-safer-autotype-handling-de6e99564c12">Why Upgrade to fastjson2? Performance Boosts and Safer ...</a></li>

</ul>
</details>

**标签**: `#security`, `#vulnerability`, `#java`, `#fastjson`, `#rce`

---

<a id="item-3"></a>
## [vLLM v0.26.0 发布，支持 Inkling 模型并优化 DeepSeek-V4](https://github.com/vllm-project/vllm/releases/tag/v0.26.0) ⭐️ 8.0/10

vLLM v0.26.0 正式发布，包含来自 212 位贡献者的 411 次提交，引入了对 Inkling 模型系列的完整支持、DeepSeek-V4 的重大性能优化，以及灵活的注意力后端和 fp32 lm_head 等新功能。 此次发布巩固了 vLLM 作为领先开源 LLM 服务框架的地位，支持高效部署 Inkling 和 DeepSeek-V4 等前沿模型，并在不同硬件供应商上带来性能提升，惠及整个 AI 推理生态系统。 针对 DeepSeek-V4 的关键优化包括专用路由内核（端到端 TPOT 提升 2.94%）、fused_topk_bias 内核（提升 1.5 至 2 倍）以及稀疏性优化。本次发布还增加了按 KV 缓存组选择注意力后端、fp32 lm_head 提升精度，以及 Rust 前端对多模态输入的支持。

github · khluu · 7月27日 01:06

**背景**: vLLM 是一个开源的高吞吐量 LLM 推理服务系统，能够高效管理 GPU 内存。Inkling 是 Thinking Machines Lab 推出的 975B 参数混合专家模型，激活参数 41B，支持 100 万 token 上下文窗口。DeepSeek-V4 Pro 是 DeepSeek 发布的 1.6T 参数 MoE 模型（激活参数 49B）。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/introducing-inkling/">Inkling: Our Open-Weights Model - Thinking Machines Lab</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>

</ul>
</details>

**标签**: `#vllm`, `#LLM serving`, `#performance optimization`, `#open-source`, `#DeepSeek`

---

<a id="item-4"></a>
## [Anthropic 澄清对开放权重模型的立场](https://www.anthropic.com/news/position-open-weights-models) ⭐️ 8.0/10

Anthropic 明确表示不主张禁止开放权重模型，但提议对所有足够强大的模型进行强制性安全测试，并打击工业规模的蒸馏操作。 这一立场可能影响 AI 监管辩论，凸显了促进开放与确保安全之间的张力。打击蒸馏的提议也引发了对限制模型访问的担忧。 强制性安全测试适用于达到一定能力阈值的开放和封闭模型。Anthropic 特别针对“工业规模的蒸馏操作”，即未经授权从大模型中系统性地提取知识以创建更小模型的行为。

hackernews · surprisetalk · 7月27日 22:03 · [社区讨论](https://news.ycombinator.com/item?id=49076057)

**背景**: 开放权重模型是其训练参数（权重）公开可用的 AI 模型，允许任何人下载和使用。知识蒸馏是一种让小型模型从大型“教师”模型中学习的技术，常用于创建高效模型。Anthropic 的提议是关于如何监管日益强大的 AI 系统的持续辩论的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://allthings.how/what-is-an-open-weight-ai-model-and-how-to-use-one/">What is an Open Weight AI Model and How to Use One</a></li>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation</a></li>
<li><a href="https://www.ibm.com/think/topics/knowledge-distillation">What is Knowledge distillation? | IBM</a></li>

</ul>
</details>

**社区讨论**: 社区评论持高度批评态度。许多人认为，强制性安全测试和打击蒸馏实际上是通过引入高昂障碍来禁止开放权重模型。有人指出，Anthropic 一方面主张反对蒸馏，另一方面却因训练数据问题和解了盗版诉讼，显得虚伪。

**标签**: `#AI safety`, `#open-weights`, `#regulation`, `#Anthropic`, `#AI policy`

---

<a id="item-5"></a>
## [Paged Out #9：免费黑客杂志发布](https://pagedout.institute/download/PagedOut_009.pdf) ⭐️ 8.0/10

Paged Out #9 已作为免费 PDF 发布，包含关于 C 编程和次像素渲染等多样主题的深度技术文章，被描述为对经典黑客杂志 2600 和 Phrack 的现代诠释。 此次发布意义重大，因为它延续了黑客文化中社区驱动的高质量技术写作传统，免费提供深度的技术知识，可能激励新的黑客和程序员探索底层话题。 该杂志包含《C 语言入门》和《次像素动物园》等文章，后者涉及次像素渲染，还有一篇关于可计算密铺的文章重新发现了郝王在 20 世纪 60 年代的工作。

hackernews · laurensr · 7月27日 14:22 · [社区讨论](https://news.ycombinator.com/item?id=49070138)

**背景**: Paged Out 是一本免费的在线黑客杂志，以其深度的技术内容和精美的设计而闻名，类似于在黑客文化中具有影响力的历史杂志 2600 和 Phrack。此次发布是第九期。

**社区讨论**: 社区评论普遍正面，称赞文章的幽默和深度。用户指出了《C 语言入门》和《次像素动物园》等亮点文章，一位评论者还提供了关于可计算密铺文章的技术背景。

**标签**: `#hacker-culture`, `#magazine`, `#programming`, `#technical-articles`, `#community`

---

<a id="item-6"></a>
## [Bun 的 Rust 重写登陆 Claude Code，v1.4 延期](https://lockwood.dev/ai/2026/07/27/how-is-the-bun-rewrite-in-rust-going.html) ⭐️ 8.0/10

Bun 的 Rust 重写已在 Claude Code 中发布一个多月，但 Bun v1.4 的发布因未达到承诺的新增 Node.js 测试通过数量而延迟。 这次重写标志着广泛使用的 JavaScript 运行时从 Zig 到 Rust 的重大技术转型，有望提升性能和安全性。其进展直接影响依赖 Bun 进行快速 JavaScript 工具开发的开发者。 Rust 重写主要借助 LLM 辅助翻译完成。v1.4 版本目前因需要合并的拉取请求而受阻，以达到此前视频中宣布的 Node.js 兼容性目标。

hackernews · tomlockwood · 7月27日 11:12 · [社区讨论](https://news.ycombinator.com/item?id=49067854)

**背景**: Bun 是一个快速的全能 JavaScript 运行时，最初用 Zig 编写。该项目正进行核心重写，转型为 Rust，并利用 LLM 加速过程。Claude Code 是 Anthropic 推出的 AI 辅助编码工具，用于发布重写后的运行时。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Bun_(software)">Bun (software) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_Code">Claude Code</a></li>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>

</ul>
</details>

**社区讨论**: 项目负责人 Jarred 确认重写已悄然发布，v1.4 延期。社区成员讨论了从提交数量判断进度的难度，也有人质疑重写的必要性，指出一个基于 Zig 的替代分支实现了亚秒级构建时间。

**标签**: `#Bun`, `#Rust`, `#JavaScript`, `#rewrite`, `#software engineering`

---

<a id="item-7"></a>
## [六大前沿 LLM 偏见评估：所有模型包括 Grok 均为左倾](https://www.reddit.com/r/MachineLearning/comments/1v8fnzw/evaluated_6_frontier_llms_gpt54_claude_sonnet_46/) ⭐️ 8.0/10

一项个人评估项目在 8 个偏见基准上测试了六大前沿 LLM（GPT-5.4、Claude Sonnet 4.6、Claude Opus 4.7、Gemini Pro/Flash、Grok 4.3），共约 20,600 个样本，发现所有模型均表现出左倾行为，包括自称右倾的 Grok。 这一发现挑战了基于模型自称立场来推断其对齐的假设，揭示了 LLM 的实际行为可能与其声称的政治倾向不同，这对部署 AI 系统中的公平性和偏见缓解具有重要意义。 Grok 在 PoliticalCompass 基准上自称右倾，但在其他政治偏见基准中表现出左倾行为。此外，GPT-5.4 在 BBQ 种族相关问题上的拒绝率为 20.3%，是所有模型中最高的，而 Claude Sonnet 4.6 和 Gemini Pro 仅拒绝约 5%。

reddit · r/MachineLearning · /u/marggggggggg · 7月27日 22:37

**背景**: WinoBias、BBQ 和 SeeGULL 等偏见基准旨在衡量 LLM 中的刻板印象和社会偏见。WinoBias 专注于指代消解中的性别偏见，BBQ 涵盖多种社会偏见，SeeGULL 提供广泛的地理文化刻板印象覆盖。本研究使用这些基准以及政治偏见数据集来评估模型的自报告偏见和行为偏见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2110.08193">BBQ : A Hand-Built Bias Benchmark for Question Answering</a></li>
<li><a href="https://github.com/google-research-datasets/seegull">GitHub - google-research- datasets / seegull : SeeGULL is...</a></li>
<li><a href="https://www.emergentmind.com/topics/winobias">WinoBias : Gender Bias in Coreference Benchmark</a></li>

</ul>
</details>

**标签**: `#LLM bias`, `#political bias`, `#fairness evaluation`, `#frontier models`, `#AI safety`

---

<a id="item-8"></a>
## [谷歌 Gemini 4：迄今最雄心勃勃的预训练项目](https://9to5google.com/2026/07/26/google-gemini-4-teases/) ⭐️ 8.0/10

谷歌 CEO Sundar Pichai 在 Alphabet 2026 年第二季度财报电话会议上透露，Gemini 4 正在训练中，称其为公司迄今为止最雄心勃勃的预训练项目，目标是在 2026 年底发布。 这一公告表明谷歌继续大力投资前沿 AI 模型，可能塑造下一代大语言模型和 AGI 研究，并可能加剧与 OpenAI、Anthropic 等科技巨头的竞争。 Pichai 强调谷歌将优先把算力分配给前沿 AGI 研发，确保 Gemini 4 发布时仍处行业前沿；Gemini 3.x Flash 系列将继续保持几乎每月一次的迭代频率，重点提升智能编码等能力。

telegram · zaihuapd · 7月27日 04:06

**背景**: 预训练是构建大型语言模型的最初阶段，模型从海量无标签数据中学习以捕捉通用模式和知识。谷歌的 Gemini 模型是一系列多模态 AI 模型，旨在与 OpenAI 的 GPT-4 等其他最先进的系统竞争。AGI（通用人工智能）指的是一种假设的人工智能，能够执行人类能够完成的任何智力任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-is-pre-training-and-its-objective/">What is Pre Training and its Objective - GeeksforGeeks</a></li>
<li><a href="https://www.grammarly.com/blog/ai/what-is-google-gemini/">What Is Google Gemini ? An In-depth Overview</a></li>

</ul>
</details>

**标签**: `#AI`, `#Google`, `#Gemini`, `#LLM`, `#Pre-training`

---

<a id="item-9"></a>
## [中芯国际测试中国首台国产 DUV 光刻机](https://t.me/zaihuapd/42800) ⭐️ 8.0/10

中芯国际正在试运行由上海初创公司宇量昇科技研发的中国首台国产先进深紫外（DUV）光刻机，目标是生产 28 纳米芯片，并通过多重图形化技术探索 7 纳米节点。 这标志着中国半导体自给自足的战略里程碑，在美国出口管制下减少对 ASML 设备的依赖；成功量产可能重塑全球芯片供应链。 该设备大部分零部件已国产化，但仍有部分依赖进口；中芯国际力争在 2027 年前实现量产，但良率和稳定性挑战依然存在。

telegram · zaihuapd · 7月27日 14:10

**背景**: 深紫外（DUV）光刻是一种用于芯片图案化的成熟技术，而极紫外（EUV）则是 7 纳米以下先进节点所需的。多重图形化技术通过多次曝光来提高分辨率，使 DUV 工具能够生产 7 纳米等更小节点，但会降低产能和良率。目前中国依赖 ASML 的 DUV 设备，因为美国主导的出口管制禁止 EUV 对华销售。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Multiple_patterning">Multiple patterning - Wikipedia</a></li>
<li><a href="https://cryptobriefing.com/china-homegrown-duv-lithography-production/">China begins limited production of homegrown immersion DUV ...</a></li>

</ul>
</details>

**标签**: `#semiconductor`, `#lithography`, `#China`, `#SMIC`, `#chip manufacturing`

---