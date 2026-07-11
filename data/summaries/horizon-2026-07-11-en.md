# Horizon Daily - 2026-07-11

> From 29 items, 9 important content pieces were selected

---

1. [vLLM v0.25.0: MRv2 Default, PagedAttention Removed](#item-1) ⭐️ 9.0/10
2. [Humanoid Robot Remote Gallbladder Surgery on Live Pigs](#item-2) ⭐️ 9.0/10
3. [Six U-Boot Vulnerabilities Enable Stealthy Firmware Attacks](#item-3) ⭐️ 9.0/10
4. [SGLang v0.5.15 Optimizes GLM-5.2 Serving on Blackwell](#item-4) ⭐️ 8.0/10
5. [ClickHouse Scales PgBouncer to 4x Throughput](#item-5) ⭐️ 8.0/10
6. [George Hotz's Dystopian Vision of AI 2040](#item-6) ⭐️ 8.0/10
7. [VultronRetriever Models Achieve #1 on MTEB with Efficiency Gains](#item-7) ⭐️ 8.0/10
8. [Google Opposes EU Site Blocking as US Piracy Bills Advance](#item-8) ⭐️ 8.0/10
9. [Shanghai Unveils BCI Plan Targeting High-Quality Brain Control by 2027](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [vLLM v0.25.0: MRv2 Default, PagedAttention Removed](https://github.com/vllm-project/vllm/releases/tag/v0.25.0) ⭐️ 9.0/10

vLLM v0.25.0 makes Model Runner V2 (MRv2) the default execution path for all dense models, removes the legacy PagedAttention implementation, and achieves parity in speed between the Transformers modeling backend and native vLLM. This release marks a major architectural shift in vLLM, simplifying the codebase by removing PagedAttention while delivering performance improvements across the board. The Transformers backend now matches native speed, making it easier for users to run non-vLLM-native models without sacrificing inference performance. MRv2 now supports EVS, realtime embeddings, bidirectional multimodal-prefix attention, and dynamic speculative decoding with full CUDA graphs. Additionally, the release adds 558 commits from 232 contributors and introduces new models like LLaVA-OneVision-2 and GLM-5.

github · khluu · Jul 11, 20:06

**Background**: PagedAttention is an attention algorithm that stores the key-value cache in fixed-size blocks mapped to non-contiguous physical memory, inspired by virtual memory paging. vLLM is a high-throughput LLM serving engine that originally relied on PagedAttention. Model Runner V2 (MRv2) is a redesigned execution core that uses GPU-native Triton kernels and async dispatch to improve modularity and performance.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/PagedAttention">PagedAttention</a></li>
<li><a href="https://docs.vllm.ai/en/v0.22.1/design/model_runner_v2/">Model Runner V2 Design Document - vLLM</a></li>

</ul>
</details>

**Tags**: `#vllm`, `#LLM inference`, `#model serving`, `#performance`, `#open source`

---

<a id="item-2"></a>
## [Humanoid Robot Remote Gallbladder Surgery on Live Pigs](https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/) ⭐️ 9.0/10

Surgeons remotely operated a Unitree G1 humanoid robot to perform the world's first gallbladder surgeries on live pigs, as published in Nature. This breakthrough demonstrates that affordable general-purpose humanoid robots can perform complex surgical tasks, potentially democratizing access to surgery in remote or resource-limited settings. The Unitree G1 robot costs about $13,500 for the base model and $67,000 with dexterous hands, a fraction of the price of specialized surgical robots like the da Vinci system, and the surgeries were two minimally invasive cholecystectomies on live pigs.

telegram · zaihuapd · Jul 11, 02:29

**Background**: Humanoid robots are designed to mimic human form and movement, allowing them to use human tools and operate in human environments. Teleoperated surgery enables a surgeon to control a robot remotely, combining human expertise with robotic precision. The da Vinci surgical system, widely used for minimally invasive surgery, costs hundreds of thousands to millions of dollars, limiting its availability.

<details><summary>References</summary>
<ul>
<li><a href="https://www.popsci.com/technology/humanoid-robots-perform-surgery/">In groundbreaking first, humanoid robots performed surgery</a></li>
<li><a href="https://medicalxpress.com/news/2026-07-surgeons-teleoperated-humanoid-robots-surgery.html">Surgeons use teleoperated humanoid robots to perform live...</a></li>
<li><a href="https://www.unitree.com/g1/">Humanoid robot G1_Humanoid Robot Functions ... - Unitree G1</a></li>

</ul>
</details>

**Tags**: `#robotics`, `#surgery`, `#humanoid robot`, `#medical technology`, `#breakthrough`

---

<a id="item-3"></a>
## [Six U-Boot Vulnerabilities Enable Stealthy Firmware Attacks](https://www.bleepingcomputer.com/news/security/new-u-boot-flaws-could-enable-stealthy-firmware-attacks/) ⭐️ 9.0/10

Six vulnerabilities were disclosed in the FIT signature verification code of the U-Boot bootloader, two of which allow arbitrary code execution, and four cause device crashes, affecting versions since U-Boot 2013.07. These flaws can be exploited before the operating system boots, affecting billions of embedded devices and potentially enabling stealthy persistent firmware malware that survives OS reinstalls. The vulnerabilities reside in the FIT image signature verification process; attackers can bypass validation to execute malicious code early in the boot. Patches have been submitted but require integration by hardware vendors into firmware updates, and devices no longer supported may never be fixed.

telegram · zaihuapd · Jul 11, 08:32

**Background**: U-Boot is a widely used bootloader for embedded systems, responsible for loading the operating system. FIT (Flattened Image Tree) is a flexible container format that supports cryptographic signatures to verify image authenticity and integrity. The discovered vulnerabilities bypass these signature checks, allowing code execution before the OS or security software can run.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.u-boot-project.org/en/latest/usage/fit/signature.html">U-Boot FIT Signature Verification</a></li>
<li><a href="https://proteanos.com/doc/secure-boot-uboot-fit-signatures-chain-of-trust/">Secure Boot with U-Boot FIT Signatures: A Practical Chain-of ...</a></li>

</ul>
</details>

**Tags**: `#security`, `#vulnerabilities`, `#firmware`, `#bootloader`, `#embedded`

---

<a id="item-4"></a>
## [SGLang v0.5.15 Optimizes GLM-5.2 Serving on Blackwell](https://github.com/sgl-project/sglang/releases/tag/v0.5.15) ⭐️ 8.0/10

SGLang v0.5.15 delivers tuned GLM-5.2 NVFP4 serving on NVIDIA Blackwell GPUs, achieving over 500 tokens per second per user on 8x B300. It also enables Speculative Decoding V2 by default, providing an 11% end-to-end throughput gain. These optimizations substantially improve LLM inference performance on the latest Blackwell hardware, lowering latency and raising throughput for production deployments. The integration of speculative decoding and kernel fusion techniques further pushes the efficiency frontier for self-hosted AI serving. The release includes IndexShare MTP for up to 1.9x lower draft-step cost at long context, TopK V2 with fused selection supporting runtime k up to 2048, and CUDA-graphable DSA draft-extend. It also adds native web search via Exa and new model support for Hunyuan 3, Qwen3.6 with NVFP4, and more.

github · Fridge003 · Jul 10, 22:58

**Background**: NVFP4 is a 4-bit floating-point format introduced with NVIDIA Blackwell architecture, enabling efficient low-precision inference. Speculative decoding accelerates generation by using a smaller draft model to predict multiple tokens per step. CUDA graphs reduce kernel launch overhead by capturing device operations in a single graph, improving performance on repeated workloads.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/">Introducing NVFP4 for Efficient and Accurate Low-Precision ...</a></li>
<li><a href="https://paperswithcode.co/paper/98456">GLM-5.2: Built for Long-Horizon Tasks | Papers with Code</a></li>

</ul>
</details>

**Tags**: `#LLM inference`, `#GPU serving`, `#SGLang`, `#speculative decoding`, `#Blackwell`

---

<a id="item-5"></a>
## [ClickHouse Scales PgBouncer to 4x Throughput](https://clickhouse.com/blog/pgbouncer-clickhouse-managed-postgres) ⭐️ 8.0/10

ClickHouse's blog details how they achieved a 4x throughput increase for PgBouncer by using the SO_REUSEPORT socket option to run multiple PgBouncer processes on the same port, combined with a peering mechanism to handle query cancellation correctly. This scaling approach overcomes PgBouncer's single-threaded limitation, making it viable for high-throughput PostgreSQL deployments on multi-core machines, and turns the connection pooler back into a non-bottleneck component. The setup uses SO_REUSEPORT to bind multiple PgBouncer processes to the same port, with the kernel balancing incoming connections, and a peering mechanism that forwards cancel requests to the correct owning process, fixing a prior issue where cancels could be lost.

hackernews · saisrirampur · Jul 11, 15:28 · [Discussion](https://news.ycombinator.com/item?id=48872874)

**Background**: PgBouncer is a lightweight connection pooler for PostgreSQL, but it is single-threaded, limiting its throughput on multi-core systems. SO_REUSEPORT is a Linux socket option that allows multiple sockets to bind to the same port, enabling kernel-level connection distribution. Peering in PgBouncer allows processes to communicate, ensuring that query cancellation works correctly even when a cancel request arrives at the wrong process.

<details><summary>References</summary>
<ul>
<li><a href="https://clickhouse.com/blog/pgbouncer-clickhouse-managed-postgres">How we scale PgBouncer in ClickHouse Managed Postgres</a></li>
<li><a href="https://lwn.net/Articles/542629/">The SO_REUSEPORT socket option [LWN.net]</a></li>
<li><a href="https://www.pgbouncer.org/usage.html">PgBouncer command-line usage We scaled PgBouncer to 4x throughput | NOW LET US Protocol Implementation | pgbouncer/pgbouncer | DeepWiki Architecture | pgbouncer/pgbouncer | DeepWiki pgBouncer - A Lightweight Connection Pooler for PostgreSQL</a></li>

</ul>
</details>

**Discussion**: Community members suggested alternatives like Odyssey and pgdog, which are natively scalable. Some users noted that running on Kubernetes simplifies managing multiple processes, and one user asked about the ease of setting up peering, indicating interest in practical adoption.

**Tags**: `#postgresql`, `#connection pooling`, `#performance`, `#scalability`, `#pgbouncer`

---

<a id="item-6"></a>
## [George Hotz's Dystopian Vision of AI 2040](https://geohot.github.io//blog/jekyll/update/2026/07/11/ai-2040.html) ⭐️ 8.0/10

George Hotz published a blog post titled 'AI 2040 and the cult of intelligence,' envisioning a future where AI systems enforce ideological biases and threaten freedom. This post sparks critical debate on AI governance, freedom of speech, and the ethical boundaries of intelligent systems, resonating strongly with the tech community as seen in the active discussion. The blog post, scoring 8.0/10, garnered 158 points and 183 comments on Hacker News, indicating high engagement and substantive debate on censorship and ethics.

hackernews · rvz · Jul 11, 18:04 · [Discussion](https://news.ycombinator.com/item?id=48874200)

**Discussion**: Commenters expressed a range of views, with some finding the scenario horrifying, others criticizing the simplistic binary view of freedom, and a few aligning with the author while noting the limits when AI agents act in the real world.

**Tags**: `#AI ethics`, `#freedom of speech`, `#AI governance`, `#future of AI`

---

<a id="item-7"></a>
## [VultronRetriever Models Achieve #1 on MTEB with Efficiency Gains](https://www.reddit.com/r/MachineLearning/comments/1utmxq8/vultronretriever_family_of_models_released_on/) ⭐️ 8.0/10

VultronRetriever, a family of retrieval models, has been released on HuggingFace, claiming the #1 position on the MTEB leaderboard and demonstrating up to 16x smaller index storage and 12x higher throughput compared to previous top models. This breakthrough significantly improves retrieval efficiency, making high-quality retrieval feasible on edge devices like iPhones, which could democratize advanced retrieval-augmented generation (RAG) systems. The family includes three models: VultronRetrieverPrime-8B (global #1), VultronRetrieverCore-4.5B (outperforming models twice its size), and VultronRetrieverFlash-0.8B (suitable for edge devices, indexing up to 60 images per minute fully offline).

reddit · r/MachineLearning · /u/madkimchi · Jul 11, 15:22

**Background**: MTEB (Massive Text Embedding Benchmark) is a widely used benchmark for evaluating text embedding models across diverse tasks. Retrieval models, also known as embedding models, convert text into numeric representations for search and question-answering. Late interaction retrieval, used by the Hydra Architecture, enables more precise matching by representing queries and documents as multiple vectors rather than a single vector.

<details><summary>References</summary>
<ul>
<li><a href="https://weaviate.io/blog/late-interaction-overview">An Overview of Late Interaction Retrieval Models: ColBERT, ColPali, and ColQwen | Weaviate</a></li>
<li><a href="https://aclanthology.org/2022.naacl-main.272/">ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction - ACL Anthology</a></li>

</ul>
</details>

**Tags**: `#machine learning`, `#retrieval`, `#embeddings`, `#huggingface`, `#MTEB`

---

<a id="item-8"></a>
## [Google Opposes EU Site Blocking as US Piracy Bills Advance](https://torrentfreak.com/google-opposes-site-blocking-in-europe-as-u-s-piracy-blocking-plans-gain-momentum/) ⭐️ 8.0/10

Google filed a statement with the European Commission opposing expansion of site-blocking measures, arguing that blocking DNS resolvers, IP addresses, and VPNs is ineffective and disproportionate. Meanwhile, U.S. lawmakers are advancing similar anti-piracy legislation, with Representative Issa planning to introduce a site-blocking bill. This reflects a growing global debate between intellectual property enforcement and internet freedom. Google's stance could influence EU policy, while U.S. momentum may lead to significant changes in online content regulation. Google cited examples from Italy's anti-piracy system, which mistakenly blocked Google Drive subdomains and Cloudflare IP addresses hosting 42 million domains. The company advocates for better legal alternatives to piracy rather than expanding blocking measures.

telegram · zaihuapd · Jul 11, 15:10

**Background**: DNS resolvers are servers that translate human-readable domain names to machine-readable IP addresses. VPNs (Virtual Private Networks) create encrypted tunnels for secure data transmission, often used to bypass geo-restrictions or enhance privacy. These technologies are frequently targeted in site-blocking proposals because they can be used to access blocked content.

<details><summary>References</summary>
<ul>
<li><a href="https://www.amazonaws.cn/what-is/dns-resolver/">什么是DNS解析器_DNS解析器的工作原理是什么-亚马逊云科技</a></li>
<li><a href="https://whatisvpn.net/">什么是VPN？ – 全面解析VPN原理、用途与安全上网指南</a></li>

</ul>
</details>

**Tags**: `#internet censorship`, `#anti-piracy`, `#DNS`, `#VPN`, `#digital rights`

---

<a id="item-9"></a>
## [Shanghai Unveils BCI Plan Targeting High-Quality Brain Control by 2027](https://t.me/zaihuapd/42501) ⭐️ 8.0/10

The Shanghai Municipal Science and Technology Commission issued the 'Shanghai Brain-Computer Interface Future Industry Cultivation Action Plan (2025-2030)', setting targets for 2027, including achieving high-quality brain control, pioneering clinical application of semi-invasive BCI products in China, and breakthroughs in invasive BCI research. This government policy marks a strategic push for brain-computer interface technology in Shanghai, potentially accelerating the development and clinical adoption of BCIs for restoring motor and speech functions in paralyzed and speech-impaired patients, and positioning China as a leader in the global neurotechnology race. The plan specifically calls for at least five invasive and semi-invasive BCI products to complete medical device type testing and clinical trials, aiming to partially restore language and motor functions for patients with aphasia and paralysis. The overall ecosystem for BCI innovation is expected to be preliminarily established by 2027.

telegram · zaihuapd · Jul 11, 15:49

**Background**: Brain-computer interfaces (BCIs) are systems that interpret brain signals and transmit them to external devices. They are categorized into invasive (electrodes implanted inside the brain), non-invasive (external sensors), and semi-invasive (electrodes placed on the brain's surface under the skull but outside brain tissue). Medical device type testing in China is a mandatory process for registering high-risk devices, involving evaluation by certified testing centers. This plan signals strong government support for advancing BCI technology from lab to clinic.

<details><summary>References</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/minds-interface-bridging-thought-technology-bci-neuranet-ai-otbae">The Mind's Interface : Bridging Thought and Technology with BCI</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12671281/">Invasive Brain-Computer Interfaces: A Critical Assessment of Current Developments and Future Prospects - PMC</a></li>
<li><a href="https://chinameddevice.com/key-points-to-navigate-the-class-iii-medical-device-type-testing/">Key Points to Navigate the Class III Medical Device Type Testing</a></li>

</ul>
</details>

**Tags**: `#brain-computer interface`, `#neurotechnology`, `#government policy`, `#Shanghai`, `#clinical applications`

---

