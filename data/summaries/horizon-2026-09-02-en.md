# Horizon Daily - 2026-09-02

> From 40 items, 13 important content pieces were selected

---

1. [Google Introduces Gemini 3.8 Flash and Cyber Security Model](#item-1) ⭐️ 9.0/10
2. [Meta's Muse Spark 1.3 Tops Software Engineering Benchmark at Low Cost](#item-2) ⭐️ 8.0/10
3. [Google Avoids Court-Ordered Breakup of Ad Tech Business](#item-3) ⭐️ 8.0/10
4. [Report Exposes Three Sites' 215,128 AI-Cited 'Best Software' Pages](#item-4) ⭐️ 8.0/10
5. [Mistral's Default Opt-In Data Training Draws Privacy Concerns](#item-5) ⭐️ 8.0/10
6. [Claude Fable 5.1 released with strong benchmarks; Willison runs pelican test](#item-6) ⭐️ 8.0/10
7. [Open-source AI detectors fail 0.5% false-positive test and show bias](#item-7) ⭐️ 8.0/10
8. [NVIDIA Unveils DLSS 5 with 3D-Guided Neural Rendering, Launching Sept 3](#item-8) ⭐️ 8.0/10
9. [Alibaba's Qwen3.8-Max-0902 tops CodeArena with 1691, undercuts rivals](#item-9) ⭐️ 8.0/10
10. [Nvidia in Talks to Acquire Hugging Face for Over $13 Billion](#item-10) ⭐️ 8.0/10
11. [Moonshot AI seeks up to 30% revenue share from US cloud giants for Kimi K3](#item-11) ⭐️ 8.0/10
12. [xAI Launches Grok 4.6 for Long-Running Agent Tasks, Matching GPT-5.6 Sol](#item-12) ⭐️ 8.0/10
13. [FBI Probes Nexus Dark Web Service Selling 153M Driver's License Scans](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Google Introduces Gemini 3.8 Flash and Cyber Security Model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) ⭐️ 9.0/10

Google has announced Gemini 3.8 Flash, a low-cost high-speed model, along with Gemini 3.8 Flash Cyber, a security-tuned variant being offered to trusted defenders through the Fairwind Program. The release includes strong coding performance and improved benchmark results compared with earlier Flash models. Flash models are Google's vehicle for bringing advanced AI capabilities to cost-sensitive and latency-sensitive applications, so a major jump in coding and reasoning performance makes capable assistants more accessible. The Cyber variant could also change how organizations handle vulnerability discovery, pairing autonomy with the speed of a Flash model. Google describes Gemini 3.8 Flash Cyber as providing a decisive advantage for defenders through autonomous vulnerability discovery at Flash-level speed and cost, with availability initially gated through the Fairwind Program. In early user tests, the standard Flash model generated interactive HTML/JavaScript in about 13 seconds for roughly 1.8 cents and scored comparably to top-tier models on at least one independent leaderboard.

hackernews · bratao · Sep 2, 15:12 · [Discussion](https://news.ycombinator.com/item?id=49537553)

**Background**: Gemini is Google DeepMind's family of multimodal large language models, and the 'Flash' tier is positioned as a lightweight, fast alternative to the larger Pro models. Gemini 3.8 Flash follows earlier releases such as 3.7 Flash, which Google already marketed as good at agentic workflows, coding, and multi-step reasoning. The separate 'Cyber' line is a specialized model line aimed at cybersecurity tasks, including finding, validating, and patching vulnerabilities; earlier versions like Gemini 3.5 Flash Cyber were tied to Google's CodeMender effort. Community members often use independent leaderboards such as Artificial Analysis to compare capabilities across models.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/">Introducing Gemini 3.8 Flash and 3.8 Flash Cyber</a></li>
<li><a href="https://deepmind.google/models/gemini/flash/">Gemini 3.7 Flash — Google DeepMind</a></li>
<li><a href="https://deepmind.google/models/gemini/cyber/">Gemini 3.5 Flash Cyber — Google DeepMind</a></li>

</ul>
</details>

**Discussion**: Commenters reacted positively: Simon Willison demonstrated a 1.8-cent, 13-second generation of an HTML demo and stressed that Flash remains one of the cheapest ways to use multimodal inputs such as audio and video. Others noted it topped at least one leaderboard and reached Artificial Analysis scores comparable to premium models, while one tester felt the low thinking-effort setting regressed relative to 3.7.

**Tags**: `#Gemini`, `#AI models`, `#Google`, `#machine learning`, `#release`

---

<a id="item-2"></a>
## [Meta's Muse Spark 1.3 Tops Software Engineering Benchmark at Low Cost](https://developer.meta.com/ai/models/muse-spark/) ⭐️ 8.0/10

Meta has released Muse Spark 1.3, the latest iteration of its multimodal reasoning model, which reportedly scores 75.4 on the DeepSWE software engineering benchmark—the best public score so far. The model is positioned as a highly cost-effective alternative to frontier rivals. This release shows that near-state-of-the-art coding performance is becoming affordable, intensifying price competition among AI labs and benefiting developers who rely on coding agents. It also raises the bar for other providers, such as Google's Gemini, which held the top DeepSWE spot earlier the same day. Community benchmark reports place Muse Spark 1.3 ahead of Google's Gemini 3.8 Flash on DeepSWE, with one user calling it the best score so far. Meta also offers a discounted API tier when users consent to Meta training on their data, a trade-off that some commenters described as transparent and reasonable.

hackernews · bvaldivielso · Sep 2, 19:35 · [Discussion](https://news.ycombinator.com/item?id=49541256)

**Background**: Muse Spark is Meta's large language model family developed under Meta Superintelligence Labs (MSL), introduced in April 2026 with multimodal reasoning and a million-token context window. DeepSWE is part of a suite of software-engineering benchmarks used to evaluate coding agents; leaderboards like Artificial Analysis combine DeepSWE, Terminal-Bench, and SWE-Atlas into a composite index. Meta has also released smaller open-weight models such as Muse Glimmer and has said it plans to open-weight future Muse Spark versions.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Muse_Spark">Muse Spark</a></li>
<li><a href="https://artificialanalysis.ai/agents/coding-agents">AI Coding Agent Benchmarks & Leaderboard | Artificial Analysis</a></li>
<li><a href="https://ai.meta.com/blog/introducing-muse-spark-msl/">Introducing Muse Spark: Scaling Towards Personal Superintelligence</a></li>

</ul>
</details>

**Discussion**: Commenters were broadly enthusiastic. Simon Willison tested 1.3 with an SVG prompt, calling it a clear improvement over 1.2 at a cost of 4.2266 cents in 38 seconds, while another user highlighted the 75.4 DeepSWE score and falling prices. Some responses were more critical, with one commenter contrasting the release with Meta's $18 billion lawsuit over children's social-media addiction.

**Tags**: `#Meta AI`, `#Muse Spark`, `#language model`, `#benchmarks`, `#AI`

---

<a id="item-3"></a>
## [Google Avoids Court-Ordered Breakup of Ad Tech Business](https://www.nytimes.com/2026/09/02/technology/google-ad-tech-remedies.html) ⭐️ 8.0/10

On September 2, 2026, Google won its antitrust battle against the U.S. Department of Justice, avoiding a court-ordered breakup of its ad tech business. The DOJ still secured some remedies, though the exact terms have not been fully detailed. This ruling is a landmark in tech antitrust enforcement, determining whether courts can force divestiture of dominant platforms. It affects Google's advertising ecosystem and may influence future monopoly cases against other big tech companies. Google's ad tech business generated $30 billion last year, about 8% of Alphabet's revenue, but has declined for 16 consecutive quarters and accounts for less than 1% of company profit. The DOJ announced it won 'significant' remedies, though reports suggest they fall short of a full divestiture.

hackernews · donohoe · Sep 2, 14:46 · [Discussion](https://news.ycombinator.com/item?id=49537131)

**Background**: Ad tech is advertising technology, the software and tools used to automate the buying, selling, and analysis of digital advertising campaigns. In January 2023, the U.S. Department of Justice sued Google, accusing it of unlawfully monopolizing the three main tools used in display advertising: the publisher ad server, the ad exchange, and the advertiser ad network.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Ad_tech">Ad tech</a></li>
<li><a href="https://grokipedia.com/page/adtech">Adtech</a></li>
<li><a href="https://hackernoon.com/us-v-google-how-ad-tech-tools-work">US v. Google: How Ad Tech Tools Work | HackerNoon</a></li>

</ul>
</details>

**Discussion**: Community comments expressed skepticism about the remedies, with some calling them weak and noting the disparity between merger and divestiture difficulty. Others argued for structural solutions like progressive taxes on monopolies instead of lengthy court cases, while some asked why Google's declining ad tech business still matters at all.

**Tags**: `#google`, `#antitrust`, `#adtech`, `#regulation`, `#tech policy`

---

<a id="item-4"></a>
## [Report Exposes Three Sites' 215,128 AI-Cited 'Best Software' Pages](https://trellner.com/reports/manufactured-sources-behind-ai-recommendations/) ⭐️ 8.0/10

A new report reveals that three websites programmatically generated 215,128 pages of 'best software' recommendations, and AI systems such as Perplexity are citing these pages as sources. This exposes a feedback loop where mass-produced, low-quality content is presented as authoritative in AI answers. As AI answer engines increasingly ground responses in live web content, manufactured SEO pages can dominate the sources that LLMs rely on, degrading answer quality and misleading users. This highlights an urgent need for source skepticism in AI retrieval systems and has broader implications for web content integrity and LLM training data. The pages were created using programmatic SEO — a template-based approach for automatically generating pages that target many niche search queries, often assisted by AI. The report specifically notes that Perplexity routinely lists these three sites among its cited references, demonstrating that current AI systems often lack skepticism about whether a page was designed to rank well rather than to inform.

hackernews · jakobgreenfeld · Sep 2, 13:59 · [Discussion](https://news.ycombinator.com/item?id=49536375)

**Background**: Programmatic SEO is a technique for auto-generating thousands of web pages, often to capture long-tail search traffic at scale. Content farms are organizations that mass-produce web content specifically to satisfy search engine algorithms. As AI search tools like Perplexity index the open web, they can inherit this SEO spam and present it as credible recommendations, creating a vicious cycle if such AI output is later used to train future models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Content_farm">Content farm - Wikipedia</a></li>
<li><a href="https://grokipedia.com/page/Programmatic_SEO">Programmatic SEO</a></li>
<li><a href="https://practicaldev-herokuapp-com.global.ssl.fastly.net/sergeyli/programmatic-seo-with-handlebars-5f8d">Programmatic SEO with Handlebars - DEV Community</a></li>

</ul>
</details>

**Discussion**: Commenters widely echoed the report's findings, noting that LLMs often prefer AI-generated passages and that model-generated websites frequently surface in search queries. Several shared personal experiences that reinforce the problem: one encountered hallucinations of a nonexistent street-food landmark called 'Foobar square,' while another complained that Perplexity has prioritized speed over result quality. Overall sentiment suggests agreement that AI systems need stronger source skepticism and that the exploit window is still open but may soon close.

**Tags**: `#AI`, `#LLM`, `#content quality`, `#search`, `#misinformation`

---

<a id="item-5"></a>
## [Mistral's Default Opt-In Data Training Draws Privacy Concerns](https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training) ⭐️ 8.0/10

Mistral AI published a support article acknowledging that user input and output data may be included in model training programs, while stating that users can opt out at any time. A Hacker News discussion with 359 points and 155 comments criticized the company's default opt-in policy on training data. This matters because users and enterprises increasingly expect explicit consent and clear controls over how their data is used for AI training, especially from European companies positioned as privacy-conscious alternatives. Mistral's default opt-in approach could undermine trust and affect adoption among businesses and public-sector customers. The support page does not specify which customer tiers or types of data are affected, beyond mentioning conversations, documents, and other user-provided content. Hacker News commenters described an enterprise case where switching to the Team tier coincided with policy changes that made training opt-in by default and seemingly removed the ability to centrally disable it.

hackernews · teekert · Sep 2, 12:30 · [Discussion](https://news.ycombinator.com/item?id=49535284)

**Background**: Mistral AI is a French artificial intelligence company founded in 2023, known for open-source large language models and often positioned as a key European champion for digital sovereignty. Under regulations such as the GDPR, using personal data for AI training usually requires a legal basis or consent, and there is ongoing debate about whether default opt-in mechanisms meet data protection standards. The company also offers the Le Chat chatbot and has raised significant funding, making these policy choices highly visible in the European AI ecosystem.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mistral_AI">Mistral AI</a></li>
<li><a href="https://www.termsfeed.com/blog/consent-ai-machine-learning/">How to Collect Consent for AI and Machine Learning Data - TermsFeed</a></li>
<li><a href="https://termly.io/resources/articles/is-ai-model-training-compliant-with-data-privacy-laws/">Is AI Model Training Compliant With Data Privacy Laws?</a></li>

</ul>
</details>

**Discussion**: Commenters were broadly skeptical, with some expressing the belief that AI companies will train on user prompts regardless of opt-out pledges and others recounting experiences such as Microsoft retroactively enabling training on GitHub Copilot data. One enterprise user shared frustration that Mistral changed its settings after they had chosen the Team tier, while another commenter called the coverage title misleading because the help page does explicitly mention the right to opt out.

**Tags**: `#privacy`, `#ai-training`, `#data-consent`, `#mistral`, `#enterprise-ai`

---

<a id="item-6"></a>
## [Claude Fable 5.1 released with strong benchmarks; Willison runs pelican test](https://simonwillison.net/2026/Sep/1/claude-fable-5-1/) ⭐️ 8.0/10

Anthropic announced Claude Fable 5.1, claiming it sets a new standard for coding, knowledge work, and long-running problem-solving tasks. Simon Willison tested the model with the informal 'pelican on a bicycle' SVG prompt and found that the low and medium reasoning-effort settings skipped reasoning tokens entirely. The model shows a major benchmark jump, including 52.6% on the brand-new Terminal-Bench-Science 0.1 compared to 24.7% for Fable 5. The tiny pelican exercise reveals practical details about how Fable 5.1 handles its five reasoning levels, offering insights for users and developers who rely on cost and latency trade-offs. Fable 5.1 has five reasoning levels — low, medium, high, xhigh, and max — with no option to disable reasoning entirely. At both low and medium effort on the pelican prompt, the model produced no visible reasoning text and used roughly the same number of output tokens (1,998 and 1,977), suggesting reasoning may not have been engaged.

rss · Simon Willison · Sep 1, 23:57

**Background**: Claude is Anthropic's family of large language models, and Claude Fable 5.1 is presented as an advanced model release in this line. Terminal-Bench-Science 0.1 is a new benchmark measuring AI agent capabilities on 70 expert-curated scientific research workflows across life, physical, Earth, and mathematical sciences, among others. The 'pelican riding a bicycle' is an informal creative benchmark popularized by Simon Willison in late 2024, where an LLM is asked to generate an SVG of a pelican on a bicycle; Willison has recently questioned how strongly it correlates with overall model quality.

<details><summary>References</summary>
<ul>
<li><a href="https://www.tbench.ai/news/terminal-bench-science-0-1">TERMINAL-BENCH-SCIENCE 0.1</a></li>
<li><a href="https://grokipedia.com/page/Pelican_on_a_bicycle_AI_benchmark">Pelican on a bicycle (AI benchmark)</a></li>
<li><a href="https://snorkel.ai/leaderboard/terminal-bench-science/">Terminal-Bench-Science | Snorkel AI</a></li>

</ul>
</details>

**Tags**: `#Claude`, `#Anthropic`, `#AI benchmarks`, `#model release`

---

<a id="item-7"></a>
## [Open-source AI detectors fail 0.5% false-positive test and show bias](https://www.reddit.com/r/MachineLearning/comments/1w58erw/most_opensource_ai_detectors_cant_hold_a_05/) ⭐️ 8.0/10

A Reddit evaluation of six open-source AI text detectors found that most cannot maintain a matched 0.5% false-positive rate (FPR). Recall on humanizer-paraphrased AI text collapsed—the best model caught only 41.6%, while performance on current frontier models was also weak. These results show that open-source AI detectors can misclassify large amounts of ordinary human writing and disproportionately flag non-native writers, undermining their use in education and content moderation. The findings highlight fundamental reliability and fairness flaws in the entire class of models. For each model, thresholds were calibrated to a 0.5% FPR on 6,930 human docs before measuring recall. MAGE could not reach 0.5% FPR at any threshold (scoring >0.9999 on 26% of human web text), and the old OpenAI RoBERTa detector scored AUC 0.313, worse than chance on modern AI generators.

reddit · r/MachineLearning · /u/grumpyp2 · Sep 2, 12:04

**Background**: AI text detectors are classifiers trained to distinguish machine-generated text from human-written text, often using probability features that overfit to specifics of earlier models like GPT-2. Detector performance is typically summarized with ROC-AUC and depends on setting a decision threshold that trades false positives against recall. The evaluation used public datasets such as Liang (2023) TOEFL essays and a frontier set of outputs from GPT-5.x, Claude Opus 5, and Gemini 3.x. Humanizer tools rewrite AI output to evade detectors, and the evaluation shows that paraphrased text defeats most systems.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/openai-community/roberta-base-openai-detector">openai -community/ roberta -base- openai - detector · Hugging Face</a></li>
<li><a href="https://arxiv.org/html/2409.03291v1/">LLM Detectors Still Fall Short of Real World:Case of LLM-Generated...</a></li>

</ul>
</details>

**Tags**: `#AI detection`, `#Machine Learning`, `#Algorithmic bias`, `#Evaluation`, `#Text classification`

---

<a id="item-8"></a>
## [NVIDIA Unveils DLSS 5 with 3D-Guided Neural Rendering, Launching Sept 3](https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/) ⭐️ 8.0/10

NVIDIA has officially announced DLSS 5, introducing 3D-guided neural rendering that uses AI to enhance lighting, materials, and realism in real-time graphics. The technology launches on September 3 alongside NBA 2K27 for GeForce RTX 50 series PCs, laptops, and GeForce NOW Ultimate members. DLSS 5 represents a major evolution in AI-driven graphics, moving beyond upscaling and frame generation into full neural rendering that can synthesize more realistic scenes. This sets a new performance and visual bar for RTX 50 series owners and cloud gamers, signaling how deeply AI is becoming embedded in the core graphics pipeline. In NBA 2K27, DLSS 5 on an RTX 5090 can reach up to 370 FPS at 4K with maximum settings and ray tracing, and up to 590 FPS at 1440p. Players will need to download a new GeForce Game Ready driver released the same day, and the feature supports RTX 50 series desktops, laptops, and GeForce NOW Ultimate.

telegram · zaihuapd · Sep 2, 03:00

**Background**: DLSS (Deep Learning Super Sampling) is NVIDIA's suite of AI-powered rendering technologies that have traditionally focused on upscaling and frame generation. With DLSS 5, the company introduces 3D-guided neural rendering, where the classical rendering pipeline provides scene guidance—such as color frames and motion vectors—to a neural network that refines the image, producing more convincing lighting and materials in real time.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/">DLSS 5: 3 D - Guided Neural Rendering Debuts in NBA 2K27 | NVIDIA</a></li>
<li><a href="https://www.igorslab.de/en/dlss-5-gamescom-2026-3d-guided-neural-rendering/">DLSS 5 at Gamescom 2026: Neural Rendering Explained</a></li>
<li><a href="https://www.moneycontrol.com/technology/nvidia-launches-dlss-5-with-3d-guided-neural-rendering-debuts-in-nba-2k27-on-september-3-article-14020178.html">Nvidia announces DLSS 5 with 3 D - Guided Neural Rendering for more...</a></li>

</ul>
</details>

**Tags**: `#DLSS 5`, `#NVIDIA`, `#neural rendering`, `#real-time graphics`, `#RTX 50`

---

<a id="item-9"></a>
## [Alibaba's Qwen3.8-Max-0902 tops CodeArena with 1691, undercuts rivals](https://mp.weixin.qq.com/s/BfKRXMAR5ykD58LDkBftLg) ⭐️ 8.0/10

Alibaba released Qwen3.8-Max-0902, a 2.4T-parameter LLM with a 1M-token context window, which scored 1691 on the CodeArena front-end programming leaderboard, 22 points higher than the previous version. API pricing is $2 per million input tokens and $6 per million output tokens, with a blended average of about $5, undercutting the second- and third-place models at $20 and $12. This release signals Alibaba's aggressive push into AI coding capability and cost competitiveness, putting pressure on rival frontier models. Developers and enterprises may now access top-tier programming performance at substantially lower API costs. The model was further post-trained on programming and professional office tasks, and is now live on the Qwen AI platform, with integration into Qwen Office, Qoder, and the Qwen app. Its 1M-token context window is well suited for long codebases and complex office documents.

telegram · zaihuapd · Sep 2, 06:05

**Background**: CodeArena is a benchmark for LLM code generation that uses 397 human-curated samples spanning 40 categories, drawn from real user queries to better reflect human preferences than synthetic tests. Qwen is Alibaba's family of large language models, while Qoder is Alibaba's agentic coding platform focused on real-world software tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://codearenaeval.github.io/">codearena</a></li>
<li><a href="https://aclanthology.org/2025.acl-demo.48/">CodeArena: A Collective Evaluation Platform for LLM Code Generation - ACL Anthology</a></li>
<li><a href="https://finance.yahoo.com/news/alibaba-launches-qoder-agentic-coding-133000732.html">Alibaba Launches Qoder: An Agentic Coding Platform for Real Software</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Qwen`, `#LLM`, `#CodeArena`, `#Alibaba`

---

<a id="item-10"></a>
## [Nvidia in Talks to Acquire Hugging Face for Over $13 Billion](https://t.me/zaihuapd/43557) ⭐️ 8.0/10

Nvidia is reportedly in acquisition talks with open-source AI platform Hugging Face at a valuation exceeding $13 billion. No agreement has been reached, and Microsoft, which previously held discussions, has stopped negotiating. A deal would unite the leading AI chip maker with one of the most important open-source AI platforms, potentially reshaping how AI models are distributed and monetized. It could also consolidate control over the open-source AI ecosystem and attract significant regulatory scrutiny. Nvidia already holds a stake in Hugging Face after participating in its $235 million funding round in 2023, which valued the company at $4.5 billion. Hugging Face reportedly declined a $500 million investment offer from Nvidia last year, and the current talks may still fall through.

telegram · zaihuapd · Sep 2, 06:50

**Background**: Hugging Face is a leading open-source platform where the machine-learning community collaborates on models, datasets, and applications, hosting over one million model checkpoints on its Hub. Its open-source Transformers library provides state-of-the-art models for text, vision, audio, and multimodal tasks across PyTorch, TensorFlow, and JAX. This makes Hugging Face a central infrastructure layer in the AI ecosystem rather than just an application developer.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/">Hugging Face – The AI community building the future.</a></li>
<li><a href="https://github.com/huggingface/transformers">GitHub - huggingface/transformers: 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training.</a></li>
<li><a href="https://huggingface.co/docs/hub/models-the-hub">The Model Hub · Hugging Face</a></li>

</ul>
</details>

**Tags**: `#Nvidia`, `#Hugging Face`, `#Acquisition`, `#AI`, `#Business`

---

<a id="item-11"></a>
## [Moonshot AI seeks up to 30% revenue share from US cloud giants for Kimi K3](https://www.jiemian.com/article/15040119.html) ⭐️ 8.0/10

Moonshot AI is in early-stage talks with Microsoft, AWS, and Google over a revenue-sharing agreement of up to 30% for its open-weight, 2.8 trillion-parameter Kimi K3 model. According to a source, this would be the first major deal of its kind between a Chinese AI company and US cloud providers, but the talks remain unconfirmed and core terms are not yet settled. The deal, if reached, would give an open-weight Chinese model a recurring revenue stream on US cloud platforms and set a precedent for cross-border AI commercialization. It could also encourage cloud providers to compete for top Chinese models and reshape how frontier open-weight models are distributed and monetized globally. Kimi K3, released in July 2026, has 2.8 trillion total parameters and is described as the largest open-weight frontier model; it uses architecture improvements called Kimi Delta Attention and Attention Residuals. Moonshot AI's annual recurring revenue reportedly surpassed $300 million by mid-June 2026, while negotiations are at an early stage with the involved companies declining to comment.

telegram · zaihuapd · Sep 2, 07:36

**Background**: The capability of a large language model is often associated with its parameter count — the adjustable weights learned during training — though other factors such as data quality also matter. Kimi K3's 2.8 trillion parameters make it the largest open-weight frontier model as of July 2026, meaning users and cloud providers can download or deploy it rather than access it only through an API. In the current cloud AI business, providers such as Microsoft have historically paid revenue shares to model developers when reselling models like OpenAI's, and Moonshot AI's proposal extends that model to an open-weight release. A typical arrangement would see cloud providers buy their own GPUs, deploy Kimi K3, and share inference revenue with Moonshot AI.

<details><summary>References</summary>
<ul>
<li><a href="https://finance.biggo.com/news/01b00402-c618-43e3-8aa7-238b0f6d7645">Moonshot AI Seeks Up to 30% Revenue Share from Three US Cloud Giants for Kimi K3 — BigGo Finance</a></li>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Kimi K3`, `#Moonshot AI`, `#Cloud computing`, `#Revenue sharing`

---

<a id="item-12"></a>
## [xAI Launches Grok 4.6 for Long-Running Agent Tasks, Matching GPT-5.6 Sol](https://t.me/zaihuapd/43559) ⭐️ 8.0/10

xAI released Grok 4.6 on August 12, 2026, with major improvements in long-running agent tasks, interaction, and vision over Grok 4.5. The model matches GPT-5.6 Sol on the nine-benchmark Artificial Analysis Intelligence Index and is available immediately in Cursor, Grok Build, and the xAI API. Grok 4.6 moves the frontier-model race beyond single prompts toward long-horizon autonomous agent work, an area with major productivity implications. By matching GPT-5.6 Sol on a composite benchmark and landing directly in developer tools like Cursor and Grok Build, xAI strengthens its position among developers and enterprise AI teams. Grok 4.6 is priced at $2 per million input tokens and $6 per million output tokens, with a faster tier offered at double the price. The release is described as an incremental upgrade over Grok 4.5, focused on vision and interactions that span long-running agent sessions.

telegram · zaihuapd · Sep 2, 08:10

**Background**: Grok is xAI's family of large language models, and Grok Build is xAI's agentic coding tool that turns natural-language prompts into runnable prototypes. The Artificial Analysis Intelligence Index is a composite benchmark score that blends nine evaluations, including Terminal-Bench, GPQA Diamond, and Humanity's Last Exam, to compare model capabilities. Long-running agent tasks are autonomous multi-step workflows that typically run from minutes to hours or days and rely on durable execution infrastructure rather than a single synchronous API call.

<details><summary>References</summary>
<ul>
<li><a href="https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index">Artificial Analysis Intelligence Index v4.1.1 | Artificial Analysis</a></li>
<li><a href="https://www.openlegion.ai/en/learn/ai-agent-long-running-tasks">AI Agent Long Running Tasks : Queues, Checkpoints... | OpenLegion</a></li>
<li><a href="https://en.wikipedia.org/wiki/Grok_Build">Grok Build</a></li>

</ul>
</details>

**Tags**: `#xAI`, `#Grok 4.6`, `#AI model release`, `#agents`, `#benchmarks`

---

<a id="item-13"></a>
## [FBI Probes Nexus Dark Web Service Selling 153M Driver's License Scans](https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/) ⭐️ 8.0/10

The FBI is investigating Nexus, a dark web identity service claiming to possess and sell more than 153 million scanned driver's licenses from US and Canadian residents. The service has begun offering the data for sale, prompting official scrutiny. This massive trove of driver's license scans could enable large-scale identity theft and fraud, affecting tens of millions of people. The incident underscores the persistent risks of aggregated personal data held by third parties and the growing dark web trade in identity documents. The scanned licenses contain sensitive fields such as full name, home address, and date of birth. Krebs reported the data may originate from older breach collections involving auto dealers and insurance companies, but officials have not yet confirmed the exact source or the full impact.

telegram · zaihuapd · Sep 2, 09:31

**Background**: A dark web service is a hidden marketplace accessible via anonymity tools, often used to sell stolen data and illegal goods. Driver's licenses are valuable to criminals because they contain identity details needed for opening accounts, evading detection, or conducting financial fraud. Data breaches from many smaller companies can accumulate into massive collections sold on these platforms.

**Tags**: `#data-breach`, `#cybersecurity`, `#dark-web`, `#identity-theft`, `#privacy`

---

