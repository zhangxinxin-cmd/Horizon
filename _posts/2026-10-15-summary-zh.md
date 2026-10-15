---
layout: default
title: "Horizon Summary: 2026-10-15 (ZH)"
date: 2026-10-15
lang: zh
---

> 从 44 条内容中筛选出 6 条重要资讯。

---

1. [Cloudflare：Yandex 宕机期间恶意机器人只是转移阵地，并未停摆](#item-1) ⭐️ 8.0/10
2. [Timescale 发布 pg_vectorsearch，声称 Postgres 向量索引速度超越 pgvector](#item-2) ⭐️ 8.0/10
3. [亚马逊的市场势力如何抬高整个互联网的价格](#item-3) ⭐️ 8.0/10
4. [追踪大模型“slop”文风在模型内部与训练各阶段的来源](#item-4) ⭐️ 8.0/10
5. [Anthropic 用自研 Scion 版本控制系统全面替换 git](#item-5) ⭐️ 8.0/10
6. [首例 Stargardt 病患者植入 PRIMA 视觉芯片，重获识词能力](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Cloudflare：Yandex 宕机期间恶意机器人只是转移阵地，并未停摆](https://blog.cloudflare.com/yandex-outage/) ⭐️ 8.0/10

Cloudflare 在其博客发布分析称，在近期 Yandex 宕机期间，流经其网络的恶意机器人流量并未消失，而是改变了行为模式，没有任何证据显示社交媒体操纵活动因此下线。这一结论直接反驳了此前广泛流传的“宕机瘫痪了俄罗斯水军/机器人活动”的说法。 人们常常把网络宕机当作“虚假信息或机器人基础设施被打击”的证据，而这项分析表明，这类结论很容易来自对流量数据的误读。它强调：要判断恶意活动是否真的被扰乱，必须依赖大规模互联网测量数据，而不是“社交媒体好像安静了”的主观印象。 Cloudflare 表示，在其整个网络上都没有证据显示相关打击行动使社交媒体操纵活动下线，或对互联网上的恶意活动造成扰乱。一个重要的局限是：Cloudflare 只能观测流经其自身网络的流量，无法看到社交平台内部的账号行为或内容层面的活动。

hackernews · coloneltcb · 10月14日 20:29 · [社区讨论](https://news.ycombinator.com/item?id=50094673)

**背景**: Yandex 是俄罗斯最大的互联网公司，运营着该国占主导地位的搜索引擎以及众多在线服务。当这样的大型服务商发生宕机时，评论者往往假定依赖它的恶意活动——例如由被入侵设备组成、受攻击者远程控制的僵尸网络（botnet）——也会随之崩溃。Cloudflare Radar 是 Cloudflare 的公开平台，基于其全球网络所观测到的流量，发布关于全球互联网流量、攻击趋势和宕机的数据洞察。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://radar.cloudflare.com/about">About - Cloudflare Radar</a></li>
<li><a href="https://blog.cloudflare.com/evolution-of-cloudflare-radar/">Making the Internet observable: the evolution of Cloudflare Radar</a></li>
<li><a href="https://en.wikipedia.org/wiki/Botnet">Botnet</a></li>

</ul>
</details>

**社区讨论**: 评论者总体上认可这一结论，有人称这才是被埋没的“核心要点”，直接反驳了“俄罗斯水军集体下线”的传言；也有人指出，看似异常的流量很可能只是搜索引擎爬虫。还有人提出替代解释，例如机器人依赖新闻抓取来判断发帖重点，因此社交媒体上显得安静并不代表相关操作已经停摆。

**标签**: `#Cloudflare`, `#Yandex`, `#botnets`, `#cybersecurity`, `#internet-measurement`

---

<a id="item-2"></a>
## [Timescale 发布 pg_vectorsearch，声称 Postgres 向量索引速度超越 pgvector](https://github.com/timescale/pg_vectorsearch) ⭐️ 8.0/10

Timescale（现名 Tiger Data）发布了 pg_vectorsearch，这是一个新的 PostgreSQL 扩展，提供名为 PRISM 的量化 IVF 索引，项目方声称其速度超过 pgvector 已有的 IVFFlat 和 HNSW 索引。该扩展要求 PostgreSQL 18 及以上版本，向量维度上限为 1968，公司 CTO 同日发布了一篇关于 PRISM 架构的技术深度解析。 pgvector 是 Postgres 内部向量检索事实上的标准，因此一个声称性能更优的竞争性索引直接挑战了那些在现有关系数据库上构建 RAG 和 AI 应用的团队的默认选择。这也加剧了 VectorChord 等低内存向量索引工具之间的竞争；随着基于 NVMe 的存储让磁盘友好型索引比吃内存的 HNSW 图更具吸引力，这一竞争显得格外重要。 PRISM 是一种量化的倒排文件（IVF）索引，单个向量维度被硬性限制在 1968 维以内，因此维度更高的现有 HNSW 索引目前无法迁移，而且该扩展只能在 PostgreSQL 18+ 上运行。社区成员还指出，其过滤似乎仅支持后置过滤（post-filtering），这使得按租户、用户或权限范围进行查询时很难高效实现。

hackernews · jascha_eng · 10月14日 11:47 · [社区讨论](https://news.ycombinator.com/item?id=50086165)

**背景**: pgvector 是一个开源 PostgreSQL 扩展，它添加了向量数据类型和距离运算符，使得嵌入向量可以与关系型数据一起存储和查询。它主要有两种索引类型：IVFFlat 使用 k-means 对向量聚类，查询时只搜索最近的若干簇；HNSW 则是基于图的近似最近邻算法，以高召回率著称但内存占用较大。两者都是近似索引，用少量精度损失换取相比暴力搜索的大幅速度提升。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pgvector.app/">pgvector — Vector Similarity Search for Postgres</a></li>
<li><a href="https://deepwiki.com/pgvector/pgvector/5.2.1-ivfflat-overview-and-structure">IVFFlat Overview and Structure | pgvector/pgvector | DeepWiki</a></li>
<li><a href="https://zilliz.com/learn/hierarchical-navigable-small-worlds-HNSW">Understanding Hierarchical Navigable Small Worlds ( HNSW )</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者总体表现出兴趣，但也提出了具体的阻碍：1968 维上限和 PostgreSQL 18 的要求让现有部署难以采用，还有多人质疑仅支持后置过滤时，过滤与多租户隔离该如何实现。也有人对竞争表示欢迎，一位用户称赞 VectorChord 借助高速 NVMe 磁盘让 Postgres 成本减半，另一位则质疑 Tiger Data 为何不继续维护已有的 pgvectorscale 扩展，而是另起炉灶推出新索引。

**标签**: `#vector-search`, `#postgresql`, `#pgvector`, `#database-indexing`, `#AI-infrastructure`

---

<a id="item-3"></a>
## [亚马逊的市场势力如何抬高整个互联网的价格](https://www.not-ship.com/how-amazon-pushes-up-prices-all-across-the-internet/) ⭐️ 8.0/10

not-ship.com 发表的一篇分析文章认为，亚马逊的市场势力与商业做法不仅影响自家平台，还抬高了整个互联网的商品价格。该文在 Hacker News 上引发热烈讨论，获得 697 分、588 条评论，围绕电商生态、物流、商品质量与退货体验展开辩论。 这一论点之所以重要，是因为亚马逊实际上已成为大量在线零售的定价基准，其佣金、广告成本与卖家政策的变化会层层传导给竞争对手和消费者。它也契合当前美国和欧盟对大型平台的反垄断审查，监管机构正在争论亚马逊既做市场运营方、又做自营卖方的双重身份是否扭曲了竞争。 文章描述的核心机制是：卖家必须承担亚马逊的佣金、物流仓储费用以及不断上涨的广告支出，然后据此定价，往往会把其他渠道的价格定得与亚马逊持平甚至更高，以免在亚马逊上自我压价。需要注意的局限是：该文属于分析性论述，而非披露了研究方法的实证报告；同时，亚马逊可靠的配送时效被普遍视为其真实优势，竞争对手很难复制。

hackernews · sighborg · 10月14日 09:28 · [社区讨论](https://news.ycombinator.com/item?id=50084757)

**背景**: 亚马逊经营的是双边业务：一方面运营第三方卖家销售商品的市场平台，另一方面又在同一平台上销售自营和自有品牌商品。卖家通常要按每笔销售支付佣金，并为使用亚马逊物流（FBA）支付仓储配送费，如今还需要购买赞助广告才能在搜索结果中曝光。由于亚马逊的搜索排名和“黄金购物车”（Buy Box）会偏向特定商品，一种常见批评——也是反垄断案件的核心——是该公司能够决定哪些商品胜出、以什么价格出售，从而在事实上为更广泛的在线零售价格设定了下限。

**社区讨论**: 评论者大体认同，如今亚马逊的优势来自物流和无摩擦退货，而不是低价，有人指出它承诺的送达日期大约 100 次里有 95 次能兑现。不少人抱怨非品牌搜索结果越来越同质化，多为质量存疑的廉价中国商品，直接找源头买反而更便宜；也有人吐槽独立卖家宣传的退货政策常常不兑现。一个反复出现的观点是：人们仍会在亚马逊购买扎带、纸张、清洁用品等低价日用品，但大件消费会直接去厂商官网或专业零售商（如 B&H、Adorama、REI、Sweetwater）。

**标签**: `#Amazon`, `#e-commerce`, `#antitrust`, `#pricing`, `#market power`

---

<a id="item-4"></a>
## [追踪大模型“slop”文风在模型内部与训练各阶段的来源](https://www.reddit.com/r/MachineLearning/comments/1x64lbk/tracing_where_llm_slop_style_comes_from_in_the/) ⭐️ 8.0/10

一篇新的机制可解释性研究把人们熟悉的大模型“slop”文风定位为 Qwen3-4B-Instruct 内部的一个 difference-in-means“语域（register）”方向：该方向由模型自身夸张写法与平实写法的差异得出，能区分 64 组手工构造的最小对比句，并与基于套路词（trope）的 slop 评分在正常输出上相关度最高达 0.82。在研究训练阶段时，作者在 OLMo 2 1B 上发现基座模型已存在同一方向（中间层余弦相似度 0.90–0.97）但输出偏向平实一端，SFT 引入了修辞结构，而 DPO 通过流行术语和 Markdown 排版使 slop 评分翻倍。 “slop”文风——破折号、“不是 X，而是 Y”的句式、三连列表和术语堆砌——是当前 RLHF 调优助手最广为人知也最令人反感的症状之一，而这项工作把一种模糊的审美抱怨变成了可测量、可编辑的内部表征。如果该方向能推广到所测两个小模型之外，就意味着从业者可以在表征层面抑制这种风格，而不必依赖脆弱的提示词禁令或 token 黑名单；同时也说明问题部分出在偏好数据本身——在 OLMo 的 3000 组偏好数据中，有 57% 的情况被选中的回答恰恰是更“slop”的那个。 方向消融（directional ablation）反而会让 slop 上升最多 89%，因为干净文本在该轴上的投影为负，因此作者改用第 12–23 层的固定向量相减，并把 KL 预算控制在人类文本约 0.4 nats/token 的狭窄范围内；将这一操作蒸馏为一个 rank-16 的 LoRA 后，在无系统提示的情况下将 slop 评分降低 83%，KL 比直接引导（steering）更低，且在一项小型问答检查上无明显性能下降。作者也指出了若干局限：slop 打分器是自己写的正则检测器，主要结论仅基于一个 4B 模型加 OLMo 2 1B，且尚未进行人工评估，因此该工作与 Antislop（Paech 等，2025）这类 token 层面的方法形成互补关系。

reddit · r/MachineLearning · /u/Imaginary_Money2285 · 10月14日 22:08

**背景**: difference-in-means 方向是一种简单的可解释性工具：把模型在两组对立输入（这里是夸张写法与平实写法）上的内部激活分别求平均再相减，得到一个指向该概念的向量；已有研究（如 LEACE 相关工作）表明这类方向往往与模型行为存在因果联系。Logit lens 是另一种可解释性方法，它把中间层的激活直接解码成词表预测，让研究者看到模型在每一层“倾向于”输出什么。在现代大模型训练流程中，SFT（监督微调，即指令微调）在人工撰写的示例回答上训练，DPO（直接偏好优化）则在“被偏好”与“被拒绝”的回答对上训练，以对齐风格与行为；LoRA 是一种参数高效微调方法，只学习一个小的低秩增量而不改动全部权重，而这里的 KL 散度用来衡量模型输出分布相对原始模型偏移了多少。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.eleuther.ai/diff-in-means/">Diff - in - Means Concept Editing is Worst-Case Optimal | EleutherAI Blog</a></li>
<li><a href="https://developers.openai.com/cookbook/examples/fine_tuning_direct_preference_optimization_guide">Fine-Tuning Techniques - Choosing Between SFT, DPO, and RFT ...</a></li>
<li><a href="https://docs.agilerl.com/en/nightly/tutorials/llm_finetuning/sft_dpo_finetuning.html">LLM Fine-Tuning with SFT and DPO - AgileRL Documentation</a></li>

</ul>
</details>

**标签**: `#LLM`, `#mechanistic-interpretability`, `#fine-tuning`, `#alignment`, `#model-training`

---

<a id="item-5"></a>
## [Anthropic 用自研 Scion 版本控制系统全面替换 git](https://www.anthropic.com/engineering/redesigning-source-control) ⭐️ 8.0/10

Anthropic 已将主仓库整体从 git 迁移到自研版本控制系统 Scion，整个迁移仅由七人团队在五个月内完成。同期每日合并代码量从约 2500 次增长到超过 3 万次，Anthropic 称 Scion 的 CPU 与内存占用仅为原先 git 镜像架构的约 1/200，CI 检出速度提升约百倍，CI 算力消耗下降 25%。 这是一个大型工程组织公开弃用 git 的罕见案例——git 二十年来一直是事实上的版本控制标准，而这次迁移的直接动因是 AI 智能体产生代码的速度已经超过了按人类节奏设计的工具链的承受能力。随着越来越多公司采用智能体编程，瓶颈正从“写代码”转移到“合并、评审与集成代码”，因此 Scion 的设计取舍很可能会被大量工程团队研究和借鉴。 Scion 颠覆了 git 的模型：客户端保持轻量并始终在线，提交、合并、变基以及历史与 blame 查询等计算全部由服务端承担，数据则以分布式方式存储。所有版本控制查询同时以 API 形式暴露，因此自动 bisect、自动回滚等流水线无需检出本地仓库即可运行。

telegram · zaihuapd · 10月14日 02:30

**背景**: Git 是几乎所有现代软件开发所依赖的分布式版本控制系统，大型公司通常以巨大的“单体仓库（monorepo）”形式使用它，并加一层镜像供 CI 系统拉取。Anthropic 是 Claude 模型和 Claude Code 背后的 AI 实验室，其内部工程师越来越多地借助这些智能体写代码，导致每日合并量远超基于 git 的架构所设计的承载能力。CI（持续集成）是自动构建与测试每一次改动的流水线，而“检出（checkout）”是机器在构建前下载仓库副本的步骤。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/engineering/redesigning-source-control">Redesigning source control at Anthropic \ Anthropic</a></li>
<li><a href="https://officechai.com/ai/anthropic-builds-in-house-version-of-git-called-scion-after-code-merges-rise-12x-in-4-months/">Anthropic Builds In-house Version Of Git Called Scion After ...</a></li>
<li><a href="https://alphasignal.ai/news/anthropic-ditched-git-and-built-scion-after-claude-caused-12x-merge-surge">Anthropic Ditched Git and Built Scion After Claude Caused 12x ...</a></li>

</ul>
</details>

**标签**: `#version-control`, `#git`, `#Anthropic`, `#CI/CD`, `#developer-infrastructure`

---

<a id="item-6"></a>
## [首例 Stargardt 病患者植入 PRIMA 视觉芯片，重获识词能力](https://science.xyz/news/stargardt-first-rehab/) ⭐️ 8.0/10

Science Corporation 已将旗下视觉恢复芯片 PRIMA 植入首例 Stargardt 病患者体内，该患者此前已失明。手术于今年 5 月在澳大利亚悉尼眼科医院完成，据 CEO Max Hodak 公布，患者在早期康复训练中先看到了字母，随后读出了一个完整单词。 这是最早的案例之一，表明视网膜假体不仅能用于老年黄斑变性，也能在遗传性 Stargardt 病中部分恢复功能性视力，有望让这一技术覆盖更广泛的失明患者群体。对视网膜假体和神经科技而言，这是从实验室概念走向真实临床康复的重要一步。 PRIMA 植入体被置于视网膜下腔，并与一副特殊眼镜配合工作，眼镜向芯片发送光信号以供电并提供数据；当前版本宽约 2 毫米（约相当于 7° 视角），集成 378 个光供电像素。值得注意的是，PRIMA 已在欧洲获批用于老年黄斑变性，而此次 Stargardt 病植入属于临床试验，因此读出单词只是早期、单例患者的康复里程碑，而非已被证实的成熟疗法。

telegram · zaihuapd · 10月14日 04:30

**背景**: Stargardt 病是最常见的遗传性单基因视网膜疾病，通常由 ABCA4 基因的双等位突变引起，会从儿童期或青春期起逐步破坏黄斑，全球约有 15 万患者受累，目前尚无治愈手段。该病损伤视网膜外层，特别是感光细胞，因此 PRIMA 绕过这些丧失的细胞，改为电刺激视网膜中残存的细胞。该系统将一枚微型、由光供电的视网膜下植入体与一副带摄像头的眼镜配合使用，把图像转换为光信号，从而在功能上替代已经死亡的感光细胞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Stargardt_disease">Stargardt disease</a></li>
<li><a href="https://science.xyz/technologies/prima/general-interest/">PRIMA Visual Prosthesis | Science Corporation</a></li>

</ul>
</details>

**标签**: `#neurotech`, `#vision-restoration`, `#medical-devices`, `#clinical-trials`, `#Stargardt-disease`

---