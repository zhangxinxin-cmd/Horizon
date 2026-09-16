---
layout: default
title: "Horizon Summary: 2026-09-16 (ZH)"
date: 2026-09-16
lang: zh
---

> 从 33 条内容中筛选出 3 条重要资讯。

---

1. [黑客攻破 Flock 监控摄像头，发现硬编码凭证](#item-1) ⭐️ 8.0/10
2. [TMLR 约谈拟拒稿论文作者，多数人无法解释自己的论文](#item-2) ⭐️ 8.0/10
3. [GoBench：用 9x9 围棋对战 KataGo 来评测大模型的新基准](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [黑客攻破 Flock 监控摄像头，发现硬编码凭证](https://www.wired.com/story/hackers-flock-camera-data-shows-how-system-works/) ⭐️ 8.0/10

安全研究员 Micah Lee 发布调查结果，指出 Flock Safety 的车牌识别监控摄像头存在大量安全漏洞，包括固件中硬编码的 API 密钥以及以明文形式存储的凭证。该报道与 404 Media 联合完成，透明组织 Distributed Denial of Secrets 随后公开了摄像头的分区镜像文件。 由于这些摄像头被大量部署在公共场所，任何攻击者只要短暂接触设备，就可能提取凭证并触达 Flock 的后端基础设施，这会削弱人们对这一已被数千家执法机构采用的监控平台的信任。此事还凸显出设计糟糕的漏洞披露政策可能是在保护厂商免受审视，而非保护用户。 评论者指出，硬编码的是 API 密钥而非管理员密码，但该密钥可用于请求同样以明文存储的凭证；而 Flock 的漏洞披露政策明确排除了研究员需要「与设备交互」或下载其数据的场景。设备上的数据未加密，意味着任何能物理接触摄像头的人都可以直接将其取走。

hackernews · driverdan · 9月16日 13:18 · [社区讨论](https://news.ycombinator.com/item?id=49726586)

**背景**: Flock Safety 成立于 2017 年，是一家美国私营公司，生产自动车牌识别（ALPR）摄像头、视频监控设备和枪声定位系统，并将采集到的数据出售给警察部门。硬编码凭证是指直接把密钥写进固件或源代码，而不是通过安全方式下发，因此任何拿到设备或其文件的人都能将其提取出来。漏洞披露政策（VDP）是规定安全研究员应如何向厂商报告漏洞、以及可获得何种法律保护的文档，因此其中的豁免条款实际上决定了研究员能否安全地调查某款产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Flock_Safety">Flock Safety - Wikipedia</a></li>
<li><a href="https://www.bugcrowd.com/blog/vulnerability-disclosure-policy-what-is-it-why-is-it-important/">Vulnerability Disclosure Policy : What is It & Why is it... | @Bugcrowd</a></li>
<li><a href="https://trufflesecurity.com/blog/llms-are-teaching-developers-to-hardcode-api-keys">LLMs are Teaching Developers to Hardcode API Keys ◆ Truffle Security Co.</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者批评相当严厉，称硬编码凭证是「彻底无能的标志」，并把问题归咎于为「缩短上市时间」而跳过安全启动架构和密钥管理的文化。多位读者剖析了 Flock 的漏洞披露政策，认为它更像是做样子而非真心接收漏洞报告；也有人强调，把现成硬件部署在公共场所，就意味着威胁模型必须包含本地物理接触。评论者还提到了与 404 Media 的合作报道，以及 Distributed Denial of Secrets 公开设备镜像一事。

**标签**: `#security`, `#iot`, `#surveillance`, `#vulnerability-disclosure`, `#privacy`

---

<a id="item-2"></a>
## [TMLR 约谈拟拒稿论文作者，多数人无法解释自己的论文](https://www.reddit.com/r/MachineLearning/comments/1wid67h/tmlr_reached_out_to_the_authors_of_10_papers/) ⭐️ 8.0/10

《机器学习研究汇刊》（TMLR）的联合主编联系了十篇原定被直接拒稿（desk rejection）的投稿作者，要求他们讲解自己的论文。结果十篇中：一篇的作者主动撤稿，一篇作者称因其他事务无法参加，一篇约好会面却未出席，三篇的作者无法回答关于论文的基本问题，三篇能谈高层思路但在技术细节上卡壳，只有一篇作者回答了全部问题。 这一结果暗示，投向主流机器学习期刊的稿件中，有相当一部分可能出自并不理解论文内容、甚至并未真正参与写作的作者之手，说明由大模型生成或“挂名”的论文正在渗入学术出版。这也让学界不得不追问：机器学习期刊的初审是否需要引入新的诚信核查机制；而这对审稿人、编辑以及那些与这类投稿竞争的正直作者都有直接影响。 这次核查采用的是一对一问答：先让作者谈论文的高层思路，再追问技术细节，而多数人正是在追问环节露了馅。值得注意的是，唯一一位答出所有问题的作者，其论文仍被访谈者（即联合主编）发现存在一处重大缺陷；完整的统计结果出自 TMLR 官方账号发布在 Medium 上的一篇文章。

reddit · r/MachineLearning · /u/hihey54 · 9月16日 23:20

**背景**: TMLR（《机器学习研究汇刊》）是由 JMLR 组织运营的开放获取期刊，采用滚动投稿、没有固定截稿日期，并强调论文的正确性与清晰度而不只看新颖性。直接拒稿（desk rejection）指期刊在初审阶段、送外审之前就退稿，通常不会留下公开记录；在高投稿量的期刊中，这是过滤选题不符或明显不合格稿件的常规手段。此次事件的隐忧在于：仅靠文本层面的初审，无法识别那些署名作者其实从未真正深入参与内容的投稿。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://casrai.org/guides/desk-rejection">What Desk Rejection Means and Why It Happens — CASRAI</a></li>
<li><a href="https://jmlr-org.nproxy.org/tmlr/">Transactions on Machine Learning Research</a></li>
<li><a href="https://www.journalmetrics.org/blog/desk-rejection-medical-journals-2026-guide">Desk Rejection at Medical Journals: What the 2026 Data ...</a></li>

</ul>
</details>

**标签**: `#academic-integrity`, `#peer-review`, `#machine-learning`, `#LLM-generated-content`, `#publishing`

---

<a id="item-3"></a>
## [GoBench：用 9x9 围棋对战 KataGo 来评测大模型的新基准](https://www.reddit.com/r/MachineLearning/comments/1wi68jg/gobench_evaluating_llms_on_the_game_of_go_r/) ⭐️ 8.0/10

一个名为 GoBench 的新基准通过让大语言模型与从随机水平到超人水平的 KataGo 阶梯对手下 9x9 围棋来进行评测，作者报告其结果与 ARC-AGI 2 高度相关（r = 0.83），且远未饱和。在该基准上，GPT-6 Astra Max 达到约 2500 Elo，而最强的 KataGo 约为 4400 Elo；若给 Codex 配上 Astra 并提供编程工具与两小时准备时间，则能达到 3560 Elo。 GoBench 提供了一种基于博弈、尚未饱和的通用推理衡量方式，并且看起来与 ARC-AGI 2 这类抽象推理基准走势一致，在现有基准逐渐饱和的背景下为研究者提供了另一个观察大模型推理进展的信号。由于采用可调对手强度的 Elo 阶梯，理论上随着模型变强它仍能持续产生有区分度的结果，并且该工作同时公开了排行榜、代码与论文。 该基准通过与从随机水平到超人水平的 KataGo 阶梯对战，以 Elo 分数衡量模型；值得注意的是，最强结果（Codex 配合 Astra，3560 Elo）是在允许使用编程工具并给予两小时准备时间后才取得的，说明工具使用与推理时计算会显著改变成绩。即便是最佳配置也远低于 KataGo 约 4400 Elo 的顶级水平，因此该基准被描述为高度未饱和。

reddit · r/MachineLearning · /u/Roland31415 · 9月16日 18:54

**背景**: KataGo 是一款 2019 年首次发布的免费开源围棋引擎，采用受 AlphaZero 启发的自我对弈强化学习训练，实力足以击败顶尖人类棋手，并被职业棋手用作训练与分析工具。围棋是一种双人棋类游戏，由于搜索空间极其庞大，长期被当作 AI 的挑战性难题；其中 9x9 小棋盘比标准 19x19 棋盘更小、对局更快。ARC-AGI 2 是“抽象与推理语料库”基准的第二版，用新颖的抽象推理谜题测试 AI 系统，被广泛视作衡量通用智能进展的指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/KataGo">KataGo</a></li>
<li><a href="https://arcprize.org/arc-agi/2">ARC-AGI-2</a></li>

</ul>
</details>

**标签**: `#LLM evaluation`, `#benchmark`, `#Go`, `#reasoning`, `#KataGo`

---