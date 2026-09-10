---
layout: default
title: "Horizon Summary: 2026-09-10 (EN)"
date: 2026-09-10
lang: en
---

> From 36 items, 8 important content pieces were selected

---

1. [Calif Research Unveils WeWorm, Zero-Click WeChat Call Worm](#item-1) ⭐️ 9.0/10
2. [Shopify Moves from React Native Back to Native Swift and Kotlin](#item-2) ⭐️ 8.0/10
3. [Researchers question whether OpenAI can be trusted with unpublished math](#item-3) ⭐️ 8.0/10
4. [NASA's Satellite Image Trick Now Reveals Ancient Rock Art](#item-4) ⭐️ 8.0/10
5. [Microsoft Declares Rust a Tier-1 Language](#item-5) ⭐️ 8.0/10
6. [DeepSeek Releases V4.1 Flash: 552B Multimodal Model With Sparse Activation](#item-6) ⭐️ 8.0/10
7. [DeepSeek ships MIT-licensed Harness app and opens V4-Pro-0813 weights](#item-7) ⭐️ 8.0/10
8. [Moonshot AI Confidentially Files for Hong Kong IPO at $50B Pre-Money Valuation](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Calif Research Unveils WeWorm, Zero-Click WeChat Call Worm](https://simonwillison.net/2026/Sep/10/calif-research/) ⭐️ 9.0/10

Calif Research released a demo of WeWorm, which it describes as the first zero-click worm to spread through WeChat calls on both iOS and Android, hijacking accounts without the victim answering or touching the phone. The team says that working with AI it found the vulnerability and wrote the first remote code execution (RCE) exploit in about two days, then built the worm in one more week. If verified, this is both a serious mobile security milestone and a demonstration that AI can collapse the time and team size needed to weaponize a vulnerability, turning work that once took a large team months into roughly a week of effort. It also raises uncomfortable questions for WeChat's enormous user base and for the broader debate over AI-accelerated offensive security. According to Calif, the victim need not answer the call or interact with the device at all, and even if they do answer they hear nothing while the exploit still succeeds; the demo reportedly spread across three test phones. The research was published on September 8, 2026 under the company's Android-tagged research listing, and the team emphasizes that human judgment was reserved for choosing targets and testing safely.

rss · Simon Willison · Sep 10, 00:56

**Background**: A zero-click exploit is one that requires no action from the victim — no taps, links or answers — making it far more dangerous and harder to defend against than ordinary phishing. Remote code execution (RCE) is a class of vulnerability that lets an attacker run arbitrary code on a target device, and a worm is malware that self-propagates from device to device; combining the two, as WeWorm claims to do, means an infection could spread automatically through a messaging app's call feature without any user awareness.

<details><summary>References</summary>
<ul>
<li><a href="https://thehackernews.com/2026/09/wechat-zero-click-worm-took-over.html">WeChat Zero-Click Worm Took Over Accounts on iPhone and Android via Incoming Calls</a></li>
<li><a href="https://www.helpnetsecurity.com/2026/09/08/wechat-weworm-vulnerability-exploit-account-hijacking/">"Zero-click" WeChat worm could hijack accounts and spread via a single call - Help Net Security</a></li>
<li><a href="https://cybersecuritynews.com/weworm-first-0-click-worm/">WeWorm - First 0-Click Worm Spreading Through WeChat Calls Across iOS and Android</a></li>

</ul>
</details>

**Tags**: `#security`, `#AI`, `#WeChat`, `#zero-click exploit`, `#RCE`

---

<a id="item-2"></a>
## [Shopify Moves from React Native Back to Native Swift and Kotlin](https://shopify.engineering/back-to-native) ⭐️ 8.0/10

Shopify's engineering blog published a post explaining why the company is migrating its mobile app away from React Native and back to fully native Swift for iOS and Kotlin for Android. The post triggered a large Hacker News discussion (677 points, 449 comments) about cross-platform tradeoffs and whether AI coding agents now make such rewrites affordable. Shopify is one of the largest commerce platforms, so its decision to abandon React Native — arguably the most widely used cross-platform mobile framework — is a significant data point for teams weighing native versus shared-code strategies. It also strengthens the case for alternatives such as Kotlin Multiplatform, which offers shared business logic without giving up native UI. The engineering post frames the move around user experience and platform fidelity rather than raw cost savings, and commenters note that AI coding agents are now competent at generating both Swift and Kotlin, which lowers the effort of duplicating an app across two codebases. A key caveat raised in the thread is that this migration rationale is not purely AI-driven, since several developers report completing similar React Native-to-native rewrites before LLM assistance was widely available.

hackernews · fnthawar2 · Sep 10, 14:09 · [Discussion](https://news.ycombinator.com/item?id=49643982)

**Background**: React Native is a cross-platform framework that lets a single JavaScript codebase drive both iOS and Android apps, trading some platform fidelity for shared code and smaller teams. Kotlin Multiplatform, created by JetBrains, takes a different approach: it shares business logic, networking and data layers across Android, iOS, desktop and web while letting teams keep native UI (or optionally share it via Compose Multiplatform). The debate over these approaches has run for nearly two decades, echoing earlier frameworks such as Apache Cordova.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kotlin_Multiplatform">Kotlin Multiplatform</a></li>
<li><a href="https://kotlinlang.org/multiplatform/">Kotlin Multiplatform – Build Cross-Platform Apps</a></li>
<li><a href="https://arstechnica.com/ai/2026/03/ai-can-rewrite-open-source-code-but-can-it-rewrite-the-license-too/">AI can rewrite open source code—but can it rewrite the license, too? - Ars Technica</a></li>

</ul>
</details>

**Discussion**: Sentiment is broadly sympathetic to leaving React Native, with one developer describing a satisfying move to Kotlin Multiplatform and another reporting a near-overnight AI-assisted rewrite of a 15-20 screen app using agents and Maestro. The main disagreement is over causation: one commenter who personally led a React Native-to-native rewrite insists most of that work predated LLM assistance, while another offers a two-decade perspective that cross-platform frameworks have never actually reduced headcount cost as promised.

**Tags**: `#react-native`, `#mobile-development`, `#kotlin-multiplatform`, `#cross-platform`, `#engineering-culture`

---

<a id="item-3"></a>
## [Researchers question whether OpenAI can be trusted with unpublished math](https://mathstodon.xyz/@andreasthom/117240535270608201) ⭐️ 8.0/10

A Hacker News thread (about 580 points and 583 comments) has amplified a Mathstodon discussion by Andreas Thom raising doubts about whether mathematicians can safely share unpublished work with OpenAI, after reports that models produced results resembling confidential collaborations. The debate spread across Mathstodon, X and Bluesky, with participants citing OpenAI's statement that the model used for a contested result was not trained on the relevant collaboration chats. The episode touches on research ethics, attribution and trust between academia and industry at a moment when AI labs are aggressively courting mathematicians and offering free or subsidized access to frontier models. If researchers conclude that sharing unpublished ideas risks having them absorbed into a model and later published without credit, it could chill collaboration between academia and AI companies and shape new norms around disclosure. OpenAI's defense rests on the claim that the relevant model was not trained on the confidential chats, and one quoted statement asserts it is categorically impossible that a researcher's Codex prompts could have influenced the result; skeptics counter that even incidental exposure during pretraining could sharpen a model's latent intuition, and they flag the decision to generate roughly 300 billion output tokens from a model still in training as suspicious. Commenters also note that some researchers receive free access while others pay, so the pool of unpublished ideas flowing into these systems is large and unevenly documented.

hackernews · pred_ · Sep 10, 06:49 · [Discussion](https://news.ycombinator.com/item?id=49639408)

**Background**: Mathstodon is a Mastodon instance used by mathematicians that supports LaTeX rendering, so technical arguments about proofs can be posted in full; the linked threads also point to posts on X (often read through the Nitter-style mirror xcancel) and on Bluesky, whose accounts are identified by did:plc decentralized identifiers. Large language models such as those behind Codex are typically first pretrained on vast text corpora and then refined with reinforcement learning on tasks with verifiable answers, such as mathematics, which is why the question of whether a chat was absorbed into training matters so much. In mathematics, attribution norms are strong and priority disputes are consequential, so an undisclosed reuse of someone's unpublished direction is treated as a serious breach.

<details><summary>References</summary>
<ul>
<li><a href="https://terrytao.wordpress.com/2022/11/20/trying-out-mathstodon/">Trying out Mathstodon | What's new - Terence Tao</a></li>
<li><a href="https://maketecheasier.com/browse-x-anonymously-with-xcancel/">How to Browse X Anonymously With XCancel - Make Tech Easier</a></li>
<li><a href="https://web.plc.directory/spec/v0.1/did-plc">did : plc Specification v0.1</a></li>

</ul>
</details>

**Discussion**: Commenters largely treat the situation as a research-ethics problem: one top-voted analogy compares OpenAI to a human collaborator who takes ideas from a joint session and publishes without credit, which would be clearly unethical. Others argue both explanations can coexist — pretraining on chats may improve a model's intuition while reinforcement learning on verifiable math can independently discover techniques — and a third camp is skeptical that AI is really cracking open problems at all, suspecting that researchers unwittingly feed fresh training data to the models they use. A further comment frames the sequence of events, including the large token generation run, as feeling like 'parallel construction.'

**Tags**: `#OpenAI`, `#research-ethics`, `#AI-mathematics`, `#trust`, `#academia-industry`

---

<a id="item-4"></a>
## [NASA's Satellite Image Trick Now Reveals Ancient Rock Art](https://spinoff.nasa.gov/Manipulating_Satellite_Photos_Now_Reveals_Ancient_Images) ⭐️ 8.0/10

NASA's decorrelation stretch technique, originally developed to enhance color contrasts in satellite and planetary imagery, is now being applied to archaeology to reveal faded ancient rock art and archaeological images that are invisible to the naked eye. The method boosts subtle color differences that the human eye cannot perceive in ordinary photographs. This is a vivid example of space technology transferring into cultural heritage preservation, giving archaeologists a low-cost digital tool to rediscover and document rock art that has faded over centuries. It shows how remote-sensing algorithms can extend the reach of field research without new hardware, potentially helping protect fragile sites before they degrade further. Decorrelation stretch enhances color differences by removing the inter-channel correlation found in the input pixels, first decorrelating the image channels and then stretching their contrast; the underlying algorithm is described in a NASA/JPL theoretical basis document. NASA's original motivation was planetary and Earth-observation imaging, where subtle color variations carry scientific meaning.

hackernews · gumby · Sep 10, 15:29 · [Discussion](https://news.ycombinator.com/item?id=49645437)

**Background**: Decorrelation stretch is a standard image-processing technique in remote sensing: ordinary color photos contain mostly redundant information across the red, green and blue channels, so weak signals hide in the noise. By mathematically decorrelating those channels and then expanding their contrast, features such as different rock types, minerals or pigments pop out as striking false-color composites. The technique has been a staple of satellite and planetary image analysis for decades, which is why it is now being revisited for archaeology and cultural heritage work.

<details><summary>References</summary>
<ul>
<li><a href="https://spinoff.nasa.gov/Manipulating_Satellite_Photos_Now_Reveals_Ancient_Images">Technique for Manipulating Satellite Photos Now... | NASA Spinoff</a></li>
<li><a href="https://dstretch.com/DecorrelationStretch.pdf">Algorithm Theoretical Basis Document</a></li>
<li><a href="https://heritage.jmc.ac.il/imaging-technologies-for-cultural-heritage/d-stretch/">D- Stretch | The Jerusalem Institute for Research and Digital...</a></li>

</ul>
</details>

**Discussion**: Commenters were enthusiastic about false-color composites and remote sensing as a gateway to understanding signal processing and the fact that human vision is not a canonical representation of the world. One user shared a practical GIMP workflow for approximating the effect via LAB decomposition, level adjustment and recomposition, while another described a failed field attempt to find hidden rock art at Angkor Wat using multiple bandpass filters. Others speculated about the enormous effort behind ancient rock art and asked whether an ImageMagick implementation exists for pipeline use.

**Tags**: `#remote-sensing`, `#image-processing`, `#archaeology`, `#nasa`, `#decorrelation-stretch`

---

<a id="item-5"></a>
## [Microsoft Declares Rust a Tier-1 Language](https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/) ⭐️ 8.0/10

Microsoft has formally designated Rust as a tier-1 language, a status announced in a guest post published on the Rust Foundation's website. In practice this means Rust now sits alongside C++ as a first-class, natively supported language for Microsoft's platform evolution and its internal security and quality workflows. The move signals that one of the world's largest software vendors is diversifying its systems-programming options beyond C/C++, which could accelerate memory-safe rewrites of security-critical code. It also strengthens Rust's position as a mature, production-grade alternative rather than a fast-moving upstart, with ripple effects across toolchains, hiring, and third-party libraries. Microsoft's post stresses that C++ still dominates after decades of accumulated code, so the tier-1 designation is about official support and platform evolution rather than a wholesale replacement. Community members note that surrounding tooling is still catching up, asking when Visual Studio will offer tier-1 debugging support for Rust.

hackernews · mmastrac · Sep 10, 13:39 · [Discussion](https://news.ycombinator.com/item?id=49643546)

**Background**: Memory safety is a property of languages such as Rust that prevents entire classes of bugs — out-of-bounds access, use-after-free, null-pointer dereference — which in languages like C and C++ can silently become exploitable security vulnerabilities. Rust achieves this at compile time through its ownership and borrow-checking rules without a garbage collector, which is why it is attractive for operating systems, browsers, and other performance-sensitive systems code. "Tier-1" is vendor-specific terminology meaning a language receives full, first-class support in a company's platforms, tooling, and engineering processes rather than being used opportunistically by individual teams.

<details><summary>References</summary>
<ul>
<li><a href="https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/">Guest Post: Rust Is Tier - 1 Language at Microsoft</a></li>
<li><a href="https://news.ycombinator.com/item?id=49643546">Rust Is Tier - 1 Language at Microsoft | Hacker News</a></li>
<li><a href="https://www.memorysafety.org/docs/memory-safety/">What is memory safety and why does it matter? - Prossimo</a></li>

</ul>
</details>

**Discussion**: The Hacker News thread (577 points, 315 comments) is broadly positive: commenters link Microsoft's stated goal of converting 1 billion lines of C/C++ to Rust by 2030 via automated tooling, and DARPA-funded efforts using six teams to automate C-to-Rust translation. Several argue this shows Rust is now a serious competitor to C++ and C#, and noticeably more mature than newer "better C" languages such as Zig and Odin, while one commenter highlights rumors of MSVC backend integration replacing LLVM as the real headline.

**Tags**: `#rust`, `#microsoft`, `#systems-programming`, `#memory-safety`, `#language-tooling`

---

<a id="item-6"></a>
## [DeepSeek Releases V4.1 Flash: 552B Multimodal Model With Sparse Activation](https://mp.weixin.qq.com/s/qg0NU3NNUbp1co2PdkAPAg) ⭐️ 8.0/10

DeepSeek has officially released V4.1 Flash, the smallest model in its new architecture family, featuring a 552B-parameter Causal-Encoder-Decoder design with only 8B input and 16B output active parameters and native multimodal vision understanding. The model is now live on the DeepSeek API under the name deepseek-flash, with new pricing taking effect on September 10, 2026 at 12:00, and after September 14, 2026 at 12:00 requests to deepseek-v4-pro will be routed to V4.1 Flash and billed at its rates. With only 8B input and 16B output activation out of 552B total parameters, V4.1 Flash continues the industry trend of sparse, sparsely-activated mixture-style models that deliver large-model capability at much lower inference cost. The automatic migration of deepseek-v4-pro traffic to V4.1 Flash signals DeepSeek is consolidating its API lineup, which directly affects existing developers who depend on that model name and its pricing. The model's distinguishing feature is its Causal-Encoder-Decoder structure, which differs from the decoder-only designs used by most current chat models, combined with a 552B total / 8B-16B active parameter split and native vision input. The pricing effective date (September 10, 2026) and the traffic migration date (September 14, 2026) are unusually far in the future, and the announcement comes from a WeChat/Telegram-style channel rather than a formal technical paper, so the architecture details remain unverified.

telegram · zaihuapd · Sep 10, 05:54

**Background**: Most modern large language models are decoder-only transformers, which use causal masking so that when predicting each token the model can only attend to previously generated tokens and cannot look ahead. An encoder-decoder design adds a separate encoder that processes the full input at once, which is often used for multimodal or sequence-to-sequence tasks where the input (such as an image) needs to be fully understood before generation begins. Sparse activation refers to architectures where only a small subset of a model's total parameters are used for any given token — the same idea behind mixture-of-experts models — allowing a very large parameter count while keeping compute per token low. DeepSeek is a Chinese AI lab known for openly publishing model weights and aggressively competitive API pricing.

<details><summary>References</summary>
<ul>
<li><a href="https://mbrenndoerfer.com/writing/decoder-architecture-causal-masking-autoregressive-transformers">Decoder Architecture: Causal Masking - Interactive</a></li>
<li><a href="https://arxiv.org/abs/2406.17989">[2406.17989] Learning Neural Networks with Sparse Activations</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#LLM release`, `#multimodal`, `#model architecture`, `#API pricing`

---

<a id="item-7"></a>
## [DeepSeek ships MIT-licensed Harness app and opens V4-Pro-0813 weights](https://t.me/zaihuapd/43738) ⭐️ 8.0/10

DeepSeek released DeepSeek Harness, a developer-preview agent harness application open-sourced under the MIT license, and simultaneously published the DeepSeek-V4-Pro-0813 model weights on Hugging Face. The harness implements models, tools, skills, sessions, sandboxes, storage, scheduling and UI as swappable plugins, and ships four run modes: Standard, PTC, Minimal and Creation. By pairing open weights with a permissively licensed, fully pluggable agent runtime, DeepSeek is positioning itself against closed agent stacks such as Claude Code and Codex, giving the open-source LLM tooling ecosystem a vendor-neutral foundation that developers can fork, recombine and self-host. Teams building agents can now mix DeepSeek models with third-party plugins or swap in other models without rewriting their orchestration layer. The harness is built on Cordis, a plugin/composability framework whose design is described in a paper on spatiotemporal composability, and in PTC (Programmatic Tool Calling) mode the agent can inspect the running Cordis environment and modify itself in memory. Standard mode provides the default plugin set, Minimal strips it down for lightweight use, and Creation mode adds self-modification and plugin experimentation on top of Standard.

telegram · zaihuapd · Sep 10, 07:28

**Background**: An agent harness (also called agent scaffolding) is the software infrastructure wrapped around a large language model that turns it into an AI agent: it drives model and tool calls, manages conversation state and memory, persists context, provides execution sandboxes, and closes the feedback loop across multi-step tasks, as opposed to doing the model's internal reasoning itself. Because the harness, not the model, determines how tools and environments are wired together, its architecture matters a great deal for how agents behave in production. DeepSeek Harness is DeepSeek's attempt to standardize that layer as an open, plugin-based runtime rather than a monolithic product.

<details><summary>References</summary>
<ul>
<li><a href="https://www.deepseek.com/harness/en/">DeepSeek Harness developer preview: Everything is a plugin</a></li>
<li><a href="https://github.com/deepseek-ai/deepseek-harness">GitHub - deepseek -ai/ deepseek - harness : DeepSeek Harness ...</a></li>
<li><a href="https://dshbase.com/blog/deepseek-harness-modes/">DeepSeek Harness Modes — Standard, PTC , Minimal... | dshbase</a></li>

</ul>
</details>

**Tags**: `#DeepSeek`, `#open-weights`, `#LLM`, `#agent-harness`, `#open-source`

---

<a id="item-8"></a>
## [Moonshot AI Confidentially Files for Hong Kong IPO at $50B Pre-Money Valuation](https://t.me/zaihuapd/43743) ⭐️ 8.0/10

Moonshot AI, the company behind the Kimi assistant, has confidentially submitted its A1 listing application to the Hong Kong Stock Exchange, formally starting a Hong Kong IPO, while the company said it has no information to disclose at this time. In parallel, it is reportedly raising a new round at a $50 billion pre-money valuation, which may be its final private round before listing. If completed, this would make Moonshot one of the first leading Chinese foundation-model startups to reach the public markets, giving investors a rare listed benchmark for valuing the country's LLM sector. The reported $50 billion pre-money valuation also signals how aggressively private capital still rewards top-tier model makers, and it raises the bar for rivals such as DeepSeek, which outsiders expect could list in the first half of next year. The article says Moonshot's valuation climbed from about $4.3 billion at the end of 2025 to a $35 billion post-money figure in July, roughly an 8x increase in about half a year, and that the company has shipped K2.5, K2.6 and K3 in 2026 on a roughly three-month release cadence. A confidential A1 filing means the prospectus is not published at this stage, so pricing, share count and financials remain undisclosed; Hong Kong's formal listing process typically takes three to four months but often runs longer.

telegram · zaihuapd · Sep 10, 10:58

**Background**: Moonshot AI (月之暗面) is a Chinese AI startup known for the Kimi chatbot and for its open-weight Kimi K-series models, including the one-trillion-parameter K2.5 released in January 2026. Form A1 is the listing application form prescribed by the Hong Kong Stock Exchange for equity and debt securities; submitting it is the step that formally kicks off a listing process. DeepSeek, mentioned as a likely next IPO candidate, is a Hangzhou-based developer of open-weight large language models owned and funded by the hedge fund High-Flyer.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI - Wikipedia</a></li>
<li><a href="https://en-rules.hkex.com.hk/rulebook/listing-application-form-equity-securities-and-debt-securities">Form A1 Listing Application Form (For Equity Securities and Debt Securities) | Rulebook</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(Company)">DeepSeek (Company)</a></li>

</ul>
</details>

**Tags**: `#AI Industry`, `#Moonshot AI`, `#IPO`, `#Funding`, `#Large Language Models`

---