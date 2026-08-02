---
layout: default
title: "Horizon Summary: 2026-08-02 (ZH)"
date: 2026-08-02
lang: zh
---

> 从 28 条内容中筛选出 1 条重要资讯。

---

1. [Bor v0.8：面向 Linux 桌面的实时策略管理](#item-1) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Bor v0.8：面向 Linux 桌面的实时策略管理](https://getbor.dev/blog/2026-08-02-bor-v080-release/) ⭐️ 8.0/10

Bor v0.8 正式发布，新增了对 Thunderbird、Microsoft Edge for Business 和 FirewallD 区域的策略类型。这个开源系统通过 mTLS/gRPC 实时流式传输策略，实现 Linux 桌面的集中管理。 Bor 填补了 Linux 桌面集中管理长期以来的空白，为手动配置或 Intune 等以 Windows 为中心的工具提供了现代开源替代方案。对于寻求开源、跨发行版策略执行的非营利组织、中小企业和大型企业，它都具有吸引力。 该架构采用轻量级 Go 代理和中央服务器，通过 mTLS/gRPC 流式传输策略，无需轮询。现有策略支持包括 Firefox、Chrome、KDE、dconf、polkit 和软件包管理；v0.8 新增了 Thunderbird、Edge for Business 和 FirewallD 区域。

hackernews · eniac111 · 8月2日 09:06 · [社区讨论](https://news.ycombinator.com/item?id=49142569)

**背景**: Linux 桌面管理传统上依赖手动管理或特定发行版的工具，难以在跨机器上应用一致策略。dconf 是 GNOME/GTK 应用使用的键值配置系统，polkit 则控制非特权进程的系统级权限。FirewallD 是 Linux netfilter 的动态防火墙管理前端。Bor 旨在将这些不同机制统一到一个实时策略流传输服务后面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Dconf">dconf - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Polkit">Polkit - Wikipedia</a></li>
<li><a href="https://linuxhandbook.com/firewalld/">Learn Firewalld : Manage Linux Firewall with firewall-cmd</a></li>

</ul>
</details>

**社区讨论**: 评论者反应热烈，一位非营利组织的 IT 管理员称赞该项目让他们不必再使用 Windows 上的 Intune。常见问题包括：能否执行自定义脚本、如何与 Authentik 等身份提供者进行用户映射、在没有轮询的情况下如何处理策略漂移，以及为何选择 mTLS 而非 SSH；还有人建议用 Mermaid 替换 ASCII 图表。

**标签**: `#linux`, `#policy-management`, `#open-source`, `#desktop-management`, `#devops`

---