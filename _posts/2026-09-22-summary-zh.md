---
layout: default
title: "Horizon Summary: 2026-09-22 (ZH)"
date: 2026-09-22
lang: zh
---

> 从 37 条内容中筛选出 4 条重要资讯。

---

1. [小米发布 MiMo v2.6 全模态大模型家族，含 Flash 与 Pro 两个版本](#item-1) ⭐️ 8.0/10
2. [Cloudflare Python Workers 正式全面可用](#item-2) ⭐️ 8.0/10
3. [TypeSafe AI 发布 Jev：首个「System One」决策模型](#item-3) ⭐️ 8.0/10
4. [苹果发布首款 2 纳米芯片 M6，以及四芯片架构的 M5 Ultra](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [小米发布 MiMo v2.6 全模态大模型家族，含 Flash 与 Pro 两个版本](https://mimo.xiaomi.com/mimo-v2-6) ⭐️ 8.0/10

小米发布了 MiMo-V2.6 系列模型，包含两款原生全模态大语言模型：MiMo-V2.6-Flash 总参数 309B、激活参数 15B，以及旗舰级 MiMo-V2.6-Pro，总参数 1.02T、激活参数 42B。两个版本的权重均已以 MiMo-V2.6-Flash-RL 和 MiMo-V2.6-Pro-RL 的名义发布在 Hugging Face 上，同时小米还公开了训练期间的实时看板以及一份详尽的技术报告。 一家消费电子企业推出万亿参数级别的模型，说明前沿规模的大模型研发已不再局限于少数专业 AI 实验室，全球竞争进一步加剧。由于两个版本都采用稀疏 MoE 激活机制并主打性价比，这次发布也会进一步压低高性能模型 API 调用的价格曲线。 Pro 版本定位于小米迄今最强模型，而 Flash 主打智能、效率与成本之间的最佳平衡；在 OpenRouter 上，MiMo-V2.6-Pro 的价格约为每百万输入 token 0.435 美元、每百万输出 token 0.87 美元。值得注意的 headline 参数指的是包含全部专家在内的总容量，而非每 token 实际使用的算力，这正是 1.02T 的模型在推理时只需激活 42B 参数的原因。

hackernews · volf_ · 9月21日 20:12 · [社区讨论](https://news.ycombinator.com/item?id=49792730)

**背景**: 混合专家（MoE）模型会在检查点中保存许多彼此独立的“专家”子网络，因此总参数量反映的是全部存储容量，而激活参数量只反映处理单个 token 时实际用到的专家与共享组件。这样模型可以拥有极大的显存占用与知识容量，同时把每 token 的计算量（也就是推理成本）压到远低于同等规模的稠密模型。所谓原生全模态，是指模型从一开始就支持文本、图像、音频等多种输入模态，而不是事后外挂独立模块。训练透明度——公开训练数据细节、代码、看板或技术报告——如今已成为衡量“真正开放模型”的争议性标准，也与《欧盟人工智能法案》等监管要求日益相关。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mimo.xiaomi.com/mimo-v2-6">MiMo - V 2 . 6 | Xiaomi</a></li>
<li><a href="https://openrouter.ai/xiaomi/mimo-v2.6-pro">MiMo - V 2 . 6 -Pro - API Pricing & Providers | OpenRouter</a></li>
<li><a href="https://sebastianraschka.com/faq/docs/mixture-of-experts.html">Mixture-of-Experts (MoE) vs. Dense LLMs - Sebastian Raschka</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍赞赏小米的透明度：有人表示训练期间的实时看板与详尽的技术报告是极佳的学习工具，也有人提醒这更多是“透明”而非完整意义上的“开放”（即开放权重与开放数据）。多位用户表示如今对中国模型的期待高于美国模型，主要理由是价格实惠；还有人认为凭借电力与电网建设，中国在长期 AI 竞赛中可能胜出；另有用户用生成鹈鹕 SVG 的方式实测模型，并直接给出了 Hugging Face 上的具体检查点链接。

**标签**: `#AI`, `#LLM`, `#Xiaomi`, `#Open Models`, `#Model Release`

---

<a id="item-2"></a>
## [Cloudflare Python Workers 正式全面可用](https://blog.cloudflare.com/python-workers-ga/) ⭐️ 8.0/10

Cloudflare 宣布 Python Workers 正式全面可用（GA），这一基于 Pyodide 的运行时让开发者能在 Workers 边缘无服务器平台上运行 Python，标志着该功能结束公测阶段。此次发布强调通过 PEP 783（PyEmscripten 平台标签）实现标准化的包处理机制，并指出相关上游贡献使 Requests 等 HTTP 客户端能够在 WebAssembly 环境中直接走 JavaScript 的 fetch API。 Python 是无服务器工作负载中使用最广泛的语言之一，Cloudflare 边缘平台正式 GA 支持意味着 Python 开发者可以原生地构建全球分布式、低延迟的应用，而无需自行管理服务器。同时，通过 PEP 783 对 Emscripten wheel 进行标准化，也让整个“Python on WebAssembly”生态受益，因为为 Pyodide 构建的包如今可以用统一、可版本化的方式发布与解析。 其运行机制是 Cloudflare 为每个 Worker 创建新的 V8 isolate，并自动注入 Pyodide，同时借助 JSPI 支持让 HTTP 库通过 JS 的 fetch API 而非原始 socket 发起请求。社区成员仍将冷启动性能和包兼容性视为需要关注的实际瓶颈，因为基于 WebAssembly 的 Workers 历史上的启动时间比原生 isolate 更长。

hackernews · torutofu · 9月21日 13:38 · [社区讨论](https://news.ycombinator.com/item?id=49787142)

**背景**: Cloudflare Workers 是一个无服务器平台，在全球各地的数据中心以 V8 isolate 形式运行代码。Python Workers 依赖 Pyodide——一个开源发行版，它通过 Emscripten 工具链将 CPython 移植到 WebAssembly，使 Python 包（包括含 C、C++ 或 Rust 扩展的包）能够在类浏览器或边缘环境中运行。PEP 783 引入了带版本号的 pyemscripten 平台标签，让面向 Pyodide 的二进制 wheel 能以标准化方式构建、发布和安装，取代此前零散的打包方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pyodide.org/en/stable/project/about.html">What is Pyodide? — Version 314.0.7</a></li>
<li><a href="https://peps.python.org/pep-0783/">PEP 783 – Emscripten Packaging | peps.python.org</a></li>
<li><a href="https://developers.cloudflare.com/workers/languages/python/how-python-workers-work/">How Python Workers Work · Cloudflare Workers docs</a></li>

</ul>
</details>

**社区讨论**: 一位 urllib3 维护者补充背景称，urllib3 中的 Pyodide/Emscripten 支持以及后来的 JSPI 支持来自规模不小的上游贡献，资助给了外部贡献者而非维护者本人，维护者负责评审。Wasmer 创始人称赞 Cloudflare 取得的进展，并指出包支持已通过 PEP 783 标准化，但他表示最初提出的一些架构性问题依然存在；还有其他评论者询问冷启动表现，并调侃标题容易被误读成“Python 程序员被 AI 取代”。

**标签**: `#cloudflare`, `#webassembly`, `#python`, `#serverless`, `#pyodide`

---

<a id="item-3"></a>
## [TypeSafe AI 发布 Jev：首个「System One」决策模型](https://simonwillison.net/2026/Sep/21/jev/) ⭐️ 8.0/10

2026 年 9 月 15 日，TypeSafe AI 以限量早期访问形式发布了 Jev，并将其称为全新模型类别「System One 模型」中的首个产品——不过 Maggie Appleton 等人认为「决策模型（decision models）」是更贴切的叫法。Jev 接受文本或半结构化的「状态（state）」输入，返回的不再是文字，而是类型化的概率化结果：针对是/否问题（TypeSafe 称之为「Noul」问题）的伯努利式置信度浮点数、针对一组选项的概率分布，以及沿给定数值区间的浮点评分。 Jev 代表了 LLM 产品化方向的一次转变：它不再生成需要下游代码解析的文本，而是直接输出软件可直接消费的决策，因此天然适合垃圾信息识别、打标签、优先级排序和搜索重排等分类任务。其定价——每百万输入 token 0.042 美元、输出基本免费——低于 OpenAI GPT-5 Nano 的每百万 0.05 美元；同时该发布伴随由 DCVC 领投的 4000 万美元种子轮融资，说明投资人认为非生成式推理存在独立市场。 TypeSafe 宣称其延迟为 70–500 毫秒，并对问题并行求值，因此针对同一个状态提交大量问题与只提交一个问题所耗时间大致相当，API 可接受一个状态对象以及尽可能塞满上下文窗口的多个问题。代价在于透明度：Jev 只返回浮点数，不提供任何理由或 token 级别的解释，因此 Simon Willison 警告说，模型内部固有的偏见可能被隐藏且难以通过实验拆解，并建议不要将其用于给求职者排序之类的场景。

rss · Simon Willison · 9月21日 23:09

**背景**: 大多数大语言模型按输入和输出 token 计费，其中输出单价明显更高，并且通过生成文字来通信，程序随后还得解析这些文字——往往还要重试和做 schema 校验。Jev 去掉了这一步，把模型当成「前沿智能的函数调用」：输入非结构化状态，输出类型化的概率化决策。其命名借鉴了卡尼曼的「系统一/系统二」划分（快速直觉判断与缓慢审慎思考），而「Noul」一词由 TypeSafe 首席执行官在 Hacker News 上确认是 Bernoulli（伯努利）的缩写，指的是描述单次是/否结果及其概率 p 的伯努利分布。在重排这类检索场景中，Willison 将 Jev 与 BM25 搭配使用：先用这种经典的关键词排序函数取出约 100 个候选文档，再让 Jev 为每一个文档针对原始查询的相关性打分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jev_(AI_model)">Jev (AI model) - Wikipedia</a></li>
<li><a href="https://docs.typesafe.ai/introduction">Introduction - TypeSafe AI</a></li>
<li><a href="https://www.langchain.com/blog/building-a-harness-with-jev">What Is Jev? A Guide to TypeSafe AI ’s System One Model</a></li>

</ul>
</details>

**社区讨论**: 最受关注的讨论点是命名：Maggie Appleton 在 X 上主张「决策模型」比「System One」更合适，Willison 对此表示赞同，而 TypeSafe 首席执行官则在 Hacker News 上澄清「Noul」是 Bernoulli 的缩写。Willison 还提出了更实质的担忧：Jev 意味着向不透明黑箱机器学习的进一步倒退，因为一个浮点数无法说明究竟是哪些内容信号促成了该决策——这种对隐藏偏见的顾虑很可能会影响业界采用该模型时的谨慎程度。

**标签**: `#LLM`, `#AI`, `#decision-models`, `#probabilistic-reasoning`, `#TypeSafe AI`

---

<a id="item-4"></a>
## [苹果发布首款 2 纳米芯片 M6，以及四芯片架构的 M5 Ultra](https://t.me/zaihuapd/43965) ⭐️ 8.0/10

苹果发布首款 2 纳米芯片 M6，率先搭载于新款 Mac mini，配备 12 核 CPU、12 核 GPU、双 16 核神经网络引擎，统一内存带宽最高达 170GB/s。同时，苹果在新款 Mac Studio 中推出 M5 Ultra——这是 M 系列首个四芯片（quad-die）架构芯片，最高 36 核 CPU、80 核 GPU、512GB 统一内存，内存带宽达 1.2TB/s，比 M3 Ultra 高出约 50%。 M6 标志着苹果正式进入 2 纳米世代，有望在其最畅销的 Mac 产品线上显著提升每瓦性能；而四芯片架构的 M5 Ultra 则把统一内存容量推到以往需要独立显卡或服务器才能达到的工作站与本地 AI 级别。两者共同表明，苹果正把芯片级整合能力——尤其是内存带宽和端侧 AI——作为对抗 x86 与 Windows on ARM 竞品的核心差异化优势。 苹果尚未公布跑分或详细芯片图，因此其性能主张主要建立在核心数量与带宽数据之上：M5 Ultra 通过升级版 UltraFusion 互连技术把两颗“双芯片”的 M5 Max 桥接在一起，成为苹果迄今规模最大、性能最强的芯片。与所有制程命名一样，“2 纳米”是营销名称而非字面上的物理尺寸，实际性能提升还取决于晶体管架构与互连设计。

telegram · zaihuapd · 9月21日 16:32

**背景**: 苹果自研芯片由台积电代工，转向 2 纳米级制程之所以重要，是因为该级别节点通常采用环绕栅极（GAA）纳米片晶体管，取代此前节点使用的 finFET 结构，从而带来更好的速度与能效。苹果 M 系列分为基础版、Pro、Max 和 Ultra 多个层级，其中 Ultra 一贯是通过 UltraFusion 封装技术把两颗 Max 芯片融合而成，因此“四芯片”Ultra 是一次值得注意的封装突破。统一内存意味着 CPU、GPU 与神经网络引擎共享同一块高带宽内存，这正是带宽与最大容量对 AI 工作负载如此关键的原因。神经网络引擎是苹果自研的专用神经网络处理单元（NPU），最早于 2017 年随 A11 Bionic 推出，用于在设备端加速机器学习任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://au.pcmag.com/processors/119512/apple-m5-ultra-and-m6-silicon-explained-2nm-tech-quad-die-chips-promise-macs-massive-ai-muscle">Apple M5 Ultra and M6 Silicon Explained: 2nm Tech, Quad-Die Chips Promise Macs Massive AI Muscle</a></li>
<li><a href="https://en.wikipedia.org/wiki/2_nm_process">2 nm process - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Neural_Engine">Neural Engine - Wikipedia</a></li>

</ul>
</details>

**标签**: `#Apple Silicon`, `#Hardware`, `#Semiconductor`, `#Chip Design`, `#Mac`

---