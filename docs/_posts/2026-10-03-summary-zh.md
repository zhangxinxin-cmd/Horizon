---
layout: default
title: "Horizon Summary: 2026-10-03 (ZH)"
date: 2026-10-03
lang: zh
---

> 从 30 条内容中筛选出 5 条重要资讯。

---

1. [新 AI 以不到 DeepNash 三十分之一的训练量击败顶尖 Stratego 人类玩家](#item-1) ⭐️ 8.0/10
2. [Greg Kroah-Hartman 驳斥 Anthropic Mythos 的内核漏洞声明](#item-2) ⭐️ 8.0/10
3. [Zig 0.17.0 发布，引发关于 LLM 与语言设计的讨论](#item-3) ⭐️ 8.0/10
4. [Google 发布 Gemini 4 Argon 前沿模型，网络防御者优先获得访问权](#item-4) ⭐️ 8.0/10
5. [2025 年诺贝尔生理学或医学奖授予外周免疫耐受发现者](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [新 AI 以不到 DeepNash 三十分之一的训练量击败顶尖 Stratego 人类玩家](https://arstechnica.com/science/2026/10/ai-finally-beat-the-best-stratego-player-in-history-and-did-it-on-a-budget/) ⭐️ 8.0/10

根据发表在《Nature》上的论文（arXiv 编号 2511.07312），一套新的人工智能系统首次击败了历史上最强的 Stratego 人类棋手。其核心创新是引入第二个神经网络，专门用于推测敌方隐藏棋子的身份，使该智能体的学习速度比 DeepMind 2022 年的 DeepNash 快约 34 倍，最终棋力还显著更强。 Stratego 是人工智能尚未超越顶尖人类的最后几款标志性棋类游戏之一，其隐藏信息的结构使其难度从根本上高于国际象棋或围棋。一种能以远少算力达到超人水平的方法，意味着在处理欺骗、不确定性和信息不完整的现实问题（如谈判、安全对抗与战略规划）上可能出现更高效的思路。 新增的网络会持续维护一个关于每个格子上究竟藏着哪枚棋子的概率分布（信念分布），这正是当棋盘大部分状态不可观测时仍能进行有意义的前瞻搜索的关键。论文报告称，该智能体在击败最强人类 Stratego 棋手的同时，所用对局数仅为 DeepNash 的约 34 分之一，不过具体的算力消耗与评估协议细节需查阅《Nature》论文和 arXiv 预印本。

hackernews · PaulHoule · 10月2日 14:11 · [社区讨论](https://news.ycombinator.com/item?id=49933740)

**背景**: Stratego 是一款类似国际象棋的双人棋盘游戏，在 10×10 的棋盘上进行，每方控制 40 枚有等级之分的棋子，目标是夺取对方的军旗。与国际象棋不同，玩家看不到对方棋子的具体身份，因此每次进攻都是基于推断的赌博——这正是它被称为“非完全信息博弈”的原因。DeepMind 的 DeepNash 在 2022 年证明了强化学习配合无模型搜索可以达到人类专家水平，但需要海量的训练对局。隐藏信息类游戏对 AI 之所以困难，是因为标准搜索方法假定完整状态已知，智能体必须同时在大量可能的世界状态上进行推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Stratego">Stratego - Wikipedia</a></li>
<li><a href="https://metatext.io/models/deepnash">DeepNash model by DeepMind | Metatext</a></li>
<li><a href="https://www.wikihow.com/Play-Stratego">How to Play Stratego: Rules and Tips for Beginners - wikiHow Stratego | Board Game | BoardGameGeek Stratego Pieces Explained – Must-Know Facts - Dice n Board With most information hidden, the game Stratego had stumped ... Stratego - Board Games Wiki</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论整体热情高涨，既有对童年 Stratego 回忆的分享，也有实质性的技术分析。一个获得广泛认同的观点是：真正突破在于样本效率的大幅提升——因为在隐藏信息博弈中，一步棋的好坏取决于玩家无法获知的信息，天真的前瞻搜索根本行不通；也有人讲述对手用带暗记的棋子作弊的往事，还有开发者调侃说自己本打算亲手做出第一个战胜人类的 Stratego 机器人。

**标签**: `#AI`, `#reinforcement learning`, `#imperfect information`, `#game theory`, `#Stratego`

---

<a id="item-2"></a>
## [Greg Kroah-Hartman 驳斥 Anthropic Mythos 的内核漏洞声明](https://www.youtube.com/watch?v=NnV_cWeoo5Q) ⭐️ 8.0/10

在 Kernel Recipes 2026 上题为《Security in the LLM Age》的演讲中，Linux 内核维护者 Greg Kroah-Hartman 详细拆解了 Anthropic 关于其 Mythos 模型发现 79 个 Linux 内核漏洞的说法：其中 24 个仅有“某个东西崩溃了”这类毫无细节的描述，14 个根本不是漏洞，3 个完全是编造的数据，另有 15 个在最新版本中早已修复。他的结论是，这一整套工作折算下来不过相当于大约一小时的内核开发工作量。 这份分析为如何评估 AI 驱动的漏洞研究树立了一个具体、有数据支撑的评判基准，也直接削弱了“前沿模型危险到不能公开发布”这类营销叙事。它还凸显了 AI 生成安全发现中更广泛的署名归属问题——最初编写并修复这些代码的人类维护者根本没有被引用。 Kroah-Hartman 指出，Mythos 本质上是对过去几十年内核开发者提交的补丁做模式匹配，再把同样的机制套用到别处，以检验修复是否被普遍应用；在 20 个确实需要修复的发现中，有 7 个的前提是“假设存在恶意文件系统镜像”，2 个假设攻击者能够注入数据，因此都属于有条件的场景而非普遍性缺陷。而 15 个已被修复的条目中，11 个由其他开发者早已修好，4 个由 Anthropic 自己修复。

hackernews · usernomdeguerre · 10月2日 02:51 · [社区讨论](https://news.ycombinator.com/item?id=49929391)

**背景**: Greg Kroah-Hartman 是最知名的 Linux 内核维护者之一，长期负责稳定版内核发布，并参与合著了《Linux Device Drivers》。Kernel Recipes 是一个在巴黎举办多年的非正式 Linux 内核会议，2026 年这一届于 9 月 21 日至 23 日举行。Anthropic 的 Mythos 模型被宣传为在发现漏洞方面强到需要限制发布范围的前沿系统，而这一说法此后不断受到外界质疑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theregister.com/security/2026/04/22/anthropic-mythos-shaping-up-as-nothingburger/5225649?trk=article-ssr-frontend-pulse_little-text-block">Anthropic Mythos shaping up as nothingburger</a></li>
<li><a href="https://kernel-recipes.org/">Kernel Recipes</a></li>
<li><a href="https://en.wikipedia.org/wiki/Greg_Kroah-Hartman">Greg Kroah-Hartman - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者称赞 Kroah-Hartman 的坦诚，并把他幻灯片中的分类数据视为整场演讲最令人警醒的部分，不少人强调这 79 个发现折算下来只相当于约一小时的内核开发工作。也有人批评 Anthropic 没有引用最初修复这些问题内核开发者，并将其与 OpenAI 在署名归属上的失败相提并论，同时指出“出于安全考虑限制发布”与实际结果平平之间存在强烈反差。

**标签**: `#AI Security`, `#LLM`, `#Linux Kernel`, `#Vulnerability Disclosure`, `#Open Source`

---

<a id="item-3"></a>
## [Zig 0.17.0 发布，引发关于 LLM 与语言设计的讨论](https://ziglang.org/download/0.17.0/release-notes.html) ⭐️ 8.0/10

Zig 项目发布了 0.17.0 版本的发布说明，这是其编译器与工具链最新的带标签版本，内容涵盖语言的持续演进、项目对 LLM 辅助开发日益务实的态度，以及目标平台支持和构建集成的改进。该版本在 Hacker News 上引发了约 200 分、120 条评论的热烈讨论。 Zig 是增长最快的系统编程语言之一，被广泛视为 C 语言在当代的有力替代方案，因此每一次版本发布都预示着底层软件开发可能的发展方向。围绕 0.17.0 的讨论同样重要，因为它显示一个知名语言项目正转向接受 LLM 作为正当的工程工具，而其他语言社区仍在为此争论。 Zig 目前仍处于 1.0 之前的版本，官方明确其尚不稳定，评论者也指出相比更成熟的语言，其生态仍然较小。用户表示最期待在后续版本中看到的新特性包括全新的无栈协程 I/O 实现和一等公民的模糊测试（fuzzer）工具，多位评论者还强调新的构建集成有望在工具链层面带来突破。

hackernews · ErenayDev · 10月2日 20:56 · [社区讨论](https://news.ycombinator.com/item?id=49938521)

**背景**: Zig 是由 Andrew Kelley 创建并于 2016 年首次公布的通用系统编程语言与工具链，采用 MIT 许可证发布，并由 Zig 软件基金会通过企业赞助和个人捐赠提供资金支持。它被设计为对 C 语言的通用性改进：没有预处理器和宏，改用编译期（comptime）泛型与反射；采用手动内存管理；并支持紧凑结构体（packed struct）、任意位宽整数和多种指针类型等底层特性。它以广泛的交叉编译与目标平台支持著称，其发布说明通常是篇幅很长、内容详尽的文档，社区也将其视为重大事件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Zig_(programming_language)">Zig (programming language)</a></li>
<li><a href="https://ziglang.org/">Home Zig Programming Language</a></li>

</ul>
</details>

**社区讨论**: 整体情绪以正面为主但并不一致：多位评论者称 Zig 是他们用过设计最好的语言，称赞其目标平台支持可能是唯一能真正与 C 竞争的实现，并对项目转向务实接纳 LLM 表示欢迎，指出 Andrew Kelley 在参考 SQLite 的成果后开始愿意用 LLM 来发现缺陷。也有人提出顾虑——一位开发者表示因核心团队成员的不友善态度而离开了 Zig 生态，正在把工作迁移到 Odin；另有人则直接追问，考虑到该项目此前对 AI 的强硬立场，如今 Zig 项目整体进展如何。

**标签**: `#Zig`, `#programming languages`, `#release notes`, `#systems programming`, `#LLM`

---

<a id="item-4"></a>
## [Google 发布 Gemini 4 Argon 前沿模型，网络防御者优先获得访问权](https://t.me/zaihuapd/44165) ⭐️ 8.0/10

2026 年 9 月 30 日，Google 发布新前沿模型 Gemini 4 Argon，面向真实软件工程、企业知识工作与网络防御，并先通过 Fairwind 计划向一批受信任的网络防御者开放。该模型支持最高 100 万输出 token，起售价为每百万输入 token 2 美元、每百万输出 token 10 美元。 如果消息属实，Argon 将把前沿大模型进一步推入企业软件工作和安全运营领域，其自主漏洞发现与修复能力可能改变缺陷被发现和修补的速度。这也延续了一个趋势：最强大的模型先向经过审核的防御方开放，随后才面向普通商业客户。 Google 表示，Argon 能够自主发现、验证并修复关键软件漏洞，并会在扩大测试、完善安全措施之后，再向付费 API 客户和 Google AI Ultra 订阅用户开放。100 万输出 token 的上限相比多数模型的输出上限异常之大；但需注意，目前流传的这则公告来自未经核实的 Telegram 聚合频道，因此价格与可用范围等细节在 Google 官方渠道确认前应视为临时信息。

telegram · zaihuapd · 10月2日 04:59

**背景**: Gemini 是 Google DeepMind 的旗舰大语言模型系列，而“前沿模型”指的是实验室已构建出的能力最强的一档模型。Google 于 2026 年 9 月推出的 Fairwind 计划是一项受限访问计划，让政府、医疗机构、电信运营商等高优先级防御方在新威胁出现前，提前使用先进模型与网络防御工具。Argon 的安全能力延续了这一思路，即让 AI 智能体不仅能发现软件漏洞，还能生成并应用修复方案，而这在过去通常由人类安全工程师完成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/">Introducing Gemini 4 Argon - The Keyword</a></li>
<li><a href="https://www.cnbc.com/2026/09/30/google-gemini-4-argon-ai.html">Google rolls out Gemini 4 Argon, its most advanced model - CNBC</a></li>
<li><a href="https://deepmind.google/fairwind-program/">Fairwind Program — Google DeepMind</a></li>

</ul>
</details>

**标签**: `#Google`, `#Gemini`, `#LLM`, `#cybersecurity`, `#AI-announcement`

---

<a id="item-5"></a>
## [2025 年诺贝尔生理学或医学奖授予外周免疫耐受发现者](https://t.me/zaihuapd/44174) ⭐️ 8.0/10

2025 年诺贝尔生理学或医学奖授予 Mary E. Brunkow、Fred Ramsdell 和 Shimon Sakaguchi，以表彰他们在“外周免疫耐受”领域的开创性发现，即防止免疫系统攻击自身器官的关键机制。该奖项肯定了他们对“胸腺之外免疫系统如何被约束”这一问题的研究——胸腺本是筛选并清除自身反应性免疫细胞的场所。 这些发现确立了调节性 T 细胞（Treg）的存在及其分子基础，把一个长期存在争议的设想变成了现代免疫学的核心支柱。它们支撑着自身免疫病、过敏、器官移植排斥以及肿瘤免疫治疗的研究与疗法——在不同疾病中，Treg 有时需要被抑制，有时需要被增强。 Treg 是 CD4+ T 细胞中一个特殊亚群，其谱系分化与抑制功能由 X 染色体编码的转录因子 FOXP3 决定；Sakaguchi 的贡献在于识别出这一细胞群体，而 Brunkow 与 Ramsdell 则把 FOXP3 缺陷与一种致死性自身免疫综合征联系起来。除 Treg 之外，外周免疫耐受还依赖克隆无反应性（anergy）和外周删除等机制，它也是人体对无害食物抗原与过敏原不产生免疫反应的原因。

telegram · zaihuapd · 10月2日 14:15

**背景**: 免疫系统必须区分“自我”与“外来”，这主要通过两处机制完成：一是胸腺中的中枢耐受，负责清除绝大多数自身反应性 T 细胞；二是身体其他部位的外周耐受，负责约束那些逃过筛选的自身反应性细胞。由于胸腺的筛选并不完美，外周耐受至关重要——一旦失效，免疫系统就会攻击自身组织，引发自身免疫病。调节性 T 细胞是最著名的外周耐受机制：它们抑制其他 T 细胞的活化、扩增与功能，在“对病原体作出反应”和“对自身保持耐受”之间维持精细平衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Peripheral_tolerance">Peripheral tolerance - Wikipedia</a></li>
<li><a href="https://www.utu.fi/en/news/news/regulatory-t-cells-discovered-by-shimon-sakaguchi-maintain-order-in-the-body">Regulatory T cells discovered by Shimon Sakaguchi maintain order...</a></li>
<li><a href="https://pubmed.ncbi.nlm.nih.gov/39136284/">A splice of life: the discovery , function , and clinical implications of...</a></li>

</ul>
</details>

**标签**: `#Nobel Prize`, `#Immunology`, `#Peripheral Immune Tolerance`, `#Regulatory T Cells`, `#Scientific Breakthrough`

---