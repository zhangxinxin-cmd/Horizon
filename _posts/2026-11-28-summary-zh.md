---
layout: default
title: "Horizon Summary: 2026-11-28 (ZH)"
date: 2026-11-28
lang: zh
---

> 从 28 条内容中筛选出 3 条重要资讯。

---

1. [OpenSec 披露 Linux 内核 NFS 服务器 9.8 分预认证漏洞](#item-1) ⭐️ 9.0/10
2. [黑色星期五前，基于 WebRTC 的盗卡脚本入侵五家知名购物网站](#item-2) ⭐️ 8.0/10
3. [SemiAnalysis：AWS Trainium3 推理 TCO 优于 NVIDIA GB300](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenSec 披露 Linux 内核 NFS 服务器 9.8 分预认证漏洞](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 9.0/10

OpenSec 披露了 CVE-2026-99362：Linux 内核 NFS 服务器 nfsd 中的一个 CVSS 9.8 预认证堆溢出漏洞，攻击者无需登录，仅需向 tcp/2049 发起一条连接即可越界写入内核堆并获取 root 权限。 由于 nfsd 广泛用于文件服务器、NAS 设备和集群存储节点，这个预认证 root 漏洞无需任何凭据即可远程利用；它影响自 Linux 3.16 起启用 NFSv4.1 或 4.2 的系统，因此升级补丁或限制 tcp/2049 访问十分紧迫。 修复已在 Linux 6.12.117、6.18.61、7.3.2 和 7.4-rc1 中提供，需要升级内核并重启；无法立即升级的组织应通过防火墙限制 tcp/2049 访问。该 CVE 于 2026 年 11 月 20 日公开。

telegram · zaihuapd · 11月27日 12:57

**背景**: NFS 是一种广泛使用的网络文件系统协议；在 Linux 上，服务器端由 nfsd 实现，它是内核空间的组件，监听 tcp/2049 并向客户端提供导出的文件系统。NFSv4.1 和 NFSv4.2 是较新的协议版本，增加了会话、并行 NFS 等特性，常见于 NAS 和集群存储。预认证堆溢出意味着漏洞在认证完成前即可触发，因此攻击者不需要有效凭据就能在内核空间造成内存破坏；一旦利用成功，由于内核被攻陷可绕过用户空间权限边界，攻击者便能获得 root 权限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://manpages.debian.org/experimental/nfs-kernel-server/nfsd.8.en.html">nfsd (8) — nfs - kernel - server — Debian... — Debian Manpages</a></li>
<li><a href="https://wiki.archlinux.org/title/NFS">NFS - ArchWiki</a></li>
<li><a href="https://deepwiki.com/songtao-vip/linux-fs/4.1-nfs-server-implementation">NFS Server Implementation | songtao-vip/ linux -fs | DeepWiki</a></li>

</ul>
</details>

**标签**: `#Linux kernel`, `#NFS`, `#CVE`, `#remote exploit`, `#security vulnerability`

---

<a id="item-2"></a>
## [黑色星期五前，基于 WebRTC 的盗卡脚本入侵五家知名购物网站](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 8.0/10

在黑色星期五前一周，Lascana、Samsonite、American Tourister、Revolve 和 FWRD 五家在线商店的结账页面被植入信用卡盗刷脚本，窃取的银行卡信息通过 WebRTC 数据通道外传。研究人员联系后，五家网站均已采取处置措施，但报告警告整个电商生态都需要为这类攻击手法做好准备。 由于 WebRTC 流量不受内容安全策略（CSP）约束，也极少被安全工具检测，这暴露了商家在监控结账页第三方脚本方面的供应链盲区。任何嵌入外部脚本（分析、标签管理器、A/B 测试工具）的零售商，都可能在购物旺季遭遇类似的盗卡攻击。 根据后续分析，该盗刷脚本通过 CSP 无法监控的 WebRTC 数据通道外传数据，并且攻击似乎专门针对移动设备，因为移动端更难被发现。研究人员指出，同样的数据外传用普通 HTTP 请求也能实现——WebRTC 只是较少被监控滥用行为，真正的风险根源仍是第三方脚本的引入。

hackernews · scanr · 11月27日 15:40 · [社区讨论](https://news.ycombinator.com/item?id=50668145)

**背景**: 网页上的“盗卡”（skimming）类似于现实中的 ATM 侧录器：注入结账页面的恶意 JavaScript 会读取用户在支付表单中输入的内容，并将其转发给攻击者。WebRTC 是一项用于浏览器间实时点对点音频、视频和数据通信的标准，其数据通道可让两个浏览器在不经过常规 HTTP 请求流程的情况下交换任意字节。内容安全策略（CSP）是网站用来限制允许加载哪些脚本和连接哪些网络目标的浏览器机制，正因如此，攻击者会寻找 CSP 覆盖不到的通道。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer">Credit card skimming scripts using WebRTC found on popular ...</a></li>
<li><a href="https://dev.to/frankchu/webrtc-stole-cards-at-5-stores-i-re-checked-the-cleanup-59k9">WebRTC stole cards at 5 stores — I re-checked the cleanup</a></li>
<li><a href="https://daily.dev/posts/credit-card-skimming-scripts-using-webrtc-found-on-popular-shopping-sites-mr8zgdbaf">Credit card skimming scripts using WebRTC found on popular ...</a></li>

</ul>
</details>

**社区讨论**: 评论者大多并不意外但态度鲜明：有人认为这正是不必为屏蔽广告和脚本感到愧疚的理由，另一位则强调根本问题在于嵌入第三方脚本，而非 WebRTC 本身。一位用户表示自己在黑五期间于某欧洲网站购物后，银行卡立即被银行冻结并更换；还有人质疑浏览器为何让 WebRTC 无法按站点禁用，并批评 Web 允许陌生代码在用户机器上运行的设计模式。

**标签**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-3"></a>
## [SemiAnalysis：AWS Trainium3 推理 TCO 优于 NVIDIA GB300](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 8.0/10

SemiAnalysis 发布了对 AWS Trainium3 推理性能和微架构的深度分析，称其性能 TCO 优于 NVIDIA GB300，并展示了较高的 MFU、MBU 以及自研 UBenchX 基准测试结果。 如果 AWS 的自研芯片能在推理成本效率上优于 NVIDIA 旗舰 GB300，Trainium 将成为云推理工作负载的可行替代方案，并对 NVIDIA 在 AI 基础设施中的定价和份额形成压力。 该分析采用基于第一性原理的物理架构建模和自研 UBenchX 基准测试，并重点关注低延迟，但摘要未给出可独立验证的原始吞吐、延迟或 TCO 数据；AWS 曾表示 Trainium3 采用 3nm 制程，算力约为 Trainium2 的两倍，能效提升 40%。

rss · Semianalysis · 11月27日 15:54

**背景**: AWS Trainium 是亚马逊旗下 Annapurna Labs 设计的自研 AI 加速器产品线，Trainium3 是第三代产品，面向 AWS 数据中心中的训练和推理任务。NVIDIA GB300 属于 Blackwell Ultra GPU 系列，以 GB300 NVL72 等机架级系统形式提供，每颗 GPU 配备 288GB HBM3e 内存。在 AI 硬件分析中，MFU（模型浮点运算利用率）和 MBU（模型带宽利用率）衡量工作负载对算力和内存带宽的使用效率，而 TCO 则比较包含硬件、电力和运维在内的总拥有成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AWS_Trainium">AWS Trainium</a></li>
<li><a href="https://technews.tw/2024/12/05/aws-trainium3-ai-chip-powered-by-3-nanometers/">3 奈米加持 AWS Trainium 3 AI... | TechNews 科技新報</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/gb300-nvl72/">NVIDIA GB300 NVL72</a></li>

</ul>
</details>

**标签**: `#AWS Trainium3`, `#AI accelerators`, `#inference`, `#microarchitecture`, `#hardware TCO`

---