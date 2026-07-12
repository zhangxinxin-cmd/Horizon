---
layout: default
title: "Horizon Summary: 2026-07-12 (EN)"
date: 2026-07-12
lang: en
---

> From 30 items, 8 important content pieces were selected

---

1. [GPT-5.6 Solves 50-Year Graph Theory Conjecture in One Hour](#item-1) ⭐️ 10.0/10
2. [Terry Tao Uses LLMs to Build Apps and Visualizations](#item-2) ⭐️ 9.0/10
3. [World's First Invasive BCI Medical Device Approved](#item-3) ⭐️ 9.0/10
4. [Claude Code uses 33k tokens vs OpenCode's 7k for same task](#item-4) ⭐️ 8.0/10
5. [George Hotz: LLMs Valued but Value Won't Be Captured by Frontier Labs](#item-5) ⭐️ 8.0/10
6. [Shingles Vaccine May Reduce Dementia Risk](#item-6) ⭐️ 8.0/10
7. [Ghostel.el: Fast Emacs terminal emulator powered by libghostty](#item-7) ⭐️ 8.0/10
8. [xAI Grok CLI Uploads Entire Codebase and Secrets by Default](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [GPT-5.6 Solves 50-Year Graph Theory Conjecture in One Hour](https://www.qbitai.com/2026/07/447873.html) ⭐️ 10.0/10

OpenAI's GPT-5.6 Sol Ultra model autonomously proved the cycle double cover conjecture, an open problem in graph theory for about 50 years, in less than one hour by coordinating 64 parallel sub-agents. This achievement demonstrates the ability of large language models to autonomously discover novel mathematical proofs, potentially accelerating research in graph theory and combinatorics. It also showcases the power of multi-agent architectures for complex reasoning tasks. The model used a prompt of about 700 characters that specified acceptance criteria, boundary conditions, and failure modes without prescribing solution steps, and it dynamically allocated sub-agents with independent verification to ensure correctness. The proof was output as a 3-page PDF.

telegram · zaihuapd · Jul 12, 03:49

**Background**: The cycle double cover conjecture asks whether every bridgeless graph has a collection of cycles such that each edge appears exactly twice. It was posed by W. T. Tutte and others, and is a fundamental problem in graph theory. The conjecture can also be formulated in terms of graph embeddings, known as the circular embedding conjecture.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cycle_double_cover_conjecture">Cycle double cover conjecture</a></li>
<li><a href="https://www.openproblemgarden.org/op/cycle_double_cover_conjecture">Cycle double cover conjecture | Open Problem Garden</a></li>

</ul>
</details>

**Tags**: `#GPT-5.6`, `#AI research`, `#graph theory`, `#scientific discovery`, `#multi-agent`

---

<a id="item-2"></a>
## [Terry Tao Uses LLMs to Build Apps and Visualizations](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) ⭐️ 9.0/10

Terry Tao, a renowned mathematician, demonstrates how modern coding agents (LLMs) can quickly create custom visualizations and applications, including a 3D interactive gene visualization for a biology paper. This highlights the vast potential of AI-assisted coding beyond traditional software domains, enabling non-experts to create high-quality, custom software tools efficiently, which could accelerate research and education across many fields. Tao used guided interaction with LLM agents to generate visualizations that are supplements to his papers, noting that while not mission-critical, the downside risk is acceptable given the benefits.

hackernews · subset · Jul 12, 11:09 · [Discussion](https://news.ycombinator.com/item?id=48880170)

**Background**: Modern coding agents refer to large language models (LLMs) like GPT-4 that can generate code based on natural language prompts. These tools have become increasingly capable of producing functional software, from simple scripts to complex interactive applications, lowering the barrier to software creation for non-programmers.

**Discussion**: Commenters express mixed enthusiasm and caution: some note that LLMs have enabled long-desired visualizations in education, while others humorously compare the trend to a Michelin-star chef discovering microwave dinners. Several commenters agree that LLMs are a useful tool but should not be fully trusted for mission-critical tasks.

**Tags**: `#ai-assisted coding`, `#software engineering`, `#LLM applications`, `#visualization`, `#Terry Tao`

---

<a id="item-3"></a>
## [World's First Invasive BCI Medical Device Approved](https://t.me/zaihuapd/42515) ⭐️ 9.0/10

China's National Medical Products Administration (NMPA) has approved the marketing application for the 'Implantable Brain-Computer Interface Hand Motor Function Compensation System' developed by BrainCo Medical Technology (Shanghai) Co., Ltd., making it the world's first invasive brain-computer interface medical device to enter clinical use. This approval marks a paradigm shift from research to clinical application for invasive brain-computer interfaces, potentially improving the quality of life for quadriplegic patients by restoring hand grasping function through neural control. The system uses epidural minimally invasive implantation and wireless power and communication technology, assisting patients aged 18-60 with cervical spinal cord injury to achieve hand grasping function compensation via a pneumatic glove. Clinical trials showed significant improvement in hand grasping ability.

telegram · zaihuapd · Jul 12, 14:39

**Background**: Invasive brain-computer interfaces (BCIs) involve implanting electrodes into or on the brain to directly record neural signals. The epidural approach places electrodes on the outer layer of the dura mater, reducing surgical risks and complications compared to penetrating electrodes. Prior to this approval, most BCI devices were non-invasive or in research stages. This device specifically targets motor function restoration for spinal cord injury patients.

<details><summary>References</summary>
<ul>
<li><a href="https://www.news.cn/politics/20260127/7b0c33bd01434b9dbcf4a5ba677499fe/c.html">新华视点｜植入人脑之后，脑机接口技术将如何改变我们的生活？-新华网</a></li>
<li><a href="https://www.cas.cn/cm/202601/t20260128_5098788.shtml">【新华社】植入人脑之后，脑机接口技术将如何改变我们的生活？----中国科学院</a></li>
<li><a href="https://k.sina.com.cn/article_6192937794_17120bb4202002r8tm.html?from=tech">马斯克Neuralink完成全球首例，脑机接口迈入微创时代|大脑皮层|手术|博睿|机器人|临床_新浪新闻</a></li>

</ul>
</details>

**Tags**: `#brain-computer interface`, `#medical device`, `#neurotechnology`, `#spinal cord injury`, `#clinical approval`

---

<a id="item-4"></a>
## [Claude Code uses 33k tokens vs OpenCode's 7k for same task](https://systima.ai/blog/claude-code-vs-opencode-token-overhead) ⭐️ 8.0/10

A study revealed that Claude Code sends approximately 33,000 tokens before reading the user's prompt, while OpenCode sends only about 7,000 tokens for the same task, indicating significant token overhead in Claude Code. This token inefficiency directly increases costs for developers using Claude Code, especially for large or iterative coding tasks, and highlights how harness design and caching strategies impact the economics of AI coding tools. The overhead comes from inefficient prompt caching and a larger system prompt harness in Claude Code; OpenCode uses a more optimized approach. The study logged all requests between the tools and the Anthropic endpoint to capture usage.

hackernews · systima · Jul 12, 18:25 · [Discussion](https://news.ycombinator.com/item?id=48883275)

**Background**: Token overhead refers to the extra tokens consumed by the AI coding tool's system prompt, tool definitions, and caching mechanism before processing the user's actual input. Prompt caching is a technique to reuse computed states, but if not optimized, it can waste tokens. Agentic coding tools like Claude Code and OpenCode act as a harness between the user and the LLM, and harness design heavily impacts token usage.

<details><summary>References</summary>
<ul>
<li><a href="https://www.mindstudio.ai/blog/anthropic-prompt-caching-claude-subscription-limits">What Is Anthropic's Prompt Caching and Why Does It Affect Your Claude Subscription Limits? | MindStudio</a></li>
<li><a href="https://buildtolaunch.substack.com/p/claude-code-token-optimization">Claude Code Token Optimization: 19 Changes to Cut Costs (2026)</a></li>
<li><a href="https://www.truefoundry.com/blog/opencode-token-usage-how-it-works-and-how-to-optimize-it">OpenCode Token Usage: How It Works and How to Optimize It</a></li>

</ul>
</details>

**Discussion**: Commenters noted that sub-agents in Claude Code burn tokens rapidly, and some suspect Anthropic may intentionally design token inefficiency to drive subscription usage. Others suggested that measuring cost alone ignores qualitative differences, and the discussion also pointed to a broader trend of 'tokenflation' where simple prompts trigger excessive tool calls.

**Tags**: `#Claude Code`, `#OpenCode`, `#token efficiency`, `#AI coding tools`, `#LLM cost analysis`

---

<a id="item-5"></a>
## [George Hotz: LLMs Valued but Value Won't Be Captured by Frontier Labs](https://geohot.github.io//blog/jekyll/update/2026/07/12/i-love-llms.html) ⭐️ 8.0/10

George Hotz published a blog post arguing that while LLMs are creating immense value, frontier AI labs like OpenAI and Anthropic are overvalued because they won't be able to capture most of that value. This perspective challenges the prevailing hype-driven AI valuations and suggests that the real beneficiaries may be users and open-source communities rather than proprietary AI companies, potentially reshaping investment and development strategies. Hotz notes that subscription prices ($100–200/month) make frontier models a no-brainer, but the value created by LLMs may be distributed across many applications rather than captured by model providers; he also discusses the 'have it your way' era enabled by LLMs for custom software.

hackernews · therepanic · Jul 12, 18:31 · [Discussion](https://news.ycombinator.com/item?id=48883343)

**Background**: George Hotz is a well-known hacker and entrepreneur, founder of comma.ai. Frontier labs refer to leading AI companies like OpenAI, Anthropic, and Google DeepMind that develop cutting-edge large language models. The debate about value capture questions whether these companies can monetize AI sufficiently to justify their high valuations.

**Discussion**: Community members largely agreed with Hotz's analysis. User SwellJoe praised the concise explanation of value capture, while hamandcheese argued we are entering a 'have it your way' era with LLMs enabling forking and custom software, raising concerns about open-source sustainability. TheAceOfHearts noted productivity gains but also the jagged limitations of current models.

**Tags**: `#LLMs`, `#AI hype`, `#valuation`, `#open source`, `#critical analysis`

---

<a id="item-6"></a>
## [Shingles Vaccine May Reduce Dementia Risk](https://www.economist.com/leaders/2026/07/09/a-no-brainer-for-protecting-your-brain) ⭐️ 8.0/10

A UK study using regression discontinuity design found that people eligible for the shingles vaccine had a lower probability of dementia diagnosis over seven years. If the effect is causal, this could provide a safe and inexpensive way to reduce dementia risk, potentially benefiting millions worldwide. The study exploited a hard age cutoff for vaccine eligibility in the UK, comparing individuals born just before and after the cutoff to estimate the causal effect.

hackernews · saikatsg · Jul 12, 15:23 · [Discussion](https://news.ycombinator.com/item?id=48881874)

**Background**: Regression discontinuity design (RDD) is a quasi-experimental method used to estimate causal effects when randomization is not feasible. It compares outcomes for subjects on either side of a threshold (e.g., age cutoff) to infer treatment impact. RDD is widely used in health and social sciences to evaluate policy interventions.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Regression_discontinuity_design">Regression discontinuity design</a></li>

</ul>
</details>

**Discussion**: Comments were mixed: some praised the study's robust design and personal relevance, while others cautioned that the effect might be spurious, noting that vaccinated individuals visit hospitals less often and thus receive fewer incidental dementia diagnoses. One commenter also suggested alternative risk factors like marital status.

**Tags**: `#health`, `#vaccine`, `#dementia`, `#shingles`, `#medical research`

---

<a id="item-7"></a>
## [Ghostel.el: Fast Emacs terminal emulator powered by libghostty](https://dakra.github.io/ghostel/) ⭐️ 8.0/10

Ghostel.el is a new terminal emulator for Emacs built on libghostty-vt, offering significantly faster performance compared to existing solutions like vterm and eat. It integrates a native Zig module for rendering and PTY I/O with Elisp for keymaps and buffers. This project addresses long-standing performance issues in Emacs terminal emulators, enabling smoother use of TUI applications and more reliable input handling. It sets a new standard for Emacs terminal integration, potentially becoming the default choice for users who need a fast, embedded terminal. Ghostel is powered by libghostty-vt, the same VT engine as the standalone Ghostty terminal, and is implemented as a native dynamic module written in Zig. It features multiple input modes to resolve the conflict between terminal keystroke consumption and editor command handling.

hackernews · signa11 · Jul 12, 08:52 · [Discussion](https://news.ycombinator.com/item?id=48879504)

**Background**: Emacs is a highly extensible text editor that can run terminals internally via packages like vterm and eat. However, these often suffer from performance issues, especially with graphical TUI applications. libghostty is an embeddable library by Mitchell Hashimoto that provides a fast, modern terminal emulator engine. Ghostel.el leverages this engine to bring high-performance terminal emulation to Emacs.

<details><summary>References</summary>
<ul>
<li><a href="https://dakra.github.io/ghostel/">ghostel.el - Terminal emulator powered by libghostty</a></li>
<li><a href="https://github.com/dakra/ghostel">GitHub - dakra/ghostel: Terminal emulator powered by libghostty · GitHub</a></li>
<li><a href="https://mitchellh.com/writing/libghostty-is-coming">Libghostty Is Coming – Mitchell Hashimoto</a></li>

</ul>
</details>

**Discussion**: Community reaction has been overwhelmingly positive, with users reporting noticeably faster performance over vterm and praising the improved input reliability. However, some users noted rough edges such as occasional terminal clearing issues and freezes. The maintainer is actively engaged and plans a formal 'Show HN' post.

**Tags**: `#Emacs`, `#terminal emulator`, `#libghostty`, `#open source`, `#developer tools`

---

<a id="item-8"></a>
## [xAI Grok CLI Uploads Entire Codebase and Secrets by Default](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547) ⭐️ 8.0/10

Security researchers discovered that xAI's Grok Build CLI (v0.2.93) uploads entire codebases and sensitive files like .env to xAI servers via Google Cloud Storage, with no effective opt-out even when disabling the 'improve model' setting. This poses a severe privacy and security risk for developers using Grok Build, as proprietary code and credentials could be exposed. It also raises trust concerns for xAI's tooling, potentially impacting adoption. The CLI injects file contents into chat requests and also uploads the entire git repository as a git bundle, even if the prompt instructs not to read a file. In a 12 GB repository test, over 5 GiB were uploaded without server rejection.

telegram · zaihuapd · Jul 12, 04:19

**Background**: Grok Build is an AI-powered coding CLI from xAI that uses the Grok model to assist with programming tasks. The git bundle format is a file format that packs Git objects and refs into a single file, typically used for offline transfer. The security analysis was conducted by packet inspection, and only the data transmission/storage was confirmed, not its use for training.

<details><summary>References</summary>
<ul>
<li><a href="https://x.ai/cli">Grok Build | SpaceXAI</a></li>
<li><a href="https://docs.x.ai/build/overview">Grok Build | SpaceXAI Docs</a></li>
<li><a href="https://codersera.com/blog/how-to-install-grok-build-cli-2026/">x.ai/cli/install.sh Explained: Install Grok Build CLI</a></li>

</ul>
</details>

**Tags**: `#security`, `#privacy`, `#AI tools`, `#xAI`, `#data leakage`

---