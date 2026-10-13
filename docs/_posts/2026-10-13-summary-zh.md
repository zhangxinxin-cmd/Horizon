---
layout: default
title: "Horizon Summary: 2026-10-13 (ZH)"
date: 2026-10-13
lang: zh
---

> 从 38 条内容中筛选出 8 条重要资讯。

---

1. [Python 3.15 发布，PEP 810 显式惰性导入正式落地](#item-1) ⭐️ 9.0/10
2. [OpenAI 发布内部前沿模型生成的数学成果合集](#item-2) ⭐️ 9.0/10
3. [黑客远程触发欧洲超市冷柜化霜，冷藏系统大面积瘫痪](#item-3) ⭐️ 8.0/10
4. [WiFi 7 路由器被改装为 320 Msps 软件定义无线电接收机](#item-4) ⭐️ 8.0/10
5. [Codex CLI 默认安装常驻自更新的后台守护进程](#item-5) ⭐️ 8.0/10
6. [Show HN：PS2 游戏被静态重编译为 WebAssembly，可在浏览器中运行](#item-6) ⭐️ 8.0/10
7. [循环扩散 Transformer：在每个去噪步内重复运行共享模块](#item-7) ⭐️ 8.0/10
8. [learnc 自动调优现有 C 代码常量，JPEG 体积缩小 9.1%](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Python 3.15 发布，PEP 810 显式惰性导入正式落地](https://simonwillison.net/2026/Oct/12/python-3-15/) ⭐️ 9.0/10

Python 3.15 正式发布，Simon Willison 重点介绍了由发布经理 Hugo van Kemenade 整理的《What's new in Python 3.15》指南。其中最受关注的是 PEP 810 带来的显式惰性导入，新增了 `lazy import json` 和 `lazy from pathlib import Path` 这类语法，同时还有 PEP 798 推导式中的解包语法，例如 `[*sublist for sublist in lists]`。 惰性导入改变了语言的一项基础行为：被标记为 `lazy` 的模块只会在其符号首次被真正使用时才执行，这能显著降低命令行工具、测试套件以及依赖庞大的应用的启动时间和内存占用。由于 Python 是使用最广泛的编程语言之一，这一变化几乎会影响生态系统中的每一位开发者、插件作者和工具维护者。 使用 `lazy import` 时，模块会推迟到所导入的符号首次被使用时才加载，而不是像普通导入那样立即执行；PEP 810 采用显式的选择性加入（opt-in）方式，而不是 PEP 690 那种隐式全局行为，后者已于 2023 年撤回。Simon Willison 提到，他的 LLM 命令行工具此前不得不在文档中建议插件作者手动实现惰性导入，因为安装依赖 `sentence_transformers` 等重型库的插件会让每次调用 `llm` 命令多花好几秒。PEP 798 的解包语法扩展了 Python 3.5 中 PEP 448 引入的解包通用化，`[*L for L in lists]` 等价于 `[x for L in lists for x in L]`。

rss · Simon Willison · 10月12日 18:15

**背景**: Python 大约每年十月发布一个新的小版本，每个版本的支持周期约为五年；3.15 的问世意味着 Python 3.10 已经走到支持期的终点，因此像 Simon Willison 这样需要兼容所有受支持版本的库维护者终于可以放弃 3.10，转而使用 Python 3.11 的特性。在 Python 中，`import` 语句通常会在程序执行到该处时立刻完整执行被导入的模块，这很方便，但当模块牵入大量并非每次运行都需要的重依赖时就会付出高昂代价。惰性导入过去一直以第三方库或标准库技巧的形式存在，而 PEP 810 让这一能力正式成为语言本身的一部分。PEP 798 则是一项较小的语法糖改进，允许在列表、集合或字典推导式中直接展平嵌套的可迭代对象，而不必再写嵌套循环。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://peps.python.org/pep-0810/">PEP 810 – Explicit lazy imports | peps.python.org</a></li>
<li><a href="https://blog.jetbrains.com/pycharm/2026/06/explicit-lazy-imports-are-coming-to-python-3-15/">Explicit Lazy Imports Are Coming to Python 3.15 - The ...</a></li>
<li><a href="https://pydevtools.com/handbook/explanation/what-is-pep-810/">What is PEP 810 ? | pydevtools</a></li>

</ul>
</details>

**标签**: `#Python`, `#programming languages`, `#PEP 810`, `#lazy imports`, `#release`

---

<a id="item-2"></a>
## [OpenAI 发布内部前沿模型生成的数学成果合集](https://t.me/zaihuapd/44351) ⭐️ 9.0/10

OpenAI 在 GitHub 上发布了一批由其内部尚未公开的前沿模型生成的数学成果，包含 722 篇手稿和 372 个结果系列，涉及多个长期未解的问题，其中许多证明已用 Lean 形式化验证。仓库称模型平均每项结果消耗约 3 小时 ChatGPT Pro 思考算力，评估期间约尝试 4000 道题，并提供 10 份推理摘要，同时说明部分结果仍处于验证阶段。 如果这些说法成立，这将是前沿 AI 系统不仅在课本式习题上、而且能在公开未解数学问题上取得原创进展的最大规模公开展示之一，势必加剧 OpenAI、Google DeepMind 等机构在“AI 做数学”领域的竞争。其意义还在于成果出自一个未公开的内部模型，暗示最强的推理能力目前并未通过公开 API 提供给外界。 核心数字是 722 篇手稿、372 个结果系列、每项结果约 3 小时 ChatGPT Pro 思考算力、约 4000 道尝试题目，以及 10 份公开的推理摘要。关键保留意见是 OpenAI 自己承认部分结果仍在验证中，且底层模型并未发布，因此独立复现与同行评审才是检验这些数学结论真实性的关键。

telegram · zaihuapd · 10月12日 03:00

**背景**: Lean 是一个开源的证明助手兼函数式编程语言，自 2013 年起开发，目前由非营利组织 Lean Focused Research Organization 支持；在 Lean 中，证明以代码形式书写，机器可以逐步骤检查其逻辑。这种可被机器检验的证明正是“形式化验证”的典型形式，即依据精确的数学规范证明某个系统或命题的正确性。AI for Mathematics 已成为活跃的研究方向，相关系统被越来越多地用于辅助定理证明、猜想提出与问题求解，但宣称解决真正公开未解问题的案例仍很罕见，且会受到严格审视。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Formal_verification">Formal verification</a></li>
<li><a href="https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence">List of mathematical discoveries by artificial intelligence</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#AI for Mathematics`, `#Formal Verification`, `#Lean`, `#Frontier Models`

---

<a id="item-3"></a>
## [黑客远程触发欧洲超市冷柜化霜，冷藏系统大面积瘫痪](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident) ⭐️ 8.0/10

一场网络攻击导致法国及欧洲其他地区多家连锁超市的制冷系统瘫痪，攻击者远程命令联网的冷柜控制器进入自动化霜模式，使制冷实际停止。法国零售商 Intermarché表示约 150 家门店受到影响，事件还波及物流配送与店内定价。 这是一次罕见的真实案例，说明针对零售业运营技术（OT）的攻击可以直接威胁冷链，造成食品腐坏、经济损失和消费者安全风险。它还凸显出：为追求效率而把廉价的老旧控制器接入互联网，已经在整个行业形成了一片防御薄弱的庞大攻击面。 被怀疑的薄弱环节是已有 15 至 20 年历史的老旧 Danfoss 控制器，例如 SM800（2021 年停止支持）和 SC355（2016 年停止支持）；安全公司 Claroty 的 Team82 此前曾披露 Danfoss AK-SM 800A 制冷控制器嵌入式 Web 管理界面存在多个漏洞，其中包括一个认证绕过漏洞，Danfoss 随后发布了新固件进行修补。评论者还提到 2026 年 8 月美国军队营区商店的冷柜也曾发生类似故障，但目前尚未确认两者之间存在关联。

hackernews · Zeekaas · 10月12日 12:16 · [社区讨论](https://news.ycombinator.com/item?id=50055304)

**背景**: 运营技术（OT）指直接控制物理过程的硬件与软件——在这里就是管理超市陈列柜和冷库的制冷控制器——它与普通 IT 系统不同，设计重心通常在可靠性和使用寿命，而非安全性。商用制冷设备会周期性执行化霜循环，加热蒸发器盘管以融化积冰，因此攻击者若能反复触发该循环，实际上就能让制冷失效。Danfoss 等厂商之所以大力宣传这类控制器的联网能力，是因为它可以远程诊断故障、减少不必要的上门维修，并让连锁企业跨门店比较能效。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Operational_Technology">Operational technology - Wikipedia</a></li>
<li><a href="https://blog.claroty.com/team82/research/freeze-the-controller-defrost-the-food-uncovering-vulnerabilities-in-danfoss-refrigeration-controllers">Freeze the Controller , Defrost the Food: Uncovering... | Claroty</a></li>
<li><a href="https://royalcooling.com/commercial-refrigeration-defrosting-guide-burlington-ma/">Commercial Refrigeration Defrosting Guide Burlington MA</a></li>

</ul>
</details>

**社区讨论**: 评论区普遍认为根本原因是经济压力而非无知：利润微薄的门店无力承担安全审查或硬件更新周期，于是一批早已停止支持的 15 至 20 年老控制器仍在服役。也有人反驳那种条件反射式的“为什么要把冷柜联网？”质疑，指出如今不少实验室仪器和其他设备必须购买订阅并联网才能运行，且 Danfoss 自己的宣传材料就在推销远程联网功能。还有人猜测此事可能与 2026 年 8 月美国军队营区商店冷柜故障存在关联。

**标签**: `#cybersecurity`, `#IoT/OT security`, `#critical infrastructure`, `#supply chain`, `#legacy systems`

---

<a id="item-4"></a>
## [WiFi 7 路由器被改装为 320 Msps 软件定义无线电接收机](https://github.com/h0m3us3r/w1700k-sdr) ⭐️ 8.0/10

开发者 h0m3us3r 发布开源项目 w1700k-sdr，通过逐寄存器逆向工程编写的自定义固件，取代了 Gemtek W1700K Wi-Fi 7 路由器上 MediaTek MT7996 射频芯片的原厂固件。改装后的射频芯片可在 2.4/5/6 GHz 频段以最高 320 Msps 的速率采集原始 14 位 IQ 采样，并在浏览器中实时呈现频谱图与瀑布图。 这表明消费级 WiFi 7 硬件可以充当宽带接收机，成本远低于专用 SDR 仪器，从而让更多人以极低预算开展射频实验、频谱监测和自制测试仪器。这也顺应了更广泛的趋势，即把消费级无线芯片用于厂商从未设想的用途。 路由器中的 Airoha AN7581 SoC 通过零拷贝 UDP 将 IQ 数据经 10 GbE 网络传输，Linux 主机则在接收机控制界面上实时绘制频谱与瀑布图。需要留意的是：该项目仅支持接收、不具备发射能力，且绑定于 Gemtek W1700K 这一特定硬件，整个实现依赖底层寄存器级的逆向工程，而非厂商提供的任何 API。

hackernews · djfergus · 10月12日 12:41 · [社区讨论](https://news.ycombinator.com/item?id=50055593)

**背景**: 软件定义无线电（SDR）是指在靠近天线处就完成数字化的无线电，滤波、解调、调谐等功能由软件而非专用模拟电路实现。采样率以 Msps（每秒百万次采样）衡量，决定了接收机能够捕获的瞬时带宽；而 IQ 采样则是表示复基带信号的同相与正交数值对。MediaTek MT7996 等现代 WiFi 芯片本身就是复杂射频器件，会在芯片内部对 2.4、5、6 GHz 频段的大段频谱做数字化，因此只要固件能被改造成输出原始采样，路由器原则上就能当作 SDR 使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/h0m3us3r/w1700k-sdr">Turn a WiFi 7 Router into a 320Msps Software Defined Radio ...</a></li>
<li><a href="https://daily.dev/posts/turn-a-wifi-7-router-into-a-320msps-software-defined-radio-receiver-38irzaw8t">Turn a WiFi 7 Router into a 320Msps Software Defined...</a></li>
<li><a href="https://zeli.app/story/50055593">Wi-Fi 7 router turned into a 320 Msps · 56 HN comments | Zeli</a></li>

</ul>
</details>

**社区讨论**: 评论区反响热烈：有人指出同一位开发者此前还用 ESP32 WiFi 微控制器做出了 eSpDR，并希望看到更多针对普通 WiFi 网卡的类似项目。有人推测由于芯片组相同，本项目应也能在自带 NVMe PCIe 的 Banana Pi R4 上运行；还有人讨论手机 FM 收音机需要签合同是否因为其射频本身是软件定义的，认为 320 Msps、5 GHz 的接收能力已是他们所知最便宜的方案，并构想用廉价的衰减器、滤波器和上下变频器把它改造成自制的综合测试仪。

**标签**: `#Software Defined Radio`, `#WiFi 7`, `#Hardware Hacking`, `#RF`, `#Embedded Systems`

---

<a id="item-5"></a>
## [Codex CLI 默认安装常驻自更新的后台守护进程](https://github.com/openai/codex/issues/48195) ⭐️ 8.0/10

OpenAI 的 Codex CLI 现在会默认安装一个常驻后台守护进程，它会自动启动并自我更新，而且官方没有提供任何文档化的开关来关闭它。关于这一未记录默认行为的 GitHub issue（openai/codex#48195）已获得约 480 个赞和 245 条评论，用户纷纷报告磁盘占用膨胀、权限错误以及自动更新不可靠等问题。 这件事重要，是因为一款开发者工具在默认情况下悄悄改变了用户机器的状态，对于在工作机或类 CI 环境中运行 Codex CLI 的人来说，这涉及信任和知情同意的问题。它也反映出 AI 编程助手普遍开始拉起常驻后台进程的行业趋势，并促使用户去寻找关闭开关或更轻量的替代方案。 该守护进程目前藏在一个未公开的功能开关背后，用户可以在 `~/.codex/config.toml` 的 `[features]` 段落中加入 `daemon_auto_start = false` 来关闭它。评论者还报告它会向 `~/.codex` 写入 PID 文件和锁文件，并有个案显示累积的旧版本占用了大约 12 GB 空间；另有用户称自动更新破坏了文件权限、导致 `.git` 变为只读，从而阻塞了他们的工作。

hackernews · whimblepop · 10月12日 18:29 · [社区讨论](https://news.ycombinator.com/item?id=50060694)

**背景**: Codex CLI 是 OpenAI 的开源编程智能体，运行在本地终端中，于 2025 年 4 月 16 日与 o3、o4-mini 推理模型一同发布，它把 OpenAI 的模型连接到本地文件和 shell 命令，使其能够编写代码并执行任务。守护进程（daemon）是一种无需用户直接交互便持续运行的后台进程，通常负责同步、索引或维护等必须持续进行的工作。在这里，该守护进程显然是为了让 Codex 保持最新并随时待命，但它是以一个用户并未明确要求的常驻进程形式存在的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Codex_CLI">Codex CLI - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Codex">OpenAI Codex - Wikipedia</a></li>
<li><a href="https://docs.atuin.sh/main/reference/daemon/">daemon - Atuin Docs</a></li>

</ul>
</details>

**社区讨论**: 整体情绪偏向不满：用户认为该守护进程 bug 多、过度设计，有人报告约 12 GB 的陈旧版本堆积、权限被破坏导致 `.git` 只读并阻塞了智能体的目标，以及每隔几小时就会出现的失败。不少人分享了变通办法——关闭隐藏的 `daemon_auto_start` 开关，或删除 PID/锁文件后将其软链到 `/dev/null` 并用 `chattr +i` 设为不可写；也有人推崇 hax 这类极简 harness，还有人指出 Claude Code 采用的后台进程模式其实与此类似。

**标签**: `#codex-cli`, `#openai`, `#background-daemon`, `#ai-coding-assistants`, `#developer-tools`

---

<a id="item-6"></a>
## [Show HN：PS2 游戏被静态重编译为 WebAssembly，可在浏览器中运行](https://github.com/snuri00/ps2-web-recomp) ⭐️ 8.0/10

开发者 snuri00 在 GitHub 上发布了名为“ps2-web-recomp”的项目，它把 PlayStation 2 游戏静态重编译为 WebAssembly，从而可以直接在网页浏览器中运行。该 Show HN 帖子获得了 278 分和 146 条评论，是近期讨论度较高的模拟器相关发布之一。 它把此前主要出现在 Nintendo 64 和 PS Vita 项目中的静态重编译技术推进到了 PS2 世代，并以浏览器为目标平台，意味着无需安装、即点即玩，并且有可能在手机上运行。如果这一路线成熟，可能会改变复古游戏的保存与分发方式，从传统的解释器/模拟器转向针对单个游戏的原生（或 Wasm）移植。 静态重编译是一种提前编译（AOT）过程：原始游戏代码在启动前就被翻译完成，而不是像模拟器那样在运行时解释执行，因此通常性能更好，但必须针对每一款游戏单独处理。由于每个产物都是独立制作的二进制文件，评论者指出这类移植缺少成熟模拟器所具备的社区审查与信任，从而引发了对恶意软件的担忧。

hackernews · deadxwarrior · 10月12日 06:46 · [社区讨论](https://news.ycombinator.com/item?id=50052251)

**背景**: 静态重编译是指把一个应用程序从一种硬件平台自动翻译到另一种平台，著名例子包括面向 Nintendo 64 的 Zelda64Recomp。WebAssembly（Wasm）是一种可移植的二进制指令格式，可作为 C/C++、Rust 等语言的编译目标，让高性能代码以接近原生的速度在浏览器中运行。PlayStation 2 因其定制的 Emotion Engine CPU、图形合成器（Graphics Synthesizer）以及特殊的存储架构而极难模拟，这也是 PCSX2 等项目耗费多年才逐渐成熟的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Zelda64Recomp/Zelda64Recomp">GitHub - Zelda64Recomp/Zelda64Recomp: Static recompilation of...</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebAssembly">WebAssembly - Wikipedia</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/WebAssembly">WebAssembly - MDN</a></li>

</ul>
</details>

**社区讨论**: 整体情绪是热情中带有谨慎：一位评论者担心大量反编译/重编译移植作品缺乏成熟模拟器社区那样的恶意软件审查与信任基础；另一位则表示这波重编译浪潮令人惊叹，并认为这要归功于 AI，尽管他并不喜欢 AI 对自己职业的影响。还有人建议把重编译器本身编译成 WebAssembly，从而可以在浏览器里直接转换项目；一位开发者则分享了类似的 PS Vita 项目（vitaslop），它在 Wasm 中构建了 ARM 到 WASM 的转译器，还实现了 WebGPU 着色器与音频转码，并已在 Chrome 移动端跑通。

**标签**: `#WebAssembly`, `#Static Recompilation`, `#PS2 Emulation`, `#Game Preservation`, `#Show HN`

---

<a id="item-7"></a>
## [循环扩散 Transformer：在每个去噪步内重复运行共享模块](https://www.reddit.com/r/MachineLearning/comments/1x49d61/looped_diffusion_transformer_the_same_blocks_run/) ⭐️ 8.0/10

一篇新论文《Looped Diffusion Transformer》（arXiv 2609.40305，9 月 30 日）提出，不通过把文生图扩散 Transformer 做大，而是在每个去噪步内让一组共享的 Transformer 块重复运行多次来扩展计算量。作者报告称，一个 260M 参数的循环模型在多项基准上击败了体积大 6.5 倍的模型，推理算力消耗却少 4.9 倍，并已在 Hugging Face（sensenova）以 MIT 协议开源 B/16 代码与权重。 它为扩散模型指出了一条更廉价的扩展路径：不必一味把网络做大，而是通过复用同一套权重、增加循环次数在推理阶段换取质量，这对算力或显存受限的团队尤为重要。由于循环深度在采样时选择，使用者可以针对每张图调节计算量，这与循环式和循环深度语言模型中迭代次数的用法类似。 作者指出，朴素地增加循环并不能稳定带来收益，他们通过在每一次循环上施加深度监督（deep supervision）并引入自调制注意力（self-modulating attention）解决了这一问题。发布的模型在循环深度 4 上训练，而一次在 M5 Pro 上的实测（PyTorch MPS、fp32、100 步 Euler、CFG 6.0）显示，大部分画质变化发生在深度 3 之前，深度 3 与深度 4 的结果几乎一致，单张图耗时在深度 1 约 23–24 秒、深度 4 约 43–47 秒。

reddit · r/MachineLearning · /u/Fit-Ant2238 · 10月12日 18:13

**背景**: 扩散 Transformer（DiT）从噪声出发，通过多步迭代去噪来生成图像，每一步由一个大型 Transformer 预测更新量；把这类模型做大能提升质量，但训练与推理成本会急剧上升。循环式／循环深度架构则让同一组模块被复用多次，参数量保持不变而有效深度增加。深度监督指的是在中间循环处也加入训练信号，让较早的迭代同样学到有用的东西；而自调制注意力则让注意力机制在多次循环中调整自身行为，而不是重复完全相同的计算。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2609.40305">Looped Diffusion Transformer</a></li>
<li><a href="https://github.com/OpenSenseNova/Looped-DiT">GitHub - OpenSenseNova/ Looped -DiT: PyTorch implementation of...</a></li>

</ul>
</details>

**标签**: `#diffusion models`, `#transformers`, `#efficient ML`, `#text-to-image`, `#open source`

---

<a id="item-8"></a>
## [learnc 自动调优现有 C 代码常量，JPEG 体积缩小 9.1%](https://www.reddit.com/r/MachineLearning/comments/1x4dlbm/learnc_fit_the_constants_in_existing_c_code_to/) ⭐️ 8.0/10

一个名为 learnc 的新工具（MIT 许可证）可以针对用户用 C 编写的评分函数，自动调优未经修改的 C 源码中的命名常量，然后把新数值写回同一个文件。在留出数据上，它在相同 SSIM 下为 JPEG 带来 9.1% 的 BD-rate 提升（超过 mozjpeg 手工调优量化表的 2.7%），并将 Google WebRTC VAD 的 F1 从 0.810 提升到 0.859。 它在传统的程序优化与机器学习式的参数拟合之间架起了一座通用而实用的桥梁，让开发者无需重构代码、也无需迁移到新框架，就能从既有代码中榨取可量化的收益。由于基准结果用 libjpeg 和 scikit-image 独立验证过，其可信度足以吸引所有维护编解码器、信号处理或含大量魔法常量的嵌入式 C 代码的人。 JPEG 实验中，作者在 12 张 Kodak 图像上对 stb_image_write.h 中的 128 个量化表条目进行调优，并在另外 12 张上测试；VAD 实验则对 vad_core.c 中的每一个常量在 LibriParty 开发集上调优。作者也指出了局限：在低于 1 bpp 时 JPEG 没有增益，且该方法最适合几十到几百个常量的规模，不适合大型权重集。

reddit · r/MachineLearning · /u/keep_up_sharma · 10月12日 20:51

**背景**: BD-rate（Bjontegaard Delta rate）是衡量压缩效率的标准指标：它给出在跨越多个质量点的范围内，某个编码器要达到与另一编码器相同质量时平均节省的码率百分比，因此 9.1% 的 BD-rate 增益意味着在视觉质量相同时文件明显更小。WebRTC VAD 是 Google 在 WebRTC 中内置的小型语音活动检测器，它是一个判断音频帧是否包含人声的二分类器，并通过 py-webrtcvad 等 Python 绑定被广泛使用。stb_image_write.h 是一个流行的单头文件、公有领域的 C 图像写入库，其 JPEG 量化表正是那种原本靠手工挑选、如今可以由 learnc 这类工具自动拟合的常量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ottverse.com/what-is-bd-rate-bd-psnr-calculation-interpretation/">BD-Rate & BD-PSNR: Calculation and Interpretation - OTTVerse</a></li>
<li><a href="https://github.com/wiseman/py-webrtcvad">GitHub - wiseman/py-webrtcvad: Python interface to the WebRTC ...</a></li>
<li><a href="https://github.com/nothings/stb">GitHub - nothings/stb: stb single-file public domain ... Image Writing (stb_image_write) | nothings/stb | DeepWiki Image Loading (stb_image) | nothings/stb | DeepWiki C Programming - Reading and writing images with the stb_image ... GitHub: Let’s build from here · GitHub stb_image_write 1.15.0 - cppget.org</a></li>

</ul>
</details>

**标签**: `#program-optimization`, `#autotuning`, `#image-compression`, `#vad`, `#open-source-tools`

---