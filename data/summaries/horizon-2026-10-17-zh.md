# Horizon 每日速递 - 2026-10-17

> 从 37 条内容中筛选出 6 条重要资讯。

---

1. [Claude 破解 NIST ECDSA 曲线种子来源之谜](#item-1) ⭐️ 9.0/10
2. [Jake Archibald 对比 Web 场景下的 JPEG XL 与 AVIF](#item-2) ⭐️ 8.0/10
3. [Mercor：美国 90%工时缺乏 AI 基准测试覆盖](#item-3) ⭐️ 8.0/10
4. [研究人员利用存在 37 年之久的 OpenBSD 内核漏洞](#item-4) ⭐️ 8.0/10
5. [Show HN：Gemini 4 Argon 在 StarSkirmish 基准 v0.2 中玩《星际争霸》](#item-5) ⭐️ 8.0/10
6. [可灵 Kling 4.0 全量上线，接入 MCP/CLI 并预告 4K HDR 输出](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Claude 破解 NIST ECDSA 曲线种子来源之谜](https://www.anthropic.com/research/ecdsa-curve-origins) ⭐️ 9.0/10

Anthropic 的研究人员报告称，Claude 查明了 NIST P-192、P-224、P-256、P-384 和 P-521 椭圆曲线背后长期成谜的种子，它们其实是 C 标准库中 lrand48 随机数生成器以 Unix 时间戳作为种子后输出的普通结果——例如 P-256 的种子对应 1997 年 8 月 16 日 01:52:34 UTC。这一发现是在与模型交互不到半小时内完成的，而第五个二进制种子 B-163 仍然无法被 Claude 尝试的任何方法解释。 这些种子的来源悬而未决已约 25 年，并一直是阴谋论的温床——有人怀疑 NSA 故意挑选了带有隐藏弱点的曲线参数；如今把它们追溯到一个普通的、以时钟为种子的随机数生成器，消除了笼罩在互联网上部署最广泛的几条椭圆曲线之上的重大疑云。同时，这也是 AI 辅助研究解决人类密码学家长期未解难题的一个引人注目的例证。 与 ANSI X9.62 中“任意种子”的描述不同，这些值并非由任何哈希算法产生，而是 lrand48 的直接输出；rand48 是一种 48 位线性同余生成器，参数为 a = 0x5DEECE66D、c = 0xB、m = 2^48。该结果确认了种子的生成方式，却无法证明它们是如何被挑选出来的，因为被生成后又丢弃的候选值无从查证，而且理论上仍可以通过搜索时间戳来得到一条具有特定性质的曲线。

hackernews · ahlCVA · 10月16日 18:55 · [社区讨论](https://news.ycombinator.com/item?id=50122800)

**背景**: NIST 于 2000 年在 FIPS 186-2 中发布了 P-192、P-224、P-256、P-384 和 P-521 椭圆曲线，它们被用于 TLS 中的 ECDSA 签名和 ECDH 密钥交换，其中 P-256 也被称为 prime256v1。ANSI X9.62 规定，此类曲线应通过取一个任意种子、用 SHA-1 对其哈希、再由摘要输出推导曲线参数的方式生成，其目的是提供“袖子里没藏东西”的保证，表明参数中没有植入后门。由于无人能解释这些任意种子从何而来，这些曲线长期被怀疑是被人刻意挑选的，而斯诺登时代关于 NIST 标准的披露更强化了这种猜疑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://words.filippo.io/seeds-solved/">The NIST Elliptic Curves Seeds Bounty Has Been Claimed</a></li>
<li><a href="https://cryptobriefing.com/claude-traces-nist-p256-seed-origins/">Claude traces NIST P-256 seed to a 1997 random number ...</a></li>
<li><a href="https://www.unite.ai/anthropic-says-claude-traced-nist-ecdsa-curve-seeds-to-a-1990s-rng/">Anthropic Says Claude Traced NIST ECDSA Curve Seeds to a ...</a></li>

</ul>
</details>

**社区讨论**: 社区反应整体是庆祝和调侃：有评论者开玩笑说，13 年的阴谋论锡纸帽最终终结于 srand48(time(NULL))；还有人表示这一发现对一整代 NIST 密码学阴谋论是毁灭性打击。几位评论者提出的实质性保留意见是，这只确认了种子的生成方法，并没有说明它们是如何被挑选的，因为被丢弃的候选值无法被观察到，理论上也仍可通过搜索时间戳找到一条具有特定性质的曲线。也有人推测，无法解释的 B-163 种子可能只是公布数值时某一位数字被敲错了。

**标签**: `#cryptography`, `#ECDSA`, `#NIST curves`, `#random number generation`, `#AI-assisted research`

---

<a id="item-2"></a>
## [Jake Archibald 对比 Web 场景下的 JPEG XL 与 AVIF](https://jakearchibald.com/2026/jpeg-xl-vs-avif/) ⭐️ 8.0/10

Web 性能工程师 Jake Archibald 发布了一篇详细对比 JPEG XL 与 AVIF 的文章，针对照片、截图和插画等真实 Web 使用场景，考察文件体积、视觉质量与编码性能。该文引发了开发者与图像压缩爱好者的大量讨论，焦点集中在编码器成熟度与各类权衡上。 图像格式直接影响页面体积、加载速度和视觉还原度，因此 JPEG XL 与 AVIF 的选择将长期影响 Web 开发者交付图片的方式。这场争论之所以重要，还因为浏览器支持并不对等：AVIF 目前已可在所有主流浏览器中使用，而 JPEG XL 在占据主导地位的 Chromium 内核中基本仍不可用。 讨论中反复出现的一点是，JPEG XL 的参考编码器 libjxl 在高 effort 设置下非常慢——最高 effort 需要约 9 到 46 秒（是默认设置的 50–180 倍），而换来的收益仅为照片 2–7%、截图和插画约 25% 的体积缩减；相比之下，jixel 等替代编码器据称几秒内即可达到相近效果。还有评论者认为，公开的 JPEG XL 数据低估了该格式，更好的编码器可让无损文件再缩小约 30–39%。

hackernews · farlight · 10月16日 16:12 · [社区讨论](https://news.ycombinator.com/item?id=50120224)

**背景**: JPEG XL 是一种免版税的下一代图像格式，目标是超越 JPEG、PNG、GIF 和 WebP，并且可以无损地转码已有的 JPEG 文件。AVIF 则是开放、免版税的格式，它在 HEIF 容器中存放用 AV1 视频编解码器压缩的图像，在相同主观画质下文件比 JPEG 小得多。两者都以取代传统 Web 图像格式为目标，但各自编码器的实现水平与普及进度差异很大，这正是此类直接基准测试容易引发争议的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://jpegxl.info/">JPEG XL : Superior Image Compression</a></li>
<li><a href="https://en.wikipedia.org/wiki/AVIF">AVIF - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Compression_artifact">Compression artifact - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 整体情绪褒贬不一但技术含量很高：有开发者称赞 AVIF 在实际生产中的表现，并分享了能让图片缩小 10 倍以上、同时保留透明通道的 ffmpeg 参数；也有人批评其细节处理，有评论者以示例中的 F1 赛车图高光被抹去为例，称这证明了该格式存在根本缺陷。最有力的反驳是：JPEG XL 表现不佳反映的是编码器尚不成熟，而非格式本身的问题；同时还有技术解释指出，libjxl 在高 effort 下变慢，源于围绕 Butteraugli 感知误差指标进行的迭代式优化循环。

**标签**: `#image formats`, `#web performance`, `#JPEG XL`, `#AVIF`, `#compression`

---

<a id="item-3"></a>
## [Mercor：美国 90%工时缺乏 AI 基准测试覆盖](https://www.mercor.com/research/labor-index/benchmark-map/) ⭐️ 8.0/10

Mercor 在其“Benchmark Map”劳动力指数分析中，将现有公开 AI 基准测试映射到 O*NET 职业任务上，发现约 90%的美国工作时间花在几乎没有或完全缺乏基准覆盖的任务上。研究还发现，即使在控制了 AI 暴露度之后，工资总额更高的职业所对应的 O*NET 任务在基准测试提示中仍被显著过度代表。 这一发现让人严重质疑 AI 能力究竟在多大程度上被真实工作所衡量，因为用于模型排行榜和宣传的基准测试可能只覆盖了约十分之一的美国劳动力经济。它表明 AI 评估偏向高薪职业，这可能扭曲政策制定者、雇主和研究者对 AI 真实落地能力及岗位替代风险的判断。 该分析以“未饱和的、公开的、具备代理能力的基准测试”来界定覆盖范围，但批评者指出其对“覆盖良好”的使用过于宽松——例如“社会工作者与照护——为育儿问题父母提供咨询”这一任务仅凭 13 条提示就被算作覆盖良好。Mercor 的更大生态还包括其独立评估的 APEX 基准（面向编程和科学任务），这与本次劳动力映射工作是分开的。

hackernews · speckx · 10月16日 17:08 · [社区讨论](https://news.ycombinator.com/item?id=50121179)

**背景**: O*NET（Occupational Information Network，职业信息网络）是由美国劳工部维护的免费数据库，从知识、技能、能力、任务和工作活动等维度描述数百种职业，是量化美国劳动力构成的标准参考。AI 基准测试是用于衡量和比较 AI 系统在特定任务（如回答问题、编程或遵循指令）上表现的标准化测试，也是大多数关于模型能力的公开说法的基础。这项分析正处在这两者的交汇点上，追问基准测试究竟代表了真实经济中的哪些部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.mercor.com/research/labor-index/benchmark-map/">A benchmark map of the US economy | Mercor</a></li>
<li><a href="https://en.wikipedia.org/wiki/Occupational_Information_Network">Occupational Information Network - Wikipedia</a></li>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-ai-benchmarks">What are AI Benchmarks? - Stanford HAI</a></li>

</ul>
</details>

**社区讨论**: 评论者大多持批判和怀疑态度：有人借用“门卫谬误”（Doorman Fallacy）指出，用自动化替代某岗位往往会忽略客户体验等隐性职能；另一人表示所谓“覆盖良好”实际上只是“有覆盖”的同义词。一条高赞评论则对工资总额偏差作出讽刺性解读——基准覆盖偏向企业最想自动化的岗位——还有人用“这简直是世纪性低估”之类的话淡化标题所述影响。

**标签**: `#ai-benchmarks`, `#ai-evaluation`, `#future-of-work`, `#labor-economics`, `#machine-learning`

---

<a id="item-4"></a>
## [研究人员利用存在 37 年之久的 OpenBSD 内核漏洞](https://calif.io/research/big-fish) ⭐️ 8.0/10

安全研究人员在 calif.io 上发布了题为《Big Fish》的研究报告，详细介绍了如何利用 OpenBSD 中一个已存在 37 年的内核漏洞，并给出了滥用包含函数指针的可预测结构体分配来实现利用的攻击路径。该报告将这一发现作为例证，说明即使是经过严格审查的内核，也可能藏有仅靠代码审查无法发现的漏洞类型。 OpenBSD 一向被视为最注重安全、被审查最彻底的类 Unix 代码库之一，因此一个漏洞能在此存活 37 年，强烈说明人工代码审查作为防御手段存在边界。这一发现的影响不止于 OpenBSD：BSD 系代码在 NetBSD、FreeBSD 及众多下游产品间共享，同时它也推动了关于模糊测试或静态分析能否更早发现这一类漏洞的讨论。 该利用方式专门针对包含函数指针的可预测结构体分配，报告指出这类分配是理想的攻击目标，同时研究还涉及 OpenBSD 的漏洞利用缓解机制。讨论中一个值得注意的细节是：同一漏洞似乎在 1999 年 8 月 NetBSD 重写该段代码时被意外修复了。

hackernews · rs_rs_rs_rs_rs · 10月16日 14:44 · [社区讨论](https://news.ycombinator.com/item?id=50118977)

**背景**: OpenBSD 是一个以安全为核心、自由开源的类 Unix 操作系统，源自伯克利软件发行版（BSD）；Theo de Raadt 于 1995 年通过分叉 NetBSD 1.0 创建了该项目，其宗旨强调正确性、主动安全和集成加密。它的代码被广泛复用，例如苹果 macOS 的 PF 防火墙、Android 的 Bionic C 标准库、LLVM 的正则表达式库，以及 Windows 10 中搭载的 OpenSSH/LibreSSL——这也正因如此，OpenBSD 中的漏洞影响范围往往远超其自身用户群。内核漏洞是指操作系统特权核心中的缺陷，一旦被成功利用，攻击者便可深度控制目标机器，因此这类发现通常性质尤为严重。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://calif.io/research/big-fish">Big Fish : Exploiting a 37-Year-Old Kernel Bug in OpenBSD | Calif</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenBSD">OpenBSD</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论既有赞赏也有技术层面的追问：有人称赞了 OpenBSD “发布风格”的图形设计，并调侃期待主题曲；另有人指出该漏洞似乎在 1999 年 8 月 NetBSD 重写那段代码时被意外修掉了。讨论中反复出现的一个问题是：模糊测试或静态分析究竟能否现实地发现这一类漏洞，还是必须依靠人类去思考可利用的原语——这反映出一种共识，即某些内核漏洞极难仅靠代码审查捕获。

**标签**: `#security`, `#openbsd`, `#kernel`, `#vulnerability-research`, `#exploitation`

---

<a id="item-5"></a>
## [Show HN：Gemini 4 Argon 在 StarSkirmish 基准 v0.2 中玩《星际争霸》](https://starskirmish.com/bench/v0-2/) ⭐️ 8.0/10

StarSkirmish Bench 已更新到 v0.2，加入了 OpenAI、Anthropic、Google 与 Meta 各家旗舰模型的评测结果：在这个基准中，大模型通过编写代码来玩《星际争霸：母巢之战》。每个模型只有一小时时间产出机器人程序，最终按该程序的实战表现排名；根据社区讨论，排名顺序为 GPT-6 Astra > GPT-6.1 Sol > Gemini 4 Argon > Claude Opus 5.5 > Claude Fable 5.1 > Claude Sonnet 5.5。 该基准把长时程规划、代码生成与游戏策略整合为一个可量化的智能体任务，比静态问答评测提供了更接近端到端的能力信号。有评论者指出，v0.2 的排名与另一项独立的 9x9 围棋基准排序完全吻合，说明即便任务表面差异很大，排名结果仍可能反映某种通用的模型能力。 每个模型都在自家厂商的一手 CLI 工具中以可用的最高推理档位运行——Anthropic 用 Claude Code、OpenAI 用 Codex、Google 用 Antigravity CLI、Meta 用 Muse Code，同时关闭联网搜索与网页抓取工具、不提供其他网络访问，而且一小时计时从 CLI 安装完成后才开始。得分是相对于一批竞技级人类编写机器人和演示机器人的胜率，而不是模型之间的对战胜率。

hackernews · __cayenne__ · 10月16日 14:18 · [社区讨论](https://news.ycombinator.com/item?id=50118688)

**背景**: 《星际争霸：母巢之战》是一款即时战略游戏，玩家必须在持续的时间压力下同时管理资源采集、生产与战斗，因此长期以来是 AI 规划与控制研究的经典测试平台。StarSkirmish 的特殊之处在于大模型并不直接玩游戏，而是编写机器人程序的代码，再由该程序在游戏内与人类编写的机器人对战。围绕大模型智能体（包括多智能体协作）构建的基准近年来增长迅速，用来考察单轮评测无法覆盖的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://starskirmish.com/bench/">StarSkirmish Bench</a></li>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/">Introducing Gemini 4 Argon - The Keyword</a></li>
<li><a href="https://arxiv.org/abs/2503.01935">[2503.01935] MultiAgentBench: Evaluating the Collaboration ...</a></li>

</ul>
</details>

**社区讨论**: 有评论者把它与朋友所做的 9x9 围棋基准相比（该基准以 KataGo 作为 Elo 锚点），发现两者排名顺序完全一致，从而形成互相印证。也有人持怀疑态度：大模型写出的机器人究竟能带来新东西，还是只是人类机器人代码的劣化复刻，并追问它们每次是否只是重复套用同一套技巧。讨论中反复出现的一个愿望是“高层指挥”——像远距离统率部队那样下达高层指令，而不必忍受即时战略游戏中繁琐的微观操作。

**标签**: `#LLM benchmarks`, `#StarCraft`, `#AI agents`, `#code generation`, `#game AI`

---

<a id="item-6"></a>
## [可灵 Kling 4.0 全量上线，接入 MCP/CLI 并预告 4K HDR 输出](https://mp.weixin.qq.com/s/Dn2jAxV0m6kpt7y4edRvdg) ⭐️ 8.0/10

10 月 15 日，可灵 Kling 4.0 正式在 klingai.com 全量上线，创作页面同步进行全面升级，带来更灵活自由的创作体验。官方同时表示后续将推出 4K 与 1080p 的 10-bit HDR 格式输出，Kling 4.0 能力已接入 MCP/CLI，面向企业与开发者的 API 服务也将在近期开放。 可灵是当前领先的 AI 视频生成平台之一，此次 4.0 全量上线并接入 MCP/CLI、开放企业 API，意味着它正从面向普通用户的创作工具转变为开发者可以嵌入自身产品与智能体工作流的基础设施。这对追求电影级质感的创作者，以及希望规模化、程序化生成高清视频的企业都具有重要意义。 4K 与 1080p 的 10-bit HDR 输出被描述为「后续推出」而非当前即可使用，面向企业与开发者的 API 同样只承诺「近期开放」，没有明确时间表或定价信息。官方公告本身也缺少模型架构、单次生成时长上限或评测数据等技术细节，因此多数能力宣称仍有待独立验证。

telegram · zaihuapd · 10月16日 04:30

**背景**: 可灵 AI 是由北京快手公司开发并运营的生成式视频服务，能够根据自然语言提示词生成视频。MCP（Model Context Protocol）是 Anthropic 于 2024 年 11 月推出的开放标准，用于让 AI 应用以统一方式连接外部工具与数据源，因此「Kling 接入 MCP」意味着 AI 智能体或编程助手可以直接调用可灵，而无需定制化对接。10-bit HDR 则指比传统 8-bit SDR 视频更高的色深与动态范围，能减少色带并给后期调色留出更大空间。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kling_AI">Kling AI - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://kling.ai/feature/kling-4-ai-video-generation">Kling 4.0: Create Cinematic 30s Videos with 4K 10-bit HDR</a></li>

</ul>
</details>

**标签**: `#AI video generation`, `#Kling`, `#model release`, `#MCP`, `#API`

---

