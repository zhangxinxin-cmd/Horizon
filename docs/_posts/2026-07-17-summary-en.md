---
layout: default
title: "Horizon Summary: 2026-07-17 (EN)"
date: 2026-07-17
lang: en
---

> From 32 items, 8 important content pieces were selected

---

1. [Kimi K3 and Lessons from the Pelican Benchmark](#item-1) ⭐️ 9.0/10
2. [Firefox Compiled to WebAssembly Runs Inside Another Browser](#item-2) ⭐️ 9.0/10
3. [AWS Billing Bug Shows $1.7B Estimated Bill](#item-3) ⭐️ 8.0/10
4. [First atmosphere detected on Earth-like exoplanet in habitable zone](#item-4) ⭐️ 8.0/10
5. [Mozilla Report on Open Source AI Sparks Debate](#item-5) ⭐️ 8.0/10
6. [EU AI Act OpenRAG: Legal-Structured Chunks with BGE-M3 Embeddings](#item-6) ⭐️ 8.0/10
7. [Truth Social to Sell Real-Time Trump Posts to Wall Street via API](#item-7) ⭐️ 8.0/10
8. [Huawei Ascend 950 SuperNode Debuts, Claims 6.7x NVIDIA's Compute](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Kimi K3 and Lessons from the Pelican Benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/) ⭐️ 9.0/10

Simon Willison's analysis of the Kimi K3 model on the pelican benchmark uncovers hidden system prompts inflating token counts and questions the benchmark's relevance for agentic tool use. This discussion exposes significant flaws in benchmark design, particularly the hidden prompts that skew token cost calculations, and underscores the growing gap between benchmark performance and practical agentic capabilities. The pelican prompt 'Generate an SVG of a pelican riding a bicycle' registers 95 tokens with Kimi K3's tokenizer, compared to 10 tokens for OpenAI and Anthropic, suggesting an 85-token hidden system prompt; Kimi K3 is 5x cheaper but 2x slower than Anthropic's models.

hackernews · droidjj · Jul 17, 14:21 · [Discussion](https://news.ycombinator.com/item?id=48947717)

**Background**: The 'pelican on a bicycle' benchmark, created by Simon Willison in late 2024, asks LLMs to generate an SVG of a pelican riding a bicycle and has become a popular informal test. Kimi K3, released by Chinese startup Moonshot AI in July 2026, features 2.8 trillion parameters and a 1M-token context window, using a novel Kimi Delta Attention mechanism.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(chatbot)">Kimi (chatbot) - Wikipedia</a></li>
<li><a href="https://grokipedia.com/page/Pelican_on_a_bicycle_AI_benchmark">Pelican on a bicycle (AI benchmark)</a></li>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart">Kimi K3 - Kimi API Platform</a></li>

</ul>
</details>

**Discussion**: Commenters point out that pelicans on bikes appear in many online sources, likely leaking into training data; they also note the benchmark's failure to test agentic tool calling. User btown suggests a more adversarial benchmark that interrupts tool calls with SVG prompts, while michaelbuckbee provides a cost-speed comparison showing Kimi K3 is cheapest but slowest.

**Tags**: `#AI benchmarks`, `#Kimi K3`, `#pelican benchmark`, `#tokenization`, `#agentic tools`

---

<a id="item-2"></a>
## [Firefox Compiled to WebAssembly Runs Inside Another Browser](https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything) ⭐️ 9.0/10

Puter has successfully compiled the entire Firefox browser to WebAssembly, allowing it to run inside another browser like Chrome. The project used AI-assisted development with Claude Opus and Fable tokens, costing approximately $25,000 in token value but reduced via a subscription plan. This demonstrates extreme portability for complex native applications, potentially enabling new use cases like running full browsers in cloud-based environments or within other applications. It also showcases the power of AI-assisted programming in overcoming the significant engineering challenges of porting a major codebase. The compiled Firefox uses a single-process mode (Gecko) to simplify the port, and all network traffic is proxied through Puter's server using the Wisp protocol because browser sandboxing prevents arbitrary network connections. The project supports end-to-end encryption, as demonstrated by the author's inspection of WebSocket messages.

rss · Simon Willison · Jul 16, 23:34

**Background**: WebAssembly (WASM) is a binary instruction format that allows code written in languages like C++ to run in web browsers at near-native speed. Compiling a full browser like Firefox to WASM is extremely challenging due to its size and complexity; typical WASM targets are much smaller applications. Puter is an open-source internet operating system that provides cloud desktop environments, and the Wisp protocol is a WebSocket-based protocol for proxying network traffic.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/HeyPuter/puter">GitHub - HeyPuter/puter: 🌐 The Internet Computer! Free, Open-Source, and Self-Hostable.</a></li>
<li><a href="https://github.com/MercuryWorkshop/wisp-protocol">GitHub - MercuryWorkshop/wisp-protocol: Wisp is a low ...</a></li>

</ul>
</details>

**Discussion**: The Hacker News discussion about the project led to such high traffic that the team had to scale up their servers. The overall sentiment appears to be excitement and amazement at the technical feat, with some discussion about the practical implications and scalability.

**Tags**: `#WebAssembly`, `#Firefox`, `#browser`, `#portability`, `#AI-assisted development`

---

<a id="item-3"></a>
## [AWS Billing Bug Shows $1.7B Estimated Bill](https://news.ycombinator.com/item?id=48945241) ⭐️ 8.0/10

AWS's billing system incorrectly displayed estimated bills of up to $1.7 billion for customers due to a unit conversion error, confusing gigabytes with bytes. This incident undermines trust in AWS billing accuracy and caused significant alarm among customers, highlighting the need for robust metering and pricing validation. The error originated from AWS services emitting metering values in bytes instead of gigabytes, leading to a 2^30 multiplier discrepancy; affected customers received multiple budget alerts.

hackernews · nprateem · Jul 17, 09:42

**Background**: AWS billing uses a system where services emit raw metering values (e.g., bytes) that are converted to billable units through pricing plans. A mismatch in unit interpretation caused the inflated bills. This is not the first time such unit errors have occurred in AWS billing.

**Discussion**: Community comments recount personal experiences with similar unit errors, including being paged at 2am to fix a billing bug. Users expressed shock and humor (e.g., 'EMOTIONAL DAMAGE') and noted that AWS historically has had billing inaccuracies.

**Tags**: `#aws`, `#billing`, `#incident`, `#cloud-computing`

---

<a id="item-4"></a>
## [First atmosphere detected on Earth-like exoplanet in habitable zone](https://www.bbc.com/news/articles/cy4kdd1e0ejo) ⭐️ 8.0/10

Astronomers using the James Webb Space Telescope have detected an atmosphere on LHS 1140b, a rocky exoplanet in the habitable zone of a red dwarf star 48 light-years away. This marks the first confirmed atmosphere on a potentially Earth-like world in a star's habitable zone. This discovery challenges previous assumptions that rocky planets around red dwarfs cannot retain atmospheres due to intense stellar stripping. It opens new possibilities for studying the habitability of exoplanets and searching for biosignatures. The detection was made using JWST emission spectroscopy as LHS 1140b passed behind its star, ruling out a mini-Neptune interpretation. The atmosphere contains helium, implying a high escape velocity and suggesting the planet is not losing its atmosphere rapidly.

hackernews · neversaydie · Jul 17, 14:06 · [Discussion](https://news.ycombinator.com/item?id=48947560)

**Background**: Transit spectroscopy is a technique used to analyze exoplanet atmospheres by measuring the starlight filtered through a planet's limb during transit. Red dwarfs are cooler and more active than Sun-like stars, making their habitable zones very close-in, where stellar winds and flares can strip atmospheres from orbiting planets.

<details><summary>References</summary>
<ul>
<li><a href="https://www.uu.se/en/department/physics-and-astronomy/research/astronomy-and-space-physics/planetary-systems/exoplanet-atmospheres">Exoplanet Atmospheres – Department of Physics and Astronomy ...</a></li>
<li><a href="https://arxiv.org/pdf/2502.09702">Habitable Zone and Atmosphere Retention Distance (HaZARD)</a></li>
<li><a href="https://astrobites.org/2025/03/20/too-close-for-comfort-when-exoplanets-just-cant-hold-on-to-their-atmospheres/">Too close for comfort: When exoplanets just can’t hold on to ...</a></li>

</ul>
</details>

**Discussion**: Some commenters expressed surprise that a rocky planet in a red dwarf's habitable zone could retain an atmosphere, while others doubted it is truly Earth-like, initially suggesting it might be a mini-Neptune. The JWST emission spectroscopy data ruled out that possibility, and one comment noted the planet's helium content implies strong gravity, making it difficult for any hypothetical life to escape.

**Tags**: `#exoplanet`, `#astronomy`, `#atmosphere detection`, `#JWST`

---

<a id="item-5"></a>
## [Mozilla Report on Open Source AI Sparks Debate](https://stateofopensource.ai/) ⭐️ 8.0/10

Mozilla published a report on the state of open source AI, which has generated significant discussion about the merits of open versus closed AI models. This report matters because it highlights the rapid growth of open models, which could shift market dynamics and challenge the dominance of proprietary AI companies like OpenAI and Anthropic. The report has been criticized for being written by an LLM, lacking deep analysis, and relying on overwrought charts. Despite this, community data shows open models now process over 63% of tokens on OpenRouter, up from 40% four months ago.

hackernews · rellem · Jul 17, 14:31 · [Discussion](https://news.ycombinator.com/item?id=48947825)

**Background**: Open source AI refers to models whose weights, code, and sometimes training data are publicly released. The debate between open and closed models centers on transparency, cost, and control. Open models allow anyone to run and modify them, potentially reducing costs and enabling innovation, while closed models are controlled by companies that invest heavily in training frontier models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Open-source_artificial_intelligence">Open-source artificial intelligence - Wikipedia</a></li>
<li><a href="https://www.ibm.com/think/topics/open-source-ai">What Is Open Source AI? | IBM</a></li>
<li><a href="https://finkletech.com/open-vs-closed-ai-models-2026/">Open vs Closed AI Models : Who Controls the Future of Artificial...</a></li>

</ul>
</details>

**Discussion**: Community members emphasize the rapid shift toward open models, with one commenter noting a 5x increase in token processing over four months. However, there is strong criticism of Mozilla's report itself, with some calling it an LLM-generated slide deck that lacks genuine analysis. Others express desire to take the report seriously but find its quality undermines the message.

**Tags**: `#open source`, `#AI`, `#LLM`, `#market analysis`, `#Mozilla`

---

<a id="item-6"></a>
## [EU AI Act OpenRAG: Legal-Structured Chunks with BGE-M3 Embeddings](https://www.reddit.com/r/MachineLearning/comments/1uytlac/eu_ai_act_openrag_933_legally_structured_chunks/) ⭐️ 8.0/10

A downloadable corpus of the EU AI Act (Regulation 2024/1689) has been released, featuring 933 legally structured chunks with BGE-M3 embeddings stored in a SQLite file. Evaluation shows improved retrieval performance over baseline sliding-window chunking, with article recall@20 of 0.541 vs 0.449. This dataset bridges legal NLP and RAG research by providing a domain-specific benchmark for structured chunking, potentially improving compliance tools and legal document retrieval. The open release of methodology and evaluation results encourages reproducibility and further innovation. The corpus uses legal structures (recitals, articles, paragraphs) rather than character windows, and includes metadata like EUR-Lex links and application dates. The BGE-M3 embeddings are 1024-dimensional normalized embeddings, and classification labels are stored separately from regulatory associations, with ambiguous cases set to NULL.

reddit · r/MachineLearning · /u/Automatic-Forever-63 · Jul 17, 08:18

**Background**: RAG (Retrieval-Augmented Generation) systems combine retrieval from a knowledge base with a generative model to produce answers. Traditional chunking methods like sliding windows often break semantic units. BGE-M3 is a multilingual embedding model that supports dense, sparse, and multi-vector retrieval. EUR-Lex is the official EU law database.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2402.03216v3">BGE M 3 - Embedding : Multi-Lingual, Multi-Functionality...</a></li>
<li><a href="https://en.wikipedia.org/wiki/EUR-Lex">EUR-Lex</a></li>

</ul>
</details>

**Tags**: `#RAG`, `#Legal NLP`, `#EU AI Act`, `#Embeddings`, `#Dataset`

---

<a id="item-7"></a>
## [Truth Social to Sell Real-Time Trump Posts to Wall Street via API](https://www.cnn.com/2026/07/16/business/truth-social-data-wall-street) ⭐️ 8.0/10

Trump Media & Technology Group announced on Thursday that Truth Social will launch Truth API on August 1, offering institutional clients millisecond-speed access to real-time posts from the platform's top 10 accounts, including Donald Trump's, aimed at giving high-frequency trading algorithms an information edge. This move blurs the line between presidential communication and financial markets, potentially allowing traders to profit from policy signals before the public reacts, raising serious ethical and regulatory concerns about insider trading and market fairness. The API provides data at millisecond speed for the top 10 most-followed accounts on Truth Social, including Trump's, which has repeatedly caused volatility in stocks and oil markets when he posted about tariffs, Iran, or the Strait of Hormuz. Pricing has not been disclosed.

telegram · zaihuapd · Jul 17, 01:02

**Background**: High-frequency trading (HFT) is a type of algorithmic trading that uses powerful computers to execute a large number of orders at extremely high speeds, often holding positions for fractions of a second. HFT firms seek even the smallest informational advantages to gain profits, such as faster access to market-moving news. Truth Social has become Trump's primary channel for announcing policy decisions, making his posts highly valuable for traders.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High-frequency_trading">High-frequency trading - Wikipedia</a></li>
<li><a href="https://www.investopedia.com/terms/h/high-frequency-trading.asp">Understanding High-Frequency Trading (HFT): Basics, Mechanics ...</a></li>

</ul>
</details>

**Tags**: `#social media`, `#API`, `#high-frequency trading`, `#ethics`, `#politics`

---

<a id="item-8"></a>
## [Huawei Ascend 950 SuperNode Debuts, Claims 6.7x NVIDIA's Compute](https://www.ithome.com/0/978/019.htm) ⭐️ 8.0/10

At WAIC 2026, Huawei publicly demonstrated the Ascend 950 SuperNode (Atlas 950 SuperPoD) for the first time, claiming 1 EFLOPS FP8 and 2 EFLOPS FP4 compute power with 256 TB unified memory, and stating it achieves 6.7 times the total compute of NVIDIA's NVL144 system. This announcement signals Huawei's ambition to challenge NVIDIA's dominance in AI hardware, potentially reshaping the competitive landscape for large-scale AI training clusters, especially in markets with restricted access to Western technology. The Ascend 950 SuperNode supports up to 1,024 Ascend 950 chips interconnected via Huawei's proprietary UnifiedBus (Lingqu) protocol. Additionally, the Ascend 384 SuperNode has already been deployed in over 750 commercial units across various industries.

telegram · zaihuapd · Jul 17, 10:27

**Background**: SuperNode architecture uses high-speed, lossless interconnects to aggregate multiple accelerators into a single logical computing unit, bypassing traditional PCIe bottlenecks. Huawei's UnifiedBus protocol replaces PCIe, NVLink, and RDMA with a unified five-layer stack, enabling up to 8,192 accelerators in a fully connected topology.

<details><summary>References</summary>
<ul>
<li><a href="https://www.toutiao.com/article/7551352889764020755/">华为全联接大会 2025：发布灵衢互联协议与多系列超节点产品，引领 AI ...</a></li>
<li><a href="https://baike.baidu.com/item/灵衢/66774401">灵衢 - 百度百科</a></li>
<li><a href="https://locsic.com/zh/thinking/lingqu-unifiedbus-protocol-analysis/">灵衢协议深度分析：中国算力突围的互联赌注 — Locsic</a></li>

</ul>
</details>

**Tags**: `#Huawei`, `#AI hardware`, `#compute`, `#breakthrough`

---