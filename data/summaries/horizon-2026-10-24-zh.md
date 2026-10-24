# Horizon 每日速递 - 2026-10-24

> 从 33 条内容中筛选出 3 条重要资讯。

---

1. [PHP 紧急发布补丁，修复两个 CVSS 9.2 的未授权远程代码执行漏洞](#item-1) ⭐️ 9.0/10
2. [月之暗面发布 Kimi K3.1 Pro 及 Highspeed 高速版本](#item-2) ⭐️ 8.0/10
3. [Calif 博客宣称成功攻破 iPhone，引发越狱与 AI 访问权限之争](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [PHP 紧急发布补丁，修复两个 CVSS 9.2 的未授权远程代码执行漏洞](https://t.me/zaihuapd/44647) ⭐️ 9.0/10

PHP 团队发布紧急安全更新，修复两个 CVSS 4.0 评分均为 9.2（严重）的漏洞，攻击者可借此在未登录的情况下远程执行任意代码。官方敦促用户立即升级到 PHP 8.5.12、8.4.27、8.3.36 或 8.2.35。 PHP 是部署最广泛的服务器端 Web 语言之一，因此这些漏洞影响面极广，波及四个受支持发布分支（包括较旧的 8.2）上的大量公网站点与服务。由于攻击无需认证、也不依赖任何有效的业务端点，几乎所有在 Web 服务器后运行 PHP 的运维方都需要立刻打补丁。 风险覆盖所有处理 Web 请求的 SAPI，包括 PHP-FPM、Apache 的 mod_php、php-cgi、FrankenPHP 和 LiteSpeed；其中 mod_php 风险最高，因为已有验证表明攻击可在网站业务代码运行前触发，也就是说应用自身的输入校验根本没有机会生效。公开公告将这两个漏洞编号为 CVE-2026-109618 与 CVE-2026-109619，代号 PHP2Shell。

telegram · zaihuapd · 10月23日 13:46

**背景**: SAPI（服务器应用编程接口）是连接 Apache、Nginx、Caddy 等 Web 服务器与 PHP 解释器的中间层，PHP-FPM、mod_php、php-cgi、LiteSpeed 和 FrankenPHP 都是该层的不同实现，各自的请求处理路径不同，暴露面也不同。FrankenPHP 是较新的一款应用服务器，把官方 PHP 执行器嵌入到基于 Go 的 Caddy Web 服务器中。CVSS 4.0 评分范围为 0 到 10 分，9.2 分属于“严重”区间，意味着利用门槛低、破坏性大，这也是 PHP 项目打破常规发布节奏、推出紧急补丁的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dev.to/jamilxt/php-patched-the-two-critical-rce-flaws-versions-risk-by-sapi-and-stopgaps-3oc5">PHP Patched the Two Critical RCE Flaws: Versions, Risk by SAPI , and...</a></li>
<li><a href="https://ubuntu.com/blog/php2shell-vulnerability-fixes-available">php2shell (CVE-2026-109618 and CVE-2026-109619) – PHP... | Ubuntu</a></li>
<li><a href="https://securitylabs.datadoghq.com/articles/php2shell-critical-vulnerabilities-in-php/">Learn about the two critical vulnerabilities in PHP dubbed PHP2Shell.</a></li>

</ul>
</details>

**标签**: `#security`, `#php`, `#vulnerability`, `#remote-code-execution`, `#patching`

---

<a id="item-2"></a>
## [月之暗面发布 Kimi K3.1 Pro 及 Highspeed 高速版本](https://www.kimi.ai/blog/kimi-k3-1-pro) ⭐️ 8.0/10

月之暗面（Moonshot AI）发布了 Kimi K3.1 Pro，并同时推出低延迟的「Highspeed」高速版本，两者均已在 kimi.ai、Kimi Work、Kimi Code 以及 API 上线，模型标识分别为 kimi-k3.1-pro 和 kimi-k3.1-pro-highspeed。官方表示完整权重将于 11 月 4 日前开放，该消息在 Hacker News 上获得 662 分和 422 条评论。 一家中国实验室在独立社区基准上追平了西方领先模型，而成本仅约为后者的四成，这进一步加剧了对前沿闭源厂商性价比的压力。由于月之暗面承诺开放权重，此次发布也直接影响那些选择自行部署而非按 token 付费的开发者。 在社区自建的 Pac-Man 基准测试中，Kimi K3.1 Pro 以 93 分与 Claude Sonnet 5.5 打平，但成本为 0.68 美元、耗时 11 分钟，而后者为 1.61 美元、14 分钟。月之暗面还表示，其开放权重有意不触及攻击性网络能力的前沿水平，但计划随着时间推移逐步提升这一上限。

hackernews · Jowsey · 10月23日 16:59 · [社区讨论](https://news.ycombinator.com/item?id=50212065)

**背景**: 月之暗面是 Kimi 助手背后的中国 AI 实验室，其 K3 模型是一个约 2.8 万亿参数的开源多模态推理模型，在 OpenRouter 等聚合平台上定价约为每百万输入 token 1.39 美元、每百万输出 token 13 美元。「K3.1」的命名意味着这是一次增量式的小版本更新，而非全新架构；「Highspeed」后缀则表示同一模型的服务加速档位，而非不同的能力等级。Artificial Analysis 等第三方评测机构会发布独立的智能指数排名，开发者据此在质量、单任务成本和延迟之间进行横向比较，而不必依赖厂商自报的分数。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://habr.com/ru/news/1098732/">Moonshot выпустили Kimi K 3 . 1 Pro : лучше GPT-6 Astra... / Хабр</a></li>
<li><a href="https://openrouter.ai/moonshotai/kimi-k3">Kimi K3 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://artificialanalysis.ai/leaderboards/models">LLM Leaderboard - Comparison of AI models from... | Artificial Analysis</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍对其性价比印象深刻，有人称 Kimi K3.1 Pro 在 Pac-Man 基准上追平 Claude Sonnet 5.5，成本不到一半且耗时更短。但也有人提出实际顾虑：一位每月付费 99 美元的订阅者表示，单次会话仅 47 分钟就用尽了 5 小时配额；还有多人提到该模型性格明显更直率、更好争辩，并且在推理内容中会在自称 Kimi、ChatGPT 或 API 助手之间来回摇摆。

**标签**: `#LLM`, `#Kimi`, `#Moonshot AI`, `#benchmarks`, `#model release`

---

<a id="item-3"></a>
## [Calif 博客宣称成功攻破 iPhone，引发越狱与 AI 访问权限之争](https://blog.calif.io/p/iphone) ⭐️ 8.0/10

一篇发布在 blog.calif.io 的博客文章描述了该团队成功攻破一台 iPhone 的过程，称其终于拿下了最初设定的目标。据报道，这项研究借助前沿 AI 模型来发现并利用 iOS 漏洞，文章在分享后迅速引发大量关注（710 分、467 条评论）。 如果 AI 辅助的漏洞挖掘能够被用于攻击像 iOS 这样高度加固的系统，防守方的算盘就要重新打过：Lockdown 模式等手段可能面临新的压力，而发现深层漏洞的门槛可能大幅降低。这同时凸显了一个政策问题——谁能使用最强的模型来做安全研究，因为能做这类工作的人越来越多是拥有特权模型访问权的那批人。 这篇文章更像是一份研究演示报告，而非协同披露：摘要中没有给出 CVE 编号、受影响的 iOS 版本，也没有说明是否已通知 Apple 或 Apple 是否作出回应。关于前沿 AI 模型在发现和利用这些漏洞中起核心作用的说法来自文章本身，尚未得到独立验证。

hackernews · pavel_lishin · 10月23日 16:21 · [社区讨论](https://news.ycombinator.com/item?id=50211474)

**背景**: iOS 是苹果的封闭式移动操作系统，所谓“越狱”historically 指的是利用漏洞获取 root 权限并安装苹果不允许的软件。Lockdown 模式是苹果为记者、活动人士等高风险用户推出的可选极端加固设置，它会禁用或限制间谍软件常用的功能（消息附件、部分网页技术、有线连接等），代价是可用性明显下降。“AI 红队测试”指利用 AI 模型去探测系统弱点，而前沿实验室越来越多地通过审核制的“可信网络访问”项目、而非公开注册，来分发其最强模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://support.apple.com/en-us/105120">About Lockdown Mode - Apple Support</a></li>
<li><a href="https://www.cape.co/blog/lockdown-mode-iphone">Lockdown Mode on iPhone : What Is It & How To Use It | Cape - Cape</a></li>

</ul>
</details>

**社区讨论**: 评论者基本越过了演示本身：有人追问 Lockdown 模式在真实环境下到底能不能挡住这类攻击；有人感叹 iCloud、iMessage 等生态锁定让越狱变得毫无意义，因为苹果可以直接把你踢出去；还有人认为“可信网络访问”项目已经从保障措施变成了护城河，只有圈内研究者才能拿到模型。也有人纯粹表达热情，希望自己的手机能拿到 root 权限，并调侃这些演示视频少了早年越狱时代那种跳舞动漫少女配电子舞曲的味道。

**标签**: `#security-research`, `#iOS`, `#exploitation`, `#AI-red-teaming`, `#jailbreak`

---

