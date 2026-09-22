# Horizon Daily - 2026-09-22

> From 39 items, 10 important content pieces were selected

---

1. [OpenAI Unveils GPT-6 Sol and Luna Model Family](#item-1) ⭐️ 9.0/10
2. [Anthropic releases Claude Opus 5.5 with cheaper API pricing](#item-2) ⭐️ 9.0/10
3. [Pentagon: AI Overreliance Contributed to Deadly Strike on Iranian School](#item-3) ⭐️ 9.0/10
4. [Anthropic and OpenAI launch Claude Opus 5.5, GPT-6 Sol and Luna amid price war](#item-4) ⭐️ 9.0/10
5. [vLLM v0.30.0 ships 762 commits, DeepSeek-V4.1-Flash and a GPU weight-cache daemon](#item-5) ⭐️ 8.0/10
6. [Hackers claim they stole data on all FBI employees](#item-6) ⭐️ 8.0/10
7. [GrapheneOS May Ship Preinstalled on Devices by 2027](#item-7) ⭐️ 8.0/10
8. [25 Fields Medalists Warn AI May Be Misaligned With Math Research Goals](#item-8) ⭐️ 8.0/10
9. [DeepSeek and Tsinghua release DSec sandbox platform technical report](#item-9) ⭐️ 8.0/10
10. [DeepSeek to Brief UN Security Council on AI Risks This Week](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI Unveils GPT-6 Sol and Luna Model Family](https://openai.com/index/introducing-gpt-6-sol-and-luna/) ⭐️ 9.0/10

OpenAI announced GPT-6 Sol and Luna, a new flagship model family, with the Luna tier priced at roughly half the cost of the previous GPT-5.6 Luna. The announcement quickly became one of the most-discussed items on Hacker News at 1076 points and 561 comments. A new frontier model family from OpenAI reshapes the economics of AI development: halving the price of the Luna tier directly lowers the cost of running agents and long-context workloads at scale. It also resets competitive comparisons across coding-agent subscriptions and API pricing, affecting everyone from indie developers to platform teams choosing a default model. Sol appears to be positioned as the higher-capability tier in the family (community members reference a "GPT-6 Sol max" variant), while Luna is the cheaper, higher-throughput option. The release lands in a market where token prices vary widely by tier, with output tokens typically costing several times more than input tokens, so a halved Luna price has an outsized effect on sustained agent workloads.

hackernews · OfficialTurkey · Sep 22, 18:00 · [Discussion](https://news.ycombinator.com/item?id=49805509)

**Background**: OpenAI has been iterating on the GPT series with numbered generations, and each new flagship release tends to become a default reference point for developers building on LLM APIs. Pricing is normally charged per million tokens, split into input and output rates, which means a tier's cost determines whether agentic workflows are economically viable. Coding agents such as Anthropic's Claude Code and OpenAI's Codex are sold as subscription plans (for example "20x" tiers) whose usage limits are tied back to these per-token costs, which is why a price change at the model layer shows up immediately in plan comparisons. Hacker News is a widely-read tech forum where releases like this get scrutinized by practitioners within hours.

<details><summary>References</summary>
<ul>
<li><a href="https://vorplabs.com/coding-agents/usage-limits">Coding-Agent Usage Limits Compared: Claude Code, Cursor, Copilot, Codex ...</a></li>
<li><a href="https://dev.to/sam_novak_574b07811e18495/ai-coding-agent-usage-limits-what-actually-resets-and-when-7h4">AI coding agent usage limits: what actually resets, and when</a></li>
<li><a href="https://benchlm.ai/blog/posts/llm-token-pricing">How LLM Token Pricing Works: A Complete Guide to API Costs in ...</a></li>

</ul>
</details>

**Discussion**: Commenters focused on the price cut, with simonw calling Luna being half the price of GPT-5.6 Luna "a really big deal" and sharing side-by-side pelican renderings for GPT-6 Luna, Sol, and Astra. jeffnash compared Claude Code 20x against Codex Pro 20x, concluding Codex wins largely on usage limits, reset behavior, and essentially unmetered ChatGPT usage. m_fayer expressed attachment to the previous 5.6 Sol as a comfortable collaborator and worried its successor may feel less natural despite being technically better, while leokennis argued that from an average user's perspective ChatGPT Plus already feels near-limitless and "just works".

**Tags**: `#AI`, `#LLM`, `#OpenAI`, `#model-release`, `#developer-tools`

---

<a id="item-2"></a>
## [Anthropic releases Claude Opus 5.5 with cheaper API pricing](https://www.anthropic.com/claude-opus-5-5) ⭐️ 9.0/10

Anthropic has released Claude Opus 5.5, its new flagship model and, as the company notes, its first release since it publicly called for pacing the frontier. The update emphasizes more natural communication and comes with across-the-board API price cuts: input tokens drop from $5 to $4, output tokens from $25 to $20, cache reads from $0.50 to $0.20 and cache writes from $6.25 to $5 per million tokens. Opus 5 was reportedly the highest-spend model on OpenRouter, so cheaper Opus-tier tokens directly lower the cost of running long agentic and coding sessions for developers and enterprises. The release also intensifies the debate over frontier AI pacing, since a company that just asked for restraint shipped a more capable model at a lower price within days. Anthropic frames the improved writing style as both a usability and a safety benefit, arguing that clearer, more front-loaded answers make the model's work easier to follow and verify, and early testers reportedly said "it writes the way I do." The company also positions the model as a better long-session work partner, while competitors such as DeepSeek offer far cheaper alternatives that some users say are sufficient.

hackernews · km144 · Sep 22, 16:29 · [Discussion](https://news.ycombinator.com/item?id=49803892)

**Background**: Anthropic is an AI safety and research company founded in 2021 by former OpenAI staff, and Claude is its flagship family of large language models, sold in tiers where Haiku is the smallest, Sonnet the mid-size and Opus the most capable. "Frontier" models are the most advanced general-purpose AI systems available at any given time, and building them is extremely expensive, which is why API pricing per million tokens is closely watched. Prompt caching — reading back previously processed context — is a key cost lever for agent workloads, which is why the cache-read and cache-write price cuts matter as much as the headline token prices.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/">Home \ Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_Opus">Claude Opus</a></li>
<li><a href="https://en.wikipedia.org/wiki/Frontier_AI">Frontier AI</a></li>

</ul>
</details>

**Discussion**: The Hacker News thread (about 1,112 points and 770 comments) is dominated by two reactions: relief at the price cuts, with users tabulating the old versus new per-million-token rates, and skepticism toward Anthropic's safety framing, with one top comment noting that the release's opening line invokes frontier pacing while the rest of the post shows specific numbers proving the opposite. Others say they are content with cheaper rivals like DeepSeek v4.1, and one commenter shared the standard "pelicans" rendering test across the model's low, medium, high and xhigh thinking levels.

**Tags**: `#AI`, `#LLM`, `#Anthropic`, `#Claude Opus`, `#API Pricing`

---

<a id="item-3"></a>
## [Pentagon: AI Overreliance Contributed to Deadly Strike on Iranian School](https://www.bloomberg.com/graphics/2026-iran-school-attack/) ⭐️ 9.0/10

The Pentagon reportedly concluded that overreliance on AI — specifically Palantir's Maven targeting system — contributed to a missile strike on a school in Minab, Iran, after outdated data catalogued the site as an Islamic Revolutionary Guard Corps facility. The report found the U.S. "failed in its obligation to do everything feasible to verify" that the school was a military objective, and that the failure "went beyond mere negligence." This is one of the first official findings directly linking an AI decision-support system to civilian deaths, sharpening the debate over who is accountable when algorithms shape lethal targeting and whether "human-in-the-loop" review is anything more than a formality. It could affect military AI procurement, targeting doctrine, and the legal exposure of vendors such as Palantir and of the governments that deploy their tools. The details point to a data problem rather than an autonomy problem: the Minab site was catalogued with outdated information and fed into Maven alongside other candidates, emerging as a recommended target, while officials said some users wrongly expected the system to flag stale records or contradictions. The report also states the United States "directed the strikes at the building of the school while being aware of a substantial risk of striking a civilian object and acting recklessly."

hackernews · devonnull · Sep 22, 19:03 · [Discussion](https://news.ycombinator.com/item?id=49806430)

**Background**: Maven (Project Maven) is a U.S. Department of Defense program, with Palantir as a key contractor, that uses machine learning to help analysts sift through vast volumes of surveillance imagery and intelligence and to generate target recommendations. In such AI decision-support systems, a human is supposed to make the final call — the "human-in-the-loop" principle — but critics argue that when an algorithm narrows the options, human review can become a rubber stamp. Lethal autonomous weapons systems (LAWS), which can select and engage targets without human control, are the subject of ongoing UN debate and calls for prohibition under international law.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lethal_autonomous_weapon">Lethal autonomous weapon - Wikipedia</a></li>
<li><a href="https://mwi.westpoint.edu/targeting-at-machine-speed-the-capabilities-and-limits-of-artificial-intelligence/">Targeting at Machine Speed: The Capabilities—and Limits—of ...</a></li>
<li><a href="https://opiniojuris.org/2026/04/13/beyond-anthropics-red-line-human-in-the-loop-and-the-illusion-of-legitimacy-in-ai-decision-support-systems/">Beyond Anthropic’s Red Line: Human - in - the - Loop and... - Opinio Juris</a></li>

</ul>
</details>

**Discussion**: Commenters largely doubted that "AI" was the real culprit, with one reading of the report arguing the underlying failure was reckless human decision-making, and another observing that people who don't grasp AI's limitations expected it to behave like "the ultimate analyst." The dominant view was that delegating decision authority to an algorithm cannot dissolve human responsibility — "an AI can't be tried in a court" — and several participants asked why neither the Pentagon nor Palantir has accepted accountability, comparing the response to a botched B2B SaaS rollout.

**Tags**: `#AI ethics`, `#autonomous weapons`, `#military AI`, `#accountability`, `#AI safety`

---

<a id="item-4"></a>
## [Anthropic and OpenAI launch Claude Opus 5.5, GPT-6 Sol and Luna amid price war](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/) ⭐️ 9.0/10

On the same day, Anthropic released Claude Opus 5.5 and roughly an hour later OpenAI released two new frontier models, GPT-6 Sol and GPT-6 Luna. GPT-6 Luna is priced at just $0.10 per million input tokens and $0.50 per million output tokens — half the price of the already-cheap GPT-5.6 Luna — while GPT-6 Sol lands at $2/$10 and Claude Opus 5.5 also received a cut to $4/$20. The simultaneous releases plus steep price cuts mark an escalating price war among frontier labs, meaning developers can get substantially more capable models at a fraction of last generation's cost. It also squeezes rivals such as Grok 4.7 and Xiaomi's MiMo v2.6, which the day before had positioned themselves on price, and it makes previously premium tiers like GPT-5.6 Terra effectively obsolete. Simon Willison notes that GPT-5.6 has a scheduled 25% price increase coming in November, so GPT-6 is effectively half the price of those models' promotional pricing, and that GPT-6 Terra now costs the same as GPT-6 Sol. He also points out GPT-6 Luna is one of the cheapest models OpenAI has ever shipped, undercut only by the much weaker GPT-4.1 Nano ($0.10/$0.40) and GPT-5 Nano ($0.05/$0.40), and cached input for Luna drops to just $0.01 per million tokens.

rss · Simon Willison · Sep 22, 23:46

**Background**: Simon Willison is a widely followed developer and commentator whose blog is a common first stop for hands-on impressions of new LLMs. He is known for a deliberately informal benchmark: asking each new model to generate an SVG of a pelican riding a bicycle, which he uses to compare visual output quality across releases and thinking-effort settings. Frontier model pricing is typically quoted per million tokens split into input, cached input, and output, with cached input being much cheaper because repeated prompt prefixes don't need to be reprocessed. This release follows a rapid cadence — Grok 4.7 and Xiaomi's MiMo v2.6 Flash/Pro shipped just the day before — reflecting how crowded the top tier of the market has become.

<details><summary>References</summary>
<ul>
<li><a href="https://simonwillison.net/2025/Jun/6/six-months-in-llms/">The last six months in LLMs, illustrated by pelicans on bicycles</a></li>
<li><a href="https://www.aimagicx.com/blog/ai-pricing-war-llm-cost-collapse-business-strategy-2026">The 2026 AI Price War Explained: How to Rebuild Your AI Stack When Everything Just Got 10x Cheaper | AI Magicx Blog | AI Magicx</a></li>
<li><a href="https://mimo.xiaomi.com/mimo-v2-6">MiMo-V2.6 | Xiaomi</a></li>

</ul>
</details>

**Tags**: `#AI models`, `#LLM`, `#OpenAI`, `#Anthropic`, `#pricing`

---

<a id="item-5"></a>
## [vLLM v0.30.0 ships 762 commits, DeepSeek-V4.1-Flash and a GPU weight-cache daemon](https://github.com/vllm-project/vllm/releases/tag/v0.30.0) ⭐️ 8.0/10

vLLM v0.30.0 was released with 762 commits from 315 contributors (104 of them first-time), adding support for new models including DeepSeek-V4.1-Flash (with the entire KV cache stored in MXFP8 through the FlashMLA V4.1 record on SM100), GLM-5.3-Flash, DeepSeek-V4-Flash-Vision-Exp, K2-Horizon, Cohere Compass and Bailing V3 VL, plus a DeepSeek-V4 CPU backend with AVX512/AMX kernels. The release also introduces a persistent per-GPU weight-cache daemon that holds post-quantized, TP-sharded weights in GPU memory so engines can restart by mapping them over CUDA IPC with `--load-format ipc_cache` instead of reloading from disk. vLLM is one of the most widely deployed open-source LLM inference and serving engines, so a release of this size immediately affects a large number of production deployments. The fast-start weight cache directly cuts engine restart time—critical for autoscaling, elastic serving and frequent model swaps—while the new model support and Kimi K3/Qwen3.8-Flash-Next kernel optimizations translate into measurable throughput gains for users serving those architectures. The weight-cache daemon now also covers FP4 checkpoints and multi-node tensor parallelism, and the release adds Gumbel-max watermarking with per-request opt-out that is compatible with speculative decoding via a dual-key scheme. Many optimizations are architecture- or model-specific—for example the DeepSeek-V4 CPU backend relies on AVX512/AMX sparse MLA kernels, FP8 fits on a single GB300 only after removing torch.compile from the NVIDIA implementation, and several CUDA-graph and sparse-MLA features target SM100/Hopper-class GPUs.

github · khluu · Sep 22, 05:20

**Background**: vLLM is an open-source high-throughput engine for serving large language models, best known for PagedAttention, which manages the KV cache in fixed-size blocks to avoid memory fragmentation. MLA (Multi-Latent Attention) is DeepSeek's attention variant that compresses the KV cache into a latent representation; FlashMLA is the hand-optimized decoding kernel for it on modern NVIDIA GPUs. MXFP8 and NVFP4 are low-precision "microscaling" formats in which a small block of values shares one exponent, cutting memory and bandwidth at some accuracy cost, which is why storing an entire KV cache in MXFP8 is a notable step.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/MXFP8">MXFP8</a></li>
<li><a href="https://www.deepep.org/en/flashmla">FlashMLA</a></li>
<li><a href="https://newsletter.semianalysis.com/p/engrams-embedding-entendre-codesign">Engrams Embedding Entendre: Codesign for Efficient DRAM/SSD Offloading</a></li>

</ul>
</details>

**Tags**: `#vllm`, `#llm-inference`, `#model-serving`, `#release`, `#gpu-optimization`

---

<a id="item-6"></a>
## [Hackers claim they stole data on all FBI employees](https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees/) ⭐️ 8.0/10

A hacking group told 404 Media that it had breached the FBI and obtained data covering all FBI employees, claiming in the article, "we hacked the FBI." Asked whether it would extort the bureau, a group representative said, "what we plan to do is not something I'd call extortion, maybe coercion," adding that the campaign is "not financially motivated." If the claim is verified, it would be one of the most sensitive breaches of U.S. federal law-enforcement personnel data ever, potentially exposing the identities of agents and employees and complicating undercover and security work. It also lands amid growing evidence that attackers are targeting centralized corporate and government databases rather than individual victims, eroding confidence that any large data store can be secured. The claim is not independently confirmed, and the group did not publicly specify the size, format, or intended release date of the data; its stated motive of "coercion" rather than profit is unusual for financially driven extortion crews. The discussion references ShinyHunters, a group known for high-volume data-theft and extortion campaigns against SaaS and cloud customers.

hackernews · spenvo · Sep 22, 17:46 · [Discussion](https://news.ycombinator.com/item?id=49805278)

**Background**: ShinyHunters is a name used by a prolific data-theft and extortion crew that has repeatedly claimed breaches of cloud and SaaS platforms, often threatening to leak stolen records unless paid. The U.S. government has suffered major personnel-data breaches before: the 2015 Office of Personnel Management (OPM) hack exposed roughly 22.1 million records of federal employees and applicants, an event commenters cite as precedent for assuming such data is already in the hands of state actors. Claims like this are typically followed by verification efforts, because breach announcements are sometimes inflated or fabricated to gain leverage.

**Discussion**: Commenters reacted with a mix of fatalism and dark humor, with one arguing that at this point "no one seems capable of keeping a large database safe" and pointing to the 2015 OPM breach as proof that such data is already compromised at scale. Others mocked the group's stated non-financial motive—joking that they should demand absurd public stunts instead of money—and criticized the erosion of government technical expertise, while one invoked Battlestar Galactica's deliberately unnetworked warship as the only real defense.

**Tags**: `#cybersecurity`, `#data breach`, `#FBI`, `#privacy`, `#hacking`

---

<a id="item-7"></a>
## [GrapheneOS May Ship Preinstalled on Devices by 2027](https://grapheneos.social/@GrapheneOS/117299954135808210) ⭐️ 8.0/10

The GrapheneOS project stated on its official social account that there is a high chance devices will be sold with GrapheneOS preinstalled in 2027, following its earlier announcement that it plans to certify selected Motorola devices. According to community discussion, the planned hardware appears tied to Motorola's upcoming Signature line, with the preinstalled units possibly distributed by a third-party company rather than Motorola itself. This would mark the first time GrapheneOS moves beyond a do-it-yourself install on Google Pixel hardware to being available out of the box, potentially making a privacy-hardened Android an option for mainstream buyers. It signals a shift from a niche enthusiast project toward a commercially distributed product, which could pressure other OEMs on privacy and security defaults. GrapheneOS is currently only officially supported on Google Pixel devices released between 2021 and 2025 due to strict hardware security requirements, and it has roughly 400,000 active users as of April 2026. The preinstalled devices are reportedly not coming directly from Motorola's own store but through a third party provided with hardware by Motorola, and the planned models can still be flashed manually with GrapheneOS just like current Pixels.

hackernews · Cider9986 · Sep 22, 17:12 · [Discussion](https://news.ycombinator.com/item?id=49804683)

**Background**: GrapheneOS is a free and open-source mobile operating system built on the Android Open Source Project (AOSP), first released in 2016 and focused on security and privacy through defense-in-depth hardening, attack surface reduction, and improved app sandboxing while retaining Android app compatibility. It is developed by the nonprofit GrapheneOS Foundation, founded in Toronto in 2023 with backing from donors such as Vitalik Buterin and Jack Dorsey. Because its security model depends on specific hardware features, official support has been limited to recent Pixel devices, and the 2026 announcement of Motorola certification is its first expansion to another vendor.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GrapheneOS">GrapheneOS</a></li>
<li><a href="https://grapheneos.org/">GrapheneOS : the private and secure mobile OS</a></li>

</ul>
</details>

**Discussion**: Commenters largely welcomed the news but raised practical concerns, especially whether banking apps will work, since some national credit unions lock their apps against GrapheneOS. Others clarified that this is about preinstallation rather than new hardware support, that the devices likely come via a third party rather than Motorola's own store, and that the upcoming Motorola Signature is competitive on hardware and pricing against the Pixel 11 Pro XL.

**Tags**: `#GrapheneOS`, `#privacy`, `#Android`, `#mobile OS`, `#preinstalled`

---

<a id="item-8"></a>
## [25 Fields Medalists Warn AI May Be Misaligned With Math Research Goals](https://t.me/zaihuapd/43973) ⭐️ 8.0/10

A joint statement signed by 25 Fields medalists, including Terence Tao, warned that the rapid use of AI to solve mathematical problems could cause AI development goals to become "severely misaligned" with the goals of mathematical research. The signatories acknowledge that large language models have become dramatically better at solving major mathematical problems in recent years, but argue that treating math problem-solving as a benchmark for AI capability may harm mathematics research and the academic ecosystem. This is a rare collective intervention by the most decorated figures in mathematics, and it directly challenges the increasingly popular practice of using math problem-solving as a headline benchmark for AI progress. It could influence how AI labs, journals, funders and universities evaluate and credit machine-generated mathematical results, and it pushes the AI community to ask what kind of mathematical output is actually valuable. The statement's stated concerns are concrete: mass AI-generated output could squeeze the time available for verification, communication and citation of prior work, and could raise problems around authorship and plagiarism. It also explicitly leaves room for optimism, saying AI may improve the efficiency of mathematical research and that the outcome depends on how people choose to use the technology.

telegram · zaihuapd · Sep 22, 03:00

**Background**: The Fields Medal is awarded every four years to at most four mathematicians, usually under the age of 40, and is widely described as the Nobel Prize of mathematics; Terence Tao received it in 2006, which is why a statement carrying 25 such laureates is unusually heavyweight. In AI, "misalignment" describes a system pursuing objectives that differ from the goals its designers or users actually intended, and here the concern is not existential risk but a research-ecosystem drift: benchmarks that reward fast answers rather than conceptual understanding and new insight. Recent advances in large language models on hard mathematical problems have made math one of the most visible yardsticks of AI progress, which is exactly the trend the signatories are reacting to.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_misalignment">AI misalignment</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_alignment">AI alignment - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI`, `#mathematics`, `#research ethics`, `#academic publishing`, `#LLM`

---

<a id="item-9"></a>
## [DeepSeek and Tsinghua release DSec sandbox platform technical report](https://arxiv.org/abs/2609.22978) ⭐️ 8.0/10

DeepSeek-AI and Tsinghua University jointly published a technical report on DSec (DeepSeek Elastic Compute), a production sandbox platform that serves roughly 3 million sandbox instances per day. A single production unit spans about 160 nodes, sustains peak concurrency above 380,000 sandboxes, and creates more than 5,000 sandboxes per second. Agent training and evaluation increasingly depend on running untrusted code and interacting with real software environments at massive scale, and DSec shows how that infrastructure can be built and operated in production. Because it deeply integrates with reinforcement learning frameworks — decoupling stateful rollout execution from preemptible GPU training — the report offers a concrete reference architecture for teams building agent RL pipelines. DSec exposes four backends through a unified SDK — FnCall, containers, Firecracker microVMs, and full VMs — covering workloads such as online-judge grading, software engineering, security penetration testing, and computer-use tasks. On a single node it can densely host 3,200 containers or 800 microVMs, and by loading EROFS images on demand from the 3FS distributed file system it achieves 1.7x faster task completion and 57% fewer disk writes versus full Docker pulls, while memory sharing and reclamation cut peak memory usage by about 40%.

telegram · zaihuapd · Sep 22, 04:45

**Background**: Training AI agents requires giving models a safe, isolated place to execute code or control a computer, which is what a sandbox provides; doing this millions of times a day demands extremely fast creation and low resource overhead. Firecracker is AWS's open-source virtualization technology that creates lightweight microVMs combining hardware-level isolation with sub-second startup and low memory cost. EROFS is a lightweight read-only file system originally developed by Huawei, well suited to immutable, compressed images that can be mounted instantly. 3FS is DeepSeek's open-source high-performance distributed file system (Fire-Flyer File System), designed for read-heavy AI training and inference workloads on SSDs and RDMA networks.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/EROFS">EROFS - Wikipedia</a></li>
<li><a href="https://github.com/deepseek-ai/3FS">GitHub - deepseek-ai/3FS: A high-performance distributed file system designed to address the challenges of AI training and inference workloads. · GitHub</a></li>
<li><a href="https://firecracker-microvm.github.io/">GitHub Pages - Firecracker</a></li>

</ul>
</details>

**Tags**: `#AI Agents`, `#Sandbox Infrastructure`, `#DeepSeek`, `#Reinforcement Learning`, `#Distributed Systems`

---

<a id="item-10"></a>
## [DeepSeek to Brief UN Security Council on AI Risks This Week](https://t.me/zaihuapd/43989) ⭐️ 8.0/10

Two people familiar with the matter say Chinese AI startup DeepSeek will brief the 15-member UN Security Council this week on the risks posed by artificial intelligence, at a Wednesday meeting on AI and international security. OpenAI CEO Sam Altman plans to attend and give a briefing, and senior representatives from Anthropic are also expected to take part, while Chinese firms including DeepSeek and Moonshot AI were invited to speak. This would put a Chinese frontier-model developer, the leading US model lab OpenAI, and safety-focused Anthropic in the same high-level forum on AI and international security, underscoring how AI governance has moved from technical conferences to the center of geopolitics. It also signals that Chinese AI companies are being treated as first-tier global players whose views on risk are sought at the highest diplomatic level. The meeting is scheduled for Wednesday with the 15 Security Council members, but DeepSeek founder Liang Wenfeng does not plan to attend in person, and sources caution that the arrangements could still change at short notice. Participation has not been officially confirmed by the companies or by the UN.

telegram · zaihuapd · Sep 22, 17:39

**Background**: DeepSeek is a Hangzhou-based AI company known for developing and open-sourcing frontier large language models such as DeepSeek-R1; Moonshot AI (月之暗面) is a Beijing-based peer best known for its long-context Kimi assistant. The UN Security Council is the body responsible for international peace and security, and it has held high-level discussions on AI only rarely, so corporate briefings there are unusual. This session is part of a broader push to define international norms for advanced AI, alongside national AI safety institutes and summit processes.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI governance`, `#AI safety`, `#DeepSeek`, `#UN Security Council`, `#geopolitics`

---

