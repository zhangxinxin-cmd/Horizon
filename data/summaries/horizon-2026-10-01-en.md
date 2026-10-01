# Horizon Daily - 2026-10-01

> From 34 items, 6 important content pieces were selected

---

1. [Google Announces Gemini 4 Argon, a New Frontier Model](#item-1) ⭐️ 9.0/10
2. [Team publicly reverses its anti-MCP stance in "You said no MCP"](#item-2) ⭐️ 8.0/10
3. [DeepSeek open-sources full Ascend base software stack](#item-3) ⭐️ 8.0/10
4. [Cloudflare to Become a Public Certificate Authority](#item-4) ⭐️ 8.0/10
5. [Kimi K3 Lands in OpenAI Codex Enterprise Channel via Baseten](#item-5) ⭐️ 8.0/10
6. [Reddit to Kill RSS Feeds and Public API Access Over AI Scraping](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Google Announces Gemini 4 Argon, a New Frontier Model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) ⭐️ 9.0/10

Google announced Gemini 4 Argon, a new frontier AI model, in a post that says the company will keep collecting feedback from early testers and iterating on guardrails before making Argon available to developers, enterprises, and consumers. The announcement triggered a 921-point, 632-comment Hacker News discussion centered on competitive leapfrogging and provider-agnostic workflows. The release is another data point in the rapid back-and-forth between frontier AI labs, undercutting the idea that the first lab to gain a lead locks in a permanent advantage. For practitioners it reinforces that model choice is increasingly commoditized, so the durable value lies in owning skills, data, and workflow glue rather than betting on a single provider. The model is not yet generally available: the announcement frames Argon as still in a feedback-and-guardrail iteration phase before any broad rollout. Discussion also highlighted that Argon agents are reportedly being used internally on migrating C/C++ codebases to Rust across Google, positioning agentic coding as a headline capability.

hackernews · bradleyg223 · Sep 30, 20:04 · [Discussion](https://news.ycombinator.com/item?id=49913571)

**Background**: Gemini is Google's flagship family of multimodal AI models, competing directly with offerings from OpenAI and Anthropic in the so-called frontier model race. A recurring theme in that race is Dario Amodei's argument that AI is a winner-take-all field where an early lead "concentrates" and is never given back. This news is notable because it arrives amid a year of labs repeatedly overtaking one another, which is exactly the pattern that argument would not predict.

**Discussion**: The Hacker News thread is broadly impressed but focused on industry structure rather than benchmarks: nickysielicki argues the year's leapfrogging shows Amodei's "concentrating" thesis was wrong, and juanre advises engineers to keep models and providers replaceable so that intelligence becomes a commodity. Others were more skeptical of Google's messaging — babelfish mocked the "can't release a model" pattern — while taylorfinley recounted a striking agentic anecdote in which a Gemini Flash model attached GDB to a GPU driver and wrote an LD_PRELOAD shim to get ROCm working with llama.cpp.

**Tags**: `#AI/ML`, `#Gemini`, `#LLM`, `#Google`, `#Model Release`

---

<a id="item-2"></a>
## [Team publicly reverses its anti-MCP stance in "You said no MCP"](https://earendil.com/posts/you-said-no-mcp/) ⭐️ 8.0/10

A team published a post titled "You said no MCP" in which it publicly walks back its earlier, strongly held opposition to the Model Context Protocol, admitting the reversal rather than quietly adopting it. The post triggered a large Hacker News thread with roughly 610 points and 340 comments debating MCP versus CLI-based approaches to AI agent tooling. The reversal undercuts the narrative, pushed by many prominent voices in early 2026, that MCP was effectively dead and that command-line tools had won. Because MCP adoption decisions affect how AI agents are secured, deployed and observed in production, a well-regarded team changing its mind is a meaningful signal for anyone designing agent infrastructure today. Much of the debate hinges on tradeoffs the author had previously used against MCP: security, observability and telemetry, and ease of deployment and operations. Commenters also point out that MCP is technically suboptimal but widely compatible — one comparing it to USB-C, NVMe or HDMI, standards adopted despite their flaws — and note that MCP servers can execute arbitrary code and access local files, so caution is warranted.

hackernews · yarapavan · Sep 30, 09:55 · [Discussion](https://news.ycombinator.com/item?id=49906637)

**Background**: The Model Context Protocol is an open standard and open-source framework introduced by Anthropic in November 2024 to standardize how AI systems such as large language models connect to external tools, data sources and workflows. It is frequently described as a "USB-C port" for AI applications, letting clients like Claude or ChatGPT plug into local files, databases, search engines or specialized prompts. The competing approach, CLI-based agents, exposes tools as ordinary shell commands that the model invokes directly, which some engineers argue is cheaper and more predictable in multi-step reasoning, while others highlight MCP's advantages in access control, telemetry and packaging.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro">What is the Model Context Protocol (MCP)?</a></li>
<li><a href="https://tyk.io/learning-center/mcp-vs-cli-for-ai-agents-enterprise-comparison-guide/">MCP vs . CLI : A Guide to AI Agent Tooling | Tyk</a></li>

</ul>
</details>

**Discussion**: Sentiment is broadly supportive of the public reversal: one commenter praises the team for not hiding that it changed a strongly held belief. Others report concrete MCP uses beyond coding, such as wiring MCP into macOS apps like rcmd, Clop and Lunar so they can be configured in natural language with a local Qwen model, while another criticizes the March 2026 wave of influencers who declared MCP dead while ignoring security, observability and deployment arguments. A recurring counterpoint is pragmatic: MCP may be suboptimal, but like USB-C or HDMI it is ubiquitous and will improve over time, so "something is better than nothing."

**Tags**: `#MCP`, `#AI agents`, `#developer tooling`, `#LLM integration`, `#industry commentary`

---

<a id="item-3"></a>
## [DeepSeek open-sources full Ascend base software stack](https://mp.weixin.qq.com/s/X41mKH4Ds-VXUAnK6M8Eww) ⭐️ 8.0/10

DeepSeek open-sourced a suite of foundational components targeting Huawei's Ascend platform on September 30, 2026, mirroring its NVIDIA stack with a TileLang high-level compilation toolchain, compute libraries, and distributed communication libraries. The release also includes DeepGEMM Ascend, DeepEP Ascend, TileKernels, FlashMLA, and DeepSelect, and DeepSeek says the components reach performance close to hardware limits in multiple benchmarks while it works with Huawei on the 128-card Ascend 950 supernode design. This is one of the first times a leading model developer has released a complete kernel-and-library-level software stack for a non-NVIDIA accelerator, giving Ascend users a credible alternative to CUDA-centric tooling. If it matures, it could meaningfully reduce the ecosystem lock-in that has kept most large-model training and inference workloads tied to NVIDIA GPUs, and it strengthens Huawei's position in the Chinese AI infrastructure market. DeepGEMM Ascend is described as an MIT-licensed port that is fully API-compatible with the original DeepGEMM, retaining its interface shape while targeting Huawei NPUs and supporting BF16, FP8 and FP4 GEMM along with MQA logits. The main caveat is that this is an ecosystem porting effort rather than a novel algorithmic breakthrough, so its value depends on how completely the components cover real Ascend workloads and how actively they are maintained.

telegram · zaihuapd · Sep 30, 03:09

**Background**: Huawei's Ascend is a family of AI accelerator chips (NPUs) and is widely seen as the leading domestic alternative to NVIDIA GPUs in China; the Ascend 950 supernode refers to a system design that links 128 of these chips together. Most AI software today is written for NVIDIA's CUDA platform, so supporting a new chip usually requires reimplementing core libraries and hand-tuned kernels. DeepGEMM is DeepSeek's high-performance matrix-multiplication (GEMM) library, FlashMLA is its optimized attention kernel library used in the DeepSeek-V3 series, and TileLang is a tile-based programming language that lets developers express GPU/NPU kernels at a higher level of abstraction.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/deepseek-ai/DeepGEMM-Ascend">GitHub - deepseek-ai/ DeepGEMM - Ascend : DeepGEMM - Ascend ...</a></li>
<li><a href="https://aireiter.com/blog/deepseek-ascend-infrastructure-components">DeepSeek Ascend Infrastructure Components, Mapped to NVIDIA</a></li>
<li><a href="https://arxiv.org/abs/2504.17577">TileLang : A Composable Tiled Programming Model for AI Systems</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#Huawei Ascend`, `#Open Source`, `#AI Infrastructure`, `#GPU Kernels`

---

<a id="item-4"></a>
## [Cloudflare to Become a Public Certificate Authority](https://blog.cloudflare.com/cloudflare-certificate-authority/) ⭐️ 8.0/10

Cloudflare announced plans to become a public certificate authority, having applied to join the Chrome, Apple, Microsoft, and Mozilla root certificate programs and signed an agreement with GlobalSign to acquire a widely trusted root. The company says it has not begun issuing certificates yet, but intends to prioritize ACME-based automated issuance and renewal and to issue production Merkle Tree Certificates (MTCs) in the first quarter of 2027. Cloudflare is one of the largest terminators of TLS traffic on the web, so becoming its own publicly trusted CA could let it issue certificates at massive scale and reduce dependence on incumbent authorities such as DigiCert, Sectigo, and Let's Encrypt. Its ACME-first posture and early MTC roadmap also position it to shape how the WebPKI handles automation and the eventual post-quantum transition. Cloudflare has applied to major root programs and is acquiring a trusted root from GlobalSign rather than starting from scratch, and it explicitly notes that no certificates are being issued yet. The 2027 MTC milestone is described as a production target tied to post-quantum readiness, which means the current announcement is a strategic roadmap rather than a shipped service.

telegram · zaihuapd · Sep 30, 06:26

**Background**: A certificate authority (CA) is the entity that issues the TLS certificates browsers rely on to verify a website's identity; to be trusted by default, a CA's root certificate must be included in root programs maintained by browser and OS vendors like Chrome, Apple, Microsoft, and Mozilla. ACME (Automated Certificate Management Environment) is the IETF standard that turns domain validation and certificate issuance into a fully automated protocol, and it underpins services such as Let's Encrypt. Post-quantum certificates are being prepared because future quantum computers could break today's signature algorithms, and Merkle Tree Certificates are a proposed format designed to keep post-quantum authentication lightweight enough for the public web.

<details><summary>References</summary>
<ul>
<li><a href="https://www.encryptionconsulting.com/merkle-tree-certificates/">Merkle Tree Certificates & Post - Quantum WebPKI</a></li>
<li><a href="https://www.sectigo.com/blog/what-are-merkle-tree-certificates-mtcs">What are Merkle Tree Certificates (MTCs)? | Sectigo® Official</a></li>
<li><a href="https://dev.to/michaelcarter09/how-acme-http-01-and-dns-01-challenges-work-internally-4bdf">How ACME HTTP-01 and DNS-01 Challenges Work... - DEV Community</a></li>

</ul>
</details>

**Tags**: `#Cloudflare`, `#Public CA`, `#TLS Certificates`, `#ACME`, `#Post-Quantum`

---

<a id="item-5"></a>
## [Kimi K3 Lands in OpenAI Codex Enterprise Channel via Baseten](https://36kr.com/newsflashes/4005691489112198) ⭐️ 8.0/10

US AI infrastructure company Baseten announced that enterprise customers can now use Moonshot AI's Kimi K3 inside OpenAI's Codex coding tool, with usage fees billed directly against their existing OpenAI procurement commitments rather than requiring a new vendor onboarding process. This makes Kimi K3 the first Chinese open-source model to enter OpenAI's enterprise paid settlement system. It marks a notable shift in enterprise AI procurement: a Chinese open-weight model is now purchasable through a US rival's own billing rails, lowering the adoption barrier for large companies that already have OpenAI contracts. It also signals growing model interoperability and a more multi-vendor reality inside tools like Codex, which could reshape how enterprises allocate AI budgets across American and Chinese models. Kimi K3 is a 2.8-trillion-parameter sparse mixture-of-experts multimodal reasoning model from Moonshot AI, with roughly 16 of 896 experts active per input and a context window of about 1,048,576 tokens; via third-party routing, pricing is listed around $1.03 per million input tokens and $9.043 per million output tokens. The core enabler here is Baseten, which hosts and serves the model, so availability depends on Baseten's infrastructure rather than a direct OpenAI-Moonshot partnership.

telegram · zaihuapd · Sep 30, 11:23

**Background**: OpenAI Codex is OpenAI's AI coding tool/assistant, and large enterprises often commit to minimum spending levels with OpenAI, which they then draw down across supported services. Baseten is a US inference platform that deploys and scales open-source and custom AI models in production, acting here as the bridge that exposes Kimi K3 inside Codex. Kimi K3 is developed by China's Moonshot AI, and open-weight models like it are typically distributed so that third-party clouds can host and resell inference, which is how a Chinese model can end up billed through an OpenAI contract.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(chatbot)">Kimi (AI) - Wikipedia</a></li>
<li><a href="https://openrouter.ai/moonshotai/kimi-k3">Kimi K 3 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://www.baseten.co/">Inference Platform : Deploy AI models in production | Baseten</a></li>

</ul>
</details>

**Tags**: `#Kimi K3`, `#OpenAI Codex`, `#enterprise AI`, `#China AI`, `#model integration`

---

<a id="item-6"></a>
## [Reddit to Kill RSS Feeds and Public API Access Over AI Scraping](https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots/) ⭐️ 8.0/10

Reddit announced it will discontinue RSS feed support on November 13, saying the format has become a common channel for large-scale scraping and automated abuse, particularly by AI bots, and that public API access will be shut down by March 2027. The company is advising moderators to switch to Discord Relay and says third-party apps and bot developers must register by January 12, 2027 or lose API access. The move cuts off two of the most widely used ways to read Reddit content programmatically, directly affecting third-party clients, moderation bots, researchers, data archivists and AI practitioners who rely on Reddit as a public corpus. It is part of a broader industry trend in which platforms are locking down public data access in the name of anti-scraping and AI training control, at the cost of the open web ecosystem. RSS is being singled out as an abuse vector rather than a legacy format, and Reddit's recommended replacement for moderators is Discord Relay rather than an official feed. Developers who miss the January 12, 2027 registration deadline will simply be removed from API access, with no stated exemption process for non-commercial or research use.

telegram · zaihuapd · Oct 1, 00:27

**Background**: RSS (Really Simple Syndication) is an open, standardized XML format that lets users subscribe to a site's updates through a feed reader instead of an algorithm-driven timeline, and it has long been a lightweight way to follow sources without an account or app. A public API, by contrast, is a documented interface that lets programs query a service's data directly, which is how most third-party Reddit clients, bots and research tools work. Reddit has already tightened API terms in recent years, and its content has become a valuable training source for large language models, so the platform now has strong commercial incentives to control who can pull its data and on what terms.

<details><summary>References</summary>
<ul>
<li><a href="https://zh.wikipedia.org/zh-hans/RSS">RSS - 维基百科，自由的百科全书</a></li>
<li><a href="https://sspai.com/post/56198">RSS - 高效率的 阅 读方式 - 少数派 | 少数派 - 高品质数字消费指南</a></li>

</ul>
</details>

**Tags**: `#Reddit`, `#API Access`, `#RSS`, `#AI Scraping`, `#Platform Policy`

---

