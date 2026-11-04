# Horizon 每日速递 - 2026-11-04

> 从 35 条内容中筛选出 3 条重要资讯。

---

1. [笔记本上的 Qwen 3.8 27B 也能解读模型原始权重](#item-1) ⭐️ 8.0/10
2. [Postman 被指静默安装 AI 插件，并将 API 密钥数据回传服务器](#item-2) ⭐️ 8.0/10
3. [视频中微弱的飞机噪音可精确泄露拍摄地点](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [笔记本上的 Qwen 3.8 27B 也能解读模型原始权重](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) ⭐️ 8.0/10

Simon Willison 报告称，他在自己笔记本上本地运行的 Qwen 3.8 27B 能够阅读以文本形式导出的神经网络原始权重，并正确判断一个小型网络是为何种任务训练的，从而复现了 Rikiya Takehi 等人《Sparks of Weight-Space Programming》论文中的一个示例。在该论文的原始实验中，这一禁止使用工具、只允许一次回答的任务是由 GPT-6 Astra 等前沿模型完成的。 如果一台消费级硬件上的 27B 开放权重模型就能完成权重解读，那么这项能力便不再只是前沿实验室的猎奇展示，而变成独立研究者可以自行复现、检验和压力测试的对象。这对可解释性研究意义重大，也关乎那些担心模型未来可能在缺乏人类可读源码的情况下自行修改权重的人。 这次演示聚焦于论文中更严格的那一半：模型只拿到一串浮点数，并被明确告知没有工具、不能执行代码、没有计算器，且只能给出一次回答，从而把“阅读权重”与“写代码分析权重”区分开来。需要注意的是，这些网络只是 10x10 简化网格游戏（Breakout、Pong、Pac-Man、Freeway）的策略网络；Matthew Honnibal 和 Sean Goedecke 等批评者认为，论文中更惊人的案例混淆了借助工具编辑权重与真正原生理解权重这两件事。

rss · Simon Willison · 11月3日 16:29 · [社区讨论](https://news.ycombinator.com/item?id=50355251)

**背景**: 神经网络的“权重”本质上只是一长串浮点数，通常没有人会去直接阅读它们，因为梯度下降会机械地调整这些数值，而学到的东西只能通过运行模型才能体现出来。2026 年 11 月由 MIT CSAIL 研究者提出的“权重空间编程”（weight-space programming）一词，指的是让通用大模型在自然语言指令下阅读、解读并直接改写另一个网络的权重，而无需梯度下降或训练循环。论文中最引人注目的结论包括：GPT-6 Astra 仅凭权重就诊断出 Qwen3.5-0.8B 存在导致推理循环的问题，并通过修改 0.016% 的权重把 MATH-500 成绩从 7.9% 提升到 48.1%。Willison 把这些主张拆成两个问题：模型在没有任何工具、只看原始权重时能做什么，以及在可以使用代码时又能做什么。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Weight-space_programming">Weight-space programming - Wikipedia</a></li>
<li><a href="https://www.datacamp.com/blog/weight-space-programming">Weight-Space Programming: How LLMs Edit Network Weights</a></li>
<li><a href="https://kingy.ai/blog/weight-space-programming-ai-agent-model-weights/">Weight-Space Programming: GPT-6 Astra Edits Qwen - kingy.ai</a></li>

</ul>
</details>

**社区讨论**: 评论区在热情与尖锐质疑之间分化：有人借《亨利四世》中霍茨波的名句——“我能从深渊里召唤精灵……可你召唤时它们会来吗？”——来追问这些解读是否真的正确；也有人质疑其中多少是真正的权重理解，多少只是训练先验以及引导向量（steering vectors）、LoRA 等已知技巧在起作用。另一些人称赞 Qwen 3.8 27B 是本地 AI 迄今最好的成果，只要使用者扮演好高层架构师的角色即可；还有评论者对“难以理解的机器自行修改自身权重”这一类似生物学的未来表达了不安。

**标签**: `#LLM`, `#interpretability`, `#weight-space-programming`, `#local-models`, `#Qwen`

---

<a id="item-2"></a>
## [Postman 被指静默安装 AI 插件，并将 API 密钥数据回传服务器](https://github.com/postmanlabs/postman-app-support/issues/14370) ⭐️ 8.0/10

有人在 postmanlabs/postman-app-support 仓库提交了第 14370 号 issue，指控 Postman 桌面应用会静默自动安装 AI 插件，并把 API 请求数据——包括 {{some_secret}} 这类模板变量的真实取值——上传到 Postman 的服务器。该报告还称，一旦屏蔽用于上报的日志端点，整个应用便无法正常工作；相关话题在 Hacker News 上获得约 1024 分和 343 条评论。 Postman 是开发者群体中装机量最大的 API 测试工具之一，如果默认行为会把本地保存的凭据发送给第三方，那么所有在集合中存放令牌、密钥或客户数据的人都面临直接的安全风险。影响已经显现：有评论者称所在公司的安全团队已取消该工具的认证资格，整个部门一夜之间迁移到 Bruno 等替代品。 核心技术指控是：Postman 会记录每一次 API 请求的详细信息（包括查询参数），而当查询参数通过 {{some_secret}} 这类模板语法填充时，被发送出去的是变量的真实密钥值而非变量名。报告者还表示，如果屏蔽发往日志端点的出站流量，应用会出现功能异常甚至完全无法使用；这项调查最初是为了评估 HIPAA 合规性，结论是 Postman 并不符合 HIPAA 要求。

hackernews · sidgarimella · 11月3日 17:22 · [社区讨论](https://news.ycombinator.com/item?id=50354960)

**背景**: Postman 是一款用于构建、发送和管理 HTTP API 请求的图形化客户端，其环境变量功能允许开发者用 {{api_key}} 这样的占位符填充请求，而大多数用户以为这些值只保存在本机。HIPAA 是美国规范受保护健康信息隐私的法律，因此任何会把请求内容传出设备的工具在医疗场景中都会构成合规风险。Bruno 是一款开源、本地优先的替代品，它把集合以纯文本文件形式保存在项目文件夹中，请求定义可以直接纳入 Git 版本管理，也无需云端账号。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.usebruno.com/">Bruno - The Git-Native API Client</a></li>
<li><a href="https://github.com/usebruno/bruno">GitHub - usebruno/ bruno : Opensource IDE For Exploring and Testing...</a></li>
<li><a href="https://www.hhs.gov/hipaa/index.html">Health Information Privacy | HHS.gov</a></li>

</ul>
</details>

**社区讨论**: 讨论整体情緒非常负面：评论者称 Postman 又慢又臃肿，把它比作 uTorrent 那种靠惯性被安装的工具，并质疑一个本该是小工具的软件为何会演变成估值超 50 亿美元、员工超 1500 人的公司。多人给出了亲身经历——一位医疗行业从业者称其网络安全团队已取消 Postman 的认证资格，团队一夜之间换用 Bruno，而对方销售仍在不停打电话；也有人称赞 Bruno 能把请求定义直接放进 Git 管理。

**标签**: `#privacy`, `#security`, `#developer-tools`, `#api-testing`, `#postman`

---

<a id="item-3"></a>
## [视频中微弱的飞机噪音可精确泄露拍摄地点](https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/) ⭐️ 8.0/10

OSINT 研究者 Colsto 于 2026 年 11 月 2 日发布了一段 YouTube 演示视频，展示如何从视频音轨中提取几乎无法察觉的螺旋桨飞机噪音，将其转化为多普勒曲线，再与公开的 ADS-B 航班数据进行比对，从而确定视频的拍摄位置。在其中一个案例中，该技术通过匹配相隔 920 秒的两次飞机飞越，成功定位了一段模糊树木视频的拍摄地点。 这把看似无害的环境音变成了定位信标：任何上传的、含有微弱飞机飞越声的视频都可能被追溯到精确地点，这为开源调查人员提供了强大的新手段，同时也给那些从未意识到背景噪音属于敏感信息的创作者、记者和路人带来了实实在在的隐私风险。 该方法会计算声音传播延迟，并在候选位置网格上比对多普勒曲线形状，再通过多次飞机飞越（而非单一架次）来收窄结果。它依赖录音中仍保留的螺旋桨或发动机音调成分，且在众包 ADS-B 覆盖密集的地区效果最佳；因此只有安静喷气机飞越、或接收器稀疏的区域会削弱乃至令该技术失效。

rss · Simon Willison · 11月3日 05:32

**背景**: ADS-B（广播式自动相关监视）是一种由飞机持续广播自身位置、高度、速度和身份信息的系统，这些数据会被公开的众包航班追踪网络汇总。多普勒效应是指声源靠近或远离听者时，人耳感知到的频率发生偏移的现象；对于飞越的飞机而言，这会在频谱图中形成一条特征性的 S 形曲线，其具体形状编码了飞机飞过的距离与速度。传统 OSINT 地理定位依赖视觉地标、阴影和元数据，音频则很少被分析。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=UytYrhYLOKI">I discovered a sound that leaks your exact location (and it's ... Geolocation - OSINT Learning Guide Audio OSINT - Nico Dekens Solving Bellingcat’s “Lost in Translation”: Audio Geolocation ... New Technique Pinpoints Video Locations Using Airplane So... the Power of Audio OSINT: How Free Audio Toolkits Can Expose ... Geolocation OSINT: Methods & Tools</a></li>
<li><a href="https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance–Broadcast">Automatic Dependent Surveillance–Broadcast - Wikipedia</a></li>
<li><a href="https://www.dutchosintguy.com/post/audio-osint">Audio OSINT - Nico Dekens</a></li>

</ul>
</details>

**标签**: `#OSINT`, `#privacy`, `#geolocation`, `#ADS-B`, `#audio-forensics`

---

