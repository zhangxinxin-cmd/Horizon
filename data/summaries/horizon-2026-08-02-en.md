# Horizon Daily - 2026-08-02

> From 28 items, 1 important content pieces were selected

---

1. [Bor v0.8: Real-time policy management for Linux desktops](#item-1) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Bor v0.8: Real-time policy management for Linux desktops](https://getbor.dev/blog/2026-08-02-bor-v080-release/) ⭐️ 8.0/10

Bor v0.8 has been released, introducing new policy types for Thunderbird, Microsoft Edge for Business, and FirewallD zones. The open-source system manages Linux desktops centrally by streaming policies over mTLS/gRPC in real time. Bor fills a long-standing gap in centralized management for Linux desktops, offering a modern alternative to manual configuration or Windows-centric tools like Intune. It could appeal to non-profits, small businesses, and large enterprises seeking open-source, cross-distribution policy enforcement. The architecture uses a lightweight Go agent and central server, streaming policies over mTLS/gRPC without polling. Existing policy support includes Firefox, Chrome, KDE, dconf, polkit, and package management; v0.8 adds Thunderbird, Edge for Business, and FirewallD zones.

hackernews · eniac111 · Aug 2, 09:06 · [Discussion](https://news.ycombinator.com/item?id=49142569)

**Background**: Linux desktop management traditionally relies on manual administration or distribution-specific tools, making it hard to apply consistent policies across machines. dconf is a key-value configuration system used by GNOME/GTK applications, while polkit controls system-wide privileges for unprivileged processes. FirewallD is a dynamic firewall management front-end for Linux's netfilter. Bor aims to unify these different mechanisms behind a single real-time policy streaming service.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Dconf">dconf - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Polkit">Polkit - Wikipedia</a></li>
<li><a href="https://linuxhandbook.com/firewalld/">Learn Firewalld : Manage Linux Firewall with firewall-cmd</a></li>

</ul>
</details>

**Discussion**: Commenters were enthusiastic, with one nonprofit IT admin praising the project for avoiding Intune on Windows. Common questions included whether custom scripts can be executed, how user mapping works with identity providers like Authentik, how policy drift is handled when there is no polling, and why mTLS was chosen over SSH; some also suggested replacing ASCII diagrams with Mermaid.

**Tags**: `#linux`, `#policy-management`, `#open-source`, `#desktop-management`, `#devops`

---

