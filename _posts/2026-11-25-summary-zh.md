---
layout: default
title: "Horizon Summary: 2026-11-25 (ZH)"
date: 2026-11-25
lang: zh
---

> 从 25 条内容中筛选出 7 条重要资讯。

---

1. [预印本声称矩阵乘法指数恰为 9/4](#item-1) ⭐️ 9.0/10
2. [PrismML 发布 Ternary Bonsai 2.5 27B，主打本地智能体编程](#item-2) ⭐️ 8.0/10
3. [OpenAI 称 GPT-6.2 通过自己写代码完成蛋白质微结合器设计](#item-3) ⭐️ 8.0/10
4. [GreyNoise：Check Point 管理服务器遭 PRNG 状态恢复攻击入侵](#item-4) ⭐️ 8.0/10
5. [GPT-6.2 Astra 自主破解 1808 年耶鲁速写本的作者之谜](#item-5) ⭐️ 8.0/10
6. [Anthropic 称 Claude 发现 VP≠VNP 并给出 Lean 4 形式化证明](#item-6) ⭐️ 8.0/10
7. [VMware vCenter 再曝 9.8 分鉴权绕过漏洞，且已被零日利用](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [预印本声称矩阵乘法指数恰为 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) ⭐️ 9.0/10

一份发布在 OpenAI GitHub 仓库中的预印本声称，矩阵乘法指数在每个域上都恰好为 9/4，也就是 Θ(n^2.25)；据称它还解决了由 LLM 排序的 Top 500 开放数学问题清单中的另外若干难题，包括强多项式线性规划、平均收益博弈和奇偶博弈。该工作据传由 OpenAI 一个未公开的模型生成，且尚未经过同行评审。 如果得到验证，这一结果将通过证明一个非平凡下界并反驳“矩阵乘法指数为 2”的常见猜想，解决复杂度理论中的一个核心开放问题，并对快速线性代数算法的设计产生影响。它还加剧了一场争论：前沿 AI 实验室是否正在用未公开的模型取得内部数学突破，而公开模型的质量却似乎停滞不前。 评论者指出，标题应为 Θ(n^2.25)，而不只是 O(n^2.25)：新的部分是 Ω(n^2.25) 下界，因为 O(n^2.25) 的上界此前已经已知，而且论文声称该结论对每个域都成立。该预印本尚未得到验证，所用模型的方法未公开，且仓库路径标注为 2026 年 11 月 24 日，这些都值得谨慎看待。

hackernews · E-Reverance · 11月25日 01:19 · [社区讨论](https://news.ycombinator.com/item?id=50637220)

**背景**: 矩阵乘法是科学计算和机器学习中的基础运算，其指数 ω 指的是使得 n×n 矩阵乘法能在 O(n^ω) 次算术运算内完成的最小指数。Θ 记号表示上下界同阶，因此 Θ(n^2.25) 既需要存在 O(n^2.25) 的算法，也需要证明不存在渐近更快的算法。几十年来，人们只知道平凡下界 ω ≥ 2，而最优上界虽逐步降到 3 以下却仍高于 2，许多研究者猜测 ω = 2。如今 AI 系统正以前所未有的规模生成数学证明，如何验证这类声明已成为核心挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Big_O_notation">Big O notation - Wikipedia</a></li>
<li><a href="https://arxiv.org/pdf/2611.21299">Turing Agent: Agentic Formal Verification for Mathematical Research</a></li>
<li><a href="https://www.chapterpal.com/s/c9843ce4/mathematical-exploration-and-discovery-at-scale">Mathematical exploration and discovery at scale — Read with an AI ...</a></li>

</ul>
</details>

**社区讨论**: HN 评论者争论 OpenAI 是否在有意保留更强的模型，以便先在内部取得基础突破、再通过复利循环增强模型；有人把近期成果比作贝尔实验室，但也质疑私营实验室的公关动机。另一些人则关注准确性，纠正标题应为 Θ(n^2.25)，并说明新结果是 Ω(n^2.25) 下界，而不是此前已知的上界。

**标签**: `#complexity-theory`, `#matrix-multiplication`, `#AI-for-math`, `#LLM-research`, `#open-problems`

---

<a id="item-2"></a>
## [PrismML 发布 Ternary Bonsai 2.5 27B，主打本地智能体编程](https://prismml.com/news/bonsai-2-5-27b) ⭐️ 8.0/10

PrismML 发布了 Ternary Bonsai 2.5 27B，这是一个由 Qwen3.8-27B 衍生而来的三值量化（约 1.58 比特）模型，架构保持不变，体积与上一代相同，仍为 5.9 GB。该版本专门面向智能体场景，声称在多轮工具调用、真实代码仓库中的编码修改以及长链路多步任务执行上有明显提升。 如果一个 5.9 GB 的三值模型就能容纳 128k 上下文，并在单台 Mac Mini 上跑出可用的智能体编程能力，那么私有化、离线编码智能体的硬件门槛将大幅降低。社区将其在 SWE-bench 上的表现与前沿模型相提并论，说明小型量化模型与大型云端模型之间的差距可能比预期收窄得更快。 用户实测在配备 24 GB 内存的 Mac Mini M5 Pro 上生成速度约为 22–25 tokens/s，首 token 延迟约 2 秒，提示词处理速度约 223 tokens/s，128k 上下文可以轻松装入内存。一位评论者的自建长链路基准显示，Bonsai 2.5 在同样完成 8 项任务中的 5 项的前提下，步数减少 17%、总耗时减少 29%，说明提升主要体现在效率而非绝对通过率上。

hackernews · b0m · 11月24日 20:08 · [社区讨论](https://news.ycombinator.com/item?id=50633922)

**背景**: 三值量化把模型中的每个权重映射为 -1、0、+1 三种取值之一，平均约合每个权重 1.58 比特，可把 27B 模型压缩到几 GB，同时比粗暴的 2 比特舍入保留更多质量。这类方法（因 BitNet 系列研究而广为人知）对 CPU 与边缘推理很有吸引力，因为其运算可以用简单的加法完成。Bonsai 是 PrismML 的此类模型产品线，27B 版本是该系列中最大、也是面向智能体用途定位的一款：长序列工具调用、真实代码仓库编程以及多步骤任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.prismml.com/models/bonsai-2-5-27b">Ternary Bonsai 2.5 27B - Bonsai - docs.prismml.com</a></li>
<li><a href="https://blog.nota.ai/insights/local-llm-ternary-quantization">Can a 30B Local LLM Run on a MacBook? 1 .58-Bit Ternary ...</a></li>
<li><a href="https://bitnet.xin/blog/158-bit-quantization-why-ternary-weights-are-the-sweet-spot">1 .58-bit Quantization Explained | BitNet.XIN | BitNet.XIN</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的反应热烈但理性：评论者纷纷给出具体的 tokens/s 和任务耗时数据，有人指出该模型在 SWE-bench Verified 上的得分接近 Opus 4.6，但提醒其中可能掺杂了针对基准的过拟合或基准本身漂移的因素。最常见的诉求是希望看到与同等规模小模型（例如 1B–10B 区间的 Q1/Q2 量化模型）的直接对比，而不是只与前沿大模型比较。

**标签**: `#local-llm`, `#quantization`, `#ternary-models`, `#model-benchmarks`, `#agentic-coding`

---

<a id="item-3"></a>
## [OpenAI 称 GPT-6.2 通过自己写代码完成蛋白质微结合器设计](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) ⭐️ 8.0/10

OpenAI 发布报告称，它向 GPT-6.2 提供了五个靶标蛋白的三维结构并标注了希望微结合器附着的位置，随后该模型自行编写代码生成了潜在的微结合器三维设计，且未使用专门的蛋白质 AI 模型。为把这些设计变成可在实验室测试的蛋白质，OpenAI 使用专门的逆折叠模型 SolubleMPNN 为每个设计推荐氨基酸序列，并用其他专用蛋白质模型筛选那些被预测能按设计折叠、并在靶标预期位点结合的候选。 如果这一说法站得住脚，就说明通用大语言模型可以承担过去由 RFdiffusion、ProteinMPNN 等专用模型主导的部分蛋白质设计流程，从而降低缺乏深厚结构生物学工具积累的实验室的进入门槛。这也印证了一个更广泛的趋势：大模型作为智能体编写代码来编排科学计算流水线，可能改变计算生物学工具的搭建与使用方式。 “超越专用模型”的标题式表述具有误导性：按照 OpenAI 自己的描述，序列设计由 SolubleMPNN 针对固定骨架完成，折叠与结合预测由其他专用模型完成，GPT-6.2 的贡献主要是三维设计生成与编排代码。SolubleMPNN 是一种仅在可溶性蛋白上训练的消息传递逆折叠模型，因此会使设计偏向可溶性；同时该工作主要围绕五个靶标的计算结果，而非广泛的实验验证。

hackernews · acossta · 11月24日 21:02 · [社区讨论](https://news.ycombinator.com/item?id=50634658)

**背景**: 微结合器（minibinder）是能紧密结合特定靶标蛋白的小型工程蛋白，通常通过两步计算流程获得：先用 RFdiffusion 这类生成模型提出三维骨架，再用 ProteinMPNN（SolubleMPNN 是面向可溶性调优的变体）这类逆折叠模型推断出应能折叠成该骨架的氨基酸序列，随后用 AlphaFold 等折叠预测器和结合预测器筛选候选。由于蛋白质的序列决定其结构，序列设计才是真正产出可制备分子的环节，这也是评论者质疑 GPT-6.2 究竟完成了多少设计工作的原因。此处的大模型智能体编写并运行代码，扮演的是把各类专用工具粘合起来的角色，而非取代它们。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.openprotein.ai/models/proteinmpnn/solublempnn/">SolubleMPNN - OpenProtein.AI docs</a></li>
<li><a href="https://idl.uw.edu/mosaic/examples/protein-design.html">Protein Design Explorer | Mosaic</a></li>
<li><a href="https://www.agilent.com/cs/library/brochures/ebook-oligo-articles-dr-baker-5994-8512en-agilent.pdf">Oligo Pools in Pioneering RNA and Protein Engineering Research...</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者既印象深刻又持怀疑态度：fabian2k 质疑既然序列才决定蛋白质结构，GPT-6.2 究竟设计出了什么；plaidfuji 则把这一成果重新解读为大模型充当编排专用模型的“粘合层”，认为“超越专用模型”的说法为时尚早。joe-esquibel 指出证据偏重计算探索、缺乏实验室对照，而 gopalv 认为真正的超能力在于：只要推进任务需要写出更好的代码，这类模型就能持续变强。

**标签**: `#AI/ML`, `#protein-design`, `#LLM-agents`, `#computational-biology`, `#openai`

---

<a id="item-4"></a>
## [GreyNoise：Check Point 管理服务器遭 PRNG 状态恢复攻击入侵](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) ⭐️ 8.0/10

GreyNoise 披露了一起针对 Check Point 安全管理服务器（Security Management Server）的活跃入侵行动，确认的攻击活动发生在 2026 年 10 月 17 日至 11 月 2 日之间，至少波及全球 22 家不同机构。其中最引人注目的手法是：攻击者反复向暴露在外的 HFS loginSrp1 端点发送 POST 请求，收集返回的会话 Cookie（其“sid”值来自 JavaScript 的 Math.random()），据此重建 Node.js V8 伪随机数生成器的内部状态，进而恢复会话 Cookie 的签名密钥，伪造出已签名的管理员会话 Cookie。 安全管理服务器是整个组织所有防火墙策略、访问规则与网关配置的中央控制点，因此一旦攻击者伪造出管理员会话，就等于掌握了整条安全边界的最高管理权限。这起行动还说明，像 Math.random() 这样“本就不该用于安全场景”的 API 可以被武器化为完整的身份认证绕过，这一教训远不止适用于 Check Point，而是波及所有用该函数生成密钥或会话标识的 Node.js 服务。 JavaScript 的 Math.random() 明确不具备密码学安全性，而 V8 所用 xorshift128+ 算法的内部状态可以仅凭少量连续输出被还原——这正是本次 Cookie 伪造得以成功的关键。评论者指出，攻击者的初始入侵途径尚不完全清楚，但从多家 Check Point 客户同时受害来看，CVE-2026-16232 很可能是突破口；同时仍未明确的是，这些受影响机构的管理服务器是否都直接暴露在互联网上。

hackernews · louiereederson · 11月24日 16:32 · [社区讨论](https://news.ycombinator.com/item?id=50630594)

**背景**: GreyNoise 是一家威胁情报公司，持续扫描互联网以记录各类机会性攻击流量，因而能较早发现这类入侵行动。Check Point 的安全管理服务器是管理员用来下发防火墙策略、查看日志和配置网关的控制台，属于高价值目标，本应部署在多层防护之后。伪随机数生成器（PRNG）产生的序列看似随机，实则完全由内部状态决定；一旦攻击者观测到足够多的输出，就能反解出该状态并预测其过去与未来的全部数值——这与历史上 Juniper Dual EC 事件属于同一类弱点。V8 是 Node.js 所使用的 JavaScript 引擎，因此该缺陷对所有在安全相关场景中依赖 Math.random() 的服务端 JavaScript 应用都具有警示意义。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign">An Active Intrusion Campaign Against Check Point Security ...</a></li>
<li><a href="https://tech.yahoo.com/cybersecurity/articles/control-tower-left-unguarded-check-094326324.html">The Control Tower Left Unguarded: Check Point ’s Management ...</a></li>
<li><a href="https://dl.acm.org/doi/pdf/10.1145/2976749.2978395?cookieSet=1">A Systematic Analysis of the Juniper Dual EC Incident</a></li>

</ul>
</details>

**社区讨论**: 社区情绪夹杂着技术上的兴奋与警惕：不少评论者把这一 PRNG 缺陷称作“老朋友”，赞叹状态恢复攻击链的精巧；也有人认为根本的修复应在上游完成——与其去修补数百个误用 Math.random() 的应用，不如让这个函数本身至少具备一定的安全性。另一个反复出现的担忧是，借助大语言模型，水平远不如以往的攻击者很快就能规模化地自动化此类利用；同时读者们也在追问攻击究竟是如何取得初始访问权限的，以及受害机构的管理服务器是否暴露在公网。

**标签**: `#security`, `#vulnerability-exploitation`, `#prng-weakness`, `#nodejs`, `#check-point`

---

<a id="item-5"></a>
## [GPT-6.2 Astra 自主破解 1808 年耶鲁速写本的作者之谜](https://simonwillison.net/2026/Nov/24/astra-historical-mystery/) ⭐️ 8.0/10

历史学教授 Mark Humphries 报告称，GPT-6.2 Astra 仅需极少提示，就在 22 分钟内利用公开的一手和二手资料，自主确认了耶鲁大学拜内克图书馆所藏一本 1808 年匿名速写本的作者身份。该模型在一份纸质档案中发现了一条鲜为人知的线索，预测某份旅行日志可以验证其假设，而这份日志最终确实证实了该判断，并且它本身也是加拿大史与毛皮贸易史研究中的一项重要发现。 这是一个大语言模型智能体真正完成档案研究的完整案例：提出假设、定位资料、加以验证，而不仅仅是总结已知材料，这表明 AI 智能体有可能成为数字人文研究流程中的主动参与者。它同时也给学术界带来了尖锐问题：当智能体系统能产出人类研究者难以复现的成果时，各学科应如何应对。 Astra 的推理链条关键在于：它发现某篇日记提到沙博子爵（vicomte de Chabot）曾在速写本所载某日期前五天造访附近的一条河，进而预测沙博的旅行日志——该日志只能向克利夫兰州立大学订购——能够确认作者身份。值得注意的是，这位教授将此事定位为一次应用演示而非方法论突破，并指出历史学家与数学家不同，并不追求唯一普世的真理，因此对该领域的冲击可能比数学界温和。

rss · Simon Willison · 11月24日 16:53

**背景**: GPT-6.2 Astra 是 OpenAI 于 2026 年 11 月 17 日发布的前沿模型，同期还推出了成本更低的 GPT-6.2 Sol；OpenAI 宣称 Astra 在浏览、计算机操作与科学工作方面达到最先进水平，而这些能力恰恰是需要在检索、阅读和交叉比对资料中开展的智能体任务所必需的。AI 智能体是指能够在有限人工监督下做出决策、追求目标并采取行动的程序，数字人文领域的研究者近年来已越来越多地尝试用这类工具进行文本转录、检索和资料发现。文中提到的 Deep Blue 是 IBM 在 1997 年击败加里·卡斯帕罗夫的象棋计算机，这一类比反映出一种担忧：机器表现可能削弱人类在一个长期被视为专属人类领域的专业地位。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-6-2-astra-sol/">Introducing GPT-6.2 Astra and Sol | OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-6.2_Astra">GPT-6.2 Astra</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_agent">AI agent - Wikipedia</a></li>

</ul>
</details>

**标签**: `#LLM applications`, `#autonomous agents`, `#historical research`, `#digital humanities`, `#AI for science`

---

<a id="item-6"></a>
## [Anthropic 称 Claude 发现 VP≠VNP 并给出 Lean 4 形式化证明](https://t.me/zaihuapd/45345) ⭐️ 8.0/10

Anthropic 据称于 11 月 24 日公开了论文《VP ≠ VNP over every field》及 Lean 4 形式化证明，并表示结果由内部研究用 Claude 模型发现，论文与代码均由 AI 撰写。该证明声称给出了哈密顿圈多项式的超多项式算术电路下界，从而推出 VP 是 VNP 的真子类。 如果该声明经得起独立审查，它将解决 Valiant 于 1979 年提出的代数复杂度猜想，并成为 AI-for-math 与形式化验证领域的重要里程碑。但由于结果极其重大且目前尚未验证，应将其视为有待专家审查的高影响力声明，而非已确立的定理。 该声明仅针对算术电路，并不涉及 P 与 NP 问题；它称在每个域上 VP 都是 VNP 的真子类。Lean 4 形式化据称经过三条标准公理审计与独立内核检查，但形式化验证只检查证明相对于其定义和公理是否成立，并不保证这些定义忠实刻画了目标复杂度类。

telegram · zaihuapd · 11月24日 12:18

**背景**: 1979 年，Valiant 引入了代数复杂度类 VP 与 VNP，作为 P 与 NP 的类比，其中永久多项式与哈密顿圈多项式是核心的 VNP 完全问题。VP 与 VNP 问题大致是在问：这些 VNP 完全多项式能否由多项式大小的算术电路计算。Lean 4 是一种交互式定理证明器，其内核负责检查形式化证明；一个经过验证的 Lean 证明，其意义仍取决于它所依赖的定义与公理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity">Arithmetic circuit complexity - Wikipedia</a></li>
<li><a href="https://mathworld.wolfram.com/ValiantsConjecture.html">Valiant's Conjecture -- from Wolfram MathWorld</a></li>
<li><a href="https://interestingengineering.com/ai-robotics/claude-proves-vp-not-vnp-valiant-conjecture">Claude claims to prove VP VNP in Valiant 's 47-year-old conjecture</a></li>

</ul>
</details>

**标签**: `#complexity-theory`, `#formal-verification`, `#Lean-4`, `#AI-for-math`, `#Anthropic`

---

<a id="item-7"></a>
## [VMware vCenter 再曝 9.8 分鉴权绕过漏洞，且已被零日利用](https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html) ⭐️ 8.0/10

Broadcom 为 VMware 产品线发布了针对 23 个漏洞的补丁，其中最关键的是 vCenter 目录服务（vmdir）中的鉴权绕过漏洞 CVE-2026-123903，CVSS 评分高达 9.8。据报道，在补丁发布前的几天里，该漏洞已经作为零日漏洞遭到实际利用。 vCenter 是大多数企业 VMware 虚拟化环境的集中管理平面，因此一旦存在免鉴权绕过，任何能访问网络的攻击者都可能借此控制虚拟机管理程序、虚机乃至凭据。由于已经观察到实际利用行为，建议运行 vCenter 的组织立即打补丁，而不是等待常规维护窗口。 据分析，漏洞根因是一次失败的 LDAP SASL 绑定仍会把所声称身份对应的访问令牌附加到该连接上，从而使后续明文 LDAP 操作以该身份执行，全程无需任何凭据。唯一可见的前提条件是攻击者能够从网络访问到 vCenter，而漏洞所位于的 vmdir 正是支撑 VMware 身份认证与鉴权服务的目录组件。

telegram · zaihuapd · 11月24日 14:50

**背景**: VMware 目录服务（vmdir）是 VMware 身份管理用来存储和查询平台账户与鉴权数据的目录组件，正因如此，该处的缺陷会削弱整个平台的认证机制。CVE-2026-123903 的 CVSS 评分高达 9.8，接近满分，通常只授予可远程利用、且无需权限与用户交互的漏洞。LDAP 是 vmdir 用来查询目录和执行绑定操作的协议，SASL 则是这些绑定所用的认证机制，而绕过正发生在其失败处理逻辑中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/dinosn/CVE-2026-123903">dinosn/ CVE - 2026 - 123903 : CVE - 2026 - 123903 : VMware vCenter vmdir...</a></li>
<li><a href="https://nhimg.org/glossary/vmdir/">What Is vmdir? Definition & Examples - nhimg.org</a></li>
<li><a href="https://knowledge.broadcom.com/external/article/322199/the-vmware-directory-service-vmdird-is-e.html">The VMware Directory Service (VMDIRD) is entering an ...</a></li>

</ul>
</details>

**标签**: `#VMware vCenter`, `#CVE-2026-123903`, `#鉴权绕过`, `#零日漏洞`, `#安全补丁`

---