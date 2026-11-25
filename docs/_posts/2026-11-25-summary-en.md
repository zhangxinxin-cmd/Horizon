---
layout: default
title: "Horizon Summary: 2026-11-25 (EN)"
date: 2026-11-25
lang: en
---

> From 25 items, 7 important content pieces were selected

---

1. [Preprint Claims Matrix Multiplication Exponent Is Exactly 9/4](#item-1) ⭐️ 9.0/10
2. [PrismML Releases Ternary Bonsai 2.5 27B for Local Agentic Coding](#item-2) ⭐️ 8.0/10
3. [OpenAI claims GPT-6.2 designed protein minibinders by writing its own code](#item-3) ⭐️ 8.0/10
4. [GreyNoise: Check Point management servers hit by PRNG state-recovery campaign](#item-4) ⭐️ 8.0/10
5. [GPT-6.2 Astra Autonomously Solves an 1808 Yale Sketchbook Mystery](#item-5) ⭐️ 8.0/10
6. [Anthropic Claims Claude Found VP≠VNP Proof With Lean 4 Formalization](#item-6) ⭐️ 8.0/10
7. [VMware vCenter hit by another 9.8 authentication bypass, exploited as zero-day](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Preprint Claims Matrix Multiplication Exponent Is Exactly 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) ⭐️ 9.0/10

A preprint in an OpenAI GitHub repository claims that the matrix multiplication exponent is exactly 9/4 — i.e., Θ(n^2.25) — over every field, and reportedly also resolves several other problems on an LLM-ranked Top-500 open-math list, including strongly polynomial linear programming, mean-payoff games, and parity games. The work is said to have been produced by an unreleased OpenAI model and has not been peer-reviewed. If verified, the result would settle a central open problem in complexity theory by proving a nontrivial lower bound and refuting the common conjecture that the exponent is 2, with consequences for the design of fast linear-algebra algorithms. It also sharpens debate over whether frontier AI labs are achieving internal mathematical breakthroughs with unreleased models while public model quality appears to stall. Commenters note that the title should be Θ(n^2.25), not merely O(n^2.25): the new part is a Ω(n^2.25) lower bound, since an O(n^2.25) upper bound was already known, and the claim is said to hold over every field. The preprint is unverified, the model recipe is undisclosed, and the repository path is dated November 24, 2026, which warrants caution.

hackernews · E-Reverance · Nov 25, 01:19 · [Discussion](https://news.ycombinator.com/item?id=50637220)

**Background**: Matrix multiplication is a foundational operation in scientific computing and machine learning, and its exponent ω is the smallest number such that n×n matrices can be multiplied in O(n^ω) arithmetic operations. Θ notation means matching upper and lower bounds, so Θ(n^2.25) would require both an O(n^2.25) algorithm and a proof that no asymptotically faster algorithm exists. For decades only the trivial lower bound ω ≥ 2 was known, while the best upper bounds crept below 3 but stayed above 2, and many researchers conjectured that ω = 2. AI systems are now generating mathematical proofs at unprecedented scale, making verification of such claims a central challenge.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Big_O_notation">Big O notation - Wikipedia</a></li>
<li><a href="https://arxiv.org/pdf/2611.21299">Turing Agent: Agentic Formal Verification for Mathematical Research</a></li>
<li><a href="https://www.chapterpal.com/s/c9843ce4/mathematical-exploration-and-discovery-at-scale">Mathematical exploration and discovery at scale — Read with an AI ...</a></li>

</ul>
</details>

**Discussion**: HN commenters debated whether OpenAI is holding back stronger models to make internal breakthroughs in a compounding loop, and compared the recent flurry of results to Bell Labs while questioning private labs’ PR motives. Others focused on precision, correcting the headline to Θ(n^2.25) and clarifying that the new result is a Ω(n^2.25) lower bound, not the already-known upper bound.

**Tags**: `#complexity-theory`, `#matrix-multiplication`, `#AI-for-math`, `#LLM-research`, `#open-problems`

---

<a id="item-2"></a>
## [PrismML Releases Ternary Bonsai 2.5 27B for Local Agentic Coding](https://prismml.com/news/bonsai-2-5-27b) ⭐️ 8.0/10

PrismML released Ternary Bonsai 2.5 27B, a ternary-quantized (roughly 1.58-bit) model derived from Qwen3.8-27B with its architecture unchanged, fitting into the same 5.9 GB footprint as its predecessor. The release targets agentic workloads specifically, claiming substantially stronger multi-turn tool use, code editing in real repositories, and long multi-step task execution. If a 5.9 GB ternary model can hold 128k context and run plausibly useful agentic coding on a single Mac Mini, it lowers the hardware bar for private, offline coding agents considerably. The community's SWE-bench comparison to frontier models suggests the gap between tiny quantized models and large hosted models may be narrowing faster than expected. Users report roughly 22–25 tokens/s generation on a Mac Mini M5 Pro with 24 GB RAM, with first-token latency around 2 seconds and prompt processing at ~223 tokens/s, and 128k context fits comfortably in memory. One commenter's own long-horizon benchmark showed Bonsai 2.5 completing the same 5-of-8 tasks with 17% fewer steps and 29% less wall-clock time than Bonsai 2, so the gain is in efficiency rather than raw pass rate.

hackernews · b0m · Nov 24, 20:08 · [Discussion](https://news.ycombinator.com/item?id=50633922)

**Background**: Ternary quantization maps each model weight to one of three values — -1, 0, or +1 — which works out to about 1.58 bits per weight and shrinks a 27B model to a few gigabytes while keeping much more quality than naive 2-bit rounding. This family of approaches (popularized by BitNet-style research) is attractive for CPU and edge inference because the arithmetic can be done with simple additions. Bonsai is PrismML's line of such models, and the 27B variant is the largest and the one positioned for agentic use: long sequences of tool calls, real-repository coding, and multi-step tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.prismml.com/models/bonsai-2-5-27b">Ternary Bonsai 2.5 27B - Bonsai - docs.prismml.com</a></li>
<li><a href="https://blog.nota.ai/insights/local-llm-ternary-quantization">Can a 30B Local LLM Run on a MacBook? 1 .58-Bit Ternary ...</a></li>
<li><a href="https://bitnet.xin/blog/158-bit-quantization-why-ternary-weights-are-the-sweet-spot">1 .58-bit Quantization Explained | BitNet.XIN | BitNet.XIN</a></li>

</ul>
</details>

**Discussion**: Hacker News reaction was enthusiastic but measured: commenters shared concrete tokens/s and task-time numbers, and one noted the model appears to score near Opus 4.6 on SWE-bench Verified while cautioning that this may partly be benchmark overfitting or benchmark drift. The most common request was for direct baselines against equally small models, such as Q1/Q2 quants of comparable 1B–10B models, rather than comparisons to frontier systems.

**Tags**: `#local-llm`, `#quantization`, `#ternary-models`, `#model-benchmarks`, `#agentic-coding`

---

<a id="item-3"></a>
## [OpenAI claims GPT-6.2 designed protein minibinders by writing its own code](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) ⭐️ 8.0/10

OpenAI published a report stating that it gave GPT-6.2 the three-dimensional structures of five target proteins along with marked attachment sites, and the model then wrote its own code to generate 3D designs for potential minibinders without relying on specialized protein AI models. To make those designs testable, OpenAI used the specialized inverse-folding model SolubleMPNN to propose amino acid sequences and other protein models to filter candidates predicted to fold as designed and bind at the intended site. If the claim holds up, it would show that a general-purpose LLM can take on part of the protein-design workflow that has so far been dominated by purpose-built models such as RFdiffusion and ProteinMPNN, lowering the barrier for labs without deep structural-biology tooling. It also signals a broader pattern in which LLMs act as agents that write code to orchestrate scientific pipelines, which could reshape how computational biology tooling is assembled and used. The headline framing of going "beyond specialized models" is misleading: per OpenAI's own description, SolubleMPNN handled sequence design for the fixed backbones and other specialized predictors handled folding and binding checks, so GPT-6.2's contribution was the 3D design generation and orchestration code. SolubleMPNN is a message-passing inverse-folding model trained only on soluble proteins, so it biases designs toward solubility, and the work centers on computational results for five targets rather than broad experimental validation.

hackernews · acossta · Nov 24, 21:02 · [Discussion](https://news.ycombinator.com/item?id=50634658)

**Background**: Minibinders are small engineered proteins that bind tightly to a specific target protein, and they are typically produced by a two-step computational pipeline: a generative model such as RFdiffusion proposes a three-dimensional backbone, then an inverse-folding model such as ProteinMPNN (SolubleMPNN is a solubility-tuned variant) infers an amino acid sequence that should fold into that backbone, after which folding predictors like AlphaFold and binding predictors filter the candidates. Because a protein's sequence determines its structure, sequence design is the step that actually yields a makeable molecule, which is why commenters question how much of the design GPT-6.2 really did. LLM agents here write and run code that glues these specialized tools together rather than replacing them.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.openprotein.ai/models/proteinmpnn/solublempnn/">SolubleMPNN - OpenProtein.AI docs</a></li>
<li><a href="https://idl.uw.edu/mosaic/examples/protein-design.html">Protein Design Explorer | Mosaic</a></li>
<li><a href="https://www.agilent.com/cs/library/brochures/ebook-oligo-articles-dr-baker-5994-8512en-agilent.pdf">Oligo Pools in Pioneering RNA and Protein Engineering Research...</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters were impressed but skeptical: fabian2k asks what GPT-6.2 actually designed given that the sequence is what defines a protein's structure, while plaidfuji reframes the result as LLMs acting as a "glue layer" orchestrating specialized models, calling the "beyond specialized models" framing premature. joe-esquibel notes the evidence is heavy on computational exploration and light on lab controls, and gopalv argues the real superpower is that code-writing lets these models keep improving as long as progress requires better code.

**Tags**: `#AI/ML`, `#protein-design`, `#LLM-agents`, `#computational-biology`, `#openai`

---

<a id="item-4"></a>
## [GreyNoise: Check Point management servers hit by PRNG state-recovery campaign](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) ⭐️ 8.0/10

GreyNoise documented an active intrusion campaign against Check Point Security Management Servers, with confirmed attack activity between October 17 and November 2, 2026, impacting at least 22 distinct organizations worldwide. In the standout technique, the actor made repeated POSTs to an exposed HFS loginSrp1 endpoint, collected the returned session cookies whose "sid" values come from JavaScript's Math.random(), reconstructed the internal state of the Node.js V8 PRNG, recovered the session-cookie signing key, and forged a signed admin session cookie. The Security Management Server is the central control point for every firewall policy, access rule and gateway configuration, so a forged admin session effectively hands an attacker administrative authority over the entire security perimeter. The campaign also shows how a weak-by-design API such as Math.random() can be weaponized into full authentication bypass, a lesson that extends well beyond Check Point to any Node.js service that mints secrets or session identifiers from that function. JavaScript's Math.random() is explicitly not cryptographically secure, and V8's xorshift128+ state can be recovered from a modest number of consecutive outputs, which is exactly what made the cookie forgery possible. Commenters note that the initial access vector is not fully clear, though the link across multiple Check Point customers points toward CVE-2026-16232, and it remains an open question whether all affected organizations had their management servers directly reachable from the internet.

hackernews · louiereederson · Nov 24, 16:32 · [Discussion](https://news.ycombinator.com/item?id=50630594)

**Background**: GreyNoise is a threat-intelligence firm that continuously scans the internet to catalogue opportunistic attack traffic, which lets it spot campaigns like this one early. Check Point's Security Management Server is the console administrators use to push firewall policy, view logs and configure gateways, making it a high-value target that is supposed to sit behind layers of protection. A pseudorandom number generator (PRNG) produces sequences that look random but are fully determined by an internal state; if an attacker observes enough output, that state can be solved for and all future and past values predicted — the same class of weakness seen in historical incidents such as the Juniper Dual EC case. V8 is the JavaScript engine behind Node.js, so this flaw matters to any server-side JavaScript application that relies on Math.random() for anything security-relevant.

<details><summary>References</summary>
<ul>
<li><a href="https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign">An Active Intrusion Campaign Against Check Point Security ...</a></li>
<li><a href="https://tech.yahoo.com/cybersecurity/articles/control-tower-left-unguarded-check-094326324.html">The Control Tower Left Unguarded: Check Point ’s Management ...</a></li>
<li><a href="https://dl.acm.org/doi/pdf/10.1145/2976749.2978395?cookieSet=1">A Systematic Analysis of the Juniper Dual EC Incident</a></li>

</ul>
</details>

**Discussion**: Sentiment was a mix of technical fascination and alarm: several commenters greeted the PRNG flaw as an "old friend" and celebrated the elegance of the state-recovery chain, while others argued the deeper fix belongs upstream — Math.random() itself should be made at least somewhat secure rather than patched in hundreds of apps that misuse it. A recurring worry was that LLM-assisted attackers will soon let far less sophisticated criminals automate this kind of exploitation at scale, and readers pressed for clarity on how initial access was actually obtained and whether the victims' management servers were internet-exposed.

**Tags**: `#security`, `#vulnerability-exploitation`, `#prng-weakness`, `#nodejs`, `#check-point`

---

<a id="item-5"></a>
## [GPT-6.2 Astra Autonomously Solves an 1808 Yale Sketchbook Mystery](https://simonwillison.net/2026/Nov/24/astra-historical-mystery/) ⭐️ 8.0/10

History professor Mark Humphries reports that GPT-6.2 Astra, with only minimal prompting, autonomously identified the creator of an anonymous 1808 sketchbook held at Yale's Beinecke Library in just 22 minutes using publicly available primary and secondary sources. The model located a little-known reference in a paper archive, predicted that a specific travel journal would confirm its hypothesis, and that journal — a significant find in its own right for Canadian and fur-trade historians — did confirm it. This is a concrete, end-to-end case of an LLM agent doing genuine archival research — forming a hypothesis, locating a source, and verifying it — rather than merely summarizing known material, which suggests AI agents could become active participants in digital humanities workflows. It also raises uncomfortable questions for academia about how disciplines should respond when agentic systems can produce results that human researchers could not easily replicate. Astra's chain of reasoning hinged on finding a diary reference to a visit by the vicomte de Chabot dated five days before a date mentioned in the sketchbook at a nearby river, then predicting that Chabot's travel journal — obtainable only by order from Cleveland State University — would confirm authorship. Crucially, the professor frames this as an application demonstration rather than a methodological breakthrough, and notes that historians, unlike mathematicians, do not pursue a single universal truth, so the disruption to the field is likely to be milder than in mathematics.

rss · Simon Willison · Nov 24, 16:53

**Background**: GPT-6.2 Astra is OpenAI's frontier model released on November 17, 2026 alongside the cheaper GPT-6.2 Sol, and OpenAI markets Astra as state-of-the-art on browsing, computer use, and scientific work — capabilities that matter for agentic tasks that require searching, reading, and cross-referencing sources. An AI agent is a program that can make decisions, pursue goals, and take actions with limited human supervision, and digital humanities researchers have increasingly experimented with such tools for transcription, search, and source discovery. The comparison to Deep Blue, IBM's chess machine that beat Garry Kasparov in 1997, reflects the worry that machine performance could undercut human expertise in a domain long considered distinctly human.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-6-2-astra-sol/">Introducing GPT-6.2 Astra and Sol | OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPT-6.2_Astra">GPT-6.2 Astra</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_agent">AI agent - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#LLM applications`, `#autonomous agents`, `#historical research`, `#digital humanities`, `#AI for science`

---

<a id="item-6"></a>
## [Anthropic Claims Claude Found VP≠VNP Proof With Lean 4 Formalization](https://t.me/zaihuapd/45345) ⭐️ 8.0/10

Anthropic reportedly published a paper titled “VP ≠ VNP over every field” on November 24, together with a Lean 4 formalization, saying the result was discovered by an internal research Claude model and that both the paper and code were AI-written. The claimed proof gives a superpolynomial arithmetic-circuit lower bound for the Hamiltonian cycle polynomial, implying that VP is a proper subset of VNP. If the claim survives independent scrutiny, it would resolve Valiant’s 1979 algebraic complexity conjecture and mark a major milestone for AI-for-math and formal verification. Because the result is extraordinary and currently unverified, it should be treated as a high-impact claim pending expert review rather than an established theorem. The claim concerns arithmetic circuits only and does not resolve P versus NP; it says VP is a proper subset of VNP over every field. The Lean 4 formalization is reportedly audited against three standard axioms and an independent kernel, but formal verification only checks the proof against its definitions and axioms, not whether those definitions faithfully capture the intended complexity classes.

telegram · zaihuapd · Nov 24, 12:18

**Background**: In 1979, Valiant introduced the algebraic complexity classes VP and VNP as analogs of P and NP, with the permanent and the Hamiltonian cycle polynomial playing central roles as VNP-complete problems. The VP versus VNP question asks, roughly, whether these VNP-complete polynomials can be computed by polynomial-size arithmetic circuits. Lean 4 is an interactive theorem prover whose kernel checks formal proofs; a verified Lean proof is only as meaningful as the definitions and axioms it relies on.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity">Arithmetic circuit complexity - Wikipedia</a></li>
<li><a href="https://mathworld.wolfram.com/ValiantsConjecture.html">Valiant's Conjecture -- from Wolfram MathWorld</a></li>
<li><a href="https://interestingengineering.com/ai-robotics/claude-proves-vp-not-vnp-valiant-conjecture">Claude claims to prove VP VNP in Valiant 's 47-year-old conjecture</a></li>

</ul>
</details>

**Tags**: `#complexity-theory`, `#formal-verification`, `#Lean-4`, `#AI-for-math`, `#Anthropic`

---

<a id="item-7"></a>
## [VMware vCenter hit by another 9.8 authentication bypass, exploited as zero-day](https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html) ⭐️ 8.0/10

Broadcom released patches for 23 vulnerabilities across the VMware product line, the most severe being CVE-2026-123903, a 9.8-rated authentication bypass in vCenter's VMware Directory Service (vmdir). According to reports, the flaw was already being exploited as a zero-day in the wild in the days before the patch was published. vCenter is the central management plane for most enterprise VMware virtualized environments, so an unauthenticated bypass there can expose broad hypervisor, VM, and credential control to any attacker with network reach. Because exploitation has already been observed, organizations running vCenter are being urged to patch immediately rather than wait for a regular maintenance window. The root cause is reportedly a failed LDAP SASL bind that still plants the claimed identity's access token onto the connection, so subsequent plaintext LDAP operations are executed as that identity with no credentials required. The only apparent precondition is network reachability to vCenter, and the flaw sits in vmdir, the directory component that underpins VMware's identity and authentication services.

telegram · zaihuapd · Nov 24, 14:50

**Background**: The VMware Directory Service (vmdir) is the directory component used by VMware identity management to store and look up platform account and authentication data, which is why a flaw there undercuts authentication for the whole platform. CVE-2026-123903 carries a near-maximum CVSS score of 9.8, a rating normally reserved for remotely exploitable issues requiring no privileges or user interaction. LDAP is the protocol vmdir uses for directory queries and binds; SASL is the mechanism used to authenticate those binds, and its failure handling is where the bypass occurs.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/dinosn/CVE-2026-123903">dinosn/ CVE - 2026 - 123903 : CVE - 2026 - 123903 : VMware vCenter vmdir...</a></li>
<li><a href="https://nhimg.org/glossary/vmdir/">What Is vmdir? Definition & Examples - nhimg.org</a></li>
<li><a href="https://knowledge.broadcom.com/external/article/322199/the-vmware-directory-service-vmdird-is-e.html">The VMware Directory Service (VMDIRD) is entering an ...</a></li>

</ul>
</details>

**Tags**: `#VMware vCenter`, `#CVE-2026-123903`, `#鉴权绕过`, `#零日漏洞`, `#安全补丁`

---