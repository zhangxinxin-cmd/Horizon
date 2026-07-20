# Horizon 每日速递 - 2026-07-20

> 从 24 条内容中筛选出 8 条重要资讯。

---

1. [阿尔特曼泄露邮件揭示 OpenAI 开源策略](#item-1) ⭐️ 9.0/10
2. [Hugging Face 披露 AI 智能体攻击，商业大模型拒绝取证](#item-2) ⭐️ 9.0/10
3. [特朗普政府因 Kimi K3 拟限制中国开源 AI 模型](#item-3) ⭐️ 9.0/10
4. [Fastjson 1.x 曝无 gadget 高危 RCE 漏洞](#item-4) ⭐️ 9.0/10
5. [编码代理让家庭设备逆向工程成本变得低廉](#item-5) ⭐️ 8.0/10
6. [美提案：训练数据为合理使用，全面禁止反蒸馏条款](#item-6) ⭐️ 8.0/10
7. [美军应用被发现嵌入中俄代码](#item-7) ⭐️ 8.0/10
8. [智谱建成全国产芯片大型数据中心](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [阿尔特曼泄露邮件揭示 OpenAI 开源策略](https://simonwillison.net/2026/Jul/20/sam-altman/#atom-everything) ⭐️ 9.0/10

一封萨姆·阿尔特曼在 2022 年发给 OpenAI 董事会的泄露邮件概述了一项计划，即发布一个具有类似 GPT-3 能力、可在本地运行的模型，旨在先发制人阻止竞争对手，并抑制对 rival AI 项目的投资。 这一披露罕见地揭示了 OpenAI 的内部竞争策略，表明其有意利用开源发布来控制市场并阻碍新进入者，这引发了关于该公司动机的伦理质疑。 该邮件日期为 2022 年 10 月 1 日，在 2026 年马斯克诉阿尔特曼案中被曝光。该模型设想在消费级硬件上运行，并对抗如 Stability AI 等项目的努力。

rss · Simon Willison · 7月20日 03:47

**背景**: GPT-3 是 OpenAI 开发的大型语言模型，通常通过云 API 访问。本地运行的模型允许用户无需联网或按次付费即可运行 AI，可能使访问民主化，但也引发安全担忧。Stability AI 等公司经常发布开源 AI 模型，形成竞争压力。

**标签**: `#open-source`, `#ai-ethics`, `#generative-ai`, `#openai`, `#sam-altman`

---

<a id="item-2"></a>
## [Hugging Face 披露 AI 智能体攻击，商业大模型拒绝取证](https://huggingface.co/blog/security-incident-july-2026) ⭐️ 9.0/10

Hugging Face 披露了 2026 年 7 月的一起安全事件，攻击者利用数据集处理流程中的两处代码执行漏洞，由自主 AI 智能体框架驱动，入侵内部系统，窃取了数据集和凭证，并在集群间横向移动。公司已修复漏洞、重建节点并轮换受影响凭证，同时建议用户轮换令牌并检查账户活动。 此事件凸显了自主 AI 智能体在网络攻击中日益增长的威胁，以及商业大语言模型（LLM）在取证中的局限性——安全护栏阻止了它们分析攻击日志。这强调了组织需要为 AI 驱动的攻击做好准备，并考虑使用本地开源模型进行敏感分析。 攻击发生在周末，执行了数万次操作；团队最初使用商业大模型 API 进行日志分析，但被安全护栏拦截，后改用本地部署的 GLM 5.2 模型完成了超过 1.7 万条攻击记录的取证。Hugging Face 确认面向公众的模型、数据集及 Spaces 未被篡改，软件供应链无异常。

telegram · zaihuapd · 7月20日 10:41

**背景**: Hugging Face 是一个流行的 AI 模型、数据集和演示托管平台，提供 Spaces 用于部署交互式机器学习应用。自主 AI 智能体框架（如 LangChain 和 Auto-GPT）使智能体能够自主推理、计划和行动。GLM 5.2 是 Z.AI 推出的开源大模型，拥有 744B 总参数和 100 万 token 上下文，专为长周期任务设计，可本地运行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/zai-org/GLM-5.2">zai-org/GLM-5.2 · Hugging Face</a></li>
<li><a href="https://smythos.com/developers/agent-development/autonomous-agent-frameworks/">Autonomous Agent Frameworks - SmythOS</a></li>
<li><a href="https://huggingface.co/spaces">Spaces - Hugging Face</a></li>

</ul>
</details>

**标签**: `#安全事件`, `#AI智能体`, `#HuggingFace`, `#代码执行漏洞`, `#取证`

---

<a id="item-3"></a>
## [特朗普政府因 Kimi K3 拟限制中国开源 AI 模型](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi) ⭐️ 9.0/10

据报道，特朗普政府正考虑采取软性限制措施，以阻止美国企业使用中国开放权重的 AI 模型，原因是性能强劲且性价比高的 2.8 万亿参数模型 Kimi K3 引发关注。白宫 AI 顾问 David Sacks 批评 OpenAI 和 Anthropic 游说政府打压开源竞争，称当前是 AI 政策的关键拐点。 若实施，这些限制可能重塑全球 AI 竞争格局，限制美国获取高性价比的中国模型，加速 AI 生态的分裂。这一讨论也暴露了国家安全与行业利益之间的紧张关系，大型 AI 公司正游说推动保护主义政策。 Kimi K3 是一个 2.8 万亿参数的开源模型，拥有百万 token 上下文窗口和原生视觉能力，基于 Kimi Delta Attention 构建。据报道，限制措施可能依赖采购规则、实体清单威胁和舆论压力，而非全面禁令，使美国企业面临模糊的合规要求。

telegram · zaihuapd · 7月20日 11:49

**背景**: 开放权重模型允许开发者下载并本地运行训练好的参数，提供透明度和定制能力。美国此前曾以安全为由警告过中国 AI 模型，但执法力度不一。中国的 Kimi K3 等开源模型进步迅速，性能接近美国产品而成本更低，加剧了关于竞争力和安全的辩论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openlm.ai/kimi-k3/">Kimi K3 - openlm.ai</a></li>
<li><a href="https://www.kimi.com/en">Kimi AI with K3 | Built for Agentic Coding & Knowledge Work</a></li>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#open source`, `#geopolitics`, `#large language models`, `#China`

---

<a id="item-4"></a>
## [Fastjson 1.x 曝无 gadget 高危 RCE 漏洞](https://x.com/k_firsov/status/2078872293745570032) ⭐️ 9.0/10

安全研究员 Kirill Firsov 披露了 Fastjson 1.2.68 至 1.2.83 版本中的一个高危远程代码执行漏洞，该漏洞无需开启 autoType 支持，也无需依赖 classpath gadget，可在 JDK 8、17、21 上利用。 该漏洞十分严重，因为 Fastjson 1.x 在 Java 生态中广泛使用，且自 2024 年 10 月起已停止维护，官方极大概率不会提供安全补丁。企业必须立即迁移到 Fastjson 2 或启用 SafeMode 以降低风险。 该漏洞影响 Fastjson 1.x 版本 1.2.68 至 1.2.83，无需开启 autoType 也无需依赖 classpath 中的 gadget 链即可利用。唯一的缓解措施是升级到 Fastjson 2，或通过代码、JVM 参数或配置文件启用 SafeMode。

telegram · zaihuapd · 7月20日 14:32

**背景**: Fastjson 是一个流行的 Java JSON 序列化/反序列化库，常用于 Web 应用。以往的 Fastjson 远程代码执行漏洞通常需要开启 autoType 或利用 classpath 中的特定 gadget 链。此新漏洞绕过了这些要求，使利用更加容易。Fastjson 1.x 已于 2024 年 10 月停止维护，预计不会有后续更新。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/alibaba/fastjson">GitHub - alibaba/fastjson: FASTJSON 2.0.x has been released ...</a></li>
<li><a href="https://mvnrepository.com/artifact/com.alibaba/fastjson">Maven Repository: com.alibaba » fastjson</a></li>
<li><a href="https://jfrog.com/blog/cve-2022-25845-analyzing-the-fastjson-auto-type-bypass-rce-vulnerability/">CVE-2022-25845 - Fastjson RCE vulnerability analysis - JFrog CVE-2022-25845: Alibaba Fastjson RCE Vulnerability - SentinelOne CVE-2025-70974: Fastjson before 1.2.48 mishandles autoType ... Deep Dive into Fastjson Deserialization Vulnerabilities: From ... CVE-2025-70974: Fastjson autoType Deserial RCE | Miggo</a></li>

</ul>
</details>

**标签**: `#fastjson`, `#rce`, `#vulnerability`, `#java`, `#security`

---

<a id="item-5"></a>
## [编码代理让家庭设备逆向工程成本变得低廉](https://simonwillison.net/2026/Jul/20/cheap-reverse-engineering/#atom-everything) ⭐️ 8.0/10

由大语言模型驱动的编码代理大幅降低了逆向工程和自动化家庭设备所需的成本和精力，使以前不切实际的项目变得可行。 这一转变使个人能够无需投入昂贵且脆弱的代码库就能实现家庭自动化，从而普及家庭自动化并降低 DIY 爱好者的门槛。 关键洞察在于，通过代理编写代码的成本已降至极低，即使未文档化的 API 发生变更，从头重写也很便宜，消除了之前阻碍逆向工程的维护负担。

rss · Simon Willison · 7月20日 19:24

**背景**: 逆向工程家庭设备需要弄清楚其未公开的协议，以便通过软件控制它们。从历史上看，这需要大量人工努力，且生成的代码往往需要随着 API 变化而不断维护。AI 编码代理是利用大语言模型自主生成、调试和维护代码的工具，从而大幅减少人力投入。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://graphify.net/ai-coding/agents/">AI Coding Agents | Graphify Guides</a></li>
<li><a href="https://developer.nvidia.com/blog/improve-ai-code-generation-using-nvidia-nemo-agent-toolkit/">Improve AI Code Generation Using NVIDIA NeMo Agent Toolkit | NVIDIA Technical Blog</a></li>

</ul>
</details>

**标签**: `#reverse-engineering`, `#coding agents`, `#automation`, `#cost reduction`

---

<a id="item-6"></a>
## [美提案：训练数据为合理使用，全面禁止反蒸馏条款](https://simonwillison.net/2026/Jul/20/afraid-of-chinese-models/#atom-everything) ⭐️ 8.0/10

本·汤普森在 Stratechery 上提议美国通过一项法律，明确规定收集数据用于 AI 训练属于合理使用，并禁止服务条款限制模型蒸馏。此举旨在为美国 AI 模型与中国 AI 模型创造公平竞争环境。 如果该法案通过，将解决美国 AI 实验室在未经许可的数据上训练模型却禁止他人通过 API 进行蒸馏的双重标准问题。这可能加速开源 AI 创新，并帮助美国模型与像 Qwen 这样的中国开源模型竞争。 该提案包含两部分：(1)明确将训练数据收集定为合理使用；(2)禁止美国公司在服务条款中加入反蒸馏条款。汤普森还提到，阿里巴巴决定开源 Qwen 3.8 Max 可能受到了习近平鼓励开源共享的讲话影响。

rss · Simon Willison · 7月20日 17:09

**背景**: 模型蒸馏是一种将大型 AI 模型的知识迁移到更小模型的技术，通常通过查询大型模型的 API 来实现。许多美国 AI 实验室，如 OpenAI 和 Anthropic，已更新服务条款禁止这一做法，尽管它们自身使用大量未经许可的网络数据进行训练。训练数据的法律地位仍存争议，合理使用原则可能提供重要保护。开放权重模型（仅发布训练参数而不公开完整源代码）是中国公司如阿里巴巴分享 AI 模型的常见方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_distillation">Model distillation</a></li>
<li><a href="https://opensource.org/ai/open-weights">Open Weights: not quite what you’ve been told – Open Source Initiative</a></li>
<li><a href="https://medium.com/@tatsuru.okada/three-sworn-rivals-one-enemy-inside-the-frontier-model-forums-quiet-war-on-chinese-distillation-60be4183f61a">Three Sworn Rivals, One Enemy: Inside the Frontier Model Forum’s Quiet War on Chinese Distillation | by Tatsuru Okada | Apr, 2026 | Medium</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#model distillation`, `#copyright fair use`, `#open source AI`, `#competition`

---

<a id="item-7"></a>
## [美军应用被发现嵌入中俄代码](https://www.wired.com/story/apps-marketed-to-us-troops-are-shipping-chinese-and-russian-code/) ⭐️ 8.0/10

普渡大学的研究人员发现，面向美军人员推广的 220 多款应用中，近三分之二嵌入了来自中国和俄罗斯的第三方代码，其中包括已被美国政府列为国家安全威胁的华为软件开发工具包（SDK）。 这一发现引发了严重的国家安全担忧，因为嵌入的代码可以被远程更新，用于监视或破坏美军人员，可能泄露敏感的作战数据给对手。 尽管未观察到数据实际流向华为服务器，但该 SDK 可随时远程更新，存在激活潜伏代码的风险。研究调查了 103 名军人关联人员，其中 76%至 83%对应用包含中、俄、伊朗或朝鲜代码表示极度不安。

telegram · zaihuapd · 7月20日 13:42

**背景**: 第三方软件开发工具包（SDK）常用于移动应用以添加分析或登录等功能，但如果 SDK 提供商不可信，也可能引入安全风险。美国联邦通信委员会（FCC）已将华为和中兴列为国家安全威胁，理由是其与中国共产党和军方的关系。这项研究突显了更广泛的供应链安全问题，因为恶意代码可能隐藏在合法 SDK 中，并在以后被远程激活。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.fcc.gov/document/fcc-affirms-designation-huawei-national-security-threat-0">FCC Affirms Designation of Huawei as National Security Threat | Federal Communications Commission</a></li>
<li><a href="https://www.bitdefender.com/en-us/blog/hotforsecurity/us-now-considers-huawei-and-zte-threats-to-national-security">US Now Considers Huawei and ZTE Threats to National Security</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#national security`, `#supply chain`, `#espionage`, `#mobile apps`

---

<a id="item-8"></a>
## [智谱建成全国产芯片大型数据中心](https://www.bloomberg.com/news/articles/2026-07-20/z-ai-completes-giant-data-center-with-chinese-chips-to-train-ai) ⭐️ 8.0/10

智谱 AI 已完成一座全部采用国产芯片的 1 吉瓦数据中心建设，并已部分投入运营，用于支持其 GLM 大语言模型的训练。 这一里程碑表明中国有能力建设独立于外国芯片的大规模 AI 基础设施，减少对英伟达的依赖，并增强国家在 AI 算力上的自给自足能力。 该数据中心功率达 1 吉瓦，足以为约 75 万户家庭供电，是中国 AI 实验室建造的最大规模设施之一。智谱 AI 运营着多个各拥有超万枚芯片的计算集群。

telegram · zaihuapd · 7月20日 15:43

**背景**: 像 GLM 这样的大语言模型训练需要大量算力资源，传统上由英伟达 GPU 主导。中国 AI 实验室面临先进芯片出口限制，促使国产替代方案的开发。GLM 是智谱 AI 以 MIT 许可证发布的开源模型系列。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Z.ai">Z.ai - Wikipedia</a></li>
<li><a href="https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zxxx/202502/t20250212_4008736.html">国产芯片与AI大模型协同突破！龙芯处理器成功运行DeepSeek大模型_资讯信息_北京经济技术开发区</a></li>

</ul>
</details>

**标签**: `#AI`, `#Data Center`, `#Domestic Chips`, `#China`, `#GLM`

---

