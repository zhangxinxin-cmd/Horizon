---
layout: default
title: "Horizon Summary: 2026-07-07 (ZH)"
date: 2026-07-07
lang: zh
---

> 从 44 条内容中筛选出 18 条重要资讯。

---

1. [腾讯发布 Hy3：295B 参数 MoE 模型性能超越更大模型](#item-1) ⭐️ 9.0/10
2. [Januscape：KVM 虚拟机逃逸漏洞影响 Intel 和 AMD](#item-2) ⭐️ 9.0/10
3. [中国可能限制顶尖 AI 模型对外出口](#item-3) ⭐️ 9.0/10
4. [Kokoro：高质量、对 CPU 友好的文本转语音模型](#item-4) ⭐️ 8.0/10
5. [欧盟聊天控制提案威胁加密与隐私](#item-5) ⭐️ 8.0/10
6. [欧盟强制所有新车安装驾驶员监控摄像头](#item-6) ⭐️ 8.0/10
7. [微软解雇 id Software 的 idTech 团队](#item-7) ⭐️ 8.0/10
8. [欧盟议会程序性投票推进聊天控制法案](#item-8) ⭐️ 8.0/10
9. [sqlite-utils 4.0 增加数据库模式迁移功能](#item-9) ⭐️ 8.0/10
10. [用于无线电传播建模的可微分光线追踪博士论文](#item-10) ⭐️ 8.0/10
11. [MIRA：50 亿参数多人火箭联盟世界模型](#item-11) ⭐️ 8.0/10
12. [使用可信 LoRA 适配器子空间防御微调投毒](#item-12) ⭐️ 8.0/10
13. [谷歌新增“保存媒体”设置，用于 AI 训练](#item-13) ⭐️ 8.0/10
14. [中国计划投入 2 万亿元建设全国算力网络](#item-14) ⭐️ 8.0/10
15. [Anthropic 发布 Claude Sonnet 5，具备强大代理能力](#item-15) ⭐️ 8.0/10
16. [英伟达 Blackwell 晶圆美国制造，但封装仍需台湾](#item-16) ⭐️ 8.0/10
17. [DeepSeek 自研芯片减少对英伟达华为依赖](#item-17) ⭐️ 8.0/10
18. [Claude Fable 5 重新上线，额度减少且安全误判频发](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [腾讯发布 Hy3：295B 参数 MoE 模型性能超越更大模型](https://simonwillison.net/2026/Jul/6/hy3/#atom-everything) ⭐️ 9.0/10

腾讯发布了 Hy3，这是一个 295B 参数的混合专家（MoE）模型，仅有 21B 活跃参数，采用宽松的 Apache 2.0 许可证。该模型性能超越同等规模模型，并可媲美参数规模大 2-5 倍的模型。 此次发布通过提供来自大型科技公司的高效强大模型，极大地推动了开源 AI 的发展。Apache 2.0 许可证允许广泛的商业和研究使用，可能加速产品和应用中的采用。 完整模型在 Hugging Face 上为 598GB，另有 300GB 的 FP8 量化版本。它支持 256K token 的上下文长度，并在 OpenRouter 上免费提供至 7 月 21 日。

rss · Simon Willison · 7月6日 23:57

**背景**: 混合专家（MoE）模型使用门控机制，对每个输入 token 仅激活一部分参数，从而在保持较低计算成本的同时实现大量总参数。总参数与活跃参数的比率（此处为 295B 对 21B）使得模型既强大又高效。这是与始终激活所有参数的密集模型相比的关键优势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mixture_of_experts">Mixture of experts - Wikipedia</a></li>
<li><a href="https://huggingface.co/blog/moe">Mixture of Experts Explained</a></li>
<li><a href="https://www.ibm.com/think/topics/mixture-of-experts">What is mixture of experts? | IBM</a></li>

</ul>
</details>

**标签**: `#AI`, `#machine learning`, `#model release`, `#Mixture-of-Experts`, `#Tencent`

---

<a id="item-2"></a>
## [Januscape：KVM 虚拟机逃逸漏洞影响 Intel 和 AMD](https://github.com/V4bel/Januscape) ⭐️ 9.0/10

研究人员公开了 Januscape（CVE-2026-53359），这是首个能在 Intel 和 AMD 平台上触发的 KVM/x86 虚拟机逃逸漏洞。该漏洞源于 shadow MMU 模拟中的 use-after-free 缺陷，客户机可破坏宿主机内核的 shadow page 表。 该漏洞直接破坏了公有云等多租户 KVM 宿主机的隔离边界，对云安全构成严重威胁。其潜伏 16 年意味着大量运行 2010 年至 2026 年 6 月期间 Linux 内核的系统受到影响。 PoC 代码已发布，可在客户机内触发宿主机内核 panic。此外，在 RHEL 等发行版中，本地普通用户还可利用该缺陷提权至 root。

telegram · zaihuapd · 7月7日 10:14

**背景**: KVM 使用 shadow MMU 通过维护 shadow page 表将客户机虚拟地址直接映射到宿主机物理地址，从而实现客户机页表的虚拟化。Use-after-free 漏洞是指程序在内存已被释放后仍访问该内存，可能导致数据损坏或任意代码执行。Shadow MMU 复杂的内存管理使其容易受到此类漏洞的影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.kernel.org/virt/kvm/x86/mmu.html">The x86 kvm shadow mmu — The Linux Kernel documentation</a></li>
<li><a href="https://learn.snyk.io/lesson/use-after-free/">Use after free vulnerability | Tutorial & Examples | Snyk Learn</a></li>
<li><a href="https://www.automox.com/blog/vulnerability-definition-use-after-free">What Is a Use-After-Free Vulnerability? | Automox</a></li>

</ul>
</details>

**标签**: `#security`, `#vulnerability`, `#virtualization`, `#KVM`, `#cloud`

---

<a id="item-3"></a>
## [中国可能限制顶尖 AI 模型对外出口](https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/) ⭐️ 9.0/10

中国商务部已召集阿里巴巴、字节跳动和智谱等企业开会，讨论限制国内最先进 AI 模型（包括尚未发布的模型）向海外提供访问。 若此政策落地，将大幅改变全球 AI 格局，限制中国 AI 技术的传播，可能加速中西 AI 生态系统的割裂。 限制可能仅适用于未来发布的模型，范围仍在讨论中，最终是否落地尚不确定。会议还考虑将 AI 核心技术泄露或窃取纳入国家安全法治罪。

telegram · zaihuapd · 7月7日 11:42

**背景**: 技术出口管制是国家安全常用的工具，AI 模型被视为具有民用和军事双重用途的技术。中国在 AI 领域快速进步，已开发出与美国相媲美的模型，限制海外访问可保护国内优势并防止技术转移到竞争对手。

**标签**: `#AI policy`, `#China`, `#technology export control`, `#AI regulation`, `#national security`

---

<a id="item-4"></a>
## [Kokoro：高质量、对 CPU 友好的文本转语音模型](https://ariya.io/2026/03/local-cpu-friendly-high-quality-tts-text-to-speech-with-kokoro/) ⭐️ 8.0/10

Kokoro，一个拥有 8200 万参数的开源权重文本转语音模型，已发布，能够在不依赖 GPU 的情况下，在 CPU 上高效运行，实现高质量语音合成。 这使得没有强大 GPU 的用户也能使用本地、私密且易于使用的文本转语音功能，降低了无障碍产品、内容消费和语音界面的门槛。 Kokoro 基于 StyleTTS 2 架构构建，支持手动 IPA 发音标注，但在单字发音和同形异义词上可能表现不佳。

hackernews · speckx · 7月7日 18:24 · [社区讨论](https://news.ycombinator.com/item?id=48821576)

**背景**: 文本转语音（TTS）模型通常需要强大的 GPU 才能实现高质量输出，限制了本地部署。Kokoro 仅 8200 万参数，就能达到与更大模型相当的质量，同时速度更快且对 CPU 友好，非常适合离线使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://kokorottsai.com/">Kokoro TTS: Advanced AI Text-to-Speech Model with 82M parameters</a></li>
<li><a href="https://github.com/hexgrad/kokoro">GitHub - hexgrad/kokoro: https://hf.co/hexgrad/Kokoro-82M · GitHub</a></li>
<li><a href="https://huggingface.co/hexgrad/Kokoro-82M">hexgrad/Kokoro-82M · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: 社区成员分享了使用 Kokoro 进行无障碍应用的积极经验，有用户创建了自改进的语音输入系统（voiceio），还有用户开发了用于网页阅读的 Chrome 扩展。用户提到可以添加 IPA 发音标注，但偶尔在同形异义词和短句上存在不准确的情况。

**标签**: `#TTS`, `#accessibility`, `#local AI`, `#CPU-friendly`, `#open-source`

---

<a id="item-5"></a>
## [欧盟聊天控制提案威胁加密与隐私](https://fightchatcontrol.eu/chat-control-overview) ⭐️ 8.0/10

欧盟的聊天控制 1.0 和 2.0 提案旨在强制大规模扫描数字通信中的儿童性虐待材料（CSAM），可能破坏端到端加密。 这可能削弱所有欧盟公民的隐私和安全，为大规模监控树立先例，并削弱全球使用的加密技术。 这些提案包括客户端扫描（CSS），即在用户设备上加密前扫描内容，带来技术和隐私风险。聊天控制 2.0 是包含额外措施的更新版本。

hackernews · gasull · 7月7日 14:23 · [社区讨论](https://news.ycombinator.com/item?id=48818311)

**背景**: 聊天控制是欧盟于 2022 年提出的一系列旨在打击儿童性虐待材料的规定。它遭到了隐私倡导者、科技公司和专家的强烈反对，他们认为客户端扫描会破坏加密并打开监控的大门。争论的核心在于平衡儿童保护与基本隐私权。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chat_Control">Chat Control - Wikipedia</a></li>
<li><a href="https://fightchatcontrol.eu/">Fight Chat Control - Protect Digital Privacy in the EU</a></li>
<li><a href="https://www.eff.org/deeplinks/2026/04/eu-parliament-blocks-mass-scanning-our-chats-whats-next">EU Parliament Blocks Mass-Scanning of Our Chats—What's Next? | Electronic Frontier Foundation</a></li>

</ul>
</details>

**社区讨论**: 评论者担心这些提案过于宽泛，可能导致监控国家。一些人认为，更有针对性地打击特定犯罪者比大规模扫描更有效。其他人则担心对加密消息和儿童照片（如洗澡照片）的影响。

**标签**: `#privacy`, `#encryption`, `#surveillance`, `#EU legislation`, `#CSAM`

---

<a id="item-6"></a>
## [欧盟强制所有新车安装驾驶员监控摄像头](https://allaboutcookies.org/eu-mandatory-distracted-driver-system) ⭐️ 8.0/10

欧盟现在要求所有销售的新车必须配备驾驶员监控摄像头系统，以检测和防止分心驾驶。 这项法规可能大幅减少因分心驾驶导致的事故，但也引发了驾驶员对隐私和用户体验的担忧。 驾驶员监控系统使用红外摄像头和人工智能追踪驾驶员的面部与眼部运动，一旦检测到分心或困倦就会发出警报。

hackernews · nickslaughter02 · 7月7日 20:50 · [社区讨论](https://news.ycombinator.com/item?id=48823557)

**背景**: 驾驶员监控系统自 2006 年丰田首次引入以来已存在多年，旨在通过评估驾驶员的警觉性来提高道路安全。欧盟强制令使该技术成为标配，旨在减少每年因分心驾驶导致的数千人死亡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Driver_monitoring_system">Driver monitoring system - Wikipedia</a></li>
<li><a href="https://smarteye.se/solutions/automotive/driver-monitoring-system/">Driver Monitoring System (DMS) - Smart Eye</a></li>
<li><a href="https://www.nxp.com/applications/DRIVER-MONITORING-SYSTEMS">Driver Monitoring Systems (DMS) and Occupant Monitoring Systems | NXP Semiconductors</a></li>

</ul>
</details>

**社区讨论**: 社区评论呈现分歧：部分人认为该技术准确且可能救命，另一些人则批评现代汽车日益复杂和侵入性的用户体验，如烦人的车道辅助和限速警告。隐私担忧以及对强制监控的讽刺言论也很常见。

**标签**: `#regulation`, `#automotive`, `#privacy`, `#user-experience`, `#EU`

---

<a id="item-7"></a>
## [微软解雇 id Software 的 idTech 团队](https://gamefromscratch.com/microsoft-fire-idtech-team-at-id-software/) ⭐️ 8.0/10

微软解雇了 id Software（《毁灭战士》和《雷神之锤》的开发商）的整个 idTech 引擎团队。此举表明公司正从专有的 idTech 引擎战略转向使用 Unreal Engine 5 开发未来游戏。 这一决定标志着游戏引擎使用的重大整合，可能减少行业的技术多样性。同时引发对微软企业战略的担忧，因为它可能使收购工作室独特的技术文化趋于同质化。 裁员影响到了负责 idTech 引擎的团队，该引擎曾驱动《毁灭战士》（2016）和《毁灭战士：永恒》等标志性游戏。转向 Unreal Engine 5 符合更广泛的行业趋势，但有可能失去 idTech 独有的性能优化优势。

hackernews · bauc · 7月7日 15:33 · [社区讨论](https://news.ycombinator.com/item?id=48819244)

**背景**: id Software 以其开创性的游戏引擎而闻名，包括 id Tech，该引擎经历了 id Tech 5 和 id Tech 7 等版本演进。微软于 2021 年收购了 id Software 的母公司 ZeniMax。idTech 引擎一直是高性能第一人称射击游戏的基石，以其高效渲染和底层优化著称。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Id_tech_5_engine">Id tech 5 engine</a></li>

</ul>
</details>

**社区讨论**: 社区情绪普遍负面。评论者 ndiddy 认为转向 UE5 使微软能够雇佣更便宜的承包商，但代价是失去内部专长。LarsDu88 批评微软让 Epic Games 垄断游戏引擎，建议开源 idTech。其他人担心游戏开发同质化以及独特技术文化的丧失。

**标签**: `#Microsoft`, `#id Software`, `#game engines`, `#layoffs`, `#Unreal Engine`

---

<a id="item-8"></a>
## [欧盟议会程序性投票推进聊天控制法案](https://www.heise.de/en/news/Showdown-in-Strasbourg-The-unexpected-return-of-Chat-Control-1-0-11356680.html) ⭐️ 8.0/10

欧盟议会在程序性投票中推进了有争议的“聊天控制”监控提案，使其进入二读阶段，而修正案需要绝对多数票才能通过。 此事意义重大，因为它可能导致对私人通信的大规模监控，破坏整个欧盟的加密和隐私权。所使用的程序性策略可能绕过民主监督。 周四，修正案或否决需要绝对多数（361 票）才能通过，而批准只需简单多数。由于暑假，许多欧洲议会议员预计缺席，这对支持者有利。

hackernews · miroljub · 7月7日 15:16 · [社区讨论](https://news.ycombinator.com/item?id=48819008)

**背景**: “聊天控制”是一项欧盟提案，要求消息平台扫描私人消息以查找儿童性虐待材料，批评者称这破坏了端到端加密并实现了大规模监控。尽管遭到公众反对并曾被否决，该提案仍被多次提出。

**社区讨论**: 评论者持批评态度，指出在暑假前举行投票具有战术优势，因为许多议员会缺席。有人引用让-克洛德·容克关于权利缓慢侵蚀的言论。一位用户提供了议员投票链接，并表示失望。

**标签**: `#privacy`, `#EU`, `#surveillance`, `#encryption`, `#policy`

---

<a id="item-9"></a>
## [sqlite-utils 4.0 增加数据库模式迁移功能](https://simonwillison.net/2026/Jul/7/sqlite-utils-4/#atom-everything) ⭐️ 8.0/10

sqlite-utils 4.0 引入了数据库模式迁移、通过新 db.atomic() 方法实现的嵌套事务以及复合外键。 这个主要版本更新解决了 SQLite 数据库管理中的常见痛点，使得演进模式和处理复杂事务更加容易。 迁移使用 sqlite-utils 库在 Python 文件中定义，利用强大的 table.transform() 方法克服了 SQLite 的 ALTER TABLE 的限制。

rss · Simon Willison · 7月7日 19:32

**背景**: sqlite-utils 是一个流行的 Python 库和 CLI 工具，用于操作 SQLite 数据库。模式迁移允许开发者以可控、可重复的方式对数据库模式进行增量更改。新功能建立在现有能力之上，例如创建和转换表，使 sqlite-utils 成为更全面的数据库管理工具。

**标签**: `#sqlite-utils`, `#SQLite`, `#database migrations`, `#Python`, `#Datasette`

---

<a id="item-10"></a>
## [用于无线电传播建模的可微分光线追踪博士论文](https://www.reddit.com/r/MachineLearning/comments/1upvkp5/phd_thesis_on_differentiable_ray_tracing_for/) ⭐️ 8.0/10

作者发表了以自成一体的教科书形式编写的博士论文，将自动微分与光线追踪相结合用于无线电传播建模，实现了通过复杂物理环境的精确梯度计算。 这项工作将可微分编程与无线传播模拟联系起来，为下一代无线网络设计中的逆问题和机器学习集成开辟了新的可能性。 论文分为三部分，分别涵盖物理基础、算法核心（包括 GPU 加速路径追踪和不连续性平滑技术）以及实际应用（如信道建模和材料校准）。它使用了 JAX 以及 Equinox 和 Optimistix 等库。

reddit · r/MachineLearning · /u/jeertmans · 7月7日 13:45

**背景**: 可微分光线追踪通过使仿真过程可梯度化来扩展传统光线追踪，这对优化和机器学习任务至关重要。自动微分框架如 JAX 允许计算任意 Python 函数的导数。本论文将这些技术应用于无线电传播建模，这是无线通信和 5G/6G 网络设计的重要领域。

**标签**: `#differentiable ray tracing`, `#radio propagation`, `#automatic differentiation`, `#machine learning`, `#wireless communications`

---

<a id="item-11"></a>
## [MIRA：50 亿参数多人火箭联盟世界模型](https://www.reddit.com/r/MachineLearning/comments/1upofuw/mira_multiplayer_interactive_world_models_trained/) ⭐️ 8.0/10

MIRA 是一个在 10,000 小时合成火箭联盟游戏数据上训练的 50 亿参数世界模型，支持多人互动模拟。它能在单个 NVIDIA B200 GPU 上以 20 帧每秒的速度运行 4 个玩家，并已发布可玩演示、技术报告、数据集和代码。 这代表了多智能体交互环境中大规模世界模型的重要进展，在游戏 AI、仿真和强化学习方面具有潜在应用。模型、演示和数据的开放发布使社区能够广泛实验，并加速交互式世界建模研究。 该模型有 50 亿参数，使用火箭联盟机器人生成的合成数据进行训练以避免隐私问题。它支持最多 4 个玩家同时游玩，在 B200 上以 20 帧每秒运行，但在其他硬件上性能可能有所不同。

reddit · r/MachineLearning · /u/MasterScrat · 7月7日 07:59

**背景**: 世界模型是一种机器学习系统，学习环境的内部表示，并能根据动作预测未来状态。与简单的生成模型不同，世界模型模拟物理和智能体交互等动态，支持规划和强化学习。这项工作建立在之前的世界模型研究基础上，但扩展到具有严格实时要求的复杂多人场景。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/World_model_(artificial_intelligence)">World model (artificial intelligence)</a></li>

</ul>
</details>

**标签**: `#world models`, `#reinforcement learning`, `#multiplayer AI`, `#Rocket League`, `#large-scale models`

---

<a id="item-12"></a>
## [使用可信 LoRA 适配器子空间防御微调投毒](https://www.reddit.com/r/MachineLearning/comments/1uq68li/what_if_a_model_could_only_learn_what_trusted/) ⭐️ 8.0/10

一篇新论文提出将微调更新约束在由可信 LoRA 适配器张成的子空间内，从而防止模型学习投毒数据引入的恶意行为。 这种几何防御为 AI 安全提供了一种新思路，使攻击者在微调过程中注入后门变得更加困难，对定制模型的安全性至关重要。 该方法在 196 个公开 LoRA 适配器上进行了测试，结果表明攻击成功率大幅下降，同时保持了适配性能，即使在针对性地设计来绕过防御的适应性攻击下也是如此。

reddit · r/MachineLearning · /u/Bright_Warning_8406 · 7月7日 20:00

**背景**: 在外部数据上微调大型语言模型时，如果存在投毒样本，可能会引入后门。LoRA（低秩适配）是一种参数高效的微调技术，学习低秩更新。该工作利用一组可信的 LoRA 适配器定义了一个几何子空间，约束模型更新的可能范围，使恶意方向变得不可达。

**标签**: `#machine learning`, `#LoRA`, `#adversarial robustness`, `#fine-tuning`, `#security`

---

<a id="item-13"></a>
## [谷歌新增“保存媒体”设置，用于 AI 训练](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out/) ⭐️ 8.0/10

谷歌在其搜索服务历史记录中新增了“保存媒体”设置，允许通过 Google Lens、语音搜索等功能上传的图片、文件、音频和视频被保存，并用于改进谷歌服务及 AI 模型。 这一变化影响了数百万使用谷歌视觉和语音搜索功能的用户，因为除非用户选择退出，否则他们的媒体数据可能被用于 AI 训练。这凸显了用户隐私与 AI 开发数据需求之间的持续矛盾。 用户可以在谷歌账号的“搜索服务历史记录”设置中关闭“保存媒体”来选择退出。该设置涵盖来自 Google Lens、Search Live、语音搜索和翻译口语练习的媒体。

telegram · zaihuapd · 7月7日 04:00

**背景**: 谷歌使用大量数据来训练其 AI 模型，包括搜索查询和媒体上传。诸如 Google Lens 等功能允许用户通过图片进行搜索，语音搜索则支持通过语音进行查询。此前，这些媒体可能在没有明确通知的情况下被用于训练；新设置提供了更清晰的控制。

**标签**: `#Google`, `#AI training`, `#privacy`, `#search`, `#settings`

---

<a id="item-14"></a>
## [中国计划投入 2 万亿元建设全国算力网络](https://t.me/zaihuapd/42399) ⭐️ 8.0/10

中国宣布计划未来五年投入约 2 万亿元（2950 亿美元），建设全国互联数据中心网络，优先采用华为等本土供应商的 AI 芯片，以减少对英伟达和 AMD 等美国企业的依赖。 国有电信企业如中国电信和中国联通将运营主要设施，预计使用的 AI 芯片中至少 80%来自国内供应商。该计划是北京“六网”基础设施战略的关键一环。

telegram · zaihuapd · 7月7日 04:45

**背景**: 中国的“六网”基础设施计划旨在建设覆盖交通、能源、水利、通信、算力和网络安全六大领域的全国先进系统。此前，中国的算力资源分散在不同地区和供应商之间，企业难以获取大规模计算能力。新计划旨在打造统一市场，电信运营商已推出“token 套餐”，将算力像移动数据一样打包销售。

**标签**: `#AI infrastructure`, `#China tech`, `#semiconductors`, `#data centers`, `#geopolitics`

---

<a id="item-15"></a>
## [Anthropic 发布 Claude Sonnet 5，具备强大代理能力](https://t.me/zaihuapd/42404) ⭐️ 8.0/10

Anthropic 发布了 Claude Sonnet 5，这是一款具有增强代理能力的新 AI 模型，能够自主规划并使用浏览器和终端等工具。 此次发布标志着代理式 AI 模型的重要进步，在较低价格下提供接近顶级模型如 Opus 的性能，可能使开发者和企业更容易获得复杂的 AI 助手。 Claude Sonnet 5 即日起面向所有套餐开放，并成为 Free 和 Pro 层级的默认模型。定价为每百万输入 token 2 美元，输出 token 价格在公告中未完全公布。

telegram · zaihuapd · 7月7日 09:02

**背景**: Claude Sonnet 是 Anthropic 开发的一系列 AI 模型，以平衡性能和成本而闻名。代理能力指模型能够自主规划并使用外部工具（如浏览器或命令行界面）执行任务，无需人类逐步指导。

**标签**: `#Claude`, `#Anthropic`, `#LLM`, `#agentic`, `#AI model`

---

<a id="item-16"></a>
## [英伟达 Blackwell 晶圆美国制造，但封装仍需台湾](https://www.tomshardware.com/tech-industry/nvidia-and-intel-tout-chips-built-in-america-but-every-arizona-made-blackwell-die-is-still-packaged-in-taiwan) ⭐️ 8.0/10

台积电亚利桑那州 Fab 21 已开始量产英伟达 Blackwell 晶圆，采用定制的 4NP 制程，但晶圆需运往台湾完成切割、堆叠和 CoWoS-L 先进封装。 这暴露了美国半导体供应链的关键瓶颈：尽管晶圆可在本土生产，但先进封装设施仍集中在台湾，带来了地缘政治和供应链风险。 晶圆需运往约 7000 英里外的台湾进行封装，美国目前也没有量产或封装 HBM 的设施。Amkor、台积电和 SK 海力士正建设相关产能，但完整的美国本土供应链预计最早要到 2028 至 2029 年形成。

telegram · zaihuapd · 7月7日 09:47

**背景**: 先进封装技术，如 CoWoS-L（基于本地硅互连的晶圆基底芯片封装），对于英伟达 Blackwell 等高性能计算芯片至关重要，因为它将多个芯片堆叠在一起。美国专注于逻辑芯片制造，但在封装基础设施方面落后，该领域仍高度集中在台湾。

**标签**: `#semiconductor`, `#supply chain`, `#NVIDIA`, `#advanced packaging`, `#Taiwan`

---

<a id="item-17"></a>
## [DeepSeek 自研芯片减少对英伟达华为依赖](https://www.reuters.com/world/china/chinas-deepseek-developing-its-own-ai-chip-sources-say-2026-07-07/) ⭐️ 8.0/10

中国 AI 公司 DeepSeek 已开始自研专注推理阶段的 AI 芯片，旨在减少对英伟达和华为芯片的依赖。该项目约一年前启动，目前仍处于早期阶段，公司正在招募芯片设计工程师并与供应商接洽。 此举意义重大，可减少 DeepSeek 在受美国出口管制限制英伟达和华为先进芯片方面的脆弱性。如果成功，还可能影响中国更广泛的 AI 硬件格局，减少对外国供应商的依赖。 该芯片专为推理阶段设计，即已训练好的模型生成回答的环节，而非训练阶段。近几个月，DeepSeek 已私下大量招募芯片设计工程师，并开始与芯片设计、代工和存储公司接触。

telegram · zaihuapd · 7月7日 11:08

**背景**: DeepSeek 此前依赖英伟达 H800 和华为昇腾芯片运行其模型。美国出口管制限制了先进半导体的获取，给中国 AI 公司带来挑战。公司创始人梁文锋在 2024 年一次罕见采访中承认芯片管制是公司面临的挑战。

**标签**: `#AI chips`, `#DeepSeek`, `#semiconductor`, `#geopolitics`, `#AI hardware`

---

<a id="item-18"></a>
## [Claude Fable 5 重新上线，额度减少且安全误判频发](https://t.me/zaihuapd/42415) ⭐️ 8.0/10

在美国解除出口管制后，Anthropic 旗舰模型 Claude Fable 5 重新上线，但订阅用户的使用额度大幅缩减，且自 7 月 7 日起将转为按量付费模式。 这一变化直接影响依赖 Claude 进行编码的开发者，新的安全过滤器频繁误判合法代码，降低了生产力和对模型的信任。 Pro 和 Max 订阅用户在 7 月 7 日前仅能使用每周 50%的额度调用 Fable 5，之后该模型将不再包含在订阅中。当处理 C/C++、Rust 等底层代码或出现“漏洞”、“hook”等关键词时，模型会自动降级。

telegram · zaihuapd · 7月7日 18:01

**背景**: Claude Fable 5 是 Anthropic 最新的大型语言模型，以强大的编码和推理能力著称。美国政府此前对该模型实施了出口管制，近期才解除，从而允许重新上线。新的严格安全措施可能是对监管压力的回应，但让开发者感到不满。

**社区讨论**: 开发者普遍批评安全阈值过高，即便无害代码也会触发模型降级，导致实际编程任务中用处降低。许多人表示不满，认为 Anthropic 优先考虑安全性而非可用性，且未清晰沟通变更内容。

**标签**: `#Claude`, `#AI model`, `#safety`, `#developer experience`, `#pricing`

---