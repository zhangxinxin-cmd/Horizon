# Horizon Daily - 2026-10-13

> From 38 items, 8 important content pieces were selected

---

1. [Python 3.15 Arrives with PEP 810 Explicit Lazy Imports](#item-1) ⭐️ 9.0/10
2. [OpenAI Releases Math Results From Internal Frontier Model](#item-2) ⭐️ 9.0/10
3. [Hackers Trigger Defrost Cycles in European Supermarket Fridges](#item-3) ⭐️ 8.0/10
4. [WiFi 7 Router Repurposed as a 320 Msps Software Defined Radio Receiver](#item-4) ⭐️ 8.0/10
5. [Codex CLI installs a persistent, self-updating background daemon by default](#item-5) ⭐️ 8.0/10
6. [Show HN: PS2 games statically recompiled to WebAssembly for the browser](#item-6) ⭐️ 8.0/10
7. [Looped Diffusion Transformer Reuses Shared Blocks Inside Each Denoising Step](#item-7) ⭐️ 8.0/10
8. [learnc Auto-Tunes Constants in Existing C Code, Shrinking JPEGs 9.1%](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Python 3.15 Arrives with PEP 810 Explicit Lazy Imports](https://simonwillison.net/2026/Oct/12/python-3-15/) ⭐️ 9.0/10

Python 3.15 has been released, and Simon Willison highlights the new "What's new in Python 3.15" guide curated by release manager Hugo van Kemenade. The headline feature is explicit lazy imports from PEP 810, which adds `lazy import json` and `lazy from pathlib import Path` syntax, alongside PEP 798 unpacking in comprehensions such as `[*sublist for sublist in lists]`. Lazy imports change a fundamental behavior of the language: modules marked with `lazy` are only executed the first time their symbols are actually used, which can cut startup time and memory usage for CLI tools, test suites, and applications with large dependency graphs. Because Python is one of the most widely used languages, this affects essentially every developer, plugin author, and tooling maintainer in the ecosystem. With `lazy import`, the module is deferred until one of the imported symbols is first used, rather than being executed immediately as with a normal import; PEP 810 takes an explicit, opt-in approach rather than the implicit global behavior of PEP 690, which was withdrawn in 2023. Simon Willison notes that his LLM CLI tool previously had to tell plugin authors to hand-roll lazy imports because installing plugins with heavy dependencies like `sentence_transformers` could add seconds to every invocation. PEP 798's unpacking syntax extends the unpacking generalizations from PEP 448 that landed in Python 3.5, and `[*L for L in lists]` is equivalent to `[x for L in lists for x in L]`.

rss · Simon Willison · Oct 12, 18:15

**Background**: Python ships a new minor version roughly every October, and each release is supported for about five years; the arrival of 3.15 means Python 3.10 has reached the end of its support window, so library maintainers like Simon Willison who support every supported version can drop it and start using Python 3.11 features. In Python, an `import` statement normally executes the entire imported module at that point in the program, which is convenient but can be expensive when a module pulls in large dependencies that are not needed for every run. Lazy imports have long existed as third-party libraries or standard-library tricks, but PEP 810 makes the capability part of the language itself. PEP 798 is a smaller syntactic quality-of-life improvement that lets you flatten nested iterables directly inside a list, set, or dict comprehension instead of writing a nested loop.

<details><summary>References</summary>
<ul>
<li><a href="https://peps.python.org/pep-0810/">PEP 810 – Explicit lazy imports | peps.python.org</a></li>
<li><a href="https://blog.jetbrains.com/pycharm/2026/06/explicit-lazy-imports-are-coming-to-python-3-15/">Explicit Lazy Imports Are Coming to Python 3.15 - The ...</a></li>
<li><a href="https://pydevtools.com/handbook/explanation/what-is-pep-810/">What is PEP 810 ? | pydevtools</a></li>

</ul>
</details>

**Tags**: `#Python`, `#programming languages`, `#PEP 810`, `#lazy imports`, `#release`

---

<a id="item-2"></a>
## [OpenAI Releases Math Results From Internal Frontier Model](https://t.me/zaihuapd/44351) ⭐️ 9.0/10

OpenAI published a GitHub collection of mathematical results produced by an internal, unreleased frontier model, containing 722 manuscripts and 372 result series that touch on long-unsolved problems, with many proofs formalized and checked in Lean. The repository states that the model consumed roughly 3 hours of ChatGPT Pro thinking compute per result, attempted about 4,000 problems during evaluation, and shipped 10 reasoning summaries, while noting that some results are still undergoing verification. If the claims hold up, this would be one of the largest public demonstrations that a frontier AI system can make original progress on open mathematical problems rather than only solving textbook-style exercises, which would intensify the race among OpenAI, Google DeepMind and others in AI-for-mathematics. It also matters because the results are tied to an unreleased internal model, signaling that the strongest reasoning capabilities are being held back from public APIs. The headline numbers are 722 manuscripts, 372 result series, roughly 3 hours of ChatGPT Pro thinking compute per result, and about 4,000 attempted problems, plus 10 published reasoning summaries. The key caveat is that OpenAI itself says some results are still being verified, and the underlying model is not released, so independent reproduction and peer review of the mathematics will be the real test of the claims.

telegram · zaihuapd · Oct 12, 03:00

**Background**: Lean is an open-source proof assistant and functional programming language, developed since 2013 and now supported by the nonprofit Lean Focused Research Organization, in which proofs are written in code so that a machine can check every logical step. This kind of machine-checkable proof is an example of formal verification, the practice of proving a system or statement correct against a precise mathematical specification. AI for mathematics has become an active research area, with systems increasingly used to assist theorem proving, conjecture formulation and problem solving, but claims of solving genuinely open problems remain rare and heavily scrutinized.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean (proof assistant) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Formal_verification">Formal verification</a></li>
<li><a href="https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence">List of mathematical discoveries by artificial intelligence</a></li>

</ul>
</details>

**Tags**: `#OpenAI`, `#AI for Mathematics`, `#Formal Verification`, `#Lean`, `#Frontier Models`

---

<a id="item-3"></a>
## [Hackers Trigger Defrost Cycles in European Supermarket Fridges](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident) ⭐️ 8.0/10

A cyberattack disrupted refrigeration systems at supermarket chains in France and elsewhere in Europe, with attackers remotely commanding internet-connected case controllers to enter automatic defrost mode, effectively shutting down cooling. French retailer Intermarché said roughly 150 of its stores were targeted, and the incident also affected deliveries and in-store pricing. It is a rare real-world demonstration that attacks on operational technology (OT) in retail can directly threaten the cold chain, causing food spoilage, financial loss and consumer safety risks. It also highlights how the push to connect cheap legacy controllers to the internet for efficiency has created a broad, poorly defended attack surface across an entire industry. The suspected weak points are 15–20 year old Danfoss controllers such as the SM800 (end of support in 2021) and SC355 (end of support in 2016); security firm Claroty's Team82 previously disclosed multiple flaws, including an authentication bypass, in the Danfoss AK-SM 800A refrigeration controller's embedded web management interface, which Danfoss has since patched with new firmware. Commenters also noted that a similar freezer outage hit US military commissaries in August 2026, though no link has been confirmed.

hackernews · Zeekaas · Oct 12, 12:16 · [Discussion](https://news.ycombinator.com/item?id=50055304)

**Background**: Operational technology (OT) refers to the hardware and software that directly control physical processes — in this case the refrigeration controllers managing supermarket display cases and cold rooms — as opposed to ordinary IT systems, and it is typically designed for reliability and longevity rather than security. Commercial refrigeration units periodically run a defrost cycle that warms the coils to melt accumulated ice, so an attacker who can trigger that cycle repeatedly can effectively disable cooling. Vendors such as Danfoss market internet connectivity for these controllers because it enables remote diagnosis of faults, avoids unnecessary service call-outs and allows store chains to compare energy efficiency across many sites.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Operational_Technology">Operational technology - Wikipedia</a></li>
<li><a href="https://blog.claroty.com/team82/research/freeze-the-controller-defrost-the-food-uncovering-vulnerabilities-in-danfoss-refrigeration-controllers">Freeze the Controller , Defrost the Food: Uncovering... | Claroty</a></li>
<li><a href="https://royalcooling.com/commercial-refrigeration-defrosting-guide-burlington-ma/">Commercial Refrigeration Defrosting Guide Burlington MA</a></li>

</ul>
</details>

**Discussion**: Commenters largely agreed that the root cause is economics rather than ignorance: stores running on thin margins cannot afford security reviews or hardware refresh cycles, so 15–20 year old controllers with long-expired support remain in service. Several pushed back on the reflexive "why would you connect a freezer to the internet?" response, pointing to lab equipment and other machines that now require paid subscriptions and network access just to operate, and noting that Danfoss's own marketing promotes remote connectivity. Others speculated about a possible link to the August 2026 US military commissary freezer outage.

**Tags**: `#cybersecurity`, `#IoT/OT security`, `#critical infrastructure`, `#supply chain`, `#legacy systems`

---

<a id="item-4"></a>
## [WiFi 7 Router Repurposed as a 320 Msps Software Defined Radio Receiver](https://github.com/h0m3us3r/w1700k-sdr) ⭐️ 8.0/10

Developer h0m3us3r published w1700k-sdr, an open-source project that replaces MediaTek's stock firmware on a Gemtek W1700K Wi-Fi 7 router's MT7996 radio with custom firmware reverse-engineered register by register. The modified radio captures raw 14-bit IQ samples at up to 320 Msps across the 2.4/5/6 GHz bands and presents them as a live spectrum and waterfall display in a browser. It demonstrates that commodity Wi-Fi 7 hardware can serve as a wideband receiver at a fraction of the cost of dedicated SDR instruments, which could put serious RF experimentation, spectrum monitoring, and hobbyist instrumentation within reach of far more people. It also adds momentum to a broader trend of reusing consumer wireless silicon for purposes its vendors never intended. The router's Airoha AN7581 SoC streams the IQ data over 10 GbE using zero-copy UDP, and a Linux host renders the live spectrum and waterfall alongside the receiver controls. Important caveats are that the project is receive-only with no transmit capability, is tied to this specific Gemtek W1700K hardware, and required low-level register-level reverse engineering rather than any vendor-provided API.

hackernews · djfergus · Oct 12, 12:41 · [Discussion](https://news.ycombinator.com/item?id=50055593)

**Background**: A software defined radio (SDR) is a radio in which digitization happens close to the antenna, so functions like filtering, demodulation, and tuning are performed in software rather than by dedicated analog circuits. Sample rate, measured in Msps (mega-samples per second), determines how much instantaneous bandwidth a receiver can capture, and IQ samples are the pairs of in-phase and quadrature values that represent a complex baseband signal. Modern Wi-Fi chipsets such as MediaTek's MT7996 are already sophisticated radios that digitize wide swaths of the 2.4, 5, and 6 GHz bands internally, so a router can in principle be repurposed as an SDR if its firmware can be made to expose the raw samples.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/h0m3us3r/w1700k-sdr">Turn a WiFi 7 Router into a 320Msps Software Defined Radio ...</a></li>
<li><a href="https://daily.dev/posts/turn-a-wifi-7-router-into-a-320msps-software-defined-radio-receiver-38irzaw8t">Turn a WiFi 7 Router into a 320Msps Software Defined...</a></li>
<li><a href="https://zeli.app/story/50055593">Wi-Fi 7 router turned into a 320 Msps · 56 HN comments | Zeli</a></li>

</ul>
</details>

**Discussion**: Commenters were enthusiastic: one pointed out that the same developer previously built eSpDR out of an ESP32 Wi-Fi microcontroller and hoped to see more such projects on everyday Wi-Fi cards. Another expects this to also work on the Banana Pi R4 since it uses the same chipset and has built-in PCIe for NVMe, while others debated whether contract-locked phone FM radios reflect software-defined design, called 320 Msps at 5 GHz the cheapest option they know of, and sketched how cheap attenuators, filters, and up/down converters could turn this into a homemade service monitor.

**Tags**: `#Software Defined Radio`, `#WiFi 7`, `#Hardware Hacking`, `#RF`, `#Embedded Systems`

---

<a id="item-5"></a>
## [Codex CLI installs a persistent, self-updating background daemon by default](https://github.com/openai/codex/issues/48195) ⭐️ 8.0/10

OpenAI's Codex CLI now installs a persistent background daemon that starts automatically and self-updates, and there is no documented setting to turn it off. A GitHub issue (openai/codex#48195) about this undocumented default has drawn roughly 480 upvotes and 245 comments from users reporting disk bloat, permission bugs, and unreliable auto-updates. This matters because a developer tool is silently changing the state of users' machines by default, which is a trust and consent issue for anyone running Codex CLI on a work machine or CI-like environment. It also highlights a broader trend in AI coding assistants spawning always-on background processes, and pushes users to look for opt-outs or lighter alternatives. The daemon currently sits behind an undocumented feature flag, so users can add `daemon_auto_start = false` under `[features]` in `~/.codex/config.toml` to disable it. Commenters also report that it writes PID and lock files into `~/.codex` and that accumulated old versions consumed roughly 12 GB on one system, while another user says auto-updating broke file permissions and made `.git` read-only, blocking their work.

hackernews · whimblepop · Oct 12, 18:29 · [Discussion](https://news.ycombinator.com/item?id=50060694)

**Background**: Codex CLI is OpenAI's open-source coding agent that runs locally in the terminal, released on April 16, 2025 alongside the o3 and o4-mini reasoning models; it connects OpenAI's models to local files and shell commands so they can write code and execute tasks. A daemon is a background process that keeps running without direct user interaction, typically handling tasks that must happen continuously, such as syncing, indexing, or upkeep. In this case the daemon appears to keep Codex up to date and ready to respond, but it does so as a persistent process that users did not explicitly ask for.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Codex_CLI">Codex CLI - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Codex">OpenAI Codex - Wikipedia</a></li>
<li><a href="https://docs.atuin.sh/main/reference/daemon/">daemon - Atuin Docs</a></li>

</ul>
</details>

**Discussion**: Overall sentiment is frustrated: users call the daemon buggy and over-engineered, with reports of ~12 GB of stale versions, permission corruption that made `.git` read-only and blocked agent goals, and repeated multi-hour failures. Several people share workarounds — flipping the hidden `daemon_auto_start` flag, or deleting the PID/lock files and symlinking them to `/dev/null` and marking them immutable with `chattr +i` — while one commenter defends minimalist harnesses like hax, and another points out Claude Code follows a similar background-process model.

**Tags**: `#codex-cli`, `#openai`, `#background-daemon`, `#ai-coding-assistants`, `#developer-tools`

---

<a id="item-6"></a>
## [Show HN: PS2 games statically recompiled to WebAssembly for the browser](https://github.com/snuri00/ps2-web-recomp) ⭐️ 8.0/10

A developer (snuri00) published "ps2-web-recomp" on GitHub, a project that statically recompiles PlayStation 2 games into WebAssembly so they can be played directly in a web browser. The Show HN post drew 278 points and 146 comments, making it one of the more discussed emulation-related releases in recent memory. It pushes static recompilation — until now mostly seen in Nintendo 64 and PS Vita projects — into the PS2 era and targets the browser, meaning no install and instant, potentially mobile-friendly play. If the approach matures, it could change how retro games are preserved and distributed, moving away from traditional interpreters/emulators toward per-game native (or Wasm) ports. Static recompilation is an ahead-of-time (AOT) process: the original game code is translated before launch rather than interpreted at runtime as an emulator does, which usually yields better performance but must be redone per game. Because each build is a hand-made binary, commenters note that these ports lack the community vetting and trust that long-standing emulators have, raising malware concerns.

hackernews · deadxwarrior · Oct 12, 06:46 · [Discussion](https://news.ycombinator.com/item?id=50052251)

**Background**: Static recompilation is the automatic translation of an application from one hardware platform to another; well-known examples include Zelda64Recomp for the Nintendo 64. WebAssembly (Wasm) is a portable binary instruction format that serves as a compilation target for C/C++, Rust and other languages, letting high-performance code run in the browser at near-native speed. The PlayStation 2 is notoriously hard to emulate because of its custom Emotion Engine CPU, Graphics Synthesizer and unusual memory architecture, which is why projects like PCSX2 took years to mature.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/Zelda64Recomp/Zelda64Recomp">GitHub - Zelda64Recomp/Zelda64Recomp: Static recompilation of...</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebAssembly">WebAssembly - Wikipedia</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/WebAssembly">WebAssembly - MDN</a></li>

</ul>
</details>

**Discussion**: Sentiment was largely enthusiastic but cautious: one commenter worried that the flood of decompilation/recompilation ports lacks the malware vetting and trust of the established emulator scene, while another said the recompilation wave is impressive and credits AI with enabling it despite disliking AI's effect on their profession. Others suggested compiling the recompiler itself to WebAssembly so it could run in-browser and convert projects directly, and one developer shared a similar PS Vita effort (vitaslop) that builds an ARM-to-WASM transpiler in Wasm, with WebGPU shader and audio transcoding, already working on Chrome mobile.

**Tags**: `#WebAssembly`, `#Static Recompilation`, `#PS2 Emulation`, `#Game Preservation`, `#Show HN`

---

<a id="item-7"></a>
## [Looped Diffusion Transformer Reuses Shared Blocks Inside Each Denoising Step](https://www.reddit.com/r/MachineLearning/comments/1x49d61/looped_diffusion_transformer_the_same_blocks_run/) ⭐️ 8.0/10

A new paper, Looped Diffusion Transformer (arXiv 2609.40305, 30 Sep), scales a text-to-image diffusion transformer not by making it bigger but by running a shared group of transformer blocks several times inside each denoising step. The authors report that a 260M looped model beats a model 6.5x larger on several benchmarks using 4.9x less inference compute, and have released B/16 code and weights under MIT on Hugging Face (sensenova). It points to a cheaper scaling axis for diffusion models: instead of always training larger networks, reusing the same weights with more loops can buy quality at inference time, which matters for teams that are compute- or memory-constrained. Because loop depth is chosen at sampling time, practitioners can dial compute up or down per image, similar to how iteration count works in looped and recurrent-depth language models. The authors note that naïve looping does not reliably help and fix it with deep supervision on every loop plus self-modulating attention. The released model was trained at loop depth 4, and a hands-on test on an M5 Pro (PyTorch MPS, fp32, 100 Euler steps, CFG 6.0) found that most of the quality change happens before depth 3, with depths 3 and 4 nearly identical, at roughly 23–24 seconds per image at depth 1 versus 43–47 seconds at depth 4.

reddit · r/MachineLearning · /u/Fit-Ant2238 · Oct 12, 18:13

**Background**: Diffusion transformers (DiTs) generate images by starting from noise and iteratively denoising it over many steps, with a large transformer predicting the update at each step; making these models bigger improves quality but raises training and inference cost sharply. Looping/recurrent-depth architectures instead reuse the same blocks multiple times, so parameters stay fixed while effective depth grows. Deep supervision means adding training signals at intermediate loops so early iterations also learn something useful, while self-modulating attention lets the attention mechanism adapt its own behaviour across loops rather than repeating identical computation.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2609.40305">Looped Diffusion Transformer</a></li>
<li><a href="https://github.com/OpenSenseNova/Looped-DiT">GitHub - OpenSenseNova/ Looped -DiT: PyTorch implementation of...</a></li>

</ul>
</details>

**Tags**: `#diffusion models`, `#transformers`, `#efficient ML`, `#text-to-image`, `#open source`

---

<a id="item-8"></a>
## [learnc Auto-Tunes Constants in Existing C Code, Shrinking JPEGs 9.1%](https://www.reddit.com/r/MachineLearning/comments/1x4dlbm/learnc_fit_the_constants_in_existing_c_code_to/) ⭐️ 8.0/10

A new MIT-licensed tool called learnc tunes named constants inside unmodified C source code against a score function the user writes in C, then writes the same file back with the newly fitted values. On held-out data it achieved a 9.1% BD-rate improvement at equal SSIM for JPEG (beating mozjpeg's hand-tuned tables at 2.7%), and raised F1 from 0.810 to 0.859 on Google's WebRTC VAD. It offers a general, practical bridge between classic program optimization and machine learning-style parameter fitting, letting developers squeeze measurable gains out of code they never had to restructure or port to a new framework. Because the benchmarks were verified independently with libjpeg and scikit-image, the results are credible enough to interest anyone maintaining codec, signal-processing, or embedded C code with magic constants. The JPEG experiment tuned the 128 quantization-table entries in stb_image_write.h on 12 Kodak images and tested on the other 12, while the VAD experiment tuned every constant in vad_core.c on LibriParty dev data. The author notes limitations: no JPEG gain below 1 bpp, and the method is best suited to tens or hundreds of constants rather than large weight sets.

reddit · r/MachineLearning · /u/keep_up_sharma · Oct 12, 20:51

**Background**: BD-rate (Bjontegaard Delta rate) is the standard metric for comparing compression efficiency: it reports the average percentage of bitrate one encoder saves while reaching the same quality as another across a range of quality points, so a 9.1% BD-rate gain means meaningfully smaller files at identical visual quality. WebRTC VAD is Google's small voice activity detector in WebRTC, a binary classifier that decides whether an audio frame contains human speech, and it is widely distributed through Python bindings such as py-webrtcvad. stb_image_write.h is a popular single-header, public-domain C library for writing images, and its JPEG quantization tables are the kind of hand-chosen constants that a tool like learnc can now fit automatically.

<details><summary>References</summary>
<ul>
<li><a href="https://ottverse.com/what-is-bd-rate-bd-psnr-calculation-interpretation/">BD-Rate & BD-PSNR: Calculation and Interpretation - OTTVerse</a></li>
<li><a href="https://github.com/wiseman/py-webrtcvad">GitHub - wiseman/py-webrtcvad: Python interface to the WebRTC ...</a></li>
<li><a href="https://github.com/nothings/stb">GitHub - nothings/stb: stb single-file public domain ... Image Writing (stb_image_write) | nothings/stb | DeepWiki Image Loading (stb_image) | nothings/stb | DeepWiki C Programming - Reading and writing images with the stb_image ... GitHub: Let’s build from here · GitHub stb_image_write 1.15.0 - cppget.org</a></li>

</ul>
</details>

**Tags**: `#program-optimization`, `#autotuning`, `#image-compression`, `#vad`, `#open-source-tools`

---

