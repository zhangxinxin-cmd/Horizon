# Horizon 每日速递 - 2026-09-20

> 从 28 条内容中筛选出 4 条重要资讯。

---

1. [AI 编造情报，美军差点登船拦截中国船只](#item-1) ⭐️ 9.0/10
2. [三星计划将 HBM4 与 HBM4E DRAM 产量提升一倍以上](#item-2) ⭐️ 8.0/10
3. [ChatGPT 被指通过广告技术收集器追踪站外活动](#item-3) ⭐️ 8.0/10
4. [斯坦福研究：大脑实为两个独立演化的器官构成](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [AI 编造情报，美军差点登船拦截中国船只](https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship) ⭐️ 9.0/10

据 CNN 9 月 18 日报道，今年春天，美国特种作战司令部一名情报分析员使用 AI 聊天机器人，将公开来源情报与机密信号情报进行融合分析，机器人错误识别了一艘中国船只的货物清单。随后该分析员又借助 AI 把这一错误结论包装成格式规范的正式情报报告并逐级上报，导致美军启动拦截计划——武装人员已准备登船、军机已经起飞——直到行动前夕官员们追查报告来源，才发现整份报告由 AI 生成、货物信息有误，行动才被叫停。 这是迄今最清晰的真实案例之一，显示 AI 幻觉可以直接渗入军事决策流程：一个被编造的细节就可能升级为对他国船只的武装拦截，进而引发严重的外交或军事冲突。这也为「在机密或作战流程中使用大语言模型必须配套来源追溯、人工核验与严格使用规范」的主张提供了有力论据。 这份伪造报告之所以能一路通过多个指挥层级，是因为 AI 把它排版成规范、正式的情报文件格式，让错误的货物信息看起来具备权威性；最终发现问题靠的是官员手工追查报告来源，而非任何自动化防护机制。该说法来自 CNN 引述的四名匿名知情人士，五角大楼尚未公开证实，因此行动的具体规模以及所涉 AI 系统仍无法核实。

telegram · zaihuapd · 9月20日 03:07

**背景**: AI 幻觉指模型（通常是大语言模型）把虚假或误导性信息当成事实输出；由于文本读起来流畅而自信，这类错误很难被察觉。在情报工作中，分析员通常会把 OSINT（公开来源情报，即从公开可得信息中获取的情报）与 SIGINT（信号情报，即通过截获电子信号与通信获得的情报）结合分析，而大语言模型正越来越多地被用于加速这种融合并起草报告。风险恰恰就在这里：模型可以凭空捏造出诸如货物清单这样的具体事实，而随后生成的那份格式规范的报告，又会抹掉人类读者原本用来质疑其可靠性的种种线索。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)">Hallucination (artificial intelligence) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Open-source_intelligence">Open-source intelligence - Wikipedia</a></li>
<li><a href="https://greydynamics.com/a-guide-to-signals-intelligence-sigint/">A Guide to Signals Intelligence ( SIGINT )</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#hallucination`, `#military AI`, `#national security`, `#misinformation`

---

<a id="item-2"></a>
## [三星计划将 HBM4 与 HBM4E DRAM 产量提升一倍以上](https://en.sedaily.com/finance/2026/09/20/samsung-to-double-hbm4-output-next-year-sources-say) ⭐️ 8.0/10

据 Sedaily 于 2026 年 9 月 20 日援引业内人士的报道，三星预计将把 HBM4 与 HBM4E DRAM 的产量提升一倍以上。此次扩产同时覆盖当前的 HBM4 一代以及其增强版本 HBM4E，而这两类内存正是最新一代 AI 加速器所采用的产品。 HBM 供应已成为 AI 硬件产业链中最紧张的一环，三星大幅扩产有望缓解制约 GPU 与 AI 加速器出货的内存瓶颈，同时加剧其与 SK 海力士、美光之间的竞争。此举还会波及整个 DRAM 市场：晶圆产能向 HBM 倾斜可能压缩普通内存的供给，进而推高消费级 DRAM 的价格。 HBM4 的目标带宽超过 1 TB/s，并且向下兼容 HBM3 控制器；而 HBM4E 是其增强版本，目前尚无统一的 JEDEC 标准，因此三星、SK 海力士与美光的产品规格各不相同。由于 HBM 每比特占用的晶圆产能高于普通 DRAM，此次扩产可能会以牺牲传统内存的产量为代价。

hackernews · giuliomagnifico · 9月20日 17:38 · [社区讨论](https://news.ycombinator.com/item?id=49778029)

**背景**: 高带宽内存（HBM）是一种 3D 堆叠式 SDRAM，通过硅通孔将多层 DRAM 裸片垂直堆叠连接，最初由三星、AMD 和 SK 海力士共同开发。它与高性能 GPU、FPGA 及 AI 专用芯片封装在同一基板上，能以远超传统 DIMM 内存的速度向这些芯片供数。每一代 HBM 都由 JEDEC 制定标准——HBM4 由三星、美光与 SK 海力士共同参与定义，2026 年 7 月 JEDEC 还发布了标准封装高带宽内存（SPHBM4）的 JESD330-4 规范。HBM4E 等后续世代进一步提升带宽与容量，以满足 AI 训练与推理的需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://www.micron.com/products/memory/hbm/hbm4">HBM4 | Micron Technology Inc.</a></li>
<li><a href="https://www.ersaelectronics.com/blog/hbm4-hbm4e">HBM4 compared to HBM4E - ersaelectronics.com</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，如今制约中国 AI 加速器的真正瓶颈是 HBM，而非处理器裸片或 ASML 光刻设备，华为昇腾的产量据称受限于长鑫存储（CXMT）的 HBM 产能。有人谈到裸片减薄（die thinning）这一虽具经济可行性却鲜少被讨论的制造环节，也有人质疑为何 HBM 未被用作消费电子设备的主内存（主要原因是成本），并对后市看法不一——有人认为供给过剩终将让各类内存变得非常便宜，也有人感叹产能转移会让消费级 DRAM 价格进一步上涨。

**标签**: `#HBM4`, `#Samsung`, `#DRAM`, `#AI hardware`, `#semiconductor manufacturing`

---

<a id="item-3"></a>
## [ChatGPT 被指通过广告技术收集器追踪站外活动](https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/) ⭐️ 8.0/10

一篇被广泛讨论的报道称，ChatGPT 现在使用标准的广告技术式收集器来追踪用户在其他网站上的活动，从而引发了新的隐私担忧与争论。该文指出，这一机制本身属于常规的广告技术，但把它用在 AI 聊天产品中却是前所未有的事情。 这类追踪技术在广告行业中早已司空见惯，但用在 AI 聊天产品中却被视为前所未有，并可能损害用户信任，因为人们对对话式助手的隐私预期远高于免费社交媒体。该事件也直接卷入监管争论，尤其是在欧盟，围绕 AI 产品如何收集与使用个人数据的讨论正在持续升温。 有评论者引用 MDN 指出，Firefox、Brave 和 Safari 会阻止这类跨站追踪，而 Chrome 和 Edge 不会，因此用户所选浏览器会显著影响其暴露程度。此外，也有读者批评该文章本身似乎是 AI 生成的，而非作者用自己的语言写成。

hackernews · lmbbuchodi · 9月20日 15:18 · [社区讨论](https://news.ycombinator.com/item?id=49776729)

**背景**: 广告技术（AdTech）是指广告主与发布商用来定向投放、送达和衡量数字广告的软件与数据收集工具。这类工具传统上依赖第三方 Cookie、追踪像素、设备指纹等跨站追踪手段，从而建立用户在多网站上的浏览行为画像。本次新闻的焦点在于，同一类机制据称已被用在 ChatGPT 内部，而用户通常认为自己的对话与活动不会通过广告式追踪被变现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://adtech.org/what-is-adtech/">What Is AdTech | AdTech</a></li>
<li><a href="https://www.aidigital.com/blog/adtech">AdTech Explained: What It Is & How It Works — AI Digital</a></li>

</ul>
</details>

**社区讨论**: 社区讨论整体偏向批评：一位评论者称赞欧盟通过立法遏制此类做法，尽管有时会带来不便；另一位强调文中的观点——机制本身是“标准广告技术”，但用在 AI 聊天产品上却前所未有；还有人质疑既然为 GPT 订阅付费，为何仍遭遇广告式追踪。也有评论者引用 MDN 的浏览器防护说明（Firefox、Brave 和 Safari 会阻止，Chrome 和 Edge 不会），并批评该文章是 AI 生成、而非作者自己的文字。

**标签**: `#privacy`, `#chatgpt`, `#adtech`, `#tracking`, `#ai-ethics`

---

<a id="item-4"></a>
## [斯坦福研究：大脑实为两个独立演化的器官构成](https://www.solidot.org/story?sid=85426) ⭐️ 8.0/10

斯坦福大学医学院的研究人员报告称，大脑并非源自单一的祖先祖细胞，而是由两个在基因上截然不同、彼此互斥的祖细胞谱系发育而来。研究团队通过观察发育中的小鼠胚胎，识别出一种表达 Otx2 基因、发育为前脑和中脑的细胞群，以及另一种表达 Gbx2 基因、发育为后脑的细胞群；这两类细胞群即便在发育最早的阶段也从不重叠。 这一发现挑战了长期以来占据主流的模型，即整个大脑拥有共同的发育起源，实际上等于把大脑重新定义为两个古老神经系统在数亿年间融合的产物。这可能重塑发育神经科学、干细胞生物学与再生医学的研究方向，因为脑细胞的来源决定了它们未来能否被修复或替代。 Otx2 与 Gbx2 都是已知参与胚胎神经管图式形成的同源盒（homeobox）转录因子，但该研究强调这两类祖细胞池彼此互斥，而非混杂共存。相关证据来自发育中的小鼠胚胎，因此“两个器官”的说法仍是对谱系数据的一种解读，尚需在人类中得到验证。

telegram · zaihuapd · 9月20日 12:11

**背景**: 在经典的脑发育模型中，早期胚胎里单一的一群神经祖细胞通过分裂和分化，生成从脑干到大脑皮层的所有脑区。胚胎中的基因表达通常由 Otx2、Gbx2 等转录因子的相反梯度沿神经管进行图式化，这些因子标记了未来前脑/中脑与后脑之间的边界。这类同源盒基因是能开启整套发育程序的“主控调节因子”，而它们所构建的后脑/脑干区域正是神经系统中更古老的部分，负责心跳、呼吸等自主生理功能，高级认知功能则源自前脑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GBX2">GBX2 - Wikipedia</a></li>
<li><a href="https://www.genecards.org/card/GBX2">GBX2 Gene - GeneCards</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/667797256">Science 首发! | 单细胞+空间转录组联合揭示人类大脑发育早期的综合细胞图谱 - 知乎</a></li>

</ul>
</details>

**标签**: `#neuroscience`, `#developmental-biology`, `#brain-evolution`, `#research-breakthrough`, `#stem-cells`

---

