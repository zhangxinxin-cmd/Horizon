# Horizon Daily - 2026-11-03

> From 42 items, 5 important content pieces were selected

---

1. [Astra Claims It Can Read and Edit Qwen Weights](#item-1) ⭐️ 9.0/10
2. [Raspberry Pi 5 launches with 2.4GHz Cortex-A76 and dual 4K60 HDMI, from $60](#item-2) ⭐️ 9.0/10
3. [vLLM v0.33.0rc3: PyTorch 2.14, CUDA 13.0-only wheels, and a wave of new models](#item-3) ⭐️ 8.0/10
4. [ChatGPT share-link flaw allowed account takeover, now patched](#item-4) ⭐️ 8.0/10
5. [Critical Linux kernel IPv4 TCP use-after-free (CVE-2026-98432) enables remote RCE](#item-5) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Astra Claims It Can Read and Edit Qwen Weights](https://rikiyat.github.io/blog/weight-space-programming/) ⭐️ 9.0/10

A blog post claims that Astra, described in coverage as GPT-6 Astra, can inspect and directly edit the weights of small neural networks; one reported experiment hand-edited Qwen3.5-0.8B, changing 131,072 weights and raising MATH-500 accuracy from 7.9% to 48.1%, roughly a sixfold gain. If the claims hold up, direct weight-space programming would be a major shift for interpretability, model steering, and AI safety, because capabilities could be altered without retraining or prompt engineering. It could also sharpen debates over recursive self-improvement, since a model that understands and edits other models' weights is closer to an AI that can improve AI systems. The reported Qwen edit touched only about 0.016% of the model's nominal 800 million parameters, targeting a looping behavior that Astra traced to a direction written by MLPs in layers 15 and 19 and then subtracted from 64 output columns. Astra reportedly used Python to calculate replacement values and submitted the edited tensors for testing, but the results are limited to small models and have not been independently verified.

hackernews · dbreunig · Nov 2, 18:21 · [Discussion](https://news.ycombinator.com/item?id=50341174)

**Background**: Qwen is Alibaba Cloud's family of open-weight language models, and the 0.8B variant is a small model used in research because it is cheap to run and inspect. Neural network weights are the learned parameters that determine a model's behavior; normally researchers influence them through training or fine-tuning rather than by directly editing individual tensors. Recursive self-improvement is the hypothesized process by which an AI system improves its own capabilities, often discussed as both a potential breakthrough and a safety risk.

<details><summary>References</summary>
<ul>
<li><a href="https://explainx.ai/blog/weight-space-programming-gpt-6-astra-edits-qwen3-5-0-8b-weights-math-7-9-to-48-1-mit-csail-2026">GPT-6 Astra Edits Qwen Weights: MATH-500 7.9% to 48.1% ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Qwen">Qwen - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Recursive_self-improvement">Recursive self - improvement - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Hacker News commenters were split between astonishment and skepticism: vessenes called the results "insane" and said they would have expected LLMs to have less-than-human understanding of their own weights, while xg15 saw it as consistent with LLMs' knack for rapidly grasping complex systems. vanyle argued the capability is probably not emergent but the product of training Astra on neural-weight data as an OpenAI attempt at recursive self-improvement, comparing it to early GPT models that learned chess from training data. Others highlighted technical specifics, such as the layer-15/19 looping fix.

**Tags**: `#LLM interpretability`, `#weight editing`, `#Qwen`, `#recursive self-improvement`, `#AI safety`

---

<a id="item-2"></a>
## [Raspberry Pi 5 launches with 2.4GHz Cortex-A76 and dual 4K60 HDMI, from $60](https://t.me/zaihuapd/44854) ⭐️ 9.0/10

The Raspberry Pi 5 has been officially announced, bringing a 2.4GHz quad-core 64-bit Arm Cortex-A76 CPU and a VideoCore VII GPU with OpenGL ES 3.1 and Vulkan 1.2 support. It adds dual 4K60p HDMI outputs, a 4K60p HEVC decoder, dual-band 802.11ac Wi-Fi, Bluetooth 5.0/BLE and two USB 3.0 ports, priced at $60 for the 4GB model and $80 for 8GB (plus local taxes). This is the biggest generational jump for the Raspberry Pi platform in years, moving from the Cortex-A72 to a laptop-class Cortex-A76 core and adding a much stronger GPU, which makes the board far more credible as a desktop-class machine rather than just a hobbyist board. It directly affects embedded-systems developers, makers, industrial integrators and education users who build on the Pi ecosystem. The A76 cores are paired with the 16nm Broadcom BCM2712 SoC and a VideoCore VII GPU clocked up to 800MHz, and the board also supports high-speed microSD in SDR104 mode plus simultaneous 5Gbps operation across its two USB 3.0 ports. As with other Raspberry Pi launches, the headline prices exclude local taxes and shipping, and actual availability tends to lag the announcement.

telegram · zaihuapd · Nov 2, 12:00

**Background**: The Raspberry Pi is a low-cost credit-card-sized single-board computer that runs Linux and is widely used in education, prototyping and embedded products; each new generation is defined largely by its Arm CPU core and Broadcom GPU. The Cortex-A76 is Arm's out-of-order, superscalar core designed to deliver "laptop-class performance with mobile efficiency," replacing the older Cortex-A72 used in the Raspberry Pi 4. VideoCore VII is Broadcom's integrated GPU built into the BCM2712 SoC, and SDR104 is a high-speed UHS-I SD bus mode that roughly doubles card throughput versus older modes.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ARM_Cortex-A76">ARM Cortex-A76 - Wikipedia</a></li>
<li><a href="https://www.notebookcheck.net/Extreme-Graphics-2-vs-VideoCore-VII_9700_54_12760.247598.0.html">Intel Extreme Graphics 2 vs Broadcom VideoCore VII</a></li>
<li><a href="https://www.raspberrypi.com/documentation/accessories/sd-cards.html">SD Cards - Raspberry Pi Documentation</a></li>

</ul>
</details>

**Tags**: `#Raspberry Pi`, `#single-board computer`, `#Arm Cortex-A76`, `#hardware release`, `#embedded systems`

---

<a id="item-3"></a>
## [vLLM v0.33.0rc3: PyTorch 2.14, CUDA 13.0-only wheels, and a wave of new models](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3) ⭐️ 8.0/10

vLLM released v0.33.0rc3, a 927-commit release from 389 contributors that adds support for models including Reflection Beam-1.0 (501B MoE, 23B active), Yandex AliceAI-Foundation-80B-A3B, Recursive Flint, Muse Spark Open, Step-5 Preview, NVIDIA Alpamayo 2 Super, Nemotron Parse 3.5 and MiniCPM-OCR 1.0. It upgrades the stack to PyTorch 2.14.0 with torchvision 0.29.0 and Triton 3.8.0, drops CUDA 12.9 artifacts in favor of CUDA 13.0-only wheels and images, and makes the CUDA wheel ABI-stable with libtorch. vLLM is one of the most widely used open-source LLM inference and serving engines, so its dependency and artifact decisions ripple across anyone deploying models in production — dropping CUDA 12.9 forces older-driver environments to upgrade or pin an earlier release. The performance work (speculative decoding refinements, MonoKernel decode on ROCm, Blackwell-specific kernels) translates directly into lower latency and higher throughput per GPU, which is the main cost lever for LLM serving. Notable engineering changes include the removal of Medusa and the MLP speculator, removal of the legacy Ray compiled-graph executor, deprecation of `--mamba-cache-mode`, and returning HTTP 503 for requests sent while generation is paused, plus a new AWS EFA image for KV transfer and multi-node serving on EFA-enabled EC2 instances. Benchmarks cited in the release notes claim large gains in specific configurations, such as DFlash/DSpark no longer reserving draft slots in the token budget taking DeepSeek-V4.1-Flash on GB300 from 1373 to 3390 output tok/s, and ROCm's `ROCM_OCTAVE` 3-4 bit KV cache reaching 4.6x the KV tokens of fp16 on an RX 7900 XTX.

github · khluu · Nov 2, 10:10

**Background**: vLLM is an open-source, high-throughput and memory-efficient inference and serving engine for large language models, originally developed in the Sky Computing Lab at UC Berkeley, whose core innovation was PagedAttention for managing the KV cache. Many of the newly supported models are Mixture-of-Experts (MoE) architectures, which split the network into specialized sub-networks and route each token to only a few of them, enabling very large total parameter counts with modest per-token compute — hence labels like "501B MoE, 23B active". The libtorch ABI-stability work means the compiled CUDA wheel can be used against a range of PyTorch releases without recompiling, a long-standing request tracked in vLLM RFCs and PyTorch's stable-ABI effort.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm">vllm -project/ vllm : A high-throughput and memory-efficient inference ...</a></li>
<li><a href="https://docs.pytorch.org/docs/2.14/notes/libtorch_stable_abi.html">LibTorch Stable ABI — PyTorch 2.14 documentation</a></li>
<li><a href="https://researchaudio.io/p/mixture-of-experts-moe-in-large-language-models">Mixture of Experts ( MoE ) in Large Language Models</a></li>

</ul>
</details>

**Tags**: `#vLLM`, `#LLM inference`, `#release`, `#PyTorch`, `#CUDA`

---

<a id="item-4"></a>
## [ChatGPT share-link flaw allowed account takeover, now patched](https://www.parameter.ai/labs/we-found-a-gap-at-openai) ⭐️ 8.0/10

Security researchers at Parameter discovered that a malicious ChatGPT share link could execute arbitrary code inside the session of any logged-in user who simply opened it, allowing the attacker to read private conversations and send the data to an external server. OpenAI fixed the issue on October 26, rated it a P1 (highest-priority) vulnerability, and paid the team a $5,000 bug bounty. Because the exploit required no installation and no user interaction beyond clicking a link, it turned an ordinary shareable conversation into a potential account-takeover channel for hundreds of millions of ChatGPT users. It also highlights how the growing surface of rich, embedded content in AI chat interfaces — previews, charts, and rendered artifacts — is becoming a serious security risk. The flaw stemmed from a message-handling defect between ChatGPT's link-preview feature and its chart component, so content rendered inside a shared conversation could send messages that the page treated as trusted. Disclosure was coordinated, with Parameter publishing its write-up on October 28, two days after the October 26 fix.

telegram · zaihuapd · Nov 2, 10:24

**Background**: ChatGPT's share feature lets a user publish a snapshot of a conversation as a public link, and that page re-renders what was in the chat — code interpreter outputs, file previews, generated images, and Canvas artifacts. Such pages typically embed multiple components that communicate with each other through browser messaging APIs like postMessage, and if the receiving side does not validate the sender, injected content can run with the privileges of the hosting origin (chatgpt.com). Severity ratings like P1 in bug-bounty programs denote the most urgent class of issues, typically those enabling remote code execution or account takeover, which is why OpenAI shipped a fix quickly and paid a bounty.

<details><summary>References</summary>
<ul>
<li><a href="https://aicoder.com/zh/news/news-20261030-parameter-chatgpt-share-link-account-takeover-mathlive-p1-fixed-oct-26-5000-bounty">安全公司 Parameter 披露 ChatGPT 分享链接漏洞：打开一个链接就能被...</a></li>
<li><a href="https://youlidao.ai/zh/intelligence/chatgpt-account-takeover-how-parameter-ai-hacked-openai">ChatGPT 账户劫持：Parameter.ai 如何攻破 OpenAI 防线</a></li>
<li><a href="https://www.parameter.ai/">Parameter | AI Pentesting & Continuous Security</a></li>

</ul>
</details>

**Tags**: `#security`, `#ChatGPT`, `#vulnerability`, `#account takeover`, `#AI`

---

<a id="item-5"></a>
## [Critical Linux kernel IPv4 TCP use-after-free (CVE-2026-98432) enables remote RCE](https://t.me/zaihuapd/44866) ⭐️ 8.0/10

A Telegram security alert warns that CVE-2026-98432, a high-severity use-after-free in the Linux kernel's IPv4 TCP stack, can be triggered from the network side with no authentication and no user interaction, and an RCE proof-of-concept targeting MPTCP listen ports has already been published. The alert stresses that the flaw is not limited to MPTCP setups, and that Go 1.24+ services on Linux are exposed by default because the runtime enables MPTCP on listen sockets. Any unpatched Linux server reachable over the network is potentially exposed to unauthenticated remote code execution, which puts this in the same operational urgency class as past critical TCP-stack flaws. The blast radius is unusually wide because Go 1.24+ turns MPTCP on by default for TCP listeners on Linux, meaning a large population of Go-based services is affected without any MPTCP-specific configuration. Go's security team notes that even services that are not listening for MPTCP may be vulnerable to the same class of attack, so simply disabling MPTCP is not a complete workaround; patching the kernel is the recommended fix. For context, MPTCP listen sockets fall back to creating plain accepted TCP sockets when the client does not request MPTCP, so the feature can be enabled with minimal performance impact and is often on silently.

telegram · zaihuapd · Nov 3, 02:37

**Background**: MPTCP (Multipath TCP) is an extension to TCP implemented in the Linux kernel that lets one connection use several underlying TCP sessions at once for better redundancy and throughput; the kernel creates these subflow sockets as ordinary TCP sockets whose behavior is modified via TCP-ULP. A use-after-free bug means a chunk of kernel memory is released while still being referenced, so an attacker can influence or reuse that memory, which in kernel networking code can escalate to remote code execution. Since Go 1.24, the Go runtime enables MPTCP by default for TCP listeners on Linux whenever the kernel supports it, which is why a kernel-level TCP flaw suddenly reaches a broad set of Go services with no MPTCP-specific configuration.

<details><summary>References</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/critical-linux-kernel-flaw-allows-remote-root-attacks-on-mptcp-servers/">Critical Linux kernel flaw allows remote root attacks on MPTCP servers</a></li>
<li><a href="https://docs.kernel.org/networking/mptcp.html">Multipath TCP (MPTCP) — The Linux Kernel documentation</a></li>
<li><a href="https://www.mptcp.dev/details.html">Implementation details (Kernel) | Multipath TCP for Linux</a></li>

</ul>
</details>

**Tags**: `#linux-kernel`, `#security-vulnerability`, `#cve`, `#networking`, `#go`

---

