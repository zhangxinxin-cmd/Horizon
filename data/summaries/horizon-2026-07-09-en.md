# Horizon Daily - 2026-07-09

> From 40 items, 12 important content pieces were selected

---

1. [OpenAI Releases GPT-5.6, Achieves ARC-AGI-3 SOTA](#item-1) ⭐️ 9.0/10
2. [EU Parliament Approves Chat Control 1.0 Through Procedural Trick](#item-2) ⭐️ 9.0/10
3. [Postgres rewritten in Rust passes all tests](#item-3) ⭐️ 9.0/10
4. [TypeScript 7.0 Released with Go Rewrite, Up to 12x Faster](#item-4) ⭐️ 9.0/10
5. [Tencent Releases Hy3, a Capable Small AI Model](#item-5) ⭐️ 8.0/10
6. [Meta Releases Muse Spark 1.1 with Agentic AI](#item-6) ⭐️ 8.0/10
7. [GLM 5.2 Nears Human Accuracy in VAT Reconciliation](#item-7) ⭐️ 8.0/10
8. [Bun Rewritten from Zig to Rust via AI Agents](#item-8) ⭐️ 8.0/10
9. [OpenAI introduces GPT-Live with GPT-5.5 delegation for voice mode](#item-9) ⭐️ 8.0/10
10. [Meta's Superintelligence 1-Year Progress Update](#item-10) ⭐️ 8.0/10
11. [蚂蚁灵波开源 LingBot-Video，全球首个 MoE 具身视频基模](#item-11) ⭐️ 8.0/10
12. [OpenAI and US DoD to Ban AI for Citizen Surveillance](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI Releases GPT-5.6, Achieves ARC-AGI-3 SOTA](https://openai.com/index/gpt-5-6/) ⭐️ 9.0/10

OpenAI released GPT-5.6, a new frontier model available in three sizes (Luna, Terra, Sol), achieving a state-of-the-art score of 7.8% on the ARC-AGI-3 benchmark with improved intent understanding and image processing. This release marks a significant milestone in AI development, as GPT-5.6 is the first model verified to beat an ARC-AGI-3 game, demonstrating progress toward agentic intelligence. The model's enhanced intent understanding and image processing capabilities also push the boundaries of multimodal AI. The three models are priced per million tokens: Luna $1/$6, Terra $2.50/$15, Sol $5/$30, with a knowledge cutoff of February 16, 2026. Notably, the ARC Prize Foundation verified GPT-5.6 Sol at max reasoning effort achieved a 7.8% score on ARC-AGI-3, and the developer guide highlights improved intent inference requiring explicit constraints.

hackernews · logickkk1 · Jul 9, 17:04 · [Discussion](https://news.ycombinator.com/item?id=48849066)

**Background**: ARC-AGI-3 is an interactive benchmark introduced in March 2026 that evaluates AI agents on their ability to explore, infer goals, and plan in novel environments, unlike earlier passive benchmarks. Frontier models like GPT-5.6 are the most advanced general-purpose AI models, trained on massive datasets to handle a wide range of tasks across modalities. The ARC-AGI series has evolved from measuring fluid intelligence to agentic adaptation, making this SOTA achievement notable.

<details><summary>References</summary>
<ul>
<li><a href="https://arcprize.org/arc-agi/3">ARC-AGI-3</a></li>
<li><a href="https://arxiv.org/abs/2603.24621">ARC-AGI-3: A New Challenge for Frontier Agentic Intelligence ARC-AGI-3: A New Challenge for Frontier Agentic Intelligence ARC-AGI-3 Leaderboard - ARC Prize ARC-AGI-3: The New Interactive Reasoning Benchmark - DataCamp GitHub - arcprize/arc-agi-3-benchmarking GPT 5.6 Sol Tops ARC-AGI 3 With 7.8%, Becomes First Model To ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Frontier_model">Frontier model</a></li>

</ul>
</details>

**Discussion**: Community comments highlight that GPT-5.6 Sol sets a new SOTA on ARC-AGI-3 at 7.8%, with some users noting interesting semantic tips for intent understanding. There are also comparisons with other models like Claude Code and Fable 5, with one commenter humorously observing that Fable 5 was excluded from benchmarks for refusing biology questions. Sentiment is mixed, with some praising the model's capabilities and others expressing skepticism about OpenAI's openness.

**Tags**: `#GPT-5.6`, `#OpenAI`, `#AI model`, `#ARC-AGI`, `#frontier model`

---

<a id="item-2"></a>
## [EU Parliament Approves Chat Control 1.0 Through Procedural Trick](https://www.patrick-breyer.de/en/eu-parliament-greenlights-chat-control-1-0-breyer-our-children-lose-out/) ⭐️ 9.0/10

On July 9, 2025, the European Parliament voted to allow mass scanning of private messages by US tech companies until 2028, despite a majority of MEPs opposing it, because a motion to reject failed to reach the required absolute majority of 361 votes. This decision marks a major setback for digital privacy and encryption in the EU, as it permits warrantless surveillance of private communications, setting a precedent that could be extended to permanent legislation (Chat Control 2.0) later in 2025. The regulation allows scanning of direct messages on platforms like Instagram, Discord, Snapchat, Skype, Xbox, Gmail, and iCloud, but does not affect public social media posts or cloud storage files. The measure was passed using an urgency procedure that required an absolute majority to reject, and the vote was scheduled just before the summer break, resulting in 113 MEPs absent.

hackernews · rapnie · Jul 9, 11:03 · [Discussion](https://news.ycombinator.com/item?id=48843923)

**Background**: Chat Control is a European Union regulation proposed in 2022 to combat child sexual abuse material (CSAM) online. Critics argue it undermines end-to-end encryption and enables mass surveillance. The temporary extension (Chat Control 1.0) was first rejected twice in March 2025 but later approved via a procedural loophole that required an absolute majority to block it.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chat_Control">Chat Control - Wikipedia</a></li>
<li><a href="https://fightchatcontrol.eu/">Fight Chat Control - Protect Digital Privacy in the EU</a></li>
<li><a href="https://www.eff.org/deeplinks/2025/12/after-years-controversy-eus-chat-control-nears-its-final-hurdle-what-know">After Years of Controversy, the EU’s Chat Control Nears Its Final Hurdle: What to Know | Electronic Frontier Foundation</a></li>

</ul>
</details>

**Discussion**: Commenters expressed outrage at the parliamentary trick, noting that the vote was held the day before the summer break to ensure low attendance, and that the default acceptance of legislation required an absolute majority to reject. One commenter warned that the EU is becoming totalitarian, while another criticized Roberta Metsola's actions for jeopardizing the legitimacy of the EU project.

**Tags**: `#privacy`, `#surveillance`, `#EU law`, `#encryption`, `#digital rights`

---

<a id="item-3"></a>
## [Postgres rewritten in Rust passes all tests](https://github.com/malisper/pgrust) ⭐️ 9.0/10

A project named pgrust has rewritten PostgreSQL in Rust with the assistance of large language models and now passes 100% of the Postgres regression tests. This achievement demonstrates the feasibility of using LLMs to rewrite complex legacy software in a memory-safe language, potentially leading to more secure and performant database systems. It also sparks debate about licensing and the role of AI in software development. The project generated 7,101 commits in less than a month, making traditional code review impracticable. The new version is licensed under AGPL, a change from PostgreSQL's original open-source license.

hackernews · SweetSoftPillow · Jul 9, 06:18 · [Discussion](https://news.ycombinator.com/item?id=48841676)

**Background**: PostgreSQL is a widely used relational database with over 30 years of history. Rust is a systems programming language known for its memory safety and performance. The project pgrust aims to reimplement PostgreSQL in Rust while maintaining full compatibility.

**Discussion**: The community is divided: some praise the technical feat and appreciate the detailed explanation from the author, while others express skepticism about AI-generated code quality and licensing compatibility. Concerns about the ability to review such a large volume of commits were also raised.

**Tags**: `#Rust`, `#PostgreSQL`, `#database`, `#LLM`, `#open-source`

---

<a id="item-4"></a>
## [TypeScript 7.0 Released with Go Rewrite, Up to 12x Faster](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) ⭐️ 9.0/10

Microsoft has officially released TypeScript 7.0, which features a complete rewrite in Go, achieving 8 to 12 times faster full builds and enabling shared-memory multithreading. It is now installable via npm and supported by major editors through the Language Server Protocol (LSP). This major release represents a paradigm shift in TypeScript's compiler architecture, dramatically improving developer productivity for large codebases. The performance boost reduces build times from minutes to seconds, making TypeScript more viable for massive monorepos and continuous integration pipelines. TypeScript 7.0 introduces `--checkers` and `--builders` flags for customizing parallelism and provides a compatibility package for coexistence with TypeScript 6. However, embedded language toolchains for Vue, Svelte, and others are not yet ready and still require the older version.

telegram · zaihuapd · Jul 9, 04:01

**Background**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, widely used for large-scale web development. The original TypeScript compiler was written in TypeScript itself, which became a bottleneck for very large projects. The rewrite in Go enables native performance, parallelism, and a more efficient language server via LSP, which standardizes communication between editors and language tools.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Language_Server_Protocol">Language Server Protocol - Wikipedia</a></li>
<li><a href="https://microsoft.github.io/language-server-protocol/">Official page for Language Server Protocol</a></li>

</ul>
</details>

**Tags**: `#TypeScript`, `#Go`, `#Performance`, `#Programming Language`, `#Compiler`

---

<a id="item-5"></a>
## [Tencent Releases Hy3, a Capable Small AI Model](https://hy.tencent.com/research/hy3) ⭐️ 8.0/10

Tencent has officially released Hy3, a 295B-parameter Mixture-of-Experts (MoE) model with 21B active parameters, open-sourced under Apache 2.0. It is available for free on OpenRouter until July 21st, generating significant community interest. Hy3 demonstrates that small models can rival much larger ones, potentially lowering the barrier for local deployment and reducing API costs. This release intensifies competition in the small yet capable AI model space, especially against models like DeepSeek V4 Flash. The model has 295B total parameters but only 21B are active per token, thanks to the MoE architecture, plus a 3.8B MTP layer. It outperforms similar-sized models and rivals flagship open-source models on benchmarks, and is designed for agent capabilities in Tencent's products like WeChat.

hackernews · andai · Jul 9, 15:27 · [Discussion](https://news.ycombinator.com/item?id=48847552)

**Background**: Hy3 is a Mixture-of-Experts (MoE) language model developed by Tencent Hy Team, following the earlier Hy3 Preview. MoE models activate only a subset of parameters per input, enabling efficiency. OpenRouter is a platform that provides a unified API to access hundreds of AI models from various providers, simplifying integration for developers.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/Tencent-Hunyuan/Hy3">GitHub - Tencent-Hunyuan/Hy3: Hy3 (295B A21B), a leading reasoning and ...</a></li>
<li><a href="https://www.tencent.com/en-us/articles/2202386.html">Tencent Hunyuan Officially Releases Hy3, Advancing Agent Capabilities ...</a></li>
<li><a href="https://hunyuan.tencent.com/research/hy3">Introducing Hy3 - Tencent Hy</a></li>
<li><a href="https://openrouter.ai/openrouter">OpenRouter API and Models | OpenRouter</a></li>

</ul>
</details>

**Discussion**: Community members are excited about Hy3's capability and free availability, with some noting its potential as a strong local model. However, skepticism exists about its long-term relevance due to pricing confusion and competition from DeepSeek V4 Flash, and some question whether it can sustain its early ranking on OpenRouter.

**Tags**: `#AI`, `#machine learning`, `#Tencent`, `#Hy3`, `#OpenRouter`

---

<a id="item-6"></a>
## [Meta Releases Muse Spark 1.1 with Agentic AI](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) ⭐️ 8.0/10

Meta released Muse Spark 1.1 on April 8, 2026, a large language model with agentic capabilities, marking the first model from Meta Superintelligence Labs. This release signals Meta's aggressive push into agentic AI with an open-weight strategy, potentially commoditizing coding models and challenging proprietary leaders like OpenAI and Anthropic. The model is priced at $1.25 per million input tokens with 8x cheaper cached input, and a community-developed terminal plugin enables easy local use, though evaluation methodology has drawn critique.

hackernews · ot · Jul 9, 14:10 · [Discussion](https://news.ycombinator.com/item?id=48846184)

**Background**: Agentic AI refers to systems that can autonomously set goals, plan, and execute tasks with minimal human supervision. Open-weight models allow users to fine-tune and deploy locally, offering control and cost advantages. Muse Spark 1.1 is Meta's first step in a new scaling ladder under its Superintelligence Labs.

<details><summary>References</summary>
<ul>
<li><a href="https://ai.meta.com/blog/introducing-muse-spark-msl/">Introducing Muse Spark: Scaling Towards Personal ...</a></li>
<li><a href="https://www.ibm.com/think/topics/agentic-ai">What is Agentic AI? | IBM</a></li>
<li><a href="https://opensource.org/ai/open-weights">Open Weights: not quite what you’ve been told</a></li>

</ul>
</details>

**Discussion**: Community reactions are mixed: some users critique the Terminal-bench evaluation for overriding resource caps, while others share practical integration tips and praise the low pricing. Strategic observers note Meta's role as a commodity disruptor with open weights.

**Tags**: `#AI`, `#Meta`, `#large language model`, `#open-source`, `#agentic`

---

<a id="item-7"></a>
## [GLM 5.2 Nears Human Accuracy in VAT Reconciliation](https://toot-books.pages.dev/blog/glm-5-2-vat-benchmark) ⭐️ 8.0/10

GLM 5.2 achieved near-human accuracy on a VAT reconciliation benchmark, matching human performance on the specific task of matching bank feeds to invoices with provided notes. This shows LLMs can automate specific accounting tasks with high accuracy, but the benchmark did not cover the full breadth of human bookkeeping work, and unresolved liability for errors poses a significant barrier to real-world adoption. The benchmark only tested reconciliation with pre-provided user notes; human bookkeepers also had to find invoices and reason through ambiguous cases. The model's error rates were comparable to humans, but liability concerns remain critical for users.

hackernews · adamkurkiewicz · Jul 9, 18:29 · [Discussion](https://news.ycombinator.com/item?id=48850414)

**Background**: GLM 5.2 is Zhipu AI's coding-first flagship model with a 1-million-token context window, designed for agentic tasks. This benchmark evaluates its capability in automated VAT reconciliation, a routine but high-stakes accounting task where accuracy is legally required.

<details><summary>References</summary>
<ul>
<li><a href="https://ustechautomations.com/resources/blog/what-glm-5-2-means-for-accounting-firms">What GLM-5.2 Means for Accounting Firms Right Now</a></li>
<li><a href="https://github.com/zai-org/GLM-5">GitHub - zai-org/GLM-5: GLM-5: From Vibe Coding to Agentic ...</a></li>
<li><a href="https://z.ai/blog/glm-5.2">GLM-5.2: Built for Long-Horizon Tasks - z.ai</a></li>

</ul>
</details>

**Discussion**: Commenters highlighted that the human job was broader than the benchmark task, and that liability for LLM errors is unclear. Some expressed skepticism about the company's lack of transparency and the risks of relying on AI for accounting.

**Tags**: `#AI`, `#LLM`, `#accounting`, `#automation`, `#liability`

---

<a id="item-8"></a>
## [Bun Rewritten from Zig to Rust via AI Agents](https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything) ⭐️ 8.0/10

Jarred Sumner announced that Bun, the JavaScript runtime, has been rewritten from Zig to Rust using AI coding agents, with the new version now live in Claude Code. This demonstrates that AI agents can enable large-scale rewrites previously considered too risky, potentially changing how software projects approach language migrations. It also highlights Rust's memory safety advantages over Zig for projects mixing garbage collection and manual memory management. The rewrite cost approximately $165,000 in API tokens (5.9B input, 690M output, 72B cached) and took 11 days of agentic work. The TypeScript test suite served as a conformance suite to validate the port.

rss · Simon Willison · Jul 8, 23:57

**Background**: Bun is a JavaScript runtime and toolkit designed as a faster alternative to Node.js, originally written in Zig. Zig is a low-level language that offers manual memory management with custom allocators, while Rust provides memory safety guarantees through its ownership system and RAII. The rewrite leveraged advanced AI agents (like Claude) to automate the code translation, guided by Bun's extensive TypeScript test suite.

<details><summary>References</summary>
<ul>
<li><a href="https://ziglang.org/learn/why_zig_rust_d_cpp/">Why Zig When There is Already C++, D, and Rust? ⚡ Zig Programming Language</a></li>
<li><a href="https://scalewithchintan.com/blog/garbage-collection-vs-manual-memory-management-at-scale">Garbage Collection vs Manual Memory Management at Scale ...</a></li>

</ul>
</details>

**Tags**: `#Bun`, `#Rust`, `#Zig`, `#Runtime`, `#Rewrite`

---

<a id="item-9"></a>
## [OpenAI introduces GPT-Live with GPT-5.5 delegation for voice mode](https://simonwillison.net/2026/Jul/8/introducing-gptlive/#atom-everything) ⭐️ 8.0/10

OpenAI has launched GPT-Live, a new voice mode model for ChatGPT that can delegate complex tasks to GPT-5.5, resulting in more natural and intelligent conversations. This upgrade significantly improves ChatGPT's voice mode, which previously relied on an older GPT-4o era model, making voice conversations much more useful for brainstorming and complex queries. The delegation pattern could influence future AI product design. GPT-Live uses a full-duplex architecture, allowing simultaneous listening and speaking. During the preview, a bug caused the model to interrupt with laughter at non-jokes, which OpenAI reportedly fixed.

rss · Simon Willison · Jul 8, 23:20

**Background**: ChatGPT's voice mode allows users to have spoken conversations with the AI. The previous version was based on a GPT-4o model with a knowledge cut-off in 2024, limiting its usefulness. GPT-5.5, released in April 2026, is OpenAI's most advanced model with strong reasoning and coding capabilities. GPT-Live leverages this model for complex tasks while maintaining conversational flow.

<details><summary>References</summary>
<ul>
<li><a href="https://www.makeuseof.com/gpt-live-finally-gives-chatgpt-the-one-thing-gemini-already-had/">GPT-Live finally gives ChatGPT the one thing Gemini already ...</a></li>
<li><a href="https://deploymentsafety.openai.com/gpt-live">GPT-Live System Card - OpenAI Deployment Safety Hub</a></li>
<li><a href="https://openai.com/index/introducing-gpt-5-5/">Introducing GPT‑5.5 - OpenAI</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#GPT-Live`, `#Voice Mode`, `#GPT-5.5`

---

<a id="item-10"></a>
## [Meta's Superintelligence 1-Year Progress Update](https://newsletter.semianalysis.com/p/the-future-of-meta-superintelligence) ⭐️ 8.0/10

A new top-tier reinforcement learning environment startup has emerged, and Meta is pursuing the most aggressive compute ramp ever seen, alongside a 2000km+ scale-across distributed computing capability. The update also includes strategic advice for Google DeepMind. This signals Meta's accelerated push toward superintelligence, potentially reshaping the AI landscape with unprecedented compute scaling and novel distributed training techniques. The emergence of a new RL environment startup could foster innovation in reinforcement learning, impacting both research and industry applications. The compute ramp is described as the most aggressive ever seen, and the scale-across technique connects data centers over 2000km. The update also mentions a top-tier RL environment startup that 'spawns out of thin air' and offers advice for Google DeepMind.

rss · Semianalysis · Jul 9, 19:16

**Background**: Meta Superintelligence Labs (MSL) was announced by Mark Zuckerberg in June 2025, focusing on artificial superintelligence. Scale-across networking, a new category of AI compute fabric, enables multiple data centers at different locations to be unified as one large AI factory, overcoming latency and synchronization challenges.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs">Meta Superintelligence Labs - Wikipedia</a></li>
<li><a href="https://www.cnbc.com/2025/06/30/mark-zuckerberg-creating-meta-superintelligence-labs-read-the-memo.html">Mark Zuckerberg announces creation of Meta Superintelligence Labs. Read the memo</a></li>
<li><a href="https://developer.nvidia.com/blog/how-to-connect-distributed-data-centers-into-large-ai-factories-with-scale-across-networking/">How to Connect Distributed Data Centers Into Large AI ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#superintelligence`, `#Meta`, `#compute scaling`, `#reinforcement learning`

---

<a id="item-11"></a>
## [蚂蚁灵波开源 LingBot-Video，全球首个 MoE 具身视频基模](https://www.qbitai.com/2026/07/446458.html) ⭐️ 8.0/10

Ant Group open-sources LingBot-Video, the first MoE embodied video foundation model with 30B parameters (3B active), outperforming prior models on robot video benchmarks.

telegram · zaihuapd · Jul 9, 04:30

**Tags**: `#AI`, `#Robotics`, `#MoE`, `#Video Generation`, `#Open Source`

---

<a id="item-12"></a>
## [OpenAI and US DoD to Ban AI for Citizen Surveillance](https://t.me/zaihuapd/42459) ⭐️ 8.0/10

OpenAI and the US Department of Defense (formerly the War Department) have agreed to add a clause to their AI cooperation contract explicitly prohibiting the use of AI systems for deliberate surveillance of American citizens, as well as tracking or monitoring using commercially obtained personally identifiable information. This move addresses growing public concern over AI-enabled mass surveillance and sets a precedent for ethical boundaries in government-corporate AI partnerships, potentially influencing future contracts with other AI companies like Anthropic. The contract revision was proactively proposed by OpenAI CEO Sam Altman, and the new terms explicitly ban domestic surveillance and tracking with AI. The agreement has not yet been formally signed; notably, a previous similar deal between Anthropic and the War Department was suspended due to similar controversies.

telegram · zaihuapd · Jul 9, 13:22

**Background**: The US War Department (historically known as the Department of Defense) has been exploring AI partnerships with technology companies for national security applications. However, civil liberties groups have raised alarms that such AI systems could be misused for mass surveillance of citizens. OpenAI, a leading AI research organization, has publicly committed to ethical AI use, and this contract amendment reflects its ongoing effort to address those concerns.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI ethics`, `#surveillance`, `#OpenAI`, `#government policy`, `#ethics`

---

