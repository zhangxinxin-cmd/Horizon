---
layout: default
title: "Horizon Summary: 2026-07-18 (EN)"
date: 2026-07-18
lang: en
---

> From 38 items, 12 important content pieces were selected

---

1. [GPT-5.6 Solves 30-Year Convex Optimization Problem with Prompt](#item-1) ⭐️ 9.0/10
2. [Kimi K3 Achieves Frontier Performance at Lower Cost](#item-2) ⭐️ 9.0/10
3. [Fable 5 vs. GPT-5.6 Sol on NP-Hard: Does /goal help?](#item-3) ⭐️ 8.0/10
4. [LG monitors silently install software via Windows Update](#item-4) ⭐️ 8.0/10
5. [Graph Shows Stack Overflow Decline Linked to AI and Moderation](#item-5) ⭐️ 8.0/10
6. [PHK Bids Farewell with Reflections on Bikeshedding](#item-6) ⭐️ 8.0/10
7. [Anthropic makes Claude Fable 5 permanent in premium plans](#item-7) ⭐️ 8.0/10
8. [Alleged AI Slop Wins $25K DeepMind/Kaggle Prize](#item-8) ⭐️ 8.0/10
9. [Spacex in talks with Pentagon for AI computing deal worth billions](#item-9) ⭐️ 8.0/10
10. [TSMC Announces A14 Process Technology for 2028](#item-10) ⭐️ 8.0/10
11. [Trump admin proposes FINRA-like watchdog for top AI models](#item-11) ⭐️ 8.0/10
12. [Cambodia's flag carrier orders 20 COMAC C909 jets](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [GPT-5.6 Solves 30-Year Convex Optimization Problem with Prompt](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/) ⭐️ 9.0/10

GPT-5.6, a large language model, reportedly used a carefully crafted prompt to solve a 30-year-old open problem in convex optimization, proving a previously unproven conjecture about the convergence rate of an optimization algorithm over convex Lipschitz functions on a spherical domain. This marks a significant milestone in AI-driven mathematical discovery, demonstrating that large language models can produce original mathematical proofs. It could accelerate research in optimization theory and inspire new approaches to longstanding problems in mathematics and computer science. The specific problem involved proving an upper bound on the number of iterations needed for a first-order method to reach an epsilon-suboptimal solution for convex Lipschitz functions. The solution was reportedly achieved using the Sol Pro variant of GPT-5.6, not the Ultra variant, suggesting a multi-agent or selection mechanism.

hackernews · mbustamanter · Jul 18, 13:00 · [Discussion](https://news.ycombinator.com/item?id=48957779)

**Background**: Convex optimization is a branch of mathematical optimization where the objective function is convex and the feasible set is convex. Such problems have the property that any local minimum is also a global minimum, making them tractable. The 30-year gap likely refers to an open conjecture about the optimal convergence rate of certain optimization algorithms, which GPT-5.6 managed to prove. The result was validated by the mathematics community on platforms like Hacker News.

<details><summary>References</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=48957779">GPT-5.6 used a prompt to close a 30-year gap in convex optimization | Hacker News</a></li>
<li><a href="https://en.wikipedia.org/wiki/Convex_optimization">Convex optimization - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Community comments on Hacker News indicate that the solved conjecture is more niche than OpenAI's recent CDC proof, but still a real contribution. Some discuss the difference between Sol Pro and Ultra, with speculations that Sol Pro might use a multi-agent system. Others highlight that AI can brute-force mathematical logic, leading to advances. A few comments reference the controversial abc conjecture proof, drawing parallels about proof verification.

**Tags**: `#AI`, `#convex optimization`, `#mathematics`, `#breakthrough`, `#GPT-5.6`

---

<a id="item-2"></a>
## [Kimi K3 Achieves Frontier Performance at Lower Cost](https://stephen.bochinski.dev/blog/2026/07/18/the-kimi-k3-moment/) ⭐️ 9.0/10

Chinese startup Moonshot AI released Kimi K3, a 2.8 trillion parameter model that rivals top US models like GPT-5.6 and Claude Opus 4.8 on key benchmarks while offering significantly lower API pricing ($3/$15 per million tokens vs $5/$30 for GPT-5.6). This disrupts the AI pricing landscape and demonstrates that distillation or alternative approaches can slash costs, potentially pressuring US AI firms and raising national security debates about cheap, powerful AI models. It also accelerates the trend of democratizing access to frontier-level AI capabilities. Kimi K3 uses a hybrid linear attention mechanism called Kimi Delta Attention (KDA) and Attention Residuals, supporting 1M-token context. Despite lower price, its performance trails on some leaderboards but claims to match or exceed in specific coding and reasoning tasks.

hackernews · sbochins · Jul 18, 17:32 · [Discussion](https://news.ycombinator.com/item?id=48960218)

**Background**: Knowledge distillation transfers knowledge from a large 'teacher' model to a smaller 'student' model, enabling cheaper and faster inference. The AI industry has seen a pricing war, with Chinese firms often offering lower prices due to cheaper compute and possible distillation from US frontier models. Moonshot AI previously released the open-weights Kimi K2, and Kimi K3 continues that lineage with a focus on efficiency.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Kimi_(chatbot)">Kimi (chatbot) - Wikipedia</a></li>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart">Kimi K3 - Kimi API Platform</a></li>
<li><a href="https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html">China's Moonshot AI unveils Kimi K3 that rivals OpenAI, Anthropic</a></li>

</ul>
</details>

**Discussion**: Commenters debated whether Kimi K3 achieved parity through legitimate distillation or independent innovation, with many noting such an outcome was inevitable given the nature of AI development. Some expressed concerns about government restrictions on using powerful AI models for national security reasons, while one user reported a poor experience on a complex coding task, questioning the real-world value despite low cost.

**Tags**: `#AI`, `#machine learning`, `#distillation`, `#model pricing`, `#AI safety`

---

<a id="item-3"></a>
## [Fable 5 vs. GPT-5.6 Sol on NP-Hard: Does /goal help?](https://charlesazam.com/blog/fable-5-gpt-5-6-sol-goal/) ⭐️ 8.0/10

A blog post compares Anthropic's Claude Fable 5 and OpenAI's GPT-5.6 Sol on an NP-hard problem, examining the impact of the '/goal' parameter on their performance. The article provides empirical results showing that '/goal' helps both models, particularly in maintaining focus on the objective. This comparison is significant because it tests leading AI models on a notoriously hard problem class, offering insights into how prompt strategies like '/goal' can enhance reasoning. The findings affect developers and researchers using AI for complex coding, optimization, and long-horizon tasks. The evaluation likely uses a specific NP-hard benchmark with metrics like solution quality and completion time. The '/goal' parameter appears designed for use in models like Claude Code to persist a top-level instruction across long sessions.

hackernews · couAUIA · Jul 18, 11:00 · [Discussion](https://news.ycombinator.com/item?id=48956879)

**Background**: Claude Fable 5 is Anthropic's highest-scoring model on FrontierBench, a frontier coding evaluation, and excels at long-horizon reasoning. GPT-5.6 Sol is OpenAI's most capable variant in the GPT-5.6 family, achieving state-of-the-art results in coding, science, and cybersecurity. The '/goal' parameter in some AI tools allows users to set a persistent goal that the model should focus on throughout a conversation, helping it avoid drifting.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-5.6">GPT-5.6 - Wikipedia</a></li>
<li><a href="https://openai.com/index/previewing-gpt-5-6-sol/">Previewing GPT‑5.6 Sol: a next-generation model - OpenAI</a></li>

</ul>
</details>

**Discussion**: Community comments reveal mixed experiences: some users find Claude Code slower and less reliable than GPT-based tools for coding, while others note that '/goal' helps maintain context. There is also curiosity about comparing other search strategies like 'ultra mode', and some users question the clarity of the presented charts.

**Tags**: `#AI`, `#GPT`, `#Claude`, `#NP-hard`, `#coding`

---

<a id="item-4"></a>
## [LG monitors silently install software via Windows Update](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent) ⭐️ 8.0/10

LG monitors automatically install software through Windows Update without user consent, as soon as the monitor is connected via HDMI or already present. The software runs at boot with full system access and no sandboxing. This behavior bypasses user consent and poses serious privacy and security risks, affecting potentially millions of Windows users with LG monitors. It also highlights a broader issue with Windows Update's driver delivery mechanism that can push arbitrary software from hardware vendors. The software is installed via Windows Update's automatic driver delivery feature, triggered by plugging in an LG monitor or simply having one already connected. Community members have identified a workaround by disabling automatic download of manufacturer apps through Group Policy or Device Installation Settings.

hackernews · baranul · Jul 18, 10:21 · [Discussion](https://news.ycombinator.com/item?id=48956688)

**Background**: Windows Update automatically downloads and installs driver updates for most hardware devices, including monitors. Hardware vendors can submit driver packages that may include extra software. Microsoft's default settings allow these packages to be automatically delivered to compatible systems. Responsible disclosure expects vendors to patch before public disclosure, but here the behavior was reported publicly.

<details><summary>References</summary>
<ul>
<li><a href="https://learn.microsoft.com/en-us/windows-hardware/drivers/dashboard/understanding-windows-update-automatic-and-optional-rules-for-driver-distribution">Understanding Windows Update rules for driver distribution - Windows drivers | Microsoft Learn</a></li>
<li><a href="https://windowsforum.com/threads/demystifying-windows-driver-updates-how-theyre-made-targeted-and-delivered.385588/">Demystifying Windows Driver Updates: How They're Made, Targeted, and Delivered | Windows Forum</a></li>

</ul>
</details>

**Discussion**: Community comments express outrage, noting that this is worse than the title suggests: the software has full system access, starts at boot, and is installed without any user interaction. Users provided workarounds to disable this behavior, and some argue that the blame lies with Microsoft's driver consent model rather than LG alone.

**Tags**: `#windows-update`, `#lg-monitors`, `#privacy`, `#security`, `#responsible-disclosure`

---

<a id="item-5"></a>
## [Graph Shows Stack Overflow Decline Linked to AI and Moderation](https://data.stackexchange.com/stackoverflow/query/1953768#graph) ⭐️ 8.0/10

A graph from Stack Exchange Data Explorer reveals a sharp decline in Stack Overflow activity, with community comments pointing to causes such as AI chatbots, excessive moderation, and the platform's acquisition by Prosus. This trend signifies a shift in how developers seek help, moving from traditional Q&A forums to AI-powered tools, which could reshape knowledge sharing in the software industry. The graph peaked around 2014, well before the rise of AI, and shows a curious growth spike just before the Prosus acquisition in 2021, followed by accelerated decline after ChatGPT's release.

hackernews · secretslol · Jul 18, 11:12 · [Discussion](https://news.ycombinator.com/item?id=48956949)

**Background**: Stack Overflow, launched in 2008, became the dominant Q&A platform for programmers, relying on a reputation system and strict moderation to maintain high-quality answers. However, critics argue its policies discouraged new users through harsh closure of questions and a prohibition on casual conversation, weakening community bonds over time.

**Discussion**: Commenters widely agree that Stack Overflow's decline stems from multiple factors, including poor community management and AI competition, with some noting the decline began long before ChatGPT due to overly strict moderation and the platform's acquisition by Prosus.

**Tags**: `#stackoverflow`, `#ai`, `#community`, `#q&a`, `#decline`

---

<a id="item-6"></a>
## [PHK Bids Farewell with Reflections on Bikeshedding](https://queue.acm.org/detail.cfm?id=3818307) ⭐️ 8.0/10

Poul-Henning Kamp has published a retrospective article titled "Goodbye, and Thanks for All the Bikesheds," reflecting on the bikeshedding metaphor he popularized in open source software development. This article provides a valuable perspective on a pervasive phenomenon in software engineering culture, and Kamp's farewell signals a potential transition in the open source community. It invites readers to reconsider how trivial disagreements can hinder progress. The article discusses the origins and implications of bikeshedding, and Kamp may propose solutions like reversible decisions or age restrictions to mitigate it. The high community engagement (165 points, 167 comments) indicates the topic resonates deeply.

hackernews · Ygg2 · Jul 18, 17:27 · [Discussion](https://news.ycombinator.com/item?id=48960155)

**Background**: Bikeshedding, also known as Parkinson's Law of Triviality, describes the tendency to spend disproportionate time on minor issues because they are easy to understand. Poul-Henning Kamp, a prominent Danish software developer and FreeBSD contributor, popularized the term in a 1999 mailing list post. He is also known for creating MD5crypt and leading Varnish Cache development.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Law_of_triviality">Law of triviality - Wikipedia</a></li>
<li><a href="https://patrickkarsh.medium.com/bikeshedding-in-software-development-df72e8bfe431">Bikeshedding in Software Development | by Patrick Karsh | Medium</a></li>
<li><a href="https://en.wikipedia.org/wiki/Poul-Henning_Kamp">Poul-Henning Kamp - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters suggest that reversible decisions can reduce bikeshedding by allowing quick, instinctive choices for trivial matters. Others discuss potential impacts of age restrictions on FOSS, and some humorously note that bikeshedding has evolved into ticket-painting in JIRA. One commenter initially disagreed but changed their mind after multiple reads, highlighting the article's depth.

**Tags**: `#bikeshedding`, `#software engineering`, `#open source`, `#community dynamics`, `#PHK`

---

<a id="item-7"></a>
## [Anthropic makes Claude Fable 5 permanent in premium plans](https://simonwillison.net/2026/Jul/18/claude-make-fable-5-permanent/#atom-everything) ⭐️ 8.0/10

Anthropic announced that beginning July 20, Claude Fable 5 will be included in all Max and Team Premium plans at 50% of limits, reversing its earlier plan to remove the model from subscriptions. This decision highlights intense competitive pressure from OpenAI's GPT-5.6 Sol and Moonshot AI's Kimi 3, which made it untenable for Anthropic to remove its best model. It ensures premium subscribers retain access to the most advanced Claude model, preserving the value of expensive subscription plans. The $20/month Pro Standard plan still does not include Fable 5; access is limited to Max ($100/$200 per month) and Team Premium plans. Pro and Team Standard users retain access via usage credits and receive a one-time $100 credit.

rss · Simon Willison · Jul 18, 06:00

**Background**: Claude Fable 5 is Anthropic's most advanced AI model, released in June 2026, excelling in long-horizon reasoning and coding. Anthropic initially planned to remove Fable 5 from subscriptions and offer it only via API pricing due to compute constraints. However, competitive launches like GPT-5.6 Sol and Kimi 3 forced a reversal to retain subscribers.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>
<li><a href="https://openai.com/index/previewing-gpt-5-6-sol/">Previewing GPT-5.6 Sol: a next-generation model | OpenAI</a></li>
<li><a href="https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html">Chinese startup Moonshot AI unveils Kimi model it says rivals ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Claude`, `#Fable 5`, `#subscription`, `#competition`

---

<a id="item-8"></a>
## [Alleged AI Slop Wins $25K DeepMind/Kaggle Prize](https://www.reddit.com/r/MachineLearning/comments/1uzyf66/did_blatant_ai_slop_just_win_a_25k_usd_deepmind/) ⭐️ 8.0/10

A Reddit post claimed that the Google DeepMind-sponsored Kaggle competition "Measuring Progress Toward AGI - Cognitive Abilities" awarded a $25,000 grand prize to a submission containing nonsensical content and unfounded claims, sparking debate about evaluation integrity. This allegation challenges the credibility of high-profile AI competitions and suggests that even major organizations like DeepMind may have flawed review processes, potentially undermining trust in AI research evaluation. The post includes two parts: a cursory review of the writeup and a detailed analysis of methodology, code, and data, claiming the submission is a "vibed pile of spaghetti" that is ten times the requested format size, with neither authors nor judges appearing to give it a thorough reading.

reddit · r/MachineLearning · /u/TheWerkmeister · Jul 18, 15:10

**Background**: The Kaggle competition asked participants to design new cognitive-science-based AI benchmarks covering five cognitive abilities: learning, metacognition, attention, executive functions, and social cognition. DeepMind and Kaggle sponsored the challenge, which offered a $25,000 grand prize. The post's author argues that the winning submission contains nonsensical number generation and unsupported claims, questioning whether proper review occurred.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.google/innovation-and-ai/models-and-research/google-deepmind/measuring-agi-cognitive-framework/">Measuring progress toward AGI: A cognitive framework</a></li>
<li><a href="https://arxiv.org/abs/2605.28405">Measuring Progress Toward AGI: A Cognitive Framework</a></li>

</ul>
</details>

**Tags**: `#AI ethics`, `#Kaggle`, `#DeepMind`, `#research integrity`, `#machine learning competitions`

---

<a id="item-9"></a>
## [Spacex in talks with Pentagon for AI computing deal worth billions](https://www.wsj.com/tech/ai/spacex-in-talks-to-provide-computing-power-for-pentagons-ai-push-15e752e4) ⭐️ 8.0/10

SpaceX is in negotiations with the U.S. Department of Defense to provide data center computing power for running AI models, with a potential deal worth billions of dollars. If completed, this deal would deepen SpaceX's relationship with the Pentagon and significantly boost its cloud computing business, while also accelerating the Pentagon's AI capabilities for national security and daily operations. The negotiations are ongoing and could still fall through; SpaceX has recently signed similar computing power supply agreements with Anthropic and Google, and plans to expand its cloud computing operations substantially.

telegram · zaihuapd · Jul 18, 01:44

**Background**: The Pentagon is accelerating its acquisition of cloud computing capabilities to support AI applications in national security and daily operations. Recently, it approved SpaceX, Amazon, Google, Microsoft, and Oracle to use their AI models in classified environments. SpaceX already provides rocket launch services, satellite communications, and missile tracking to the Department of Defense.

<details><summary>References</summary>
<ul>
<li><a href="https://www.163.com/dy/article/L23MV58N05198CJN.html">SpaceX拟向五角大楼提供AI算力 合同规模或达数十亿美元|谷歌|火箭发射|知名企业|美国国防部|供应链风险|spacex|埃隆_马斯克_网易订阅</a></li>
<li><a href="https://www.163.com/dy/article/L0P01C9K05118O92.html">SpaceX： AI 烧钱不止，"太空算力霸权" 才是终极杀|谷歌|知名企业|spacex|埃隆_马斯克|openai|系列模型价格_网易订阅</a></li>

</ul>
</details>

**Tags**: `#SpaceX`, `#AI算力`, `#五角大楼`, `#国家安全`, `#云计算`

---

<a id="item-10"></a>
## [TSMC Announces A14 Process Technology for 2028](https://t.me/zaihuapd/42643) ⭐️ 8.0/10

TSMC announced that its next-generation A14 process technology will enter production in 2028, delivering up to 15% faster speed or 30% lower power consumption compared to the N2 process, along with over 20% improvement in logic density. This announcement underscores TSMC's strategy to maintain leadership in advanced chip manufacturing, which is critical for powering future AI, HPC, and mobile devices. The A14 node will likely set new benchmarks for performance and efficiency in the semiconductor industry. A14 is a full node advancement after N2 (2nm) and the intermediate A16 node (slated for late 2026). It will utilize GAAFET transistors and further dimensional scaling to achieve its gains. TSMC plans to introduce A16 in late 2026 as a stepping stone.

telegram · zaihuapd · Jul 18, 05:00

**Background**: TSMC's N2 (2nm) process, which uses Gate-All-Around Field-Effect Transistors (GAAFET), is set to enter production in 2025. A16, often referred to as '1.6nm', will debut in 2026 with backside power delivery and 8-10% speed boost or 20% power savings over N2. A14 represents a further shrink, likely beyond 1nm, continuing TSMC's roadmap of aggressive scaling.

<details><summary>References</summary>
<ul>
<li><a href="https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_A16">A16 Technology - TSMC</a></li>
<li><a href="https://en.wikipedia.org/wiki/2_nm_process">2 nm process - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#TSMC`, `#semiconductor`, `#chip manufacturing`, `#process technology`, `#A14`

---

<a id="item-11"></a>
## [Trump admin proposes FINRA-like watchdog for top AI models](https://www.bloomberg.com/news/articles/2026-07-17/us-considers-creating-finra-like-watchdog-to-vet-top-ai-models) ⭐️ 8.0/10

The Trump administration is considering creating an independent AI regulatory body modeled after the Financial Industry Regulatory Authority (FINRA) to review the safety of top artificial intelligence models. This marks a significant shift in AI governance, addressing both Wall Street's cybersecurity concerns and Silicon Valley's dissatisfaction with temporary controls, and would give the industry a larger role in setting safety standards. The proposal is led by Treasury Secretary Scott Bessent and is currently under review by White House Chief of Staff Susie Wiles; President Trump has not yet reviewed the plan, and the framework remains under discussion.

telegram · zaihuapd · Jul 18, 05:45

**Background**: FINRA is a non-profit, self-regulatory organization that oversees securities firms and ensures fair financial transactions, reporting to the SEC. The proposed AI watchdog would similarly be independent and funded by the industry, aligning with recent calls from AI leaders like Demis Hassabis of Google DeepMind.

<details><summary>References</summary>
<ul>
<li><a href="https://brokercheck.finra.org/">brokercheck. finra .org</a></li>
<li><a href="https://www.shmoop.com/video/finance-what-is-finra?playlist=finance-incorporation">Finance : What is FINRA ? Video - Shmoop</a></li>

</ul>
</details>

**Tags**: `#AI regulation`, `#government policy`, `#AI safety`, `#regulatory body`

---

<a id="item-12"></a>
## [Cambodia's flag carrier orders 20 COMAC C909 jets](https://www.zaobao.com.sg/news/china/story20260718-9384413) ⭐️ 8.0/10

Cambodia Angkor Air signed an agreement on July 17, 2026 in Shanghai to purchase 20 COMAC C909 aircraft, becoming the first foreign flag carrier to place a bulk order for Chinese-made C909 jets. The first deliveries are scheduled for the second half of 2026. This deal marks a significant milestone for COMAC's international expansion, demonstrating that Chinese-made regional jets are gaining traction abroad. It also strengthens Cambodia's aviation connectivity and reduces reliance on Western aircraft manufacturers. The C909, originally named ARJ21, is a 78-97 seat regional jet with a range of 2,225 to 3,700 km. The aircraft uses General Electric CF34-10A engines and Western-supplied avionics; the deal also includes a memorandum of cooperation to support operational success.

telegram · zaihuapd · Jul 18, 11:36

**Background**: The COMAC C909 is China's first domestically developed regional jet, certified by CAAC in 2014. It is part of COMAC's family including the C919 narrow-body and C929 wide-body. Previously operated mainly by Chinese airlines, this export order to a foreign flag carrier represents a breakthrough for COMAC's international sales. The aircraft competes with regional jets like the Embraer E-Jet and Bombardier CRJ series.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Comac_C909">Comac C909 - Wikipedia C909_Commercial Aircraft Corporation of China, Ltd. Comac C909 - Technical parameters Comac C909 Specs - Who That Plane?! Ultra Blue PVCO (C909) - JM Eagle C909 - NamuWiki 1--C900 and C909 installation guide - JM Eagle</a></li>
<li><a href="http://english.comac.cc/products/c909/">C909_Commercial Aircraft Corporation of China, Ltd.</a></li>

</ul>
</details>

**Tags**: `#aviation`, `#COMAC`, `#C909`, `#Cambodia`, `#aerospace`

---