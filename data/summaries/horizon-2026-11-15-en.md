# Horizon Daily - 2026-11-15

> From 36 items, 3 important content pieces were selected

---

1. [SpaceX catches Super Heavy booster to close out Starship Flight 15](#item-1) ⭐️ 9.0/10
2. [Lovable apps leak passports and 200K messages via weak Supabase RLS](#item-2) ⭐️ 8.0/10
3. [EFF: Tech Companies Are Redefining Privacy Again to Normalize Data Capture](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [SpaceX catches Super Heavy booster to close out Starship Flight 15](https://www.spacex.com/launches/starship-flight-15) ⭐️ 9.0/10

SpaceX's Starship Flight 15 concluded with the launch tower's chopstick arms successfully catching the returning Super Heavy booster out of the air, rather than letting it land on legs or splash down. The company announced the result via its X account and a livestream, capping the test with the booster recovered intact at the pad. Catching the booster is the step that turns full reusability from a design promise into an operational routine, since a recovered booster can in principle be inspected, restacked and flown again quickly. If it holds, launch costs per kilogram could fall far enough to change the economics of satellites, cargo and crewed deep-space missions — the reason the community treated this as a paradigm shift rather than an incremental test. The catch relies on the launch tower's mechanical arms (nicknamed "Mechazilla"), which position themselves as the booster descends and briefly hovers before closing on it, eliminating the landing legs and their mass penalty. This flight caught the booster only; re-flying the same vehicle, attempting a catch of the upper stage as well, and proving the ship's heat shield remain the open milestones.

hackernews · ls612 · Nov 14, 21:22 · [Discussion](https://news.ycombinator.com/item?id=50500963)

**Background**: Starship is SpaceX's two-stage, fully reusable super-heavy-lift launch vehicle: a large first stage called Super Heavy topped by the Starship upper stage, stacked into a vehicle roughly 120 meters tall. Older partially reusable systems — the Space Shuttle and SpaceX's own Falcon 9 — recovered only part of the stack, with the Shuttle's solid boosters and external tank largely expended or needing costly refurbishment. SpaceX's approach is to bring the booster back to the launch tower itself so it can be caught, inspected and restacked, which is why the tower catch rather than a powered landing on legs is central to the design.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/SpaceX_Starship">SpaceX Starship - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Reusable_launch_vehicle">Reusable launch vehicle - Wikipedia</a></li>
<li><a href="https://blacknightspacelabs.com/blog/tower-catch-chopstick-rocket-recovery-vs-propulsive-landing-vs-net-capture-explained">Rocket Recovery Methods Explained 2026: Tower Catch ( Mechazilla )...</a></li>

</ul>
</details>

**Discussion**: Commenters overwhelmingly treated the catch as a historic milestone, with one framing Starship as "the Space Shuttle done right" — a reusable booster without solid rocket motors and with the upper stage stacked on top rather than beside it, avoiding the failure modes behind Challenger and Columbia. The main technical caveats raised were whether the heat shield will survive reentry and what final mass fraction to orbit the design achieves; one commenter argued a fully 100% reusable vehicle beats a partially reusable one like Falcon 9 even at a worse mass fraction, while another noted that a slightly higher propellant load might have allowed catching the ship on the same flight.

**Tags**: `#spaceflight`, `#SpaceX`, `#reusable-rockets`, `#aerospace-engineering`, `#Starship`

---

<a id="item-2"></a>
## [Lovable apps leak passports and 200K messages via weak Supabase RLS](https://www.crissyfield.de/research/lovable-en/) ⭐️ 8.0/10

Security researcher Crissy Field published a report showing that apps built with Lovable and backed by Supabase exposed sensitive data—including passport details and more than 200,000 private messages—because Row-Level Security (RLS) policies were insufficiently configured. The write-up, resubmitted to Hacker News after an initial quiet run, drew a direct public reply from Lovable's Head of Security, who confirmed insufficient RLS as the root cause. Lovable is a popular prompt-to-app builder that provisions a real database and hosting for non-technical users, so insecure defaults can silently turn hobby projects into public data dumps at scale. The incident shifts attention from individual coding mistakes to platform responsibility, raising the question of who is accountable when AI-generated full-stack apps ship with an open database. The exposures were found mainly by inspecting network requests in the browser, meaning no sophisticated attack tooling was required—the Supabase anon key shipped in client code simply returned rows it should not have. Commenters noted that Supabase reportedly changed some default behavior around October 30, but there are reports that existing projects may still retain the old, permissive defaults.

hackernews · armcat · Nov 14, 17:43 · [Discussion](https://news.ycombinator.com/item?id=50499017)

**Background**: Supabase is an open-source backend platform built on PostgreSQL that gives apps authentication, a database, and APIs, and it is a common default backend for AI app builders such as Lovable, which generates full-stack apps from plain-language prompts. Because the client-side API key must be public, access control depends entirely on Row-Level Security: per-table PostgreSQL policies that decide which rows each user can SELECT, INSERT, UPDATE or DELETE. If RLS is disabled or a policy is written too loosely, anyone holding the public key can read or modify every row in the table.

<details><summary>References</summary>
<ul>
<li><a href="https://supabase.com/docs/guides/database/postgres/row-level-security">Row Level Security | Supabase Docs</a></li>
<li><a href="https://lovable.dev/">App & Website Builder | Build Software in Minutes | Lovable</a></li>
<li><a href="https://www.itpathsolutions.com/supabase-row-level-security">Supabase Row Level Security (RLS): Complete Guide for 2026</a></li>

</ul>
</details>

**Discussion**: Commenters broadly agreed that better platform defaults—deny-by-default databases, least-privilege APIs and automated auth tests—are needed so AI-generated code is hard to deploy insecurely. Several pushed back on blaming Lovable alone, arguing Supabase chose permissive defaults years ago to ease onboarding and that some existing projects may still inherit them, while others noted the real novelty is scale: these apps are easy targets, created in huge numbers by users who cannot judge the risk.

**Tags**: `#security`, `#supabase`, `#lovable`, `#row-level-security`, `#ai-generated-code`

---

<a id="item-3"></a>
## [EFF: Tech Companies Are Redefining Privacy Again to Normalize Data Capture](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) ⭐️ 8.0/10

The Electronic Frontier Foundation published a November 2026 analysis arguing that tech companies are once again trying to shift the entire concept of privacy — reframing it so that one person's decision to record or capture data becomes everyone else's problem to detect and avoid. The piece drew intense discussion on Hacker News (roughly 460 points and 175 comments), much of it about AI notetakers that now sit in on routine professional meetings, including one-on-one conversations between managers and reports. The framing matters because it quietly moves the burden of consent and protection from the company deploying the sensor to the individual who happens to be nearby, which in a workplace setting can be effectively impossible to refuse without risking your job. If this definition sticks, pervasive recording becomes the default norm and opting out becomes a personal, career-costly choice rather than an organizational policy decision. EFF's core complaint is that individuals are now expected to be consumer-tech experts who understand the capabilities of every device in the room, how each one works, whether and how it signals that it is recording, and which platforms it does or does not connect to. Commenters extended the argument in several directions: citing Article 12 of the Universal Declaration of Human Rights on arbitrary interference with privacy, noting that accessibility-focused live transcription for deaf and hard-of-hearing users relies on the same technology, and warning that even a well-designed local-only model is "one if-statement away from retention."

hackernews · gslin · Nov 14, 12:45 · [Discussion](https://news.ycombinator.com/item?id=50496602)

**Background**: The EFF is a San Francisco-based nonprofit digital rights group founded in 1990 that campaigns on privacy, free speech, and innovation; it has long tracked what critics call "privacy washing," in which companies advertise privacy-friendly branding while their ad-driven business models depend on extensive data collection. AI notetakers are third-party assistants that join video calls, transcribe them, and store or share summaries, and their spread has triggered new questions under consent laws that in some jurisdictions require all participants to agree before a conversation is recorded. The Hacker News thread connects that product trend to a broader conceptual fight over whether privacy is something a platform grants you or something a person retains by default.

<details><summary>References</summary>
<ul>
<li><a href="https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again">Tech Companies Are Trying to Shift the Entire Concept of ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation">Electronic Frontier Foundation - Wikipedia</a></li>
<li><a href="https://smartkeys.org/ai-meeting-notetaker-policy/">AI Note-Takers in Meetings: Consent, Privacy and Etiquette Rules</a></li>

</ul>
</details>

**Discussion**: Sentiment was broadly sympathetic to EFF's argument, with the top comment describing a workplace where every meeting — including one-on-ones — is recorded by seen and unseen AI guests and asking whether it is possible to norm the phrase "transcription isn't needed for this meeting, please turn off the AI notetaker." The thread was notably balanced rather than one-sided: several commenters defended the same technology as transformative for deaf and hard-of-hearing users, others invoked UN human rights framing to argue companies have no right to private data, and one predicted that once robots and sensor-laden devices fill public space, the "privacy equals no camera or microphone" definition cannot hold — suggesting instead that raw sensor data simply never be stored.

**Tags**: `#privacy`, `#surveillance`, `#AI-ethics`, `#policy`, `#workplace-tech`

---

