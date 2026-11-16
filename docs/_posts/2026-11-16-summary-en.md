---
layout: default
title: "Horizon Summary: 2026-11-16 (EN)"
date: 2026-11-16
lang: en
---

> From 37 items, 1 important content pieces were selected

---

1. [Meta FAIR/NYU: Vision Encoder Pretraining Optional, Vision-Only Parameters Essential](#item-1) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Meta FAIR/NYU: Vision Encoder Pretraining Optional, Vision-Only Parameters Essential](https://www.reddit.com/r/MachineLearning/comments/1xx1k2o/meta_fair_nyu_unbundling_multimodal_vision/) ⭐️ 8.0/10

Meta FAIR and NYU trained more than 200 multimodal LLMs from scratch on identical data with matched lifetime compute, counting encoder pretraining against the same budget, and found that separate vision-encoder pretraining is optional while dedicated vision-only parameters are essential. Across 0.6B–6.4B backbones, encoder-free models consistently trailed and needed about 3× the compute to catch up. The study cleanly separates three choices that are usually bundled in vision encoders—separate pretraining, vision-only parameters, and placement before the LLM—offering labs a concrete design rule amid conflicting published choices such as dropping, retraining, or reintroducing encoders. If the result holds, it could simplify MLLM training pipelines and reduce dependence on expensive contrastive pretraining without sacrificing VQA performance. The main comparisons use Qwen3-1.7B and 4B backbones with 0.4B parameters of vision capacity, evaluated on 16 Cambrian VQA benchmarks at 448 px and 12 language benchmarks; pretraining MetaCLIP 6.5× longer raised ImageNet linear-probe accuracy from 80.4% to 84.4% but did not improve VQA. “In-fusion” adds zero-initialized vision-only weights to the LLM’s first 8 layers, matches an encoder from 1.7B to 6.4B, and cuts time to first token by about 13%; at 1.7B those vision-only branches score 45.0 VQA versus 44.4 for the encoder and 42.3 when text shares them.

reddit · r/MachineLearning · /u/trungh98 · Nov 15, 17:38

**Background**: Mainstream multimodal LLMs typically pair a vision encoder—often pretrained separately with contrastive objectives such as CLIP—with a language model, and the encoder’s visual tokens are projected into the LLM. This design bundles at least three decisions: whether the encoder gets separate pretraining, whether some parameters are used only by vision tokens, and whether the encoder sits before the LLM. Published models vary across these axes but also differ in training data and compute, so their comparisons cannot isolate which choice matters. VQA benchmarks test answering questions about images, while ImageNet linear probing measures the quality of frozen visual representations.

<details><summary>References</summary>
<ul>
<li><a href="https://magazine.sebastianraschka.com/p/understanding-multimodal-llms">Understanding Multimodal LLMs - by Sebastian Raschka, PhD</a></li>
<li><a href="https://arxiv.org/html/2204.14198v2">Flamingo: a Visual Language Model for Few-Shot Learning</a></li>
<li><a href="https://www.alphaxiv.org/abs/2408.06610">CROME: Cross-Modal Adapters for Efficient Multimodal LLM | alphaXiv</a></li>

</ul>
</details>

**Tags**: `#multimodal-learning`, `#vision-encoders`, `#MLLM`, `#ablation-study`, `#scaling-laws`

---