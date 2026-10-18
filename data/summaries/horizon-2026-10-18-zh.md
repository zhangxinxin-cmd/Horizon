# Horizon 每日速递 - 2026-10-18

> 从 35 条内容中筛选出 2 条重要资讯。

---

1. [vLLM v0.32.0 发布：结构化决策端点、通用工具解析器与更广的低精度 KV 缓存支持](#item-1) ⭐️ 8.0/10
2. [系统管理员称 Namecheap 查封并停用其全部域名](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [vLLM v0.32.0 发布：结构化决策端点、通用工具解析器与更广的低精度 KV 缓存支持](https://github.com/vllm-project/vllm/releases/tag/v0.32.0) ⭐️ 8.0/10

vLLM 发布 v0.32.0，包含来自 363 位贡献者（其中 121 位为新贡献者）的 814 个提交，新增 `POST /v1/systemone` 端点，可针对结构化状态回答 `choice`、`noul` 和 `score` 类问题，并且默认启用。该版本还引入了与具体 checkpoint 无关的 `hf` 工具调用与推理解析器（`--tool-call-parser hf`、`--reasoning-parser hf`），它们直接读取模型的 `response_template`；同时在 SM8x、SM90、SM100 和 SM12x 上扩展了 NVFP4/FP8 KV 缓存支持，并为 ROCm 增加了 4 位 `ultraquant_4bit` KV 缓存。 这些改动直接面向生产环境的 LLM 服务：过去需要为每个模型单独编写的解析器胶水代码被一个通用解析器取代，而低精度 KV 缓存降低了每个 rank 的显存占用，使运维者能在同等硬件上支持更长上下文或更大批次。对于大规模运行 vLLM 的团队来说，这次发布意味着可测量的吞吐提升，以及更简便地接入新发布的模型。 该版本包含多项破坏性变更：不再支持 Python 3.10，默认 CORS 来源被收紧，`transformers` 被固定为 >=5.16.1,<5.20.0，级联注意力（cascade attention）和 `mamba_cache_mode="all"` 被移除，`max_tokens` 不再从上下文窗口中预留，Responses API 的推理流事件被重命名。根据 PR 自带的基准测试，GLM-5.x 在 SM100 上默认使用 FP8 KV 缓存可将每个 rank 的 KV 显存减半、吞吐提升 2.3-5.5%，但首 token 延迟（TTFT）会增加 7-11%。

github · khluu · 10月18日 06:50

**背景**: vLLM 是一个被广泛使用的开源大语言模型推理引擎，基于 PagedAttention 高效地服务大量并发请求。它的 KV 缓存保存已处理 token 的注意力键和值，避免重复计算，而在长上下文服务中这块缓存会占据绝大部分显存。将 KV 缓存量化为 FP8 或 NVFP4 等格式——NVFP4 是 NVIDIA 面向 Blackwell 代 GPU 设计的、带共享块缩放因子的 4 位浮点格式——可以降低显存带宽压力和占用，同时把精度损失控制在接近高精度格式的水平。首 token 延迟（TTFT）和输出吞吐是团队在权衡这些设置时最关注的两项核心指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/">Introducing NVFP4 for Efficient and Accurate Low-Precision ...</a></li>
<li><a href="https://deepwiki.com/local-inference-lab/rtx6kpro/4.3-nvfp4-quantization-format-calibration-and-hybrid-precision">NVFP4 Quantization — Format, Calibration, and Hybrid ...</a></li>
<li><a href="https://www.emergentmind.com/topics/time-to-first-token-ttft">Time to First Token (TTFT) in LLM Inference</a></li>

</ul>
</details>

**标签**: `#vllm`, `#llm-inference`, `#kv-cache`, `#quantization`, `#release`

---

<a id="item-2"></a>
## [系统管理员称 Namecheap 查封并停用其全部域名](https://www.reddit.com/r/sysadmin/comments/1x8cycd/namecheap_just_seized_and_disabled_all_my_domains/) ⭐️ 8.0/10

一名系统管理员在 r/sysadmin 发帖称，Namecheap 查封并停用了他账户下的全部域名，且事先似乎没有任何警告；该帖子随后被转到 Hacker News，获得 378 分和 183 条评论。评论者随即整理出 Namecheap 以往的多次事件，包括因一条含糊的推文而暂停域名，以及把账户移交给了未经核实的第三方。 这件事的意义远超一桩个人投诉：对于任何业务依赖域名的团队来说，它是一个典型的供应商风险案例，因为注册商可以让整套基础设施下线，而恢复可能需要数小时的支持升级流程。它也推动了更广泛的讨论——私募股权收购是否正在削弱那些曾受信任的基础设施厂商的支持能力和安全性。 帖子里提到 2025 年 CVC 以据称 15 亿美元收购 Namecheap 的私募股权交易，评论者指出与此同时人工支持被削减、AI 自动化增多，而且 .com 价格多次上涨。还有人描述了在聊天中无需任何真实身份验证就被移除 2FA 的情况，另有一家企业称其域名因未在 48 小时内回复一封钓鱼邮件而被停用。

hackernews · sashk · 10月18日 16:56 · [社区讨论](https://news.ycombinator.com/item?id=50142866)

**背景**: 域名注册商可以将域名设置为 clientHold 或 serverHold 状态，这会把域名从 DNS 中移除，使其关联的网站和邮箱全部下线；这类状态通常只在滥用、欠费或 WHOIS 验证失败时使用，而 ICANN 的指导文件也提醒不要过度停用域名。受影响的用户可以向注册商升级申诉、向 ICANN 合同合规部门投诉，或使用 UDRP 等争议解决机制，但这些途径都无法立即恢复服务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://statusfield.com/services/namecheap/incidents">Namecheap Incident History | Statusfield</a></li>
<li><a href="https://www.icann.org/compliance/complaint">Submitting a Complaint to ICANN Contractual Compliance - ICANN</a></li>
<li><a href="https://dad-union.com/en/domain-status-clienthold-cause-solution">[Solved] What Is Domain Status: clientHold ? Causes and How to...</a></li>

</ul>
</details>

**社区讨论**: 评论整体对 Namecheap 极度负面，大家互相分享域名被停用、账户被接管以及在无验证情况下 2FA 被移除的具体经历，并把这种下滑与 2025 年的收购联系起来。反复出现的实用建议是要谨慎选择注册商并愿意为优质支持付费；也有评论者提出相反观点，认为 GoDaddy 虽然名声不佳，但在域名数量大时提供了更好的支持和专属客户经理。

**标签**: `#domains`, `#registrar`, `#security`, `#infrastructure`, `#vendor-risk`

---

