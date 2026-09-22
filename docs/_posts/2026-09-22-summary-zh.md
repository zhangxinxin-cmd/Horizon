---
layout: default
title: "Horizon Summary: 2026-09-22 (ZH)"
date: 2026-09-22
lang: zh
---

> 从 39 条内容中筛选出 10 条重要资讯。

---

1. [OpenAI 发布 GPT-6 Sol 与 Luna 模型家族](#item-1) ⭐️ 9.0/10
2. [Anthropic 发布 Claude Opus 5.5，API 价格下调](#item-2) ⭐️ 9.0/10
3. [五角大楼：过度依赖 AI 导致伊朗学校遭导弹袭击](#item-3) ⭐️ 9.0/10
4. [Anthropic 发布 Claude Opus 5.5，OpenAI 推出 GPT-6 Sol 与 Luna 掀起价格战](#item-4) ⭐️ 9.0/10
5. [vLLM v0.30.0 发布：762 次提交，新增 DeepSeek-V4.1-Flash 支持与 GPU 权重缓存守护进程](#item-5) ⭐️ 8.0/10
6. [黑客声称窃取了全部 FBI 员工数据](#item-6) ⭐️ 8.0/10
7. [GrapheneOS 有望在 2027 年实现设备预装](#item-7) ⭐️ 8.0/10
8. [25 位菲尔兹奖得主警告 AI 或与数学研究目标错位](#item-8) ⭐️ 8.0/10
9. [DeepSeek 与清华发布 DSec 沙箱平台技术报告](#item-9) ⭐️ 8.0/10
10. [DeepSeek 本周将向联合国安理会通报 AI 风险](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 发布 GPT-6 Sol 与 Luna 模型家族](https://openai.com/index/introducing-gpt-6-sol-and-luna/) ⭐️ 9.0/10

OpenAI 正式发布了新一代旗舰模型家族 GPT-6 Sol 与 Luna，其中 Luna 档位的价格大约只有上一代 GPT-5.6 Luna 的一半。该消息迅速成为 Hacker News 上最热门的话题之一，获得 1076 分和 561 条评论。 OpenAI 推出新旗舰模型家族会重新塑造 AI 开发的成本结构：Luna 档位价格减半，直接降低了大规模运行智能体和长上下文任务的成本。同时它也重新定义了对编码智能体订阅套餐与 API 定价的比较基准，从独立开发者到选择默认模型的平台团队都会受到影响。 Sol 似乎是家族中能力更强的高端档位（社区成员提到了 "GPT-6 Sol max" 版本），而 Luna 则是更便宜、吞吐更高的选择。当前市场上不同档位模型的 token 价格差异巨大，输出 token 的成本通常是输入 token 的数倍，因此 Luna 价格减半对持续运行的智能体工作负载影响尤为显著。

hackernews · OfficialTurkey · 9月22日 18:00 · [社区讨论](https://news.ycombinator.com/item?id=49805509)

**背景**: OpenAI 一直以数字代号迭代 GPT 系列，每一代旗舰发布往往都会成为开发者构建 LLM 应用时的默认参照。API 通常按每百万 token 计费，并区分输入与输出价格，因此某个档位的成本直接决定智能体工作流是否具备经济可行性。Anthropic 的 Claude Code 与 OpenAI 的 Codex 等编码智能体以订阅套餐形式出售（例如 "20x" 档），其使用限额本质上仍由底层每 token 成本决定，所以模型层一旦降价，套餐对比结果会立刻改变。Hacker News 则是备受关注的科技论坛，此类发布往往在数小时内就会被从业者反复审视。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://vorplabs.com/coding-agents/usage-limits">Coding-Agent Usage Limits Compared: Claude Code, Cursor, Copilot, Codex ...</a></li>
<li><a href="https://dev.to/sam_novak_574b07811e18495/ai-coding-agent-usage-limits-what-actually-resets-and-when-7h4">AI coding agent usage limits: what actually resets, and when</a></li>
<li><a href="https://benchlm.ai/blog/posts/llm-token-pricing">How LLM Token Pricing Works: A Complete Guide to API Costs in ...</a></li>

</ul>
</details>

**社区讨论**: 评论主要集中在降价上，simonw 称 Luna 价格只有 GPT-5.6 Luna 的一半是 "一件大事"，并贴出了 GPT-6 Luna、Sol 与 Astra 的鹈鹕图对比。jeffnash 对比了 Claude Code 20x 与 Codex Pro 20x，认为 Codex 凭借使用限额、重置机制以及 ChatGPT 近乎不计量的使用量而大幅胜出。m_fayer 表示自己已经对上一代 5.6 Sol 产生了依赖，觉得它像一位合拍的同事，担心继任者虽然技术上更强却不再那么顺手；leokennis 则认为从普通用户角度看，ChatGPT Plus 自 5.6 起就已经近乎无限量且 "开箱即用"。

**标签**: `#AI`, `#LLM`, `#OpenAI`, `#model-release`, `#developer-tools`

---

<a id="item-2"></a>
## [Anthropic 发布 Claude Opus 5.5，API 价格下调](https://www.anthropic.com/claude-opus-5-5) ⭐️ 9.0/10

Anthropic 发布了新一代旗舰模型 Claude Opus 5.5，这也是该公司公开呼吁“为前沿发展设定节奏”（pacing the frontier）之后的首个版本。此次更新强调更自然的沟通表达，并全面下调 API 价格：每百万 token 的输入价格从 5 美元降至 4 美元，输出从 25 美元降至 20 美元，缓存读取从 0.50 美元降至 0.20 美元，缓存写入从 6.25 美元降至 5 美元。 据称 Opus 5 是 OpenRouter 上消费额最高的模型，因此 Opus 级别 token 降价会直接降低开发者和企业运行长时间 agent 与编码任务成本。此次发布还让关于前沿 AI 发展节奏的争论更加激烈——一家刚刚呼吁克制的公司，几天后就以更低价格推出了能力更强的模型。 Anthropic 把写作风格的改进同时定位为可用性和安全性收益，认为更清晰、结论前置的回答让模型的工作更容易被跟踪和检查，早期测试者据称评价它“写起来像我自己的风格”。公司还把该模型定位为更适合长时间协作的工作伙伴，不过 DeepSeek 等竞争对手提供了便宜得多的替代方案，一些用户认为已足够好用。

hackernews · km144 · 9月22日 16:29 · [社区讨论](https://news.ycombinator.com/item?id=49803892)

**背景**: Anthropic 是一家 AI 安全与研究公司，由前 OpenAI 员工于 2021 年创立，Claude 是其旗舰大语言模型系列，按能力分为 Haiku（最小）、Sonnet（中等）和 Opus（最强）三档。“前沿”（frontier）模型指当前最先进的通用 AI 系统，训练成本极高，因此每百万 token 的 API 价格一直备受关注。提示缓存（prompt caching）即复用此前已处理的上下文，是 agent 类工作负载的关键成本杠杆，所以缓存读取和写入的降价与名义 token 价格同样重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/">Home \ Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_Opus">Claude Opus</a></li>
<li><a href="https://en.wikipedia.org/wiki/Frontier_AI">Frontier AI</a></li>

</ul>
</details>

**社区讨论**: Hacker News 讨论帖（约 1112 分、770 条评论）主要围绕两种反应：一是对降价的欢迎，用户逐项列出每百万 token 的新旧价格对比；二是对 Anthropic 安全叙事的质疑，一条高赞评论指出，公告开篇提到“为前沿设定节奏”，但后面全是用具体数字证明恰恰相反。也有人表示用 DeepSeek v4.1 这类更便宜的竞品就已满足，还有评论者分享了在模型 low、medium、high、xhigh 各档思考级别下生成“鹈鹕”的标准测试图。

**标签**: `#AI`, `#LLM`, `#Anthropic`, `#Claude Opus`, `#API Pricing`

---

<a id="item-3"></a>
## [五角大楼：过度依赖 AI 导致伊朗学校遭导弹袭击](https://www.bloomberg.com/graphics/2026-iran-school-attack/) ⭐️ 9.0/10

据报道，五角大楼的调查报告认定，过度依赖人工智能——尤其是 Palantir 的 Maven 目标筛选系统——是导致伊朗米纳卜一所学校遭导弹袭击的原因之一：过时的数据将该地点标注为伊斯兰革命卫队设施。报告认为，美国“未能履行一切可行努力去核实”该学校属于军事目标的义务，且这一失职“超出了单纯疏忽”。 这是首批直接把 AI 决策支持系统与平民死亡联系起来的官方结论之一，使“算法参与致命打击时由谁负责”以及“人在回路（human-in-the-loop）审查是否只是形式”的争论进一步升温。它可能影响军事 AI 的采购、目标选择条令，以及 Palantir 这类供应商和部署这些工具的政府所面临的法律责任。 细节显示问题出在数据而非自主性：米纳卜目标因信息过时而被打上错误标签，与其他候选目标一起输入 Maven，最终被输出为推荐打击对象；官员称部分用户误以为该系统会主动提示过时记录或情报矛盾。报告还指出，美国“在明知存在击中民用物体的重大风险、并对此持轻率态度的情况下，仍将该学校建筑作为打击目标”。

hackernews · devonnull · 9月22日 19:03 · [社区讨论](https://news.ycombinator.com/item?id=49806430)

**背景**: Maven（Project Maven）是美国国防部的一个项目，Palantir 是其重要承包商，它利用机器学习帮助分析人员在海量监视影像与情报中筛查信息，并生成目标推荐。在这类 AI 决策支持系统中，最终决定本应由人做出，即所谓“人在回路”（human-in-the-loop）原则；但批评者认为，当算法已经把选项收窄，人工复核很容易沦为走过场。至于能够在无人工控制下自主选定并攻击目标的致命性自主武器系统（LAWS），目前联合国仍在讨论，并有人呼吁依国际法予以禁止。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lethal_autonomous_weapon">Lethal autonomous weapon - Wikipedia</a></li>
<li><a href="https://mwi.westpoint.edu/targeting-at-machine-speed-the-capabilities-and-limits-of-artificial-intelligence/">Targeting at Machine Speed: The Capabilities—and Limits—of ...</a></li>
<li><a href="https://opiniojuris.org/2026/04/13/beyond-anthropics-red-line-human-in-the-loop-and-the-illusion-of-legitimacy-in-ai-decision-support-systems/">Beyond Anthropic’s Red Line: Human - in - the - Loop and... - Opinio Juris</a></li>

</ul>
</details>

**社区讨论**: 评论区普遍怀疑“AI”本身并非真正的元凶：有人从报告细节出发认为根本问题在于人类决策的轻率，也有人指出，那些不了解 AI 局限的人把它当成了“终极分析师”。主流观点是，把决策权交给算法并不能免除人的责任——“AI 无法被送上法庭”——还有多位参与者质问五角大楼与 Palantir 为何都不承担责任，并把这种回应方式比作一次搞砸的 B2B SaaS 上线。

**标签**: `#AI ethics`, `#autonomous weapons`, `#military AI`, `#accountability`, `#AI safety`

---

<a id="item-4"></a>
## [Anthropic 发布 Claude Opus 5.5，OpenAI 推出 GPT-6 Sol 与 Luna 掀起价格战](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/) ⭐️ 9.0/10

同一天内，Anthropic 发布了 Claude Opus 5.5，约一小时后 OpenAI 又发布了两款前沿模型 GPT-6 Sol 和 GPT-6 Luna。GPT-6 Luna 的定价仅为每百万输入 token 0.10 美元、每百万输出 token 0.50 美元，是本就便宜的 GPT-5.6 Luna 的一半；GPT-6 Sol 定价为 2 美元/10 美元，Claude Opus 5.5 也降价至 4 美元/20 美元。 同日发布加上大幅降价，标志着前沿大模型厂商之间的价格战进一步升级，开发者能用上代成本的一小部分获得能力更强的模型。这也挤压了前一天刚以价格优势亮相的 Grok 4.7 和小米 MiMo v2.6 等竞争对手，并让 GPT-5.6 Terra 这类原本的高端档位几乎失去存在意义。 Simon Willison 指出，GPT-5.6 计划在 11 月涨价 25%，因此 GPT-6 实际上只有这些模型促销价的一半，而 GPT-5.6 Terra 的定价现已与 GPT-6 Sol 完全相同。他还提到 GPT-6 Luna 是 OpenAI 有史以来最便宜的模型之一，只有能力弱得多的 GPT-4.1 Nano（0.10 美元/0.40 美元）和 GPT-5 Nano（0.05 美元/0.40 美元）比它更低，且 Luna 的缓存输入价格低至每百万 token 0.01 美元。

rss · Simon Willison · 9月22日 23:46

**背景**: Simon Willison 是一位广受关注的开发者和评论者，他的博客往往是人们了解新 LLM 上手体验的第一站。他以一个刻意“不正经”的基准测试闻名：让每个新模型生成一幅“骑自行车的鹈鹕”SVG 图，用来比较不同版本以及不同思考强度下的视觉输出质量。前沿模型的定价通常按每百万 token 计算，分为输入、缓存输入和输出三档，其中缓存输入便宜得多，因为重复的提示前缀无需重新处理。此次发布节奏极快——就在前一天，Grok 4.7 与小米 MiMo v2.6 Flash/Pro 才刚刚上线——这反映出市场顶端已变得异常拥挤。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://simonwillison.net/2025/Jun/6/six-months-in-llms/">The last six months in LLMs, illustrated by pelicans on bicycles</a></li>
<li><a href="https://www.aimagicx.com/blog/ai-pricing-war-llm-cost-collapse-business-strategy-2026">The 2026 AI Price War Explained: How to Rebuild Your AI Stack When Everything Just Got 10x Cheaper | AI Magicx Blog | AI Magicx</a></li>
<li><a href="https://mimo.xiaomi.com/mimo-v2-6">MiMo-V2.6 | Xiaomi</a></li>

</ul>
</details>

**标签**: `#AI models`, `#LLM`, `#OpenAI`, `#Anthropic`, `#pricing`

---

<a id="item-5"></a>
## [vLLM v0.30.0 发布：762 次提交，新增 DeepSeek-V4.1-Flash 支持与 GPU 权重缓存守护进程](https://github.com/vllm-project/vllm/releases/tag/v0.30.0) ⭐️ 8.0/10

vLLM v0.30.0 正式发布，包含来自 315 位贡献者（其中 104 位是新贡献者）的 762 次提交，新增了对多个模型的支持，包括 DeepSeek-V4.1-Flash（在 SM100 上通过 FlashMLA V4.1 记录将整个 KV 缓存以 MXFP8 存储）、GLM-5.3-Flash、DeepSeek-V4-Flash-Vision-Exp、K2-Horizon、Cohere Compass 和 Bailing V3 VL，并新增了基于 AVX512/AMX 内核的 DeepSeek-V4 CPU 后端。该版本还引入了一个常驻的每 GPU 权重缓存守护进程，将量化后、经 TP 切分的权重保留在 GPU 显存中，使引擎重启时可通过 CUDA IPC 直接映射（`--load-format ipc_cache`），而无需从磁盘重新加载。 vLLM 是目前部署最广泛的开源大模型推理与服务引擎之一，因此如此规模的版本更新会立即影响大量生产环境。快速启动的权重缓存直接缩短了引擎重启时间，这对自动扩缩容、弹性服务和频繁换模型等场景至关重要；同时新增的模型支持以及对 Kimi K3、Qwen3.8-Flash-Next 的内核优化，也为部署这些架构的用户带来了可观的吞吐提升。 权重缓存守护进程目前已覆盖 FP4 检查点和多节点张量并行；该版本还加入了 Gumbel-max 水印生成与检测，支持按请求关闭，并通过双密钥方案与投机解码兼容。许多优化是特定于架构或模型的——例如 DeepSeek-V4 的 CPU 后端依赖 AVX512/AMX 稀疏 MLA 内核；只有在 NVIDIA 实现中移除 torch.compile 后，FP8 才能装进单张 GB300；另有若干 CUDA Graph 与稀疏 MLA 特性面向 SM100/Hopper 级 GPU。

github · khluu · 9月22日 05:20

**背景**: vLLM 是用于大语言模型服务的高吞吐开源引擎，最知名的是 PagedAttention——它把 KV 缓存按固定大小的块来管理，从而避免显存碎片。MLA（Multi-Latent Attention，多头潜在注意力）是 DeepSeek 提出的注意力变体，将 KV 缓存压缩为潜在表示；FlashMLA 则是针对现代 NVIDIA GPU 手工优化的解码内核。MXFP8 与 NVFP4 属于低精度“微缩放（microscaling）”格式，一组数值共享同一个指数，能以一定的精度代价降低显存占用与带宽需求，因此把整个 KV 缓存以 MXFP8 存储是一个值得关注的进展。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/MXFP8">MXFP8</a></li>
<li><a href="https://www.deepep.org/en/flashmla">FlashMLA</a></li>
<li><a href="https://newsletter.semianalysis.com/p/engrams-embedding-entendre-codesign">Engrams Embedding Entendre: Codesign for Efficient DRAM/SSD Offloading</a></li>

</ul>
</details>

**标签**: `#vllm`, `#llm-inference`, `#model-serving`, `#release`, `#gpu-optimization`

---

<a id="item-6"></a>
## [黑客声称窃取了全部 FBI 员工数据](https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees/) ⭐️ 8.0/10

一个黑客组织向 404 Media 声称自己入侵了 FBI，并获取了覆盖全部 FBI 员工的数据，在报道中号称“我们黑了 FBI”。当被问及是否要勒索该机构时，该组织代表表示“我们打算做的事算不上勒索，也许算胁迫”，并补充说这次行动“并非出于金钱动机”。 如果这一说法得到证实，它将成为美国联邦执法机构人员数据史上最敏感的泄露事件之一，可能暴露探员与雇员的身份，并给卧底与安保工作带来麻烦。此事也发生在越来越多证据显示攻击者正把目标从个人受害者转向集中式企业及政府数据库之际，进一步削弱了人们对任何大型数据存储能够被保护好的信心。 该说法尚未得到独立证实，该组织也没有公开说明数据的规模、格式或计划公布的时间；其声称的动机是“胁迫”而非牟利，这对以金钱驱动的勒索团伙来说并不常见。相关讨论提到 ShinyHunters，这是一个以针对 SaaS 与云客户发起大规模数据窃取和勒索行动而闻名的组织。

hackernews · spenvo · 9月22日 17:46 · [社区讨论](https://news.ycombinator.com/item?id=49805278)

**背景**: ShinyHunters 是一个多产的数据窃取与勒索团伙使用的名号，该组织多次声称攻破云和 SaaS 平台，并常以泄露窃取的记录相威胁索要赎金。美国政府此前也遭遇过重大人事数据泄露：2015 年美国人事管理办公室（OPM）被入侵，约 2210 万联邦雇员与申请者的记录外泄，评论者以此为先例，认为这类数据早已落入主要国家行为体之手。此类声明通常需要后续核实，因为泄露宣告有时会被夸大甚至编造，以获取谈判筹码。

**社区讨论**: 评论者的反应夹杂着宿命感与黑色幽默：有人表示如今“似乎没人有能力保护好一个大型数据库”，并以 2015 年 OPM 泄露事件为证，认为这类数据早已被大规模获取。也有人嘲讽该组织自称的非金钱动机——开玩笑说他们应该要求公开做荒唐举动而非索要钱财——并批评政府技术专业能力的流失；还有人引用《太空堡垒卡拉狄加》中刻意不联网的战舰，称那才是唯一真正的防御手段。

**标签**: `#cybersecurity`, `#data breach`, `#FBI`, `#privacy`, `#hacking`

---

<a id="item-7"></a>
## [GrapheneOS 有望在 2027 年实现设备预装](https://grapheneos.social/@GrapheneOS/117299954135808210) ⭐️ 8.0/10

GrapheneOS 项目在其官方社交账号上表示，2027 年有很大可能出现预装 GrapheneOS 的设备，这是继其宣布计划认证部分摩托罗拉设备之后的又一进展。据社区讨论，相关硬件可能与摩托罗拉即将推出的 Signature 系列有关，而预装设备可能由第三方公司而非摩托罗拉直接销售。 这将是 GrapheneOS 首次从需要用户自行刷入的 Google Pixel 硬件，扩展为开箱即用的产品，可能让注重隐私的 Android 系统成为普通消费者的选项。这也标志着该项目从极客小众项目向商业化分销产品转变，或将对其他厂商在隐私与安全默认设置上形成压力。 由于严格的硬件安全要求，GrapheneOS 目前仅官方支持 2021 至 2025 年间发布的 Google Pixel 设备，截至 2026 年 4 月其活跃用户约为 40 万。据报道，预装设备并非直接来自摩托罗拉官方渠道，而是由摩托罗拉提供硬件的第三方推出；同时计划中的机型仍可像现有 Pixel 一样手动刷入 GrapheneOS。

hackernews · Cider9986 · 9月22日 17:12 · [社区讨论](https://news.ycombinator.com/item?id=49804683)

**背景**: GrapheneOS 是一款基于 Android 开源项目（AOSP）构建的免费开源移动操作系统，于 2016 年首次发布，通过纵深防御加固、减少攻击面和改进应用沙箱来专注于安全与隐私，同时保持对 Android 应用的兼容。它由非营利性的 GrapheneOS 基金会开发，该基金会于 2023 年在多伦多成立，并获得 Vitalik Buterin、Jack Dorsey 等捐赠者的支持。由于其安全模型依赖特定的硬件特性，官方支持一直局限于较新的 Pixel 设备，而 2026 年宣布的摩托罗拉认证是其首次扩展到其他厂商。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GrapheneOS">GrapheneOS</a></li>
<li><a href="https://grapheneos.org/">GrapheneOS : the private and secure mobile OS</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍对这条消息表示欢迎，但也提出了实际顾虑，尤其是银行类应用能否使用，因为部分全国性信用合作社对 GrapheneOS 上的应用进行了封锁。也有人澄清说，这条消息的重点是“预装”而非新增硬件支持，设备很可能通过第三方而非摩托罗拉官方商城销售，并且即将推出的摩托罗拉 Signature 在硬件与价格上对 Pixel 11 Pro XL 具有竞争力。

**标签**: `#GrapheneOS`, `#privacy`, `#Android`, `#mobile OS`, `#preinstalled`

---

<a id="item-8"></a>
## [25 位菲尔兹奖得主警告 AI 或与数学研究目标错位](https://t.me/zaihuapd/43973) ⭐️ 8.0/10

包括陶哲轩在内的 25 位菲尔兹奖得主发表联合声明，警告将 AI 快速用于解决数学问题，可能导致 AI 的发展目标与数学研究的目标出现“严重错位”。声明承认近年来大型语言模型解决重大数学问题的能力大幅提升，但指出把数学解题当作衡量 AI 能力的基准，可能损害数学研究本身与整个学术生态。 这是数学界最具声望的一批学者罕见的集体发声，直接质疑了当前把数学解题成绩当作 AI 进步标志性基准的流行做法。这一声明可能影响 AI 实验室、学术期刊、资助机构和高校如何评估与归属机器生成的数学成果，并促使 AI 界反思什么样的数学产出才真正有价值。 声明提出的担忧相当具体：AI 批量生成的成果可能压缩用于验证、交流以及引用前人成果的时间，并引发署名与抄袭等问题。声明同时明确保留了乐观空间，认为 AI 有望提升数学研究的效率，其最终影响取决于人们如何使用这项技术。

telegram · zaihuapd · 9月22日 03:00

**背景**: 菲尔兹奖每四年颁发一次，每次最多授予 4 位通常不满 40 岁的数学家，常被称为数学界的诺贝尔奖；陶哲轩于 2006 年获奖，因此一份汇集 25 位该奖得主的声明分量格外沉重。在 AI 领域，“错位”指的是系统追求的目标与设计者或使用者真正想要的目标不一致；此处担忧的并非生存性风险，而是研究生态的偏移——即基准奖励的是快速给出答案，而非形成概念理解与新洞见。近年来大型语言模型在困难数学问题上的进展，使数学成为衡量 AI 进步最受关注的标尺之一，而声明正是对这一趋势作出的回应。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_misalignment">AI misalignment</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_alignment">AI alignment - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI`, `#mathematics`, `#research ethics`, `#academic publishing`, `#LLM`

---

<a id="item-9"></a>
## [DeepSeek 与清华发布 DSec 沙箱平台技术报告](https://arxiv.org/abs/2609.22978) ⭐️ 8.0/10

DeepSeek-AI 与清华大学联合发布技术报告《DeepSeek Elastic Compute（DSec）》，公开了一个每天服务约 300 万个沙箱实例的生产级沙箱平台。单个生产单元约由 160 个节点组成，峰值并发超过 38 万个沙箱，创建速度超过每秒 5000 个。 智能体的训练与评测越来越依赖在超大规模下运行不可信代码并与真实软件环境交互，而 DSec 展示了这类基础设施如何真正落地并稳定运营。由于它与强化学习框架深度协同，把有状态的 rollout 执行与可抢占的 GPU 训练解耦，这份报告为构建智能体强化学习流水线的团队提供了一套可参考的架构范本。 DSec 通过统一 SDK 提供四种后端——FnCall、容器、Firecracker microVM 和完整 VM，覆盖在线判题（OJ）、软件工程、安全渗透、电脑操作等各类负载。单节点可高密度承载 3200 个容器或 800 个 microVM；借助 3FS 分布式文件系统按需加载 EROFS 镜像，相比传统 Docker 全量拉取，任务完成时间快 1.7 倍、磁盘写入减少 57%，内存共享与回收机制还使峰值内存占用下降约 40%。

telegram · zaihuapd · 9月22日 04:45

**背景**: 训练智能体需要为模型提供一个安全隔离的环境来执行代码或操作电脑，这正是沙箱的作用；而每天执行数百万次，就要求沙箱创建极快、资源开销极低。Firecracker 是 AWS 开源的虚拟化技术，能创建轻量级 microVM，兼具硬件级隔离、亚秒级启动和低内存占用。EROFS 是华为最初开发的轻量级只读文件系统，非常适合可即时挂载的不可变压缩镜像。3FS 则是 DeepSeek 开源的高性能分布式文件系统（Fire-Flyer File System），专为基于 SSD 和 RDMA 网络的大规模读密集型 AI 训练与推理负载设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/EROFS">EROFS - Wikipedia</a></li>
<li><a href="https://github.com/deepseek-ai/3FS">GitHub - deepseek-ai/3FS: A high-performance distributed file system designed to address the challenges of AI training and inference workloads. · GitHub</a></li>
<li><a href="https://firecracker-microvm.github.io/">GitHub Pages - Firecracker</a></li>

</ul>
</details>

**标签**: `#AI Agents`, `#Sandbox Infrastructure`, `#DeepSeek`, `#Reinforcement Learning`, `#Distributed Systems`

---

<a id="item-10"></a>
## [DeepSeek 本周将向联合国安理会通报 AI 风险](https://t.me/zaihuapd/43989) ⭐️ 8.0/10

两名知情人士称，中国 AI 初创公司 DeepSeek 将于本周向由 15 个成员组成的联合国安理会通报人工智能带来的风险。安理会定于周三开会讨论 AI 与国际安全，OpenAI 首席执行官 Sam Altman 计划出席并作简报，Anthropic 的高层代表预计也将参加；DeepSeek 与月之暗面（Moonshot）等中国 AI 公司同样受邀发言。 这意味着中国前沿模型开发商、美国头部模型实验室 OpenAI 以及以安全研究著称的 Anthropic 将同台出现在讨论 AI 与国际安全的高层场合，凸显 AI 治理已从技术会议走向地缘政治的中心。这也表明中国 AI 公司正被视为全球第一梯队的参与者，其对风险的看法在最高外交层面受到征询。 会议定于周三举行，参与方为安理会 15 个成员国，但 DeepSeek 创始人梁文锋不打算亲自出席，消息人士也提醒相关安排仍可能临时变动。目前这些公司以及联合国均未正式确认出席安排。

telegram · zaihuapd · 9月22日 17:39

**背景**: DeepSeek 是一家总部位于杭州的 AI 公司，以研发并开源 DeepSeek-R1 等前沿大语言模型而闻名；月之暗面（Moonshot AI）则是总部位于北京的同行，以长上下文助手 Kimi 著称。联合国安理会是负责国际和平与安全的机构，就 AI 举行高层讨论的次数屈指可数，因此企业到安理会作简报并不常见。此次会议是国际社会推动为先进 AI 制定规范这一更广泛进程的一部分，与各国 AI 安全研究机构和峰会机制并行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI governance`, `#AI safety`, `#DeepSeek`, `#UN Security Council`, `#geopolitics`

---