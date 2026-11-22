# Horizon Daily - 2026-11-22

> From 23 items, 3 important content pieces were selected

---

1. [Anthropic mathematician claims Claude proved the Riemann Hypothesis in Lean](#item-1) ⭐️ 9.0/10
2. [Zhejiang University Demonstrates First Real-Hardware QRAM on Superconducting Chip](#item-2) ⭐️ 9.0/10
3. [GPGME Double-Free Flaw in GnuPG Labeled RCE, Wide Downstream Impact](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic mathematician claims Claude proved the Riemann Hypothesis in Lean](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 9.0/10

On November 20, Levent Alpöge, a mathematician at Anthropic, claimed that he used Claude to prove the Riemann Hypothesis — and additionally the broader Generalized Riemann Hypothesis — and published the proof encoded in Lean, the machine-checkable proof assistant, with a written manuscript reported to exceed 250,000 pages. If the formalization holds up, it would resolve the most famous open problem in mathematics, posed by Riemann in 1859, and would simultaneously be a landmark demonstration that AI-assisted formalization can scale to enormous bodies of modern mathematics rather than isolated lemmas. The claim rests on Lean's small trusted kernel, and community members note that several independent kernels with their own consistency proofs now exist, so a false result would require a bug affecting all of them plus the human-overseen proof; nonetheless, the claim has not been independently validated, and a fake refutation of the Collatz conjecture once slipped past an independent checker.

hackernews · g-b-r · Nov 21, 14:36 · [Discussion](https://news.ycombinator.com/item?id=50589618)

**Background**: Lean is an open-source proof assistant and functional programming language, based on dependent type theory, in which mathematical statements are written as types and proofs as programs that the kernel mechanically checks. Formal verification of this kind is already used for certified compilers and verified operating-system kernels, and AI-assisted formalization has recently been applied to results such as the Poincaré conjecture and Fermat's Last Theorem. The Riemann Hypothesis, stated in 1859, predicts that the non-trivial zeros of the Riemann zeta function all lie on a single critical line, which would pin down the distribution of prime numbers; the Generalized Riemann Hypothesis extends the same claim to a wider family of L-functions.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Formal_verification">Formal verification</a></li>
<li><a href="https://www.anthropic.com/research/formalizing-fermats-last-theorem">Formalizing Fermat's Last Theorem \ Anthropic</a></li>

</ul>
</details>

**Discussion**: Commenters largely see a bug-exploiting proof as vanishingly unlikely given multiple independent kernels, but skeptics point to a past fake Collatz refutation that passed an independent checker and stress that a human expert was in the loop here. Others credit Levent Alpöge personally for getting so much out of Claude, and argue the real headline is that a huge chunk of modern mathematics was formalized at all.

**Tags**: `#formal-verification`, `#lean`, `#riemann-hypothesis`, `#mathematics`, `#ai-assisted-proofs`

---

<a id="item-2"></a>
## [Zhejiang University Demonstrates First Real-Hardware QRAM on Superconducting Chip](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 9.0/10

Zhejiang University researchers report the first real-hardware demonstration of a quantum random access memory (QRAM) prototype on their self-fabricated superconducting chip Tianmu-2, retrieving 4-bit and 8-bit data with 80.9% and 60.4% accuracy, respectively, with results published in Nature Physics. A working QRAM could provide the fast quantum memory access assumed by algorithms such as quantum machine learning and quantum database search, and it shifts attention from merely adding qubits toward solving the data-readout bottleneck. However, the moderate fidelities mean practical, large-scale QRAM remains a long-term goal. The prototype’s circuit depth was reduced by more than 30% compared with an unoptimized version, and the team reports the first experimental evidence that the architecture has local noise resilience. Still, 60.4% accuracy for 8-bit retrieval is moderate and far from fault-tolerant or large-scale operation.

telegram · zaihuapd · Nov 21, 08:31

**Background**: QRAM is the quantum counterpart of classical random access memory: it lets a quantum computer query memory addresses in superposition, a capability assumed by algorithms such as quantum machine learning and quantum database search. Building QRAM is difficult because the routing circuitry grows with memory size and is highly error-prone. Tianmu-2 is a superconducting quantum chip, in which qubits are controlled with microwave pulses at cryogenic temperatures.

<details><summary>References</summary>
<ul>
<li><a href="https://news.mydrivers.com/1/1167/1167501.htm">news.mydrivers.com/1/1167/1167501.htm</a></li>
<li><a href="https://m.36kr.com/p/3442425912333703">我国超导量子芯片新突破：“天目2号”百比特芯片实证“热”拓扑边缘态-36...</a></li>
<li><a href="https://arxiv.org/pdf/2012.05340">Resilience of quantum random access memory to generic noise</a></li>

</ul>
</details>

**Tags**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#quantum hardware`, `#Nature Physics`

---

<a id="item-3"></a>
## [GPGME Double-Free Flaw in GnuPG Labeled RCE, Wide Downstream Impact](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) ⭐️ 8.0/10

The GnuPG project published a security advisory for a double-free vulnerability in GPGME affecting all versions prior to 2.3.0, located in the read_status() and read_colon_line() routines that parse status lines and key listings returned by GnuPG. The bug was discovered by Johan Carlsson and reported to the GPGME maintainers via GitLab on 2026-11-12; a coordinated disclosure originally planned for 2026-11-25 was moved up to 2026-11-20 because GitLab had to ship updates earlier for the separate Ruby2Shell issue. GPGME is the C library that most applications use to talk to GnuPG, so the blast radius covers mail clients, XMPP clients, Samba, Flatpak, Gpg4win/GnuPG Desktop, and GitLab's signed-commit path, meaning anything statically or dynamically linking an older GPGME needs rebuilding. Because the advisory states the flaw can exfiltrate application data and cannot rule out remote code execution, administrators are being urged to update immediately rather than wait for a proof-of-concept. The advisory describes the bug as a double free that can be exploited to exfiltrate data from applications, for example by feeding them signed data, and says an RCE attack "can't be ruled out" even though no full exploit chain is demonstrated. Notably, a commenter points out that Red Hat apparently patched this same defect downstream around five years ago based on conventional tooling output, while the upstream project missed it.

hackernews · gdgghhhhh · Nov 21, 08:32 · [Discussion](https://news.ycombinator.com/item?id=50587208)

**Background**: GPGME, short for "GnuPG Made Easy", is a C language library that lets programs add public-key cryptography support by driving crypto engines such as GnuPG, rather than shelling out to the gpg binary themselves. A double free (CWE-415) is a memory-safety flaw where the same heap allocation is released twice, corrupting the allocator's internal bookkeeping and potentially letting an attacker steer future allocations or writes; such bugs are a classic hazard of manually managed C/C++ code. Because GPGME sits between an application and GnuPG, a flaw in its parsing routines can be triggered by data that arrives from outside the application.

<details><summary>References</summary>
<ul>
<li><a href="https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html">[Announce] GnuPG Security Advisory for GPGME ...</a></li>
<li><a href="https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html">GnuPG Warns Critical GPGME Flaw Could Expose App Data via...</a></li>
<li><a href="https://www.phoronix.com/news/GnuPG-GPGME-Critical">GnuPG's GPGME Affected By Critical Security Bug In Turn... - Phoronix</a></li>

</ul>
</details>

**Discussion**: Commenters pushed back on the framing: one argued bluntly that this is "a double free bug, not an RCE chain" and asked whether such reports are intentionally overstated, while another noted that Red Hat had fixed it downstream roughly five years earlier and upstream simply missed it. A participant involved in the disclosure shared the timeline and the GitLab Omnibus patch, stressing that code execution in GitLab's signed-commit path would be especially serious, and others enumerated affected software (mail clients, XMPP clients, Samba, Flatpak, Gpg4win) and questioned whether packaging tools like apt are affected. The thread also featured the familiar argument that humans should not be writing C/C++ without Rust-level tooling to prevent these classes of bugs.

**Tags**: `#security`, `#vulnerability`, `#gnupg`, `#memory-safety`, `#open-source`

---

