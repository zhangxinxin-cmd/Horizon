---
layout: default
title: "Horizon Summary: 2026-11-05 (ZH)"
date: 2026-11-05
lang: zh
---

> 从 38 条内容中筛选出 6 条重要资讯。

---

1. [Kimi 发布 K3.1-Pro：三万亿参数开放权重模型，支持百万 token 上下文](#item-1) ⭐️ 9.0/10
2. [AI 漏洞挖掘迫使软件团队偿还四十年技术债](#item-2) ⭐️ 8.0/10
3. [Anthropic 展示可验证大模型推理的密码学证明方案](#item-3) ⭐️ 8.0/10
4. [腾讯发布 Hy4：7700 亿参数开放权重模型，主打游戏开发与开放科学](#item-4) ⭐️ 8.0/10
5. [腾讯斥资约 70 亿美元向甲骨文租用 10 万枚先进 AI 芯片](#item-5) ⭐️ 8.0/10
6. [OpenAI 发布 ChatGPT Images 2.0：引入推理与联网搜索，大幅强化文字渲染](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Kimi 发布 K3.1-Pro：三万亿参数开放权重模型，支持百万 token 上下文](https://t.me/zaihuapd/44920) ⭐️ 9.0/10

Kimi 正式发布 K3.1 系列的首款模型 K3.1-Pro，官方称这是其目前最强的三万亿参数级开放权重模型，支持 100 万 token 上下文窗口。该模型在 K3 基础上扩大后训练规模，重点提升编程、三维创作、金融研究以及复杂智能体任务的能力，并同步推出速度为标准版 2—3 倍的 Highspeed 版本。 如果官方公布的数据站得住脚，那么一个可公开下载的模型已经能与闭源前沿模型正面较量，甚至在部分智能体编程任务上实现反超，这对希望自建部署而非租用 API 的企业意义重大。其宣称的 Terminal-Bench 4.0 得分 65.7% 高于 GPT-6 Astra 的 58.2%，说明开放权重模型已真正进入前沿竞争的第一梯队，而不只是落后一代的替代品。 编程能力的升级主要围绕长流程任务执行和完整项目交付，Terminal-Bench 4.0 得分为 65.7%，高于 GPT-6 Astra 的 58.2%，据称已接近 Claude 旗舰模型的表现。最需要注意的限制在于落地成本：三万亿参数意味着自建部署需要规模极大的多 GPU 节点，而且上述基准分数均来自厂商自报，原始帖子中并未提供第三方独立验证。

telegram · zaihuapd · 11月4日 15:47

**背景**: 开放权重模型指的是训练后的参数被公开发布、任何人都可以下载并运行的模型，与之相对的是只能通过 API 访问的闭源模型；这类模型已从本地小型助手发展到面向长周期软件工程的万亿参数级系统。上下文窗口是模型在单次推理中能够读取的最大文本量（以 token 计），100 万 token 约合 75 万英文单词，足以容纳一个中等规模的代码库或大量长篇金融文档。Terminal-Bench 4.0 是一个在命令行环境中用高难度真实任务考察智能体表现的基准，因此厂商喜欢用它来证明自家模型适合真实的智能体工作，而不只是聊天。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tbench.ai/">TERMINAL - BENCH</a></li>
<li><a href="https://artificialanalysis.ai/ko/evaluations/terminalbench-4-0">Terminal - Bench 4 . 0 Benchmark Leaderboard | Artificial Analysis</a></li>
<li><a href="https://devtk.ai/en/blog/llm-context-window-explained/">LLM Context Windows Explained: 4K to 1M Tokens (2026)</a></li>

</ul>
</details>

**社区讨论**: 社区意见明显分化：有人批评 K3.1-Pro 是“刷榜模型”（benchmaxxed），认为它相较 DeepSeek V4.1-Flash 提升有限，且在竞品 Hy4 的内部基准上得分并不高；但也有测试者表示实际使用效果很强，称其“略逊于前沿但仍足以覆盖绝大多数场景”。另一些讨论聚焦现实成本——自建部署需要 8 块 B300 级别的节点，而 OpenRouter 上的第三方推理服务商已能以相同价格提供 Moonshot 官方端点两倍的吞吐量，说明推理成本仍有可观的下降空间。

**标签**: `#LLM`, `#open-weight models`, `#Kimi`, `#AI benchmarks`, `#long context`

---

<a id="item-2"></a>
## [AI 漏洞挖掘迫使软件团队偿还四十年技术债](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) ⭐️ 8.0/10

IEEE Spectrum 的一篇文章提出，AI 驱动的漏洞发现正在迫使软件行业直面过去约四十年累积下来的技术债；该文在 Hacker News 上引发大规模讨论，获得 1067 分和 634 条评论。文章的核心框架是：自动化的 AI 安全工具暴露出大量沉睡已久的缺陷，其速度超过了团队消化和修复的能力。 如果 AI 发现漏洞的速度超过工程团队的修补速度，那么安全与维护工作就不再是背景杂务，而会占用整个行业更大比例的研发产能。这一转变会影响所有交付软件的人——从维护遗留代码库的大型厂商，到从未配备专职安全人员的开源维护者。 评论者对文章的叙事提出了反驳：许多被贴上“技术债”标签的问题并不是靠外科手术式的小补丁就能修好的差一错误，而是需要真正的重构或重新设计，因此这项工作不是一次性的清偿，而可能是一条持续的跑步机。还有人援引《哥德尔、艾舍尔、巴赫》中普及的不可能性结论，认为任何系统不仅在实践中、甚至在理论上都无法做到完全安全。

hackernews · pseudolus · 11月4日 11:52 · [社区讨论](https://news.ycombinator.com/item?id=50364336)

**背景**: 技术债是一个比喻，指开发过程中走捷径所留下的负担——临时凑合的写法、被推迟的重构、缺失的测试——它们让后续改动更慢、更危险。过去，发现安全漏洞需要稀缺的人工审计者，因此许多缺陷多年无人发现，而开源软件则依赖“众人之眼终会审查代码”这一乐观假设。AI 辅助分析改变了这一算式，使自动化漏洞挖掘变得廉价且可规模化，这正是被报告的问题数量急剧上升的原因。

**社区讨论**: 讨论总体上对文章的前提持质疑态度：一位高赞评论者警告说，这可能是“强制性的、无休止的、不增加功能的修修补补的跑步机”，而非真正偿还债务；另一位则指出，只有部分问题属于简单的小补丁。也有人更为乐观，希望国家行为体和商业间谍公司的零日漏洞会在这个过程中被顺带发现，并认为 AI 审计终于让开源“别人已经审过了”的承诺变得真实；还有人建议将来把 2026 年之后由 AI 编写的代码与之前四十年的代码在技术债上做对比，以此衡量 AI 的真实价值。

**标签**: `#AI security`, `#technical debt`, `#cybersecurity`, `#vulnerability management`, `#software engineering`

---

<a id="item-3"></a>
## [Anthropic 展示可验证大模型推理的密码学证明方案](https://www.anthropic.com/research/provable-inference) ⭐️ 8.0/10

Anthropic 发布了一项研究，介绍一种密码学方法，使客户能够验证某条回复确实由指定的那个大语言模型生成，而无需信任服务商的声称。服务商先对模型权重做出承诺（commitment），随后为每个请求提供证明，证实该回复来自所承诺的模型。 闭源 API 服务商可能在按旗舰模型计费的同时悄悄换成更便宜或量化后的模型，而仅凭输出质量无法发现这种替换。可验证推理能为企业客户、审计方和监管机构提供关于模型归属的密码学保证，随着大模型智能体被授权转移资金、触发部署，这一点愈发重要。 代价相当可观：计算开销约为常规推理的 90 至 100 倍，且在 24 线程上校验单条证明约需 17 秒（单线程约 21 秒）。权重承诺约为 6.5 MB，有效期大约覆盖 1600 万次请求，之后服务商必须重新提交承诺。

hackernews · ltononro · 11月4日 17:17 · [社区讨论](https://news.ycombinator.com/item?id=50368626)

**背景**: 零知识证明（ZKP）允许一方在不泄露底层数据的前提下证明某项计算被正确执行，zkLLM 等系统已将其用于神经网络推理。把 ZKP 用于大语言模型非常困难，因为 Transformer 推理涉及数十亿参数以及难以在证明系统中高效表达的非线性运算。Anthropic 面对的场景更难：模型权重是专有的，客户必须在看不到权重的情况下被说服。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/research/provable-inference">Progress on provable inference for large language models \ Anthropic</a></li>
<li><a href="https://arxiv.org/abs/2404.16109">zkLLM: Zero Knowledge Proofs for Large Language Models [2603.18046] NanoZK: Privacy-Preserving Verifiable Inference ... zkLLM: Zero Knowledge Proofs for Large Language Models Zero-Knowledge Proofs for Verifiable AI Inference: The 2026 ... OpenLLM: Modular and Scalable zkSNARKs for Verifiable LLM ... zkAgent: Verifiable LLM Agent Execution via One-Shot ... zkLLM: Zero-Knowledge Proofs for LLMs</a></li>
<li><a href="https://gist.github.com/dcolley/6e98241f1662bb3ad45385535cde96fb">Survey of verifiable AI inference as of May 2026 · GitHub</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者对成本提出质疑，认为让四家独立服务商运行同样的非批处理提示即可获得廉价的概率性证明，而对于开放权重的模型，直接重算更快且无需任何密码学。评论者 neuwirth 对署名提出异议，称该工作源自他早先的 VerInf 项目，连选用 400B 模型的做法都被沿用却几乎未获致谢；也有人指出该方案能发现 OpenRouter 之类聚合器悄悄改路由模型的行为。

**标签**: `#provable inference`, `#LLM security`, `#cryptography`, `#zero-knowledge proofs`, `#Anthropic`

---

<a id="item-4"></a>
## [腾讯发布 Hy4：7700 亿参数开放权重模型，主打游戏开发与开放科学](https://hy.tencent.ai/research/hy4) ⭐️ 8.0/10

腾讯于 2026 年 11 月 4 日发布最新一代大语言模型 Hy4，称其是当前最强的开放权重模型之一，总参数达 7700 亿、每 token 激活 490 亿参数，上下文窗口超过 100 万 token。同时，腾讯还开源了两个科学基础模型——用于单细胞表征的 HyCell 和用于物理场建模的 HyPDE，并表示模型权重与系统卡将在未来几天内公布。 此次发布进一步加剧了腾讯、DeepSeek、Z.ai 和阿里巴巴等中国实验室之间的开放权重竞争，早期基准显示 Hy4 落在成本与准确率的前沿——以约七分之一的价格取得与竞品相当的效果。开源 HyCell 与 HyPDE 也让高校和独立研究者获得了可自行运行的计算生物学与物理学工具，而不必依赖受限的 API 访问。 腾讯自己也承认，在研究级数学、长程编码、模型自我改进和高级视觉问答等具有挑战性的内部基准上，Hy4 与顶级闭源模型仍存在明显差距。其游戏开发专长来自与腾讯互动娱乐事业群（IEG）的专业开发者合作，围绕功能实现、玩法逻辑、状态追踪和资产管线来筛选训练数据与构建评测，并针对 Unreal Engine、Unity 和 Godot 做了深度引擎适配，还扩展了多人游戏开发能力。

hackernews · Philpax · 11月4日 14:11 · [社区讨论](https://news.ycombinator.com/item?id=50365780)

**背景**: 所谓“开放权重”模型，是指训练好的参数被公开发布、可供下载，任何人都能在本地运行或微调，而不只是调用厂商的 API——这与 OpenAI、Anthropic 等闭源专有模型形成对比。Hy4 采用混合专家（MoE）架构，因此 7700 亿的总参数量远大于每个 token 实际激活的 490 亿参数，从而压低推理成本。HyCell 与 HyPDE 属于领域专用的基础模型：前者学习生物学中单细胞基因表达数据的紧凑表征，后者学习求解描述流体、传热等物理场的偏微分方程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hy.tencent.ai/research/hy4">Tencent Hy</a></li>
<li><a href="https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/">Tencent Launches Hy4, Joining the Ranks of the... - Tencent</a></li>
<li><a href="https://tech-insider.org/tencent-hy4-open-source-770b-parameters-1m-token-context-2026/">Tencent Hy4: 770B Params, 1M+ Token Context [2026]</a></li>
<li><a href="https://news.ycombinator.com/item?id=50365780">Tencent Hy4 | Hacker News</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论整体偏正面：有人称赞开源科学工具的做法与限制研究用途的西方实验室形成鲜明对比，也有人认为独特的游戏开发专长是这次发布中最有意思的部分。不少人对腾讯坦承与闭源模型仍有差距表示认可；而第三方数据分析基准测试发现 Hy4 做事 thorough（详尽）但速度很慢——每个问题平均运行约 26 次查询，有时多达 64 次——在成本与准确率前沿上位于 GPT-6.1 Sol 与 GPT-6.1 Terra 之间。

**标签**: `#open-weight-models`, `#LLM-release`, `#Tencent`, `#game-development`, `#open-science`

---

<a id="item-5"></a>
## [腾讯斥资约 70 亿美元向甲骨文租用 10 万枚先进 AI 芯片](https://t.me/zaihuapd/44912) ⭐️ 8.0/10

腾讯与甲骨文签订了一份价值约 70 亿美元、为期五年的租约，租用约 10 万枚其在中国境内无法直接购买的先进 AI 芯片，这些算力部署在东南亚的多个数据中心。据报道，这是腾讯迄今为止规模最大的海外租赁交易，目的是加速其 AI 模型与智能体工具的研发。 这笔交易表明，中国大型科技公司正通过海外租用算力而非直接购买芯片来绕开美国的出口管制，跨境云租赁正在成为获取前沿 AI 算力的重要渠道。如果这一模式被广泛效仿，可能重塑全球 AI 算力供应链，并使原本旨在阻止中国企业获得先进芯片的出口管制在执行上更加复杂。 租约金额中约有 30%需要预付；由于芯片部署在海外数据中心，这一安排落在美国规则的许可范围内——美国禁止向中国公司直接出售先进芯片，但并未禁止其租用海外算力。该消息源自《金融时报》和路透社，报道中并未说明具体涉及哪些芯片型号。

telegram · zaihuapd · 11月4日 11:01

**背景**: 自 2022 年起，美国限制向中国出口英伟达 A100、H100 及其后续型号等先进 AI 加速芯片；此前英伟达在中国 AI 芯片市场的份额超过 95%，而国产替代方案的算力大多停留在 A100 水平。这促使中国企业寻求变通办法，包括在海外云端算力上训练模型。甲骨文运营着大规模 GPU 云区域，并持续在东南亚扩建数据中心，因此成为此类安排的自然供应方。消息中提到的“智能体”指能够自主感知环境、进行规划、调用工具并代替用户执行多步骤任务的软件系统，其训练和运行都极为消耗算力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://stock.10jqka.com.cn/20251210/c673088998.shtml">早间必读：美 国 将允许 英 伟 达 向 中 国 出 售其 H 200 人工智能 芯 片 （12月10...</a></li>
<li><a href="https://bianews.com/news/details?id=226954">英 伟 达 能拦住李厂长吗</a></li>
<li><a href="https://baike.baidu.com/item/智能体/9446647">智能体（人工智能领域中的概念）_百度百科 AI智能体（Agent）是什么？（非常详细），零基础入门到精通，看这一篇... 智能体是什么？从定义到落地，一篇读懂AI自主决策系统的核心逻辑-腾讯... 什么是 AI 智能体？定义、应用场景和类型 | Google Cloud 什么是 AI 智能体？| IBM</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#Tencent`, `#Oracle`, `#export controls`, `#AI infrastructure`

---

<a id="item-6"></a>
## [OpenAI 发布 ChatGPT Images 2.0：引入推理与联网搜索，大幅强化文字渲染](https://t.me/zaihuapd/44923) ⭐️ 8.0/10

OpenAI 推出新一代图像生成模型 ChatGPT Images 2.0（基于 GPT Image 2），在生成像素之前先引入“思考”环节，即逻辑推理加上联网搜索。该模型可依据单一提示词生成最多 8 张保持视觉一致性的图片，胜任漫画、UI 元素、营销素材等复杂构图，最高输出 2K 分辨率，并显著提升了中文、日语、韩语等非拉丁语系的文字渲染准确度。 文字渲染和指令遵循一直是图像生成模型最顽固的两个短板，一旦补齐，AI 图像就能从“概念草图”向可直接交付的设计素材靠拢，覆盖漫画、UI 原型和多语言营销物料等场景。把联网搜索嵌入生成流程，也意味着提示词不必再手动描述模型可能不知道的现实信息，这对所有基于 OpenAI 模型搭建设计与内容流水线的团队都有直接影响。 “思考”环节会在图像本身之外带来额外的费用与延迟——第三方分销页面指出，API 按张计费（高质量 1024×1024 输出约 0.21 美元），还需叠加思考模式消耗的 token。单次最多 8 张一致性图像和 2K 分辨率上限来自官方发布信息；但一些第三方页面宣传的是 4K 输出等不同规格，具体限制仍应以 OpenAI 官方文档为准。

telegram · zaihuapd · 11月4日 23:42

**背景**: Stable Diffusion、早期 DALL·E 等主流图像生成模型通过逐步去噪生成画面，擅长质感与光影，但在需要“准确”的任务上表现不佳：拼写单词、遵循多段式指令，或在多张图中保持同一角色一致。所谓“会思考”的图像模型借鉴了大语言模型的思维链思路：先做规划、可调用联网搜索等工具，再渲染并自我检查。多图一致性是当前的研究热点——MultiRef 等基准显示，即便是最先进的模型在多参考图融合上也明显吃力——而这恰恰是漫画、分镜和品牌素材的核心需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lipsync.video/gpt-image-2">GPT Image 2: Free AI Image Generator with Perfect Text</a></li>
<li><a href="https://photogpt.io/ai-models/gpt-image-2">GPT Image 2: Try ChatGPT Images 2.0 Free Online, No Sign-up</a></li>
<li><a href="https://cubistai.app/ai-models/gpt-image-2">GPT Image 2 — Try OpenAI 's Latest AI Image Generator Free</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#image-generation`, `#multimodal`, `#GPT-Image`, `#AI-models`

---