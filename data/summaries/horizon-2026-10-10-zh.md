# Horizon 每日速递 - 2026-10-10

> 从 38 条内容中筛选出 4 条重要资讯。

---

1. [Cloudflare 收购 Deno，独立运行时开发宣告终止](#item-1) ⭐️ 9.0/10
2. [Matthew Green：有 15%的概率人类会失去对公钥加密的信心](#item-2) ⭐️ 8.0/10
3. [中国天眼 FAST 发现脉冲星原生三体系统](#item-3) ⭐️ 8.0/10
4. [JetBrains 发布开源编程模型 Mellum2.1，Apache 2.0 许可](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Cloudflare 收购 Deno，独立运行时开发宣告终止](https://deno.com/blog/cloudflare) ⭐️ 9.0/10

Cloudflare 已收购 Deno。根据社区成员引用的公告内容，Cloudflare 将在未来一年内继续支持 Deno 运行时，每月发布包含缺陷修复和安全更新的版本，一年之后将终止对 Deno 运行时的开发。Deno 仍将保持开源，官方表示欢迎其他开发者接手继续推进其开发。 Deno 是最具代表性的“从第一性原理重建 JavaScript/TypeScript 运行时”的尝试，它内置 TypeScript 支持、默认安全沙箱，其设计理念已被 Node 及其他运行时借鉴。如今它作为独立开发的项目实质停摆，令 JS 生态中本就不多的独立方案又少了一个，同时也契合了当下的一股整合浪潮——运行时、打包器与工具链正被少数几家大型 AI 与云厂商收入囊中。 Deno 的源代码仍保持开源，因此如果有新的维护者或分支接手，项目仍有可能延续；但在一年维护期结束后，现有归属方不再计划进行功能开发。社区成员将这笔交易视为“人才收购”（acquihire），认为 Cloudflare 主要看重的是 Ryan Dahl 的团队以及 Deno 的沙箱与安全技术，大概率会将其并入自家的 Workers 运行时 workerd。

hackernews · ilreb · 10月9日 13:03 · [社区讨论](https://news.ycombinator.com/item?id=50019911)

**背景**: Deno 是由 Node.js 原作者 Ryan Dahl 与 Bert Belder 共同打造的 JavaScript、TypeScript 和 WebAssembly 运行时，2018 年发布，目标是修正 Dahl 所认为的 Node.js 设计失误。它基于 V8 引擎、Rust 语言和 Tokio 异步运行时构建，以“默认安全”著称，例如访问文件、网络和环境变量都需要显式权限标志，并且原生支持 TypeScript，无需额外的构建步骤。Cloudflare 的无服务器平台 Workers 运行在自研的 V8 isolate 运行时 workerd 之上，而该公司近年来一直在持续收购开发者工具类企业。所谓“JavaScript 运行时”，就是执行 JS 代码的环境，它把 JS 引擎与文件、网络等系统资源 API 打包在一起。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Deno_(software)">Deno (software) - Wikipedia</a></li>
<li><a href="https://deno.com/">Deno, the drop-in JavaScript runtime for Node developers</a></li>
<li><a href="https://github.com/denoland/deno">GitHub - denoland/deno: A modern runtime for JavaScript and ... Deno (software) - Wikipedia Get started with Deno | Deno Docs Installation | Deno Docs Deno Land Inc. · GitHub Roll your own JavaScript runtime, pt. 2 - Deno</a></li>

</ul>
</details>

**社区讨论**: 社区的主流情绪是惋惜与无奈：不少评论者称 Deno 是自己最喜欢的 JS 运行时，表示早有预感，并将此事定性为一次导致 Deno 开发实质终止的人才收购。有人认为 Deno 转向优先兼容 npm 让原本简洁优雅的项目变得臃肿，并将退场归因于风险投资带来的压力；也有人希望 workerd 能吸收 Deno 的安全与沙箱机制。反复出现的另一种声音是，标题更应写成“Deno 开发因 Cloudflare 的收购而实质终止”，同时不少人列举了近期的工具链整合清单（Bun、Astro、VoidZero/Vite、NuxtLabs、Astral/uv 等），认为这反映出一股更大的行业趋势。

**标签**: `#deno`, `#cloudflare`, `#javascript-runtime`, `#acquisition`, `#open-source`

---

<a id="item-2"></a>
## [Matthew Green：有 15%的概率人类会失去对公钥加密的信心](https://simonwillison.net/2026/Oct/9/matthew-green/) ⭐️ 8.0/10

密码学家 Matthew Green 在 X 上发帖（由 Simon Willison 引用并解读），估计人类有 1% 的概率生活在“Minicrypt”之中——那是一个公钥加密在原理上不可能存在的假想世界——另有 15% 的概率会在事实上失去对现有公钥加密算法的信心。他坦言这是别人为了保持“体面”而不愿提出的最坏情况，并指出 AI 制造意外发现的速度，与人类替换标准的速度根本不在一个数量级上。 公钥加密是 TLS、数字签名、安全通信乃至整个互联网信任基础设施的根基，因此一旦对它失去信心，将是系统性的安全事件，而非学院式的冷门议题。Green 的论述还把 AI 风险重新表述为一个密码学问题：即便有最优秀的 AI 辅助，标准化机构也无法足够迅速地重写并重新部署全球性的密码标准，除非在冲击到来之前就已完成准备。 Green 给出了两个明确的概率数字：1% 的概率身处 Minicrypt，15% 的概率在功能上失去对现有公钥加密的信心；他强调 AI 驱动的发现与人类标准化流程之间存在严重的不对称，并指出只有提前做好准备，才可能从这种冲击中恢复过来。由于他本人把这些数字定位为刻意引发讨论的最坏情况而非严谨预测，读者应将其理解为风险框架，而不是量化结论。

rss · Simon Willison · 10月9日 15:02

**背景**: Minicrypt 出自 Russell Impagliazzo 1995 年的论文《A Personal View of Average Case Complexity》，文中勾勒了五种可能的密码学世界：Algorithmica（无需密码学）、Heuristica（密码学存在但难以构造）、Pessiland（单向函数存在却无法带来有用的密码学）、Minicrypt（单向函数等对称密钥密码学可行，但公钥加密不可行）以及 Cryptomania（完整的公钥密码学存在）。现代安全体系基本都建立在接近 Cryptomania 的假设之上，这也正是 Green 给出的 1% Minicrypt 概率值得关注的原因。Matthew Green 是约翰斯·霍普金斯大学的密码学教授，以应用密码学和公共利益导向的研究著称；Simon Willison 则是发掘并加注这则引言的开发者兼博主。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Russell_Impagliazzo">Russell Impagliazzo - Wikipedia</a></li>
<li><a href="https://www.cs.sfu.ca/~kabanets/881/scribe_notes/lec8.pdf">Impagliazzo ’s Five Worlds</a></li>
<li><a href="https://www.quantamagazine.org/the-researcher-who-explores-computation-by-conjuring-new-worlds-20240327/">The Researcher Who Explores Computation by Conjuring New Worlds</a></li>

</ul>
</details>

**标签**: `#cryptography`, `#AI risk`, `#public-key encryption`, `#standards`, `#security`

---

<a id="item-3"></a>
## [中国天眼 FAST 发现脉冲星原生三体系统](https://nao.cas.cn/news/gd/202610/t20261009_8289939.html) ⭐️ 8.0/10

中欧科学家独立确认，中国天眼 FAST 发现的脉冲星 PSR J0435+3233 属于首例仍处于演化阶段的原生三体系统。该系统由脉冲星、白矮星和类太阳恒星组成，内外轨道周期分别为 8 天和 73.5 年，成果于 2026 年 10 月 9 日发表于《天体物理学杂志快报》。 仍在演化中的多星系统极难被观测到，因此这一天体为研究脉冲星、白矮星与普通恒星如何长期共存并演化提供了直接的观测窗口。它也体现了 FAST 在脉冲星发现与高精度计时方面日益重要的作用，并为多星系统形成与演化模型提供了新的检验样本。 该系统层次分明，内轨道周期仅 8 天，而外层轨道长达 73.5 年，外层类太阳恒星的远距离分布正是该系统能够长期稳定存在的原因。由于外层轨道需要数十年才能走完一圈，仍需持续的计时观测才能完整确定系统参数及其演化路径。

telegram · zaihuapd · 10月9日 05:14

**背景**: 脉冲星是超新星爆发后留下的高速自转、强磁场中子星，它会向外扫射无线电波束；由于脉冲极其规律，通过计时观测其信号的微小周期变化就能发现其周围看不见的伴星。中国天眼 FAST 是位于贵州的 500 米口径射电望远镜，其科学目标之一就是发现脉冲星并建立脉冲星计时阵。白矮星则是类太阳恒星耗尽燃料后留下的致密残骸，大小与地球相当。所谓“原生”三体系统，指三颗恒星诞生于同一母分子云、并非后来通过引力俘获拼凑而成，而这是首个被发现仍处于演化阶段的原生三体系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.zhuhai-hitech.gov.cn/gxxw/mtkt/content/post_3914221.html">珠海高校博士生给你讲：打捞 脉 冲 星 高新区</a></li>
<li><a href="https://www.cdstm.cn/videos/sounds/xkxzj/art/2020/art_c7a0b8ad508943ccacf713b4d9d66d72.html">第57集 “天眼”与 脉 冲 星</a></li>
<li><a href="https://www.thecover.cn/news/lzgoNX23TE2H90qSdq8Jkw==">thecover.cn/news/lzgoNX23TE2H90qSdq8Jkw==</a></li>

</ul>
</details>

**标签**: `#天文学`, `#FAST`, `#脉冲星`, `#三体系统`, `#天体物理学`

---

<a id="item-4"></a>
## [JetBrains 发布开源编程模型 Mellum2.1，Apache 2.0 许可](https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/) ⭐️ 8.0/10

JetBrains 发布了开源编程模型 Mellum2.1，采用 12B 参数的混合专家（MoE）架构、2.5B 激活参数，以 Apache 2.0 许可发布，并以 JetBrains/Mellum2.1-12B-A2.5B-Thinking 之名上线 Hugging Face。与上一版相比，本版本几乎全部工作都投入在后训练上，主要是真实环境中的强化学习，因此模型能够探索代码库、编辑文件并检查自己的修改，适合作为本地运行的编程代理。 一家主流 IDE 厂商推出以宽松许可发布、可在用户自有硬件上运行的编程模型，为开发者提供了闭源 API 编程助手的实用替代方案，也壮大了快速增长的开放编程代理生态。这也说明开源编程模型的竞争重心正从架构与规模转向面向代理式、可调用工具工作流的后训练质量。 该模型的架构与 Mellum2 相同，仍是 12B 混合专家、2.5B 激活参数，因此性能提升几乎全部来自后训练；也就是说每个 token 实际只激活约 2.5B 参数，而完整的 12B 参数提供模型容量。该版本定位于本地硬件上运行的编程代理与快速子代理，因此推理延迟和自托管部署比刷通用榜单更被看重。

telegram · zaihuapd · 10月9日 07:30

**背景**: 混合专家（MoE）是一种模型设计：模型内部包含许多专门的子网络（即“专家”），但每个 token 只会被路由到其中一小部分，因此总参数量远大于每个 token 实际激活的参数量，从而在保持模型容量的同时降低推理成本。强化学习则通过奖励模型在环境中采取行动所产生的结果来进行训练，此处的环境是真实的代码仓库，代理可以在其中阅读、修改并测试代码。JetBrains 以 IntelliJ IDEA、PyCharm 等 IDE 闻名，Mellum 是其面向真实 AI 工作负载的快速语言模型系列，Mellum2.1 是 Mellum2 Thinking 的后续版本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/">Mellum2.1 Gets to Work: A Fast Open Model for Coding Agents</a></li>
<li><a href="https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking">JetBrains/Mellum2.1-12B-A2.5B-Thinking · Hugging Face</a></li>
<li><a href="https://www.jetbrains.com/mellum/">Mellum by JetBrains: Fast language models for real-world AI workloads.</a></li>

</ul>
</details>

**标签**: `#JetBrains`, `#open-source AI`, `#coding agents`, `#mixture-of-experts`, `#LLM releases`

---

