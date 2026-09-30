# Horizon 每日速递 - 2026-09-30

> 从 40 条内容中筛选出 6 条重要资讯。

---

1. [AMD 以 82 亿美元收购李飞飞创办的 World Labs](#item-1) ⭐️ 9.0/10
2. [OpenAI 发布 GPT-6.1 Sol：智能接近 Astra，价格仅为其五分之一](#item-2) ⭐️ 8.0/10
3. [America.gov 上线，借助 Google Gemini 帮民众办理公共服务](#item-3) ⭐️ 8.0/10
4. [关于网页与移动端对话式 AI 智能体的隐私分析](#item-4) ⭐️ 8.0/10
5. [Anthropic：GLM-5.3 与 Claude Mythos 跨越网络攻击能力门槛](#item-5) ⭐️ 8.0/10
6. [OpenAI 2026 开发者大会：常驻智能体 Dots 与 20 余项更新](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [AMD 以 82 亿美元收购李飞飞创办的 World Labs](https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute) ⭐️ 9.0/10

AMD 宣布将以 82 亿美元全股票交易收购李飞飞联合创办的空间智能与世界模型公司 World Labs，交易预计在 2026 年底前完成，仍需获得监管批准。作为交易的一部分，李飞飞将加入 AMD 担任执行副总裁兼首席科学家，World Labs 的模型研发将并入 AMD 的芯片与计算平台体系。 这是 AMD 规模最大、战略意图最特殊的一笔收购之一：公司不再只卖 GPU，而是试图拥有一套前沿 AI 模型栈，以对标 Nvidia “CUDA＋模型生态”的野心。这表明世界模型与面向机器人领域的物理 AI 正在成为 AI 硬件厂商的核心战场，可能改变训练与仿真工作负载向机器人厂商和企业客户销售的方式。 这笔交易采用全股票形式，估值 82 亿美元；李飞飞出任执行副总裁兼首席科学家，意味着她获得的是实权级的产品与研究职位，而非纯顾问角色。World Labs 自 2024 年成立以来累计融资约 12.3 亿美元，其 Atlas 模型被宣传为“全球首个多模态世界模型”，可用同一个基础模型同时完成视频生成、3D 重建与机器人仿真。

telegram · zaihuapd · 9月29日 03:59

**背景**: 世界模型指的是一类能够对环境状态建立内部表征并预测其状态转移的 AI 系统，它让模型不只处理文字，还能理解物理规律与空间关系。李飞飞是斯坦福教授，因 ImageNet 相关工作被称为“AI 教母”，她于 2024 年创办 World Labs，核心方向是“空间智能”，即能够感知、生成并与 3D 世界交互的模型。这类模型还可用于生成机器人训练所需的合成环境，这正是芯片厂商愿意将其纳入版图的原因——机器人与仿真正是算力需求增长最快的场景之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.sina.cn/weibo/detail/5348484284682583.html">李飞飞将任 AMD 首席科学家，82 亿美元收购世界模型公司|李飞飞|amd|world labs|82亿美元|首席科学家|2026年底_新浪新闻</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/2078467573604209142">李飞飞团队发布新一代世界模型Atlas：从零训练，一次性打通视频生成、 3D重建与机器人仿真 - 知乎</a></li>
<li><a href="https://jimmysong.io/zh/book/ai-handbook/agi/world-models-spatial-intelligence/">世界模型：AI 正在从“读写时代”跃迁到“构建世界时代” | Jimmy Song</a></li>

</ul>
</details>

**标签**: `#AI`, `#AMD`, `#Acquisition`, `#World Models`, `#AI Hardware`

---

<a id="item-2"></a>
## [OpenAI 发布 GPT-6.1 Sol：智能接近 Astra，价格仅为其五分之一](https://openai.com/index/introducing-gpt-6-1-sol/) ⭐️ 8.0/10

OpenAI 发布了 GPT-6.1 Sol，这是 GPT-6 Sol 的升级版本，距离前代模型发布仅约七天，官方称其智能水平接近 GPT-6 Astra，而价格仅为 Astra 标准价的五分之一。该模型正向 ChatGPT 的 Plus、Pro、Business、Enterprise 和 Edu 用户推送，并可通过 OpenAI API 以 gpt-6.1-sol 的名称调用，缓存输入价格低至每百万 token 0.10 美元。 这次发布把 token 价格变成了前沿 AI 竞争的主战场，OpenAI 宣称以自家旗舰模型零头的成本提供接近旗舰的能力。这也会立即给 Anthropic 等竞争对手以及 DeepSeek 等更低价供应商带来压力，同时让已经使用 Codex 等编程智能体的开发者用同样的钱获得更多使用量。 在评估真实代码库中复杂软件工程任务的 DeepSWE v1.1 上，GPT-6.1 Sol 据称以约五分之一的成本达到 GPT-6 Astra 的水平，同时在更低的推理强度下将 GPT-6 Sol 的最佳成绩提升了 6.4%；Artificial Analysis 则将其排在 Intelligence Index 上比亚斯特拉低 1 分、而每任务成本不到其四分之一的位置。其缓存输入比标准输入价格便宜 95%，比 GPT-6 Sol 的缓存输入便宜 50%；OpenAI 还表示它在智能体任务中事实性错误更少，并且更能可靠地遵守明确的限制条件和用户意图。

hackernews · crorella · 9月29日 17:06 · [社区讨论](https://news.ycombinator.com/item?id=49896586)

**背景**: OpenAI 的 GPT-6 系列按能力分层，Luna、Terra 和 Sol 三个版本都位于旗舰模型 GPT-6 Astra 之下，而 OpenAI 将 Astra 宣传为目前在计算机操作、编程、网络安全和科学领域最智能、对齐最好的模型。GPT-6.1 Sol 属于小版本更新，在标准 GPT-6 Sol 层级发布仅数天后就将其取代，这样的迭代节奏即便在 AI 行业里也异常迅速。该消息发布于 OpenAI DevDay 2026，山姆·奥特曼在会上介绍了这款模型相对自家旗舰的价格性能优势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-6-1-sol/">Introducing GPT - 6 . 1 Sol | OpenAI</a></li>
<li><a href="https://artificialanalysis.ai/articles/gpt-6-1-sol-replaces-gpt-6-sol-after-just-7-days-with-near-astra-intelligence">GPT-6.1 Sol replaces GPT-6 Sol after just 7 days, with near-Astra intelligence | Artificial Analysis</a></li>
<li><a href="https://www.firstpost.com/tech/openai-devday-2026-sam-altman-unveils-gpt-6-1-sol-with-near-astra-intelligence-at-a-fifth-of-the-cost-14049228.html">OpenAI DevDay 2026: Sam Altman unveils GPT-6.1 Sol with near-Astra intelligence at a fifth of the cost</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论整体持怀疑态度：多人表示 GPT-6 Sol 是一次明显退步，自己已转投 Opus 5.5，其中一位长期偏爱 OpenAI/Codex 的用户也怀疑 6.1 不会有太大改善。另一些人则更关注经济账而非跑分，认为像 DeepSeek 这样的廉价替代品让每月 200 至 500 美元的订阅很难说得通；还有评论者指出真正的重磅是缓存价格便宜了 50%，也有人警告称把 token 价格当作主战场对行业和投资者而言并非好兆头。

**标签**: `#OpenAI`, `#LLM`, `#AI pricing`, `#model release`, `#Hacker News`

---

<a id="item-3"></a>
## [America.gov 上线，借助 Google Gemini 帮民众办理公共服务](https://america.gov/) ⭐️ 8.0/10

美国政府上线了新网站 America.gov，使用 Google Gemini 帮助民众查找并获取公共服务和福利。此次发布在 Hacker News 上引发了热烈讨论（322 分、260 条评论），焦点在于用大语言模型作为政府服务的入口是否真的可行。 这是大语言模型在政府场景中最受关注的实际落地案例之一；如果奏效，可能帮助超过一亿人拿到他们目前错过的福利。它也为公共机构如何采用商业 AI 树立了先例，包括随之而来的安全护栏和供应商关系。 有评论者引用 Google 的一篇博客文章，称 Google 作为技术合作伙伴，“利用 Gemini 帮助超过一亿人获取关键公共资源”，其实现方式是 Gemini 加上安全护栏，而不是一个完全开放式的聊天机器人。与任何对话式助手一样，主要隐患在于可能给出幻觉或过时的指引，以及一个以假乱真的政府品牌界面被用作钓鱼诱饵的风险。

hackernews · plesiv · 9月29日 14:04 · [社区讨论](https://news.ycombinator.com/item?id=49893509)

**背景**: Gemini 是 Google 的生成式 AI 聊天机器人与助手，于 2023 年 12 月首次发布，并在 2024 年 2 月由 Bard 更名而来；它由 Google 自研的大语言模型系列驱动，是仅次于 ChatGPT 的第二大常用聊天机器人。大语言模型是在海量文本上训练的神经网络，能够生成、总结和分析语言，但其可靠性既取决于训练数据，也取决于运行时包裹的安全护栏。过去，办理美国联邦服务往往意味着要在成千上万个彼此割裂的机构页面和资格规则中翻找，而这正是引导式助手想要解决的“大海捞针”问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Google_Gemini">Google Gemini</a></li>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 总体情绪是认可其理念但对落地效果持怀疑态度：多位评论者认为，这种“大海捞针”式的检索正是精心设计的聊天机器人少有的真正有用场景，并且能降低人们在猜测政府网站时遭遇钓鱼的风险。也有人注意到网站对国会大厦相关犯罪行为的表述出人意料地直白；还有评论者深挖了实现方式，根据 Google 的合作伙伴公告判断它是 Gemini 加上安全护栏。

**标签**: `#AI`, `#Government`, `#Gemini`, `#Public Services`, `#LLM`

---

<a id="item-4"></a>
## [关于网页与移动端对话式 AI 智能体的隐私分析](https://jorgegarciaherrero.com/wp-content/interactivos/20260916-Prompt-like-a-butterfly-sting-like-a-tracker-(clean).pdf) ⭐️ 8.0/10

一篇题为《Prompt like a butterfly, sting like a tracker》的论文对网页端与移动端对话式 AI 智能体进行了隐私分析，涉及未完成提示词的静默预发送、基于 UUID 的弱访问控制，以及用户数据被用于模型训练而泄露等问题。该 PDF 在 Hacker News 登上首页，获得 407 分和 129 条评论，成为近期关于 AI 聊天界面隐私讨论最热烈的论文之一。 对话式 AI 智能体如今是数亿用户日常使用的界面，因此嵌入其网页端和移动端的追踪器，以及可被分享或猜测的会话链接，会把一次普通聊天变成持续的隐私泄露。这些发现强化了开源与本地模型支持者的论点——托管服务无法安全承载敏感提示词，同时也给厂商施加压力，要求其披露客户端究竟发送了什么数据。 围绕该论文的讨论指出，ChatGPT 的网页客户端会在用户按下发送前，周期性地把尚未写完的部分提示词上传到 conversation/prepare 端点，这有可能暴露用户的写作节奏、自我纠错习惯以及未成型想法的演变过程。另外，Perplexity 等服务据称把 URL 中的 UUID 当作足够的访问凭证，任何拿到该链接的人都能读取完整的历史对话——而 UUID 只是难以猜测的标识符，并不等同于加密。

hackernews · damaru2 · 9月29日 09:03 · [社区讨论](https://news.ycombinator.com/item?id=49890226)

**背景**: 对话式 AI 智能体指的是用户通过浏览器或移动应用与之交谈的服务，例如 ChatGPT、Claude 或 Perplexity。由于模型本身运行在远程服务器上，包括尚未写完的草稿在内的每一次交互都可能被传输、记录甚至再次利用；与此同时，网页端和移动端客户端通常会嵌入第三方分析与广告脚本，它们能看到同样的流量。UUID（通用唯一标识符）就是 URL 中常见的那种又长又随机的字符串，用于命名某个资源；它的设计目标是避免命名冲突，而不是保护数据，因此 URL 一旦泄露，其背后的内容实际上也就泄露了。训练数据暴露则指用户提交给 AI 系统的提示词、对话记录或文件被保留下来，并被吸收进未来模型行为的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">Universally unique identifier - Wikipedia</a></li>
<li><a href="https://fastuuid.com/learn-about-uuids/uuids-not-encryption/">UUIDs Are Not Encryption: Stop Using Them to Hide Information</a></li>
<li><a href="https://nhimg.org/glossary/data-training-exposure/">What Is Data training exposure? Definition & Examples</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者大多以亲身经历印证了论文提出的问题：有人表示注意到 ChatGPT 会周期性地把未写完的提示词 POST 到 conversation/prepare 端点，还有人指出 Perplexity 的搜索链接会暴露完整对话。一些人将其与此前围绕私密 Codex 会话中未发表 Navier–Stokes 草稿的争议相提并论，认为无论是训练数据还是广告追踪器，本该私密的提示词与结果最终都没能保持私密——这也是他们认为开源或本地运行的模型必须胜出的理由；还有评论者调侃说“我们都变成了 Milhouse”。

**标签**: `#privacy`, `#conversational-ai`, `#web-security`, `#mobile-security`, `#ai-agents`

---

<a id="item-5"></a>
## [Anthropic：GLM-5.3 与 Claude Mythos 跨越网络攻击能力门槛](https://simonwillison.net/2026/Sep/29/anthropic-frontier-red-team/) ⭐️ 8.0/10

Anthropic 前沿红队（Frontier Red Team）报告称，在其内部二进制漏洞利用基准测试中随机抽取的 100 个任务上，GLM-5.3 在 4% 的试验中实现了完整的控制流劫持，Claude Mythos Preview 为 6%，而更早的模型如 Claude Opus 4.6 和 GLM-5.2 则一次都未成功。 这标志着一个明确的能力门槛已被跨越：此前完全无法生成可用漏洞利用的模型，如今已能自主做到这一点，随着这类能力扩散至开放权重模型，AI 安全与攻击性安全的风险评估方式都将发生改变。 这些数据来自内部基准测试中随机抽取的一小部分任务，样本规模有限，且该摘录未提供目标二进制文件、评估方法或完整结果等细节；值得注意的是，GLM-5.3 是开放权重模型，这意味着该能力并不局限于某一家闭源实验室。

rss · Simon Willison · 9月29日 22:20

**背景**: 二进制漏洞利用是指挖掘并滥用已编译程序中的内存安全漏洞，而控制流劫持是其中的经典目标：攻击者破坏指令指针（例如通过缓冲区溢出），把执行流程重定向到自己的代码上。Anthropic 的前沿红队负责研究前沿风险，其基准测试工作（包括与卡内基梅隆大学和 Bugcrowd 共同构建的 ExploitBench）用于衡量大语言模型在多大程度上能够端到端地开发漏洞利用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/research/exploit-evals">Measuring LLMs’ ability to develop exploits \ Anthropic</a></li>
<li><a href="https://crypto.stanford.edu/cs155old/cs155-spring11/lectures/03-ctrl-hijack.pdf">Control Hijacking Attacks Note: project 1 is out</a></li>
<li><a href="https://aiweekly.co/alerts/anthropic-zhipus-glm-53-matches-claude-on-autonomous-exploits">Anthropic: Zhipu's GLM-5.3 Matches Claude on Autonomous ...</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#cybersecurity`, `#Anthropic`, `#AI capabilities`, `#binary exploitation`

---

<a id="item-6"></a>
## [OpenAI 2026 开发者大会：常驻智能体 Dots 与 20 余项更新](https://openai.com/zh-Hant/index/devday-2026-recap/) ⭐️ 8.0/10

在 2026 年开发者大会上，OpenAI 公布了 20 余项更新，其中最引人注目的是常驻智能体 Dots——一个可全天候自主运转的伴生 Agent，能学习用户习惯并主动接管长线复杂工作。 recap 还列出了专精编程与电脑操控的 GPT-6.1 Sol、速度最高提升 8 倍（API 提升 6 倍）的 Astra Ultrafast、登陆云端并支持语音操控与自动修障的 Codex、原生开放电脑操控并支持 AWS Bedrock 托管的 Agents API、基于 Luna 模型做有限选项分类与路由的 Decisions API、可与 Devin、Notion 等第三方工具共享订阅额度的“Sign in with ChatGPT”，以及全新的 Pro 500 档位。 核心产品 Dots 标志着 OpenAI 从对话助手转向可持续运行、无需人工监督即可执行任务的常驻智能体，而这一赛道已有 Meta 的 Muse agent 在竞争，可能会重塑日常知识工作与日程安排被委托给 AI 的方式。同时打包推出的 API、生态账号互通和更高档订阅，也进一步强化了 OpenAI 对开发者和第三方工具厂商的绑定。 GPT-6.1 Sol 被定位为以五分之一的价格提供接近 Astra 的智能水平；Astra Ultrafast 比标准版 Astra 最高快 8 倍，且为全新 Pro 500 档位专享，而后者的算力额度是 Plus 的 25 倍。Decisions API 是一个轻量实时接口，把 Luna 的能力聚焦在用户预设的有限答案问题上，返回分类结果、路由选择或 Agent 的下一步动作；需要注意的是，该消息本身只是一份简短摘要，尚无独立核实。

telegram · zaihuapd · 9月29日 17:52

**背景**: OpenAI 的 DevDay 是其年度开发者大会，通常会在同一场活动中集中发布新模型、API 与产品。这里的“智能体（Agent）”指借助大语言模型替用户规划并执行多步骤任务的软件，而“常驻（always-on）”意味着它在后台持续运转，而不只是被动回应提示词。OpenAI 的模型阵容按能力与成本的权衡分层——GPT-6 Sol 与 Luna 于 2026 年 9 月作为前沿模型发布，两者在能力与成本上侧重不同——而 Agents API、Decisions API 等接口则让外部开发者把这些模型嵌入自己的产品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/devday-2026-recap/">DevDay 2026 Recap - OpenAI</a></li>
<li><a href="https://openai.com/index/introducing-dots/">Introducing dots | OpenAI</a></li>
<li><a href="https://openai.com/index/introducing-gpt-6-sol-and-luna/">Introducing GPT‑6 Sol and Luna - OpenAI</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#AI Agents`, `#LLM`, `#Developer APIs`, `#Product Announcement`

---

