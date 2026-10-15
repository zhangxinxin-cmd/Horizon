---
layout: default
title: "Horizon Summary: 2026-10-15 (EN)"
date: 2026-10-15
lang: en
---

> From 44 items, 6 important content pieces were selected

---

1. [Cloudflare: bots shifted, not stopped, during Yandex outage](#item-1) ⭐️ 8.0/10
2. [Timescale's pg_vectorsearch claims faster Postgres vector indexing than pgvector](#item-2) ⭐️ 8.0/10
3. [Amazon's Market Power Pushes Up Prices Across the Internet](#item-3) ⭐️ 8.0/10
4. [Tracing where LLM "slop" style comes from in models and training](#item-4) ⭐️ 8.0/10
5. [Anthropic replaces git with in-house Scion version control](#item-5) ⭐️ 8.0/10
6. [First Stargardt Patient Receives PRIMA Visual Chip, Regains Reading](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Cloudflare: bots shifted, not stopped, during Yandex outage](https://blog.cloudflare.com/yandex-outage/) ⭐️ 8.0/10

Cloudflare published an analysis on its blog showing that during the recent Yandex outage, malicious bot traffic traversing its network did not go dark but instead changed behavior, with no evidence that social media manipulation operations were knocked offline. The finding directly contradicts widely circulated claims that the outage disrupted Russian troll or bot activity. Outages are frequently used as evidence that disinformation or bot infrastructure has been damaged, and this analysis shows how easily such conclusions can be drawn from misread traffic data. It underscores that large-scale internet measurement data, rather than anecdotes about quieter social media, is needed to judge whether malicious operations were actually disrupted. Cloudflare states that across its network there was no evidence the strikes knocked social media manipulation offline or otherwise disrupted malicious activity on the Internet. A key caveat is that Cloudflare observes only traffic passing through its own network, so it cannot see platform-internal account behavior or content-level activity on services like social media platforms.

hackernews · coloneltcb · Oct 14, 20:29 · [Discussion](https://news.ycombinator.com/item?id=50094673)

**Background**: Yandex is Russia's largest internet company, operating the country's dominant search engine and many other online services. When a major provider like this suffers an outage, commentators often assume that dependent malicious activity — such as botnets, which are networks of compromised devices remotely controlled by an attacker — must also collapse. Cloudflare Radar is Cloudflare's public platform that publishes data-driven insights on global internet traffic, attack trends, and outages based on traffic seen across its global network.

<details><summary>References</summary>
<ul>
<li><a href="https://radar.cloudflare.com/about">About - Cloudflare Radar</a></li>
<li><a href="https://blog.cloudflare.com/evolution-of-cloudflare-radar/">Making the Internet observable: the evolution of Cloudflare Radar</a></li>
<li><a href="https://en.wikipedia.org/wiki/Botnet">Botnet</a></li>

</ul>
</details>

**Discussion**: Commenters largely welcomed the findings, with one calling it the "buried lede" that refutes the meme about Russian trolls going offline, and another noting that much of the apparent traffic may simply be search engine crawlers. Others proposed alternative explanations, such as bots relying on news-scraping to decide where to post, so that a quieter social media feed did not imply the operations had shut down.

**Tags**: `#Cloudflare`, `#Yandex`, `#botnets`, `#cybersecurity`, `#internet-measurement`

---

<a id="item-2"></a>
## [Timescale's pg_vectorsearch claims faster Postgres vector indexing than pgvector](https://github.com/timescale/pg_vectorsearch) ⭐️ 8.0/10

Timescale (now Tiger Data) released pg_vectorsearch, a new PostgreSQL extension that provides a quantized IVF index called PRISM, which the project claims is faster than pgvector's existing IVFFlat and HNSW indexes. The extension requires PostgreSQL 18 or above and caps vectors at 1968 dimensions, and the company's CTO published a technical deep dive into the PRISM architecture the same day. pgvector is the de facto standard for vector search inside Postgres, so a competing index that claims better performance directly challenges the default choice for teams building RAG and AI applications on existing relational databases. It also intensifies competition among low-RAM vector index tools such as VectorChord, which matters as NVMe-based storage makes disk-friendly indexes more attractive than memory-hungry HNSW graphs. PRISM is a quantized inverted-file (IVF) index with a hard limit of 1968 dimensions per vector, so existing HNSW indexes with higher dimensionality cannot be migrated yet, and the extension only runs on PostgreSQL 18+. Community members also note that filtering appears to be post-filtering only, which makes tenant, user, or permission-scoped queries difficult to implement efficiently.

hackernews · jascha_eng · Oct 14, 11:47 · [Discussion](https://news.ycombinator.com/item?id=50086165)

**Background**: pgvector is an open-source PostgreSQL extension that adds a vector data type and distance operators so embeddings can be stored and queried next to relational data. Its two main index types are IVFFlat, which clusters vectors with k-means and only searches the nearest clusters at query time, and HNSW, a graph-based approximate nearest neighbor algorithm known for high recall but heavy memory use. Both are approximate indexes that trade a bit of accuracy for large speed gains over exhaustive search.

<details><summary>References</summary>
<ul>
<li><a href="https://pgvector.app/">pgvector — Vector Similarity Search for Postgres</a></li>
<li><a href="https://deepwiki.com/pgvector/pgvector/5.2.1-ivfflat-overview-and-structure">IVFFlat Overview and Structure | pgvector/pgvector | DeepWiki</a></li>
<li><a href="https://zilliz.com/learn/hierarchical-navigable-small-worlds-HNSW">Understanding Hierarchical Navigable Small Worlds ( HNSW )</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters were largely intrigued but raised concrete blockers: the 1968-dimension cap and PostgreSQL 18 requirement make adoption hard for existing deployments, and several questioned how filtering and multi-tenant scoping would work with post-filtering only. Others welcomed the competition, with one user praising VectorChord for halving Postgres costs on fast NVMe disks, while another asked why Tiger Data shipped a new index instead of maintaining its existing pgvectorscale extension.

**Tags**: `#vector-search`, `#postgresql`, `#pgvector`, `#database-indexing`, `#AI-infrastructure`

---

<a id="item-3"></a>
## [Amazon's Market Power Pushes Up Prices Across the Internet](https://www.not-ship.com/how-amazon-pushes-up-prices-all-across-the-internet/) ⭐️ 8.0/10

An analysis published on not-ship.com argues that Amazon's market power and business practices drive up prices across the broader internet, not just on its own marketplace. The piece sparked a large Hacker News discussion drawing 697 points and 588 comments debating e-commerce dynamics, logistics, product quality and returns. The argument matters because Amazon functions as a de facto price-setter for much of online retail, so shifts in its fees, advertising costs and seller policies ripple out to competitors and consumers alike. It also feeds into ongoing antitrust scrutiny of large platforms in the US and EU, where regulators are debating whether Amazon's dual role as marketplace operator and competing seller distorts competition. The core mechanism described is that sellers must absorb Amazon's referral fees, fulfillment costs and rising ad spend, and then price accordingly — often matching or exceeding prices elsewhere to avoid undercutting themselves on Amazon. Caveats apply: the article's claims are an analytical argument rather than a reported study with disclosed methodology, and Amazon's reliable delivery scheduling is widely cited as a genuine benefit that competitors struggle to replicate.

hackernews · sighborg · Oct 14, 09:28 · [Discussion](https://news.ycombinator.com/item?id=50084757)

**Background**: Amazon operates a two-sided business: it runs a marketplace where third-party merchants sell goods, and it also sells its own private-label and retail products on that same marketplace. Sellers typically pay referral fees on each sale plus fees for using Fulfillment by Amazon (FBA), and increasingly buy sponsored ads to appear in search results. Because Amazon's search results and Buy Box favor certain listings, a common critique — central to antitrust cases — is that the company can shape which products win and at what price, effectively setting a floor for online retail prices more broadly.

**Discussion**: Commenters largely agree that Amazon's dominance now rests on logistics and frictionless returns rather than low prices, with one noting it reliably hits promised delivery dates about 95 out of 100 times. Several complain that non-branded search results are increasingly indistinguishable, low-quality Chinese goods that can be bought cheaper at the source, and others share frustration that independent sellers' advertised return policies are often not honored. A recurring theme is that people still use Amazon for cheap commodity items but go directly to manufacturers or specialty retailers (B&H, Adorama, REI, Sweetwater) for major purchases.

**Tags**: `#Amazon`, `#e-commerce`, `#antitrust`, `#pricing`, `#market power`

---

<a id="item-4"></a>
## [Tracing where LLM "slop" style comes from in models and training](https://www.reddit.com/r/MachineLearning/comments/1x64lbk/tracing_where_llm_slop_style_comes_from_in_the/) ⭐️ 8.0/10

A new mechanistic-interpretability writeup locates the recognizable assistant "slop" style in a difference-in-means "register" direction inside Qwen3-4B-Instruct, a direction derived from the model's own exaggerated versus plain writing and which separates 64 hand-written minimal pairs while correlating up to 0.82 with a trope-based slop score on normal output. Tracing training stages on OLMo 2 1B, the author finds the base model already contains the same direction (cosine 0.90–0.97 at middle layers) but writes near the plain end, SFT introduces the rhetorical structures, and DPO doubles the slop score through buzzwords and markdown formatting. Slop style — em dashes, "it's not X, it's Y" constructions, rule-of-three lists and buzzword stacking — is one of the most widely recognized and disliked symptoms of current RLHF-tuned assistants, and this work turns a vague aesthetic complaint into a measurable, editable internal representation. If the direction generalizes beyond the two small models tested, it suggests practitioners could suppress the style at the representation level rather than through brittle prompt bans or token blocklists, and that part of the blame lies in preference data itself, since the chosen response was the sloppier one in 57% of 3,000 OLMo preference pairs. Directional ablation unexpectedly increases slop by up to 89% because clean text projects negatively onto the axis, so the author instead uses fixed-vector subtraction at layers 12–23 within a narrow KL budget of roughly 0.4 nats/token on human text; distilling this into a rank-16 LoRA cuts the slop score by 83% with no system prompt, lower KL than the steering itself, and no measurable drop on a small QA check. The author notes several caveats: the slop scorer is a self-written regex detector, the main results rest on one 4B model plus OLMo 2 1B, and no human evaluation has been run yet, making the work complementary to token-level approaches such as Antislop (Paech et al., 2025).

reddit · r/MachineLearning · /u/Imaginary_Money2285 · Oct 14, 22:08

**Background**: A difference-in-means direction is a simple interpretability tool: you average the model's internal activations over two contrasting sets of inputs (here, exaggerated versus plain writing) and subtract the means, producing a vector that points toward the concept — a technique related to earlier work showing such directions are often causally implicated in model behavior. Logit lens is another interpretability method that decodes intermediate-layer activations directly into vocabulary predictions, letting researchers see what the model is "leaning toward" at each layer. In modern LLM training pipelines, SFT (supervised fine-tuning, or instruction tuning) trains on human-written example responses, while DPO (Direct Preference Optimization) trains on pairs of preferred versus rejected responses to align style and behavior with human preferences; LoRA is a parameter-efficient fine-tuning method that learns a small low-rank update instead of modifying all weights, and KL divergence here measures how much the model's output distribution shifts away from the original.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.eleuther.ai/diff-in-means/">Diff - in - Means Concept Editing is Worst-Case Optimal | EleutherAI Blog</a></li>
<li><a href="https://developers.openai.com/cookbook/examples/fine_tuning_direct_preference_optimization_guide">Fine-Tuning Techniques - Choosing Between SFT, DPO, and RFT ...</a></li>
<li><a href="https://docs.agilerl.com/en/nightly/tutorials/llm_finetuning/sft_dpo_finetuning.html">LLM Fine-Tuning with SFT and DPO - AgileRL Documentation</a></li>

</ul>
</details>

**Tags**: `#LLM`, `#mechanistic-interpretability`, `#fine-tuning`, `#alignment`, `#model-training`

---

<a id="item-5"></a>
## [Anthropic replaces git with in-house Scion version control](https://www.anthropic.com/engineering/redesigning-source-control) ⭐️ 8.0/10

Anthropic has moved its entire main monorepo off git and onto Scion, an in-house version control system, completing the migration in five months with a team of just seven people. Daily code merges grew from roughly 2,500 to more than 30,000 over that period, and Anthropic reports that Scion uses about 1/200 of the CPU and memory of its previous git mirror architecture, makes CI checkouts roughly 100x faster, and cuts CI compute usage by 25%. It is a rare public case of a major engineering organization abandoning git, the de facto standard version control system for two decades, and it is driven directly by AI agents generating code faster than human-paced tooling can absorb. As more companies adopt agentic coding, the bottleneck shifts from writing code to merging, reviewing, and integrating it, so Scion's design choices are likely to be studied and copied across large engineering teams. Scion flips the git model: the client stays thin and always online while the server performs computation such as commits, merges, rebases, and history/blame queries, with data stored in a distributed fashion. All source control queries are also exposed as APIs, so jobs such as automated bisect and revert pipelines can run without checking out a local repository at all.

telegram · zaihuapd · Oct 14, 02:30

**Background**: Git is the distributed version control system that underpins almost all modern software development, and large companies typically run it as a giant "monorepo" plus a mirror layer that CI systems copy from. Anthropic is the AI lab behind the Claude models and Claude Code, and its own engineers increasingly use those agents to write code, which pushed daily merge volume far beyond what the git-based setup was designed for. CI (continuous integration) is the automated pipeline that builds and tests every change, and "checkout" is the step where a machine downloads a copy of the repository before building it.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/engineering/redesigning-source-control">Redesigning source control at Anthropic \ Anthropic</a></li>
<li><a href="https://officechai.com/ai/anthropic-builds-in-house-version-of-git-called-scion-after-code-merges-rise-12x-in-4-months/">Anthropic Builds In-house Version Of Git Called Scion After ...</a></li>
<li><a href="https://alphasignal.ai/news/anthropic-ditched-git-and-built-scion-after-claude-caused-12x-merge-surge">Anthropic Ditched Git and Built Scion After Claude Caused 12x ...</a></li>

</ul>
</details>

**Tags**: `#version-control`, `#git`, `#Anthropic`, `#CI/CD`, `#developer-infrastructure`

---

<a id="item-6"></a>
## [First Stargardt Patient Receives PRIMA Visual Chip, Regains Reading](https://science.xyz/news/stargardt-first-rehab/) ⭐️ 8.0/10

Science Corporation implanted its PRIMA visual restoration chip into the first patient with Stargardt disease, a condition that had left them blind. The surgery took place in May at Sydney Eye Hospital in Australia, and during early rehabilitation the patient first saw letters and then read a whole word, according to CEO Max Hodak. This is one of the first demonstrations that a retinal prosthesis can partially restore functional vision in inherited Stargardt disease, not just in age-related macular degeneration, potentially opening the technology to a much broader group of blind patients. It marks a meaningful step for retinal prosthetics and neurotech as they move from laboratory concepts toward real clinical rehabilitation. The PRIMA implant goes into the subretinal space and works together with a special pair of glasses that sends light signals to power and program the chip; the current version is about 2 mm wide (roughly 7° of visual angle) and packs 378 light-powered pixels. Importantly, PRIMA is already approved in Europe for age-related macular degeneration, whereas this Stargardt implantation is part of a clinical trial, so the reading result remains an early, single-patient rehabilitation milestone rather than a proven therapy.

telegram · zaihuapd · Oct 14, 04:30

**Background**: Stargardt disease is the most common inherited single-gene retinal disease, usually caused by bi-allelic mutations in the ABCA4 gene, and it progressively destroys the macula from childhood or adolescence, affecting roughly 150,000 people worldwide who currently have no cure. It damages the retina's outer layer, specifically the light-sensitive photoreceptors, so PRIMA bypasses those lost cells and instead electrically stimulates the remaining retinal cells. The system pairs a tiny light-powered subretinal implant with a camera-equipped pair of glasses that converts images into light signals, effectively replicating the function of the photoreceptors that have died.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Stargardt_disease">Stargardt disease</a></li>
<li><a href="https://science.xyz/technologies/prima/general-interest/">PRIMA Visual Prosthesis | Science Corporation</a></li>

</ul>
</details>

**Tags**: `#neurotech`, `#vision-restoration`, `#medical-devices`, `#clinical-trials`, `#Stargardt-disease`

---