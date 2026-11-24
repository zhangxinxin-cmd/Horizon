# Horizon Daily - 2026-11-24

> From 33 items, 6 important content pieces were selected

---

1. [Anthropic Paper Claims VP ≠ VNP Over Every Field](#item-1) ⭐️ 9.0/10
2. [Nvidia Board Reinstates Jensen Huang as CEO After US Government Input](#item-2) ⭐️ 8.0/10
3. [Ladybird, the from-scratch independent browser engine, reaches alpha](#item-3) ⭐️ 8.0/10
4. [Zhipu AI releases GLM-5.4, its first looped-transformer model, targeting generalized coding](#item-4) ⭐️ 8.0/10
5. [Codex2api Hit by Suspected Supply-Chain Poisoning After Author Account Compromise](#item-5) ⭐️ 8.0/10
6. [Meta AI chief Alexandr Wang says superintelligence is near and control is at risk](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic Paper Claims VP ≠ VNP Over Every Field](https://github.com/anthropics/formal-math/tree/main/vp-vnp) ⭐️ 9.0/10

Anthropic's formal-math GitHub repository published a paper, filed under its "vp-vnp" directory, that claims to establish that the algebraic complexity classes VP and VNP are unequal over every field. The item drew heavy attention on Hacker News, reaching 301 points and 262 comments. VP versus VNP is Valiant's algebraic analogue of P versus NP, so a proof that separates them over all fields would rank among the most important results in complexity theory. The fact that it comes out of an AI lab also intensifies the ongoing debate about AI-assisted mathematical discovery. The paper itself states that it has not analyzed how the result relates to relativization and algebrization (BGS75, AW09) — the standard barrier results that any P vs NP-style separation must confront — and commenters quickly seized on this as the key open question. The work also lives in a repository named "formal-math", and the associated tags point to a Lean formal-verification angle.

hackernews · mikeryan52 · Nov 23, 22:09 · [Discussion](https://news.ycombinator.com/item?id=50620102)

**Background**: VP and VNP are algebraic complexity classes introduced by Leslie Valiant in 1979 as polynomial analogues of P and NP. VP contains families of polynomials computable by polynomial-size arithmetic circuits, while VNP contains families whose coefficients can be written as a sum over exponentially many monomials; the contrast between the permanent and the determinant is the flagship VNP vs VP question. Geometric Complexity Theory, proposed by Mulmuley and Sohoni, is one major program aimed at separating the two classes. Relativization and algebrization are known barrier theorems explaining why certain proof techniques cannot resolve P vs NP and its algebraic counterparts.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity">Arithmetic circuit complexity - Wikipedia</a></li>
<li><a href="https://arxiv.org/pdf/2406.06217">Completeness classes in algebraic complexity theory</a></li>
<li><a href="https://lean-lang.org/learn/">Learn — Lean Lang</a></li>

</ul>
</details>

**Discussion**: The mood is a mix of excitement and skepticism: one commenter reads the paper as a partial result Anthropic threw "the kitchen sink" at while chasing the P vs NP holy grail, while another worries that AI is making graduate-level research problems trivial to pick up. Others quote the paper's own admission that relativization and algebrization are unanalyzed as their main reservation, compare the labs to players in a "Great Game", and ask how long human-written Lean proofs typically are.

**Tags**: `#complexity theory`, `#algebraic complexity`, `#formal verification`, `#Lean`, `#AI theorem proving`

---

<a id="item-2"></a>
## [Nvidia Board Reinstates Jensen Huang as CEO After US Government Input](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) ⭐️ 8.0/10

Nvidia's board of directors reinstated Jensen Huang as president, CEO and board director, saying in its announcement that it had "received input from senior levels of the United States government" and was therefore confident his reinstatement "poses no national security risk." The decision reverses the board's earlier move to push Huang out, reportedly in less than two weeks and reportedly on a unanimous vote. Nvidia is the world's most valuable chipmaker and the central supplier of AI accelerators, so a leadership reversal shaped by government input blurs the line between corporate governance and national-security policy. The episode sets a precedent for how much influence Washington can exert over private semiconductor firms, and it will be watched closely by investors, boards in Delaware-incorporated companies, and US allies whose chip industries face far stricter export rules. The most consequential line in the announcement is the explicit reference to government input, which raises questions about board independence and about what exactly the board was told. The reported involvement of the Justice Department declining to prosecute, combined with Delaware's high bar for director oversight liability, is widely read as limiting individual directors' exposure, while the underlying reason Huang was reportedly removed in the first place remains unexplained in the statements.

hackernews · jaz · Nov 23, 14:00 · [Discussion](https://news.ycombinator.com/item?id=50611576)

**Background**: Jensen Huang co-founded Nvidia in 1993 and has served as its CEO ever since, building it from a graphics-card maker into the dominant supplier of GPUs used to train and run AI models and one of the most valuable companies in the world. The "Caremark" standard, from a 1996 Delaware Chancery Court decision, holds that directors are liable for oversight failures only in extreme cases of sustained or systemic inattention, which is why legal commentators see board liability as a high bar here. Separately, US export controls restrict sales of advanced AI chips and chipmaking equipment to China, and Washington has pressed allies including the Netherlands (home of ASML) and Japan to align their own restrictions on China-bound semiconductor technology.

**Discussion**: Commenters zeroed in on the clause about "input from senior levels of the United States government" as the operative part of the statement, and debated whether Delaware's Caremark precedent plus a Justice Department decision not to prosecute would be enough to shield directors from individual liability. Many were struck by the speed and unanimity of the 180-degree reversal, and several compared Nvidia's treatment with the pressure put on ASML and Japanese chip-equipment makers to join China sanctions, calling it hypocrisy; others argued there is no evidence of wrongdoing, and one drew a parallel to the 2023 OpenAI board crisis to argue that a firm's nominal governance structure is not necessarily its real one.

**Tags**: `#corporate-governance`, `#nvidia`, `#semiconductors`, `#export-controls`, `#national-security`

---

<a id="item-3"></a>
## [Ladybird, the from-scratch independent browser engine, reaches alpha](https://ladybird.org/posts/alpha/) ⭐️ 8.0/10

The Ladybird browser has officially entered alpha, and early testers report that most sites they tried — including tricky ones like Proxmox's NoVNC remote console and heavy news sites — rendered correctly. The project is a genuinely independent engine (LibWeb for rendering, LibJS for JavaScript, written in C++) rather than a fork of Chromium, Gecko or WebKit, and is backed by the non-profit Ladybird Browser Initiative. Building a new browser engine from scratch is one of the hardest undertakings in software, and the space has consolidated around just three engines (Chromium, WebKit, Gecko), so an independent alternative at alpha stage is a rare milestone for web-platform diversity. It also offers users a browser not tied to Google's advertising business or its engine roadmap, which matters as regulators and developers worry about Chromium's dominance. This is an alpha, so rough edges remain: testers noted noticeably jerky page scrolling, and the team itself is upfront about security limitations, meaning it is not yet suitable as a daily driver. The project has also pragmatically swapped several homegrown components for production-grade dependencies such as SQLite and Skia, trading some of its original SerenityOS purity for faster progress.

hackernews · janvdberg · Nov 23, 16:13 · [Discussion](https://news.ycombinator.com/item?id=50614249)

**Background**: Ladybird began life as the built-in browser of SerenityOS, a hobby Unix-like desktop operating system that Swedish programmer Andreas Kling started in 2018 as a solo project. As the browser's engine, LibWeb, grew more capable, it was spun out into a standalone cross-platform browser under the BSD 2-Clause license, now developed by the non-profit Ladybird Browser Initiative. Because a browser engine must implement HTML, CSS, JavaScript and dozens of web APIs precisely enough to match what sites expect, most new browsers reuse an existing engine instead; Ladybird's decision to write its own from scratch is what makes the milestone unusual.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Ladybird_(web_browser)">Ladybird ( web browser ) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/SerenityOS">SerenityOS - Wikipedia</a></li>
<li><a href="https://github.com/LadybirdBrowser/ladybird">GitHub - LadybirdBrowser/ladybird: Truly independent web browser</a></li>

</ul>
</details>

**Discussion**: The Hacker News reaction (roughly 1,600 points and 380 comments) is overwhelmingly enthusiastic, with users reporting that a wide range of real-world sites rendered correctly and that some workloads even felt snappier than in Firefox. Commenters also raised substantive concerns: nostalgia for the original SerenityOS hacker ethos after the switch to production-grade libraries like SQLite and Skia, a call for Ladybird to take anti-fingerprinting seriously with spoofed or randomized values and more granular permissions, and questions about what precautions users should take given the alpha's acknowledged security gaps.

**Tags**: `#browsers`, `#ladybird`, `#web-engine`, `#open-source`, `#serenityos`

---

<a id="item-4"></a>
## [Zhipu AI releases GLM-5.4, its first looped-transformer model, targeting generalized coding](https://z.ai/blog/glm-5.4) ⭐️ 8.0/10

Zhipu AI (Z.ai) released GLM-5.4, its new flagship model and the first built on what the company calls a Loop Transformer architecture, which reuses a shared block of layers across multiple iterations instead of running a token once through a tall stack of unique layers. Z.ai claims the model reaches intelligence levels comparable to 2T–3T parameter models and frames the release as the start of "Generalized Coding," where code becomes the foundation for tasks such as video, games, 3D shaders and CAD. Looped (recurrent-depth) transformers have been an academic curiosity for years, so a major lab shipping one as its flagship model is a notable architectural bet for frontier LLMs, and it drew heavy Hacker News attention (over 1,000 points and 350+ comments). If the efficiency claims hold, weight sharing could let a roughly 750B-scale model deliver capability normally associated with multi-trillion-parameter systems, shifting the cost calculus for coding-focused agents. According to coverage of the release, GLM-5.4 runs 28 layers of the GLM-5 base model for two iterations, and Z.ai itself acknowledges the model still has limitations. Access is also gated in practice: users report the model is not available through OpenRouter or the standard Z.ai API plan, and requires the Coding Plan, whose API keys behave like normal ones but unlock the new model.

hackernews · foohis · Nov 23, 10:06 · [Discussion](https://news.ycombinator.com/item?id=50609685)

**Background**: A standard transformer processes each token through a fixed stack of distinct layers, and every one of those layers has its own weights. A looped transformer — also called recurrent depth or looped depth sharing — instead applies the same transformer block several times in sequence, so the hidden states from one pass feed into the next while a smaller set of weights is reused. This trades extra compute per token for fewer unique parameters, and researchers have explored it for algorithmic reasoning and length generalization; GLM-5.4 is notable for bringing the idea into a production flagship coding model.

<details><summary>References</summary>
<ul>
<li><a href="https://z.ai/blog/glm-5.4">GLM-5.4: Toward Generalized Coding with Our First Loop ... - z.ai</a></li>
<li><a href="https://sebastianraschka.com/llm-architecture-gallery/looped-depth-sharing/">Looped Transformer | Sebastian Raschka, PhD</a></li>
<li><a href="https://www.marktechpost.com/2026/11/23/zai-glm-5-4-loop-transformer/">Z AI Releases GLM-5.4: A 750B Loop Transformer ... - MarkTechPost</a></li>

</ul>
</details>

**Discussion**: Commenters broadly praised Zhipu's unusual technical transparency, contrasting it favorably with the locked-down approach of Western labs, and several noted that looped transformers address the fact that the original transformer is like an unrolled loop that pairs unrelated attention and FFN weight sets. Skeptics pushed back on the efficiency story, with one arguing that looping adds compute in the forward pass at a fixed parameter budget but does not inherently fix the HBM memory-bandwidth bottleneck, while a hands-on tester (Simon Willison) ran pelican SVG comparisons against GLM-5.3 but hit friction getting API access. A recurring complaint was Chinese models' verbose "marathon thinking," which users say second-guesses simple tasks and dramatically increases time to completion relative to frontier models.

**Tags**: `#LLM`, `#Zhipu AI`, `#transformer architecture`, `#coding models`, `#model release`

---

<a id="item-5"></a>
## [Codex2api Hit by Suspected Supply-Chain Poisoning After Author Account Compromise](https://github.com/WormW/codex2api-incident-2026-11) ⭐️ 8.0/10

The author account of Codex2api, an OpenAI Codex API proxy project, was reportedly compromised, and the attacker bypassed the main branch by pushing malicious release tags directly, causing Release builds to ship backdoored versions 3.1.10 through 3.1.12. Version 3.1.11 removed authentication entirely — effectively allowing unauthenticated remote command execution — while an added workflow exfiltrated 16 GitHub Actions secrets from at least 21 repositories under the same account. Anyone who self-hosts Codex2api and pulled or auto-updated to these versions may now be running an unauthenticated remote-code-execution endpoint and should assume their CI secrets are already leaked. Because the stolen GitHub Actions secrets and tokens can reach package registries, cloud consoles and deployment tooling, the blast radius can extend well beyond this single project. The attack worked by pushing tags directly, sidestepping whatever review or branch protection existed on main, and the malicious workflow is what harvested the repository secrets. Affected users are advised to stop using versions 3.1.10–3.1.12, roll back to 3.1.9, and rotate the GitHub token, SSH keys, database credentials and DeepSeek and other related API keys.

telegram · zaihuapd · Nov 23, 11:21

**Background**: Codex2api is an API proxy server that accepts multiple client API formats and forwards requests to a unified Codex-compatible backend, typically self-hosted by individuals and small teams. GitHub Actions secrets are encrypted values injected into CI workflows, so any workflow that runs on a malicious tag can read and POST them to an attacker-controlled server. Release builds are usually triggered by tag pushes rather than branch merges, which is why compromising an account and pushing a tag can ship a backdoored artifact even if the main branch stays clean.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/rokyplay/codex2api/tree/main">GitHub - rokyplay/codex2api: OpenAI Codex API proxy with ...</a></li>
<li><a href="https://cyberreplay.com/blog/detecting-remediating-github-actions-secret-exfiltration/">Detecting and Remediating GitHub Actions Secret Exfiltration ...</a></li>
<li><a href="https://www.endorlabs.com/learn/github-actions-supply-chain-attack-targeting-ci-secrets-at-scale">Hijacked GitHub Accounts Push “wfx” CI Secret Stealer... | Endor Labs</a></li>

</ul>
</details>

**Tags**: `#supply-chain-attack`, `#security-incident`, `#GitHub Actions`, `#secrets-exposure`, `#Codex2api`

---

<a id="item-6"></a>
## [Meta AI chief Alexandr Wang says superintelligence is near and control is at risk](https://thenextweb.com/news/metas-ai-chief-says-superintelligence-is-arriving-and-control-is-at-risk) ⭐️ 8.0/10

Meta's chief AI officer and Superintelligence Labs head Alexandr Wang posted a long thread on X arguing that superintelligence is no longer a "someday" question, pointing to a claimed proof of the Riemann Hypothesis by mathematician Levent Alpöge, produced with help from Anthropic's Claude, that was machine-checked by the Lean and Mathlib community over the weekend. He warned that humanity will struggle to stay in control of systems capable of unlimited self-improvement or of being 1,000 times smarter than people, and called for urgent investment in safety, alignment and safeguard research. The post ties a concrete, checkable technical milestone to one of the bluntest safety warnings yet from a senior lab executive, framing frontier AI progress as outpacing the field's ability to verify or control it. Coming from Meta's top AI official, it signals that superintelligence timelines are now being discussed as an engineering and governance problem rather than a distant philosophical one — a shift that affects policymakers, rival labs and anyone relying on AI systems. The claimed proof currently exists only as formal Lean code with no human-readable write-up, so the compiler checks the proof's internal correctness rather than confirming that the formal statement matches what mathematicians mean by the Riemann Hypothesis. One explainer pegs the Lean archive at roughly 17 million lines, and independent experts have not yet reviewed the underlying mathematics.

telegram · zaihuapd · Nov 23, 12:49

**Background**: Lean is an open-source proof assistant and functional programming language based on dependent type theory, in which theorems are stated precisely and every step of a proof is checked mechanically by a computer. Mathlib is the community-driven library of formalized mathematics built on Lean, providing the definitions and lemmas needed to formalize research-level results. The Riemann Hypothesis, which concerns the location of the zeros of the Riemann zeta function and the distribution of primes, is one of the Clay Mathematics Institute's Millennium Prize Problems and has resisted proof since 1859. Formal verification guarantees that a proof follows from its assumptions, but it does not by itself guarantee that the formal statement captures the intended theorem, which is why human review remains essential.

<details><summary>References</summary>
<ul>
<li><a href="https://math.mit.edu/~drew/grh/">RH Lean proof: verification files - MIT Mathematics</a></li>
<li><a href="https://lean4.dev/proofs/riemann-hypothesis-claim">The Riemann Hypothesis: a claimed proof, delivered in Lean</a></li>
<li><a href="https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/zeta-paper.pdf">The Alpoge-Claude proof of the Riemann hypothesis explained ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://mathlib.org/">Mathlib</a></li>

</ul>
</details>

**Tags**: `#AI safety`, `#superintelligence`, `#Riemann Hypothesis`, `#formal verification`, `#Meta AI`

---

