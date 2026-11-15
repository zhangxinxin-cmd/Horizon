# Horizon 每日速递 - 2026-11-15

> 从 36 条内容中筛选出 3 条重要资讯。

---

1. [SpaceX 在星舰第 15 次飞行中成功"夹住"超重型助推器](#item-1) ⭐️ 9.0/10
2. [Lovable 应用因 Supabase 行级安全配置薄弱泄露护照信息与逾 20 万条私信](#item-2) ⭐️ 8.0/10
3. [EFF：科技公司再次重新定义“隐私”，为无处不在的数据采集正名](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [SpaceX 在星舰第 15 次飞行中成功"夹住"超重型助推器](https://www.spacex.com/launches/starship-flight-15) ⭐️ 9.0/10

SpaceX 的星舰第 15 次飞行以发射塔的"筷子"机械臂在空中成功夹住返回的超重型助推器而告终，而不是让其靠着陆腿降落或溅落海面。公司通过 X 账号和直播公布了这一结果，为本次测试画上句号，助推器在发射台被完整回收。 成功夹住助推器，是把"完全可复用"从设计承诺变成日常操作的关键一步，因为回收后的助推器原则上可以快速检查、重新堆叠并再次飞行。若这一模式成立，每公斤入轨成本可能大幅下降，从而改变卫星、货运乃至载人深空任务的经济账——这也是社区将此次成功视为范式转变而非普通测试进步的原因。 此次回收依赖发射塔上的机械臂（绰号"Mechazilla"），在助推器下降并短暂悬停时机械臂调整位置将其夹住，从而省去了着陆腿及其带来的重量代价。本次飞行只回收了助推器；让同一枚箭体复飞、同时尝试夹住上级飞船，以及验证飞船隔热罩的可靠性，仍是尚未完成的里程碑。

hackernews · ls612 · 11月14日 21:22 · [社区讨论](https://news.ycombinator.com/item?id=50500963)

**背景**: 星舰是 SpaceX 研发的两级、完全可复用超重型运载火箭：第一级是名为"超重型"的巨大助推器，其上是星舰飞船这一上级，堆叠后整箭高约 120 米。此前的部分可复用系统——航天飞机以及 SpaceX 自家的猎鹰 9 号——只回收了箭体的一部分，航天飞机的固体助推器和外储箱大多被抛弃或需要昂贵翻修。SpaceX 的思路是让助推器直接回到发射塔旁边被机械臂夹住，以便检查并重新堆叠，这正是"塔架捕获"而非用着陆腿动力着陆成为设计核心的原因。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/SpaceX_Starship">SpaceX Starship - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Reusable_launch_vehicle">Reusable launch vehicle - Wikipedia</a></li>
<li><a href="https://blacknightspacelabs.com/blog/tower-catch-chopstick-rocket-recovery-vs-propulsive-landing-vs-net-capture-explained">Rocket Recovery Methods Explained 2026: Tower Catch ( Mechazilla )...</a></li>

</ul>
</details>

**社区讨论**: 评论者几乎一致认为这次捕获是历史性里程碑，有人把星舰形容为"做对了的航天飞机"——助推器可复用且不使用固体助推器，飞船堆叠在顶部而非侧面，从而规避了挑战者号与哥伦比亚号事故背后的失效模式。讨论提出的主要技术疑问是隔热罩能否在再入中存活，以及该设计最终能达到怎样的入轨质量比；一位评论者认为，即便质量比更差，100%完全可复用的飞行器也胜过猎鹰 9 号这样的部分可复用方案，另一位则指出若多带一些推进剂，或许同一次飞行就能把飞船也一并捕获。

**标签**: `#spaceflight`, `#SpaceX`, `#reusable-rockets`, `#aerospace-engineering`, `#Starship`

---

<a id="item-2"></a>
## [Lovable 应用因 Supabase 行级安全配置薄弱泄露护照信息与逾 20 万条私信](https://www.crissyfield.de/research/lovable-en/) ⭐️ 8.0/10

安全研究者 Crissy Field 发布报告指出，一批用 Lovable 构建、后端由 Supabase 支撑的应用因行级安全（RLS）策略配置不足，导致护照信息以及超过 20 万条私密消息等敏感数据暴露。该文章首次发布时反响平平，二次提交到 Hacker News 后引发热议，Lovable 安全负责人也公开回应，确认 RLS 配置不足是问题根因。 Lovable 是一款流行的“输入提示词即生成应用”的工具，会为非技术用户自动创建真实数据库与托管环境，因此不安全的默认配置可能在用户毫不知情的情况下，把业余项目变成大规模的数据泄露源。此次事件把焦点从个人编码失误转向平台责任：当 AI 生成的全栈应用自带“敞开”的数据库时，究竟该由谁来负责。 这些数据暴露主要通过在浏览器中查看网络请求即可发现，并不需要复杂的攻击工具——客户端代码中携带的 Supabase anon key 直接返回了本不该返回的数据行。评论者提到，Supabase 据称已在 10 月 30 日前后调整了部分默认行为，但仍有反馈称既有项目可能依旧沿用旧的宽松默认设置。

hackernews · armcat · 11月14日 17:43 · [社区讨论](https://news.ycombinator.com/item?id=50499017)

**背景**: Supabase 是一个基于 PostgreSQL 的开源后端平台，为应用提供身份认证、数据库和 API，也是 Lovable 这类“用自然语言提示词生成全栈应用”的 AI 建站工具的常见默认后端。由于客户端使用的 API 密钥必须是公开的，访问控制就完全依赖行级安全（RLS）：即针对每张表的 PostgreSQL 策略，决定每个用户能 SELECT、INSERT、UPDATE 或 DELETE 哪些行。若未启用 RLS 或策略写得过于宽松，任何持有该公开密钥的人都能读取甚至修改整张表的数据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://supabase.com/docs/guides/database/postgres/row-level-security">Row Level Security | Supabase Docs</a></li>
<li><a href="https://lovable.dev/">App & Website Builder | Build Software in Minutes | Lovable</a></li>
<li><a href="https://www.itpathsolutions.com/supabase-row-level-security">Supabase Row Level Security (RLS): Complete Guide for 2026</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认为，平台需要更好的默认设置——默认拒绝的数据库、最小权限 API 和自动化鉴权测试——让 AI 生成的代码很难被不安全地部署。也有人反对把责任全推给 Lovable，认为 Supabase 多年前为了让新用户更容易上手而选择了宽松默认值，且部分既有项目可能仍在沿用；另一些人则指出真正的新问题在于规模：这类应用极易成为攻击目标，数量巨大，而使用者根本无从判断风险。

**标签**: `#security`, `#supabase`, `#lovable`, `#row-level-security`, `#ai-generated-code`

---

<a id="item-3"></a>
## [EFF：科技公司再次重新定义“隐私”，为无处不在的数据采集正名](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) ⭐️ 8.0/10

电子前哨基金会（EFF）在 2026 年 11 月发表分析文章，指出科技公司正在再次试图整体性地改变“隐私”这一概念——把隐私重新包装成这样一种逻辑：某个人选择录音或采集数据，后果却要由旁边所有人自己去察觉和规避。该文在 Hacker News 上引发激烈讨论（约 460 分、175 条评论），其中大量内容围绕如今频繁出现在日常职业会议中的 AI 会议记录工具展开，甚至包括管理者与下属的一对一谈话。 这种话术之所以重要，是因为它把征得同意和提供保护的责任，从部署传感器的公司悄悄转移到了恰好身处现场的个人身上；而在职场环境中，个人往往根本无法拒绝，否则就要冒着丢掉工作的风险。如果这种定义站住脚，无处不在的录音就会成为默认常态，而“退出”则变成一项需要个人付出职业代价的选择，而非组织层面的政策决定。 EFF 的核心不满在于：如今个人被期待成为消费科技专家，要懂得房间里每一台设备的能力、每台设备如何运作、是否会以及如何提示正在录音、以及它连接或不连接哪些平台。评论者则把这一论点延伸到多个方向：有人引用《世界人权宣言》第 12 条关于任意干涉隐私的规定；有人指出面向聋人和重听用户的实时转写无障碍功能依赖的正是同一套技术；还有人警告，即便是设计良好的纯本地模型，也“只差一个 if 语句”就会变成留存数据。

hackernews · gslin · 11月14日 12:45 · [社区讨论](https://news.ycombinator.com/item?id=50496602)

**背景**: EFF 是一家总部位于旧金山的非营利数字权利组织，成立于 1990 年，长期就隐私、言论自由与创新议题开展倡导；它一直在追踪批评者所称的“隐私洗白”（privacy washing）现象——企业大打隐私友好的品牌宣传，但其依赖广告的商业模式恰恰建立在大量数据采集之上。AI 会议记录工具是一类第三方助手，会加入视频会议、进行实时转写并存储或分享摘要；它们的普及引发了围绕同意法的新问题，因为在一些司法辖区，录音前必须取得所有参与者同意。Hacker News 上的这场讨论把这一产品趋势，与一场更宏观的概念之争联系了起来：隐私究竟是平台“赐予”你的，还是个人默认保留的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again">Tech Companies Are Trying to Shift the Entire Concept of ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation">Electronic Frontier Foundation - Wikipedia</a></li>
<li><a href="https://smartkeys.org/ai-meeting-notetaker-policy/">AI Note-Takers in Meetings: Consent, Privacy and Etiquette Rules</a></li>

</ul>
</details>

**社区讨论**: 整体情绪明显偏向认同 EFF 的论点：最高赞评论描述了这样一个职场——每场会议（包括一对一谈话）都被看得见和看不见的 AI 参会者记录下来，并追问能否把“这次会议不需要转写，请大家先关掉 AI 记录工具”变成一种惯例。讨论难得地保持了平衡而非一边倒：有几位评论者为同一技术辩护，认为它对聋人和重听用户具有变革性意义；有人援引联合国人权框架，主张公司无权获取私人数据；还有人预测，一旦机器人和布满传感器的设备充斥公共空间，“隐私等于没有摄像头和麦克风”的定义就撑不下去，并建议干脆规定原始传感器数据一律不得存储。

**标签**: `#privacy`, `#surveillance`, `#AI-ethics`, `#policy`, `#workplace-tech`

---

