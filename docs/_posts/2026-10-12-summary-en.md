---
layout: default
title: "Horizon Summary: 2026-10-12 (EN)"
date: 2026-10-12
lang: en
---

> From 34 items, 2 important content pieces were selected

---

1. [Terence Tao's 'Math 2.0' slides on AI reshaping mathematical research](#item-1) ⭐️ 8.0/10
2. [Critical essay argues passkeys are a trap, sparking HN debate](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Terence Tao's 'Math 2.0' slides on AI reshaping mathematical research](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf) ⭐️ 8.0/10

Terence Tao published the slides for his Caltech 2026 talk 'Math 2.0' (accompanied by an October 10, 2026 blog post), in which he frames mathematics as moving from a century-long stable 'Math 1.0' era into an AI-driven 'Math 2.0' phase. In the slides he states that his own field of mathematical research, largely stable for almost a century, has proven 'particularly susceptible to this type of disruption.' Coming from a Fields Medalist, this is a high-signal framing of how AI is changing a discipline that has been structurally stable for roughly a century, with implications for how proofs are produced, how research agendas are set, and how funding and training are organized. The talk also fed a broader public debate about whether AI is now genuinely solving long-standing open problems. The deck is a set of talk slides rather than a formal result, and includes three slides on medicine and cancer cures that drew criticism from researchers working in drug discovery. Tao also points to community reports that recent OpenAI model output resolved problems researchers had worked on for years, and that some mathematicians had to substantially rewrite grant proposals they had just submitted.

hackernews · Anon84 · Oct 11, 13:16 · [Discussion](https://news.ycombinator.com/item?id=50043026)

**Background**: Terence Tao is a Fields Medalist and one of the most prominent living mathematicians, and his blog 'What's new' is widely read for meta-commentary on mathematical practice. The 'Math 1.0' versus 'Math 2.0' framing contrasts a traditional, human-paced mathematical culture with one in which AI systems participate directly in conjecture, proof and verification. The talk's timing follows recent widely discussed claims that OpenAI models produced solutions to open mathematics problems, a claim that itself became controversial.

<details><summary>References</summary>
<ul>
<li><a href="https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf">Math 2 . 0</a></li>
<li><a href="https://terrytao.wordpress.com/2026/10/10/math-2-0/">Math 2 . 0 | What's new</a></li>
<li><a href="https://www.youtube.com/watch?v=mBUCv-nimL4">Math 2 . 0 : Terence Tao responds to the recent OpenAI... - YouTube</a></li>

</ul>
</details>

**Discussion**: Commenters broadly agreed that the non-medical portions of the talk were interesting and informative, but many pushed back on Tao's medicine slides: a drug-discovery researcher argued his cancer-medicine claims were not well informed, and others noted that many medicines, including general anesthesia, work without fully understood mechanisms. Several readers also reported that AI-solved problems had forced them to rewrite submitted grant requests, and described the emotional sense of losing problems they had worked on for years.

**Tags**: `#AI`, `#mathematics`, `#Terence Tao`, `#AI for science`, `#research workflows`

---

<a id="item-2"></a>
## [Critical essay argues passkeys are a trap, sparking HN debate](https://nonfunctional.substack.com/p/passkeys-are-a-trap-do-not-use-them) ⭐️ 8.0/10

A widely shared Substack essay titled "Passkeys are a trap. Do not use them" argues against the emerging passwordless standard, drawing 209 points and roughly 110 substantive comments on Hacker News. The author contends that passkeys trade user control and portability for vendor-managed convenience, though the piece itself contains a final addendum conceding the domain-binding anti-phishing benefit. Passkeys are being pushed by Apple, Google, Microsoft and the FIDO Alliance as the default replacement for passwords, so a prominent critique of their trust assumptions affects every engineer and security practitioner who must decide whether to deploy them. The debate surfaces real gaps in the standard—attestation, credential export and device-loss recovery—that will shape how enterprise and consumer authentication evolves. Commenters note that attestation can only be requested at credential registration, cannot be retroactively enforced at login, and triggers a browser permission prompt that Apple's implementation may not even honor—so claims that sites like Netflix or Twitter restrict passkeys by attestation are doubtful. Others point out the article's internal contradiction: its final footnote admits passkeys are domain-bound and resistant to man-in-the-middle attacks, which the author never cites as a core design motivation.

hackernews · laurex · Oct 11, 21:59 · [Discussion](https://news.ycombinator.com/item?id=50048312)

**Background**: Passkeys are built on the FIDO2/WebAuthn standards and use public-key cryptography so that no shared secret is sent to the server, making them resistant to phishing and credential reuse. They come in two flavors: synced passkeys replicated across a user's devices by a platform like iCloud Keychain or Google Password Manager, and device-bound passkeys tied to a single hardware authenticator. Attestation is an optional FIDO mechanism that lets a relying party verify the make and model of the authenticator, while portability concerns center on whether users can export credentials between password managers, an area the FIDO Alliance is now standardizing via the Credential Exchange Protocol (CXP) and Format (CXF).

<details><summary>References</summary>
<ul>
<li><a href="https://fidoalliance.org/fido-attestation-enhancing-trust-privacy-and-interoperability-in-passwordless-authentication/">White Paper: FIDO Attestation : Enhancing Trust... | FIDO Alliance</a></li>
<li><a href="https://login.com/concepts/passkey-portability/">Passkey portability : export and migration limits | login.com</a></li>
<li><a href="https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf">WebAuthn Credential Exchange Protocol (CXP) & Format (CXF)</a></li>

</ul>
</details>

**Discussion**: Sentiment is split: several commenters praise the essay as a well-written critique that raises legitimate concerns about losing control of credentials, while others reject its conclusion, arguing that passkeys stored in flexible managers like Bitwarden, KeePass or 1Password still keep users in control. Recurring concerns include the inability to back up credentials in a safe, the weakness of a thumbprint compared to a long master password, and skepticism about vendor-imposed attestation.

**Tags**: `#passkeys`, `#authentication`, `#security`, `#FIDO2`, `#web standards`

---