# Horizon 每日速递 - 2026-09-01

> 从 37 条内容中筛选出 8 条重要资讯。

---

1. [谷歌从 Chrome 应用商店移除 MV2 扩展，包括 uBlock Origin](#item-1) ⭐️ 8.0/10
2. [Linux NAT 实现者反思：NAT 如何侵蚀开放互联网](#item-2) ⭐️ 8.0/10
3. [滑窗注意力在长上下文推理上胜过线性注意力](#item-3) ⭐️ 8.0/10
4. [GNN 存在时间泄漏，SynthFin-AML 强制因果划分](#item-4) ⭐️ 8.0/10
5. [Claude 共享对话遭搜索引擎收录 敏感数据面临泄露](#item-5) ⭐️ 8.0/10
6. [OpenClaw 发布重大 2.0 更新，合并逾 1.6 万个拉取请求](#item-6) ⭐️ 8.0/10
7. [欧盟依据《数字服务法》认定 ChatGPT、Reddit 和 Roblox 为“超大型”在线服务](#item-7) ⭐️ 8.0/10
8. [小米发布玄戒 O3 芯片及两款 AI 芯片，首发支持 LPDDR6](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [谷歌从 Chrome 应用商店移除 MV2 扩展，包括 uBlock Origin](https://webiterate.dev/google-removed-extensions-ublock-origin-108/) ⭐️ 8.0/10

谷歌已将 Manifest V2（MV2）扩展从 Chrome 网上应用店移除，包括广受欢迎的广告拦截器 uBlock Origin。这完成了向 Manifest V3 的迁移，Chrome 团队早在 2020 年就宣布了这一计划。 uBlock Origin 拥有超过一千万用户，此次移除对广告拦截、隐私和用户对浏览内容的控制产生了重大影响。这可能促使部分用户转向 Firefox 等替代浏览器，或转向功能较弱的基于 MV3 的广告拦截器。 Manifest V3 移除了长期运行的后台页面，并限制远程托管代码，从而限制了 uBlock Origin 这类强大拦截器所依赖的技术。功能较弱的 uBlock Origin Lite 仍然可用，但企业版 MV2 支持将于 2026 年 7 月在 Chrome 139 中被彻底移除。

hackernews · twapi · 8月31日 21:10 · [社区讨论](https://news.ycombinator.com/item?id=49514878)

**背景**: Manifest V3 是 Chrome 扩展平台的最新版本，谷歌设计它的目的是提升隐私、安全和性能。它取代了允许扩展使用强大 API 但也带来安全风险的旧版 Manifest V2。uBlock Origin 是一款自由开源的内容拦截器，凭借低 CPU 和内存占用赢得了大量用户。谷歌从 2020 年开始弃用 MV2，此次从应用商店移除是这一过程的最新一步。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline">Manifest V2 support timeline | Chrome for Developers</a></li>
<li><a href="https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3">Extensions / Manifest V3 | Chrome for Developers</a></li>
<li><a href="https://en.wikipedia.org/wiki/UBlock_Origin">uBlock Origin - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者对谷歌的做法表示强烈不满，认为这涉及安全和垄断问题。多位用户建议改用 Firefox，并指出 uBlock Origin 在 Firefox 上表现最好，而且如今的 Firefox 已经非常出色。整体情绪是对谷歌单方面掌控网络浏览行为的信任缺失。

**标签**: `#Chrome`, `#Manifest V3`, `#uBlock Origin`, `#Ad Blocking`, `#Browser Extensions`

---

<a id="item-2"></a>
## [Linux NAT 实现者反思：NAT 如何侵蚀开放互联网](https://dreamstation.systems/personal/ntppost.html) ⭐️ 8.0/10

Linux 中当前 NAT 系统的实现者 Rusty Russell 发表了一篇个人回顾文章，认为 NAT 的设计侵蚀了公共端点，并塑造了客户端-服务器的思维模式，从而加剧了互联网的中心化。这篇文章引发了大量讨论，共有 130 条评论。 这篇回顾出自一位关键实现者之手，提供了罕见的历史视角，展示了一个为解决 IPv4 地址短缺而生的技术方案如何塑造了互联网的架构与权力格局。它与当下关于去中心化、自托管以及 NAT 主导下运行服务器之难度的讨论高度相关。 Russell 解释说，NAT 通过避免端口预留来将更多连接挤进一个 IP 地址，但这使得来自不同地址的入站流量无法路由，从而消除了公共端点。评论者补充说，NAT 还让用户习惯了“客户端-服务器”是理所当然的；不过也有人为 NAT 辩护，认为它实际上充当了防火墙，保护了大量不安全的设备。

hackernews · robinpie · 8月31日 02:23 · [社区讨论](https://news.ycombinator.com/item?id=49504905)

**背景**: NAT（网络地址转换）允许多个设备在私有网络中共用一个公网 IP 地址，从而节省了有限的 IPv4 地址资源。它在家庭路由器和移动网络中无处不在，虽然隐藏了内部设备，但也破坏了原本让公共服务器搭建变得简单的端到端连接。互联网最初的设计是让任何主机都能直接访问任何其他主机；NAT 则在默认情况下引入了一种单向的客户端-服务器模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Network_address_translation">Network address translation - Wikipedia</a></li>
<li><a href="https://www.geeksforgeeks.org/computer-networks/network-address-translation-nat/">Network Address Translation (NAT) - GeeksforGeeks</a></li>

</ul>
</details>

**社区讨论**: 评论者大多同意 NAT 在互联网中心化中扮演了角色，但也有人认为将其称为“原罪”的说法过于夸张。RustyRussell 本人承认了这一权衡，另一些人则为普通 NAT 辩护，认为它是可控的，而运营商级 NAT（CGNAT）才是更有问题的变体。还有一种观点认为，设计者真正的错误是把物理世界的安全假设套用到了网络空间。

**标签**: `#networking`, `#NAT`, `#internet-history`, `#architecture`, `#decentralization`

---

<a id="item-3"></a>
## [滑窗注意力在长上下文推理上胜过线性注意力](https://www.reddit.com/r/MachineLearning/comments/1w3j1vw/slidingwindow_attention_beats_linear_on/) ⭐️ 8.0/10

Alexia Jolicoeur-Martineau 及其同事的新 arXiv 预印本报告称，带 sink 的滑窗注意力（SWA）在 Needle-in-a-Haystack 和 BABILong 基准上的性能比线性注意力变体高 2 到 10 倍。作者建议改用 SWA，而不是对线性模型进行后训练。 这一发现挑战了当前用线性注意力替代 softmax 注意力来构建长上下文模型的主流研究方向。它表明一个简单且已有的基线可能已经更有效，可能会改变实验室在长上下文推理方面分配后训练计算的方式。 该比较在多种 LLM 和多个下游任务上进行，SWA 无需后训练即可保持低内存和快速推理。论文承认线性注意力可能显示出潜力，但可能需要从头训练或大量后训练才能赶上 SWA。

reddit · r/MachineLearning · /u/Justgototheeffinmoon · 8月31日 16:35

**背景**: 标准 softmax 注意力的计算复杂度随序列长度呈二次方增长，这推动了旨在降低成本的线性注意力变体研究。带 sink 的滑窗注意力是一种更简单的现有方案：它将注意力限制在固定窗口内，并保留早期 token 作为注意力 sink，用全局上下文换取效率。BABILong 和 Needle-in-a-Haystack 是长上下文推理基准，用于测试模型在长文档中检索并对事实进行推理的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2608.28444v1">Sliding - window beats linear attention</a></li>
<li><a href="https://www.alphaxiv.org/abs/2608.28444">Sliding - window beats linear attention | alphaXiv</a></li>
<li><a href="https://runinfra.ai/glossary/attention-sinks">Attention sinks : what it is and why it moves cost | RunInfra</a></li>

</ul>
</details>

**标签**: `#sliding-window attention`, `#linear attention`, `#long-context`, `#reasoning`, `#LLM`

---

<a id="item-4"></a>
## [GNN 存在时间泄漏，SynthFin-AML 强制因果划分](https://www.reddit.com/r/MachineLearning/comments/1w3imxy/your_gnn_is_probably_just_an_overcomplicated_mlp/) ⭐️ 8.0/10

作者指出，在动态图的静态快照上训练 GNN 会泄漏未来边，导致模型'作弊'。他们发布了 SynthFin-AML v10.0（10 万节点，120 万边），一个具有严格 3 快照时间划分和匹配分布的合成基准，并报告了 LightGBM（PR-AUC 0.848）与 GraphSAGE（0.881）的结果。 这暴露了图机器学习中一个常见的评估缺陷：许多已发表的结果可能因时间泄漏而虚高，而非真实模型质量。SynthFin-AML 为动态图提供了更严格的评估标准，可以提升反洗钱及其他时序图应用的严谨性。 该基准强制使用 3 快照划分（训练边≤第 7 天，验证≤第 8 天，测试≤第 10 天），并让欺诈与正常零售交易金额共享相同的对数正态分布（μ=8.517，σ=0.8）以消除表格泄漏。作者为树模型构造了 11 个时点图特征；该基准已提交至 PyTorch Geometric 上游。

reddit · r/MachineLearning · /u/Glabmayt2075 · 8月31日 16:21

**背景**: 图神经网络（GNN）通过沿边传递消息来学习关系数据；当图随时间演化时，模型必须遵守因果性。时间泄漏指 GNN 在训练时看到来自未来的边或特征，通常因为静态快照的随机划分忽略了时间戳。反洗钱（AML）网络是典型的动态图场景，此前已有 SynthAML 等合成数据集用于基准测试。3 快照架构通过物理隔离训练/验证/测试的时间窗口，将模型感受野限制在真实因果范围内。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://kumo.ai/pyg/concepts/data-leakage/">Data Leakage in Graph ML: When Future Information Contaminates Training | Kumo.ai | Kumo.ai</a></li>
<li><a href="https://github.com/valiyevoktay-cmd/synthfin-aml-">GitHub - valiyevoktay-cmd/synthfin-aml-: A graph-native Anti ...</a></li>

</ul>
</details>

**标签**: `#GNN`, `#Temporal Leakage`, `#Dynamic Graphs`, `#Benchmark`, `#Anti-Money Laundering`

---

<a id="item-5"></a>
## [Claude 共享对话遭搜索引擎收录 敏感数据面临泄露](https://t.me/zaihuapd/43511) ⭐️ 8.0/10

Claude 的共享对话链接因缺少 'noindex' 元标签而被 Google 和 Bing 等搜索引擎收录。这导致 API 密钥、加密货币钱包地址、个人简历等敏感资料可以被公开搜索到，而 Anthropic 尚未修复该问题，用户被建议手动删除相关共享聊天。 这是一个严重的隐私漏洞，凡是使用过分享功能的 Claude 用户都可能受到影响，机密信息可能被互联网上的任何人看到。这一事件与大约一年前 ChatGPT 出现的同类问题相似，凸显了 AI 聊天分享功能中隐私保护措施的重要性。 这些共享页面未包含 robots 'noindex' 元标签，而该标签是一种用于阻止搜索引擎收录网页的标准 HTML 指令。据报道，已有数百条 Claude 共享对话出现在搜索结果中，内容涉及律师咨询记录、公司内部项目资料和社会安全号码等，且该漏洞目前仍未修补。

telegram · zaihuapd · 8月31日 03:22

**背景**: Claude 是 Anthropic 开发的 AI 助手，用户可以通过它生成可分享的对话链接。'noindex' 元标签是一种 HTML 指令，用于告诉 Google 等搜索引擎爬虫不要收录某个网页。如果没有该标签，搜索引擎可能会抓取并展示页面内容，让任何使用相关关键词的人都能看到。大约一年前 ChatGPT 也出现过类似的隐私问题，并已迅速修复。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cybersecuritynews.com/claude-ai-shared-chats/">Claude AI Shared Chats Reportedly Exposed in Google Search ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Noindex">noindex - Wikipedia</a></li>
<li><a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing">Block Search Indexing with noindex | Google Search Central</a></li>

</ul>
</details>

**标签**: `#security`, `#privacy`, `#Claude`, `#vulnerability`, `#AI`

---

<a id="item-6"></a>
## [OpenClaw 发布重大 2.0 更新，合并逾 1.6 万个拉取请求](https://openclaw.ai/blog/openclaw-2-accidentally) ⭐️ 8.0/10

8 月 30 日，OpenClaw 发布了其史上最大更新 2.0，汇集了 933 名贡献者（含 569 名首次参与者）提交的逾 1.6 万个拉取请求。该版本对安装、消息、记忆、技能、模型、浏览器、插件和安全等进行了全面改造，并新增了共享云端会话以支持多人协作。 这标志着 OpenClaw 的一个重要里程碑，约占项目迄今全部拉取请求的一半。共享云端会话和重建的浏览器体验扩大了该工具对团队和普通用户的吸引力。 为了准备这次更新，团队近七周未发布新版本。安装流程得到简化，浏览器端体验被彻底重建。

telegram · zaihuapd · 8月31日 04:38

**背景**: OpenClaw 是一款免费开源的自主任 AI 智能体，通过大语言模型（LLM）执行任务，并以消息平台作为其主要用户界面。它在本地运行，支持 WhatsApp、Telegram、Discord 及其他 30 多个平台，可使用 Claude、GPT 或本地模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenClaw">OpenClaw</a></li>
<li><a href="https://openclaw.ai/">OpenClaw — Open -Source AI Assistant</a></li>

</ul>
</details>

**标签**: `#OpenClaw`, `#release`, `#open-source`, `#software-update`, `#collaboration`

---

<a id="item-7"></a>
## [欧盟依据《数字服务法》认定 ChatGPT、Reddit 和 Roblox 为“超大型”在线服务](https://www.euronews.com/next/2026/08/31/eu-places-chatgpt-reddit-and-roblox-under-strictest-digital-safety-rules) ⭐️ 8.0/10

2026 年 8 月 31 日，欧盟委员会依据《数字服务法》将 ChatGPT 认定为超大型在线搜索引擎，将 Reddit 和 Roblox 列为超大型在线平台，因为三者欧盟月均活跃用户均超过 4500 万。它们现在面临更严格的安全、审计和数据共享义务。 这是生成式人工智能服务首次被《数字服务法》认定为超大型在线搜索引擎，为欧洲如何监管 AI 工具开创了先例。这一认定将《数字服务法》最严格的要求施加于三项服务，它们共同影响着数百万欧盟用户的在线言论、内容发现和社交互动。 三家公司有四个月过渡期来合规，期间必须开展年度系统性风险评估、接受独立审计，并向监管机构及经审核的研究人员共享数据。重点监管领域包括非法内容、未成年人保护，以及用户身心健康风险。

telegram · zaihuapd · 8月31日 14:39

**背景**: 《数字服务法》(Digital Services Act, DSA) 是欧盟的一项法规，对在线中介服务实行分层义务：所有服务适用基本规则，平台承担强化义务，而对欧盟月均活跃用户超过 4500 万的超大型在线平台(VLOP)和超大型在线搜索引擎(VLOSE)适用最严格的要求。这一认定程序旨在让大型平台从自愿的自我监管转向有约束力、可审计的合规体系。本次认定使 ChatGPT、Reddit 和 Roblox 与之前被认定的主要社交网络和电商平台进入同一监管类别。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Digital_Services_Act">Digital Services Act - Wikipedia</a></li>
<li><a href="https://www.explainx.ai/blog/eu-dsa-designation-chatgpt-reddit-roblox-august-2026">EU DSA: ChatGPT Named a Very Large Search Engine (2026 ...</a></li>
<li><a href="https://digital-strategy.ec.europa.eu/en/policies/list-designated-vlops-and-vloses">Supervision of the designated very large online platforms and ...</a></li>

</ul>
</details>

**标签**: `#EU regulation`, `#Digital Services Act`, `#AI policy`, `#online platforms`

---

<a id="item-8"></a>
## [小米发布玄戒 O3 芯片及两款 AI 芯片，首发支持 LPDDR6](https://t.me/zaihuapd/43524) ⭐️ 8.0/10

小米发布了三款新的玄戒芯片：AI 旗舰 SoC 玄戒 O3、带宽 1.22 TB/s 的 AI 加速芯片玄戒 O100，以及国内首款 3nm 智驾 AI 芯片玄戒 D100。三款芯片均已完成回片验证，其中 O3 将首发搭载于小米 18 Fold。 这标志着小米在手机、汽车和家居生态中加大自研芯片投入，加剧了与其它自研 SoC 厂商的竞争。O3 对 LPDDR6 的支持以及与国产存储伙伴长鑫存储（CXMT）的合作，也凸显了中国在存储供应链自主化方面的进展。 玄戒 O3 采用十核全大核 CPU，多核跑分首次突破 15000 分；GPU 为 16 核 Mali-G2-Ultra NX，比玄戒 O1 性能提升 85%、功耗降低 64%。它号称是全球首款支持 LPDDR6 的移动处理器，安兔兔跑分达到 522 万。

telegram · zaihuapd · 8月31日 15:15

**背景**: 大约在 O3 发布 459 天前，小米凭借玄戒 O1 重返旗舰手机 SoC 领域。玄戒系列定位于端侧 AI，覆盖手机、汽车和家居场景。LPDDR6 是 JEDEC 于 2025 年 7 月发布的低功耗 DRAM 标准，数据速率可达 10,667 至 14,400 Mt/s，长鑫存储已开始量产 LPDDR6 内存。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pandaily.com/xiaomi-unveils-xuanjie-o3-first-flagship-soc-break-5-million-aug2026">Xiaomi Unveils Xuanjie O 3 , First Flagship SoC to Break... - Pandaily</a></li>
<li><a href="https://news.metal.com/newscontent/104078070-xiaomi-xuanjie-o3-officially-announced-support-for-lpddr6-changxin-memory-as-domestic-memory-partner">On August 24, Xiaomi officially released the Xuanjie O 3 chip .</a></li>
<li><a href="https://www.techpowerup.com/352114/cxmt-officially-starts-mass-production-of-lpddr6-memory">CXMT Officially Starts Mass Production of LPDDR 6 Memory</a></li>

</ul>
</details>

**标签**: `#Xiaomi`, `#chips`, `#AI`, `#SoC`, `#semiconductors`

---

