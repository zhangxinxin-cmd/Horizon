---
layout: default
title: "Horizon Summary: 2026-10-31 (ZH)"
date: 2026-10-31
lang: zh
---

> 从 35 条内容中筛选出 2 条重要资讯。

---

1. [恶意篡改的 Claude Code 扩展被发布到 Cursor 插件市场](#item-1) ⭐️ 8.0/10
2. [研究人员披露 Azure 五个可完全跨租户入侵的漏洞](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [恶意篡改的 Claude Code 扩展被发布到 Cursor 插件市场](https://phorion.io/blog/offical-claude-code-vsx-compromise/) ⭐️ 8.0/10

攻击者利用对 Cursor 插件市场的访问权限，发布了被篡改的 Claude Code VS Code 扩展（Windows 和 macOS 平台的 2.1.312 与 2.1.313 版本），该扩展会悄悄把一个标记为 "svc-telemetry" 的攻击者控制的 SSH 公钥追加到开发者的 ~/.ssh/authorized_keys 文件中。Cursor 表示这一恶意版本在太平洋时间周四约凌晨 2:27 至下午 1:35 上线，持续时间约 11 小时，最多影响 5000 名用户，之后被 2.1.314 版本替换下架。 这是一次绕过了传统包注册表的供应链攻击，矛头直指 AI 编程助手工具的开发者分发渠道，意味着任何信任市场列表的用户都可能在机器上被植入一条可长期远程登录的通道。它说明第三方扩展市场（而不只是 npm 或 PyPI）如今已成为高价值的攻击面，而这些开发者的机器上往往保存着源码、云凭据和生产环境访问权限。 此次载荷并非漏洞利用，而是一种持久化手法：把攻击者的 SSH 密钥写入 authorized_keys，这是 Mitre ATT&CK 记录在案的技术（T1098/004），即使修改密码、进行多种清理也难以清除；有报告称该扩展还会把主机信息外传。Anthropic 的 Felix Rieseberg 确认该扩展并非由 Anthropic 构建或发布、官方渠道的版本不受影响，Cursor 则表示被篡改的条目仅影响其自身市场。

hackernews · _chall · 10月30日 07:09 · [社区讨论](https://news.ycombinator.com/item?id=50300683)

**背景**: Claude Code 扩展是一个 VS Code 插件，为 Anthropic 的 Claude Code AI 编程代理提供聊天面板和终端集成，官方版本由 Anthropic 发布在微软的 Visual Studio Marketplace 上。基于 VS Code 打造的 AI 代码编辑器 Cursor 运营着自己的扩展市场，其后端主要依托 Open VSX 注册表，与微软的市场相互独立，并允许第三方以相同扩展标识发布构建版本。SSH 密钥登录依赖 authorized_keys 文件，因此任何能向其中追加公钥的人，都能获得一条可反复使用、无需密码即可登录该机器的通道。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html">Official Claude Code Extension on Cursor Marketplace ...</a></li>
<li><a href="https://attack.mitre.org/techniques/T1098/004/">Account Manipulation: SSH Authorized Keys, Sub-technique ...</a></li>
<li><a href="https://code.claude.com/docs/en/vs-code">Use Claude Code in VS Code - Claude Code Docs</a></li>

</ul>
</details>

**社区讨论**: 评论者总体上印证了该事件：Anthropic 的代表澄清这并非 Anthropic 系统或员工笔记本电脑被入侵，其他人则分享了 Cursor 提供的 grep 检测命令，方便用户在 authorized_keys 中查找 "svc-telemetry" 密钥。部分用户对责任归属感到困惑，引用路透社报道称 Cursor 表示该扩展并非 Anthropic 开发；也有人讨论微软官方市场和 Open VSX 是否同样受影响，逐渐形成的共识是被篡改的版本仅限于 Cursor 市场。

**标签**: `#security`, `#supply-chain-attack`, `#claude-code`, `#vs-code-extensions`, `#cursor`

---

<a id="item-2"></a>
## [研究人员披露 Azure 五个可完全跨租户入侵的漏洞](https://www.binarysecurity.no/posts/2026/10/one-root-case) ⭐️ 8.0/10

Binary Security 的一名安全研究人员发布了继此前《Azure's Weakest Link》系列文章之后的新研究，详细披露了 Azure API Connections（属于 Azure Logic Apps 的一部分）中的五个不同漏洞，每一个都能实现完全的跨租户入侵。这些漏洞源自其此前记录的同一套不安全的架构，结合了路径遍历、IDOR（不安全的直接对象引用）类访问问题以及可被猜测的资源名称。 由于这些是微软共享云服务中的跨租户问题，单个漏洞就可能暴露属于完全无关客户方的资源，从而削弱企业在选择 Azure 时所依赖的租户隔离保证。此次披露延续了此前一系列类似的 API Connection 漏洞发现，引发外界对微软云安全状况以及默认配置审查是否充分的质疑。 根据研究人员及社区评论，这些弱点涉及路径遍历和 IDOR 模式，且似乎自相关能力推出以来就一直存在；给出的缓解建议包括在资源名称中加入随机性——这实际上是一种“以隐蔽求安全”的做法。该文章是此前两篇博文《Azure's Weakest Link?》和《Azure's Weakest Link - Full Cross-Tenant Compromise》的延续，后者首次展示了这一底层架构缺陷。

hackernews · swq115 · 10月30日 10:06 · [社区讨论](https://news.ycombinator.com/item?id=50301854)

**背景**: 像 Azure 这样的云服务商采用多租户架构：众多客户共享同一套底层基础设施，并通过“租户”这一逻辑边界来隔离各自的身份、数据和资源。跨租户漏洞会突破这一边界，使攻击者能在自己的租户内访问其他客户的资源，其严重程度远高于局限于单一账户的普通漏洞。Azure API Connections 是 Logic Apps 用来与 Key Vault、SQL 及其他 API 等外部服务通信的连接器，其对资源标识符的处理方式已多次成为安全研究的焦点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.binarysecurity.no/posts/2026/10/one-root-case">Azure's Weakest Link - Five Full Cross-Tenant Compromises</a></li>
<li><a href="https://www.theprotec.com/blog/azure-cross-tenant-vulnerabilities-api-connections/">How Azure cross-tenant vulnerabilities exposed API ...</a></li>
<li><a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/isolation-choices">Isolation in the Azure public cloud | Microsoft Learn</a></li>

</ul>
</details>

**社区讨论**: 评论者一方面称赞研究人员的成果，一方面批评微软的安全状况：有人指出，如果攻击者知道其他客户的租户 ID，login.microsoftonline.com 上的管理员同意回调就是可伪造的，仅在文档中加一句警告并不够。也有人认为 Azure 在跨租户泄露方面似乎领先于竞争对手，并质疑企业为何仍纷纷选择它；还有人观察到这些路径遍历和 IDOR 问题很可能自相关功能诞生之日起就已存在。

**标签**: `#Azure security`, `#cross-tenant vulnerabilities`, `#cloud security`, `#vulnerability research`, `#Microsoft`

---