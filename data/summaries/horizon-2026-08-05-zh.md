# Horizon 每日速递 - 2026-08-05

> 从 31 条内容中筛选出 11 条重要资讯。

---

1. [哈萨比斯转任 DeepMind 董事长，杰夫·迪恩离开谷歌](#item-1) ⭐️ 9.0/10
2. [ChainDrop 蠕虫攻陷超 1300 个 npm 包](#item-2) ⭐️ 9.0/10
3. [杰夫·迪恩等人创立 Discovery Loop 以自动化 AI 研究](#item-3) ⭐️ 8.0/10
4. [Meta 投放含 AI 生成的儿童性虐待图像广告](#item-4) ⭐️ 8.0/10
5. [Cloudflare OS：面向智能体、应用与工作的开放平台](#item-5) ⭐️ 8.0/10
6. [LLM 0.32 新增推理轨迹、服务端工具及 OpenAI Responses API 支持](#item-6) ⭐️ 8.0/10
7. [开源应用 LiveTranscriber 在 iPhone 上完全离线运行 Whisper、Qwen3-ASR 等模型](#item-7) ⭐️ 8.0/10
8. [Monodratic：用于稀疏因果注意力的学习乘积哈希路由](#item-8) ⭐️ 8.0/10
9. [马斯克宣布 SpaceX 将独家采用英伟达 AI 架构](#item-9) ⭐️ 8.0/10
10. [DeepSeek 重启第二轮融资 投前估值 5000 亿元](#item-10) ⭐️ 8.0/10
11. [三星与 SK 海力士据报测试中国芯片设备 对冲美国出口管制风险](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [哈萨比斯转任 DeepMind 董事长，杰夫·迪恩离开谷歌](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/) ⭐️ 9.0/10

2026 年 8 月 5 日，谷歌宣布戴密斯·哈萨比斯将卸任 Google DeepMind CEO 并出任董事长；杰夫·迪恩和桑杰·格玛沃特离开谷歌，创办一家独立的公益公司（public benefit corporation），专注于加速机器学习、科学和工程领域的发现。 这次领导层变动标志着 Google DeepMind 一个黄金时代的结束，并可能加速人才外流，因为杰夫·迪恩和桑杰·格玛沃特是 AI 领域最具标志性的工程师之一。这也引发了对谷歌在竞争加剧、Gemini 缺乏重大更新之际能否留住顶尖 AI 人才的质疑。 杰夫·迪恩的离开结束了他在谷歌 27 年的职业生涯。这家新的公益公司名为 Discovery Loop，计划首先利用自己的平台改进机器学习研究。同时，据社区分析，哈萨比斯实际上将在整个 Alphabet 范围内承担更广泛的首席科学家角色。

hackernews · colesantiago · 8月5日 16:05 · [社区讨论](https://news.ycombinator.com/item?id=49184755)

**背景**: Google DeepMind 是谷歌的核心 AI 研究部门，2023 年由 DeepMind 与 Google Brain 团队合并而成。公益公司（PBC）是一种营利性实体，法律上要求其在追求股东价值的同时实现既定公益目标，Anthropic 等 AI 公司也采用这种结构。Discovery Loop 是杰夫·迪恩和桑杰·格玛沃特创办的新企业，旨在自动化并加速科学发现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - Wikipedia</a></li>
<li><a href="https://elsolitario.org/en/2026/08/05/discovery-loop-jeff-dean-automate-science/">Discovery Loop : Automating AI Research</a></li>
<li><a href="https://superintelligencenews.com/ai-fields/large-language-models/google-ai-startup-discovery-loop/">Google AI Startup Discovery Loop Launches</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论者大多认为杰夫·迪恩和桑杰·格玛沃特的离开比哈萨比斯的职位变动更重要，哀叹谷歌“黄金时代的结束”。一些人指出，谷歌最近失去了包括诺姆·沙泽尔、奥里奥尔·比尼亚尔斯和约翰·詹珀在内的多位知名 AI 研究员，却没有任何重量级新成员加入；还有人注意到消息公布后谷歌股价下跌约 5%，并开玩笑地补充了关于股价下跌的“新杰夫·迪恩事实”。

**标签**: `#Google DeepMind`, `#AI Leadership`, `#Jeff Dean`, `#Demis Hassabis`, `#Industry News`

---

<a id="item-2"></a>
## [ChainDrop 蠕虫攻陷超 1300 个 npm 包](https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/) ⭐️ 9.0/10

名为 ChainDrop 的自我传播蠕虫已入侵超过 1300 个 npm 包，包括流行的缓存库 Keyv 和 Cacheable，合计月下载量达 20 亿次。攻击始于对 Keyv 维护者 GitHub 账号的攻破，并通过看似正常的 GitHub Actions 工作流传播，甚至带有合法的来源证明。 这是一次影响广泛下载包的关键供应链攻击，任何安装过受影响版本的人都应将系统视为已被攻破。该蠕虫会窃取 GitHub、npm、AWS、Kubernetes 以及云平台凭证，可能影响数以万计依赖这些包的开发者和组织。 恶意文件 setup.mjs 投放器和 Math_Symbol.js 窃密脚本会在执行 npm install 时自动运行。该蠕虫会从官方 GitHub releases 下载未修改的 Bun 二进制文件，用于执行混淆的第二阶段载荷，并将数据外传至 npm-cache[.]com 域名，同时通过以太坊智能合约进行命令与控制服务器查询。

telegram · zaihuapd · 8月5日 03:04

**背景**: npm 是 JavaScript 和 Node.js 的默认包管理器，供应链攻击是指恶意代码被发布到合法包中，然后在开发者的机器上执行。ChainDrop 之所以被称为蠕虫，是因为它会利用窃取的 npm 发布凭证，将恶意代码注入其他包，从而实现自我传播。Keyv 和 Cacheable 这两个广泛使用的缓存库遭到入侵，使攻击触及了大量安装用户。此次攻击反映了针对开源注册表的凭证窃取恶意软件日益增长的趋势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/">Massive ChainDrop npm supply-chain attack infects hundreds of packages</a></li>
<li><a href="https://www.stepsecurity.io/blog/chaindrop-npm-worm">ChainDrop npm Worm: Bun-loaded CI/CD credential harvester with Ethereum dead-drop C2 - StepSecurity</a></li>
<li><a href="https://www.endorlabs.com/learn/npm-malware-compromises-keyv-and-cacheable-with-500m-weekly-downloads-and-spreads-to-hundreds-of-packages">NPM Malware Compromises keyv and cacheable with... | Endor Labs</a></li>

</ul>
</details>

**标签**: `#security`, `#npm`, `#supply-chain`, `#malware`, `#worm`

---

<a id="item-3"></a>
## [杰夫·迪恩等人创立 Discovery Loop 以自动化 AI 研究](https://www.discoveryloop.com/) ⭐️ 8.0/10

Discovery Loop 是由前 Google DeepMind 领导者 Jeff Dean、Sanjay Ghemawat、Quoc Le 和 Oriol Vinyals 创立的新实验室。该计划旨在自动化机器学习研究的实验循环，最初聚焦于机器学习和工程，再扩展到其他科学与工程领域。 这可能通过自动化实验过程大幅加速 AI 研究，减少人工运行和评估实验的繁琐工作。这也标志着顶级 AI 研究人员离开大型科技公司创办自己的研究初创企业的趋势，可能重塑 AI 格局。 该公司将首先专注于自动化机器学习研究和工程，以 Discovery Loop 自身作为第一个客户。改进后的软件随后计划成为 AI 系统的核心，以解决其他领域的问题，包括一些美国国家工程院（NAE）重大挑战问题。

hackernews · xtreak29 · 8月5日 16:19 · [社区讨论](https://news.ycombinator.com/item?id=49184960)

**背景**: 传统的机器学习研究涉及通过假设、实验设计、编码、运行实验和分析结果进行迭代，其中大部分是手动完成的。Andrej Karpathy 的开源项目 AutoResearch 展示了一个 AI 代理循环来自动化这个过程，而 Discovery Loop 似乎是在机构层面上将这个想法规模化。通过自动化实验循环，研究人员希望能大幅加快发现的周期。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www-wired-com.nproxy.org/story/jeff-dean-google-discovery-loop-startup/">Google’s Top AI Brains Are Leaving to Launch Discovery Loop | WIRED</a></li>
<li><a href="https://elsolitario.org/en/2026/08/05/discovery-loop-jeff-dean-automate-science/">Discovery Loop : Automating AI Research</a></li>
<li><a href="https://www.datacamp.com/tutorial/guide-to-autoresearch">A Guide to Andrej Karpathy’s AutoResearch: Automating ML with AI Agents | DataCamp</a></li>

</ul>
</details>

**社区讨论**: 评论者将 Discovery Loop 与 Karpathy 的 AutoResearch 项目相提并论，认为它是该项目的超大规模版本。一些人对自动化物理实验持怀疑态度，认为 AI 仅限于思维和设计领域，而另一些人则打趣说 Google 是在为高级工程师们建一个“退休之家”。整体情绪是多元的，但讨论非常热烈。

**标签**: `#machine-learning`, `#research-automation`, `#AI`, `#experimentation`, `#Karpathy`

---

<a id="item-4"></a>
## [Meta 投放含 AI 生成的儿童性虐待图像广告](https://www.wired.com/story/meta-ran-ads-that-contained-ai-generated-child-sexual-abuse-imagery/) ⭐️ 8.0/10

据 Wired 报道，Meta 在其平台上投放了包含 AI 生成的儿童性虐待材料（CSAM）的广告，暴露出内容审核和 AI 安全实践方面的漏洞。这些广告绕过了 Meta 的审查系统，凸显了识别合成有害内容方面的关键缺口。 此事意义重大，因为它表明即使像 Meta 这样拥有大量审核资源的平台，也难以识别 AI 生成的违规内容。这引发了关于现行 AI 安全措施和平台责任的紧迫质疑，可能影响监管和公众对 Meta 及其他科技公司的信任。 该报道指出，AI 生成的 CSAM 越来越逼真且可大规模制作，使得检测比传统形式更为困难。Meta 的广告审查系统显然未能标记这些图像，凸显了采用更强有力的审核工具、更严格的审查流程以及可能专用 AI 检测技术的必要性。

hackernews · malshe · 8月5日 19:47 · [社区讨论](https://news.ycombinator.com/item?id=49187977)

**背景**: 儿童性虐待材料（CSAM）指任何以图像、视频或计算机生成方式描绘未成年人进行露骨性行为的内容。扩散模型和 GAN 等生成式 AI 技术的进步，使得大规模创建逼真的 CSAM 成为可能，其速度超过了感知哈希等传统检测工具。内容审核员同时面临挑战，因为合成内容需要不同的检测方法，且海量的广告可能压垮审核系统。这一背景有助于理解为何 Meta 的广告审查流程未能拦截 AI 生成的 CSAM。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://childrenofindia.in/how-ai-is-being-used-to-detect-child-sexual-abuse-material-csam-online/">How AI is Being Used to Detect Child Sexual Abuse Material ...</a></li>
<li><a href="https://factually.co/fact-checks/justice/detecting-ai-generated-child-sexual-abuse-material-technical-methods-effectiveness-7fd8f8">What Technical Methods Detect AI ‑ Generated Child Sexua...</a></li>
<li><a href="https://support.google.com/transparencyreport/answer/10330933?hl=en">Google’s Efforts to Combat Online Child Sexual Abuse Material FAQs...</a></li>

</ul>
</details>

**社区讨论**: 评论者对平台审核表现出悲观态度，有人指出 YouTube 上也有露骨广告漏网，还有人表示 Meta 还允许暗示对政客实施暴力的广告。有评论认为监管罚款只是企业运营成本，不会促使改变；也有人提出，拥有人工编辑的地方报纸可能比算法驱动的平台更好。

**标签**: `#AI safety`, `#content moderation`, `#child safety`, `#Meta`, `#platform policy`

---

<a id="item-5"></a>
## [Cloudflare OS：面向智能体、应用与工作的开放平台](https://blog.cloudflare.com/cloudflare-os/) ⭐️ 8.0/10

Cloudflare 发布了 Cloudflare OS，这是一个开源 AI 操作系统，企业可以根据自身的上下文、工具和规则进行定制。该平台基于 Cloudflare Workers 构建，据报道 Cloudflare 内部大部分员工已在使用。 这一发布标志着 Cloudflare 雄心勃勃地进军 AI 智能体生态，提供了一个开放的、基于边缘计算的平台，可能与其他智能体框架展开竞争。它可能会深刻影响那些希望在可扩展的无服务器基础设施上构建和部署 AI 智能体的开发者和企业。 根据社区观察，Cloudflare OS 直接使用了 pi-agent，而非 Cloudflare 自家的 Agents SDK、Think 或 Flue 工具链。Kenton Varda 指出，它是对他早前创业项目 Sandstorm.io 的重制，构建于 Cloudflare Workers 之上，并深度整合了 AI。

hackernews · speckx · 8月5日 13:58 · [社区讨论](https://news.ycombinator.com/item?id=49182996)

**背景**: Cloudflare 是一家重要的互联网基础设施公司，以 CDN、DDoS 防护和边缘计算平台 Workers 闻名。AI 智能体是能够独立完成复杂任务的系统，目前许多平台都提供了构建此类智能体的框架或工具链。Cloudflare OS 被定位为一个开源的 AI 生产力“操作系统”，让组织能够根据自身工作流程和工具进行定制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cloudflare,_Inc.">Cloudflare, Inc.</a></li>
<li><a href="https://os.cloudflare.app/">Cloudflare OS</a></li>
<li><a href="https://github.com/cloudflare/cloudflare-os">GitHub - cloudflare / cloudflare - os : Agent workspace built on...</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一：有人认可 Kenton Varda 的观点，但对供应商锁定表示担忧；也有人质疑“OS”这一命名过于模糊或滥用。一条技术评论询问 Cloudflare 为何选择 pi-agent 而不是自家的 Agents SDK 或工具链，显示出对实现细节的真实兴趣。

**标签**: `#Cloudflare`, `#AI agents`, `#developer platform`, `#open source`, `#serverless`

---

<a id="item-6"></a>
## [LLM 0.32 新增推理轨迹、服务端工具及 OpenAI Responses API 支持](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything) ⭐️ 8.0/10

Simon Willison 发布了 LLM 0.32，这是该命令行工具自推出以来最重要的版本，新增了可见的推理轨迹、服务端工具（OpenAI CodeInterpreter 与 WebSearch）、OpenAI Responses API 集成，以及重新设计的基于内容寻址的 SQLite 日志。配套的 llm-anthropic 插件 0.26 增加了 WebSearch、WebFetch、CodeExecution 和 AnthropicMCP 工具，默认模型也改为 GPT-5.6 Luna。 此次发布使 LLM 用户在命令行中就能查看模型的隐藏推理轨迹并直接调用服务端工具，是提升模型行为透明度和可及性的重要一步。它还让 LLM 成为支持 OpenAI Responses API 的现代化客户端，惠及大量依赖它进行快速提示和自动化的开发者。 推理轨迹会输出到标准错误流，因此不会污染管道中传给其他工具的标准输出，并可通过新的 -R/--hide-reasoning 参数隐藏。重新设计的日志采用内容寻址，意味着条目很可能按内容哈希去重。新增的 `llm openai endpoint` 命令可对任意兼容 OpenAI 的端点执行一次性提示词而不记录日志；llm-anthropic 插件还可调用如 datasette-mcp 等远程 MCP 服务器。

rss · Simon Willison · 8月4日 23:58

**背景**: LLM 是开发者 Simon Willison 推出的命令行工具，允许用户在终端中向不同的大语言模型发送提示词。推理轨迹是 OpenAI o 系列等推理模型在回答之前产生的隐藏思维链步骤。OpenAI Responses API 是 OpenAI 用于构建智能体应用的新接口，取代了旧的 Chat Completions API。内容寻址存储通过内容哈希而非位置来标识数据，从而简化去重与缓存。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developers.openai.com/api/reference/responses/overview">Responses Overview | OpenAI API Reference</a></li>
<li><a href="https://en.wikipedia.org/wiki/Reasoning_model">Reasoning model - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Content-addressable_storage">Content - addressable storage - Wikipedia</a></li>

</ul>
</details>

**标签**: `#LLM`, `#CLI`, `#AI`, `#OpenAI`, `#release`

---

<a id="item-7"></a>
## [开源应用 LiveTranscriber 在 iPhone 上完全离线运行 Whisper、Qwen3-ASR 等模型](https://www.reddit.com/r/MachineLearning/comments/1vgbl7w/running_whisper_qwen3asr_nemotron_moss_completely/) ⭐️ 8.0/10

开发者发布了 LiveTranscriber，这是一款开源 iOS 应用，可完全离线运行 Whisper、Qwen3-ASR、NVIDIA Nemotron Streaming、MOSS Multi-Speaker 与 Qwen3，用于转录、翻译和摘要。应用已在 GitHub 和 App Store 上发布。 这表明多种现代语音与语言模型可以转化为实用的端侧移动产品，而不仅仅是技术演示。它为在 iPhone 上解决内存管理、流式延迟和推理后端切换等问题提供了参考，对更广泛的端侧 AI 生态具有意义。 该应用支持 100% 离线语音识别、多说话人转录、端上摘要、实时翻译、Apple Watch 录音自动同步以及可切换的本地模型。主要工程挑战包括内存管理、流式延迟、模型加载、上下文处理、电池消耗以及在不同推理后端之间切换。

reddit · r/MachineLearning · /u/marshmallow_ki · 8月5日 16:04

**背景**: 自动语音识别（ASR）模型将语音转换为文本，Whisper、Qwen3-ASR、Nemotron Streaming 与 MOSS 等模型均已以开源权重形式发布。要在手机上完全离线运行这些模型，需要将其转换为 Core ML 或 MLX 等格式，并优化内存和延迟。例如，Qwen3-ASR 是支持 52 种语言的开源系列，而 Nemotron Streaming 是一个 0.6B 参数的英文流式 ASR 模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Qwen3-ASR">Qwen3-ASR</a></li>
<li><a href="https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b">nvidia/ nemotron - speech - streaming -en-0.6b · Hugging Face</a></li>
<li><a href="https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize">OpenMOSS-Team/ MOSS - Transcribe -Diarize · Hugging Face</a></li>

</ul>
</details>

**标签**: `#iOS`, `#on-device ML`, `#speech recognition`, `#open-source`, `#Whisper`

---

<a id="item-8"></a>
## [Monodratic：用于稀疏因果注意力的学习乘积哈希路由](https://www.reddit.com/r/MachineLearning/comments/1vg3jda/monodratic_learned_producthash_routing_for_sparse/) ⭐️ 8.0/10

Monodratic 是一种新颖的稀疏因果注意力架构，使用学习型乘积哈希路由来选择远程源块，然后对选中的 token 执行精确的因果 softmax。在合成联想回忆测试中，学习路由仅选择两个远程块就取得了 763/768 的正确率（平均 99.35%），而未训练路由为 425/768，仅局部注意力为 151/768。 这项工作表明，学习路由可以在保持有界注意力预算的同时保留强大的联想回忆能力，而联想回忆是序列模型的关键能力。它为需要在长上下文中进行注意力而不承担完全二次复杂度开销的高效 transformer 提供了一个有前景的方向。 该架构实现为无状态的 [batch, sequence, width] -> attention-delta 混合器，将归一化、残差更新、前馈层和推理调度留给宿主模型。报告结果包括学习路由运行中零发布列表溢出、从 4,096 到 32,768 token 的 CPU 路由拟合时间指数为 0.993，以及与独立稠密选中掩码 oracle 的最大绝对误差为 1.43e-6；局限包括实验为合成数据、使用可移植 PyTorch 而非融合内核，并且未声称具备自然语言质量或部署速度。

reddit · r/MachineLearning · /u/dttdrv · 8月5日 10:28

**背景**: 稀疏注意力机制的目标是通过只关注一部分 token 来降低标准 transformer 注意力的二次复杂度。联想回忆——在上下文中较早的位置检索与某个键相关联的值——是检验高效架构能否媲美全注意力的核心测试。RoPE（旋转位置编码）利用旋转矩阵编码 token 位置，并被现代 LLM 广泛采用。乘积哈希是一种将高维键映射为紧凑地址元组的分桶方案，Monodratic 用它来将查询路由到候选源块。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2603.20997v1">When Does Content-Based Routing Work? Representation Requirements for Selective Attention in Hybrid Sequence Models</a></li>
<li><a href="https://adalkiran.github.io/llama-nuts-and-bolts/10-ROPE-ROTARY-POSITIONAL-EMBEDDINGS/">RoPE ( ROTARY POSITIONAL EMBEDDINGS ) - Llama Nuts and Bolts</a></li>
<li><a href="https://arxiv.org/pdf/2312.04927">Zoology: Measuring and Improving Recall in Efficient Language</a></li>

</ul>
</details>

**标签**: `#sparse attention`, `#transformer`, `#machine learning`, `#routing`, `#efficient attention`

---

<a id="item-9"></a>
## [马斯克宣布 SpaceX 将独家采用英伟达 AI 架构](https://wccftech.com/elon-musk-commits-spacex-exclusively-to-nvidia-gpus-citing-theyre-the-best/) ⭐️ 8.0/10

在 8 月 4 日 SpaceX 首次财报电话会上，马斯克表示 SpaceX 的 AI 服务将独家基于英伟达系统运行，特别是 Vera Rubin 架构。公司还计划在地面数据中心和太空中部署 Vera Rubin NVL72 机架，包括用于 Starmind 卫星项目。 这一决定巩固了英伟达在 AI 硬件领域的主导地位，并将其扩展到太空计算领域，可能催生轨道 AI 基础设施。这标志着 SpaceX 与英伟达之间的重大战略合作，可能影响太空 AI 加速器的市场格局。 SpaceX 预计今年年底 AI 计算能力将超过 2 吉瓦，到 2027 年底接近 10 吉瓦。Starmind 卫星计划明年开始发射，将使用英伟达太空级 Space-1 Vera Rubin 模块进行在轨 AI 推理。

telegram · zaihuapd · 8月5日 02:04

**背景**: 英伟达的 Vera Rubin 架构在 CES 上发布，作为 Blackwell 的继任者，标志着英伟达从单芯片 GPU 转向集成式'AI 工厂'机架级系统（如 NVL72）。SpaceX 的 Starmind 项目是一个不同于 Starlink 互联网星座的独立计划，旨在利用英伟达的太空级计算模块部署轨道数据中心。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/">Rack-Scale Agentic AI Supercomputer | NVIDIA Vera Rubin NVL72</a></li>
<li><a href="https://www.aol.com/finance/nvidia-rubin-architecture-game-changer-172211628.html">Nvidia ’s Rubin Architecture Is a Game-Changer. Here’s Why. - AOL</a></li>
<li><a href="https://cryptobriefing.com/spacex-starmind-ai-satellite-network/">SpaceX plans Starmind , an AI network powered by satellites in orbit</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#SpaceX`, `#AI infrastructure`, `#Satellite computing`

---

<a id="item-10"></a>
## [DeepSeek 重启第二轮融资 投前估值 5000 亿元](https://finance.sina.com.cn/wm/2026-08-05/doc-inimfmyv1554159.shtml) ⭐️ 8.0/10

DeepSeek 已重启第二轮融资，计划募资 500 亿元，投前估值约 5000 亿元，预计 8 月下旬完成签约。本轮融资曾在 7 月底暂停，原因是创始人梁文锋对网上流传的疑似泄露的“面向投资者的会议实录”不满。 这是中国领先 AI 公司的一笔重大融资事件，估值较首轮提升约 43%，显示投资者对 DeepSeek 的信心持续增强。若顺利完成，两轮合计募资将超过 1000 亿元，对 AI 行业的资本格局有重要影响。 本轮投前估值约 5000 亿元，较首轮估值超 3500 亿元提升约 43%。融资于 7 月中旬开启、7 月底暂停，据称因创始人梁文锋不满网上流传的疑似泄露的投资者会议实录；目前部分此前积极接触的机构表示尚未接到重启消息，通道仍处暂缓状态。

telegram · zaihuapd · 8月5日 02:46

**背景**: DeepSeek 是中国领先的人工智能公司。今年 4 月开启首轮融资，6 月完成交割，金额 500 亿元、估值超 3500 亿元。本轮融资若顺利完成，两轮合计募资将超 1000 亿元。融资过程中出现的暂停与重启，反映出公司在信息管控和内部治理方面的考量。

**标签**: `#DeepSeek`, `#AI`, `#funding`, `#startup finance`, `#China`

---

<a id="item-11"></a>
## [三星与 SK 海力士据报测试中国芯片设备 对冲美国出口管制风险](https://www.reuters.com/world/china/samsung-sk-hynix-test-chinese-chip-tools-hedge-against-us-risks-2026-08-05/) ⭐️ 8.0/10

据路透社报道，三星电子和 SK 海力士正在评估中国半导体设备商中微公司（AMEC）的刻蚀设备，考虑用于其在华工厂，测试约两年前已开始。目前尚未决定是否大规模部署；三星否认相关测试，SK 海力士拒绝置评。 如果采用，这将是对中国芯片设备的强力背书，并可能削弱美国出口管制的效果，进而重塑全球半导体供应链。这也可能加速中国设备商在中国庞大晶圆制造设备市场中的份额增长。 美国于 2025 年撤销了两家韩企中国工厂的“经验证最终用户”资格，改为年度许可，促使韩企担忧未来限制可能波及现有西方设备的维护。中国设备价格通常低 20%至 30%，德意志银行预计今年中国本土设备商将占据中国约 280 亿美元晶圆制造设备市场的 25%至 30%。

telegram · zaihuapd · 8月5日 04:32

**背景**: 半导体刻蚀设备用于在晶圆上选择性去除材料层，以形成精确的电路图案。美国出口管制限制敏感技术的输出，而“经验证最终用户”资格是为可信企业简化许可的机制。中微公司（AMEC）是总部位于上海的领先半导体设备供应商，产品包括等离子体刻蚀、薄膜沉积和 MOCVD 设备，在上海科创板上市。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.amec-inc.com/en/">Advanced Micro - Fabrication Equipment Inc. China 中微半导体</a></li>
<li><a href="https://www.hitachi-hightech.com/global/en/knowledge/semiconductor/room/manufacturing/etch.html">7. Etch System - What is an Etch ... : Hitachi High-Tech Corporation</a></li>
<li><a href="https://research.uci.edu/export-controls/">Export Controls - UCI Office of Research</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#export-controls`, `#China-tech`, `#supply-chain`, `#geopolitics`

---

