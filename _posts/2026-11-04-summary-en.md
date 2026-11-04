---
layout: default
title: "Horizon Summary: 2026-11-04 (EN)"
date: 2026-11-04
lang: en
---

> From 35 items, 3 important content pieces were selected

---

1. [Qwen 3.8 27B on a Laptop Can Interpret Raw Model Weights](#item-1) ⭐️ 8.0/10
2. [Postman accused of silently installing AI plugins and sending API secrets to its servers](#item-2) ⭐️ 8.0/10
3. [Faint Aircraft Noise in Videos Can Reveal Exact Recording Locations](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Qwen 3.8 27B on a Laptop Can Interpret Raw Model Weights](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) ⭐️ 8.0/10

Simon Willison reports that Qwen 3.8 27B, running locally on his laptop, can read a text dump of raw neural network weights and correctly identify what a small network was trained to do, replicating an example from Rikiya Takehi and co-authors' "Sparks of Weight-Space Programming" paper. In the original experiment the same tool-free, single-response task was performed by frontier systems such as GPT-6 Astra. If a 27B open-weight model on consumer hardware can perform weight interpretation, the capability stops looking like a frontier-only curiosity and becomes something independent researchers can replicate, probe and stress-test themselves. That matters for interpretability research and for anyone worried about models that might one day edit their own weights without human-readable source code. The demonstration focuses on the paper's stricter half: the model gets only floating-point numbers and is told it has no tools, no code execution and no calculator, and must answer in a single response — isolating "reading weights" from "writing code to analyze weights." The caveat is that these are tiny 10x10 grid-game policy networks (Breakout, Pong, Pac-Man, Freeway), and critics such as Matthew Honnibal and Sean Goedecke argue the paper's more dramatic examples conflate tool-assisted editing with genuine native weight comprehension.

rss · Simon Willison · Nov 3, 16:29 · [Discussion](https://news.ycombinator.com/item?id=50355251)

**Background**: A neural network's "weights" are just a long list of floating-point numbers; normally nobody reads them, because training via gradient descent adjusts them mechanically and the learned behavior is only visible by running the model. "Weight-space programming," a term coined in November 2026 by MIT CSAIL researchers, describes asking a general-purpose LLM to read, interpret and directly rewrite another network's weights in natural-language-guided fashion, without gradient descent or a training loop. The paper's headline claims were striking — GPT-6 Astra reportedly diagnosing reasoning loops in Qwen3.5-0.8B from its weights alone and editing 0.016% of them to lift MATH-500 from 7.9% to 48.1%. Willison separates the claims into two questions: what models can do with raw weights and no tools, versus what they can do with code at their disposal.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Weight-space_programming">Weight-space programming - Wikipedia</a></li>
<li><a href="https://www.datacamp.com/blog/weight-space-programming">Weight-Space Programming: How LLMs Edit Network Weights</a></li>
<li><a href="https://kingy.ai/blog/weight-space-programming-ai-agent-model-weights/">Weight-Space Programming: GPT-6 Astra Edits Qwen - kingy.ai</a></li>

</ul>
</details>

**Discussion**: Commenters are divided between enthusiasm and sharp skepticism: one borrows Hotspur's line from Henry IV — "I can call spirits from the vasty deep... but will they come when you do call for them?" — to ask whether the interpretations are actually correct, while another asks how much of the behavior is genuine weight understanding versus training priors and known tricks like steering vectors and LoRAs. Others praise Qwen 3.8 27B as the best thing to happen in local AI if you act as a high-level architect, and one commenter voices a biological unease about a future of "incomprehensible machines editing their own model weights."

**Tags**: `#LLM`, `#interpretability`, `#weight-space-programming`, `#local-models`, `#Qwen`

---

<a id="item-2"></a>
## [Postman accused of silently installing AI plugins and sending API secrets to its servers](https://github.com/postmanlabs/postman-app-support/issues/14370) ⭐️ 8.0/10

A GitHub issue filed in the postmanlabs/postman-app-support repository (issue #14370) alleges that the Postman desktop app silently auto-installs AI plugins and transmits API request data — including the resolved values of templating variables such as {{some_secret}} — to Postman's servers. The report, which says blocking the logging endpoint causes the app to stop working properly, triggered a Hacker News thread with roughly 1,024 points and 343 comments. Postman is one of the most widely installed API-testing tools in the developer world, so a default behavior that ships locally stored credentials off to a third party has direct security consequences for anyone who keeps tokens, keys or customer data in their collections. The fallout is already visible in enterprises: commenters report that security teams have decertified the tool and that whole departments migrated to alternatives like Bruno. The core technical claim is that Postman logs detailed information about every API request, including query parameters, and that when a query parameter is filled via the templating syntax {{some_secret}}, the actual secret value is sent rather than the variable name. The reporter also says the app degrades or breaks entirely if outgoing traffic to the logging endpoint is blocked, and that the investigation began over HIPAA compliance and concluded Postman is not HIPAA-compliant.

hackernews · sidgarimella · Nov 3, 17:22 · [Discussion](https://news.ycombinator.com/item?id=50354960)

**Background**: Postman is a graphical client for building, sending and organizing HTTP API requests, and its environment variables let developers substitute placeholders like {{api_key}} into requests; most users assumed those values stayed on their own machine. HIPAA is the U.S. law governing the privacy of protected health information, so any tool that transmits request contents off-device becomes a compliance risk in healthcare settings. Bruno is an open-source, local-first alternative that stores collections as plain-text files inside a project folder, so request definitions can be versioned in Git and never need a cloud account.

<details><summary>References</summary>
<ul>
<li><a href="https://www.usebruno.com/">Bruno - The Git-Native API Client</a></li>
<li><a href="https://github.com/usebruno/bruno">GitHub - usebruno/ bruno : Opensource IDE For Exploring and Testing...</a></li>
<li><a href="https://www.hhs.gov/hipaa/index.html">Health Information Privacy | HHS.gov</a></li>

</ul>
</details>

**Discussion**: The thread is overwhelmingly negative: commenters describe Postman as slow and bloated, compare it to uTorrent as a tool people install out of inertia, and question how a company with a $5B+ valuation and 1,500+ employees arose from what should have been a small utility. Several report first-hand consequences — one healthcare worker says their cyber team decertified Postman and the team switched to Bruno overnight while the sales team kept calling, and others praise Bruno for letting request definitions live in Git.

**Tags**: `#privacy`, `#security`, `#developer-tools`, `#api-testing`, `#postman`

---

<a id="item-3"></a>
## [Faint Aircraft Noise in Videos Can Reveal Exact Recording Locations](https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/) ⭐️ 8.0/10

OSINT researcher Colsto published a YouTube demonstration on November 2, 2026 showing that nearly inaudible propeller-plane noise buried in a video's audio track can be extracted, turned into Doppler curves, and cross-referenced against public ADS-B flight data to determine where the video was recorded. In one example, the technique pinpointed the filming site of a blurry tree video by matching two overflights that occurred 920 seconds apart. This turns harmless ambient sound into a geolocation beacon: any uploaded video containing faint aircraft overflight audio can potentially be traced to a precise spot, which is a powerful new capability for open-source investigators and a real privacy risk for creators, journalists, and bystanders who never considered background noise sensitive. The method calculates sound propagation delays and compares Doppler curve shapes across a grid of candidate locations, then narrows the result using multiple flyovers rather than a single plane. It depends on tonal propeller or engine components surviving in the recording and works best where crowdsourced ADS-B coverage is dense, so quiet jet-only overflights or sparse receiver areas would weaken or defeat the technique.

rss · Simon Willison · Nov 3, 05:32

**Background**: ADS-B (Automatic Dependent Surveillance–Broadcast) is a system in which aircraft continuously broadcast their position, altitude, speed and identity, and this data is aggregated by public crowdsourced flight-tracking networks. The Doppler effect is the shift in perceived frequency of a sound as a source moves toward or away from a listener; for a passing aircraft this produces a characteristic S-shaped curve in a spectrogram whose exact shape encodes how close and how fast the plane flew. Traditional OSINT geolocation relies on visual landmarks, shadows and metadata, while audio is rarely analyzed.

<details><summary>References</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=UytYrhYLOKI">I discovered a sound that leaks your exact location (and it's ... Geolocation - OSINT Learning Guide Audio OSINT - Nico Dekens Solving Bellingcat’s “Lost in Translation”: Audio Geolocation ... New Technique Pinpoints Video Locations Using Airplane So... the Power of Audio OSINT: How Free Audio Toolkits Can Expose ... Geolocation OSINT: Methods & Tools</a></li>
<li><a href="https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance–Broadcast">Automatic Dependent Surveillance–Broadcast - Wikipedia</a></li>
<li><a href="https://www.dutchosintguy.com/post/audio-osint">Audio OSINT - Nico Dekens</a></li>

</ul>
</details>

**Tags**: `#OSINT`, `#privacy`, `#geolocation`, `#ADS-B`, `#audio-forensics`

---