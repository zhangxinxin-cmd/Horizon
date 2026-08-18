# Horizon 每日速递 - 2026-08-18

> 从 30 条内容中筛选出 6 条重要资讯。

---

1. [Godin 评“亚马逊税”：搜索为广告利润牺牲用户体验](#item-1) ⭐️ 8.0/10
2. [20 美元工具修复变砖的 Framework 笔记本](#item-2) ⭐️ 8.0/10
3. [Linux 7.3 提升显存耗尽时的性能](#item-3) ⭐️ 8.0/10
4. [Mojo 编译器和工具链现已以 Apache 2.0 协议开源](#item-4) ⭐️ 8.0/10
5. [Qwen 3.8 27B 在 Artificial Analysis Intelligence Index 获得 52 分](#item-5) ⭐️ 8.0/10
6. [中国要求政府机构提前卸载定制版 Windows 10](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Godin 评“亚马逊税”：搜索为广告利润牺牲用户体验](https://seths.blog/2026/08/the-amazon-tax/) ⭐️ 8.0/10

在题为《The Amazon tax》的文章中，Seth Godin 认为亚马逊的搜索和广告系统已将平台利润置于消费者真实需求之上，导致在线购物体验退化。 这一观点引发广泛共鸣，吸引数百条评论，反映出人们对大型电商平台日益增长的不信任。如果搜索结果变成布满广告的雷区，消费者可能会转向其他购物平台，从而促使亚马逊重新权衡广告与用户体验的关系。 评论者反映，搜索结果中大约四分之三可能是赞助广告，算法倾向于推送平台想卖的商品，而非用户寻找的精确匹配项。还有评论者指出，缺乏评论的新款优质产品可能只能靠广告才能获得曝光。

hackernews · herbertl · 8月18日 13:22 · [社区讨论](https://news.ycombinator.com/item?id=49345263)

**背景**: 亚马逊的电商平台将自然商品列表与付费赞助位混合展示。批评者越来越多地将搜索结果中不断增多的广告称为“亚马逊税”——这是消费者在时间、注意力和信任上支付的隐性成本，而非金钱。这个说法也概括了一种更广泛的趋势：搜索从“找到我要的商品”转向“服务于平台的商业利益”。

**社区讨论**: 讨论大多呼应 Godin 的批评，许多人表示已将购买转向本地商店和其他平台，甚至考虑删除亚马逊账户。也有少数人反驳说，对于没有多少评论的新产品而言，广告是获得曝光的必要途径。总体情绪是对广告泛滥和搜索实用性下降的失望。

**标签**: `#Amazon`, `#e-commerce`, `#search`, `#advertising`, `#user experience`

---

<a id="item-2"></a>
## [20 美元工具修复变砖的 Framework 笔记本](https://quantum5.ca/2026/08/16/fixing-bricked-amd-7040-series-framework-13-laptop-with-20-tools/) ⭐️ 8.0/10

一篇写于 2026 年 8 月 16 日的技术指南讲述了作者如何救活一台因 BIOS 更新而变砖的 AMD 7040 系列 Framework Laptop 13。作者利用 pogo 弹簧针和大约 20 美元的工具，直接对 SPI 闪存芯片重新烧录固件，使其恢复工作。 这个案例表明，即使是倡导可维修性和“维修权”的笔记本电脑，也可能因官方固件更新而悄然变砖，而官方提供的恢复手段却很少。它还引发了关于制造商责任的问题：省略 BIOS 烧录接口等设计选择是否把不必要的负担转嫁给了用户。 Framework 的主板上其实有 JSPI 调试接口，但出于成本原因没有焊接连接器，因此作者只能用 pogo 弹簧针接触 SPI 闪存的焊盘。指南还指出，各 PC 厂商的 BIOS 更新导致变砖的情况依然相当常见，恢复通常需要读取原始固件转储并使用烧录器。

hackernews · jp_sc · 8月18日 13:18 · [社区讨论](https://news.ycombinator.com/item?id=49345220)

**背景**: Framework Computer 是一家以模块化、可自主维修笔记本电脑而闻名的公司，支持“维修权”运动。当 BIOS 或固件更新中断或存在缺陷时，系统可能“变砖”——即无法启动。pogo 弹簧针是一种带弹簧的接触探针，无需焊接即可与电路板建立临时电气连接，因此常用于在线烧录固件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Framework_Laptop">Framework Laptop</a></li>
<li><a href="https://www.vitalconn.com/pogo-pins-complete-guide/">Pogo Pins : The Complete Guide To Types, Applications... - Vitalconn</a></li>

</ul>
</details>

**社区讨论**: 评论者对固件更新导致变砖表示不满，并认为制造商应对有缺陷的更新负责，有人甚至建议通过小额索赔法院维权。还有人指出这并非 Framework 独有——ThinkPad 也有类似故障——并说明 Framework 其实有 JSPI 调试接口，只是未焊接。部分评论还呼吁官方更新应延长保修，并批评更新导致旧设备性能下降的趋势。

**标签**: `#hardware hacking`, `#BIOS`, `#firmware`, `#laptop repair`, `#embedded systems`

---

<a id="item-3"></a>
## [Linux 7.3 提升显存耗尽时的性能](https://pixelcluster.dev/VRAM-Overcommit/) ⭐️ 8.0/10

Linux 内核 7.3 改进了系统显存不足时的性能，通过优化内存过量使用处理和虚拟内存碎片管理。这一变化减少了 GPU 内存耗尽时的卡顿和系统不稳定。 这一更新对游戏、AI 推理和渲染等重度 GPU 负载很重要，因为目前显存耗尽时会导致严重的性能下降或崩溃。社区成员指出，它也可能促使英伟达等 GPU 厂商实现真正的显存分页支持。 这些改进针对的是更优的过量使用模式处理以及虚拟内存的就地碎片整理，需要在即时响应和长期性能之间取得平衡。该补丁集尚未合入主线，用户期待它出现在未来的稳定内核版本中。

hackernews · flaburgan · 8月18日 07:51 · [社区讨论](https://news.ycombinator.com/item?id=49342719)

**背景**: Linux 允许内存过量使用（overcommit），即内核分配的内存可以超过物理可用量，并假设进程不会全部用完各自申请的内存。当系统真正耗尽内存时，OOM killer 会挑选进程进行清理。显存碎片化（VRAM fragmentation）是指 GPU 内存以不同大小反复分配和释放后留下空隙，从而降低有效可用内存。英伟达 GPU 历来不支持任何形式的显存分页或交换，导致碎片化和内存耗尽问题尤为突出。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kernel.org/doc/Documentation/vm/overcommit-accounting">The Linux kernel supports the following overcommit handling modes</a></li>
<li><a href="https://www.baeldung.com/linux/memory-overcommitment-oom-killer">Linux Memory Overcommitment and the OOM Killer | Baeldung on Linux</a></li>
<li><a href="https://dasroot.net/posts/2026/02/gpu-memory-fragmentation-cuda-pytorch/">GPU Memory Fragmentation: The Silent Performance Killer</a></li>

</ul>
</details>

**社区讨论**: 评论者对内核改进充满热情，有人希望系统内存满时也能得到更好处理，还有人询问就地碎片整理是否会造成明显卡顿。多位评论者指出，英伟达缺乏显存分页支持仍是主要痛点，同时称赞内核开发者的工作。

**标签**: `#linux`, `#kernel`, `#vram`, `#memory-management`, `#performance`

---

<a id="item-4"></a>
## [Mojo 编译器和工具链现已以 Apache 2.0 协议开源](https://simonwillison.net/2026/Aug/18/mojo-is-now-open-source/) ⭐️ 8.0/10

Modular 已将以 Apache 2.0 许可证开源 Mojo 编译器与工具链，兑现了该语言于 2023 年 5 月首次发布时作出的承诺。此举紧随上周 Mojo 1.0 的发布。 这对 Mojo 而言是一个重要里程碑，它是一门面向 AI 和 GPU 工作负载设计的系统编程语言。将编译器开源有助于建立信任并鼓励社区贡献，可能加速希望获得高性能的 Python 开发者采用它。 Mojo 基于 MLIR 编译器框架构建，可面向 CPU、GPU、TPU 及其他加速器生成代码。成为 Python 完整超集的原始目标已在 2025 年 8 月左右被放弃，该语言现在采用类似 Python 的语法，但不保证兼容性。

rss · Simon Willison · 8月18日 21:39

**背景**: Mojo 是由 Modular 开发的系统编程语言，专为高性能 AI 基础设施和异构硬件设计。它最初旨在成为 Python 的超集，但这一目标后来被重新评估。Mojo 使用 MLIR 编译器框架，可面向 CPU、GPU、TPU 和其他加速器。此次开源发布包括编译器与工具链，采用 Apache 2.0 许可证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mojo_(programming_language)">Mojo (programming language)</a></li>
<li><a href="https://mojolang.org/">Mojo - Modular</a></li>

</ul>
</details>

**标签**: `#programming-language`, `#open-source`, `#compiler`, `#AI`, `#systems`

---

<a id="item-5"></a>
## [Qwen 3.8 27B 在 Artificial Analysis Intelligence Index 获得 52 分](https://simonwillison.net/2026/Aug/17/qwen-38-27b-scores-52/) ⭐️ 8.0/10

阿里巴巴推出的 270 亿参数开源模型 Qwen 3.8 27B 在 Artificial Analysis Intelligence Index 上获得 52 分，与 GPT-5.6 Luna 持平，仅比 GLM-5.2 和 DeepSeek V4 Pro 低 1 分。 这一结果意义重大，因为一个较小的开源模型几乎追平了规模大得多的闭源模型，体现了模型效率和开源 AI 的飞速进步。它也可能挑战大型闭源模型的价值主张。 其中 GLM-5.2 拥有 7530 亿参数，DeepSeek V4 Pro 拥有 1.7 万亿参数，而 Luna 的规模未知，但预计远大于 27B。Qwen 3.8 27B 是一个指令微调模型，面向视觉、通用文本生成和代理工作负载设计。

rss · Simon Willison · 8月17日 23:58

**背景**: Artificial Analysis Intelligence Index 是一个综合基准，融合了代理能力、长上下文推理和针对具体用例的评估。Qwen 是阿里巴巴的开源模型系列，开放权重模型支持本地部署和定制。该指数已从简单的问答数据集演变为衡量模型智能度的更全面指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialanalysis.ai/">AI Model & API Providers Analysis | Artificial Analysis</a></li>
<li><a href="https://artificialanalysis.ai/models">Comparison of AI Models across Intelligence , Performance, and Price</a></li>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen/Qwen3.8-27B · Hugging Face</a></li>

</ul>
</details>

**标签**: `#AI`, `#LLMs`, `#Qwen`, `#open-source`, `#benchmarks`

---

<a id="item-6"></a>
## [中国要求政府机构提前卸载定制版 Windows 10](https://www.bloomberg.com/news/articles/2026-08-18/china-axing-microsoft-windows-from-state-agencies-ahead-of-plan) ⭐️ 8.0/10

中国国家安全部已要求部分政府机构提前卸载定制版 Windows 10（神州网信政府版），将原定 2027 年 2 月的停用时间提前数月，理由是数据安全担忧。微软表示，未发现影响该产品的安全事件，该产品仍定期获得安全更新。 此举表明中国政府 IT 采购中的数据安全审查日趋严格，可能加速政府机构放弃微软产品，影响微软在华企业业务及政府系统的软件供应链，同时可能推动国产操作系统（如麒麟、统信 UOS）的采用。 这一定制版为“Windows 10 神州网信政府版”（CMGE），由微软与中国电子科技集团（CETC）合资成立的神州网信（CMIT）开发。指令提到数据安全担忧，但未说明具体漏洞；微软表示尚未观察到与该产品相关的安全事件。

telegram · zaihuapd · 8月18日 06:22

**背景**: Windows 10 神州网信政府版是微软为中国政府机构和关键信息基础设施定制的 Windows 10 版本，减少了消费级功能，增强了管理与安全控制。其诞生与中国的信息安全政策有关——2014 年 XP 停止支持、Win8 安全问题频发后，国家不再允许机关单位安装使用 Win8。原定 2027 年 2 月逐步淘汰本就是更广泛替换计划的一部分，新指令将这一时间点提前。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gate.com/zh/news/detail/china-accelerates-removal-of-government-customized-windows-10-pulling-23530316">中国加速淘汰政府定制版 Windows 10，将停用日期提前数月</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/661721596">政府都用什么系统？带你了解Windows10神州网信版，干净又安全！</a></li>
<li><a href="https://www.semiw.com/demo/about.html">Windows 10 神州网信政府版 - semiw.com</a></li>

</ul>
</details>

**标签**: `#China`, `#Windows 10`, `#Cybersecurity`, `#Government IT`, `#Microsoft`

---

