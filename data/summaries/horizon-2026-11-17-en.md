# Horizon Daily - 2026-11-17

> From 42 items, 4 important content pieces were selected

---

1. [vLLM v0.34.0 turns on memory-aware KV cache by default, removes Model Runner V1](#item-1) ⭐️ 8.0/10
2. [Optimizely infrastructure compromised, serving malware on Zoom and GitLab](#item-2) ⭐️ 8.0/10
3. [US Commerce Dept to finalize rule closing remote AI chip access loophole for Chinese firms](#item-3) ⭐️ 8.0/10
4. [Shandong University Team Claims First Conditional Proof of Goldbach's Conjecture](#item-4) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [vLLM v0.34.0 turns on memory-aware KV cache by default, removes Model Runner V1](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) ⭐️ 8.0/10

vLLM v0.34.0 landed with 1,061 commits from 412 contributors, making the extensible (memory-aware) KV cache the default so the cache is sized from memory actually free after CUDA graph capture and warmup rather than from an estimate. The release also deletes Model Runner V1 so Model Runner V2 is the only GPU runner, adds 10 new model integrations including Mistral Large 4 (1T total / 52B active) and NVIDIA Nemotron-3.5-Transcribe, and ships large decode and throughput gains on Blackwell and MI355X hardware. Because a larger KV cache translates directly into more concurrent requests and lower time-to-first-token under high load, most deployments should see better throughput without any tuning, and the reported gains of up to 1.95× decode on GB200 and 1.6× throughput on GLM-5.3-Flash make this one of the more consequential vLLM releases for operators running on new accelerators. At the same time, the breaking changes mean existing production setups need a deliberate upgrade plan. The default change is not free: per-token decode latency can rise (TPOT +6–18% on some H200 models at concurrency 128), and users can opt out with --gpu-memory-utilization 0.9 or --no-enable-extensible-kv-cache. Other upgrade blockers include a new default --block-size of 64 (pass --block-size 16 to keep the old behavior), dropped ROCm 7.2 artifacts in favor of ROCm 10.0 wheels, a required huggingface_hub >= 2.0.0, and removal of QuTLASS/fp_quant and Marlin W4A8 quantization paths.

github · khluu · Nov 16, 23:22

**Background**: vLLM is a widely used open-source inference and serving engine for large language models, built around PagedAttention, which stores attention key/value tensors in a paged KV cache so many requests can share GPU memory efficiently. The size of that KV cache determines how many sequences can be batched together, so estimating its capacity correctly is central to serving performance; historically vLLM estimated it as free memory multiplied by a gpu_memory_utilization factor during a profiling pass, which forced operators to guess values like 0.9. The "Model Runner" is vLLM's execution core that prepares inputs and runs the forward pass, and Model Runner V2 is a modular, GPU-native rewrite with async-first scheduling that this release makes mandatory.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.vllm.ai/en/latest/configuration/optimization/">Optimization and Tuning - vLLM</a></li>
<li><a href="https://vllm.ai/blog/2026-03-24-mrv2">Model Runner V 2 : A Modular and Faster Core for vLLM | vLLM Blog</a></li>
<li><a href="https://rocm.blogs.amd.com/artificial-intelligence/scaling-ai-inference/README.html">Scaling AI Inference Performance with vLLM on AMD Instinct ...</a></li>

</ul>
</details>

**Tags**: `#vllm`, `#llm-inference`, `#model-serving`, `#release-notes`, `#gpu-performance`

---

<a id="item-2"></a>
## [Optimizely infrastructure compromised, serving malware on Zoom and GitLab](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) ⭐️ 8.0/10

Optimizely's own infrastructure was compromised, and its CDN began delivering malicious JavaScript to customer sites — including Zoom and GitLab, plus reportedly a long list of major brands. The injected snippets also appeared on Optimizely's own properties, www.optimizely.com and login.optimizely.com, with the company's CDN serving exactly the code it was handed rather than being cache-poisoned. This is a textbook real-world example of third-party script supply-chain risk: a single widely deployed vendor script sits on thousands of pages, so one compromise propagates malicious code at scale to sites that did nothing wrong. It directly affects anyone operating a web property who embeds external experimentation, analytics, or tag-manager scripts. Investigators still do not know how the attacker obtained write access across so many unrelated customer projects — whether a compromised Optimizely system, a stolen credential with cross-customer privileges, or something else — and the report notes that explaining this is up to Optimizely. The incident highlights the absence of vendor-side release safeguards such as staged rollouts, internal cooldowns, and automated security checks for globally distributed scripts.

hackernews · kristjansson · Nov 16, 23:00 · [Discussion](https://news.ycombinator.com/item?id=50524767)

**Background**: Optimizely is a digital experience and experimentation platform whose core product is delivered to customers by embedding a JavaScript snippet that loads code from Optimizely's CDN, so every visitor to a customer site executes vendor-controlled code. This resembles the long-standing critique of Google Tag Manager, which was designed so marketing teams could add tags without involving engineering, resulting in heavy stacks of third-party JavaScript on ordinary pages. A supply chain attack like this targets a trusted third-party provider rather than the victim directly, letting attackers reach many downstream organizations through one weak link.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Supply_chain_attack">Supply chain attack - Wikipedia</a></li>
<li><a href="https://crystallize.com/answers/tech-dev/what-are-gtm-security-risks">What Are Google Tag Manager Security Risks ? | Crystallize</a></li>
<li><a href="https://www.oshyn.com/blog/what-is-optimizely">What is Optimizely DXP? - Oshyn</a></li>

</ul>
</details>

**Discussion**: Commenters blamed the structural incentives of tag managers, arguing that giving marketing unvetted script-injection rights is how pages ended up loading megabytes of JavaScript, and hoped teams now reassess that model. Others demanded accountability, saying Optimizely lacked safeguards like staged rollouts and automated security checks, and that huge sites such as CNN and BBC have no excuse not to self-host critical scripts. Some pointed to NoScript-style script blocking as a practical way to reduce exposure.

**Tags**: `#security`, `#supply-chain-attack`, `#third-party-scripts`, `#web-security`, `#cdn`

---

<a id="item-3"></a>
## [US Commerce Dept to finalize rule closing remote AI chip access loophole for Chinese firms](https://t.me/zaihuapd/45161) ⭐️ 8.0/10

The U.S. Commerce Department is reportedly finalizing a rule that would stop Chinese AI companies from remotely accessing advanced AI chips hosted in overseas data centers, with publication possible as early as this month. The rule would extend existing semiconductor export restrictions to seven countries, including Malaysia, Singapore and Thailand, in an effort to close remote-access and chip-smuggling gaps, and is being finalized after consultations with other government agencies. The rule would close one of the last major workarounds Chinese AI developers have used to obtain advanced compute, potentially reshaping how Chinese labs train frontier models and putting pressure on data-center operators across Southeast Asia. It also marks a significant escalation in U.S.-China tech competition, extending export controls from hardware shipments to cross-border cloud and compute access. The controls would cover seven countries beyond the current scope, with Malaysia, Singapore and Thailand named explicitly, targeting both remote access to chips and physical smuggling routes. Nvidia has reportedly lobbied against closing the remote-access gap, arguing that U.S. AI infrastructure needs to win globally, and the White House has already asked Congress to pass legislation directing Commerce to write the rule.

telegram · zaihuapd · Nov 16, 14:44

**Background**: Since 2022 the U.S. has restricted exports of advanced AI accelerators such as Nvidia's high-end GPUs to China, requiring licenses for sales of the most capable chips. Because these controls apply to shipping hardware rather than to who uses it, Chinese firms have been able to rent compute from data centers in third countries that legally imported the chips. Closing that gap means extending the licensing regime to those intermediary countries and to cloud-based access, which is technically and diplomatically harder than policing physical shipments.

**Tags**: `#AI chips`, `#export controls`, `#US-China tech`, `#semiconductor policy`, `#data centers`

---

<a id="item-4"></a>
## [Shandong University Team Claims First Conditional Proof of Goldbach's Conjecture](https://mrc.sdu.edu.cn/info/1018/2193.htm) ⭐️ 8.0/10

Li Jiamin and Liu Jianya of Shandong University have posted a paper claiming the first conditional proof that every sufficiently large even number is the sum of two primes, with both primes lying between one-third and two-thirds of that number. The argument assumes the generalized Riemann hypothesis for Dirichlet L-functions together with one of two additional spectral hypotheses. The binary Goldbach conjecture is one of the oldest unsolved problems in mathematics, and a result that covers all sufficiently large even numbers — even conditionally — would be a major step beyond sieve-theoretic partial results. If the approach survives scrutiny, it would open a genuinely new route to additive prime problems that does not rely on the classical circle method or sieve methods. The result is explicitly conditional: the authors state that the generalized Riemann hypothesis alone is insufficient to derive the conclusion, and one of two additional spectral hypotheses must also hold, so this is not an unconditional proof. The work is a preprint posted via Shandong University's mathematics research center and does not yet appear to have been peer-reviewed.

telegram · zaihuapd · Nov 16, 16:01

**Background**: Goldbach's conjecture states that every even number greater than 2 is the sum of two primes; the 'binary' version concerns representing a single even number as a sum of two primes, as opposed to the ternary version about odd numbers as sums of three primes. The generalized Riemann hypothesis extends the Riemann hypothesis from the classical zeta function to Dirichlet L-functions, which encode the distribution of primes in arithmetic progressions and are a standard workhorse assumption in analytic number theory. Classical attacks on Goldbach-type problems use the Hardy–Littlewood circle method, which handles additive representations of large integers, or sieve methods, which bound how often primes can be excluded; the Shandong team's approach is described as different from both.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Goldbach's_conjecture">Goldbach's conjecture - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Generalized_Riemann_hypothesis">Generalized Riemann hypothesis - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Additive_number_theory">Additive number theory - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#Goldbach conjecture`, `#number theory`, `#conditional proof`, `#Riemann hypothesis`, `#mathematics research`

---

