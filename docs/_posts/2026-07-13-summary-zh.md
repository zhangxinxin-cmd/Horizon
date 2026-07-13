---
layout: default
title: "Horizon Summary: 2026-07-13 (ZH)"
date: 2026-07-13
lang: zh
---

> 从 19 条内容中筛选出 8 条重要资讯。

---

1. [三星健康 APP：拒绝 AI 训练将删除用户数据](#item-1) ⭐️ 9.0/10
2. [思维链是规模陷阱；潜在推理兴起](#item-2) ⭐️ 9.0/10
3. [通过 LLM 代理构建苹果应用，无需 Xcode](#item-3) ⭐️ 8.0/10
4. [苹果 SpeechAnalyzer API 在速度上超越 Whisper，准确性略低](#item-4) ⭐️ 8.0/10
5. [开放数据拯救被毁的气候.gov 数据](#item-5) ⭐️ 8.0/10
6. [Telegram 的 t.me 域名被暂停](#item-6) ⭐️ 8.0/10
7. [洛杉矶警察局因隐私担忧终止与 Flock 的合同](#item-7) ⭐️ 8.0/10
8. [GPUHedge 将无服务器 GPU 冷启动延迟降低 74%](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [三星健康 APP：拒绝 AI 训练将删除用户数据](https://neow.in/cWsyMTV3) ⭐️ 9.0/10

三星健康更新了隐私政策，警告用户如果选择不将其健康数据用于 AI 训练，他们的数据将被删除。这一变化影响到睡眠、药物、医疗记录和周期追踪等数据类别。 这一政策代表了公司处理用户选择退出方式的重大转变，可能迫使用户在参与 AI 训练或失去健康数据之间做出选择。它引发了对数据所有权、用户权利以及对健康追踪平台信任的严重担忧。 该政策适用于四个特定数据类别：睡眠、药物、医疗记录和周期追踪。拒绝 AI 训练的用户将面临数据被删除，而不是仅仅不被用于训练，这比通常的选择退出模式更为激进。

hackernews · bundie · 7月13日 20:01 · [社区讨论](https://news.ycombinator.com/item?id=48897991)

**背景**: 三星健康是一款流行的健康追踪应用，收集来自用户三星设备的敏感个人健康数据。利用用户数据进行 AI 训练有助于改进功能，但需要用户同意。此前，用户可以选择退出而不会丢失数据，但此政策改变了这一点。

**社区讨论**: 评论者表达了强烈的负面反应，有人指出购买设备却因不同意数据共享而无法使用大部分功能很荒谬。另有人批评三星健康是“烂应用”，有广告和数据导出问题。有人指出三星通过删除数据来尊重隐私的讽刺性，但其他人质疑无法使用功能却不退款的问题。

**标签**: `#privacy`, `#AI training`, `#Samsung Health`, `#data deletion`, `#user rights`

---

<a id="item-2"></a>
## [思维链是规模陷阱；潜在推理兴起](https://www.reddit.com/r/MachineLearning/comments/1uviru5/chain_of_thought_is_a_scaling_trap_the_next_wave/) ⭐️ 9.0/10

一篇 Reddit 帖子认为，大型语言模型中的思维链推理是一种昂贵的界面伪影，并提倡使用 Coconut、HRM、RecursiveMAS 和 BDH 等潜在推理方法，在连续潜在空间而非文本令牌中进行计算。 这一批评挑战了主流的思维链范式，凸显了成本、延迟和忠实性问题，并指向一种新的潜在推理浪潮，它可能以提高效率为代价降低可解释性，这对高风险部署至关重要。 该帖子强调了特定的潜在推理方法：Coconut（连续潜在思维）、RecursiveMAS（代理间传递潜在嵌入）以及 BDH（Baby Dragon Hatchling），后者在没有思维链的情况下在数独谜题上达到 97.4%的准确率，但警告存在“黑箱墙”，并建议采用基于 DAG 验证的外环治理层。

reddit · r/MachineLearning · /u/meowsterpieces · 7月13日 17:50

**背景**: 思维链提示通过生成自然语言的中间推理步骤来提升大型语言模型的性能，但这增加了延迟和成本，并可能产生不忠实的痕迹。而像 Coconut 和 RecursiveMAS 这样的潜在推理方法则将中间计算保持在连续的隐藏状态中，仅在最后解码语言，这可以降低成本但降低了透明度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://colinmcnamara.com/blog/understanding-baby-dragon-hatchling-bdh">Understanding Baby Dragon Hatchling ( BDH ): The... | Colin McNamara</a></li>
<li><a href="https://levysoft.medium.com/coconut-a-new-ai-reasoning-approach-without-linguistic-constraints-in-continuous-latent-space-b8429192346f">Coconut : A New AI Reasoning Approach Without Linguistic... | Medium</a></li>
<li><a href="https://github.com/RecursiveMAS/RecursiveMAS">GitHub - RecursiveMAS/RecursiveMAS: Offical Implementation ...</a></li>

</ul>
</details>

**标签**: `#LLM Reasoning`, `#Chain of Thought`, `#Latent Reasoning`, `#Scaling`, `#AI Research`

---

<a id="item-3"></a>
## [通过 LLM 代理构建苹果应用，无需 Xcode](https://scottwillsey.com/building-and-shipping-mac-and-ios-apps-without-ever-opening-xcode/) ⭐️ 8.0/10

Scott Willsey 的一篇博文展示了如何完全使用命令行工具和 LLM 代理（如 Claude）来构建、签名和公证 Mac 和 iOS 应用，而无需打开 Xcode。 这种方法展示了苹果平台开发的新范式，利用 LLM 代理自动化整个构建和分发流程，可能减少对 Xcode 的依赖，并实现更灵活的 CI/CD 工作流。 该工作流使用命令行工具如 'xcrun'、'codesign' 和 'altool'，并依赖 LLM 代理生成脚本和命令。作者指出代理必须直接在 Mac 上运行，而非沙箱中，这引发了安全担忧。

hackernews · speckx · 7月13日 18:22 · [社区讨论](https://news.ycombinator.com/item?id=48896665)

**背景**: Xcode 是苹果平台的官方集成开发环境（IDE），提供用于编码、构建和签名应用的图形界面。公证是苹果在分发前扫描 macOS 应用以检查恶意软件的过程。LLM 代理（如 Claude Code）是能够解释自然语言命令并在开发者机器上执行操作的 AI 系统，这带来了新的自动化可能性以及安全风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution">Notarizing macOS software before distribution | Apple Developer Documentation</a></li>
<li><a href="https://symflower.com/en/company/blog/2025/using-llm-agents-for-software-development/">An introduction to LLM agents for software development</a></li>

</ul>
</details>

**社区讨论**: 社区看法不一：一些评论者称赞这种方法，并提到像 xtool 这样的替代方案可用于在 Linux 上进行 iOS 开发；而另一些人则担心授予 LLM 代理完全系统访问权限，引用 xAI 意外上传家目录等风险作为警示。

**标签**: `#iOS`, `#macOS`, `#app development`, `#automation`, `#LLM`

---

<a id="item-4"></a>
## [苹果 SpeechAnalyzer API 在速度上超越 Whisper，准确性略低](https://get-inscribe.com/blog/apple-speech-api-benchmark.html) ⭐️ 8.0/10

苹果推出了 SpeechAnalyzer，这是 iOS 26 上新的语音转文字 API，取代了旧的 SFSpeechRecognizer。一项基准测试显示，它的速度远快于 OpenAI 的 Whisper，准确性仅略低。 该 API 支持快速、设备端转录，可能减少实时应用对 Whisper 等云端服务的依赖。它可能颠覆那些仅封装 Whisper 的付费应用市场，因为苹果可能将其集成到原生工具中。 SpeechAnalyzer 缺少 SFSpeechRecognizer 中的自定义词汇功能，该功能允许开发者提高特定术语的准确性。基准测试针对的是 Whisper Large-V2，但据报道 Nvidia 的 Nemotron 和 Mistral 的 Voxtral 等新模型性能更优。

hackernews · get-inscribe · 7月13日 16:06 · [社区讨论](https://news.ycombinator.com/item?id=48894752)

**背景**: Whisper 是 OpenAI 的开源自动语音识别模型，在 68 万小时的多语言数据上训练而成。它被广泛使用，但被认为比新的专用模型慢。苹果的 SpeechAnalyzer 是专有的设备端 API，注重隐私和性能，在 WWDC 2025 上推出。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer-mdn.apple.com/videos/play/wwdc2025/277/">Bring advanced speech -to-text to your app with... - Apple Developer</a></li>
<li><a href="https://www.argmaxinc.com/blog/apple-and-argmax">Apple SpeechAnalyzer and Argmax WhisperKit - Argmax</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Whisper">OpenAI Whisper</a></li>

</ul>
</details>

**社区讨论**: 评论者指出 Whisper 已不再是业界顶尖，建议与 Nvidia 的 Nemotron、Mistral 的 Voxtral 或 Cohere Transcribe 进行比较。一些人分享了 SpeechAnalyzer 在实时使用中的积极体验，而另一些人预测苹果的原生实现可能会损害付费的 Whisper 封装应用。

**标签**: `#Apple`, `#speech recognition`, `#ASR`, `#benchmarking`, `#Whisper`

---

<a id="item-5"></a>
## [开放数据拯救被毁的气候.gov 数据](https://werd.io/climate-gov-was-destroyed-open-data-saved-it/) ⭐️ 8.0/10

一篇博客文章报道，climate.gov 被毁，但开放数据倡议（如 IPFS）保存了数据，确保其仍然可访问。 这凸显了去中心化数据保存对政府透明度和气候科学的重要性，并引发了关于数据所有权和归档的讨论。 保存依赖于 IPFS（一个使用内容寻址的点对点网络）以及像 Pinata 这样的服务来固定文件。这些努力的长期可持续性尚不明确，因为它们依赖捐赠。

hackernews · benwerd · 7月13日 19:57 · [社区讨论](https://news.ycombinator.com/item?id=48897945)

**背景**: IPFS（星际文件系统）是一个用于共享文件的去中心化协议，使用基于内容的寻址而非基于位置的 HTTP。它允许用户从网络中的任何节点托管和检索内容，使其能够抵御审查或服务器故障。Pinata 是一项帮助在 IPFS 上固定和存储文件的服务，确保文件持续可用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/IPFS">IPFS</a></li>
<li><a href="https://grokipedia.com/page/Pinata_IPFS_service">Pinata (IPFS service)</a></li>
<li><a href="https://hackmd.io/@browsers-n-platforms/Hys8-cK7q">IPFS Demos - HackMD</a></li>

</ul>
</details>

**社区讨论**: 评论对数据保存表示赞赏，但提出对持续资金和动态内容保存的担忧。一些人建议默认将政府出版物设为公共领域，并提出使用 IPFS 作为静态政府内容的主要分发方式。

**标签**: `#open data`, `#climate data`, `#data preservation`, `#government transparency`, `#IPFS`

---

<a id="item-6"></a>
## [Telegram 的 t.me 域名被暂停](https://www.whois.com/whois/t.me) ⭐️ 8.0/10

Telegram 的 t.me 域名已被暂停，WHOIS 记录显示为 serverHold 状态，表明此次暂停由注册局层面执行，而非注册商 GoDaddy。 这一中断影响了数百万依赖 t.me 链接访问频道、机器人和基于用户名通信的 Telegram 用户，突显了该平台在域名层面执法行动中的脆弱性。 ICANN 状态码 serverHold 和 clientRenewProhibited 已被应用，意味着.me 注册局拒绝了续费请求并暂停了域名。这通常由法律纠纷或监管合规问题触发。

hackernews · Tiberium · 7月13日 19:52 · [社区讨论](https://news.ycombinator.com/item?id=48897878)

**背景**: t.me 域名是 Telegram 拥有的 URL 短链接服务，用于重定向到用户个人资料、频道和机器人（例如 t.me/用户名）。它对 Telegram 生态系统至关重要，允许用户分享链接而无需暴露电话号码。域名注册局级别的暂停（serverHold）意味着.me 顶级域运营商采取了该行动，通常因法院命令或监管要求所致。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Telegram_(software)">Telegram (software) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区成员推测此次暂停与俄罗斯、法国和印度正在进行的法律调查有关。有人指出 Telegram 依赖 GoDaddy（一家因缺乏透明度而受批评的注册商）的讽刺之处，尽管此次行动是在注册局层面。其他人则强调了使用重定向来缓解此类风险的重要性。

**标签**: `#domain`, `#telegram`, `#security`, `#DNS`, `#governance`

---

<a id="item-7"></a>
## [洛杉矶警察局因隐私担忧终止与 Flock 的合同](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/) ⭐️ 8.0/10

洛杉矶警察局（LAPD）以公民自由和隐私方面的严重担忧为由，终止了与 Flock Safety 的合同。然而，Flock 的摄像头仍在运行，继续捕获数据并可出售给其他执法机构。 这一决定标志着在承认监控过度方面迈出了重要一步，但也揭示了拆除这类系统的困难。仅合同到期可能无法阻止数据收集，凸显了对第三方监控加强隐私监管的必要性。 Flock 拥有摄像头和杆子，因此即使与 LAPD 的合同到期，摄像头仍会继续录制，Flock 可以将数据出售给 CHP、LASD 或 FBI 等机构。LAPD 仍可能通过非正式安排访问数据，削弱了合同的本意。

hackernews · forks · 7月13日 15:11 · [社区讨论](https://news.ycombinator.com/item?id=48893947)

**背景**: Flock Safety 是一家运营自动车牌识别（ALPR）摄像头和视频监控系统的公司。其摄像头捕获车牌和车辆特征，创建可搜索的数据库并在订阅用户间共享。执法机构常与 Flock 签订合同，但该公司保留硬件所有权，使得无论个别合同如何，数据收集都能持续进行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Flock_Safety">Flock Safety - Wikipedia</a></li>
<li><a href="https://www.aclu.org/news/privacy-technology/flock-roundup">Flock’s Aggressive Expansions Go Far Beyond Simple Driver Surveillance | American Civil Liberties Union</a></li>
<li><a href="https://haveibeenflocked.com/">Have I Been Flocked ? – Search Flock ALPR Audit Logs</a></li>

</ul>
</details>

**社区讨论**: 评论者指出，Flock 的商业模式对合同取消具有弹性，因为摄像头仍在，数据可转售。有人主张应禁止政府购买其无法合法自行收集的数据。另一些人批评 LAPD 在做出这一隐私导向决定的同时，却有过侵犯公民权利的历史。

**标签**: `#surveillance`, `#privacy`, `#civil liberties`, `#LAPD`, `#Flock`

---

<a id="item-8"></a>
## [GPUHedge 将无服务器 GPU 冷启动延迟降低 74%](https://www.reddit.com/r/MachineLearning/comments/1uvlb6h/gpuhedge_hedging_serverless_gpu_providers/) ⭐️ 8.0/10

GPUHedge 是一款新的开源工具，采用投机执行策略在多个无服务器 GPU 提供商之间进行对冲，在基准测试中将 p95 冷启动延迟从 117 秒降低到 30 秒。 冷启动延迟是无服务器 GPU 推理的一大痛点，常导致请求耗时超过一分钟。通过跨提供商对冲，GPUHedge 显著改善了尾部延迟和成本效率，使无服务器 GPU 对延迟敏感的 AI 工作负载更具可行性。 在一项使用 RunPod 到 Cerebrium 对冲（10 秒后启动）的 36 请求评估中，p95 延迟从 116.6 秒降至 29.4 秒，且没有请求超过 60 秒。建模的每请求活跃计算成本也从 $0.0114 降至 $0.0083。

reddit · r/MachineLearning · /u/Putrid_Construction3 · 7月13日 19:20

**背景**: 无服务器 GPU 提供商允许用户在不管理基础设施的情况下运行 AI 模型，但在模型需要从头加载时会出现冷启动延迟，大模型的延迟可达 40 秒到 100 秒以上。GPUHedge 通过向主要提供商发送请求并在主要提供商响应缓慢时有条件地启动备份来解决此问题，类似于数据库中的投机执行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Serverless_computing">Serverless computing - Wikipedia</a></li>
<li><a href="https://www.beam.cloud/blog/top-serverless-gpu-providers">The Top Serverless GPU Providers in 2025, Ranked by Cold Start</a></li>

</ul>
</details>

**标签**: `#GPU`, `#serverless`, `#cold start`, `#hedging`, `#latency`

---