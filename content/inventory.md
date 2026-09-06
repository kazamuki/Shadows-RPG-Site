---
purpose: Content inventory of the old Shadowsrpg.com Google Sites export, mined for what's worth carrying into the rebuild. Source of truth for step 2 (sitemap) — read this before proposing new pages so we don't silently drop something real.
---

# Old Site Inventory — Google Sites Export

Source: `Google-Page-Original/DRAFT/` (a Google Takeout export). Google's export HTML is
structural noise (Sites' own component classes, no semantic markup) — this inventory reports
what a visitor actually saw and skips the markup.

## ⚠️ Read this before trusting the inventory below

Three things about this export are worth flagging up front, because they affect how much
weight to put on "this is the whole old site":

1. **Every page is `<meta name="robots" content="noindex">` and lives under a folder literally
   named `DRAFT`.** This may be an unpublished draft snapshot rather than what was actually live
   at shadowsrpg.com — or Google Sites may just always emit `noindex` on Takeout exports
   regardless of publish state. I can't tell which from the files alone.
2. **It's only 4 pages, and one of them is empty.** A publisher site this small (no FAQ, no
   About, no Contact, no blog/news page, no Patreon/store links page) is unusual. Either the
   real site had more pages that aren't in this export folder, or shadowsrpg.com genuinely was
   this bare-bones and everything else lived on Patreon/social instead.
3. **The nav consistently links out to `getdangerous.net`, and one page links to
   `patreon.com/d33kode`.** So the old site treated itself as the "game rules" satellite of a
   `d33kode`/Get Dangerous hub, not a standalone hub itself. Worth deciding if that's still the
   intended relationship.

**Resolved (2026-09-05):** confirmed by Ken — this is the complete, only version of the old site.
It hasn't been touched in a few years and the content is known to be stale, but it's still the
right scaffold to build from rather than starting from nothing. One concrete piece of drift
already caught: Home's copy says NYTE City is set in **2079**, but the current CRB v4 draft
(`010_Onboarding.docx`, see [sitemap.md](sitemap.md)) has moved the setting to **2099** — don't
carry the old date forward.

---

## Site-wide chrome (present on every page — not per-page content)

| Element | Detail |
|---|---|
| Site title | "Shadows RPG" |
| Favicon | `a99e5256e697075a3fe8eb39ab08b9b9.jpg` — the purple skull/d10/d6 dice-skull mark. This is the same brand mark already living in the shared **GD Assets** folder per [asset-licensing.md](../brand/asset-licensing.md), so pull the clean source file from there rather than this low-res exported copy. |
| Header background | A single shared background image (`.../02e5d99...jpg`) tiled behind the title/nav bar on all 4 pages. Generic dark texture, not distinctive — don't bother carrying forward, easy to replace with a THEME.md color/gradient. |
| Primary nav | Home · Character Creation · Archetypes · **Get Dangerous Home** (external link to getdangerous.net) |
| Nav overflow | A "More" menu that Google Sites auto-generates; it just repeats the same 4 links. Boilerplate — not real content. |
| Footer social icons | Twitch (`twitch.tv/d33kode`), Patreon (`patreon.com/d33kode`), Twitter (`twitter.com/Shadows_RPG`), YouTube (playlist link), and a repeat link to getdangerous.net. Two of the icons are custom-uploaded images rather than stock platform icons — reasonable to just use fresh brand-consistent icon assets in the rebuild rather than extracting these. |
| Footer copyright | "Copyright 2026 Get Dangerous. All Rights Reserved. Any resemblance to reality is purely coincidence, though we are kind of living in a corporation-fueled capitalist nightmare dystopia, right?" — this line has voice/personality worth keeping in some form. |
| Accessibility cruft | "Skip to main content" / "Skip to navigation" links — Google Sites boilerplate, not content, but the *intent* (skip links) is good practice to rebuild properly. |

---

## Page: Home (`Home.html`)

**Verdict: real content, carry forward and expand.** This is the site's actual pitch — worth
treating as the seed for a proper homepage, not a placeholder.

| Section | Content |
|---|---|
| Hero / intro | "Welcome to Shadows" + mailing-list call-to-action linking to a Google Form (`forms.gle/q9SjtWLFTzedQiT39`) |
| "What is Shadows?" | Pitch paragraph: cybernetic/supernatural RPG, Synergy System, set in 2079, NYTE City spanning the US Eastern Seaboard |
| "What is the Synergy System?" | Short explainer of the homebrew d10 system |
| "How do I make a character?" | 4-step summary (roll for points → assign stats/skills → buy Advantages/Disadvantages → pick an Archetype) with a link to the Character Creation page |
| "Core Rulebook (CRB)" | Copy about CRB progress + Patreon plug, backed by a 5-image carousel of **real CRB spread screenshots**: Player's Guide, Stats and Attributes, Advantages, "Humans" archetype spread, "Cyborgs" archetype spread |
| Footer | Shared chrome (see above) |

**Images:** the 5 carousel images (`Home/0623b318...`, `6aaae41d...`, `ddec997e...`,
`e5858149...`, `c1704a7b...`) are genuine screenshots of actual CRB book layout — good-quality,
on-brand (purple/blue headings match THEME.md almost exactly), and worth carrying forward as
real preview content, pending a check that they still reflect the current CRB layout/text.
One of these (the "monolith in the rain" spread background) visually matches
`shutterstock_772547365.jpg` in the [Shutterstock catalog](../brand/shutterstock-catalog.md) —
confirming Google Sites strips the original filename on upload, so **any image we want to carry
forward needs a visual cross-check against the catalog**, not a filename match, before we know
whether it's already-cleared stock or something else.

---

## Page: Character Creation (`Character Creation.html`)

**Verdict: real content, and a lot of it — this is the meatiest page on the old site.** Written
in a distinct snarky/irreverent narrator voice that's noticeably different from both the
Home page copy and the GUIDE_Shadows_Voice in-world voice — worth a deliberate decision on
whether that voice survives the rebuild or gets normalized to the site-copy voice in THEME.md
("gritty but hopeful," "confident expert," etc.) — **flagging as a voice question, not deciding
it here.**

Structure (has in-page anchor nav to 3 sub-sections: "Character Creation," "Numbers and Stuff,"
"Spit & Polish"):

- **Character Creation** (intro) — tone-setting narration, what character creation is for
- **Character Concept** — guidance on writing a backstory/concept before touching numbers
- **Numbers and Stuff**
  - **Power Level** — 7 named power levels with descriptions: Street Level, Mildly Heroic,
    Heroic, Shadows, Dark World, Shadows Heroic, World Coming Down
  - **Spending Points** — Character Points / Skill Points / Freebie Points explainer
  - **Stats** — BOD/REF/MOB (physical), INT/TECH (mental), COOL/MAG/EMP (social), scale 1–10
  - **Attributes** — WILL, TOL, LUCK, SAN
  - **Skills** — how skill checks work (1d10 + Skill Rank + Primary Stat + Synergy Bonus),
    plus categorized example lists: Combat (Archery, Beam Weapons, Dodge, Handgun, Melee,
    Rifle, SMG...), Utility (Basic Tech, Demolitions, Electronic Security, First Aid,
    Programming, Robotics, Street Deal...), General (Acrobatics, Disguise, Investigation,
    Occult Lore, Persuasion, Pilot, Tracking...) — each explicitly says "and more!", i.e.
    illustrative, not exhaustive
  - **Advantages and Disadvantages** — explainer + example lists with point costs (Advantages:
    Connections 1pt → Dream Walker 12pt; Disadvantages: Enemies 1pt → Hemophiliac 10pt)
- **Spit & Polish**
  - **Equipment, Weapons, and Gear** — short pointer to "the Equipment section" (which doesn't
    exist anywhere in this export — a dead reference to content that may live in the CRB only)
  - **Threads, Treads, and Style** — appearance/mannerisms/archetype-tagging flavor text

**Images:** 5 more real CRB spread screenshots (different from Home's carousel) sit as section
header art. Same "verify against Shutterstock catalog + confirm still current" caveat applies.

---

## Page: Archetypes (`Archetypes.html`)

**Verdict: real content, directly reusable, but should be checked against the current CRB for
drift** (this reads like an earlier draft of the Archetypes chapter — worth confirming names/
mechanics still match the current book before publishing).

Intro: "What is an Archetype?" — explains Archetypes as the final character-creation step,
package deals of Features/Powers, with a "Human" baseline plus 5 others.

Six archetype write-ups, each with a flavor paragraph and a stat block (Stat Bonus / Features /
Power / Weaknesses), each with its own header image:

| Archetype | One-line hook |
|---|---|
| Human | Baseline species; most humans don't know vampires/werewolves/nephilim/demons walk among them |
| Arcanist | Wizards/sorcerers/mages; Spellcasting power |
| Cyborg | Humanity traded for cybernetics; pays in cash + humanity; weak to Fragmentation/EMP |
| Professional | Skippers, Fixers, Digilantes — skilled humans who blend in and specialize |
| Vampire | Ancient houses, bloodline powers, weak to sunlight/weak heart |
| Werewolf | Lycanthropy, shapeshifting, house powers, weak to silver |

**Images:** 6 header images (one per archetype, one is a shared street-level "Human" mood
shot) — these read as stock/found photography rather than CRB screenshots. **Unverified
provenance** — none of the filenames match Shutterstock IDs, and Google Sites' built-in image
picker pulls from a royalty-free pool that isn't necessarily the same license as the confirmed
Shutterstock catalog. Per [asset-licensing.md](../brand/asset-licensing.md)'s rule of thumb,
treat these as **not cleared** — replace with Shutterstock-catalog picks (the catalog already
has strong "Shadows-band" candidates per archetype, e.g. the cyber-shaman or cyborg-warrior
shots) rather than re-uploading these.

---

## Page: Chargen (`Chargen.html`)

**Verdict: boilerplate / orphan page — do not carry forward.** Title only ("Chargen"), no body
copy, no real images — just 3 empty `<iframe>` placeholders (likely an embedded Google Form or
Doc that never got filled in, or content that was stripped because it required login/wasn't
publicly embeddable). This looks like an abandoned earlier attempt at the Character Creation
page (name collision is suspicious) that was superseded by the real "Character Creation" page
and never deleted. Flagging as dead weight, not a page to migrate.

---

## Cross-page questions worth deciding before the sitemap

- Is the Get Dangerous Games ↔ Shadows RPG site relationship still "Shadows links out to GD as
  the parent brand," or does the new sitemap need a more equal-footing cross-link treatment
  now that both are being rebuilt as real sites?
- "Equipment section" is referenced from Character Creation but doesn't exist as a page anywhere
  in this export — does that content exist elsewhere (CRB-only), or is it a genuine content gap?
- The Character Creation page's narrator voice (snarky, second-person, "bucko"/"grasshopper")
  doesn't match the Home page's more straightforward pitch copy, and doesn't match THEME.md's
  site-voice guidance either. Keep it as page personality, or normalize it?
- The mailing-list signup uses a raw Google Form link — is that still the current list, or does
  a real ESP (Mailchimp, etc.) exist now that should replace it?
