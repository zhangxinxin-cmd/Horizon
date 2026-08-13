---
layout: default
title: "Horizon Summary: 2026-08-13 (EN)"
date: 2026-08-13
lang: en
---

> From 32 items, 9 important content pieces were selected

---

1. [Spaghettifying DRAM: New Attack Expands Hardware Attack Surface](#item-1) ⭐️ 9.0/10
2. [DeepSeek V4 Pro 0813 Released via API and Open Weights on Hugging Face](#item-2) ⭐️ 9.0/10
3. [Google Launches Gemini 3.7 Flash, a Speedy New AI Model](#item-3) ⭐️ 8.0/10
4. [Choose Boring Technology: The Enduring Case for Innovation Tokens](#item-4) ⭐️ 8.0/10
5. [DeepSeek Releases MIT-Licensed DeepSeek Harness Developer Preview](#item-5) ⭐️ 8.0/10
6. [DeepMind's SL2T Brings Sign-Language-to-Text AI to Pixel 11](#item-6) ⭐️ 8.0/10
7. [DeepSeek Releases Open-Source Harness and V4-Pro-0813 Weights](#item-7) ⭐️ 8.0/10
8. [OpenAI Upgrades ChatGPT with GPT-5.6 Series and Expands Free Access](#item-8) ⭐️ 8.0/10
9. [Google Releases Gemini 3.6 Flash, Reveals Gemini 4 Pretraining Has Begun](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Spaghettifying DRAM: New Attack Expands Hardware Attack Surface](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) ⭐️ 9.0/10

Christopher Domas unveiled a new DRAM manipulation technique, named "Spaghettifying DRAM," that exploits DRAM controller translation registers on AMD Family 16h CPUs to enable deep system compromise. The work was presented at Black Hat and expands the hardware attack surface beyond conventional software boundaries. This research shows that once an attacker gains ring-0 (kernel) execution, DRAM controller registers can be used to reach hidden "negative ring" territories, effectively bypassing protections that isolate privileged system components. It highlights how memory controller design can turn a software foothold into full hardware-level compromise, with potential implications for game consoles and other locked-down systems. According to the README, the technique was developed and tested on AMD Family 16h (Jaguar) CPUs, whose datasheets are the last to document DRAM controller translation registers and show that they cannot be locked. Newer processors such as Zen 3 use a different base address for the memory controller registers, meaning the attack surface varies across CPU families.

hackernews · matt_d · Aug 13, 14:17 · [Discussion](https://news.ycombinator.com/item?id=49286341)

**Background**: DRAM controllers translate a CPU's physical addresses into the specific row, column, and bank locations inside memory chips; these internal mappings are normally managed by the hardware. On some older AMD processors, the registers controlling this translation are documented but not lockable, creating an attack surface that can be manipulated by software. The name "spaghettifying" borrows the astrophysical term for how tidal forces stretch objects vertically and compress them horizontally, describing how the technique distorts DRAM addressing. This research expands the notion of hardware attack surface by showing that memory controller internals can be abused once an attacker achieves kernel-level access.

<details><summary>References</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=49286341">Spaghettifying DRAM | Hacker News</a></li>
<li><a href="https://en.wikipedia.org/wiki/Spaghettification">Spaghettification - Wikipedia</a></li>
<li><a href="https://arxiv.org/pdf/2005.13121">Revisiting RowHammer: An Experimental Analysis of Modern DRAM ...</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters expressed enthusiasm for Christopher Domas's upcoming Black Hat talk, with some noting that the technique is verified on AMD Jaguar (Family 16h) and questioning which newer CPUs are vulnerable. Others observed that while ring-0 access is required, this could make game console security (e.g., Xbox, PlayStation) particularly fragile once kernel code execution is achieved. Overall sentiment is fascinated but cautious, with requests for more details on processor family coverage.

**Tags**: `#security`, `#DRAM`, `#hardware`, `#exploit`, `#Black Hat`

---

<a id="item-2"></a>
## [DeepSeek V4 Pro 0813 Released via API and Open Weights on Hugging Face](https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/) ⭐️ 9.0/10

DeepSeek has released DeepSeek V4 Pro 0813, now available via API on OpenRouter, with open weights published on Hugging Face. The model has 1.7 trillion parameters and weighs 893 GB. This release matters because DeepSeek continues publishing powerful open-weight models, giving developers and researchers a large-scale alternative to closed commercial models. The 1.7-trillion-parameter scale could also raise expectations for what open models can achieve. The model is API-only and has no official announcement page; weights are available at deepseek-ai/DeepSeek-V4-Pro-0813 on Hugging Face. Simon Willison found that the model produced very different pelican images across low, medium, and high reasoning levels, which he had not seen from other models; benchmarks reportedly leaked via WeChat, then a deleted Reddit post, then an ASCII table on Hacker News.

rss · Simon Willison · Aug 12, 23:59

**Background**: OpenRouter is a unified API gateway and marketplace that routes an OpenAI-compatible request across more than 400 large language models from 70+ providers. In LLMs, parameters are internal weights learned during training that capture language patterns; more parameters generally correlate with greater capability. Open-weight models release these trained weights publicly, allowing anyone to download, run, and modify them. DeepSeek previously released V4 Pro and V4 Flash open-weight versions in April and July 2026.

<details><summary>References</summary>
<ul>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>
<li><a href="https://www.geeksforgeeks.org/artificial-intelligence/what-are-llm-parameters/">LLM Parameters - GeeksforGeeks</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#AI`, `#Large Language Model`, `#Open Source`, `#Model Release`

---

<a id="item-3"></a>
## [Google Launches Gemini 3.7 Flash, a Speedy New AI Model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/) ⭐️ 8.0/10

Google introduced Gemini 3.7 Flash, a new efficient model in the Flash series, just three weeks after the release of 3.6 Flash. The model features improved reasoning and competitive vision-to-HTML performance, along with a notable introductory pricing schedule that is set to double on December 31, 2026. This release signals Google's rapid iteration in the competitive AI model market, targeting low-cost, high-volume coding and agent use cases. With active community testing and comparisons against rivals like GPT-5.6 Luna and Opus, the pricing and performance will influence developer choices and the broader AI ecosystem. The model supports customizable thinking configurations to balance quality, cost, and latency. According to community discussion, the introductory pricing will increase to $1.50 per 1M input tokens and $7.50 per 1M output tokens starting January 1, 2027.

hackernews · thisisauserid · Aug 13, 17:23 · [Discussion](https://news.ycombinator.com/item?id=49289112)

**Background**: Gemini is Google DeepMind's family of multimodal large language models, and the Flash series is designed to be a fast, cost-efficient workhorse for everyday AI tasks. The new 3.7 Flash builds on developer feedback and algorithmic improvements from the previous 3.6 Flash release, aiming to deliver higher intelligence while keeping costs low for high-volume usage.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/">Gemini 3.7 Flash: our most intelligent workhorse model</a></li>
<li><a href="https://deepmind.google/models/model-cards/gemini-3-7-flash/">Gemini 3.7 Flash - Model Card — Google DeepMind</a></li>

</ul>
</details>

**Discussion**: Community members ran hands-on tests, with one developer noting Gemini 3.7 Flash performs well on vision-to-HTML but Opus 5 remains best in class. Others questioned the unusual introductory pricing and argued that GPT-5.6 Luna offers better performance at a lower price, while some praised the model's strong DeepSWE 1.1 results.

**Tags**: `#AI`, `#Gemini`, `#Machine Learning`, `#Model Release`, `#Pricing`

---

<a id="item-4"></a>
## [Choose Boring Technology: The Enduring Case for Innovation Tokens](https://mcfunley.com/choose-boring-technology) ⭐️ 8.0/10

Dan McKinley's influential 2015 essay argues that companies should default to boring, proven technology for most problems, and only spend limited 'innovation tokens' on novel tools where differentiation truly matters. This essay is a foundational piece in software engineering culture, and its 'innovation tokens' concept helps engineering leaders make technology tradeoffs more explicitly. It remains highly relevant today, with community discussions extending the idea to modern AI agent development. The essay centers on Dan McKinley's 'innovation tokens' metaphor: every company gets a small, fixed number of tokens for adopting new technology, so teams should spend them only where differentiation matters and use boring technology everywhere else.

hackernews · tosh · Aug 13, 17:48 · [Discussion](https://news.ycombinator.com/item?id=49289512)

**Background**: Dan McKinley's 2015 essay argues that most engineering problems are best solved with boring, mature technology rather than the latest buzzword. He introduces the idea of 'innovation tokens'—a fixed supply of organizational tolerance for change—which should be spent only on the few problems where innovation truly creates a competitive advantage. This concept has since been widely referenced in engineering leadership conversations about when to adopt new tools.

<details><summary>References</summary>
<ul>
<li><a href="https://www.lessannoyingbusiness.com/post/innovation-tokens">Innovation Tokens - When to break from the status quo</a></li>
<li><a href="https://xebia.com/blog/how-innovation-tokens-can-change-your-life/">How Innovation Tokens Can Change Your Life | Xebia</a></li>
<li><a href="https://hybridcopynet.wordpress.com/2026/01/04/innovation-tokens/">Innovation Tokens – Hybrid Copy</a></li>

</ul>
</details>

**Discussion**: Comments are largely positive, with many calling it a classic that helps explain technology tradeoffs. Some extend the idea to modern AI agents, arguing teams should spend their innovation budget on the agents themselves and use boring technology for the surrounding infrastructure. A few push back, saying the 'innovation tokens' metaphor is too arbitrary and that engineers should evaluate risks and tradeoffs case by case.

**Tags**: `#software engineering`, `#technology strategy`, `#engineering culture`, `#essay`

---

<a id="item-5"></a>
## [DeepSeek Releases MIT-Licensed DeepSeek Harness Developer Preview](https://deepseek.com/harness/en/) ⭐️ 8.0/10

DeepSeek has released an early developer preview of DeepSeek Harness, an agent orchestration framework, under the MIT license. It emphasizes full traceability via append-only session logs, hot-reload capabilities, and dynamic plugin management. This is significant because DeepSeek, a major AI lab, is open-sourcing an orchestration tool with traceability features that are often restricted in US models. It could influence developer tooling for AI agents and encourage more transparent, auditable agent systems. The framework logs everything the model sees in an append-only session log, including system prompts, reasoning, tool calls, and context injections, all inspectable in a Trajectory view. It is built on Cordis v4, which supports hot-loading and unloading plugins with state rollback, as noted by community members.

hackernews · bjin · Aug 13, 12:58 · [Discussion](https://news.ycombinator.com/item?id=49285244)

**Background**: Agent orchestration frameworks coordinate multiple AI agents and tools to complete complex tasks. Full traceability lets developers see exactly what an agent did, improving debugging and trust, while hot-reload lets code changes take effect without restarting a running process. DeepSeek Harness appears to combine these features in a developer-friendly, MIT-licensed package.

<details><summary>References</summary>
<ul>
<li><a href="https://www.kore.ai/ai-glossary/what-is-agent-traceability">What is agent traceability and why is it important? - kore.ai</a></li>
<li><a href="https://www.autolearningagents.com/ai-agent-architecture/hot-config-reload.php">Hot Configuration Reload in Agent Systems</a></li>
<li><a href="https://github.com/vivy-yi/awesome-agent-orchestration">GitHub - vivy-yi/awesome-agent-orchestration: ⭐ Curated list of AI Agent frameworks: AutoGen, CrewAI, MetaGPT, LangGraph, Swarms. Multi-Agent Systems, Swarm Intelligence, A2A Protocol, MCP Protocol. LLM Agents, Agentic AI, Agent Workflows.</a></li>

</ul>
</details>

**Discussion**: Community reactions are positive, with one user calling traceability a 'killer feature' that US models don't allow. The author confirmed it is an early preview with rough edges, while others noted its relationship to Cordis v4 and compared it to libraries like cloudwego/eino.

**Tags**: `#deepseek`, `#ai-agents`, `#developer-tools`, `#open-source`, `#orchestration`

---

<a id="item-6"></a>
## [DeepMind's SL2T Brings Sign-Language-to-Text AI to Pixel 11](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/) ⭐️ 8.0/10

Google DeepMind has unveiled SL2T, a large-scale multilingual sign-language-to-text model, which is now powering sign-to-text features in Gboard and Live Transcribe on the Pixel 11. Supporting American Sign Language (ASL) to English initially, it was trained on over 100,000 hours of data across more than 50 sign languages. This marks the first time sign-language AI has been integrated into mainstream consumer devices, a significant leap for accessibility and multimodal AI. It offers Deaf and hard-of-hearing users a practical tool to convert signing into text in everyday contexts like messaging and live captions. For privacy, SL2T processes only hand and body pose keypoints rather than raw video footage. It achieves a zero-shot score of 70 BLEURT on the FLEURS-ASL benchmark, far surpassing previous records, and will expand to more devices and languages over time.

telegram · zaihuapd · Aug 13, 08:55

**Background**: Sign-language-to-text AI converts video of sign language into written text, a task that has long lagged behind speech recognition. FLEURS-ASL is a benchmark introduced to extend the FLORES/FLEURS parallel evaluation sets to American Sign Language, providing a standard test for such models. BLEURT is a learned evaluation metric based on BERT that measures how well a generated text conveys the meaning of a reference sentence. DeepMind's SL2T is notable for moving this technology from research into a shipped consumer product.

<details><summary>References</summary>
<ul>
<li><a href="https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/">Putting sign language AI into users’ hands — Google DeepMind</a></li>
<li><a href="https://arxiv.org/abs/2408.13585">[2408.13585] FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation</a></li>
<li><a href="https://github.com/google-research/bleurt">GitHub - google-research/bleurt: BLEURT is a metric for Natural Language Generation based on transfer learning. · GitHub</a></li>

</ul>
</details>

**Tags**: `#Sign Language`, `#DeepMind`, `#AI`, `#Accessibility`, `#Multimodal`

---

<a id="item-7"></a>
## [DeepSeek Releases Open-Source Harness and V4-Pro-0813 Weights](https://mp.weixin.qq.com/s/mANdGRI4fO_sEbC1ECEoZQ) ⭐️ 8.0/10

DeepSeek released DeepSeek Harness, an open-source agent harness under the MIT license, and made the DeepSeek-V4-Pro-0813 model weights available on Hugging Face. The harness uses a plugin-based architecture where every capability can be swapped or recomposed. This signals DeepSeek's push into developer tooling and positions Harness as an open-source, model-agnostic alternative to agent infrastructure like Claude Code and Codex. Opening the V4-Pro-0813 weights could accelerate community customization and adoption of DeepSeek models. The harness is powered by the Cordis framework, described as a meta-framework for spatiotemporal composability, and offers standard, PTC, minimalist, and creative operating modes. The Hugging Face page briefly returned a 404 error before being restored, and the GitHub repository opened later in the evening.

telegram · zaihuapd · Aug 13, 12:39

**Background**: An agent harness is the infrastructure that connects a language model to tools, sessions, storage, sandboxes, and user interfaces, similar to what powers tools like Claude Code and Codex. DeepSeek Harness is built on Cordis, an open-source meta-framework designed around the idea that all components can be composed in space and time. By making every capability a plugin, the project aims to give developers maximum flexibility in building and reconfiguring agent systems. V4-Pro-0813 is a DeepSeek model whose weights have now been released on Hugging Face.

<details><summary>References</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness/tree/master">GitHub - deepseek-ai/deepseek-harness · GitHub</a></li>
<li><a href="https://venturebeat.com/technology/deepseek-harness-launches-as-open-source-rival-to-claude-code-alongside-v4-pro-on-api-with-higher-prices">DeepSeek Harness launches as open source rival to Claude Code ...</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#Open Source`, `#AI Model`, `#Harness`, `#Hugging Face`

---

<a id="item-8"></a>
## [OpenAI Upgrades ChatGPT with GPT-5.6 Series and Expands Free Access](https://t.me/zaihuapd/43176) ⭐️ 8.0/10

OpenAI announced updates to ChatGPT: paid Plus and Pro users get an improved GPT-5.6 Sol model with a new slider to control reasoning depth, while free users are upgraded to GPT-5.6 Luna as the default model starting this week. Free users will gain unlimited text conversations next week and a new Think button for complex reasoning. This update significantly expands access to OpenAI's latest reasoning models, making advanced AI capabilities available to more users and giving paying customers more control over model behavior. It also underscores OpenAI's strategy of offering a tiered model family (Luna, Terra, Sol) to balance cost, speed, and capability across consumer and enterprise use cases. The GPT-5.6 family comprises three variants — Luna, Terra, and Sol — with Luna optimized for fast, cost-efficient, latency-sensitive tasks and Sol positioned as the flagship for complex reasoning, coding, and agentic workflows. According to internal evaluations mentioned in the announcement, GPT-5.6 Luna shows fewer factual errors than previous models on finance, medical, and legal questions, though specific error rates were not disclosed.

telegram · zaihuapd · Aug 13, 17:04

**Background**: GPT-5.6 is a family of large language models released by OpenAI on July 9, 2026, with three variants ordered by capability: Luna, Terra, and Sol. The models were designed to support enterprise work, coding, scientific research, and cybersecurity, and OpenAI describes Sol as its 'best coding model yet'. Previously, the GPT-5.6 launch faced a limited preview starting June 26, 2026, due to government restrictions. ChatGPT is OpenAI's consumer-facing chatbot, offered in free, Plus, and Pro tiers.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/">Improving GPT ‑ 5 . 6 Sol in ChatGPT—and expanding access... | OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://openrouter.ai/openai/gpt-5.6-luna">GPT - 5 . 6 Luna - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#GPT-5.6`, `#ChatGPT`, `#AI model release`, `#Free access`

---

<a id="item-9"></a>
## [Google Releases Gemini 3.6 Flash, Reveals Gemini 4 Pretraining Has Begun](https://t.me/zaihuapd/43177) ⭐️ 8.0/10

Google has released Gemini 3.6 Flash, which produces 17% fewer output tokens than Gemini 3.5 Flash and completes multi-step tasks with fewer reasoning steps and tool calls. Google also revealed that pretraining for Gemini 4 has already started. Gemini 3.6 Flash pushes cost efficiency and agentic capability, making frontier AI more affordable for high-volume real-world workloads. The reveal that Gemini 4 is already in pretraining signals rapid evolution of Google's flagship model family and intensifies competition in the LLM market. The updated model shows improvements in code generation, knowledge work, and computer-operation abilities, with a knowledge cutoff updated to March 2026. API pricing is set at $1.5 per million input tokens and $7.5 per million output tokens, alongside a Gemini 3.5 Flash variant aimed at high-throughput, low-latency scenarios.

telegram · zaihuapd · Aug 13, 17:32

**Background**: Gemini is Google DeepMind's family of multimodal large language models, spanning Pro, Flash, and other tiers, and it powers the Gemini chatbot. The Flash line is designed for faster, lower-cost inference while maintaining frontier-level intelligence, and it is positioned for the agentic era, where models perform multi-step tasks by calling external tools and APIs. Tool calling lets an LLM invoke external functions, bridging the gap between language generation and real-world actions.

<details><summary>References</summary>
<ul>
<li><a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash">Gemini 3.6 Flash | Gemini API | Google AI for Developers</a></li>
<li><a href="https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash">Gemini 3.5 Flash | Gemini API | Google AI for Developers</a></li>
<li><a href="https://www.ibm.com/think/topics/tool-calling">What Is Tool Calling? | IBM</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Google`, `#Gemini`, `#Large Language Models`, `#News`

---