---
layout: default
title: "Horizon Summary: 2026-07-21 (ZH)"
date: 2026-07-21
lang: zh
---

> 从 36 条内容中筛选出 9 条重要资讯。

---

1. [欧盟法院裁定 VPN 是合法的技术工具](#item-1) ⭐️ 8.0/10
2. [苹果因未扫描 iCloud 中的 CSAM 而免于法律责任](#item-2) ⭐️ 8.0/10
3. [Laguna S 2.1：128B 参数编程模型媲美 DeepSeek V4 Flash](#item-3) ⭐️ 8.0/10
4. [Claude Code 团队揭示 65% PR 及内部验证流程](#item-4) ⭐️ 8.0/10
5. [谷歌开发 Frozen v2 芯片，将 Gemini 模型固化硬件](#item-5) ⭐️ 8.0/10
6. [欧盟拟获新权力，对危害消费者的科技公司罚款](#item-6) ⭐️ 8.0/10
7. [Cloudflare 内部 DNS 服务正式上线](#item-7) ⭐️ 8.0/10
8. [台积电拟 2026 年高端工艺涨价 5%-10%](#item-8) ⭐️ 8.0/10
9. [谷歌推出具备智能体能力的 Gemini 3.5 Flash 模型](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [欧盟法院裁定 VPN 是合法的技术工具](https://www.techradar.com/vpn/vpn-privacy-security/vpns-are-lawful-technical-tools-says-eu-court-in-landmark-anne-frank-copyright-ruling) ⭐️ 8.0/10

欧盟法院在涉及安妮·弗兰克基金的里程碑案件中裁定，VPN 是合法的技术工具，并非本质上用于规避版权保护的非法手段。 该裁决为欧盟范围内使用 VPN 保护隐私和访问内容树立了重要先例，可能影响未来针对年龄验证或监控的 VPN 禁令的法律斗争。 该案由安妮·弗兰克基金对一家瑞士 VPN 提供商提起，但法院驳回了 VPN 主要用于版权侵权的论点。裁决区分了技术本身与其滥用行为。

hackernews · healsdata · 7月21日 19:43 · [社区讨论](https://news.ycombinator.com/item?id=48997221)

**背景**: VPN（虚拟专用网络）加密互联网流量并隐藏 IP 地址，常用于绕过地理限制或审查。欧盟法院是欧洲联盟在欧盟法律事务上的最高法院。该裁决澄清了 VPN 是中立工具，本质上不构成侵权。

**社区讨论**: 评论者普遍欢迎这一裁决，指出其对版权规避和年龄验证的影响。一些人强调，如果没有这一决定，版权执法可能默认采用最严格国家的标准。一条讽刺评论质疑，没有强有力的版权保护，安妮·弗兰克会有什么动力写更多日记。

**标签**: `#VPN`, `#EU law`, `#copyright`, `#privacy`, `#landmark ruling`

---

<a id="item-2"></a>
## [苹果因未扫描 iCloud 中的 CSAM 而免于法律责任](https://blog.ericgoldman.org/archives/2026/07/apple-defeats-liability-for-not-scanning-icloud-for-csam-but-the-judge-was-not-pleased-amy-v-apple.htm) ⭐️ 8.0/10

苹果赢得了一场法院裁决，认定其不对未扫描 iCloud 中的儿童性虐待材料（CSAM）承担责任。法官表示不满，但由于端到端加密而做出了有利于苹果的裁决。 这项裁决为科技公司在扫描非法内容与保护用户隐私之间的责任树立了先例。它可能影响未来关于加密和在线儿童安全的法律和实践。 该案为 Amy 诉 Apple 案，法官称判决结果“令人不安”，因为它让受害儿童成为隐私保护的附带损失。苹果 iCloud 使用端到端加密，无法进行扫描。

hackernews · speckx · 7月21日 14:31 · [社区讨论](https://news.ycombinator.com/item?id=48992870)

**背景**: CSAM（儿童性虐待材料）指任何描绘未成年人遭受性虐待或剥削的视觉内容。端到端加密确保只有发送方和接收方可以访问内容，这使得像苹果这样的服务提供商在技术上无法扫描消息或文件以查找非法材料。苹果此前曾提出名为“neuralMatch”的扫描系统，但因隐私问题遭到强烈反对，最终未实施。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Child_pornography">Child pornography - Wikipedia</a></li>
<li><a href="https://rainn.org/get-the-facts-about-csam-child-sexual-abuse-material/what-is-csam/">What is CSAM? - RAINN</a></li>

</ul>
</details>

**社区讨论**: 评论凸显了隐私与儿童保护之间的紧张关系，有人认为端到端加密阻止了有效扫描，而另一些人则指出阻止传播并不能阻止最初的虐待。法官关于“附带损失”的评论被多位评论者提及。

**标签**: `#Apple`, `#CSAM`, `#privacy`, `#end-to-end encryption`, `#liability`

---

<a id="item-3"></a>
## [Laguna S 2.1：128B 参数编程模型媲美 DeepSeek V4 Flash](https://poolside.ai/blog/introducing-laguna-s-2-1) ⭐️ 8.0/10

Poolside AI 发布了 Laguna S 2.1，这是一个 1280 亿参数的编程模型，在多项基准测试中媲美甚至超越 DeepSeek V4 Flash，尽管其参数量仅为后者的十分之一。 这表明高效的架构可以在适合消费级硬件的规模上达到前沿编程性能，有望让先进的 AI 编程助手更加普及。 Laguna S 2.1 拥有 1280 亿参数，采用密集 Transformer 架构（非 MoE），支持 128K token 上下文窗口，并以 Apache 2.0 许可证发布。

hackernews · rexledesma · 7月21日 17:17 · [社区讨论](https://news.ycombinator.com/item?id=48995261)

**背景**: 编程领域的大型语言模型，如 DeepSeek V4 Flash，通常拥有数千亿到万亿参数，运行成本高昂。Laguna S 2.1 表明，一个更小的密集模型可以与之竞争，这很可能得益于高质量的训练数据和高效的训练方法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek-ai/DeepSeek-V4-Flash · Hugging Face</a></li>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-flash">DeepSeek V4 Flash - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**社区讨论**: 评论者报告了积极的实测结果，有人指出它在 C 代码中发现了以前只有 GPT-5.2 才找出的问题，尽管它也做出了一个错误的初步观察。其他人对能在家庭硬件上运行表示兴奋，还有一位用户报告说已经从中得到了一个可用的 pull request。

**标签**: `#AI`, `#language model`, `#coding`, `#open source`, `#machine learning`

---

<a id="item-4"></a>
## [Claude Code 团队揭示 65% PR 及内部验证流程](https://simonwillison.net/2026/Jul/21/cat-and-thariq/#atom-everything) ⭐️ 8.0/10

在炉边谈话中，Anthropic 的 Cat Wu 和 Thariq Shihipar 透露，Claude Tag 现在为 Claude Code 团队处理了 65% 的产品工程拉取请求。他们还讨论了功能在公开发布前通过内部用户留存进行验证，以及 Claude Code 的系统提示词已缩减 80%。 这些见解罕见地展示了 Anthropic 如何自用其 AI 编码代理并验证功能，从而影响像 Claude Code 和 Claude Tag 这样的工具的开发。所分享的指标和实践可能影响其他团队设计和部署 AI 编码助手的方式。 Claude Tag 是一个 Slack 集成，允许用户在任何线程中 @Claude，它会自主读取上下文并生成结果。团队还指出，对于像 Fable 5 这样的最新模型，在系统提示词中添加示例已不再是最佳实践，而列出“不要做”的事项可能会降低输出质量。

rss · Simon Willison · 7月21日 12:54

**背景**: Claude Code 是 Anthropic 开发的 AI 编码代理，可以自主实现功能和编辑代码。Claude Tag 于 2026 年 6 月推出，是一个自主 Slack 集成，充当 AI 队友。Fable 5 是 Anthropic 最新针对编码优化的模型，能够以更少的步骤处理复杂、长期运行的任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://claude.com/product/tag">Claude in Slack : Tag @ Claude in any thread | Claude by Anthropic</a></li>
<li><a href="https://www.anthropic.com/news/introducing-claude-tag">Introducing Claude Tag \ Anthropic</a></li>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>

</ul>
</details>

**标签**: `#Claude Code`, `#AI coding agents`, `#Anthropic`, `#developer tools`, `#AI engineering`

---

<a id="item-5"></a>
## [谷歌开发 Frozen v2 芯片，将 Gemini 模型固化硬件](https://www.quiverquant.com/news/Google+Reportedly+Developing+%E2%80%98Frozen+v2%E2%80%99+AI+Chip+to+Boost+Gemini+Efficiency) ⭐️ 8.0/10

据报道，谷歌正在开发代号为“Frozen v2”的服务器芯片，将 Gemini AI 模型的部分能力直接固化到硬件中，每瓦特可生成的 token 数是最新 TPU 的 6 到 10 倍，计划于 2028 年部署。 该芯片可大幅降低基于 Gemini 的 AI 推理能耗和延迟，缓解内部算力短缺问题，并使谷歌在定制 AI 芯片竞赛中占据更有利位置。 Frozen v2 旨在补充而非取代谷歌的 TPU 系列，专注于 Gemini 特定的推理工作负载。该项目旨在缓解因算力短缺而限制 Google Cloud 为部分企业客户提供服务的问题。

telegram · zaihuapd · 7月21日 01:01

**背景**: 谷歌的 TPU（张量处理单元）是专为机器学习训练和推理优化的定制 ASIC，但适用于多种模型。将模型架构直接固化到硅片中（如 Frozen v2），可为特定模型带来更高的每瓦效率，但牺牲了灵活性。这种思路类似于比特币 ASIC 与 GPU 的对比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://logicity.in/en/blog/google-s-frozen-v2-chip-embeds-gemini-in-hardware-for-6-10x-gains">Google 's Frozen v 2 chip embeds Gemini in hardware for... | Logicity</a></li>
<li><a href="https://www.bitbase.com/news/google-ai-chip-gemini-frozenv2">Google Is Building an AI Chip Just for Gemini—And... | Bitbase News</a></li>
<li><a href="https://windowsforum.com/threads/google-frozen-v2-targets-6-10x-gemini-tokens-per-watt-by-2028.439722/">Google Frozen v 2 Targets 6–10x Gemini Tokens... | Windows Forum</a></li>

</ul>
</details>

**标签**: `#AI芯片`, `#Google`, `#Gemini`, `#推理效率`, `#TPU`

---

<a id="item-6"></a>
## [欧盟拟获新权力，对危害消费者的科技公司罚款](https://t.me/zaihuapd/42682) ⭐️ 8.0/10

欧盟委员会计划在今年年底前提出新立法，赋予监管机构对未能保护消费者（尤其是儿童）免受暗黑模式和成瘾性设计伤害的大型科技公司处以罚款的权力。 此举将显著扩大欧盟现有数字法律（如《数字服务法》）之外的监管工具，可能迫使主要平台重新设计用户界面，使其不再具有操纵性，对消费者更友好。 新规将针对暗黑模式、订阅陷阱和成瘾性设计。欧盟司法专员 Michael McGrath 表示，执法对象不仅包括已受数字法规约束的大型科技公司，也将涵盖小型在线商家和游戏开发商。

telegram · zaihuapd · 7月21日 01:44

**背景**: 暗黑模式是一种欺骗性的用户界面设计，诱使用户采取非本意的操作，例如在不知情的情况下订阅定期扣费或分享个人数据。成瘾性设计指故意打造以最大化用户参与度的功能，常常利用心理弱点。欧盟一直在加强在线消费者保护，此项举措建立在现有框架如《数字服务法》和《不公平商业行为指令》之上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Dark_pattern">Dark pattern - Wikipedia</a></li>
<li><a href="https://www.osano.com/articles/dark-pattern-examples">9 Dark Pattern Examples to Look Out For | Osano</a></li>
<li><a href="https://www.researchgate.net/publication/318012535_A_Survey_of_Addictive_Software_Design">A Survey of Addictive Software Design</a></li>

</ul>
</details>

**标签**: `#EU regulation`, `#tech regulation`, `#consumer protection`, `#dark patterns`, `#online safety`

---

<a id="item-7"></a>
## [Cloudflare 内部 DNS 服务正式上线](https://blog.cloudflare.com/internal-dns/) ⭐️ 8.0/10

2026 年 7 月 20 日，Cloudflare 宣布其内部 DNS 服务正式全面上线，为私有网络提供权威与递归 DNS 解析，并与 Zero Trust 策略集成。 该服务将公共与私有 DNS 统一到单一平台，简化分割 DNS 配置，并将 Zero Trust 扩展至 DNS 层，降低了企业网络管理的复杂性并提升了安全性。 该服务对现有 Cloudflare Gateway 客户免费提供，支持通过 API、Terraform 和 Cloudflare WAN 部署，并通过 DNS 视图按用户和设备控制内部资源访问。

telegram · zaihuapd · 7月21日 03:49

**背景**: 分割 DNS（Split-horizon DNS）根据请求者网络位置提供不同 DNS 响应，使内外部用户将同一域名解析到不同 IP。Zero Trust 架构假设不信任任何网络位置，要求持续验证每个访问请求。Cloudflare 的内部 DNS 服务将这些概念整合到单一控制平面中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Split-horizon_DNS">Split-horizon DNS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Zero_trust_architecture">Zero trust architecture</a></li>
<li><a href="https://www.cloudflare.com/products/gateway/">Cloudflare Gateway - Secure Web Gateway</a></li>

</ul>
</details>

**标签**: `#DNS`, `#Cloudflare`, `#Zero Trust`, `#私有网络`

---

<a id="item-8"></a>
## [台积电拟 2026 年高端工艺涨价 5%-10%](https://t.me/zaihuapd/42691) ⭐️ 8.0/10

此次涨价将直接影响英伟达和苹果等主要客户，可能提高消费电子和 AI 硬件的成本。这标志着半导体行业成本压力加大，并可能重塑整个供应链的定价策略。 台积电已向代工合作伙伴传达了更高的 2026 年报价，涉及 5nm/4nm、3nm 和 2nm 节点。台积电董事长魏哲家幽默地拒绝证实该计划，称“心里想的事情，嘴巴不能讲”。

telegram · zaihuapd · 7月21日 09:28

**背景**: 台积电是全球最大的半导体代工厂，使用先进工艺制程为苹果和英伟达等公司制造芯片。这些制程需要巨大的研发和资本支出，涨价通常由成本上升或供需失衡驱动。近年来，美国关税和汇率波动加剧了台积电的成本压力。

**标签**: `#TSMC`, `#semiconductor`, `#price increase`, `#supply chain`, `#advanced process`

---

<a id="item-9"></a>
## [谷歌推出具备智能体能力的 Gemini 3.5 Flash 模型](https://t.me/zaihuapd/42699) ⭐️ 8.0/10

谷歌已全球正式发布 Gemini 3.5 Flash 模型，主打编程、多步骤工作流和长程任务处理的智能体能力。性能更强的 Gemini 3.5 Pro 预计于下个月推出。 此次发布标志着向更自主的 AI 系统迈出了重要一步，这类系统能主动处理复杂任务，可能加速软件开发和企业自动化的应用。声称的 4 倍速度提升和成本降低可能使先进 AI 更易获取。 据谷歌称，Gemini 3.5 Flash 相比类似模型输出速度提升 4 倍，成本大幅降低。该模型专为智能体工作流设计，可自主执行多步骤流程和长上下文推理。

telegram · zaihuapd · 7月21日 15:23

**背景**: 智能体 AI 指的是具有自主性、目标驱动行为和主动能力的系统，超越了简单的反应式回应。谷歌的 Gemini 系列是家族式多模态大语言模型，与 OpenAI 的 GPT 和 Anthropic 的 Claude 竞争。Flash 变体针对速度和成本优化，而 Pro 版本瞄准更高性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cacm.acm.org/blogcacm/ais-next-leap-agentic-intelligence/">AI ’s Next Leap: Agentic Intelligence – Communications of the ACM</a></li>

</ul>
</details>

**标签**: `#AI`, `#Google`, `#Gemini`, `#LLM`, `#machine learning`

---