# Horizon 每日速递 - 2026-09-29

> 从 37 条内容中筛选出 7 条重要资讯。

---

1. [Anthropic 发布 Claude Sonnet 5.5，引发基准与定价之争](#item-1) ⭐️ 9.0/10
2. [AMD 收购李飞飞创办的 World Labs，交易据报达 80 亿美元](#item-2) ⭐️ 9.0/10
3. [GLM-5.3 稀疏注意力如何影响 HBM 内存占用](#item-3) ⭐️ 8.0/10
4. [NeurIPS 论文为函数梯度下降形式化"自适应表示"框架](#item-4) ⭐️ 8.0/10
5. [Star Catcher 拟首次在轨测试两颗卫星间的激光无线输能](#item-5) ⭐️ 8.0/10
6. [SpaceX 星舰首次入轨，部署 26 颗星链卫星后提前返航](#item-6) ⭐️ 8.0/10
7. [快手可灵 4.0 宣布 10 月上线，支持 4K 与 30 秒生成](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic 发布 Claude Sonnet 5.5，引发基准与定价之争](https://www.anthropic.com/claude-sonnet-5-5) ⭐️ 9.0/10

Anthropic 正式发布了 Claude Sonnet 5.5，这是一款新的中端前沿模型。官方表示它在网络攻防相关能力上有大幅提升，因此部署时采用了与 Opus 级别模型相同的安全防护措施。该发布在 Hacker News 上引发大量讨论，帖子获得 567 分、约 390 条评论。 Sonnet 是 Anthropic 产品线中使用最广泛的主力模型之一，因此新版本会直接影响大量基于 Claude API 构建应用的开发者与企业。与此同时，这次发布也让人们更激烈地把它与 GLM、DeepSeek 等更便宜的中国模型在价格和能力上做对比——有评论者认为，对于非前沿任务，这些中国模型已经具备真正的竞争力。 讨论中一个值得注意的技术细节是：Sonnet 5.5 在 Terminal-Bench 上得分为 70.6，高于 Opus 5.5 的 66.4；但据 Sonnet 5.5 系统卡片第 8.5 节所述，Opus 约有 10% 的试验因安全防护机制而由回退模型作答，而 Sonnet 仅约 1.5%。评论者提醒，这一回退率差异本身就可能解释大部分基准差距，因此不应过度解读表面分数。

hackernews · D2OQZG8l5BI1S06 · 9月28日 17:58 · [社区讨论](https://news.ycombinator.com/item?id=49881850)

**背景**: 自 2024 年 3 月的 Claude 3 起，Anthropic 就把 Claude 系列划分为以体量命名的层级：Haiku 最小最快，Sonnet 是均衡的中端，Opus 能力最强、价格最高。各层级分别对应速度与智能之间的不同取舍，而 Sonnet 历来是需要较强质量、成本又相对可控的生产环境默认选择。与此同时，DeepSeek、GLM 等中国实验室以低得多的价格推出了能力不断提升的模型，这持续引发“西方前沿模型是否值得付出溢价”的争论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Claude_(language_model)">Claude (language model)</a></li>
<li><a href="https://tygartmedia.com/claude-models-comparison/">Claude Models Comparison 2026: Fable 5, Opus, Sonnet, Haiku</a></li>
<li><a href="https://www.index.dev/blog/chinese-ai-models">Top 6 Chinese AI Models Like DeepSeek (LLMs) in 2026</a></li>

</ul>
</details>

**社区讨论**: 社区情绪偏向分歧而非一致叫好：有评论者表示 Opus 5.5 的效率已经足以应付日常工作，不清楚自己何时才会用到 Sonnet 5.5；也有人认为，只要不是真正的前沿模型，GLM、DeepSeek 等更便宜的中国方案性价比更高，用户需要自行试用挑选。还有人质疑基准对比的可靠性，并有一位评论者推测，Anthropic 在被美国政府项目排除后感到压力，如今正全力争夺更广泛的大众市场。

**标签**: `#Anthropic`, `#Claude Sonnet`, `#LLM release`, `#AI benchmarks`, `#Hacker News`

---

<a id="item-2"></a>
## [AMD 收购李飞飞创办的 World Labs，交易据报达 80 亿美元](https://www.worldlabs.ai/blog/amd-announcement) ⭐️ 9.0/10

AMD 宣布将收购由斯坦福大学教授李飞飞（Fei-Fei Li）创立的空间智能初创公司 World Labs，据报交易金额约为 80 亿美元。World Labs 在其官方博客发布了这一消息，确认公司将加入 AMD。 这是一次重大的行业整合：一家芯片厂商从加速器向上延伸到模型与世界表示层，使 AMD 与英伟达的竞争不再局限于硬件。这也说明芯片厂商正在提前押注空间智能与具身智能（快速推理、机器人式应用）成为下一波需求来源。 最受质疑的一点是：一家成立仅约两年的公司据报估值达到 80 亿美元，而该交易条款在目前提供的材料中尚未得到其他来源的印证。讨论中还提到 AMD 不久前刚完成另一笔 AI 相关收购，说明这是一次有计划的快速扩张，而非孤立的单笔交易。

hackernews · mfiguiere · 9月28日 20:18 · [社区讨论](https://news.ycombinator.com/item?id=49883760)

**背景**: 按斯坦福 HAI 的定义，空间智能（spatial intelligence）指 AI 系统能够理解并推理三维物理世界，包括物体在空间中的相互关系、运动方式和交互方式。李飞飞创办的 World Labs 正是从事这一方向，而它与具身智能（embodied AI）密切相关——即把 AI 集成到机器人等能够在真实世界中感知、规划并行动的物理系统中。AMD 是英伟达在 AI 数据中心加速器领域最主要的挑战者，因此收购一家以模型为核心的实验室，意味着它明显跨出了单纯芯片业务，进入软件与模型层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-spatial-intelligence">What is Spatial Intelligence? | Stanford HAI</a></li>
<li><a href="https://www.nvidia.com/en-us/glossary/embodied-ai/">What is Embodied AI? | NVIDIA Glossary</a></li>

</ul>
</details>

**社区讨论**: 评论区整体偏怀疑：不少人质疑一家成立约两年的公司是否值 80 亿美元，其中一位从业者认为 World Labs 的原始输出"几乎不可用"，效果与前沿视频模型从旋转镜头素材生成的高斯泼溅（splat）相近。也有人把这次收购概括为"新实验室向下走、芯片厂商向上走"这一趋势的一部分，另有用户推荐李飞飞的回忆录《The Worlds I See》，作为了解早期 AI 历史的入门读物。

**标签**: `#AMD`, `#World Labs`, `#AI acquisitions`, `#spatial intelligence`, `#embodied AI`

---

<a id="item-3"></a>
## [GLM-5.3 稀疏注意力如何影响 HBM 内存占用](https://newsletter.semianalysis.com/p/sparse-savings-persistent-demand-inside-glm53) ⭐️ 8.0/10

SemiAnalysis 发布了题为《Sparse Savings, Persistent Demand: Inside GLM-5.3》的深度分析，剖析 GLM-5.3 的稀疏注意力机制如何改变 HBM 内存占用与推理效率。文章逐一梳理了其中的关键优化——IndexShare 索引复用、DeepSeek Sparse Attention（DSA）的 token 选择、vLLM 中的 Hybrid HiSparse KV cache 卸载，以及 Single-rollout Asynchronous Optimization（SAO），并指出稀疏注意力虽然大幅削减了计算量，但对高带宽内存的需求依然持续存在。 在长上下文与智能体（agentic）推理场景中，真正的瓶颈越来越是 HBM 的容量与带宽，而不是原始算力，因此弄清稀疏化之后内存究竟消耗在哪里，直接影响推理成本和硬件规划。对 AI/ML 系统工程师、推理基础设施团队以及决定未来加速器需要多少 HBM 的硬件厂商而言，这份分析都具有参考价值。 一个关键细节是：HiSparse 只把被选中的模型 KV 行卸载到主机内存、并在 GPU 上保留热缓存，而 indexer 自身的 KV 不在此机制范围内，可由标准 OffloadingConnector 以普通的块粒度存储独立卸载；未命中的读取由一个被捕获进 decode CUDA graph 的融合 kernel 一次性解决，且该接口对 DSA、NSA、Quest 等不同 indexer 均保持通用。在训练侧，SAO 用“每个 prompt 仅一条 rollout”取代 GRPO 式的分组采样，并引入严格的双侧 token 级裁剪策略，以维持异步优化的稳定性。

rss · Semianalysis · 9月28日 19:26

**背景**: 标准注意力要求每个 token 都关注此前所有 token，因此在长上下文下，KV cache（为所有已处理 token 保存的键和值）及其带来的计算量会迅速膨胀，甚至耗尽服务器级内存。DeepSeek Sparse Attention 通过一个轻量的“lightning indexer”为每个 query 选出最相关的 top-k 个 token 来缓解这一问题；GLM-5.2 进一步提出 IndexShare，在一小组相邻层之间复用同一套选中的 token 索引，而不是在每一层都重新计算 indexer，据称在 100 万 token 上下文下可将 indexer 计算量降低约 2.9 倍。HBM 是与 AI 加速器封装在一起的高带宽内存，价格昂贵且容量受限，这正是 HiSparse 这类分层 KV cache 管理方案对低成本部署这些模型至关重要的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2608.07009">HiSparse: Scaling Sparse-Attention Decoding with Hierarchical KV Cache Management</a></li>
<li><a href="https://vllm.ai/blog/2026-09-08-glm53-part1-hybrid-sparse-offloading">GLM 5.3 Optimizations, Part 1: Hybrid HiSparse Offloading in vLLM</a></li>
<li><a href="https://sebastianraschka.com/blog/2026/glm-5-2-indexshare.html">GLM-5.2 IndexShare Architecture Note | Sebastian Raschka, PhD</a></li>

</ul>
</details>

**标签**: `#LLM inference`, `#sparse attention`, `#HBM memory`, `#AI/ML systems`, `#KV cache optimization`

---

<a id="item-4"></a>
## [NeurIPS 论文为函数梯度下降形式化"自适应表示"框架](https://www.reddit.com/r/MachineLearning/comments/1wsejb7/functional_gradient_descent_with_adaptive/) ⭐️ 8.0/10

一篇被 NeurIPS 接收的论文《Functional Gradient Descent with Adaptive Representations》形式化了一类广泛的函数梯度近似方案，即所谓"自适应表示"（adaptive representations），这些方案可证明收敛到全局最优解，同时能够直接实现。作者报告称，由此得到的算法在多种设定下超越了相对应的神经网络，性能提升往往达到一个数量级。 函数梯度下降是理解 boosting、生成式建模以及神经网络训练的一个统一理论视角，但其无限维的梯度使得忠实实现十分困难。这项工作给出了一种有原则、可证明正确的梯度近似方式，有望让研究者与实践者构建出既理论可靠、又在实验上强于标准神经网络的优化算法。 作者强调的核心注意事项是：对函数梯度进行朴素近似会导致收敛到错误的位置，因此自适应表示方案的设计目标正是保持收敛到全局最优解的保证。第一作者也坦言，这仍然只是这条研究路线的开端，未来还有相当大的潜力有待挖掘。

reddit · r/MachineLearning · /u/dccsillag0 · 9月28日 13:23

**背景**: 梯度下降是一种用于最小化可微函数的一阶迭代方法，而函数梯度下降则不同：它把整个模型视为在无限维函数空间中移动的一个点，而不是一组权重。这一视角可追溯到 2000 年那篇把 boosting 解释为梯度下降的 NIPS 论文，它统一了 boosting、生成式建模和神经网络增长等方向。由于函数梯度是无限维的，无法被完整计算或存储于内存中，因此必须进行近似，而近似的质量直接决定了算法是否会收敛到正确的解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2606.16926">Functional Gradient Descent with Adaptive Representations</a></li>
<li><a href="https://simple-complexities.github.io/optimization/functional/gradient/descent/2020/03/04/functional-gradient-descent.html">Functional Gradient Descent | Simple Complexities</a></li>
<li><a href="https://lacuna.tiptreesystems.com/direction/gradient-descent-in-infinite-dimensional-function-spaces/txn_ad143c5f47a247c4b68e9bb699e6cf16">Gradient Descent in Infinite Dimensional Function Spaces — Lacuna</a></li>

</ul>
</details>

**标签**: `#machine-learning`, `#optimization`, `#functional-gradient-descent`, `#neurips`, `#deep-learning-theory`

---

<a id="item-5"></a>
## [Star Catcher 拟首次在轨测试两颗卫星间的激光无线输能](https://www.wired.com/story/space-lasers-are-about-to-get-their-first-real-test-generating-energy/) ⭐️ 8.0/10

美国太空能源初创公司 Star Catcher 计划搭乘 SpaceX 火箭发射一台原型设备，尝试在轨道上让两个彼此独立、自由飞行的航天器之间进行首次激光能量传输。在这次名为“Protostar”的任务中，一颗航天器将以激光向一颗不受系绳连接的 CubeSat（立方星）传输能量，公司称这可能成为该类技术在轨的首次可测量验证。 如果测试成功，激光无线输能有望让卫星按需补充电力，而不必携带体积庞大的电池，从而降低质量与成本，并有可能支撑太空数据中心这类高能耗设施。这也指向一种商业化的“太空电网”模式，为卫星在轨服务与延寿带来新的商业机会。 据该公司介绍，这套系统可直接对接卫星现有的太阳能电池板，无需改装，并能按需提供高达 10 倍的电力。Star Catcher 此前已与 Loft Orbital 合作完成首次飞行验证任务，在轨道上演示了其航天器捕获与跟踪软件，并已融资 6500 万美元用于建设该网络；不过此次测试仍属原型验证，而非已经投入运营的服务。

telegram · zaihuapd · 9月28日 12:21

**背景**: 光能无线输能（optical power beaming）的原理是：先由“能源节点”汇集并聚焦太阳光，将其转换为激光束，再照射到另一颗卫星的太阳能电池板上，使电池板如同被阳光照射一样发电。这与激光通信不同——后者利用自由空间光链路以高带宽传输数据，而非传输能量；但两者都依赖将极窄的光束精确对准远处的航天器。由于太阳能电池板会随 time 衰减，而卫星所携电池质量又受限，用光为卫星在轨“补能”长期以来被视为延长任务寿命的重要目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.softonic.com/articles/star-catcher-targets-a-2026-space-power-beaming-test-laser-energy-between-satellites">Star Catcher targets a 2026 space power-beaming test: laser ...</a></li>
<li><a href="https://www.star-catcher.com/technology">Star Catcher | The Star Catcher Network</a></li>
<li><a href="https://www.space.com/technology/star-catcher-just-raised-usd65-million-to-build-the-worlds-first-power-grid-in-space-with-lasers">Star Catcher just raised $65 million to build the world's first power grid in space — with lasers</a></li>

</ul>
</details>

**标签**: `#space technology`, `#wireless power transmission`, `#satellites`, `#lasers`, `#Star Catcher`

---

<a id="item-6"></a>
## [SpaceX 星舰首次入轨，部署 26 颗星链卫星后提前返航](https://apnews.com/article/spacex-starship-orbit-262d3c58d56bf7a525b49115d6c5dfe8) ⭐️ 8.0/10

9 月 28 日，SpaceX 星舰从得克萨斯州 Starbase 发射升空并首次进入轨道，成功部署了 26 颗最新款星链（Starlink）卫星。这是三年内第 14 次全尺寸发射；由于一台发动机过早关机，任务被迫缩短——控制团队仍按计划完成了入轨，但随后决定提前结束飞行，飞船最终溅落在夏威夷以北的太平洋海域。 入轨是星舰必须证明的关键里程碑，只有跨过这一步，它才有资格承担商业载荷以及 NASA 阿尔忒弥斯（Artemis）登月计划的任务——而星舰正是该计划选定的载人着陆器。此次成功在轨部署卫星，也增强了 SpaceX 用自家火箭扩容星链星座的能力，进一步巩固其在发射服务与卫星互联网领域垂直整合的优势地位。 原计划飞行约 10 小时、绕地球 6 圈，最终因提前终止而未能完成；SpaceX 没有说明发动机为何过早关机，也没有解释提前结束飞行的原因。本次载荷为 26 颗新一代星链卫星，因此这既是一次入轨验证，也是一次实际的卫星部署任务。

telegram · zaihuapd · 9月28日 16:06

**背景**: 星舰（Starship）是 SpaceX 研发的完全可重复使用超重型运载系统，由 Super Heavy 助推器和星舰上面级组成，是迄今人类发射过的最大火箭；所谓“入轨”需要上面级达到接近第一宇宙速度的轨道速度，而不只是飞得足够高。星链（Starlink）是 SpaceX 自建的卫星互联网星座，公司常把它当作搭载载荷来测试新火箭。NASA 的阿尔忒弥斯（Artemis）计划旨在让人类重返月球，SpaceX 的星舰已被选为“载人着陆系统”，负责把宇航员从月球轨道送上月面。

**标签**: `#SpaceX`, `#Starship`, `#spaceflight`, `#Starlink`, `#NASA Artemis`

---

<a id="item-7"></a>
## [快手可灵 4.0 宣布 10 月上线，支持 4K 与 30 秒生成](https://finance.sina.com.cn/stock/t/2026-09-28/doc-initmeau2827369.shtml) ⭐️ 8.0/10

快手可灵 AI 宣布，Kling 4.0 将于 10 月正式上线，而 Kling 4.0 Flash 已于 9 月 28 日率先开放小范围体验。新版本支持 4K 及 1080p 10-bit HDR 输出，单次可输入最多 10 张图片、5 段视频和 7 个主体，并可生成最长 30 秒的视频。 这是中国头部 AI 视频生成模型的一次重大版本跃升，把输出画质推向 4K HDR 广播级水准，并将单次生成时长拉长到 30 秒，正好覆盖短广告、产品片和社交短视频的需求。这也会加剧与 OpenAI Sora、Google Veo、Runway 等对手的竞争，同时为快手的短视频生态和创作者群体提供更强的自研生成工具。 单次 30 秒的生成能力大约是把上一代 Kling 3.0 的 15 秒上限翻了一倍，而多模态输入上限（10 张图片、5 段视频、7 个主体）明显是冲着角色一致性与多镜头叙事去的。不过快手此次并未公布定价、API 开放计划、地区上线范围或算力要求，因此 4K 与 10-bit HDR 档位在免费和付费方案中如何划分仍不明确。

telegram · zaihuapd · 9月29日 00:52

**背景**: 可灵（Kling）是快手旗下的 AI 视频生成模型系列，最早于 2024 年年中发布；2.x 一代贯穿 2025 年，并确立了“一个版本号下推出多个档位（Lite、Fast、Standard、Pro、4K）”而非单一模型的产品模式。多模态 AI 指的是系统能够同时接收并理解多种类型的数据——在这里是文本提示词，加上参考图片、视频片段和指定主体。10-bit HDR 指每个色彩通道约 10.7 亿级色深的色彩精度与高动态范围相结合，相比标准 8-bit SDR 视频，能带来更平滑的渐变过渡和更明亮的高光表现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dev.to/cc_h_6385c1b4fc86a8b8e2d7/kling-40-explained-what-the-2026-model-family-means-for-developers-29ko">Kling 4.0 Explained: What the 2026 Model Family Means for ...</a></li>
<li><a href="https://openart.ai/ai-model/kling-4-0/">Kling 4.0 – Make 30-Second AI Videos in 4K</a></li>
<li><a href="https://en.wikipedia.org/wiki/HDR10">HDR10 - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI video generation`, `#Kling 4.0`, `#Kuaishou`, `#generative AI`, `#multimodal AI`

---

