# Horizon Daily - 2026-09-08

> From 39 items, 7 important content pieces were selected

---

1. [OpenAI Claims AI Cracked Navier–Stokes Problem, Sparking Credit Dispute](#item-1) ⭐️ 10.0/10
2. [Tim Cook to Skip Apple Event Video, New CEO Ternus to Lead Foldable iPhone Launch](#item-2) ⭐️ 9.0/10
3. [ASML and TSMC Partner to Advance High NA EUV with 12-Inch Photomasks](#item-3) ⭐️ 9.0/10
4. [OpenAI Releases ChatGPT Images 2.0 with Reasoning and Web Search](#item-4) ⭐️ 9.0/10
5. [NeurIPS Desk-Rejects 178 Papers Using Unreliable AI Detector That Flagged Its Own Chairs](#item-5) ⭐️ 8.0/10
6. [US BIS Probes Chinese AI Firms' Overseas Access to Nvidia Chips via Remote Compute](#item-6) ⭐️ 8.0/10
7. [DeepSeek begins internal testing of V4.1 Flash with native multimodal support](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI Claims AI Cracked Navier–Stokes Problem, Sparking Credit Dispute](https://simonwillison.net/2026/Sep/8/on-navier-stokes/) ⭐️ 10.0/10

OpenAI announced that an unreleased internal model produced a proposed solution to the Navier–Stokes existence and smoothness problem, one of the seven Millennium Prize Problems, with a formalization in the Lean proof assistant. The claimed result, that a three-dimensional incompressible flow can develop a singularity in finite time, was reached on September 5, 2026 after roughly 88 hours of autonomous agents, but it has not yet been independently verified. This is potentially the first time an AI system has solved a Millennium Prize Problem, a milestone that could mark a paradigm shift for AI-driven mathematics and scientific discovery. If verified, it would show that frontier models can tackle deep open math problems, but the result also raises urgent questions about research credit, data provenance, and whether sharing early progress may invite AI-powered races. OpenAI said the effort began on September 1 after hearing rumors related to NYU's Tristan Buckmaster and Anthropic's Levent Alpöge; its agents sent 2.7 million messages and used about 130 billion output tokens on Navier–Stokes, and 4.9 million messages and 300 billion tokens across all attempted problems, costing about $15 million at public API prices. Buckmaster publicly accused OpenAI of not answering when its first prompts were sent or whether the model was trained on their Codex sessions, and said OpenAI offered him co-authorship while making clear Alpöge would not be included because of his employer.

rss · Simon Willison · Sep 8, 23:39

**Background**: The Navier–Stokes equations describe how fluids move, and the Millennium Problem asks mathematicians to prove that solutions in three dimensions remain smooth for all time or to find a counterexample; this is closely connected to the still-mysterious phenomenon of turbulence. The Clay Mathematics Institute established the seven US$1,000,000 Millennium Prize Problems in May 2000, and only the Poincaré conjecture has been officially solved. OpenAI's solution is of the counterexample type, showing that a smooth, finite-energy flow with a smooth external force can blow up in finite time, which the company says establishes statements C and D of Charles Fefferman's official problem formulation.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier-Stokes_existence_and_smoothness_problem">Navier-Stokes existence and smoothness problem</a></li>
<li><a href="https://en.wikipedia.org/wiki/Millennium_Prize_Problems">Millennium Prize Problems</a></li>
<li><a href="https://www.claymath.org/millennium-problems/">The Millennium Prize Problems - Clay Mathematics Institute</a></li>

</ul>
</details>

**Discussion**: Commenters were split between awe at the result and alarm at how it was produced: Terence Tao warned that rumors of work on a problem can trigger a massive AI-powered effort that flattens original research projects, discouraging researchers from sharing promising directions, while others questioned whether OpenAI based its work on Buckmaster and Alpöge's prompts and sessions. Several also noted the astonishing implication that an internal model trained for less than two weeks was reportedly more than twice as capable in mathematics as GPT-6 Astra, and one argued that natural science differs from pure computation because the physical world constrains everything.

**Tags**: `#AI research`, `#mathematics`, `#OpenAI`, `#Navier-Stokes`, `#Millennium Prize`

---

<a id="item-2"></a>
## [Tim Cook to Skip Apple Event Video, New CEO Ternus to Lead Foldable iPhone Launch](https://www.macrumors.com/2026/09/07/tim-cook-wont-appear-apple-sept-9-event-video/) ⭐️ 9.0/10

Bloomberg's Mark Gurman reports that Tim Cook will not appear in Apple's September 9 'Surprise and Shine' event video, though he may still attend a screening. New CEO John Ternus will take center stage and present the foldable iPhone. The move signals a deliberate leadership transition at Apple, positioning Ternus as the visible head of a major product debut. The foldable iPhone launch will be an early test of how Apple presents itself in the post-Cook era. According to Gurman, Apple choreographed the transition so Ternus becomes the face of the foldable iPhone and future products, and having Cook appear would weaken that effect. Cook stepped down as CEO on September 1 and now serves as executive chairman.

telegram · zaihuapd · Sep 8, 05:03

**Background**: Apple's September media events have traditionally been high-profile showcases tied to flagship product announcements. Cook's role as CEO had long made him the natural host of such videos. This year, the timing of the leadership change means Ternus's first major event will also introduce a rumored brand-new product category for Apple.

**Tags**: `#Apple`, `#Tim Cook`, `#CEO`, `#Foldable iPhone`, `#MacRumors`

---

<a id="item-3"></a>
## [ASML and TSMC Partner to Advance High NA EUV with 12-Inch Photomasks](https://www.nrc.nl/nieuws/2026/09/08/asml-gaat-samenwerken-met-taiwanese-chipgigant-tsmc-om-zijn-nieuwste-chipmachines-te-upgraden-a4936073) ⭐️ 9.0/10

ASML and TSMC announced a cooperation on September 7 to transition High NA EUV lithography from current 6-inch photomasks to 12-inch versions. The plan calls for a 12-inch photomask pilot line by 2031 and use in advanced process mass production by 2033, with TSMC set to deploy High NA for mass production of advanced nodes starting around 2030. The shift to 12-inch photomasks is expected to improve wafer fab productivity, reduce chip manufacturing costs, and eliminate the need to stitch together two 6-inch photomasks during High NA EUV exposure. This helps extend advanced chip scaling and supports future high-performance logic and memory products, affecting the broader semiconductor industry roadmap. Established EUV lithography works with a numerical aperture of 0.33, while High NA EUV increases the NA to 0.55, enabling finer resolution. A single 6x12-inch photomask covers the area that previously required stitching of two 6x6-inch masks; TSMC's A10 and A11 process nodes, expected around 2030, are considered prime candidates for introducing High NA.

telegram · zaihuapd · Sep 8, 06:55

**Background**: EUV lithography uses 13.5nm wavelength light to pattern tiny features on chips. High NA EUV is the next generation of EUV, using larger optics and a higher numerical aperture to allow better resolution and smaller feature sizes. Photomasks, or reticles, are templates that define circuit patterns; transitioning to a larger 12-inch reticle format avoids the exposure field size limits that necessitate stitching.

<details><summary>References</summary>
<ul>
<li><a href="https://www.asml.com/en/news/stories/2024/5-things-high-na-euv">5 things you should know about High NA EUV lithography</a></li>
<li><a href="https://www.tomshardware.com/tech-industry/semiconductors/tsmc-to-start-using-high-na-euv-lithography-in-2030-a10-or-a11-technology-prime-candidates-for-use">TSMC to start using High-NA EUV lithography in... | Tom's Hardware</a></li>
<li><a href="https://focustaiwan.tw/business/202609080020">TSMC, ASML partner on 12 - inch EUV photomasks ... - Focus Taiwan</a></li>

</ul>
</details>

**Tags**: `#半导体`, `#EUV光刻`, `#芯片制造`, `#ASML`, `#台积电`

---

<a id="item-4"></a>
## [OpenAI Releases ChatGPT Images 2.0 with Reasoning and Web Search](https://t.me/zaihuapd/43693) ⭐️ 9.0/10

OpenAI has released ChatGPT Images 2.0, a new image generation model built on GPT Image 2. It adds a thinking mode that reasons through prompts, integrates web search, and can generate up to 8 visually consistent images from a single prompt at up to 2K resolution. This marks a shift from simple text-to-image tools toward agents that can plan, research, and produce coherent multi-frame outputs, which could significantly affect design, marketing, and content creation workflows. By also improving text rendering in non-Latin scripts, it addresses a long-standing weakness in AI image generation. The model can handle complex compositions such as comics, UI elements, and marketing assets while keeping characters, lighting, and style consistent across up to eight frames. It also significantly improves text rendering for Chinese, Japanese, Korean, and other non-Latin scripts.

telegram · zaihuapd · Sep 8, 18:45

**Background**: Traditional image generation models struggle with accurate text rendering, especially for non-Latin alphabets, and produce inconsistent characters across multiple images. GPT Image 2 / ChatGPT Images 2.0 addresses these issues with a reasoning layer that plans composition before rendering and web search integration that pulls in relevant visual references and context. According to third-party coverage, the model currently ranks at the top of the Arena AI text-to-image leaderboard across several categories. The 8-frame consistency is achieved through techniques such as unified style descriptions and reusing previously generated images as references.

<details><summary>References</summary>
<ul>
<li><a href="https://www.mindstudio.ai/blog/chatgpt-images-2-use-cases-workflows">ChatGPT Images 2.0: What It Can Do and How to Use It for Real Work | MindStudio</a></li>
<li><a href="https://www.system7.ai/news/chatgpt-images-2-reasoning-ai-image-generation">ChatGPT Images 2.0 Explained: Reasoning and Web Search</a></li>
<li><a href="https://thenextweb.com/news/openai-chatgpt-images-2-0-reasoning-image-generation">OpenAI’s new image model reasons before it draws</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#image generation`, `#GPT Image 2`, `#AI research`

---

<a id="item-5"></a>
## [NeurIPS Desk-Rejects 178 Papers Using Unreliable AI Detector That Flagged Its Own Chairs](https://www.reddit.com/r/MachineLearning/comments/1wakf62/neurips_deskrejected_178_papers_for_being/) ⭐️ 8.0/10

NeurIPS's Position Paper Track desk-rejected 178 submissions (18.4% of the track) using Pangram, a proprietary AI detector, without human review or appeal. Independent researchers found the same detector would flag the track chairs' own recent papers as AI-generated at rates between 24% and 69%. This incident exposes the dangers of relying on opaque, unvalidated AI detectors for high-stakes academic decisions. It disproportionately harms ESL researchers and undermines trust in top-tier conference review processes, with broad implications for research integrity and publishing fairness in machine learning. Pangram's default settings initially flagged 42.7% of the entire track as AI-generated; the organizers had to shrink text windows to lower the flag rate to 12.7%. Twenty-two papers were rejected specifically because they scored above 0.5 on the detector after authors denied AI use, and a Stanford study cited in the post found 61.22% of human-written TOEFL essays are falsely flagged, with no demographic calibration data published by NeurIPS.

reddit · r/MachineLearning · /u/tughanbulut · Sep 8, 10:19

**Background**: AI detectors like Pangram use natural language processing and large datasets of human and AI writing to score how likely text was generated by large language models such as ChatGPT. These tools are known to be unreliable, especially for non-native formal English writing, and have been criticized for fueling 'witch hunts' over AI use. NeurIPS is a top machine learning conference, and its Position Paper Track was introduced to solicit forward-looking research proposals; using a black-box detector as grounds for desk rejection without appeal is highly unusual.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Pangram_(AI_detector)">Pangram (AI detector)</a></li>

</ul>
</details>

**Tags**: `#AI detection`, `#NeurIPS`, `#academic publishing`, `#ethics`, `#machine learning`

---

<a id="item-6"></a>
## [US BIS Probes Chinese AI Firms' Overseas Access to Nvidia Chips via Remote Compute](https://t.me/zaihuapd/43676) ⭐️ 8.0/10

The U.S. Commerce Department's Bureau of Industry and Security (BIS) has launched a systematic review of how Chinese AI companies obtain and use Nvidia chips overseas, including via remote access to rented compute in third countries. The probe, which reportedly began after White House officials accused Moonshot AI's Kimi K3 model of relying on smuggled chips accessed through Thailand, is compiling lists of smuggling hubs and countries hosting remotely rented compute. This marks a major escalation of U.S. export-control enforcement beyond physical chip shipments into cloud and remote-computing services. If BIS asserts jurisdiction over overseas compute access, it could reshape global AI supply chains, cloud providers' policies, and how Chinese AI labs train frontier models. Remote access to computing resources is not itself illegal under current U.S. rules, and a key open question is whether BIS has legal authority to restrict such cloud-based access. The review is reportedly compiling two country lists — black-market locations suspected of smuggling restricted chips into China, and countries whose compute Chinese firms rent remotely, with the Kimi K3 case as a catalyst.

telegram · zaihuapd · Sep 8, 03:35

**Background**: Kimi K3 is the flagship model from Chinese AI lab Moonshot AI (月之暗面), featuring 2.8 trillion parameters, native multimodal understanding, and a 1M-token context window, and its rapid rise has drawn comparisons to DeepSeek's shock moment in early 2025. The U.S. has restricted direct exports of advanced Nvidia chips to China under export-control rules, so some Chinese companies have tried to secure computing power by renting high-end GPU capacity in third countries and accessing it remotely. Because that remote access was not traditionally treated as a chip export, BIS's interest represents a potentially significant expansion of enforcement.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnn.com/2026/07/23/tech/china-ai-moonshot-kimi-explainer-intl-hnk">What is China’s Kimi K3 and why is the US so rattled by it?</a></li>
<li><a href="https://www.kimi.ai/ai-models/kimi-k3">Kimi K3: 2.8T Open Model for Coding & Knowledge Work</a></li>

</ul>
</details>

**Tags**: `#export controls`, `#AI chips`, `#Nvidia`, `#geopolitics`, `#cloud computing`

---

<a id="item-7"></a>
## [DeepSeek begins internal testing of V4.1 Flash with native multimodal support](https://t.me/zaihuapd/43690) ⭐️ 8.0/10

DeepSeek has started internal testing of V4.1 Flash, an intermediate model version with a new architecture that natively supports multimodal processing, claiming stronger capabilities, higher speed, and lower cost. Access uses the same base_url, with the temporary model name deepseek-v4.1-flash-expires-on-0910, billing identical to deepseek-v4-flash, and a limit of 20 concurrent requests per account. This release signals DeepSeek's shift toward unified native multimodal architecture, which can make multimodal AI reasoning cheaper and faster for developers. It also intensifies competition in cost-efficient and high-performance LLM APIs, potentially putting pressure on other providers to improve price-performance. The temporary model name contains 'expires-on-0910', indicating this is a time-limited snapshot rather than a final version. Pricing matches deepseek-v4-flash, but each account is rate-limited to 20 concurrent requests during the internal beta.

telegram · zaihuapd · Sep 8, 15:40

**Background**: Traditional multimodal systems often combine a large language model with separate vision or audio encoders, a 'stitched' approach that can be inefficient. Native multimodal models instead use a unified architecture trained to process text, images, audio, and other modalities together from the start. DeepSeek is a Chinese AI company known for developing open-weight models, and V4.1 Flash is an intermediate beta version accessed through the same API base_url as its other models.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.baidu.com/article/detail.html?id=7909664">原生多模态统一模型：重新定义AI交互的技术范式-百度开发者中心</a></li>
<li><a href="https://blog.csdn.net/Follow_24/article/details/161546827">AI多模态大模型技术全景（2026）：从“拼接“到“原生统一“，一文读懂底...</a></li>
<li><a href="https://www.uied.cn/posts/921792">刚刚，DeepSeek 新 模 型 突然上线：Flash 的 模 型 ，Pro... - UIED学习社区</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#AI`, `#multimodal`, `#LLM`

---

