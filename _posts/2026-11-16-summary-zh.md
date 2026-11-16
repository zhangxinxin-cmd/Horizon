---
layout: default
title: "Horizon Summary: 2026-11-16 (ZH)"
date: 2026-11-16
lang: zh
---

> 从 37 条内容中筛选出 1 条重要资讯。

---

1. [Meta FAIR 与 NYU：视觉编码器预训练非必需，视觉专属参数不可少](#item-1) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Meta FAIR 与 NYU：视觉编码器预训练非必需，视觉专属参数不可少](https://www.reddit.com/r/MachineLearning/comments/1xx1k2o/meta_fair_nyu_unbundling_multimodal_vision/) ⭐️ 8.0/10

Meta FAIR 与 NYU 在相同数据和统一计算预算下从零训练了 200 多个多模态大模型，并把编码器预训练计入同一预算，发现单独的视觉编码器预训练并非必需，而视觉专属参数仍然不可缺少。在 0.6B 到 6.4B 的骨干规模上，无编码器模型始终落后，追赶大约需要 3 倍计算量。 这项研究清晰拆开了视觉编码器中通常被捆绑的三个选择——单独预训练、视觉专属参数、以及放在大语言模型之前——为当前“去掉编码器、重训编码器、重新引入编码器”等分歧提供了可操作的设计准则。若结论成立，它有望简化多模态大模型的训练流程，在不牺牲 VQA 表现的前提下减少对昂贵对比预训练的依赖。 主要对比使用 Qwen3-1.7B 和 4B 骨干、约 0.4B 视觉容量，在 16 个 Cambrian VQA 基准（448 像素）和 12 个语言基准上评估；将 MetaCLIP 预训练延长 6.5 倍使 ImageNet 线性探针准确率从 80.4% 提升到 84.4%，但并未提升 VQA。所谓“In-fusion”是在大语言模型前 8 层加入零初始化的视觉专属权重，在 1.7B 到 6.4B 规模上与编码器持平，并把首 token 时间降低约 13%；在 1.7B 时这些视觉专属分支取得 45.0 VQA，编码器为 44.4，而文本共享参数时为 42.3。

reddit · r/MachineLearning · /u/trungh98 · 11月15日 17:38

**背景**: 主流多模态大模型通常把视觉编码器（常以 CLIP 等对比目标单独预训练）与大语言模型配对，再把编码器输出的视觉 token 投影进大语言模型。这种设计至少捆绑了三个决策：编码器是否单独预训练、是否存在只被视觉 token 使用的参数、以及编码器是否放在大语言模型之前。已发布模型在这些维度上各不相同，但训练数据和计算量也不同，因此无法仅凭模型对比判断哪个选择真正关键。VQA 基准测试模型回答图像相关问题的能力，而 ImageNet 线性探针则衡量冻结视觉表征的质量。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://magazine.sebastianraschka.com/p/understanding-multimodal-llms">Understanding Multimodal LLMs - by Sebastian Raschka, PhD</a></li>
<li><a href="https://arxiv.org/html/2204.14198v2">Flamingo: a Visual Language Model for Few-Shot Learning</a></li>
<li><a href="https://www.alphaxiv.org/abs/2408.06610">CROME: Cross-Modal Adapters for Efficient Multimodal LLM | alphaXiv</a></li>

</ul>
</details>

**标签**: `#multimodal-learning`, `#vision-encoders`, `#MLLM`, `#ablation-study`, `#scaling-laws`

---