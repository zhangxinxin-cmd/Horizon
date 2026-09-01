# Horizon Daily - 2026-09-01

> From 37 items, 8 important content pieces were selected

---

1. [Google Removes MV2 Extensions, Including uBlock Origin, from Chrome Web Store](#item-1) ⭐️ 8.0/10
2. [Linux NAT implementer reflects on how NAT eroded the open internet](#item-2) ⭐️ 8.0/10
3. [Sliding-Window Attention Outperforms Linear Attention on Long-Context Reasoning](#item-3) ⭐️ 8.0/10
4. [GNNs Leak Future Edges; SynthFin-AML Enforces Causal Splits](#item-4) ⭐️ 8.0/10
5. [Claude Shared Chats Leak Sensitive Data via Search Engine Indexing](#item-5) ⭐️ 8.0/10
6. [OpenClaw Releases Landmark 2.0, Merging Over 16,000 Pull Requests](#item-6) ⭐️ 8.0/10
7. [EU Designates ChatGPT, Reddit, and Roblox as 'Very Large' Online Services Under DSA](#item-7) ⭐️ 8.0/10
8. [Xiaomi unveils Xuanjie O3 SoC plus two AI chips, first mobile chip with LPDDR6](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Google Removes MV2 Extensions, Including uBlock Origin, from Chrome Web Store](https://webiterate.dev/google-removed-extensions-ublock-origin-108/) ⭐️ 8.0/10

Google has removed Manifest V2 (MV2) extensions from the Chrome Web Store, including the popular ad blocker uBlock Origin. This completes the transition to Manifest V3, which the Chrome team first announced in 2020. uBlock Origin has over 10 million users, and its removal significantly affects ad blocking, privacy, and user control over browsing. This could push users toward alternative browsers like Firefox or toward less capable MV3-based ad blockers. Manifest V3 removes long-lived background pages and restricts remotely hosted code, limiting the techniques that powerful blockers like uBlock Origin rely on. A lighter version, uBlock Origin Lite, remains available, but enterprise MV2 support will be fully removed with Chrome 139 in July 2026.

hackernews · twapi · Aug 31, 21:10 · [Discussion](https://news.ycombinator.com/item?id=49514878)

**Background**: Manifest V3 is the latest version of the Chrome extensions platform, designed by Google to improve privacy, security, and performance. It replaces the older Manifest V2, which allowed extensions to use powerful APIs but also presented security risks. uBlock Origin is a free, open-source content blocker that gained millions of users for its low CPU and memory usage. Google began deprecating MV2 in 2020, and the removal from the Web Store is the latest step in that timeline.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline">Manifest V2 support timeline | Chrome for Developers</a></li>
<li><a href="https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3">Extensions / Manifest V3 | Chrome for Developers</a></li>
<li><a href="https://en.wikipedia.org/wiki/UBlock_Origin">uBlock Origin - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters express strong frustration with Google's move and see it as a safety and monopoly issue. Several users recommend switching to Firefox, noting that uBlock Origin works best there and that Firefox is 'really great these days.' The prevailing sentiment is distrust of Google's unilateral control over web browsing.

**Tags**: `#Chrome`, `#Manifest V3`, `#uBlock Origin`, `#Ad Blocking`, `#Browser Extensions`

---

<a id="item-2"></a>
## [Linux NAT implementer reflects on how NAT eroded the open internet](https://dreamstation.systems/personal/ntppost.html) ⭐️ 8.0/10

Rusty Russell, the implementer of the current NAT system in Linux, published a personal retrospective arguing that NAT's design eroded public endpoints and shaped client-server assumptions, contributing to internet centralization. The essay has sparked substantial discussion with 130 comments. This retrospective comes from a key implementer and offers rare historical insight into how a technical workaround for IPv4 scarcity shaped the internet's architecture and power dynamics. It resonates with ongoing debates about decentralization, self-hosting, and the difficulty of running servers in a NAT-dominated world. Russell explains that NAT avoided port reservation in favor of squeezing more connections into one IP address, but this made incoming traffic from a different address unroutable, eliminating public endpoints. Commenters add that NAT also trained users to see client-server as natural, though some defend NAT as a de facto firewall that protected insecure devices.

hackernews · robinpie · Aug 31, 02:23 · [Discussion](https://news.ycombinator.com/item?id=49504905)

**Background**: NAT (Network Address Translation) lets multiple devices on a private network share a single public IP address, helping to conserve the limited supply of IPv4 addresses. It became ubiquitous in home routers and mobile networks, hiding internal devices but also breaking the end-to-end connectivity that made running a public server simple. The internet was originally designed so any host could reach any other host directly; NAT introduced a one-way, client-server model by default.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Network_address_translation">Network address translation - Wikipedia</a></li>
<li><a href="https://www.geeksforgeeks.org/computer-networks/network-address-translation-nat/">Network Address Translation (NAT) - GeeksforGeeks</a></li>

</ul>
</details>

**Discussion**: Commenters largely agree that NAT played a role in the internet's centralization, though some call the idea of it being the 'original sin' an exaggeration. RustyRussell himself acknowledges the tradeoff, while others defend regular NAT as controllable and note that Carrier Grade NAT (CGNAT) is the more problematic variant. There is also a viewpoint that the designers' real mistake was applying physical-world security assumptions to cyberspace.

**Tags**: `#networking`, `#NAT`, `#internet-history`, `#architecture`, `#decentralization`

---

<a id="item-3"></a>
## [Sliding-Window Attention Outperforms Linear Attention on Long-Context Reasoning](https://www.reddit.com/r/MachineLearning/comments/1w3j1vw/slidingwindow_attention_beats_linear_on/) ⭐️ 8.0/10

A new arXiv preprint by Alexia Jolicoeur-Martineau and colleagues reports that sliding-window attention (SWA) with sinks achieves 2 to 10 times higher performance than linear attention variants on the Needle-in-a-Haystack and BABILong benchmarks. The authors recommend switching to SWA instead of post-training linear models. This finding challenges the prevailing research direction of replacing softmax attention with linear attention for long-context models. It suggests that a simple, existing baseline may already be more effective, potentially reshaping how labs allocate post-training compute for long-context reasoning. The comparison was conducted across multiple LLMs on various downstream tasks, with SWA requiring no post-training while maintaining low memory and fast inference. The paper concedes that linear attention may show promise but likely needs to be trained from scratch or extensively post-trained to match SWA.

reddit · r/MachineLearning · /u/Justgototheeffinmoon · Aug 31, 16:35

**Background**: Standard softmax attention has quadratic complexity with sequence length, motivating research into linear attention variants that reduce this cost. Sliding-window attention with sinks is a simpler existing fix: it limits attention to a fixed window and retains early tokens as attention sinks, trading global context for efficiency. BABILong and Needle-in-a-Haystack are long-context reasoning benchmarks that test a model's ability to retrieve and reason over facts buried in long documents.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2608.28444v1">Sliding - window beats linear attention</a></li>
<li><a href="https://www.alphaxiv.org/abs/2608.28444">Sliding - window beats linear attention | alphaXiv</a></li>
<li><a href="https://runinfra.ai/glossary/attention-sinks">Attention sinks : what it is and why it moves cost | RunInfra</a></li>

</ul>
</details>

**Tags**: `#sliding-window attention`, `#linear attention`, `#long-context`, `#reasoning`, `#LLM`

---

<a id="item-4"></a>
## [GNNs Leak Future Edges; SynthFin-AML Enforces Causal Splits](https://www.reddit.com/r/MachineLearning/comments/1w3imxy/your_gnn_is_probably_just_an_overcomplicated_mlp/) ⭐️ 8.0/10

The authors show that standard GNN training on static snapshots of dynamic graphs leaks future edges, letting models 'cheat.' They release SynthFin-AML v10.0 (100k nodes, 1.2M edges), a synthetic benchmark with strict 3-snapshot temporal splits and matched distributions, and report LightGBM (PR-AUC 0.848) vs GraphSAGE (0.881). This exposes a common evaluation flaw in graph machine learning: many reported results may be inflated by temporal leakage rather than genuine model quality. SynthFin-AML provides a stricter evaluation standard for dynamic graphs, which could improve rigor in AML and other temporal graph applications. The benchmark enforces a 3-snapshot split (train edges ≤ Day 7, val ≤ Day 8, test ≤ Day 10) and makes fraud and retail transaction amounts share the same lognormal distribution (μ=8.517, σ=0.8) to remove tabular leakage. The authors engineered 11 point-in-time graph features for the tree model; the benchmark has been submitted upstream to PyTorch Geometric.

reddit · r/MachineLearning · /u/Glabmayt2075 · Aug 31, 16:21

**Background**: Graph neural networks (GNNs) learn from relational data by passing messages along edges; when graphs evolve over time, models must respect causality. Temporal leakage occurs when a GNN sees edges or features from the future during training, often because random splits of a static snapshot ignore timestamps. Anti-money laundering (AML) networks are a classic dynamic-graph domain, and synthetic datasets like SynthAML have been used for benchmarking. The 3-snapshot architecture physically separates train/validation/test temporal windows to bound the model's receptive field to true causal horizons.

<details><summary>References</summary>
<ul>
<li><a href="https://kumo.ai/pyg/concepts/data-leakage/">Data Leakage in Graph ML: When Future Information Contaminates Training | Kumo.ai | Kumo.ai</a></li>
<li><a href="https://github.com/valiyevoktay-cmd/synthfin-aml-">GitHub - valiyevoktay-cmd/synthfin-aml-: A graph-native Anti ...</a></li>

</ul>
</details>

**Tags**: `#GNN`, `#Temporal Leakage`, `#Dynamic Graphs`, `#Benchmark`, `#Anti-Money Laundering`

---

<a id="item-5"></a>
## [Claude Shared Chats Leak Sensitive Data via Search Engine Indexing](https://t.me/zaihuapd/43511) ⭐️ 8.0/10

Claude's shared conversation links are being indexed by Google and Bing because the pages lack a 'noindex' meta tag. As a result, sensitive user data such as API keys, crypto wallet addresses, resumes, and private records are publicly searchable. Anthropic has not yet fixed the issue, and users are being urged to delete shared chats manually. This is a serious privacy vulnerability that affects any Claude user who has used the share feature, potentially exposing confidential information to anyone on the internet. It echoes a similar ChatGPT incident from about a year ago and underscores the importance of privacy safeguards in AI chat-sharing features. The shared pages do not include the robots 'noindex' meta tag, which is a standard HTML directive used to block search engine indexing. Reports indicate hundreds of Claude shared chats have surfaced in search results, containing material such as lawyers' consultation records, internal company project documents, and social security numbers, and the vulnerability remains unpatched.

telegram · zaihuapd · Aug 31, 03:22

**Background**: Claude is an AI assistant developed by Anthropic that lets users generate shareable links to conversations. A 'noindex' meta tag is an HTML directive that tells search engine crawlers such as Google not to index a page. Without this tag, search engines may crawl and display the page content to anyone using relevant search terms. A similar privacy issue affected ChatGPT around a year ago and was quickly fixed.

<details><summary>References</summary>
<ul>
<li><a href="https://cybersecuritynews.com/claude-ai-shared-chats/">Claude AI Shared Chats Reportedly Exposed in Google Search ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Noindex">noindex - Wikipedia</a></li>
<li><a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing">Block Search Indexing with noindex | Google Search Central</a></li>

</ul>
</details>

**Tags**: `#security`, `#privacy`, `#Claude`, `#vulnerability`, `#AI`

---

<a id="item-6"></a>
## [OpenClaw Releases Landmark 2.0, Merging Over 16,000 Pull Requests](https://openclaw.ai/blog/openclaw-2-accidentally) ⭐️ 8.0/10

On August 30, OpenClaw released version 2.0, its largest update to date, incorporating over 16,000 pull requests from 933 contributors, including 569 first-time participants. The release overhauls installation, messaging, memory, skills, models, browser, plugins, and security, and adds shared cloud sessions for collaboration. This marks a major milestone for OpenClaw, representing roughly half of all pull requests ever made to the project. The addition of collaborative cloud sessions and a rebuilt browser experience broadens the tool's appeal for teams and everyday users. The team paused releases for nearly seven weeks to prepare the update. Installation was simplified, and the browser-side experience was rebuilt from the ground up.

telegram · zaihuapd · Aug 31, 04:38

**Background**: OpenClaw is a free and open-source autonomous AI agent that executes tasks via large language models (LLMs), using messaging platforms as its primary user interface. It runs locally and works across WhatsApp, Telegram, Discord, and 30+ other platforms, supporting models like Claude, GPT, or local models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenClaw">OpenClaw</a></li>
<li><a href="https://openclaw.ai/">OpenClaw — Open -Source AI Assistant</a></li>

</ul>
</details>

**Tags**: `#OpenClaw`, `#release`, `#open-source`, `#software-update`, `#collaboration`

---

<a id="item-7"></a>
## [EU Designates ChatGPT, Reddit, and Roblox as 'Very Large' Online Services Under DSA](https://www.euronews.com/next/2026/08/31/eu-places-chatgpt-reddit-and-roblox-under-strictest-digital-safety-rules) ⭐️ 8.0/10

On August 31, 2026, the European Commission designated ChatGPT as a Very Large Online Search Engine and Reddit and Roblox as Very Large Online Platforms under the Digital Services Act, because each exceeds 45 million monthly active users in the EU. They now face stricter safety, auditing, and data-sharing obligations. This is the first time an AI service has been classified as a Very Large Online Search Engine under the DSA, setting a precedent for how generative AI tools are regulated in Europe. The designations impose the DSA's most stringent requirements on three services that collectively shape online speech, content discovery, and social interaction for millions of EU users. The services have a four-month transition period to comply, during which they must conduct annual systemic risk assessments, commission independent audits, and share data with regulators and vetted researchers. Priorities include illegal content, protection of minors, and risks to users' physical and mental well-being.

telegram · zaihuapd · Aug 31, 14:39

**Background**: The Digital Services Act (DSA) is an EU regulation that applies a tiered set of obligations to online intermediaries: basic rules for all services, enhanced duties for platforms, and the strictest requirements for Very Large Online Platforms (VLOPs) and Very Large Online Search Engines (VLOSEs) with over 45 million monthly active users in the EU. The designation process is meant to move large platforms from voluntary self-regulation to binding, audited compliance. These additions bring ChatGPT, Reddit, and Roblox into the same category as previously designated services such as major social networks and marketplaces.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Digital_Services_Act">Digital Services Act - Wikipedia</a></li>
<li><a href="https://www.explainx.ai/blog/eu-dsa-designation-chatgpt-reddit-roblox-august-2026">EU DSA: ChatGPT Named a Very Large Search Engine (2026 ...</a></li>
<li><a href="https://digital-strategy.ec.europa.eu/en/policies/list-designated-vlops-and-vloses">Supervision of the designated very large online platforms and ...</a></li>

</ul>
</details>

**Tags**: `#EU regulation`, `#Digital Services Act`, `#AI policy`, `#online platforms`

---

<a id="item-8"></a>
## [Xiaomi unveils Xuanjie O3 SoC plus two AI chips, first mobile chip with LPDDR6](https://t.me/zaihuapd/43524) ⭐️ 8.0/10

Xiaomi announced three new Xuanjie chips: the AI flagship SoC Xuanjie O3, the 1.22 TB/s AI accelerator Xuanjie O100, and the Xuanjie D100, China's first 3nm automotive AI chip. All three have completed tape-out verification, and the O3 will first debut in the Xiaomi 18 Fold. This signals Xiaomi's deepening investment in self-developed silicon across mobile, vehicle, and home ecosystems, intensifying competition with other custom SoC makers. The O3's LPDDR6 support, with domestic partner CXMT, also highlights China's progress in memory supply chain independence. The Xuanjie O3 has a ten-core all-big-core CPU whose multi-core score broke 15,000 for the first time, and a 16-core Mali-G2-Ultra NX GPU delivering 85% higher performance and 64% lower power draw than the Xuanjie O1. It is claimed to be the world's first mobile processor supporting LPDDR6, scoring 5.22 million on AnTuTu.

telegram · zaihuapd · Aug 31, 15:15

**Background**: Xiaomi re-entered the flagship mobile SoC arena with the Xuanjie O1 roughly 459 days before the O3 launch. The Xuanjie series is positioned across end-side AI, covering mobile, vehicle, and home scenarios. LPDDR6 is the low-power DRAM standard published by JEDEC in July 2025, offering data rates from 10,667 to 14,400 Mt/s, and CXMT has begun mass-producing LPDDR6 memory.

<details><summary>References</summary>
<ul>
<li><a href="https://pandaily.com/xiaomi-unveils-xuanjie-o3-first-flagship-soc-break-5-million-aug2026">Xiaomi Unveils Xuanjie O 3 , First Flagship SoC to Break... - Pandaily</a></li>
<li><a href="https://news.metal.com/newscontent/104078070-xiaomi-xuanjie-o3-officially-announced-support-for-lpddr6-changxin-memory-as-domestic-memory-partner">On August 24, Xiaomi officially released the Xuanjie O 3 chip .</a></li>
<li><a href="https://www.techpowerup.com/352114/cxmt-officially-starts-mass-production-of-lpddr6-memory">CXMT Officially Starts Mass Production of LPDDR 6 Memory</a></li>

</ul>
</details>

**Tags**: `#Xiaomi`, `#chips`, `#AI`, `#SoC`, `#semiconductors`

---

