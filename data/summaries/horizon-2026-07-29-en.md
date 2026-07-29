# Horizon Daily - 2026-07-29

> From 42 items, 9 important content pieces were selected

---

1. [Self-replicating prompt injection worm targets Microsoft Word Copilot](#item-1) ⭐️ 9.0/10
2. [Open-source engine runs Gemma 4 26B in 2 GB RAM on Mac](#item-2) ⭐️ 8.0/10
3. [Mitchell Hashimoto Launches Superlogical on libghostty](#item-3) ⭐️ 8.0/10
4. [Kimi Releases K3-256k at Half Cost](#item-4) ⭐️ 8.0/10
5. [Long Policies Fail to Guide AI Agents Reliably](#item-5) ⭐️ 8.0/10
6. [Modular Datacenters: Solving the Labor Crisis](#item-6) ⭐️ 8.0/10
7. [ncnn Vulkan backend speeds up ML inference on edge devices](#item-7) ⭐️ 8.0/10
8. [Claude Shared Chat Links Indexed by Search Engines, Leaking Private Data](#item-8) ⭐️ 8.0/10
9. [Report: Hugging Face Widely Used to Generate Deepfake Nudes](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Self-replicating prompt injection worm targets Microsoft Word Copilot](https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything) ⭐️ 9.0/10

Security researcher Håkon Måløy discovered a new variant of prompt injection that turns Microsoft Word documents into self-replicating worms when used with Copilot. The attack hides malicious instructions in a document that Copilot executes and propagates to new documents, enabling replication without the original file. This research demonstrates that AI-assisted tools like Copilot can be exploited to create self-replicating malware, raising serious security concerns for enterprise environments. It highlights the fundamental challenge of separating instructions from data in LLMs, which has no current robust mitigation. The attack uses hidden white-on-white text to embed instructions that Copilot interprets as part of the user's request, causing it to manipulate the document and copy the instructions into new files. The vulnerability was responsibly disclosed to Microsoft 144 days ago, but no fix covering the full attack class has been released.

rss · Simon Willison · Jul 29, 18:43

**Background**: Prompt injection is a cybersecurity attack where carefully crafted inputs cause LLMs to ignore developer instructions and follow user-provided malicious commands. Self-replicating programs, commonly known as worms, autonomously copy themselves to spread across systems. This attack combines both concepts: prompt injection enables the worm-like replication by exploiting Copilot's inability to distinguish between user prompts and content in documents.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection_attack">Prompt injection attack</a></li>
<li><a href="https://en.wikipedia.org/wiki/Self-replicating_computer_program">Self-replicating computer program</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters expressed deep concern, with many noting that this type of attack is fundamentally unfixable as long as LLMs mix instructions with data. Some users mentioned they have already uninstalled Copilot and disabled AI features to prevent such exploits, while others highlighted additional attack vectors like Unicode tricks.

**Tags**: `#prompt injection`, `#AI security`, `#cybersecurity`, `#Microsoft Word`, `#Copilot`

---

<a id="item-2"></a>
## [Open-source engine runs Gemma 4 26B in 2 GB RAM on Mac](https://github.com/drumih/turbo-fieldfare) ⭐️ 8.0/10

TurboFieldfare is a Swift and Metal inference engine that runs the 4-bit quantized Gemma 4 26B-A4B-IT model on any M-series Mac using approximately 2 GB of RAM by streaming routed experts from SSD rather than loading the full model into memory. This enables running a capable 26B parameter model on low-memory devices like the 8 GB MacBook Air, dramatically lowering the hardware barrier for on-device AI inference and demonstrating a practical approach to large model deployment on consumer hardware. It achieves 5–6 tokens per second on an 8 GB M2 MacBook Air and 31–35 tokens per second on an M5 MacBook Pro, and includes an experimental OpenAI-compatible local server with streaming and tool call support.

hackernews · gitpusher42 · Jul 29, 15:05 · [Discussion](https://news.ycombinator.com/item?id=49098510)

**Background**: Large language models like Gemma 4 26B are Mixture-of-Experts (MoE) models, where only a subset of 'expert' parameters are activated per token, but the full set of weights can be 14 GB or more. Conventional inference loads all weights into RAM, which is impossible on devices with limited memory (e.g., 8 GB Mac). TurboFieldfare keeps only the shared layers and key-value cache in RAM, and streams the needed experts from SSD on demand, using a small expert cache and bounded parallel reads to mitigate SSD latency.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mixture_of_experts">Mixture of experts - Wikipedia</a></li>
<li><a href="https://huggingface.co/blog/moe">Mixture of Experts Explained</a></li>
<li><a href="https://mbrenndoerfer.com/writing/kv-cache-transformer-attention-optimization">KV Cache Explained: Efficient Attention for LLM Generation</a></li>

</ul>
</details>

**Discussion**: Commenters noted that this approach addresses a practical limitation, with one user wondering why large models must be fully loaded into memory. Another user compared the method to plain mmap, and the author explained the synchronized SSD reads. Performance tips for older macOS versions were shared, and a developer working on a related DiffusionGemma project expressed interest in collaboration.

**Tags**: `#inference engine`, `#Gemma 4`, `#on-device AI`, `#memory efficiency`, `#Swift/Metal`

---

<a id="item-3"></a>
## [Mitchell Hashimoto Launches Superlogical on libghostty](https://www.superlogical.com/) ⭐️ 8.0/10

Mitchell Hashimoto announced Superlogical, a new company building on the open-source libghostty terminal components, with its first product being a terminal multiplexer. This news matters because it comes from a prominent creator (co-founder of HashiCorp, creator of Ghostty) and demonstrates a sustainable model for commercial products built on open-source foundations with upstream contributions. The company will first build a terminal multiplexer as the foundation for a larger vision; importantly, Hashimoto transferred ownership of Ghostty to a non-profit before starting Superlogical.

hackernews · yan · Jul 29, 15:41 · [Discussion](https://news.ycombinator.com/item?id=49098965)

**Background**: libghostty is the MIT-licensed terminal rendering engine from the Ghostty terminal emulator, designed to be reused as a library. Several projects like Ghostel (Emacs terminal), cmux (multiplexer), and Mux0 (macOS terminal) already use libghostty. Superlogical will consume the same open-source components and continue to upstream shared work.

<details><summary>References</summary>
<ul>
<li><a href="https://runtimewire.com/article/mitchell-hashimoto-superlogical-terminal-multiplexer">Mitchell Hashimoto starts Superlogical to build durable... - RuntimeWire</a></li>
<li><a href="https://digg.com/tech/a2bf2pz7">Mitchell Hashimoto Launches Superlogical to Build Terminal...</a></li>
<li><a href="https://cmux.com/">cmux - The terminal built for multitasking</a></li>

</ul>
</details>

**Discussion**: Community members largely praised the open-source model, with simonw highlighting the transfer to a non-profit. danbruc drew parallels to OLE/COM, while brandall10 noted similarity to other projects like pi-web and herdr. A few users criticized the title as enigmatic or clickbait.

**Tags**: `#software-engineering`, `#open-source`, `#terminal`, `#announcement`, `#ghostty`

---

<a id="item-4"></a>
## [Kimi Releases K3-256k at Half Cost](https://www.kimi.com/code/docs/en/kimi-code/models) ⭐️ 8.0/10

Kimi has released a 256k context version of its K3 model, costing only half the quota of the original 1M version while delivering identical performance within the 256k window. This significantly lowers the cost of using long-context AI, addressing user demands for more affordable models and potentially enabling broader adoption in document and code analysis. The K3-256k maintains the same output quality as the K3 (1M) within 256k tokens but consumes approximately half the quota. This makes it a cost-effective choice for most long-context tasks that do not require the full 1M window.

hackernews · monneyboi · Jul 29, 19:25 · [Discussion](https://news.ycombinator.com/item?id=49101852)

**Background**: Context window refers to the maximum number of tokens a language model can process in one go. Models like Kimi K3 originally offered a 1M-token window, which is powerful but costly. The new 256k variant targets users who rarely exceed this threshold, providing a cheaper alternative without sacrificing performance.

<details><summary>References</summary>
<ul>
<li><a href="https://kimi-k25.com/blog/kimi-k2-5-context-window">Kimi K2.5 Context Window: 256K Tokens for Long Documents ...</a></li>
<li><a href="https://www.morphllm.com/llm-context-window-comparison">LLM Context Window Comparison (2026): 20 Models From 200K to ...</a></li>

</ul>
</details>

**Discussion**: Comments are largely positive. Users note that 256k is sufficient for most use cases (timcobb, madihaa), and some hope it reduces server load (dools) while speculating previous quality drops were due to quantization. Another user highlights this effectively halves the price for all users (xyzsparetimexyz).

**Tags**: `#AI`, `#language-models`, `#cost-efficiency`, `#context-window`, `#kimi`

---

<a id="item-5"></a>
## [Long Policies Fail to Guide AI Agents Reliably](https://arxiv.org/abs/2607.25398) ⭐️ 8.0/10

The paper Handbook.md demonstrates that lengthy policy documents do not reliably govern AI agents, primarily due to limitations in long-context processing and model quantization. This challenges the assumption that AI agents can safely follow extensive written policies, with major implications for AI safety, alignment, and system design, especially as agents are deployed in real-world tasks. The paper likely shows that as policy length increases, agent compliance degrades, and quantization of models exacerbates the issue by reducing precision in attention mechanisms.

hackernews · spIrr · Jul 29, 13:01 · [Discussion](https://news.ycombinator.com/item?id=49096969)

**Background**: Long context models claim to handle up to 1 million tokens but suffer from 'lost in the middle' effects where information in the middle of long texts is often ignored. Model quantization reduces the size of neural networks by lowering numerical precision, which can degrade model performance and reasoning ability, especially in long contexts.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Quantization_machine_learning">Quantization (machine learning)</a></li>
<li><a href="https://www.linkedin.com/pulse/deciphering-ai-paradigms-long-context-models-vs-generation-kimes-6reqe">Deciphering AI Paradigms: Long - Context Models vs....</a></li>
<li><a href="https://arafetlamari.medium.com/lost-in-the-middle-how-language-models-really-use-long-context-and-why-it-matters-f80947336870">Lost in the Middle: How Language Models Really Use Long Context ...</a></li>

</ul>
</details>

**Discussion**: Community comments largely validate the paper's findings: DiabloD3 criticizes long context claims as unreliable due to quantization and poor samplers, recommending local inference; wongarsu notes that humans also struggle with long policies; mcdeltat reports that Claude ignores CLAUDE.md after a while; zwaps criticizes AI-generated writing in the paper; msejas argues that agentic AI is a synthetic capability forced via reinforcement learning. Overall, users are skeptical of long context reliability.

**Tags**: `#AI alignment`, `#LLM context`, `#AI safety`, `#long context models`

---

<a id="item-6"></a>
## [Modular Datacenters: Solving the Labor Crisis](https://newsletter.semianalysis.com/p/the-wild-wild-west-of-lego-datacenters) ⭐️ 8.0/10

A new analysis from Semianalysis highlights the severe labor shortage plaguing datacenter construction and argues that modularization—using prefabricated, factory-built modules—offers a viable path forward. Modular datacenters can reduce construction time from months to weeks, easing the bottleneck of infrastructure scaling needed to support AI and cloud computing growth. Prefabricated modules integrate power, cooling, and IT equipment in a factory setting, then are shipped and assembled on-site, minimizing on-labor requirements and weather delays.

rss · Semianalysis · Jul 29, 22:09

**Background**: Traditional datacenter construction relies heavily on skilled labor, which is increasingly scarce. Modular datacenters are built in controlled factory environments with standardized components, enabling faster deployment and reduced costs. This approach is gaining traction as hyperscalers like Google and Microsoft seek to accelerate capacity expansion.

<details><summary>References</summary>
<ul>
<li><a href="https://encoradvisors.com/modular-data-center/">The Modular Data Center Ultimate Guide [2025] - ENCOR Advisors</a></li>
<li><a href="https://www.moduledge.com/blog/modular-data-center-guide">Modular Data Center Guide: Types & When It Wins | ModulEdge</a></li>
<li><a href="https://www.vertiv.com/en-asia/solutions/prefabricated-data-center/">Prefabricated Modular Data Center</a></li>

</ul>
</details>

**Tags**: `#datacenters`, `#modularization`, `#labor`, `#infrastructure`

---

<a id="item-7"></a>
## [ncnn Vulkan backend speeds up ML inference on edge devices](https://www.reddit.com/r/MachineLearning/comments/1v9s4mz/vendoragnostic_ml_inference_on_production_edge/) ⭐️ 8.0/10

Using ncnn's Vulkan backend, PostSlate achieved 10x speedups for face detection and embedding models on production edge devices, moving from ONNX CPU-based inference to GPU-accelerated Vulkan compute without requiring any vendor-specific runtimes like CUDA. This approach enables truly cross-platform ML inference across all major GPU vendors (NVIDIA, AMD, Intel, Apple Silicon) with a single backend, eliminating fragmentation and simplifying deployment for edge AI applications. The reported speedups: ArcFace R50 face embedding went from 30 ms (ONNX CPU) to 3 ms (ncnn Vulkan), and SCRFD face detection from 25 ms to 2.5 ms, while model size halved from fp32 to fp16 weight storage.

reddit · r/MachineLearning · /u/ppchaos · Jul 29, 10:22

**Background**: ncnn is a high-performance neural network inference framework originally developed by Tencent, optimized for mobile and edge platforms. Vulkan is a low-overhead, cross-platform GPU API supported on all modern GPUs. By using ncnn's Vulkan backend, developers can leverage GPU compute for ML inference without relying on proprietary frameworks like CUDA, making it ideal for production environments where users have diverse hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://www.khronos.org/developers/linkto/ncnn-universal-neural-network-inference-with-vulkan">ncnn - universal neural network inference with vulkan</a></li>
<li><a href="https://github.com/Tencent/ncnn/wiki/FAQ-ncnn-vulkan">FAQ ncnn vulkan · Tencent/ncnn Wiki</a></li>
<li><a href="https://www.phoronix.com/news/NVIDIA-Vulkan-AI-ML-Success">NVIDIA Is Finding Great Success With Vulkan Machine Learning ...</a></li>

</ul>
</details>

**Tags**: `#ML inference`, `#Vulkan`, `#edge devices`, `#ncnn`, `#cross-platform`

---

<a id="item-8"></a>
## [Claude Shared Chat Links Indexed by Search Engines, Leaking Private Data](https://t.me/zaihuapd/42830) ⭐️ 8.0/10

Anthropic's Claude shared conversation feature has been found to generate public URLs that lack a noindex meta tag, causing them to be indexed by search engines like Google and exposing sensitive user data including API keys, cryptocurrency wallets, and personal information. This privacy vulnerability affects any Claude user who has shared a conversation, as their potentially sensitive data becomes publicly searchable. It undermines trust in AI assistants and highlights the critical need for proper access controls in sharing features. The leaked data includes API keys, cryptocurrency wallet details, resumes, legal consultations, internal company projects, and social security numbers. A similar issue existed in ChatGPT about a year ago and was quickly fixed, but Anthropic has not yet addressed this vulnerability.

telegram · zaihuapd · Jul 29, 02:40

**Background**: The noindex meta tag is a standard HTML directive that tells search engine crawlers not to index a page. Without it, any public URL can be discovered through search queries. Similarly, robots.txt files can be used to block crawler access, but they rely on voluntary compliance. Claude's sharing feature creates publicly accessible snapshots of conversations, but Anthropic failed to include noindex in the generated pages, leading to mass indexing.

<details><summary>References</summary>
<ul>
<li><a href="https://support.claude.com/en/articles/10593882-share-and-unshare-chats">Share and unshare chats | Claude Help Center</a></li>
<li><a href="https://moz.com/learn/seo/robots-meta-directives">What Are Robot Meta Tags ? And How to Implement them - Moz</a></li>

</ul>
</details>

**Tags**: `#Claude`, `#隐私泄露`, `#安全漏洞`, `#AI`, `#搜索引擎索引`

---

<a id="item-9"></a>
## [Report: Hugging Face Widely Used to Generate Deepfake Nudes](https://www.theverge.com/ai-artificial-intelligence/971723/hugging-face-nudify-deepfake-undress-women-children) ⭐️ 8.0/10

A report by European nonprofit AI Forensics, released on July 28, reveals that the open-source model hosting platform Hugging Face is heavily exploited to generate non-consensual deepfake pornography, with 7 of the top 9 image editing models easily undressing women on simple prompts. This report highlights a major platform governance failure regarding AI ethics, as Hugging Face lacks effective content moderation despite its policies against non-consensual content and child exploitation, potentially exposing millions of users to harmful material. The organization set up honeypot models that received over 1,000 requests in 7 days, of which 73% were sexually explicit and nearly 7% targeted children. Researchers did not need to craft sophisticated prompts to bypass protections.

telegram · zaihuapd · Jul 29, 08:20

**Background**: Hugging Face is a popular platform for hosting open-source machine learning models, including image generation models. Deepfake technology uses AI to create realistic fake images or videos, often used maliciously to generate non-consensual pornography. A honeypot is a decoy system used to detect and analyze attacks; here it was deployed to observe real-world misuse. The report recommends prompt filtering and output scanning to prevent harmful generation.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hugging_Face">Hugging Face - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Honeypot_(computing)">Honeypot (computing) - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI伦理`, `#深度伪造`, `#内容审核`, `#Hugging Face`, `#平台责任`

---

