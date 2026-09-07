---
layout: default
title: "Horizon Summary: 2026-09-07 (ZH)"
date: 2026-09-07
lang: zh
---

> 从 33 条内容中筛选出 7 条重要资讯。

---

1. [OpenAI 披露编程代理正推动研究加速迈向递归自我改进](#item-1) ⭐️ 9.0/10
2. [最高法发布人工智能纠纷司法解释，厘清 AI 责任](#item-2) ⭐️ 9.0/10
3. [LG 智能电视被曝偷录音频并扫描局域网设备](#item-3) ⭐️ 8.0/10
4. [TPU 经 InferenceX 加速外部化，削弱英伟达 CUDA 护城河](#item-4) ⭐️ 8.0/10
5. [Rustuna：高性能的 Optuna Rust 实现发布](#item-5) ⭐️ 8.0/10
6. [LLM 进化出的优化算法打破 10 项圆形填充纪录](#item-6) ⭐️ 8.0/10
7. [华为时隔六年发布全新麒麟高性能芯片](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI 披露编程代理正推动研究加速迈向递归自我改进](https://simonwillison.net/2026/Sep/6/research-acceleration-the-view-inside-openai/) ⭐️ 9.0/10

OpenAI 发布新文章《Research acceleration: The view inside OpenAI》，并配合首席科学家 Jakub Pachocki 的随笔《An Alien Mind》，将递归自我改进（RSI）定位为公司的 AGI 方向。文中披露，2026 年编程代理已重塑内部研究工作流程，每位研究者的每日中位 AI 支出从接近零跃升至 8 月下旬约 600 美元。 这是 OpenAI 日益明确的信号之一：它将递归自我改进视为当前 AGI 战略，而非遥远理论。由于 OpenAI 的研究方法往往成为行业惯例，其内部编程代理使用量的快速增长，暗示自主编程代理将越来越普遍地推动整个 AI 领域的研发。 文章中的图表标题为“编程代理正在重塑 OpenAI 研究者的日常工作——中位数研究者”，显示每位研究者的每日 AI 支出在 7 月中旬前约 150–165 美元徘徊，随后在 8 月下旬猛增至约 600 美元。Simon Willison 猜测 7 月底的拐点来自内部员工用上后来以 GPT-6 Astra 名义发布的模型；值得注意的是，全文完全没有展开解释 RSI 这个缩写。

rss · Simon Willison · 9月6日 23:57

**背景**: 递归自我改进（RSI）是一种假设性过程：AGI 系统通过改写或改进自身代码来增强能力，理论上可能引发智能爆炸，因为每一次改进都能解锁下一步改进。编程代理则把大语言模型与工具调用、代码执行和反馈循环等外围架构结合起来，使其能够自主规划、编写、运行和调试代码，无需等待人类逐步指挥。Anthropic 的研究机构也已指出，RSI 正变得越来越具体，但可能增加人类失去对 AI 系统控制的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement">Recursive self - improvement - Wikipedia</a></li>
<li><a href="https://www.anthropic.com/institute/recursive-self-improvement">Our progress toward recursive self - improvement , and its implications.</a></li>
<li><a href="https://www.uipath.com/ai/what-are-coding-agents">What Are Coding Agents? | UiPath</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#AGI`, `#AI research`, `#coding agents`

---

<a id="item-2"></a>
## [最高法发布人工智能纠纷司法解释，厘清 AI 责任](https://www.cnr.cn/news/20260907/t20260907_527806795.shtml) ⭐️ 9.0/10

9 月 7 日，最高人民法院发布共 5 部分 24 条的人工智能纠纷案件司法解释，明确未经同意使用 AI 制作可识别的人脸、声音可能构成人格权侵权，算法价格歧视侵害消费者权益的应承担责任。解释还对 AI 冒充他人代言、自动驾驶、知识产权等相关责任作出规定。 该司法解释为法院处理换脸、算法杀熟及 AI 生成内容等纠纷提供了统一裁判依据，填补了 AI 快速商业化进程中的法律空白。它将直接影响中国的技术平台、广告主、内容创作者和法务合规人员，也可能为其他国家和地区的 AI 治理提供参考。 该解释共 5 部分 24 条，聚焦 AI 换脸、算法杀熟、冒充他人代言、自动驾驶和知识产权等问题。一个突出亮点是，AI 冒充他人代言诱导消费的，法院可依法支持惩罚性赔偿请求；利用 AI 实施“网络开盒”“人肉搜索”等侵害自然人隐私权的行为同样受到规制。

telegram · zaihuapd · 9月7日 09:32

**背景**: “算法杀熟”在中国指互联网平台利用消费者数据，对同一商品或服务向不同用户提供不同价格，尤其对老用户或消费意愿较高的用户收取更高价格，本质上是一种价格歧视。“网络开盒”则是近年来出现的新型网络暴力，指违法获取并恶意公开他人个人信息，比传统“人肉搜索”更为恶劣。此前中国已有《互联网信息服务算法推荐管理规定》等行政法规，但本次司法解释将相关规则细化为民事侵权责任，为受害者提起诉讼提供了直接依据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wpipcn.com/newsinfo/4938641.html">你被大数据“杀熟”了吗？-企业官网</a></li>
<li><a href="https://finance.jschina.com.cn/jrcj/202201/t20220111_2927707.shtml">《算法规定》剑指大数据“杀熟”_中国江苏网</a></li>
<li><a href="https://m.mp.oeeee.com/a/BAAFRD0000202503211061784.html">起底“ 开 盒 ”背后的“社工库”：签到1次便可查1次他人信息 | 南都N视频</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#legal`, `#deepfake`, `#algorithmic pricing`, `#China`

---

<a id="item-3"></a>
## [LG 智能电视被曝偷录音频并扫描局域网设备](https://www.youtube.com/watch?v=6IFVTcM28KA) ⭐️ 8.0/10

一份新报告和视频曝光了 LG 智能电视如何在屏幕关闭的情况下仍录制音频，并扫描家庭网络中的其他设备。据报道，LG 的广告技术部门声称仅在美国就能访问 3.63 亿台次要可寻址设备。 此事之所以重要，是因为该报告意味着约 2.16 亿台 LG 智能电视都在进行多数用户从未明确同意的侵入式数据收集。它还在同意条款和窃听法律方面引发法律问题，因为从未接受 LG 条款的客人和家庭成员也可能被录音。 调查重点聚焦自动内容识别（ACR）功能，该功能会采集屏幕音频，以便电视识别内容并投放定向广告。采集到的数据可能在电视重新联网后上传，用户可以通过拔掉电视的 Wi-Fi/蓝牙芯片来彻底停止这种追踪。

hackernews · treve · 9月7日 00:22 · [社区讨论](https://news.ycombinator.com/item?id=49592375)

**背景**: 自动内容识别（ACR）是智能电视常用的技术，能够实时识别观看内容，以便广播商和广告商测量收视率并投放精准广告。据报道，LG 的广告部门不仅追踪电视本身，还会追踪同一局域网中的其他硬件，从而构建更完整的家庭设备画像。用户协议甚至可能要求电视所有者告知客人他们可能会被录音，批评者认为许多人对此并不真正知情。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.notebookcheck.net/LG-smart-TVs-caught-logging-audio-with-screen-off-and-snooping-on-local-devices.1391214.0.html">LG smart TVs caught logging audio with screen off and snooping on local devices - Notebookcheck News</a></li>
<li><a href="https://en.wikipedia.org/wiki/Automatic_content_recognition">Automatic content recognition - Wikipedia</a></li>
<li><a href="https://appleinsider.com/inside/mac/tips/how-to-stop-your-lg-or-samsung-smart-tv-from-tracking-you">How to stop LG & Samsung smart TV tracking, screen captures</a></li>

</ul>
</details>

**社区讨论**: 评论者的情绪既有愤怒也有“果然如此”的成分：一位五年来一直禁用网络功能的用户说他曾因此被朋友嘲笑，另一位用户则从两台 LG OLED 电视中拔掉了 Wi-Fi/蓝牙芯片。还有人指出 LG 的同意条款要求所有者告知附近的人可能被录音，并认为这种做法可能违反全方同意窃听法律。

**标签**: `#privacy`, `#smart-tv`, `#IoT security`, `#surveillance`, `#LG`

---

<a id="item-4"></a>
## [TPU 经 InferenceX 加速外部化，削弱英伟达 CUDA 护城河](https://newsletter.semianalysis.com/p/tpu-inferencex-full-steam) ⭐️ 8.0/10

SemiAnalysis 报道称，谷歌正借助其所谓 InferenceX 计划快速把 TPU 技术栈推向外部，并宣称 AI 推理的每美元性能最高可提升 50%。该计划正扩大客户群，还涉及 Ironwood、TPUv8i 等新芯片；谷歌也开源了 Raiden 推理库以吸引外部开发者。 这可能为推理负载较重的客户提供一种有竞争力且成本更低的英伟达 GPU 替代方案，并逐步削弱作为英伟达主导地位基础的 CUDA 锁定效应。其意义尤其在于，AI 工作负载的重心正从训练转向推理。 “每美元性能最高提升 50%”是报道的核心卖点，但公开摘要并未披露具体测试方法。谷歌的外部化策略将 Ironwood（TPUv7x）与 TPUv8i 等芯片，与开源 Raiden 推理库等软件举措相结合，以降低非谷歌开发者的使用门槛。

rss · Semianalysis · 9月7日 20:00

**背景**: 谷歌 TPU 是为 AI 定制的专用加速器，最初主要用于谷歌内部工作负载，但谷歌正通过 Google Cloud 以及近期的开源工具和库，不断扩大其对外可用范围。“外部化”指的就是这种从内部技术栈转向外部可采用的平台的转变。英伟达 CUDA 生态之所以是强大护城河，是因为其软件、工具和开发者习惯已将用户深度绑定到英伟达硬件上。谷歌以 InferenceX 标签包装的激进发布节奏和性价比主张，正是打破这种绑定最明确的尝试之一。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://newsletter.semianalysis.com/p/tpu-inferencex-full-steam">TPU Inference Externalization Full Steam Ahead - InferenceX</a></li>
<li><a href="https://officechai.com/ai/google-has-open-sourced-its-tpu-raiden-inference-library-in-apparent-bid-to-externalize-tpu-stack/">Google Has Open-Sourced Its TPU Raiden Inference Library In...</a></li>
<li><a href="https://multigrid.ai/learn/cuda-moat">CUDA and the Software Moat: What It Is Actually Made Of</a></li>

</ul>
</details>

**标签**: `#TPU`, `#AI inference`, `#Google`, `#hardware`, `#CUDA`

---

<a id="item-5"></a>
## [Rustuna：高性能的 Optuna Rust 实现发布](https://www.reddit.com/r/MachineLearning/comments/1w9nyhz/rustuna_a_highperformance_rust_implementation_of/) ⭐️ 8.0/10

Optuna 开发团队发布了 Rustuna，这是一个完全用 Rust 构建的 Optuna 高性能、内存高效实现。它保留了 Optuna 熟悉的 API 和概念，同时没有任何 Python 依赖，从而降低了供应链风险。 这一发布意义重大，因为 Optuna 是机器学习中使用最广泛的超参数优化框架之一，而 Rustuna 解决了供应链安全和内存开销方面的实际生产问题。这也可能标志着 Rust 在机器学习生态系统中日益增长的势头。 Rustuna 托管在官方 Optuna GitHub 组织下，并通过 Medium 博客文章发布。它通过 Rust 的原生内存管理实现了更低的内存占用，同时保持兼容的 API，使现有 Optuna 工作流能以最少改动迁移。

reddit · r/MachineLearning · /u/c-bata · 9月7日 10:01

**背景**: Optuna 是一个用于机器学习模型自动超参数调优的开源 Python 库，最初由 Preferred Networks 于 2018 年推出。超参数优化是指在训练之前选择控制学习算法的超参数值，以最小化给定数据集上的损失函数。Rustuna 用 Rust 而不是 Python 重新实现了这一框架，提供了一个兼容的替代品。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Optuna">Optuna</a></li>
<li><a href="https://en.wikipedia.org/wiki/Hyperparameter_optimization">Hyperparameter optimization</a></li>
<li><a href="https://optuna.org/">Optuna - A hyperparameter optimization framework</a></li>

</ul>
</details>

**标签**: `#Rust`, `#Optuna`, `#hyperparameter-optimization`, `#machine-learning`, `#supply-chain-security`

---

<a id="item-6"></a>
## [LLM 进化出的优化算法打破 10 项圆形填充纪录](https://www.reddit.com/r/MachineLearning/comments/1w9xlyi/llmguided_program_evolution_improves_10_bestknown/) ⭐️ 8.0/10

作者利用 LLM 引导的程序进化循环，在 Packomania csqv 基准上改进了 N=101–114 共 10 个圆形填充实例的最佳已知半径和，提升幅度为 2.4%–5.4%，仅用 15 次迭代。总 LLM 成本仅 27.72 美元，结果已获 Packomania 独立验证并接受。 这是一个典型案例：LLM 不是直接求解某个优化实例，而是进化求解算法本身，并在公认基准上取得最优结果。它展示了一条低成本的 AI 引导算法发现路径，可能推广到其他优化与工程问题。 该系统从一个简单的种子求解器出发，由 LLM 提出算法修改建议，通过计分板与独立验证器打分，保留改进并丢弃失败尝试。作者特别希望外界对“平台期检测停止规则”提出批评意见，该规则决定进化何时终止。

reddit · r/MachineLearning · /u/SIGH_I_CALL · 9月7日 16:54

**背景**: 圆形填充问题要求将 N 个圆放入给定容器，使某个目标（例如所有圆的半径之和）达到最优。Packomania 是自 1998 年以来由 Eckard Specht 维护的最佳已知圆形填充结果库，是数值优化领域的长期基准。该工作属于“程序进化”路线：大语言模型提出、修改并测试算法代码，而不是调整固定算法的参数；与之相关的前作包括 LLM Guided Evolution 以及 DeepMind 的 AlphaEvolve 等。csqv 是 Packomania 的一个圆形填充基准套件，论文结果已被收录其中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2609.05093">LLM-Guided Program Evolution for Circle Packing :Breaking 10...</a></li>
<li><a href="https://arxiv.org/html/2403.11446v1">LLM Guided Evolution - The Automation of Models Advancing Models</a></li>
<li><a href="https://packomania.com/">Packomania (52C17)</a></li>

</ul>
</details>

**标签**: `#LLM`, `#program evolution`, `#optimization`, `#circle-packing`, `#AI research`

---

<a id="item-7"></a>
## [华为时隔六年发布全新麒麟高性能芯片](https://www.news.cn/20260907/adf46c5c003240d28cc3cf6de54f9b5f/c.html) ⭐️ 8.0/10

9 月 7 日，华为在广州发布 Mate XT 2 三折叠手机，并推出新一代旗舰芯片麒麟 9050 Pro；这是华为六年来首次在旗舰发布会上推出全新麒麟高性能芯片。该芯片号称全球首款采用逻辑折叠技术的手机芯片。 麒麟 9050 Pro 标志着华为时隔六年重返旗舰芯片赛场，可能重塑移动 SoC 竞争格局。其逻辑折叠技术有望在不依赖最先进光刻设备的条件下提升性能，影响半导体行业在摩尔定律之后的演进方向。 据华为介绍，逻辑折叠技术在单芯片内将逻辑单元分层排布，如同从平层升级为“复式”，并增设垂直互联通道（形似“电梯”），使信号传输路径更短、时延更低。相关技术报道还称，该技术可将 AI 计算晶体管密度提升约 53%，并通过减小时间常数τ来提升速度、能效和密度。

telegram · zaihuapd · 9月7日 08:20

**背景**: 华为上一次在旗舰发布会推出全新麒麟旗舰芯片，还要追溯到 2020 年的 Mate40 全球发布会；此后受美国出口管制影响，华为难以获得先进制程代工，只能使用库存或相对落后的芯片。逻辑折叠是一种设计与封装思路：不再单纯依靠缩小晶体管，而是将逻辑单元在垂直方向堆叠，从而在传统光刻微缩受限时继续提升晶体管密度。理解了这一背景，就能明白为何麒麟 9050 Pro 被视为华为芯片战略的重要转折点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.geeky-gadgets.com/huawei-logic-folding-moores-law/">Huawei Logic Folding: A New Approach to Moore's Law - Geeky Gadgets</a></li>
<li><a href="https://www.huaweicentral.com/huawei-logicfolding-architecture-everything-you-need-to-know/">Huawei LogicFolding Architecture: Everything you need to know</a></li>
<li><a href="https://inf.news/en/digital/2689d47ccc2d7159a83a7f1299a0c453.html">Huawei releases its first high-performance chip in six years, the Kirin ...</a></li>

</ul>
</details>

**标签**: `#Huawei`, `#chip`, `#semiconductor`, `#technology`, `#mobile`

---