---
layout: default
title: "Horizon Summary: 2026-07-25 (ZH)"
date: 2026-07-25
lang: zh
---

> 从 25 条内容中筛选出 6 条重要资讯。

---

1. [vLLM v0.26.0 发布：新增 Inkling 模型系列、DeepSeek-V4 优化及 fp32 lm_head](#item-1) ⭐️ 9.0/10
2. [Anthropic 发布 Claude Opus 5，性能接近 Fable 5](#item-2) ⭐️ 9.0/10
3. [AMD 打破 CUDA 护城河的战略：AI 2026 分析](#item-3) ⭐️ 9.0/10
4. [SGLang v0.5.16 通过 DSpark 和 Inkling 提升 LLM 推理性能](#item-4) ⭐️ 8.0/10
5. [安卓可能限制设备端 ADB 访问](#item-5) ⭐️ 8.0/10
6. [开放权重 AI 正复制 Kubernetes 成为行业标准](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [vLLM v0.26.0 发布：新增 Inkling 模型系列、DeepSeek-V4 优化及 fp32 lm_head](https://github.com/vllm-project/vllm/releases/tag/v0.26.0) ⭐️ 9.0/10

vLLM v0.26.0 正式发布，包含来自 212 位贡献者的 411 次提交，引入了全新的 Inkling 模型系列及其完整支持栈，通过专用内核大幅提升 DeepSeek-V4 性能，新增生成模型的 fp32 lm_head 支持，支持按 KV 缓存组灵活选择注意力后端，并进一步成熟了 KV 卸载和分层二级存储功能。 作为广泛使用的 LLM 推理引擎，此版本扩展了模型支持并提升了推理效率，使开发者能够更轻松地部署 Inkling 和 DeepSeek-V4 等先进模型，同时获得更高的性能和精度。 Inkling 模型系列包括基础建模、分段 CUDA 图支持、Hopper FlashAttention 4 相对注意力、推测解码、LoRA 以及 ModelOpt NVFP4 量化。DeepSeek-V4 优化包括专用路由内核（端到端 TPOT 提升 2.94%）、fused_topk_bias 内核加速 1.5–2 倍，以及消除冗余重复/复制操作（端到端 TPOT 节省 1.8%）。

github · khluu · 7月25日 10:38

**背景**: vLLM 是一个开源的高吞吐量 LLM 推理引擎，通过优化 GPU 内存和计算来服务大语言模型。它支持多种量化方法和注意力后端以提升性能。Inkling 模型系列由 Thinking Machines Lab 开发，是一款新的开放权重通用模型。FlashAttention 4 是一种 GPU 内核，可在 Hopper 和 Blackwell 架构上进一步加速注意力计算。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/introducing-inkling/">Inkling : Our Open-Weights Model - Thinking Machines Lab</a></li>
<li><a href="https://www.digitalocean.com/community/tutorials/flashattention-4-llm-inference-optimization">FlashAttention 4: Faster, Memory-Efficient Attention for... | DigitalOcean</a></li>
<li><a href="https://build.nvidia.com/spark/nvfp4-quantization">NVFP4 Quantization | DGX Spark</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#GPU kernels`, `#DeepSeek`, `#release notes`

---

<a id="item-2"></a>
## [Anthropic 发布 Claude Opus 5，性能接近 Fable 5](https://simonwillison.net/2026/Jul/24/introducing-claude-opus-5/#atom-everything) ⭐️ 9.0/10

Anthropic 于 2026 年 7 月 22 日发布了 Claude Opus 5，这是一款新的旗舰模型，以一半的价格提供接近更昂贵的 Claude Fable 5 的前沿智能水平。 此次发布使前沿 AI 能力更加普及，以显著更低的成本提供顶级性能，可能改变开发者和企业的竞争格局。 Claude Opus 5 定价与上一代 Opus 4.8 相同，并提供双倍成本的快速模式。它在 Artificial Analysis 排行榜上领先，并在未显式进行网络安全训练的情况下提高了漏洞发现能力，但在漏洞利用方面仍然较弱。

rss · Simon Willison · 7月24日 23:48

**背景**: Anthropic 的模型系列包括三个层级：能力强大的 Opus 系列、高性能的 Fable 系列（如 Fable 5）以及专用于网络安全的 Mythos 系列。前沿智能指接近研究前沿的最先进 AI 能力。Claude Opus 5 旨在弥合成本与性能之间的差距，使尖端 AI 更加普及。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.vals.ai/models/anthropic_claude-opus-5">Claude Opus 5</a></li>
<li><a href="https://models.dev/models/anthropic/claude-opus-5/">Claude Opus 5 pricing, providers, and specs | Models .dev</a></li>
<li><a href="https://benchlm.ai/models/claude-opus-5">Claude Opus 5 Benchmarks, Pricing & Speed (July 2026) | BenchLM.ai</a></li>

</ul>
</details>

**标签**: `#AI`, `#Claude`, `#Anthropic`, `#model release`

---

<a id="item-3"></a>
## [AMD 打破 CUDA 护城河的战略：AI 2026 分析](https://newsletter.semianalysis.com/p/can-amd-break-the-cuda-moat-amd-advancing) ⭐️ 9.0/10

AMD 推出了配备 432GB HBM4 内存、采用 2nm 工艺的 Instinct MI455X GPU，并开发了智能体内核生成技术来自动化 CUDA 内核优化，以挑战 NVIDIA 的 CUDA 主导地位。 这可能通过为 GPU 计算提供可行的替代方案，显著改变 AI 硬件格局，有望降低成本并促进 AI 生态系统的更多创新。 MI455X 是 Helios 机架级系统的一部分，该系统集成了 72 个 GPU 与 AMD EPYC CPU 和 UALink 网络，目标性能比 MI355X 提升高达 4 倍。智能体内核生成方法使用强化学习来系统性地改进 CUDA 内核编码和优化。

rss · Semianalysis · 7月25日 00:33

**背景**: NVIDIA 的 CUDA 平台一直是 GPU 计算的主导软件生态系统，形成了使 AMD 等竞争对手难以获得动力的'护城河'。AMD 的努力包括硬件进步和自动化内核生成的软件工具，旨在减少开发者摩擦并提高 AMD 硬件的性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2602.24286v1">CUDA AgentCUDA Agent: Large-Scale Agentic RL for High-Performance CUDA Kernel Generation</a></li>
<li><a href="https://www.phoronix.com/news/AMD-Instinct-MI455X-Helios">AMD Launches Instinct MI455X, Helios AI Rack - Phoronix</a></li>
<li><a href="https://www.tomshardware.com/pc-components/gpus/amd-takes-the-wraps-off-its-instinct-mi455x-ai-accelerator-cdna-5-and-helios-rack-scale-architecture-combine-to-take-the-fight-to-nvidia-in-the-data-center">AMD takes the wraps off its Instinct MI455X AI accelerator — CDNA 5 and Helios rack-scale architecture combine to take the fight to Nvidia in the data center | Tom's Hardware</a></li>

</ul>
</details>

**标签**: `#AMD`, `#CUDA`, `#AI`, `#GPU`, `#Software Ecosystem`

---

<a id="item-4"></a>
## [SGLang v0.5.16 通过 DSpark 和 Inkling 提升 LLM 推理性能](https://github.com/sgl-project/sglang/releases/tag/v0.5.16) ⭐️ 8.0/10

SGLang v0.5.16 引入了基于置信度的推测解码算法 DSpark，最高可达 383.7 tok/s，并新增了对 975B 参数的多模态 MoE 模型 Inkling 的支持，以及其他多项改进。 这些更新显著提升了 LLM 推理速度和效率，特别是对于大规模模型，并扩展了支持的架构范围，使开发者和研究人员能够部署最先进的模型。 DSpark 使用置信度头动态调整验证窗口大小，平均接受长度约为 5 个 token。Inkling 模型混合了滑动窗口、全注意力和 Mamba2 线性注意力，并配有 NVFP4 MoE 和可选的视觉/音频塔。

github · Qiaolin-Yu · 7月25日 00:13

**背景**: 推测解码通过使用小模型生成草稿 token 并用目标模型并行验证来加速 LLM 推理。混合专家（MoE）模型每个 token 仅激活部分参数，从而提高效率。SGLang 是一个开源的 LLM 推理引擎。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.alphaxiv.org/abs/2026.dspark">DSpark : Confidence -Scheduled Speculative Decoding ... | alphaXiv</a></li>
<li><a href="https://exploreai.tools/tools/tinker-2">Inkling : Open Weights 975 B Multimodal MoE Model</a></li>
<li><a href="https://medium.com/@danieljsmit/mamba2-the-hardware-algorithm-co-design-that-unified-attention-and-state-space-models-77856d2ac4f4">Mamba2: The Hardware-Algorithm Co-Design That Unified Attention and State Space Models | by Daniel Stallworth | Medium</a></li>

</ul>
</details>

**标签**: `#speculative decoding`, `#LLM inference`, `#open source`, `#performance`, `#multimodal`

---

<a id="item-5"></a>
## [安卓可能限制设备端 ADB 访问](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/) ⭐️ 8.0/10

Android 问题追踪器中的一个提案建议限制设备端 ADB（Android 调试桥）访问，仅允许特定 IP 地址或接口连接，而非当前远程调试开启时的任意连接。 这一变化将影响依赖设备端 ADB 进行调试、测试和自动化的开发者，可能提升安全性但降低便利性。它反映了移动平台收紧开发者工具访问权限的广泛趋势。 限制要求开发者指定允许的源 IP 或网络接口，例如 Tailscale 等 VPN，而非将 ADB 暴露给所有连接。该提案并非完全禁止设备端 ADB，而是增加了一层配置。

hackernews · shscs911 · 7月25日 06:57 · [社区讨论](https://news.ycombinator.com/item?id=49045159)

**背景**: ADB（Android 调试桥）是一个命令行工具，用于调试 Android 应用，允许开发者安装应用、运行 shell 命令和访问设备日志。要无线使用 ADB，用户必须启用开发者选项，然后启用 USB 调试或无线调试。这会将 ADB 服务暴露给网络，如果在公共 Wi-Fi 上保持开放，可能会带来安全风险。提议的限制旨在通过限制仅连接可信源来减轻这种风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.android.com/tools/adb">Android Debug Bridge (adb) | Android Studio | Android Developers</a></li>
<li><a href="https://www.howtogeek.com/125769/how-to-install-and-use-abd-the-android-debug-bridge-utility/">How to Install and Use ADB, the Android Debug Bridge Utility</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一。像 microtonal 这样的用户认为攻击向量不现实，因为需要同时启用开发者选项和远程调试，因此限制似乎没有必要。其他用户如 0x_rs 认为这是 Google 控制开发者工具更广泛举措的一部分，而 jimrandomh 支持限制到受信任网络（如 Tailscale）的想法，但认为具体提案是过度反应。

**标签**: `#Android`, `#ADB`, `#Security`, `#Mobile Development`, `#Developer Tools`

---

<a id="item-6"></a>
## [开放权重 AI 正复制 Kubernetes 成为行业标准](https://tobi.knaup.me/2026-07-25-open-weight-ai-is-having-its-kubernetes-moment/) ⭐️ 8.0/10

开放权重 AI 模型正日益成为行业标准，类似于云基础设施中的 Kubernetes，实现了可定制性并挑战了供应商锁定。 这一转变可能使 AI 部署民主化，通过社区协作促进创新，并防止单一供应商主导 AI 生态系统，就像 Kubernetes 在容器编排领域所做的那样。 开放权重模型发布训练后的参数，但不提供完整的训练数据或方法论，使它们更难以检查或重新训练，但它们为推理成本提供了基准并支持定制化。

hackernews · tknaup · 7月25日 14:49 · [社区讨论](https://news.ycombinator.com/item?id=49048034)

**背景**: 开放权重 AI 指其内部参数（权重）公开发布的模型，允许他人运行和微调，但通常不包含完整的训练流程。Kubernetes 是一个用于管理容器化工作负载的开源平台，通过社区驱动创新取代了专有替代品，成为行业标准。推理成本是运行 AI 模型生成输出的成本，以每百万 token 的美元衡量，近年来已大幅下降。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/open-weight-ai-what-we-finally-opened-bonnet-nicolas-pistorio-n3ulf">Open - weight AI : what if we finally opened the bonnet ?</a></li>
<li><a href="https://www.msn.com/en-us/news/technology/openais-new-models-arent-really-open-what-to-know-about-open-weights-ai/ar-AA1JYdDH">OpenAI's New Models Aren't Really Open : What to Know About...</a></li>
<li><a href="https://www.startups.com/lexicon/inference-cost">Inference Cost: definition, the per-token economics of running AI, and the 10x-per-year cost decline | Startups.com</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，按来源禁止模型是不可能的，因为权重只是数字；批评了不透明的 AI 定价（token 经济学）；并同意开放权重模型推动了创新。一些人指出，要真正与 Kubernetes 媲美，需要公开训练数据和多家公司协作。

**标签**: `#open-weight AI`, `#Kubernetes`, `#open-source`, `#AI regulation`, `#inference pricing`

---