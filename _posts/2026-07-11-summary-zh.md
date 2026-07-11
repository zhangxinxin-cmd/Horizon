---
layout: default
title: "Horizon Summary: 2026-07-11 (ZH)"
date: 2026-07-11
lang: zh
---

> 从 29 条内容中筛选出 9 条重要资讯。

---

1. [vLLM v0.25.0：MRv2 默认，PagedAttention 移除](#item-1) ⭐️ 9.0/10
2. [人形机器人远程完成首例活猪胆囊切除](#item-2) ⭐️ 9.0/10
3. [U-Boot 引导程序六漏洞引发隐蔽固件攻击](#item-3) ⭐️ 9.0/10
4. [SGLang v0.5.15 在 Blackwell 上优化 GLM-5.2 推理](#item-4) ⭐️ 8.0/10
5. [ClickHouse 将 PgBouncer 吞吐量提升 4 倍](#item-5) ⭐️ 8.0/10
6. [George Hotz 对 AI 2040 的反乌托邦愿景](#item-6) ⭐️ 8.0/10
7. [VultronRetriever 模型在 MTEB 上排名第一，效率大幅提升](#item-7) ⭐️ 8.0/10
8. [谷歌反对欧盟网站屏蔽，美国反盗版法案推进](#item-8) ⭐️ 8.0/10
9. [上海发布脑机接口方案，目标 2027 年高质量脑控](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [vLLM v0.25.0：MRv2 默认，PagedAttention 移除](https://github.com/vllm-project/vllm/releases/tag/v0.25.0) ⭐️ 9.0/10

vLLM v0.25.0 将 Model Runner V2 (MRv2) 设为所有稠密模型的默认执行路径，移除了旧的 PagedAttention 实现，并使 Transformers 建模后端的速度与原生 vLLM 持平。 此次发布标志着 vLLM 的重大架构转变，通过移除 PagedAttention 简化了代码库，同时全面提升了性能。Transformers 后端现在速度与原生持平，使用户能够在不牺牲推理性能的情况下运行非 vLLM 原生模型。 MRv2 现在支持 EVS、实时嵌入、双向多模态前缀注意力以及全 CUDA 图的动态投机解码。此外，该版本包含来自 232 位贡献者的 558 次提交，并引入了 LLaVA-OneVision-2 和 GLM-5 等新模型。

github · khluu · 7月11日 20:06

**背景**: PagedAttention 是一种注意力算法，它将键值缓存存储在映射到非连续物理内存的固定大小块中，灵感来自虚拟内存分页。vLLM 是一个高吞吐量的 LLM 服务引擎，最初依赖 PagedAttention。Model Runner V2 (MRv2) 是一个重新设计的执行核心，使用 GPU 原生的 Triton 内核和异步调度来提高模块化和性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/PagedAttention">PagedAttention</a></li>
<li><a href="https://docs.vllm.ai/en/v0.22.1/design/model_runner_v2/">Model Runner V2 Design Document - vLLM</a></li>

</ul>
</details>

**标签**: `#vllm`, `#LLM inference`, `#model serving`, `#performance`, `#open source`

---

<a id="item-2"></a>
## [人形机器人远程完成首例活猪胆囊切除](https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/) ⭐️ 9.0/10

外科医生远程操控宇树 G1 人形机器人，在活猪身上成功完成了全球首例胆囊切除手术，该成果发表于《自然》期刊。 这一突破表明，价格低廉的通用人形机器人能够执行复杂的外科手术，有望在偏远或资源有限地区普及手术机会。 宇树 G1 机器人基础款售价约 13,500 美元，配备灵巧手后约 67,000 美元，远低于达芬奇等专用手术机器人；该试验在活猪上完成了两例微创胆囊切除术。

telegram · zaihuapd · 7月11日 02:29

**背景**: 人形机器人模仿人体形态和运动，能够使用人类工具并在人类环境中操作。远程手术允许外科医生远程控制机器人，结合人类专业知识和机器人精度。达芬奇手术系统广泛用于微创手术，但成本高达数十万至数百万美元，限制了其普及。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.popsci.com/technology/humanoid-robots-perform-surgery/">In groundbreaking first, humanoid robots performed surgery</a></li>
<li><a href="https://medicalxpress.com/news/2026-07-surgeons-teleoperated-humanoid-robots-surgery.html">Surgeons use teleoperated humanoid robots to perform live...</a></li>
<li><a href="https://www.unitree.com/g1/">Humanoid robot G1_Humanoid Robot Functions ... - Unitree G1</a></li>

</ul>
</details>

**标签**: `#robotics`, `#surgery`, `#humanoid robot`, `#medical technology`, `#breakthrough`

---

<a id="item-3"></a>
## [U-Boot 引导程序六漏洞引发隐蔽固件攻击](https://www.bleepingcomputer.com/news/security/new-u-boot-flaws-could-enable-stealthy-firmware-attacks/) ⭐️ 9.0/10

U-Boot 引导程序的 FIT 签名验证代码中被披露了六个漏洞，其中两个可导致任意代码执行，四个可造成设备崩溃，影响自 U-Boot 2013.07 版本以来的多个版本。 这些漏洞可在操作系统启动前被利用，影响数十亿嵌入式设备，并可能植入持久性的固件恶意软件，即使重装操作系统也难以清除。 漏洞位于 FIT 镜像签名验证过程中，攻击者可绕过验证在启动早期执行恶意代码。补丁已提交但需要硬件厂商集成到固件更新中，已停止支持的老旧设备可能永远无法获得修复。

telegram · zaihuapd · 7月11日 08:32

**背景**: U-Boot 是嵌入式系统中广泛使用的引导加载程序，负责加载操作系统。FIT（Flattened Image Tree）是一种灵活的容器格式，支持加密签名以验证镜像的真实性和完整性。发现的这些漏洞绕过了签名检查，允许在操作系统或安全软件运行之前执行代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.u-boot-project.org/en/latest/usage/fit/signature.html">U-Boot FIT Signature Verification</a></li>
<li><a href="https://proteanos.com/doc/secure-boot-uboot-fit-signatures-chain-of-trust/">Secure Boot with U-Boot FIT Signatures: A Practical Chain-of ...</a></li>

</ul>
</details>

**标签**: `#security`, `#vulnerabilities`, `#firmware`, `#bootloader`, `#embedded`

---

<a id="item-4"></a>
## [SGLang v0.5.15 在 Blackwell 上优化 GLM-5.2 推理](https://github.com/sgl-project/sglang/releases/tag/v0.5.15) ⭐️ 8.0/10

SGLang v0.5.15 在 NVIDIA Blackwell GPU 上提供了优化的 GLM-5.2 NVFP4 推理服务，在 8 块 B300 上达到每用户每秒超过 500 个 token。此外，默认启用了推测解码 V2，端到端吞吐量提升 11%。 这些优化显著提升了最新 Blackwell 硬件上的大模型推理性能，降低了生产部署的延迟并提高了吞吐量。推测解码和内核融合技术的集成进一步推动了自托管 AI 服务的效率边界。 该版本包含 IndexShare MTP，可在长上下文中将草稿步骤成本降低最多 1.9 倍；TopK V2 融合了选择逻辑，支持运行时 k 值高达 2048；以及可 CUDA 图化的 DSA 草稿扩展。此外，还通过 Exa 增加了原生网络搜索功能，并支持 Hunyuan 3、Qwen3.6 的 NVFP4 等新模型。

github · Fridge003 · 7月10日 22:58

**背景**: NVFP4 是 NVIDIA Blackwell 架构引入的 4 位浮点格式，可实现高效的低精度推理。推测解码通过使用较小的草稿模型每步预测多个 token 来加速生成。CUDA 图通过将设备操作捕获到单个图中来减少内核启动开销，从而提高重复工作负载的性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/">Introducing NVFP4 for Efficient and Accurate Low-Precision ...</a></li>
<li><a href="https://paperswithcode.co/paper/98456">GLM-5.2: Built for Long-Horizon Tasks | Papers with Code</a></li>

</ul>
</details>

**标签**: `#LLM inference`, `#GPU serving`, `#SGLang`, `#speculative decoding`, `#Blackwell`

---

<a id="item-5"></a>
## [ClickHouse 将 PgBouncer 吞吐量提升 4 倍](https://clickhouse.com/blog/pgbouncer-clickhouse-managed-postgres) ⭐️ 8.0/10

ClickHouse 博客详细介绍了如何通过使用 SO_REUSEPORT 套接字选项在同一端口上运行多个 PgBouncer 进程，并结合一种对等机制来正确处理查询取消，从而将 PgBouncer 的吞吐量提升了 4 倍。 这种扩展方法克服了 PgBouncer 的单线程限制，使其在多核机器上的高吞吐量 PostgreSQL 部署中变得可行，并将连接池组件重新变为非瓶颈。 该方案使用 SO_REUSEPORT 将多个 PgBouncer 进程绑定到同一端口，由内核平衡传入连接，并采用对等机制将取消请求转发到正确的持有进程，修复了之前取消可能丢失的问题。

hackernews · saisrirampur · 7月11日 15:28 · [社区讨论](https://news.ycombinator.com/item?id=48872874)

**背景**: PgBouncer 是一个轻量级的 PostgreSQL 连接池，但它是单线程的，限制了其在多核系统上的吞吐量。SO_REUSEPORT 是一个 Linux 套接字选项，允许多个套接字绑定到同一端口，实现内核级别的连接分发。PgBouncer 中的对等机制允许进程之间通信，确保即使取消请求到达错误的进程，查询取消也能正确执行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://clickhouse.com/blog/pgbouncer-clickhouse-managed-postgres">How we scale PgBouncer in ClickHouse Managed Postgres</a></li>
<li><a href="https://lwn.net/Articles/542629/">The SO_REUSEPORT socket option [LWN.net]</a></li>
<li><a href="https://www.pgbouncer.org/usage.html">PgBouncer command-line usage We scaled PgBouncer to 4x throughput | NOW LET US Protocol Implementation | pgbouncer/pgbouncer | DeepWiki Architecture | pgbouncer/pgbouncer | DeepWiki pgBouncer - A Lightweight Connection Pooler for PostgreSQL</a></li>

</ul>
</details>

**社区讨论**: 社区成员推荐了 Odyssey 和 pgdog 等原生可扩展的替代方案。部分用户指出在 Kubernetes 上运行可以简化多进程管理，还有用户询问对等机制的设置难度，显示出对实际采用的兴趣。

**标签**: `#postgresql`, `#connection pooling`, `#performance`, `#scalability`, `#pgbouncer`

---

<a id="item-6"></a>
## [George Hotz 对 AI 2040 的反乌托邦愿景](https://geohot.github.io//blog/jekyll/update/2026/07/11/ai-2040.html) ⭐️ 8.0/10

George Hotz 发表了一篇题为《AI 2040 与智力崇拜》的博客文章，设想了一个人工智能系统强制执行意识形态偏见并威胁自由的未来。 这篇文章引发了关于 AI 治理、言论自由和智能系统伦理界限的关键辩论，正如活跃的讨论所示，引起了科技界的强烈共鸣。 这篇博客文章评分为 8.0/10，在 Hacker News 上获得了 158 分和 183 条评论，表明对审查和伦理问题的参与度很高且辩论激烈。

hackernews · rvz · 7月11日 18:04 · [社区讨论](https://news.ycombinator.com/item?id=48874200)

**社区讨论**: 评论者表达了各种观点，有些人认为这一场景令人恐惧，有些人批评对自由的简单二元看法，还有少数人赞同作者的同时指出当 AI 智能体在现实世界中行动时的局限性。

**标签**: `#AI ethics`, `#freedom of speech`, `#AI governance`, `#future of AI`

---

<a id="item-7"></a>
## [VultronRetriever 模型在 MTEB 上排名第一，效率大幅提升](https://www.reddit.com/r/MachineLearning/comments/1utmxq8/vultronretriever_family_of_models_released_on/) ⭐️ 8.0/10

VultronRetriever 系列检索模型已在 HuggingFace 上发布，声称在 MTEB 排行榜上排名第一，与之前的顶级模型相比，索引存储减少多达 16 倍，吞吐量提高 12 倍。 这一突破显著提升了检索效率，使得在 iPhone 等边缘设备上进行高质量检索成为可能，可能推动先进检索增强生成（RAG）系统的普及。 该系列包括三个模型：VultronRetrieverPrime-8B（全球第一）、VultronRetrieverCore-4.5B（性能超越两倍大小的模型）和 VultronRetrieverFlash-0.8B（适用于边缘设备，完全离线每分钟可索引多达 60 张图片）。

reddit · r/MachineLearning · /u/madkimchi · 7月11日 15:22

**背景**: MTEB（大规模文本嵌入基准）是一个广泛使用的基准，用于评估跨多种任务的文本嵌入模型。检索模型（也称为嵌入模型）将文本转换为数值表示以用于搜索和问答。Hydra 架构使用的后期交互检索通过将查询和文档表示为多个向量而非单个向量，实现更精确的匹配。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://weaviate.io/blog/late-interaction-overview">An Overview of Late Interaction Retrieval Models: ColBERT, ColPali, and ColQwen | Weaviate</a></li>
<li><a href="https://aclanthology.org/2022.naacl-main.272/">ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction - ACL Anthology</a></li>

</ul>
</details>

**标签**: `#machine learning`, `#retrieval`, `#embeddings`, `#huggingface`, `#MTEB`

---

<a id="item-8"></a>
## [谷歌反对欧盟网站屏蔽，美国反盗版法案推进](https://torrentfreak.com/google-opposes-site-blocking-in-europe-as-u-s-piracy-blocking-plans-gain-momentum/) ⭐️ 8.0/10

谷歌向欧盟委员会提交文件，反对扩大网站屏蔽措施，称屏蔽 DNS 解析器、IP 地址和 VPN 的做法无效且不成比例。与此同时，美国国会议员正在推进类似的反盗版立法，众议员 Issa 计划提出网站屏蔽法案。 这反映了知识产权执法与互联网自由之间日益激烈的全球辩论。谷歌的立场可能影响欧盟政策，而美国的势头可能导致在线内容监管的重大变化。 谷歌引用了意大利反盗版系统的例子，该系统误封了 Google Drive 子域名和托管 4200 万个域名的 Cloudflare IP 地址。谷歌主张通过提供更好的合法替代服务来解决盗版问题，而非扩大屏蔽措施。

telegram · zaihuapd · 7月11日 15:10

**背景**: DNS 解析器是将人类可读的域名转换为机器可读 IP 地址的服务器。VPN（虚拟专用网络）创建加密隧道用于安全数据传输，常被用来绕过地理限制或增强隐私。这些技术经常成为网站屏蔽提案的目标，因为它们可用于访问被屏蔽的内容。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.amazonaws.cn/what-is/dns-resolver/">什么是DNS解析器_DNS解析器的工作原理是什么-亚马逊云科技</a></li>
<li><a href="https://whatisvpn.net/">什么是VPN？ – 全面解析VPN原理、用途与安全上网指南</a></li>

</ul>
</details>

**标签**: `#internet censorship`, `#anti-piracy`, `#DNS`, `#VPN`, `#digital rights`

---

<a id="item-9"></a>
## [上海发布脑机接口方案，目标 2027 年高质量脑控](https://t.me/zaihuapd/42501) ⭐️ 8.0/10

这项政府政策标志着上海在脑机接口技术上的战略推动，可能会加速用于恢复瘫痪和失语患者运动与语言功能的 BCI 技术的开发和临床采用，并使中国在全球神经技术竞争中占据领先地位。 该计划明确要求至少 5 款侵入式和半侵入式脑机接口产品完成医疗器械型式检验和临床试验，旨在为失语和瘫痪患者部分恢复语言和运动功能。预计到 2027 年初步构建脑机接口创新生态。

telegram · zaihuapd · 7月11日 15:49

**背景**: 脑机接口（BCI）是解读大脑信号并将其传输到外部设备的系统，可分为侵入式（电极植入脑内）、非侵入式（外部传感器）和半侵入式（电极置于颅骨下大脑表面但不在脑组织内）。在中国，医疗器械型式检验是高风险设备注册的强制性流程，需由认证检测中心评估。该计划标志着政府对推动 BCI 技术从实验室走向临床的强力支持。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/minds-interface-bridging-thought-technology-bci-neuranet-ai-otbae">The Mind's Interface : Bridging Thought and Technology with BCI</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12671281/">Invasive Brain-Computer Interfaces: A Critical Assessment of Current Developments and Future Prospects - PMC</a></li>
<li><a href="https://chinameddevice.com/key-points-to-navigate-the-class-iii-medical-device-type-testing/">Key Points to Navigate the Class III Medical Device Type Testing</a></li>

</ul>
</details>

**标签**: `#brain-computer interface`, `#neurotechnology`, `#government policy`, `#Shanghai`, `#clinical applications`

---