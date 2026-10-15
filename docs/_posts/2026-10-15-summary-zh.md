---
layout: default
title: "Horizon Summary: 2026-10-15 (ZH)"
date: 2026-10-15
lang: zh
---

> 从 39 条内容中筛选出 6 条重要资讯。

---

1. [AdFection：定向广告被武器化为零点击间谍软件投递通道](#item-1) ⭐️ 9.0/10
2. [Meta 发布 Muse Spark Open：面向 Mac Studio 本地部署的 816B 开放权重模型](#item-2) ⭐️ 8.0/10
3. [随笔探讨 AI 冲击下数学家的存在主义焦虑](#item-3) ⭐️ 8.0/10
4. [Anthropic 上市前披露季度营收近 168 亿美元，环比增长近 50%](#item-4) ⭐️ 8.0/10
5. [ASML 据传正在开发混合键合设备](#item-5) ⭐️ 8.0/10
6. [随机连接的神经网络可自组织出学习回路，性能媲美反向传播](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [AdFection：定向广告被武器化为零点击间谍软件投递通道](https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/) ⭐️ 9.0/10

Citizen Lab 发布研究报告，首次公开确认定向广告基础设施可被用来投递零点击雇佣兵间谍软件，并将该手法命名为“AdFection”。该行动与一家名为 Discover-Tech 的以色列注册广告公司有关，并曾用于向半岛电视台的设备植入雇佣兵间谍软件厂商 Candiru 的产品。 这表明被数十万款应用和网站使用的广告技术供应链，可能被改造成精准监控的投递机制，使广告中间商与攻击性网络武器供应商之间的界限变得模糊。这将迫使应用商店、广告网络和监管机构把广告 SDK 视为严重的安全与人权风险来源。 根据相关报道和 Citizen Lab 的报告，这些广告覆盖约 7 万多款应用和 12 万多个网站，感染过程无需用户任何点击；不过讨论中一位广告技术工程师认为，报告对真正触发漏洞利用的具体机制描述得相当含糊。研究还指出，这家广告公司的服务器与雇佣兵监控厂商存在关联，后者正是借助此类渠道在全球追踪和入侵设备。

hackernews · jcomp · 10月15日 10:43 · [社区讨论](https://news.ycombinator.com/item?id=50101813)

**背景**: 零点击间谍软件是指无需受害者任何操作即可安装并运行的恶意软件——不需要点击链接，也不需要打开文件——通常通过利用设备操作系统或应用中尚未公开的漏洞实现。“雇佣兵间谍软件”指私营公司出售给政府的商业入侵工具，因其目标通常依据身份和掌握的信息进行挑选，被视为“精准工具”。Citizen Lab 是多伦多大学的一个研究机构，曾记录多起此类攻击行动；而广告技术（adtech）则指嵌入应用和网站中的广告网络、交易平台和 SDK 所构成的复杂生态。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/">Exposing AdFection: How Discover-Tech Turned Targeted Ads ...</a></li>
<li><a href="https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/">Targeted ads delivered 0-click exploits to install mercenary ...</a></li>
<li><a href="https://www.wired.com/story/nightmare-scenario-zero-click-spyware-is-infecting-phones-via-targeted-ads/">‘Nightmare Scenario’: Zero-Click Spyware Is ... - WIRED</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论非常热烈但意见分歧：一位从业十多年的广告技术工程师批评报告带有煽动性，并指出在如此复杂的生态中根本不存在单一的“广告提供商”可以追责；而另一些评论者则主张应限制整个在线广告行业，或认为以色列网络安全公司必然受本国政府支配。还有人从地缘政治角度发问，为何以色列能成为如此强势的网络强国。

**标签**: `#cybersecurity`, `#spyware`, `#adtech`, `#privacy`, `#Citizen Lab`

---

<a id="item-2"></a>
## [Meta 发布 Muse Spark Open：面向 Mac Studio 本地部署的 816B 开放权重模型](https://research.meta.ai/blog/muse-spark-open) ⭐️ 8.0/10

Meta 发布了开放权重模型 Muse Spark Open，其参数规模达到 8160 亿（Hugging Face 仓库名为 meta-models/Muse-Spark-Open-816B-A42B），并明确针对 Mac Studio 本地运行进行了优化。Meta 的部署文档显示，该模型可在 MLX、Unsloth 等多种推理运行器上运行，而不是绑定在单一运行时上。 一家美国前沿实验室推出专为单台桌面级设备量身打造的大模型，说明高强度的开放权重推理正在从数据中心下沉到工作站，这可能会改变开发者和中小团队采用大模型的方式。与此同时，这也加剧了与中国实验室（如阿里巴巴的 Qwen 与智谱的 GLM）在开放权重领域的竞争，而后者发布的模型正是外界用来衡量 Meta 的新标杆。 模型名称中的 "A42B" 后缀表明它采用混合专家（MoE）架构、约有 420 亿激活参数，这也是尽管总参数高达 8160 亿却仍能本地推理的关键原因。其许可证并非完全宽松：其中包含一条 "Model as a Service" 条款，若被许可方及其关联公司的总营收超过 2000 万美元，则不得通过 API 或类似接口向第三方提供该模型；同时早期的基准测试评论认为，该模型的表现落后于 Qwen3.8 Flash Next 和 GLM 5.3 Flash。

hackernews · bigwheels · 10月15日 17:47 · [社区讨论](https://news.ycombinator.com/item?id=50107379)

**背景**: 开放权重（open weights）指的是把模型训练好的参数——也就是决定其计算输出方式的那些数值——公开发布，任何人都可以下载并运行，但许可证仍然决定你能否微调或再分发该模型。MLX、基于 llama.cpp 的运行器以及 Unsloth 等本地部署工具，让用户可以在自有硬件上运行这些模型，而不必按 token 支付 API 费用。苹果的 Mac Studio 之所以在此类场景中受欢迎，是因为其统一内存架构可以容纳非常大的模型，苹果也发表过关于 MLX 以及基于 RDMA 的多台 Mac Studio 分布式推理的研究。混合专家（MoE）模型通过每个 token 只激活一部分参数来压低推理成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Open-weight_model">Open-weight model</a></li>
<li><a href="https://pyimagesearch.com/2024/05/13/harnessing-power-at-the-edge-an-introduction-to-local-large-language-models/">Harnessing Power at the Edge: An Introduction to Local Large ...</a></li>

</ul>
</details>

**社区讨论**: 评论区的整体情绪褒贬不一：一些评论者认为，由于许可证中含有针对 "Model as a Service" 的营收条款，该模型算不上真正的开放权重；另一些人则称赞 Meta 让 Muse Spark Open 几乎能在所有主流运行器上跑起来。对性能持怀疑态度的人引用 Artificial Analysis 的结果，指出其表现不如 Qwen3.8 Flash Next 和 GLM 5.3 Flash（后两者都可在单台 B300 上运行），也有人批评这些对比只覆盖最高推理档位，对高并发生产场景并不实用。还有评论认为这次发布印证了扎克伯格长期坚持的开放权重思路，也印证了 Meta 通过构建高粘性生态护城河的战略；Simon Willison 则提到，由于自己没有这种规模的硬件，只能通过 OpenRouter 来测试该模型。

**标签**: `#Meta`, `#open-weight models`, `#LLM`, `#AI model release`, `#local inference`

---

<a id="item-3"></a>
## [随笔探讨 AI 冲击下数学家的存在主义焦虑](https://www.derekthompson.org/p/i-know-why-the-mathematicians-weep) ⭐️ 8.0/10

作家 Derek Thompson 发表了题为《我知道数学家为何哭泣》的随笔，认为随着 AI 系统日益自动化并商品化数学工作，数学家正经历一种存在主义式的悲伤。该文在 Hacker News 上引发大规模讨论，获得 333 分、544 条评论。 它把 AI 的进步不仅框定为失业问题，更视为知识工作者的意义危机——他们的地位、身份认同与对真理的追求都系于自身技艺之上。这场讨论远远超出数学领域，触及当机器能大规模产出看似可信的结果时，社会如何认证专业能力与知识。 这一条目属于哲学性评论，而非技术突破，其价值主要体现在围绕地位商品化、认知认证的瓦解以及道义计分（deontic scorekeeping）展开的社区讨论中。有评论者指出，AI 已产出上百篇无人阅读的论文，而论坛上很多人却在不阅读、不验证的情况下宣称某些数学问题已被“解决”。

hackernews · RickJWagner · 10月15日 13:44 · [社区讨论](https://news.ycombinator.com/item?id=50103630)

**背景**: 长期以来，数学被视为人类理性最纯粹的形态，而经过同行逐步验证的“证明”则是其核心的真理通货。近年来的 AI 系统在竞赛级乃至研究级数学问题上取得了显著进展，这动摇了一个以稀缺、来之不易的专业能力为基础建立声望的领域。这篇随笔与讨论探讨的正是：当机器生成的数学变得唾手可得时，这种声望以及验证真理的社会过程会发生什么。

**社区讨论**: 评论者大体认同，这种恐惧与其说源于被取代，不如说源于那些赋予人地位与生计的东西被商品化，因为数千小时的奋斗事后看来可能变得毫无意义。也有人哀悼一种更深的丧失——追寻真理的欲望正在消失，因为一切都不再被验证或检验，可信度或声量取代了严谨。一位评论者将文章与哲学家 Robert Brandom 的“道义计分”概念联系起来，另一位则警告历史对落伍者并不仁慈，并以中世纪织工为例：他们的行会曾塑造国家，最终行业却轰然崩塌。

**标签**: `#AI`, `#mathematics`, `#philosophy`, `#future of work`, `#epistemology`

---

<a id="item-4"></a>
## [Anthropic 上市前披露季度营收近 168 亿美元，环比增长近 50%](https://simonwillison.net/2026/Oct/15/anthropic-tells-investors/) ⭐️ 8.0/10

据《金融时报》报道，Anthropic 周三向投资者披露，其第三季度（7 月至 9 月）营收达到 168 亿美元，较第二季度的 115 亿美元增长近 50%，而第一季度约为 48 亿美元。公司同时披露，剔除股权激励后的调整后营业利润率为 11%，每在算力上投入 1 美元可带来 1.70 美元的营收。 这是迄今外界得以窥见前沿 AI 实验室经济状况最清晰的窗口之一，而披露时机又恰在 Anthropic 可能启动 IPO 之前。正的调整后营业利润率加上 1.70 美元的营收/算力比，说明头部模型开发商可以实现单位经济盈利，这或将重塑投资者对 AI 板块的估值逻辑，也影响竞争对手对训练数据依赖的考量。 Anthropic 向投资者表示，“蒸馏”——即竞争对手用其模型输出训练自家模型——贡献了 5% 至 7% 的营收，而公司在第三季度已“大幅”削减了这部分业务；粗略推算，仅第二季度未具名的实验室就为蒸馏 Anthropic 模型花费了超过 5 亿美元。值得注意的是，Anthropic 似乎已不再沿用此前对投资者使用的“年化运行率营收”（annualized run-rate revenue）口径。

rss · Simon Willison · 10月15日 13:04

**背景**: Anthropic 是 Claude 系列大语言模型的开发公司，也是美国领先的前沿 AI 实验室之一。AI 初创企业过去常披露“年化运行率营收”，即把最近一个月或一个季度的收入外推到全年，这会让增长看起来比实际季度数字更亮眼；转向直接披露季度营收，是财报口径成熟的信号。“知识蒸馏”是机器学习中的一种常规技术，即让较小的“学生”模型模仿较大的“教师”模型的行为；但当它被用于竞争对手的商业 API 时，也成为一种以低成本获取能力的途径，同时会给被蒸馏的一方带来大量付费推理流量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Knowledge_distillation">Knowledge distillation - Wikipedia</a></li>
<li><a href="https://docs.pytorch.org/tutorials/beginner/knowledge_distillation_tutorial.html">Knowledge Distillation Tutorial</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#AI industry`, `#IPO`, `#revenue`, `#AI economics`

---

<a id="item-5"></a>
## [ASML 据传正在开发混合键合设备](https://newsletter.semianalysis.com/p/asml-is-building-a-hybrid-bonding) ⭐️ 8.0/10

Semianalysis 报道称，ASML 似乎正在开发一款混合键合（hybrid bonding）设备，依据是其专利申请文件、一则新闻报道以及公司自身的技术路线图。ASML 尚未发布任何官方公告或产品发布来证实这一动向。 ASML 是光刻系统的主导供应商，目前在先进封装设备市场尚无布局，因此其进入混合键合领域可能会扰乱用于 AI 和高性能计算的 3D 芯片堆叠供应链。这将使 ASML 与现有的键合设备厂商展开竞争，并可能重塑先进封装的经济格局。 该说法尚未得到证实，依据的是间接证据——专利、一则新闻报道和路线图信号——而非正式公告，因此时间表、技术规格和目标客户均不明确。混合键合需要带有嵌入式铜焊盘的极平坦介电表面，以实现极细的互连间距，这与 ASML 的核心光刻专长有较大差异，工艺难度很高。

rss · Semianalysis · 10月15日 19:27

**背景**: 混合键合是一种先进封装技术，其做法是在极平坦的介电表面上嵌入铜焊盘，使两片晶圆或裸片能够以极细的互连间距直接键合。先进封装指的是将多个裸片、chiplet 或异质元件组装并互连到单一封装中的一系列技术，介于前道制造与传统 IC 封装之间。随着晶体管微缩愈发困难且成本高昂，台积电 CoWoS 和 3D 堆叠等技术对于延续摩尔定律变得至关重要，尤其是在 AI 和高性能计算芯片领域。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/posts/asmpt-semi-solutions_??-???-????-???-??-??-activity-7460607355387281408-2YHp">What is Hybrid Bonding in Semiconductor Technology | LinkedIn</a></li>
<li><a href="https://uanalyze.com.tw/articles/918626067">【先進封裝】先進封裝產業技術- Hybrid Bonding | 優分析UAnalyze...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Advanced_packaging_(semiconductors)">Advanced packaging (semiconductors)</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#ASML`, `#hybrid bonding`, `#advanced packaging`, `#chip manufacturing`

---

<a id="item-6"></a>
## [随机连接的神经网络可自组织出学习回路，性能媲美反向传播](https://www.reddit.com/r/MachineLearning/comments/1x6hmyg/how_artificial_neural_networks_build_their_own/) ⭐️ 8.0/10

2026 年 10 月 9 日发表在《PNAS》上的一篇论文《How Biological Synapses Self-Assemble Gradient Learning》（由 MIT News 于 10 月 13 日报道）指出，由随机互联的类神经元单元组成的网络，在共享的局部可塑性规则驱动下，能够自发组织出学习基元（learning motifs），并完成模式识别与图像分类任务。报告称其表现与作为对照的反向传播训练网络相近。 这一结果重新定义了设计思路：不再是手工设计学习回路，而是给定局部规则，让学习机制自行组织，这为替代全局误差反向传播的、更具生物合理性的方案提供了方向。如果这类自组织机制能够扩展并具备泛化能力，可能会影响学界对学习规则、信用分配以及类脑硬件的思考方式。 与反向传播的对比仅限于所测试的基础模式识别与图像分类任务；作者明确提醒，自组织现象并不能证明大脑确实采用了这一机制。待解问题包括：所发现的学习基元在不同初始连接结构下是否稳定，以及该方法能否扩展到演示任务之外。

reddit · r/MachineLearning · /u/Dorian182 · 10月15日 10:01

**背景**: 人工神经网络通常通过反向传播进行训练，即把全局误差信号反向传遍整个网络，而这一过程普遍被认为缺乏生物合理性，因为生物突触只能获取局部信息。突触可塑性指的是连接强度随神经活动发生的变化；此前已有研究探索局部可塑性规则以及通过元学习训练的可塑性网络，但通常仍基于预先设定的网络结构，而非自我组织出的结构。这篇论文反其道而行：网络连接初始是随机的，由共享的局部可塑性规则让学习回路自行组装形成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Synaptic_plasticity">Synaptic plasticity - Wikipedia</a></li>
<li><a href="https://infoscience.epfl.ch/server/api/core/bitstreams/fccff930-b75c-4944-9ddc-c9f6b24617a2/content">Local plasticity rules can learn deep representations</a></li>
<li><a href="https://papers.nips.cc/paper/2020/file/f291e10ec3263bd7724556d62e70e25d-Paper.pdf">Learning to Learn with Feedback and Local Plasticity</a></li>

</ul>
</details>

**社区讨论**: 相关讨论将该工作视为一次有实质意义的新颖进展，而非立竿见影的范式转变，并提出了若干开放问题：所发现的学习基元在不同初始连接下是否稳定，以及能否泛化到演示任务之外。讨论同时指出，作者恰当地说明自组织并不意味着大脑采用了这一机制。

**标签**: `#neuroscience`, `#self-organization`, `#synaptic-plasticity`, `#backpropagation-alternatives`, `#machine-learning-research`

---