# Horizon Daily - 2026-07-10

> From 35 items, 9 important content pieces were selected

---

1. [GPT-5.6 Sol Ultra Claims Proof of Cycle Double Cover Conjecture](#item-1) ⭐️ 9.0/10
2. [Long March 10B Achieves First Grid-Based Rocket Recovery](#item-2) ⭐️ 9.0/10
3. [QuadRF: Open-Source RF Camera Spots Drones and Sees WiFi Signals](#item-3) ⭐️ 8.0/10
4. [Write Code for Humans, Not AI](#item-4) ⭐️ 8.0/10
5. [Adversarial RL: Critic Attacks Stronger Than Actor in Multi-Agent PPO](#item-5) ⭐️ 8.0/10
6. [Chinese Courts Rule Game Accounts Inheritable, Platform Bans Void](#item-6) ⭐️ 8.0/10
7. [Tencent in Talks to Acquire AI Startup Manus from Meta](#item-7) ⭐️ 8.0/10
8. [OpenAI, Google Accused of AI Model Supply to Blacklisted Chinese Firms](#item-8) ⭐️ 8.0/10
9. [Meta Faces $12B EU Fine for Addictive Design](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [GPT-5.6 Sol Ultra Claims Proof of Cycle Double Cover Conjecture](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) ⭐️ 9.0/10

OpenAI's GPT-5.6 Sol Ultra model has reportedly generated a proof for the long-standing Cycle Double Cover Conjecture in graph theory, with a preprint released on July 10, 2026. The proof claims that every bridgeless graph has a cycle double cover. If verified, this would be a landmark achievement for AI in mathematics, demonstrating an LLM's ability to produce a novel proof of an unsolved conjecture. It could reshape the role of AI in mathematical research and automated theorem proving. The proof is extremely concise, leading some experts to suspect it exploits a clever trick that may have been overlooked. The prompt used to generate the proof has been released alongside the preprint, inviting community scrutiny.

hackernews · scrlk · Jul 10, 18:29 · [Discussion](https://news.ycombinator.com/item?id=48863490)

**Background**: The Cycle Double Cover Conjecture, posed by Tutte, Itai and Rodeh, Szekeres, and Seymour, asks whether every bridgeless graph can be covered by a collection of cycles such that each edge appears exactly twice. It is a well-known open problem in graph theory, related to graph embeddings and the Four Color Theorem. Prior to this claim, no proof had been accepted.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cycle_double_cover_conjecture">Cycle double cover conjecture</a></li>
<li><a href="https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf">A PROOF OF THE CYCLE DOUBLE COVER CONJECTURE OPENAI</a></li>

</ul>
</details>

**Discussion**: Community comments express cautious excitement, with some members creating visualizations of the proof. Commenters note that while impressive, the proof is very short and may rely on a trick, and that AI has not yet achieved autonomous theory-building proofs of open conjectures. There is curiosity about how many open problems are being tried against frontier models.

**Tags**: `#AI`, `#mathematics`, `#graph theory`, `#GPT-5.6`, `#conjecture`

---

<a id="item-2"></a>
## [Long March 10B Achieves First Grid-Based Rocket Recovery](https://weibo.com/7340734455/R814of1Ki) ⭐️ 9.0/10

On July 10, 2026, the Long March 10B rocket launched from Hainan Commercial Space Launch Site and successfully recovered its first stage via a net-based capture system at sea, marking both China's first controlled first-stage recovery and the world's first grid-net rocket recovery. This breakthrough reduces the cost of access to space and improves rocket reusability, positioning China as a leader in innovative recovery technologies. The grid-net method eliminates heavy landing legs, increasing payload efficiency, and paves the way for more economical missions like crewed lunar landings. The first stage separated about six minutes after liftoff, made a vertical return, and was captured by a giant net on a sea platform. Unlike SpaceX's Falcon 9 which uses landing legs, the Long March 10B uses deployable hooks and a net cushioning system, reducing structural mass and simplifying attitude control.

telegram · zaihuapd · Jul 10, 04:36

**Background**: Rocket recovery is crucial for reusability and cost reduction. Traditional vertical landing like SpaceX's Falcon 9 requires heavy landing legs, which reduces payload capacity. The Long March 10B's grid-net recovery is a novel approach: the booster is snagged by a net on a ship, eliminating the need for landing gear. This is China's first successful controlled recovery of a rocket first stage, following years of development of reusable rocket technology.

<details><summary>References</summary>
<ul>
<li><a href="https://www.zaobao.com.sg/news/china/story20260710-9346548">中国首次实现火箭可控回收 官方称历史性突破首创网系回收 | 联合早报</a></li>
<li><a href="https://news.china.com/socialgd/10000169/20260710/49602676.html">中信重工参与此次火箭海上网系回收 创新技术引关注_新闻频道_中华网</a></li>
<li><a href="http://www.ce.cn/xwzx/gnsz/gdxw/202607/t20260710_3080704.shtml">ce.cn/xwzx/gnsz/gdxw/202607/t20260710_3080704.shtml</a></li>

</ul>
</details>

**Tags**: `#航天`, `#火箭回收`, `#长征十号乙`, `#网系回收`, `#中国航天`

---

<a id="item-3"></a>
## [QuadRF: Open-Source RF Camera Spots Drones and Sees WiFi Signals](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/) ⭐️ 8.0/10

QuadRF is an open-source RF augmented reality device that uses a 4x4 MIMO SDR and an FPGA to visualize wireless signals in real time, overlaying them on a camera view. It can detect drones, decode NTSC video transmissions, and show WiFi signals through walls. This technology democratizes RF sensing, previously limited to expensive specialized equipment, enabling hobbyists, security researchers, and hobbyists to conduct drone detection and wireless security audits. Its open-source nature fosters community innovation and transparency in RF monitoring. The device combines a Raspberry Pi 5 with a Lattice ECP5 FPGA for signal processing, and its software stack is fully open source under GPL licenses. The RF-core implementation remains partially proprietary to keep costs low, but the rest is customizable.

hackernews · speckx · Jul 10, 15:59 · [Discussion](https://news.ycombinator.com/item?id=48861717)

**Background**: RF augmented reality overlays radio frequency data onto a real-world view, allowing users to 'see' invisible wireless signals. QuadRF uses software-defined radio (SDR) technology to capture signals across multiple bands, then processes them with an FPGA to create visualization layers. This is similar to thermal cameras but for radio waves.

<details><summary>References</summary>
<ul>
<li><a href="https://www.hackster.io/news/quadrf-the-open-source-rf-camera-that-lets-you-see-wi-fi-signals-141ad91f2a2d">QuadRF: The Open Source RF Camera That Lets You See Wi-Fi Signals - Hackster.io</a></li>
<li><a href="https://www.crowdsupply.com/scale-rf/quadrf">QuadRF | Crowd Supply</a></li>
<li><a href="https://scalerf.com/updates/">QuadRF Updates</a></li>

</ul>
</details>

**Discussion**: The creator of QuadRF participated in the comments, offering to answer questions and pointing to demo videos. Commenters expressed interest in building similar devices for sound localization, and noted the potential for security auditing to check for hidden transmitters. Some wished for broader frequency coverage and integration into smart glasses.

**Tags**: `#RF sensing`, `#open source hardware`, `#drone detection`, `#augmented reality`, `#wireless security`

---

<a id="item-4"></a>
## [Write Code for Humans, Not AI](https://unstack.io/write-code-like-a-human-will-maintain-it) ⭐️ 8.0/10

An article argues that developers should write code with human maintainability in mind, especially when using LLMs, to avoid creating messy, junior-level code. As LLMs become more integrated into coding workflows, the quality and maintainability of generated code is a growing concern, affecting long-term project health and developer productivity. The article highlights that LLMs often produce over-commented, over-abstracted code akin to a junior developer, and suggests that writing code for human readers can prevent technical debt.

hackernews · ScottWRobinson · Jul 10, 13:33 · [Discussion](https://news.ycombinator.com/item?id=48859701)

**Background**: LLMs like GPT-4 can generate code from prompts, but often produce verbose or poorly structured code. Human maintainability is a core principle of software engineering, emphasizing readability and simplicity. This article likely cautions against blindly following AI-generated code without considering future human maintainers.

**Discussion**: Commenters express mixed views: some criticize LLM code as mediocre and junior-level, while others share practical workflows like a /review command to enforce quality. A few caution that LLMs can degrade codebases over time if used carelessly, and one commenter advocates simply writing code without AI.

**Tags**: `#software engineering`, `#code quality`, `#maintainability`, `#AI-generated code`, `#developer productivity`

---

<a id="item-5"></a>
## [Adversarial RL: Critic Attacks Stronger Than Actor in Multi-Agent PPO](https://www.reddit.com/r/MachineLearning/comments/1usx96p/on_adversarial_rl_r/) ⭐️ 8.0/10

A user reports that critic-based adversarial attacks on multi-agent PPO (IPPO, GPPO) are stronger than actor-based attacks, contradicting the findings from the SA-MDP framework which claimed the opposite for single-agent settings. This empirical contradiction challenges the generality of theoretical robustness claims from SA-MDP and highlights the need for multi-agent specific adversarial analysis, potentially impacting the design of robust multi-agent reinforcement learning algorithms. The attack uses projected gradient descent (PGD) adapted to continuous policies via closed-form KL divergence, tested on VMAS library scenarios with IPPO and GPPO (including heterogeneous versions) policies.

reddit · r/MachineLearning · /u/ham_bam0 · Jul 10, 19:15

**Background**: The SA-MDP (State-Adversarial MDP) framework formalizes adversarial perturbations on state observations in reinforcement learning, and Zhang et al. (2020) showed that actor-based attacks produce stronger perturbations than critic-based ones in single-agent environments. Multi-agent reinforcement learning introduces additional complexity due to interactions between agents, and libraries like VMAS provide simulation environments for such scenarios. The user compares two variants: IPPO (Independent PPO) and GPPO (Graph Independent PPO) from Bettini et al. 2023.

<details><summary>References</summary>
<ul>
<li><a href="https://hal.science/hal-04521876v1/document">Robust Deep Reinforcement Learning Through Adversarial Attacks...</a></li>
<li><a href="https://proceedings.neurips.cc/paper/2020/file/f0eb6568ea114ba6e293f903c34d7488-Review.html">Review for NeurIPS paper: Robust Deep Reinforcement Learning...</a></li>

</ul>
</details>

**Tags**: `#adversarial RL`, `#multi-agent RL`, `#PPO`, `#adversarial attacks`, `#SA-MDP`

---

<a id="item-6"></a>
## [Chinese Courts Rule Game Accounts Inheritable, Platform Bans Void](https://www.tomshardware.com/tech-industry/big-tech/chinese-courts-allow-heirs-to-inherent-accounts-of-deceased-gamers-multiple-cases-spanning-years-establish-precedent-for-digital-ownership-of-games-in-game-items-and-microtransactions) ⭐️ 8.0/10

Chinese courts have issued multiple rulings across several years establishing that virtual assets such as game accounts, in-game items, cryptocurrencies, and social media operational rights are inheritable property, and that platform clauses prohibiting inheritance are invalid. This sets an important legal precedent for digital asset inheritance, affecting millions of gamers and digital asset owners in China, and could influence similar legislation and court decisions globally regarding the transfer of digital property upon death. The courts ruled that pure personal privacy content such as chat records is not inheritable and will be archived by the platform, while platforms may charge reasonable fees for account transfers to heirs.

telegram · zaihuapd · Jul 10, 02:56

**Background**: Digital inheritance refers to the transfer of digital assets—such as online accounts, virtual currency, and digital files—after a person's death. Traditionally, platform terms often banned such inheritance. These Chinese court rulings challenge those terms by recognizing the property nature of digital assets and prioritizing inheritance laws over contractual limitations.

**Tags**: `#数字资产`, `#继承`, `#游戏账号`, `#法律判例`, `#用户权益`

---

<a id="item-7"></a>
## [Tencent in Talks to Acquire AI Startup Manus from Meta](https://www.reuters.com/technology/tencent-talks-become-ai-start-up-manus-largest-shareholder-ft-reports-2026-07-10/) ⭐️ 8.0/10

Tencent is negotiating to acquire AI startup Manus and become its largest shareholder by repurchasing shares from Meta for at least $2 billion, as reported by the Financial Times. This deal highlights the strategic importance of AI agents and the competitive landscape among tech giants, with Tencent strengthening its AI portfolio while Meta is forced to divest due to China's regulatory intervention. The repurchase price is at least $2 billion, and Tencent will partner with original investors ZhenFund and HSG (formerly Hillhouse Capital) to buy out Meta's stake. All parties involved have not commented on the report.

telegram · zaihuapd · Jul 10, 06:45

**Background**: Manus is an AI agent startup founded in China and based in Singapore, developing autonomous AI agents. China had previously blocked Meta's $2.5 billion acquisition of Manus in April 2026, citing national security concerns. Tencent's move signals its ambition to compete in the AI agent space.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Manus_(AI_agent)">Manus ( AI agent) - Wikipedia</a></li>
<li><a href="https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k5ME5ieEVCRm9kOThzRHBxTEhTZ0FQAQ?hl=en-KE&gl=KE&ceid=KE:en">Google News - News about Manus • AI • Meta - Overview</a></li>

</ul>
</details>

**Tags**: `#AI`, `#M&A`, `#Tencent`, `#Manus`, `#Meta`

---

<a id="item-8"></a>
## [OpenAI, Google Accused of AI Model Supply to Blacklisted Chinese Firms](https://www.ft.com/content/5d6aafa1-5d47-4585-aa95-6ec06a6cd20f) ⭐️ 8.0/10

OpenAI and Google have allegedly provided advanced AI models to Singapore-based subsidiaries of Alibaba, Baidu, and Tencent, companies that are on the U.S. Department of Defense's 1260H list of Chinese military-linked entities. This revelation highlights a potential loophole in U.S. export controls, as the restrictions do not explicitly prohibit Chinese parent companies from accessing AI models through overseas affiliates, raising concerns about national security and fueling renewed calls for stricter regulation. OpenAI suspended API access for an Alibaba-affiliated user last month after detecting suspected model distillation, a technique used to extract knowledge from large AI models. In contrast, Anthropic has implemented a blanket ban preventing Chinese companies and their overseas entities from accessing its frontier AI models.

telegram · zaihuapd · Jul 10, 09:59

**Background**: The 1260H list, maintained by the U.S. Department of Defense, identifies Chinese companies allegedly linked to the People's Liberation Army, subjecting them to certain sanctions. Model distillation is a machine learning technique where knowledge from a large 'teacher' model is transferred to a smaller 'student' model, potentially enabling users to replicate model capabilities without direct access. The U.S. government has been increasingly concerned about the military applications of advanced AI and the potential for export control circumvention.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/1260H_list">1260H list</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_distillation">Model distillation</a></li>

</ul>
</details>

**Tags**: `#AI regulation`, `#export controls`, `#geopolitics`, `#OpenAI`, `#Google`

---

<a id="item-9"></a>
## [Meta Faces $12B EU Fine for Addictive Design](https://www.theverge.com/policy/963872/meta-eu-addictive-design-200b-fine-risk-digital-services-act-dsa) ⭐️ 8.0/10

The European Commission preliminarily found Meta's Facebook and Instagram violate the Digital Services Act due to addictive design features such as infinite scroll and autoplay. Meta may face a fine up to $12 billion, or 6% of its global annual revenue. This marks a major enforcement action under the DSA, setting a precedent for regulating addictive design in social media. It could force Meta and other platforms to redesign core features to prioritize user well-being over engagement. The EU criticized Meta's provided time-limiting tools as ineffective and demanded a redesign including default disabling of addictive features and weakening engagement-based algorithms. The fine, if finalized, would be based on 6% of Meta's global annual turnover.

telegram · zaihuapd · Jul 10, 14:47

**Background**: The Digital Services Act (DSA) is an EU regulation effective from 2022 that imposes accountability and transparency obligations on digital platforms, with stricter rules for Very Large Online Platforms (VLOPs) like Facebook and Instagram. 'Addictive design' refers to interface features that exploit psychological vulnerabilities to maximize user time on site, such as infinite scrolling, autoplay, and personalized recommendations, which can harm mental health especially among minors.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Digital_Services_Act">Digital Services Act</a></li>
<li><a href="https://www.nytimes.com/2026/07/10/business/meta-instagram-facebook-europe.html">Meta Ordered by E . U . to Alter ‘ Addictive Design ’ of Instagram and...</a></li>

</ul>
</details>

**Tags**: `#regulation`, `#social media`, `#EU`, `#Digital Services Act`, `#Meta`

---

