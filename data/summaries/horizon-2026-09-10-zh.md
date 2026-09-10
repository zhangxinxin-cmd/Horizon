# Horizon 每日速递 - 2026-09-10

> 从 36 条内容中筛选出 8 条重要资讯。

---

1. [Calif Research 发布 WeWorm：通过微信通话传播的零点击蠕虫](#item-1) ⭐️ 9.0/10
2. [Shopify 弃用 React Native，回归 Swift 与 Kotlin 原生开发](#item-2) ⭐️ 8.0/10
3. [研究者质疑能否将未发表的数学成果托付给 OpenAI](#item-3) ⭐️ 8.0/10
4. [NASA 的卫星图像处理技术如今用于揭示古代岩画](#item-4) ⭐️ 8.0/10
5. [微软正式将 Rust 列为一级（Tier-1）语言](#item-5) ⭐️ 8.0/10
6. [DeepSeek 发布 V4.1 Flash：552B 多模态稀疏激活模型](#item-6) ⭐️ 8.0/10
7. [DeepSeek 发布 MIT 协议 Harness 应用并开放 V4-Pro-0813 权重](#item-7) ⭐️ 8.0/10
8. [月之暗面秘密递交港股 IPO 申请，投前估值达 500 亿美元](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Calif Research 发布 WeWorm：通过微信通话传播的零点击蠕虫](https://simonwillison.net/2026/Sep/10/calif-research/) ⭐️ 9.0/10

Calif Research 发布了一款名为 WeWorm 的演示程序，称其是首个通过微信通话在 iOS 和 Android 上传播的零点击蠕虫，受害者在无需接听、甚至完全不碰手机的情况下账号即被接管。该团队表示，借助 AI 他们在约两天内找到了漏洞并写出了第一个远程代码执行（RCE）利用程序，随后又用一周时间构建出蠕虫。 若该成果得到验证，这既是一个严重的移动安全里程碑，也证明了 AI 能够大幅压缩漏洞武器化所需的时间和团队规模——过去需要大团队耗时数月的工作，如今约一周即可完成。同时，它也对微信庞大的用户群以及围绕 AI 加速攻击性安全的争论提出了尖锐问题。 据 Calif 称，受害者无需接听电话或对设备做任何操作，即便接听也听不到任何声音，而利用仍会成功；演示据称在三台测试手机之间完成了传播。该研究于 2026 年 9 月 8 日发布，归入该公司的 Android 标签研究列表中，团队强调人类的作用主要体现在选择目标和安全测试的判断上。

rss · Simon Willison · 9月10日 00:56

**背景**: 零点击漏洞利用指的是受害者无需任何操作——不点击、不打开链接、不接听——因此比普通钓鱼攻击更危险也更难防御。远程代码执行（RCE）是一类允许攻击者在目标设备上运行任意代码的漏洞，而蠕虫是能够从一台设备自动传播到另一台的恶意软件；WeWorm 声称把两者结合，意味着感染可以通过通讯应用的通话功能在用户毫无察觉的情况下自动扩散。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/09/wechat-zero-click-worm-took-over.html">WeChat Zero-Click Worm Took Over Accounts on iPhone and Android via Incoming Calls</a></li>
<li><a href="https://www.helpnetsecurity.com/2026/09/08/wechat-weworm-vulnerability-exploit-account-hijacking/">"Zero-click" WeChat worm could hijack accounts and spread via a single call - Help Net Security</a></li>
<li><a href="https://cybersecuritynews.com/weworm-first-0-click-worm/">WeWorm - First 0-Click Worm Spreading Through WeChat Calls Across iOS and Android</a></li>

</ul>
</details>

**标签**: `#security`, `#AI`, `#WeChat`, `#zero-click exploit`, `#RCE`

---

<a id="item-2"></a>
## [Shopify 弃用 React Native，回归 Swift 与 Kotlin 原生开发](https://shopify.engineering/back-to-native) ⭐️ 8.0/10

Shopify 工程博客发布文章，解释了公司为何要把移动应用从 React Native 迁回 iOS 的 Swift 与 Android 的 Kotlin 原生技术栈。该文在 Hacker News 上引发大规模讨论（677 分、449 条评论），焦点集中在跨平台方案的取舍，以及 AI 编程智能体是否让这类重写变得负担得起。 Shopify 是最大的电商平台之一，它放弃 React Native（可以说是使用最广泛的跨平台移动框架）的决定，对于正在权衡原生与共享代码路线的团队而言是一个重要的参考信号。这同时也为 Kotlin Multiplatform 等替代方案增添了说服力——这类方案既能共享业务逻辑，又不必牺牲原生 UI。 这篇工程文章以用户体验和平台原生化程度为由，而非单纯的成本节省来论证迁移决策；评论者也指出，AI 编程智能体现在已能胜任 Swift 与 Kotlin 的代码生成，从而降低了在两端重复实现应用的工作量。讨论中提出的一个重要限制是：这次迁移并不能完全归因于 AI，因为多位开发者表示他们在 LLM 辅助工具普及之前就完成过类似的 React Native 转原生重写。

hackernews · fnthawar2 · 9月10日 14:09 · [社区讨论](https://news.ycombinator.com/item?id=49643982)

**背景**: React Native 是一种跨平台框架，用同一套 JavaScript 代码库同时驱动 iOS 与 Android 应用，以牺牲部分平台原生体验为代价换取代码复用和更精简的团队。由 JetBrains 打造的 Kotlin Multiplatform 采用不同思路：它在 Android、iOS、桌面与 Web 之间共享业务逻辑、网络与数据层，同时允许团队保留原生 UI（也可选择通过 Compose Multiplatform 共享 UI）。围绕这些方案的争论已持续近二十年，可追溯到 Apache Cordova 等更早的框架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kotlin_Multiplatform">Kotlin Multiplatform</a></li>
<li><a href="https://kotlinlang.org/multiplatform/">Kotlin Multiplatform – Build Cross-Platform Apps</a></li>
<li><a href="https://arstechnica.com/ai/2026/03/ai-can-rewrite-open-source-code-but-can-it-rewrite-the-license-too/">AI can rewrite open source code—but can it rewrite the license, too? - Ars Technica</a></li>

</ul>
</details>

**社区讨论**: 整体情绪倾向于赞同离开 React Native：一位开发者描述了转向 Kotlin Multiplatform 的良好体验，另一位则称借助智能体与 Maestro，一夜之间就完成了约 15 至 20 个屏幕的应用重写。最大的分歧在于归因：一位亲自主导过 React Native 转原生重写的评论者坚称，其中大部分工作发生在 LLM 辅助之前；另有一位评论者则以二十年的视角指出，跨平台框架从未真正如承诺那样降低人力成本。

**标签**: `#react-native`, `#mobile-development`, `#kotlin-multiplatform`, `#cross-platform`, `#engineering-culture`

---

<a id="item-3"></a>
## [研究者质疑能否将未发表的数学成果托付给 OpenAI](https://mathstodon.xyz/@andreasthom/117240535270608201) ⭐️ 8.0/10

Hacker News 上一条约 580 分、583 条评论的讨论帖，放大了 Andreas Thom 在 Mathstodon 上发起的质疑：在有报道称模型产出了与保密合作项目相似的结果之后，数学家还能否安全地把未发表的工作交给 OpenAI。讨论从 Mathstodon 扩散到 X 和 Bluesky，参与者引用了 OpenAI 的声明——即产出争议结果的那个模型并未在相关合作聊天记录上训练。 这一事件触及研究伦理、署名归属以及学术界与产业界之间的信任，而此刻 AI 实验室正积极争取数学家的合作，并提供免费或补贴的前沿模型访问权限。如果研究者得出结论：分享未发表的想法可能会被模型吸收、随后又被无署名地发表，那么学术机构与 AI 公司之间的合作可能受到抑制，并催生关于信息披露的新规范。 OpenAI 的辩护基于一个说法：相关模型并非在那些保密聊天记录上训练，被引用的一份声明甚至断言某位研究者的 Codex 提示词绝无可能影响该结果。但质疑者反驳称，即便只是在预训练中偶然接触，也可能强化模型的潜在直觉；他们还指出，从一个仍在训练中的模型生成约 3000 亿个输出 token 的决定十分可疑。评论者还提到，部分研究者获得免费访问权而另一些则付费，因此流入这些系统的未发表想法数量庞大且记录不均。

hackernews · pred_ · 9月10日 06:49 · [社区讨论](https://news.ycombinator.com/item?id=49639408)

**背景**: Mathstodon 是一个供数学家使用的 Mastodon 实例，支持 LaTeX 渲染，因此关于证明的技术性论证可以完整发布；文中链接还指向 X 上的帖子（通常通过 Nitter 类镜像 xcancel 阅读）以及 Bluesky，后者的账号由 did:plc 去中心化标识符来标识。Codex 背后的这类大语言模型通常先在海量文本语料上预训练，随后在数学等答案可验证的任务上用强化学习进行优化，这正是“聊天是否被吸收进训练数据”这一问题如此关键的原因。在数学界，署名规范非常严格，优先权争议影响重大，因此未经披露地使用他人未发表的研究方向会被视为严重违规。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://terrytao.wordpress.com/2022/11/20/trying-out-mathstodon/">Trying out Mathstodon | What's new - Terence Tao</a></li>
<li><a href="https://maketecheasier.com/browse-x-anonymously-with-xcancel/">How to Browse X Anonymously With XCancel - Make Tech Easier</a></li>
<li><a href="https://web.plc.directory/spec/v0.1/did-plc">did : plc Specification v0.1</a></li>

</ul>
</details>

**社区讨论**: 评论者大体上把这件事视为研究伦理问题：一条高赞类比把 OpenAI 比作人类合作者——从共同讨论中拿走想法后独自发表且不加署名，这显然是极不道德的。也有人认为两种解释可以并存：在聊天数据上预训练可能提升模型的直觉，而在可验证数学任务上的强化学习也能独立发现技巧；还有一派则怀疑 AI 是否真的在攻克开放问题，认为研究者可能在无意中把自己使用的新鲜数据喂给了模型。另有评论把事件的时间顺序（包括那次大规模 token 生成）形容为像是“平行构建证据”。

**标签**: `#OpenAI`, `#research-ethics`, `#AI-mathematics`, `#trust`, `#academia-industry`

---

<a id="item-4"></a>
## [NASA 的卫星图像处理技术如今用于揭示古代岩画](https://spinoff.nasa.gov/Manipulating_Satellite_Photos_Now_Reveals_Ancient_Images) ⭐️ 8.0/10

NASA 最初为增强卫星和行星影像色彩对比而开发的"去相关拉伸"（decorrelation stretch）技术，如今被应用于考古领域，用以揭示肉眼看不见的褪色古代岩画和考古图像。该方法能够放大普通照片中人眼无法察觉的细微颜色差异。 这是航天技术向文化遗产保护领域转移的生动案例，让考古学家能够用一种低成本的数字工具重新发现并记录历经数百年而褪色的岩画。它表明遥感算法无需新硬件就能拓展实地研究的边界，有望在脆弱遗址进一步劣化之前帮助加以保护。 去相关拉伸通过消除输入像素中通道间的相关性来增强颜色差异，即先对图像各通道做去相关处理，再拉伸其对比度；该算法的理论基础记录在 NASA/JPL 的一份算法理论说明文档中。NASA 最初的动机是行星与地球观测成像，因为在这些场景中细微的颜色变化具有科学意义。

hackernews · gumby · 9月10日 15:29 · [社区讨论](https://news.ycombinator.com/item?id=49645437)

**背景**: 去相关拉伸是遥感领域的标准图像处理技术：普通彩色照片的红、绿、蓝通道信息高度冗余，微弱的信号往往被淹没在噪声之中。通过对这些通道做数学上的去相关处理并扩大其对比度，不同岩石类型、矿物或颜料等特征便会以醒目的伪彩色合成图形式显现出来。该技术数十年来一直是卫星和行星图像分析的核心方法，这也是它如今被重新用于考古和文化遗产工作的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://spinoff.nasa.gov/Manipulating_Satellite_Photos_Now_Reveals_Ancient_Images">Technique for Manipulating Satellite Photos Now... | NASA Spinoff</a></li>
<li><a href="https://dstretch.com/DecorrelationStretch.pdf">Algorithm Theoretical Basis Document</a></li>
<li><a href="https://heritage.jmc.ac.il/imaging-technologies-for-cultural-heritage/d-stretch/">D- Stretch | The Jerusalem Institute for Research and Digital...</a></li>

</ul>
</details>

**社区讨论**: 评论者对伪彩色合成图和遥感技术表现出极大热情，认为这是理解信号处理、以及"人类视觉并非世界的标准表示"这一事实的入门途径。一位用户分享了在 GIMP 中通过 LAB 分解、色阶调整再重新合成来近似实现该效果的实用流程；另一位则描述了他在吴哥窟用多个带通滤光片寻找隐藏岩画却未能成功的实地经历。还有人感叹古人制作岩画所付出的巨大努力，并询问是否存在可用于流水线的 ImageMagick 实现。

**标签**: `#remote-sensing`, `#image-processing`, `#archaeology`, `#nasa`, `#decorrelation-stretch`

---

<a id="item-5"></a>
## [微软正式将 Rust 列为一级（Tier-1）语言](https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/) ⭐️ 8.0/10

微软正式将 Rust 认定为一级（tier-1）语言，这一消息通过 Rust 基金会官网的一篇客座文章对外公布。这意味着 Rust 从此与 C++ 并列，成为微软平台演进以及内部安全与质量流程中获得原生支持的一等公民语言。 这一举措表明，全球最大的软件厂商之一正在把系统编程语言的选择从 C/C++ 扩展到更多选项，可能加速对安全关键代码进行内存安全改写。它同时巩固了 Rust 作为成熟、可用于生产环境的替代方案的地位，而非一个快速迭代的新兴语言，并会对工具链、招聘和第三方库生态产生连锁影响。 微软的文章强调，经过数十年的代码积累，C++ 目前仍占据主导地位，因此“一级语言”的定位更多意味着官方支持与平台演进，而非彻底替换。社区成员指出周边工具链仍在追赶，并追问 Visual Studio 何时才能为 Rust 提供一级调试支持。

hackernews · mmastrac · 9月10日 13:39 · [社区讨论](https://news.ycombinator.com/item?id=49643546)

**背景**: 内存安全是 Rust 等语言具备的一种特性，它能在编译期消除越界访问、释放后使用（use-after-free）、空指针解引用等整类缺陷；而在 C 和 C++ 中，这些问题往往会悄然演变为可被利用的安全漏洞。Rust 通过所有权与借用检查规则在编译期实现这一点，且不需要垃圾回收器，因此非常适合操作系统、浏览器等对性能敏感的系统级代码。“一级（Tier-1）语言”是厂商自定的术语，指某语言在公司的平台、工具链和工程流程中获得完整的一等支持，而不是仅由个别团队零散使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/">Guest Post: Rust Is Tier - 1 Language at Microsoft</a></li>
<li><a href="https://news.ycombinator.com/item?id=49643546">Rust Is Tier - 1 Language at Microsoft | Hacker News</a></li>
<li><a href="https://www.memorysafety.org/docs/memory-safety/">What is memory safety and why does it matter? - Prossimo</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论帖（577 分、315 条评论）整体持正面态度：有评论者贴出微软提出的目标——到 2030 年借助自动化工具把 10 亿行 C/C++ 代码转换为 Rust，以及 DARPA 资助的由六支团队采用不同方法自动完成 C 到 Rust 转换的项目。多位评论者认为这表明 Rust 已成为 C++ 和 C# 的严肃竞争者，并且明显比 Zig、Odin 等更新的“更好的 C”语言更为成熟；也有评论者指出真正的大新闻是传闻中微软用 MSVC 后端取代 LLVM 的集成方案。

**标签**: `#rust`, `#microsoft`, `#systems-programming`, `#memory-safety`, `#language-tooling`

---

<a id="item-6"></a>
## [DeepSeek 发布 V4.1 Flash：552B 多模态稀疏激活模型](https://mp.weixin.qq.com/s/qg0NU3NNUbp1co2PdkAPAg) ⭐️ 8.0/10

DeepSeek 正式发布 V4.1 Flash，这是其全新模型结构系列中尺寸最小的模型，采用 552B 参数的 Causal-Encoder-Decoder 架构，输入与输出激活参数量分别仅为 8B 和 16B，并原生支持多模态视觉理解。该模型已上线 DeepSeek API，模型名为 deepseek-flash；新价格将于 2026 年 9 月 10 日 12:00 生效，而 9 月 14 日 12:00 之后对 deepseek-v4-pro 的请求将被路由至 V4.1 Flash 并按新价格计费。 在 552B 总参数中仅激活 8B 输入和 16B 输出，V4.1 Flash 延续了业界通过稀疏激活以更低推理成本获得大模型能力的趋势。将 deepseek-v4-pro 的流量自动迁移到 V4.1 Flash 表明 DeepSeek 正在整合其 API 产品线，这直接影响依赖该模型名称与既有价格的开发者。 该模型的标志性特征是 Causal-Encoder-Decoder 结构，与当前多数对话模型采用的纯解码器（decoder-only）设计不同，同时结合 552B 总参数、8B-16B 激活参数的稀疏方案以及原生视觉输入。值得注意的是，价格生效日期（2026 年 9 月 10 日）与流量迁移日期（2026 年 9 月 14 日）都相当遥远，且消息来自微信/Telegram 式频道而非正式技术论文，因此架构细节尚未得到独立验证。

telegram · zaihuapd · 9月10日 05:54

**背景**: 现代大语言模型大多采用纯解码器（decoder-only）Transformer 结构，通过因果掩码（causal masking）保证预测每个 token 时只能关注已经生成的 token，不能“偷看”后面的内容。编码器-解码器结构则额外引入一个可一次性读取完整输入的编码器，常用于多模态或序列到序列任务——例如图像这类输入需要被完整理解后才能开始生成。稀疏激活指的是每个 token 只使用模型总参数中的一小部分，这与混合专家（MoE）模型思路一致，使得参数量可以极大而单 token 计算量保持较低。DeepSeek 是一家中国 AI 实验室，以公开模型权重和极具竞争力的 API 定价而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mbrenndoerfer.com/writing/decoder-architecture-causal-masking-autoregressive-transformers">Decoder Architecture: Causal Masking - Interactive</a></li>
<li><a href="https://arxiv.org/abs/2406.17989">[2406.17989] Learning Neural Networks with Sparse Activations</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#LLM release`, `#multimodal`, `#model architecture`, `#API pricing`

---

<a id="item-7"></a>
## [DeepSeek 发布 MIT 协议 Harness 应用并开放 V4-Pro-0813 权重](https://t.me/zaihuapd/43738) ⭐️ 8.0/10

DeepSeek 发布了 DeepSeek Harness——一个以 MIT 协议开源的开发者预览版智能体运行框架（harness），同时把 DeepSeek-V4-Pro-0813 的模型权重开放到 Hugging Face 上。该框架把模型、工具、技能、会话、沙箱、存储、调度和 UI 等能力全部实现为可替换插件，并提供标准（Standard）、PTC、极简（Minimal）和创造（Creation）四种运行模式。 通过把开放权重与宽松许可、完全可插拔的智能体运行时结合起来，DeepSeek 正在与 Claude Code、Codex 等封闭式智能体方案正面竞争，为开源大模型工具生态提供了一个厂商中立、可自由分叉组合与自托管的基础底座。构建智能体的团队因此可以把 DeepSeek 模型与第三方插件混用，或在不重写编排层的前提下替换成其他模型。 该 harness 构建在 Cordis 之上——这是一个插件化/可组合框架，其设计在一篇关于“时空可组合性”的论文中进行了描述；在 PTC（Programmatic Tool Calling，程序化工具调用）模式下，智能体可以检视正在运行的 Cordis 环境并在内存中自我修改。标准模式加载默认插件集，极简模式将其精简以适应轻量场景，而创造模式则在标准模式之上额外提供自我修改与插件实验能力。

telegram · zaihuapd · 9月10日 07:28

**背景**: 智能体 harness（也称智能体脚手架）是包裹在大语言模型外面的软件基础设施，负责把模型变成真正的 AI 智能体：它驱动模型与工具调用、管理对话状态与记忆、持久化上下文、提供执行沙箱，并在多步任务中闭合反馈回路——这些工作与模型内部的推理过程是分开的。由于决定工具和环境如何拼接的是 harness 而非模型本身，其架构对智能体在生产环境中的实际表现影响极大。DeepSeek Harness 正是 DeepSeek 把这一层标准化为开源、插件化运行时的尝试，而非做成一款单体产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness">GitHub - deepseek -ai/ deepseek - harness : DeepSeek Harness ...</a></li>
<li><a href="https://dshbase.com/blog/deepseek-harness-modes/">DeepSeek Harness Modes — Standard, PTC , Minimal... | dshbase</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#open-weights`, `#LLM`, `#agent-harness`, `#open-source`

---

<a id="item-8"></a>
## [月之暗面秘密递交港股 IPO 申请，投前估值达 500 亿美元](https://t.me/zaihuapd/43743) ⭐️ 8.0/10

月之暗面（Kimi）已以保密形式向港交所递交 A1 上市申请文件，正式启动港股 IPO 流程，公司回应称目前暂无可披露信息。与此同时，公司正以 500 亿美元投前估值推进新一轮融资，该轮融资可能是其上市前的最后一轮。 若顺利推进，月之暗面将成为中国头部大模型创业公司中最先登陆资本市场的一家，为投资者提供稀缺的 LLM 行业公开估值参照。500 亿美元的投前估值也说明私募资本仍在重金押注顶级模型公司，同时抬高了竞争对手的标杆——外界预计 DeepSeek 可能在明年上半年上市。 报道称，月之暗面的估值从 2025 年底约 43 亿美元升至今年 7 月的 350 亿美元投后估值，半年间增长约 8 倍；今年 1 至 7 月公司先后上线 K2.5、K2.6、K3，保持约三个月一次的迭代节奏。保密递交 A1 意味着招股书在此阶段不会公开，因此发行定价、股本规模和财务数据仍未披露；港股正式上市流程通常需三到四个月，但实际往往更长。

telegram · zaihuapd · 9月10日 10:58

**背景**: 月之暗面（Moonshot AI）是一家以 Kimi 智能助手和开源权重 Kimi K 系列模型闻名的中国 AI 公司，其 2026 年 1 月发布的 K2.5 模型参数量达一万亿。A1 表格是港交所规定的股本证券及债务证券上市申请表格，递交 A1 即正式启动上市流程。文中提到的另一家潜在上市候选公司 DeepSeek 位于杭州，由对冲基金幻方量化（High-Flyer）所有并出资，以开源权重大语言模型著称。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI - Wikipedia</a></li>
<li><a href="https://en-rules.hkex.com.hk/rulebook/listing-application-form-equity-securities-and-debt-securities">Form A1 Listing Application Form (For Equity Securities and Debt Securities) | Rulebook</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(Company)">DeepSeek (Company)</a></li>

</ul>
</details>

**标签**: `#AI Industry`, `#Moonshot AI`, `#IPO`, `#Funding`, `#Large Language Models`

---

