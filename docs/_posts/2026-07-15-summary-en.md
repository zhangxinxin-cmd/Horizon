---
layout: default
title: "Horizon Summary: 2026-07-15 (EN)"
date: 2026-07-15
lang: en
---

> From 32 items, 12 important content pieces were selected

---

1. [Stripe and Advent Jointly Offer to Acquire PayPal for $53B](#item-1) ⭐️ 9.0/10
2. [DeepSeek raises $74B in first round with special founder control structure](#item-2) ⭐️ 9.0/10
3. [Inkling: Open-Weights Multimodal Model with Audio](#item-3) ⭐️ 8.0/10
4. [Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon](#item-4) ⭐️ 8.0/10
5. [Prioritizing mental health and communication in software development](#item-5) ⭐️ 8.0/10
6. [Claude web_fetch loophole enables data exfiltration attack](#item-6) ⭐️ 8.0/10
7. [New Method Disentangles Single Convolutional Neuron Using Hadamard Clustering](#item-7) ⭐️ 8.0/10
8. [170x PyTorch slowdown on T4 vs A100: possible causes explored](#item-8) ⭐️ 8.0/10
9. [7 Mobile On-Device LLMs Get China Regulatory Approval](#item-9) ⭐️ 8.0/10
10. [Musk: X to Unconditionally Open-Source Entire Codebase](#item-10) ⭐️ 8.0/10
11. [Developer exploits iOS sandbox escape to read Notes database via Filza](#item-11) ⭐️ 8.0/10
12. [Telegram Launches Serverless Platform for Bots and Mini Apps](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Stripe and Advent Jointly Offer to Acquire PayPal for $53B](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/) ⭐️ 9.0/10

Reports indicate that Stripe and private equity firm Advent International have made a joint offer to acquire PayPal for over $53 billion. The deal, if confirmed, would be one of the largest fintech acquisitions in history. This acquisition would massively consolidate the online payment processing market, potentially reducing competition and raising concerns about fee increases and service restrictions for both merchants and consumers. It could reshape the entire fintech landscape. The offer is reportedly over $53 billion, but the deal is not yet confirmed. If completed, it would combine Stripe, PayPal, Venmo, Braintree, and Xoom under one umbrella, creating an extremely high market concentration in card-not-present transactions.

hackernews · rvz · Jul 15, 03:32 · [Discussion](https://news.ycombinator.com/item?id=48915953)

**Background**: Stripe is a leading online payment processor primarily serving businesses, while PayPal is a widely used consumer-facing payment platform. Advent International is a global private equity firm. The combined entity would dominate the card-not-present payment market, raising significant antitrust concerns.

**Discussion**: Commenters expressed concerns about reduced competition, potential fee hikes, and Stripe's restrictive policies on certain industries like cannabis and adult content. Some noted antitrust challenges and the possibility of forced divestitures of Venmo or Braintree, while others highlighted the strategic value of PayPal's bank charter.

**Tags**: `#acquisition`, `#fintech`, `#payments`, `#antitrust`, `#stripe`

---

<a id="item-2"></a>
## [DeepSeek raises $74B in first round with special founder control structure](https://t.me/zaihuapd/42589) ⭐️ 9.0/10

DeepSeek completed its first funding round, raising over 500 billion yuan ($74 billion) at a valuation exceeding $50 billion, using a non-traditional structure where investors inject capital into a limited partnership managed by CEO Liang Wenfeng. This massive funding round signals strong investor confidence in DeepSeek, a key AI startup, and the unique structure allows founder control while securing major investments from Tencent and CATL, potentially reshaping the competitive landscape of AI in China. Liang Wenfeng personally invested 20 billion yuan ($2.96 billion) in this round, while Tencent and CATL each plan to invest 10 billion yuan ($1.48 billion) and 5 billion yuan ($0.74 billion), respectively. Investors face a five-year lock-up period and receive no voting rights.

telegram · zaihuapd · Jul 15, 12:56

**Background**: DeepSeek is a Chinese AI startup focused on developing large language models. The special investment structure, using a limited partnership, is designed to keep founder control while raising capital, which is uncommon in conventional startup funding. This round is one of the largest in the AI sector.

**Tags**: `#funding`, `#AI`, `#startup`, `#China`, `#DeepSeek`

---

<a id="item-3"></a>
## [Inkling: Open-Weights Multimodal Model with Audio](https://thinkingmachines.ai/news/introducing-inkling/) ⭐️ 8.0/10

Thinking Machines Lab released Inkling, an open-weights multimodal model that supports audio, text, and images, available for fine-tuning via the Tinker API. Inkling offers enterprises a customizable base model with strong audio capabilities, potentially reducing costs compared to proprietary APIs while enabling domain-specific fine-tuning. Inkling is not the strongest overall model but combines multimodal support, efficient thinking, and availability on the Tinker platform for LoRA fine-tuning, making it a flexible open-weights option.

hackernews · vimarsh6739 · Jul 15, 18:12 · [Discussion](https://news.ycombinator.com/item?id=48924912)

**Background**: Open-weights models release trained parameters publicly, allowing anyone to run them on their own hardware without cloud API dependency. Multimodal models process multiple data types (text, audio, images) for more holistic understanding. Tinker provides an API for efficient fine-tuning of such models with LoRA.

<details><summary>References</summary>
<ul>
<li><a href="https://enigmatica.ai/glossary/open-weights">What Is Open Weights ? Definition & Guide</a></li>
<li><a href="https://en.wikipedia.org/wiki/Multimodal_model">Multimodal model</a></li>
<li><a href="https://thinkingmachines.ai/tinker/">Tinker - Thinking Machines Lab</a></li>

</ul>
</details>

**Discussion**: The community is excited about Inkling's audio support, with some calling it the largest open-weights model with audio. Commenters appreciate the business model of offering open base models fine-tunable on Tinker, allowing enterprises to own custom models at lower cost. Several links to local running resources were shared.

**Tags**: `#AI`, `#open-weights`, `#multimodal`, `#large language model`

---

<a id="item-4"></a>
## [Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) ⭐️ 8.0/10

A guide demonstrates running Google's Gemma 4 26B (Mixture-of-Experts) model at 5 tokens per second on a 13-year-old Xeon CPU without any GPU. This showcases the feasibility of running large language models on extremely outdated hardware, potentially lowering the barrier for local AI inference and sparking debate on the cost-efficiency of cloud vs. local inference. The model is Gemma 4 26B, a Mixture-of-Experts variant with 26B total parameters but only 4B active per token, allowing it to run on CPU with high memory bandwidth.

hackernews · neomindryan · Jul 15, 15:34 · [Discussion](https://news.ycombinator.com/item?id=48922434)

**Background**: Gemma 4 is a family of open-weight models from Google DeepMind, designed for efficient inference across various hardware. Mixture-of-Experts (MoE) architectures activate only a subset of parameters per token, reducing computation. Running LLMs on CPU without GPU is typically very slow, but optimizations like quantized kernels can make it possible on machines with sufficient RAM.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/google/gemma-4-26B-A4B-it">google/gemma-4-26B-A4B-it · Hugging Face</a></li>
<li><a href="https://itsfoss.com/testing-local-llms-without-gpu/">Can You Run LLMs Locally Without a GPU? I Tested 8 Models on ...</a></li>
<li><a href="https://deepmind.google/models/gemma/gemma-4/">Gemma 4 — Google DeepMind</a></li>

</ul>
</details>

**Discussion**: Commenters debate the cost-effectiveness of local inference vs. cloud APIs, with one estimating that local inference on such old hardware costs about $0.15 per 18k tokens, much higher than cloud pricing. Some users report achieving 8-12 t/s on similar setups, and others predict that by mid-2027, 200B+ MoE models will run on consumer hardware.

**Tags**: `#machine-learning`, `#llm`, `#inference`, `#hardware`, `#cost-analysis`

---

<a id="item-5"></a>
## [Prioritizing mental health and communication in software development](https://ramones.dev/posts/mental-health/) ⭐️ 8.0/10

A blog post and Hacker News discussion highlight the need for prioritizing mental health and communication in software engineering, sparking a wide-ranging conversation about neurodiversity and work alignment. This matters because software development often undervalues mental well-being, and the discussion brings attention to how neurodivergence and personality mismatches can impact productivity and satisfaction, urging a more inclusive and empathetic culture. The community comments offer diverse perspectives, including the view that software development may not suit certain personalities, and that neurodivergent individuals cannot simply 'snap out of' their traits with better planning systems.

hackernews · ramon156 · Jul 15, 11:27 · [Discussion](https://news.ycombinator.com/item?id=48919198)

**Background**: Mental health in tech has been a growing concern, with high rates of burnout and imposter syndrome. Neurodiversity, including ADHD and autism, is increasingly recognized in software engineering, where attention to detail and communication styles vary widely. The blog post by a developer shares personal struggles and goals for improvement, resonating with many in the field.

**Discussion**: Commenters express mixed feelings: some agree that vocation alignment is crucial, while others push back against the idea of 'snapping out' of neurodivergent traits, emphasizing self-acceptance and leveraging strengths rather than forcing conformity to rigid workflows.

**Tags**: `#mental health`, `#software engineering`, `#communication`, `#neurodiversity`, `#work-life balance`

---

<a id="item-6"></a>
## [Claude web_fetch loophole enables data exfiltration attack](https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/#atom-everything) ⭐️ 8.0/10

Security researcher Ayush Paul discovered a loophole in Anthropic's Claude web_fetch tool that allowed an attacker to exfiltrate private user data (name, city, employer) by tricking the AI into following a chain of URLs embedded in a malicious honeypot page. This attack demonstrates a critical AI safety risk: even carefully designed tools like web_fetch can be bypassed through prompt injection, threatening user privacy and highlighting the need for more robust isolation mechanisms in AI agents. The attack exploited a design flaw where web_fetch was allowed to follow links returned in fetched pages, contrary to Anthropic's stated rule that it only navigates to exact URLs from the user or web_search. Anthropic claimed prior internal discovery and fixed the hole by removing that capability, with no bug bounty paid.

rss · Simon Willison · Jul 15, 14:21

**Background**: The 'lethal trifecta' is a known AI security concept combining three conditions: access to private data, exposure to untrusted content (e.g., via web fetch), and a mechanism to exfiltrate data (e.g., via URLs). Claude's web_fetch tool is designed to fetch content from specific URLs, but this attack shows how prompt injection can subvert those safeguards.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cyera.com/research/when-language-becomes-the-attack-vector-the-lethal-trifecta-of-ai-agents">When Language Becomes the Attack Vector: The Lethal Trifecta of...</a></li>
<li><a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool">Web fetch tool - Claude Platform Docs</a></li>

</ul>
</details>

**Tags**: `#AI safety`, `#security`, `#Claude`, `#data exfiltration`, `#prompt injection`

---

<a id="item-7"></a>
## [New Method Disentangles Single Convolutional Neuron Using Hadamard Clustering](https://www.reddit.com/r/MachineLearning/comments/1uwya70/mechanistic_interpretability_a_first_paper_on/) ⭐️ 8.0/10

This paper introduces a novel technique using Hadamard product clustering to disentangle a single 1x1 convolutional neuron in the Inceptionv1 model, revealing monosemantic patterns such as cars, cats, and dogs. This work advances mechanistic interpretability by providing a method to analyze individual neurons, which could lead to more transparent and trustworthy neural networks. It also offers a new tool for understanding how convolutional networks encode concepts. The method is applied only to a single neuron and layer, and has not yet been peer-reviewed. The author also found that low-value clusters, such as letters, had dependent neurons firing on the same concept with evenly distributed positive and negative weights.

reddit · r/MachineLearning · /u/narang_27 · Jul 15, 06:59

**Background**: Mechanistic interpretability seeks to reverse-engineer the internal computations of neural networks. The Hadamard product is an element-wise multiplication of matrices. This paper clusters the Hadamard product of the receptive field and neuron weights to identify the patterns a neuron detects, a technique inspired by the Distill Circuits thread.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hadamard_product_(matrices)">Hadamard product (matrices) - Wikipedia</a></li>
<li><a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/">Scaling Monosemanticity: Extracting Interpretable Features from...</a></li>

</ul>
</details>

**Tags**: `#mechanistic interpretability`, `#convolutional neural networks`, `#neuron analysis`, `#machine learning research`

---

<a id="item-8"></a>
## [170x PyTorch slowdown on T4 vs A100: possible causes explored](https://www.reddit.com/r/MachineLearning/comments/1ux6a9x/pytorch_model_running_170x_slower_on_t4_vs_a100/) ⭐️ 8.0/10

A user reports a 170x slowdown of a point-tracking PyTorch model on an NVIDIA T4 GPU compared to an A100, despite both running pure FP32 and achieving 99% GPU utilization. This extreme performance gap highlights how architectural differences between GPUs (e.g., Tensor Cores, memory bandwidth) can drastically affect compute-heavy operations like 4D correlation volumes and transformers, impacting model deployment choices. The model builds local 4D correlation volumes for dense matching between frames and uses transformer layers, all in FP32; the T4 has no Tensor Cores for FP32 and significantly less memory bandwidth than the A100, which likely causes the bottleneck.

reddit · r/MachineLearning · /u/Future-Structure-296 · Jul 15, 13:44

**Background**: NVIDIA T4 and A100 GPUs differ greatly: A100 has Tensor Cores for mixed-precision (but not FP32), higher memory bandwidth (1555 GB/s vs 320 GB/s), and a larger cache. 4D correlation volumes, commonly used in optical flow models like RAFT, involve all-pairs dot products between pixel features, which is memory-bound. The absence of FP32 Tensor Cores on T4 forces reliance on CUDA cores, which are slower for such operations.

<details><summary>References</summary>
<ul>
<li><a href="https://ar5iv.labs.arxiv.org/html/2003.12039">[2003.12039] RAFT: Recurrent All-Pairs Field Transforms for ...</a></li>
<li><a href="https://github.com/limacv/CorrelationLayer">Pure Pytorch implementation of Correlation Layer - GitHub</a></li>
<li><a href="https://www.codegenes.net/blog/correclation-package-pytorch/">Unveiling the Correlation Package in PyTorch — codegenes.net</a></li>

</ul>
</details>

**Tags**: `#PyTorch`, `#GPU Performance`, `#A100`, `#T4`, `#Model Optimization`

---

<a id="item-9"></a>
## [7 Mobile On-Device LLMs Get China Regulatory Approval](https://mp.weixin.qq.com/s/5MTWh4pWVAlL71RQbU-Udg) ⭐️ 8.0/10

On July 8, seven mobile on-device language models from Apple, Huawei, OPPO, vivo, Xiaomi, Samsung, and ZTE completed regulatory filing with China's Cyberspace Administration, including Apple Intelligence, Huawei Xiaoyi AI, OPPO AndesGPT, vivo BlueMind, Xiaomi Hyper AI, and Samsung Galaxy AI. This approval marks a significant step in bringing on-device generative AI to Chinese smartphones, enabling privacy-preserving, low-latency AI features without relying on cloud servers. It positions these manufacturers to compete in the rapidly growing on-device AI market in China. All models are specifically for on-device use, ensuring data stays on the phone. The approval comes from the Cyberspace Administration of China, aligning with new AI regulations requiring model registration.

telegram · zaihuapd · Jul 15, 08:06

**Background**: On-device language models run locally on smartphones, offering privacy and offline capabilities compared to cloud-based models. Chinese regulators require AI services to file for approval before public deployment, especially for generative AI. These models from major smartphone makers aim to power features like voice assistants, text generation, and image editing on-device.

<details><summary>References</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/1931281139416404545">终于有人把端侧大模型说清楚了 - 知乎</a></li>
<li><a href="https://www.aibase.com/news/3351">vivo Launches the Blue Heart Qianxun AI Assistant, Now Available for Download</a></li>

</ul>
</details>

**Tags**: `#AI`, `#mobile devices`, `#regulation`, `#on-device LLM`, `#China`

---

<a id="item-10"></a>
## [Musk: X to Unconditionally Open-Source Entire Codebase](https://x.com/elonmusk/status/2077361679034118271) ⭐️ 8.0/10

Elon Musk announced that X will unconditionally open-source its entire codebase after completing a security vulnerability review, and will invite third-party auditors to verify that the running code matches the open-source version. This move promises unprecedented transparency for a major social media platform, potentially setting a new standard for trust and accountability in the tech industry. It could also encourage other companies to adopt similar open-source practices, benefiting developers and users alike. The open-sourcing will occur after fixing security vulnerabilities, and third-party reviewers will check the running system against the open-source code to ensure consistency. Musk emphasized that trust from full transparency is the only trust worth having.

telegram · zaihuapd · Jul 15, 13:32

**Background**: X, formerly Twitter, is a major social media platform. Open-sourcing means making the source code publicly available for anyone to view, modify, and distribute. This announcement signals a shift toward radical transparency for the platform, which has historically been proprietary.

**Tags**: `#open source`, `#X platform`, `#code audit`, `#software engineering`, `#transparency`

---

<a id="item-11"></a>
## [Developer exploits iOS sandbox escape to read Notes database via Filza](https://x.com/0xjohnny/status/2077216973256274272) ⭐️ 8.0/10

Developer @0xjohnny modified the Filza file manager to exploit a sandbox escape vulnerability, allowing it to access the Notes database on iOS 27 beta 3 running on an iPhone 17 Pro Max. This highlights a critical iOS security flaw that could allow malicious apps to access protected user data, emphasizing the ongoing arms race between jailbreak developers and Apple's security measures. The modified Filza bypasses the app's container restrictions to browse external data, including the Notes database. The vulnerability was demonstrated on iOS 27 beta 3, a future version likely not yet publicly released.

telegram · zaihuapd · Jul 15, 14:35

**Background**: Filza is a powerful file manager for jailbroken iOS devices, providing access to the entire filesystem beyond Apple's sandbox restrictions. Sandbox escape vulnerabilities allow apps to break out of their restricted containers and access other apps' data or system files. Previous vulnerabilities like CVE-2024-54468 and CVE-2026-20667 have been patched by Apple.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cve.news/cve-2024-54468/">CVE-2024-54468 - Understanding the Apple Sandbox Escape ...</a></li>
<li><a href="https://cvefeed.io/vuln/detail/CVE-2026-20667">CVE-2026-20667 - Apple iOS/WatchOS Sandbox Escape Vulnerability</a></li>
<li><a href="https://www.tigisoftware.com/default/?page_id=78">Filza – TIGI Software</a></li>

</ul>
</details>

**Tags**: `#iOS security`, `#sandbox escape`, `#Filza`, `#vulnerability`, `#jailbreak`

---

<a id="item-12"></a>
## [Telegram Launches Serverless Platform for Bots and Mini Apps](https://core.telegram.org/bots/serverless) ⭐️ 8.0/10

Telegram has officially launched a serverless platform that allows developers to run JavaScript backend code for bots and Mini Apps directly on Telegram's infrastructure, eliminating the need to manage servers. This simplifies bot deployment and scaling for developers, reducing operational overhead and lowering the barrier to entry for creating Telegram bots. It strengthens Telegram's ecosystem by offering first-party serverless compute within the messaging platform. The platform uses isolated V8 sandbox environments adjacent to the Bot API, includes a built-in SQLite database, and enables deployment via a single command: 'npx tgcloud push'. Only plain JavaScript modules are supported.

telegram · zaihuapd · Jul 15, 16:00

**Background**: Serverless computing allows developers to run code without provisioning or managing servers, automatically scaling with demand. Telegram's new offering is similar to platforms like AWS Lambda or Cloudflare Workers, but integrated directly with its Bot API and Mini Apps, providing a seamless experience for creators within the Telegram ecosystem.

<details><summary>References</summary>
<ul>
<li><a href="https://core.telegram.org/bots/serverless">Telegram Serverless</a></li>
<li><a href="https://chromium.googlesource.com/v8/v8/+/HEAD/docs/sandbox/architecture.md">V8 Sandbox Architecture</a></li>

</ul>
</details>

**Tags**: `#serverless`, `#Telegram`, `#bots`, `#JavaScript`, `#cloud computing`

---