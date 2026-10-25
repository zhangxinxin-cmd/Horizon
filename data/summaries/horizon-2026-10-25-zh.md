# Horizon 每日速递 - 2026-10-25

> 从 29 条内容中筛选出 2 条重要资讯。

---

1. [PHP 紧急发布补丁，修复两项严重远程代码执行漏洞](#item-1) ⭐️ 8.0/10
2. [苹果将于周三发布首款触屏 MacBook Pro](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [PHP 紧急发布补丁，修复两项严重远程代码执行漏洞](https://t.me/zaihuapd/44678) ⭐️ 8.0/10

PHP 团队发布紧急安全更新，版本为 8.5.12、8.4.27、8.3.36 和 8.2.35，修复两项无需登录即可远程执行代码的严重漏洞，两项漏洞的 CVSS 4.0 评分均为 9.2 分。官方敦促所有用户立即升级。 这些漏洞几乎影响所有处理网页请求的 PHP 部署方式，包括 PHP-FPM、Apache 的 mod_php、php-cgi、FrankenPHP 和 LiteSpeed，意味着互联网上大量服务端基础设施都暴露在无需认证的攻击之下。由于攻击可能在网站业务代码运行前就被触发，升级补丁几乎是唯一可靠的防护手段。 mod_php 风险最高：已有验证表明攻击可在网站业务代码执行之前被触发，并且 mod_php 已出现实际在野利用的证据。运行任何受影响 SAPI 配置的管理员应将其视为“立即打补丁”的紧急事件，而非常规更新。

telegram · zaihuapd · 10月25日 02:42

**背景**: PHP 是一种服务端脚本语言，支撑着互联网上很大一部分网站，它可以通过多种方式与 Web 服务器对接：PHP-FPM 和 php-cgi 以独立的 FastCGI 进程运行 PHP，mod_php 则把 PHP 解释器直接嵌入 Apache 之中，而 FrankenPHP 是较新的、基于 Go 并内嵌 PHP 的应用服务器。CVSS 即通用漏洞评分系统，其 4.0 版本基础评分 9.2 属于“严重”级别，意味着漏洞可远程利用、利用复杂度低且影响严重。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.aliyun.com/article/197130">PHP 之 FastCGI 与 mod _ php 详解-阿里云开发者社 区</a></li>
<li><a href="https://frankenphp.dev/zh/">FrankenPHP ：现代 PHP 应用服务器</a></li>
<li><a href="https://www.kaspersky.ru/blog/cvss-4-base-evolution/40086/">Что важно знать о CVSS для эффективной защиты своих ИТ-активов</a></li>

</ul>
</details>

**标签**: `#php`, `#security`, `#vulnerability`, `#remote-code-execution`, `#patching`

---

<a id="item-2"></a>
## [苹果将于周三发布首款触屏 MacBook Pro](https://www.bloomberg.com/news/newsletters/2026-10-25/apple-to-unveil-touch-screen-macbook-pro-executive-promotions-in-box-checker) ⭐️ 8.0/10

苹果预计将于本周三发布首款触屏 MacBook Pro，这是 Mac 产品线首次支持触摸操作并采用 OLED 屏幕，同时引入灵动岛设计，提供 14 英寸与 16 英寸两个版本。新机售价将高于现款 2499 美元的起售价。 这标志着苹果对其长期公开立场的一次明显反转——此前苹果一直认为触屏不适合笔记本，而此次转变更多出于营收与营销考量，而非单纯的人体工学理由。这将影响 Mac 开发者和专业用户，他们需要考虑支持触控的交互界面，同时也让苹果与支持触控的 Windows 笔记本和二合一设备展开更直接的竞争。 据报道，触控将作为键盘和触控板的补充而非替代方案，而苹果高管过去一直以人体工学为由否定触屏笔记本。报道未透露触控输入技术、屏幕刷新率以及是否支持 Apple Pencil 等细节，因此定价与配置信息仍未得到确认。

telegram · zaihuapd · 10月25日 14:25

**背景**: 灵动岛是 iPhone 屏幕顶部一个药丸形区域，用于容纳前置摄像头与 Face ID 传感器，并可展开显示实时活动、提醒以及语音备忘录录音、地图导航等后台任务。OLED（有机发光二极管）面板的每个像素可独立发光，相比现款高端 MacBook Pro 使用的 mini-LED 背光，能带来更深的黑色和更高的对比度。苹果长期以来一直认为，伸手去触摸竖立的笔记本屏幕并不舒适——即所谓的“大猩猩手臂”问题——因此 Mac 一直只配备键盘和触控板。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macrumors.com/how-to/use-dynamic-island-iphone-14-pro/">What iPhone's Dynamic Island Does and How to Use It View Live Activities in the Dynamic Island on iPhone - Apple ... Hidden Features Your iPhone Dynamic Island Can Actually Do Dynamic Island on iPhone: Everything You Need to Know ... What is Dynamic Island and how do you use it? | GeeksChalk Dynamic Island: The Ultimate Multitasking Tool for iPhone ... How to Use Dynamic Island on iPhone - SimplyMac</a></li>
<li><a href="https://support.apple.com/guide/iphone/view-live-activities-in-the-dynamic-island-iph28f50d10d/ios">View Live Activities in the Dynamic Island on iPhone - Apple ...</a></li>

</ul>
</details>

**标签**: `#Apple`, `#MacBook Pro`, `#touchscreen`, `#OLED`, `#hardware`

---

