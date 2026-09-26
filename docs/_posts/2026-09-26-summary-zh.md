---
layout: default
title: "Horizon Summary: 2026-09-26 (ZH)"
date: 2026-09-26
lang: zh
---

> 从 25 条内容中筛选出 3 条重要资讯。

---

1. [美国上诉法院维持五角大楼对 Anthropic 的供应链风险认定](#item-1) ⭐️ 9.0/10
2. [Go 团队提出平台无关 SIMD 实验性设计](#item-2) ⭐️ 8.0/10
3. [SemiAnalysis 推出中国数据中心模型，覆盖逾 1000 个 AI 基础设施](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [美国上诉法院维持五角大楼对 Anthropic 的供应链风险认定](https://www.cnbc.com/2026/09/25/pentagon-anthropic-ai-risk-appeals-court.html) ⭐️ 9.0/10

美国一家上诉法院维持了国防部对 Anthropic 的“供应链风险”认定，驳回了该公司试图推翻这一 2026 年 3 月决定的诉讼请求。该裁决使相关限制继续生效：美国军方以及为其工作的国防承包商都不得在业务中使用 Anthropic 的 AI 模型。 这是对美国政府在多大程度上能把一家本土 AI 供应商排除出国防供应链的一次标志性检验，也可能让其他 AI 公司不敢再对军方使用其技术附加条件。此事对每一家向政府出售产品的 AI 公司都影响重大，因为一旦被贴上“供应链风险”标签，失去的不只是直接的联邦订单，而是整个下游承包商生态。 该认定于 3 月发布，其效力并不局限于五角大楼本身，还禁止国防承包商在承接政府项目时使用 Anthropic 的模型；此外，Anthropic 在华盛顿特区还有一起诉讼待审，涉及另一项单独的供应链风险认定。这场争议的根源在于 Anthropic 拒绝让军方不受限制地使用其模型，包括用于监控和自主武器。

hackernews · cramer4next · 9月25日 15:29 · [社区讨论](https://news.ycombinator.com/item?id=49845977)

**背景**: “供应链风险”认定是美国政府的一种正式分类，最初是为了防范外国对手而设立的，一旦作出，就会限制各政府机构及其下游承包商向该供应商采购。Anthropic 是一家总部位于旧金山的 AI 安全与研究公司，采用公益性公司（public benefit corporation）架构，开发 Claude 系列模型，并一直以安全护栏作为自身定位。该公司起诉特朗普政府，要求撤销 3 月的认定，主张自己只是因为坚持对军方使用其 AI 加以限制而遭到惩罚。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/09/25/pentagon-anthropic-ai-risk-appeals-court.html">U . S . appeals court upholds Pentagon designation of Anthropic as...</a></li>
<li><a href="https://www.thesignal.press/the-government-just-picked-its-ai/">The Government Just Picked Its AI</a></li>
<li><a href="https://businesschief.com/news/anthropic-wins-lawsuit-after-us-deemed-it-a-security-risk">Anthropic Wins Lawsuit after US Deemed it a Security Risk</a></li>

</ul>
</details>

**社区讨论**: 评论区观点严重分化：一些人认为这几乎是程序性的必然结果——Anthropic 拒绝接受军方条件，五角大楼就干脆选择不附加任何条件的供应商；另一些人则警告，把原本用于防范外国对手的工具用在自家企业身上，开了一个危险的先例。多位评论者担心政治滥用，指出如果与共和党关系密切的承包商（如 Palantir）也能被这样针对，未来民主党政府同样可以反过来这么做。也有人质疑为何 OpenAI 受到不同对待，并表示要更换服务商；不过至少有一位评论者仍然困惑：五角大楼完全不用 Anthropic，不正是该公司想要的吗？

**标签**: `#AI policy`, `#national security`, `#Anthropic`, `#supply chain risk`, `#regulation`

---

<a id="item-2"></a>
## [Go 团队提出平台无关 SIMD 实验性设计](https://go.dev/blog/simd-experiment) ⭐️ 8.0/10

Go 团队在官方博客上发布了一项实验性设计，旨在为 Go 提供可移植、平台无关的 SIMD 能力，让开发者编写的向量化代码能够跨 CPU 架构编译，而不再依赖特定架构的 intrinsic 指令。该提案在 Hacker News 上引发热议，帖子获得 347 分、132 条评论，开发者们分享了基准测试结果和实现反馈。 Go 的标准库长期以来缺乏可移植的 SIMD 支持，对性能敏感的代码只能退回到汇编、cgo 或特定架构的 intrinsic 指令；一旦有了原生的可移植抽象，Go 就能更好地承载数值计算、多媒体和机器学习类负载。由于 SIMD 是图像、音频和神经网络处理背后的核心技术，这一能力有望把 Go 的适用范围扩展到长期由 C++、Rust 和 C 主导的领域。 社区基准测试显示，可移植 SIMD 比非可移植的架构特定 SIMD 大约慢 11%，但两者都比纯标量 Go 代码快约 5 倍。该设计的一个亮点是能够支持非固定宽度的向量指令集，例如 Arm SVE 和 RISC-V 向量扩展（RVV），这与大多数现有可移植 SIMD 库基于固定宽度的假设不同；目前该包仍处于实验阶段，尚未正式发布。

hackernews · yurivish · 9月25日 11:47 · [社区讨论](https://news.ycombinator.com/item?id=49843269)

**背景**: SIMD（单指令多数据）是一种并行计算技术，一条指令可同时作用于多个数据点——例如在几乎相当于做一次加法的时间内完成两批数字的相加，因此它被广泛用于图像、音频和科学计算负载。不同 CPU 指令集暴露 SIMD 的方式各不相同：x86 使用固定宽度的 AVX/SSE 向量，而 Arm SVE 和 RISC-V 向量扩展采用可在运行时确定长度的可伸缩向量，这使得设计一个统一的可移植抽象相当困难。Go 长期以来只能以有限的、架构特定的方式使用这些指令，而 C++ 目前也正在推进 std::simd 标准化，以支持类似的可移植数据并行编程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/SIMD">SIMD</a></li>
<li><a href="https://news.ycombinator.com/item?id=43784654">I write a lot of SIMD and I don't really agree with this.. *Flaw1:fixed width* I... | Hacker News</a></li>
<li><a href="https://docs.riscv.org/reference/isa/v20260120/unpriv/v-st-ext.html">30.1. "V" Standard Extension for Vector Operations, Version 1.0 - riscv.org</a></li>

</ul>
</details>

**社区讨论**: 评论区总体持积极态度：有开发者分享了一个在浏览器中运行的 WASM 换色基准测试，显示可移植 SIMD 比架构特定 SIMD 慢约 11%，但比非 SIMD 代码快约 5 倍；另一位评论者则称赞这是首个让 SVE、RISC-V V 等非固定宽度向量更易支持的可移植 SIMD 方案。还有人将其与 C++ 的 std::simd 作对比，乐见标准库层面的 SIMD 支持而非手写 intrinsic，并提到在使用 CGO_ENABLED=0 构建的 Go 原生语音识别与语音合成模型中获得了可感知的性能提升。

**标签**: `#Go`, `#SIMD`, `#Performance Optimization`, `#Compilers`, `#Portability`

---

<a id="item-3"></a>
## [SemiAnalysis 推出中国数据中心模型，覆盖逾 1000 个 AI 基础设施](https://newsletter.semianalysis.com/p/the-chinese-ai-infrastructure-boom) ⭐️ 8.0/10

SemiAnalysis 在其通讯文章中推出了一个“中国数据中心模型”，梳理了由 60 多家运营商建设的 1000 多个 AI 基础设施设施。该模型还揭示了超大规模云厂商的租赁格局：最大的超大规模厂商租用了全国约五分之一的容量，另有一个园区在 12 个月内新增了 100MW 的容量。 中国 AI 数据中心的建设规模一直难以被外界量化，因此一份设施级别的数据集让芯片厂商、云服务商和投资者能够具体追踪真实容量与租赁需求。这也表明，如今真正重塑中国数据中心经济格局的主要动力是 AI 负载，而非最初的云与零售托管业务。 报告指出，中国的数据中心体系最初以零售托管为主，随后被 AI 需求“翻转”改造，并将这轮扩张与国家主导的“东数西算”工程联系起来。由于这些数字来自 SemiAnalysis 自行汇总与建模，而非官方披露，其容量与租赁估算应被视为有依据的近似值。

rss · Semianalysis · 9月25日 15:58

**背景**: “东数西算”（EDWC）是北京于 2022 年 2 月启动的国家级超级工程，旨在把中国东部发达地区的算力需求转移到西部农村省份，那里拥有丰富的可再生能源和更低的平均气温；该项目头两年投入约 435 亿元人民币（约 61 亿美元）。所谓“超大规模云厂商”（hyperscaler）是指规模极其庞大的云服务提供商，例如阿里巴巴、腾讯、谷歌或亚马逊，它们能够随需求增长近乎无缝地扩充计算、存储和网络容量。SemiAnalysis 是一份以供应链与半导体深度研究闻名的行业分析通讯。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hyperscaler">Hyperscaler</a></li>
<li><a href="https://www.tomshardware.com/tech-industry/china-invested-dollar61-billion-in-a-state-data-center-project-in-two-years-the-eastern-data-western-computing-project-aims-to-utilize-the-countrys-undeveloped-land">China invested $6.1 billion in a state data center... | Tom's Hardware</a></li>
<li><a href="https://icds.ee/en/more-than-meets-the-ai-chinas-data-centre-strategy/?trk=article-ssr-frontend-pulse_little-text-block">More Than Meets the AI: China’s Data Centre Strategy - International...</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#China`, `#datacenters`, `#hyperscalers`, `#SemiAnalysis`

---