---
layout: default
title: "Horizon Summary: 2026-07-13 (EN)"
date: 2026-07-13
lang: en
---

> From 19 items, 8 important content pieces were selected

---

1. [Samsung Health Threatens Data Deletion Over AI Training Opt-Out](#item-1) ⭐️ 9.0/10
2. [CoT is a scaling trap; latent reasoning emerges](#item-2) ⭐️ 9.0/10
3. [Building Apple Apps Without Xcode via LLM Agents](#item-3) ⭐️ 8.0/10
4. [Apple's SpeechAnalyzer API beats Whisper in speed, slightly less accurate](#item-4) ⭐️ 8.0/10
5. [Open data saved climate.gov after destruction](#item-5) ⭐️ 8.0/10
6. [Telegram's t.me Domain Suspended](#item-6) ⭐️ 8.0/10
7. [LAPD ends Flock contract over privacy concerns](#item-7) ⭐️ 8.0/10
8. [GPUHedge reduces serverless GPU cold start latency by 74%](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Samsung Health Threatens Data Deletion Over AI Training Opt-Out](https://neow.in/cWsyMTV3) ⭐️ 9.0/10

Samsung Health has updated its privacy policy to warn users that if they opt out of having their health data used for AI training, their data will be deleted. This change affects data categories including sleep, medications, medical records, and cycle tracking. This policy represents a significant shift in how companies handle user opt-outs, potentially forcing users to choose between participating in AI training or losing their health data. It raises major concerns about data ownership, user rights, and trust in health tracking platforms. The policy applies to four specific data categories: sleep, medications, medical records, and cycle tracking. Users who refuse AI training will have their data deleted rather than simply not used for training, which is a more aggressive approach than typical opt-out models.

hackernews · bundie · Jul 13, 20:01 · [Discussion](https://news.ycombinator.com/item?id=48897991)

**Background**: Samsung Health is a popular health tracking app that collects sensitive personal health data from users' Samsung devices. AI training on user data helps improve features but requires user consent. Previously, users could opt out without losing their data, but this policy changes that.

**Discussion**: Commenters expressed strong negative reactions, with one noting the absurdity of buying a device with features unusable without agreeing to data sharing. Another criticized Samsung Health as a 'shit app' with ads and data export issues. Some pointed out the irony that Samsung respects privacy by deleting data, but others questioned the lack of refunds for unusable features.

**Tags**: `#privacy`, `#AI training`, `#Samsung Health`, `#data deletion`, `#user rights`

---

<a id="item-2"></a>
## [CoT is a scaling trap; latent reasoning emerges](https://www.reddit.com/r/MachineLearning/comments/1uviru5/chain_of_thought_is_a_scaling_trap_the_next_wave/) ⭐️ 9.0/10

A Reddit post argues that Chain-of-Thought (CoT) reasoning in LLMs is a costly interface artifact, and advocates for latent reasoning methods like Coconut, HRM, RecursiveMAS, and BDH that perform computation in continuous latent space instead of text tokens. This critique challenges the dominant CoT paradigm, highlighting issues of cost, latency, and faithfulness, and points toward a new wave of latent reasoning that could improve efficiency at the cost of interpretability, which is critical for high-stakes deployments. The post highlights specific latent reasoning approaches: Coconut (continuous latent thought), RecursiveMAS (latent embedding passing among agents), and BDH (Baby Dragon Hatchling) which achieved 97.4% accuracy on Sudoku puzzles without CoT, but warns of a 'black box wall' and suggests an outer loop governance layer with DAG-based verification.

reddit · r/MachineLearning · /u/meowsterpieces · Jul 13, 17:50

**Background**: Chain-of-Thought prompting improves LLM performance by generating intermediate reasoning steps in natural language, but it increases latency, cost, and can produce unfaithful traces. Latent reasoning methods, such as Coconut and RecursiveMAS, instead keep intermediate computations in continuous hidden states, only decoding language at the end, which can reduce cost but reduces transparency.

<details><summary>References</summary>
<ul>
<li><a href="https://colinmcnamara.com/blog/understanding-baby-dragon-hatchling-bdh">Understanding Baby Dragon Hatchling ( BDH ): The... | Colin McNamara</a></li>
<li><a href="https://levysoft.medium.com/coconut-a-new-ai-reasoning-approach-without-linguistic-constraints-in-continuous-latent-space-b8429192346f">Coconut : A New AI Reasoning Approach Without Linguistic... | Medium</a></li>
<li><a href="https://github.com/RecursiveMAS/RecursiveMAS">GitHub - RecursiveMAS/RecursiveMAS: Offical Implementation ...</a></li>

</ul>
</details>

**Tags**: `#LLM Reasoning`, `#Chain of Thought`, `#Latent Reasoning`, `#Scaling`, `#AI Research`

---

<a id="item-3"></a>
## [Building Apple Apps Without Xcode via LLM Agents](https://scottwillsey.com/building-and-shipping-mac-and-ios-apps-without-ever-opening-xcode/) ⭐️ 8.0/10

A blog post by Scott Willsey demonstrates how to build, sign, and notarize Mac and iOS apps entirely using command-line tools and LLM agents like Claude, without ever opening Xcode. This approach showcases a new paradigm for Apple platform development, leveraging LLM agents to automate the entire build and distribution pipeline, potentially reducing reliance on Xcode and enabling more flexible CI/CD workflows. The workflow uses tools like 'xcrun', 'codesign', and 'altool' from the command line, and relies on LLM agents to generate scripts and commands. The author notes that the agent must run directly on a Mac, not in a sandbox, raising security concerns.

hackernews · speckx · Jul 13, 18:22 · [Discussion](https://news.ycombinator.com/item?id=48896665)

**Background**: Xcode is the official integrated development environment (IDE) for Apple platforms, providing a graphical interface for coding, building, and signing apps. Notarization is a process where Apple scans macOS apps for malware before distribution. LLM agents, such as Claude Code, are AI systems that can interpret natural language commands and execute actions on a developer's machine, which introduces new automation possibilities along with security risks.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution">Notarizing macOS software before distribution | Apple Developer Documentation</a></li>
<li><a href="https://symflower.com/en/company/blog/2025/using-llm-agents-for-software-development/">An introduction to LLM agents for software development</a></li>

</ul>
</details>

**Discussion**: Community sentiment is mixed: some commenters praise the approach, noting alternatives like xtool for Linux-based iOS development, while others express concern about granting LLM agents full system access, citing risks such as data exfiltration. One commenter referenced xAI's accidental upload of home directories as a cautionary example.

**Tags**: `#iOS`, `#macOS`, `#app development`, `#automation`, `#LLM`

---

<a id="item-4"></a>
## [Apple's SpeechAnalyzer API beats Whisper in speed, slightly less accurate](https://get-inscribe.com/blog/apple-speech-api-benchmark.html) ⭐️ 8.0/10

Apple introduced SpeechAnalyzer, a new speech-to-text API for iOS 26, replacing the older SFSpeechRecognizer. A benchmark shows it is substantially faster than OpenAI's Whisper, with only slightly lower accuracy. This API enables fast, on-device transcription, potentially reducing reliance on cloud-based services like Whisper for real-time applications. It could disrupt the market for paid apps that merely wrap Whisper, as Apple may integrate this into native tools. SpeechAnalyzer lacks a custom vocabulary feature that was present in SFSpeechRecognizer, which allowed developers to improve accuracy on specific terms. The benchmark tested against Whisper Large-V2, but newer models like Nvidia's Nemotron and Mistral's Voxtral reportedly outperform both.

hackernews · get-inscribe · Jul 13, 16:06 · [Discussion](https://news.ycombinator.com/item?id=48894752)

**Background**: Whisper is an open-source automatic speech recognition model by OpenAI, trained on 680,000 hours of multilingual data. It is widely used but considered slower than newer specialized models. Apple's SpeechAnalyzer is a proprietary, on-device API focused on privacy and performance, introduced at WWDC 2025.

<details><summary>References</summary>
<ul>
<li><a href="https://developer-mdn.apple.com/videos/play/wwdc2025/277/">Bring advanced speech -to-text to your app with... - Apple Developer</a></li>
<li><a href="https://www.argmaxinc.com/blog/apple-and-argmax">Apple SpeechAnalyzer and Argmax WhisperKit - Argmax</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Whisper">OpenAI Whisper</a></li>

</ul>
</details>

**Discussion**: Commenters noted that Whisper is not the state-of-the-art anymore, suggesting comparisons with Nvidia's Nemotron, Mistral's Voxtral, or Cohere Transcribe. Some shared positive experiences with SpeechAnalyzer for real-time use, while others predicted Apple's native implementation could hurt paid Whisper wrapper apps.

**Tags**: `#Apple`, `#speech recognition`, `#ASR`, `#benchmarking`, `#Whisper`

---

<a id="item-5"></a>
## [Open data saved climate.gov after destruction](https://werd.io/climate-gov-was-destroyed-open-data-saved-it/) ⭐️ 8.0/10

A blog post reports that climate.gov was destroyed, but open data initiatives such as IPFS preserved the data, ensuring it remains accessible. This highlights the importance of decentralized data preservation for government transparency and climate science, and sparks debate on data ownership and archiving. The preservation relied on IPFS, a peer-to-peer network that uses content addressing, and services like Pinata to pin files. The long-term sustainability of such efforts is unclear as they depend on donations.

hackernews · benwerd · Jul 13, 19:57 · [Discussion](https://news.ycombinator.com/item?id=48897945)

**Background**: IPFS (InterPlanetary File System) is a decentralized protocol for sharing files, using content-based addressing instead of location-based HTTP. It allows users to host and retrieve content from any node in the network, making it resilient to censorship or server failure. Pinata is a service that helps pin and store files on IPFS, ensuring they remain available.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/IPFS">IPFS</a></li>
<li><a href="https://grokipedia.com/page/Pinata_IPFS_service">Pinata (IPFS service)</a></li>
<li><a href="https://hackmd.io/@browsers-n-platforms/Hys8-cK7q">IPFS Demos - HackMD</a></li>

</ul>
</details>

**Discussion**: Comments show appreciation for saving the data, but raise concerns about ongoing funding and the need for dynamic content preservation. Some suggest making government publications public domain by default, and propose using IPFS as a primary distribution method for static government content.

**Tags**: `#open data`, `#climate data`, `#data preservation`, `#government transparency`, `#IPFS`

---

<a id="item-6"></a>
## [Telegram's t.me Domain Suspended](https://www.whois.com/whois/t.me) ⭐️ 8.0/10

Telegram's t.me domain has been suspended, with WHOIS records showing a serverHold status, indicating the suspension was enacted at the registry level rather than by the registrar GoDaddy. This disruption affects millions of Telegram users who rely on t.me links for channels, bots, and username-based communication, highlighting the platform's vulnerability to domain-level enforcement actions. The ICANN status codes serverHold and clientRenewProhibited were applied, meaning the .me registry rejected renewal requests and suspended the domain. This is often triggered by legal disputes or regulatory compliance issues.

hackernews · Tiberium · Jul 13, 19:52 · [Discussion](https://news.ycombinator.com/item?id=48897878)

**Background**: The t.me domain is a URL shortener owned by Telegram that redirects to user profiles, channels, and bots (e.g., t.me/username). It is critical for Telegram's ecosystem, allowing users to share links without exposing phone numbers. Domain registry-level suspension (serverHold) means the .me top-level domain operator took the action, often due to court orders or regulatory demands.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Telegram_(software)">Telegram (software) - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Community members speculated that the suspension is tied to ongoing legal investigations in Russia, France, and India. Some noted the irony of Telegram relying on GoDaddy, a registrar criticized for lack of transparency, though the action was at the registry level. Others pointed out the importance of using redirects to mitigate such risks.

**Tags**: `#domain`, `#telegram`, `#security`, `#DNS`, `#governance`

---

<a id="item-7"></a>
## [LAPD ends Flock contract over privacy concerns](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/) ⭐️ 8.0/10

The Los Angeles Police Department (LAPD) has allowed its contract with Flock Safety to expire, citing serious concerns over civil liberties and privacy. However, Flock's cameras remain operational, continuing to capture data that can be sold to other law enforcement agencies. This decision marks a significant step in acknowledging surveillance overreach, but it also reveals the difficulty of dismantling such systems. The contract expiration alone may not halt data collection, highlighting the need for stronger privacy regulations around third-party surveillance. Flock owns the cameras and poles, so even after the LAPD contract ends, the cameras keep recording and Flock can sell data to agencies like CHP, LASD, or FBI. The LAPD may still access the data through informal arrangements, undermining the contract's intent.

hackernews · forks · Jul 13, 15:11 · [Discussion](https://news.ycombinator.com/item?id=48893947)

**Background**: Flock Safety is a company that operates a network of automated license plate recognition (ALPR) cameras and video surveillance systems. Its cameras capture license plates and vehicle characteristics, creating a searchable database shared among subscribers. Law enforcement agencies often contract with Flock, but the company retains hardware ownership, enabling continuous data harvesting regardless of individual contracts.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Flock_Safety">Flock Safety - Wikipedia</a></li>
<li><a href="https://www.aclu.org/news/privacy-technology/flock-roundup">Flock’s Aggressive Expansions Go Far Beyond Simple Driver Surveillance | American Civil Liberties Union</a></li>
<li><a href="https://haveibeenflocked.com/">Have I Been Flocked ? – Search Flock ALPR Audit Logs</a></li>

</ul>
</details>

**Discussion**: Commenters noted Flock's business model is resilient to contract cancellations, as cameras remain and data can be sold elsewhere. Some argued that governments should be banned from buying data they cannot legally collect themselves. Others criticized LAPD's history of civil rights violations while making this privacy-focused decision.

**Tags**: `#surveillance`, `#privacy`, `#civil liberties`, `#LAPD`, `#Flock`

---

<a id="item-8"></a>
## [GPUHedge reduces serverless GPU cold start latency by 74%](https://www.reddit.com/r/MachineLearning/comments/1uvlb6h/gpuhedge_hedging_serverless_gpu_providers/) ⭐️ 8.0/10

GPUHedge is a new open-source tool that uses speculative execution to hedge across multiple serverless GPU providers, reducing p95 cold start latency from 117 seconds to 30 seconds in benchmarks. Cold start latency is a major pain point for serverless GPU inference, often causing requests to take over a minute. By hedging across providers, GPUHedge significantly improves tail latency and cost efficiency, making serverless GPU more viable for latency-sensitive AI workloads. In a 36-request evaluation with a RunPod to Cerebrium hedge launched after 10 seconds, p95 latency dropped from 116.6s to 29.4s, and no requests exceeded 60 seconds. The modeled active-compute cost per request also decreased from $0.0114 to $0.0083.

reddit · r/MachineLearning · /u/Putrid_Construction3 · Jul 13, 19:20

**Background**: Serverless GPU providers allow users to run AI models without managing infrastructure, but they suffer from cold start latency when models must be loaded from scratch. This latency can range from 40 to over 100 seconds for large models. GPUHedge addresses this by sending requests to a primary provider and conditionally launching a backup if the primary doesn't respond quickly, similar to speculative execution in databases.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Serverless_computing">Serverless computing - Wikipedia</a></li>
<li><a href="https://www.beam.cloud/blog/top-serverless-gpu-providers">The Top Serverless GPU Providers in 2025, Ranked by Cold Start</a></li>

</ul>
</details>

**Tags**: `#GPU`, `#serverless`, `#cold start`, `#hedging`, `#latency`

---