---
layout: default
title: "Horizon Summary: 2026-09-16 (EN)"
date: 2026-09-16
lang: en
---

> From 33 items, 3 important content pieces were selected

---

1. [Hackers Crack Open Flock Surveillance Cameras, Finding Hardcoded Credentials](#item-1) ⭐️ 8.0/10
2. [TMLR Quizzes Desk-Rejection Candidates; Most Authors Can't Explain Their Papers](#item-2) ⭐️ 8.0/10
3. [GoBench: A New LLM Benchmark Using 9x9 Go Against KataGo](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Hackers Crack Open Flock Surveillance Cameras, Finding Hardcoded Credentials](https://www.wired.com/story/hackers-flock-camera-data-shows-how-system-works/) ⭐️ 8.0/10

Security researcher Micah Lee published findings showing that Flock Safety's license-plate-reading surveillance cameras are riddled with security vulnerabilities, including hardcoded API keys and credentials stored in plaintext on the devices. The reporting was produced in collaboration with 404 Media, and the transparency collective Distributed Denial of Secrets has since published the camera partition images. Because these cameras are physically deployed in public spaces, any attacker with brief physical access can potentially extract credentials and reach Flock's backend infrastructure, undermining trust in a surveillance platform already used by thousands of law-enforcement agencies. It also spotlights how poorly designed vulnerability disclosure policies can shield vendors from scrutiny rather than protect users. Commenters note the hardcoded value is an API key rather than an admin password, but it can be used to request credentials that are themselves stored in plaintext, and Flock's vulnerability disclosure policy explicitly excludes cases where a researcher must "interact" with a device or download its data. Unencrypted data on the devices means anyone who physically accesses one can simply walk away with it.

hackernews · driverdan · Sep 16, 13:18 · [Discussion](https://news.ycombinator.com/item?id=49726586)

**Background**: Flock Safety, founded in 2017, is a private US company that manufactures automated license plate recognition (ALPR) cameras, video surveillance gear, and gunfire-location systems, and sells the resulting data to police departments. Hardcoded credentials are secrets baked directly into firmware or source code instead of being provisioned securely, so anyone who obtains the device or its files can extract them. A vulnerability disclosure policy (VDP) is the document that defines how security researchers should report bugs to a vendor and what legal protections they receive — its carve-outs therefore determine whether researchers can safely investigate a product at all.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Flock_Safety">Flock Safety - Wikipedia</a></li>
<li><a href="https://www.bugcrowd.com/blog/vulnerability-disclosure-policy-what-is-it-why-is-it-important/">Vulnerability Disclosure Policy : What is It & Why is it... | @Bugcrowd</a></li>
<li><a href="https://trufflesecurity.com/blog/llms-are-teaching-developers-to-hardcode-api-keys">LLMs are Teaching Developers to Hardcode API Keys ◆ Truffle Security Co.</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters were harshly critical, calling hardcoded credentials "a sign of total incompetence" and attributing the problems to a "reduced time to market" culture that skips secure boot architecture and key management. Several readers dissected Flock's vulnerability disclosure policy as performative rather than genuine, and others emphasized that deploying off-the-shelf hardware in public spaces means the threat model must include local physical access. People also flagged the collaboration with 404 Media and the publication of the device images by Distributed Denial of Secrets.

**Tags**: `#security`, `#iot`, `#surveillance`, `#vulnerability-disclosure`, `#privacy`

---

<a id="item-2"></a>
## [TMLR Quizzes Desk-Rejection Candidates; Most Authors Can't Explain Their Papers](https://www.reddit.com/r/MachineLearning/comments/1wid67h/tmlr_reached_out_to_the_authors_of_10_papers/) ⭐️ 8.0/10

The Co-Editor-in-Chief of Transactions on Machine Learning Research (TMLR) reached out to the authors of ten submissions that were slated for desk rejection and asked them to explain their own work. Of those ten, one paper's authors withdrew, one said they were unavailable, one scheduled a meeting but did not show up, three could not answer basic questions about the paper, three handled high-level ideas but struggled with technical details, and only one answered all questions. The results suggest that a meaningful share of submissions to a mainstream ML venue may be produced by authors who do not understand — or possibly did not write — the work, pointing to LLM-generated or ghost-authored papers slipping into scholarly publishing. This raises hard questions about whether editorial screening at ML journals needs new integrity checks, and it affects reviewers, editors, and honest authors who compete with such submissions. The probe was conducted as a direct interview: authors were first asked about the paper's high-level ideas and then pressed on technical details, which is where most of them failed. Notably, the one author who answered every question still had a major flaw in the paper identified by the interviewer, and the full breakdown of results comes from a Medium post published by the TMLR organization account.

reddit · r/MachineLearning · /u/hihey54 · Sep 16, 23:20

**Background**: TMLR (Transactions on Machine Learning Research) is an open-access journal run by the JMLR organization, known for accepting submissions on a rolling basis with no fixed deadlines and for its emphasis on correctness and clarity rather than novelty alone. A desk rejection is a journal's decision to reject a manuscript during initial editorial screening, before any external peer review and usually without a public record — it is common at high-volume venues as a way to filter out off-topic or clearly substandard papers. The concern here is that desk screening alone cannot detect submissions whose listed authors never really engaged with the content.

<details><summary>References</summary>
<ul>
<li><a href="https://casrai.org/guides/desk-rejection">What Desk Rejection Means and Why It Happens — CASRAI</a></li>
<li><a href="https://jmlr-org.nproxy.org/tmlr/">Transactions on Machine Learning Research</a></li>
<li><a href="https://www.journalmetrics.org/blog/desk-rejection-medical-journals-2026-guide">Desk Rejection at Medical Journals: What the 2026 Data ...</a></li>

</ul>
</details>

**Tags**: `#academic-integrity`, `#peer-review`, `#machine-learning`, `#LLM-generated-content`, `#publishing`

---

<a id="item-3"></a>
## [GoBench: A New LLM Benchmark Using 9x9 Go Against KataGo](https://www.reddit.com/r/MachineLearning/comments/1wi68jg/gobench_evaluating_llms_on_the_game_of_go_r/) ⭐️ 8.0/10

A new benchmark called GoBench evaluates LLMs by having them play 9x9 Go against a ladder of KataGo opponents ranging from random play to superhuman strength, and the author reports that results correlate strongly with ARC-AGI 2 (r = 0.83) while remaining far from saturated. On this benchmark, GPT-6 Astra Max reaches about 2500 Elo, versus roughly 4400 Elo for the strongest KataGo, while Codex paired with Astra and given coding tools plus two hours of preparation reaches 3560 Elo. GoBench offers a game-based, unsaturated measure of general reasoning that appears to track abstract-reasoning benchmarks like ARC-AGI 2, giving researchers another signal on LLM reasoning progress as existing benchmarks saturate. Because it uses an Elo ladder with adjustable opponent strength, it can in principle keep producing discriminating results as models improve, and it is released with a public leaderboard, code, and a paper. The benchmark scores models by Elo against a ladder of KataGo opponents from random to superhuman, and notably the strongest agent result (Codex with Astra, 3560 Elo) came only after granting coding tools and two hours of preparation time, indicating that tool use and test-time compute substantially change outcomes. Even the best model configuration remains far below the top KataGo level of about 4400 Elo, so the benchmark is described as highly unsaturated.

reddit · r/MachineLearning · /u/Roland31415 · Sep 16, 18:54

**Background**: KataGo is a free, open-source computer Go engine first released in 2019, trained with self-play reinforcement learning inspired by AlphaZero, and it is strong enough to beat top human players and to serve as a training and analysis tool for professionals. Go is a two-player board game long used as a challenge problem for AI because of its enormous search space; the 9x9 board variant is smaller and faster to play than the standard 19x19 board. ARC-AGI 2 is the second version of the Abstraction and Reasoning Corpus benchmark, which tests AI systems on novel abstract reasoning puzzles and is widely cited as a measure of progress toward general intelligence.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/KataGo">KataGo</a></li>
<li><a href="https://arcprize.org/arc-agi/2">ARC-AGI-2</a></li>

</ul>
</details>

**Tags**: `#LLM evaluation`, `#benchmark`, `#Go`, `#reasoning`, `#KataGo`

---