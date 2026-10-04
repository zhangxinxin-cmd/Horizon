---
layout: default
title: "Horizon Summary: 2026-10-04 (EN)"
date: 2026-10-04
lang: en
---

> From 25 items, 2 important content pieces were selected

---

1. [Aleph Alpha releases Kolibri, a sovereign open-weight agentic LLM](#item-1) ⭐️ 8.0/10
2. [Qt 6.12 LTS Released With Official HarmonyOS Support](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Aleph Alpha releases Kolibri, a sovereign open-weight agentic LLM](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/) ⭐️ 8.0/10

Aleph Alpha has released Kolibri, an open-weight agentic LLM that ships with an unusually detailed technical report documenting everything from dataset construction to training, plus abstention training and the company's Merlin-Arthur protocol so the model says "I don't know" when the answer is not present in the given context. The technical report is being read as an almost step-by-step tutorial for building a modern agentic LLM, a level of openness that is rare in open-weight releases and valuable to anyone training their own models; it also feeds directly into the European debate over sovereign, non-US and non-Chinese AI capabilities. Notably, Kolibri is the first release from a team formed less than a year ago and focused on fast iteration, and a third party (tesseracted.com) has hosted a free, no-GPU-needed demo for anyone to try; the main caveat raised is that the "sovereignty" framing is questionable since Aleph Alpha is slated to merge with the Canadian company Cohere.

hackernews · bastitx · Oct 3, 09:36 · [Discussion](https://news.ycombinator.com/item?id=49942706)

**Background**: An agentic LLM is essentially a language model used inside a loop where it plans, acts and observes results repeatedly, rather than just answering a single prompt. Abstention training deliberately teaches a model to output "I don't know" instead of guessing, which is one of the main practical defenses against hallucination — confident but fabricated answers. AI sovereignty refers to the principle that an organization or country should own and control its AI systems, data and intellectual property rather than rent them from an external vendor, which is why the nationality and control of a model provider matters politically.

<details><summary>References</summary>
<ul>
<li><a href="https://vihaya.ai/learn/what-is-agentic-ai">What is Agentic AI? — Plain-Language Explainer | Vihaya</a></li>
<li><a href="https://lmversity.com/learn/llm-foundations/hallucination-taxonomy-and-mitigations">A Hallucination Taxonomy and Its Mitigations · LLM Foundations...</a></li>
<li><a href="https://www.denodo.com/en/glossary/ai-sovereignty-definition-importance-and-key-components">AI Sovereignty : Definition , Importance, and Key Components | Denodo</a></li>

</ul>
</details>

**Discussion**: Commenters overwhelmingly praised the transparency of the report, with one calling it the first time they had seen this level of openness, and a member of the training team joined to answer questions and noted that a strong coding/agentic model is only the first of more releases to come. A third party offered a free hosted demo as a gesture of support, while critics argued the sovereignty emphasis is misleading because the company is slated to merge with Canada's Cohere, prompting debate about whether non-US, non-Chinese AI efforts should pool resources and costs rather than duplicate them.

**Tags**: `#open-weight-models`, `#llm`, `#aleph-alpha`, `#hallucination-mitigation`, `#model-training`

---

<a id="item-2"></a>
## [Qt 6.12 LTS Released With Official HarmonyOS Support](https://www.qt.io/blog/qt-6.12-released) ⭐️ 8.0/10

Qt 6.12 LTS has been released, offering five years of maintenance support, and for the first time adds Huawei's HarmonyOS to Qt's list of officially supported LTS platforms. The release is published by Qt Group, with the announced release date given as September 30, 2026. As an LTS release, Qt 6.12 gives enterprises and embedded teams a stable, long-maintained base for cross-platform products, which is exactly the kind of version most commercial projects standardize on. Adding HarmonyOS as an officially supported LTS platform is significant because it lets existing Qt/C++ codebases target Huawei's Android-free ecosystem without maintaining a separate, community-only port. The LTS designation means the release will receive bug fixes and security patches for five years rather than the shorter window of a standard Qt feature release. The one-line summary does not specify which HarmonyOS versions or toolchains are covered, and the stated release date of September 30, 2026 is inconsistent with the current date, so timing details should be verified against the official announcement.

telegram · zaihuapd · Oct 3, 04:52

**Background**: Qt is a cross-platform application development framework, maintained by Qt Group together with the open-source Qt Project, that lets developers write a single codebase for desktop, mobile and embedded systems while still producing native applications; it is offered under both commercial licenses and open-source GPL/LGPL terms. HarmonyOS is a distributed operating system developed by Huawei, and since version 5 (the former HarmonyOS NEXT) it has used Huawei's own microkernel and dropped Android compatibility, meaning it only runs native apps. LTS, or long-term support, is a product lifecycle policy in which a stable release is maintained with fixes for much longer than a normal release, which is why LTS versions matter most for enterprise and device deployments.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Qt_framework">Qt framework</a></li>
<li><a href="https://en.wikipedia.org/wiki/HarmonyOS">HarmonyOS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Long-term_support">Long - term support - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#Qt`, `#HarmonyOS`, `#LTS`, `#cross-platform`, `#software release`

---