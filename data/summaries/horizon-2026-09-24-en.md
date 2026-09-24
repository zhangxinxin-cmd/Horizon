# Horizon Daily - 2026-09-24

> From 31 items, 2 important content pieces were selected

---

1. [Are LLM tokens about to cost less than grep?](#item-1) ⭐️ 8.0/10
2. [ClusterMAX 3.0: SemiAnalysis Updates Its Industry-Standard GPU Cloud Ratings](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Are LLM tokens about to cost less than grep?](https://jyn.dev/tokens-too-cheap-to-meter/) ⭐️ 8.0/10

An essay published on jyn.dev titled "Tokens too cheap to meter" argues that LLM inference is getting so cheap that a model call may soon cost less than a classic local tool call such as grep. The author cites models like GPT-5.6 Luna, whose per-call cost is currently only about four to five orders of magnitude above a grep invocation, and extrapolates from current price-performance trends that the crossover could arrive soon. If LLM calls become cheaper than deterministic local tools, agent and application architecture could shift away from hand-written pipelines toward throwing model calls at nearly every problem, which would reshape developer tooling and the economics of AI products. It also raises hard questions about whether the massive infrastructure spending behind current frontier models can ever be recovered when the primary output of that spending keeps collapsing in price. The comparison hinges on a rough per-call cost gap of four to five orders of magnitude between a frontier model call and a grep invocation, which the author extrapolates rather than proves. Commenters point out the extrapolation ignores diminishing returns, physical and hardware limits, and the fact that the essay largely sidesteps business-model viability, since providers are betting enormous capital on future profits.

hackernews · teoruiz · Sep 23, 09:21 · [Discussion](https://news.ycombinator.com/item?id=49813482)

**Background**: Large language models do not read raw text; a tokenizer first splits input into tokens — words, character sets, or word-plus-punctuation chunks — and providers bill per token consumed and generated. Modern LLMs also support tool or function calling, where the model decides to invoke an external function (for example a search API or a shell tool like grep) and emits the parameters for it, which is why comparing the price of a token against the price of a tool call is meaningful. The phrase "too cheap to meter" itself echoes Lewis Strauss's 1954 promise about nuclear power, a comparison several commenters deliberately invoke as a cautionary precedent.

<details><summary>References</summary>
<ul>
<li><a href="https://learn.microsoft.com/en-us/dotnet/ai/conceptual/understanding-tokens">Understanding tokens - .NET | Microsoft Learn</a></li>
<li><a href="https://www.geeksforgeeks.org/artificial-intelligence/tokens-and-context-windows-in-llms/">Tokens and Context Windows in LLMs - GeeksforGeeks</a></li>
<li><a href="https://muthuishere.medium.com/understanding-tool-function-calling-in-llms-step-by-step-examples-in-rest-and-spring-ai-2149ecd6b18b?ref=upstract.com">Understanding Tool / Function Calling in LLMs (Step-by-Step... | Medium</a></li>

</ul>
</details>

**Discussion**: The Hacker News thread (223 points, 176 comments) is largely skeptical: the top comment invokes Stein's Law — "if something cannot go on forever, it will stop" — to argue the efficiency gains will not continue indefinitely, while another commenter says the essay's weakest point is business-model viability given the enormous infrastructure bets. Others compare the promise to nuclear power's failed "too cheap to meter" slogan and to Orwell's writing on the atomic bomb, and at least one reader vents frustration at the ubiquitous Artificial Analysis cost charts.

**Tags**: `#LLM economics`, `#AI inference costs`, `#AI business models`, `#Hacker News`, `#technology trends`

---

<a id="item-2"></a>
## [ClusterMAX 3.0: SemiAnalysis Updates Its Industry-Standard GPU Cloud Ratings](https://newsletter.semianalysis.com/p/clustermax-30-the-industry-standard) ⭐️ 8.0/10

SemiAnalysis has released ClusterMAX 3.0, the newest edition of its industry-standard GPU cloud rating and ranking system, which evaluates providers worldwide across reliability, performance, support, pricing and security. The update follows ClusterMAX 2.0, published in November 2025, and is described by the firm as its most thorough global analysis of GPU cloud providers to date. Choosing a GPU cloud provider is a multi-million-dollar infrastructure decision for AI labs, model developers and enterprises, so an independent, side-by-side ranking shapes which vendors win training and inference contracts. Because ClusterMAX is widely cited across the AI infrastructure industry, changes in scores or methodology can shift buyer perceptions and vendor positioning. ClusterMAX scores more than 80 GPU clouds across performance, networking, storage, security, support and pricing, covering hardware such as H100, H200, B200, GB200 NVL72 and MI300X clusters. The evaluation also weighs total GPU quantity, cluster-scale operational experience, utilization and capacity planning, which silicon is actually live, and providers' future chip roadmaps, and readers should note that SemiAnalysis is a commercial research and advisory firm with relationships in the ecosystem it rates.

rss · Semianalysis · Sep 23, 21:20

**Background**: GPU clouds are services that rent out accelerated compute by the hour, and they compete not just on the raw speed of the GPUs but on the whole stack: high-speed interconnects such as InfiniBand or RoCE for multi-node training, storage throughput, scheduling and management software, uptime, and security and compliance. SemiAnalysis is a semiconductor and AI infrastructure research firm that publishes technical analyses and cost models, and its ClusterMAX system (published at clustermax.ai) was created to give buyers a vendor-neutral way to compare these offerings rather than relying on marketing claims. Earlier editions, including ClusterMAX 1.0 and 2.0, ranked providers such as CoreWeave highly and became a commonly referenced benchmark in the industry.

<details><summary>References</summary>
<ul>
<li><a href="https://www.clustermax.ai/">GPU Cloud ClusterMAX ™ Rating & Ranking System | SemiAnalysis</a></li>
<li><a href="https://blocksandfiles.com/2025/04/03/clustermax-gpu-cloud-ratings-and-storage/">CoreWeave tops new GPU cloud rankings from SemiAnalysis – Blocks...</a></li>
<li><a href="https://newsletter.semianalysis.com/p/clustermax-20-the-industry-standard">ClusterMAX™ 2.0: The Industry Standard GPU Cloud Rating System</a></li>

</ul>
</details>

**Tags**: `#GPU cloud`, `#AI infrastructure`, `#cloud computing`, `#benchmarking`, `#security`

---

