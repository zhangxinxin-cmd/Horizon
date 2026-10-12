# Horizon 每日速递 - 2026-10-12

> 从 34 条内容中筛选出 2 条重要资讯。

---

1. [陶哲轩《数学 2.0》幻灯片：AI 正在重塑数学研究](#item-1) ⭐️ 8.0/10
2. [批评文章称 Passkey 是陷阱，引发 Hacker News 激辩](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [陶哲轩《数学 2.0》幻灯片：AI 正在重塑数学研究](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf) ⭐️ 8.0/10

陶哲轩（Terence Tao）发布了他 2026 年在加州理工演讲《数学 2.0》的幻灯片（并配有一篇 2026 年 10 月 10 日的博客文章），将数学划分为近一个世纪以来长期稳定的“数学 1.0”时代，以及当下由 AI 驱动的“数学 2.0”阶段。他在幻灯片中指出，自己所在的数学研究领域近一个世纪以来基本保持稳定，却“格外容易受到这类颠覆的冲击”。 作为菲尔兹奖得主，陶哲轩对 AI 如何改变一个近一个世纪以来结构稳定的学科给出了极具参考价值的判断，其影响涉及证明如何产出、研究议程如何设定，以及科研经费与人才培养如何组织。这场演讲也推动了更广泛的公共讨论：AI 是否真的已经在解决长期悬而未决的开放问题。 这份材料是演讲幻灯片而非正式的研究成果，其中包含三页关于医学与癌症治愈的内容，遭到从事药物发现研究的科研人员的批评。陶哲轩还提到社区中的反馈：OpenAI 模型近期的输出解决了一些研究者钻研多年的问题，一些数学家不得不大幅重写刚刚提交的经费申请。

hackernews · Anon84 · 10月11日 13:16 · [社区讨论](https://news.ycombinator.com/item?id=50043026)

**背景**: 陶哲轩是菲尔兹奖得主、当今最知名的数学家之一，其博客“What's new”因对数学实践的元层面评论而被广泛阅读。“数学 1.0”与“数学 2.0”的划分，对比了传统上以人类节奏推进的数学文化，与 AI 系统直接参与猜想、证明和验证的新文化。演讲的时机紧随近期广受讨论的说法——OpenAI 的模型给出了某些数学开放问题的解答，而这一说法本身也引发了争议。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf">Math 2 . 0</a></li>
<li><a href="https://terrytao.wordpress.com/2026/10/10/math-2-0/">Math 2 . 0 | What's new</a></li>
<li><a href="https://www.youtube.com/watch?v=mBUCv-nimL4">Math 2 . 0 : Terence Tao responds to the recent OpenAI... - YouTube</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为演讲中与医学无关的部分有趣且富有信息量，但许多人对陶哲轩关于医学的幻灯片提出反驳：一位从事药物发现的研究者认为其癌症医学相关论断缺乏充分依据，其他人则指出包括全身麻醉在内的许多药物都在机制未被完全理解的情况下使用。还有读者提到，AI 解出的问题迫使他们重写已提交的经费申请，并描述了钻研多年的问题被“夺走”时如同失去旧友般的情感反应。

**标签**: `#AI`, `#mathematics`, `#Terence Tao`, `#AI for science`, `#research workflows`

---

<a id="item-2"></a>
## [批评文章称 Passkey 是陷阱，引发 Hacker News 激辩](https://nonfunctional.substack.com/p/passkeys-are-a-trap-do-not-use-them) ⭐️ 8.0/10

一篇题为《Passkeys are a trap. Do not use them》的 Substack 文章广泛传播，作者反对这一新兴的无密码认证标准，在 Hacker News 上获得 209 分和约 110 条实质性评论。文章认为 passkey 以用户对凭证的控制权和可移植性为代价换取厂商托管的便利，但文末附注中作者又承认了 passkey 域名绑定带来的抗钓鱼优势。 Apple、Google、微软和 FIDO 联盟正把 passkey 推为密码的默认替代方案，因此对其信任模型的公开批评会影响每一位需要决定是否部署它的工程师和安全从业者。这场讨论暴露出该标准在证明（attestation）、凭证导出和设备丢失恢复方面的真实缺口，而这些缺口将决定企业与消费者认证方式的演进方向。 评论者指出，证明（attestation）只能在凭证注册时请求，无法在登录阶段追溯强制，而且会弹出浏览器权限提示，Apple 的实现甚至可能根本不支持，因此所谓 Netflix 或 Twitter 通过 attestation 限制 passkey 的说法值得怀疑。另一些人则指出文章自相矛盾：最后的脚注承认 passkey 具备域名绑定、可抵御中间人攻击的特性，而作者通篇都未把它列为核心设计动机。

hackernews · laurex · 10月11日 21:59 · [社区讨论](https://news.ycombinator.com/item?id=50048312)

**背景**: Passkey 基于 FIDO2/WebAuthn 标准，采用公钥密码学，不向服务器发送共享密钥，因此能抵御钓鱼和凭证复用攻击。它分为两类：由 iCloud 钥匙串、Google 密码管理器等平台在用户多台设备间同步的同步型 passkey，以及绑定单一硬件认证器的设备绑定型 passkey。attestation 是 FIDO 的可选机制，允许依赖方验证认证器的厂商与型号；而可移植性问题则聚焦于用户能否在密码管理器之间导出凭证，FIDO 联盟正通过凭证交换协议（CXP）和凭证交换格式（CXF）将其标准化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://fidoalliance.org/fido-attestation-enhancing-trust-privacy-and-interoperability-in-passwordless-authentication/">White Paper: FIDO Attestation : Enhancing Trust... | FIDO Alliance</a></li>
<li><a href="https://login.com/concepts/passkey-portability/">Passkey portability : export and migration limits | login.com</a></li>
<li><a href="https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf">WebAuthn Credential Exchange Protocol (CXP) & Format (CXF)</a></li>

</ul>
</details>

**社区讨论**: 评论情绪两极分化：一些评论者称赞这是一篇写得不错、提出了失去凭证控制权等合理担忧的批评文章；另一些人则不同意其结论，认为把 passkey 存在 Bitwarden、KeePass、1Password 等灵活管理器中依然让用户掌握控制权。反复出现的担忧包括无法把凭证备份进保险箱、指纹解锁强度不如长主密码，以及对厂商强制 attestation 的质疑。

**标签**: `#passkeys`, `#authentication`, `#security`, `#FIDO2`, `#web standards`

---

