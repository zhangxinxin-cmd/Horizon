# Horizon Daily - 2026-07-21

> From 36 items, 9 important content pieces were selected

---

1. [EU Court: VPNs Are Lawful Technical Tools in Copyright Ruling](#item-1) ⭐️ 8.0/10
2. [Apple Defeats Liability for Not Scanning iCloud for CSAM](#item-2) ⭐️ 8.0/10
3. [Laguna S 2.1: 128B Coding Model Rivals DeepSeek V4 Flash](#item-3) ⭐️ 8.0/10
4. [Claude Code Team Reveals 65% PRs and Internal Validation](#item-4) ⭐️ 8.0/10
5. [Google Develops Frozen v2 Chip Hardwiring Gemini for 6-10x Efficiency](#item-5) ⭐️ 8.0/10
6. [EU Plans New Powers to Fine Tech Companies Over Consumer Harms](#item-6) ⭐️ 8.0/10
7. [Cloudflare Internal DNS Service Goes GA](#item-7) ⭐️ 8.0/10
8. [TSMC May Raise Advanced Process Prices 5-10% in 2026](#item-8) ⭐️ 8.0/10
9. [Google Launches Gemini 3.5 Flash with Agentic AI](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [EU Court: VPNs Are Lawful Technical Tools in Copyright Ruling](https://www.techradar.com/vpn/vpn-privacy-security/vpns-are-lawful-technical-tools-says-eu-court-in-landmark-anne-frank-copyright-ruling) ⭐️ 8.0/10

The EU Court of Justice ruled that VPNs are lawful technical tools and not inherently illegal for circumventing copyright restrictions, in a landmark case involving the Anne Frank Fonds. This ruling sets a significant precedent protecting VPN usage for privacy and content access across the EU, potentially influencing future legal battles against VPN bans for age verification or surveillance. The case was brought by the Anne Frank Fonds against a Swiss VPN provider, but the court rejected the argument that VPNs are primarily used for copyright infringement. The ruling distinguishes between the technology itself and its misuse.

hackernews · healsdata · Jul 21, 19:43 · [Discussion](https://news.ycombinator.com/item?id=48997221)

**Background**: VPNs (Virtual Private Networks) encrypt internet traffic and mask IP addresses, often used to bypass geo-restrictions or censorship. The EU Court of Justice is the highest court in the European Union on matters of EU law. This ruling clarifies that VPNs are neutral tools, not inherently infringing.

**Discussion**: Commenters largely welcomed the ruling, noting its implications for copyright circumvention and age verification. Some highlighted that without this decision, copyright enforcement could default to the most restrictive country. A sarcastic comment questioned incentives for Anne Frank to write more diaries without robust copyright protection.

**Tags**: `#VPN`, `#EU law`, `#copyright`, `#privacy`, `#landmark ruling`

---

<a id="item-2"></a>
## [Apple Defeats Liability for Not Scanning iCloud for CSAM](https://blog.ericgoldman.org/archives/2026/07/apple-defeats-liability-for-not-scanning-icloud-for-csam-but-the-judge-was-not-pleased-amy-v-apple.htm) ⭐️ 8.0/10

Apple won a court ruling that it is not liable for not scanning iCloud for child sexual abuse material (CSAM). The judge expressed dissatisfaction but ruled in Apple's favor due to end-to-end encryption. This ruling sets a precedent for technology companies' responsibility in scanning for illegal content versus protecting user privacy. It could affect future laws and practices around encryption and child safety online. The case is Amy v. Apple, where the judge called the outcome 'disturbing' as it leaves victimized children as collateral damage of privacy protections. Apple's iCloud uses end-to-end encryption, preventing scanning.

hackernews · speckx · Jul 21, 14:31 · [Discussion](https://news.ycombinator.com/item?id=48992870)

**Background**: CSAM (Child Sexual Abuse Material) refers to any visual content depicting the sexual abuse or exploitation of a minor. End-to-end encryption ensures that only the sender and recipient can access the content, making it technically impossible for service providers like Apple to scan messages or files for illegal material. Apple had previously proposed a scanning system called 'neuralMatch' but faced significant privacy backlash and ultimately did not implement it.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Child_pornography">Child pornography - Wikipedia</a></li>
<li><a href="https://rainn.org/get-the-facts-about-csam-child-sexual-abuse-material/what-is-csam/">What is CSAM? - RAINN</a></li>

</ul>
</details>

**Discussion**: Comments highlight the tension between privacy and child protection, with some arguing that end-to-end encryption prevents effective scanning, while others note that preventing distribution does not stop initial abuse. The judge's remark about 'collateral damage' is echoed by several commenters.

**Tags**: `#Apple`, `#CSAM`, `#privacy`, `#end-to-end encryption`, `#liability`

---

<a id="item-3"></a>
## [Laguna S 2.1: 128B Coding Model Rivals DeepSeek V4 Flash](https://poolside.ai/blog/introducing-laguna-s-2-1) ⭐️ 8.0/10

Poolside AI released Laguna S 2.1, a 128-billion parameter coding model that matches or exceeds DeepSeek V4 Flash on many benchmarks, despite being over 10x smaller. This demonstrates that efficient architectures can achieve frontier-level coding performance at a size feasible for consumer hardware, potentially democratizing access to advanced AI coding assistants. Laguna S 2.1 has 128B parameters, uses a dense transformer architecture (not MoE), and supports a 128K-token context window. It is released under a permissive license (Apache 2.0).

hackernews · rexledesma · Jul 21, 17:17 · [Discussion](https://news.ycombinator.com/item?id=48995261)

**Background**: Large language models for coding, like DeepSeek V4 Flash, typically have hundreds of billions to trillions of parameters, making them expensive to run. Laguna S 2.1 shows that a much smaller dense model can compete, likely due to high-quality training data and efficient training.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek-ai/DeepSeek-V4-Flash · Hugging Face</a></li>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-flash">DeepSeek V4 Flash - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**Discussion**: Commenters report positive real-world testing results, with one noting it found issues in C code that previously only GPT-5.2 caught, though it also made a mistaken initial observation. Others express excitement about running it on home hardware, and one user reports already getting a usable pull request from it.

**Tags**: `#AI`, `#language model`, `#coding`, `#open source`, `#machine learning`

---

<a id="item-4"></a>
## [Claude Code Team Reveals 65% PRs and Internal Validation](https://simonwillison.net/2026/Jul/21/cat-and-thariq/#atom-everything) ⭐️ 8.0/10

In a fireside chat, Cat Wu and Thariq Shihipar from Anthropic revealed that Claude Tag now lands 65% of product engineering pull requests for the Claude Code team. They also discussed that features are validated through internal user retention before public release, and that the system prompt for Claude Code has been reduced by 80%. These insights provide a rare look into how Anthropic dogfoods its own AI coding agents and validates features, which shapes the development of tools like Claude Code and Claude Tag. The metrics and practices shared could influence how other teams design and deploy AI coding assistants. Claude Tag is a Slack integration that allows users to tag @Claude in any thread, where it autonomously reads context and produces results. The team also noted that for the latest models like Fable 5, adding examples to the system prompt is no longer best practice, and that lists of 'don't dos' can reduce output quality.

rss · Simon Willison · Jul 21, 12:54

**Background**: Claude Code is an AI coding agent developed by Anthropic that can autonomously implement features and edit code. Claude Tag, launched in June 2026, is an autonomous Slack integration that acts as an AI teammate. Fable 5 is Anthropic's latest coding-optimized model, capable of handling complex, long-running tasks with fewer turns.

<details><summary>References</summary>
<ul>
<li><a href="https://claude.com/product/tag">Claude in Slack : Tag @ Claude in any thread | Claude by Anthropic</a></li>
<li><a href="https://www.anthropic.com/news/introducing-claude-tag">Introducing Claude Tag \ Anthropic</a></li>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>

</ul>
</details>

**Tags**: `#Claude Code`, `#AI coding agents`, `#Anthropic`, `#developer tools`, `#AI engineering`

---

<a id="item-5"></a>
## [Google Develops Frozen v2 Chip Hardwiring Gemini for 6-10x Efficiency](https://www.quiverquant.com/news/Google+Reportedly+Developing+%E2%80%98Frozen+v2%E2%80%99+AI+Chip+to+Boost+Gemini+Efficiency) ⭐️ 8.0/10

Google is reportedly developing a server chip called 'Frozen v2' that embeds parts of its Gemini AI model directly into hardware, targeting 6 to 10 times more tokens per watt than its latest TPUs, with deployment planned for 2028. This chip could dramatically reduce AI inference energy costs and latency for Gemini-based services, addressing internal compute shortages and positioning Google to compete more effectively in the custom AI chip race. Frozen v2 is designed to complement, not replace, Google's TPU lineup, focusing on Gemini-specific inference workloads. The project aims to mitigate compute shortages that have limited Google Cloud's ability to serve some enterprise customers.

telegram · zaihuapd · Jul 21, 01:01

**Background**: Google's TPUs (Tensor Processing Units) are custom ASICs optimized for machine learning training and inference, but they are general-purpose for various models. Hardwiring model architecture into silicon, as with Frozen v2, can yield far greater efficiency per watt for that specific model, at the cost of flexibility. This approach is analogous to Bitcoin ASICs vs. GPUs.

<details><summary>References</summary>
<ul>
<li><a href="https://logicity.in/en/blog/google-s-frozen-v2-chip-embeds-gemini-in-hardware-for-6-10x-gains">Google 's Frozen v 2 chip embeds Gemini in hardware for... | Logicity</a></li>
<li><a href="https://www.bitbase.com/news/google-ai-chip-gemini-frozenv2">Google Is Building an AI Chip Just for Gemini—And... | Bitbase News</a></li>
<li><a href="https://windowsforum.com/threads/google-frozen-v2-targets-6-10x-gemini-tokens-per-watt-by-2028.439722/">Google Frozen v 2 Targets 6–10x Gemini Tokens... | Windows Forum</a></li>

</ul>
</details>

**Tags**: `#AI芯片`, `#Google`, `#Gemini`, `#推理效率`, `#TPU`

---

<a id="item-6"></a>
## [EU Plans New Powers to Fine Tech Companies Over Consumer Harms](https://t.me/zaihuapd/42682) ⭐️ 8.0/10

The European Commission plans to propose new legislation by the end of the year that would give regulators the power to fine large technology companies for failing to protect consumers, especially children, from dark patterns and addictive design. This move would significantly expand the EU's regulatory toolkit beyond existing digital laws like the Digital Services Act, potentially forcing major platforms to redesign user interfaces to become less manipulative and more consumer-friendly. The new rules will target dark patterns, subscription traps, and addictive design. EU Justice Commissioner Michael McGrath stated that the enforcement would also cover smaller online merchants and game developers, not just large tech firms already subject to digital regulations.

telegram · zaihuapd · Jul 21, 01:44

**Background**: Dark patterns are deceptive user interface designs that trick users into taking actions they did not intend, such as unknowingly signing up for recurring fees or sharing personal data. Addictive design refers to features intentionally crafted to maximize user engagement, often exploiting psychological vulnerabilities. The EU has been strengthening consumer protection online, and this initiative builds on existing frameworks like the Digital Services Act and the Unfair Commercial Practices Directive.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Dark_pattern">Dark pattern - Wikipedia</a></li>
<li><a href="https://www.osano.com/articles/dark-pattern-examples">9 Dark Pattern Examples to Look Out For | Osano</a></li>
<li><a href="https://www.researchgate.net/publication/318012535_A_Survey_of_Addictive_Software_Design">A Survey of Addictive Software Design</a></li>

</ul>
</details>

**Tags**: `#EU regulation`, `#tech regulation`, `#consumer protection`, `#dark patterns`, `#online safety`

---

<a id="item-7"></a>
## [Cloudflare Internal DNS Service Goes GA](https://blog.cloudflare.com/internal-dns/) ⭐️ 8.0/10

On July 20, 2026, Cloudflare announced the general availability of its Internal DNS service, providing authoritative and recursive DNS resolution for private networks integrated with Zero Trust policies. This unifies public and private DNS on a single platform, simplifies split-horizon configuration, and extends Zero Trust to the DNS layer, reducing complexity and improving security for enterprise network management. The service is available at no extra cost for existing Cloudflare Gateway customers, supports deployment via API, Terraform, and Cloudflare WAN, and uses DNS views to control internal resource access per user and device.

telegram · zaihuapd · Jul 21, 03:49

**Background**: Split-horizon DNS provides different DNS responses based on the requester's network location, enabling internal and external users to resolve the same domain name to different IPs. Zero Trust architecture assumes no implicit trust, requiring continuous verification of every access request. Cloudflare's Internal DNS combines these concepts into a single control plane.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Split-horizon_DNS">Split-horizon DNS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Zero_trust_architecture">Zero trust architecture</a></li>
<li><a href="https://www.cloudflare.com/products/gateway/">Cloudflare Gateway - Secure Web Gateway</a></li>

</ul>
</details>

**Tags**: `#DNS`, `#Cloudflare`, `#Zero Trust`, `#私有网络`

---

<a id="item-8"></a>
## [TSMC May Raise Advanced Process Prices 5-10% in 2026](https://t.me/zaihuapd/42691) ⭐️ 8.0/10

TSMC is reportedly considering a 5-10% price increase for all its advanced process nodes in 2026, including 5nm/4nm, 3nm, and 2nm, to offset US tariffs, currency fluctuations, and supply chain cost pressures. This price hike would directly impact major clients like NVIDIA and Apple, potentially raising costs for consumer electronics and AI hardware. It signals growing cost pressures in the semiconductor industry and could reshape pricing strategies across the supply chain. TSMC has already communicated higher 2026 quotes to foundry partners, covering 5nm/4nm, 3nm, and 2nm nodes. TSMC Chairman Wei Zhejia jokingly declined to confirm the plan, saying 'what's in the heart cannot be spoken.'

telegram · zaihuapd · Jul 21, 09:28

**Background**: TSMC is the world's largest semiconductor foundry, manufacturing chips for companies like Apple and NVIDIA using advanced process nodes. These nodes require massive R&D and capital expenditure, and price increases are often driven by rising costs or demand-supply imbalances. US tariffs and currency volatility have added to cost pressures for TSMC in recent years.

**Tags**: `#TSMC`, `#semiconductor`, `#price increase`, `#supply chain`, `#advanced process`

---

<a id="item-9"></a>
## [Google Launches Gemini 3.5 Flash with Agentic AI](https://t.me/zaihuapd/42699) ⭐️ 8.0/10

Google has officially released the Gemini 3.5 Flash model globally, emphasizing agentic capabilities for coding, multi-step workflows, and long-context tasks. The more powerful Gemini 3.5 Pro is expected to launch next month. This release marks a significant step toward more autonomous AI systems that can proactively handle complex tasks, potentially accelerating adoption in software development and enterprise automation. The claimed 4x speed improvement and cost reduction could make advanced AI more accessible. Gemini 3.5 Flash delivers 4x faster output compared to similar models with significantly reduced cost, according to Google. The model is designed for agentic workflows, enabling autonomous execution of multi-step processes and long-context reasoning.

telegram · zaihuapd · Jul 21, 15:23

**Background**: Agentic AI refers to systems that exhibit autonomy, goal-driven behavior, and proactive capabilities beyond simple reactive responses. Google's Gemini series is a family of multimodal large language models competing with OpenAI's GPT and Anthropic's Claude. The Flash variant is optimized for speed and cost, while the Pro version targets higher performance.

<details><summary>References</summary>
<ul>
<li><a href="https://cacm.acm.org/blogcacm/ais-next-leap-agentic-intelligence/">AI ’s Next Leap: Agentic Intelligence – Communications of the ACM</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Google`, `#Gemini`, `#LLM`, `#machine learning`

---

