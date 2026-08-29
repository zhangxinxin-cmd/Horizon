---
layout: default
title: "Horizon Summary: 2026-08-29 (ZH)"
date: 2026-08-29
lang: zh
---

> 从 30 条内容中筛选出 11 条重要资讯。

---

1. [Htmx 4.0 发布：超媒体驱动前端的重要里程碑](#item-1) ⭐️ 9.0/10
2. [Z.ai 发布开放权重模型 GLM-5.3，获社区高度评价](#item-2) ⭐️ 9.0/10
3. [腾讯发布开源 Hy4 preview：770B 参数，盲测略胜 GLM-5.3 与 Kimi K3](#item-3) ⭐️ 9.0/10
4. [Triton 3.8.0 发布：新增前端 API 与后端优化](#item-4) ⭐️ 8.0/10
5. [图形界面应完全键盘驱动：呼吁无障碍与高效](#item-5) ⭐️ 8.0/10
6. [美国将意大利主机商 Autistici/Inventati 列为“全球恐怖分子”并实施制裁](#item-6) ⭐️ 8.0/10
7. [漏洞传闻即足以发现漏洞，LLM 加速威胁](#item-7) ⭐️ 8.0/10
8. [Luanti 因一份毫无根据的 AI 生成版权通知被 Google Play 下架](#item-8) ⭐️ 8.0/10
9. [RP2350 上的微型潜流变换器可生成 128x128 人脸图像](#item-9) ⭐️ 8.0/10
10. [Z.ai 发布 GLM-5.3-Flash，18B 激活参数，限时价格降至十分之一](#item-10) ⭐️ 8.0/10
11. [OpenAI 终止向 Cursor 提供模型，2026 年 11 月停服](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Htmx 4.0 发布：超媒体驱动前端的重要里程碑](https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released) ⭐️ 9.0/10

Htmx 4.0 于 2026 年 8 月 28 日正式发布，这是广受欢迎的超媒体驱动前端库的一个主要版本升级。此次发布带来了新特性和改进，包括通过 `hx-alpine-compat` 属性增强与 Alpine.js 的兼容性。 作为被广泛采用的库的一个主要版本发布，htmx 4.0 标志着超媒体驱动架构在 Web 开发中持续发展的势头。它为开发者提供了一种更简单、更以服务器为中心的替代复杂 JavaScript 单页应用的方案，此次发布预计会吸引新用户，并促使老用户重新审视该库。 社区讨论中提到了 `hx-alpine-compat` 这一用于解决 htmx 与 Alpine.js 兼容性问题的特性，还有开发者表示早在今年早些时候就已试用过 htmx 4.0。从社区反馈来看，该版本经历了相当长的预览期。

hackernews · rmsaksida · 8月28日 13:28 · [社区讨论](https://news.ycombinator.com/item?id=49478178)

**背景**: htmx 是一个小巧、无依赖的 JavaScript 库，允许开发者直接在 HTML 中使用 `hx-get`、`hx-post` 等属性，通过超媒体原则构建现代用户界面。它扩展了 REST 架构中 HATEOAS（超媒体作为应用状态引擎）的概念，推广了一种结合多页应用简洁性与单页应用交互性的超媒体驱动应用（HDA）架构。htmx 脱胎于 intercooler.js，已成为对抗 React 或 Angular 等重型前端框架的流行选择。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Htmx">htmx - Wikipedia</a></li>
<li><a href="https://htmx.org/">htmx - high power tools for html</a></li>
<li><a href="https://htmx.org/essays/hypermedia-driven-applications/">Hypermedia-Driven Applications - htmx Hypermedia-Driven Applications ~ htmx HATEOAS - Wikipedia William Gadney - Hypermedia Driven Applications htmx - high power tools for html Why HTMX and the 'Hypermedia-Driven' Architecture are ...</a></li>

</ul>
</details>

**社区讨论**: 社区反响总体积极，用户表达了对 htmx 的喜爱和感激，认为它给前端开发带来了令人耳目一新的简洁性。然而，一位 .NET/Angular 开发者的逆耳之言指出，htmx 可能会将展示逻辑与业务逻辑混合，对某些后端团队造成困难。讨论中还提到了 Alpine Ajax 等替代方案，以及 htmx 对 Datastar 等生态项目的启发。

**标签**: `#htmx`, `#frontend`, `#hypermedia`, `#web development`, `#release`

---

<a id="item-2"></a>
## [Z.ai 发布开放权重模型 GLM-5.3，获社区高度评价](https://huggingface.co/zai-org/GLM-5.3) ⭐️ 9.0/10

Z.ai 已在 Hugging Face 上以开放权重形式发布 GLM-5.3，引发了社区的广泛关注。该版本在 Hacker News 上获得了 214 条评论和较高的评分，早期用户反馈其性能和 token 效率俱佳。 这是一次重要的开放权重发布，使得先进的推理能力对开发者和研究者来说更加触手可及。如果这些积极反馈得到验证，GLM-5.3 可能会成为那些希望在不承担专有模型的高成本或限制的情况下获得强大性能的人的首选。 该模型以 token 效率著称，相比 Qwen3.8 和 GLM 5.2 等同类模型，它在推理和工具调用时生成的 token 更少。一些用户还发现它比美国开发的模型限制更少，并且可以在配备 512GB 统一内存的 Mac 等高端硬件上本地运行。

hackernews · jeudesprits · 8月28日 15:20 · [社区讨论](https://news.ycombinator.com/item?id=49479878)

**背景**: 开放权重模型是指训练参数被公开的 AI 模型，任何人都可以下载和使用，但可能不包含训练代码和数据。Token 效率指的是每个 token 携带多少信息；能够用更少 token 解决问题的模型，运行成本更低、速度更快，尤其是对于会生成较长“思考”链的复杂推理任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>
<li><a href="https://opensource.org/ai/open-weights">Open Weights: not quite what you’ve been told</a></li>
<li><a href="https://arxiv.org/abs/2507.00246">[2507.00246] EfficientXLang: Towards Improving Token ...</a></li>

</ul>
</details>

**社区讨论**: 社区情绪总体积极。用户称 GLM-5.3 是开放权重模型的‘甜点’，称赞其推理直觉优于 DeepSeek Flash，并将其与 Claude Opus 4.8 相提并论。其他人则强调其在复杂数据分析任务中的 token 效率，还有评论者推测第三方托管它可能会比竞争对手更容易、更便宜。

**标签**: `#LLM`, `#open-source`, `#AI`, `#GLM`, `#HuggingFace`

---

<a id="item-3"></a>
## [腾讯发布开源 Hy4 preview：770B 参数，盲测略胜 GLM-5.3 与 Kimi K3](https://mp.weixin.qq.com/s/ymr3X878B8oa2XP15CH8TQ) ⭐️ 9.0/10

2026 年 8 月 28 日，腾讯发布了迄今最强的开源模型 Hy4 preview，总参数量 770B、活跃参数 49B、上下文窗口 1M token。在 203 个工程任务的盲评中，它以 2.99 分小胜 GLM 5.3（2.92）和 Kimi K3（2.94）。 这一发布意义重大，标志着腾讯跻身顶级开源大模型行列，在工程基准上与 GLM、Kimi 正面竞争，同时提供更大的参数规模。模型在 Hugging Face、GitHub、腾讯云、ModelScope、AtomGit 和 OpenRouter 等多渠道上线，使开发者与企业能广泛获取，有望加速开源 AI 在软件工程和科学研究中的应用。 该模型采用混合专家（MoE）架构：总参数量 770B，但每次推理仅激活 49B 参数；1M token 的上下文窗口面向长周期软件工程、文档办公和科学研究场景。API 定价为每 1M 输入 token 0.834 美元、每 1M 输出 token 2.501 美元，并已上线腾讯云及主流开放模型平台。

telegram · zaihuapd · 8月28日 06:11

**背景**: 混合专家（Mixture of Experts，MoE）是一种基于稀疏激活的神经网络架构：并非每次输入都使用全部参数，而是将每个 token 路由到一部分专家模块，因此可以构建超大规模模型同时控制计算量。在 Hy4 preview 中，这意味着总参数为 770B，但每次前向传播只激活 49B 参数。上下文窗口是大语言模型一次能考虑或记住的文本量，以 token 为单位；1M token 的窗口让模型能处理超长文档或代码库。盲测（blind evaluation）则是在不知道输出出自哪个模型的情况下对模型结果进行打分，能减少基准评测中的主观偏差。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mixture_of_experts">Mixture of experts - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Context_window">Context window - Wikipedia</a></li>
<li><a href="https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/">Piloting the world's first double- blind AI evaluations</a></li>

</ul>
</details>

**标签**: `#LLM`, `#AI`, `#Tencent`, `#Open Source`, `#Model Release`

---

<a id="item-4"></a>
## [Triton 3.8.0 发布：新增前端 API 与后端优化](https://github.com/triton-lang/triton/releases/tag/v3.8.0) ⭐️ 8.0/10

Triton v3.8.0 正式发布，带来了通过 @triton.aggregate 公开的聚合类型、tl.topk 的 descending 参数，以及针对 NVIDIA 与 AMD GPU 的多项后端增强。此外，该版本扩展了 multi-CTA 支持、更新了 LLVM，并改进了解释器。 Triton 是一款被广泛采用的开源 GPU 内核编程语言，尤其常用于 AI 和机器学习工作负载。本次改进减少了样板代码，让开发者能更精细地控制内核，并提升了在 NVIDIA 与 AMD 硬件上的性能可移植性。 主要亮点包括新的自动调优监听器、确定性的 JIT 缓存键、支持在元组值内核参数中传递张量描述符，以及修复 tl.fdiv 的 IEEE 舍入问题。后端工作包括修复 GFX950 错误编译、调整 TMA 等待语义，并扩展 multi-CTA 对归约和 gather 的支持。

github · warrendeng · 8月28日 18:25

**背景**: Triton 是一种基于 Python 的语言和编译器，用于编写能在现代 GPU 上高效运行的自定义深度学习内核，其目标是比 CUDA 更高的开发效率，同时保持与底层 DSL 相当的灵活性。它通过 MLIR 进行编译，并支持 NVIDIA CUDA 与 AMD HIP 两种后端。Gluon 是 Triton 的一个方言，允许在 AMD GFX9 等特定架构上提供块级流水线结构提示，以挖掘峰值性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/triton/">Introducing Triton: Open-source GPU programming for neural networks</a></li>
<li><a href="https://github.com/triton-lang/triton">GitHub - triton-lang/triton: Development repository for the Triton ...</a></li>
<li><a href="https://triton-lang.org/main/dialects/GluonDialect.html">'gluon' Dialect</a></li>

</ul>
</details>

**标签**: `#GPU`, `#AI/ML`, `#compiler`, `#Triton`

---

<a id="item-5"></a>
## [图形界面应完全键盘驱动：呼吁无障碍与高效](https://ckardaris.com/blog/2026/08/28/keyboard-driven-guis.html) ⭐️ 8.0/10

ckardaris 的博文主张图形界面应完全由键盘驱动，并在 Hacker News 上引发热议，获得 653 分和 322 条评论。文章强调无障碍和高级用户效率是支持键盘操作的关键原因。 这之所以重要，是因为键盘无障碍常常被忽视，影响着残障用户和高级用户。社区的热烈讨论反映出人们对操作系统和框架层面更好键盘导航支持的广泛需求。 讨论中包含一些实际问题，例如跨应用键盘快捷键一致性的需求，以及 UI 框架在实现无障碍中的作用。一些评论者指出，现代框架让键盘支持变得更难，而像 Cocoa/AppKit 这样的较老框架则更容易实现。

hackernews · ckardaris · 8月28日 15:17 · [社区讨论](https://news.ycombinator.com/item?id=49479837)

**背景**: 键盘驱动的图形界面允许用户仅通过键盘与软件交互，例如使用 Tab 导航、方向键和快捷键组合。这对运动或视觉障碍人士以及追求速度的高级用户至关重要。历史上，ADA 和 WCAG 等无障碍指南都强调键盘可操作性，但许多应用仍未能做到。

**社区讨论**: 评论者普遍认同键盘无障碍的重要性，但也有人反对将其强加给所有用户。例如，'manlymuppet' 认为高级用户体验不同于普通用户体验，并非人人都愿意接受陡峭的学习曲线。'rootedbox' 则强调键盘支持对残障人士的法律和道德必要性。

**标签**: `#accessibility`, `#UI/UX`, `#keyboard navigation`, `#software design`, `#Hacker News discussion`

---

<a id="item-6"></a>
## [美国将意大利主机商 Autistici/Inventati 列为“全球恐怖分子”并实施制裁](https://www.inventati.org/) ⭐️ 8.0/10

美国国务院和财政部将意大利技术集体 Autistici/Inventati（A/I）列为特别指定的全球恐怖分子实体，冻结其资产并禁止美国人士与其往来。该指定还影响了该集体运营的 Noblogs.org 博客平台，据报道该平台已部分无法正常使用。 这是美国首次将基础设施服务提供商列为恐怖组织进行制裁，开创了危险的先例，可能使隐私工具、匿名网络和加密通信平台的运营者面临刑事化风险。I2P、Monero 和 Signal 等工具的开发者与隐私倡导者担心他们的社区也会遭到类似对待。 A/I 成立于 2001 年，源自自治反资本主义运动，为活动人士提供免费电子邮件、网站托管和隐私工具。此次制裁是在美国此前将 Palestine Action 和 Masar Badil 列入名单之后进行的；批评者认为，公开证据很少显示 A/I 与暴力恐怖主义有关，而制裁后部分服务已经下线。

hackernews · exiguus · 8月28日 12:58 · [社区讨论](https://news.ycombinator.com/item?id=49477854)

**背景**: Autistici/Inventati 是一个意大利集体，自 2001 年起运营，提供安全的数字基础设施，包括电子邮件账户、网站和博客平台 Noblogs.org。该集体植根于自治反资本主义运动，历史上曾支持抗议运动，例如在 2001 年热那亚八国集团峰会期间协助搭建独立媒体中心。美国此次的指定将该集体本身视为恐怖实体，这对基础设施服务商而非武装团体来说极不寻常。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.autistici.org/">autistici.org - Welcome to Autistici / Inventati</a></li>
<li><a href="https://thefederalist.com/2026/08/28/antifa-networks-panic-after-trump-administration-just-sanctioned-their-servers/">Antifa Networks Panic After Trump Admin Sanctioned Their Servers</a></li>
<li><a href="https://noblogs.org/">NoBlogs.org</a></li>

</ul>
</details>

**社区讨论**: 评论者强烈担忧，将基础设施服务商列为恐怖分子是前所未有的危险先例，有人将其与 I2P、Monero 等隐私工具相提并论。也有人质疑 A/I 具体做了什么，并要求提供更明确的证据，指出许多链接已无法访问，关于支持库尔德工人党（PKK）的说法难以核实。还有一些人强调了 A/I 在 2001 年热那亚八国集团抗议活动中的历史作用及其背后的政治背景。

**标签**: `#sanctions`, `#hosting`, `#privacy`, `#internet-freedom`, `#policy`

---

<a id="item-7"></a>
## [漏洞传闻即足以发现漏洞，LLM 加速威胁](https://anil.recoil.org/notes/rumour-is-the-exploit) ⭐️ 8.0/10

这篇文章提出，如今发现漏洞不再需要详细漏洞公告，仅凭模糊传闻或提交信息线索就足够了，尤其是在 LLM 辅助分析下。文章还指出开源项目收到的安全披露数量激增，一位维护者称单月就收到超过 40 份披露。 这一转变大幅降低了漏洞利用开发的准入门槛，给开源维护者带来了快速分类和修复的更大压力。它标志着 LLM 使漏洞发现与利用走向工业化的新时代，影响整个软件生态。 社区评论者 nickcw 提到，rclone 项目在过去一个月里收到 40 多份安全披露，而前十年总共约 20 份，其中约 75% 有值得处理的内容。相关研究显示，LLM 现在能够根据公告甚至零日漏洞生成可用利用代码。

hackernews · avsm · 8月28日 15:58 · [社区讨论](https://news.ycombinator.com/item?id=49480466)

**背景**: 以往，漏洞利用开发需要深厚专业知识和详细漏洞信息。如今 LLM 使该流程部分自动化，推动对低价值目标的大规模利用，并催生“漏洞传闻”经济——仅仅一点线索就可能引发利用尝试。这对传统负责任披露和补丁管理时间线构成挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/">On the Coming Industrialisation of Exploit Generation with LLMs – Sean Heelan's Blog</a></li>
<li><a href="https://labs.cloudsecurityalliance.org/research/csa-whitepaper-llm-exploit-automation-threat-landscape-20260/">Automated Exploit Generation: LLMs Cross the Threshold – Lab Space</a></li>
<li><a href="https://arxiv.org/html/2512.22753v1">From Rookie to Expert: Manipulating LLMs for Automated Vulnerability Exploitation in Enterprise Software</a></li>

</ul>
</details>

**社区讨论**: 评论者指出维护者负担过重（rclone 一个月收到 40 多份披露），AI 修复速度与组织修复意愿之间存在差距，以及 LLM 只是普及了从线索推导利用的做法而非首创。还有人认为，部署和供应链更新延迟是比检测更大的问题。

**标签**: `#security`, `#LLMs`, `#exploits`, `#open source`, `#vulnerability discovery`

---

<a id="item-8"></a>
## [Luanti 因一份毫无根据的 AI 生成版权通知被 Google Play 下架](https://blog.luanti.org/2026/08/27/luanti-dmca-tracer-ai/) ⭐️ 8.0/10

开源体素游戏引擎 Luanti（原名 Minetest）因 Tracer AI 提交了一份毫无根据的 AI 生成版权通知，被 Google Play 下架。Luanti 项目表示，他们曾在 2023 年成功驳回过同一家公司的类似声明。 这一事件表明，DMCA 滥用和 AI 生成的删除通知可能给开源项目带来严重打击，迫使其花费时间和金钱应对虚假索赔。它也引发了对 Google Play 等平台如何处理自动化版权执法以及是否需要法律改革的讨论。 据报道，该公司今年还对独立体素游戏 Allumeria 提交了类似通知，而 Lumen 数据库中的往期索赔显示出前后不一致的管辖权声明。Luanti 预计 Tracer AI 会再次撤回，但此次下架仍暴露了现行通知-删除机制的脆弱性。

hackernews · miniBill · 8月28日 06:33 · [社区讨论](https://news.ycombinator.com/item?id=49475079)

**背景**: DMCA 是美国版权法，允许权利持有人依据第 512 条要求删除涉嫌侵权的内容，但虚假声明屡见不鲜，容易被滥用。Luanti 原名 Minetest，是一个免费开源的体素游戏创建平台，与《我的世界》精神相近。AI 生成的版权通知可能看似合理，却可能包含幻觉或错误的法律主张，使自动化执法存在风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Luanti">Luanti - Wikipedia</a></li>
<li><a href="https://www.luanti.org/en/">Luanti | Open source voxel game engine</a></li>
<li><a href="https://github.com/luanti-org/luanti">GitHub - luanti-org/luanti: Luanti (formerly Minetest) is an ...</a></li>

</ul>
</details>

**社区讨论**: 评论区称赞这篇博客向外部读者清晰解释了事件背景，并有许多人呼吁对轻率的 DMCA 索赔处以罚款或要求缴纳保证金。一位评论者指出 Tracer AI 在瓦努阿图和美国之间的管辖权声明相互矛盾，称其可能构成欺诈；还有人称该公司会再次让步并道歉。

**标签**: `#DMCA`, `#copyright`, `#open-source`, `#AI`, `#Google Play`

---

<a id="item-9"></a>
## [RP2350 上的微型潜流变换器可生成 128x128 人脸图像](https://www.reddit.com/r/MachineLearning/comments/1w10tax/i_implemented_a_very_tiny_image_generation_model/) ⭐️ 8.0/10

一位开发者将一个 240 万到 400 万参数的 Latent Flow Transformer（潜流变换器）实现在 RP2350 微控制器上，并能在约 20 秒内生成 128x128 的人脸图像。这个 int8 量化模型完全在设备端运行，并将图像输出到显示器或通过 USB 传输。 这表明复杂的生成模型不仅能运行在手机或 GPU 上，也能运行在超低功耗的微控制器上。这有可能拓宽边缘 AI 的应用场景，例如设备端图像合成、保护隐私的生成，以及在廉价硬件上做教学演示。 该模型是一个 12 层的 latent flow transformer，使用 AdaLN-Zero 条件化技术和无分类器引导（CFG），作者表示 CFG 大幅提升了图像质量。推理引擎使用 ReLU²（平方 ReLU）激活来增加稀疏性并跳过不必要的计算，同时利用 DMA 从 Flash 流式读取权重，并与上一层的计算重叠进行。

reddit · r/MachineLearning · /u/cpldcpu · 8月28日 19:48

**背景**: Latent Flow Transformer（LFT）是最近提出的一种架构，它将多层 transformer 压缩为通过 flow matching 训练的连续传输算子，因此很适合做高效生成。在 RP2350 这类内存和 Flash 都很有限的低成本微控制器上运行这样的模型，需要激进地采用 int8 量化、稀疏激活技巧以及精细的内存流式调度。AdaLN-Zero 和 CFG 是扩散/流式生成模型中的常用技术：前者通过自适应层归一化注入条件，后者则通过同时训练条件与无条件生成来提升样本质量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/pdf/2505.14513">Latent Flow Transformer</a></li>
<li><a href="https://arxiv.org/abs/2402.03804">[2402.03804] ReLU$^2$ Wins: Discovering Efficient Activation ... Rectified linear unit - Wikipedia ReLU Activation Function in Deep Learning - GeeksforGeeks python - PyTorch - Custom ReLU squared Implementation - Stack ... Activation Functions — ReLU, GELU, SiLU, and SwiGLU Activation function - Wikipedia Choosing the Right Activation Function for Your Neural Network</a></li>
<li><a href="https://www.emergentmind.com/topics/adaptive-layer-normalization-zero-adaln-zero">Adaptive LayerNorm Zero Overview</a></li>

</ul>
</details>

**标签**: `#Embedded AI`, `#Model Compression`, `#Image Generation`, `#Microcontrollers`, `#Efficient Inference`

---

<a id="item-10"></a>
## [Z.ai 发布 GLM-5.3-Flash，18B 激活参数，限时价格降至十分之一](https://t.me/zaihuapd/43471) ⭐️ 8.0/10

Z.ai 发布了 GLM-5 系列首个原生多模态模型 GLM-5.3-Flash，总参数量 320B，激活参数仅 18B。限时促销价为每百万输入 Token 0.075 美元、缓存输入 Token 0.015 美元、输出 Token 0.25 美元，约为上一代价格的十分之一，且在多项编程与智能体基准上超越 GLM-5.2。 此次发布以远低于常规的价格提供接近前沿水平的多模态与编程能力，对现有 API 供应商形成压力，也让对成本敏感的 AI 应用更容易落地。使用 LLM API 的开发者可以用平民化的价格调用一个基准接近 Claude Opus 4.8 的高性能 MoE 模型。 该模型采用混合专家（MoE）架构，每个 Token 仅激活 320B 总参数中的 18B。限时促销期间缓存存储暂时免费，促销结束后将恢复原价；公告中未给出原价的具体数字，但可以确定高于促销价。

telegram · zaihuapd · 8月28日 15:32

**背景**: GLM 是 Z.ai 的大型语言模型系列，GLM-5 是其最新一代产品。MoE 架构将模型拆分为多个“专家”子网络，每个 Token 只路由到其中一小部分，从而在不大幅增加计算成本的情况下扩展总容量。“激活参数”指的是前向传播时实际参与计算的权重；GLM-5.3-Flash 拥有 320B 总参数，但每次只激活 18B，这正是它能够保持高效和低价的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2507.11181">[2507.11181] Mixture of Experts in Large Language Models Mixture of Experts in Large Language Models - arXiv.org Mixture of Experts Explained - Hugging Face A Closer Look into Mixture-of-Experts in Large Language Models A Closer Look into Mixture-of-Experts in Large Language Models Applying Mixture of Experts in LLM Architectures | NVIDIA ... Understanding Mixture of Experts (MoE): The Architecture ...</a></li>
<li><a href="https://huggingface.co/blog/moe">Mixture of Experts Explained - Hugging Face</a></li>
<li><a href="https://www.f22labs.com/blogs/active-vs-total-parameters-whats-the-difference/">Active vs Total Parameters: What’s the Difference?</a></li>

</ul>
</details>

**标签**: `#AI`, `#GLM`, `#multimodal`, `#LLM`, `#API pricing`

---

<a id="item-11"></a>
## [OpenAI 终止向 Cursor 提供模型，2026 年 11 月停服](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/) ⭐️ 8.0/10

OpenAI 宣布将终止通过 Cursor 提供其模型的合同，服务将于 2026 年 11 月 12 日结束。此举发生在 SpaceX 收购 Cursor 之后，并援引了控制权变更条款；双方已合作近四年。 这会影响广泛使用的 AI 编程工具 Cursor 及其开发者用户群，迫使 Cursor 寻找新的模型供应商。这也表明，当收购方的合规记录令人担忧时，AI 公司可能选择终止合作，从而影响 AI 生态中的并购格局。 OpenAI 表示无法确信 SpaceX 会遵守其服务条款，并指出马斯克旗下公司曾有违约记录：收购 Twitter（现并入 SpaceX）后曾违反合同，xAI 今年早些时候在宣誓下承认违反 OpenAI 服务条款。停服日期为该定制协议所允许的最大通知期。

telegram · zaihuapd · 8月29日 02:24

**背景**: Cursor 是一款基于 VS Code 平台的 AI 优先代码编辑器，开发者可以借助 AI 辅助编写和编辑代码。OpenAI 此前通过定制协议向 Cursor 提供模型；而 OpenAI 联合创始人埃隆·马斯克后来离开 OpenAI，创办了 xAI，xAI 在 2026 年成为 SpaceX 的子公司。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cursor.com/features">Features | Cursor - The AI -first Code Editor</a></li>
<li><a href="https://medium.com/@niall.mcnulty/getting-started-with-cursor-ai-86c1add6d701">Getting Started with Cursor AI . A Step-by-Step Guide for... | Medium</a></li>
<li><a href="https://en.wikipedia.org/wiki/Elon_Musk">Elon Musk - Wikipedia</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#Cursor`, `#SpaceX`, `#AI coding`, `#Business`

---