# Horizon 每日速递 - 2026-11-21

> 从 33 条内容中筛选出 10 条重要资讯。

---

1. [数学家抢在 Anthropic 公告后数小时内仓促发布酝酿 12 年的 GRH 证明草稿](#item-1) ⭐️ 9.0/10
2. [Levent Alpöge 宣称证明广义黎曼猜想](#item-2) ⭐️ 9.0/10
3. [陶哲轩：无外力欧拉与纳维-斯托克斯奇点及广义黎曼猜想](#item-3) ⭐️ 9.0/10
4. [Thinking Machines 发布 Inkling 2 Mini 循环式 Transformer 模型](#item-4) ⭐️ 8.0/10
5. [语言模型靠推理改写自身权重，无需梯度也无需训练](#item-5) ⭐️ 8.0/10
6. [Buckmaster 仓库宣称无外力 Navier–Stokes 方程有限时间爆破](#item-6) ⭐️ 8.0/10
7. [Signal 限制移动端截图，阻止系统级 AI 智能体读取聊天内容](#item-7) ⭐️ 8.0/10
8. [Scott Aaronson 谈“随机鹦鹉”与黎曼猜想的所谓证明](#item-8) ⭐️ 8.0/10
9. [Linux KVM 漏洞 CVE-2026-99312 致 AMD 主机内存可被虚拟机读取](#item-9) ⭐️ 8.0/10
10. [谷歌据称发布 Gemini 4 Neon，主打编程与科研工作流](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [数学家抢在 Anthropic 公告后数小时内仓促发布酝酿 12 年的 GRH 证明草稿](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) ⭐️ 9.0/10

一位数学家在 AI 实验室 Anthropic 发布公告后数小时内，公开了一份酝酿已久的证明草稿，据称这是他约 12 年独自钻研的成果，声称证明了广义黎曼猜想（GRH）。该博客文章将此次发布描述为出于优先权考量的仓促之举，而非经过打磨的正式投稿，且该证明尚未得到验证。 若 GRH 被成功证明，将是数十年一遇的重大成果，会影响素数分布乃至数论的大片领域，因此任何看似可信的声明都会立即受到严格审视。此次事件的时间点还凸显出一种新型的优先权竞赛：一位孤独的人类研究者可能与一家 AI 实验室在同一定理上赛跑，由此引出关于功劳归属、成果来源以及数学界应如何验证此类结果的尖锐问题。 据报道该手稿长达约 940 页，评论者还指出了一些结构上的异常之处，例如开篇的一个小节是空白的，目录的各章节标题中从未出现 GRH、黎曼ζ函数或素数等字样。该工作既未经过同行评审，也未经过机器验证，因此这一结果的状态仍完全悬而未决。

hackernews · jasondavies · 11月20日 18:33 · [社区讨论](https://news.ycombinator.com/item?id=50579568)

**背景**: 黎曼猜想由波恩哈德·黎曼于 1859 年提出，猜想黎曼ζ函数的所有非平凡零点实部均为 1/2；而广义黎曼猜想（GRH）将这一论断推广到范围大得多的一类对象，即整体 L 函数。GRH 是数学中最重要的未解问题之一，一旦被证明，将推出等差数列中素数分布的强界以及许多其他结论。近年来，现代 AI 系统越来越多地被用于定理证明与数学发现，这正是为何一家 AI 实验室的公告有可能与某位人类学者长达十年的研究项目相撞，并引发一场令人联想到牛顿与莱布尼茨微积分之争的优先权纠纷。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Leibniz–Newton_calculus_controversy">Leibniz–Newton calculus controversy - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者总体上前提是好奇但持怀疑态度：有人为非专业读者解释了 GRH，也有人指出了手稿中的可疑信号，如长达 940 页、第一节的某个小节为空、章节标题从未提及 GRH 或素数。反复出现的主题是成果来源问题——有评论者猜测，这份长期打磨的人类证明是否可能通过上传的材料或共享存储流入 Anthropic 之手——同时不少人对作者表示同情：他眼看自己 12 年的项目突然面临被抢先发表的风险。

**标签**: `#mathematics`, `#Riemann-hypothesis`, `#AI-for-math`, `#research-announcement`, `#priority-dispute`

---

<a id="item-2"></a>
## [Levent Alpöge 宣称证明广义黎曼猜想](https://alpo.ge/remark.pdf) ⭐️ 9.0/10

Levent Alpöge 在 alpo.ge/remark.pdf 发布 PDF，宣称证明了广义黎曼猜想。该声明附带一个 Lean 形式化证明，讨论者称其约 1.3 GB、约 1500 万行，但尚未经过同行评审或独立验证。 广义黎曼猜想是解析数论的核心未解问题，若证明正确，将对素数分布和 L 函数产生广泛而深远的范式性影响。这一事件也因引发对机器可检验证明、AI 辅助数学以及功劳归属的激烈辩论而显得重要。 据称的 Lean 产物规模巨大，使独立检查和审计变得并不轻松；而形式化证明的可信度还取决于其定义、公理以及是否不存在未证明的缺口。评论者还给出一个据称完全由人类完成的证明链接，并争论该成果应归功于 Alpöge 还是 AI 工具。

hackernews · iamronaldo · 11月20日 14:16 · [社区讨论](https://news.ycombinator.com/item?id=50574968)

**背景**: 黎曼猜想猜测黎曼 zeta 函数的所有非平凡零点都位于临界线 Re(s)=1/2 上，是数学中最著名的未解问题之一。广义黎曼猜想把同类的零点位置预测推广到 Dirichlet L 函数及其他 L 函数，因而成为关于等差数列中的素数及相关算术对象的广泛命题。Lean 是基于依赖类型论的交互式定理证明器，数学家用它编码定义、命题和证明，使计算机内核能够检查每一步推理。因此，Lean 形式化可以提供强有力的机器验证，但前提是形式化命题忠实表达了原定理，且底层公理被接受。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://lean-lang.org/">Lean Programming Language</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论交织着兴奋、怀疑和功劳归属之争：一些评论者提到一个据称完全由人类完成的证明链接，另一些人则引用 Terence Tao 近期的说法，即当前 AI 还无法攻克黎曼猜想。不少人关注 Lean 产物的庞大规模，并质疑标题的措辞是否把功劳从数学家转移到了 AI 公司。还有人表达矛盾心情：他们原本希望这一结果主要由人类数学家取得，但该成果可能包含大量 AI 辅助。

**标签**: `#mathematics`, `#Riemann Hypothesis`, `#Lean theorem prover`, `#AI-assisted proofs`, `#Hacker News discussion`

---

<a id="item-3"></a>
## [陶哲轩：无外力欧拉与纳维-斯托克斯奇点及广义黎曼猜想](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 9.0/10

2026 年 11 月 20 日，陶哲轩发表博客文章，提出无外力条件下欧拉方程与纳维-斯托克斯方程的奇点形成结果，并给出通往广义黎曼猜想的路径；文章标签包括 AI 以及数学家 Levent Alpöge、Matei Coiculescu 和 Tristan Buckmaster。 若结果成立，这项工作将触及纳维-斯托克斯存在性与光滑性这一千禧年大奖难题，并关系到广义黎曼猜想，可能成为范式转移式的数学进展；同时，它也让 AI 辅助证明搜索和 Lean 形式化验证受到新的审视。 “无外力”指不存在外部驱动力，而已有的奇点构造仍与原纳维-斯托克斯问题有差距：原问题排除欧拉方程并要求外力光滑；评论者还指出，两个独立的 Lean 内核接受了该形式化证明，但也质疑一次通过的构建究竟验证了目标命题，还是只验证了某个无关的简单命题。

hackernews · archon1410 · 11月20日 17:21 · [社区讨论](https://news.ycombinator.com/item?id=50578358)

**背景**: 纳维-斯托克斯存在性与光滑性问题问的是：三维不可压缩纳维-斯托克斯方程的光滑解是否永远存在，还是可能产生奇点（爆破）；欧拉方程则是其无粘对应版本。广义黎曼猜想把经典黎曼猜想从黎曼ζ函数推广到狄利克雷 L 函数及其他整体 L 函数，在数域情形下仍未获证明。Lean 是一个交互式定理证明器，其小型内核负责检查形式化证明，因此“Lean 通过”意味着证明项通过了类型检查，并不自动意味着形式化陈述与原始非形式化主张一致。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/">Unforced Euler singularity, unforced Navier-Stokes ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis</a></li>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_priority_controversy">Navier–Stokes priority controversy - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 评论者既对 AI 驱动的数学感到兴奋，也对职业前景感到焦虑；有人追问，像 Langlands 纲领这样真正新的抽象概念究竟如何被创造出来，而不是仅靠重组已有概念。其他人则关注对 Lean 的信任问题：一位评论者指出，两个独立内核都接受该结果，使内核漏洞被利用的可能性降低；另一位则问，如何确认一个大型 Lean 构建证明的是正确的命题；还有人希望陶哲轩能评论这一黎曼猜想结果的意义。

**标签**: `#mathematics`, `#formal-verification`, `#lean-theorem-prover`, `#navier-stokes`, `#riemann-hypothesis`

---

<a id="item-4"></a>
## [Thinking Machines 发布 Inkling 2 Mini 循环式 Transformer 模型](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Thinking Machines 发布了 Inkling 2 Mini，这是一个拥有 260 亿参数、每 token 激活 54 亿参数的开源权重模型，其中间层采用循环结构，并且端到端使用 nvfp4 进行训练。该模型源自公司主线预测缩放阶梯，通过剪除三分之二的专家来缩小规模，并引入循环机制以提升推理能力，小到可以在 32GB 及以上内存的 Mac 上本地运行。 此次发布值得关注，因为开源权重模型很少采用循环架构——这种设计此前只在 GPT Astra、Sol 等前沿闭源模型中被传闻使用——因此它在与 Qwen 级别模型对比时的强劲表现可能推动更多开源模型走向循环化。它对本地用户同样重要，因为端到端 nvfp4 训练使模型天然适合低比特量化和消费级硬件推理。 Inkling 2 Mini 共有 24 层，据说能达到远超其规模的 Qwen 模型水平；社区测试者在 Ryzen 395 上使用 llama.cpp 的 Vulkan 后端测得约每秒 27 个 token 的解码速度，而在 32GB M1 Pro 上 q4 量化下约为每秒 10 个 token。用户指出它受益于多个尚未合并的 llama.cpp PR 以及一个小补丁，可获得约 30% 的提速；早期实测显示它在 Python 编程任务上表现不错，但在较难的视觉类推理测试中失败。

hackernews · jasondavies · 11月20日 20:12 · [社区讨论](https://news.ycombinator.com/item?id=50581260)

**背景**: 循环式（或称循环深度）Transformer 会多次重复应用同一组层，通过权重共享让模型在每个 token 上投入更多计算，而不是生成更多 token，这是一种以较少参数获得更深层次和更强推理能力的做法。nvfp4 是 NVIDIA 的 4 比特浮点格式，直接在它上面训练而非使用更高精度，可以使后续面向本地推理的低比特量化更加干净。Thinking Machines 是由 Mira Murati 创立的 AI 实验室，该模型属于其面向本地运行的小型模型系列。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://ollama.com/library/inkling-2-mini">inkling - 2 - mini</a></li>
<li><a href="https://sebastianraschka.com/llm-architecture-gallery/looped-depth-sharing/">Looped Transformer | Sebastian Raschka, PhD</a></li>

</ul>
</details>

**社区讨论**: 社区反应热烈：评论者称如果这些基准能站得住脚，那简直是"好得离谱"，并对一个开源权重模型公开采用循环架构感到惊讶。实测报告总体正面但有好有坏——Python 编程表现扎实，Ryzen 395 上可达每秒约 27 个 token，但在一个困难的硬币识别测试中模型喋喋不休 12000 个 token 后失败；还有多位用户分享 llama.cpp 补丁、申请研究用途访问权限，并表示它可能取代自己当前用于工具调用的本地模型。

**标签**: `#LLM`, `#model release`, `#local inference`, `#llama.cpp`, `#quantization`

---

<a id="item-5"></a>
## [语言模型靠推理改写自身权重，无需梯度也无需训练](https://arxiv.org/abs/2611.21885) ⭐️ 8.0/10

一篇新的 arXiv 论文（编号 2611.21885）《Language Models Can Rewrite Their Own Weights》声称，据作者所知是首次做到：语言模型可以自行诊断错误并直接改写自身权重从而变得更好，整个过程既不需要梯度，也不需要重新训练。作者报告称，一个 27B 模型在连续八轮自我编辑会话中在未见过任务上持续提升，还能修复自身受损的副本，并且这种能力会随模型规模扩大而涌现。 如果这一结果站得住脚，它就指向了“训练一次然后冻结”和“在推理阶段加提示词或脚手架”之外的第三条道路：模型可以在推理过程中永久性地自我改进，既不需要集群，也不会带来额外的单次回答成本。这一前景对持续学习很有吸引力，但同时也带来直接的 AI 安全问题——一个能够改写自身权重的自主模型，原则上也可能把与安全相关的行为“改掉”。 论文的机制被作者称为“self-rewriting（自我改写）”：模型提出权重修改方案，在练习题上测试，只保留有效的修改，并让每一次修改都建立在上一轮之上。批评者指出，目前已观察到的主要改进只是缩短模型的推理链以避开 token 上限；而且实验用的是 270 亿参数级别的模型，能否扩展到前沿规模、能否带来真正的新能力，仍未被证明。

hackernews · lwhsiao · 11月20日 16:29 · [社区讨论](https://news.ycombinator.com/item?id=50577265)

**背景**: 通常，语言模型要用反向传播训练一次：反向传播利用梯度把每个权重朝着降低误差的方向微调，训练完成后权重就被冻结，之后想让它变强只能再跑一次训练，或者在推理阶段加额外脚手架。“无梯度权重编辑”则是指直接修改权重数值——常见做法是让模型像读写代码一样读写权重——而跳过常规的反向传播步骤。相关的前期工作包括谷歌的“sleep”框架，即模型在两次任务之间利用自生成的练习题离线更新自身权重；以及近期关于权重空间编程（weight-space programming）的实验，让一个 LLM 去编辑另一个 LLM 的权重。文中提到的 token 上限，是指模型单次推理链可以生成的最大 token 数量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Language Models Can Rewrite Their Own Weights</a></li>
<li><a href="https://www.jiajunfan.com/projects/self-rewriting/">Language Models Can Rewrite Their Own Weights | Jiajun Fan</a></li>
<li><a href="https://arxivb.org/abs/2611.21885">Language Models Can Rewrite Their Own Weights</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论（约 348 分、113 条评论）普遍质疑其新颖性：有评论者认为，观察到的唯一自我改进就是缩短推理链以避开 token 上限，这与近期一篇权重空间编程的文章结论一致——即便是很强的模型，也只能靠利用这种明显的缺陷来“提升”。也有人追问这是否只是换了个名字的训练（“只提交有效的修改”听起来就像是筛选），有人指出谷歌早有 sleep 框架，还有人警告自主改写自身权重是最危险的一类安全研究——模型一旦被指示，就能定位并抑制自身与安全相关的激活，相当于自动化的“abliteration”。

**标签**: `#LLM self-modification`, `#AI safety`, `#weight editing`, `#autonomous agents`, `#machine learning research`

---

<a id="item-6"></a>
## [Buckmaster 仓库宣称无外力 Navier–Stokes 方程有限时间爆破](https://github.com/tristanbuckmaster/navier-stokes/) ⭐️ 8.0/10

数学家 Tristan Buckmaster 在 GitHub 仓库（tristanbuckmaster/navier-stokes）中宣称给出了 Navier–Stokes 方程的有限时间爆破结果，Hacker News 上链接该仓库的帖子将其视为一项重大数学成果。评论者称这是该问题的“无外力”版本，与 OpenAI 此前发布的带外力方程的爆破构造不同。 如果该结果成立，无外力 Navier–Stokes 方程的有限时间爆破将解决克雷数学研究所于 2000 年提出的七个千禧年大奖难题之一，而且是在没有人为设计外力的、更贴近物理实际的设定下完成。这同时也会成为机器辅助数学与形式化验证的一个标志性时刻——它与 OpenAI 公布的解及 Lean 形式化几乎同期出现。 所提供的材料实质上只是一个仓库链接，看不到配套的技术论文、同行评审或形式化验证，因此该声明仍未得到验证。技术上的区别很关键：仅在精心设计的外力项下证明的爆破，并不能解决无外力版本的千禧年问题；而 Buckmaster 与 Vicol 此前的工作是用凸积分方法证明有限能量弱解的非唯一性，而非原方程的爆破。

hackernews · trotro · 11月20日 15:34 · [社区讨论](https://news.ycombinator.com/item?id=50576232)

**背景**: Navier–Stokes 存在性与光滑性问题问的是：描述流体运动的方程在三维情形下是否存在对一切时间都成立的平滑解，还是会在有限时间内失效；克雷数学研究所于 2000 年将它的四个版本（两个无外力、两个带光滑外力）列为千禧年大奖难题。“有限时间爆破”指解在某个有限时刻不再具有经典意义，某个量（如速度梯度）趋于无界。要证明爆破，必须构造出真正的反例，而现代方法常常依赖凸积分技术——Buckmaster 与 Vicol 此前正是用它证明了弱解的非唯一性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_existence_and_smoothness">Navier–Stokes existence and smoothness - Wikipedia</a></li>
<li><a href="https://mathworld.wolfram.com/Finite-TimeBlow-Up.html">Finite-Time Blow-Up -- from Wolfram MathWorld</a></li>
<li><a href="https://openai.com/index/navier-stokes-solution/">On the Navier–Stokes Millennium Prize Problem | OpenAI</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍十分兴奋，有人调侃说在同一日出现广义黎曼猜想与无外力 Navier–Stokes 结果的背景下，这只能算当天第二大成果。也有人询问能否用实时数值模拟直观展示爆破过程，还有人替 Buckmaster 与合作者 Alpoge 被 OpenAI 的发布“抢先”而不平，并希望能有该现象的物理演示。

**标签**: `#Navier-Stokes`, `#mathematics`, `#PDE`, `#Millennium Prize`, `#research announcement`

---

<a id="item-7"></a>
## [Signal 限制移动端截图，阻止系统级 AI 智能体读取聊天内容](https://signal.org/blog/protecting-your-privacy/) ⭐️ 8.0/10

Signal 发布博客文章表示，正在限制移动操作系统中内置的 AI 智能体（例如 Google 的 Gemini 和 Apple 的 Siri/Apple Intelligence）对 Signal 用户数据的潜在截取与存储，并且现在已阻止在 Android 和 iOS 上对 Signal 聊天内容进行截图。Signal 将这些端侧 AI 智能体形容为“对隐私怀有敌意”，并表示对该缓解措施持“谨慎乐观”态度。 这是主流通讯应用首次将操作系统内置的 AI 助手当作数据外泄渠道来具体应对，可能为其他注重隐私的应用树立先例——决定它们如何面对能够读取屏幕上一切内容的系统级智能体。这也给 Apple 和 Google 施加压力，要求其说明自家助手究竟能看到什么，因为用户往往并未意识到手机内置的 AI 可以观察到私密对话。 在 Android 上，这一限制依赖平台的 FLAG_SECURE 窗口标志，它可以阻止截屏与录屏，并在最近任务视图中隐藏应用预览；iOS 没有完全对应的机制，因此 Signal 只能依靠基于检测的缓解手段。该限制属于应用层面而非绝对防护，并且有评论者反映它也影响了正当用途，包括在 Windows 桌面端对聊天内容截图。

hackernews · dotcoma · 11月20日 09:42 · [社区讨论](https://news.ycombinator.com/item?id=50572348)

**背景**: 如今的移动操作系统都内置了能够针对屏幕内容行事的 AI 助手——读取文字、概括对话，甚至在应用内执行操作，而开发者能够拒绝的余地很有限。阻止屏幕捕获的主要手段是 Android 的 FLAG_SECURE 标志，它要求系统拒绝对指定窗口截图和录屏；而 iOS 历史上并没有类似的布尔开关，应用只能检测录屏或共享行为并遮蔽内容。对于 Signal 这类端到端加密通讯应用而言，消息内容在传输中受到保护，但一旦渲染到屏幕上就完全可见，因此拥有屏幕访问权限的系统级智能体可以完全绕过加密。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://signal.org/blog/protecting-your-privacy/">Signal >> Blog >> Signal is Serious About Protecting Your Privacy</a></li>
<li><a href="https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app">Signal is blocking Gemini and Siri AI from reading your screen</a></li>
<li><a href="https://stackoverflow.com/questions/28606689/how-to-prevent-screen-capture-in-android">security - How to prevent Screen Capture in Android - Stack Overflow</a></li>

</ul>
</details>

**社区讨论**: 评论者总体上支持这一方向，但希望 Signal 走得更远：有人引用 Meredith Whittaker 的访谈指出，即使用户自己没装 AI 应用，也可能因为联系人装了而泄露聊天内容；还有人建议 Signal 把其取证调查结果以“活文档”形式公开，供他人复用与协作。最尖锐的批评集中在可用性代价上——一位用户抱怨自己在 Windows 上已无法对 Signal 聊天截图——另有讨论抱怨 Signal 的注册流程与 VPN 兼容性差，会陷入无休止的验证码循环。

**标签**: `#privacy`, `#security`, `#Signal`, `#AI agents`, `#mobile OS`

---

<a id="item-8"></a>
## [Scott Aaronson 谈“随机鹦鹉”与黎曼猜想的所谓证明](https://scottaaronson.blog/?p=10344) ⭐️ 8.0/10

Scott Aaronson 发表博文，讨论被讥为“随机鹦鹉”的大语言模型“证明”黎曼猜想的说法，并借此探讨这类说法对 AI、数学理解与解释意味着什么。 黎曼猜想是纯数学中最重要的未解问题之一，因此可信的机器生成证明将成为自动推理的里程碑，并重塑关于大语言模型能力的争论。即使相关说法未经证实或有缺陷，它也重要，因为它暴露出区分真正数学洞见与流畅文本生成有多么困难。 核心问题是认识论层面的：生成看似证明的文字，并不等于拥有数学理解，也不等于给出数学家能够独立验证的证明。“随机鹦鹉”这一标签来自 2021 年的一篇批评文章，该文认为大语言模型只是在统计上模仿文本，并无真正理解；博文正是借这一框架追问大语言模型的“解释”究竟意味着什么。

hackernews · stratos123 · 11月20日 20:03 · [社区讨论](https://news.ycombinator.com/item?id=50581084)

**背景**: 黎曼猜想推测黎曼 ζ 函数的非平凡零点全部位于实部为 1/2 的临界线上；它与素数分布密切相关，也是克雷数学研究所的千禧年大奖难题之一。“随机鹦鹉”是 2021 年论文《On the Dangers of Stochastic Parrots》带火的比喻，用来描述大语言模型只是在统计上模仿文本、并无真正理解。Scott Aaronson 是一位理论计算机科学家，以量子计算和计算复杂性研究闻名，其博客经常讨论 AI 的概念性影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://www.britannica.com/science/Riemann-hypothesis">Riemann hypothesis | Prime Numbers, Zeta Function & Complex ... What is the Riemann hypothesis and why is its solution so ... What the Riemann hypothesis proof really means about AI, and ... Riemann hypothesis - Simple English Wikipedia, the free ... What Is the Riemann Hypothesis? A Plain-English Guide The Riemann Hypothesis, Explained | Quanta Magazine</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的讨论整体持怀疑和哲学思辨态度：一位评论者把大语言模型的证明比作建立在神经网络评估器之上的国际象棋引擎评估，认为这类“解释”只是令人不满的聚合结果，而非人类直觉上的理由。其他人担心人类将越来越无法理解复杂的科学与工程系统，还有少数评论跑题到网站访问问题。

**标签**: `#LLMs`, `#mathematics`, `#Riemann Hypothesis`, `#AI research`, `#stochastic parrots`

---

<a id="item-9"></a>
## [Linux KVM 漏洞 CVE-2026-99312 致 AMD 主机内存可被虚拟机读取](https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html) ⭐️ 8.0/10

Linux 内核 KVM 曝出编号为 CVE-2026-99312 的漏洞，在启用嵌套虚拟化的 AMD 平台上，虚拟机内的攻击者可以读取宿主机的物理内存。研究人员在 DigitalOcean 的生产环境中从虚拟机内部读取到约 127 GB 的宿主内存；上游修复已于 11 月 18 日随 7.3.5 等稳定内核发布。 云服务商以及在 AMD 主机上运行嵌套虚拟化的用户都受到波及，因为恶意的租户虚拟机理论上可以读取其他租户的内存或宿主机内核数据，构成严重的多租户隔离失效。更棘手的是，Debian、Ubuntu 等主流发行版的内核尚未集成该修复，进一步放大了风险窗口。 根据 Red Hat 的分析，该漏洞被评为 Moderate 影响级别，因为利用它需要满足 AMD KVM 主机启用嵌套虚拟化以及特定的客机执行条件：客机在分页被禁用时触发处理器复位（INIT）模拟，使 MMU 进入不一致状态，从而得以伪造嵌套页表。该问题源于 KVM 中 AMD 嵌套虚拟化代码的 use-after-free，并与此前的一次安全修复相关；在补丁到位前，可采取的缓解措施是关闭嵌套虚拟化。

telegram · zaihuapd · 11月20日 14:23

**背景**: KVM 是内置于 Linux 内核的虚拟化层，绝大多数公有云都用它来运行虚拟机。所谓“嵌套虚拟化”，指的是在虚拟机内部再运行一层 hypervisor；在 AMD 硬件上这依赖 AMD-V（SVM）扩展，常见于在虚拟机里跑容器沙箱、CI 执行环境或 Kubernetes 节点的场景。正常情况下，hypervisor 保证每个客机只能访问自己的内存，因此这类边界上的缺陷被称为“客机逃逸到主机”（guest-to-host escape），属于最严重的虚拟化漏洞类型之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html">Linux KVM Flaw CVE-2026-99312 Lets Guest VMs Access Host ...</a></li>
<li><a href="https://access.redhat.com/security/cve/cve-2026-99312">CVE-2026-99312 - Red Hat Customer Portal</a></li>
<li><a href="https://dev.to/etairos/cve-2026-99312-linux-kvm-flaw-let-a-guest-vm-read-127-gb-of-host-memory-on-amd-hosts-4460">CVE-2026-99312: Linux KVM Flaw Let a Guest VM Read 127 GB of ...</a></li>

</ul>
</details>

**标签**: `#security`, `#KVM`, `#Linux kernel`, `#virtualization`, `#CVE`

---

<a id="item-10"></a>
## [谷歌据称发布 Gemini 4 Neon，主打编程与科研工作流](https://t.me/zaihuapd/45267) ⭐️ 8.0/10

一则 Telegram 快讯称，谷歌发布了 Gemini 4 Neon 模型，主打对复杂软件工程、知识工作与科研工作流的快速端到端执行，并已向开发者、企业以及 Google AI Pro/Ultra 订阅用户开放。该消息称其价格为每百万输入 token 3 美元（缓存输入 0.15 美元）、每百万输出 token 15 美元，支持 100 万 token 上下文，并以 58.6 分位列 Artificial Analysis 编程智能体指数第一，同时在智能指数 xhigh 档以 61 分排名总榜第三。 如果消息属实，这将是一次重要的前沿模型发布：它把位居榜单前列的智能体编程能力与激进的按 token 定价、100 万 token 上下文结合在一起，直接在性价比前沿上对 OpenAI 和 Anthropic 的竞品形成压力。对于需要为自主编程智能体和长周期科研任务选型的开发者与企业而言，这意味着多了一个明显更便宜的高端选项。 这些说法来自一条单句 Telegram 帖子，既没有给出链接来源，也没有基准测试表格或模型卡，因此其中的关键数字应被视为未经证实。文中引用的 Artificial Analysis 编程智能体指数是由 FrontierCode-AA、Terminal-Bench、SWE-Atlas-QnA 等评测合成的复合分数，这意味着单一综合得分可能掩盖各项基准之间不均衡的表现。

telegram · zaihuapd · 11月21日 01:09

**背景**: 前沿 AI 实验室如今越来越少以单纯的对话质量来做宣传，而更强调“智能体能力”，即自主执行多步骤任务的本领，例如修改代码库、操作终端或执行科研工作流。为了比较这些能力，Artificial Analysis 等基准评测机构会发布复合榜单，把多个面向智能体的评测汇总起来，其中就包括 Terminal-Bench——它在沙箱化的 shell 环境中衡量智能体完成高难度、贴近真实职业场景的计算机工作任务的能力。定价和上下文窗口如今几乎与分数同等重要，因为智能体工作负载在单个任务上消耗的 token 远多于单轮对话。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialanalysis.ai/agents/coding-agents">AI Coding Agent Benchmarks & Leaderboard | Artificial Analysis</a></li>
<li><a href="https://github.com/harbor-framework/terminal-bench">GitHub - harbor-framework/terminal-bench: Measuring and ...</a></li>
<li><a href="https://artificialanalysis.ai/">AI Model & API Providers Analysis | Artificial Analysis</a></li>

</ul>
</details>

**标签**: `#LLM`, `#Google`, `#model-release`, `#benchmarks`, `#software-engineering`

---

