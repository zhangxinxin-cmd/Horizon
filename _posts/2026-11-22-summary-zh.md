---
layout: default
title: "Horizon Summary: 2026-11-22 (ZH)"
date: 2026-11-22
lang: zh
---

> 从 23 条内容中筛选出 3 条重要资讯。

---

1. [Anthropic 数学家称借助 Claude 用 Lean 证明黎曼猜想](#item-1) ⭐️ 9.0/10
2. [浙大首次在真机上实现量子随机存储器 QRAM](#item-2) ⭐️ 9.0/10
3. [GnuPG 的 GPGME 存在双重释放漏洞，被标为 RCE 且波及大量下游软件](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic 数学家称借助 Claude 用 Lean 证明黎曼猜想](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 9.0/10

11 月 20 日，Anthropic 的数学家 Levent Alpöge 声称他借助 Claude 证明了黎曼猜想，并进一步覆盖了更广泛的广义黎曼猜想；相关证明已用可机器检验的证明助手 Lean 编码发布，据称证明文稿超过 25 万页。 如果该形式化成果经得起检验，它将解决黎曼于 1859 年提出的数学界最著名的未解难题，同时也将成为 AI 辅助形式化能够扩展到现代数学庞大体系（而非零散引理）的标志性案例。 该主张的可信度依赖于 Lean 小而可信的内核；社区成员指出，目前已有多个各自带有一致性证明的独立内核，因此要让结论为假，需要所有内核同时存在缺陷、并同时影响一致性证明与黎曼猜想证明本身。但该主张尚未经过独立验证，且过去确实有一次针对考拉兹猜想的伪造反证骗过了某个独立检验器。

hackernews · g-b-r · 11月21日 14:36 · [社区讨论](https://news.ycombinator.com/item?id=50589618)

**背景**: Lean 是一个开源证明助手兼函数式编程语言，基于依赖类型论：数学命题被写成类型，证明被写成程序，由内核机械地检验。此类形式化验证此前已用于经过验证的编译器和操作系统内核，AI 辅助形式化近来也被用于庞加莱猜想、费马大定理等结果。黎曼猜想提出于 1859 年，断言黎曼 ζ 函数的非平凡零点全部位于同一条临界线上，这将精确刻画素数分布规律；广义黎曼猜想则把同一断言推广到更广的一类 L 函数。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Formal_verification">Formal verification</a></li>
<li><a href="https://www.anthropic.com/research/formalizing-fermats-last-theorem">Formalizing Fermat's Last Theorem \ Anthropic</a></li>

</ul>
</details>

**社区讨论**: 多数评论者认为，在多个独立内核并存的情况下，靠漏洞蒙混过关的证明可能性微乎其微；但怀疑者举出过去伪造的考拉兹猜想反证曾骗过某个独立检验器的例子，并强调此次流程中有人类专家把关。也有人把功劳归于 Levent Alpöge 本人善于发掘 Claude 的潜力，并认为真正的亮点在于大量现代数学内容被整体形式化了。

**标签**: `#formal-verification`, `#lean`, `#riemann-hypothesis`, `#mathematics`, `#ai-assisted-proofs`

---

<a id="item-2"></a>
## [浙大首次在真机上实现量子随机存储器 QRAM](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 9.0/10

浙江大学团队在自主制备的超导量子芯片“天目 2 号”上，首次在真机上运行了量子随机存储器（QRAM）原型，成功调取 4 位和 8 位数据，准确率分别为 80.9%和 60.4%，相关成果发表于《自然·物理》。 真机 QRAM 有望为量子机器学习、量子数据库搜索等算法提供所依赖的高速量子内存访问能力，并使量子计算竞争从单纯增加量子比特数转向解决数据读出瓶颈。不过，目前准确率仍偏低，距离实用化的大规模 QRAM 还有很长的路。 该原型的线路深度较未优化方案降低 30%以上，并首次实验验证了该架构具有局部抗噪特性；但 8 位数据调取准确率仅 60.4%，说明当前演示仍处于早期阶段，尚未达到容错或大规模扩展所需的水平。

telegram · zaihuapd · 11月21日 08:31

**背景**: 量子随机存储器（QRAM）是经典随机存储器的量子对应物，它允许量子计算机以叠加态地址查询内存，从而为量子机器学习、量子数据库搜索等算法提供数据访问能力。QRAM 的实现难点在于路由线路会随存储规模增长且容易引入错误。此次使用的“天目 2 号”是一块超导量子芯片，通过微波脉冲操控超导量子比特，需要在极低温环境下运行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.mydrivers.com/1/1167/1167501.htm">news.mydrivers.com/1/1167/1167501.htm</a></li>
<li><a href="https://m.36kr.com/p/3442425912333703">我国超导量子芯片新突破：“天目2号”百比特芯片实证“热”拓扑边缘态-36...</a></li>
<li><a href="https://arxiv.org/pdf/2012.05340">Resilience of quantum random access memory to generic noise</a></li>

</ul>
</details>

**标签**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#quantum hardware`, `#Nature Physics`

---

<a id="item-3"></a>
## [GnuPG 的 GPGME 存在双重释放漏洞，被标为 RCE 且波及大量下游软件](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) ⭐️ 8.0/10

GnuPG 项目发布安全公告，披露 GPGME 2.3.0 之前所有版本中存在一个双重释放（double free）漏洞，问题出在解析 GnuPG 返回的状态行和密钥列表的 read_status() 与 read_colon_line() 两个函数中。该漏洞由 Johan Carlsson 发现，并通过 GitLab 于 2026-11-12 通报给 GPGME 维护者；原定于 2026-11-25 的协同披露因 GitLab 需要为另一个 Ruby2Shell 问题提前发版，而被提前到 2026-11-20。 GPGME 是大多数应用程序与 GnuPG 交互时使用的 C 语言库，因此影响范围涵盖邮件客户端、XMPP 客户端、Samba、Flatpak、Gpg4win/GnuPG Desktop 以及 GitLab 的签名提交路径，任何以静态或动态方式链接旧版 GPGME 的软件都需要重新构建。由于公告指出该漏洞可被用于窃取应用数据、且无法排除远程代码执行的可能，管理员被建议立即更新，而不是等待漏洞利用代码公开。 公告将该漏洞描述为双重释放，攻击者可通过向应用投递签名数据等方式利用它窃取应用中的数据，并称虽然未展示完整的利用链，但“不能排除”发起远程代码执行攻击的可能性。值得注意的是，有评论者指出 Red Hat 大约五年前就依据常规工具的输出在下游修复了这一缺陷，而上游项目却一直遗漏了它。

hackernews · gdgghhhhh · 11月21日 08:32 · [社区讨论](https://news.ycombinator.com/item?id=50587208)

**背景**: GPGME 全称 “GnuPG Made Easy”，是一个 C 语言库，让程序能够通过驱动 GnuPG 等加密引擎来获得公钥加密能力，而不必自己去调用 gpg 可执行文件。双重释放（CWE-415）是一种内存安全缺陷：同一块堆内存被释放两次，破坏分配器的内部簿记，可能让攻击者操控后续的内存分配或写入；这类问题是用手工管理内存的 C/C++ 代码的典型风险。由于 GPGME 处在应用程序与 GnuPG 之间，其解析函数中的缺陷可能被来自应用外部的数据触发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html">[Announce] GnuPG Security Advisory for GPGME ...</a></li>
<li><a href="https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html">GnuPG Warns Critical GPGME Flaw Could Expose App Data via...</a></li>
<li><a href="https://www.phoronix.com/news/GnuPG-GPGME-Critical">GnuPG's GPGME Affected By Critical Security Bug In Turn... - Phoronix</a></li>

</ul>
</details>

**社区讨论**: 评论者对这一定性提出质疑：有人直言这“是一个双重释放缺陷，而不是一条 RCE 利用链”，并追问此类报告是否有意夸大；也有人指出 Red Hat 大约五年前就在下游修复了它，只是上游漏掉了。一位参与披露过程的开发者分享了时间线和 GitLab Omnibus 的补丁，强调在 GitLab 的签名提交路径上实现代码执行会尤其严重；其他人则列举了受影响的软件（邮件客户端、XMPP 客户端、Samba、Flatpak、Gpg4win），并询问 apt 这类打包工具是否受影响。讨论中也不乏熟悉的老观点：人类不该在没有 Rust 级别工具保障的情况下编写 C/C++，否则这类缺陷难以避免。

**标签**: `#security`, `#vulnerability`, `#gnupg`, `#memory-safety`, `#open-source`

---