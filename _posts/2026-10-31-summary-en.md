---
layout: default
title: "Horizon Summary: 2026-10-31 (EN)"
date: 2026-10-31
lang: en
---

> From 35 items, 2 important content pieces were selected

---

1. [Backdoored Claude Code Extension Published on Cursor Marketplace](#item-1) ⭐️ 8.0/10
2. [Researcher Discloses Five Full Cross-Tenant Compromises in Azure](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Backdoored Claude Code Extension Published on Cursor Marketplace](https://phorion.io/blog/offical-claude-code-vsx-compromise/) ⭐️ 8.0/10

Attackers used access to Cursor's extension marketplace to publish a tampered copy of the Claude Code VS Code extension (versions 2.1.312 and 2.1.313 for Windows and macOS), which silently appended an attacker-controlled SSH public key labeled "svc-telemetry" to developers' ~/.ssh/authorized_keys. Cursor says the malicious build was live from roughly 2:27 a.m. to 1:35 p.m. PT on Thursday—about 11 hours—and affected at most 5,000 users before it was replaced by version 2.1.314. This is a supply-chain attack that bypassed the classic package registry and instead targeted how AI coding assistant tooling is distributed to developers, meaning anyone who trusted a marketplace listing could have a persistent remote-login path installed on their machine. It highlights that third-party extension marketplaces—not just npm or PyPI—are now high-value attack surfaces for developer machines that often hold source code, cloud credentials, and production access. The payload was a persistence technique rather than an exploit: it added an attacker SSH key to authorized_keys, a Mitre ATT&CK-documented method (T1098/004) that survives password changes and many cleanup efforts, and reports say the extension also sent host details to the attacker. Anthropic's Felix Rieseberg confirmed the extension was not built or published by Anthropic and that official-channel builds were unaffected, while Cursor stated the tampered listing affected only its marketplace.

hackernews · _chall · Oct 30, 07:09 · [Discussion](https://news.ycombinator.com/item?id=50300683)

**Background**: The Claude Code extension is a VS Code add-on that provides a chat panel and terminal integration for Anthropic's Claude Code AI coding agent; it is officially published by Anthropic on Microsoft's Visual Studio Marketplace. Cursor, an AI-focused code editor built on VS Code, runs its own extension marketplace largely backed by the Open VSX registry, which is separate from Microsoft's and allows third parties to publish builds under extension identifiers. SSH key-based login relies on the authorized_keys file, so anyone who can append a public key there gains a repeatable, password-independent login path to that machine.

<details><summary>References</summary>
<ul>
<li><a href="https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html">Official Claude Code Extension on Cursor Marketplace ...</a></li>
<li><a href="https://attack.mitre.org/techniques/T1098/004/">Account Manipulation: SSH Authorized Keys, Sub-technique ...</a></li>
<li><a href="https://code.claude.com/docs/en/vs-code">Use Claude Code in VS Code - Claude Code Docs</a></li>

</ul>
</details>

**Discussion**: Commenters broadly validated the incident: Anthropic's representative clarified it was not a compromise of Anthropic's systems or employee laptops, and others shared Cursor's grep-based check commands so users could detect the "svc-telemetry" key in authorized_keys. Some users expressed confusion over responsibility—citing Reuters' report that Cursor said the extension was not developed by Anthropic—while others debated whether the official Microsoft marketplace and Open VSX were also affected, with the emerging consensus that the tampered build was specific to the Cursor marketplace.

**Tags**: `#security`, `#supply-chain-attack`, `#claude-code`, `#vs-code-extensions`, `#cursor`

---

<a id="item-2"></a>
## [Researcher Discloses Five Full Cross-Tenant Compromises in Azure](https://www.binarysecurity.no/posts/2026/10/one-root-case) ⭐️ 8.0/10

A security researcher at Binary Security published a follow-up to their earlier "Azure's Weakest Link" posts, detailing five distinct vulnerabilities in Azure API Connections (part of Azure Logic Apps) that each allow a full cross-tenant compromise. The flaws stem from the same insecure architecture they previously documented, combining path traversal and IDOR-style access issues with guessable resource names. Because these are cross-tenant issues in a shared Microsoft cloud service, a single flaw can expose resources belonging to unrelated customers, undermining the tenant isolation that enterprises rely on when choosing Azure. The disclosure adds to a pattern of similar API Connection findings, raising questions about Microsoft's cloud security posture and how thoroughly defaults are reviewed. According to the researcher and community commentary, the weaknesses involve path traversal and IDOR patterns that appear to have existed since these capabilities were introduced, and the mitigation advice includes adding randomness to resource names — effectively a form of security through obscurity. The article follows two earlier posts, "Azure's Weakest Link?" and "Azure's Weakest Link - Full Cross-Tenant Compromise," which first demonstrated the underlying architectural flaw.

hackernews · swq115 · Oct 30, 10:06 · [Discussion](https://news.ycombinator.com/item?id=50301854)

**Background**: Cloud providers like Azure are multi-tenant: many customers share the same underlying infrastructure, with logical boundaries — tenants — separating their identities, data and resources. A cross-tenant vulnerability breaks that boundary, letting an attacker in one tenant reach another customer's resources, which is far more severe than an ordinary bug confined to a single account. Azure API Connections are connectors used by Logic Apps to talk to external services such as Key Vault, SQL and other APIs, and their handling of resource identifiers has repeatedly been the subject of security research.

<details><summary>References</summary>
<ul>
<li><a href="https://www.binarysecurity.no/posts/2026/10/one-root-case">Azure's Weakest Link - Five Full Cross-Tenant Compromises</a></li>
<li><a href="https://www.theprotec.com/blog/azure-cross-tenant-vulnerabilities-api-connections/">How Azure cross-tenant vulnerabilities exposed API ...</a></li>
<li><a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/isolation-choices">Isolation in the Azure public cloud | Microsoft Learn</a></li>

</ul>
</details>

**Discussion**: Commenters praised the researcher's work while criticizing Microsoft's posture: one highlighted that the admin consent callback at login.microsoftonline.com is forgeable if an attacker knows another customer's tenant ID, and that a documentation warning is insufficient. Others noted Azure seems to lead competitors in cross-tenant leaks and questioned why enterprises still flock to it, while some observed that these path traversal and IDOR issues likely date back to the features' inception.

**Tags**: `#Azure security`, `#cross-tenant vulnerabilities`, `#cloud security`, `#vulnerability research`, `#Microsoft`

---