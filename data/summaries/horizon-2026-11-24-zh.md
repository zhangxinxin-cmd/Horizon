# Horizon 每日速递 - 2026-11-24

> 从 33 条内容中筛选出 6 条重要资讯。

---

1. [Anthropic 论文宣称在任意域上 VP ≠ VNP](#item-1) ⭐️ 9.0/10
2. [英伟达董事会重新任命黄仁勋为 CEO，称曾听取美国政府意见](#item-2) ⭐️ 8.0/10
3. [从零自研的独立浏览器引擎 Ladybird 进入 Alpha 阶段](#item-3) ⭐️ 8.0/10
4. [智谱发布 GLM-5.4：首个循环 Transformer 模型，主打泛化编程](#item-4) ⭐️ 8.0/10
5. [Codex2api 疑似因作者账号被黑遭供应链投毒](#item-5) ⭐️ 8.0/10
6. [Meta AI 负责人 Alexandr Wang 称超级智能即将到来，人类恐难掌控](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic 论文宣称在任意域上 VP ≠ VNP](https://github.com/anthropics/formal-math/tree/main/vp-vnp) ⭐️ 9.0/10

Anthropic 的 formal-math GitHub 仓库在 "vp-vnp" 目录下发布了一篇论文，声称证明了代数复杂性类 VP 与 VNP 在任意域上都不相等。该条目在 Hacker News 上获得 301 分和 262 条评论，关注度极高。 VP 与 VNP 是 Valiant 提出的 P 与 NP 的代数类比，若真的能在所有域上把二者分离，那将是复杂性理论中最重要的成果之一。而这一结果出自一家 AI 实验室之手，也让围绕“AI 辅助数学发现”的争论进一步升温。 论文本身承认，尚未分析该结果与相对化（relativization）和代数化（algebrization）壁垒之间的关系（BGS75、AW09），而这是任何 P vs NP 式分离结果都必须面对的标准障碍，评论者也迅速将其视为关键疑点。此外，该成果发布在名为 formal-math 的仓库中，相关标签显示其与 Lean 形式化证明有关。

hackernews · mikeryan52 · 11月23日 22:09 · [社区讨论](https://news.ycombinator.com/item?id=50620102)

**背景**: VP 和 VNP 是 Leslie Valiant 于 1979 年提出的代数复杂性类，被视为 P 与 NP 的多项式类比。VP 包含可由多项式规模算术电路计算的多项式族，VNP 则包含系数可以写成对指数多个单项式求和的那些多项式族；永久式（permanent）与行列式（determinant）之间的差距是 VNP vs VP 的旗舰问题。Mulmuley 与 Sohoni 提出的几何复杂性理论（GCT）正是旨在分离这两类的代表性纲领。相对化与代数化则是已知的“壁垒”定理，说明了为何某些证明技术无法解决 P vs NP 及其代数类比问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity">Arithmetic circuit complexity - Wikipedia</a></li>
<li><a href="https://arxiv.org/pdf/2406.06217">Completeness classes in algebraic complexity theory</a></li>
<li><a href="https://lean-lang.org/learn/">Learn — Lean Lang</a></li>

</ul>
</details>

**社区讨论**: 评论区情绪既兴奋又怀疑：有评论认为这是 Anthropic 在冲击 P vs NP 圣杯途中“把所有家当都押上”后发布的阶段性成果，也有人担忧 AI 会让研究生级别的研究课题变得唾手可得。另有评论者直接引用论文中“尚未分析相对化与代数化”的自述作为主要保留意见，还有人把各家实验室的竞争形容为一场“大博弈”，并好奇人类用 Lean 写出的证明通常有多长。

**标签**: `#complexity theory`, `#algebraic complexity`, `#formal verification`, `#Lean`, `#AI theorem proving`

---

<a id="item-2"></a>
## [英伟达董事会重新任命黄仁勋为 CEO，称曾听取美国政府意见](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) ⭐️ 8.0/10

英伟达董事会重新任命黄仁勋（Jensen Huang）为公司总裁、首席执行官及董事会董事，并在公告中表示董事会“收到了来自美国政府高层人士的意见”，因此确信黄的复职“不构成国家安全风险”。这一决定推翻了董事会此前将黄仁勋逐出的举动，据称前后不到两周，且据称是全票通过。 英伟达是全球市值最高的芯片公司，也是人工智能加速芯片的核心供应商，因此一场受政府意见影响的领导层反转模糊了公司治理与国家安全政策之间的界限。这一事件为华盛顿对私人半导体企业能施加多大影响树立了先例，并将受到投资者、在特拉华州注册的公司的董事会，以及那些芯片产业面临更严格出口管制的美国盟友的密切关注。 公告中最关键的一句是明确提到政府方面的意见，这引发了对董事会独立性以及董事会究竟被告知了什么的质疑。据报司法部不提起起诉，加之特拉华州对董事监督责任设定了很高的认定门槛，被普遍解读为限制了董事个人的责任风险；但黄仁勋此前据报被免职的根本原因在声明中仍未得到解释。

hackernews · jaz · 11月23日 14:00 · [社区讨论](https://news.ycombinator.com/item?id=50611576)

**背景**: 黄仁勋于 1993 年与他人共同创立英伟达，并一直担任首席执行官，将公司从显卡制造商打造成用于训练和运行人工智能模型的 GPU 的主导供应商，并跻身全球市值最高的公司之列。所谓“Caremark”标准源自特拉华州衡平法院 1996 年的一项判决，规定董事只有在持续或系统性失察等极端情况下才需为监督失职承担责任，这也是法律评论者认为本案中董事会责任门槛很高的原因。另一方面，美国出口管制限制向中国销售先进人工智能芯片和芯片制造设备，华盛顿还施压荷兰（阿斯麦总部所在地）和日本等盟友，要求它们对齐各自对输华半导体技术的限制。

**社区讨论**: 评论者聚焦于“来自美国政府高层人士的意见”这一句，认为它是整份声明中最关键的表述，并讨论特拉华州 Caremark 判例加上司法部不起诉的决定是否足以让董事免于个人责任。许多人对这次 180 度反转的速度和全票一致感到惊讶，也有人将英伟达的待遇与阿斯麦和日本芯片设备商被迫加入对华制裁所受的压力相比较，直指其虚伪；另一些人则认为并无不当行为的证据，还有人将其与 2023 年 OpenAI 董事会风波相类比，认为一家公司名义上的治理结构未必是它真实的治理结构。

**标签**: `#corporate-governance`, `#nvidia`, `#semiconductors`, `#export-controls`, `#national-security`

---

<a id="item-3"></a>
## [从零自研的独立浏览器引擎 Ladybird 进入 Alpha 阶段](https://ladybird.org/posts/alpha/) ⭐️ 8.0/10

Ladybird 浏览器已正式进入 Alpha 阶段，首批测试者反馈称，他们试用的大多数网站——包括 Proxmox 的 NoVNC 远程控制台和内容繁重的大型新闻网站等棘手站点——都能正确渲染。该项目是一个真正独立的引擎（用 C++ 编写的 LibWeb 渲染引擎与 LibJS JavaScript 引擎），而非 Chromium、Gecko 或 WebKit 的分支，背后由非营利组织 Ladybird Browser Initiative 支持。 从零打造一款全新的浏览器引擎是软件工程中最艰难的任务之一，而这一领域如今已收敛到 Chromium、WebKit、Gecko 三大引擎，因此一个独立替代品进入 Alpha 阶段是 Web 平台多样性方面罕见的里程碑。它还为使用者提供了一个不与谷歌广告业务或其引擎路线图绑定的浏览器，这在监管机构和开发者担忧 Chromium 主导地位的当下尤为重要。 这仍是 Alpha 版本，因此仍有粗糙之处：测试者指出页面滚动明显有些卡顿，开发团队自己也坦承存在安全方面的局限，这意味着它目前还不适合作为日常主力浏览器。此外，项目务实地将若干自研组件替换为 SQLite、Skia 等生产级依赖，以牺牲部分 SerenityOS 的原教旨纯粹性换取更快的推进速度。

hackernews · janvdberg · 11月23日 16:13 · [社区讨论](https://news.ycombinator.com/item?id=50614249)

**背景**: Ladybird 最初是 SerenityOS 的内置浏览器。SerenityOS 是一个爱好者风格的类 Unix 桌面操作系统，由瑞典程序员 Andreas Kling 于 2018 年作为个人项目启动。随着其浏览器引擎 LibWeb 的能力不断增强，它被剥离出来，以 BSD 2-Clause 许可证发展为一个独立的跨平台浏览器，现由非营利组织 Ladybird Browser Initiative 开发。由于浏览器引擎必须精确实现 HTML、CSS、JavaScript 以及数十种 Web API，才能与网站的预期相符，多数新浏览器都会复用现有引擎；Ladybird 选择完全从零自研，正是这一里程碑显得与众不同的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Ladybird_(web_browser)">Ladybird ( web browser ) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/SerenityOS">SerenityOS - Wikipedia</a></li>
<li><a href="https://github.com/LadybirdBrowser/ladybird">GitHub - LadybirdBrowser/ladybird: Truly independent web browser</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的反应（约 1600 分、380 条评论）以压倒性的热情为主，用户反馈大量真实网站都能正确渲染，某些场景甚至比 Firefox 还要流畅。评论者也提出了实质性担忧：有人怀念改用 SQLite、Skia 等生产级库之前的 SerenityOS 黑客精神；有人呼吁 Ladybird 认真对待反指纹追踪问题，采用返回伪造或随机值以及更细粒度权限的方式；还有人询问鉴于 Alpha 版本公开承认的安全短板，用户应当采取哪些防护措施。

**标签**: `#browsers`, `#ladybird`, `#web-engine`, `#open-source`, `#serenityos`

---

<a id="item-4"></a>
## [智谱发布 GLM-5.4：首个循环 Transformer 模型，主打泛化编程](https://z.ai/blog/glm-5.4) ⭐️ 8.0/10

智谱（Z.ai）发布新旗舰模型 GLM-5.4，这是其首个基于所谓“循环 Transformer（Loop Transformer）”架构构建的模型——它不再让 token 一次穿过由各不相同的层堆叠而成的深层网络，而是将一组共享层重复执行多次。智谱声称该模型达到了可与 2T–3T 参数模型相媲美的智能水平，并将此次发布定位为“泛化编程（Generalized Coding）”的起点，即让代码成为解决视频、游戏、3D 着色器和 CAD 等更广泛任务的基础。 循环（递归深度）Transformer 多年来更多停留在学术研究层面，如今有主要厂商将其作为旗舰模型正式推出，是前沿大模型在架构方向上的一次重要押注，也因此在该社区（Hacker News）引发高度关注（超过 1000 分、350 多条评论）。如果其效率主张成立，权重共享就有可能让一个约 750B 量级的模型发挥出通常需要数万亿参数系统才具备的能力，从而改变以编程为核心的智能体在成本上的权衡。 根据对此次发布的报道，GLM-5.4 将 GLM-5 基础模型的 28 层运行两轮迭代，而智谱自己也承认该模型仍存在一些局限。实际使用上还存在门槛：有用户反馈该模型无法通过 OpenRouter 或常规的 Z.ai API 套餐访问，需要改用 Coding Plan，其 API 密钥用法与普通密钥相同，但能解锁新模型。

hackernews · foohis · 11月23日 10:06 · [社区讨论](https://news.ycombinator.com/item?id=50609685)

**背景**: 标准 Transformer 让每个 token 依次穿过一组固定的、彼此不同的层，而每一层都拥有自己独立的权重。循环 Transformer（也称递归深度或循环深度共享）则不同：它把同一个 Transformer 块连续应用多次，前一轮的隐藏状态作为下一轮的输入，从而复用更少的权重。这种做法以每个 token 更多的计算量换取更少的独立参数，研究者此前已在算法推理和长度泛化等方向探索过它；GLM-5.4 的意义在于把这一思路带入了量产的旗舰编程模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://z.ai/blog/glm-5.4">GLM-5.4: Toward Generalized Coding with Our First Loop ... - z.ai</a></li>
<li><a href="https://sebastianraschka.com/llm-architecture-gallery/looped-depth-sharing/">Looped Transformer | Sebastian Raschka, PhD</a></li>
<li><a href="https://www.marktechpost.com/2026/11/23/zai-glm-5-4-loop-transformer/">Z AI Releases GLM-5.4: A 750B Loop Transformer ... - MarkTechPost</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍赞赏智谱少见的技术透明度，认为这与西方实验室的封闭做法形成鲜明对比；也有人指出，原始 Transformer 本身就像一个展开的循环，却把本不相关的注意力和前馈网络（FFN）权重集强行配对，而循环架构正是针对这一点。也有质疑者反驳其效率叙事，认为循环只是在固定参数预算下增加了前向计算量，并不能从根本上解决 HBM 显存带宽瓶颈；实测者 Simon Willison 用“鹈鹕 SVG”测试与 GLM-5.3 做了对比，但在获取 API 访问权限时遇到了麻烦。此外，对中国模型“马拉松式思考”冗长的抱怨反复出现：用户称它即使面对概念上极简单的任务也会不断自我怀疑，导致完成时间相比前沿模型大幅拉长。

**标签**: `#LLM`, `#Zhipu AI`, `#transformer architecture`, `#coding models`, `#model release`

---

<a id="item-5"></a>
## [Codex2api 疑似因作者账号被黑遭供应链投毒](https://github.com/WormW/codex2api-incident-2026-11) ⭐️ 8.0/10

开源项目 Codex2api（一个 OpenAI Codex API 代理）的作者账号据称被攻破，攻击者绕过 main 分支直接推送恶意的 tag，使 Release 构建产出了 3.1.10 至 3.1.12 三个带后门的版本。其中 v3.1.11 完全移除了鉴权，等同于允许无密码的远程命令执行；同时新增的 workflow 还把该账号下至少 21 个仓库的 16 个 GitHub Actions secrets 外传。 任何自部署 Codex2api 并拉取或自动更新到这些版本的用户，现在都可能暴露在一个无需鉴权的远程命令执行接口之下，并应假定其 CI 密钥已经泄露。由于被窃取的 GitHub Actions secrets 和 token 往往还能访问包仓库、云控制台和部署工具，影响范围可能远超这一个项目。 攻击方式是直接推送 tag，从而绕过 main 分支上原有的审查或分支保护，而恶意的 workflow 正是用来收集仓库密钥的。建议受影响的用户立即停用 3.1.10–3.1.12，回退到 3.1.9，并轮换 GitHub token、SSH key、数据库凭据以及 DeepSeek 等相关 API 密钥。

telegram · zaihuapd · 11月23日 11:21

**背景**: Codex2api 是一个 API 代理服务器，能接收多种客户端 API 格式并把请求转发到统一的 Codex 兼容后端，通常由个人和小团队自行部署。GitHub Actions secrets 是注入 CI workflow 的加密值，因此任何在恶意 tag 上运行的 workflow 都能读取它们并 POST 到攻击者控制的服务器。Release 构建通常由推送 tag 而非合并分支触发，这正是为什么账号被攻破后推送一个 tag 就能发布带后门的产物，即便 main 分支本身保持干净。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/rokyplay/codex2api/tree/main">GitHub - rokyplay/codex2api: OpenAI Codex API proxy with ...</a></li>
<li><a href="https://cyberreplay.com/blog/detecting-remediating-github-actions-secret-exfiltration/">Detecting and Remediating GitHub Actions Secret Exfiltration ...</a></li>
<li><a href="https://www.endorlabs.com/learn/github-actions-supply-chain-attack-targeting-ci-secrets-at-scale">Hijacked GitHub Accounts Push “wfx” CI Secret Stealer... | Endor Labs</a></li>

</ul>
</details>

**标签**: `#supply-chain-attack`, `#security-incident`, `#GitHub Actions`, `#secrets-exposure`, `#Codex2api`

---

<a id="item-6"></a>
## [Meta AI 负责人 Alexandr Wang 称超级智能即将到来，人类恐难掌控](https://thenextweb.com/news/metas-ai-chief-says-superintelligence-is-arriving-and-control-is-at-risk) ⭐️ 8.0/10

Meta 首席 AI 官、超级智能实验室负责人 Alexandr Wang 在 X 上发表长文，称超级智能已不再是“未来某天”的问题。他举出数学家 Levent Alpöge 借助 Anthropic 的 Claude 完成、并于周末经 Lean 与 Mathlib 社区机器校验的黎曼猜想证明作为例证，同时警告人类将难以继续掌控可无限自我改进、或比人类聪明 1000 倍的系统，呼吁紧急投入安全、对齐与防护研究。 这篇长文把一项具体、可检验的技术进展与一位顶级实验室高管迄今最直白的安全警告放在一起，等于宣称前沿 AI 的进步速度已经超过业界验证与控制它的能力。由 Meta 最高 AI 负责人说出这番话，意味着超级智能的时间表正被当作工程与治理问题而非遥远的哲学议题来讨论，这将影响政策制定者、竞争对手实验室以及所有依赖 AI 系统的人。 该证明目前只有 Lean 形式化代码，而没有任何人类可读的版本，因此编译器验证的是证明在形式系统内部的正确性，并不等于确认形式化陈述与数学家心目中的黎曼猜想一致。有解读文章称该 Lean 存档约 1700 万行，同时底层数学论证尚未经过独立专家评审。

telegram · zaihuapd · 11月23日 12:49

**背景**: Lean 是一个开源证明助手兼函数式编程语言，基于依赖类型论，定理必须以精确形式陈述，证明的每一步都由计算机机械校验。Mathlib 是建立在 Lean 之上的社区驱动形式化数学库，提供将研究级成果形式化所需的定义与引理。黎曼猜想涉及黎曼 ζ 函数零点的位置与素数分布，是克雷数学研究所的千禧年大奖难题之一，自 1859 年以来始终未被证明。形式化验证能保证证明由其前提推出，但本身并不能保证形式化陈述准确表达了原定理，这正是人工评审仍然不可或缺的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://math.mit.edu/~drew/grh/">RH Lean proof: verification files - MIT Mathematics</a></li>
<li><a href="https://lean4.dev/proofs/riemann-hypothesis-claim">The Riemann Hypothesis: a claimed proof, delivered in Lean</a></li>
<li><a href="https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/zeta-paper.pdf">The Alpoge-Claude proof of the Riemann hypothesis explained ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://mathlib.org/">Mathlib</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#superintelligence`, `#Riemann Hypothesis`, `#formal verification`, `#Meta AI`

---

