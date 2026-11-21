# Horizon Daily - 2026-11-21

> From 33 items, 10 important content pieces were selected

---

1. [Mathematician rush-posts 12-year GRH proof draft hours after Anthropic announcement](#item-1) ⭐️ 9.0/10
2. [Levent Alpöge claims proof of the Generalized Riemann Hypothesis](#item-2) ⭐️ 9.0/10
3. [Terry Tao: Unforced Euler/Navier–Stokes Singularity and Generalized Riemann Hypothesis](#item-3) ⭐️ 9.0/10
4. [Thinking Machines Releases Inkling 2 Mini Looped Transformer](#item-4) ⭐️ 8.0/10
5. [LLM rewrites its own weights through reasoning, no gradients needed](#item-5) ⭐️ 8.0/10
6. [Buckmaster repo claims unforced Navier–Stokes finite-time blow-up](#item-6) ⭐️ 8.0/10
7. [Signal blocks mobile screenshots to keep OS-level AI agents out of chats](#item-7) ⭐️ 8.0/10
8. [Scott Aaronson on 'Stochastic Parrots' and a Claimed Riemann Hypothesis Proof](#item-8) ⭐️ 8.0/10
9. [Linux KVM Flaw CVE-2026-99312 Exposes AMD Host Memory to Guest VMs](#item-9) ⭐️ 8.0/10
10. [Google Reportedly Launches Gemini 4 Neon for Coding and Research Workflows](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Mathematician rush-posts 12-year GRH proof draft hours after Anthropic announcement](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) ⭐️ 9.0/10

A mathematician published a long-gestating draft manuscript — reportedly the product of roughly 12 years of solitary work — claiming a proof of the Generalized Riemann Hypothesis, doing so within hours of an announcement from AI lab Anthropic. The blog post frames the release as a hurried, priority-driven action rather than a polished submission, and the claim has not been verified. A correct proof of the GRH would be a once-in-a-generation result touching prime distribution and vast swaths of number theory, so any credible claim draws immediate scrutiny. The timing also dramatizes a new kind of priority race, in which a lone human researcher may be racing an AI lab to the same theorem, raising hard questions about credit, provenance, and how mathematics should verify such results. The manuscript is reported to run roughly 940 pages, and commenters noted structural oddities such as an empty opening subsection and a table of contents that never names the GRH, the Riemann zeta function, or primes in its section headers. Nothing has been refereed or machine-checked, so the status of the result remains entirely open.

hackernews · jasondavies · Nov 20, 18:33 · [Discussion](https://news.ycombinator.com/item?id=50579568)

**Background**: The Riemann hypothesis, posed by Bernhard Riemann in 1859, conjectures that the non-trivial zeros of the Riemann zeta function all have real part 1/2; the Generalized Riemann Hypothesis extends the same statement to a much broader family of objects called global L-functions. The GRH is one of the most important open problems in mathematics and, if proven, would imply strong bounds on the distribution of primes in arithmetic progressions and many other consequences. Modern AI systems have increasingly been applied to theorem proving and mathematical discovery, which is why an AI-lab announcement could plausibly overlap with a human's decade-long project and trigger a priority dispute reminiscent of the Newton–Leibniz calculus controversy.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Leibniz–Newton_calculus_controversy">Leibniz–Newton calculus controversy - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters were largely intrigued but skeptical: several explained the GRH for non-specialists, while others flagged red flags in the manuscript such as a 940-page length, an empty first subsection, and section headings that never mention the GRH or primes. A recurring theme was provenance — one commenter speculated whether portions of the long-developed human proof could have reached Anthropic through uploaded materials or shared storage — and many noted sympathy for an author who saw his 12-year project suddenly at risk of being scooped.

**Tags**: `#mathematics`, `#Riemann-hypothesis`, `#AI-for-math`, `#research-announcement`, `#priority-dispute`

---

<a id="item-2"></a>
## [Levent Alpöge claims proof of the Generalized Riemann Hypothesis](https://alpo.ge/remark.pdf) ⭐️ 9.0/10

Levent Alpöge has posted a PDF at alpo.ge/remark.pdf claiming a proof of the Generalized Riemann Hypothesis. The claim is accompanied by a Lean formalization that discussion participants describe as roughly 1.3 GB and about 15 million lines long, though it has not been peer-reviewed or independently verified. The Generalized Riemann Hypothesis is a central open problem in analytic number theory, and a correct proof would be a paradigm-shifting result with broad consequences for prime distribution and L-functions. The episode is also significant because it has intensified debate over machine-checked proofs, AI-assisted mathematics, and how credit is assigned. The reported Lean artifact's enormous size makes independent checking and auditing nontrivial, and a formal proof is only as trustworthy as its definitions, axioms, and absence of unproved gaps. Commenters also share a link to what is described as a completely human proof and debate how much of the claimed result should be attributed to Alpöge versus AI tools.

hackernews · iamronaldo · Nov 20, 14:16 · [Discussion](https://news.ycombinator.com/item?id=50574968)

**Background**: The Riemann Hypothesis conjectures that all nontrivial zeros of the Riemann zeta function lie on the critical line Re(s)=1/2, and it is one of the most famous unsolved problems in mathematics. The Generalized Riemann Hypothesis extends the same kind of zero-location prediction to Dirichlet L-functions and other L-functions, making it a broad statement about primes in arithmetic progressions and related arithmetic objects. Lean is an interactive theorem prover based on dependent type theory; mathematicians use it to encode definitions, statements, and proofs so that a computer kernel can check every inference step. A Lean formalization can therefore provide strong machine verification, but only if the formal statement faithfully captures the intended theorem and the underlying axioms are accepted.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://lean-lang.org/">Lean Programming Language</a></li>

</ul>
</details>

**Discussion**: The Hacker News discussion is a mix of excitement, skepticism, and credit-attribution arguments: some commenters note a link to what is described as a fully human proof, while others cite Terence Tao's recent remark that current AI could not touch the Riemann Hypothesis. Several focus on the sheer scale of the Lean artifact and question whether the title's framing shifts credit from the mathematician to the AI company. Others express ambivalence that a result they hoped would fall to a human may have involved substantial AI assistance.

**Tags**: `#mathematics`, `#Riemann Hypothesis`, `#Lean theorem prover`, `#AI-assisted proofs`, `#Hacker News discussion`

---

<a id="item-3"></a>
## [Terry Tao: Unforced Euler/Navier–Stokes Singularity and Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 9.0/10

On November 20, 2026, Terry Tao published a blog post presenting claimed unforced singularity formation for the Euler and Navier–Stokes equations and a route toward the Generalized Riemann Hypothesis; the post is tagged with AI and mathematicians Levent Alpöge, Matei Coiculescu, and Tristan Buckmaster. If correct, the work would bear on the Navier–Stokes existence-and-smoothness Millennium Prize problem and on the Generalized Riemann Hypothesis, making it a potentially paradigm-shifting development; it also puts AI-assisted proof search and Lean formal verification under fresh scrutiny. The term “unforced” means no external forcing is present, and the known singularity constructions still differ from the original Navier–Stokes problem, which excludes the Euler equations and requires smooth forcing; commenters also noted that two independent Lean kernels accepted the formal proof, while asking whether a passing build verifies the intended statement rather than an unrelated easy one.

hackernews · archon1410 · Nov 20, 17:21 · [Discussion](https://news.ycombinator.com/item?id=50578358)

**Background**: The Navier–Stokes existence and smoothness problem asks whether smooth solutions to the 3D incompressible Navier–Stokes equations exist for all time or can develop singularities (blow-up); the Euler equations are the inviscid counterpart. The Generalized Riemann Hypothesis extends the Riemann Hypothesis from the classical zeta function to Dirichlet L-functions and other global L-functions, and it remains unproven for number fields. Lean is an interactive theorem prover whose small kernel checks formal proofs, so “Lean accepts it” means the proof term type-checks, not automatically that the formal statement matches the informal claim.

<details><summary>References</summary>
<ul>
<li><a href="https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/">Unforced Euler singularity, unforced Navier-Stokes ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis</a></li>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_priority_controversy">Navier–Stokes priority controversy - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters expressed a mix of excitement and career anxiety about AI-driven mathematics, with one asking how genuinely new abstractions—like the Langlands program—could ever be created rather than recombined. Others focused on trust in Lean: one noted that two independent kernels accepting the result makes kernel-bug exploitation unlikely, while another asked how a large Lean build can be checked to prove the right statement, and one wished Tao had commented on the significance of a Riemann Hypothesis result.

**Tags**: `#mathematics`, `#formal-verification`, `#lean-theorem-prover`, `#navier-stokes`, `#riemann-hypothesis`

---

<a id="item-4"></a>
## [Thinking Machines Releases Inkling 2 Mini Looped Transformer](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Thinking Machines released Inkling 2 Mini, a 26B-parameter open-weights model with 5.4B active parameters per token that loops its middle layers and was trained end-to-end in nvfp4. Derived from the company's mainline predictive scaling ladder, it was pruned by removing two-thirds of its experts to shrink the model and given looping to improve reasoning, and it is small enough to run locally on a Mac with 32GB or more memory. The release is notable because open-weight models rarely embrace a looped architecture — a design only rumored in frontier closed models like GPT Astra and Sol — so its strong showing against Qwen-class models could push more open releases toward looping. It also matters for local users, since end-to-end nvfp4 training makes the model naturally suited to low-bit quantization and consumer-hardware inference. Inkling 2 Mini has 24 layers and reportedly reaches roughly the level of much larger Qwen models, with community testers measuring about 27 tokens/s decode on a Ryzen 395 with llama.cpp's Vulkan backend and around 10 tokens/s on a 32GB M1 Pro at q4. Users note it benefits from several unmerged llama.cpp PRs plus a small patch for roughly a 30% speed boost, and early hands-on tests showed strong Python coding but failures on a harder visual-style reasoning task.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**Background**: A looped (or recurrent-depth) transformer repeatedly applies the same block of layers across multiple passes, sharing weights so the model can spend more computation per token instead of generating more tokens — a parameter-efficient way to gain depth and reasoning ability. nvfp4 is NVIDIA's 4-bit floating-point format; training directly in it rather than in higher precision can make later low-bit quantization for local inference cleaner. Thinking Machines is the AI lab founded by Mira Murati, and this model sits in its line of smaller, locally runnable releases.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://ollama.com/library/inkling-2-mini">inkling - 2 - mini</a></li>
<li><a href="https://sebastianraschka.com/llm-architecture-gallery/looped-depth-sharing/">Looped Transformer | Sebastian Raschka, PhD</a></li>

</ul>
</details>

**Discussion**: Community reaction is enthusiastic: commenters called the benchmarks "bonkers good" if they hold up and were impressed that an open-weights model openly embraces looping. Hands-on reports were positive but mixed — solid Python coding and about 27 tokens/s on a Ryzen 395, yet a hard coin-identification test failed after 12,000 tokens of rambling — and several users shared llama.cpp patches, asked for research access, and said it might replace their current local model for tool calling.

**Tags**: `#LLM`, `#model release`, `#local inference`, `#llama.cpp`, `#quantization`

---

<a id="item-5"></a>
## [LLM rewrites its own weights through reasoning, no gradients needed](https://arxiv.org/abs/2611.21885) ⭐️ 8.0/10

A new arXiv paper (2611.21885) titled "Language Models Can Rewrite Their Own Weights" claims that, to the authors' knowledge for the first time, a language model can diagnose its own errors and edit its own weights to become better — with no gradients and no training run. The authors report that a 27B model improves on unseen tasks across eight consecutive self-editing sessions, can repair a damaged copy of itself, and that the capability emerges with scale. If it holds up, this points to a third path beyond "train once and freeze" and "add prompts or scaffolding at inference time": models that permanently improve themselves during inference, with no cluster and no added per-answer cost. That prospect is exciting for continual learning but also raises immediate AI-safety questions, since an autonomous model that can edit its own weights could in principle also edit away safety-relevant behaviour. The paper's mechanism is what the authors call "self-rewriting": the model proposes weight edits, tests them on practice problems, and keeps only the edits that work, with each edit building on the last. Critics note the main improvement observed was shortening the model's reasoning traces to avoid hitting the token limit, and that the model is a 27B-parameter one, so scalability to frontier sizes and to genuinely new capabilities remains unproven.

hackernews · lwhsiao · Nov 20, 16:29 · [Discussion](https://news.ycombinator.com/item?id=50577265)

**Background**: Normally a language model is trained once with backpropagation, which uses gradients to nudge every weight in the direction that reduces error, and after that its weights are frozen; making it better later requires another training run or extra inference-time scaffolding. "Gradient-free weight editing" instead means changing weights directly — often by having a model read and write weight values much like code — without the usual backpropagation step. Related prior work includes Google's "sleep" framework, where a model updates its weights offline using self-generated practice examples between task sessions, and recent experiments on weight-space programming where one LLM edits another's weights. The token limit referred to is the cap on how many tokens a model may generate in one reasoning trace.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Language Models Can Rewrite Their Own Weights</a></li>
<li><a href="https://www.jiajunfan.com/projects/self-rewriting/">Language Models Can Rewrite Their Own Weights | Jiajun Fan</a></li>
<li><a href="https://arxivb.org/abs/2611.21885">Language Models Can Rewrite Their Own Weights</a></li>

</ul>
</details>

**Discussion**: Hacker News discussion (roughly 348 points, 113 comments) is largely skeptical about the novelty: one commenter argues the only self-improvement observed was shortening reasoning traces to dodge the token limit, echoing a recent weight-space programming post where even a strong model could only help by exploiting such an obvious flaw. Others ask whether this is simply training under another name ("submits only what works" sounds like selection), point to Google's earlier sleep framework, and warn that autonomous self-weight-editing is among the most dangerous lines of safety research — a model could, if instructed, locate and suppress its own safety-relevant activations, a form of automated abliteration.

**Tags**: `#LLM self-modification`, `#AI safety`, `#weight editing`, `#autonomous agents`, `#machine learning research`

---

<a id="item-6"></a>
## [Buckmaster repo claims unforced Navier–Stokes finite-time blow-up](https://github.com/tristanbuckmaster/navier-stokes/) ⭐️ 8.0/10

A GitHub repository by mathematician Tristan Buckmaster (tristanbuckmaster/navier-stokes) claims a finite-time blow-up result for the Navier–Stokes equations, and a Hacker News post linking to it treated the claim as a major mathematical result. Commenters describe it as the 'unforced' version of the problem, distinct from the forced-equation blow-up construction that OpenAI published earlier. If valid, a finite-time blow-up for the unforced Navier–Stokes equations would resolve one of the seven Millennium Prize Problems posed by the Clay Mathematics Institute in 2000, and it would do so in the more physically natural setting without an artificially designed external force. It would also mark a striking moment for machine-assisted and formally verified mathematics, coming in the same period as OpenAI's own announced solution and Lean formalization. The linked content is essentially only a repository URL, with no accompanying technical writeup, peer review, or formal verification visible in the provided material, so the claim remains unverified. The distinction matters technically: a blow-up proven only for equations with a carefully designed external forcing does not settle the unforced Millennium Prize statement, and prior work by Buckmaster and Vicol used convex integration to establish non-uniqueness of finite-energy weak solutions rather than blow-up of the original equations.

hackernews · trotro · Nov 20, 15:34 · [Discussion](https://news.ycombinator.com/item?id=50576232)

**Background**: The Navier–Stokes existence and smoothness problem asks whether smooth solutions of the equations governing fluid motion exist for all time in three dimensions, or whether they can break down in finite time; the Clay Mathematics Institute named four versions of it (two with no external force, two with a smooth external force) as a Millennium Prize Problem in 2000. A 'finite-time blow-up' means the solution ceases to be classically defined at some finite time, with a quantity such as the velocity gradient becoming unbounded. Proving blow-up requires constructing a genuine counterexample, and modern approaches often rely on convex integration, the technique Buckmaster and Vicol previously used to show non-uniqueness of weak solutions.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Navier–Stokes_existence_and_smoothness">Navier–Stokes existence and smoothness - Wikipedia</a></li>
<li><a href="https://mathworld.wolfram.com/Finite-TimeBlow-Up.html">Finite-Time Blow-Up -- from Wolfram MathWorld</a></li>
<li><a href="https://openai.com/index/navier-stokes-solution/">On the Navier–Stokes Millennium Prize Problem | OpenAI</a></li>

</ul>
</details>

**Discussion**: Commenters are broadly excited, with one joking that this is only the second-biggest result of the day given the simultaneous generalized Riemann Hypothesis and unforced Navier–Stokes news. Others ask whether a real-time simulation could make the blow-up intuitively visible, express sympathy for Buckmaster and collaborator Alpoge over being 'scooped' by OpenAI's announcement, and wish for a physical demonstration of the phenomenon.

**Tags**: `#Navier-Stokes`, `#mathematics`, `#PDE`, `#Millennium Prize`, `#research announcement`

---

<a id="item-7"></a>
## [Signal blocks mobile screenshots to keep OS-level AI agents out of chats](https://signal.org/blog/protecting-your-privacy/) ⭐️ 8.0/10

Signal published a blog post stating that it is restricting the AI agents built into mobile operating systems — such as Google's Gemini and Apple's Siri/Apple Intelligence — from potentially capturing and storing Signal user data, and it now blocks screenshots of Signal chats on Android and iOS. Signal framed these on-device AI agents as "hostile to privacy" and said it is cautiously optimistic that the mitigation will hold. This is one of the first concrete moves by a major messaging app to treat OS-integrated AI assistants as a data-exfiltration channel, which could set a precedent for how other privacy-focused apps respond to system-level agents that can read whatever is on screen. It also puts pressure on Apple and Google to clarify what their assistants can see, since users may not realize a phone's built-in AI can observe private conversations. On Android, the block relies on the platform's FLAG_SECURE window flag, which prevents screenshots and screen recording and suppresses the app's preview in the recents view; iOS has no exact equivalent, so Signal depends on detection-based mitigations instead. The restriction is app-level rather than absolute, and commenters report it also affects legitimate uses, including screenshotting chats on desktop Windows.

hackernews · dotcoma · Nov 20, 09:42 · [Discussion](https://news.ycombinator.com/item?id=50572348)

**Background**: Mobile operating systems now ship AI assistants that can act on what is displayed on screen — reading text, summarizing conversations, or taking actions inside apps — and developers have limited ability to opt out. The main tool for blocking screen capture is Android's FLAG_SECURE flag, which tells the system to refuse screenshots and recordings of a given window, while iOS historically offers no such boolean flag and apps must instead detect recording or sharing and obscure content. In an end-to-end encrypted messenger like Signal, message contents are protected in transit but are fully visible once rendered on screen, so a system-level agent with screen access bypasses the encryption entirely.

<details><summary>References</summary>
<ul>
<li><a href="https://signal.org/blog/protecting-your-privacy/">Signal >> Blog >> Signal is Serious About Protecting Your Privacy</a></li>
<li><a href="https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app">Signal is blocking Gemini and Siri AI from reading your screen</a></li>
<li><a href="https://stackoverflow.com/questions/28606689/how-to-prevent-screen-capture-in-android">security - How to prevent Screen Capture in Android - Stack Overflow</a></li>

</ul>
</details>

**Discussion**: Commenters were broadly supportive of the direction but pushed for more: some cited Meredith Whittaker's interview noting that even users without an AI app installed can leak chats through contacts who have one, and others urged Signal to publish its forensics findings as a living document others could build on. The sharpest criticism concerned usability tradeoffs — one user complained they can no longer screenshot a Signal chat on Windows — and a separate thread raised frustration that Signal's signup flow interacts badly with VPNs, forcing captcha loops.

**Tags**: `#privacy`, `#security`, `#Signal`, `#AI agents`, `#mobile OS`

---

<a id="item-8"></a>
## [Scott Aaronson on 'Stochastic Parrots' and a Claimed Riemann Hypothesis Proof](https://scottaaronson.blog/?p=10344) ⭐️ 8.0/10

Scott Aaronson published a blog post examining claims that LLMs derided as 'stochastic parrots' have 'proved' the Riemann Hypothesis, and uses the episode to probe what such claims mean for AI, mathematical understanding, and explanation. The Riemann Hypothesis is one of the most important unsolved problems in pure mathematics, so a credible machine-generated proof would be a landmark for automated reasoning and would reshape debates about LLM capability. Even an unverified or flawed claim matters because it exposes how hard it is to distinguish genuine mathematical insight from fluent text generation. The core issue is epistemic: producing proof-like prose is not the same as possessing mathematical understanding or supplying a proof that mathematicians can independently verify. The 'stochastic parrot' label comes from a 2021 critique arguing that LLMs statistically mimic text without genuine comprehension, and the blog post uses that framing to ask what an LLM 'explanation' would even be.

hackernews · stratos123 · Nov 20, 20:03 · [Discussion](https://news.ycombinator.com/item?id=50581084)

**Background**: The Riemann Hypothesis conjectures that the nontrivial zeros of the Riemann zeta function all lie on the critical line with real part 1/2; it is deeply connected to the distribution of prime numbers and is a Clay Millennium Prize problem. 'Stochastic parrot' is a metaphor popularized by a 2021 paper titled 'On the Dangers of Stochastic Parrots,' which frames large language models as systems that statistically mimic text without real understanding. Scott Aaronson is a theoretical computer scientist known for work on quantum computing and computational complexity, and his blog often discusses the conceptual stakes of AI.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://www.britannica.com/science/Riemann-hypothesis">Riemann hypothesis | Prime Numbers, Zeta Function & Complex ... What is the Riemann hypothesis and why is its solution so ... What the Riemann hypothesis proof really means about AI, and ... Riemann hypothesis - Simple English Wikipedia, the free ... What Is the Riemann Hypothesis? A Plain-English Guide The Riemann Hypothesis, Explained | Quanta Magazine</a></li>

</ul>
</details>

**Discussion**: The Hacker News thread is broadly skeptical and philosophical: one commenter compares LLM proofs to chess-engine evaluations built atop a neural-network evaluator, arguing that such 'explanations' are unsatisfying aggregates rather than human-intuitive reasons. Others worry that humans will become increasingly unable to understand complex scientific and engineering systems, and a few comments veer off-topic into site-access problems.

**Tags**: `#LLMs`, `#mathematics`, `#Riemann Hypothesis`, `#AI research`, `#stochastic parrots`

---

<a id="item-9"></a>
## [Linux KVM Flaw CVE-2026-99312 Exposes AMD Host Memory to Guest VMs](https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html) ⭐️ 8.0/10

A Linux kernel KVM vulnerability tracked as CVE-2026-99312 allows a guest virtual machine to read host physical memory on AMD-based systems when nested virtualization is enabled. Researchers demonstrated the flaw on DigitalOcean by reading roughly 127 GB of a production host's RAM from inside a guest VM, and upstream fixes shipped with stable kernels such as 7.3.5 on November 18. Cloud providers and anyone running nested virtualization on AMD hosts are affected, because a malicious tenant VM could potentially read other tenants' memory or host kernel data — a serious multi-tenancy isolation break. The risk is amplified by the fact that major distribution kernels such as Debian and Ubuntu have not yet shipped the fix. According to Red Hat's analysis the vulnerability is rated Moderate impact, since exploitation requires nested virtualization on AMD KVM hosts plus specific guest execution conditions: the guest triggers processor reset (INIT) emulation while paging is disabled, leaving the MMU in an inconsistent state that lets a nested page table be forged. The issue stems from a use-after-free in KVM's AMD nested virtualization code and is tied to an earlier security fix; a mitigation until patched is to disable nested virtualization.

telegram · zaihuapd · Nov 20, 14:23

**Background**: KVM is the hypervisor built into the Linux kernel, used by most public clouds to run virtual machines. "Nested virtualization" means running a hypervisor inside a VM — on AMD hardware this relies on AMD-V (SVM), and it is commonly enabled for workloads like container sandboxes, CI runners and Kubernetes nodes running inside VMs. Because the hypervisor normally guarantees that each guest only sees its own memory, a bug in that boundary is classed as a guest-to-host escape, one of the most severe classes of virtualization vulnerability.

<details><summary>References</summary>
<ul>
<li><a href="https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html">Linux KVM Flaw CVE-2026-99312 Lets Guest VMs Access Host ...</a></li>
<li><a href="https://access.redhat.com/security/cve/cve-2026-99312">CVE-2026-99312 - Red Hat Customer Portal</a></li>
<li><a href="https://dev.to/etairos/cve-2026-99312-linux-kvm-flaw-let-a-guest-vm-read-127-gb-of-host-memory-on-amd-hosts-4460">CVE-2026-99312: Linux KVM Flaw Let a Guest VM Read 127 GB of ...</a></li>

</ul>
</details>

**Tags**: `#security`, `#KVM`, `#Linux kernel`, `#virtualization`, `#CVE`

---

<a id="item-10"></a>
## [Google Reportedly Launches Gemini 4 Neon for Coding and Research Workflows](https://t.me/zaihuapd/45267) ⭐️ 8.0/10

A Telegram news blurb reports that Google released Gemini 4 Neon, a frontier model aimed at fast end-to-end execution of complex software engineering, knowledge work, and research workflows, made available to developers, enterprises, and Google AI Pro/Ultra subscribers. The post claims pricing of $3 per million input tokens ($0.15 cached) and $15 per million output tokens, a 1M-token context window, and a first-place score of 58.6 on the Artificial Analysis coding-agent index alongside third place overall (61) on its Intelligence Index at the xhigh setting. If accurate, this would be a major frontier-model release that combines top-of-leaderboard agentic coding performance with aggressive per-token pricing and a 1M-token context, directly pressuring competing models from OpenAI and Anthropic on the cost-performance frontier. Developers and enterprises choosing a model for autonomous coding agents and long-horizon research tasks would see a meaningfully cheaper high-end option. The claims come from a single-sentence Telegram post with no linked source, benchmark table, or model card, so the headline numbers should be treated as unverified. The cited Artificial Analysis coding-agent index is a composite built from evaluations such as FrontierCode-AA, Terminal-Bench, and SWE-Atlas-QnA, meaning a single composite score can mask uneven per-benchmark performance.

telegram · zaihuapd · Nov 21, 01:09

**Background**: Frontier AI labs increasingly market models less on raw chat quality and more on agentic capability — the ability to autonomously run multi-step tasks such as editing a codebase, operating a terminal, or executing a research workflow. To compare these abilities, benchmarking organizations like Artificial Analysis publish composite leaderboards that aggregate several agent-focused evaluations, including Terminal-Bench, which measures how well an agent completes difficult, professionally realistic computer-work tasks in a sandboxed shell. Pricing and context window have become nearly as important as scores, since agentic workloads consume far more tokens per task than single-turn chat.

<details><summary>References</summary>
<ul>
<li><a href="https://artificialanalysis.ai/agents/coding-agents">AI Coding Agent Benchmarks & Leaderboard | Artificial Analysis</a></li>
<li><a href="https://github.com/harbor-framework/terminal-bench">GitHub - harbor-framework/terminal-bench: Measuring and ...</a></li>
<li><a href="https://artificialanalysis.ai/">AI Model & API Providers Analysis | Artificial Analysis</a></li>

</ul>
</details>

**Tags**: `#LLM`, `#Google`, `#model-release`, `#benchmarks`, `#software-engineering`

---

