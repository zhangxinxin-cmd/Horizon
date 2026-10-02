# Horizon 每日速递 - 2026-10-02

> 从 41 条内容中筛选出 9 条重要资讯。

---

1. [Cloudflare 发布 Clef 开放权重决策模型与强化学习微调平台](#item-1) ⭐️ 8.0/10
2. [Turbopuffer 宣称独立向量数据库时代已终结](#item-2) ⭐️ 8.0/10
3. [批评文章称 Git 3.0 默认改用 SHA-256 是「代价高昂的错误」](#item-3) ⭐️ 8.0/10
4. [多个项目挖掘出 ESP32 无线射频中被隐藏的 SDR 能力](#item-4) ⭐️ 8.0/10
5. [OpenAI 与 Synopsys 发布 GPT-Synopsys，推动 AI 驱动芯片设计](#item-5) ⭐️ 8.0/10
6. [DEER 结合广义教师强制实现 RNN 百倍加速并行训练](#item-6) ⭐️ 8.0/10
7. [NeurIPS 论文发现：LLM 会接受“可信来源”提供的错误答案](#item-7) ⭐️ 8.0/10
8. [OpenAI 瓦解模型蒸馏攻击，指向月之暗面相关人员](#item-8) ⭐️ 8.0/10
9. [腾讯斥资约 70 亿美元向甲骨文租用 10 万枚 AI 芯片](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Cloudflare 发布 Clef 开放权重决策模型与强化学习微调平台](https://blog.cloudflare.com/clef-decision-models/) ⭐️ 8.0/10

Cloudflare 推出了 Clef 和 Clef-flash 系列开放权重“决策模型”，托管在 Workers AI 上，面向高速分类和智能体工作流，同时还发布了一个新的强化学习平台，允许开发者用自己的数据对决策模型进行微调。这些模型返回的是结构化的类型化决策，而不是生成的文本，直接对标 TypeSafe AI 的 Jev。 Cloudflare 是重要的基础设施厂商，因此它同时推出决策模型和微调流水线，会把“非生成式、结构化输出”这一相对小众的方向推向主流云服务。如果决策模型成为智能体流水线、路由以及人工审核分诊的标准构件，Cloudflare 就能将其与推理和托管打包销售，从而给 TypeSafe AI 这类专精厂商带来压力。 权重采用宽松许可，但训练数据和流水线并未公开，因此无法从其专有的 Qwen 起点复现模型，这也引发了“是开放权重而非开源”的质疑。独立评测显示 Clef 的质量接近 Jev（召回率 0.98 对 1.00），但 p50 延迟明显更高（约 850 毫秒对约 110 毫秒）；价格方面 Clef 为每百万输入 token 0.24 美元，Clef-flash 为 0.09 美元，而 Jev 约为 0.042 美元。

hackernews · jasondavies · 10月1日 16:18 · [社区讨论](https://news.ycombinator.com/item?id=49923692)

**背景**: 决策模型是一类不生成自然语言文本的 AI 系统，它返回带有概率估计和置信度分数的类型化数值，供其他软件直接消费。2024 年成立于旧金山的初创公司 TypeSafe AI 借用 Daniel Kahneman 的“系统 1”思维概念，将这类快速直觉式推理命名为“System One 模型”，并于 2026 年 9 月以限量早期访问形式发布了 Jev 模型。强化学习微调是一种相关技术，它使用奖励或反馈信号而非标注样本来调整模型，Cloudflare 的新平台正是把这一方法用于决策模型，让团队可以用自有数据对其进行专门化训练。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.cloudflare.com/clef-decision-models/">Introducing Clef: our open-source decision models, and new RL ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Jev_(AI_model)">Jev (AI model)</a></li>
<li><a href="https://laya.convaiinnovations.com/">Laya — 33ms Multilingual System 1 Decision Engine</a></li>

</ul>
</details>

**社区讨论**: 评论区讨论以技术实证为主，态度偏批判而非吹捧：一位独立评测者发现 Clef 质量接近 Jev，但延迟明显更高，且 flash 版本过度升级处理；其他人则拆解了每百万次决策的成本，认为与其用托管 API，不如自托管更划算。一个反复出现的反对意见是：只提供宽松的权重许可、却不公开数据与训练流水线，属于“开放权重而非开源”，因为权重并不等于源代码。还有人指出，Clef 是一次快速跟进，在 Jev 限量发布仅数周后，就已经在 TypeSafe 自家的排名上超过了 Jev。

**标签**: `#AI/ML`, `#open-weight-models`, `#reinforcement-learning`, `#LLM-inference`, `#Cloudflare`

---

<a id="item-2"></a>
## [Turbopuffer 宣称独立向量数据库时代已终结](https://turbopuffer.com/blog/rip-vector-database) ⭐️ 8.0/10

Turbopuffer 发布了一篇题为《RIP, vector database》的博客文章，认为专用的向量数据库这一品类正在被取代，并详细披露其 v3 架构放弃以 ANN 索引地址寻址的存储方式——不再以 ANN 地址作为数据的键。 向量数据库市场是随 RAG 热潮一起膨胀起来的，因此由一家知名厂商公开宣称该品类已经过时，意味着检索能力正在重新收敛回通用数据库和对象存储，而不再作为单独的产品层级存在。 核心的技术取舍在于写入放大与查询成本之间的平衡：以 ANN 地址寻址可以让查询变快，但重建索引的代价高昂；Turbopuffer 表示其索引吞吐的调优已进入收益递减阶段，因此 v3 放弃以 ANN 地址作为键，从而改变这一平衡。

hackernews · razin · 10月1日 16:01 · [社区讨论](https://news.ycombinator.com/item?id=49923466)

**背景**: 向量数据库用于存储高维嵌入向量，并借助近似最近邻（ANN）搜索进行检索——ANN 通过在搜索空间中导航而非逐一穷举比对，用一定精度换取速度。它作为检索增强生成（RAG）的检索层而流行起来，即在 RAG 中由大模型从外部知识源取回相关上下文。Turbopuffer 最初是作为无服务器向量数据库推出的，以对象存储作为数据的事实来源，并用 NVMe SSD 和内存分层作为缓存，从而让检索既便宜又快速。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://turbopuffer.com/blog/rip-vector-database">RIP, vector database</a></li>
<li><a href="https://jxnl.co/writing/2025/09/11/turbopuffer-object-storage-first-vector-database-architecture/">TurboPuffer : Object Storage-First Vector Database Architecture ...</a></li>
<li><a href="https://www.geeksforgeeks.org/machine-learning/approximate-nearest-neighbor-ann-search/">Approximate Nearest Neighbor (ANN) Search - GeeksforGeeks</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者将 Turbopuffer 的这一转变与经典的 Postgres 对 MySQL 索引设计取舍（重建索引成本与查询成本之争）做了鲜明类比；一位开发者还表示，在试用多家热门向量数据库后效果令人失望，最终自己搭建的最快检索系统是基于 SQLite 的多数据库方案。也有人对这种叙事持怀疑态度，指出向量数据库本质上一直是关于检索而非向量或存储，并调侃 AI 正经历着科技史上最剧烈的大起大落周期之一。

**标签**: `#vector-database`, `#retrieval-systems`, `#database-architecture`, `#indexing`, `#RAG`

---

<a id="item-3"></a>
## [批评文章称 Git 3.0 默认改用 SHA-256 是「代价高昂的错误」](https://blog.gitbutler.com/git-3-sha-256) ⭐️ 8.0/10

GitButler 博客上的一篇文章认为，Git 3.0 计划把默认的对象哈希算法从 SHA-1 换成 SHA-256，是一场「昂贵到难以想象、最终毫无价值且本可避免的全球性噩梦」。该文引发大量关注（196 分、213 条评论），但多数评论者并不认同其技术论点，反而对其提出质疑。 Git 是几乎所有现代软件开发所依赖的版本控制系统，因此更改其默认哈希算法会影响到每一个代码仓库、托管平台（如 GitHub、GitLab）、CI 系统以及所有解析 Git 对象的第三方工具。如果这一改动既昂贵又无必要，那么代价将由全球数百万开发者和维护者承担。 SHA-256 生成 256 位（32 字节）摘要，以 64 个十六进制字符表示，而 SHA-1 只有 40 个字符，因此迁移意味着要在整个历史中重写对象 ID，并处理两种对象格式之间的互操作问题；评论者还指出，该文混淆了抗碰撞性与抗第二原像性，因为仅靠碰撞攻击就足以在分叉仓库之间实施代码夹带。

hackernews · chmaynard · 10月1日 16:57 · [社区讨论](https://news.ycombinator.com/item?id=49924179)

**背景**: 密码学哈希函数能把任意输入转换成固定长度的「指纹」，其安全性依赖两个性质：抗原像性（无法由哈希值反推出输入）和抗碰撞性（无法找到两个不同输入产生相同哈希值）。Git 最初用 SHA-1 为每个对象（blob、tree、commit）命名，但 2017 年的「SHAttered」攻击首次给出了实用的 SHA-1 碰撞实例，从而启动了长达数年的迁移工作。Git 最终选择 SHA-256 而非 SHA-512 作为替代方案，因为 NIST 的指导以及 64 位 CPU 上的性能表现，在摘要长度、速度和工具兼容性之间取得了平衡；Git 3.0 预计将把它设为默认算法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Secure_Hash_Algorithms">Secure Hash Algorithms - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">Cryptographic hash function - Wikipedia</a></li>
<li><a href="https://shattered.io/sha-256-vs-sha-512-2026/">SHA - 256 vs SHA -512: 60% Faster on 64-Bit CPUs</a></li>

</ul>
</details>

**社区讨论**: 评论者对文章的核心论点提出了强烈反驳：kpcyrd 逐条列出其错误，指出 2017 年的 SHAttered 攻击是一次实用的概念验证，并且碰撞攻击确实会带来代码夹带风险；gandreani 指出 Fossil SCM 在 SHAttered 公布仅六天后（2017-03-01）就加入了对 SHA3-256 的支持，与 Git 的迟缓形成反差；meinersbur 引用了 Linus Torvalds 在 2007 年说过的话——Git 中的 SHA-1 只是一致性校验，而非安全特性；amluto 则认为 Git 应当让 SHA-1 与 SHA-256 两种模式之间实现更好的互相兼容。

**标签**: `#git`, `#cryptography`, `#version-control`, `#security`, `#sha-256`

---

<a id="item-4"></a>
## [多个项目挖掘出 ESP32 无线射频中被隐藏的 SDR 能力](https://www.rtl-sdr.com/various-projects-independently-find-hidden-sdr-capabilities-in-esp32-microcontrollers/) ⭐️ 8.0/10

多个独立项目发现，ESP32 微控制器可以利用其内置的 WiFi 射频实现仅接收的软件定义无线电（SDR）功能，途径是芯片中一个未公开的特性，可让固件绕过固定的 WiFi 与蓝牙功能，直接采集原始 IQ 基带采样。这一发现引发了关于信号质量、法律与出口管制风险，以及廉价通用型“射频到比特”接收机前景的讨论。 这意味着约 1 美元的通用无线芯片可被改造成廉价的“射频到比特”接收机，大幅降低 SDR 实验的门槛，让业余爱好者和嵌入式开发者也能获得原始 IQ 采样数据。但若存在任意发射（TX）的可能，乐鑫（Espressif）可能因认证、合规与出口管制的压力被迫封堵这一能力。 这些项目都刻意将功能限制为仅接收，而且信号质量仍存疑问：早期原型需要用 FPGA 为 ESP32 提供时钟，导致相位噪声较差，不过 eSpDR GitHub 项目近期的一个提交据称已在约五天前解决了这一问题。目前把数据传出芯片（例如 Reddit 上展示的 80 MSPS@10 bit）仍需 FPGA 加 USB3，而即将推出的 ESP32-S31 凭借新的 1 Gbit/s 接口，有望实现约 20–40 MSPS 的 I/Q 数据提取。

hackernews · nkw · 10月1日 15:07 · [社区讨论](https://news.ycombinator.com/item?id=49922674)

**背景**: ESP32 是乐鑫科技（Espressif Systems）推出的一系列低成本微控制器，集成了 Wi-Fi 与蓝牙，被广泛用于物联网设备。软件定义无线电（SDR）指用软件而非专用硬件来实现无线电功能，Airspy 等商用 SDR 接收机正是基于这一原理。ESP32 的 WiFi 射频内部存在一个未公开的原始 IQ 采样模式，可被改用来接收各种射频信号。由于认证、合规与出口管制方面的原因，厂商通常不会公开记录这类能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ESP32">ESP32 - Wikipedia</a></li>
<li><a href="https://www.espressif.com/en/products/socs/esp32">ESP32 Wi-Fi & Bluetooth SoC | Espressif Systems</a></li>

</ul>
</details>

**社区讨论**: 讨论总体热烈且技术性强：有评论者指出，许多 1 美元的无线芯片其实早已具备强大的隐藏 SDR 能力，只是出于认证、合规与出口管制的考虑永远不会被公开文档化，并担心一旦能够任意发射，乐鑫将被迫封堵这一功能。其他人则聚焦信号质量与相位噪声，提到 eSpDR 项目最近的提交修复了 FPGA 时钟问题，并认为凭借高速数据接口，新的 ESP32-S31 与 5GHz 模块将使这一玩法对 13cm 和 5cm 业余无线电产生革命性影响。

**标签**: `#ESP32`, `#SDR`, `#hardware-hacking`, `#embedded-systems`, `#RF`

---

<a id="item-5"></a>
## [OpenAI 与 Synopsys 发布 GPT-Synopsys，推动 AI 驱动芯片设计](https://news.synopsys.com/2026-09-30-OpenAI-and-Synopsys-Announce-GPT-Synopsys-Frontier-Intelligence-to-Revolutionize-Chip-Design) ⭐️ 8.0/10

OpenAI 与 Synopsys 联合发布了 GPT-Synopsys，这是一项面向芯片设计的“前沿智能”服务，把算力、模型和软件许可证打包成一个商业产品。该消息被视为重大行业事件，在 Hacker News 上获得了 165 分和 97 条评论。 电子设计自动化（EDA）长期是 Synopsys 与 Cadence 两家主导的寡头市场，把前沿 AI 模型引入芯片设计流程，可能大幅压缩设计周期、降低定制芯片的门槛，并改变谁掌控这一关键工具链。与此同时，它也直接引发了对设计数据保密性、供应商锁定以及工程师角色未来走向的疑问。 该联合服务被描述为提供打包的算力、模型访问与许可证，并确保客户专属设计数据受到保护，但新闻稿并未披露模型架构、基准测试结果、定价或上线时间表。Synopsys 的产品涵盖数字与模拟电路实现工具、仿真器以及调试环境，因此 GPT-Synopsys 在这一流程中具体覆盖哪些环节仍不明确。

hackernews · giuliomagnifico · 10月1日 10:21 · [社区讨论](https://news.ycombinator.com/item?id=49919910)

**背景**: 电子设计自动化（EDA）是处理复杂芯片构建的正确性、可靠性、生产力和优化的软件领域，处于电子工程与计算机科学的交叉地带。Synopsys 是一家总部位于加州 Sunnyvale 的美国跨国 EDA 公司，为半导体行业提供设计与验证工具、硅知识产权及相关服务，2024 年被评为全球第 12 大软件公司。设计一颗现代芯片需要编写硬件描述代码并进行仿真、验证，之后还要完成物理版图，这一过程历史上往往需要大型团队花费数月乃至数年，这正是用前沿模型实现自动化的意义所在。这里的“前沿智能”指的是最先进的大语言模型，与 ChatGPT 背后的技术属于同一类别。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Synopsys">Synopsys</a></li>
<li><a href="http://cc.ee.ntu.edu.tw/~jhjiang/instruction/courses/spring11-eda/eda-intro.html">Introduction to Electronics Design Automation</a></li>

</ul>
</details>

**社区讨论**: 评论者的态度在乐观与怀疑之间分化：有投资者认为更快更便宜的 AI 芯片设计最终会让台积电、Intel、三星等晶圆厂受益，因为会催生大量定制芯片；也有人警告存在“锁定闭环”——数据封闭的专有 EDA 工具迫使 AI 实验室在其上训练模型，随后再同时向用户收取工具费和模型费。多名工程师担心这类工具对初级工程师伤害最大，因为它剥夺了培养判断力的学习机会；还有人质疑 Nvidia 是否真会把自家芯片设计交给 OpenAI，并指出像修复 Synopsys 老旧代码库中 GCC 警告这类枯燥的遗留工作，正是前沿模型如今几天内就能完成的。

**标签**: `#AI`, `#chip-design`, `#EDA`, `#OpenAI`, `#Synopsys`

---

<a id="item-6"></a>
## [DEER 结合广义教师强制实现 RNN 百倍加速并行训练](https://www.reddit.com/r/MachineLearning/comments/1wuz2s4/parallelintime_training_of_recurrent_neural/) ⭐️ 8.0/10

一篇被 NeurIPS 2026 接收为 spotlight 的论文《Parallel-in-Time Training of Recurrent Neural Networks for Dynamical Systems Reconstruction》（预印本 arXiv:2605.12683）提出，将 DEER 与广义教师强制（GTF）结合，可将非线性 RNN 在混沌时间序列上的训练速度提升 100 倍以上。该方法恢复了 DEER 原本的 O[(log T)²] 复杂度——其在混沌动力学下通常会退化到 O(T log T)——并使得在 T > 10^6 的超长序列上也能稳定训练。 非线性 RNN 的顺序训练长期以来是可扩展性瓶颈，正是这一瓶颈推动了大量研究转向 Mamba 等状态空间模型；因此在混沌数据上既快速又稳定的并行时间训练方法，有可能让 RNN 重新成为动力系统重构（DSR）的实用工具。这对气候建模、神经科学、物理仿真等科学机器学习领域尤为重要，因为这些场景中的长混沌轨迹是常态，而论文报告在该 DSR 设定下其方法大幅优于 Mamba 及其他状态空间模型。 DEER 通过在整个序列长度 T 上进行牛顿型不动点迭代来求解 RNN 前向传播，从而实现 GPU 并行；但它在轨迹发散的混沌动力学下会失效。GTF 通过在预测状态与目标状态之间做线性插值来稳定该过程，既能防止发散，又比传统教师强制的曝光偏差更小。论文的命题 1 指出，只要选取合适的参数 α，GTF-DEER 就能保证前向传播收敛，且与数据背后的动力学无关。

reddit · r/MachineLearning · /u/DangerousFunny1371 · 10月1日 13:12

**背景**: 循环网络必须逐时间步处理序列，因此其计算无法像 Transformer 那样分散到大量 GPU 核心上，导致超长序列的训练非常缓慢。DEER（出自论文《Towards Scalable and Stable Parallelization of Nonlinear RNNs》）把逐步的前向传播改写成一个不动点方程，从而可以沿时间轴并行求解。教师强制是训练 RNN 的常规做法，它把真实状态作为输入喂给网络，但在混沌系统中小误差会指数级放大，造成训练与测试不一致，即所谓的曝光偏差。Mamba 等状态空间模型依靠线性递推实现并行，但对强非线性混沌动力学的表达能力较弱，这正是本文试图填补的空白。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2605.12683v1">Parallel-in-Time Training of Recurrent Neural Networks for ...</a></li>
<li><a href="https://arxiv.org/html/2407.19115v3">Towards Scalable and Stable Parallelization of Nonlinear RNNs</a></li>
<li><a href="https://arxiv.org/abs/2306.04406">Generalized Teacher Forcing for Learning Chaotic Dynamics</a></li>

</ul>
</details>

**标签**: `#RNN`, `#parallel-in-time`, `#dynamical-systems`, `#NeurIPS`, `#machine-learning`

---

<a id="item-7"></a>
## [NeurIPS 论文发现：LLM 会接受“可信来源”提供的错误答案](https://www.reddit.com/r/MachineLearning/comments/1wv1c2e/llms_that_push_back_on_a_wrong_user_still_accept/) ⭐️ 8.0/10

一篇 NeurIPS 2026 论文（由作者之一在 r/MachineLearning 上发布）提出了被称为“权威偏见”（Authority Bias）的现象：当用户坚持一个错误答案时，LLM 能够坚持己见，但当同一个错误答案被包装成来自“可信来源”时，模型却会接受它。作者报告称，仅仅加入一条“可信来源”说明，就能让 8 个被测模型中的 7 个把 45%–88% 的原本正确答案改掉，而同样的错误说法由用户提出时，大多数模型改答案的比例要低得多。 现有的谄媚（sycophancy）评测大多通过用户施加压力，因此模型即便通过了这些评测，仍可能被搜索结果、检索到的文档或工具输出轻易误导。随着 AI 研究快速走向智能体（agentic）与自主系统——这类系统往往更信任工具输出而非用户纠正——这一盲区给实际部署的智能体带来了切实的错误信息风险。 实验设置使用模型本来就能答对的 TriviaQA 问题，再向其中加入同一个错误答案，形式要么是“根据可信来源，答案是 X”，要么是用户自称领域专家给出该答案；回答为自由文本，而在多项选择的预实验中该效应基本消失。GPT-5.4 有 44.7% 的题目被改答案，Grok-4.20 高达 87.5%，而 Gemini-3.1-Pro 对两种说法都几乎无动于衷（0.6%）；在模型内部，移除“来源认可该答案”方向可使顺从率下降 64–78 个百分点，而移除“用户认可该答案”方向最多只下降 11 个百分点，两个方向的余弦相似度约为 0.90–0.99。作者也指出了局限：内部干预仅在 5 个开源权重模型家族中的 3 个成立（OLMo-2 中来源方向与助手方向纠缠，Gemma-4 对作者尝试的所有线性干预都不响应），并且“检索文档”条件只是把说法放进文档形式的提示块中，而非运行真实的检索流程。

reddit · r/MachineLearning · /u/MajorRedditor23 · 10月1日 14:45

**背景**: 大语言模型中的“谄媚”（sycophancy）是指模型倾向于附和用户、采纳用户的表述框架并维护用户的自我形象，而不是优先追求真相或提出质疑，这已成为一个重要的可靠性与安全性问题。TriviaQA 是一个广泛使用的阅读理解数据集，包含超过 65 万条“问题—答案—证据”三元组，因此很适合用来检验模型是否会放弃它原本答对的答案。“权威偏见”一词借自人类心理学，指人们倾向于信服由权威来源呈现的信息；本文测量的正是 LLM 中与此类似的、对算法或工具输出的盲从。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Sycophancy_(artificial_intelligence)">Sycophancy (artificial intelligence) - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2411.15287">Sycophancy in Large Language Models : Causes and Mitigations</a></li>
<li><a href="https://arxiv.org/abs/1705.03551">[1705.03551] TriviaQA : A Large Scale Distantly Supervised Challenge...</a></li>

</ul>
</details>

**标签**: `#LLM Safety`, `#AI Alignment`, `#Sycophancy`, `#Agentic AI`, `#Misinformation`

---

<a id="item-8"></a>
## [OpenAI 瓦解模型蒸馏攻击，指向月之暗面相关人员](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/) ⭐️ 8.0/10

OpenAI 表示已瓦解一起有组织的模型蒸馏活动，攻击者通过操纵与模型的交互来提取受保护的推理内容。该活动最早出现在 2026 年 7 月初，7 月 24 日至 25 日达到高峰，涉及 4000 多名用户的约 1.6 万次请求；截至 7 月 28 日，OpenAI 已瓦解涉及 1.5 万余名用户的相关活动，并将核心活动归因于与 Kimi 开发商月之暗面有关的人员。 这是一家头部前沿实验室少见的公开点名行为，将矛头指向竞争对手公司相关人员，令 AI 行业的竞争、法律与政策风险显著上升。同时这也表明，模型蒸馏——利用竞品 API 的输出训练自家模型——正成为一类重要的安全与治理议题，各实验室已开始通过 Frontier Model Forum 等机制协调应对。 OpenAI 称该活动通过操纵交互来提取受保护的推理内容，并表示已通过 Frontier Model Forum 等渠道与业界和政府部门共享信息。据报道的规模——约四周内数万次请求、1.5 万余名用户的相关活动被瓦解——说明该行动依赖对 OpenAI 接口的大规模自动化查询，而非单一漏洞利用。

telegram · zaihuapd · 10月1日 01:18

**背景**: 模型蒸馏通常指用大模型（教师模型）的输出来训练一个更小的学生模型；若未获授权针对商业 API 进行，则常被称为蒸馏攻击或模型提取攻击，因为攻击者实际上是通过大量采集“提问—回答”数据对来克隆模型能力。Anthropic 等公司已公开介绍过检测和阻止此类攻击的方法，说明这是全行业共同面临的问题，而非某一家厂商的独有困扰。Frontier Model Forum 是由 Anthropic、Google、Microsoft 和 OpenAI 于 2023 年共同发起的行业支持型非营利组织，旨在制定最佳实践、推进安全研究，并促进业界、政府与学术界之间的信息共享。月之暗面是一家中国 AI 公司，以其 Kimi 助手和 Kimi 系列大语言模型而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks">Detecting and preventing distillation attacks \ Anthropic</a></li>
<li><a href="https://www.frontiermodelforum.org/">Frontier Model Forum</a></li>
<li><a href="https://openai.com/index/frontier-model-forum/">Frontier Model Forum - OpenAI</a></li>

</ul>
</details>

**标签**: `#AI`, `#model-distillation`, `#OpenAI`, `#Moonshot-AI`, `#AI-security`

---

<a id="item-9"></a>
## [腾讯斥资约 70 亿美元向甲骨文租用 10 万枚 AI 芯片](https://www.ft.com/content/8799b33d-f07c-4a03-82f0-bf5d3d1d29e9) ⭐️ 8.0/10

腾讯与甲骨文签订了一份价值约 70 亿美元、为期五年的租约，租用约 10 万枚其在中国境内无法直接购买的先进 AI 芯片，这是腾讯迄今规模最大的海外租赁交易。所租算力覆盖东南亚多个数据中心，目的是加速腾讯的 AI 大模型与智能体（Agent）工具开发。 这笔交易表明，美国的出口管制正促使中国 AI 巨头把“海外算力”作为绕开限制的现实路径，而非本土芯片的替代品，从而改变前沿 AI 训练的地理分布。同时，它也让一直以来以企业数据库见长的甲骨文成为重要的 AI 基础设施供应方，并显示东南亚正在成为中国企业的重要算力枢纽。 该租约期限为五年、总额约 70 亿美元，其中约 30%的款项需要预付，芯片部署在甲骨文位于东南亚的多个数据中心内。报道未明确说明具体租用的是哪几款芯片；美国规定禁止中国企业直接购买英伟达高端芯片等先进 AI 加速器，但允许在海外以租赁方式获取算力。

telegram · zaihuapd · 10月1日 05:07

**背景**: 自 2022 年以来，美国以国家安全为由逐步收紧对华先进 AI 加速器（如英伟达 H100、H200 及 Blackwell 系列）的出口管制。由于限制针对的是直接购买和向中国出口，中国企业越来越多转向在海外租用算力，这种模式有时被称为“离岸算力”或“云端借算力”。腾讯是中国最大的云与 AI 厂商之一，正与阿里巴巴、字节跳动在大模型和智能体工具上展开竞争，而这些业务需要规模庞大的 GPU 集群。

<details><summary>参考链接</summary>
<ul>
<li><a href="http://m.chinaaet.com/article/3000176433">7.5万颗上 限 英 伟 达 H 200 对 中 国 出 口 恐再收紧-AET-电子技术应用</a></li>
<li><a href="https://www.tuoluo.cn/article/detail-10127212.html">热点丨 英 伟 达 H 200 解禁入华，带着25%“ 买 路钱”的“甜与痛”_陀螺科技</a></li>

</ul>
</details>

**标签**: `#AI Infrastructure`, `#Tencent`, `#Oracle`, `#Export Controls`, `#Cloud Computing`

---

