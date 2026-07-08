# Horizon Daily - 2026-07-08

> From 37 items, 16 important content pieces were selected

---

1. [OpenAI Launches GPT-Live Voice Mode with GPT-5.5 Backing](#item-1) ⭐️ 9.0/10
2. [EU revives private message scanning rules](#item-2) ⭐️ 9.0/10
3. [TypeScript 7.0 Announced with Up to 12x Faster Processing](#item-3) ⭐️ 9.0/10
4. [Critical Android Zero-Click Remote Root Exploit Chain Discovered](#item-4) ⭐️ 9.0/10
5. [Chatto Chat Application Goes Open Source](#item-5) ⭐️ 8.0/10
6. [xAI Launches Grok 4.5 with 4x Efficiency Gain](#item-6) ⭐️ 8.0/10
7. [Mistral Releases Robostral Navigate, a Map-Less Navigation Model](#item-7) ⭐️ 8.0/10
8. [OpenBSD use-after-free vulnerability enables local root privilege escalation](#item-8) ⭐️ 8.0/10
9. [Fable Classifier Overzealously Blocks Legitimate Queries](#item-9) ⭐️ 8.0/10
10. [Cloudflare Meerkat: First Production Asynchronous Consensus](#item-10) ⭐️ 8.0/10
11. [LingBot-Video: Sparse-MoE Video Diffusion World Model](#item-11) ⭐️ 8.0/10
12. [Mixed attention mask and distillation reduce drift in interactive world models](#item-12) ⭐️ 8.0/10
13. [DeepSeek Developing Its Own AI Inference Chip](#item-13) ⭐️ 8.0/10
14. [Alibaba Orders Employees to Uninstall Claude, Ban Effective July 10](#item-14) ⭐️ 8.0/10
15. [Meta smart glasses auto-disable camera if privacy light tampered](#item-15) ⭐️ 8.0/10
16. [Researchers identify smartphone apps via EM signals with 99.07% accuracy](#item-16) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI Launches GPT-Live Voice Mode with GPT-5.5 Backing](https://openai.com/index/introducing-gpt-live/) ⭐️ 9.0/10

OpenAI has introduced GPT-Live, a full-duplex voice mode for ChatGPT that leverages GPT-5.5 for background reasoning, enabling more natural and extended conversations. This marks a significant leap in voice AI by closing the gap between voice and text models, allowing users to have productive, long-form conversations without being limited to older voice models. GPT-Live includes models GPT-Live-1 and GPT-Live-1 mini, and features the ability to delegate questions to GPT-5.5 in the background, providing up-to-date intelligence. A bug was reported where the model would interrupt and laugh unintentionally.

hackernews · logickkk1 · Jul 8, 17:03 · [Discussion](https://news.ycombinator.com/item?id=48834405)

**Background**: Voice assistants often use specialized, smaller models that lag behind the latest text-based LLMs. GPT-Live addresses this by integrating GPT-5.5—OpenAI's most advanced model released in April 2026—as a background reasoning engine, allowing the voice mode to access frontier capabilities during conversations.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-5-5/">Introducing GPT‑5.5 - OpenAI</a></li>
<li><a href="https://deploymentsafety.openai.com/gpt-live">GPT-Live System Card - OpenAI Deployment Safety Hub</a></li>
<li><a href="https://venturebeat.com/technology/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person">OpenAI launches GPT-Live, a full-duplex voice upgrade ... - VentureBeat</a></li>

</ul>
</details>

**Discussion**: Community sentiment is mixed: some users praise the natural conversation quality and longer sessions, while others critique the direction of AI replacing human relationships and note the lack of tool/connector integration in voice mode. A bug about unintended interruptions was also reported.

**Tags**: `#openai`, `#gpt-live`, `#voice-ai`, `#chatbots`, `#ai-assistant`

---

<a id="item-2"></a>
## [EU revives private message scanning rules](https://cyberinsider.com/eu-now-one-step-away-from-reviving-private-message-scanning-rules/) ⭐️ 9.0/10

The European Union is one step away from reviving legislation that would mandate scanning of private messages, including potential requirements to undermine end-to-end encryption. This legislation could have major implications for privacy and encryption across the EU, affecting over 450 million users and setting a global precedent for mass surveillance of private communications. The revived proposal, known as Chat Control, has two versions: Chat Control 1.0 allows voluntary scanning by platforms, while Chat Control 2.0 mandates scanning and bans end-to-end encryption. The current push focuses on the more controversial 2.0 version.

hackernews · ggirelli · Jul 8, 16:53 · [Discussion](https://news.ycombinator.com/item?id=48834296)

**Background**: Client-side scanning is a technique that scans message content on the user's device before encryption, effectively circumventing end-to-end encryption. End-to-end encryption ensures that only the sender and intended recipient can read messages, protecting against surveillance. The EU's proposed legislation aims to detect illegal content such as child sexual abuse material, but critics argue it undermines security and privacy for all users.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/End-to-end_encryption">End-to-end encryption</a></li>
<li><a href="https://www.internetsociety.org/wp-content/uploads/2020/03/2022-Client-Side-Scanning-Factsheet-EN.pdf">CC BY-NC-SA 4.0 Client-Side Scanning</a></li>

</ul>
</details>

**Discussion**: Commenters express frustration that the legislation repeatedly resurfaces, with some distinguishing between Chat Control 1.0 (voluntary scanning) and 2.0 (mandatory scanning and E2EE ban). Others highlight the role of organizations like the Internet Watch Foundation in pushing for client-side scanning.

**Tags**: `#privacy`, `#encryption`, `#EU legislation`, `#surveillance`, `#security`

---

<a id="item-3"></a>
## [TypeScript 7.0 Announced with Up to 12x Faster Processing](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) ⭐️ 9.0/10

Microsoft announced TypeScript 7.0, a major version release featuring a completely rewritten codebase that delivers up to 12x faster compilation in benchmarks, alongside new features. This performance leap significantly reduces build times for large codebases like VS Code and Sentry, making TypeScript more attractive for enterprise projects and improving developer productivity. Benchmarks show speedups ranging from 7.7x on tldraw to 11.9x on vscode, though users note compatibility issues with tools like ts-jest require workarounds.

hackernews · DanRosenwasser · Jul 8, 16:06 · [Discussion](https://news.ycombinator.com/item?id=48833715)

**Background**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, widely used for large-scale application development. Major version releases often introduce breaking changes, requiring teams to update dependencies and configuration.

**Discussion**: The community celebrated the performance gains, with one user calling the team's parallel codebase maintenance an incredible feat. However, concerns were raised about compatibility with testing tools like ts-jest and the complexity of tsconfig scoping for subsets of a project.

**Tags**: `#TypeScript`, `#performance`, `#major-release`, `#programming-language`, `#compiler`

---

<a id="item-4"></a>
## [Critical Android Zero-Click Remote Root Exploit Chain Discovered](https://www.coolapk.com/feed/72700258?s=ZGQ2MTVlZjYxMDYyNTM3ZzZhNGUzOThjega1640) ⭐️ 9.0/10

On July 8, cybersecurity firm Nebula disclosed a zero-click remote root vulnerability chain affecting all Android versions up to Android 17. The exploit leverages a Firefox browser vulnerability (version 151.0.2 and earlier) and a 15-year-old Linux kernel bug, requiring only that a user clicks a malicious link to gain persistent root access within one minute. This vulnerability chain is critical because it allows remote attackers to gain full root control of virtually any Android device without user interaction beyond clicking a link. The availability of a proof-of-concept on GitHub and the historical nature of the kernel bug mean that exploitation could become widespread, affecting billions of devices. The attack chain combines a Firefox browser vulnerability with a 15-year-old Linux kernel bug that had been dormant. According to the report, the exploit can be executed via a malicious link, and within a minute, it implants permission files and grants persistent root access via ADB. Google has been notified, and the Linux kernel has already been patched, but the complete vulnerability details are not yet disclosed.

telegram · zaihuapd · Jul 8, 13:01

**Background**: Android devices rely on a layered security model, including sandboxing and permission controls, to prevent unauthorized access. Root access gives users or attackers complete control over the device, bypassing these restrictions. A zero-click exploit means no user interaction (like tapping a button) is required beyond the initial click, making it highly dangerous. The ADB (Android Debug Bridge) is a command-line tool used for debugging, but if compromised, it can be used to execute commands with elevated privileges.

<details><summary>References</summary>
<ul>
<li><a href="https://www.esecurityplanet.com/threats/android-zero-click-rce-vulnerability-enables-remote-shell-access/">Android Zero-Click RCE Vulnerability Enables Remote Shell Access | eSecurity Planet</a></li>
<li><a href="https://www.apriorit.com/dev-blog/255-android-rooting">Android Rooting Using ADB | Apriorit</a></li>

</ul>
</details>

**Tags**: `#Android`, `#security`, `#vulnerability`, `#root`, `#exploit`

---

<a id="item-5"></a>
## [Chatto Chat Application Goes Open Source](https://www.hmans.dev/blog/chatto-is-open-source) ⭐️ 8.0/10

Chatto, a self-hosted chat application with per-user encryption, has been released as open source software. The project is designed to be extremely easy to deploy on your own infrastructure. This provides a privacy-focused, self-hosted alternative to mainstream chat platforms, appealing to individuals and companies that want full control over their communication data. The use of per-user encryption and easy deployment could encourage wider adoption of self-hosted messaging. Chatto ships as a compact self-contained binary and uses NATS as its message broker, which also offers built-in stream persistence. It supports optional S3-compatible object storage for file uploads and attachment storage.

hackernews · speckx · Jul 8, 15:19 · [Discussion](https://news.ycombinator.com/item?id=48833116)

**Background**: NATS is a high-performance, lightweight, open-source messaging system under the Cloud Native Computing Foundation, supporting pub/sub, request/reply, and streaming with persistence. Chatto leverages NATS for efficient message delivery and storage, making it suitable for self-hosted deployments.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NATS_Messaging">NATS Messaging - Wikipedia</a></li>
<li><a href="https://nats.io/">NATS.io – Cloud Native, Open Source, High-performance Messaging</a></li>

</ul>
</details>

**Discussion**: Commenters praised the ease of self-hosting and the use of NATS, with one noting the developer's use of agentic coding. Some raised concerns about compliance with company policies (e.g., soft delete for work messages) and lack of mobile support, which is a must for many users.

**Tags**: `#open-source`, `#chat`, `#self-hosting`, `#NATS`, `#encryption`

---

<a id="item-6"></a>
## [xAI Launches Grok 4.5 with 4x Efficiency Gain](https://x.ai/news/grok-4-5) ⭐️ 8.0/10

xAI announced Grok 4.5, a large language model that achieves 4x better reasoning efficiency compared to Claude Opus at a lower cost. The model was trained using trillions of tokens of Cursor data and is priced at $2/$6 for input/output. This release intensifies competition in the AI model market, offering a more cost-efficient alternative to leading models like Opus. However, ethical concerns about xAI's practices may hinder adoption in enterprise settings. Grok 4.5 is priced at $2 per million input tokens and $6 per million output tokens, significantly cheaper than GPT-5.4 ($2.5/$15) and Opus 4.8 ($5/$25). Benchmarks place it near Opus 4.7 level.

hackernews · BoumTAC · Jul 8, 18:00 · [Discussion](https://news.ycombinator.com/item?id=48835111)

**Background**: Grok is an AI chatbot developed by xAI, founded by Elon Musk, and integrated with X (formerly Twitter) and Tesla. Large language models (LLMs) like Grok and Claude are trained on vast text data to generate human-like responses; 'reasoning efficiency' refers to the model's ability to solve problems with fewer computational resources.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Grok_(chatbot)">Grok (chatbot) - Wikipedia</a></li>
<li><a href="https://www.anthropic.com/claude/opus">Claude Opus \ Anthropic</a></li>

</ul>
</details>

**Discussion**: The community is divided; some praise the model's cost-efficiency and performance, while others criticize xAI's ethical stance, citing concerns about CSAM and political bias in model responses. Technical users also note the novel use of Cursor data in training.

**Tags**: `#AI`, `#LLMs`, `#xAI`, `#Grok`, `#model release`

---

<a id="item-7"></a>
## [Mistral Releases Robostral Navigate, a Map-Less Navigation Model](https://mistral.ai/news/robostral-navigate/) ⭐️ 8.0/10

Mistral has released Robostral Navigate, an 8-billion-parameter model that achieves 76.6% on the R2R-CE benchmark using only a single RGB camera, without depth sensors, LiDAR, or multiple cameras. This model advances robotic navigation by enabling map-less navigation with minimal hardware, potentially reducing costs and complexity for applications like warehouse automation and hobbyist robotics. The model is not openly available, limiting immediate community access, but its single-camera approach could make real-world deployment more scalable.

hackernews · ottomengis · Jul 8, 14:09 · [Discussion](https://news.ycombinator.com/item?id=48832212)

**Background**: Map-less navigation allows robots to navigate unfamiliar environments without pre-built maps, solving the 'kidnapped robot problem' where a robot cannot localize itself. Traditional methods rely on multiple sensors or pre-mapped areas. Robostral Navigate uses vision and language instructions to achieve this with a single camera.

<details><summary>References</summary>
<ul>
<li><a href="https://mistral.ai/news/robostral-navigate/">Robostral Navigate: single-camera AI navigation | Mistral AI</a></li>
<li><a href="https://alphasignal.ai/news/mistral-s-robostral-navigate-beats-sensor-heavy-robots-with-just-one-camera">Mistral's Robostral Navigate Beats Sensor-Heavy Robots With ...</a></li>

</ul>
</details>

**Discussion**: The community is excited about the map-less navigation capability, though some regret the model is not open-source. Commenters compare it to prior work like PIGEON and express interest in using it for hobbyist projects such as farm robots.

**Tags**: `#robotics`, `#navigation`, `#AI`, `#Mistral`, `#map-less`

---

<a id="item-8"></a>
## [OpenBSD use-after-free vulnerability enables local root privilege escalation](https://nvd.nist.gov/vuln/detail/cve-2026-57589) ⭐️ 8.0/10

A use-after-free vulnerability (CVE-2026-57589) has been discovered in OpenBSD that allows a local attacker to escalate privileges to root. OpenBSD has a strong security reputation, so any local privilege escalation vulnerability is significant and could erode trust. This finding, discovered via AI-assisted bug hunting, also highlights the ongoing challenge of memory safety in even the most security-conscious operating systems. The vulnerability is a use-after-free bug in the OpenBSD kernel, enabling local privilege escalation to root. It was identified as part of the Patch the Planet initiative, a collaboration between OpenAI and Trail of Bits to use AI for finding vulnerabilities in open-source software.

hackernews · linggen · Jul 8, 13:24 · [Discussion](https://news.ycombinator.com/item?id=48831658)

**Background**: A use-after-free vulnerability occurs when a program continues to use a memory pointer after the memory has been freed, potentially allowing an attacker to execute arbitrary code. OpenBSD is a security-focused, free, Unix-like operating system known for its rigorous audit and proactive security measures. Local privilege escalation means an attacker with limited local access can gain root-level control of the system.

<details><summary>References</summary>
<ul>
<li><a href="https://learn.snyk.io/lesson/use-after-free/">Use after free vulnerability | Tutorial & Examples | Snyk Learn</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenBSD">OpenBSD</a></li>
<li><a href="https://en.wikipedia.org/wiki/Local_privilege_escalation">Local privilege escalation</a></li>

</ul>
</details>

**Discussion**: Community commenters noted that the bug was found through Patch the Planet, an AI-assisted bug hunting program. Some argued this discovery highlights OpenBSD's strong security culture, while others questioned why the vulnerability is not yet listed on OpenBSD's security page. There was also discussion comparing OpenBSD's security record to other systems.

**Tags**: `#security`, `#vulnerability`, `#OpenBSD`, `#privilege-escalation`, `#CVE`

---

<a id="item-9"></a>
## [Fable Classifier Overzealously Blocks Legitimate Queries](https://combine-lab.github.io/blog/2026/07/07/fable-is-not-a-useful-model.html) ⭐️ 8.0/10

Users report that Anthropic's Fable classifier incorrectly flags legitimate technical and scientific queries as violations, downgrading responses to the less capable Opus 4.8 model. This undermines the utility of Fable for professional and academic work, raising concerns about AI safety guardrails overreaching and hindering productive use. The classifier is designed to detect cybersecurity, biology, or jailbreak attempts but has a high false-positive rate, flagging even clinical trial statistics and vllm code patches as violations.

hackernews · karrot-kake · Jul 8, 20:41 · [Discussion](https://news.ycombinator.com/item?id=48837162)

**Background**: LLM guardrails are safety mechanisms meant to prevent harmful outputs. Anthropic's Fable includes a classifier that downgrades risky queries to a less capable model (Opus 4.8). However, overly aggressive filtering can block legitimate use cases, frustrating users who rely on the model for technical work.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/news/fable-safeguards-jailbreak-framework">More details on Fable 5’s cyber safeguards and our jailbreak ...</a></li>
<li><a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5">Prompting Claude Fable 5 - Claude Platform Docs</a></li>
<li><a href="https://aisecurityandsafety.org/en/guides/llm-guardrails/">LLM Guardrails: The Complete Guide to AI Safety Guardrails ...</a></li>

</ul>
</details>

**Discussion**: Community comments show widespread frustration: a medical physicist could not get Fable to answer any questions, and a user trying to patch vllm for GPU support was repeatedly downgraded. One commenter noted that Anthropic retains flagged inputs/outputs for up to 2 years, raising privacy concerns.

**Tags**: `#AI Safety`, `#Anthropic`, `#LLM Guardrails`, `#Model Behavior`

---

<a id="item-10"></a>
## [Cloudflare Meerkat: First Production Asynchronous Consensus](https://blog.cloudflare.com/meerkat-introduction/) ⭐️ 8.0/10

Cloudflare introduced Meerkat, the first production implementation of QuePaxa, an asynchronous consensus algorithm that does not rely on timeouts and makes progress under wild message delays. This marks a significant advancement in distributed consensus, offering robustness against network instability where traditional protocols like Paxos and Raft fail. It could benefit systems operating over unreliable global networks. Meerkat requires global consensus for every read operation, which increases read latency compared to systems that allow local reads. Cloudflare notes it is not yet in production, and performance under normal conditions remains a question.

hackernews · bobnamob · Jul 8, 13:18 · [Discussion](https://news.ycombinator.com/item?id=48831565)

**Background**: Distributed consensus algorithms like Paxos and Raft rely on timeouts to handle failures, but they struggle under unpredictable network delays due to the partially synchronous model. Asynchronous consensus, as in QuePaxa, eliminates timeouts by using randomization and hedging to guarantee liveness even in worst-case conditions, though it has been challenging to implement efficiently in practice.

<details><summary>References</summary>
<ul>
<li><a href="https://bford.info/pub/os/quepaxa/">QuePaxa: Escaping the Tyranny of Timeouts in Consensus – Bryan Ford's Home Page</a></li>
<li><a href="https://bford.info/pub/os/quepaxa/quepaxa.pdf">QuePaxa: Escaping the Tyranny of Timeouts in Consensus Pasindu Tennage* EPFL</a></li>
<li><a href="https://en.wikipedia.org/wiki/Paxos_(computer_science)">Paxos (computer science) - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters noted that Meerkat is the first production asynchronous consensus implementation, but questioned its comparison to Raft (a leader-based variant of Paxos) and highlighted the read latency cost of requiring global consensus for all reads. Some saw value for messy networks, while others doubted its practical adoption beyond niche use cases.

**Tags**: `#distributed systems`, `#consensus algorithm`, `#cloud computing`, `#asynchronous consensus`, `#production implementation`

---

<a id="item-11"></a>
## [LingBot-Video: Sparse-MoE Video Diffusion World Model](https://www.reddit.com/r/MachineLearning/comments/1ur0bxq/lingbotvideo_sparsemoe_video_diffusion/) ⭐️ 8.0/10

The LingBot-Video model, a 13B parameter sparse mixture-of-experts video diffusion transformer with only 1.4B active parameters, has been released openly with weights, code, and inference stack. This is a significant open-source contribution combining sparse MoE, RL with physical-plausibility reward, and action-conditioned video prediction for world modeling, potentially advancing robotics and video generation. The model uses 128 experts with top-8 routing and was post-trained with six RL rewards, including a physical-plausibility reward judged by a VLM from sampled frames.

reddit · r/MachineLearning · /u/Savings-Display5123 · Jul 8, 17:58

**Background**: Sparse mixture-of-experts (MoE) is an architecture that divides a problem space into specialized sub-networks and activates only a subset per input, improving efficiency. Video diffusion transformers apply transformer attention mechanisms to diffusion models for generating temporally consistent videos. A world model learns to simulate environment dynamics from action-conditioned observations, enabling planning and policy evaluation.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Sparse_mixture-of-experts">Sparse mixture-of-experts</a></li>
<li><a href="https://arxiv.org/abs/2305.13311">[2305.13311] VDT: General-purpose Video Diffusion ... GitHub - RERV/VDT: [ICLR2024] The official implementation of ... GitHub - showlab/Awesome-Video-Diffusion: A curated list of ... VDT: General-purpose Video Diffusion Transformers via Mask ... [2509.09547] Improving Video Diffusion Transformer Training ... VDT: G PURPOSE VIDEO DIFFUSION TRANS FORMERS VIA MODELING DiTVR: Zero-Shot Diffusion Transformer for Video Restoration</a></li>
<li><a href="https://github.com/RERV/VDT">GitHub - RERV/VDT: [ICLR2024] The official implementation of ... GitHub - showlab/Awesome-Video-Diffusion: A curated list of ... VDT: General-purpose Video Diffusion Transformers via Mask ... [2509.09547] Improving Video Diffusion Transformer Training ... VDT: G PURPOSE VIDEO DIFFUSION TRANS FORMERS VIA MODELING DiTVR: Zero-Shot Diffusion Transformer for Video Restoration</a></li>

</ul>
</details>

**Discussion**: The submitter raises concerns about using a VLM as a judge of physical plausibility, warning of potential Goodhart's law effects, and notes the absence of closed-loop robot evaluation results, questioning whether the model qualifies as a true world model or remains a video generator.

**Tags**: `#sparse MoE`, `#video diffusion`, `#world model`, `#reinforcement learning`, `#open source`

---

<a id="item-12"></a>
## [Mixed attention mask and distillation reduce drift in interactive world models](https://www.reddit.com/r/MachineLearning/comments/1ur4hkc/reducing_drift_in_interactive_worldmodel_rollouts/) ⭐️ 8.0/10

Researchers introduce a method that combines a mixed bidirectional/autoregressive attention mask (MoBA) with consistency and distribution-matching distillation over long self-rollout trajectories to reduce drift in interactive world-model rollouts, demonstrated by 60-minute stable generation in LingBot World. This work addresses a key limitation in interactive world models—drift over long rollouts—enabling more reliable long-term generation for applications like robotics simulation and interactive AI. The open-weights release allows the community to build upon this approach. The method uses dynamic KV-cache scheduling with MoBA to keep long rollouts tractable, and camera control via Plücker embeddings with AdaLN. However, identity persistence is limited: regions leaving the context window are regenerated on revisit, not recalled.

reddit · r/MachineLearning · /u/Purple-Low-2779 · Jul 8, 20:23

**Background**: Interactive world models generate video frames conditioned on user input, but often suffer from drift where the model overly relies on its own recent frames, causing degradation over time. MoBA is a sparse attention mechanism that can seamlessly transition between full and sparse attention, improving efficiency for long sequences. Distribution matching distillation (DMD) is a technique to compress multi-step diffusion models into one-step generators by matching distributions, not just individual samples.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2502.13189">[2502.13189] MoBA: Mixture of Block Attention for Long ... GitHub - MoonshotAI/MoBA: MoBA: Mixture of Block Attention ... Optimizing Mixture of Block Attention - arXiv.org Tencent-Hunyuan/flex-block-attn - GitHub MoBA: Efficient Sparse Block Attention - emergentmind.com MoBA: Mixture of Block Attention for Long-Context LLMs Mixture of Block Attention (MoBA) - AI Wiki</a></li>
<li><a href="https://arxiv.org/abs/2311.18828">[2311.18828] One-step Diffusion with Distribution Matching Distillation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Plücker_embedding">Plücker embedding - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The Reddit commenter highlights the technical novelty and honesty about limitations (identity persistence), and expresses curiosity about whether long-rollout stability will hold up when others replicate the experiments. No other comments are provided.

**Tags**: `#machine learning`, `#world models`, `#interactive generation`, `#attention mechanism`, `#distillation`

---

<a id="item-13"></a>
## [DeepSeek Developing Its Own AI Inference Chip](https://t.me/zaihuapd/42423) ⭐️ 8.0/10

DeepSeek, a leading Chinese AI company, is developing its own AI inference chip to reduce dependence on Nvidia and Huawei chips, according to three sources. The chip targets inference workloads and has been in development for about a year. This move signals a strategic shift toward hardware independence amid US export restrictions, potentially reshaping the AI inference landscape. It also highlights the growing trend of AI companies designing custom silicon for cost and performance optimization. The chip is specifically designed for inference, not training, and DeepSeek has begun contacting chip design, foundry, and memory companies while actively recruiting chip design engineers. Previously, DeepSeek's models relied on Nvidia H800 and Huawei Ascend chips.

telegram · zaihuapd · Jul 8, 05:20

**Background**: AI chips are specialized hardware designed to accelerate machine learning tasks, with training chips optimized for large model training and inference chips optimized for running trained models. Nvidia's H800 GPU and Huawei's Ascend series are widely used for AI workloads but are subject to US export restrictions, limiting Chinese companies' access. Developing custom silicon allows companies to reduce supply chain risks and tailor performance to their specific needs.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NVIDIA_H800_GPU">NVIDIA H800 GPU</a></li>
<li><a href="https://www.huaweicentral.com/huawei-reveals-3-year-ascend-ai-chip-roadmap-950-coming-in-2026/">Huawei reveals 3-year Ascend AI chip roadmap, 950 coming in 2026</a></li>

</ul>
</details>

**Tags**: `#AI chips`, `#DeepSeek`, `#inference`, `#semiconductor`, `#geopolitics`

---

<a id="item-14"></a>
## [Alibaba Orders Employees to Uninstall Claude, Ban Effective July 10](https://t.me/zaihuapd/42424) ⭐️ 8.0/10

Alibaba has internally ordered all employees to uninstall all Anthropic products, including Claude models (Sonnet, Opus, Fable) and Claude Code agent, effective July 10. This follows Anthropic's accusation that Alibaba used approximately 25,000 fake accounts to interact with Claude over 28 million times between April 22 and June 5. This ban marks a major escalation in tensions between a Chinese tech giant and a leading AI company, potentially impacting enterprise adoption of foreign AI tools in China. It also highlights growing concerns over API abuse and the lengths companies may go to protect their services. The ban covers not only Claude models (Sonnet, Opus, Fable) but also the Claude Code agent product. Previously, Alibaba had reimbursed employees for using external AI models like Claude, GPT, and Gemini; the new policy reverses that practice.

telegram · zaihuapd · Jul 8, 06:09

**Background**: Claude is a family of large language models developed by Anthropic, an AI safety company. Models like Sonnet, Opus, and Fable vary in capability and cost, while Claude Code is an agent tool for coding tasks. Alibaba's ban follows Anthropic's tightening of fraud detection after allegedly detecting large-scale fake account usage.

<details><summary>References</summary>
<ul>
<li><a href="https://platform.claude.com/docs/en/about-claude/models/overview">Models overview - Claude Platform Docs</a></li>
<li><a href="https://code.claude.com/docs/en/agent-sdk/overview">Agent SDK overview - Claude Code Docs</a></li>

</ul>
</details>

**Tags**: `#Alibaba`, `#Claude`, `#Anthropic`, `#AI Security`, `#Corporate Ban`

---

<a id="item-15"></a>
## [Meta smart glasses auto-disable camera if privacy light tampered](https://www.theverge.com/gadgets/962514/meta-privacy-light-tampering-smart-glasses-update?view_token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Ik40dk1iWjJvWjMiLCJwIjoiL2dhZGdldHMvOTYyNTE0L21ldGEtcHJpdmFjeS1saWdodC10YW1wZXJpbmctc21hcnQtZ2xhc3Nlcy11cGRhdGUiLCJleHAiOjE3ODM5MDE0MjUsImlhdCI6MTc4MzQ2OTQyNX0.GZUi5dGuIr00bBayHW1_oTfEcfxURMnIKLk2tTpC2To) ⭐️ 8.0/10

Meta is rolling out an update to its smart glasses that will automatically disable the camera if the privacy indicator LED is covered or physically tampered with. This directly addresses privacy concerns and unauthorized recording abuse, as some users had found ways to bypass the indicator light. The update strengthens user protection and may restore trust in wearable cameras. The update applies to second-generation Ray-Ban Meta smart glasses and Meta's self-branded models, shutting down the entire camera capture system when tampering is detected. It follows the emergence of paid services offering to remove the LED.

telegram · zaihuapd · Jul 8, 10:23

**Background**: Smart glasses like Meta's Ray-Ban series have a small LED that lights up when recording to alert people nearby. However, some users covered or removed the LED to record discreetly, leading to privacy complaints and even legal restrictions in certain venues.

<details><summary>References</summary>
<ul>
<li><a href="https://hothardware.com/news/meta-smart-glasses-led-tampering">Meta Smart Glasses Update Targets Privacy LED Tampering To ...</a></li>
<li><a href="https://www.digitaltrends.com/wearables/meta-will-disable-the-camera-on-ai-smart-glasses-if-you-tamper-or-cover-the-indicator-light/">Meta will disable the camera on AI smart glasses if you ...</a></li>
<li><a href="https://www.timesnownews.com/technology-science/meta-finally-acts-on-smart-glasses-privacy-but-only-after-backlash-article-154980372">Meta Finally Acts On Smart Glasses Privacy, But Only After ...</a></li>

</ul>
</details>

**Tags**: `#privacy`, `#smart glasses`, `#wearables`, `#Meta`, `#security update`

---

<a id="item-16"></a>
## [Researchers identify smartphone apps via EM signals with 99.07% accuracy](https://www.scmp.com/news/china/science/article/3359688/chinese-researchers-find-peephole-any-smartphone-its-leaked-radio-signal) ⭐️ 8.0/10

Researchers from People's Public Security University of China developed a non-contact forensic technique that identifies smartphone apps and user operations by analyzing leaked low-frequency electromagnetic signals during device operation, achieving up to 99.07% accuracy on devices like iPhone 15 Pro, Xiaomi 15 Pro, and OPPO Reno 13 for apps such as Douyin, WeChat video calls, and Baidu Maps. This work poses a significant privacy and security threat as it can silently monitor app usage without physical access or network connectivity, even when the device is encrypted or in airplane mode. It highlights the vulnerability of modern smartphones to electromagnetic side-channel attacks, which could be exploited for surveillance, forensics, or malicious purposes. The technique exploits the fact that different apps activate unique combinations of hardware components (e.g., processor, GPU, Wi-Fi module), producing distinct electromagnetic signatures. The researchers used machine learning to classify these signatures and tested on three smartphones across seven app categories, achieving the highest accuracy of 99.07%.

telegram · zaihuapd · Jul 8, 16:05

**Background**: Side-channel attacks exploit physical emissions from electronic devices, such as power consumption or electromagnetic radiation, to extract sensitive information without breaking cryptographic algorithms directly. Electromagnetic (EM) side-channel attacks are non-invasive and can be performed with a near-field probe and oscilloscope. Previous research has shown that EM emissions can reveal screen content or PIN inputs, but this work focuses on identifying running applications even when the device is offline or encrypted.

<details><summary>References</summary>
<ul>
<li><a href="https://www.mk.co.kr/cn/world/12093156">中国一所大学的研究团队开发出一种所谓“非接触式数字取证技术”,可通过...</a></li>
<li><a href="https://www.ckhq.net/html/6c1af61946e47994a7d682373d5f7757.html">中国科研团队研发非接触式智能手机应用识别技术，准确率达99.07%</a></li>

</ul>
</details>

**Tags**: `#side-channel attack`, `#mobile security`, `#electromagnetic leakage`, `#forensics`, `#privacy`

---

