---
layout: default
title: "Horizon Summary: 2026-10-23 (ZH)"
date: 2026-10-23
lang: zh
---

> 从 43 条内容中筛选出 7 条重要资讯。

---

1. [Quad9 因藐视法庭裁决将把 DNS 解析服务撤出法国](#item-1) ⭐️ 8.0/10
2. [GNU Taler 筹备在德国正式投入运营](#item-2) ⭐️ 8.0/10
3. [借助 LLM 自动化与 JetKVM 硬件，Switch 2 被成功破解](#item-3) ⭐️ 8.0/10
4. [eMudhra 因私钥被破解退出全球 SSL/TLS 证书业务](#item-4) ⭐️ 8.0/10
5. [研究：智能电视关闭内容识别后仍继续上报数据](#item-5) ⭐️ 8.0/10
6. [被禁运的 Nvidia B300 芯片据称现身中国国有网络](#item-6) ⭐️ 8.0/10
7. [商务部拟对人工智能、生物医药、光伏技术实施出口管制并公开征求意见](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Quad9 因藐视法庭裁决将把 DNS 解析服务撤出法国](https://quad9.net/news/blog/au-revoir-france/) ⭐️ 8.0/10

瑞士非营利 DNS 解析服务商 Quad9 宣布将把其公共解析服务撤出法国。此前巴黎一家法院裁定其未按要求封锁盗版相关域名、构成藐视法庭，退出预计将在 11 月 24 日前后生效。值得注意的是，原告索尼音乐娱乐德国公司（Sony Music Entertainment GmbH）自己曾通过德国的 VPN 访问那些本应被 Quad9 的 geoIP 过滤挡在门外的内容。 一家被广泛使用的公共 DNS 解析器因版权封锁命令而放弃整个国家，是一个值得关注的互联网治理先例：它表明站点封锁禁令可能把独立的 DNS 服务商挤出市场，迫使用户转而使用隐私与安全防护更弱的解析服务。这也让人们对 DNS 层面封锁的有效性产生疑问——用户只需换一个解析器或用隧道绕过 geoIP 过滤即可。 Quad9 表示，geoIP 封锁无法针对特定域名进行选择性拒绝解析，但为了合规，它很可能在 11 月 24 日之后直接使用 geoIP 过滤屏蔽法国用户，并承认这一做法存在矛盾。此案与广播公司 beIN Sports 在法国提出的另一项要求相呼应——据报道后者寻求每日最高 58 万欧元的违规罚款；此前的 Canal+封锁禁令也曾针对谷歌、Cloudflare 和思科。

hackernews · farrokhi · 10月22日 14:32 · [社区讨论](https://news.ycombinator.com/item?id=50195959)

**背景**: DNS 解析器是互联网的“查号台”，负责把域名翻译成 IP 地址；Quad9 是由瑞士非营利组织运营的免费公共解析器，主打隐私保护，同时也会拦截已知的恶意域名。在法国，版权方已获得多项站点封锁禁令，要求 ISP 和 DNS 运营商等中介机构阻止用户访问盗版站点，法院也愿意对解析器强制执行这些禁令。地理封锁（geo-blocking）根据用户看似所在的位置限制访问，可以用 VPN 绕过——本案中发生的就是这种情况。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://quad9.net/news/blog/au-revoir-france/">A public and free DNS service for a better security and privacy | Quad9</a></li>
<li><a href="https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/">DNS Resolver Quad9 Rejects French Piracy Blocks ... * TorrentFreak</a></li>
<li><a href="https://en.wikipedia.org/wiki/Geo-blocking">Geo- blocking - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者几乎一边倒地批评这一结果：最热门的类比是“难道要因为电话簿里登记了罪犯的号码就惩罚电话簿公司”，也有人指出索尼自己绕过了 geoIP 封锁却仍让对方吃到藐视法庭罚款。Quad9 首席技术官 John Todd 亲自回应称，大家纠结“如何屏蔽法国用户”是抓错了重点；还有人提到思科此前退出法国市场的先例，并建议解析器反过来停止解析起诉方自己的域名以示反制。

**标签**: `#dns`, `#internet-censorship`, `#copyright`, `#networking`, `#internet-governance`

---

<a id="item-2"></a>
## [GNU Taler 筹备在德国正式投入运营](https://www.taler.net/en/news/2026-13.html) ⭐️ 8.0/10

GNU Taler 项目在 taler.net 上发布消息，宣布正在筹备在德国正式运营其注重隐私保护的电子支付系统，标志着这一长期运行的自由软件支付项目从研究与试点阶段迈向真实的商业部署。该消息在聚合站点上引发大量关注，被定位为面向商业支付方案以及银行主导的 Wero 等体系的开源替代品。 在欧洲最大经济体落地可用的 Taler 部署，将首次对一种在设计上提供类似现金的付款方匿名性的支付系统进行严肃检验，而此时欧盟政策正推动数字主权、减少对美国主导的卡组织与钱包的依赖。它的成败也将说明，注重隐私的非区块链支付基础设施能否在约束了加密货币项目的欧盟反洗钱与 KYC 要求下存活。 Taler 不使用区块链：它基于盲签名针对现有货币（如欧元）签发电子硬币，因此客户保持匿名而商户仍可被识别，项目方认为这有助于防止逃税。读者指出的一个显著取舍是 Taler 电子货币带有有效期——钱包应在到期前一个月自动将即将过期的硬币兑换为新硬币，而长期离线的钱包中的硬币可能会失效。

hackernews · dewey · 10月22日 16:14 · [社区讨论](https://news.ycombinator.com/item?id=50197404)

**背景**: GNU Taler 是由 Christian Grothoff 开发、托管于 GNU 计划下的自由软件电子支付系统；与比特币等大多数去中心化支付不同，它不使用区块链，而是依靠兑换机构签发的密码学盲签名来发行数字现金。其设计目标是付款方隐私与商户透明性相结合，因此可以依托现有货币提供，而无需发行新代币。Wero 则是另一项由欧洲主要银行和欧洲支付倡议组织（EPI）支持的欧洲支付计划，用户可直接在银行 App 中通过手机号或邮箱而非 IBAN 即时转账。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GNU_Taler">GNU Taler - Wikipedia</a></li>
<li><a href="https://www.taler.net/en/features.html">GNU Taler : Features</a></li>
<li><a href="https://wero.info/en/">What is Wero? Europe's new payment system explained | Wero.info</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认同 Taler 的使命，但在可行性上意见分歧：不少人称赞它是欧洲急需的、尊重隐私的替代方案，可减少对美国控制的支付通道的依赖，并欢迎 GLS 等银行参与；而质疑者则认为强制联网和会过期的电子货币使其还不如比特币，欧盟监管者会通过 KYC 扼杀有意义的支付隐私，且要与拥有深厚银行背景的 Wero 竞争将非常困难。

**标签**: `#digital-payments`, `#privacy`, `#gnu-taler`, `#open-source`, `#eu-regulation`

---

<a id="item-3"></a>
## [借助 LLM 自动化与 JetKVM 硬件，Switch 2 被成功破解](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/) ⭐️ 8.0/10

一位安全研究者发布了一份关于破解任天堂 Switch 2 的详细记录：他让 LLM 智能体（Codex）驱动 JetKVM 硬件，通过 USB 向主机发送手柄输入，并通过 HDMI 读取画面输出。由于破解过程中主机频繁崩溃，作者用一个蓝牙控制的智能开关物理按压电源键来完成重启。 如果文中关于可读写解密文件系统的说法属实，Switch 2 的游戏转储可能几天内就会流出，从而为近年兴起的重编译/反编译（recomp/decomp）社区提供素材——该社区已经能让主机独占游戏跑在手机等任意硬件上。这也是通过 KVM 硬件为 LLM 智能体提供“手脚和眼睛”来做自动化安全研究的一次引人注目的示范。 负责崩溃恢复的装置是一台消费级蓝牙“手指机器人”（评论者指出是 SwitchBot Bot），其拨杆压下电源键后会在按键完全按下时抬起。评论者还强调，作者显然是一位经验丰富的安全专家，因此真正的漏洞工作主要来自人的技能而非 AI；也有人提到 LLM 智能体常常直接拒绝与安全研究相关的请求。

hackernews · ledoge · 10月22日 08:01 · [社区讨论](https://news.ycombinator.com/item?id=50192536)

**背景**: Switch 2 是任天堂 2017 年 Switch 的后继主机，与前代一样是封闭平台，要运行未签名代码就必须找到并利用漏洞，也就是“越狱”。JetKVM 是一款开源 IP-KVM 设备（主要用 Go 和 TypeScript 编写），把 HDMI 采集与 USB 键鼠模拟结合起来，使软件能像真人操作者一样远程控制一台机器。重编译与反编译项目会把老主机游戏重建成原生移植版，这正是新主机一旦早期被读取文件系统就令平台方紧张的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://jetkvm.com/">JetKVM - Control any computer remotely</a></li>
<li><a href="https://github.com/jetkvm/kvm">GitHub - jetkvm / kvm : Control any computer remotely · GitHub</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论以赞叹为主：有评论者预测 Switch 2 的游戏转储几小时内就会出现，并警告考虑到重编译的独占游戏能多快登陆其他硬件，这对任天堂是最坏情况。也有人对“Switch 上的 SwitchBot Bot”去按电源键这种鲁布·戈德堡式设计津津乐道；一位用户质疑别人是如何让 Codex 配合安全研究的（它经常拒绝），还有人认为人类专家的作用远大于 AI，但依然称赞这套现代自动化工具链。

**标签**: `#console hacking`, `#security research`, `#LLM agents`, `#hardware automation`, `#Nintendo Switch 2`

---

<a id="item-4"></a>
## [eMudhra 因私钥被破解退出全球 SSL/TLS 证书业务](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) ⭐️ 8.0/10

印度证书颁发机构 eMudhra 宣布其董事会已决定退出全球 SSL/TLS 证书业务，而这一决定距一名研究人员证明其八个中间 CA 私钥可被破解仅约五天。公司将该退出描述为商业决策，同时承认存在安全事件，并称浏览器厂商和社区的“审视超出了合理比例”。 eMudhra 是一家被公开信任的 CA，其根证书链嵌入主流浏览器和操作系统的信任存储，因此这类失败会直接动摇保障几乎所有网站访问 HTTPS 的 Web PKI 信任模型。它的退出削弱了 CA 市场的竞争，并树立了一个鲜明的先例：无法证明密钥生成与事件响应合规的 CA，可能被彻底挤出全球市场。 这份新闻稿明显含糊其辞：既未解释弱密钥是如何生成的，也没有明确道歉，还声称“受影响的 CA 未签发任何终端实体证书”——评论者认为这一说法可疑，因为任何人都可以向 CA 申请证书。Chrome 团队还在 Mozilla Bugzilla 的第 2083449 号缺陷中公开向 eMudhra 提交了一长串尖锐质询；eMudhra 表示其全球 SSL/TLS 基础设施与包括全球数字签名业务在内的其他业务相互隔离运行。

hackernews · bo0tzz · 10月22日 13:33 · [社区讨论](https://news.ycombinator.com/item?id=50195110)

**背景**: 证书颁发机构（CA）是受信任的第三方，负责核验身份并签发数字证书，担保某个公钥确实属于它所声称的网站；浏览器和操作系统内置了它们所接受的根证书存储。SSL/TLS 证书让浏览器与服务器建立起加密且经过身份验证的连接，也就是地址栏里的那把锁。CA 使用私钥对证书签名，整条信任链的安全性取决于这些私钥是否以足够的随机性（熵）生成，从而无法被猜测或暴力破解。一旦中间 CA 的私钥被证明可被破解，由它们派生出的所有证书都会变得可疑，浏览器也可能不再信任整个层级。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/10/emudhra-to-exit-global-ssltls-business.html">eMudhra to Exit Global SSL/TLS Business After 8 Intermediate CA...</a></li>
<li><a href="https://www.coindesk.com/tech/2026/10/21/a-company-that-vouches-for-websites-had-secret-keys-so-weak-that-8-of-them-were-cracked">Internet panics after 8 eMudhra private keys get cracked</a></li>
<li><a href="https://en.wikipedia.org/wiki/Certificate_authority">Certificate authority - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者的态度大多是尖锐嘲讽：有人指出这种“审视与所用私钥的比特复杂度成反比”，并批评其既没有真正道歉也没有说明根本原因；还有人开玩笑地把被截断的私钥写成只含一个字符的“-----BEGIN RSA PRIVATE KEY-----”块。其他人则贴出 Chrome 团队在 Bugzilla 上的犀利质询，并质疑“未签发终端实体证书”的说法，因为任何人都可以向受影响的 CA 申请证书。

**标签**: `#security`, `#TLS`, `#PKI`, `#certificate-authority`, `#incident-response`

---

<a id="item-5"></a>
## [研究：智能电视关闭内容识别后仍继续上报数据](https://watchingthewatchers.github.io/watchingthewatchers/index.html) ⭐️ 8.0/10

一项针对 10 家厂商共 12 台智能电视、涵盖 5943 次受控实验的研究发现，部分机型即使用户在设置中关闭了自动内容识别（ACR），仍会继续发送与观看内容相关的流量。其中两个平台以未加密形式外泄观看内容：VIDAA OS 通过明文 MQTT 发送包含不可重置设备 ID 和音频指纹的数据，Vizio 的 WatchFree+ 则把节目名称写入用户无法关闭的未加密域名查询中。 这表明厂商提供给用户的“关闭”开关可能只是摆设，消费者无法指望通过设置菜单阻止个性化追踪和广告画像。由于 ACR 数据能精确反映一个家庭在看什么，未加密传输还会把观看习惯暴露给本地网络或链路上的任何一方，而不仅仅是厂商本身。 该结论建立在 5943 次受控实验而非被动观察之上，这在消费级隐私研究中提供了少见的实证力度。最严重的问题属于架构层面：不可重置的设备 ID 使“定期更换标识符”这一常见隐私建议失效，而明文 MQTT 与未加密的 DNS 查询意味着数据在传输途中无需任何解密即可被读取。

telegram · zaihuapd · 10月22日 09:50

**背景**: 自动内容识别（ACR）用于实时判断电视上正在播放什么，通常做法是从音频本身生成声学指纹并与参考数据库比对，或检测嵌入的水印。由此得到的收视数据支撑着跨平台广告测量与定向广告，这也是电视厂商默认开启该功能的原因。MQTT 是一种广泛用于物联网设备的轻量级发布-订阅消息协议，其最初设计并未规定认证或加密，安全性完全取决于实现方是否叠加 TLS。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Automatic_content_recognition">Automatic content recognition - Wikipedia</a></li>
<li><a href="https://www.hivemq.com/mqtt/mqtt-security-fundamentals/">MQTT Security Fundamentals: How to secure MQTT in IoT | HiveMQ</a></li>
<li><a href="https://www.vidaa.com/vidaa-os/">VIDAA OS - VIDAA</a></li>

</ul>
</details>

**标签**: `#privacy`, `#security`, `#smart-tv`, `#ACR`, `#IoT`

---

<a id="item-6"></a>
## [被禁运的 Nvidia B300 芯片据称现身中国国有网络](https://theinference.org/article/china-s-state-money-bought-banned-nvidia-b300-servers-then-redacted-the-receipts) ⭐️ 8.0/10

一份调查报道称，一家国资控股的半导体租赁集团为 AI 公司荣耀视图科技融资购入 32 台搭载被禁运 Nvidia B300 芯片的华硕服务器，这属于一笔 700 余台服务器、总额超过 30 亿元交易的一部分，计划部署于中国移动宁夏枢纽。据称在监管机构注意到相关备案后，该租赁集团重新提交文件并抹去了硬件描述，Nvidia 表示正与代工伙伴联合调查，华硕则称遵守出口管制。 若情况属实，这将表明处于美国最严出口管制层级的 Blackwell Ultra 顶级硬件仍能流入与中国国资关联的 AI 基础设施，从而削弱华盛顿芯片管制的实际效果。同时，这也把 Nvidia、华硕以及中国移动等中国国有运营商推到合规审视的聚光灯下，可能对许可审批、审计以及整个 AI 服务器供应链的监管产生连锁影响。 B300（Blackwell Ultra）是 Nvidia 的旗舰数据中心 GPU，单芯片配备 288GB HBM3e 显存、约 15 petaFLOPS 的 FP4 密集算力，明显属于对华出口限制层级之内。报道中重新提交的备案文件里硬件描述被抹去，是关键的证据细节；而 Nvidia 与华硕均未确认这些具体设备是否已出货、以及如何抵达该部署地点。

telegram · zaihuapd · 10月22日 15:22

**背景**: 自 2018 年以来，美国逐步收紧对华先进半导体出口管制，现行规则已覆盖 Nvidia Blackwell 世代 GPU 等高端 AI 加速器，若无许可证通常不得向中国客户出售。Nvidia 此前通过推出性能受限的中国特供型号来合规，因此全规格 B300 出现在中国境内会引发高度关注。中国移动宁夏枢纽是中国规划中最大的数据中心集群之一，而国资背景的租赁公司是 AI 算力交易常见的融资渠道，这让相关备案与信息披露格外敏感。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/data-center/dgx-b300/">An AI Factory for AI Reasoning NVIDIA DGX B300 NVIDIA B300 Specs: 288GB Blackwell Ultra & DGX B300 Price ... NVIDIA DGX B300 Datasheet NVIDIA B300 Specs, Pricing & AI Inference Benchmarks ... NVIDIA B300 SXM6 AC Specs | TechPowerUp GPU Database</a></li>
<li><a href="https://www.congress.gov/crs_external_products/R/PDF/R48642/R48642.2.pdf">U.S. Export Controls and China: Advanced Semiconductors</a></li>
<li><a href="https://laweconcenter.org/wp-content/uploads/2025/03/tldr-AI-Chips-export-1.pdf">US Export Controls on AI and Semiconductors</a></li>

</ul>
</details>

**标签**: `#export-controls`, `#nvidia`, `#semiconductors`, `#china`, `#ai-infrastructure`

---

<a id="item-7"></a>
## [商务部拟对人工智能、生物医药、光伏技术实施出口管制并公开征求意见](https://t.me/zaihuapd/44626) ⭐️ 8.0/10

商务部就修订《中国禁止出口限制出口技术目录》公开征求意见，同时对人工智能、生物医药、光伏三个领域的 40 项技术实施出口临时登记。其中人工智能领域涉及大模型、智能体、算力集群等 23 项技术，生物医药领域 5 项，光伏领域 12 项。 该提案为全球客户与合作伙伴所依赖的关键技术设置了正式监管门槛，将直接影响跨境人工智能模型与算力交易、中国生物医药资产的对外授权，以及光伏制造设备与工艺技术的海外输出。这也表明，北京准备像华盛顿运用芯片与设备管制那样，把技术出口管制作为战略工具。 值得注意的是，已通过开源、发表学术论文等方式进入公共领域的人工智能技术明确不纳入管理范围；生物医药领域中不涉及所有权转让的对外授权模式，将适用自动许可等便利措施。光伏领域则聚焦多晶硅制造、硅片制造和电池制造技术；目前该文件仍处于公开征求意见阶段，尚未正式生效。

telegram · zaihuapd · 10月22日 16:10

**背景**: 《中国禁止出口限制出口技术目录》由商务部依据《对外贸易法》及技术进出口相关法规维护：列入禁止类的技术不得出口，列入限制类的技术出口须申请许可。该目录此前已多年未做全面更新，此次对这 40 项技术实施临时登记，相当于在修订目录定稿前的过渡性管制安排。生物医药类条目涉及细胞与基因治疗——这类疗法通过改造患者细胞或递送治疗性遗传物质起效，而非依赖传统药物；以及小核酸药——由几十个核苷酸组成的短链寡核苷酸（如 siRNA 和反义寡核苷酸），旨在作用于特定靶点分子。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11891339/">Landscape of small nucleic acid therapeutics: moving from the ...</a></li>
<li><a href="https://medlineplus.gov/genesandgenetherapy.html">Genes and Gene Therapy : MedlinePlus</a></li>

</ul>
</details>

**标签**: `#export-controls`, `#china-regulation`, `#ai-policy`, `#biotech`, `#photovoltaics`

---