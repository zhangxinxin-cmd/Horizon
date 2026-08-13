---
layout: default
title: "Horizon Summary: 2026-08-13 (ZH)"
date: 2026-08-13
lang: zh
---

> 从 32 条内容中筛选出 9 条重要资讯。

---

1. [“Spaghettifying DRAM”：新攻击技术扩大硬件攻击面](#item-1) ⭐️ 9.0/10
2. [DeepSeek V4 Pro 0813 发布：API 上线、开放权重，参数达 1.7 万亿](#item-2) ⭐️ 9.0/10
3. [谷歌推出 Gemini 3.7 Flash，新一代高效 AI 模型](#item-3) ⭐️ 8.0/10
4. [选择无聊的技术：为「创新代币」辩护的经典观点](#item-4) ⭐️ 8.0/10
5. [DeepSeek 发布 MIT 许可的 DeepSeek Harness 开发者预览版](#item-5) ⭐️ 8.0/10
6. [DeepMind 发布 SL2T 手语转文字模型，首次落地 Pixel 11](#item-6) ⭐️ 8.0/10
7. [DeepSeek 发布开源 Harness，并开放 V4-Pro-0813 权重](#item-7) ⭐️ 8.0/10
8. [OpenAI 升级 ChatGPT GPT-5.6 系列并扩大免费访问](#item-8) ⭐️ 8.0/10
9. [谷歌发布 Gemini 3.6 Flash，并透露 Gemini 4 已开始预训练](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [“Spaghettifying DRAM”：新攻击技术扩大硬件攻击面](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 9.0/10

安全研究员 Christopher Domas 提出了一项名为“Spaghettifying DRAM”的 DRAM 操纵新技术，利用 AMD Family 16h CPU 中 DRAM 控制器的地址转换寄存器实现深度系统入侵。该研究已在 Black Hat 大会展示，将硬件攻击面扩展到了传统软件边界之外。 这项研究表明，攻击者一旦获得 ring-0（内核态）执行权限，就可能利用 DRAM 控制器寄存器访问隐藏的“负环”区域，绕过原本隔离特权系统组件的保护机制。它凸显了内存控制器设计可能将软件漏洞升级为硬件级完全入侵的风险，对游戏主机等受严格限制的系统尤其具有潜在影响。 根据项目 README，该技术针对 AMD Family 16h（Jaguar）CPU 开发并完成测试；这一代 CPU 的数据手册是最后公开记录 DRAM 控制器地址转换寄存器、且显示其无法被锁定的一代。较新的处理器（如 Zen 3）使用不同的内存控制器寄存器基地址，因此具体攻击面因 CPU 系列而异。

hackernews · matt_d · 8月13日 14:17 · [社区讨论](https://news.ycombinator.com/item?id=49286341)

**背景**: DRAM 控制器负责将 CPU 的物理地址翻译为内存芯片中的行、列、bank 位置，这些内部映射通常由硬件管理。在部分较老的 AMD 处理器上，控制这一翻译过程的寄存器虽有文档记录，却无法被锁定，从而成为软件可操纵的攻击面。“Spaghettifying”一词取自天体物理中的“意大利面化”效应（潮汐力把物体竖直拉伸、水平压缩），用来形容该技术对 DRAM 地址映射的扭曲。这项研究将“硬件攻击面”扩展到内存控制器内部，说明一旦获得内核级权限，攻击者可以滥用底层硬件机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=49286341">Spaghettifying DRAM | Hacker News</a></li>
<li><a href="https://en.wikipedia.org/wiki/Spaghettification">Spaghettification - Wikipedia</a></li>
<li><a href="https://arxiv.org/pdf/2005.13121">Revisiting RowHammer: An Experimental Analysis of Modern DRAM ...</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论对 Christopher Domas 即将在 Black Hat 上的演讲非常期待；有人指出该技术仅在 AMD Jaguar（Family 16h）上得到验证，并追问哪些新 CPU 受影响。另一些评论认为，虽然攻击需要 ring-0 权限，但一旦取得内核代码执行，Xbox、PlayStation 等游戏主机的安全可能变得非常脆弱。整体氛围是既兴奋又谨慎，希望作者公开更多关于处理器覆盖范围的信息。

**标签**: `#security`, `#DRAM`, `#hardware`, `#exploit`, `#Black Hat`

---

<a id="item-2"></a>
## [DeepSeek V4 Pro 0813 发布：API 上线、开放权重，参数达 1.7 万亿](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/) ⭐️ 9.0/10

DeepSeek 已发布最新 Pro 模型 DeepSeek V4 Pro 0813，现可通过 OpenRouter 上的 API 使用，开放权重也已上传至 Hugging Face。该模型拥有 1.7 万亿参数，文件大小为 893 GB。 这次发布意义重大，因为 DeepSeek 持续推出强大的开放权重模型，为开发者和研究者提供了大规模闭源商业模型之外的另一选择。1.7 万亿参数的规模也可能提升业界对开源模型能力的期待。 该模型仅通过 API 提供，且没有官方发布页面；权重可在 Hugging Face 的 deepseek-ai/DeepSeek-V4-Pro-0813 中获取。Simon Willison 发现，该模型在低、中、高三种推理级别下生成的鹈鹕图像差异很大，这是他从未在其他模型上见过的；据称基准数据先经微信群泄露，后被 Reddit 帖子转载并遭删除，最后以 ASCII 表格形式出现在 Hacker News 上。

rss · Simon Willison · 8月12日 23:59

**背景**: OpenRouter 是一个统一的 API 网关和市场，可将兼容 OpenAI 的请求路由到 70 多个提供商提供的 400 多个大语言模型。在大语言模型中，参数是训练过程中学习到的内部权重，用于捕捉语法、上下文等语言模式，参数越多通常能力越强。开放权重模型会公开发布训练好的权重，任何人都可以下载、运行并在自己的需求下修改。DeepSeek 此前已在 2026 年 4 月和 7 月分别发布过开放权重的 V4 Pro 和 V4 Flash 模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>
<li><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-are-llm-parameters/">LLM Parameters - GeeksforGeeks</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#AI`, `#Large Language Model`, `#Open Source`, `#Model Release`

---

<a id="item-3"></a>
## [谷歌推出 Gemini 3.7 Flash，新一代高效 AI 模型](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

谷歌发布了 Gemini 3.7 Flash，这是 Flash 系列中的一款新高效模型，距离 3.6 Flash 发布仅三周。该模型增强了推理能力，并在视觉转 HTML 任务上表现优异，同时推出了引人注目的低价试用定价，该定价将于 2026 年 12 月 31 日翻倍。 此次发布标志着谷歌在竞争激烈的 AI 模型市场中快速迭代，瞄准低成本、高并发的编程和智能体用例。社区积极测试并与 GPT-5.6 Luna、Opus 等对手对比，其定价和性能将影响开发者的选择及更广泛的 AI 生态。 该模型支持可定制的思考配置，以平衡质量、成本和延迟。根据社区讨论，从 2027 年 1 月 1 日起，试用定价将上涨至每 100 万输入 token 1.50 美元，每 100 万输出 token 7.50 美元。

hackernews · thisisauserid · 8月13日 17:23 · [社区讨论](https://news.ycombinator.com/item?id=49289112)

**背景**: Gemini 是谷歌 DeepMind 的多模态大语言模型系列，Flash 系列旨在为日常 AI 任务提供快速、低成本的解决方案。新的 3.7 Flash 在上一代 3.6 Flash 的基础上，结合开发者反馈和算法改进，力求在高容量使用场景下提供更高的智能同时保持低成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3.7 Flash: our most intelligent workhorse model</a></li>
<li><a href="https://deepmind.google/models/model-cards/gemini-3-7-flash/">Gemini 3.7 Flash - Model Card — Google DeepMind</a></li>

</ul>
</details>

**社区讨论**: 社区成员进行了实际测试，一位开发者指出 Gemini 3.7 Flash 在视觉转 HTML 任务上表现出色，但 Opus 5 仍是同类最佳。也有人质疑这种试用定价有些奇怪，并认为 GPT-5.6 Luna 以更低价格提供了更好性能；部分人则称赞该模型在 DeepSWE 1.1 上的出色表现。

**标签**: `#AI`, `#Gemini`, `#Machine Learning`, `#Model Release`, `#Pricing`

---

<a id="item-4"></a>
## [选择无聊的技术：为「创新代币」辩护的经典观点](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

丹·麦金利(Dan McKinley)这篇有影响力的 2015 年文章主张，大多数问题应默认使用无聊但有保障的技术，并把有限的「创新代币」省下来花在真正重要的地方。 这篇文章是软件工程文化中的奠基之作，其「创新代币」思想帮助工程管理者更清晰地进行技术选型权衡。在今天 AI 代理等新技术涌现的背景下，它依然具有现实意义，社区讨论也将其应用到智能体技术的选择上。 文章的核心是丹·麦金利提出的「创新代币」隐喻：每家公司可用的技术选型创新预算很小且固定，因此团队只在需要差异化的地方花费代币，其他场景一律采用平庸成熟的技术。

hackernews · tosh · 8月13日 17:48 · [社区讨论](https://news.ycombinator.com/item?id=49289512)

**背景**: 丹·麦金利在 2015 年发表的这篇文章主张，大多数工程问题最好用无聊但成熟的技术解决，而不是追逐最新潮流。他提出「创新代币」的概念，认为组织对变化的承受能力是有限的，只能把这种预算花在少数真正能创造竞争优势的问题上。此后，这一理念在工程管理圈被广泛引用，用来讨论何时引入新工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.lessannoyingbusiness.com/post/innovation-tokens">Innovation Tokens - When to break from the status quo</a></li>
<li><a href="https://xebia.com/blog/how-innovation-tokens-can-change-your-life/">How Innovation Tokens Can Change Your Life | Xebia</a></li>
<li><a href="https://hybridcopynet.wordpress.com/2026/01/04/innovation-tokens/">Innovation Tokens – Hybrid Copy</a></li>

</ul>
</details>

**社区讨论**: 评论总体非常正面，许多人称这是帮助解释技术选型权衡的经典文章。有人把观点延伸到现代 AI 代理上，认为团队应该把创新预算花在代理本身，周边基础设施则用无聊的技术。也有少数人反驳，认为「创新代币」的比喻过于随意，工程师应该逐案评估风险和收益。

**标签**: `#software engineering`, `#technology strategy`, `#engineering culture`, `#essay`

---

<a id="item-5"></a>
## [DeepSeek 发布 MIT 许可的 DeepSeek Harness 开发者预览版](https://deepseek.com/harness/en/) ⭐️ 8.0/10

DeepSeek 发布了 DeepSeek Harness 的早期开发者预览版，这是一个采用 MIT 许可证的智能体编排框架。它强调通过仅追加的会话日志实现完整可追踪性，并支持热重载和动态插件管理。 这意义重大，因为 DeepSeek 作为一家重要 AI 实验室，正在开源一款具备可追踪性特性的编排工具，而这类特性在美国模型中通常受到限制。这可能影响 AI 智能体的开发者工具生态，并推动更透明、可审计的智能体系统。 该框架将模型看到的所有内容记录在仅追加的会话日志中，包括系统提示、推理过程、工具调用和上下文注入，并可在 Trajectory 视图中检查。社区成员指出，它基于 Cordis v4 构建，支持插件的热加载和卸载并回滚状态。

hackernews · bjin · 8月13日 12:58 · [社区讨论](https://news.ycombinator.com/item?id=49285244)

**背景**: 智能体编排框架用于协调多个 AI 智能体和工具以完成复杂任务。完整的可追踪性让开发者能确切看到智能体做了什么，从而改进调试和信任度；热重载则允许代码变更在无需重启运行进程的情况下生效。DeepSeek Harness 似乎将这些特性结合在一个开发者友好且采用 MIT 许可证的软件包中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kore.ai/ai-glossary/what-is-agent-traceability">What is agent traceability and why is it important? - kore.ai</a></li>
<li><a href="https://www.autolearningagents.com/ai-agent-architecture/hot-config-reload.php">Hot Configuration Reload in Agent Systems</a></li>
<li><a href="https://github.com/vivy-yi/awesome-agent-orchestration">GitHub - vivy-yi/awesome-agent-orchestration: ⭐ Curated list of AI Agent frameworks: AutoGen, CrewAI, MetaGPT, LangGraph, Swarms. Multi-Agent Systems, Swarm Intelligence, A2A Protocol, MCP Protocol. LLM Agents, Agentic AI, Agent Workflows.</a></li>

</ul>
</details>

**社区讨论**: 社区反应积极，有用户称可追踪性是‘杀手级功能’，而美国模型不允许这样的功能。作者确认这只是早期预览版，尚有粗糙之处；其他人则指出它与 Cordis v4 的关系，并将其与 cloudwego/eino 等库进行比较。

**标签**: `#deepseek`, `#ai-agents`, `#developer-tools`, `#open-source`, `#orchestration`

---

<a id="item-6"></a>
## [DeepMind 发布 SL2T 手语转文字模型，首次落地 Pixel 11](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) ⭐️ 8.0/10

谷歌 DeepMind 发布了大规模多语言手语转文字模型 SL2T，现已在 Pixel 11 的 Gboard 和 Live Transcribe 中提供手语转文字功能。该模型最初支持美国手语（ASL）转英语，使用超过 10 万小时、50 多种手语的数据训练。 这标志着手语 AI 首次集成到主流消费设备中，是可访问性和多模态 AI 的重要一步。它为聋人和听力困难用户在发消息、实时字幕等日常场景中提供了一种将手语转换为文字的实用工具。 为了保护隐私，SL2T 只处理手部和身体姿态关键点，不读取原始视频。它在 FLEURS-ASL 基准上的零样本得分为 70 BLEURT，远高于之前的纪录，后续将扩展到更多设备和语言。

telegram · zaihuapd · 8月13日 08:55

**背景**: 手语转文字 AI 能将手语视频转换为书面文字，这一任务长期以来一直落后于语音识别。FLEURS-ASL 是将 FLORES/FLEURS 并行评估集扩展到美国手语的基准，为该类模型提供标准测试。BLEURT 是一种基于 BERT 的学习式评估指标，用于衡量生成文本传达参考句含义的程度。DeepMind 的 SL2T 的特别之处在于将这项技术从研究推进到了已发布的消费产品中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/">Putting sign language AI into users’ hands — Google DeepMind</a></li>
<li><a href="https://arxiv.org/abs/2408.13585">[2408.13585] FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation</a></li>
<li><a href="https://github.com/google-research/bleurt">GitHub - google-research/bleurt: BLEURT is a metric for Natural Language Generation based on transfer learning. · GitHub</a></li>

</ul>
</details>

**标签**: `#Sign Language`, `#DeepMind`, `#AI`, `#Accessibility`, `#Multimodal`

---

<a id="item-7"></a>
## [DeepSeek 发布开源 Harness，并开放 V4-Pro-0813 权重](https://mp.weixin.qq.com/s/mANdGRI4fO_sEbC1ECEoZQ) ⭐️ 8.0/10

DeepSeek 发布了开源的 DeepSeek Harness 智能体框架（采用 MIT 协议），并在 Hugging Face 上开放了 DeepSeek-V4-Pro-0813 的模型权重。该框架采用“一切皆插件”的架构，模型、工具、技能、会话、沙箱、存储、调度和 UI 等能力均可替换或重组。 这标志着 DeepSeek 向开发者工具领域拓展，使 Harness 成为 Claude Code、Codex 等智能体基础设施的开源、与模型无关的替代方案。开放 V4-Pro-0813 权重可能加速社区对 DeepSeek 模型的定制与采用。 该框架由 Cordis 驱动，Cordis 被描述为“时空可组合性”的元框架，并提供标准、PTC、极简和创造四种运行模式。Hugging Face 页面曾短暂出现 404，随后恢复；GitHub 仓库于当晚晚些时候开放。

telegram · zaihuapd · 8月13日 12:39

**背景**: 智能体框架（agent harness）是将语言模型与工具、会话、存储、沙箱和用户界面连接起来的基础设施，类似 Claude Code 和 Codex 背后的底层架构。DeepSeek Harness 基于 Cordis 构建，Cordis 是一个开源的“元框架”，核心思想是所有组件都可在时间和空间上组合。通过将每种能力都设计为插件，该项目旨在为开发者提供构建和重构智能体系统的最大灵活性。V4-Pro-0813 是 DeepSeek 发布的模型，其权重现已在 Hugging Face 开放。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness/tree/master">GitHub - deepseek-ai/deepseek-harness · GitHub</a></li>
<li><a href="https://venturebeat.com/technology/deepseek-harness-launches-as-open-source-rival-to-claude-code-alongside-v4-pro-on-api-with-higher-prices">DeepSeek Harness launches as open source rival to Claude Code ...</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#Open Source`, `#AI Model`, `#Harness`, `#Hugging Face`

---

<a id="item-8"></a>
## [OpenAI 升级 ChatGPT GPT-5.6 系列并扩大免费访问](https://t.me/zaihuapd/43176) ⭐️ 8.0/10

OpenAI 宣布更新 ChatGPT：付费的 Plus 和 Pro 用户获得改进的 GPT-5.6 Sol 模型，并新增滑块以控制思考深度；免费用户本周起默认升级为 GPT-5.6 Luna。免费用户下周起将获得无限文本对话，并新增 Think 按钮以应对复杂推理。 此次更新大幅扩大了对 OpenAI 最新推理模型的使用范围，让更多用户获得先进的 AI 能力，也让付费用户能更好地控制模型行为。这也凸显了 OpenAI 推出分层模型系列（Luna、Terra、Sol）的战略，以在消费级和企业级应用中平衡成本、速度与能力。 GPT-5.6 系列包含三个变体——Luna、Terra 和 Sol——其中 Luna 针对快速、低成本和低延迟任务优化，Sol 则定位为面向复杂推理、编程和智能体工作流的旗舰模型。公告中提到，内部评估显示 GPT-5.6 Luna 在财经、医疗和法律问题上的事实错误比前代模型更少，但具体错误率未披露。

telegram · zaihuapd · 8月13日 17:04

**背景**: GPT-5.6 是 OpenAI 于 2026 年 7 月 9 日发布的大型语言模型系列，按能力从低到高分为 Luna、Terra 和 Sol 三个变体。该系列旨在支持企业工作、编程、科学研究和网络安全，OpenAI 将 Sol 称为其'迄今为止最好的编程模型'。此前，由于政府限制，GPT-5.6 于 2026 年 6 月 26 日仅以有限预览形式向小部分受信任合作伙伴开放。ChatGPT 是 OpenAI 面向消费者的聊天机器人产品，提供免费、Plus 和 Pro 三档。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/">Improving GPT ‑ 5 . 6 Sol in ChatGPT—and expanding access... | OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://openrouter.ai/openai/gpt-5.6-luna">GPT - 5 . 6 Luna - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#GPT-5.6`, `#ChatGPT`, `#AI model release`, `#Free access`

---

<a id="item-9"></a>
## [谷歌发布 Gemini 3.6 Flash，并透露 Gemini 4 已开始预训练](https://t.me/zaihuapd/43177) ⭐️ 8.0/10

谷歌发布了 Gemini 3.6 Flash，相比 Gemini 3.5 Flash 输出 Token 减少 17%，完成多步任务所需的推理步骤和工具调用也更少。谷歌还透露，Gemini 4 的预训练已经启动。 Gemini 3.6 Flash 在成本效率与智能体能力上更进一步，使前沿 AI 在高吞吐真实场景中更加平易近人。谷歌透露 Gemini 4 已启动预训练，说明其旗舰模型家族正快速迭代，也将加剧大模型市场的竞争。 新模型在代码生成、知识工作和计算机操作能力上均有提升，知识截止日期更新到 2026 年 3 月。API 定价为每百万输入 Token 1.5 美元、每百万输出 Token 7.5 美元，同时谷歌还推出了面向高吞吐、低延迟场景的 Gemini 3.5 Flash 变体。

telegram · zaihuapd · 8月13日 17:32

**背景**: Gemini 是谷歌 DeepMind 推出的多模态大语言模型家族，包含 Pro、Flash 等多个版本，并驱动 Gemini 聊天机器人。Flash 系列主打更快、更便宜的推理，同时保持前沿水平的智能，面向“智能体时代”，即模型通过调用外部工具和 API 来完成多步任务。工具调用让大模型可以调用外部函数，把语言生成和真实世界操作连接起来。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash">Gemini 3.6 Flash | Gemini API | Google AI for Developers</a></li>
<li><a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash">Gemini 3.5 Flash | Gemini API | Google AI for Developers</a></li>
<li><a href="https://www.ibm.com/think/topics/tool-calling">What Is Tool Calling? | IBM</a></li>

</ul>
</details>

**标签**: `#AI`, `#Google`, `#Gemini`, `#Large Language Models`, `#News`

---