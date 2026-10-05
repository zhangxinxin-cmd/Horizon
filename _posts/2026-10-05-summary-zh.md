---
layout: default
title: "Horizon Summary: 2026-10-05 (ZH)"
date: 2026-10-05
lang: zh
---

> 从 24 条内容中筛选出 4 条重要资讯。

---

1. [Strata 在单张 RTX 4090 上运行 Qwen 3.8 Flash Next（125B）](#item-1) ⭐️ 8.0/10
2. [Nolan Lawson 追问：开发者为何不愿“使用平台”原生 API](#item-2) ⭐️ 8.0/10
3. [ARC-AGI-3 在 Kaggle 上的最高分 30 天内从 7% 跃升至 56%](#item-3) ⭐️ 8.0/10
4. [SK 电讯就大规模数据泄露致歉，为全体用户免费更换 USIM 卡](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Strata 在单张 RTX 4090 上运行 Qwen 3.8 Flash Next（125B）](https://github.com/Niko1221/Strata) ⭐️ 8.0/10

Hacker News 上一个获得 573 个赞、274 条评论的讨论串正在热议 Strata——这是一款专为 125B 参数混合专家模型 Qwen 3.8 Flash Next 编写的推理引擎，有用户称在单张消费级 RTX 4090 上就能本地运行它。评论者 snehesht 表示，在 4090 搭配 128GB DDR5 内存和 Ryzen 7950X3D 的机器上达到约 124 tokens/秒；另一位评论者 AntiRush 则在 RTX 6000 Pro 上使用 Q4 量化测得约 255 tokens/秒的解码速度。 如果这些数字站得住脚，就意味着 125B 级别的混合专家模型可以在个人爱好者或小团队已有的硬件上以交互速度提供服务，而不再依赖数据中心级 GPU。这对本地 LLM 社区意义重大，因为它降低了智能体编程、工具调用和视觉任务的门槛——这些任务过去往往需要租用云端算力。 Qwen 3.8 Flash Next 每个 token 只激活 125B 参数中的 6B，并额外附带一个 51B 的 N-gram 嵌入表，这正是其显存占用可控的原因；Ollama 上已有 Q4_K_M 版本。不过问题也真实存在：一位评论者的 50 张图像视觉基准测试显示，使用相同的 GGUF 和视觉适配器权重时，Strata 的中位误差为 154.8 像素，而 llama.cpp 仅为 46.5 像素；此外也有多人对低于 4-bit 量化带来的质量损失持怀疑态度。

hackernews · snehesht · 10月4日 12:51 · [社区讨论](https://news.ycombinator.com/item?id=49953495)

**背景**: 混合专家（MoE）模型把权重拆分成许多专门的子网络，每个 token 只路由到其中少数几个，因此模型的总参数量可以极大，而每个 token 的计算开销远低于同等规模的稠密模型。量化则把权重压缩到 8-bit、4-bit 甚至更低，以便塞进有限的显存，代价是精度有所下降。Strata 的特别之处在于它只针对一个模型和一类 PC 做专门优化，并在 localhost 上提供兼容 OpenAI/Anthropic 的 API，还支持可选的图像输入。RTX 4090 是拥有 24GB 显存的消费级 GPU，因此把部分模型卸载到系统内存，是让 125B 模型跑起来的关键。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Niko1221/Strata">GitHub - Niko1221/ Strata : Qwen3.8-Flash-Next (125B MoE) on...</a></li>
<li><a href="https://ollama.com/library/qwen3.8-flash-next:125b-a6b-q4_K_M">qwen 3 . 8 - flash - next : 125 b -a6b-q4_K_M</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next">Qwen / Qwen 3 . 8 - Flash - Next · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: 整体情绪热烈但存在分歧：多位用户确认吞吐表现出色，也有人对精度和炒作提出质疑。最有分量的批评来自 Jackson__，他的视觉基准测试显示在相同权重下，Strata 的中位定位误差是 llama.cpp 的三倍以上；a11r 和 jacquesm 则分别警告低于 4-bit 的量化会损害质量，以及 Strata 链接正在各大 LLM 论坛被刷屏，蜜月期过后还剩下多少热度尚待观察。

**标签**: `#LLM`, `#quantization`, `#consumer hardware`, `#inference optimization`, `#Qwen`

---

<a id="item-2"></a>
## [Nolan Lawson 追问：开发者为何不愿“使用平台”原生 API](https://nolanlawson.com/2026/10/03/why-dont-more-developers-use-the-platform/) ⭐️ 8.0/10

Nolan Lawson 在其博客 nolanlawson.com 发表文章《Why don't more developers “use the platform”?》，探讨为什么前端开发者更倾向于 React 等框架，而不是 Web Components 之类的浏览器原生 API。该文在 Hacker News 引发热议，获得 272 分和 286 条评论。 这场讨论直指前端架构的核心权衡——开发者体验与平台原生方案之间的取舍，影响所有交付 Web 应用的团队。它也会影响浏览器厂商、标准组织与框架作者在未来功能与 API 上的优先级排序。 评论指出，Web Components 很少被直接裸用，通常要借助 Lit 等封装层；而 <datalist> 这类原生功能在多数浏览器中实现糟糕、几乎不可用。另一点是，LLM 倾向于复制代码库中已有的代码风格，包括其中的重复代码和各种补丁式变通写法。

hackernews · vinhnx · 10月4日 04:10 · [社区讨论](https://news.ycombinator.com/item?id=49950554)

**背景**: Web Components 是一套 Web 标准，包含 Custom Elements、Shadow DOM 和 HTML 模板，为浏览器提供原生的组件模型，可实现 HTML 元素的封装与复用。React 则是广为使用的 JavaScript UI 库，自带组件模型与虚拟 DOM；而“使用平台”（use the platform）是长期存在的口号，主张开发者优先使用浏览器内置能力而非第三方抽象。由于不同浏览器厂商对同一标准的实现程度不一，跨浏览器不一致始终是反复出现的痛点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Web_Components">Web Components</a></li>
<li><a href="https://grokipedia.com/page/Web_Components">Web Components</a></li>
<li><a href="https://shoelace.style/">Shoelace: A forward-thinking library of web components .</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍反驳“平台 API 更快更好”的前提，认为 React 之所以流行，正是因为原生 API 繁琐且难以可靠实现，而 <datalist> 等原生功能在多数浏览器中根本不可用。多人称 Web Components 是“想法很好但实现糟糕”的 API，并指出其有限的应用大多建立在 Lit 之类封装层之上。另有一支讨论围绕“LLM 爱重复代码”展开，有评论者认为 LLM 只是镜像了现有代码库的风格与模式。

**标签**: `#web development`, `#frontend`, `#web components`, `#React`, `#platform APIs`

---

<a id="item-3"></a>
## [ARC-AGI-3 在 Kaggle 上的最高分 30 天内从 7% 跃升至 56%](https://www.reddit.com/r/MachineLearning/comments/1wxcd4k/top_arc%CE%B1gi3_scores_on_kaggle_just_went_from_7_to/) ⭐️ 8.0/10

据 r/MachineLearning 上的一则 Reddit 帖子，ARC-AGI-3 基准在 Kaggle 排行榜上的最高分在过去 30 天里据称从约 7% 上升到 56%。发帖者表示，这一提升是由相对小型的本地模型在评测框架（harness）中运行实现的，并称其表现已超过该基准上的普通人平均水平。 ARC-AGI 的设计初衷正是为了体现人类在抽象推理上的优越性，并抵御依靠记忆刷分的做法，因此若这一超越普通人水平的跃升得到验证，将成为 AI 评测领域的一个重要里程碑。同时，它也会引发疑问：这些进步有多少来自真正的推理能力，又有多少来自精巧的脚手架与评测框架工程，这直接影响社区如何解读基准的性能上限。 据称该 Kaggle 比赛规则限制参赛者只能使用相对小型的本地模型，这意味着成绩提升很可能来自评测框架及其外围脚手架，而非单纯扩大底层模型规模。发帖者还提到图中所示的排行榜数据已有些过时，且未提供任何技术说明、模型名称或可复现细节，因此这些数字目前应被视为未经证实的说法。

reddit · r/MachineLearning · /u/we_are_mammals · 10月4日 10:24 · [社区讨论](https://www.reddit.com/r/MachineLearning/comments/1wxcd4k/top_arcαgi3_scores_on_kaggle_just_went_from_7_to/)

**背景**: ARC-AGI（抽象与推理语料库）由 François Chollet 提出，是一类旨在衡量通用流体智力而非记忆型知识的基准。ARC-AGI-3 是其交互式版本，要求 AI 智能体在没有指令的情况下探索全新的动态环境、自行设定目标，并通过动作—反馈循环构建可适应的世界模型。评测框架（evaluation harness）是定义评测内容、运行模型并给出评分的标准化基础设施，因此框架的设计会显著影响报告出的性能成绩。Kaggle 排行榜通常会限制算力或模型规模，以保证比赛的公平性与可复现性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arcprize.org/arc-agi/3">ARC - AGI - 3</a></li>
<li><a href="https://arize.com/blog/what-is-an-evaluation-harness/">What is an evaluation harness ? Definition & guide - Arize AI</a></li>

</ul>
</details>

**标签**: `#ARC-AGI`, `#AI benchmarks`, `#reasoning`, `#LLM evaluation`, `#Kaggle`

---

<a id="item-4"></a>
## [SK 电讯就大规模数据泄露致歉，为全体用户免费更换 USIM 卡](https://t.me/zaihuapd/44206) ⭐️ 8.0/10

韩国最大电信运营商 SK 电讯（SKT）确认其内部系统遭黑客攻击，核心 HSS 服务器被攻破，导致超过 2500 万用户的敏感数据泄露。公司 CEO 已公开致歉，并宣布为所有希望更换的 SKT 用户（含其网络下的 MVNO 用户，部分设备除外）免费更换 USIM 卡，同时为近期已付费更换的用户报销费用。 这是近年来规模最大的电信安全事件之一，泄露的认证密钥可能被攻击者用于克隆 SIM 卡、拦截通话或绕过数百万用户的双重身份验证。事件凸显出将用户数据集中在 HSS 等核心网元中会形成单点故障，一旦失守便会对整个国家的隐私安全造成灾难性影响。 泄露数据包括 IMEI、SIM 卡序列号（SN）、ICCID、PIN2/PUK2 码、eID，以及最关键的用于向网络认证用户的加密密钥 K 值和私钥。由于这些 K 值是 SIM 卡认证的基础，除非同时更换底层密钥，否则仅更换 USIM 卡可能无法完全消除风险。

telegram · zaihuapd · 10月4日 09:02

**背景**: HSS（归属用户服务器）是 4G/LTE 和 IMS 网络中的核心数据库，存储用户档案和认证凭据，其作用类似酒店前台，在授予访问权限前核验身份。ICCID 是标识每张 SIM 卡的 19 至 22 位唯一序列号，而 PIN2 和 PUK2 则是用于保护 SIM 卡高级功能的二级安全码。K 值则是 SIM 卡与网络之间共享、用于双向认证的密钥；一旦泄露，攻击者可能冒用用户身份。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.telecomhall.net/t/why-hss-is-the-brain-of-volte-ims-networks/36471">Why HSS is the “Brain” of VoLTE / IMS Networks... - telecomHall Forum</a></li>
<li><a href="https://telnyx.com/resources/iccid-number">ICCID number: how to find, decode, and use it</a></li>

</ul>
</details>

**标签**: `#Cybersecurity`, `#Data Breach`, `#Telecom`, `#SK Telecom`, `#Privacy`

---