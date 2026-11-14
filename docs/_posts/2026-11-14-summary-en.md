---
layout: default
title: "Horizon Summary: 2026-11-14 (EN)"
date: 2026-11-14
lang: en
---

> From 38 items, 3 important content pieces were selected

---

1. [FAA orders rare nationwide ground stop over ATC communications outage](#item-1) ⭐️ 8.0/10
2. [TorchTitan Scales to a 1T-Parameter MoE on 384 GH200 GPUs](#item-2) ⭐️ 8.0/10
3. [OpenAI launches ChatGPT Wallet so AI agents can pay](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [FAA orders rare nationwide ground stop over ATC communications outage](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) ⭐️ 8.0/10

On November 13, 2026, at 3:54 PM EST (20:54 UTC), the Federal Aviation Administration issued a nationwide ground stop halting all departing flights across the United States after a communications outage disrupted air-traffic-control operations, with the order first originating at Chicago's O'Hare and Midway airports before spreading to all airports. The ground stop was later lifted, according to live reporting from the New York Times. A nationwide ground stop is an extraordinarily rare measure — the last one of comparable scope followed the September 11 attacks — and this one rippled across the entire U.S. air travel system, stranding passengers and cascading into delays and cancellations at hubs nationwide. It also exposes how a single failure in the shared communications infrastructure underlying air-traffic control can halt aviation across an entire country. Reporting indicated the outage affected a telecommunications network overseen by L3Harris Technologies that carries the radio frequencies air-traffic controllers use to communicate with pilots, though it was not immediately clear whether radar feeds were also affected. Official information was notably sparse — much of what the public learned early on came from a post by Transportation Secretary Sean Duffy on X — and a ground stop differs from a ground delay program in that it halts departures outright rather than metering them.

hackernews · zulln · Nov 13, 21:05 · [Discussion](https://news.ycombinator.com/item?id=50489641)

**Background**: A ground stop is an FAA order that temporarily bars aircraft from departing toward a specific airport, region, or — in rare cases — the entire country, typically because of weather, security events, or equipment failures; it is coordinated nationally rather than by individual airlines. The U.S. airspace is divided among Air Route Traffic Control Centers (ARTCCs), 22 regional facilities that manage aircraft cruising through large swaths of airspace and that rely on dedicated radio links and radar feeds to keep controllers in contact with pilots. Because those links are shared infrastructure rather than per-airline systems, a fault in one vendor's network can ground traffic nationwide.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/2026_FAA_communication_outage">2026 FAA communication outage - Wikipedia</a></li>
<li><a href="https://www.theguardian.com/us-news/live/2026/nov/13/us-politics-latest-news-updates-democrats-republicans-donald-trump-van-hollen-chuck-schumer?page=with:block-6af791ef8f080d8d1c27a4e8">US flight outage live updates: FAA grounds thousands... | The Guardian</a></li>
<li><a href="https://aerospaceglobalnews.com/news/what-is-a-ground-stop-faa-why-order-one">What is a ground stop and why does the FAA order one?</a></li>

</ul>
</details>

**Discussion**: Commenters focused on the scarcity of official information, with several noting that status boards at major airports showed nothing departing and that some airport websites were overloaded. Others shared reporting linking the outage to an L3Harris-operated telecom network handling controller-pilot radio frequencies, flagged the DHS secretary's warning that the outage could be extended, and speculated whether it was connected to the FAA's newly announced nationwide rollout of an AI air-traffic tool, while a later comment relayed that the ground stop had been lifted.

**Tags**: `#aviation`, `#critical-infrastructure`, `#FAA-ground-stop`, `#telecom-outage`, `#ATC-systems`

---

<a id="item-2"></a>
## [TorchTitan Scales to a 1T-Parameter MoE on 384 GH200 GPUs](https://www.reddit.com/r/MachineLearning/comments/1xvce5h/scaling_to_1t_moe_on_torchtitan_p/) ⭐️ 8.0/10

A practitioner team, working closely with TorchTitan and PyTorch maintainers, pushed TorchTitan to train a ~1T-parameter mixture-of-experts model at roughly 1,300 tokens/s per GPU across 384 GH200 GPUs — a 14X speedup over their starting point, whose baseline step took 84 seconds with 68 of those seconds spent waiting on the network. The write-up documents concrete sharding and memory trade-offs (FSDP + expert parallelism instead of pipeline parallelism) that generalize to anyone training very large models, and it shows that the PyTorch-native TorchTitan stack can sustain trillion-parameter MoE training on a production supercomputer rather than only on paper. The configuration used 384-way FSDP with 4-way expert parallelism kept strictly inside each node, no pipeline parallelism, full activation checkpointing (a 4X win), offloading checkpoint activations to Grace over the 900 GB/s C2C link with one-layer-ahead prefetch, and the Muon optimizer with a single state per parameter to reach 64k-token sequences; a FlexShard scheme that assigns whole experts to ranks lets Newton-Schulz orthogonalization run locally with zero communication, though because the optimizer is offloaded to Grace, Newton-Schulz also ran on the CPU.

reddit · r/MachineLearning · /u/f14-bertolotti · Nov 13, 16:28

**Background**: Mixture-of-experts (MoE) models activate only a subset of their experts per token, so a trillion-parameter model can be trained without paying full dense compute — but it must be split across many GPUs, which is what sharding strategies are for. FSDP (Fully Sharded Data Parallel) gives every GPU a slice of every weight and gathers the rest just in time, expert parallelism gives each GPU a subset of experts and routes tokens to them over the network, and pipeline parallelism assigns each GPU a chunk of layers. On JUPITER, the GH200-based supercomputer used here, InfiniBand provides only ~25 GB/s per GPU — about 6X slower than NVLink and 36X slower than the Grace-Hopper C2C link — making communication, not arithmetic, the binding constraint. TorchTitan is PyTorch's open-source, PyTorch-native platform for large-scale LLM pre-training, where these parallelism techniques are composed and benchmarked.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/pytorch/torchtitan">GitHub - pytorch / torchtitan : A PyTorch native platform for training...</a></li>
<li><a href="https://arxiv.org/abs/2410.06511">[2410.06511] TorchTitan : One-stop PyTorch native solution for...</a></li>
<li><a href="https://flopper.io/compare/nvidia-b200-sxm-192gb-vs-nvidia-gh200-grace-hopper-superchip">NVIDIA B200 vs NVIDIA GH 200 - GPU Comparison | Flopper.io</a></li>

</ul>
</details>

**Tags**: `#distributed-training`, `#mixture-of-experts`, `#PyTorch`, `#large-language-models`, `#GPU-performance`

---

<a id="item-3"></a>
## [OpenAI launches ChatGPT Wallet so AI agents can pay](https://openai.com/index/introducing-chatgpt-wallet/) ⭐️ 8.0/10

OpenAI introduced ChatGPT Wallet in partnership with American Express, Mastercard and Visa, letting its "dots" AI agents complete purchases without ever touching the user's real card number. The feature launched in the US for ChatGPT Pro subscribers aged 18 and older who pay with a US-issued card, and each transaction requires per-purchase confirmation via Face ID or fingerprint. This is one of the most concrete steps yet toward "agentic commerce", where autonomous AI agents spend money on a user's behalf rather than merely recommending products. Because it leans on the card networks' own tokenization infrastructure, it could become a template for how other AI platforms delegate payment authority — and for how banks and regulators treat AI-initiated transactions. Payments run on network-issued payment tokens that substitute for the real card number, so merchants and the AI agent never see the underlying credentials, and users review the item and amount before approving each purchase with biometrics. Availability is limited to US ChatGPT Pro accounts on US-issued cards in the early rollout, so users outside the US — or whose accounts have not been enabled — will not see Wallet in a conversation with their dot yet.

telegram · zaihuapd · Nov 13, 15:43

**Background**: OpenAI's "dots" are personal AI agents inside ChatGPT that can carry out multi-step tasks on a user's behalf, including shopping. Network tokenization is the long-standing card-industry technique of swapping a real card number for a surrogate token issued by Visa, Mastercard or Amex, which reduces fraud exposure because the token is tied to a specific device or merchant context. ChatGPT Wallet plugs that mechanism into an AI agent, adding a biometric approval step so the agent can transact without holding the user's actual card details.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/introducing-chatgpt-wallet/">Introducing ChatGPT Wallet | OpenAI</a></li>
<li><a href="https://help.openai.com/en/articles/20001654-making-purchases-with-chatgpt-wallet">Making purchases with ChatGPT Wallet | OpenAI Help Center</a></li>
<li><a href="https://www.cnbc.com/2026/11/13/openai-chatgpt-wallet-dot-purchases.html">OpenAI 's ChatGPT Wallet allows 'dots' AI agents to make purchases</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#AI agents`, `#agentic commerce`, `#digital payments`, `#fintech`

---