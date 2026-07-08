---
layout: default
title: "Horizon Summary: 2026-07-08 (ZH)"
date: 2026-07-08
lang: zh
---

> 从 37 条内容中筛选出 16 条重要资讯。

---

1. [OpenAI 推出 GPT-Live 语音模式，搭载 GPT-5.5](#item-1) ⭐️ 9.0/10
2. [欧盟重启私密信息扫描法规](#item-2) ⭐️ 9.0/10
3. [TypeScript 7.0 发布，处理速度提升高达 12 倍](#item-3) ⭐️ 9.0/10
4. [安卓零点击远程 Root 漏洞链被曝光](#item-4) ⭐️ 9.0/10
5. [Chatto 聊天应用正式开源](#item-5) ⭐️ 8.0/10
6. [xAI 发布 Grok 4.5，效率提升 4 倍](#item-6) ⭐️ 8.0/10
7. [Mistral 发布 Robostral Navigate，一种无地图导航模型](#item-7) ⭐️ 8.0/10
8. [OpenBSD 释放后重用漏洞导致本地权限提升至 root](#item-8) ⭐️ 8.0/10
9. [Fable 分类器过度敏感，误封正常查询](#item-9) ⭐️ 8.0/10
10. [Cloudflare Meerkat：首个生产级异步共识算法](#item-10) ⭐️ 8.0/10
11. [LingBot-Video：稀疏专家混合视频扩散世界模型](#item-11) ⭐️ 8.0/10
12. [混合注意力掩码与蒸馏减少交互式世界模型中的漂移](#item-12) ⭐️ 8.0/10
13. [DeepSeek 自研 AI 推理芯片](#item-13) ⭐️ 8.0/10
14. [阿里下令员工卸载 Claude，禁令 7 月 10 日生效](#item-14) ⭐️ 8.0/10
15. [Meta 智能眼镜若隐私灯被破坏将自动关闭摄像头](#item-15) ⭐️ 8.0/10
16. [研究人员通过电磁信号识别手机应用，准确率达 99.07%](#item-16) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 推出 GPT-Live 语音模式，搭载 GPT-5.5](https://openai.com/index/introducing-gpt-live/) ⭐️ 9.0/10

OpenAI 推出了 GPT-Live，这是一种基于 GPT-5.5 的全双工语音模式，可在后台进行推理，从而支持更自然、更长时间的对话。 这标志着语音 AI 的重大飞跃，缩小了语音模型与文本模型之间的差距，使用户能够进行富有成效的长篇对话，不再受限于旧版语音模型。 GPT-Live 包括 GPT-Live-1 和 GPT-Live-1 mini 模型，并具备将问题委托给后台 GPT-5.5 的能力，从而提供最新的智能。有用户报告了一个 bug：模型会无故打断并发出笑声。

hackernews · logickkk1 · 7月8日 17:03 · [社区讨论](https://news.ycombinator.com/item?id=48834405)

**背景**: 语音助手通常使用专门的较小模型，这些模型落后于最新的基于文本的 LLM。GPT-Live 通过集成 GPT-5.5（OpenAI 于 2026 年 4 月发布的最先进模型）作为后台推理引擎，使得语音模式能够在对话中调用前沿能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-5-5/">Introducing GPT‑5.5 - OpenAI</a></li>
<li><a href="https://deploymentsafety.openai.com/gpt-live">GPT-Live System Card - OpenAI Deployment Safety Hub</a></li>
<li><a href="https://venturebeat.com/technology/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person">OpenAI launches GPT-Live, a full-duplex voice upgrade ... - VentureBeat</a></li>

</ul>
</details>

**社区讨论**: 社区评价褒贬不一：一些用户称赞自然对话质量和更长的会话时间，而另一些人则批评 AI 取代人际关系的方向，并指出语音模式缺乏工具/连接器集成。还报告了一个关于无故打断的 bug。

**标签**: `#openai`, `#gpt-live`, `#voice-ai`, `#chatbots`, `#ai-assistant`

---

<a id="item-2"></a>
## [欧盟重启私密信息扫描法规](https://cyberinsider.com/eu-now-one-step-away-from-reviving-private-message-scanning-rules/) ⭐️ 9.0/10

欧盟距离重启强制扫描私密信息的立法仅一步之遥，该立法可能要求削弱端到端加密。 该立法可能对欧盟的隐私和加密产生重大影响，影响超过 4.5 亿用户，并为全球大规模监控私密通信树立先例。 这项被称为 Chat Control 的提案有两个版本：Chat Control 1.0 允许平台自愿扫描，而 Chat Control 2.0 强制扫描并禁止端到端加密。目前推动的重点是更具争议的 2.0 版本。

hackernews · ggirelli · 7月8日 16:53 · [社区讨论](https://news.ycombinator.com/item?id=48834296)

**背景**: 客户端扫描是一种在用户设备上、在加密前扫描消息内容的技术，实际上绕过了端到端加密。端到端加密确保只有发送者和预期接收者能读取消息，防止监控。欧盟的拟议立法旨在检测儿童性虐待材料等非法内容，但批评者认为它破坏了所有用户的安全和隐私。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/End-to-end_encryption">End-to-end encryption</a></li>
<li><a href="https://www.internetsociety.org/wp-content/uploads/2020/03/2022-Client-Side-Scanning-Factsheet-EN.pdf">CC BY-NC-SA 4.0 Client-Side Scanning</a></li>

</ul>
</details>

**社区讨论**: 评论者对立法反复出现表示沮丧，一些人区分了 Chat Control 1.0（自愿扫描）和 2.0（强制扫描并禁止端到端加密）。另一些人则指出互联网观察基金会等组织在推动客户端扫描方面的作用。

**标签**: `#privacy`, `#encryption`, `#EU legislation`, `#surveillance`, `#security`

---

<a id="item-3"></a>
## [TypeScript 7.0 发布，处理速度提升高达 12 倍](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) ⭐️ 9.0/10

微软宣布了 TypeScript 7.0，这是一个主要版本发布，包含完全重写的代码库，在基准测试中编译速度提升高达 12 倍，并带来新功能。 这种性能飞跃显著减少了像 VS Code 和 Sentry 这样的大型代码库的构建时间，使 TypeScript 对企业项目更具吸引力，并提高了开发者的生产力。 基准测试显示，速度提升从 tldraw 的 7.7 倍到 vscode 的 11.9 倍不等，但用户注意到与 ts-jest 等工具的兼容性问题需要变通方案。

hackernews · DanRosenwasser · 7月8日 16:06 · [社区讨论](https://news.ycombinator.com/item?id=48833715)

**背景**: TypeScript 是 JavaScript 的类型化超集，编译为普通 JavaScript，广泛用于大规模应用开发。主要版本发布通常会引入破坏性变更，需要团队更新依赖项和配置。

**社区讨论**: 社区对性能提升表示赞赏，有用户称团队同时维护两个独立代码库的做法令人难以置信。但也有人对与 ts-jest 等测试工具的兼容性，以及项目子集 tsconfig 作用域的复杂性提出了担忧。

**标签**: `#TypeScript`, `#performance`, `#major-release`, `#programming-language`, `#compiler`

---

<a id="item-4"></a>
## [安卓零点击远程 Root 漏洞链被曝光](https://www.coolapk.com/feed/72700258?s=ZGQ2MTVlZjYxMDYyNTM3ZzZhNGUzOThjega1640) ⭐️ 9.0/10

7 月 8 日，网络安全公司 Nebula 披露了一套零点击远程 Root 漏洞链，影响安卓 17 及所有旧版本。该攻击链利用了 Firefox 浏览器漏洞（151.0.2 及更早版本）和一个潜伏 15 年的 Linux 内核漏洞，用户只需点击恶意链接，一分钟后即可获得持久的 Root 权限。 此漏洞链极为关键，因为远程攻击者无需用户更多交互（仅需点击链接）即可完全控制几乎所有安卓设备。概念验证代码已在 GitHub 发布，加上内核漏洞的历史特性，意味着利用代码可能迅速扩散，影响数十亿设备。 攻击链结合了 Firefox 浏览器漏洞和一个潜伏 15 年的 Linux 内核漏洞。报告称，通过恶意链接触发，一分钟后即可植入权限文件并通过 ADB 获得持久 Root 权限。谷歌已收到通报，Linux 内核已完成修复，但完整漏洞细节尚未披露。

telegram · zaihuapd · 7月8日 13:01

**背景**: 安卓设备依赖分层安全模型，包括沙箱和权限控制，以防止未经授权的访问。Root 权限赋予用户或攻击者对设备的完全控制，从而绕过这些限制。零点击漏洞意味着除了初始点击外无需用户交互（如点击按钮），因此极其危险。ADB（Android 调试桥）是一个用于调试的命令行工具，但一旦被攻破，可能被用来以高权限执行命令。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.esecurityplanet.com/threats/android-zero-click-rce-vulnerability-enables-remote-shell-access/">Android Zero-Click RCE Vulnerability Enables Remote Shell Access | eSecurity Planet</a></li>
<li><a href="https://www.apriorit.com/dev-blog/255-android-rooting">Android Rooting Using ADB | Apriorit</a></li>

</ul>
</details>

**标签**: `#Android`, `#security`, `#vulnerability`, `#root`, `#exploit`

---

<a id="item-5"></a>
## [Chatto 聊天应用正式开源](https://www.hmans.dev/blog/chatto-is-open-source) ⭐️ 8.0/10

Chatto，一款支持每用户加密的自托管聊天应用，现已作为开源软件发布。该项目被设计为非常容易在自己的基础设施上部署。 这提供了一个注重隐私、可自托管的替代方案，取代主流聊天平台，吸引希望完全控制通信数据的个人和企业。每用户加密和简易部署的特点可能促进自托管消息系统的广泛采用。 Chatto 以紧凑的自包含二进制文件形式发布，并使用 NATS 作为消息代理，NATS 还提供内置流持久化功能。它支持可选的 S3 兼容对象存储用于文件上传和附件存储。

hackernews · speckx · 7月8日 15:19 · [社区讨论](https://news.ycombinator.com/item?id=48833116)

**背景**: NATS 是一个高性能、轻量级的开源消息系统，由云原生计算基金会管理，支持发布/订阅、请求/回复以及带持久化的流处理。Chatto 利用 NATS 实现高效的消息传递和存储，使其适合自托管部署。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NATS_Messaging">NATS Messaging - Wikipedia</a></li>
<li><a href="https://nats.io/">NATS.io – Cloud Native, Open Source, High-performance Messaging</a></li>

</ul>
</details>

**社区讨论**: 评论者赞扬了自托管的简便性和 NATS 的使用，有人提到开发者使用了代理式编码。一些评论对符合公司策略（如工作消息的软删除）以及缺乏移动端支持表示担忧，而移动端支持对许多用户来说是必需的。

**标签**: `#open-source`, `#chat`, `#self-hosting`, `#NATS`, `#encryption`

---

<a id="item-6"></a>
## [xAI 发布 Grok 4.5，效率提升 4 倍](https://x.ai/news/grok-4-5) ⭐️ 8.0/10

xAI 宣布推出 Grok 4.5，这是一款大型语言模型，其推理效率比 Claude Opus 高出 4 倍，成本更低。该模型使用了数万亿个 Cursor 数据令牌进行训练，定价为输入$2/输出$6。 此次发布加剧了 AI 模型市场的竞争，提供了一种比 Opus 等领先模型更具成本效益的替代方案。然而，关于 xAI 做法的伦理担忧可能会阻碍其在企业环境中的采用。 Grok 4.5 的定价为每百万输入令牌$2、每百万输出令牌$6，远低于 GPT-5.4（$2.5/$15）和 Opus 4.8（$5/$25）。基准测试将其性能定位在 Opus 4.7 级别附近。

hackernews · BoumTAC · 7月8日 18:00 · [社区讨论](https://news.ycombinator.com/item?id=48835111)

**背景**: Grok 是由 xAI 开发的人工智能聊天机器人，由埃隆·马斯克创立，并集成到 X（原 Twitter）和特斯拉中。像 Grok 和 Claude 这样的大型语言模型（LLM）是在大量文本数据上训练的，以生成类似人类的回应；“推理效率”指的是模型用更少的计算资源解决问题的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Grok_(chatbot)">Grok (chatbot) - Wikipedia</a></li>
<li><a href="https://www.anthropic.com/claude/opus">Claude Opus \ Anthropic</a></li>

</ul>
</details>

**社区讨论**: 社区意见分歧；一些人称赞该模型的成本效益和性能，而另一些人则批评 xAI 的伦理立场，担心其模型回应中存在 CSAM 和政治偏见。技术用户还注意到训练中创新地使用了 Cursor 数据。

**标签**: `#AI`, `#LLMs`, `#xAI`, `#Grok`, `#model release`

---

<a id="item-7"></a>
## [Mistral 发布 Robostral Navigate，一种无地图导航模型](https://mistral.ai/news/robostral-navigate/) ⭐️ 8.0/10

Mistral 发布了 Robostral Navigate，这是一个拥有 80 亿参数的模型，仅使用单个 RGB 摄像头在 R2R-CE 基准测试上达到了 76.6% 的准确率，无需深度传感器、激光雷达或多摄像头。 该模型通过实现无地图导航和最低硬件需求，推动了机器人导航技术发展，可能降低仓库自动化和业余机器人等应用的成本和复杂性。 该模型并未公开可用，限制了社区的即时使用，但其单摄像头方法可能使实际部署更具可扩展性。

hackernews · ottomengis · 7月8日 14:09 · [社区讨论](https://news.ycombinator.com/item?id=48832212)

**背景**: 无地图导航使机器人无需预先构建地图即可在陌生环境中导航，解决了‘绑架机器人问题’（机器人无法定位自身）。传统方法依赖多传感器或预先测绘的区域。Robostral Navigate 利用视觉和语言指令，仅用单个摄像头实现了这一能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mistral.ai/news/robostral-navigate/">Robostral Navigate: single-camera AI navigation | Mistral AI</a></li>
<li><a href="https://alphasignal.ai/news/mistral-s-robostral-navigate-beats-sensor-heavy-robots-with-just-one-camera">Mistral's Robostral Navigate Beats Sensor-Heavy Robots With ...</a></li>

</ul>
</details>

**社区讨论**: 社区对无地图导航能力感到兴奋，但也有人对模型未开源表示遗憾。评论者将其与先前的工作（如 PIGEON）进行比较，并表示有兴趣将其用于业余项目，如农场机器人。

**标签**: `#robotics`, `#navigation`, `#AI`, `#Mistral`, `#map-less`

---

<a id="item-8"></a>
## [OpenBSD 释放后重用漏洞导致本地权限提升至 root](https://nvd.nist.gov/vuln/detail/cve-2026-57589) ⭐️ 8.0/10

OpenBSD 中发现了一个释放后重用漏洞（CVE-2026-57589），允许本地攻击者将权限提升至 root。 OpenBSD 以其强大的安全性著称，因此任何本地权限提升漏洞都很重要，可能削弱信任。该漏洞通过 AI 辅助的漏洞挖掘发现，也凸显了即使是最注重安全的操作系统中内存安全仍面临的挑战。 该漏洞是 OpenBSD 内核中的释放后重用 bug，可导致本地权限提升至 root。它是通过 Patch the Planet 项目发现的，该项目是 OpenAI 与 Trail of Bits 合作，利用 AI 在开源软件中寻找漏洞。

hackernews · linggen · 7月8日 13:24 · [社区讨论](https://news.ycombinator.com/item?id=48831658)

**背景**: 释放后重用漏洞是指程序在内存被释放后继续使用内存指针，可能导致攻击者执行任意代码。OpenBSD 是一款注重安全的免费类 Unix 操作系统，以其严格的审计和主动安全措施闻名。本地权限提升意味着拥有有限本地权限的攻击者可以获得系统的 root 级控制权。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://learn.snyk.io/lesson/use-after-free/">Use after free vulnerability | Tutorial & Examples | Snyk Learn</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenBSD">OpenBSD</a></li>
<li><a href="https://en.wikipedia.org/wiki/Local_privilege_escalation">Local privilege escalation</a></li>

</ul>
</details>

**社区讨论**: 社区评论指出该漏洞是通过 AI 辅助漏洞挖掘项目 Patch the Planet 发现的。一些人认为这一发现凸显了 OpenBSD 强大的安全文化，而另一些人则质疑为何该漏洞尚未出现在 OpenBSD 的安全页面上。还有讨论比较了 OpenBSD 与其他系统的安全记录。

**标签**: `#security`, `#vulnerability`, `#OpenBSD`, `#privilege-escalation`, `#CVE`

---

<a id="item-9"></a>
## [Fable 分类器过度敏感，误封正常查询](https://combine-lab.github.io/blog/2026/07/07/fable-is-not-a-useful-model.html) ⭐️ 8.0/10

用户报告称，Anthropic 的 Fable 分类器过度敏感，错误地将技术性和科学性查询标记为违规，并将响应降级到能力较弱的 Opus 4.8 模型。 这削弱了 Fable 在专业和学术工作中的实用性，引发对 AI 安全护栏过度执行、阻碍用户高效使用的担忧。 该分类器旨在检测网络安全、生物学或越狱尝试，但误报率很高，甚至将临床试验统计计算和 vllm 代码补丁标记为违规。

hackernews · karrot-kake · 7月8日 20:41 · [社区讨论](https://news.ycombinator.com/item?id=48837162)

**背景**: LLM 安全护栏是防止有害输出的机制。Anthropic 的 Fable 包含一个分类器，将风险查询降级到能力较弱的模型（Opus 4.8）。然而，过度激进的过滤会阻止合法使用场景，使依赖该模型进行技术工作的用户感到沮丧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/news/fable-safeguards-jailbreak-framework">More details on Fable 5’s cyber safeguards and our jailbreak ...</a></li>
<li><a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5">Prompting Claude Fable 5 - Claude Platform Docs</a></li>
<li><a href="https://aisecurityandsafety.org/en/guides/llm-guardrails/">LLM Guardrails: The Complete Guide to AI Safety Guardrails ...</a></li>

</ul>
</details>

**社区讨论**: 社区评论显示出广泛的不满：一位医学物理学家无法让 Fable 回答任何问题，而另一位用户试图修补 vllm 以支持 GPU 时被反复降级。有评论者指出，Anthropic 会对标记的输入/输出保留长达 2 年，引发隐私担忧。

**标签**: `#AI Safety`, `#Anthropic`, `#LLM Guardrails`, `#Model Behavior`

---

<a id="item-10"></a>
## [Cloudflare Meerkat：首个生产级异步共识算法](https://blog.cloudflare.com/meerkat-introduction/) ⭐️ 8.0/10

Cloudflare 发布了 Meerkat，这是 QuePaxa 的第一个生产实现，QuePaxa 是一种不依赖超时、可在极端消息延迟下继续推进的异步共识算法。 这标志着分布式共识领域的重要进展，提供了在网络不稳定环境下传统协议（如 Paxos 和 Raft）无法实现的鲁棒性，可能使运行在不稳定全球网络上的系统受益。 Meerkat 对每次读取操作都需要全局共识，相比允许本地读取的系统增加了读取延迟。Cloudflare 指出它尚未投入生产，正常情况下的性能仍有待验证。

hackernews · bobnamob · 7月8日 13:18 · [社区讨论](https://news.ycombinator.com/item?id=48831565)

**背景**: Paxos 和 Raft 等分布式共识算法依赖超时处理故障，但由于部分同步模型，在不可预测的网络延迟下表现不佳。QuePaxa 等异步共识通过随机化和对冲消除超时，即使在最坏条件下也能保证活性，但在实践中高效实现一直具有挑战性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bford.info/pub/os/quepaxa/">QuePaxa: Escaping the Tyranny of Timeouts in Consensus – Bryan Ford's Home Page</a></li>
<li><a href="https://bford.info/pub/os/quepaxa/quepaxa.pdf">QuePaxa: Escaping the Tyranny of Timeouts in Consensus Pasindu Tennage* EPFL</a></li>
<li><a href="https://en.wikipedia.org/wiki/Paxos_(computer_science)">Paxos (computer science) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者指出 Meerkat 是首个生产级异步共识实现，但质疑其与 Raft（Paxos 的基于领导者的变体）的比较，并强调了所有读取都需要全局共识带来的读取延迟成本。一些人认为它对复杂网络有价值，而另一些人则怀疑其实际应用可能仅限于小众场景。

**标签**: `#distributed systems`, `#consensus algorithm`, `#cloud computing`, `#asynchronous consensus`, `#production implementation`

---

<a id="item-11"></a>
## [LingBot-Video：稀疏专家混合视频扩散世界模型](https://www.reddit.com/r/MachineLearning/comments/1ur0bxq/lingbotvideo_sparsemoe_video_diffusion/) ⭐️ 8.0/10

LingBot-Video 模型已开源发布，这是一个 13B 参数的稀疏专家混合视频扩散 Transformer，仅 1.4B 参数被激活，并提供了权重、代码和推理栈。 这是一项重要的开源贡献，结合了稀疏专家混合、带物理合理性奖励的强化学习以及动作条件视频预测用于世界建模，有可能推动机器人和视频生成领域的发展。 该模型使用 128 个专家和 top-8 路由，并通过六种强化学习奖励进行后训练，其中包括一个由视觉语言模型从采样帧中判断的物理合理性奖励。

reddit · r/MachineLearning · /u/Savings-Display5123 · 7月8日 17:58

**背景**: 稀疏专家混合是一种将问题空间划分为多个专门子网络，并仅为每个输入激活其中一部分的架构，从而提升效率。视频扩散 Transformer 将 Transformer 注意力机制应用于扩散模型，以生成时间上一致的视频。世界模型通过学习动作条件观测来模拟环境动态，从而实现规划和策略评估。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Sparse_mixture-of-experts">Sparse mixture-of-experts</a></li>
<li><a href="https://arxiv.org/abs/2305.13311">[2305.13311] VDT: General-purpose Video Diffusion ... GitHub - RERV/VDT: [ICLR2024] The official implementation of ... GitHub - showlab/Awesome-Video-Diffusion: A curated list of ... VDT: General-purpose Video Diffusion Transformers via Mask ... [2509.09547] Improving Video Diffusion Transformer Training ... VDT: G PURPOSE VIDEO DIFFUSION TRANS FORMERS VIA MODELING DiTVR: Zero-Shot Diffusion Transformer for Video Restoration</a></li>
<li><a href="https://github.com/RERV/VDT">GitHub - RERV/VDT: [ICLR2024] The official implementation of ... GitHub - showlab/Awesome-Video-Diffusion: A curated list of ... VDT: General-purpose Video Diffusion Transformers via Mask ... [2509.09547] Improving Video Diffusion Transformer Training ... VDT: G PURPOSE VIDEO DIFFUSION TRANS FORMERS VIA MODELING DiTVR: Zero-Shot Diffusion Transformer for Video Restoration</a></li>

</ul>
</details>

**社区讨论**: 发帖者质疑使用视觉语言模型评判物理合理性的做法，警告可能存在广义古德哈特定律效应，并指出缺乏闭环机器人评估结果，质疑该模型是否真正算作世界模型，还是仍停留在视频生成器层面。

**标签**: `#sparse MoE`, `#video diffusion`, `#world model`, `#reinforcement learning`, `#open source`

---

<a id="item-12"></a>
## [混合注意力掩码与蒸馏减少交互式世界模型中的漂移](https://www.reddit.com/r/MachineLearning/comments/1ur4hkc/reducing_drift_in_interactive_worldmodel_rollouts/) ⭐️ 8.0/10

研究人员提出了一种方法，将混合双向/自回归注意力掩码（MoBA）与一致性及分布匹配蒸馏相结合，在长的自展开轨迹上减少交互式世界模型中的漂移，LingBot World 实现了 60 分钟的稳定生成。 这项工作解决了交互式世界模型中的一个关键限制——长时间生成中的漂移问题，使得机器人模拟和交互式 AI 等应用能够进行更可靠的长期生成。开放权重的发布允许社区在此基础上进行改进。 该方法使用动态 KV 缓存调度与 MoBA 保持长展开的可处理性，并通过 Plücker 嵌入和 AdaLN 实现相机控制。然而，身份持久性有限：离开上下文窗口的区域在重新访问时会被重新生成，而不是被回忆。

reddit · r/MachineLearning · /u/Purple-Low-2779 · 7月8日 20:23

**背景**: 交互式世界模型根据用户输入生成视频帧，但常常存在漂移问题，即模型过度依赖自身最近的帧，导致随时间退化。MoBA 是一种稀疏注意力机制，可以在全注意力和稀疏注意力之间无缝切换，提高长序列的效率。分布匹配蒸馏（DMD）是一种通过匹配分布（不仅仅是单个样本）将多步扩散模型压缩为单步生成器的技术。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2502.13189">[2502.13189] MoBA: Mixture of Block Attention for Long ... GitHub - MoonshotAI/MoBA: MoBA: Mixture of Block Attention ... Optimizing Mixture of Block Attention - arXiv.org Tencent-Hunyuan/flex-block-attn - GitHub MoBA: Efficient Sparse Block Attention - emergentmind.com MoBA: Mixture of Block Attention for Long-Context LLMs Mixture of Block Attention (MoBA) - AI Wiki</a></li>
<li><a href="https://arxiv.org/abs/2311.18828">[2311.18828] One-step Diffusion with Distribution Matching Distillation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Plücker_embedding">Plücker embedding - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Reddit 评论者强调了技术新颖性以及关于局限性（身份持久性）的诚实态度，并表示好奇当其他人复现实验时，长时间展开的稳定性是否能够保持。没有提供其他评论。

**标签**: `#machine learning`, `#world models`, `#interactive generation`, `#attention mechanism`, `#distillation`

---

<a id="item-13"></a>
## [DeepSeek 自研 AI 推理芯片](https://t.me/zaihuapd/42423) ⭐️ 8.0/10

据三位知情人士透露，中国 AI 公司 DeepSeek 正在自研 AI 推理芯片，旨在减少对英伟达和华为芯片的依赖。该芯片专注于推理任务，已开发约一年，仍处于早期阶段。 此举标志着在美国出口管制背景下向硬件独立性的战略转变，可能重塑 AI 推理市场格局。也凸显了 AI 公司为优化成本和性能而设计定制芯片的日益增长趋势。 该芯片专为推理而非训练设计，DeepSeek 已开始接洽芯片设计、代工和存储公司，并积极招聘芯片设计工程师。此前 DeepSeek 的模型依赖英伟达 H800 和华为昇腾芯片。

telegram · zaihuapd · 7月8日 05:20

**背景**: AI 芯片是专门加速机器学习任务的硬件，训练芯片针对大型模型训练优化，推理芯片针对已训练模型的运行优化。英伟达 H800 GPU 和华为昇腾系列广泛用于 AI 工作负载，但受美国出口管制限制，中国公司获取受限。自主研发芯片可降低供应链风险并针对特定需求定制性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NVIDIA_H800_GPU">NVIDIA H800 GPU</a></li>
<li><a href="https://www.huaweicentral.com/huawei-reveals-3-year-ascend-ai-chip-roadmap-950-coming-in-2026/">Huawei reveals 3-year Ascend AI chip roadmap, 950 coming in 2026</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#DeepSeek`, `#inference`, `#semiconductor`, `#geopolitics`

---

<a id="item-14"></a>
## [阿里下令员工卸载 Claude，禁令 7 月 10 日生效](https://t.me/zaihuapd/42424) ⭐️ 8.0/10

阿里巴巴已内部命令所有员工卸载所有 Anthropic 产品，包括 Claude 模型（Sonnet、Opus、Fable）和 Claude Code 智能体，禁令于 7 月 10 日生效。此前 Anthropic 指控阿里在 4 月 22 日至 6 月 5 日期间用约 2.5 万个虚假账号与 Claude 交互超 2800 万次。 这一禁令标志着中国科技巨头与领先 AI 公司之间的紧张局势显著升级，可能影响外国 AI 工具在中国的企业采用。它也凸显了人们对 API 滥用的日益担忧，以及公司为保护其服务可能采取的措施。 禁令不仅涵盖 Claude 模型（Sonnet、Opus、Fable），还包括 Claude Code 智能体产品。此前，阿里巴巴曾报销员工使用 Claude、GPT、Gemini 等外部 AI 模型的费用；新政策逆转了这一做法。

telegram · zaihuapd · 7月8日 06:09

**背景**: Claude 是由 AI 安全公司 Anthropic 开发的一系列大语言模型。Sonnet、Opus、Fable 等模型在能力和成本上各有不同，而 Claude Code 是一个用于编码任务的智能体工具。阿里的禁令是在 Anthropic 据称检测到大规模虚假账号使用后收紧风控策略的结果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.claude.com/docs/en/about-claude/models/overview">Models overview - Claude Platform Docs</a></li>
<li><a href="https://code.claude.com/docs/en/agent-sdk/overview">Agent SDK overview - Claude Code Docs</a></li>

</ul>
</details>

**标签**: `#Alibaba`, `#Claude`, `#Anthropic`, `#AI Security`, `#Corporate Ban`

---

<a id="item-15"></a>
## [Meta 智能眼镜若隐私灯被破坏将自动关闭摄像头](https://www.theverge.com/gadgets/962514/meta-privacy-light-tampering-smart-glasses-update?view_token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Ik40dk1iWjJvWjMiLCJwIjoiL2dhZGdldHMvOTYyNTE0L21ldGEtcHJpdmFjeS1saWdodC10YW1wZXJpbmctc21hcnQtZ2xhc3Nlcy11cGRhdGUiLCJleHAiOjE3ODM5MDE0MjUsImlhdCI6MTc4MzQ2OTQyNX0.GZUi5dGuIr00bBayHW1_oTfEcfxURMnIKLk2tTpC2To) ⭐️ 8.0/10

Meta 正在为其智能眼镜推送更新，当隐私指示灯被遮盖或物理破坏时，摄像头将自动停用。 此举直接回应了隐私担忧和未经授权的拍摄滥用问题，此前有用户找到了绕过指示灯的方法。该更新增强了用户保护，可能恢复对可穿戴摄像头的信任。 该更新适用于第二代 Ray-Ban Meta 智能眼镜和 Meta 自有品牌型号，检测到篡改时会关闭整个摄像头拍摄系统。此前出现了付费移除 LED 的服务。

telegram · zaihuapd · 7月8日 10:23

**背景**: Meta 的 Ray-Ban 系列等智能眼镜有一个小型 LED 灯，在录制时会亮起以提醒附近的人。但一些用户遮盖或移除 LED 以隐蔽录制，引发了隐私投诉，部分场所甚至出台了法律限制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hothardware.com/news/meta-smart-glasses-led-tampering">Meta Smart Glasses Update Targets Privacy LED Tampering To ...</a></li>
<li><a href="https://www.digitaltrends.com/wearables/meta-will-disable-the-camera-on-ai-smart-glasses-if-you-tamper-or-cover-the-indicator-light/">Meta will disable the camera on AI smart glasses if you ...</a></li>
<li><a href="https://www.timesnownews.com/technology-science/meta-finally-acts-on-smart-glasses-privacy-but-only-after-backlash-article-154980372">Meta Finally Acts On Smart Glasses Privacy, But Only After ...</a></li>

</ul>
</details>

**标签**: `#privacy`, `#smart glasses`, `#wearables`, `#Meta`, `#security update`

---

<a id="item-16"></a>
## [研究人员通过电磁信号识别手机应用，准确率达 99.07%](https://www.scmp.com/news/china/science/article/3359688/chinese-researchers-find-peephole-any-smartphone-its-leaked-radio-signal) ⭐️ 8.0/10

中国人民公安大学的研究人员开发出一种非接触式取证技术，通过分析设备运行时泄漏的低频电磁信号，识别正在使用的手机应用和部分操作，在 iPhone 15 Pro、小米 15 Pro 和 OPPO Reno 13 等设备上，对抖音、微信视频通话、百度地图等应用的识别准确率最高达 99.07%。 这项研究对隐私和安全构成重大威胁，因为它无需物理接触或网络连接，即使在设备加密或飞行模式下也能静默监控应用使用情况。它突显了现代智能手机对电磁侧信道攻击的脆弱性，可能被用于监控、取证或恶意目的。 该技术利用不同应用会驱动不同硬件组合（如处理器、GPU、Wi-Fi 模块），产生独特的电磁信号特征。研究人员使用机器学习对这些特征进行分类，在三种智能手机上测试了七类应用，最高准确率达到 99.07%。

telegram · zaihuapd · 7月8日 16:05

**背景**: 侧信道攻击利用电子设备的物理泄漏（如功耗或电磁辐射）来提取敏感信息，而无需直接破解加密算法。电磁侧信道攻击是非侵入式的，只需近场探头和示波器即可实施。此前的研究已表明电磁辐射可泄露屏幕内容或 PIN 输入，但本工作聚焦于识别正在运行的应用，即使设备离线或加密也能工作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.mk.co.kr/cn/world/12093156">中国一所大学的研究团队开发出一种所谓“非接触式数字取证技术”,可通过...</a></li>
<li><a href="https://www.ckhq.net/html/6c1af61946e47994a7d682373d5f7757.html">中国科研团队研发非接触式智能手机应用识别技术，准确率达99.07%</a></li>

</ul>
</details>

**标签**: `#side-channel attack`, `#mobile security`, `#electromagnetic leakage`, `#forensics`, `#privacy`

---