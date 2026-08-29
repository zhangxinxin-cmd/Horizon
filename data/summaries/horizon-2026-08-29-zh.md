# Horizon 每日速递 - 2026-08-29

> 从 23 条内容中筛选出 2 条重要资讯。

---

1. [简单的百年 SPC 算法在 TSB-AD 基准上击败 SOTA 方法](#item-1) ⭐️ 8.0/10
2. [OpenAI 终止向 Cursor 提供模型，因 SpaceX 收购](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [简单的百年 SPC 算法在 TSB-AD 基准上击败 SOTA 方法](https://www.reddit.com/r/MachineLearning/comments/1w1wt1s/you_can_beat_sota_time_series_anomaly_detection/) ⭐️ 8.0/10

在一篇 Reddit 帖子中，Eamonn Keogh 展示了简单且约有百年历史的统计过程控制（SPC）方法在 TSB-AD 基准上胜过最先进的时间序列异常检测算法，某些情况下还能取得完美结果。他认为该基准过于简单，无法支撑有意义的进展主张。 这一批评挑战了 TSB-AD 基准的可信度——该基准被 NeurIPS、SIGKDD 和 VLDB 论文广泛使用，暗示许多报道的 SOTA 改进可能只是假象。它呼吁社区进行反思并构建更具挑战性的评测集，可能改变 TSAD 进展的衡量方式。 该帖附有幻灯片和一个 YouTube 视频，展示 SPC 在一条 ECG 心电轨迹上取得完美结果，并指出许多“TAO”轨迹用 SPC 更容易解决。Keogh 还表示他已完成了大部分工作来引入更难的时间序列异常检测问题，例如雪橇犬、金枪鱼和燃料电池数据，同时明确不对论文中的算法本身作评价。

reddit · r/MachineLearning · /u/eamonnkeogh · 8月29日 20:16

**背景**: TSB-AD 是由 TheDatumOrg 开发的一个综合性时间序列异常检测基准，包含大量带有标签异常的数据集。统计过程控制（SPC）是一种经典的工业监控方法，基于控制图与过程稳定性，其历史可追溯至上世纪 20 年代。此前已有研究（如 TKDE 2021 年的《Current Time Series Anomaly Detection Benchmarks are Flawed》）批评这类基准过于简单且有偏，因此这篇帖子延续了这一广为人知的批评脉络。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thedatumorg.github.io/TSB-AD/">TSB - AD</a></li>
<li><a href="https://en.wikipedia.org/wiki/Statistical_process_control">Statistical process control - Wikipedia</a></li>
<li><a href="https://github.com/zamanzadeh/ts-anomaly-benchmark">GitHub - zamanzadeh/ts-anomaly-benchmark: Time-Series Anomaly Detection Comprehensive Benchmark · GitHub</a></li>

</ul>
</details>

**标签**: `#time series anomaly detection`, `#benchmark evaluation`, `#statistical process control`, `#research critique`

---

<a id="item-2"></a>
## [OpenAI 终止向 Cursor 提供模型，因 SpaceX 收购](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/) ⭐️ 8.0/10

OpenAI 宣布将终止通过 Cursor 提供 OpenAI 模型的合同，建议停服日期为 2026 年 11 月 12 日。公司称无法确信 SpaceX 会遵守服务条款，因为马斯克旗下公司有违约记录。 这一决定凸显了 OpenAI 与埃隆·马斯克商业帝国之间日益加深的裂痕，并对 AI 编程工具生态系统产生连锁影响。依赖 Cursor 使用 OpenAI 模型的开发者可能面临服务中断，也表明控制权变更条款如何影响 AI 合作关系。 OpenAI 列举了具体违约行为：马斯克旗下公司在收购 Twitter 后曾违反合同，xAI 今年早些时候在宣誓下承认违反 OpenAI 服务条款。与 Cursor 的定制协议允许 OpenAI 在控制权变更后取消合作，并给出了合同允许的最大通知期。

telegram · zaihuapd · 8月29日 02:24

**背景**: Cursor 是基于 Visual Studio Code 分支构建的 AI 驱动代码编辑器和编程代理，已成为开发者广泛使用的工具。SpaceX 近期收购了 Cursor，其 AI 子公司 xAI（现为 SpaceXAI）专注于 AI 研究和 Grok 等产品。OpenAI 的担忧源于马斯克旗下公司过去的行为，这导致了信任问题并最终终止合作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>
<li><a href="https://en.wikipedia.org/wiki/SpaceXAI">SpaceXAI - Wikipedia</a></li>
<li><a href="https://builtin.com/artificial-intelligence/what-is-xai">What Is xAI? The Company Behind Grok | Built In</a></li>

</ul>
</details>

**标签**: `#OpenAI`, `#Cursor`, `#SpaceX`, `#AI`, `#Business`

---

