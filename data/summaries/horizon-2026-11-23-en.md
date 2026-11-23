# Horizon Daily - 2026-11-23

> From 25 items, 3 important content pieces were selected

---

1. [OpenAI essay links perplexity to intelligence, sparking metrics debate](#item-1) ⭐️ 8.0/10
2. [Analysis: Anthropic's 2028 power mix projected at 87% gas, 11% coal](#item-2) ⭐️ 8.0/10
3. [US Commerce Dept to finalize rule closing remote chip access loophole for Chinese AI firms](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenAI essay links perplexity to intelligence, sparking metrics debate](https://openai.com/index/perplexity-and-intelligence/) ⭐️ 8.0/10

OpenAI published an essay titled “Perplexity and Intelligence” arguing that perplexity—equivalently, prediction and compression performance—is a core measurable correlate of intelligence, and the post drew a large Hacker News discussion with 484 points and 334 comments. The piece matters because it reopens a fundamental evaluation question: whether a simple next-token metric still tracks progress as the field shifts toward RL-trained reasoning models and increasingly complex benchmarks. Commenters noted the essay does not formally define perplexity, with one supplying the standard range from 1 for perfect prediction to vocabulary size for random prediction; another linked prediction and compression to world-model extraction via a 2008 paper, and a third said Microsoft’s Mustafa Suleyman had added MAI models to the chart, reporting MAI-2 Base log-perplexity of 0.819 on OpenAI’s held-out set.

hackernews · acossta · Nov 22, 17:06 · [Discussion](https://news.ycombinator.com/item?id=50601525)

**Background**: Perplexity is a standard language-model metric derived from cross-entropy: it measures how surprised a model is by the next token, and lower values indicate better prediction. The essay’s underlying intuition is that compressing raw data well requires learning regularities and extracting a usable world model, so prediction rate can serve as a proxy for that progress. Modern reasoning models are trained with reinforcement learning on multi-step tasks, so their capabilities may not be fully captured by next-token loss alone.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Perplexity">Perplexity - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Reasoning_model">Reasoning model - Wikipedia</a></li>
<li><a href="https://magazine.sebastianraschka.com/p/the-state-of-llm-reasoning-model-training">The State of Reinforcement Learning for LLM Reasoning</a></li>

</ul>
</details>

**Discussion**: The Hacker News thread was substantive rather than dismissive: commenters rigorously defined perplexity, defended the compression-as-world-modeling argument, and expressed surprise that cross-entropy trends remain so clear in the RL era. Some questioned how reasoning models and specific releases fit the picture, while others welcomed a simple benchmark and noted vendor interest in reporting on a common held-out evaluation set.

**Tags**: `#language-models`, `#perplexity`, `#scaling-laws`, `#compression`, `#ai-evaluation`

---

<a id="item-2"></a>
## [Analysis: Anthropic's 2028 power mix projected at 87% gas, 11% coal](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) ⭐️ 8.0/10

An analysis published on the Better Data Center Project blog breaks down Anthropic's projected 2028 electricity supply, concluding that roughly 87% will come from natural gas and 11% from coal, with only a sliver from other sources. The piece distinguishes power sourced from the grid versus power the company brings on-site itself ("BYOP"), and it drew a large Hacker News discussion of about 895 points and roughly 898 comments. As AI labs race to scale compute, their power procurement decisions lock in emissions and local air pollution for a decade or more, making frontier AI a growing climate and public-health issue rather than a purely technical one. If a leading safety-focused lab's supply is overwhelmingly fossil-based, it weakens the industry's stated sustainability commitments and strengthens the case for regulators and host communities to demand disclosure and cleaner sourcing. The breakdown rests on reported and projected procurement rather than metered generation, so the fossil share could shift as contracts, grid interconnection and new capacity come online. A key technical point is the split between grid power and "bring your own power" on-site generation, since self-supplied gas turbines often bypass the grid's own renewable mix and fall under different permitting and emissions rules.

hackernews · happosai · Nov 22, 08:57 · [Discussion](https://news.ycombinator.com/item?id=50597612)

**Background**: AI data centers need large amounts of steady, round-the-clock power, and grid interconnection queues in the US can take years, so operators increasingly build dedicated on-site generation — the practice the post calls "BYOP," bring your own power. Natural gas plants are far faster to build than nuclear and cheaper than contracting large volumes of renewables plus storage, which is why gas dominates near-term data-center plans. Per kilowatt-hour gas emits roughly half the CO2 of coal but still produces carbon emissions and nitrogen oxides that affect local air quality.

**Discussion**: Hacker News commenters were largely critical of Anthropic, with one alleging that leasing the Colossus 1 site has contributed to local pollution in Memphis and noting the company has made no US renewable commitments comparable to Alphabet's. Several argued that unregulated externalities are simply pushed onto communities far from decision-makers, while others emphasized how hard data-center energy scale is to visualize and pointed out that much US natural gas is a byproduct of shale oil production that is often flared when it cannot be captured.

**Tags**: `#AI energy consumption`, `#data centers`, `#climate change`, `#regulation`, `#Anthropic`

---

<a id="item-3"></a>
## [US Commerce Dept to finalize rule closing remote chip access loophole for Chinese AI firms](https://t.me/zaihuapd/45289) ⭐️ 8.0/10

The US Commerce Department is reportedly finalizing a rule that would prevent Chinese AI companies from remotely accessing advanced AI chips hosted in overseas data centers, with publication possible as early as this month. The controls would extend existing semiconductor export restrictions to seven additional countries, including Malaysia, Singapore, and Thailand, in an effort to close remote-access and chip-smuggling loopholes. If implemented, the rule would cut off one of the remaining paths Chinese AI developers use to obtain compute, potentially reshaping how they train and serve large models. It also broadens the geographic reach of US export controls across Southeast Asia, affecting data center operators, cloud providers, and chip supply chains well beyond China and the United States. The rule is still a draft under interagency consultation, not a confirmed final action, and the White House has separately asked Congress to legislate the measure. Notably, NVIDIA has reportedly lobbied against closing the remote-access gap, arguing that US AI infrastructure needs to win globally.

telegram · zaihuapd · Nov 22, 04:34

**Background**: US export controls on advanced AI chips to China have tightened repeatedly in recent years, with the Commerce Department's Bureau of Industry and Security (BIS) maintaining the list of restricted technologies and destinations. Because the rules historically targeted physical shipments of chips to China, companies could still tap restricted hardware installed in data centers in third countries such as Singapore or Malaysia. "Remote access" refers to using that overseas compute over a network rather than importing the hardware itself, which is the loophole this rule aims to close.

**Tags**: `#export-controls`, `#AI-chips`, `#semiconductors`, `#geopolitics`, `#NVIDIA`

---

