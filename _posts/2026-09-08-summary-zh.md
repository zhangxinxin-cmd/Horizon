---
layout: default
title: "Horizon Summary: 2026-09-08 (ZH)"
date: 2026-09-08
lang: zh
---

> 从 39 条内容中筛选出 7 条重要资讯。

---

1. [OpenAI 宣称 AI 破解纳维–斯托克斯千禧年难题，引发功劳争议](#item-1) ⭐️ 10.0/10
2. [库克缺席发布会视频 新 CEO 特纳斯主导折叠 iPhone 亮相](#item-2) ⭐️ 9.0/10
3. [ASML 与台积电合作推进 High NA EUV，采用 12 英寸光掩模](#item-3) ⭐️ 9.0/10
4. [OpenAI 发布 ChatGPT Images 2.0，引入推理与联网搜索](#item-4) ⭐️ 9.0/10
5. [NeurIPS 用不可靠 AI 检测器拒稿 178 篇论文，检测器连主席论文也误判](#item-5) ⭐️ 8.0/10
6. [美 BIS 审查中国 AI 企业海外获取英伟达芯片渠道](#item-6) ⭐️ 8.0/10
7. [DeepSeek V4.1 Flash 开启内测：原生多模态、更快更便宜](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 宣称 AI 破解纳维–斯托克斯千禧年难题，引发功劳争议](https://simonwillison.net/2026/Sep/8/on-navier-stokes/) ⭐️ 10.0/10

OpenAI 宣布，一个未公开发布的内部模型生成了纳维–斯托克斯存在性与光滑性问题（七个千禧年难题之一）的拟议解答，并用 Lean 证明助手完成了形式化。该结果声称三维不可压缩流体可在有限时间内形成奇点，自主智能体运行约 88 小时后于 2026 年 9 月 5 日得出，但尚未经独立验证。 这可能是 AI 系统首次解决千禧年难题，若属实将标志着 AI 驱动数学与科学发现的范式转变。该结果也引发关于研究署名、数据来源以及分享早期进展是否会招致 AI 竞赛的紧迫问题。 OpenAI 表示，这项努力在 9 月 1 日听到与纽约大学的 Tristan Buckmaster 和 Anthropic 的 Levent Alpöge 有关的传言后启动；其智能体在纳维–斯托克斯问题上发送了 270 万条消息、使用约 1300 亿输出 token，所有尝试问题合计 490 万条消息、3000 亿 token，按公开 API 价格估算成本约 1500 万美元。Buckmaster 公开指控 OpenAI 没有回答其首次提示词发送时间，也未说明模型是否使用他们的 Codex 会话进行训练，并表示 OpenAI 提出让他共同署名，但明确表示因 Alpöge 的雇主关系不会邀请他。

rss · Simon Willison · 9月8日 23:39

**背景**: 纳维–斯托克斯方程描述流体的运动方式，千禧年问题要求数学家证明三维解是否对所有时间都保持光滑，或给出反例；这与至今仍未完全解决的湍流现象密切相关。克雷数学研究所于 2000 年 5 月设立七个各带 100 万美元奖金的千禧年难题，目前只有庞加莱猜想被正式解决。OpenAI 给出的解答属于反例类型：一个受到光滑外力作用的光滑有限能量流动可在有限时间内爆破解，公司称这验证了 Charles Fefferman 官方问题陈述中的 C 和 D 两条结论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier-Stokes_existence_and_smoothness_problem">Navier-Stokes existence and smoothness problem</a></li>
<li><a href="https://en.wikipedia.org/wiki/Millennium_Prize_Problems">Millennium Prize Problems</a></li>
<li><a href="https://www.claymath.org/millennium-problems/">The Millennium Prize Problems - Clay Mathematics Institute</a></li>

</ul>
</details>

**社区讨论**: 评论者一方面惊叹该结果，另一方面对其产生过程感到警惕：Terence Tao 警告说，仅凭“有人在研究某问题”的传言就可能触发大规模 AI 努力，从而压平原始研究项目，打击研究者分享有价值方向的意愿；也有人怀疑 OpenAI 是否使用了 Buckmaster 与 Alpöge 的提示词和会话。还有人指出，一个训练不到两周的内部模型在数学上据说比 GPT-6 Astra 强一倍以上，这令人震惊；另一位评论者则认为自然科学不同于纯计算，因为物理世界约束着一切。

**标签**: `#AI research`, `#mathematics`, `#OpenAI`, `#Navier-Stokes`, `#Millennium Prize`

---

<a id="item-2"></a>
## [库克缺席发布会视频 新 CEO 特纳斯主导折叠 iPhone 亮相](https://www.macrumors.com/2026/09/07/tim-cook-wont-appear-apple-sept-9-event-video/) ⭐️ 9.0/10

据彭博社马克·古尔曼报道，蒂姆·库克将不会出现在苹果 9 月 9 日“惊喜与闪耀”发布会的视频中，但可能会出席放映活动。新任 CEO 约翰·特纳斯将成为主角，并主导介绍折叠 iPhone。 这一安排表明苹果正有意推进领导层交接，让特纳斯在重大产品发布会上成为外界关注的焦点。折叠 iPhone 的推出将成为库克卸任后，苹果新品发布风格与品牌形象面临的一次早期检验。 古尔曼称，苹果精心设计这次交接，让特纳斯成为折叠 iPhone 及后续新品的门面，库克若在视频中出现反而会削弱这一效果。库克已于 9 月 1 日卸任 CEO 并转任执行董事长，约翰·特纳斯接任 CEO。

telegram · zaihuapd · 9月8日 05:03

**背景**: 苹果通常会在 9 月媒体活动中展示新一代旗舰产品，而库克担任 CEO 多年，一直是此类发布会视频中标志性的主持人。此次 CEO 交接恰好发生在新品发布前夕，意味着特纳斯首次主持大型发布活动时，就要推出市场传闻已久的折叠 iPhone 这一全新产品类别。

**标签**: `#Apple`, `#Tim Cook`, `#CEO`, `#Foldable iPhone`, `#MacRumors`

---

<a id="item-3"></a>
## [ASML 与台积电合作推进 High NA EUV，采用 12 英寸光掩模](https://www.nrc.nl/nieuws/2026/09/08/asml-gaat-samenwerken-met-taiwanese-chipgigant-tsmc-om-zijn-nieuwste-chipmachines-te-upgraden-a4936073) ⭐️ 9.0/10

9 月 7 日，ASML 与台积电宣布合作，将 High NA EUV 光刻从目前的 6 英寸光掩模转向 12 英寸规格。计划于 2031 年建立 12 英寸光掩模试产线，2033 年用于先进制程量产，台积电则拟于 2030 年前后将 High NA 用于先进节点的大规模制造。 现有 EUV 光刻的数值孔径为 0.33，而 High NA EUV 将 NA 提升至 0.55，可实现更精细的分辨率。单片 6×12 英寸光掩模可覆盖以往需拼接两片 6×6 英寸光掩模的区域；台积电预计 2030 年前后的 A10 和 A11 制程节点被视为采用 High NA 的优先候选。

telegram · zaihuapd · 9月8日 06:55

**背景**: EUV 光刻利用 13.5 纳米波长的光在芯片上刻画微小图形。High NA EUV 是下一代 EUV 技术，通过更大的光学系统和更高的数值孔径实现更好的分辨率和更小的特征尺寸。光掩模（reticle）是定义电路图案的模板；转移到更大的 12 英寸光掩模规格，可避免因曝光场尺寸限制而必须进行的拼接操作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.asml.com/en/news/stories/2024/5-things-high-na-euv">5 things you should know about High NA EUV lithography</a></li>
<li><a href="https://www.tomshardware.com/tech-industry/semiconductors/tsmc-to-start-using-high-na-euv-lithography-in-2030-a10-or-a11-technology-prime-candidates-for-use">TSMC to start using High-NA EUV lithography in... | Tom's Hardware</a></li>
<li><a href="https://focustaiwan.tw/business/202609080020">TSMC, ASML partner on 12 - inch EUV photomasks ... - Focus Taiwan</a></li>

</ul>
</details>

**标签**: `#半导体`, `#EUV光刻`, `#芯片制造`, `#ASML`, `#台积电`

---

<a id="item-4"></a>
## [OpenAI 发布 ChatGPT Images 2.0，引入推理与联网搜索](https://t.me/zaihuapd/43693) ⭐️ 9.0/10

OpenAI 发布了基于 GPT Image 2 的新一代图像生成模型 ChatGPT Images 2.0。该模型引入了“思考模式”，可对提示词进行推理并整合联网搜索，能在单个提示词下最多生成 8 张视觉一致的图像，分辨率最高达 2K。 这标志着图像生成从简单的“文生图工具”向具备规划、检索和产出连贯多帧输出的智能体转变，可能对设计、营销和内容创作流程产生深远影响。同时，模型改进了非拉丁语系的文字渲染，解决了 AI 绘图长期存在的短板。 该模型可处理漫画、UI 元素和营销素材等复杂构图，并在最多 8 张画面中保持角色、光照和风格一致。它还显著提升了中文、日语、韩语等非拉丁语系的文字渲染质量。

telegram · zaihuapd · 9月8日 18:45

**背景**: 传统的图像生成模型在准确渲染文字方面存在明显不足，尤其是非拉丁字母体系，而且在生成多张图像时难以保持角色一致性。GPT Image 2 / ChatGPT Images 2.0 通过在渲染前加入推理层来规划构图，并结合联网搜索获取相关视觉参考与上下文，从而缓解了这些问题。据第三方媒体报道，该模型目前在 Arena AI 文生图排行榜上多个类别中位居第一。其 8 帧一致性通过统一风格描述、并复用已生成图像作为后续参考等技术实现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.mindstudio.ai/blog/chatgpt-images-2-use-cases-workflows">ChatGPT Images 2.0: What It Can Do and How to Use It for Real Work | MindStudio</a></li>
<li><a href="https://www.system7.ai/news/chatgpt-images-2-reasoning-ai-image-generation">ChatGPT Images 2.0 Explained: Reasoning and Web Search</a></li>
<li><a href="https://thenextweb.com/news/openai-chatgpt-images-2-0-reasoning-image-generation">OpenAI’s new image model reasons before it draws</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#image generation`, `#GPT Image 2`, `#AI research`

---

<a id="item-5"></a>
## [NeurIPS 用不可靠 AI 检测器拒稿 178 篇论文，检测器连主席论文也误判](https://www.reddit.com/r/MachineLearning/comments/1wakf62/neurips_deskrejected_178_papers_for_being/) ⭐️ 8.0/10

NeurIPS 的 Position Paper Track 使用专有 AI 检测器 Pangram 直接拒稿了 178 篇投稿（占该赛道 18.4%），没有人工审查或申诉流程。独立研究人员发现，同一检测器会将三位赛道主席自己的近期论文以 24% 到 69% 的概率标记为 AI 生成。 这起事件暴露了在高风险学术决策中依赖不透明且未经充分验证的 AI 检测器的危险性。它对非英语母语的研究者造成不成比例的伤害，并削弱了对顶级会议审稿流程的信任，对机器学习的科研诚信与出版公平产生广泛影响。 Pangram 的默认设置最初将整个赛道 42.7% 的投稿标记为 AI 生成，组织者不得不缩小文本窗口以将标记率降至 12.7%。有 22 篇论文仅仅因为检测得分超过 0.5 而被拒，尽管作者否认使用 AI；帖子引用的斯坦福研究发现 61.22% 的人类撰写的 TOEFL 作文会被误判，而 NeurIPS 未发布任何人口统计校准数据。

reddit · r/MachineLearning · /u/tughanbulut · 9月8日 10:19

**背景**: 像 Pangram 这类 AI 检测器利用自然语言处理和包含大量人类与 AI 文本的数据集，来评估一段文字由 ChatGPT 等大语言模型生成的可能性。这些工具已知并不可靠，尤其对非母语者的正式书面英语误判率很高，并因助长针对 AI 使用的“猎巫”行为而受到批评。NeurIPS 是顶级机器学习会议，其 Position Paper Track 用于征集前瞻性研究提案；仅凭黑箱检测器就直接拒稿且不许申诉，实属罕见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Pangram_(AI_detector)">Pangram (AI detector)</a></li>

</ul>
</details>

**标签**: `#AI detection`, `#NeurIPS`, `#academic publishing`, `#ethics`, `#machine learning`

---

<a id="item-6"></a>
## [美 BIS 审查中国 AI 企业海外获取英伟达芯片渠道](https://t.me/zaihuapd/43676) ⭐️ 8.0/10

美国商务部工业与安全局（BIS）已启动系统性审查，调查中国 AI 企业如何在海外获取和使用英伟达芯片，包括通过远程访问第三国租用算力的方式。知情人士称，在白宫官员指控月之暗面（Moonshot AI）的 Kimi K3 模型依赖经泰国远程访问的走私芯片后，BIS 执法团队于几天内启动该审查，并正在整理黑市走私中转地和中国企业远程租用算力所在国的两份名单。 此举标志着美国出口管制执法从实体芯片运输向云服务和远程算力领域重大升级。如果 BIS 主张对海外算力远程访问拥有管辖权，可能重塑全球 AI 供应链、云服务商政策以及中国 AI 实验室训练前沿模型的方式。 按照现行美国法规，远程访问算力本身并不违法，关键悬而未决的问题是 BIS 是否有法律授权限制此类云端访问。据报审查正在整理两份国家名单：涉嫌将受限芯片走私进入中国的黑市地点，以及中国企业远程租用算力的国家，而 Kimi K3 事件是导火索。

telegram · zaihuapd · 9月8日 03:35

**背景**: Kimi K3 是中国 AI 实验室月之暗面（Moonshot AI）的旗舰模型，拥有 2.8 万亿参数、原生多模态理解和 100 万 token 上下文窗口，其快速崛起被外界比作 2025 年初 DeepSeek 引发的震动。美国通过出口管制规则限制英伟达先进芯片直接对华出口，因此一些中国企业尝试在第三国租用高端 GPU 算力并远程访问。由于此类远程访问过去通常不被视为芯片出口，BIS 此次介入意味着执法范围可能出现重大扩展。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnn.com/2026/07/23/tech/china-ai-moonshot-kimi-explainer-intl-hnk">What is China’s Kimi K3 and why is the US so rattled by it?</a></li>
<li><a href="https://www.kimi.ai/ai-models/kimi-k3">Kimi K3: 2.8T Open Model for Coding & Knowledge Work</a></li>

</ul>
</details>

**标签**: `#export controls`, `#AI chips`, `#Nvidia`, `#geopolitics`, `#cloud computing`

---

<a id="item-7"></a>
## [DeepSeek V4.1 Flash 开启内测：原生多模态、更快更便宜](https://t.me/zaihuapd/43690) ⭐️ 8.0/10

深度求索已开启 DeepSeek V4.1 Flash 中间版本的内测。该版本采用新的模型结构，原生支持多模态，号称能力更强、速度更快且成本更低。调用时保持 base_url 不变，模型名为 deepseek-v4.1-flash-expires-on-0910，计费与 deepseek-v4-flash 相同，每账号限流 20 并发。 这一发布表明 DeepSeek 正转向统一的原生多模态架构，有望让开发者以更快速度和更低成本获得多模态推理能力。这也加剧了高性价比大模型 API 领域的竞争，可能促使其他厂商在性能与价格上跟进。 临时模型名中包含“expires-on-0910”，说明这是一个限时快照版本而非最终版本。其计费方式与 deepseek-v4-flash 相同，但内测期间每个账号限制为 20 并发请求。

telegram · zaihuapd · 9月8日 15:40

**背景**: 传统多模态系统通常把大语言模型与独立的视觉、音频编码器“拼接”在一起使用，这种方式效率有限。原生多模态模型则采用统一架构，从一开始就联合训练以处理文本、图像、音频等多种模态。DeepSeek（深度求索）是中国 AI 公司，以开发开源权重模型闻名；V4.1 Flash 是一个中间测试版本，通过与其他模型相同的 base_url API 地址进行访问。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.baidu.com/article/detail.html?id=7909664">原生多模态统一模型：重新定义AI交互的技术范式-百度开发者中心</a></li>
<li><a href="https://blog.csdn.net/Follow_24/article/details/161546827">AI多模态大模型技术全景（2026）：从“拼接“到“原生统一“，一文读懂底...</a></li>
<li><a href="https://www.uied.cn/posts/921792">刚刚，DeepSeek 新 模 型 突然上线：Flash 的 模 型 ，Pro... - UIED学习社区</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#AI`, `#multimodal`, `#LLM`

---