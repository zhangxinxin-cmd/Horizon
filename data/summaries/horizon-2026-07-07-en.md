# Horizon Daily - 2026-07-07

> From 44 items, 18 important content pieces were selected

---

1. [Tencent Releases Hy3: 295B MoE Model Outperforms Larger Models](#item-1) ⭐️ 9.0/10
2. [Januscape: KVM VM Escape Vulnerability Affects Intel and AMD](#item-2) ⭐️ 9.0/10
3. [China may restrict overseas access to top AI models](#item-3) ⭐️ 9.0/10
4. [Kokoro: High-Quality CPU-Friendly TTS Model](#item-4) ⭐️ 8.0/10
5. [EU Chat Control Proposals Threaten Encryption and Privacy](#item-5) ⭐️ 8.0/10
6. [EU mandates driver monitoring cameras in all new cars](#item-6) ⭐️ 8.0/10
7. [Microsoft lays off idTech team at id Software](#item-7) ⭐️ 8.0/10
8. [EU Parliament Advances Chat Control in Procedural Vote](#item-8) ⭐️ 8.0/10
9. [sqlite-utils 4.0 adds database schema migrations](#item-9) ⭐️ 8.0/10
10. [PhD Thesis on Differentiable Ray Tracing for Radio Propagation](#item-10) ⭐️ 8.0/10
11. [MIRA: A 5B Parameter World Model for Multiplayer Rocket League Simulation](#item-11) ⭐️ 8.0/10
12. [Defending Fine-Tuning Poisoning with Trusted LoRA Adapter Subspaces](#item-12) ⭐️ 8.0/10
13. [Google Adds 'Save Media' Setting for AI Training Data](#item-13) ⭐️ 8.0/10
14. [China Plans $295B National Computing Network](#item-14) ⭐️ 8.0/10
15. [Anthropic Releases Claude Sonnet 5 with Strong Agentic Capabilities](#item-15) ⭐️ 8.0/10
16. [Nvidia Blackwell Wafers Made in US, but Packaged in Taiwan](#item-16) ⭐️ 8.0/10
17. [DeepSeek Develops Own AI Chip to Reduce Reliance on Nvidia and Huawei](#item-17) ⭐️ 8.0/10
18. [Claude Fable 5 relaunch with reduced quotas and safety issues](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Tencent Releases Hy3: 295B MoE Model Outperforms Larger Models](https://simonwillison.net/2026/Jul/6/hy3/#atom-everything) ⭐️ 9.0/10

Tencent has released Hy3, a 295B-parameter Mixture-of-Experts (MoE) model with only 21B active parameters, under the permissive Apache 2.0 license. The model outperforms similarly-sized models and rivals models with 2-5x more parameters. This release significantly advances open-source AI by providing a highly efficient, powerful model from a major tech company. The Apache 2.0 license enables broad commercial and research use, potentially accelerating adoption in products and applications. The full model is 598GB on Hugging Face, with a 300GB FP8 quantized version available. It supports a 256K token context length and is available free on OpenRouter until July 21st.

rss · Simon Willison · Jul 6, 23:57

**Background**: Mixture-of-Experts (MoE) models use a gating mechanism to activate only a subset of parameters for each input token, enabling large total parameter counts with relatively low computational cost. The ratio of total to active parameters (here 295B to 21B) allows the model to be both capable and efficient. This is a key advantage over dense models where all parameters are always active.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mixture_of_experts">Mixture of experts - Wikipedia</a></li>
<li><a href="https://huggingface.co/blog/moe">Mixture of Experts Explained</a></li>
<li><a href="https://www.ibm.com/think/topics/mixture-of-experts">What is mixture of experts? | IBM</a></li>

</ul>
</details>

**Tags**: `#AI`, `#machine learning`, `#model release`, `#Mixture-of-Experts`, `#Tencent`

---

<a id="item-2"></a>
## [Januscape: KVM VM Escape Vulnerability Affects Intel and AMD](https://github.com/V4bel/Januscape) ⭐️ 9.0/10

Researchers disclosed Januscape (CVE-2026-53359), the first KVM/x86 VM escape vulnerability exploitable on both Intel and AMD platforms. It stems from a use-after-free flaw in the shadow MMU simulation, allowing a guest to corrupt the host kernel's shadow page tables. This vulnerability directly breaks the isolation boundary in multi-tenant KVM hosts, such as public clouds, posing a critical threat to cloud security. Its 16-year latent period means a vast number of systems running Linux kernels from 2010 to June 2026 are affected. The PoC code has been released and can trigger a host kernel panic from within a guest. Additionally, in distributions like RHEL, local unprivileged users can exploit this flaw to escalate privileges to root.

telegram · zaihuapd · Jul 7, 10:14

**Background**: KVM uses a shadow MMU to virtualize guest page tables by maintaining shadow page tables that map guest virtual addresses directly to host physical addresses. A use-after-free vulnerability occurs when a program accesses memory after it has been freed, potentially leading to corruption or arbitrary code execution. The shadow MMU's complex memory management made it susceptible to this class of bug.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.kernel.org/virt/kvm/x86/mmu.html">The x86 kvm shadow mmu — The Linux Kernel documentation</a></li>
<li><a href="https://learn.snyk.io/lesson/use-after-free/">Use after free vulnerability | Tutorial & Examples | Snyk Learn</a></li>
<li><a href="https://www.automox.com/blog/vulnerability-definition-use-after-free">What Is a Use-After-Free Vulnerability? | Automox</a></li>

</ul>
</details>

**Tags**: `#security`, `#vulnerability`, `#virtualization`, `#KVM`, `#cloud`

---

<a id="item-3"></a>
## [China may restrict overseas access to top AI models](https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/) ⭐️ 9.0/10

China's Ministry of Commerce has held meetings with Alibaba, ByteDance, and Zhipu to discuss restricting overseas access to the country's most advanced AI models, including unreleased ones. If enacted, this policy would significantly reshape the global AI landscape by limiting the dissemination of Chinese AI technology, potentially accelerating fragmentation between AI ecosystems in China and the West. The restrictions may apply only to future models, and the scope is still under discussion; it is uncertain whether the policy will be finalized. The meetings also considered classifying AI core technology leakage as a national security crime.

telegram · zaihuapd · Jul 7, 11:42

**Background**: Export controls on technology are a common tool for national security, and AI models are considered dual-use technologies with both civilian and military applications. China has been rapidly advancing in AI, producing models that rival those from the U.S., and restricting overseas access could protect domestic advantages and prevent technology transfer to competitors.

**Tags**: `#AI policy`, `#China`, `#technology export control`, `#AI regulation`, `#national security`

---

<a id="item-4"></a>
## [Kokoro: High-Quality CPU-Friendly TTS Model](https://ariya.io/2026/03/local-cpu-friendly-high-quality-tts-text-to-speech-with-kokoro/) ⭐️ 8.0/10

Kokoro, an open-weight TTS model with 82 million parameters, has been released, delivering high-quality speech synthesis that runs efficiently on CPUs without requiring a GPU. This enables local, private, and accessible TTS for users without powerful GPUs, lowering barriers for accessibility products, content consumption, and voice interfaces. Kokoro is built on the StyleTTS 2 architecture and features manual IPA pronunciation support, though it may struggle with single-word utterances and homographs.

hackernews · speckx · Jul 7, 18:24 · [Discussion](https://news.ycombinator.com/item?id=48821576)

**Background**: Text-to-speech (TTS) models typically require powerful GPUs for high-quality output, limiting local deployment. Kokoro, with only 82 million parameters, achieves comparable quality to larger models while being significantly faster and CPU-friendly, making it suitable for offline use.

<details><summary>References</summary>
<ul>
<li><a href="https://kokorottsai.com/">Kokoro TTS: Advanced AI Text-to-Speech Model with 82M parameters</a></li>
<li><a href="https://github.com/hexgrad/kokoro">GitHub - hexgrad/kokoro: https://hf.co/hexgrad/Kokoro-82M · GitHub</a></li>
<li><a href="https://huggingface.co/hexgrad/Kokoro-82M">hexgrad/Kokoro-82M · Hugging Face</a></li>

</ul>
</details>

**Discussion**: Community members shared positive experiences using Kokoro for accessibility, with one creating a self-improving voice input system (voiceio) and another building a Chrome extension for webpage reading. Users noted the ability to add IPA pronunciation guides but reported occasional inaccuracies with homographs and short phrases.

**Tags**: `#TTS`, `#accessibility`, `#local AI`, `#CPU-friendly`, `#open-source`

---

<a id="item-5"></a>
## [EU Chat Control Proposals Threaten Encryption and Privacy](https://fightchatcontrol.eu/chat-control-overview) ⭐️ 8.0/10

The EU's Chat Control 1.0 and 2.0 proposals aim to mandate mass scanning of digital communications for child sexual abuse material (CSAM), potentially breaking end-to-end encryption. This could undermine privacy and security for all EU citizens, set a precedent for mass surveillance, and weaken encryption technologies used globally. The proposals include client-side scanning (CSS), which would scan content on user devices before encryption, raising technical and privacy risks. Chat Control 2.0 is an updated version with additional measures.

hackernews · gasull · Jul 7, 14:23 · [Discussion](https://news.ycombinator.com/item?id=48818311)

**Background**: Chat Control is a set of EU regulations proposed in 2022 to combat child sexual abuse material. It has faced significant opposition from privacy advocates, tech companies, and experts who argue that client-side scanning breaks encryption and opens the door to surveillance. The debate centers on balancing child protection with fundamental rights to privacy.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chat_Control">Chat Control - Wikipedia</a></li>
<li><a href="https://fightchatcontrol.eu/">Fight Chat Control - Protect Digital Privacy in the EU</a></li>
<li><a href="https://www.eff.org/deeplinks/2026/04/eu-parliament-blocks-mass-scanning-our-chats-whats-next">EU Parliament Blocks Mass-Scanning of Our Chats—What's Next? | Electronic Frontier Foundation</a></li>

</ul>
</details>

**Discussion**: Commenters express concern that the proposals are overly broad and could lead to a surveillance state. Some argue that targeting specific offenders is more efficient than mass scanning. Others worry about the impact on encrypted messaging and photos of children, such as bathtime pictures.

**Tags**: `#privacy`, `#encryption`, `#surveillance`, `#EU legislation`, `#CSAM`

---

<a id="item-6"></a>
## [EU mandates driver monitoring cameras in all new cars](https://allaboutcookies.org/eu-mandatory-distracted-driver-system) ⭐️ 8.0/10

The European Union now requires every new car sold to include a driver monitoring camera system to detect and deter distracted driving. This regulation could significantly reduce accidents caused by driver distraction, but it raises important privacy and user experience concerns among drivers. The driver monitoring system uses infrared cameras and AI to track the driver's face and eye movements, issuing alerts if distraction or drowsiness is detected.

hackernews · nickslaughter02 · Jul 7, 20:50 · [Discussion](https://news.ycombinator.com/item?id=48823557)

**Background**: Driver monitoring systems have existed since 2006, when Toyota first introduced them. They are designed to improve road safety by assessing driver alertness. The EU mandate makes this technology compulsory, aiming to reduce the thousands of deaths caused by distracted driving annually.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Driver_monitoring_system">Driver monitoring system - Wikipedia</a></li>
<li><a href="https://smarteye.se/solutions/automotive/driver-monitoring-system/">Driver Monitoring System (DMS) - Smart Eye</a></li>
<li><a href="https://www.nxp.com/applications/DRIVER-MONITORING-SYSTEMS">Driver Monitoring Systems (DMS) and Occupant Monitoring Systems | NXP Semiconductors</a></li>

</ul>
</details>

**Discussion**: Community comments reveal a split: some find the technology accurate and potentially life-saving, while others criticize the growing complexity and intrusiveness of modern car UX, citing annoying lane assist and speed limit warnings. Privacy concerns and sarcastic remarks about mandatory surveillance are also common.

**Tags**: `#regulation`, `#automotive`, `#privacy`, `#user-experience`, `#EU`

---

<a id="item-7"></a>
## [Microsoft lays off idTech team at id Software](https://gamefromscratch.com/microsoft-fire-idtech-team-at-id-software/) ⭐️ 8.0/10

Microsoft has laid off the entire idTech engine team at id Software, the studio behind Doom and Quake. This move suggests a strategic shift away from the proprietary idTech engine toward using Unreal Engine 5 for future games. This decision marks a significant consolidation in game engine usage, potentially reducing technological diversity in the industry. It also raises concerns about Microsoft's corporate strategy, as it may homogenize the unique technical culture of acquired studios. The layoffs affect the team responsible for the idTech engine, which powered iconic games like Doom (2016) and Doom Eternal. The shift to Unreal Engine 5 aligns with a broader industry trend but risks losing the performance optimizations unique to idTech.

hackernews · bauc · Jul 7, 15:33 · [Discussion](https://news.ycombinator.com/item?id=48819244)

**Background**: id Software is known for its pioneering game engines, including id Tech, which evolved through versions like id Tech 5 and id Tech 7. Microsoft acquired id Software's parent company ZeniMax in 2021. The idTech engine has been a cornerstone for high-performance first-person shooters, known for its efficient rendering and low-level optimization.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Id_tech_5_engine">Id tech 5 engine</a></li>

</ul>
</details>

**Discussion**: The community sentiment is largely negative. Commenters like ndiddy argue that switching to UE5 allows Microsoft to hire cheaper contractors, but at the cost of losing internal expertise. LarsDu88 criticizes Microsoft for giving Epic Games a monopoly on game engines, suggesting open-sourcing idTech instead. Others worry about the homogenization of game development and loss of unique technical culture.

**Tags**: `#Microsoft`, `#id Software`, `#game engines`, `#layoffs`, `#Unreal Engine`

---

<a id="item-8"></a>
## [EU Parliament Advances Chat Control in Procedural Vote](https://www.heise.de/en/news/Showdown-in-Strasbourg-The-unexpected-return-of-Chat-Control-1-0-11356680.html) ⭐️ 8.0/10

The EU Parliament advanced the controversial Chat Control surveillance proposal in a procedural vote, moving it to a second reading where amendments require an absolute majority. This is significant because it could lead to mass surveillance of private communications, undermining encryption and privacy rights across the EU. The procedural tactic used may bypass democratic scrutiny. On Thursday, an absolute majority of 361 votes is required for amendments or rejection, while a simple majority suffices for approval. Many MEPs are expected to be absent due to the summer break, favoring proponents.

hackernews · miroljub · Jul 7, 15:16 · [Discussion](https://news.ycombinator.com/item?id=48819008)

**Background**: Chat Control is an EU proposal requiring messaging platforms to scan private messages for child sexual abuse material, which critics say breaks end-to-end encryption and enables mass surveillance. It has been repeatedly introduced despite public opposition and previous rejections.

**Discussion**: Commenters are critical, noting the tactical advantage of holding the vote before summer break when many MEPs are absent. Some reference Jean-Claude Juncker's quotes about slow erosion of rights. One user provided a link showing how MEPs voted, expressing disappointment.

**Tags**: `#privacy`, `#EU`, `#surveillance`, `#encryption`, `#policy`

---

<a id="item-9"></a>
## [sqlite-utils 4.0 adds database schema migrations](https://simonwillison.net/2026/Jul/7/sqlite-utils-4/#atom-everything) ⭐️ 8.0/10

sqlite-utils 4.0 introduces database schema migrations, nested transactions via a new db.atomic() method, and compound foreign keys. This major version release addresses common pain points in SQLite database management, making it easier to evolve schemas and handle complex transactions. Migrations are defined in Python files using the sqlite-utils library, leveraging the powerful table.transform() method that overcomes limitations of SQLite's ALTER TABLE.

rss · Simon Willison · Jul 7, 19:32

**Background**: sqlite-utils is a popular Python library and CLI tool for manipulating SQLite databases. Schema migrations allow developers to apply incremental changes to database schemas in a controlled, repeatable way. The new features build on existing capabilities, such as creating and transforming tables, making sqlite-utils a more comprehensive database management tool.

**Tags**: `#sqlite-utils`, `#SQLite`, `#database migrations`, `#Python`, `#Datasette`

---

<a id="item-10"></a>
## [PhD Thesis on Differentiable Ray Tracing for Radio Propagation](https://www.reddit.com/r/MachineLearning/comments/1upvkp5/phd_thesis_on_differentiable_ray_tracing_for/) ⭐️ 8.0/10

The author has published a PhD thesis written as a self-contained textbook that integrates automatic differentiation with ray tracing for radio propagation modeling, enabling exact gradient computation through complex physical environments. This work bridges differentiable programming and wireless propagation simulation, opening up new possibilities for inverse problems and machine learning integration in next-generation wireless network design. The thesis is split into three parts covering physics fundamentals, algorithmic core with GPU-accelerated path tracing and discontinuity smoothing, and practical applications like channel modeling and material calibration. It uses JAX and packages like Equinox and Optimistix.

reddit · r/MachineLearning · /u/jeertmans · Jul 7, 13:45

**Background**: Differentiable ray tracing extends traditional ray tracing by enabling gradient computation through the simulation, which is crucial for optimization and machine learning tasks. Automatic differentiation (autodiff) frameworks like JAX allow computing derivatives of arbitrary Python functions. This thesis applies these techniques to radio propagation modeling, a domain important for wireless communications and 5G/6G network design.

**Tags**: `#differentiable ray tracing`, `#radio propagation`, `#automatic differentiation`, `#machine learning`, `#wireless communications`

---

<a id="item-11"></a>
## [MIRA: A 5B Parameter World Model for Multiplayer Rocket League Simulation](https://www.reddit.com/r/MachineLearning/comments/1upofuw/mira_multiplayer_interactive_world_models_trained/) ⭐️ 8.0/10

MIRA is a 5-billion-parameter world model trained on 10,000 hours of synthetic Rocket League gameplay for multiplayer interactive simulation. It runs at 20 frames per second for 4 players on a single NVIDIA B200 GPU, and a playable demo, technical report, dataset, and code have been released. This represents a significant advance in large-scale world models for multi-agent interactive environments, with potential applications in game AI, simulation, and reinforcement learning. The open release of model, demo, and data enables broad community experimentation and accelerates research in interactive world modeling. The model has 5 billion parameters and was trained on synthetic data generated by Rocket League bots to avoid privacy concerns. It supports up to 4 players simultaneously and runs at 20 fps on a B200, though performance may vary on other hardware.

reddit · r/MachineLearning · /u/MasterScrat · Jul 7, 07:59

**Background**: A world model is a machine learning system that learns an internal representation of an environment and can predict future states given actions. Unlike simple generative models, world models simulate dynamics such as physics and agent interactions, enabling planning and reinforcement learning. This work builds on prior world model research but scales to a complex multiplayer scenario with strict real-time requirements.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/World_model_(artificial_intelligence)">World model (artificial intelligence)</a></li>

</ul>
</details>

**Tags**: `#world models`, `#reinforcement learning`, `#multiplayer AI`, `#Rocket League`, `#large-scale models`

---

<a id="item-12"></a>
## [Defending Fine-Tuning Poisoning with Trusted LoRA Adapter Subspaces](https://www.reddit.com/r/MachineLearning/comments/1uq68li/what_if_a_model_could_only_learn_what_trusted/) ⭐️ 8.0/10

A new paper proposes constraining fine-tuning updates to a subspace spanned by trusted LoRA adapters, preventing the model from learning malicious behaviors introduced by poisoned data. This geometric defense offers a novel approach to AI security, making it harder for adversaries to inject backdoors during fine-tuning, which is critical for safety in customized models. The approach was tested on 196 public LoRA adapters and showed significant reduction in attack success while preserving adaptation performance, even against adaptive attacks designed to bypass the defense.

reddit · r/MachineLearning · /u/Bright_Warning_8406 · Jul 7, 20:00

**Background**: Fine-tuning large language models on external data can introduce backdoors if poisoned samples are present. LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning technique that learns low-rank updates. This work leverages a trusted set of LoRA adapters to define a geometric subspace that constrains possible model updates, making malicious directions unreachable.

**Tags**: `#machine learning`, `#LoRA`, `#adversarial robustness`, `#fine-tuning`, `#security`

---

<a id="item-13"></a>
## [Google Adds 'Save Media' Setting for AI Training Data](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out/) ⭐️ 8.0/10

Google has introduced a new 'Save Media' setting within its Search Service History, which allows images, files, audio, and video uploaded via Google Lens, voice search, and other features to be saved and used to improve Google services and AI models. This change affects millions of users who use Google's visual and voice search features, as their media may now contribute to AI training unless they opt out. It highlights the ongoing tension between user privacy and the data needs of AI development. Users can opt out by turning off 'Save Media' in their Google Account's Search Service History settings. The setting covers media from Google Lens, Search Live, voice search, and translation speaking exercises.

telegram · zaihuapd · Jul 7, 04:00

**Background**: Google uses vast amounts of data to train its AI models, including search queries and media uploads. Features like Google Lens allow users to search using images, and voice search enables queries via speech. Previously, this media may have been used for training without explicit notice; the new setting provides clearer control.

**Tags**: `#Google`, `#AI training`, `#privacy`, `#search`, `#settings`

---

<a id="item-14"></a>
## [China Plans $295B National Computing Network](https://t.me/zaihuapd/42399) ⭐️ 8.0/10

China announced a plan to invest approximately 2 trillion yuan ($295 billion) over five years to build a nationwide interconnected data center network, prioritizing domestic AI chips from suppliers like Huawei to reduce dependence on US companies such as Nvidia and AMD. This massive state-led initiative aims to integrate fragmented regional computing resources into a unified network, making high-performance computing more accessible to businesses and the public, while advancing China's semiconductor self-sufficiency and AI infrastructure independence from the US. State-owned telecom operators such as China Telecom and China Unicom will run the primary facilities, and at least 80% of the AI chips used are expected to be from domestic suppliers. The plan is a key part of Beijing's broader 'six networks' infrastructure strategy.

telegram · zaihuapd · Jul 7, 04:45

**Background**: China's 'six networks' infrastructure plan aims to build advanced nationwide systems for transportation, energy, water, communications, computing, and cybersecurity. Previously, computing resources in China were fragmented across regions and providers, making it difficult for enterprises to access large-scale computing power. The new initiative seeks to create a unified market, with telecom operators already offering 'token packages' that sell computing power like mobile data.

**Tags**: `#AI infrastructure`, `#China tech`, `#semiconductors`, `#data centers`, `#geopolitics`

---

<a id="item-15"></a>
## [Anthropic Releases Claude Sonnet 5 with Strong Agentic Capabilities](https://t.me/zaihuapd/42404) ⭐️ 8.0/10

Anthropic has released Claude Sonnet 5, a new AI model with enhanced agentic capabilities, including planning and using tools like browsers and terminals autonomously. This release marks a significant advancement in agentic AI models, offering performance close to top-tier models like Opus at a lower price, potentially making sophisticated AI assistants more accessible to developers and businesses. Claude Sonnet 5 is available immediately across all plans and becomes the default model for Free and Pro tiers. Pricing is set at $2 per million input tokens, with the output token price not fully disclosed in the announcement.

telegram · zaihuapd · Jul 7, 09:02

**Background**: Claude Sonnet is a family of AI models developed by Anthropic, known for balancing performance and cost. Agentic capabilities refer to the model's ability to autonomously plan and execute tasks using external tools, such as web browsers or command-line interfaces, without direct step-by-step human guidance.

**Tags**: `#Claude`, `#Anthropic`, `#LLM`, `#agentic`, `#AI model`

---

<a id="item-16"></a>
## [Nvidia Blackwell Wafers Made in US, but Packaged in Taiwan](https://www.tomshardware.com/tech-industry/nvidia-and-intel-tout-chips-built-in-america-but-every-arizona-made-blackwell-die-is-still-packaged-in-taiwan) ⭐️ 8.0/10

TSMC's Arizona Fab 21 has begun mass production of Nvidia Blackwell wafers using the custom 4NP process, but the wafers are shipped to Taiwan for cutting, stacking, and CoWoS-L advanced packaging. This exposes a critical bottleneck in the US semiconductor supply chain: despite domestic wafer production, advanced packaging infrastructure remains concentrated in Taiwan, creating geopolitical and supply chain risks. The wafers travel approximately 7,000 miles to Taiwan for packaging, and the US currently lacks facilities for HBM production or packaging. Companies like Amkor, TSMC, and SK Hynix are building capacity, but a fully domestic supply chain is not expected until 2028-2029.

telegram · zaihuapd · Jul 7, 09:47

**Background**: Advanced packaging, such as CoWoS-L (Chip-on-Wafer-on-Substrate with Local Silicon Interconnect), is crucial for high-performance computing chips like Nvidia's Blackwell, as it stacks multiple dies together. The US has focused on logic manufacturing but lagged in packaging infrastructure, which remains heavily centered in Taiwan.

**Tags**: `#semiconductor`, `#supply chain`, `#NVIDIA`, `#advanced packaging`, `#Taiwan`

---

<a id="item-17"></a>
## [DeepSeek Develops Own AI Chip to Reduce Reliance on Nvidia and Huawei](https://www.reuters.com/world/china/chinas-deepseek-developing-its-own-ai-chip-sources-say-2026-07-07/) ⭐️ 8.0/10

DeepSeek, a Chinese AI company, has started developing its own AI chip focused on inference, aiming to reduce reliance on Nvidia and Huawei chips. The project began about a year ago and is still in early stages, with the company recruiting chip design engineers and engaging with suppliers. This move is significant as it could reduce DeepSeek's vulnerability to US export controls that restrict access to advanced chips from Nvidia and Huawei. If successful, it may also influence the broader AI hardware landscape in China and reduce dependence on foreign suppliers. The chip is designed specifically for inference, the stage where trained models generate responses, rather than for training. DeepSeek has been quietly hiring chip design engineers in recent months and has begun contacting chip design, foundry, and memory companies.

telegram · zaihuapd · Jul 7, 11:08

**Background**: DeepSeek previously relied on Nvidia H800 and Huawei Ascend chips for its models. US export controls have restricted access to advanced semiconductors, posing challenges for Chinese AI companies. Company founder Liang Wenfeng acknowledged in a rare 2024 interview that chip controls are a challenge.

**Tags**: `#AI chips`, `#DeepSeek`, `#semiconductor`, `#geopolitics`, `#AI hardware`

---

<a id="item-18"></a>
## [Claude Fable 5 relaunch with reduced quotas and safety issues](https://t.me/zaihuapd/42415) ⭐️ 8.0/10

Anthropic's flagship model Claude Fable 5 has been relaunched after the US lifted export restrictions, but with reduced usage quotas for subscribers and a transition to pay-per-use billing starting July 7. This change directly impacts developers relying on Claude for coding tasks, as the new safety filters cause frequent false positives on legitimate code, undermining productivity and trust in the model. Pro and Max subscribers can only use 50% of their weekly quota for Claude Fable 5 until July 7, after which the model will no longer be included in subscriptions. The model automatically downgrades when processing low-level code in C/C++, Rust, or when keywords like 'vulnerability' or 'hook' appear.

telegram · zaihuapd · Jul 7, 18:01

**Background**: Claude Fable 5 is the latest iteration of Anthropic's large language model, known for its strong performance in coding and reasoning. The US government had previously imposed export controls on the model, which were recently lifted, allowing the relaunch. The new restrictive safety measures are likely responses to regulatory pressure but have frustrated developers.

**Discussion**: Developers widely criticize the exaggerated safety thresholds, reporting that even harmless code triggers the model's downgrade, making it less useful for practical programming tasks. Many express frustration that Anthropic prioritizes safety over usability, especially without clear communication about the changes.

**Tags**: `#Claude`, `#AI model`, `#safety`, `#developer experience`, `#pricing`

---

