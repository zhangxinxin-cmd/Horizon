---
layout: default
title: "Horizon Summary: 2026-10-10 (EN)"
date: 2026-10-10
lang: en
---

> From 38 items, 4 important content pieces were selected

---

1. [Cloudflare acquires Deno, ending independent runtime development](#item-1) ⭐️ 9.0/10
2. [Matthew Green: 15% Chance We Lose Confidence in Public-Key Encryption](#item-2) ⭐️ 8.0/10
3. [China's FAST Telescope Finds Primordial Pulsar Triple System](#item-3) ⭐️ 8.0/10
4. [JetBrains Releases Mellum2.1, an Apache 2.0 Coding Agent Model](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Cloudflare acquires Deno, ending independent runtime development](https://deno.com/blog/cloudflare) ⭐️ 9.0/10

Cloudflare has acquired Deno, and according to the announcement quoted by community members, Cloudflare will support the Deno runtime for another year with monthly releases containing bug fixes and security updates before ending its development of the runtime. Deno will remain open source, and the company says it welcomes others who want to continue its development. Deno was the most prominent attempt to rebuild a JavaScript/TypeScript runtime from first principles, with built-in TypeScript support and secure-by-default sandboxing, and its ideas were copied into Node and other runtimes. Its effective shutdown as an independently developed runtime removes one of the few independent alternatives in the JS ecosystem and fits a broader consolidation wave in which runtimes, bundlers and toolchains are being absorbed by a handful of large AI and cloud companies. Deno's source code stays open source, so the project can survive if a new maintainer or fork takes over, but after the one-year maintenance window no further feature development is planned by its current owner. Community members characterize the deal as an acquihire in which Cloudflare is primarily acquiring Ryan Dahl's team and Deno's sandboxing/security technology, presumably to fold it into its own Workers runtime, workerd.

hackernews · ilreb · Oct 9, 13:03 · [Discussion](https://news.ycombinator.com/item?id=50019911)

**Background**: Deno is a JavaScript, TypeScript and WebAssembly runtime created by Ryan Dahl — the original author of Node.js — together with Bert Belder, and released in 2018 as an attempt to fix what Dahl described as design mistakes in Node.js. It is built on the V8 JavaScript engine, the Rust programming language and the Tokio async runtime, and is known for secure defaults such as explicit permission flags for file, network and environment access, plus first-class TypeScript support without a separate build step. Cloudflare runs its serverless Workers platform on a V8-isolate-based runtime called workerd, and has been steadily acquiring developer-tooling companies. A JavaScript runtime is the environment that executes JS code, bundling the engine with APIs for files, network and other system resources.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Deno_(software)">Deno (software) - Wikipedia</a></li>
<li><a href="https://deno.com/">Deno, the drop-in JavaScript runtime for Node developers</a></li>
<li><a href="https://github.com/denoland/deno">GitHub - denoland/deno: A modern runtime for JavaScript and ... Deno (software) - Wikipedia Get started with Deno | Deno Docs Installation | Deno Docs Deno Land Inc. · GitHub Roll your own JavaScript runtime, pt. 2 - Deno</a></li>

</ul>
</details>

**Discussion**: The dominant sentiment is sadness and frustration: commenters call Deno their favourite JS runtime, say they sensed this coming, and describe it as an acquihire that effectively shuts down Deno development. Several blame the shift toward npm compatibility for bloating a once elegantly simple project and attribute the retreat to venture-capital funding pressure, while others hope workerd adopts Deno's security and sandboxing mechanisms. A recurring counterpoint is that the headline should say "Deno development effectively shut down via a Cloudflare acquihire," and many point to a longer list of recent tooling consolidations (Bun, Astro, VoidZero/Vite, NuxtLabs, Astral/uv and others) as evidence of a wider trend.

**Tags**: `#deno`, `#cloudflare`, `#javascript-runtime`, `#acquisition`, `#open-source`

---

<a id="item-2"></a>
## [Matthew Green: 15% Chance We Lose Confidence in Public-Key Encryption](https://simonwillison.net/2026/Oct/9/matthew-green/) ⭐️ 8.0/10

In a post on X quoted by Simon Willison, cryptographer Matthew Green estimated there is a 1% chance we live in "Minicrypt" — a hypothetical world in which public-key encryption is impossible — and a 15% chance we functionally lose confidence in our existing public-key encryption algorithms. He framed this as a worst-case possibility others avoid raising for the sake of respectability, and argued that the speed at which AI produces surprises is orders of magnitude faster than the speed at which humans replace standards. Public-key encryption underpins TLS, digital signatures, secure messaging and essentially all internet trust infrastructure, so a loss of confidence in it would be a systemic security event rather than a niche academic concern. Green's point also reframes AI risk in cryptographic terms: even with excellent AI assistance, standards bodies cannot rewrite and redeploy global cryptographic standards quickly enough unless the preparation is done before the surprise arrives. Green gives two explicit probabilities — 1% for living in Minicrypt and 15% for functionally losing confidence in current public-key encryption — and stresses the asymmetry between AI-driven discovery and human standards processes, noting that recovery from such a surprise is only possible with advance preparation. Since he presents these as deliberately provocative worst-case numbers rather than measured forecasts, they should be read as risk-framing rather than quantitative predictions.

rss · Simon Willison · Oct 9, 15:02

**Background**: Minicrypt comes from Russell Impagliazzo's 1995 paper "A Personal View of Average Case Complexity," which sketches five possible cryptographic worlds: Algorithmica (no cryptography needed), Heuristica (cryptography possible but hard to find), Pessiland (one-way functions exist but no useful crypto), Minicrypt (secret-key cryptography such as one-way functions is possible, but public-key encryption is not) and Cryptomania (full public-key cryptography exists). Most of modern security assumes something close to Cryptomania, which is why Green's 1% estimate for Minicrypt is notable. Matthew Green is a Johns Hopkins cryptography professor known for applied and public-interest cryptography work, and Simon Willison is the developer and blogger who surfaced and annotated the quote.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Russell_Impagliazzo">Russell Impagliazzo - Wikipedia</a></li>
<li><a href="https://www.cs.sfu.ca/~kabanets/881/scribe_notes/lec8.pdf">Impagliazzo ’s Five Worlds</a></li>
<li><a href="https://www.quantamagazine.org/the-researcher-who-explores-computation-by-conjuring-new-worlds-20240327/">The Researcher Who Explores Computation by Conjuring New Worlds</a></li>

</ul>
</details>

**Tags**: `#cryptography`, `#AI risk`, `#public-key encryption`, `#standards`, `#security`

---

<a id="item-3"></a>
## [China's FAST Telescope Finds Primordial Pulsar Triple System](https://nao.cas.cn/news/gd/202610/t20261009_8289939.html) ⭐️ 8.0/10

Chinese and European scientists have independently confirmed that PSR J0435+3233, a pulsar discovered by China's FAST telescope, is the first known primordial triple system that is still in an evolving stage. The system consists of a pulsar, a white dwarf and a Sun-like star, with inner and outer orbital periods of 8 days and 73.5 years respectively, and the result was published in The Astrophysical Journal Letters on October 9, 2026. Multi-star systems that are still evolving are extremely rare to catch, so this object offers a direct observational window into how a pulsar, a white dwarf and an ordinary star can coexist and change over time. It also showcases FAST's growing role in pulsar discovery and precision timing, and gives theorists a new test case for models of how multiple stellar systems form and evolve. The system is strongly hierarchical, with an 8-day inner orbit and a 73.5-year outer orbit, so the wide separation of the outer Sun-like star is what makes long-term stability possible. Because the outer orbit takes decades to complete, continued timing observations will be needed to fully pin down the system's parameters and its evolutionary path.

telegram · zaihuapd · Oct 9, 05:14

**Background**: Pulsars are rapidly spinning, highly magnetized neutron stars left behind by supernova explosions; they sweep beams of radio waves across space, and because their pulses are so regular, timing them reveals tiny orbital wobbles caused by unseen companion stars. FAST, known as China Sky Eye, is a 500-meter radio telescope in Guizhou whose scientific goals include discovering pulsars and building a pulsar timing array. A white dwarf is the dense, Earth-sized remnant of a star like the Sun that has exhausted its fuel. A "primordial" (原生) triple system means the three stars formed together from the same parent cloud, rather than being assembled later by gravitational capture, and this is the first such system caught while it is still evolving.

<details><summary>References</summary>
<ul>
<li><a href="https://www.zhuhai-hitech.gov.cn/gxxw/mtkt/content/post_3914221.html">珠海高校博士生给你讲：打捞 脉 冲 星 高新区</a></li>
<li><a href="https://www.cdstm.cn/videos/sounds/xkxzj/art/2020/art_c7a0b8ad508943ccacf713b4d9d66d72.html">第57集 “天眼”与 脉 冲 星</a></li>
<li><a href="https://www.thecover.cn/news/lzgoNX23TE2H90qSdq8Jkw==">thecover.cn/news/lzgoNX23TE2H90qSdq8Jkw==</a></li>

</ul>
</details>

**Tags**: `#天文学`, `#FAST`, `#脉冲星`, `#三体系统`, `#天体物理学`

---

<a id="item-4"></a>
## [JetBrains Releases Mellum2.1, an Apache 2.0 Coding Agent Model](https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/) ⭐️ 8.0/10

JetBrains released Mellum2.1, an open-source coding model with a 12B-parameter mixture-of-experts architecture and 2.5B active parameters, published under the Apache 2.0 license and available on Hugging Face as JetBrains/Mellum2.1-12B-A2.5B-Thinking. Unlike the previous version, almost all of the work went into post-training, primarily reinforcement learning carried out in real environments, so the model can explore a codebase, edit files, and verify its own changes as a locally running coding agent. A major IDE vendor shipping a permissively licensed coding model that runs on a user's own hardware gives developers a practical alternative to closed, API-only coding assistants and strengthens the fast-growing ecosystem of open coding agents. It also signals that competition in open coding models is shifting from raw architecture and scale toward post-training quality for agentic, tool-using workflows. The architecture is unchanged from Mellum2 — a 12B mixture-of-experts model with 2.5B active parameters — so the gains come almost entirely from post-training, meaning the 2.5B active parameters are what actually run per token while the full 12B gives capacity. The release is positioned for coding agents and fast sub-agents on local hardware, so latency and self-hosted inference matter more than topping general benchmarks.

telegram · zaihuapd · Oct 9, 07:30

**Background**: Mixture-of-experts (MoE) is a design in which a model contains many specialized sub-networks, or "experts", but only routes each token to a small subset of them, so the total parameter count is much larger than the number of parameters actually active per token; this keeps inference cheap while retaining model capacity. Reinforcement learning trains a model by rewarding outcomes of actions taken in an environment, and in this case the environment is a real code repository where the agent can read, edit, and test code. JetBrains is best known as the maker of IDEs such as IntelliJ IDEA and PyCharm, and Mellum is its family of fast language models aimed at real-world AI workloads; Mellum2.1 is the successor to Mellum2 Thinking.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/">Mellum2.1 Gets to Work: A Fast Open Model for Coding Agents</a></li>
<li><a href="https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking">JetBrains/Mellum2.1-12B-A2.5B-Thinking · Hugging Face</a></li>
<li><a href="https://www.jetbrains.com/mellum/">Mellum by JetBrains: Fast language models for real-world AI workloads.</a></li>

</ul>
</details>

**Tags**: `#JetBrains`, `#open-source AI`, `#coding agents`, `#mixture-of-experts`, `#LLM releases`

---