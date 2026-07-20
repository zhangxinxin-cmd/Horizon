# Horizon Daily - 2026-07-20

> From 24 items, 8 important content pieces were selected

---

1. [Leaked Altman email reveals OpenAI's open-source strategy](#item-1) ⭐️ 9.0/10
2. [Hugging Face Discloses AI Agent Attack, Commercial LLM Refuses Forensics](#item-2) ⭐️ 9.0/10
3. [US May Restrict Chinese Open-Weight AI Models After Kimi K3](#item-3) ⭐️ 9.0/10
4. [Critical RCE in Fastjson 1.x Without Gadgets or AutoType](#item-4) ⭐️ 9.0/10
5. [Coding agents make reverse-engineering home devices cheap](#item-5) ⭐️ 8.0/10
6. [US Law Proposed to Legalize Training Data and Ban Anti-Distillation](#item-6) ⭐️ 8.0/10
7. [US Military Apps Found Embedded with Chinese, Russian Code](#item-7) ⭐️ 8.0/10
8. [Zhipu AI Builds Giant Data Center Using Only Domestic Chips](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Leaked Altman email reveals OpenAI's open-source strategy](https://simonwillison.net/2026/Jul/20/sam-altman/#atom-everything) ⭐️ 9.0/10

A leaked email from Sam Altman to OpenAI's board in 2022 outlines a plan to release a locally-run model with GPT-3-like capabilities, intended to preempt competitors and discourage funding for rival AI efforts. This revelation provides rare insight into OpenAI's internal competitive tactics, suggesting a deliberate strategy to use open-source releases to control the market and hinder new entrants, which raises ethical questions about the company's motives. The email is dated October 1, 2022, and was exposed in the 2026 Musk v. Altman lawsuit. The model was envisioned to run on consumer hardware and serve as a deterrent against efforts like Stability AI.

rss · Simon Willison · Jul 20, 03:47

**Background**: GPT-3 is a large language model developed by OpenAI, typically accessed via cloud APIs. A locally-run model would allow users to run AI without internet or paying per query, potentially democratizing access but also raising safety concerns. Open-source AI models are often released by companies like Stability AI, creating competitive pressure.

**Tags**: `#open-source`, `#ai-ethics`, `#generative-ai`, `#openai`, `#sam-altman`

---

<a id="item-2"></a>
## [Hugging Face Discloses AI Agent Attack, Commercial LLM Refuses Forensics](https://huggingface.co/blog/security-incident-july-2026) ⭐️ 9.0/10

Hugging Face disclosed a security incident in July 2026 where attackers exploited two code execution vulnerabilities in the dataset processing pipeline, driven by an autonomous AI agent framework, to infiltrate internal systems, steal datasets and credentials, and move laterally across clusters. The company has since patched the vulnerabilities, rebuilt nodes, and rotated affected credentials, while recommending users rotate tokens and check account activity. This incident highlights the growing threat of autonomous AI agents in cyberattacks and the limitations of commercial large language models (LLMs) in forensic contexts, as safety guardrails prevented them from analyzing attack logs. It underscores the need for organizations to prepare for AI-driven attacks and consider local, open-source models for sensitive analysis. The attack occurred over a weekend, executing tens of thousands of operations, and the team initially used commercial LLM APIs for log analysis but were blocked by safety guardrails, later switching to a locally deployed GLM 5.2 model to analyze over 17,000 attack records. Hugging Face confirmed that public-facing models, datasets, and Spaces were not tampered with, and the software supply chain showed no anomalies.

telegram · zaihuapd · Jul 20, 10:41

**Background**: Hugging Face is a popular platform for hosting AI models, datasets, and demos, with 'Spaces' for deploying interactive ML apps. Autonomous AI agent frameworks, such as LangChain and Auto-GPT, enable agents to reason, plan, and act autonomously. GLM 5.2 is a large open-source model from Z.AI with 744B total parameters and 1M-token context, designed for long-horizon tasks and can be run locally.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/zai-org/GLM-5.2">zai-org/GLM-5.2 · Hugging Face</a></li>
<li><a href="https://smythos.com/developers/agent-development/autonomous-agent-frameworks/">Autonomous Agent Frameworks - SmythOS</a></li>
<li><a href="https://huggingface.co/spaces">Spaces - Hugging Face</a></li>

</ul>
</details>

**Tags**: `#安全事件`, `#AI智能体`, `#HuggingFace`, `#代码执行漏洞`, `#取证`

---

<a id="item-3"></a>
## [US May Restrict Chinese Open-Weight AI Models After Kimi K3](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi) ⭐️ 9.0/10

The Trump administration is reportedly considering soft restrictions to discourage US companies from using Chinese open-weight AI models, motivated by the strong performance of Kimi K3, a cost-effective 2.8-trillion-parameter model. White House AI advisor David Sacks criticized OpenAI and Anthropic for lobbying against open-source competition, calling the current moment a critical inflection point for AI policy. If enacted, these restrictions could reshape global AI competition by limiting US access to affordable, high-performing Chinese models, potentially accelerating a bifurcation of AI ecosystems. The debate also exposes tensions between national security concerns and industry interests, with major AI firms lobbying for protectionist policies. Kimi K3 is a 2.8-trillion-parameter open-weight model with a 1-million-token context window and native vision capabilities, built on Kimi Delta Attention. The reported restrictions may rely on procurement rules, entity list threats, and public pressure rather than an outright ban, making compliance ambiguous for US firms.

telegram · zaihuapd · Jul 20, 11:49

**Background**: Open-weight models allow developers to download and run the trained parameters locally, offering transparency and customization. The US has previously warned against Chinese AI models on security grounds, but enforcement has been uneven. China's open-weight models like Kimi K3 have rapidly improved, achieving performance comparable to US counterparts at a fraction of the cost, intensifying debates on competitiveness and security.

<details><summary>References</summary>
<ul>
<li><a href="https://openlm.ai/kimi-k3/">Kimi K3 - openlm.ai</a></li>
<li><a href="https://www.kimi.com/en">Kimi AI with K3 | Built for Agentic Coding & Knowledge Work</a></li>
<li><a href="https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model">What is an Open-Weight Model? - Stanford HAI</a></li>

</ul>
</details>

**Tags**: `#AI policy`, `#open source`, `#geopolitics`, `#large language models`, `#China`

---

<a id="item-4"></a>
## [Critical RCE in Fastjson 1.x Without Gadgets or AutoType](https://x.com/k_firsov/status/2078872293745570032) ⭐️ 9.0/10

Security researcher Kirill Firsov disclosed a critical remote code execution vulnerability in Fastjson versions 1.2.68 to 1.2.83 that requires neither autoType support nor classpath gadgets and is exploitable on JDK 8, 17, and 21. This vulnerability is critical because Fastjson 1.x is widely used in the Java ecosystem and has reached end-of-life (EOL) since October 2024, meaning no official patch will be provided. Organizations must immediately migrate to Fastjson 2 or enable SafeMode to mitigate risks. The vulnerability affects Fastjson 1.x versions 1.2.68 through 1.2.83 and works without enabling autoType or relying on gadget chains in the classpath. The only mitigations are upgrading to Fastjson 2 or enabling SafeMode via code, JVM parameters, or configuration files.

telegram · zaihuapd · Jul 20, 14:32

**Background**: Fastjson is a popular Java library for JSON serialization/deserialization, often used in web applications. Previous Fastjson remote code execution (RCE) vulnerabilities often required enabling autoType or exploiting specific gadget chains in the classpath. This new vulnerability bypasses those requirements, making exploitation easier. Fastjson 1.x reached end-of-life in October 2024, with no further updates expected.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/alibaba/fastjson">GitHub - alibaba/fastjson: FASTJSON 2.0.x has been released ...</a></li>
<li><a href="https://mvnrepository.com/artifact/com.alibaba/fastjson">Maven Repository: com.alibaba » fastjson</a></li>
<li><a href="https://jfrog.com/blog/cve-2022-25845-analyzing-the-fastjson-auto-type-bypass-rce-vulnerability/">CVE-2022-25845 - Fastjson RCE vulnerability analysis - JFrog CVE-2022-25845: Alibaba Fastjson RCE Vulnerability - SentinelOne CVE-2025-70974: Fastjson before 1.2.48 mishandles autoType ... Deep Dive into Fastjson Deserialization Vulnerabilities: From ... CVE-2025-70974: Fastjson autoType Deserial RCE | Miggo</a></li>

</ul>
</details>

**Tags**: `#fastjson`, `#rce`, `#vulnerability`, `#java`, `#security`

---

<a id="item-5"></a>
## [Coding agents make reverse-engineering home devices cheap](https://simonwillison.net/2026/Jul/20/cheap-reverse-engineering/#atom-everything) ⭐️ 8.0/10

Coding agents, powered by large language models, have drastically reduced the cost and effort required to reverse-engineer and automate home devices, making previously impractical projects feasible. This shift enables individuals to automate their homes without committing to expensive, fragile codebases, democratizing home automation and reducing the barrier for DIY enthusiasts. The key insight is that the cost of writing code via agents has dropped so low that even if an undocumented API breaks, rewriting from scratch is cheap, removing the maintenance burden that previously deterred reverse-engineering.

rss · Simon Willison · Jul 20, 19:24

**Background**: Reverse-engineering home devices involves figuring out their undocumented protocols to control them via software. Historically, this required significant manual effort and the resulting code often needed constant maintenance as APIs changed. AI coding agents are tools that use large language models to generate, debug, and maintain code autonomously, drastically reducing human effort.

<details><summary>References</summary>
<ul>
<li><a href="https://graphify.net/ai-coding/agents/">AI Coding Agents | Graphify Guides</a></li>
<li><a href="https://developer.nvidia.com/blog/improve-ai-code-generation-using-nvidia-nemo-agent-toolkit/">Improve AI Code Generation Using NVIDIA NeMo Agent Toolkit | NVIDIA Technical Blog</a></li>

</ul>
</details>

**Tags**: `#reverse-engineering`, `#coding agents`, `#automation`, `#cost reduction`

---

<a id="item-6"></a>
## [US Law Proposed to Legalize Training Data and Ban Anti-Distillation](https://simonwillison.net/2026/Jul/20/afraid-of-chinese-models/#atom-everything) ⭐️ 8.0/10

Ben Thompson, writing on Stratechery, proposes that the US pass a law explicitly deeming data collection for AI training as fair use and banning terms of service that prohibit model distillation. This would level the playing field with Chinese AI models that benefit from open-weight releases. If enacted, this law would resolve the hypocrisy where US AI labs train on unlicensed data but forbid others from querying their APIs for distillation. It could accelerate open-source AI innovation and help US models compete against Chinese models like Qwen, which are released as open weights. The proposal includes two prongs: (1) making training data collection explicit fair use, and (2) barring US companies from including anti-distillation clauses in their terms of service. Thompson also notes that Alibaba's decision to release Qwen 3.8 Max as open weights may have been influenced by a speech from Xi Jinping encouraging open-source sharing.

rss · Simon Willison · Jul 20, 17:09

**Background**: Model distillation is a technique where knowledge from a large AI model is transferred to a smaller one, often by querying the larger model's API. Many US AI labs, such as OpenAI and Anthropic, have updated their terms of service to forbid this practice, even as they themselves train on vast amounts of unlicensed web data. The legal status of training data remains contested, with fair use being a key doctrine that could provide protection. Open-weight models, where only the trained parameters are released without full source code, are a common way Chinese firms like Alibaba share their AI models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_distillation">Model distillation</a></li>
<li><a href="https://opensource.org/ai/open-weights">Open Weights: not quite what you’ve been told – Open Source Initiative</a></li>
<li><a href="https://medium.com/@tatsuru.okada/three-sworn-rivals-one-enemy-inside-the-frontier-model-forums-quiet-war-on-chinese-distillation-60be4183f61a">Three Sworn Rivals, One Enemy: Inside the Frontier Model Forum’s Quiet War on Chinese Distillation | by Tatsuru Okada | Apr, 2026 | Medium</a></li>

</ul>
</details>

**Tags**: `#AI policy`, `#model distillation`, `#copyright fair use`, `#open source AI`, `#competition`

---

<a id="item-7"></a>
## [US Military Apps Found Embedded with Chinese, Russian Code](https://www.wired.com/story/apps-marketed-to-us-troops-are-shipping-chinese-and-russian-code/) ⭐️ 8.0/10

Researchers at Purdue University found that nearly two-thirds of over 220 apps marketed to US military personnel embed third-party code from China and Russia, including Huawei's SDK, which the US government has designated a national security threat. This finding raises serious national security concerns because the embedded code could be remotely updated to spy on or compromise US troops, potentially leaking sensitive operational data to adversaries. Although no data was observed flowing to Huawei servers, the SDK can be updated remotely at any time, posing a risk of activation of dormant malicious code. The study surveyed 103 military-affiliated individuals, with 76-83% expressing extreme discomfort about apps containing code from China, Russia, Iran, or North Korea.

telegram · zaihuapd · Jul 20, 13:42

**Background**: Third-party software development kits (SDKs) are commonly used in mobile apps to add features like analytics or login, but they can also introduce security risks if the SDK provider is untrustworthy. The US Federal Communications Commission (FCC) has designated Huawei and ZTE as national security threats due to their ties to the Chinese Communist Party and military. This research highlights a broader supply chain security issue, as malicious code can be hidden in legitimate SDKs and later activated remotely.

<details><summary>References</summary>
<ul>
<li><a href="https://www.fcc.gov/document/fcc-affirms-designation-huawei-national-security-threat-0">FCC Affirms Designation of Huawei as National Security Threat | Federal Communications Commission</a></li>
<li><a href="https://www.bitdefender.com/en-us/blog/hotforsecurity/us-now-considers-huawei-and-zte-threats-to-national-security">US Now Considers Huawei and ZTE Threats to National Security</a></li>

</ul>
</details>

**Tags**: `#cybersecurity`, `#national security`, `#supply chain`, `#espionage`, `#mobile apps`

---

<a id="item-8"></a>
## [Zhipu AI Builds Giant Data Center Using Only Domestic Chips](https://www.bloomberg.com/news/articles/2026-07-20/z-ai-completes-giant-data-center-with-chinese-chips-to-train-ai) ⭐️ 8.0/10

Zhipu AI has completed a 1-gigawatt data center powered entirely by domestically produced chips, already partially operational, to support the training of its GLM large language model. This milestone demonstrates China's ability to build large-scale AI infrastructure independent of foreign chips, reducing reliance on NVIDIA and strengthening national self-sufficiency in AI compute. The data center has a power capacity of 1 GW, enough to supply about 750,000 homes, and is among the largest facilities built by a Chinese AI lab. Zhipu AI operates multiple compute clusters each exceeding 10,000 chips.

telegram · zaihuapd · Jul 20, 15:43

**Background**: Large language models like GLM require massive compute resources for training, traditionally dominated by NVIDIA GPUs. Chinese AI labs have faced export restrictions on advanced chips, spurring efforts to develop domestic alternatives. GLM is Zhipu AI's open-source model family released under the MIT License.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Z.ai">Z.ai - Wikipedia</a></li>
<li><a href="https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zxxx/202502/t20250212_4008736.html">国产芯片与AI大模型协同突破！龙芯处理器成功运行DeepSeek大模型_资讯信息_北京经济技术开发区</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Data Center`, `#Domestic Chips`, `#China`, `#GLM`

---

