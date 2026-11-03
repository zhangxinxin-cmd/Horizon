# Horizon 每日速递 - 2026-11-03

> 从 42 条内容中筛选出 5 条重要资讯。

---

1. [Astra 声称可读取并编辑 Qwen 模型权重](#item-1) ⭐️ 9.0/10
2. [树莓派 5 发布：2.4GHz Cortex-A76 与双 4K60 HDMI，售价 60 美元起](#item-2) ⭐️ 9.0/10
3. [vLLM v0.33.0rc3 发布：升级 PyTorch 2.14、仅提供 CUDA 13.0 wheel，并新增大量模型支持](#item-3) ⭐️ 8.0/10
4. [ChatGPT 分享链接漏洞可致账号被接管，现已修复](#item-4) ⭐️ 8.0/10
5. [Linux 内核 IPv4 TCP 高危释放后使用漏洞（CVE-2026-98432）可远程 RCE](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Astra 声称可读取并编辑 Qwen 模型权重](https://rikiyat.github.io/blog/weight-space-programming/) ⭐️ 9.0/10

一篇博客文章声称，Astra（报道中称为 GPT-6 Astra）能够检查并直接编辑小型神经网络的权重；一项实验据称直接修改了 Qwen3.5-0.8B 的 131,072 个权重，将 MATH-500 准确率从 7.9%提升到 48.1%，约为原来的六倍。 如果这些说法成立，直接的权重空间编程将显著改变可解释性、模型引导和 AI 安全领域，因为能力可以在不重新训练、不依赖提示工程的情况下被修改。它也可能加剧围绕递归自我改进的争论，因为一个能理解并编辑其他模型权重的模型，更接近能够改进 AI 系统的 AI。 据报道，这次对 Qwen 的编辑只改动了该模型名义上 8 亿参数中的约 0.016%，针对的是一种循环行为：Astra 将其追溯到第 15 层和第 19 层 MLP 写出的一个方向，并从 64 个输出列中减去该方向。Astra 据称使用 Python 计算替换值，然后提交编辑后的张量进行测试，但这些结果仅限于小型模型，且尚未得到独立验证。

hackernews · dbreunig · 11月2日 18:21 · [社区讨论](https://news.ycombinator.com/item?id=50341174)

**背景**: Qwen 是阿里云推出的开放权重语言模型系列，其中 0.8B 版本是一个小型模型，因运行和检查成本低而常用于研究。神经网络权重是决定模型行为的习得参数；通常研究人员通过训练或微调来影响它们，而不是直接编辑单个张量。递归自我改进是一种假想过程，指 AI 系统提升自身能力，人们既将其视为潜在突破，也视为安全风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://explainx.ai/blog/weight-space-programming-gpt-6-astra-edits-qwen3-5-0-8b-weights-math-7-9-to-48-1-mit-csail-2026">GPT-6 Astra Edits Qwen Weights: MATH-500 7.9% to 48.1% ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Qwen">Qwen - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement">Recursive self - improvement - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论者在震惊与怀疑之间分化：vessenes 称这些结果“疯狂”，并表示原以为 LLM 对自身权重的理解会低于人类；xg15 则认为这符合 LLM 快速掌握复杂系统的能力。vanyle 主张这大概率不是涌现能力，而是 OpenAI 为追求递归自我改进、用神经权重数据训练 Astra 的产物，并将其比作早期 GPT 模型从训练数据中学会国际象棋。还有人强调了技术细节，例如针对第 15 层和第 19 层循环行为的修复。

**标签**: `#LLM interpretability`, `#weight editing`, `#Qwen`, `#recursive self-improvement`, `#AI safety`

---

<a id="item-2"></a>
## [树莓派 5 发布：2.4GHz Cortex-A76 与双 4K60 HDMI，售价 60 美元起](https://t.me/zaihuapd/44854) ⭐️ 9.0/10

树莓派 5 正式发布，搭载 2.4GHz 四核 64 位 Arm Cortex-A76 CPU 和 VideoCore VII GPU，支持 OpenGL ES 3.1 与 Vulkan 1.2。新板还提供双路 4K60p HDMI 输出、4K60p HEVC 解码器、双频 802.11ac Wi-Fi、蓝牙 5.0/BLE 以及两个 USB 3.0 接口，4GB 版本售价 60 美元、8GB 版本 80 美元（另加当地税费）。 这是树莓派平台多年来最大的一次代际升级：CPU 从 Cortex-A72 跃升至笔记本级别的 Cortex-A76 核心，GPU 也大幅增强，使这块板子更接近“桌面级电脑”而非单纯的创客玩具。嵌入式系统开发者、创客、工业集成商以及教育用户等整个树莓派生态都将直接受到影响。 Cortex-A76 核心搭配 16nm 工艺的博通 BCM2712 SoC 与最高 800MHz 的 VideoCore VII GPU；主板还支持 SDR104 模式的高速 microSD 卡，两个 USB 3.0 端口可同时以 5Gbps 带宽运行。与以往树莓派发布一样，标价不含当地税费与运费，实际铺货时间通常晚于发布时间。

telegram · zaihuapd · 11月2日 12:00

**背景**: 树莓派是一款信用卡大小的低成本单板计算机，运行 Linux，广泛用于教育、原型开发和嵌入式产品；每一代新品的核心卖点主要取决于其 Arm CPU 核心与博通 GPU。Cortex-A76 是 Arm 的乱序、超标量核心，主打“笔记本级性能、移动级能效”，取代了树莓派 4 所用的 Cortex-A72。VideoCore VII 是集成在 BCM2712 SoC 中的博通 GPU，而 SDR104 则是 UHS-I 规格中的高速 SD 总线模式，相比旧模式可将存储卡吞吐量提升约一倍。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ARM_Cortex-A76">ARM Cortex-A76 - Wikipedia</a></li>
<li><a href="https://www.notebookcheck.net/Extreme-Graphics-2-vs-VideoCore-VII_9700_54_12760.247598.0.html">Intel Extreme Graphics 2 vs Broadcom VideoCore VII</a></li>
<li><a href="https://www.raspberrypi.com/documentation/accessories/sd-cards.html">SD Cards - Raspberry Pi Documentation</a></li>

</ul>
</details>

**标签**: `#Raspberry Pi`, `#single-board computer`, `#Arm Cortex-A76`, `#hardware release`, `#embedded systems`

---

<a id="item-3"></a>
## [vLLM v0.33.0rc3 发布：升级 PyTorch 2.14、仅提供 CUDA 13.0 wheel，并新增大量模型支持](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3) ⭐️ 8.0/10

vLLM 发布了 v0.33.0rc3，该版本包含 927 个提交、来自 389 位贡献者，新增了 Reflection Beam-1.0（501B MoE，激活参数 23B）、Yandex AliceAI-Foundation-80B-A3B、Recursive Flint、Muse Spark Open、Step-5 Preview、NVIDIA Alpamayo 2 Super、Nemotron Parse 3.5 和 MiniCPM-OCR 1.0 等模型的支持。同时将技术栈升级到 PyTorch 2.14.0（配套 torchvision 0.29.0 与 Triton 3.8.0），不再发布 CUDA 12.9 构建、只提供 CUDA 13.0 的 wheel 与镜像，并让 CUDA wheel 与 libtorch 实现 ABI 稳定。 vLLM 是目前使用最广泛的开源大模型推理与服务引擎之一，因此它的依赖与构建产物决策会波及所有在生产环境部署模型的团队——放弃 CUDA 12.9 意味着仍在使用旧驱动的环境必须升级，或固定在更早的版本上。而投机解码优化、ROCm 上的 MonoKernel 解码以及面向 Blackwell 的专用内核等性能工作，会直接转化为更低的延迟和更高的单卡吞吐，这正是大模型服务成本的关键杠杆。 值得注意的工程变更包括：移除 Medusa 与 MLP speculator、移除旧的 Ray 编译图执行器、弃用 `--mamba-cache-mode`、在生成暂停期间收到的请求返回 HTTP 503，以及新增面向 EFA 的 AWS 镜像用于 KV 传输和在支持 EFA 的 EC2 实例上做多节点服务。发布说明中给出的基准测试显示特定配置下收益显著，例如 DFlash/DSpark 不再在 token 预算中预留草稿槽位后，DeepSeek-V4.1-Flash 在 GB300 上的输出从 1373 tok/s 提升到 3390 tok/s；ROCm 的 `ROCM_OCTAVE` 3-4 比特 KV 缓存则在 RX 7900 XTX 上达到 fp16 的 4.6 倍 KV token 容量。

github · khluu · 11月2日 10:10

**背景**: vLLM 是一个开源、高吞吐且显存高效的大语言模型推理与服务引擎，最初由加州大学伯克利分校 Sky Computing Lab 开发，其核心创新是用于管理 KV 缓存的 PagedAttention。本次新增支持的模型中许多属于混合专家（MoE）架构，这类架构把网络拆成若干专门的子网络，每个 token 只被路由到其中少数几个专家，从而在单 token 计算量不大的前提下实现极大的总参数量——这正是“501B MoE，激活参数 23B”这类标注的含义。libtorch ABI 稳定的工作意味着编译好的 CUDA wheel 可以配合多个 PyTorch 版本使用而无需重新编译，这也是 vLLM 的 RFC 和 PyTorch 稳定 ABI 计划中长期追踪的需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm">vllm -project/ vllm : A high-throughput and memory-efficient inference ...</a></li>
<li><a href="https://docs.pytorch.org/docs/2.14/notes/libtorch_stable_abi.html">LibTorch Stable ABI — PyTorch 2.14 documentation</a></li>
<li><a href="https://researchaudio.io/p/mixture-of-experts-moe-in-large-language-models">Mixture of Experts ( MoE ) in Large Language Models</a></li>

</ul>
</details>

**标签**: `#vLLM`, `#LLM inference`, `#release`, `#PyTorch`, `#CUDA`

---

<a id="item-4"></a>
## [ChatGPT 分享链接漏洞可致账号被接管，现已修复](https://www.parameter.ai/labs/we-found-a-gap-at-openai) ⭐️ 8.0/10

安全公司 Parameter 的研究团队发现，攻击者只需构造并发布一个恶意 ChatGPT 分享链接，任何已登录用户点开后，攻击代码就会在 chatgpt.com 的会话中执行，从而读取私密对话并将数据外传到攻击者服务器。OpenAI 已于 10 月 26 日修复该问题，将其定级为 P1（最高优先级）漏洞，并向研究团队支付了 5000 美元赏金。 该漏洞无需安装任何程序，受害者仅需点开一个链接即可被利用，这意味着一个看似普通的公开对话分享，可能成为影响数亿 ChatGPT 用户的账号接管通道。它同时说明，AI 聊天界面中不断增多的富媒体嵌入内容（预览、图表、渲染产物）正在成为一类严重的安全风险面。 该漏洞源于 ChatGPT 的链接预览功能与图表组件之间的消息处理缺陷，使得分享对话中渲染的内容能够发出被页面当作可信来源处理的消息。这是一次协调披露：Parameter 在 10 月 26 日修复两天后的 10 月 28 日才公开发文。

telegram · zaihuapd · 11月2日 10:24

**背景**: ChatGPT 的分享功能允许用户把一段对话发布成公开链接，该页面会重新渲染对话中的内容，例如代码解释器的输出、文件预览、生成的图片以及 Canvas 画布产物。这类页面通常内嵌多个组件，组件之间通过 postMessage 等浏览器消息 API 通信；一旦接收方不校验消息来源，注入的内容就能以宿主域名（chatgpt.com）的权限运行。在漏洞赏金计划中，P1 等级代表最紧急的一类问题，通常指可导致远程代码执行或账号接管的漏洞，因此 OpenAI 迅速发布修复并支付了赏金。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://aicoder.com/zh/news/news-20261030-parameter-chatgpt-share-link-account-takeover-mathlive-p1-fixed-oct-26-5000-bounty">安全公司 Parameter 披露 ChatGPT 分享链接漏洞：打开一个链接就能被...</a></li>
<li><a href="https://youlidao.ai/zh/intelligence/chatgpt-account-takeover-how-parameter-ai-hacked-openai">ChatGPT 账户劫持：Parameter.ai 如何攻破 OpenAI 防线</a></li>
<li><a href="https://www.parameter.ai/">Parameter | AI Pentesting & Continuous Security</a></li>

</ul>
</details>

**标签**: `#security`, `#ChatGPT`, `#vulnerability`, `#account takeover`, `#AI`

---

<a id="item-5"></a>
## [Linux 内核 IPv4 TCP 高危释放后使用漏洞（CVE-2026-98432）可远程 RCE](https://t.me/zaihuapd/44866) ⭐️ 8.0/10

一条 Telegram 安全提醒称，Linux 内核 IPv4 TCP 协议栈中存在高危释放后使用漏洞 CVE-2026-98432，攻击者可完全从网络侧触发，无需认证、无需用户交互，且已有针对 MPTCP 监听端口的远程代码执行（RCE）利用示例公开。该提醒强调此漏洞并不只影响 MPTCP 场景，同时由于 Go 运行时会在 listen socket 上默认启用 MPTCP，Linux 上使用 Go 1.24 及以上版本编写的服务默认处于暴露状态。 任何可被网络访问且尚未打补丁的 Linux 服务器都可能面临无需认证的远程代码执行风险，其处置紧迫性与以往的高危 TCP 协议栈漏洞相当。影响面异常广泛：Go 1.24 起会在 Linux 上的 TCP 监听套接字上默认开启 MPTCP，因此大量用 Go 编写的服务在未做任何 MPTCP 相关配置的情况下就已暴露。 Go 官方安全团队指出，即使服务没有监听 MPTCP，也可能受到同类攻击，因此仅仅关闭 MPTCP 并不是完整的缓解手段，正确做法是更新内核补丁。作为背景，当客户端请求中不包含 MPTCP 时，MPTCP 监听套接字会退化为创建普通的 TCP 套接字，因此该特性带来的性能影响很小，往往是在用户不知情的情况下被默认开启的。

telegram · zaihuapd · 11月3日 02:37

**背景**: MPTCP（多路径 TCP）是 Linux 内核实现的一种 TCP 扩展，允许同一个连接同时使用多条底层 TCP 会话，以提升连接的冗余性与吞吐；内核把这些子流套接字创建为普通 TCP 套接字，再通过 TCP-ULP 修改其行为。释放后使用（use-after-free）漏洞指一块内核内存已被释放却仍被引用，攻击者可以影响或复用这块内存，在内核网络代码中这类问题可能进一步升级为远程代码执行。自 Go 1.24 起，只要内核支持，Go 运行时就会在 Linux 上为 TCP 监听套接字默认启用 MPTCP，这正是一个内核层的 TCP 漏洞会波及大量未做 MPTCP 配置的 Go 服务的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/critical-linux-kernel-flaw-allows-remote-root-attacks-on-mptcp-servers/">Critical Linux kernel flaw allows remote root attacks on MPTCP servers</a></li>
<li><a href="https://docs.kernel.org/networking/mptcp.html">Multipath TCP (MPTCP) — The Linux Kernel documentation</a></li>
<li><a href="https://www.mptcp.dev/details.html">Implementation details (Kernel) | Multipath TCP for Linux</a></li>

</ul>
</details>

**标签**: `#linux-kernel`, `#security-vulnerability`, `#cve`, `#networking`, `#go`

---

