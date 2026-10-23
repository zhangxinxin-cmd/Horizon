---
layout: default
title: "Horizon Summary: 2026-10-23 (EN)"
date: 2026-10-23
lang: en
---

> From 43 items, 7 important content pieces were selected

---

1. [Quad9 to Pull Its DNS Resolver Out of France After Contempt Ruling](#item-1) ⭐️ 8.0/10
2. [GNU Taler prepares for operational rollout in Germany](#item-2) ⭐️ 8.0/10
3. [Switch 2 jailbroken via LLM-driven automation with JetKVM and Bluetooth switch](#item-3) ⭐️ 8.0/10
4. [eMudhra Exits Global SSL/TLS Certificate Business After Private Key Failures](#item-4) ⭐️ 8.0/10
5. [Study: Smart TVs Keep Reporting ACR Data Even After Users Turn It Off](#item-5) ⭐️ 8.0/10
6. [Banned Nvidia B300 Chips Reportedly Found in Chinese State-Owned Network](#item-6) ⭐️ 8.0/10
7. [China's MOFCOM Proposes Export Controls on AI, Biotech and Solar Tech](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Quad9 to Pull Its DNS Resolver Out of France After Contempt Ruling](https://quad9.net/news/blog/au-revoir-france/) ⭐️ 8.0/10

Swiss non-profit DNS resolver Quad9 announced it will withdraw its public resolution service from France after a Paris court held it in contempt for failing to block piracy-linked domain names, with the exit expected to take effect around November 24. The ruling came even though the plaintiff, Sony Music Entertainment GmbH, had itself used a VPN from Germany to reach content that Quad9's geoIP filtering was meant to keep out of reach. A widely used public resolver abandoning an entire country over a copyright-blocking order is a notable internet-governance precedent: it shows how site-blocking injunctions can push independent DNS providers out of a market, leaving users to migrate to resolvers with weaker privacy and security postures. It also raises questions about the effectiveness of DNS-level blocking, since users can trivially switch resolvers or tunnel around geoIP filters. Quad9 says geoIP blocking cannot selectively deny resolution for specific names, yet it will likely apply geoIP filters to exclude French users after November 24 simply to comply, acknowledging the tension in that position. The case parallels a separate French demand from broadcaster beIN Sports that reportedly sought non-compliance penalties of up to €580,000 per day, and it follows Canal+ blocking injunctions previously aimed at Google, Cloudflare and Cisco.

hackernews · farrokhi · Oct 22, 14:32 · [Discussion](https://news.ycombinator.com/item?id=50195959)

**Background**: DNS resolvers are the internet's lookup layer, translating domain names into IP addresses; Quad9 is a free, privacy-focused public resolver run by a Swiss non-profit that also blocks known malicious domains. In France, rights holders have obtained site-blocking injunctions that require intermediaries such as ISPs and DNS operators to prevent access to piracy sites, and courts have been willing to enforce them against resolvers. Geo-blocking restricts access based on a user's apparent location and can be circumvented with a VPN, which is exactly what happened here.

<details><summary>References</summary>
<ul>
<li><a href="https://quad9.net/news/blog/au-revoir-france/">A public and free DNS service for a better security and privacy | Quad9</a></li>
<li><a href="https://torrentfreak.com/dns-resolver-quad9-rejects-french-piracy-blocks-weighs-exit-as-bein-seeks-up-to-e580k-a-day/">DNS Resolver Quad9 Rejects French Piracy Blocks ... * TorrentFreak</a></li>
<li><a href="https://en.wikipedia.org/wiki/Geo-blocking">Geo- blocking - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters were overwhelmingly critical of the outcome, with the top analogy comparing it to punishing a phone book for listing a criminal's number and others noting Sony circumvented the geoIP block itself and still won a contempt fine. Quad9 CTO John Todd chimed in to say the focus on how French users will be blocked misses the point, while others pointed to Cisco's earlier exit from the French market and suggested resolvers should stop resolving the suing companies' own domains in retaliation.

**Tags**: `#dns`, `#internet-censorship`, `#copyright`, `#networking`, `#internet-governance`

---

<a id="item-2"></a>
## [GNU Taler prepares for operational rollout in Germany](https://www.taler.net/en/news/2026-13.html) ⭐️ 8.0/10

The GNU Taler project published a news update on taler.net announcing that it is getting ready to operate its privacy-preserving electronic payment system in Germany, moving the long-running free-software payment project from research and pilots toward a real operational deployment. The announcement drew heavy attention on aggregators, where it was framed as an open-source alternative to commercial and bank-backed payment schemes such as Wero. A working Taler deployment in Europe's largest economy would be the first serious test of a payment system that offers cash-like payer anonymity by design, at a time when EU policy is pushing for digital sovereignty and reduced dependence on US-controlled card networks and wallets. Its fate will also show whether privacy-focused, non-blockchain payment infrastructure can survive EU anti-money-laundering and KYC requirements that have constrained cryptocurrency projects. Taler does not use a blockchain: it issues electronic coins against existing currencies (e.g. EUR) using blind signatures, so customers stay anonymous while merchants remain identifiable, which the project argues helps prevent tax evasion. A notable trade-off raised by readers is that Taler e-money carries a validity period — the wallet should automatically exchange coins about to expire for fresh ones a month before expiry, and coins held in a wallet that stays offline too long can lapse.

hackernews · dewey · Oct 22, 16:14 · [Discussion](https://news.ycombinator.com/item?id=50197404)

**Background**: GNU Taler is a free-software electronic payment system developed by Christian Grothoff and hosted under the GNU Project; unlike Bitcoin and most other decentralized payments, it uses no blockchain and instead relies on cryptographic blind signatures from an exchange that issues digital cash. Its design goal is payer privacy combined with merchant transparency, so it can be offered in existing currencies rather than as a new token. Wero is a separate European payment initiative backed by major European banks and the European Payments Initiative, letting users send money instantly from their banking app using a phone number or email instead of an IBAN.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GNU_Taler">GNU Taler - Wikipedia</a></li>
<li><a href="https://www.taler.net/en/features.html">GNU Taler : Features</a></li>
<li><a href="https://wero.info/en/">What is Wero? Europe's new payment system explained | Wero.info</a></li>

</ul>
</details>

**Discussion**: Commenters were broadly sympathetic to Taler's mission but split on viability: several praised it as a much-needed European, privacy-respecting alternative to US-controlled payment rails and welcomed the involvement of banks such as GLS, while skeptics argued that mandatory online connectivity and expiring e-money make it worse than Bitcoin, that EU regulators will choke off meaningful payment privacy through KYC, and that competing against Wero's deep bank backing will be very difficult.

**Tags**: `#digital-payments`, `#privacy`, `#gnu-taler`, `#open-source`, `#eu-regulation`

---

<a id="item-3"></a>
## [Switch 2 jailbroken via LLM-driven automation with JetKVM and Bluetooth switch](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/) ⭐️ 8.0/10

A security researcher published a detailed write-up of a jailbreak for the Nintendo Switch 2, in which an LLM agent (Codex) drives JetKVM hardware to send controller inputs over USB and read video output over HDMI. Because the console crashes repeatedly during the process, a Bluetooth-controlled smart switch physically presses the power button to restart it. If the write-up's claim of read/write access to a decrypted filesystem holds up, Switch 2 game dumps could surface within days, feeding the growing recomps/decomps scene that already runs console exclusives on arbitrary hardware such as phones. It is also a notable demonstration of giving LLM agents "arms and eyes" through KVM hardware for automated security research. The crash-recovery mechanism is a consumer Bluetooth fingerbot (commenters identify it as the SwitchBot Bot) whose lever presses the power button and then lifts off once the button is fully depressed. Commenters also stress that the author appears to be an experienced security expert, so much of the actual vulnerability work is human skill rather than the AI, and several note that LLM agents often refuse security-related requests outright.

hackernews · ledoge · Oct 22, 08:01 · [Discussion](https://news.ycombinator.com/item?id=50192536)

**Background**: The Switch 2 is Nintendo's successor to the 2017 Switch, and like its predecessor it is a locked-down platform where running unsigned code requires finding and exploiting a vulnerability — a "jailbreak." JetKVM is an open-source IP-KVM device (written mainly in Go and TypeScript) that combines HDMI capture with USB keyboard/mouse emulation, letting software control a machine remotely as if it were a physical operator. Recompilation and decompilation projects reconstruct old console games as native ports, which is why early filesystem access on a new console worries platform holders.

<details><summary>References</summary>
<ul>
<li><a href="https://jetkvm.com/">JetKVM - Control any computer remotely</a></li>
<li><a href="https://github.com/jetkvm/kvm">GitHub - jetkvm / kvm : Control any computer remotely · GitHub</a></li>

</ul>
</details>

**Discussion**: The Hacker News thread is largely admiring: one commenter predicts Switch 2 game dumps within hours and warns this is a worst-case scenario for Nintendo given how fast recompiled exclusives reach other hardware. Others delight in the Rube Goldberg elegance of a "Switch SwitchBot Bot" pressing the power button, while one user questions how people get Codex to cooperate with security research when it often refuses, and another argues the human expert matters far more than the AI but praises the modern automation tooling.

**Tags**: `#console hacking`, `#security research`, `#LLM agents`, `#hardware automation`, `#Nintendo Switch 2`

---

<a id="item-4"></a>
## [eMudhra Exits Global SSL/TLS Certificate Business After Private Key Failures](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) ⭐️ 8.0/10

Indian certificate authority eMudhra announced that its board decided to withdraw from its global SSL/TLS certificate business, roughly five days after a researcher demonstrated that eight of its intermediate CA private keys could be cracked. The company framed the exit as a business decision while acknowledging a security incident and what it called "scrutiny that is out of proportion" from browser vendors and the community. eMudhra is a publicly trusted CA whose roots chain into mainstream browsers and operating system trust stores, so a failure of this kind directly undermines the Web PKI trust model that secures HTTPS for virtually every website visit. Its withdrawal reduces CA competition and sets a stark precedent: a CA that cannot demonstrate sound key generation and incident response may be pushed out of the global market entirely. The press release is conspicuously vague: it does not explain how the weak keys were generated, does not clearly apologize, and asserts that "there were no end entity certificates issued out of the affected CAs" — a claim commenters find dubious since anyone can request certificates from a CA. The Chrome team also publicly filed a lengthy, adversarial set of questions to eMudhra in Mozilla Bugzilla bug 2083449, and eMudhra says its global SSL/TLS infrastructure runs separately from its other operations, including its global digital signature business.

hackernews · bo0tzz · Oct 22, 13:33 · [Discussion](https://news.ycombinator.com/item?id=50195110)

**Background**: A certificate authority (CA) is a trusted third party that verifies identities and signs digital certificates, vouching that a public key really belongs to the website it claims to represent; browsers and operating systems ship with a root store of CAs they will accept. SSL/TLS certificates are what let a browser and server establish an encrypted, authenticated connection — the padlock in the address bar. CAs sign certificates using private keys, and the security of the entire chain depends on those keys being generated with enough randomness (entropy) that they cannot be guessed or brute-forced. When intermediate CA keys turn out to be crackable, every certificate descending from them becomes suspect and browsers may distrust the whole hierarchy.

<details><summary>References</summary>
<ul>
<li><a href="https://thehackernews.com/2026/10/emudhra-to-exit-global-ssltls-business.html">eMudhra to Exit Global SSL/TLS Business After 8 Intermediate CA...</a></li>
<li><a href="https://www.coindesk.com/tech/2026/10/21/a-company-that-vouches-for-websites-had-secret-keys-so-weak-that-8-of-them-were-cracked">Internet panics after 8 eMudhra private keys get cracked</a></li>
<li><a href="https://en.wikipedia.org/wiki/Certificate_authority">Certificate authority - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters were largely caustic: one noted that the scrutiny is "inversely proportional to bit complexity of the private keys they used" and criticized the absence of a real apology or root-cause explanation, while another joked about writing out a truncated private key as a "-----BEGIN RSA PRIVATE KEY-----" block containing a single character. Others linked the Chrome team's brutal Bugzilla question battery and questioned the claim that no end-entity certificates were issued, since anyone can request certificates from the affected CAs.

**Tags**: `#security`, `#TLS`, `#PKI`, `#certificate-authority`, `#incident-response`

---

<a id="item-5"></a>
## [Study: Smart TVs Keep Reporting ACR Data Even After Users Turn It Off](https://watchingthewatchers.github.io/watchingthewatchers/index.html) ⭐️ 8.0/10

A study of 12 smart TVs from 10 manufacturers, covering 5,943 controlled experiments, found that some models continue sending content-related traffic even after automatic content recognition (ACR) is disabled in settings. Two platforms leaked what was being watched in unencrypted form: VIDAA OS sent data over plaintext MQTT including a non-resettable device ID and audio fingerprints, while Vizio's WatchFree+ exposed program titles in unencrypted domain lookups that users cannot turn off. This shows that the opt-out controls users are given for TV viewing surveillance may be cosmetic, meaning consumers cannot rely on settings menus to stop personalized tracking and ad profiling. Because ACR data reveals exactly what a household watches, unencrypted leaks also expose viewing habits to anyone on the local network or upstream path, not just to the vendor. The findings rest on 5,943 controlled experiments rather than passive observation, giving the results unusual empirical weight for a consumer-privacy study. The most serious issues are architectural: a device identifier that cannot be reset undermines the usual privacy recommendation of rotating IDs, and plaintext MQTT plus unencrypted DNS lookups mean the data can be read in transit without any decryption effort.

telegram · zaihuapd · Oct 22, 09:50

**Background**: Automatic content recognition (ACR) identifies what is playing on a TV in real time, typically by generating acoustic fingerprints from the audio itself and matching them against a reference database, or by detecting embedded watermarks. The resulting viewership data powers cross-platform ad measurement and targeted advertising, which is why TV makers ship it enabled by default. MQTT is a lightweight publish-subscribe messaging protocol widely used in IoT devices; its original design specified no authentication or encryption, so security depends entirely on whether implementers add TLS.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Automatic_content_recognition">Automatic content recognition - Wikipedia</a></li>
<li><a href="https://www.hivemq.com/mqtt/mqtt-security-fundamentals/">MQTT Security Fundamentals: How to secure MQTT in IoT | HiveMQ</a></li>
<li><a href="https://www.vidaa.com/vidaa-os/">VIDAA OS - VIDAA</a></li>

</ul>
</details>

**Tags**: `#privacy`, `#security`, `#smart-tv`, `#ACR`, `#IoT`

---

<a id="item-6"></a>
## [Banned Nvidia B300 Chips Reportedly Found in Chinese State-Owned Network](https://theinference.org/article/china-s-state-money-bought-banned-nvidia-b300-servers-then-redacted-the-receipts) ⭐️ 8.0/10

An investigative report alleges that a state-controlled semiconductor leasing group financed the purchase of 32 ASUS servers equipped with export-banned Nvidia B300 GPUs on behalf of AI company 荣耀视图科技 (Honor View Technology), as part of a larger deal exceeding 700 servers and more than ¥3 billion, destined for China Mobile's Ningxia data hub. After regulators took notice of the filing, the leasing group reportedly resubmitted the documents with the hardware descriptions redacted, prompting Nvidia to say it is investigating with its manufacturing partners and ASUS to state that it complies with export controls. If confirmed, the case would show that top-tier Blackwell Ultra hardware is still reaching Chinese state-linked AI infrastructure despite the strictest US export tier, undercutting the effectiveness of Washington's chip controls. It also puts Nvidia, ASUS and Chinese state carriers such as China Mobile in an awkward compliance spotlight, with potential knock-on effects for licensing, audits and supply-chain scrutiny across the AI server market. The B300 (Blackwell Ultra) is Nvidia's flagship data-center GPU, offering 288GB of HBM3e memory and roughly 15 petaFLOPS of dense FP4 compute per chip, which places it firmly in the restricted tier for China exports. The reported redaction of hardware descriptions in the resubmitted filing is the key evidentiary detail, and neither Nvidia nor ASUS has confirmed that the specific units were shipped or how they reached the site.

telegram · zaihuapd · Oct 22, 15:22

**Background**: Since 2018 the US has progressively tightened export controls on advanced semiconductors to China, and the rules now cover top-end AI accelerators such as Nvidia's Blackwell-generation GPUs, which cannot normally be sold to Chinese customers without a license. Nvidia has shipped China-specific, performance-capped variants to stay within the rules, so any appearance of full-spec B300 parts in China draws scrutiny. China Mobile's Ningxia hub is one of the country's largest planned data-center clusters, and state-backed leasing firms are a common financing channel for AI compute deals, which makes paperwork and disclosure especially sensitive.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/data-center/dgx-b300/">An AI Factory for AI Reasoning NVIDIA DGX B300 NVIDIA B300 Specs: 288GB Blackwell Ultra & DGX B300 Price ... NVIDIA DGX B300 Datasheet NVIDIA B300 Specs, Pricing & AI Inference Benchmarks ... NVIDIA B300 SXM6 AC Specs | TechPowerUp GPU Database</a></li>
<li><a href="https://www.congress.gov/crs_external_products/R/PDF/R48642/R48642.2.pdf">U.S. Export Controls and China: Advanced Semiconductors</a></li>
<li><a href="https://laweconcenter.org/wp-content/uploads/2025/03/tldr-AI-Chips-export-1.pdf">US Export Controls on AI and Semiconductors</a></li>

</ul>
</details>

**Tags**: `#export-controls`, `#nvidia`, `#semiconductors`, `#china`, `#ai-infrastructure`

---

<a id="item-7"></a>
## [China's MOFCOM Proposes Export Controls on AI, Biotech and Solar Tech](https://t.me/zaihuapd/44626) ⭐️ 8.0/10

China's Ministry of Commerce has opened a public comment period on a revision to the Catalogue of Technologies Prohibited or Restricted from Export, and is simultaneously imposing temporary export registration on 40 technologies across artificial intelligence, biomedicine and photovoltaics. The AI tranche alone covers 23 items including large models, AI agents and compute clusters, while biotech contributes 5 items and solar manufacturing 12. The proposal puts a formal regulatory gate in front of technologies that global customers and partners rely on, with direct consequences for cross-border AI model and compute deals, out-licensing of Chinese biotech assets, and solar manufacturing equipment and know-how exported abroad. It signals that Beijing is prepared to use technology export controls as a strategic lever in the same way Washington has used chip and tool restrictions. Notably, AI technologies that have already entered the public domain through open-sourcing or published academic papers are explicitly excluded from the scope, and biotech out-licensing deals that do not involve a transfer of ownership are to enjoy facilitation measures such as automatic licensing. The photovoltaic tranche targets polysilicon manufacturing, wafer manufacturing and cell manufacturing technologies, and the notice is still at the public-comment stage rather than in force.

telegram · zaihuapd · Oct 22, 16:10

**Background**: China's Catalogue of Technologies Prohibited or Restricted from Export is maintained by MOFCOM under the Foreign Trade Law and the technology import/export regulations; listed technologies cannot be exported at all if prohibited, or require an export license if restricted. The catalogue had not been comprehensively updated for years, and the temporary registration applied to these 40 items functions as an interim control measure while the revised list is finalised. The biotech items include cell and gene therapy, which works by modifying a patient's cells or delivering therapeutic genetic material rather than using conventional drugs, and small nucleic acid drugs — short oligonucleotide strands such as siRNA and antisense oligonucleotides designed to hit specific molecular targets.

<details><summary>References</summary>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11891339/">Landscape of small nucleic acid therapeutics: moving from the ...</a></li>
<li><a href="https://medlineplus.gov/genesandgenetherapy.html">Genes and Gene Therapy : MedlinePlus</a></li>

</ul>
</details>

**Tags**: `#export-controls`, `#china-regulation`, `#ai-policy`, `#biotech`, `#photovoltaics`

---