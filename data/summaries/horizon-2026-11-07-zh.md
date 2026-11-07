# Horizon 每日速递 - 2026-11-07

> 从 38 条内容中筛选出 4 条重要资讯。

---

1. [百度发布文心 5.0 全模态大模型，参数规模达 2.4 万亿](#item-1) ⭐️ 9.0/10
2. [Firecracker microVM 逃逸：PwnEscape 漏洞的实战利用详解](#item-2) ⭐️ 8.0/10
3. [OpenAI 开始在 ChatGPT 中测试广告，预计长期贡献近半营收](#item-3) ⭐️ 8.0/10
4. [长江存储第四座武汉工厂国产设备占比拟最高达 70%](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [百度发布文心 5.0 全模态大模型，参数规模达 2.4 万亿](https://t.me/zaihuapd/44959) ⭐️ 9.0/10

百度今日正式发布文心 5.0 全模态大模型，参数规模达 2.4 万亿，采用全模态统一建模技术，可在同一架构下同时处理文本、图像、音频和视频等多种信息类型。百度称该模型在超过 40 项权威基准测试中表现超越 Gemini-2.5-Pro 和 GPT-5-High 等国际顶尖模型，目前个人用户已可通过文心平台使用。 如果这些说法得到验证，意味着中国实验室在模型规模与多模态能力上已进入最前沿，在公开基准上直接挑战美国顶尖模型。这也表明万亿参数级的稀疏模型正从研究实验走向实际部署，将对开发者、企业用户以及中国 AI 生态的竞争格局产生影响。 文心 5.0 采用混合专家（MoE）结构，单次推理激活的参数不足总量的 3%，使其在 2.4 万亿总参数规模下仍能控制算力开销。百度还表示邀请了来自科技、金融、文化、教育等领域的 835 位专家参与模型指导与校准，不过上述基准成绩仅来自一条 Telegram 消息，尚未获得独立验证。

telegram · zaihuapd · 11月6日 05:41

**背景**: 全模态模型是指在同一个统一架构内感知并生成文本、图像、音频、视频乃至 3D 或动作数据，而不是为每种模态分别拼接独立模型。混合专家（MoE）是一种稀疏架构，它把网络拆分为若干称为“专家”的子网络，并通过路由器为每个 token 只激活最相关的少数专家，因此总参数量可以大幅扩张，而单 token 的计算量仍然较低，Mixtral 等模型也采用了类似思路。这正是 2.4 万亿参数模型在每次只激活很小一部分权重时仍能经济地提供服务的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/glossary/omni-model/">What’s an Omni-Model? Definition, Uses, and Benefits - NVIDIA</a></li>
<li><a href="https://arxiv.org/html/2507.11181v1">Mixture of Experts in Large Language Models †: Corresponding...</a></li>
<li><a href="https://hackernoon.com/turbosparse-efficiency-achieving-97percent-parameter-sparsity-in-mixtral-47b">TurboSparse Efficiency: Achieving 97% Parameter Sparsity in...</a></li>

</ul>
</details>

**标签**: `#AI`, `#LLM`, `#Baidu`, `#ERNIE`, `#multimodal`

---

<a id="item-2"></a>
## [Firecracker microVM 逃逸：PwnEscape 漏洞的实战利用详解](https://pwn.ai/blog/firecracker-escape) ⭐️ 8.0/10

pwn.ai 的安全研究人员发布了《PwnEscape Part 2》，以分步教程的形式演示了如何将此前已披露的 PwnEscape Linux 内核漏洞转化为一次可用的 Firecracker microVM 逃逸，从客户机一路打到宿主机。该文章并非公布新漏洞，而是以实战化、可复现的方式串起完整的利用链，证明在真实的 Firecracker 部署中隔离边界确实可能被突破。 Firecracker 是 AWS Lambda、Fargate 以及 Vercel Sandbox 等第三方多租户沙箱背后的隔离基石，因此一次被实证的逃逸会动摇“microVM 就是互不信任租户之间的硬隔离边界”这一假设。它把实际的防御重心从 hypervisor 本身转移到 jailer、命名空间、权限降级与 seccomp 构成的多层防护上。 研究人员明确指出，其实验环境并未启用 jailer：既没有权限降级，也没有命名空间限制和 seccomp 过滤，因此对于采用 Firecracker 生产级隔离配置的部署，仍需单独评估 VMM 被攻陷后攻击者还能触达哪些权限与资源。PwnEscape 漏洞的本质是缺少一项健全性检查，使得校验和指令让宿主机覆写 IPv4 头部的长度字段，而不是校验和字段。

hackernews · SerCe · 11月6日 19:33 · [社区讨论](https://news.ycombinator.com/item?id=50397219)

**背景**: Firecracker 是 AWS 开源的虚拟机监视器：它运行在用户态、依托 KVM，刻意裁掉不必要的设备以缩小攻击面，并能以极低的内存开销在零点几秒内启动轻量级 microVM，这正是无服务器平台能够为每个租户单独开一台虚拟机的前提。由于客户机内运行着自己的 Linux 内核，宿主机侧 VMM 在处理客户机可控数据时的任何缺陷都可能变成从客户机通往宿主机的通道。Firecracker 还配有一个名为 Jailer 的伴生程序，负责在执行 Firecracker 二进制之前把进程放进命名空间与 cgroup、降权并施加 seccomp 过滤——而本文的测试环境恰恰省去了这层防护。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50397219">Firecracker VM Escape : PwnEscape Part 2 | Hacker News</a></li>
<li><a href="https://thehackernews.com/2026/10/critical-pwnescape-linux-kernel.html">Critical PwnEscape Linux Kernel Vulnerability Lets Guest VMs Read...</a></li>
<li><a href="https://github.com/firecracker-microvm/firecracker/blob/main/docs/jailer.md">firecracker/docs/jailer.md at main · firecracker-microvm ...</a></li>

</ul>
</details>

**社区讨论**: 社区最主流的反应是对文章叙事方式的质疑：评论者认为文章淡化甚至轻描淡写了“未启用 jailer”这一前提，而一个正确启用 jailer 与 seccomp 过滤的部署需要另一条独立的利用路径。也有人借机从架构层面为 Nova（hypervisor.org）这类经过形式化验证的微内核辩护；还有多位评论者指出这只是对已披露漏洞的实战化利用而非新漏洞，并贴出了更早、得票较少的重复投稿；甚至有运营者表示愿意用其托管数百个数据库引擎的公开 ClickBench playground 作为 PoC 靶场。

**标签**: `#security`, `#virtualization`, `#firecracker`, `#exploit-development`, `#cloud-infrastructure`

---

<a id="item-3"></a>
## [OpenAI 开始在 ChatGPT 中测试广告，预计长期贡献近半营收](https://t.me/zaihuapd/44955) ⭐️ 8.0/10

OpenAI 于 2 月 9 日开始在 ChatGPT 中测试带有明确标记的广告，广告出现在对话窗口下方的独立区域，面向免费用户和 Go 订阅用户展示。首席执行官 Sam Altman 表示，OpenAI 预计广告长期将占总营收的 50% 以下，并透露 ChatGPT 的月增长率已重回 10% 以上。 对于一直被视为纯订阅制消费级 AI 最高调样本的 OpenAI 而言，这是一次重大战略转向，也说明仅靠订阅可能难以覆盖推理成本。如果广告模式在 ChatGPT 上规模化跑通，它很可能成为整个行业消费级 AI 助手的默认变现范式，影响竞争对手以及能够触达数亿用户的广告主。 OpenAI 表示广告会基于用户需求进行优化，但不会接触私人对话，广告主也无法干预模型给出的答案，广告位在视觉上与回答内容保持分离。Altman 所说的“占总营收 50% 以下”意味着订阅和 API 调用仍将贡献主要收入；此外 OpenAI 还计划于本周发布更新版的聊天模型。

telegram · zaihuapd · 11月6日 03:15

**背景**: ChatGPT 于 2022 年底以免费产品形式推出，此后增加了 Plus 等付费档位，并推出了价格更低的 ChatGPT Go 订阅，以便在马来西亚、菲律宾等价格敏感市场降低使用门槛。运行大语言模型成本高昂，每次提问都要消耗 GPU 算力，因此免费用户长期以来实质上由付费订阅者和 API 客户补贴。广告一直是免费消费级互联网服务的标准变现方式，但把广告嵌入对话式助手，会在相关性、隐私以及赞助内容能否与模型答案保持隔离等方面带来新问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bluelightningtv.com/2026/01/19/chatgpt-ads-and-new-go-plan-explained/">ChatGPT Ads and New Go Plan Explained - Blue Lightning</a></li>
<li><a href="https://ads.openai.com/">Advertise in ChatGPT | OpenAI Ads</a></li>
<li><a href="https://openai.com/index/building-chatgpt-ad-stack/">How we built ChatGPT’s novel ad stack for user ... - OpenAI</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#ChatGPT`, `#advertising`, `#AI monetization`, `#AI business model`

---

<a id="item-4"></a>
## [长江存储第四座武汉工厂国产设备占比拟最高达 70%](https://www.reuters.com/world/china/chinas-top-flash-memory-chipmaker-targets-more-homegrown-tools-new-factory-2026-11-06/) ⭐️ 8.0/10

长江存储计划在武汉建设第四座工厂，预计 2027 年开工，目标是把国产设备采购比例提高到至少 60%、最高 70%，高于第三座工厂目前超过 50%的水平。新工厂将生产堆叠层数超过 300 层的先进 NAND 闪存，主要面向数据中心和人工智能存储需求。 这一计划是迄今为止最清晰的信号之一，表明美国出口管制正推动中国存储龙头走向自主可控的供应链；若国产设备占比达到 70%，将为中国设备厂商提供迄今规模最大的标杆客户。若三座新厂全部投产，长江存储的整体产能有望翻倍，从而增强其在 NAND 领域对三星、SK 海力士和铠侠的挑战。 预计清洗、抛光（CMP）和刻蚀设备将成为国产增量的主要部分，而光刻、检测等先进环节仍依赖海外供应商。据报道，长江存储在中国 NAND 市场的份额已升至 38.5%，超过三星；该公司采用自研的 Xtacking 架构，将外围 CMOS 电路与存储阵列分别在独立晶圆上加工后再键合。

telegram · zaihuapd · 11月6日 08:34

**背景**: 3D NAND 主要依靠垂直堆叠更多层数而非横向微缩来提升密度，而层数突破约 300 层后会遇到明显的物理瓶颈：连接各存储单元的钨字线电阻过高，含氟化学工艺还会引发漏电问题，因此 300 层以上的量产是一项重要的技术里程碑。长江存储于 2022 年被列入美国实体清单，获取先进美国芯片制造设备受限，因此设备国产化既是降本手段也是生存策略。化学机械抛光（CMP）是在沉积与刻蚀工序之间实现晶圆表面全局平坦化的关键步骤，通常仅占半导体设备投资总额的百分之几，因此相对容易成为本土设备厂商的突破口。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ymtc.com/cn/technicalintroduction.html">晶栈® Xtacking ®先进 架 构 - 长 江 存 储</a></li>
<li><a href="http://www.linuxeden.com/a/164196">闪 存 材料大变革！ SemiAnalysis： 300 层 以 上 NAND ...</a></li>
<li><a href="https://cloud.tencent.com/developer/news/3691175">一文了解 化 学 机 械 抛 光 CMP 设 备 及工艺技术 - 腾讯云开发者社区-腾讯云</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#NAND flash`, `#YMTC`, `#export controls`, `#China tech`

---

