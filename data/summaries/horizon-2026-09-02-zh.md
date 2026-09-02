# Horizon 每日速递 - 2026-09-02

> 从 40 条内容中筛选出 13 条重要资讯。

---

1. [谷歌推出 Gemini 3.8 Flash 与网络安全版 3.8 Flash Cyber](#item-1) ⭐️ 9.0/10
2. [Meta 发布 Muse Spark 1.3，以低成本刷新软件工程基准纪录](#item-2) ⭐️ 8.0/10
3. [谷歌广告科技业务免于被法院强制拆分](#item-3) ⭐️ 8.0/10
4. [报告揭露三个网站制造 21.5 万 AI 引用“最佳软件”页面](#item-4) ⭐️ 8.0/10
5. [Mistral 默认将用户数据用于训练引发隐私担忧](#item-5) ⭐️ 8.0/10
6. [Claude Fable 5.1 发布，基准大涨；Willison 用鹈鹕图测试](#item-6) ⭐️ 8.0/10
7. [开源 AI 检测器多数无法达到 0.5%误报率，并存在偏见](#item-7) ⭐️ 8.0/10
8. [英伟达发布搭载 3D 引导神经渲染的 DLSS 5，9 月 3 日上线](#item-8) ⭐️ 8.0/10
9. [阿里发布 Qwen3.8-Max-0902，CodeArena 编程榜 1691 分夺冠](#item-9) ⭐️ 8.0/10
10. [英伟达洽谈收购 Hugging Face，估值超 130 亿美元](#item-10) ⭐️ 8.0/10
11. [月之暗面与三大云巨头谈判，寻求 Kimi K3 最高 30% 分成](#item-11) ⭐️ 8.0/10
12. [xAI 发布 Grok 4.6，聚焦长时智能体任务并追平 GPT-5.6 Sol](#item-12) ⭐️ 8.0/10
13. [FBI 调查 Nexus 暗网售卖 1.53 亿张驾照扫描件](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [谷歌推出 Gemini 3.8 Flash 与网络安全版 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) ⭐️ 9.0/10

谷歌发布了 Gemini 3.8 Flash，一款低成本、高速的模型，同时推出了经安全微调的 Gemini 3.8 Flash Cyber，该安全版本通过 Fairwind 计划向受信任的防御者开放。此次更新包括比以往 Flash 模型更强的编程能力和更优的基准测试结果。 Flash 系列是谷歌将先进 AI 能力推向高性价比、低延迟应用场景的重要途径，因此编程和推理性能的大幅提升，会让更多用户用上强大的 AI 助手。Cyber 版本则可能改变企业进行漏洞发现的方式，将自主性与 Flash 模型的速度结合在一起。 谷歌称 3.8 Flash Cyber 能以 Flash 级别的速度和成本实现自主漏洞发现，为防御者带来显著优势，不过该版本最初仅通过 Fairwind 计划受限提供。在早期用户测试中，标准 Flash 模型约 13 秒生成可用的 HTML/JavaScript 内容，花费约 1.8 美分，并在部分独立评测排行榜上达到接近旗舰模型的分数。

hackernews · bratao · 9月2日 15:12 · [社区讨论](https://news.ycombinator.com/item?id=49537553)

**背景**: Gemini 是 Google DeepMind 推出的多模态大语言模型家族，其中的“Flash”系列定位为轻量、快速、成本更低的模型，与较大的 Pro 型号形成互补。此次的 3.8 Flash 之前有 3.7 Flash，谷歌曾宣传该系列适合智能体工作流、编程和复杂多步推理。“Cyber”则是专门面向网络安全任务的模型线，目标是发现、验证并修复漏洞；早前的 3.5 Flash Cyber 与谷歌的 CodeMender 漏洞修复项目相关。社区也常用 Artificial Analysis 等独立基准来横向比较各模型的综合能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/">Introducing Gemini 3.8 Flash and 3.8 Flash Cyber</a></li>
<li><a href="https://deepmind.google/models/gemini/flash/">Gemini 3.7 Flash — Google DeepMind</a></li>
<li><a href="https://deepmind.google/models/gemini/cyber/">Gemini 3.5 Flash Cyber — Google DeepMind</a></li>

</ul>
</details>

**社区讨论**: 社区反应总体正面：Simon Willison 展示了用约 1.8 美分、13 秒生成 HTML 示例，并强调 Flash 仍是使用音频和视频等多模态输入最便宜的方式之一。还有人指出它在某个排行榜上名列前茅，在 Artificial Analysis 等评测中达到接近旗舰模型的分数；也有一位测试者认为低思考强度设置相比 3.7 有所退步。

**标签**: `#Gemini`, `#AI models`, `#Google`, `#machine learning`, `#release`

---

<a id="item-2"></a>
## [Meta 发布 Muse Spark 1.3，以低成本刷新软件工程基准纪录](https://developer.meta.com/ai/models/muse-spark/) ⭐️ 8.0/10

Meta 发布了 Muse Spark 1.3，这是其多模态推理模型的最新版本，据报告在软件工程基准 DeepSWE 上取得 75.4 分，为目前公开最佳成绩。该模型被定位为极具成本效益的前沿竞品替代方案。 这一发布表明，接近最先进的编程性能正变得价格亲民，加剧了 AI 实验室之间的价格竞争，并使依赖编程代理的开发者受益。它也提高了其他提供方（如同日稍早占据 DeepSWE 榜首的 Google Gemini）的门槛。 社区的基准测试报告显示，Muse Spark 1.3 在 DeepSWE 上超过了 Google 的 Gemini 3.8 Flash，有用户称这是迄今最佳分数。Meta 还为同意 Meta 使用其数据进行训练的用户提供折扣 API 层，一些评论者认为这一权衡透明且合理。

hackernews · bvaldivielso · 9月2日 19:35 · [社区讨论](https://news.ycombinator.com/item?id=49541256)

**背景**: Muse Spark 是 Meta 旗下 Meta Superintelligence Labs（MSL）开发的大语言模型系列，于 2026 年 4 月推出，支持多模态推理和百万 token 的上下文长度。DeepSWE 是用于评估编程代理的软件工程基准套件之一；Artificial Analysis 等排行榜会将 DeepSWE、Terminal-Bench 和 SWE-Atlas 综合为一个指数。Meta 还发布了较小的开放权重模型（如 Muse Glimmer），并表示计划开放未来 Muse Spark 版本的权重。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Muse_Spark">Muse Spark</a></li>
<li><a href="https://artificialanalysis.ai/agents/coding-agents">AI Coding Agent Benchmarks & Leaderboard | Artificial Analysis</a></li>
<li><a href="https://ai.meta.com/blog/introducing-muse-spark-msl/">Introducing Muse Spark: Scaling Towards Personal Superintelligence</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍反应热烈。Simon Willison 用一个 SVG 提示测试了 1.3，称其相较 1.2 有明显改进，耗时 38 秒、花费 4.2266 美分；另一用户则强调 75.4 的 DeepSWE 分数和价格下降趋势。也有一些较为批评的声音，一位评论者将此次发布与 Meta 因儿童社交媒体成瘾面临的 180 亿美元诉讼相对比。

**标签**: `#Meta AI`, `#Muse Spark`, `#language model`, `#benchmarks`, `#AI`

---

<a id="item-3"></a>
## [谷歌广告科技业务免于被法院强制拆分](https://www.nytimes.com/2026/09/02/technology/google-ad-tech-remedies.html) ⭐️ 8.0/10

2026 年 9 月 2 日，谷歌在美国司法部的反垄断诉讼中获胜，避免了其广告技术业务被法院强制拆分。司法部仍赢得部分补救措施，但具体条款尚未完全公布。 这项裁决是科技反垄断执法的一个里程碑，决定了法院能否强制拆分占主导地位的平台。它影响谷歌的广告生态系统，也可能影响未来针对其他大型科技公司的垄断案件。 谷歌的广告技术业务去年收入为 300 亿美元，约占 Alphabet 总收入的 8%，但已连续 16 个季度下滑，分析师估计仅占公司利润不到 1%。司法部表示赢得了“重大”补救措施，但报道显示这些措施远不及全面拆分。

hackernews · donohoe · 9月2日 14:46 · [社区讨论](https://news.ycombinator.com/item?id=49537131)

**背景**: 广告技术（Ad tech）是用于自动化数字广告活动的购买、出售和分析的软件与工具。2023 年 1 月，美国司法部起诉谷歌，指控其非法垄断了展示广告中使用的三大工具：发布商广告服务器、广告交易平台和广告主广告网络。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Ad_tech">Ad tech</a></li>
<li><a href="https://grokipedia.com/page/adtech">Adtech</a></li>
<li><a href="https://hackernoon.com/us-v-google-how-ad-tech-tools-work">US v. Google: How Ad Tech Tools Work | HackerNoon</a></li>

</ul>
</details>

**社区讨论**: 社区评论对补救措施表示怀疑，一些人认为补救措施力度不足，并指出合并与拆分之间的难度不对称。还有人主张用对垄断者征收累进税等结构性方案替代漫长的诉讼；另一些人则质疑谷歌下滑的广告技术业务为何仍值得关注。

**标签**: `#google`, `#antitrust`, `#adtech`, `#regulation`, `#tech policy`

---

<a id="item-4"></a>
## [报告揭露三个网站制造 21.5 万 AI 引用“最佳软件”页面](https://trellner.com/reports/manufactured-sources-behind-ai-recommendations/) ⭐️ 8.0/10

一份新报告揭示，三个网站以程序化方式生成了 215,128 个“最佳软件”推荐页面，而 Perplexity 等 AI 系统正在引用这些页面作为来源。报告指出，批量生产的低质量内容正作为权威信息出现在 AI 回答中，形成了一种反馈循环。 随着 AI 问答引擎越来越依赖实时网页内容来生成回答，批量制造的 SEO 页面可能会主导 LLM 所使用的信源，降低回答质量并误导用户。这表明 AI 检索系统亟需具备对信源的批判性判断能力，也对网页内容生态和 LLM 训练数据产生了深远影响。 这些页面是通过“程序化 SEO”生成的，这是一种基于模板自动创建大量目标长尾搜索关键词页面的方法，常借助 AI 辅助。报告特别指出，Perplexity 经常将这三个网站列为其引用的参考资料，表明当前 AI 系统往往缺乏对页面动机的怀疑——即有些内容只是为了排名而非提供真正信息。

hackernews · jakobgreenfeld · 9月2日 13:59 · [社区讨论](https://news.ycombinator.com/item?id=49536375)

**背景**: 程序化 SEO 是一种自动生成大量网页的技术，通常用于规模化获取长尾搜索流量。内容农场是指专门为迎合搜索引擎算法而批量生产网页内容的组织。当 Perplexity 等 AI 搜索工具抓取开放网页时，它们会继承这类 SEO 垃圾内容并将其包装成可靠的推荐；若这些 AI 输出又被用于训练未来的模型，就会形成恶性循环。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Content_farm">Content farm - Wikipedia</a></li>
<li><a href="https://grokipedia.com/page/Programmatic_SEO">Programmatic SEO</a></li>
<li><a href="https://practicaldev-herokuapp-com.global.ssl.fastly.net/sergeyli/programmatic-seo-with-handlebars-5f8d">Programmatic SEO with Handlebars - DEV Community</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认同报告的观点，指出 LLM 往往偏爱 AI 生成的文本，并且 AI 生成的网站在搜索结果中频繁出现。多位用户分享亲身经历：有人遇到 AI 编造不存在的“Foobar 广场”街头美食地标，另一位则表示 Perplexity 为了响应速度牺牲了结果质量。总体观点认为，AI 系统需要对信源保持更强的怀疑，目前这一漏洞仍可利用，但留给优化窗口的时间可能不多了。

**标签**: `#AI`, `#LLM`, `#content quality`, `#search`, `#misinformation`

---

<a id="item-5"></a>
## [Mistral 默认将用户数据用于训练引发隐私担忧](https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training) ⭐️ 8.0/10

Mistral AI 发布了一篇帮助文章，承认用户的输入和输出数据可能被纳入模型训练计划，同时表示用户可以随时选择退出。Hacker News 上获得 359 分、155 条评论的讨论批评了该公司在训练数据上默认选择加入的政策。 这一点很重要，因为用户和企业越来越期望在 AI 训练中如何利用其数据方面获得明确同意和清晰控制，尤其是对于定位为注重隐私的欧洲替代方案的公司。Mistral 的默认选择加入做法可能会削弱信任，并影响企业和公共部门客户的采用。 该帮助页面没有具体说明哪些客户套餐或数据类型受到影响，只提到对话、文档和其他用户提供的内容。Hacker News 评论者描述了一个企业案例：切换到 Team 版后，Mistral 改变了政策，使默认选择加入训练，并似乎失去了集中关闭训练的选项。

hackernews · teekert · 9月2日 12:30 · [社区讨论](https://news.ycombinator.com/item?id=49535284)

**背景**: Mistral AI 是一家成立于 2023 年的法国人工智能公司，以开源大语言模型著称，常被视为欧洲数字主权的重要代表。根据 GDPR 等法规，将个人数据用于 AI 训练通常需要有合法依据或征得同意，而默认选择加入机制是否符合数据保护标准仍存在广泛争论。该公司还提供 Le Chat 聊天机器人并筹集了大量资金，因此其政策选择在欧洲 AI 生态系统中备受关注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mistral_AI">Mistral AI</a></li>
<li><a href="https://www.termsfeed.com/blog/consent-ai-machine-learning/">How to Collect Consent for AI and Machine Learning Data - TermsFeed</a></li>
<li><a href="https://termly.io/resources/articles/is-ai-model-training-compliant-with-data-privacy-laws/">Is AI Model Training Compliant With Data Privacy Laws?</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍持怀疑态度，有人表示不相信 AI 公司会遵守退出承诺，也有人讲述了自己被微软默认将 GitHub Copilot 数据用于训练的经历。一位企业用户抱怨说，他们选择 Team 版后 Mistral 更改了设置；另一位评论者则认为报道标题有误导性，因为帮助页面确实明确提到了退出的权利。

**标签**: `#privacy`, `#ai-training`, `#data-consent`, `#mistral`, `#enterprise-ai`

---

<a id="item-6"></a>
## [Claude Fable 5.1 发布，基准大涨；Willison 用鹈鹕图测试](https://simonwillison.net/2026/Sep/1/claude-fable-5-1/) ⭐️ 8.0/10

Anthropic 发布了 Claude Fable 5.1，声称它在编程、知识工作和长时问题解决任务上树立了新标准。Simon Willison 用非正式的“骑自行车的鹈鹕”SVG 生成提示测试了该模型，发现低和中等推理强度设置下完全跳过了推理 token。 该模型在多个基准上大幅提升，在新的 Terminal-Bench-Science 0.1 上达到 52.6%，而上一代 Fable 5 仅为 24.7%。这个小小的鹈鹕测试揭示了 Fable 5.1 如何在实际使用中处理五档推理强度，为用户和依赖成本与延迟取舍的开发者提供了实用参考。 Fable 5.1 提供五档推理强度：low、medium、high、xhigh 和 max，且无法完全关闭推理。在鹈鹕提示上使用 low 和 medium 时，模型都没有显示推理文本，输出 token 数也接近（1,998 和 1,977），说明这两个档位可能并未真正启用推理。

rss · Simon Willison · 9月1日 23:57

**背景**: Claude 是 Anthropic 的大语言模型系列，Claude Fable 5.1 是该系列中的一款最新高端模型。Terminal-Bench-Science 0.1 是一个新基准，用于衡量 AI 智能体在 70 个由专家精心挑选的科研工作流上的表现，覆盖生命科学、物理、地球科学和数学等领域。“骑自行车的鹈鹕”是 Simon Willison 在 2024 年底带火的一个非正式创意测试：要求大模型生成一张鹈鹕骑自行车的 SVG 图。Willison 最近曾质疑该测试与模型整体质量之间的相关性是否像以前那样强。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tbench.ai/news/terminal-bench-science-0-1">TERMINAL-BENCH-SCIENCE 0.1</a></li>
<li><a href="https://grokipedia.com/page/Pelican_on_a_bicycle_AI_benchmark">Pelican on a bicycle (AI benchmark)</a></li>
<li><a href="https://snorkel.ai/leaderboard/terminal-bench-science/">Terminal-Bench-Science | Snorkel AI</a></li>

</ul>
</details>

**标签**: `#Claude`, `#Anthropic`, `#AI benchmarks`, `#model release`

---

<a id="item-7"></a>
## [开源 AI 检测器多数无法达到 0.5%误报率，并存在偏见](https://www.reddit.com/r/MachineLearning/comments/1w58erw/most_opensource_ai_detectors_cant_hold_a_05/) ⭐️ 8.0/10

Reddit 上的一项评估测试了六款开源 AI 文本检测器，发现多数无法在 0.5%误报率下正常工作。对经过 humanizer 改写的 AI 文本，最佳模型只检出 41.6%，第二佳仅 4%，对前沿模型的检出率也很低。 这些结果说明，开源 AI 检测器会把大量普通人类写作误判为 AI，并更容易标记非母语写作者，削弱其在教育、内容审核等场景中的可信度。它们也暴露出这类模型整体的可靠性与公平性缺陷。 每款模型先在 6,930 篇人类文本上把阈值校准到 0.5%误报率，再测量召回率。MAGE 在任何阈值下都无法达到 0.5%误报率（对 26%的人类网页文本给出>0.9999 的分数），旧版 OpenAI RoBERTa 检测器 AUC 仅 0.313，在现代 AI 生成器上比随机猜测还差。

reddit · r/MachineLearning · /u/grumpyp2 · 9月2日 12:04

**背景**: AI 文本检测器是用于区分机器生成文本与人类写作的分类模型，常依赖对早期模型（如 GPT-2）过拟合的概率特征。检测效果通常用 ROC-AUC 概括，并取决于设定误报率与召回率之间的阈值。该评估使用了公开数据集，包括 Liang 2023 年的 TOEFL 作文，以及 GPT-5.x、Claude Opus 5 和 Gemini 3.x 输出的前沿样本集。所谓 humanizer 改写工具会把 AI 文本改得更像人类写作以绕过检测器，而评估显示经过改写的文本确实让多数系统失效。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/openai-community/roberta-base-openai-detector">openai -community/ roberta -base- openai - detector · Hugging Face</a></li>
<li><a href="https://arxiv.org/html/2409.03291v1/">LLM Detectors Still Fall Short of Real World:Case of LLM-Generated...</a></li>

</ul>
</details>

**标签**: `#AI detection`, `#Machine Learning`, `#Algorithmic bias`, `#Evaluation`, `#Text classification`

---

<a id="item-8"></a>
## [英伟达发布搭载 3D 引导神经渲染的 DLSS 5，9 月 3 日上线](https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/) ⭐️ 8.0/10

英伟达正式发布 DLSS 5，引入 3D 引导神经渲染，利用 AI 提升实时图形中的光影、材质与真实感。该技术将于 9 月 3 日随《NBA 2K27》一同上线，支持 GeForce RTX 50 系列 PC、笔记本以及 GeForce NOW Ultimate 会员。 DLSS 5 标志着 AI 驱动图形技术的重大进化，从超分辨率和帧生成迈向完整的神经渲染，能够合成更逼真的画面。这为 RTX 50 系列用户和云游戏玩家树立了新的性能与画质标杆，也表明 AI 正深入嵌入图形渲染的核心流程。 在《NBA 2K27》中，使用 RTX 5090 时 DLSS 5 可在 4K 超高画质加光线追踪下达到最高 370 FPS，在 1440p 下达到最高 590 FPS。玩家需下载同日发布的新版 GeForce Game Ready 驱动，该功能支持 RTX 50 系列台式机、笔记本及 GeForce NOW Ultimate。

telegram · zaihuapd · 9月2日 03:00

**背景**: DLSS（深度学习超采样）是英伟达的 AI 渲染技术套件，传统上主要用于超分辨率和帧生成。DLSS 5 引入了 3D 引导神经渲染，由传统渲染管线向神经网络提供场景引导——例如颜色帧和运动矢量——让网络对图像进行精修，从而实时生成更逼真的光影与材质。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/">DLSS 5: 3 D - Guided Neural Rendering Debuts in NBA 2K27 | NVIDIA</a></li>
<li><a href="https://www.igorslab.de/en/dlss-5-gamescom-2026-3d-guided-neural-rendering/">DLSS 5 at Gamescom 2026: Neural Rendering Explained</a></li>
<li><a href="https://www.moneycontrol.com/technology/nvidia-launches-dlss-5-with-3d-guided-neural-rendering-debuts-in-nba-2k27-on-september-3-article-14020178.html">Nvidia announces DLSS 5 with 3 D - Guided Neural Rendering for more...</a></li>

</ul>
</details>

**标签**: `#DLSS 5`, `#NVIDIA`, `#neural rendering`, `#real-time graphics`, `#RTX 50`

---

<a id="item-9"></a>
## [阿里发布 Qwen3.8-Max-0902，CodeArena 编程榜 1691 分夺冠](https://mp.weixin.qq.com/s/BfKRXMAR5ykD58LDkBftLg) ⭐️ 8.0/10

阿里发布了 Qwen3.8-Max-0902，这是一个拥有 2.4T 参数和 100 万 token 上下文窗口的大语言模型，在 CodeArena 前端编程总榜上以 1691 分夺冠，较旧版提升 22 分。其 API 定价为每百万输入 tokens 2 美元、每百万输出 tokens 6 美元，综合均价约 5 美元，低于榜单第二名和第三名模型的 20 美元和 12 美元。 此次发布标志着阿里在 AI 编程能力和成本竞争力上的积极发力，给其他前沿模型带来压力。开发者和企业如今可能以更低的 API 价格获得一流的编程性能。 该模型针对编程和专业办公任务进行了进一步后训练，现已上线千问 AI 平台，并接入千问办公、Qoder 与千问 APP。其 100 万 token 的上下文窗口非常适合长代码库和复杂办公文档。

telegram · zaihuapd · 9月2日 06:05

**背景**: CodeArena 是一个评估大语言模型代码生成的基准，使用 397 个从真实用户查询中精心挑选的样本，覆盖 40 个类别，旨在比合成测试更好地反映人类偏好。Qwen 是阿里的大语言模型系列，Qoder 是阿里推出的智能体编程平台，专注于真实软件开发任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://codearenaeval.github.io/">codearena</a></li>
<li><a href="https://aclanthology.org/2025.acl-demo.48/">CodeArena: A Collective Evaluation Platform for LLM Code Generation - ACL Anthology</a></li>
<li><a href="https://finance.yahoo.com/news/alibaba-launches-qoder-agentic-coding-133000732.html">Alibaba Launches Qoder: An Agentic Coding Platform for Real Software</a></li>

</ul>
</details>

**标签**: `#AI`, `#Qwen`, `#LLM`, `#CodeArena`, `#Alibaba`

---

<a id="item-10"></a>
## [英伟达洽谈收购 Hugging Face，估值超 130 亿美元](https://t.me/zaihuapd/43557) ⭐️ 8.0/10

据报道，英伟达正与开源 AI 平台 Hugging Face 洽谈收购，估值可能超过 130 亿美元。双方尚未达成协议，谈判仍可能破裂；微软曾与 Hugging Face 接洽，但目前谈判已停止。 若交易成功，全球领先的 AI 芯片制造商将与最重要的开源 AI 平台之一合为一体，可能重塑 AI 模型的分发与变现方式。此举还可能增强对开源 AI 生态的控制力，并引发重大监管关注。 英伟达已是 Hugging Face 的股东，曾参与其 2023 年 2.35 亿美元融资，当时公司估值约为 45 亿美元。据报道，Hugging Face 去年曾拒绝英伟达 5 亿美元的投资要约；目前收购谈判仍可能破裂。

telegram · zaihuapd · 9月2日 06:50

**背景**: Hugging Face 是领先的开源平台，机器学习社区在此协作共享模型、数据集和应用，其 Hub 上托管了超过 100 万个模型检查点。其开源的 Transformers 库为 PyTorch、TensorFlow 和 JAX 等框架提供文本、图像、音频和多模态任务所需的最新模型。因此，Hugging Face 更像是 AI 生态中的关键基础设施层，而不仅是应用开发商。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/">Hugging Face – The AI community building the future.</a></li>
<li><a href="https://github.com/huggingface/transformers">GitHub - huggingface/transformers: 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training.</a></li>
<li><a href="https://huggingface.co/docs/hub/models-the-hub">The Model Hub · Hugging Face</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#Hugging Face`, `#Acquisition`, `#AI`, `#Business`

---

<a id="item-11"></a>
## [月之暗面与三大云巨头谈判，寻求 Kimi K3 最高 30% 分成](https://www.jiemian.com/article/15040119.html) ⭐️ 8.0/10

月之暗面正与微软、AWS 和谷歌进行早期谈判，拟为其开放权重、2.8 万亿参数的 Kimi K3 模型争取最高 30% 的收入分成。消息人士称，这将是首家中国 AI 公司与美国云服务商之间达成的首个大型模型分成协议，但谈判仍未证实，核心条款尚未敲定。 若达成，该协议将为开放权重的中国大模型在美国云平台上建立持续性收入，并为跨境 AI 商业化开创先例。它还可能促使云厂商争相接入中国顶级模型，从而改变前沿开放权重模型在全球的分发与变现方式。 Kimi K3 于 2026 年 7 月发布，总参数为 2.8 万亿，被称为最大的开放权重前沿模型，其架构采用了 Kimi Delta Attention（KDA）和 Attention Residuals（AttnRes）两项改进。截至 2026 年 6 月中旬，月之暗面的年度经常性收入据称已超过 3 亿美元；谈判仍处早期阶段，相关公司均拒绝置评。

telegram · zaihuapd · 9月2日 07:36

**背景**: 大语言模型的能力通常与参数量相关——参数是训练过程中学习到的可调权重，但数据质量等因素同样重要。Kimi K3 拥有 2.8 万亿参数，截至 2026 年 7 月是规模最大的开放权重前沿模型；开放权重意味着用户和云厂商可自行下载或部署模型，而不仅限于通过 API 调用。在现有云端 AI 商业模式中，微软等厂商在 Azure 上转售 OpenAI 等模型时，曾向模型开发者支付收入分成；月之暗面的提议相当于把这一模式扩展到开放权重模型。典型的安排是：云厂商购买自有 GPU、部署 Kimi K3，并与月之暗面分享推理服务收入。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://finance.biggo.com/news/01b00402-c618-43e3-8aa7-238b0f6d7645">Moonshot AI Seeks Up to 30% Revenue Share from Three US Cloud Giants for Kimi K3 — BigGo Finance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>

</ul>
</details>

**标签**: `#AI`, `#Kimi K3`, `#Moonshot AI`, `#Cloud computing`, `#Revenue sharing`

---

<a id="item-12"></a>
## [xAI 发布 Grok 4.6，聚焦长时智能体任务并追平 GPT-5.6 Sol](https://t.me/zaihuapd/43559) ⭐️ 8.0/10

xAI 于 2026 年 8 月 12 日发布 Grok 4.6，在 Grok 4.5 基础上重点强化长时间运行的智能体任务、交互和视觉能力。该模型在包含九项基准的 Artificial Analysis 智能指数上与 GPT-5.6 Sol 持平，并已上线 Cursor、Grok Build 与 xAI API。 Grok 4.6 将前沿模型竞争从单轮问答引向长时程、自主性的智能体工作流，这类能力对企业生产力影响重大。它在综合基准上与 GPT-5.6 Sol 打平，并直接进入 Cursor 和 Grok Build 等开发者工具，增强了 xAI 在开发者和企业级 AI 市场的竞争力。 Grok 4.6 API 定价为每百万输入 token 2 美元、每百万输出 token 6 美元，另提供双倍价格的快速版本。此次发布被视为在 Grok 4.5 基础上的增量升级，重点是视觉能力以及跨越长时间智能体会话的交互任务。

telegram · zaihuapd · 9月2日 08:10

**背景**: Grok 是 xAI 的大语言模型系列，Grok Build 是 xAI 的智能体编码工具，能把自然语言提示转换成可直接运行的原型。Artificial Analysis 智能指数是一个综合基准评分，把 Terminal-Bench、GPQA Diamond、Humanity's Last Exam 等九项评测融合在一起来比较模型能力。长时间运行的智能体任务通常是自主、多步骤的工作流，可能持续数分钟到数小时甚至数天，依赖可持久化的执行基础设施，而非一次同步 API 调用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index">Artificial Analysis Intelligence Index v4.1.1 | Artificial Analysis</a></li>
<li><a href="https://www.openlegion.ai/en/learn/ai-agent-long-running-tasks">AI Agent Long Running Tasks : Queues, Checkpoints... | OpenLegion</a></li>
<li><a href="https://en.wikipedia.org/wiki/Grok_Build">Grok Build</a></li>

</ul>
</details>

**标签**: `#xAI`, `#Grok 4.6`, `#AI model release`, `#agents`, `#benchmarks`

---

<a id="item-13"></a>
## [FBI 调查 Nexus 暗网售卖 1.53 亿张驾照扫描件](https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/) ⭐️ 8.0/10

FBI 正在调查一个名为 Nexus 的暗网身份信息服务，该服务声称掌握并出售超过 1.53 亿张美国和加拿大居民的驾照扫描件。该平台已开始对外销售这些数据，引发官方关注。 如此大规模的驾照扫描件数据可能助长大规模身份盗用和欺诈，影响数千万人。该事件凸显了第三方机构集中保存个人数据的持续风险，以及暗网上身份文件交易日益猖獗的问题。 驾照扫描件包含姓名、家庭住址、出生日期等敏感字段。Krebs 报道称，这批数据可能来自此前汽车经销商、保险公司等机构的旧泄露文件，但官方尚未确认确切来源和受影响范围。

telegram · zaihuapd · 9月2日 09:31

**背景**: 暗网服务是通过匿名工具访问的隐藏市场，常被用于出售被盗数据和非法商品。驾照对犯罪分子很有价值，因为它包含开设账户、逃避追查或进行金融欺诈所需的身份信息。来自许多小型企业的数据泄露事件可能汇集为大型数据集合，并在这些平台上出售。

**标签**: `#data-breach`, `#cybersecurity`, `#dark-web`, `#identity-theft`, `#privacy`

---

