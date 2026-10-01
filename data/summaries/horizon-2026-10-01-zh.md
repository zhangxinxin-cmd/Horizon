# Horizon 每日速递 - 2026-10-01

> 从 34 条内容中筛选出 6 条重要资讯。

---

1. [谷歌发布新前沿模型 Gemini 4 Argon](#item-1) ⭐️ 9.0/10
2. [团队发文《你说过不要 MCP》，公开反转反 MCP 立场](#item-2) ⭐️ 8.0/10
3. [DeepSeek 开源华为昇腾全套基础软件栈](#item-3) ⭐️ 8.0/10
4. [Cloudflare 宣布进军公共证书颁发机构](#item-4) ⭐️ 8.0/10
5. [Kimi K3 经 Baseten 接入 OpenAI Codex 企业通道](#item-5) ⭐️ 8.0/10
6. [Reddit 将以反 AI 抓取为由停用 RSS 与公开 API](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [谷歌发布新前沿模型 Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) ⭐️ 9.0/10

谷歌发布了新的前沿人工智能模型 Gemini 4 Argon。官方公告表示，在向开发者、企业和消费者开放 Argon 之前，公司会继续收集早期测试者的反馈并迭代其安全护栏（guardrails）。该消息在 Hacker News 上引发热议，相关帖子获得 921 分、632 条评论。 这次发布是各大前沿 AI 实验室持续快速交替领先的又一例证，削弱了“第一个取得领先的实验室将永久锁定优势”这一观点。对从业者而言，它进一步说明模型本身正日益商品化，真正的持久价值在于掌握技能、数据与工作流整合能力，而不是押注于单一供应商。 该模型尚未全面开放：公告将 Argon 描述为仍处于反馈收集与安全护栏迭代阶段，之后才会大规模推出。讨论中还提到，Argon 智能体据称已在谷歌内部用于将 C/C++ 代码库迁移到 Rust，显示智能体编程（agentic coding）被作为核心能力来宣传。

hackernews · bradleyg223 · 9月30日 20:04 · [社区讨论](https://news.ycombinator.com/item?id=49913571)

**背景**: Gemini 是谷歌旗下的旗舰多模态 AI 模型系列，直接与 OpenAI、Anthropic 的模型在所谓“前沿模型竞赛”中竞争。这场竞赛中常被引用的一个观点来自 Dario Amodei：他认为 AI 是赢家通吃的领域，早期领先优势会不断“集中”（concentrating）且不会被让出。这条新闻之所以引人注目，是因为它出现在各家实验室在过去一年里反复互相超越的背景下，而这恰恰是该论点无法预测的模式。

**社区讨论**: Hacker News 的讨论整体上认可这次发布，但关注点更多在行业格局而非基准分数：nickysielicki 认为今年的交替领先说明 Amodei 的“集中化”论点站不住脚；juanre 建议工程师让模型和供应商保持可替换，从而让智能本身成为商品。也有人对谷歌的措辞持怀疑态度——babelfish 调侃了谷歌“总是发布不出来的模型”这一印象；taylorfinley 则讲述了一个引人注目的智能体案例：某个 Gemini Flash 模型把 GDB 挂到 GPU 驱动上，并编写 LD_PRELOAD 兼容层，让 ROCm 能在 llama.cpp 上跑起来。

**标签**: `#AI/ML`, `#Gemini`, `#LLM`, `#Google`, `#Model Release`

---

<a id="item-2"></a>
## [团队发文《你说过不要 MCP》，公开反转反 MCP 立场](https://earendil.com/posts/you-said-no-mcp/) ⭐️ 8.0/10

某团队发布了一篇题为《You said no MCP》的文章，公开推翻自己此前强烈反对 MCP（模型上下文协议）的立场，并且没有悄悄转向，而是坦承这是一次反转。该文在 Hacker News 上引发约 610 分、340 条评论的大型讨论，主题围绕 MCP 与 CLI 两种 AI 智能体工具接入方式展开。 这次反转削弱了 2026 年初由众多知名人士推动的论调，即 MCP 已经名存实亡、命令行工具才是最终赢家。由于是否采用 MCP 直接影响 AI 智能体在生产环境中的安全、部署与可观测性，一家受尊重团队改变立场，对当下所有设计智能体基础设施的人都是一个重要信号。 争论的焦点集中在作者当初用来反对 MCP 的那些权衡点：安全性、可观测性与遥测、以及部署和运维的便利性。评论者还指出，MCP 在技术上并非最优，但兼容性极广——有人把它比作 USB-C、NVMe 或 HDMI，这些标准虽有缺陷却仍被广泛采用；同时也要注意 MCP 服务器可以执行任意代码并访问本地文件，因此需要谨慎使用。

hackernews · yarapavan · 9月30日 09:55 · [社区讨论](https://news.ycombinator.com/item?id=49906637)

**背景**: 模型上下文协议（MCP）是 Anthropic 于 2024 年 11 月推出的开放标准与开源框架，目的是统一 AI 系统（如大语言模型）与外部工具、数据源和工作流之间的连接方式。它常被形容为 AI 应用领域的“USB-C 接口”，让 Claude、ChatGPT 等客户端可以接入本地文件、数据库、搜索引擎或专用提示词。与之竞争的是基于 CLI 的方案：把工具暴露为普通 shell 命令由模型直接调用，一些工程师认为这种方式成本更低、在多步推理中更可预测，另一些人则强调 MCP 在访问控制、遥测和分发打包上的优势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro">What is the Model Context Protocol (MCP)?</a></li>
<li><a href="https://tyk.io/learning-center/mcp-vs-cli-for-ai-agents-enterprise-comparison-guide/">MCP vs . CLI : A Guide to AI Agent Tooling | Tyk</a></li>

</ul>
</details>

**社区讨论**: 整体情绪倾向于支持这次公开反转：有评论者称赞该团队没有掩饰自己改变了曾经坚定的信念。也有人给出了编码之外的 MCP 实际用例，例如把 MCP 接入 rcmd、Clop、Lunar 等 macOS 应用，从而用本地 Qwen 模型以自然语言配置它们；还有评论者批评 2026 年 3 月那波宣称 MCP 已死、却无视安全、可观测性和部署等论据的网红言论。一个反复出现的务实反驳是：MCP 也许不是最优解，但它像 USB-C 或 HDMI 一样无处不在，并且会不断改进，所以“有总比没有好”。

**标签**: `#MCP`, `#AI agents`, `#developer tooling`, `#LLM integration`, `#industry commentary`

---

<a id="item-3"></a>
## [DeepSeek 开源华为昇腾全套基础软件栈](https://mp.weixin.qq.com/s/X41mKH4Ds-VXUAnK6M8Eww) ⭐️ 8.0/10

DeepSeek 于 2026 年 9 月 30 日开源了面向华为昇腾平台的一整套基础组件，与其英伟达平台组件一一对应，涵盖 TileLang 高级语言编译工具链、计算库和分布式通信库。此次发布还包括 DeepGEMM Ascend、DeepEP Ascend、TileKernels、FlashMLA 和 DeepSelect，DeepSeek 表示相关组件在多项测试中性能接近硬件上限，并正与华为共同推进昇腾 950 的 128 卡超节点方案。 这是头部模型研发方首次为英伟达之外的加速器发布覆盖内核与库层面的完整软件栈，为昇腾用户提供了可替代 CUDA 生态工具链的现实选项。若该栈逐步成熟，将有望显著削弱长期把大模型训练与推理绑定在英伟达 GPU 上的生态锁定效应，并强化华为在中国 AI 基础设施市场中的地位。 DeepGEMM Ascend 被描述为采用 MIT 许可证的移植版本，与原版 DeepGEMM 完全 API 兼容，在面向华为 NPU 的同时保留原有接口形态，并支持 BF16、FP8、FP4 的 GEMM 以及 MQA logits。需要留意的局限在于，这本质上是一次生态移植而非新的算法突破，其价值取决于这些组件对实际昇腾工作负载的覆盖程度以及后续维护的活跃度。

telegram · zaihuapd · 9月30日 03:09

**背景**: 华为昇腾是一系列 AI 加速芯片（NPU），被普遍视为中国国内对标英伟达 GPU 的主要替代方案；昇腾 950 超节点指的是一种将 128 颗此类芯片互联的系统设计方案。目前绝大多数 AI 软件都是为英伟达的 CUDA 平台编写，因此支持一款新芯片通常需要重新实现核心库并手工调优算子。DeepGEMM 是 DeepSeek 的高性能矩阵乘法（GEMM）库，FlashMLA 是其用于 DeepSeek-V3 系列的优化注意力算子库，而 TileLang 是一种基于分块（tile）的编程语言，让开发者能以更高抽象层次表达 GPU/NPU 算子。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/deepseek-ai/DeepGEMM-Ascend">GitHub - deepseek-ai/ DeepGEMM - Ascend : DeepGEMM - Ascend ...</a></li>
<li><a href="https://aireiter.com/blog/deepseek-ascend-infrastructure-components">DeepSeek Ascend Infrastructure Components, Mapped to NVIDIA</a></li>
<li><a href="https://arxiv.org/abs/2504.17577">TileLang : A Composable Tiled Programming Model for AI Systems</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#Huawei Ascend`, `#Open Source`, `#AI Infrastructure`, `#GPU Kernels`

---

<a id="item-4"></a>
## [Cloudflare 宣布进军公共证书颁发机构](https://blog.cloudflare.com/cloudflare-certificate-authority/) ⭐️ 8.0/10

Cloudflare 宣布计划成为公共证书颁发机构，已申请加入 Chrome、Apple、Microsoft 和 Mozilla 的根证书计划，并与 GlobalSign 签署协议收购一个被广泛信任的根证书。该公司表示目前尚未开始签发证书，但将优先支持基于 ACME 的自动化签发与续期，并计划在 2027 年第一季度签发生产级默克尔树证书（MTC）。 Cloudflare 是全球处理 TLS 流量规模最大的服务商之一，自己成为受公开信任的 CA 后，它可以极大规模地签发证书，并减少对 DigiCert、Sectigo、Let's Encrypt 等现有机构的依赖。其“ACME 优先”的定位以及较早的 MTC 路线图，也让它有机会影响 WebPKI 在自动化以及未来后量子迁移方面的走向。 Cloudflare 已申请加入各大根证书计划，并通过从 GlobalSign 收购一个受信任根证书来起步，而非完全从零开始，同时明确表示目前尚未签发任何证书。2027 年的 MTC 目标被描述为面向后量子就绪的生产级里程碑，这意味着此次公告更多是战略路线图，而非已经上线的服务。

telegram · zaihuapd · 9月30日 06:26

**背景**: 证书颁发机构（CA）是签发 TLS 证书的实体，浏览器依靠这些证书验证网站身份；若想被默认信任，CA 的根证书必须被 Chrome、Apple、Microsoft、Mozilla 等浏览器和操作系统厂商维护的根证书计划收录。ACME（自动证书管理环境）是一项 IETF 标准，把域名验证和证书签发变成全自动协议，Let's Encrypt 等服务正是基于它运作。之所以要准备后量子证书，是因为未来的量子计算机可能破解当今的签名算法，而默克尔树证书（MTC）正是为让后量子认证在公共互联网上足够轻量而提出的一种新证书格式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.encryptionconsulting.com/merkle-tree-certificates/">Merkle Tree Certificates & Post - Quantum WebPKI</a></li>
<li><a href="https://www.sectigo.com/blog/what-are-merkle-tree-certificates-mtcs">What are Merkle Tree Certificates (MTCs)? | Sectigo® Official</a></li>
<li><a href="https://dev.to/michaelcarter09/how-acme-http-01-and-dns-01-challenges-work-internally-4bdf">How ACME HTTP-01 and DNS-01 Challenges Work... - DEV Community</a></li>

</ul>
</details>

**标签**: `#Cloudflare`, `#Public CA`, `#TLS Certificates`, `#ACME`, `#Post-Quantum`

---

<a id="item-5"></a>
## [Kimi K3 经 Baseten 接入 OpenAI Codex 企业通道](https://36kr.com/newsflashes/4005691489112198) ⭐️ 8.0/10

美国 AI 基础设施公司 Baseten 宣布，企业用户现在可以在 OpenAI 的编程工具 Codex 中使用月之暗面（Moonshot AI）的 Kimi K3，相关调用费用直接计入企业已有的 OpenAI 采购承诺额度，无需新增供应商采购流程。这使得 Kimi K3 成为首个进入 OpenAI 企业付费结算体系的中国开源模型。 这标志着企业 AI 采购方式的显著变化：一款中国开源权重模型如今可以通过美国竞争对手自身的结算通道购买，大幅降低了已与 OpenAI 签约的大型企业的采用门槛。这也意味着模型互操作性增强，Codex 这类工具正走向多供应商格局，可能重塑企业在中美模型之间分配 AI 预算的方式。 Kimi K3 是月之暗面推出的 2.8 万亿参数稀疏混合专家（MoE）多模态推理模型，896 个专家中每次输入约激活 16 个，上下文窗口约 1,048,576 tokens；经第三方路由时，定价约为每百万输入 token 1.03 美元、每百万输出 token 9.043 美元。此事的核心承载方是 Baseten，由它负责托管与推理服务，因此可用性依赖 Baseten 的基础设施，而非 OpenAI 与月之暗面的直接合作。

telegram · zaihuapd · 9月30日 11:23

**背景**: OpenAI Codex 是 OpenAI 的 AI 编程工具/助手，大型企业通常会与 OpenAI 签订最低消费承诺，再从各类受支持的服务中抵扣额度。Baseten 是一家美国推理平台，负责在生产环境中部署和扩展开源与自研 AI 模型，在这里充当把 Kimi K3 引入 Codex 的桥梁。Kimi K3 由中国公司月之暗面开发，这类开放权重模型通常允许第三方云厂商托管并转售推理服务，这也是中国模型能够通过 OpenAI 合同结算的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(chatbot)">Kimi (AI) - Wikipedia</a></li>
<li><a href="https://openrouter.ai/moonshotai/kimi-k3">Kimi K 3 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://www.baseten.co/">Inference Platform : Deploy AI models in production | Baseten</a></li>

</ul>
</details>

**标签**: `#Kimi K3`, `#OpenAI Codex`, `#enterprise AI`, `#China AI`, `#model integration`

---

<a id="item-6"></a>
## [Reddit 将以反 AI 抓取为由停用 RSS 与公开 API](https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots/) ⭐️ 8.0/10

Reddit 宣布将于 11 月 13 日停止 RSS 订阅支持，理由是 RSS 已成为大规模抓取和自动化滥用（尤其是 AI 机器人）的常见渠道；同时公开 API 将于 2027 年 3 月关闭。公司建议版主改用 Discord Relay，并提醒第三方应用和机器人开发者须在 2027 年 1 月 12 日前完成注册，否则将被移除 API 访问权限。 这一决定切断了两种最常用的程序化获取 Reddit 内容的方式，直接影响第三方客户端、版务机器人、研究人员、数据存档者以及把 Reddit 当作公开语料库的 AI 从业者。这也是更大行业趋势的一部分：平台以反抓取和 AI 训练控制为名收紧公开数据访问，代价则是开放网络生态。 RSS 被点名为滥用渠道，而不仅仅是过时格式；Reddit 给版主推荐的替代方案是 Discord Relay，而非官方订阅源。错过 2027 年 1 月 12 日注册截止日期的开发者将直接被移除 API 访问权限，公告中也没有说明针对非商业或研究用途的豁免流程。

telegram · zaihuapd · 10月1日 00:27

**背景**: RSS（Really Simple Syndication）是一种开放的标准化 XML 格式，用户可以通过订阅源阅读器获取网站更新，而不必依赖算法驱动的时间线，长期以来是无需登录、无需 App 即可追踪信息源的轻量方式。公开 API 则是一套文档化的接口，让程序可以直接查询服务的数据，绝大多数第三方 Reddit 客户端、机器人和研究工具都依赖它。近年来 Reddit 已经收紧过 API 条款，而其内容已成为大语言模型的重要训练来源，因此平台如今有强烈的商业动机去控制谁可以抓取数据、以什么条件抓取。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zh.wikipedia.org/zh-hans/RSS">RSS - 维基百科，自由的百科全书</a></li>
<li><a href="https://sspai.com/post/56198">RSS - 高效率的 阅 读方式 - 少数派 | 少数派 - 高品质数字消费指南</a></li>

</ul>
</details>

**标签**: `#Reddit`, `#API Access`, `#RSS`, `#AI Scraping`, `#Platform Policy`

---

