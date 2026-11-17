# Horizon 每日速递 - 2026-11-17

> 从 42 条内容中筛选出 4 条重要资讯。

---

1. [vLLM v0.34.0 默认启用内存感知 KV 缓存，并移除 Model Runner V1](#item-1) ⭐️ 8.0/10
2. [Optimizely 基础设施遭入侵，向 Zoom 和 GitLab 等站点投放恶意脚本](#item-2) ⭐️ 8.0/10
3. [美商务部拟定稿新规，封堵中国 AI 公司远程使用先进芯片的漏洞](#item-3) ⭐️ 8.0/10
4. [山东大学团队提出首个哥德巴赫猜想条件性证明](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [vLLM v0.34.0 默认启用内存感知 KV 缓存，并移除 Model Runner V1](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) ⭐️ 8.0/10

vLLM v0.34.0 正式发布，包含来自 412 位贡献者的 1,061 次提交；该版本将可扩展（内存感知）KV 缓存设为默认，KV 缓存容量不再依赖估算，而是根据 CUDA 图捕获和预热之后实际可用的显存来确定。同时该版本移除了 Model Runner V1，使 Model Runner V2 成为唯一的 GPU 执行器，并新增 10 个模型集成，包括 Mistral Large 4（总参数 1T / 激活 52B）和 NVIDIA Nemotron-3.5-Transcribe，还在 Blackwell 与 MI355X 硬件上带来显著的解码与吞吐提升。 由于更大的 KV 缓存直接意味着更高的并发能力和更低的首 token 延迟（TTFT），大多数部署无需调优即可获得更好的吞吐；而 GB200 上最高 1.95 倍的解码加速、GLM-5.3-Flash 上 1.6 倍的吞吐提升，使这次发布对使用新一代加速卡的运维者格外重要。但与此同时，破坏性变更也意味着现有生产环境需要制定明确的升级计划。 这一默认变更并非没有代价：逐 token 的解码延迟可能上升（在并发 128 时，部分 H200 模型上 TPOT 增加 6%–18%），用户可通过 --gpu-memory-utilization 0.9 或 --no-enable-extensible-kv-cache 退回旧行为。其他升级障碍包括 --block-size 默认值改为 64（传 --block-size 16 可保持旧行为）、ROCm 7.2 制品被弃用需改用 ROCm 10.0 镜像、强制要求 huggingface_hub >= 2.0.0，以及移除 QuTLASS/fp_quant 和 Marlin W4A8 量化路径。

github · khluu · 11月16日 23:22

**背景**: vLLM 是一个被广泛使用的大语言模型推理与服务引擎，核心是基于 PagedAttention 的分页式 KV 缓存，从而让大量请求高效共享显存。KV 缓存的容量直接决定可同时批处理多少条序列，因此准确估算其大小对服务性能至关重要；过去 vLLM 在性能剖析阶段用「可用显存 × gpu_memory_utilization」来估算，用户不得不手动猜测 0.9 之类的数值。所谓 Model Runner 是 vLLM 负责准备输入并执行前向计算的执行核心，而 Model Runner V2 是以异步优先调度为设计理念的模块化、GPU 原生重写版本，本次发布使其成为唯一可用的执行器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.vllm.ai/en/latest/configuration/optimization/">Optimization and Tuning - vLLM</a></li>
<li><a href="https://vllm.ai/blog/2026-03-24-mrv2">Model Runner V 2 : A Modular and Faster Core for vLLM | vLLM Blog</a></li>
<li><a href="https://rocm.blogs.amd.com/artificial-intelligence/scaling-ai-inference/README.html">Scaling AI Inference Performance with vLLM on AMD Instinct ...</a></li>

</ul>
</details>

**标签**: `#vllm`, `#llm-inference`, `#model-serving`, `#release-notes`, `#gpu-performance`

---

<a id="item-2"></a>
## [Optimizely 基础设施遭入侵，向 Zoom 和 GitLab 等站点投放恶意脚本](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) ⭐️ 8.0/10

Optimizely 自身的基础设施遭到入侵，其 CDN 开始向客户站点下发恶意 JavaScript，受影响者包括 Zoom 和 GitLab，据称还涉及大量知名品牌。注入的代码同样出现在 Optimizely 自家的 www.optimizely.com 和 login.optimizely.com 上；需要说明的是，其 CDN 只是原样下发了被交付的代码，并非缓存投毒攻击。 这是第三方脚本供应链风险的典型真实案例：一段被广泛部署的厂商脚本存在于成千上万个页面上，因此一次入侵就能把恶意代码大规模传播到本身毫无过错的站点。任何在网页中嵌入外部实验、分析或标签管理脚本的运营方都会直接受到影响。 调查方目前仍不清楚攻击者是如何获得对如此多互不相关客户项目的写入权限的——可能是某个 Optimizely 系统被攻陷、一枚具备跨客户权限的凭证被盗，或是其他原因；报告指出这需要由 Optimizely 来解释。该事件也凸显出厂商侧缺乏发布防护机制，例如灰度发布、内部冷却期以及对全球分发脚本的自动化安全检查。

hackernews · kristjansson · 11月16日 23:00 · [社区讨论](https://news.ycombinator.com/item?id=50524767)

**背景**: Optimizely 是一个数字体验与实验平台，其核心产品通过让客户嵌入一段从 Optimizely CDN 加载代码的 JavaScript 片段来交付，因此客户站点的每位访客都会执行由厂商控制的代码。这与长期以来对 Google Tag Manager 的批评类似：GTM 的设计初衷是让市场团队无需工程部门介入即可添加标签，结果普通页面上堆积了大量第三方 JavaScript。此类供应链攻击并不直接针对受害者，而是攻陷被信任的第三方供应商，从而借助一个薄弱环节触达众多下游机构。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Supply_chain_attack">Supply chain attack - Wikipedia</a></li>
<li><a href="https://crystallize.com/answers/tech-dev/what-are-gtm-security-risks">What Are Google Tag Manager Security Risks ? | Crystallize</a></li>
<li><a href="https://www.oshyn.com/blog/what-is-optimizely">What is Optimizely DXP? - Oshyn</a></li>

</ul>
</details>

**社区讨论**: 评论者将矛头指向标签管理器的结构性激励，认为让市场部门获得未经审查的脚本注入权限，正是页面被迫加载数兆字节 JavaScript 的根源，并希望团队重新评估这一模式。也有人要求追责，称 Optimizely 缺乏灰度发布和自动化安全检查等防护措施，而 CNN、BBC 这类大型站点完全没有理由不自行托管关键脚本。还有人指出，NoScript 这类脚本拦截工具是降低暴露面的实用手段。

**标签**: `#security`, `#supply-chain-attack`, `#third-party-scripts`, `#web-security`, `#cdn`

---

<a id="item-3"></a>
## [美商务部拟定稿新规，封堵中国 AI 公司远程使用先进芯片的漏洞](https://t.me/zaihuapd/45161) ⭐️ 8.0/10

据报道，美国商务部正在敲定一项规则，禁止中国 AI 公司通过境外数据中心远程使用先进 AI 芯片，最早可能于本月公布。该规则将把现行的半导体出口限制扩大到马来西亚、新加坡、泰国等七个国家，以封堵远程访问和芯片走私的缺口，并正在与其他政府机构磋商后定稿。 该规则将封堵中国 AI 开发者获取先进算力的最后几个主要迂回途径之一，可能改变中国实验室训练前沿模型的方式，并给东南亚各地的数据中心运营商带来压力。这也标志着中美科技竞争显著升级——管控范围从硬件出货扩展到跨境的云服务与算力访问。 管制将在现有范围之外覆盖七个国家，其中明确提到马来西亚、新加坡和泰国，同时针对芯片的远程访问与实体走私渠道。据报道，英伟达曾游说反对封堵这一远程访问缺口，理由是美国的 AI 基础设施需要在全球取得优势；白宫此前也已要求国会立法，指示商务部制定该规则。

telegram · zaihuapd · 11月16日 14:44

**背景**: 自 2022 年起，美国限制向中国出口英伟达高端 GPU 等先进 AI 加速芯片，销售最强性能的芯片需要获得许可。由于这些管制针对的是硬件出货，而非芯片的使用者，中国企业便可以从合法进口这些芯片的第三国数据中心租用算力。封堵这一缺口意味着要把许可制度扩展到这些中转国家以及云端访问，这在技术和外交层面的难度都高于监管实体货物运输。

**标签**: `#AI chips`, `#export controls`, `#US-China tech`, `#semiconductor policy`, `#data centers`

---

<a id="item-4"></a>
## [山东大学团队提出首个哥德巴赫猜想条件性证明](https://mrc.sdu.edu.cn/info/1018/2193.htm) ⭐️ 8.0/10

山东大学李嘉民、刘建亚在论文中声称取得了首个条件性证明：所有充分大的偶数都可写成两个素数之和，且这两个素数都落在该偶数的三分之一到三分之二之间。该论证假设狄利克雷 L 函数的广义黎曼猜想成立，并额外假定两种谱假设之一成立。 二元哥德巴赫猜想是数学中最古老的未解难题之一，一个能覆盖所有充分大偶数的结果——即便是条件性的——也将大幅超越筛法给出的部分结论。如果该思路经受住检验，它将为加性素数问题开辟一条不依赖经典圆法或筛法的全新路径。 该结果是明确条件性的：作者表示仅靠广义黎曼猜想不足以推出结论，还必须同时满足两种附加谱假设之一，因此这并非无条件证明。这项工作是通过山东大学数学研究中心发布的预印本，目前似乎尚未经过同行评审。

telegram · zaihuapd · 11月16日 16:01

**背景**: 哥德巴赫猜想断言每个大于 2 的偶数都是两个素数之和；“二元”版本指把一个偶数表示成两素数之和，与之相对的“三元”版本则讨论奇数表示为三个素数之和。广义黎曼猜想把黎曼猜想从经典的 zeta 函数推广到狄利克雷 L 函数，这类函数刻画了素数在等差数列中的分布，是解析数论中常用的标准假设。处理哥德巴赫型问题的经典手段是哈代—利特尔伍德圆法（用于大整数的加性表示）以及筛法（用于估计素数被排除的频率）；山东大学团队的方法据称与这两者都不同。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Goldbach's_conjecture">Goldbach's conjecture - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Additive_number_theory">Additive number theory - Wikipedia</a></li>

</ul>
</details>

**标签**: `#Goldbach conjecture`, `#number theory`, `#conditional proof`, `#Riemann hypothesis`, `#mathematics research`

---

