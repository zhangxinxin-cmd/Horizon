---
layout: default
title: "Horizon Summary: 2026-07-18 (ZH)"
date: 2026-07-18
lang: zh
---

> 从 38 条内容中筛选出 12 条重要资讯。

---

1. [GPT-5.6 通过提示解决凸优化 30 年难题](#item-1) ⭐️ 9.0/10
2. [Kimi K3 以更低成本达到前沿性能](#item-2) ⭐️ 9.0/10
3. [Fable 5 vs GPT-5.6 Sol 解决 NP 难问题：/goal 是否有帮助？](#item-3) ⭐️ 8.0/10
4. [LG 显示器通过 Windows Update 静默安装软件](#item-4) ⭐️ 8.0/10
5. [图表显示 Stack Overflow 衰落与 AI 和审核相关](#item-5) ⭐️ 8.0/10
6. [PHK 以自行车棚比喻告别反思](#item-6) ⭐️ 8.0/10
7. [Anthropic 将 Claude Fable 5 永久纳入高级计划](#item-7) ⭐️ 8.0/10
8. [被指为垃圾 AI 的提交赢得 2.5 万美元 DeepMind/Kaggle 大奖](#item-8) ⭐️ 8.0/10
9. [SpaceX 与五角大楼谈判数十亿美元 AI 算力交易](#item-9) ⭐️ 8.0/10
10. [台积电宣布 A14 制程将于 2028 年投产](#item-10) ⭐️ 8.0/10
11. [特朗普政府拟设类似 FINRA 的 AI 监管机构](#item-11) ⭐️ 8.0/10
12. [柬国航购 20 架 C909 创外国批量采购先例](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [GPT-5.6 通过提示解决凸优化 30 年难题](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/) ⭐️ 9.0/10

据报道，大型语言模型 GPT-5.6 通过精心设计的提示，解决了一个存在 30 年的凸优化开放问题，证明了关于球域上凸 Lipschitz 函数优化算法收敛速度的猜想。 这标志着 AI 驱动数学发现的一个重要里程碑，表明大型语言模型能够产生原创性数学证明。它可能加速优化理论的研究，并激发数学和计算机科学中长期问题的新解决方案。 具体问题涉及证明一阶方法达到凸 Lipschitz 函数 epsilon-次优解所需的迭代次数的上界。据报道，该解决方案是使用 GPT-5.6 的 Sol Pro 变体（而非 Ultra 变体）实现的，暗示了多智能体或选择机制。

hackernews · mbustamanter · 7月18日 13:00 · [社区讨论](https://news.ycombinator.com/item?id=48957779)

**背景**: 凸优化是数学优化的一个分支，其中目标函数是凸的，可行集也是凸的。这类问题具有任何局部最小值也是全局最小值的性质，因此易于处理。这个 30 年的空缺可能指的是关于某些优化算法最优收敛速度的一个开放猜想，而 GPT-5.6 成功证明了它。该结果已在 Hacker News 等平台上得到数学界的验证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=48957779">GPT-5.6 used a prompt to close a 30-year gap in convex optimization | Hacker News</a></li>
<li><a href="https://en.wikipedia.org/wiki/Convex_optimization">Convex optimization - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的社区评论指出，所解决的猜想比 OpenAI 最近的 CDC 证明更小众，但仍然是一个真正的贡献。一些人讨论了 Sol Pro 和 Ultra 之间的区别，猜测 Sol Pro 可能使用了多智能体系统。其他人强调 AI 可以暴力破解数学逻辑，从而带来进步。一些评论提到了有争议的 abc 猜想证明，并对比了证明验证的问题。

**标签**: `#AI`, `#convex optimization`, `#mathematics`, `#breakthrough`, `#GPT-5.6`

---

<a id="item-2"></a>
## [Kimi K3 以更低成本达到前沿性能](https://stephen.bochinski.dev/blog/2026/07/18/the-kimi-k3-moment/) ⭐️ 9.0/10

中国初创公司月之暗面（Moonshot AI）发布了 Kimi K3，这是一个拥有 2.8 万亿参数的模型，在关键基准测试上能与 GPT-5.6 和 Claude Opus 4.8 等顶尖美国模型相抗衡，同时 API 定价显著更低（每百万 token 输入/输出为 3 美元/15 美元，而 GPT-5.6 为 5 美元/30 美元）。 这颠覆了 AI 定价格局，并表明通过蒸馏或其他方法可以大幅降低成本，可能给美国 AI 公司带来压力，并引发关于廉价强大 AI 模型的国家安全讨论。它还加速了前沿级 AI 能力普及化的趋势。 Kimi K3 使用了名为 Kimi Delta Attention（KDA）的混合线性注意力机制和注意力残差，支持 100 万 token 上下文。尽管价格更低，它在某些排行榜上性能稍逊，但在特定编程和推理任务上声称达到或超越。

hackernews · sbochins · 7月18日 17:32 · [社区讨论](https://news.ycombinator.com/item?id=48960218)

**背景**: 知识蒸馏将知识从大型“教师”模型转移到较小的“学生”模型，从而实现更廉价、更快的推理。AI 行业正经历价格战，中国公司由于计算成本更低以及可能从美国前沿模型进行蒸馏，往往提供更低的价格。月之暗面此前发布了开源权重的 Kimi K2，Kimi K3 延续了这一系列，专注于效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(chatbot)">Kimi (chatbot) - Wikipedia</a></li>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart">Kimi K3 - Kimi API Platform</a></li>
<li><a href="https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html">China's Moonshot AI unveils Kimi K3 that rivals OpenAI, Anthropic</a></li>

</ul>
</details>

**社区讨论**: 评论者就 Kimi K3 是通过合法的蒸馏还是独立创新达到同等水平展开了辩论，许多人指出鉴于 AI 发展的本质，这种结果是不可避免的。一些人表达了对政府可能出于国家安全原因限制使用强大 AI 模型的担忧，而一位用户报告在复杂编程任务上体验不佳，质疑其实际价值尽管成本低廉。

**标签**: `#AI`, `#machine learning`, `#distillation`, `#model pricing`, `#AI safety`

---

<a id="item-3"></a>
## [Fable 5 vs GPT-5.6 Sol 解决 NP 难问题：/goal 是否有帮助？](https://charlesazam.com/blog/fable-5-gpt-5-6-sol-goal/) ⭐️ 8.0/10

一篇博客文章对比了 Anthropic 的 Claude Fable 5 和 OpenAI 的 GPT-5.6 Sol 在一个 NP 难问题上的表现，并评估了 '/goal' 参数的影响。文章提供的实证结果表明，'/goal' 对两个模型都有帮助，特别是在保持对目标的专注方面。 这一对比意义重大，因为它测试了领先 AI 模型在公认的难题类别上的表现，揭示了诸如 '/goal' 等提示策略如何增强推理能力。研究结果对使用 AI 进行复杂编码、优化和长周期任务的开发者和研究人员有影响。 该评估可能使用了特定的 NP 难基准，指标包括解决方案质量和完成时间。'/goal' 参数似乎设计用于像 Claude Code 这样的模型，以便在长时间会话中保持顶级指令。

hackernews · couAUIA · 7月18日 11:00 · [社区讨论](https://news.ycombinator.com/item?id=48956879)

**背景**: Claude Fable 5 是 Anthropic 在 FrontierBench（前沿编码评估）上得分最高的模型，擅长长期推理。GPT-5.6 Sol 是 OpenAI 在 GPT-5.6 系列中最强大的变体，在编码、科学和网络安全方面达到了最先进水平。某些 AI 工具中的 '/goal' 参数允许用户设定一个持续目标，让模型在整个对话中专注于此，从而避免偏离方向。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://openai.com/index/previewing-gpt-5-6-sol/">Previewing GPT‑5.6 Sol: a next-generation model - OpenAI</a></li>

</ul>
</details>

**社区讨论**: 社区评论显示了不同的体验：一些用户认为 Claude Code 在编码方面比基于 GPT 的工具更慢且可靠性较低，而另一些用户指出 '/goal' 有助于保持上下文。还有人对比较其他搜索策略（如“ultra mode”）表示好奇，一些用户质疑所展示图表的清晰度。

**标签**: `#AI`, `#GPT`, `#Claude`, `#NP-hard`, `#coding`

---

<a id="item-4"></a>
## [LG 显示器通过 Windows Update 静默安装软件](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent) ⭐️ 8.0/10

LG 显示器在通过 HDMI 连接时或已连接的情况下，会自动通过 Windows Update 安装软件，无需用户同意。该软件随系统启动运行，拥有完全系统权限且无沙箱保护。 这种行为绕过用户同意，带来严重的隐私和安全风险，影响数百万使用 LG 显示器的 Windows 用户。同时也凸显了 Windows Update 驱动分发机制可能推送硬件厂商任意软件这一更广泛的问题。 该软件通过 Windows Update 的自动驱动分发功能安装，触发条件是插入 LG 显示器或已连接。社区成员已找到解决方法：通过组策略或设备安装设置禁用制造商应用的自动下载。

hackernews · baranul · 7月18日 10:21 · [社区讨论](https://news.ycombinator.com/item?id=48956688)

**背景**: Windows Update 会自动下载并安装大多数硬件设备的驱动程序更新，包括显示器。硬件厂商可以提交包含额外软件的驱动包。微软的默认设置允许这些包自动分发给兼容系统。负责任披露模型要求厂商在补丁可用后再公开问题，但本案例中该行为已被公开报告。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://learn.microsoft.com/en-us/windows-hardware/drivers/dashboard/understanding-windows-update-automatic-and-optional-rules-for-driver-distribution">Understanding Windows Update rules for driver distribution - Windows drivers | Microsoft Learn</a></li>
<li><a href="https://windowsforum.com/threads/demystifying-windows-driver-updates-how-theyre-made-targeted-and-delivered.385588/">Demystifying Windows Driver Updates: How They're Made, Targeted, and Delivered | Windows Forum</a></li>

</ul>
</details>

**社区讨论**: 社区评论表达愤怒，指出问题比标题更严重：软件拥有完全系统权限、随系统启动，且在用户无任何交互下安装。用户提供了禁用该行为的解决方法，部分人认为责任在于微软的驱动同意模型而非 LG 一家。

**标签**: `#windows-update`, `#lg-monitors`, `#privacy`, `#security`, `#responsible-disclosure`

---

<a id="item-5"></a>
## [图表显示 Stack Overflow 衰落与 AI 和审核相关](https://data.stackexchange.com/stackoverflow/query/1953768#graph) ⭐️ 8.0/10

来自 Stack Exchange Data Explorer 的图表显示 Stack Overflow 活动急剧下降，社区评论指出原因包括 AI 聊天机器人、过度审核以及平台被 Prosus 收购。 这一趋势标志着开发者寻求帮助方式的转变，从传统问答论坛转向 AI 驱动工具，可能重塑软件行业的知识共享方式。 该图表在 2014 年左右达到顶峰，远在 AI 兴起之前，并在 2021 年 Prosus 收购前出现奇怪的增长峰值，随后在 ChatGPT 发布后加速下降。

hackernews · secretslol · 7月18日 11:12 · [社区讨论](https://news.ycombinator.com/item?id=48956949)

**背景**: Stack Overflow 于 2008 年上线，成为程序员主导的问答平台，依靠声誉系统和严格审核来维持高质量答案。然而，批评者认为其政策通过粗暴关闭问题和禁止闲聊来劝阻新用户，长期削弱了社区纽带。

**社区讨论**: 评论者普遍认为 Stack Overflow 的衰落源于多种因素，包括糟糕的社区管理和 AI 竞争，一些人指出早在 ChatGPT 之前衰落就已开始，原因是过于严格的审核以及平台被 Prosus 收购。

**标签**: `#stackoverflow`, `#ai`, `#community`, `#q&a`, `#decline`

---

<a id="item-6"></a>
## [PHK 以自行车棚比喻告别反思](https://queue.acm.org/detail.cfm?id=3818307) ⭐️ 8.0/10

软件开发者 Poul-Henning Kamp 发表了一篇回顾性文章《再见，感谢所有的自行车棚》，反思了他当年在开源社区推广的“自行车棚”比喻。 这篇文章对软件工程文化中普遍存在的“琐事争议”现象提供了宝贵见解，而 Kamp 的告别也标志着开源社区可能迎来转型。它引发读者重新思考琐碎分歧如何阻碍进步。 文章探讨了“自行车棚”比喻的起源和影响，并可能提出可逆决策或年龄限制等解决方案。高社区参与度（165 票、167 条评论）表明这一话题引起了深度共鸣。

hackernews · Ygg2 · 7月18日 17:27 · [社区讨论](https://news.ycombinator.com/item?id=48960155)

**背景**: “自行车棚”比喻（又称帕金森琐碎定律）描述了人们倾向于在容易理解的小事上花费过多时间。Poul-Henning Kamp 是丹麦著名软件开发者、FreeBSD 贡献者，他在 1999 年的一封邮件中推广了这一术语。他还创造了 MD5crypt 密码哈希算法并领导了 Varnish Cache 的开发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Law_of_triviality">Law of triviality - Wikipedia</a></li>
<li><a href="https://patrickkarsh.medium.com/bikeshedding-in-software-development-df72e8bfe431">Bikeshedding in Software Development | by Patrick Karsh | Medium</a></li>
<li><a href="https://en.wikipedia.org/wiki/Poul-Henning_Kamp">Poul-Henning Kamp - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者建议，可逆决策可以通过让琐事快速直觉化决策来减少“自行车棚”现象。其他人讨论了年龄限制对开源软件的潜在影响，还有人幽默地指出，“自行车棚”已经演变为 JIRA 上的“刷票”行为。一位评论者起初不同意，但多次阅读后改变了看法，突显了文章的深度。

**标签**: `#bikeshedding`, `#software engineering`, `#open source`, `#community dynamics`, `#PHK`

---

<a id="item-7"></a>
## [Anthropic 将 Claude Fable 5 永久纳入高级计划](https://simonwillison.net/2026/Jul/18/claude-make-fable-5-permanent/#atom-everything) ⭐️ 8.0/10

Anthropic 宣布自 7 月 20 日起，Claude Fable 5 将以 50%的用量限制纳入所有 Max 和 Team Premium 计划，推翻了此前将模型从订阅中移除的计划。 这一决定凸显了来自 OpenAI 的 GPT-5.6 Sol 和 Moonshot AI 的 Kimi 3 的激烈竞争压力，使得 Anthropic 移除其最佳模型变得不可行。它确保了高级订阅者能继续使用最先进的 Claude 模型，维护了高价订阅计划的价值。 每月 20 美元的 Pro Standard 计划仍不包含 Fable 5；只有 Max（每月 100/200 美元）和 Team Premium 计划可以访问。Pro 和 Team Standard 用户仍可通过使用积分访问，并获得一次性 100 美元积分。

rss · Simon Willison · 7月18日 06:00

**背景**: Claude Fable 5 是 Anthropic 最先进的 AI 模型，于 2026 年 6 月发布，在长时推理和编码方面表现出色。Anthropic 最初因计算容量限制，计划将 Fable 5 从订阅中移除，仅通过 API 定价提供。然而，GPT-5.6 Sol 和 Kimi 3 等竞争模型的推出迫使公司改变策略以留住订阅用户。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>
<li><a href="https://openai.com/index/previewing-gpt-5-6-sol/">Previewing GPT-5.6 Sol: a next-generation model | OpenAI</a></li>
<li><a href="https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html">Chinese startup Moonshot AI unveils Kimi model it says rivals ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Claude`, `#Fable 5`, `#subscription`, `#competition`

---

<a id="item-8"></a>
## [被指为垃圾 AI 的提交赢得 2.5 万美元 DeepMind/Kaggle 大奖](https://www.reddit.com/r/MachineLearning/comments/1uzyf66/did_blatant_ai_slop_just_win_a_25k_usd_deepmind/) ⭐️ 8.0/10

这一指控挑战了知名 AI 竞赛的可信度，并表明即使像 DeepMind 这样的大型机构也可能存在有缺陷的评审流程，可能削弱对 AI 研究评估的信任。 该帖子包含两部分：对写作内容的粗略审查，以及对方法论、代码和数据的详细分析，声称该提交是“一团乱麻”，其长度是要求格式的十倍，且作者和评委似乎都没有认真阅读。

reddit · r/MachineLearning · /u/TheWerkmeister · 7月18日 15:10

**背景**: 该 Kaggle 竞赛要求参与者设计基于认知科学的新 AI 基准，涵盖五种认知能力：学习、元认知、注意力、执行功能和社交认知。DeepMind 和 Kaggle 赞助了这项挑战，提供 2.5 万美元的大奖。帖子作者认为获奖提交包含无意义的数字生成和毫无根据的声称，质疑是否进行了适当的审查。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/measuring-agi-cognitive-framework/">Measuring progress toward AGI: A cognitive framework</a></li>
<li><a href="https://arxiv.org/abs/2605.28405">Measuring Progress Toward AGI: A Cognitive Framework</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#Kaggle`, `#DeepMind`, `#research integrity`, `#machine learning competitions`

---

<a id="item-9"></a>
## [SpaceX 与五角大楼谈判数十亿美元 AI 算力交易](https://www.wsj.com/tech/ai/spacex-in-talks-to-provide-computing-power-for-pentagons-ai-push-15e752e4) ⭐️ 8.0/10

SpaceX 正与美国国防部谈判，拟提供用于运行人工智能模型的数据中心算力，交易金额可能高达数十亿美元。 若达成协议，这将加深 SpaceX 与五角大楼的关系，大幅扩展其云计算业务，同时加速五角大楼在国家安全和日常作战中的 AI 能力。 谈判仍在进行中，存在破裂可能；SpaceX 近月已与 Anthropic 和谷歌签署类似算力供应协议，并计划大幅扩展云计算业务。

telegram · zaihuapd · 7月18日 01:44

**背景**: 五角大楼正加速获取云计算能力，以支持国安部门及日常作战中的 AI 应用。该部门近期已批准 SpaceX、亚马逊、谷歌、微软和甲骨文等公司在机密环境中使用其 AI 模型。SpaceX 已为国防部提供火箭发射服务、卫星通信和导弹追踪等能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.163.com/dy/article/L23MV58N05198CJN.html">SpaceX拟向五角大楼提供AI算力 合同规模或达数十亿美元|谷歌|火箭发射|知名企业|美国国防部|供应链风险|spacex|埃隆_马斯克_网易订阅</a></li>
<li><a href="https://www.163.com/dy/article/L0P01C9K05118O92.html">SpaceX： AI 烧钱不止，"太空算力霸权" 才是终极杀|谷歌|知名企业|spacex|埃隆_马斯克|openai|系列模型价格_网易订阅</a></li>

</ul>
</details>

**标签**: `#SpaceX`, `#AI算力`, `#五角大楼`, `#国家安全`, `#云计算`

---

<a id="item-10"></a>
## [台积电宣布 A14 制程将于 2028 年投产](https://t.me/zaihuapd/42643) ⭐️ 8.0/10

台积电宣布，其下一代 A14 制程技术将于 2028 年投产，与 N2 制程相比，在相同功耗下速度提升高达 15%，或在相同速度下功耗降低达 30%，逻辑密度提升超过 20%。 这一声明凸显了台积电在先进芯片制造领域保持领先地位的策略，这对未来 AI、高性能计算和移动设备至关重要。A14 节点很可能为半导体行业的性能和效率设定新基准。 A14 是继 N2（2nm）和中间节点 A16（计划 2026 年末推出）之后的完整节点升级。它将采用 GAAFET 晶体管和进一步尺寸缩放来实现性能提升。台积电计划在 2026 年末推出 A16 作为过渡节点。

telegram · zaihuapd · 7月18日 05:00

**背景**: 台积电的 N2（2nm）制程采用全环绕栅极场效应晶体管（GAAFET），计划于 2025 年量产。A16 常被称为“1.6nm”，将于 2026 年推出，采用背面供电技术，相比 N2 提升 8-10%速度或降低 20%功耗。A14 代表进一步的缩小，可能低于 1nm，延续台积电的激进缩放路线图。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_A16">A16 Technology - TSMC</a></li>
<li><a href="https://en.wikipedia.org/wiki/2_nm_process">2 nm process - Wikipedia</a></li>

</ul>
</details>

**标签**: `#TSMC`, `#semiconductor`, `#chip manufacturing`, `#process technology`, `#A14`

---

<a id="item-11"></a>
## [特朗普政府拟设类似 FINRA 的 AI 监管机构](https://www.bloomberg.com/news/articles/2026-07-17/us-considers-creating-finra-like-watchdog-to-vet-top-ai-models) ⭐️ 8.0/10

特朗普政府正考虑设立一个类似于 FINRA 的独立 AI 监管机构，负责审查顶尖人工智能模型的安全性。 这标志着 AI 治理的重大转变，既回应了华尔街对网络安全的担忧，也解决了硅谷对临时管控措施的不满，并将赋予行业在制定安全标准方面更大的发言权。 该提案由财政部长斯科特·贝森特牵头，目前正由白宫幕僚长苏茜·威尔斯审阅；总统特朗普尚未审阅该方案，相关框架仍在讨论中。

telegram · zaihuapd · 7月18日 05:45

**背景**: FINRA 是一家非营利性的自律监管组织，负责监督证券公司并确保金融交易公平，向 SEC 汇报。拟议的 AI 监管机构将类似地独立运作并由行业资助，这与 Google DeepMind 首席执行官德米斯·哈萨比斯等人最近的呼吁一致。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://brokercheck.finra.org/">brokercheck. finra .org</a></li>
<li><a href="https://www.shmoop.com/video/finance-what-is-finra?playlist=finance-incorporation">Finance : What is FINRA ? Video - Shmoop</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#government policy`, `#AI safety`, `#regulatory body`

---

<a id="item-12"></a>
## [柬国航购 20 架 C909 创外国批量采购先例](https://www.zaobao.com.sg/news/china/story20260718-9384413) ⭐️ 8.0/10

柬埔寨国家航空有限公司于 2026 年 7 月 17 日在上海签署协议，购买 20 架中国商飞 C909 飞机，成为首家成批量采购中国国产 C909 飞机的外国载旗航司。首批飞机计划于 2026 年下半年交付。 这笔交易是中国商飞国际市场拓展的重要里程碑，表明国产支线客机正在获得海外认可。同时，它有助于提升柬埔寨的空中互联互通水平，并减少对西方飞机制造商的依赖。 C909 原名 ARJ21，是一款 78 至 97 座的支线客机，航程 2225 至 3700 公里。该机采用通用电气 CF34-10A 发动机和西方供应的航电系统；协议还包括合作备忘录以保障运营成功。

telegram · zaihuapd · 7月18日 11:36

**背景**: 中国商飞 C909 是中国首款自主研发的支线客机，于 2014 年获得中国民航局型号认证。它是中国商飞系列飞机的一员，还包括窄体机 C919 和宽体机 C929。此前主要由中国国内航空公司运营，此次向外国载旗航司的出口订单代表了中国商飞国际销售的突破。该机定位与巴西航空工业公司 E-Jet 和庞巴迪 CRJ 系列等支线客机竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Comac_C909">Comac C909 - Wikipedia C909_Commercial Aircraft Corporation of China, Ltd. Comac C909 - Technical parameters Comac C909 Specs - Who That Plane?! Ultra Blue PVCO (C909) - JM Eagle C909 - NamuWiki 1--C900 and C909 installation guide - JM Eagle</a></li>
<li><a href="http://english.comac.cc/products/c909/">C909_Commercial Aircraft Corporation of China, Ltd.</a></li>

</ul>
</details>

**标签**: `#aviation`, `#COMAC`, `#C909`, `#Cambodia`, `#aerospace`

---