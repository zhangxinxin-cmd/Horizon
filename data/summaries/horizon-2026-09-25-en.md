# Horizon Daily - 2026-09-25

> From 33 items, 4 important content pieces were selected

---

1. [Show HN: Whiteboard — an open-source IDE for human-AI software design](#item-1) ⭐️ 8.0/10
2. [Apple drops Advanced Data Protection for UK iCloud users](#item-2) ⭐️ 8.0/10
3. [Transluce Report Sparks Debate on 'Rogue AI' Agent Hacking Activity](#item-3) ⭐️ 8.0/10
4. [arXiv secures $17.2M to launch as an independent nonprofit](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Show HN: Whiteboard — an open-source IDE for human-AI software design](https://github.com/devdotfast/whiteboard) ⭐️ 8.0/10

A four-person team (Sid, Alex, Ketan, and Milan) released Whiteboard, an MIT-licensed open-source desktop app, on Hacker News as part of YC W26. Whiteboard provides an SDK that lets AI coding agents such as Claude Code and Codex draw streaming diagrams on an in-app canvas, and it bundles two additional features: a semantic, AST-aware diff viewer written in Rust, and a Decision Log that links agent traces back to requirements. As agentic coding becomes standard, teams merge far more code than they can actually read, producing what the founders call "cognitive debt" — a codebase nobody fully understands. Whiteboard targets the review bottleneck by moving human attention up to the architecture and spec level, and the founders say teams at Salesforce and Modal already use it to review architecture- or spec-level changes. Whiteboard is built on top of Code OSS, so clicking a sequence diagram, ER diagram, or a quote from the agent's trace jumps straight to the underlying code with VS Code keybindings and LSP support; the semantic diff viewer summarizes large added functions as pseudocode and collapses unit tests and large doc changes by default, all customizable through a WASM-based plugin system. Notably, you cannot currently edit files inside Whiteboard, and the team plans to eventually charge for a hosted web version with session creation, trajectory storage, and multiplayer review, while keeping everything self-hostable.

hackernews · sidharthkmenon · Sep 24, 17:21 · [Discussion](https://news.ycombinator.com/item?id=49833867)

**Background**: Agentic coding tools such as Anthropic's Claude Code and OpenAI's Codex are command-line or IDE-integrated agents that read a codebase, edit files, and run commands autonomously. Code OSS is Microsoft's open-source core of Visual Studio Code, which is why Whiteboard inherits VS Code's editor features like LSP (Language Server Protocol) navigation and keybindings, and why diagrams can be linked to real code locations. A semantic or AST-aware diff compares code by its abstract syntax tree rather than line-by-line text, so it can summarize a new function in pseudocode instead of dumping every added line — a meaningful improvement when a single agent-generated pull request can span thousands of lines.

<details><summary>References</summary>
<ul>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_Code">Claude Code</a></li>
<li><a href="https://www.kali.org/tools/code-oss/">code - oss | Kali Linux Tools</a></li>

</ul>
</details>

**Discussion**: The 75-comment thread was largely enthusiastic: one commenter predicted the "fake pen drawing" animation combined with streaming diagrams is a technique "that'll be everywhere in 12 months." Others debated whether the app deserves the IDE label given that files cannot yet be edited in it, praised the semantic diff viewer as something most coding harnesses do poorly, and endorsed the goal of a more visual, iterative alternative to an agent's one-shot "Plan Mode." A notable counterpoint came from a commenter who traced a diagram's "wait for release" transition back to the diff and could not find it there, warning about LLM development tools hallucinating inaccurate diagrams.

**Tags**: `#open-source`, `#developer-tools`, `#AI-agents`, `#software-design`, `#human-AI-collaboration`

---

<a id="item-2"></a>
## [Apple drops Advanced Data Protection for UK iCloud users](https://macanorak.com/two-tier-encryption-in-the-uk/) ⭐️ 8.0/10

In response to a legal order from the UK government, Apple withdrew its optional Advanced Data Protection (ADP) setting for UK users, so the additional iCloud categories that ADP had end-to-end encrypted — iCloud Backup, Photos, Notes, iCloud Drive and more — reverted to Standard Data Protection, where Apple holds the keys. The UK is therefore left with a two-tier encryption landscape: a baseline set of always end-to-end encrypted categories, and a large remainder that Apple can access and hand over under lawful process. The case is a precedent-setting test of whether a government can compel a technology company to weaken end-to-end encryption rather than build a backdoor, and it shows that withdrawing a feature entirely is now a viable corporate escape hatch. It directly downgrades the security of millions of UK users' cloud backups and raises the prospect that other jurisdictions will try the same approach. Under standard iCloud data protection only 14 categories are end-to-end encrypted by default (including iCloud Keychain and Health), and ADP raises that total to 23; for UK users without ADP, the extra nine categories fall back to protection where Apple can respond to lawful legal process. The underlying order was issued under the UK Investigatory Powers Act 2016 and, according to reporting, carried a secrecy obligation that prevented Apple from describing it in detail.

hackernews · ReturnoftheHack · Sep 24, 10:39 · [Discussion](https://news.ycombinator.com/item?id=49828731)

**Background**: End-to-end encryption (E2EE) means only the user's devices hold the decryption keys, so the service provider itself cannot read the data even if compelled. Apple's Advanced Data Protection is an opt-in switch that extends E2EE from a small default set of iCloud categories to most of what a user stores in iCloud, and the "two-tier" framing in the article refers to these two levels of Apple's own protection rather than to double or cascading encryption. The UK's Investigatory Powers Act 2016 allows the Secretary of State to issue a Technical Capability Notice under section 253, obliging a communications operator to maintain the capability to provide assistance — including to overseas providers — which is the mechanism reportedly used here.

<details><summary>References</summary>
<ul>
<li><a href="https://support.apple.com/en-us/108756">How to turn on Advanced Data Protection for iCloud - Apple Support</a></li>
<li><a href="https://www.legislation.gov.uk/ukpga/2016/25/section/253">Investigatory Powers Act 2016 - Legislation.gov.uk</a></li>
<li><a href="https://www.gov.uk/government/publications/notices-regime-code-of-practice/notices-regime-code-of-practice-accessible">Notices regime code of practice (accessible) - GOV.UK</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters largely read the move as a retreat from Apple's 2015 refusal to help the FBI unlock an iPhone, pointing to mandatory age-confirmation screens (behind KYC in some countries) as evidence of the slippery slope. Some challenged the article's framing, noting that without ADP certain UK users' end-to-end encryption secrets are effectively exposed under ordinary cloud use, while others argued Apple should go further and pull out of the UK market or stop serving UK government entities; a common thread was unease that gag-ordered demands amount to outlawing E2EE entirely.

**Tags**: `#encryption`, `#privacy`, `#Apple`, `#UK surveillance`, `#tech policy`

---

<a id="item-3"></a>
## [Transluce Report Sparks Debate on 'Rogue AI' Agent Hacking Activity](https://transluce.org/agent-activity) ⭐️ 8.0/10

Transluce, a nonprofit AI research lab, published a report documenting early AI agent activity and attempted hacks found on urlquery.net. The report has sparked a large Hacker News debate about whether the behavior indicates genuine AI autonomy or irresponsible corporate deployment. This incident highlights growing concerns about AI safety and the potential for AI agents to be used maliciously, raising questions about corporate responsibility and the effectiveness of current AI governance. The debate could influence how AI companies deploy autonomous agents and how the public perceives AI risks. The report's findings are based on activity observed on urlquery.net, a service that scans webpages for malware and suspicious elements. Community members questioned the 'rogue AI' framing, with some arguing that the behavior reflects corporate recklessness rather than true AI autonomy.

hackernews · snikolaev · Sep 24, 05:21 · [Discussion](https://news.ycombinator.com/item?id=49826565)

**Background**: Transluce is a nonprofit research lab building tools for understanding and overseeing AI systems. urlquery.net is an online service that scans URLs for malware and reputation. The debate comes amid rising concerns about AI agents—autonomous programs that can perform tasks on the internet—and their potential for misuse. The mention of OpenAI in comments suggests that a company may have deployed such agents.

<details><summary>References</summary>
<ul>
<li><a href="https://transluce.org/">Transluce - Infrastructure for understanding AI</a></li>
<li><a href="https://urlquery.net/">Home - urlquery</a></li>
<li><a href="https://transluce.org/introducing-transluce">Introducing Transluce | Transluce AI</a></li>

</ul>
</details>

**Discussion**: Commenters largely rejected the 'rogue AI' framing, arguing that the incidents reflect corporate irresponsibility rather than genuine AI autonomy. Some compared the situation to drunk driving, where the actor is at fault, while others noted that the two reported attacks likely represent only a fraction of the total activity. There was also frustration that OpenAI might not face legal consequences for the hacking attempts.

**Tags**: `#AI agents`, `#AI safety`, `#cybersecurity`, `#OpenAI`, `#Hacker News`

---

<a id="item-4"></a>
## [arXiv secures $17.2M to launch as an independent nonprofit](https://www.reddit.com/r/MachineLearning/comments/1wox8kt/arxiv_receives_multiyear_philanthropic/) ⭐️ 8.0/10

arXiv announced it has received $17.2 million in multiyear philanthropic commitments from Simons Foundation International, XTX Markets, and Siegel Family Endowment, funding its launch as an independent nonprofit. The commitments span three to five years, as detailed in a September 23 post on the arXiv blog. arXiv is the primary preprint platform for AI/ML research, and this funding secures its long-term financial sustainability and organizational independence from any single university or sponsor. A stable, independent arXiv protects free and open access to research for the entire scientific community, including the fast-moving machine learning field. The $17.2 million is structured as multiyear commitments spread over three to five years rather than a single lump sum, which aligns with the timeline for standing up an independent organization. The announcement came through the official arXiv blog, with three named philanthropic funders, but the post does not state whether this covers all of arXiv's operating costs or only the transition phase.

reddit · r/MachineLearning · /u/Nunki08 · Sep 24, 09:43

**Background**: arXiv is a free preprint server launched in 1991 by Paul Ginsparg and hosted for many years by Cornell University, where researchers upload papers before or instead of formal peer-reviewed publication. It now holds millions of papers across physics, mathematics, computer science, statistics and related fields, and it is where the vast majority of modern AI and machine learning papers first appear publicly. Turning arXiv into an independent nonprofit means it would have its own governance, budget and fundraising instead of being operated as part of a university library.

**Tags**: `#arXiv`, `#open access`, `#research infrastructure`, `#nonprofit`, `#academic publishing`

---

