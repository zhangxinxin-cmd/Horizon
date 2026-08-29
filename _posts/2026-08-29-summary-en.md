---
layout: default
title: "Horizon Summary: 2026-08-29 (EN)"
date: 2026-08-29
lang: en
---

> From 23 items, 2 important content pieces were selected

---

1. [Simple 100-Year-Old SPC Algorithm Beats SOTA on TSB-AD Benchmark](#item-1) ⭐️ 8.0/10
2. [OpenAI Ends Cursor Model Supply After SpaceX Acquisition](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Simple 100-Year-Old SPC Algorithm Beats SOTA on TSB-AD Benchmark](https://www.reddit.com/r/MachineLearning/comments/1w1wt1s/you_can_beat_sota_time_series_anomaly_detection/) ⭐️ 8.0/10

In a Reddit post, Eamonn Keogh demonstrates that a simple Statistical Process Control (SPC) method, roughly a century old, outperforms state-of-the-art time series anomaly detection algorithms on the TSB-AD benchmark, in some cases achieving perfect results. He argues the benchmark is too trivial to support meaningful claims of progress. This critique challenges the credibility of TSB-AD, a widely used benchmark in NeurIPS, SIGKDD, and VLDB papers, suggesting many reported SOTA improvements may be illusory. It calls on the community to introspect and build more challenging evaluation sets, potentially reshaping how TSAD progress is measured. The post includes slides and a YouTube video showing an ECG trace where SPC achieves perfect results, and notes that many 'TAO' traces are even easier to solve with SPC. Keogh also says he has done most of the work to introduce harder TSAD problems, such as sled dogs, Tuna, and fuel cells, while explicitly not making claims about the proposed algorithms themselves.

reddit · r/MachineLearning · /u/eamonnkeogh · Aug 29, 20:16

**Background**: TSB-AD is a comprehensive time series anomaly detection benchmark developed by TheDatumOrg, containing many datasets with labeled anomalies. Statistical Process Control (SPC) is a classic industrial monitoring method based on control charts and process stability, dating back to the 1920s. Previous work, such as 'Current Time Series Anomaly Detection Benchmarks are Flawed and are Creating the Illusion of Progress' (TKDE 2021), has already criticized such benchmarks for triviality and bias, so this post continues a known line of critique.

<details><summary>References</summary>
<ul>
<li><a href="https://thedatumorg.github.io/TSB-AD/">TSB - AD</a></li>
<li><a href="https://en.wikipedia.org/wiki/Statistical_process_control">Statistical process control - Wikipedia</a></li>
<li><a href="https://github.com/zamanzadeh/ts-anomaly-benchmark">GitHub - zamanzadeh/ts-anomaly-benchmark: Time-Series Anomaly Detection Comprehensive Benchmark · GitHub</a></li>

</ul>
</details>

**Tags**: `#time series anomaly detection`, `#benchmark evaluation`, `#statistical process control`, `#research critique`

---

<a id="item-2"></a>
## [OpenAI Ends Cursor Model Supply After SpaceX Acquisition](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/) ⭐️ 8.0/10

OpenAI announced it will terminate its contract to provide OpenAI models through Cursor, with a suggested service termination date of November 12, 2026. The company cited an inability to trust SpaceX to comply with its terms of service, given a history of violations by Elon Musk's companies. This decision highlights the deepening rift between OpenAI and Elon Musk's business empire, with ripple effects across the AI coding tool ecosystem. Cursor users and developers relying on OpenAI models through the editor may face disruptions, and the move signals how change-of-control clauses can shape AI partnerships. OpenAI cited specific violations: Musk's companies allegedly breached contracts after acquiring Twitter, and xAI admitted under oath earlier this year to violating OpenAI's terms of service. The custom agreement with Cursor permits OpenAI to cancel following a change of control, with the company exercising the maximum allowed notice period.

telegram · zaihuapd · Aug 29, 02:24

**Background**: Cursor is an AI-powered code editor and coding agent built on a fork of Visual Studio Code, and it has become a widely used tool for developers. SpaceX recently acquired Cursor, and its AI subsidiary xAI (now SpaceXAI) focuses on AI research and products like Grok. OpenAI's concerns about compliance stem from past behavior by Musk's companies, creating a trust issue that led to the termination.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>
<li><a href="https://en.wikipedia.org/wiki/SpaceXAI">SpaceXAI - Wikipedia</a></li>
<li><a href="https://builtin.com/artificial-intelligence/what-is-xai">What Is xAI? The Company Behind Grok | Built In</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#Cursor`, `#SpaceX`, `#AI`, `#Business`

---