# Horizon Daily - 2026-11-07

> From 38 items, 4 important content pieces were selected

---

1. [Baidu Releases ERNIE 5.0, a 2.4-Trillion-Parameter Omni-Modal Model](#item-1) ⭐️ 9.0/10
2. [Firecracker microVM Escape: Practical PwnEscape Exploit Walkthrough](#item-2) ⭐️ 8.0/10
3. [OpenAI Begins Testing Ads in ChatGPT, Expects Them to Drive Nearly Half of Long-Term Revenue](#item-3) ⭐️ 8.0/10
4. [YMTC's Fourth Wuhan Fab Targets Up to 70% Domestic Equipment](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Baidu Releases ERNIE 5.0, a 2.4-Trillion-Parameter Omni-Modal Model](https://t.me/zaihuapd/44959) ⭐️ 9.0/10

Baidu officially released ERNIE 5.0, an omni-modal model with 2.4 trillion parameters that uses unified modeling to handle text, images, audio and video in a single architecture. Baidu claims the model surpasses top international systems such as Gemini-2.5-Pro and GPT-5-High on more than 40 authoritative benchmarks, and says individual users can already access it through the ERNIE platform. If the claims hold up, this puts a Chinese lab at the frontier of model scale and multimodality, directly challenging leading US models on public benchmarks. It also signals that trillion-parameter sparse models are becoming practical deployment targets rather than research experiments, which affects developers, enterprises and the broader competitive landscape in China's AI ecosystem. ERNIE 5.0 uses a Mixture-of-Experts architecture in which fewer than 3% of parameters are activated per inference, keeping compute costs manageable despite the 2.4-trillion-parameter total. Baidu also says 835 experts from technology, finance, culture and education took part in guiding and calibrating the model, though the benchmark results come from a single Telegram report and have not been independently verified.

telegram · zaihuapd · Nov 6, 05:41

**Background**: An omni-modal model is one that perceives and generates across text, image, audio, video and sometimes 3D or action data within a single unified architecture, rather than stitching together separate models for each modality. Mixture-of-Experts (MoE) is a sparse architecture that splits the network into specialized sub-networks called experts and uses a router to activate only the most relevant ones for each token, so total parameter count can grow enormously while per-token compute stays low — the same approach used by models such as Mixtral. This is why a 2.4-trillion-parameter model can still be served economically when only a small fraction of weights fire on each token.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/glossary/omni-model/">What’s an Omni-Model? Definition, Uses, and Benefits - NVIDIA</a></li>
<li><a href="https://arxiv.org/html/2507.11181v1">Mixture of Experts in Large Language Models †: Corresponding...</a></li>
<li><a href="https://hackernoon.com/turbosparse-efficiency-achieving-97percent-parameter-sparsity-in-mixtral-47b">TurboSparse Efficiency: Achieving 97% Parameter Sparsity in...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#LLM`, `#Baidu`, `#ERNIE`, `#multimodal`

---

<a id="item-2"></a>
## [Firecracker microVM Escape: Practical PwnEscape Exploit Walkthrough](https://pwn.ai/blog/firecracker-escape) ⭐️ 8.0/10

Security researchers at pwn.ai published "PwnEscape Part 2," a step-by-step walkthrough showing how to turn the previously disclosed PwnEscape Linux kernel bug into a working escape from a Firecracker microVM onto the host. The writeup walks through the full exploit chain in practical detail rather than presenting a new vulnerability, demonstrating that the isolation boundary can be broken in a realistic Firecracker setup. Firecracker is the isolation primitive behind AWS Lambda and Fargate as well as third-party multi-tenant sandboxes such as Vercel Sandbox, so a demonstrated escape challenges the assumption that microVMs are a hard security boundary between mutually distrusting customers. It shifts the practical burden of defense onto layered containment — the jailer, namespaces, privilege dropping and seccomp — rather than on the hypervisor alone. The researchers explicitly note that their configuration ran without the jailer: no privilege dropping, no namespace restrictions and no seccomp filters, so a deployment that uses Firecracker's production containment requires a separate assessment of what privileges and resources remain reachable after the VMM is compromised. The underlying PwnEscape flaw is a missing sanity check that lets checksum instructions make the host overwrite the IPv4 header length field instead of the checksum field.

hackernews · SerCe · Nov 6, 19:33 · [Discussion](https://news.ycombinator.com/item?id=50397219)

**Background**: Firecracker is AWS's open-source virtual machine monitor: it runs in user space on top of KVM, deliberately strips out unnecessary devices to shrink its attack surface, and boots lightweight "microVMs" in a fraction of a second with very low memory overhead, which is what makes per-tenant isolation economically viable for serverless platforms. Because the guest runs its own Linux kernel, a bug in how the host-side VMM handles guest-controlled data can become a path from guest to host. Firecracker ships with a companion program called the Jailer, which is meant to wrap the Firecracker process in namespaces and cgroups, drop privileges and apply a seccomp filter before exec'ing the binary — the layered containment that this writeup's test setup omitted.

<details><summary>References</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50397219">Firecracker VM Escape : PwnEscape Part 2 | Hacker News</a></li>
<li><a href="https://thehackernews.com/2026/10/critical-pwnescape-linux-kernel.html">Critical PwnEscape Linux Kernel Vulnerability Lets Guest VMs Read...</a></li>
<li><a href="https://github.com/firecracker-microvm/firecracker/blob/main/docs/jailer.md">firecracker/docs/jailer.md at main · firecracker-microvm ...</a></li>

</ul>
</details>

**Discussion**: The dominant reaction was pushback on the article's framing: commenters argued the writeup buries the fact that no jailer was used, and that a properly jailed, seccomp-filtered deployment would need a separate exploitation path. Others used the thread to argue architecturally for formally verified microkernels like Nova (hypervisor.org), while several noted this is practical exploitation of an already-disclosed bug rather than a novel one and linked an earlier, less-voted duplicate submission; one operator even offered a public ClickBench playground hosting hundreds of database engines as a PoC target.

**Tags**: `#security`, `#virtualization`, `#firecracker`, `#exploit-development`, `#cloud-infrastructure`

---

<a id="item-3"></a>
## [OpenAI Begins Testing Ads in ChatGPT, Expects Them to Drive Nearly Half of Long-Term Revenue](https://t.me/zaihuapd/44955) ⭐️ 8.0/10

On February 9, OpenAI began testing clearly labeled advertisements inside ChatGPT, placing them in a separate area below the conversation window and showing them to free and Go-tier subscribers. CEO Sam Altman said OpenAI expects advertising to eventually account for less than 50% of total revenue, and noted that ChatGPT's monthly growth rate has climbed back above 10%. This marks a major strategic shift for the company that has been the highest-profile example of subscription-only consumer AI, signaling that inference costs may not be sustainable through subscriptions alone. If ads work at scale in ChatGPT, they could set the default monetization blueprint for consumer AI assistants across the industry, affecting both competitors and the advertisers who reach hundreds of millions of users. OpenAI says ads will be optimized based on user needs but will not access private conversations, and advertisers cannot influence the model's answers — the ad slot is kept visually separate from the response. Altman's "under 50% of revenue" framing indicates subscriptions and API usage would still supply the majority of income, and OpenAI also plans to release an updated chat model this week.

telegram · zaihuapd · Nov 6, 03:15

**Background**: ChatGPT launched in late 2022 as a free product and later added paid tiers such as Plus, while a lower-cost ChatGPT Go plan was rolled out to make access cheaper in price-sensitive markets such as Malaysia and the Philippines. Running large language models is expensive, since every query consumes GPU compute, so free users have generally been subsidized by paying subscribers and API customers. Advertising has long been the standard way to monetize free consumer internet services, but inserting ads into a conversational assistant raises novel questions about relevance, privacy, and whether sponsored content can be kept separate from the model's answers.

<details><summary>References</summary>
<ul>
<li><a href="https://bluelightningtv.com/2026/01/19/chatgpt-ads-and-new-go-plan-explained/">ChatGPT Ads and New Go Plan Explained - Blue Lightning</a></li>
<li><a href="https://ads.openai.com/">Advertise in ChatGPT | OpenAI Ads</a></li>
<li><a href="https://openai.com/index/building-chatgpt-ad-stack/">How we built ChatGPT’s novel ad stack for user ... - OpenAI</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#ChatGPT`, `#advertising`, `#AI monetization`, `#AI business model`

---

<a id="item-4"></a>
## [YMTC's Fourth Wuhan Fab Targets Up to 70% Domestic Equipment](https://www.reuters.com/world/china/chinas-top-flash-memory-chipmaker-targets-more-homegrown-tools-new-factory-2026-11-06/) ⭐️ 8.0/10

Yangtze Memory Technologies (YMTC) plans to build a fourth fab in Wuhan, scheduled to break ground in 2027, with a target of sourcing at least 60% — and as much as 70% — of its equipment from domestic Chinese suppliers, up from more than 50% at its third fab. The new facility will make advanced NAND flash with more than 300 stacked layers, aimed at data-center and AI storage demand. The plan is one of the clearest signals yet of how US export controls are pushing China's memory champion toward a self-contained supply chain, and a 70% domestic equipment rate would give Chinese toolmakers their largest reference customer to date. If YMTC brings all three of its new fabs online, its total capacity could roughly double, strengthening its challenge to Samsung, SK Hynix and Kioxia in NAND. Cleaning, polishing (CMP) and etching tools are expected to account for the bulk of the incremental domestic purchases, while advanced steps such as lithography and inspection still depend on overseas suppliers. YMTC's share of China's NAND market has reportedly climbed to 38.5%, overtaking Samsung, and the company uses its proprietary Xtacking architecture, which processes the peripheral CMOS circuitry and the memory array on separate wafers before bonding them together.

telegram · zaihuapd · Nov 6, 08:34

**Background**: 3D NAND achieves density mainly by stacking more layers vertically rather than shrinking laterally, and moving beyond roughly 300 layers introduces hard physics problems: the tungsten word lines connecting cells suffer from high resistance and fluorine-based chemistry causes leakage, which is why 300+ layer production is a major technical milestone. YMTC was placed on the US Entity List in 2022, restricting its access to advanced American chipmaking equipment, so substituting domestic tools is both a cost and a survival strategy. Chemical mechanical polishing (CMP) is a core step that planarizes wafer surfaces between deposition and etch steps, and it typically accounts for only a few percent of total semiconductor equipment spending, making it a relatively accessible target for local vendors.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ymtc.com/cn/technicalintroduction.html">晶栈® Xtacking ®先进 架 构 - 长 江 存 储</a></li>
<li><a href="http://www.linuxeden.com/a/164196">闪 存 材料大变革！ SemiAnalysis： 300 层 以 上 NAND ...</a></li>
<li><a href="https://cloud.tencent.com/developer/news/3691175">一文了解 化 学 机 械 抛 光 CMP 设 备 及工艺技术 - 腾讯云开发者社区-腾讯云</a></li>

</ul>
</details>

**Tags**: `#semiconductors`, `#NAND flash`, `#YMTC`, `#export controls`, `#China tech`

---

