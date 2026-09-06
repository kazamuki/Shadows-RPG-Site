---
purpose: Proposed page/section structure for the Shadowsrpg.com rebuild. Outline only — no HTML/CSS until this is approved. Built from content/inventory.md, the current CRB v4 manuscript, and Ken's framing that this site should work as a "visual shorthand" for the CRB, not just marketing copy.
status: Approved — all open questions resolved as of 2026-09-05. Ready for stage 3 (page structure/HTML) pending final go-ahead.
---

# Shadowsrpg.com — Sitemap

Working assumption carried in from Ken: the old DRAFT content is a few years stale but is the
right *starting scaffold*, not throwaway. Below, sections are marked **[carry]** (reuse
structure + copy, refresh as needed), **[new]** (nothing like it existed), or **[merge/split]**
(reorganizing old content rather than adding/dropping it).

Also carried in: this site is meant to double as a **visual shorthand for the CRB** — a
public-facing reference/preview layer over the book's actual content (Archetypes, Stats, Skills,
Gear...), not just a landing page that talks *about* the book. That framing is why the "Rules
Preview" hub below is the site's real reason to exist beyond a single splash page.

## New source discovered this pass: the CRB v4 manuscript

While resolving the open questions from the first draft of this sitemap, checked
`CRB in progress\CRB v4\` (Ken pointed here for the Equipment question) and found a full,
much more current chapter outline than anything in the old site export:

```
000 Index
010 Onboarding        — Section 1: Welcome to NYTE City / A World that Pushes Back /
                         Who are you? / What play at the table looks like
020 Synergy System     — Stats, Attributes, Skills, what makes Synergy different
030 Core Mechanics     — dice, risk resolution, skill/essence/breaker checks
040 Making a Character — power level, rolling stats, bonuses & penalties
041 Archetypes         — Arcanist, Cyborg, Professional, Vampire, Werewolf
042 Skills / 043 Advantages / 044 Disadvantages
050 Playing the Game   — Social / Environmental / Combat encounters, Conditions, Downtime
Gear.docx              — Weapons, Armor, Cybernetics, Equipment, Vehicles (not yet numbered
                         into the chapter sequence — still being folded in)
```

This changes two things immediately:

- **`010_Onboarding.docx`'s "Welcome to NYTE City" section is real, well-developed setting
  copy** — not a placeholder. It answers the old open question about The World page: there's
  plenty to adapt from, no need to wait on net-new writing.
- **`Gear.docx` is a full, substantial equipment chapter** (Weapons, Armor, Cybernetics,
  Equipment, Vehicles, plus the Çredits/Skrip economy and TAG identity system) — this answers
  the Equipment question directly. It's just not yet merged into the numbered chapter sequence,
  which is useful context for how to label it on the site (see status tags, below).

**Also caught in the process: the old site's setting year is wrong.** Home's copy says NYTE City
is set in **2079**; the CRB v4 draft has moved this to **2099**. The rebuild should use 2099 —
flagging clearly since this is exactly the kind of stale fact that's easy to carry forward by
accident.

**One more note from `041_Archetypes.docx`:** the archetype list is unchanged from the old
site (Arcanist, Cyborg, Professional, Vampire, Werewolf, plus baseline Human) — good, no
restructuring needed there. The manuscript does explicitly mark individual archetype sections
"(under construction)" inline — see the status-tag approach below, which mirrors this existing
convention rather than inventing a new one.

## Voice: two registers, used deliberately

Read `brand/GUIDE_Shadows_Voice.md` (copied into this repo from Ken's CRB reference folder) to
resolve the voice question raised in the first draft of this sitemap. It turns out the ambiguity
was a false alarm: `GUIDE_Shadows_Voice.md` lists **"Also, Kpop. The Fae own that."** as a
canonical example of *correct* in-world voice ("Humor: Dry, Rare, In-World") — so the
Onboarding chapter isn't bleeding some third, in-between register. It's textbook in-world
Shadows Voice: **NYTE City speaking as itself** — confident, assertive, teaches through stated
truths rather than advice, never hedges ("can/might/sometimes" → "does/will/tends to").

That's a genuinely different register from THEME.md's site-copy voice (Get Dangerous Games
speaking *as the studio*, to the reader, about the game) — and also different from the old
site's Character Creation page, whose "bucko"/"grasshopper" narrator voice is its own third
thing: informal, winking directly at the reader from outside the fiction. `GUIDE_Shadows_Voice.md`
explicitly flags that kind of aside as the failure mode to avoid ("if the humor sounds like it's
winking at the reader outside the world, it's probably wrong") — so the old Character Creation
copy doesn't actually match the CRB's current voice standard either. Decision: don't resurrect
it. Rewrite Rules Preview copy against the current manuscript's voice instead.

**Split applied across the site:**

- **In-world voice** (`brand/GUIDE_Shadows_Voice.md`) — The World page, and any direct excerpt/
  preview text pulled from the manuscript on Rules Preview pages (archetype write-ups, power
  level descriptions, etc.). This is the site's chance to actually sound like the book.
- **Site-copy voice** (`brand/THEME.md`) — Home, About, Support, News, Credits, and the
  *wrapper* copy around Rules Preview content (page intros, the status-tag legend, "here's what's
  in this chapter" framing). This is Get Dangerous Games talking to a visitor about the game.

One concrete effect: Rules Preview pages will read as two layers — a short site-voice intro,
then manuscript-voice content below it — rather than one blended tone. That's intentional and
mirrors how the CRB spread screenshots already work on the old Home page (a book excerpt sitting
inside a marketing page).

---

## 1. Home `/` — **[carry, expand]**

The pitch page. Old content (What is Shadows / What is the Synergy System / How do I make a
character / CRB progress carousel) is good bones, needs freshening — including the 2079 → 2099
correction above.

- Hero — logo mark, tagline, primary CTA ("Explore the Rules" → Rules Preview hub)
- What is Shadows? (setting + system one-liner, refreshed against `010_Onboarding.docx`)
- What is the Synergy System? (carried, likely shortened — full mechanical detail belongs in
  Rules Preview, not the homepage)
- Core Rulebook status — progress blurb + the CRB spread carousel, reused/refreshed images
- Quick links into Rules Preview / The World / Support
- Latest update — a short pointer to the most recent News entry (see §6), not a full embed
- Mailing list signup
- Footer (nav, social, copyright line — carried voice: "Any resemblance to reality is purely
  coincidence...")

---

## 2. Rules Preview `/rules/` — **[merge/split, new structure]**

The "visual shorthand for the CRB" hub. Old Character Creation + Archetypes content splits into
this section rather than staying as two flat pages, so each topic can carry its own preview art,
its own status tag, and grow independently as the CRB does.

**Status-tag convention (resolves the WIP-disclosure question):** rather than a blanket
"everything here is unfinished" banner repeated on every page, each Rules Preview page (and
major section within a page) carries a small status tag — `Draft`, `In Progress`, or `Final` —
the same way the manuscript itself already marks sections "(under construction)." One line on
the `/rules/` index explains what the tags mean; individual pages don't need repeated disclaimers,
and finished sections can genuinely say so instead of hedging everywhere.

- `/rules/` — index page: short framing + status-tag legend, then cards into each sub-page,
  each with a CRB spread preview image and its current status tag
- `/rules/character-creation` — **[carry, revoice]** intro + concept-writing guidance (old
  "Character Creation" + "Character Concept" sections) — rewrite out of the old "bucko"/
  "grasshopper" narrator voice per the Voice decision above; site-voice wrapper + in-world-voice
  content pulled from `040_Making a Character` where it exists
- `/rules/power-levels` — **[carry]** the 7 named power levels (Street Level → World Coming
  Down), pulled out as its own scannable reference
- `/rules/stats-and-skills` — **[carry, refresh]** Stats, Attributes, Skills, and the skill-check
  formula — cross-check against `020_Synergy_System.docx` / `030_Core_Mechanics.docx`, since the
  Synergy System's actual dice/risk mechanics look meaningfully more developed there than the
  old site's summary
- `/rules/advantages-disadvantages` — **[carry]** the Advantages/Disadvantages explainer + cost
  tables
- `/rules/archetypes` — **[carry, refresh]** all 6 archetype write-ups; current manuscript
  language is a step up from the old site's version, so re-pull rather than reuse verbatim.
  Replace the unverified stock header images with cleared Shutterstock picks.
- `/rules/equipment` — **[new, real content available]** seeded from `Gear.docx` — Weapons,
  Armor, Cybernetics, Equipment, Vehicles, plus the Çredits/Skrip/TAG economy framing. Tag as
  `In Progress` since it isn't yet numbered into the book's own chapter sequence.

---

## 3. The World `/world/` — **[new, real content available]**

Nothing like this existed as its own page on the old site — NYTE City only ever got one
paragraph, buried in Home. `010_Onboarding.docx`'s "Welcome to NYTE City" / "A World that
Pushes Back" / "Who are you?" sections give this page real substance to adapt from — and per
the Voice section above, this page is the one place on the site that should read in the CRB's
own **in-world** voice (NYTE City speaking as itself), lightly trimmed for a web page but not
translated into studio site-copy voice. It's the closest thing the site has to an actual page
out of the book, which is exactly the point of it.

- NYTE City overview (2099, Eastern Seaboard megalopolis) — adapted from Onboarding, in-world
  voice preserved
- "A world that pushes back" — tone/genre framing (consequences, the hidden supernatural
  undercurrent) — adapted from Onboarding, in-world voice preserved
- Possibly: factions, notable locations — hold for later unless Ken has more to pull from;
  not blocking launch of this page, since the Onboarding content alone is enough to seed it

---

## 4. Support (Home section, not a standalone page) — **[new, consolidates existing links]** — confirmed

Confirmed by Ken: fold this into Home as a section rather than a standalone nav page. Right now
it's just a Patreon link and a mailing-list signup — not enough distinct content to justify its
own page, and a sparse standalone page reads worse than a well-integrated Home section. Promote
to `/support/` once there's an actual "buy the book" mechanism (store link, DriveThru, launch
pledge) that gives it real weight. Cheap to split out later since it's already scoped as its own
section now.

- Patreon tiers/preview-access pitch (carried from Home's "become a Patron to see more in-depth
  previews" line)
- Mailing list signup
- "Where to get the book" — placeholder until there's a real link

---

## 5. About `/about/` — **[new]**

- Who's making Shadows — studio blurb, with the **Get Dangerous Games logo as a clickable
  "part of the GD family" mark** rather than a plain nav link (see nav decision below) — the
  logo itself lives in the shared `GD Assets` folder per `brand/asset-licensing.md`. This page
  is pure site-copy voice per THEME.md — it's Get Dangerous Games speaking as the studio, not
  NYTE City speaking as itself.

## Credits `/credits/` — **[new, kept separate from About]**

Confirmed separate, per the licensing requirement in `brand/asset-licensing.md`: any use of
Dean Spencer's commissioned art requires a specific credit line wherever it appears. Keeping
this on its own page (rather than folded into About) means it isn't at the mercy of a later
redesign collapsing pages together — a licensing obligation shouldn't depend on where a
copywriter decided a paragraph fit best.

- Art/asset credits (Dean Spencer line, any other required attributions as they come up)
- Linked from the footer on every page, not just from About

---

## 6. News `/news/` — **[new]**

Resolved: yes, build this, as a real lightweight page rather than reviving the dead Blogspot
embed. Framed as an **archive** per Ken's steer — a running, dated log of project milestones
(CRB chapter progress, playtest calls, site updates), not a live "blog" needing a content
cadence. Newest first, no CMS needed for a static GitHub Pages site — just dated entries.

- Chronological list of dated update entries
- Each entry short — a paragraph or two, optionally linking out to a fuller Patreon/Discord post
- Home links to the single latest entry rather than duplicating the list

---

## Global nav (revised)

```
Home · The World · Rules Preview · News · About        [GD logo mark ↗ → getdangerous.net]
```

Resolved: "Get Dangerous Home" moves from a text nav item to a **small GD Games logo mark**
(header corner or footer, TBD at stage 3) that links out to getdangerous.net — framing it as
"Shadows is part of the Get Dangerous Games family" via the actual brand mark rather than a
generic nav label. Support stays off primary nav for now per §4; Credits stays footer-only per
its own section above.

## Footer (proposed, mostly carried)

- Nav links (mirrors primary nav)
- Social icons (Twitch, Patreon, Twitter/X, YouTube) — **[carry]**, re-sourced as clean icon
  assets rather than the old exported images
- GD Games logo mark (see nav decision above)
- Copyright line — **[carry]** the existing personality-forward line
- Credits link → `/credits/`

---

## Status: all questions resolved

Support stays a Home section (confirmed). Voice is resolved as the two-register split above,
backed by `brand/GUIDE_Shadows_Voice.md`. No open items remain — ready to move into stage 3,
page structure/HTML using `brand/THEME.md` (site voice, colors, fonts) and
`brand/GUIDE_Shadows_Voice.md` (in-world voice, for The World page and manuscript excerpts) —
on your go-ahead.
