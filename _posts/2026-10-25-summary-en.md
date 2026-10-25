---
layout: default
title: "Horizon Summary: 2026-10-25 (EN)"
date: 2026-10-25
lang: en
---

> From 29 items, 2 important content pieces were selected

---

1. [PHP Releases Emergency Patches for Two Critical RCE Flaws](#item-1) ⭐️ 8.0/10
2. [Apple to unveil first touchscreen MacBook Pro on Wednesday](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [PHP Releases Emergency Patches for Two Critical RCE Flaws](https://t.me/zaihuapd/44678) ⭐️ 8.0/10

The PHP team has released emergency security updates in versions 8.5.12, 8.4.27, 8.3.36, and 8.2.35 to fix two unauthenticated remote code execution vulnerabilities, both rated CVSS 4.0 score 9.2. Officials are urging all users to upgrade immediately. These flaws affect nearly every PHP deployment that handles web requests, including PHP-FPM, Apache's mod_php, php-cgi, FrankenPHP, and LiteSpeed, meaning a huge share of the web's server-side infrastructure is exposed to unauthenticated attack. Because exploitation can occur before application code even runs, patching is the only reliable mitigation. mod_php carries the highest risk: researchers have verified that exploitation can be triggered before the site's business logic executes, and there is evidence of active exploitation for mod_php. Administrators running any of the affected SAPI configurations should treat this as an urgent patch-now situation rather than a routine update.

telegram · zaihuapd · Oct 25, 02:42

**Background**: PHP is a server-side scripting language that powers a large portion of the web, and it can be connected to web servers in several ways: PHP-FPM and php-cgi run PHP as separate FastCGI processes, mod_php embeds the PHP interpreter directly inside Apache, and FrankenPHP is a newer Go-based application server that embeds PHP. CVSS is the Common Vulnerability Scoring System, and a 4.0 base score of 9.2 falls in the "critical" range, signaling that a flaw is remotely exploitable with low complexity and severe impact.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.aliyun.com/article/197130">PHP 之 FastCGI 与 mod _ php 详解-阿里云开发者社 区</a></li>
<li><a href="https://frankenphp.dev/zh/">FrankenPHP ：现代 PHP 应用服务器</a></li>
<li><a href="https://www.kaspersky.ru/blog/cvss-4-base-evolution/40086/">Что важно знать о CVSS для эффективной защиты своих ИТ-активов</a></li>

</ul>
</details>

**Tags**: `#php`, `#security`, `#vulnerability`, `#remote-code-execution`, `#patching`

---

<a id="item-2"></a>
## [Apple to unveil first touchscreen MacBook Pro on Wednesday](https://www.bloomberg.com/news/newsletters/2026-10-25/apple-to-unveil-touch-screen-macbook-pro-executive-promotions-in-box-checker) ⭐️ 8.0/10

Apple is expected to announce its first touchscreen MacBook Pro on Wednesday, marking the first Mac to support touch input and to ship with an OLED display, along with the Dynamic Island, in both 14-inch and 16-inch sizes. The new models will be priced above the current $2,499 starting price. This is a notable reversal of Apple's long-standing public stance that touchscreens do not belong on laptops, and it signals a product-direction shift driven by revenue and marketing considerations rather than purely ergonomic ones. It affects Mac developers and pro users who will need to consider touch-aware interfaces, and it puts Apple in more direct competition with touch-enabled Windows laptops and convertible PCs. According to the report, touch will serve as a supplement to the keyboard and trackpad rather than replacing them, and Apple executives have historically rejected touch laptops on ergonomic grounds. The report does not detail the touch input technology, refresh rate, or whether Apple Pencil support is included, so pricing and configuration specifics remain unconfirmed.

telegram · zaihuapd · Oct 25, 14:25

**Background**: The Dynamic Island is a pill-shaped area at the top of the iPhone display that houses the front camera and Face ID sensors and expands to show Live Activities, alerts, and background tasks such as a Voice Memo recording or Maps directions. OLED (organic light-emitting diode) panels light each pixel individually, delivering deeper blacks and higher contrast than the mini-LED backlighting used in current high-end MacBook Pros. Apple has long argued that reaching up to touch a vertical laptop screen is uncomfortable — the so-called "gorilla arm" problem — which is why Macs have shipped with keyboards and trackpads only.

<details><summary>References</summary>
<ul>
<li><a href="https://www.macrumors.com/how-to/use-dynamic-island-iphone-14-pro/">What iPhone's Dynamic Island Does and How to Use It View Live Activities in the Dynamic Island on iPhone - Apple ... Hidden Features Your iPhone Dynamic Island Can Actually Do Dynamic Island on iPhone: Everything You Need to Know ... What is Dynamic Island and how do you use it? | GeeksChalk Dynamic Island: The Ultimate Multitasking Tool for iPhone ... How to Use Dynamic Island on iPhone - SimplyMac</a></li>
<li><a href="https://support.apple.com/guide/iphone/view-live-activities-in-the-dynamic-island-iph28f50d10d/ios">View Live Activities in the Dynamic Island on iPhone - Apple ...</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#MacBook Pro`, `#touchscreen`, `#OLED`, `#hardware`

---