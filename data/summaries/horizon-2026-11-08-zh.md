# Horizon 每日速递 - 2026-11-08

> 从 34 条内容中筛选出 7 条重要资讯。

---

1. [微软研究院 AI Frontiers 团队宣告终结，John Langford 离职](#item-1) ⭐️ 8.0/10
2. [MaxxBench 质疑高分 DeepSWE 成绩是否反映真实编码能力](#item-2) ⭐️ 8.0/10
3. [研究者发现每台 Mac 上都有未公开的 Apple 后台进程在构建个人知识图谱](#item-3) ⭐️ 8.0/10
4. [SemiAnalysis 探访内蒙古 800MW 风电 AI 数据中心园区](#item-4) ⭐️ 8.0/10
5. [甲骨文在美方压力下取消与腾讯 70 亿美元 AI 芯片租赁协议](#item-5) ⭐️ 8.0/10
6. [苹果披露人形机器人系统 HALO，采用两个千问模型](#item-6) ⭐️ 8.0/10
7. [GitHub 新架构 Rubicon 每秒可处理 7200 次推送](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [微软研究院 AI Frontiers 团队宣告终结，John Langford 离职](https://hunch.net/?p=13764006) ⭐️ 8.0/10

微软研究院纽约分院的合伙人研究员经理 John Langford 在其博客 Machine Learning (Theory) 上宣布自己已离开微软，并宣告由他领导的 AI Frontiers（AIF）团队终结。该团队此前是微软研究院在高效语言模型与智能体系统等前沿方向上的组织枢纽。 外界将此视为一个象征：企业级 AI 实验室正围绕 transformer 规模化与贴近产品的工作收敛，挤压开放式探索研究的空间。这一转向既影响看重“蓝天式”工业实验室文化的研究者，也压缩了产业界愿意资助的技术路线多样性。 Langford 称 AIF 的初衷是在微软研究院内部组织连贯、共享的研究工作，例如默认向整个 MSR 开放的单一代码仓库（monorepo）。而微软官方的 AI Frontiers 实验室页面现显示，自 2026 年 9 月 14 日起该团队已归属 Microsoft AI，说明人员更可能是被并入面向产品的组织，而非彻底消失。

hackernews · srean · 11月7日 18:02 · [社区讨论](https://news.ycombinator.com/item?id=50406563)

**背景**: 微软研究院长期被视为少数允许研究者从事没有直接产品路线图的开放式课题的工业实验室之一，而 AI Frontiers 是近年尝试在更大范围内协调这类工作的组织。所谓 transformer 规模化，主要指在 Chinchilla 等经验性神经缩放定律指导下，通过扩大参数量、训练数据和算力来提升模型质量。由于这一配方能带来稳定回报，各实验室越来越把预算集中于此，而将替代架构与探索性方向视为更高风险的赌注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hunch.net/?p=13764006">The End of AI Frontiers – Machine Learning (Theory)</a></li>
<li><a href="https://businessexaminer.ca/victoria-articles/item/microsoft-researcher-john-langford-exits-as-ai-frontiers-group-is-declared/">Microsoft Researcher John Langford Exits as AI Frontiers Group Is...</a></li>
<li><a href="https://www.microsoft.com/en-us/research/lab/ai-frontiers/">Microsoft Research AI Frontiers - Microsoft Research</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者大多将此视为行业普遍现象的缩影：transformer 规模化是一条所有大公司都在竞速的“高速公路”，对其他 AI 方法的探索性研究正被劝阻，有人还以 Meta 对待其前任研究负责人为例。也有人批评标题含糊，建议用“开放研究—筛选验证—规模化商业投入”的三阶段模型来协调两种文化；还有人对数百亿美元涌向单一思路、而 JEPA 等替代方案无人问津感到惋惜，并认为 MSR 内部“做好研究就会有好事发生”的隐性契约已被打破，具有摧毁文化的后果。

**标签**: `#AI research`, `#Microsoft Research`, `#industry trends`, `#transformers`, `#research funding`

---

<a id="item-2"></a>
## [MaxxBench 质疑高分 DeepSWE 成绩是否反映真实编码能力](https://maxxbench.unlap.ai/research/why-maxxbench/) ⭐️ 8.0/10

Unlap AI 旗下的新基准研究项目 MaxxBench 发布分析文章，认为 DeepSWE 上的高分可能源于对基准的过拟合，而非真实的长时间跨度软件工程能力。文章指出，前沿实验室的强化学习环境与评测框架中使用的任务过于相似，而“flash”这类小尺寸模型变体在评测条件变化时性能下降最明显。 如果基准分数是由特定的评测框架设置触发、而非底层能力所致，那么用来挑选实际生产用编码智能体的排行榜就可能系统性地误导人。这一批评对所有依据 DeepSWE 类智能体编码基准做模型比较的人都很重要，也会推动各实验室构建更多样化的强化学习训练环境。 该分析指出了具体机制：评测框架中过度出现的设置，例如最大推理力度（“max 模式”）或 mini-swe-agent 仅用 bash 的提示循环，可能让模型进入一种“基准感知”状态；文章还指出 DeepSWE 本身存在若干缺陷。MaxxBench 自己的测试则对训练环境做了泛化与显著变化，包括刻意设置得异常简单和异常复杂的环境。

hackernews · antiuniverse · 11月7日 17:19 · [社区讨论](https://news.ycombinator.com/item?id=50406222)

**背景**: DeepSWE 是一个长时间跨度的软件工程基准，智能体需要在无网络的隔离容器中、通常在 mini-swe-agent 框架内自主地端到端解决真实的代码仓库级问题。此类基准本意是避免数据污染，但如今模型越来越多地在与评测任务相似的智能体编码环境中通过强化学习进行训练。已有研究表明，强化学习微调会让大模型对其训练时使用的特定提示和环境过拟合，而 MaxxBench 正是要在基准层面检验这一效应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://maxxbench.unlap.ai/research/why-maxxbench/">Introducing MaxxBench: Benchmarking Task Adaptation and ...</a></li>
<li><a href="https://llm-stats.com/benchmarks/deepswe">DeepSWE Leaderboard | LLM Stats</a></li>
<li><a href="https://arxiv.org/abs/2410.19920">[2410.19920] Reinforcement Learning for Aligning Large ...</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认同这一批评，有人表示这印证了自己对 LLM 基准的既有怀疑，并对 DeepSWE 这样知名的基准至今仍有缺陷感到意外。一个较有代表性的观点认为，问题与其说是直接在基准上训练，不如说是强化学习环境设计不够严谨，并指出小模型因为更容易过拟合较简单的环境而性能崩塌最严重；也有评论者提醒，基准分数差距并不一定意味着模型在真实场景中表现更差。

**标签**: `#LLM benchmarks`, `#evaluation`, `#overfitting`, `#reinforcement learning`, `#model scaling`

---

<a id="item-3"></a>
## [研究者发现每台 Mac 上都有未公开的 Apple 后台进程在构建个人知识图谱](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph) ⭐️ 8.0/10

一位署名 infwhispers 的研究者记录了一对未公开的 Apple 后台守护进程（daemon），它们自 2022 年起随 Mac 出货，用途是在本地构建一张描述用户及其周围人群的图谱：用户是谁、认识谁、这些联系人彼此如何关联、如何通信、去过哪里以及与谁同行。这篇登上 Hacker News 首页的文章认为，这相当于每台 Mac 上都在运行一个未公开的“家庭成员分类器”，而用户并未明确选择加入。 这一发现意味着，Apple 作为可选 AI 助手（Apple Intelligence）宣传的能力，实际上依赖一个已在 Mac 上静默运行多年的数据采集层，这对所有 Mac 用户以及与之通信的人都构成了知情同意的疑问。此事还直接冲击 Apple 一直以来塑造的“最重视隐私的硬件厂商”形象，因此它不仅是技术问题，也是一场声誉问题。 据报道这些守护进程完全在设备本地运行，因此争议点并非数据外传，而是在没有明确提示或开关的情况下就建立了一份细致的人际关系与位置画像。图谱据称不仅涵盖人，还包括宠物（“毛孩子”），并与 Photos 的面孔与姓名识别等既有功能相连；作者还在同一站点发布了后续研究。

hackernews · infwhispers · 11月7日 09:46 · [社区讨论](https://news.ycombinator.com/item?id=50403097)

**背景**: 知识图谱是一种以节点表示实体（人物、地点、事件）、以边表示其间关系的数据结构，使软件能够回答“这个人跟我是什么关系”之类的问题，而不只是做关键词匹配。Apple 多年来已在 Photos（面孔聚类与命名）、Siri 和通讯录等功能内部构建类似图谱，而与 macOS Sequoia、iOS 18 一同推出的生成式 AI 品牌 Apple Intelligence 正是依赖这种个人上下文来让助手更有用。守护进程是 macOS 这类类 Unix 系统上长期运行的后台进程，Apple 有大量此类进程未作文档说明，因此独立研究者时常会发现那些从未出现在营销材料或用户设置中的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50403097">Every Mac comes with an (undocumented) family member ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Personal_knowledge_graph">Personal knowledge graph</a></li>
<li><a href="https://en.wikipedia.org/wiki/Personal_knowledge_base">Personal knowledge base - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的情绪明显分裂：一些评论者并不惊讶，只是感到无奈，指出 Photos 早已知道自己亲友乃至宠物的面孔和名字；另一些人则公开愤怒，认为一家硬件公司不应在没有征询的情况下这么做。讨论中反复被引用的是 Steve Jobs 2010 年的说法——隐私意味着每次都征得用户同意，并用通俗语言告知数据将被如何使用；也有评论者提出更微妙的社会担忧：被设备自动总结会侵蚀“闲聊不会被记录”这一默认预期。

**标签**: `#privacy`, `#macOS`, `#Apple Intelligence`, `#knowledge graph`, `#surveillance`

---

<a id="item-4"></a>
## [SemiAnalysis 探访内蒙古 800MW 风电 AI 数据中心园区](https://newsletter.semianalysis.com/p/we-visited-chinas-stargate-in-inner) ⭐️ 8.0/10

SemiAnalysis 发布了对内蒙古一座 800MW 风电 AI 数据中心园区的实地考察报告，其中约 120MW 的容量在一年内建成。报告还记录了该园区一个 5MW 的试点项目，采用 800V 直流固态变压器（SST）原生供电架构，并采用了不依赖中央冷水机组的制冷设计。 中国将可再生能源发电与极快的数据中心建设速度、激进供电架构试点结合起来的能力，可能为其在 AI 基础设施上带来成本和部署速度优势。如果 SST 原生的 800V 直流方案与无冷水机组方案能在规模化应用中得到验证，它们有可能成为参考设计，促使其他地区的运营方重新思考传统的交流 UPS 供电路径和机械制冷方案。 该 5MW 试点使用固态变压器将中压交流电直接降压至 800V 直流母线，从而省去了传统数据中心供电路径中的多级转换环节。无冷水机组的制冷设计则依靠液冷加上当地寒冷气候来排热，不过报告并未披露该园区的工作负载类型、PUE 或利用率数据。

rss · Semianalysis · 11月7日 19:01

**背景**: 固态变压器用电力电子器件和数字控制取代了笨重的铁芯铜绕组变压器，因此它可以在变换电压的同时直接输出直流电——这正是 SST 原生设计能够从中压交流电直接供给 800V 直流母线的原因。传统数据中心则是把 10kV 交流电逐级降到 400V 交流，再经过 UPS 系统，最后在服务器端转换为低压直流，每一级都会损失效率。无冷水机组制冷则利用温水直接芯片液冷和室外空气自然冷却，而不用高耗能的机械冷水机组，微软等超大规模厂商在较冷气候中已采用类似方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/tech-industry/data-centers/china-deploys-worlds-first-800-volt-dc-power-system-for-massive-ai-data-center-seeks-to-quench-power-needs-with-higher-conversion-and-efficiency-inside-a-smaller-footprint">China deploys 'world's first' 800-volt DC power system for massiv...</a></li>
<li><a href="https://www.datacenterknowledge.com/hyperscalers/microsoft-s-chiller-less-data-center">Microsoft's Chiller - less Data Center</a></li>
<li><a href="https://www.ams-publications.ee.ethz.ch/uploads/tx_ethpublications/Tutorial_SST_Part_Kolar___Huber_ZPEC_2026_as_presented_190826.pdf">AC/DC Solid - State Transformer Concepts</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#datacenters`, `#power delivery`, `#cooling`, `#China`

---

<a id="item-5"></a>
## [甲骨文在美方压力下取消与腾讯 70 亿美元 AI 芯片租赁协议](https://t.me/zaihuapd/44975) ⭐️ 8.0/10

在美国官员对交易表达担忧、甲骨文承受特朗普政府压力之后，甲骨文取消了与腾讯签署的为期五年、价值约 70 亿美元的 AI 芯片租赁协议。该协议原本要让腾讯获得约 10 万枚先进 AI 芯片的使用权，这些芯片部署在甲骨文位于东南亚的多个数据中心，首付款约占总金额的 30%。 此次取消表明，美国的出口管制正从直接向中国买家出售芯片，延伸到第三方租赁和海外云算力等间接路径。这将压缩中国 AI 企业获取海外算力的空间，也可能让其他云服务商在第三国承载中国客户 AI 负载时更加谨慎。 据报道，这份五年期租约是腾讯迄今规模最大的海外算力交易，而涉及的芯片因华盛顿和北京两方面的限制，无法在中国境内使用。该消息源自一条简短的 Telegram 帖子，甲骨文和腾讯均未公开确认，因此交易的具体状态以及是否涉及违约赔偿仍不明确。

telegram · zaihuapd · 11月7日 02:00

**背景**: 自 2022 年以来，美国逐步收紧对输往中国的先进 AI 加速卡（如英伟达 GPU）的出口管制，意在延缓中国前沿 AI 的发展。作为应对，中国科技公司尝试通过海外数据中心获取算力，尤其是东南亚地区，同样的芯片在那里可以合法运行。与此同时，北京也有自身的规则，不鼓励本国企业依赖外国 AI 芯片，这使得腾讯等企业夹在两套监管体系之间。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.zerohedge.com/ai/oracle-kills-7bn-tencent-ai-chip-deal-under-trump-pressure">Oracle Kills $7BN Tencent AI Chip Deal Under Trump... | ZeroHedge</a></li>
<li><a href="https://www.rkjdev.com/blog/tencent-oracle-7-billion-ai-chip-deal/">Tencent Signs $7B Oracle AI Chip Lease Deal | rkj dev</a></li>
<li><a href="https://laweconcenter.org/resources/us-export-controls-on-ai-and-semiconductors/">US Export Controls on AI and Semiconductors - International ...</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#Oracle`, `#Tencent`, `#export controls`, `#geopolitics`

---

<a id="item-6"></a>
## [苹果披露人形机器人系统 HALO，采用两个千问模型](https://weibo.com/1642634100/RqjjGllvw) ⭐️ 8.0/10

苹果研究团队于 11 月 4 日在 arXiv 提交论文，披露了人形机器人自主控制系统 HALO（Perceptive Humanoid Motion from Simulation），并在宇树 G1 上完成验证，成功将仿真环境中学到的动作迁移到陌生的真实房间中执行。该系统分为三层：上层使用 Qwen3.6-35B-A3B 编排任务，中层使用 Qwen3.5-2B 生成全身动作，底层是经强化学习训练的动作跟踪器，研究团队还公开了数据生成、模型训练与部署代码。 这是大型消费科技公司进军具身智能的一次重要亮相，说明像千问这样的开源权重模型可以直接充当分层机器人控制器的推理核心，而不必依赖专门定制的基础模型。由于代码与流程均已开源并在广泛使用的硬件上得到验证，其他机器人实验室可以复现并在此基础上继续推进，这有望加速整个领域的仿真到现实（sim-to-real）研究。 HALO 仅依靠语言指令和第一人称视角图像运行，完成任务排序、全身动作生成与执行控制，无需额外的特权状态信息。报告中提到其在真实机器人上取得了约 91%的成功率，完整技术栈——数据生成、模型训练与部署代码——已发布在 apple-aiml-research/ml-halo 的 GitHub 仓库中。

telegram · zaihuapd · 11月7日 13:35

**背景**: 仿真到现实（sim-to-real）迁移是机器人领域的核心难题：在快速、廉价的物理仿真器中训练出的策略，往往因为动力学、传感与光照上的细微差异而在真实硬件上失效。HALO 通过分层设计来应对这一问题：由大型视觉语言模型根据自然语言指令和摄像头输入负责高层任务规划，再由较小的模型配合学习到的底层控制器把规划转化为关节级动作。Qwen3.6-35B-A3B 是总参数 350 亿（约 30 亿激活）的多模态混合专家模型，Qwen3.5-2B 则是体积小得多、适合更快生成动作的同系列模型。宇树 G1 是一款高约 1.27 米、拥有 23 至 43 个自由度的紧凑型双足人形机器人，被广泛用作具身智能的研究平台。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/apple-aiml-research/ml-halo">GitHub - apple-aiml-research/ml-halo: HALO: Perceptive ...</a></li>
<li><a href="https://ai.42how.com/en/article/ee6a8f15-db79-4091-9a86-3bc31de6c02f">Apple Integrates Humanoid Perception Into Simulation for Zero ...</a></li>
<li><a href="https://www.unitree.com/g1/">Humanoid robot G1_Humanoid Robot Functions ... - Unitree G1</a></li>

</ul>
</details>

**标签**: `#robotics`, `#humanoid robots`, `#Qwen`, `#Apple research`, `#reinforcement learning`

---

<a id="item-7"></a>
## [GitHub 新架构 Rubicon 每秒可处理 7200 次推送](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) ⭐️ 8.0/10

GitHub 公布了一套代号为 Rubicon 的全新 Git 存储架构，在内部测试中可支撑 5000 个 AI 智能体同时协作操作同一个仓库，每秒处理 7200 次推送，同时读取延迟保持在较低水平。该架构把 Git 对象存入 Azure Blob Storage，由独立的 Ref-CAS 服务管理引用状态，通过虚拟副本处理读写，并由后台节点负责数据包压缩。 该架构针对的是一种传统 Git 托管从未设想过的负载模式：成千上万个自动化智能体同时向同一个仓库推送，而随着 AI 编码智能体的普及，这种情况正变得常见。如果它能够从内部测试推广到普遍场景，可能会改变 Git 托管的扩展方式，并消除智能体驱动软件工作流中的一个关键瓶颈。 Rubicon 遵循两项原则——尽量减少协调、将存储与计算解耦；在 Ref-CAS 中，每次引用更新都是一次由法定人数确认的 compare-and-swap 提交，事务只锁定它涉及的引用，一旦日志副本中的多数记录完成即对外可见。数据包压缩现在完全在独立的后台节点上直接针对持久化存储运行；该系统目前处于有限私有预览阶段，GitHub 计划逐步扩大范围。

telegram · zaihuapd · 11月7日 14:12

**背景**: 一个 Git 仓库由不可变对象（blob、tree 和 commit）组成，这些对象被打包进压缩的 packfile 中，另外还有一小组可变的引用（如分支和标签）指向这个对象图。传统 Git 托管将存储与计算绑定在一起，因此提供读取、接收推送以及执行垃圾回收和数据包压缩等维护工作都要争抢同样的资源。Rubicon 将这些环节拆开：对象存放在廉价且持久化的对象存储中，引用由专门的复制式 compare-and-swap 服务处理，轻量的虚拟副本在不持有数据的情况下对外提供访问。压缩操作会重写并合并 packfile，它被移出关键路径，从而不会阻塞进来的推送。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/">Inside GitHub’s new Git storage architecture - The GitHub Blog</a></li>
<li><a href="https://news.lavx.hu/article/github-s-new-git-storage-architecture-handles-thousands-of-writes-per-second">GitHub's new Git storage architecture handles thousands of ...</a></li>
<li><a href="https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/">The bridge to agent-scale Git infrastructure - The GitHub Blog</a></li>

</ul>
</details>

**标签**: `#GitHub`, `#Git storage`, `#AI agents`, `#infrastructure`, `#scalability`

---

