---
layout: default
title: "Horizon Summary: 2026-08-25 (ZH)"
date: 2026-08-25
lang: zh
---

> 从 39 条内容中筛选出 8 条重要资讯。

---

1. [英伟达 Vera Rubin NVL72 首测：吞吐提升 30 倍、成本降低 35 倍](#item-1) ⭐️ 9.0/10
2. [FDA 批准首款可穿戴设备，持续监测酮体和血糖](#item-2) ⭐️ 8.0/10
3. [苹果发布 M6 和 M5 Ultra，性能与 AI 算力大幅跃升](#item-3) ⭐️ 8.0/10
4. [OpenAI 的 Jalapeño 芯片宣称能效优于英伟达 Blackwell](#item-4) ⭐️ 8.0/10
5. [苹果发布搭载 M5 Max 与 M5 Ultra 的新 Mac Studio，主打本地 AI](#item-5) ⭐️ 8.0/10
6. [Nitter 收到停止函后全面下线](#item-6) ⭐️ 8.0/10
7. [Firefox 157 将在所有平台默认启用 JPEG XL](#item-7) ⭐️ 8.0/10
8. [SpaceX 正式宣布在路易斯安那州设立 Starbase LA 发射场](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [英伟达 Vera Rubin NVL72 首测：吞吐提升 30 倍、成本降低 35 倍](https://blogs.nvidia.com/blog/vera-rubin-nvl72-efficiency-ai-agents/) ⭐️ 9.0/10

英伟达首次公布了新一代机柜系统 Vera Rubin NVL72 的片上实测数据：运行 DeepSeek-V4-Pro 编码智能体时，每兆瓦吞吐量较 GB300 最高提升 30 倍，每百万 Token 成本最高下降 35 倍。同期还宣布推理加速芯片 Groq 3 LPX 全面投产、推出智能体专用 Vera CPU，并披露 SpaceX 的部署计划。 这项基准测试表明，英伟达新一代平台能在 AI 推理效率上带来数量级的提升，直接回应了智能体 AI 工作负载对成本和延迟的压力。同时这也加剧了与 AMD 等对手的竞争，使英伟达有望主导接下来基于智能体的应用浪潮。 Vera Rubin NVL72 将 72 颗下一代 Rubin GPU 和 36 颗 Vera CPU 集成于一个液冷机柜内，通过 NVLink 6 互联，计算托盘采用无电缆、无风扇设计。Groq 3 LPX 加速器运行 Gemma 4 31B 时可达到每秒 3400 个 Token，而 Vera CPU 的效率和速度分别是传统机架级 CPU 的两倍和 1.5 倍。

telegram · zaihuapd · 8月25日 14:48

**背景**: Vera Rubin 是英伟达面向智能体 AI 和强化学习设计的下一代数据中心平台，采用机架级架构将 GPU、CPU 和加速器整合在一起。NVL72 版本通过 NVLink 6 将 72 颗 Rubin GPU 和 36 颗 Vera CPU 连接为一块巨大的虚拟 GPU，从而简化大规模模型的训练与推理。英伟达将该平台定位为面向代码生成、工具使用和沙箱执行等既要求高吞吐又要求低延迟的工作负载。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/data-center/technologies/rubin/">Infrastructure for Scalable AI Reasoning | NVIDIA Vera Rubin Platform</a></li>
<li><a href="https://nvidianews.nvidia.com/news/nvidia-groq-3-lpx-now-in-full-production-with-world-class-speed-for-agentic-ai">NVIDIA Groq 3 LPX Now in Full Production With World-Class ...</a></li>
<li><a href="https://nvidianews.nvidia.com/news/nvidia-launches-vera-cpu-purpose-built-for-agentic-ai">NVIDIA Launches Vera CPU, Purpose-Built for Agentic AI | NVIDIA Newsroom</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#Vera Rubin`, `#AI hardware`, `#DeepSeek`, `#inference`

---

<a id="item-2"></a>
## [FDA 批准首款可穿戴设备，持续监测酮体和血糖](https://www.fda.gov/news-events/press-announcements/fda-authorizes-first-wearable-device-continuously-monitors-both-ketone-levels-and-blood-sugar) ⭐️ 8.0/10

美国 FDA 已授权首款可穿戴设备，可同时持续监测酮体水平和血糖。该授权让糖尿病患者能够通过一个传感器，实时查看这两项代谢指标。 这是代谢健康领域的一个重要里程碑，因为同时监测血糖和酮体可帮助糖尿病患者（尤其是 1 型糖尿病患者）更早发现危险的糖尿病酮症酸中毒。它也为未来可同时追踪多种生物标志物的可穿戴设备打开了大门。 该设备是一种佩戴在身上的传感器式可穿戴设备，而非智能手表，其工作原理与现有的连续血糖监测仪类似。酮体监测主要对处于生酮状态或存在酮症酸中毒风险的人更有意义，因此该设备对普通糖尿病患者的日常价值可能因饮食和血糖控制情况而异。

hackernews · sunnynagra · 8月25日 19:07 · [社区讨论](https://news.ycombinator.com/item?id=49439017)

**背景**: 酮体是人体分解脂肪供能时产生的酸性物质；对糖尿病患者来说，酮体水平过高可能提示糖尿病酮症酸中毒（DKA），这是一种可能危及生命的紧急情况。连续血糖监测仪（CGM）通过皮下小传感器测量葡萄糖水平，而连续酮体监测仪（CKM）使用类似的传感器技术来测量组织间液中的酮体。FDA 的此次授权表明，该设备作为新型医疗器械已满足该机构的监管标准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.diabetes.org.uk/about-diabetes/looking-after-diabetes/ketones-and-diabetes">What are ketones ? | Ketones in diet | Diabetes UK</a></li>
<li><a href="https://www.healthcentral.com/news/type-1-diabetes/continuous-ketone-monitoring">Why Experts Say Continuous Ketone Monitoring Is the Next Frontier in Diabetes Care</a></li>
<li><a href="https://www.fda.gov/medical-devices/products-and-medical-procedures/device-approvals-and-clearances">Device Approvals and Clearances | FDA</a></li>

</ul>
</details>

**社区讨论**: 评论者的态度总体是谨慎乐观。有人欢迎这一新工具，尤其是对 1 型糖尿病儿童有帮助；也有人质疑酮体数据对血糖控制较好的普通糖尿病患者有多大用处，并呼吁解决医保报销问题。还有人对无创检测的准确性持怀疑态度，其中一位评论者还附上了一个警示视频。

**标签**: `#healthcare`, `#wearables`, `#FDA`, `#diabetes`, `#medical-devices`

---

<a id="item-3"></a>
## [苹果发布 M6 和 M5 Ultra，性能与 AI 算力大幅跃升](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/) ⭐️ 8.0/10

2026 年 8 月 25 日，Apple 发布了 M6 和 M5 Ultra 芯片。M6 是 Apple 首款 2nm 制程芯片，配备 12 核 CPU、12 核 GPU 和双 16 核神经引擎；M5 Ultra 则通过 UltraFusion 采用四芯片架构，成为 Apple 迄今最强大的芯片。 这一发布标志着 Apple Silicon 在性能和 AI 算力上的重大飞跃，可能重塑高端 Mac 和 Studio 的工作负载能力。它会给 PC 和 AI 硬件竞争对手带来压力，并影响 Apple 未来 AI 能力 Mac 的产品路线图。 M6 配备 12 核 CPU 和 12 核 GPU；M5 Ultra 是首款采用四芯片架构的 M 系列芯片，通过 UltraFusion 连接两颗双芯片封装的 M5 Max。UltraFusion 将芯片间带宽提升至 4.4TB/s 以上，连接密度提升 6 倍以上。

hackernews · interpol_p · 8月25日 13:01 · [社区讨论](https://news.ycombinator.com/item?id=49433292)

**背景**: Apple Silicon 是 Apple 基于 ARM 架构的片上系统处理器系列，从 2020 年的 M1 开始取代 Mac 中的 Intel 芯片。M1 系列从基础款 M1 扩展到 M1 Pro、M1 Max 和 M1 Ultra，每一档都增加核心数和带宽。后续的 M2 及更新世代延续了这一模式，而 M6 宣布转向 2nm 制程工艺，M5 Ultra 则引入了四芯片设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/">Apple introduces M6 and M 5 Ultra for a big leap in... - Apple</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apple_M6">Apple M6 - Wikipedia</a></li>
<li><a href="https://www.macrumors.com/2026/08/25/apple-debuts-m5-ultra/">Apple Debuts M 5 Ultra as Most Powerful Chip Ever - MacRumors</a></li>

</ul>
</details>

**社区讨论**: 评论者流露出怀旧情绪，将这一时刻比作 1990 年代末 Apple 性能跃进的“滑稽”景象，并指出即使考虑涨价，按通胀调整后的 Mac 价格也接近最初的 Mac SE 时代。还有人讨论顶配 M5 Ultra Studio 的高昂价格，部分人引用传闻称 Apple 将跳过 M6 Pro、M6 Max 和 M6 Ultra，集中精力开发面向 AI 的 M7 芯片。

**标签**: `#Apple Silicon`, `#Hardware`, `#AI Compute`, `#Performance`

---

<a id="item-4"></a>
## [OpenAI 的 Jalapeño 芯片宣称能效优于英伟达 Blackwell](https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia) ⭐️ 8.0/10

OpenAI 公布了其首款自研推理 ASIC（与博通合作开发）Jalapeño 的首批基准测试结果。在 SemiAnalysis 公开的 InferenceX 测试套件上，这款额定 700W 的芯片相比英伟达 GB200 和 GB300 整机系统，每千瓦吞吐量高出 1.5 至 1.9 倍，端到端延迟低 1.7 至 3.6 倍，且实际持续功耗约 550W。 这些结果挑战了英伟达在 AI 推理领域的主导地位，并可能对 CUDA 生态构成压力，因为定制 ASIC 能实现更好的每瓦性能和更低的总拥有成本。如果 OpenAI 等超大规模厂商在规模化部署中验证了定制推理芯片的价值，AI 硬件竞争格局可能被重塑，并加速从通用 GPU 转向专用芯片。 基准测试覆盖 GPT-OSS 120B、DeepSeek R1 670B 和 Kimi K2.5 1T 三款模型，芯片采用单 token 预测（STP）架构，没有使用多 token 预测或投机解码等技巧。OpenAI 未与英伟达刚开始出货的 Vera Rubin 对比，并明确该芯片不用于训练。公司计划今年年底前在自有算力设施部署 Jalapeño，第二代正在深入开发，第三代正在设计中。

hackernews · Semianalysis · 8月25日 14:06 · [社区讨论](https://news.ycombinator.com/item?id=49434378)

**背景**: Jalapeño 是一款专为 AI 推理设计的专用集成电路（ASIC），由 OpenAI 与博通合作开发。与既能训练又能推理的通用英伟达 GPU 不同，ASIC 针对更窄的工作负载做了深度优化。英伟达的 Blackwell（GB200/GB300）和即将推出的 Rubin 平台目前主导 AI 硬件市场；Rubin 预计相比 Blackwell 可实现约 10 倍的每单位能量代理型 AI 吞吐量。在大规模 AI 服务中，每兆瓦吞吐量和总拥有成本是决定定制芯片能否取代现有 GPU 的关键指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/tech-industry/semiconductors/openai-says-its-jalapeno-chip-beats-nvidias-gb300-in-first-published-benchmarks">OpenAI’s 700W Jalapeño ASIC outpaces 1,400W Nvidia flagship GPU — claims up to 1.9x throughput per kilowatt and 3.6x lower latency, co-developed with Broadcom | Tom's Hardware</a></li>
<li><a href="https://wccftech.com/openais-first-gen-jalapeno-asic-blows-competition-out-of-the-park-performs-1-5x-to-1-9x-more-work-per-kilowatt-than-nvidias-blackwell-chips-while-threatening-the-cuda-moat/">OpenAI's First-Gen Jalapeno ASIC Blows Competition Out Of The Park, Performs 1.5x to 1.9x More Work Per Kilowatt Than NVIDIA's Blackwell Chips, While Threatening The CUDA Moat</a></li>
<li><a href="https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/">Inside NVIDIA Rubin GPU Architecture: Powering the Era of ...</a></li>

</ul>
</details>

**社区讨论**: 评论者将这场推理芯片竞赛比作早期 3dfx/Riva/PowerVR 图形芯片大战，认为 OpenAI 可以用这些基准数据作为向英伟达争取更有利合同的筹码，并指出尽管进步很快，人脑的能效仍约为 AI 推理的 22 倍。还有人质疑 SemiAnalysis 的可信度，并猜测 OpenAI 和 Anthropic 最终会把模型权重直接固化到定制芯片中。

**标签**: `#AI hardware`, `#OpenAI`, `#semiconductors`, `#Nvidia`, `#custom chips`

---

<a id="item-5"></a>
## [苹果发布搭载 M5 Max 与 M5 Ultra 的新 Mac Studio，主打本地 AI](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) ⭐️ 8.0/10

苹果推出了搭载 M5 Max 和 M5 Ultra 芯片的新款 Mac Studio，宣称内存带宽最高可达 1.2TB/s，针对本地 AI 工作负载。这一发布凸显了苹果对在设备端直接运行大型 AI 模型的日益重视。 此次发布巩固了苹果在本地 AI 硬件竞赛中的地位，为开发者提供了一个高带宽选项，无需担心云延迟或数据隐私即可运行前沿规模模型。这也标志着苹果愈发针对端侧生成式 AI 优化其芯片的战略转变。 M5 Ultra 采用四芯片（quad-die）架构，通过 4.4TB/s 的芯片间互连将两枚 M5 Max 芯片连接起来，最终实现 1.2TB/s 的统一内存带宽。价格颇为高昂——据称 256GB 内存版本约 1 万美元，512GB 版本预计 10 月上市，同时该机支持 120Gb/s 的 Thunderbolt 5 外接接口。

hackernews · interpol_p · 8月25日 13:03 · [社区讨论](https://news.ycombinator.com/item?id=49433316)

**背景**: 苹果 M 系列芯片将 CPU、GPU 和神经引擎整合在统一内存架构中，让 GPU 能够访问容量大且速度快的共享内存池。在本地 AI 场景下，Ollama、LM Studio 等工具可让用户在 macOS 上运行开放权重模型，而内存带宽是大型模型推理的关键瓶颈。Mac Studio 是一款面向专业用户的桌面工作站，无需塔式 PC 的噪音和体积即可提供持续高性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/">Apple introduces M6 and M5 Ultra for a big leap in ...</a></li>
<li><a href="https://www.macworld.com/article/2973459/2026-mac-studio-m5-release-date-specs-price-rumors.html">New Mac Studio M5 Max and M5 Ultra: Everything you need to ...</a></li>

</ul>
</details>

**社区讨论**: 评论区观点不一：有人对苹果加码‘本地 AI’感到兴奋，也有人对价格以及处理超万亿参数模型时 1.2TB/s 带宽的限制表示疑虑。粗略估算显示，对于闪存量化的 DeepSeek V4，M5 Ultra 预填充速度或超 1000 tokens/s、生成速度超 50 tokens/s，接近云服务水平。多位用户指出新闻稿中‘最高可达（up to）’出现了 46 次；还有人开始重新考虑 MacBook Pro——或许 Studio 更适合作为接驳显示器的主力机。

**标签**: `#Apple`, `#Mac Studio`, `#M5 Ultra`, `#Local AI`, `#Hardware`

---

<a id="item-6"></a>
## [Nitter 收到停止函后全面下线](https://github.com/zedeus/nitter/issues/1442) ⭐️ 8.0/10

Nitter 的维护者宣布，该项目收到了停止函（很可能来自 X/Twitter），所有 Nitter 实例已在可预见的将来暂停运行，目前正在寻求法律建议。开发工作也已暂时停止。 Nitter 是一个广受欢迎、注重隐私的 Twitter 替代前端，许多人用它来浏览推文而无需担心被追踪、看到广告或注册账号。这起法律行动可能会为平台如何对待第三方隐私工具开创先例，并影响依赖这些工具获取公开信息的用户。 Nitter 仅支持浏览推文、个人资料和搜索，不允许登录或发布内容。根据 nitter.net 上的消息，维护者“正在寻求法律建议，暂时不会对细节发表评论”。其他公共实例，如 xcancel.com，也已关闭。

hackernews · Banditoz · 8月25日 17:08 · [社区讨论](https://news.ycombinator.com/item?id=49437283)

**背景**: Nitter 是一个免费且开源的 Twitter 替代前端，它在服务器端抓取平台内容，让用户无需被追踪、看不到广告，也无需注册账号，即可查看个人资料、推文、回复和媒体内容。像 Nitter 这样的替代前端，目的是在访问依赖广告和数据的社交媒体平台时保护用户隐私。Nitter 曾提供大量公共实例和自托管实例，成为注重隐私的用户以及网络受限地区用户的常用工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Nitter">Nitter</a></li>
<li><a href="https://nitter.net/">nitter.net</a></li>

</ul>
</details>

**社区讨论**: 用户们对所有实例下线表示失望，有人提到他们依赖 Nitter 来关注仍然主要通过 X 发布信息的组织（比如当地议会）。一些人希望这次关停能促使大家离开 X，但也有人对此持怀疑态度。同时，也有声音赞赏那些支持社区项目而非发出法律威胁的维护者，整体情绪中弥漫着对未来的不确定感。

**标签**: `#Nitter`, `#Twitter`, `#legal`, `#open-source`, `#privacy`

---

<a id="item-7"></a>
## [Firefox 157 将在所有平台默认启用 JPEG XL](https://groups.google.com/a/mozilla.org/g/dev-platform/c/3YMV4MS34KA?pli=1) ⭐️ 8.0/10

Mozilla 在开发平台的邮件列表中宣布，Firefox 157 将在所有平台默认启用 JPEG XL 图像支持。这标志着该格式在浏览器普及过程中迈出了重要一步。 这一决定是对 JPEG XL 的重要推动，使网站有更强的动力开始以该格式提供内容。它也可能促使谷歌和苹果等其他浏览器厂商重新审视自己对 JPEG XL 的支持。 实现基于 Rust 编写的 jxl-rs 库（Chromium 也在使用），而不是最初的 C++ libjxl。此前 Firefox 仅通过配置开关提供 JPEG XL 支持，而新的默认设置适用于所有受支持的平台。

hackernews · yboris · 8月25日 17:55 · [社区讨论](https://news.ycombinator.com/item?id=49437946)

**背景**: JPEG XL（ISO/IEC 18181）是由联合图像专家组（JPEG）、Google 和 Cloudinary 共同开发的下一代图像格式，是一个自由开放的标准。它同时支持有损和无损压缩，并提供比传统 JPEG 更好的压缩效率和响应式网页特性。各浏览器对这一格式的采用进展缓慢且不一致，因此 Firefox 默认支持成为一个重要里程碑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/JPEG_XL">JPEG XL - Wikipedia</a></li>
<li><a href="https://jpeg.org/jpegxl/">JPEG - JPEG XL</a></li>

</ul>
</details>

**社区讨论**: 评论者大多对这一举措表示欢迎，并提到 Chromium 也在使用基于 Rust 的 jxl-rs 库，同时关注苹果将如何对待其已采用的 C++ libjxl。有人提出了实际担忧，例如一些网站和上传表单不支持 JPEG XL，还有人质疑旧版 Firefox 上的 Windows 7/8 用户能否获得该特性。也有评论者好奇到 2026 年还有多少开发者没听说过 JPEG XL。

**标签**: `#browsers`, `#jpeg-xl`, `#firefox`, `#image formats`, `#web standards`

---

<a id="item-8"></a>
## [SpaceX 正式宣布在路易斯安那州设立 Starbase LA 发射场](https://www.spacex.com/sites/starbase-la) ⭐️ 8.0/10

SpaceX 已正式宣布将在路易斯安那州弗米利恩堂区佩坎岛附近建设新的高频次 Starship 发射场 Starbase LA。预计 2027 年开工，目标是在 2029 年进行首次发射。 据报道，这将是路易斯安那州历史上最大的资本投资，也使 SpaceX 在得克萨斯州基地之外拥有第二个大型轨道发射综合体。该发射场将支持高频次发射 Starlink 卫星和轨道数据中心，可能重塑当地经济乃至整个美国发射行业的格局。 该项目被描述为一座耗资 1000 亿美元、拥有多达 10 个发射台的航天港，将专注于 Starship/Super Heavy 货运任务。据报道，该地点有助于进入太阳同步轨道，这对对地观测和侦察卫星很有价值。

hackernews · bilsbie · 8月25日 16:37 · [社区讨论](https://news.ycombinator.com/item?id=49436822)

**背景**: Starbase 是 SpaceX 位于得克萨斯州南部的现有工业综合体和火箭发射设施，该公司在此建造、测试和发射 Starship 火箭。路易斯安那州的发射场代表着这一运营模式向新州的扩展。太阳同步轨道常用于需要稳定光照条件的卫星，而从这一纬度发射可为这类任务提供较高的效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.spacex.com/sites/starbase-la">SpaceX - Starbase , LA</a></li>
<li><a href="https://finance.yahoo.com/markets/stocks/article/spacex-unveils-starbase-launch-site-in-louisiana-moves-up-orbital-data-center-launch-timeline-142539276.html">SpaceX unveils Starbase launch site in Louisiana , moves up orbital...</a></li>
<li><a href="https://interestingengineering.com/space/elon-musk-spacex-starbase-louisiana">SpaceX to build world's biggest $100B spaceport with 10 launchpads</a></li>

</ul>
</details>

**社区讨论**: 评论者总体上持积极态度，强调这可能为美国最贫困的沿海地区之一带来建筑和技工就业机会。但也有人对马斯克的时间表表示怀疑，还有人指出页面文案存在重复内容，并质疑火焰沟槽的设计——马斯克此前曾批评过这种设计。

**标签**: `#SpaceX`, `#aerospace`, `#infrastructure`, `#Louisiana`

---