# Horizon Daily - 2026-11-28

> From 28 items, 3 important content pieces were selected

---

1. [CVE-2026-99362: Pre-Auth Linux nfsd Flaw Allows Unauthenticated Root](#item-1) ⭐️ 9.0/10
2. [WebRTC-Based Card Skimmer Hits Five Popular Shopping Sites Before Black Friday](#item-2) ⭐️ 8.0/10
3. [SemiAnalysis: AWS Trainium3 Beats NVIDIA GB300 on Inference TCO](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [CVE-2026-99362: Pre-Auth Linux nfsd Flaw Allows Unauthenticated Root](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 9.0/10

OpenSec disclosed CVE-2026-99362, a CVSS 9.8 pre-authentication heap overflow in the Linux kernel NFS server (nfsd) that lets an unauthenticated attacker send a single connection to tcp/2049 and overwrite kernel heap memory to obtain root. Because nfsd is widely used on file servers, NAS devices, and cluster storage nodes, this pre-auth root flaw is remotely exploitable with no credentials; it affects systems running NFSv4.1 or 4.2 since Linux 3.16, making patching or blocking tcp/2049 urgent. Fixes are available in Linux 6.12.117, 6.18.61, 7.3.2, and 7.4-rc1 and require a kernel upgrade plus reboot; organizations that cannot upgrade immediately should restrict tcp/2049 access at the firewall. The CVE was publicly disclosed on November 20, 2026.

telegram · zaihuapd · Nov 27, 12:57

**Background**: NFS is a widely used network file system protocol; on Linux, the server side is implemented by nfsd, a kernel-space component that listens on tcp/2049 and serves exported file systems to clients. NFSv4.1 and NFSv4.2 are recent protocol versions that add features such as sessions and parallel NFS, and they are common on NAS and cluster storage. A pre-auth heap overflow means the bug is reachable before authentication completes, so an attacker does not need valid credentials to trigger memory corruption in kernel space; successful exploitation can lead to root because kernel compromise bypasses user-space privilege boundaries.

<details><summary>References</summary>
<ul>
<li><a href="https://manpages.debian.org/experimental/nfs-kernel-server/nfsd.8.en.html">nfsd (8) — nfs - kernel - server — Debian... — Debian Manpages</a></li>
<li><a href="https://wiki.archlinux.org/title/NFS">NFS - ArchWiki</a></li>
<li><a href="https://deepwiki.com/songtao-vip/linux-fs/4.1-nfs-server-implementation">NFS Server Implementation | songtao-vip/ linux -fs | DeepWiki</a></li>

</ul>
</details>

**Tags**: `#Linux kernel`, `#NFS`, `#CVE`, `#remote exploit`, `#security vulnerability`

---

<a id="item-2"></a>
## [WebRTC-Based Card Skimmer Hits Five Popular Shopping Sites Before Black Friday](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 8.0/10

A credit card skimming script was planted in the online stores of Lascana, Samsonite, American Tourister, Revolve and FWRD in the week before Black Friday, exfiltrating stolen card details over a WebRTC data channel. All five sites took action after being contacted by researchers, but the report warns the wider e-commerce ecosystem needs to be prepared for this attack vector. Because WebRTC traffic is not visible to Content Security Policy and is rarely inspected by security tooling, this shows a supply-chain gap in how merchants monitor third-party scripts on checkout pages. Any retailer embedding external scripts — analytics, tag managers, A/B testing tools — could be exposed to similar card-theft campaigns timed around peak shopping seasons. According to follow-up analyses, the skimmer sent stolen card data over a WebRTC data channel that a Content Security Policy cannot see, and the campaign appeared to target mobile devices because they are harder to detect. Researchers note the same exfiltration could be achieved with plain HTTP requests — WebRTC is simply less frequently monitored for abuse, and the root exposure remains third-party script inclusion.

hackernews · scanr · Nov 27, 15:40 · [Discussion](https://news.ycombinator.com/item?id=50668145)

**Background**: Card skimming on the web works like a physical ATM skimmer: malicious JavaScript injected into a checkout page reads what shoppers type into payment forms and forwards it to attackers. WebRTC is a browser standard for real-time peer-to-peer audio, video and data communication, and its data channels let two browsers exchange arbitrary bytes without going through ordinary HTTP request flows. Content Security Policy (CSP) is a browser mechanism sites use to whitelist which scripts and network destinations are allowed, which is why attackers seek channels it does not cover.

<details><summary>References</summary>
<ul>
<li><a href="https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer">Credit card skimming scripts using WebRTC found on popular ...</a></li>
<li><a href="https://dev.to/frankchu/webrtc-stole-cards-at-5-stores-i-re-checked-the-cleanup-59k9">WebRTC stole cards at 5 stores — I re-checked the cleanup</a></li>
<li><a href="https://daily.dev/posts/credit-card-skimming-scripts-using-webrtc-found-on-popular-shopping-sites-mr8zgdbaf">Credit card skimming scripts using WebRTC found on popular ...</a></li>

</ul>
</details>

**Discussion**: Commenters were largely unsurprised but emphatic: one argued this justifies ad and script blocking without guilt, while another stressed the root problem is third-party script embedding rather than WebRTC itself. A shopper reported their card being blocked and replaced by their bank after a Black Friday purchase at a European site, and others questioned why browsers make WebRTC impossible to disable per-site and criticized the web's model of running strangers' code on user machines.

**Tags**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-3"></a>
## [SemiAnalysis: AWS Trainium3 Beats NVIDIA GB300 on Inference TCO](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 8.0/10

SemiAnalysis published a deep dive on AWS Trainium3 inference performance and microarchitecture, reporting better performance TCO than NVIDIA GB300 along with high MFU and MBU and results from its custom UBenchX benchmark. If AWS's custom silicon can deliver better inference cost-efficiency than NVIDIA's flagship GB300, it could make Trainium a credible alternative for cloud inference workloads and put pressure on NVIDIA's pricing and share in AI infrastructure. The analysis uses first-principles physics-based architecture modeling and a custom UBenchX benchmark with a focus on low latency, but the excerpt provides no raw throughput, latency, or TCO figures for independent verification; AWS has said Trainium3 is built on 3nm and delivers roughly twice the compute and 40% better energy efficiency than Trainium2.

rss · Semianalysis · Nov 27, 15:54

**Background**: AWS Trainium is Amazon's custom AI accelerator line, designed by its Annapurna Labs chip division, and Trainium3 is the third-generation part aimed at training and inference in AWS data centers. NVIDIA GB300 is part of the Blackwell Ultra GPU family, offered in rack-scale systems such as GB300 NVL72 with 288GB of HBM3e memory per GPU. In AI hardware analysis, MFU (model FLOPs utilization) and MBU (model bandwidth utilization) measure how efficiently a workload uses compute and memory bandwidth, while TCO compares total cost of ownership including hardware, power, and operations.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AWS_Trainium">AWS Trainium</a></li>
<li><a href="https://technews.tw/2024/12/05/aws-trainium3-ai-chip-powered-by-3-nanometers/">3 奈米加持 AWS Trainium 3 AI... | TechNews 科技新報</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/gb300-nvl72/">NVIDIA GB300 NVL72</a></li>

</ul>
</details>

**Tags**: `#AWS Trainium3`, `#AI accelerators`, `#inference`, `#microarchitecture`, `#hardware TCO`

---

