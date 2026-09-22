# Horizon Daily - 2026-09-22

> From 37 items, 4 important content pieces were selected

---

1. [Xiaomi Releases MiMo v2.6 Omnimodal LLM Family With Flash and Pro Variants](#item-1) ⭐️ 8.0/10
2. [Cloudflare Python Workers reach general availability](#item-2) ⭐️ 8.0/10
3. [TypeSafe AI launches Jev, the first "System One" decision model](#item-3) ⭐️ 8.0/10
4. [Apple Unveils M6, Its First 2nm Chip, and Quad-Die M5 Ultra](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Xiaomi Releases MiMo v2.6 Omnimodal LLM Family With Flash and Pro Variants](https://mimo.xiaomi.com/mimo-v2-6) ⭐️ 8.0/10

Xiaomi announced the MiMo-V2.6 series, a pair of natively omnimodal large language models: MiMo-V2.6-Flash with 309B total and 15B activated parameters, and the flagship MiMo-V2.6-Pro with 1.02T total and 42B activated parameters. Weights for both are published on Hugging Face as MiMo-V2.6-Flash-RL and MiMo-V2.6-Pro-RL, and Xiaomi accompanied the launch with a public realtime training dashboard and a detailed technical report. A trillion-parameter-class release from a consumer electronics company signals that frontier-scale model development is no longer limited to a handful of dedicated AI labs, intensifying global competition. Because both variants use sparse Mixture-of-Experts activation and are positioned on price-performance, the release also pressures the cost curve for API access to high-capability models. The Pro tier mixes the need for a large budget, efficiency, and cost balancing, being positioned as the most capable Xiaomi model to date while Flash targets the best balance of intelligence, efficiency and cost; on OpenRouter, MiMo-V2.6-Pro is priced at roughly $0.435 per million input tokens and $0.87 per million output tokens. The headline parameter numbers describe total capacity including all stored experts, not the compute used per token, which is why a 1.02T model can activate only 42B parameters at inference time.

hackernews · volf_ · Sep 21, 20:12 · [Discussion](https://news.ycombinator.com/item?id=49792730)

**Background**: Mixture-of-Experts (MoE) models store many separate "expert" sub-networks in a checkpoint, so the total parameter count reflects all stored capacity while the active parameter count reflects only the experts and shared components actually used to process a single token. This lets a model have a very large memory footprint and knowledge capacity while keeping per-token compute (and therefore inference cost) far lower than a dense model of comparable size. Natively omnimodal means the model handles multiple input modalities such as text, images and audio from the start rather than through separately bolted-on modules. Training transparency — releasing training data details, code, dashboards or technical reports — has become a contested benchmark for what counts as a genuinely "open" model, and is also increasingly relevant to regulatory expectations such as the EU AI Act.

<details><summary>References</summary>
<ul>
<li><a href="https://mimo.xiaomi.com/mimo-v2-6">MiMo - V 2 . 6 | Xiaomi</a></li>
<li><a href="https://openrouter.ai/xiaomi/mimo-v2.6-pro">MiMo - V 2 . 6 -Pro - API Pricing & Providers | OpenRouter</a></li>
<li><a href="https://sebastianraschka.com/faq/docs/mixture-of-experts.html">Mixture-of-Experts (MoE) vs. Dense LLMs - Sebastian Raschka</a></li>

</ul>
</details>

**Discussion**: Commenters widely praised Xiaomi's transparency, with one noting the realtime training dashboard and comprehensive technical report were exceptionally useful learning tools, and another pointing out that this is about transparency rather than full openness (open weights and data). Several users said they are now more excited about Chinese models than American ones, citing affordability, while one argued China may win the AI race long-term thanks to its electricity and grid buildout, and others verified the models by rendering pelican SVGs and citing the exact Hugging Face checkpoints.

**Tags**: `#AI`, `#LLM`, `#Xiaomi`, `#Open Models`, `#Model Release`

---

<a id="item-2"></a>
## [Cloudflare Python Workers reach general availability](https://blog.cloudflare.com/python-workers-ga/) ⭐️ 8.0/10

Cloudflare announced the general availability of Python Workers, its Pyodide-based runtime for running Python on the Workers edge serverless platform, moving the feature out of open beta. The release highlights standardized package handling through PEP 783 (the PyEmscripten platform tag) and upstream contributions that let HTTP clients such as Requests route traffic through the JavaScript fetch API inside WebAssembly. Python is one of the most widely used languages for serverless workloads, and official GA support on Cloudflare's edge platform gives Python developers a first-class path to globally distributed, low-latency applications without managing servers. Standardizing Emscripten wheels through PEP 783 also benefits the broader Python-in-WebAssembly ecosystem, since packages built for Pyodide can now be published and resolved in a consistent, versioned way. The Python runtime works by having Cloudflare create a new V8 isolate for each Worker and automatically inject Pyodide, with JSPI support enabling HTTP libraries to be routed through the JS fetch API rather than raw sockets. Community members still flag cold-start and package-compatibility questions as the practical limits to watch, since WebAssembly-based Workers historically had longer spin-up times than native isolates.

hackernews · torutofu · Sep 21, 13:38 · [Discussion](https://news.ycombinator.com/item?id=49787142)

**Background**: Cloudflare Workers is a serverless platform that runs code in V8 isolates at data centers worldwide. Python Workers rely on Pyodide, an open-source distribution that ports CPython to WebAssembly via the Emscripten toolchain, allowing Python packages (including ones with C, C++ or Rust extensions) to run in browser-like or edge environments. PEP 783 introduces the versioned pyemscripten platform tag so that binary wheels for Pyodide can be built, published and installed in a standard way, replacing ad-hoc packaging arrangements.

<details><summary>References</summary>
<ul>
<li><a href="https://pyodide.org/en/stable/project/about.html">What is Pyodide? — Version 314.0.7</a></li>
<li><a href="https://peps.python.org/pep-0783/">PEP 783 – Emscripten Packaging | peps.python.org</a></li>
<li><a href="https://developers.cloudflare.com/workers/languages/python/how-python-workers-work/">How Python Workers Work · Cloudflare Workers docs</a></li>

</ul>
</details>

**Discussion**: An urllib3 maintainer added context that the Pyodide/Emscripten and later JSPI support in urllib3 came from large upstream contributions funded to the external contributor, not the maintainers, who reviewed the work. Wasmer's founder praised Cloudflare's progress and noted package support is now standardized via PEP 783, though he said some original architectural concerns remain; other commenters asked about cold-start performance and joked about the headline being misread as Python coders being replaced by AI.

**Tags**: `#cloudflare`, `#webassembly`, `#python`, `#serverless`, `#pyodide`

---

<a id="item-3"></a>
## [TypeSafe AI launches Jev, the first "System One" decision model](https://simonwillison.net/2026/Sep/21/jev/) ⭐️ 8.0/10

On 15 September 2026, TypeSafe AI released Jev in limited early access as the first of a new model category it calls "System One models" — a name that critics such as Maggie Appleton argue is better replaced by "decision models." Jev accepts text or semi-structured "state" input and returns typed probabilistic outputs instead of prose: Bernoulli-style confidence floats for yes/no questions (which TypeSafe calls "Noul" questions), a probability distribution over a set of choices, and floating-point scores along a supplied numeric scale. Jev signals a shift in how LLMs are packaged: instead of generating text that downstream code must parse, it emits decisions that software can consume directly, which makes it a natural fit for classification tasks such as spam detection, labelling, prioritisation and search reranking. Its pricing — $0.042 per million input tokens with output effectively free — undercuts OpenAI's GPT-5 Nano at $0.05 per million, and the launch came alongside a $40 million seed round led by DCVC, suggesting investors see a distinct market for non-generative inference. TypeSafe claims 70–500ms latency and parallel evaluation of questions, so sending many questions against a single state takes roughly the same time as sending one, and the API accepts a single state plus as many questions as fit in the context window. The trade-off is transparency: Jev returns only floating-point numbers, with no justification or token-level explanation, so Willison warns that biases baked into the model could be concealed and hard to probe experimentally, and that applications like ranking job applicants should be avoided.

rss · Simon Willison · Sep 21, 23:09

**Background**: Most large language models are priced by input and output tokens, with output billed at a much higher rate, and they communicate by generating text that a program then has to parse — often with retries and schema validation. Jev removes that step by treating the model as "a frontier-intelligence function call": unstructured state in, typed probabilistic decisions out. The naming draws on Kahneman's System 1/System 2 distinction (fast, intuitive decisions versus slow deliberation), and the term "Noul" is confirmed by TypeSafe's CEO on Hacker News to be short for Bernoulli, referring to the Bernoulli distribution that describes a single yes/no outcome with probability p. For retrieval-style uses such as reranking, Willison pairs Jev with BM25, a classic keyword-based ranking function, using it to fetch roughly 100 candidate documents and then having Jev score each one for relevance.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jev_(AI_model)">Jev (AI model) - Wikipedia</a></li>
<li><a href="https://docs.typesafe.ai/introduction">Introduction - TypeSafe AI</a></li>
<li><a href="https://www.langchain.com/blog/building-a-harness-with-jev">What Is Jev? A Guide to TypeSafe AI ’s System One Model</a></li>

</ul>
</details>

**Discussion**: The most visible discussion point has been naming: Maggie Appleton argued on X that "decision models" is a better label than "System One," a view Willison endorsed, and TypeSafe's CEO clarified on Hacker News that "Noul" is short for Bernoulli. Willison also raised the substantive concern that Jev marks a regression toward opaque black-box machine learning, since a single float reveals nothing about which content signals drove the decision — a worry about hidden bias that is likely to shape how cautiously the model is adopted.

**Tags**: `#LLM`, `#AI`, `#decision-models`, `#probabilistic-reasoning`, `#TypeSafe AI`

---

<a id="item-4"></a>
## [Apple Unveils M6, Its First 2nm Chip, and Quad-Die M5 Ultra](https://t.me/zaihuapd/43965) ⭐️ 8.0/10

Apple announced the M6, its first 2-nanometer chip, debuting in a new Mac mini with a 12-core CPU, 12-core GPU, dual 16-core Neural Engines, and up to 170GB/s of unified memory bandwidth. In parallel, Apple introduced the M5 Ultra in a new Mac Studio — the company's first quad-die M-series chip — with up to 36 CPU cores, 80 GPU cores, 512GB of unified memory, and 1.2TB/s of bandwidth, roughly 50% more than the M3 Ultra. The M6 marks Apple's move to the 2nm generation of silicon, which should meaningfully improve performance-per-watt across its most popular Macs, while the quad-die M5 Ultra pushes unified memory capacity into workstation and local-AI territory that previously required discrete GPUs or servers. Together they signal that Apple is betting on chip-level integration — especially memory bandwidth and on-device AI — as its main differentiator against x86 and Windows-on-ARM rivals. Apple has not published benchmarks or detailed die shots, so the performance claims rest on the core counts and bandwidth figures: the M5 Ultra is formed by bridging two dual-die M5 Max chips via an upgraded UltraFusion interconnect, making it Apple's largest and most powerful chip to date. As with all process-node names, "2nm" is a marketing label rather than a literal physical dimension, and real gains depend on the underlying transistor architecture and interconnect design.

telegram · zaihuapd · Sep 21, 16:32

**Background**: Apple silicon chips are designed in-house and manufactured by TSMC, and the shift to a 2nm-class node is significant because such nodes typically adopt gate-all-around (GAA) nanosheet transistors, which replace the finFET designs used at earlier nodes and offer better speed and power efficiency. Apple's M-series line is tiered — base, Pro, Max and Ultra — where the Ultra variant is historically made by fusing two Max dies together via the UltraFusion packaging technology, so a quad-die Ultra is a notable packaging first. Unified memory means the CPU, GPU and Neural Engine share one high-bandwidth memory pool, which is why bandwidth and maximum capacity numbers matter so much for AI workloads. The Neural Engine is Apple's dedicated neural processing unit (NPU), first introduced in the A11 Bionic in 2017, used to accelerate machine-learning tasks on device.

<details><summary>References</summary>
<ul>
<li><a href="https://au.pcmag.com/processors/119512/apple-m5-ultra-and-m6-silicon-explained-2nm-tech-quad-die-chips-promise-macs-massive-ai-muscle">Apple M5 Ultra and M6 Silicon Explained: 2nm Tech, Quad-Die Chips Promise Macs Massive AI Muscle</a></li>
<li><a href="https://en.wikipedia.org/wiki/2_nm_process">2 nm process - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Neural_Engine">Neural Engine - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#Apple Silicon`, `#Hardware`, `#Semiconductor`, `#Chip Design`, `#Mac`

---

