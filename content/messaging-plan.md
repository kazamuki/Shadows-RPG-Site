# Shadowsrpg.com — Messaging & Information Hierarchy Plan

Written 2026-09-26 from a marketing/prose review of the whole site (Ken's brief: "does the
site tell someone who knows nothing about Shadows what we're about and why it should interest
them, and does each page we send them to keep that going?").

**How to use this file:** work one session at a time, in order unless the dependency notes say
otherwise. Each session ships on its own, so the site is better after every one even if the
rest never happen. When a session ships, tick it off here, log it in CLAUDE.md's Build status,
and add a visitor-facing line to the News/changelog per the usual convention. Resolve the
decisions a session needs **before** starting it; they're collected at the top.

---

## The diagnosis, in one paragraph

The material that sells Shadows is already on the site, but it's in the wrong places. The two
things that make Shadows different, **cyberpunk and the supernatural sharing one city** and
**a city that pushes back**, live on The World page, two clicks deep. Home opens with generic
TTRPG phrasing ("cinematic, collaborative"), repeats itself in its second section, then teaches
point-buy jargon to someone who hasn't decided to care yet. The strongest proof (60+ episodes
of actual play, years of table-tested design) sits halfway down Home or only on About. Nothing
answers "can I play this now?", even though the answer is good (live character sheet, actual
play, Discord). Rules Preview follows the book's order instead of a newcomer's, and several
pages narrate the site's own production ("preview layer", "not ours", "isn't yet numbered into
the book's chapter sequence"). News, for a cold visitor, is mostly favicon fixes.

## Target shape

**Home**, top to bottom:
1. Hero: the hook, with "Meet NYTE City" as the primary button.
2. The pitch: concrete images (vampires own the nightclubs, werewolves clock in for security
   work, the Fae own K-pop) plus the "city pushes back" idea.
3. Who you can be: the six Archetypes, each with its existing one-line hook.
4. Watch it played: the four playlists, plus one line of origin story.
5. How it plays: Synergy in one paragraph, then the Rules grid.
6. Try it now: character sheet buttons.
7. Follow along: Patreon + Discord.

**Visitor path:** Home → The World → Archetypes → through Rules Preview → Character Creation
(ending on "Build one right now").

---

## Decisions needed (and which session needs them)

| # | Decision | Needed by | Recommendation |
|---|----------|-----------|----------------|
| D1 | ~~Where does the site changelog go?~~ | S1 | **Decided 2026-09-26:** its own `/changelog/` page, linked from the footer and the bottom of News. |
| D2 | ~~Rules Preview order: book order or newcomer order?~~ | S2 | **Shipped 2026-09-26 with the recommended newcomer order** (Ken started S2 without overriding it): Archetypes → Power Levels → Stats & Skills → Advantages & Disadvantages → Equipment → Character Creation. One-file revert in `_data/rules.yml` if Ken prefers book order. |
| D3 | ~~What actually separates **Human** from **Professional**?~~ | S2 | **Answered 2026-09-26** (Ken), see below. |

**D3 answer (Ken, 2026-09-26):** there is no difference between "Human" and "Professional".
The real split is **mortals vs. supernaturals**, and *everyone* starts human:
- **Professionals**: humans who trained until they can compete with supernatural beings.
- **Cyborgs**: humans who added tech that works like magic.
- **Arcanists**: humans who learned to use magic.
- **Vampires / Werewolves**: once human, turned before the campaign starts.

So Session 2 should restructure the Archetypes page around that framing rather than listing
Human as a peer of the other five. The "Human" block's content (baseline, most common being,
"most humans don't know vampires… walk among them") becomes the page's intro: the starting
point everyone shares, with the five Archetypes as the paths out of it. Group them as mortal
(Professional, Cyborg, Arcanist) and supernatural (Vampire, Werewolf). The `#human` jump link
and the Human spread image need a new home (the intro is the natural spot).
| D4 | ~~Should the site name comparison games?~~ | S3 | **Decided 2026-09-26:** unnamed version: "If you've ever wanted cyberpunk and urban fantasy at the same table, this is that game." |
| D5 | ~~Pick a hero line.~~ | S3 | **Decided 2026-09-26:** "A tabletop RPG where cyberpunk and the supernatural share one city, and the city keeps score. Welcome to NYTE City, 2099." |
| D6 | Example-of-play scenes: in-world or site voice, and how close to mechanics can they get? | S5 | Short in-world vignettes, no numbers, same altitude rule as the rest of Rules Preview. |
| D7 | Possible word slips in The World's verbatim manuscript text (see "Outside this repo"). | none (hand-off) | Send to Scott; mirror whatever the CRB decides. |

---

## Session 1 — Stop the site talking about itself  ·  S  ·  ✅ Shipped 2026-09-26

Everything below is done. Two small deviations from the plan: the Home Synergy link now reads
"Stats & Skills" to match its destination (kept the link target), and About's "Who's making
Shadows" became the page's H1 instead of sitting under a bare "About" heading.

**Value when shipped:** every page reads as the game speaking, not the build process. News
stops looking dormant. No design change, low risk.

**Needs:** D1.

- [x] **The World** (`world/index.html`): replace the banner's voice note ("…straight from the
      CRB manuscript — not ours.") with something like "From the Shadows Core Rulebook."
- [x] **The World**: change the closing link from Character Creation to Archetypes, e.g.
      "Something older and stranger wearing a human face? Meet the Archetypes →", and optionally
      a second link to Home's actual-play section.
- [x] **Rules hub** (`rules/index.html`): rewrite the intro. Drop "the site's public preview
      layer… not marketing copy… an actual look at the mechanics" (internal framing, and it
      overpromises given the altitude rule). Direction: "A look inside the Shadows Core
      Rulebook while it's being written."
- [x] **Equipment** (`rules/equipment/index.html` + its `blurb` in `_data/rules.yml`): remove
      chapter-numbering talk from the intro, the card blurb, the excerpt's "This is the only
      equipment chapter in the book", and the Cybernetics section's "still being written".
- [x] **News** (`news/index.html`): rewrite the intro (drop "not maintained separately here").
      Move the changelog per D1; update CLAUDE.md's changelog convention to point at the new
      location.
- [x] **About** (`about/index.html`): drop "Get Dangerous Games, speaking for itself — no
      in-world voice here, just us." Change "Joined the crew seven years ago" to a fixed year
      (ask Ken). The callout's "Track its progress on the News page" is fine once News leads
      with game news.
- [x] **Home** (`index.html`): the Synergy card's "Rules Preview" link text points at Stats &
      Skills; make the text match the destination. Replace "home-brewed" with something that
      doesn't undersell ("our own d10 system").
- [x] **Archetypes**: "Credits" → "Çredits" in the Cyborg entry.

**Done when:** no page mentions the manuscript's chapter numbering, the voice split, or how the
site is maintained; News opens with game news; `jekyll serve` build is clean.

---

## Session 2 — Rules Preview as a journey  ·  M  ·  ✅ Shipped 2026-09-26

Everything below is done, synced against the CRB v4 chapters as of 2026-09-26 (`041_Archetypes`
last edited 2026-09-24). What the manuscript check turned up:
- **The manuscript itself has dropped Human as an archetype.** It lists five (Arcanist, Cyborg,
  Professional, Vampire, Werewolf) and opens "Everyone starts human." That matches D3.
- **"Primary Stats" lines removed from every Archetype.** Only Arcanist's (INT, COOL, EMP) is
  in the manuscript. Cyborg's copy of it was the suspected copy error, and Vampire's and
  Werewolf's BOD/REF/MOB aren't stated anywhere in the current text either. Stat abbreviations
  were also jargon on what is now page one. Replaced them with the manuscript's named
  specializations where it has them: Professions (8), Arcanist Origins (Book/Blood/Bound), and
  Werewolf Origins (Trueborn/Unblooded/Forge Fangs). Cyborg and Vampire have no named ones yet.
- **Supernatural group wording** says "turned, born to it, or made", not just "turned", because
  the manuscript's Trueborn werewolves are born lycanthropes (slight tension with D3's "once
  human").
- The Equipment/TAG item went the "better" way: The World now has a short verbatim TAG excerpt
  from `046_Gear` linking to Equipment's `#economy` section.
- Home's step list said "(or run baseline Human)". That's fixed now rather than waiting for
  Session 4 to remove the list.

**Value when shipped:** a newcomer reading Rules Preview in order meets the exciting content
first, every term is seen before Character Creation uses it, and the path ends on the
character-sheet call to action.

**Needs:** D2, D3. Independent of Sessions 3–4 (Home's Rules grid picks up the new order
automatically from `_data/rules.yml`).

- [x] Reorder `_data/rules.yml` per D2. Pager, hub grid and Home grid follow automatically.
- [x] **Archetypes as the opener:** its intro should work as page one ("Everyone starts
      human. What happens next is up to you." already does most of this). Add the D3 sentence
      separating Human from Professional.
- [x] **Verify Archetype primary stats** against the manuscript: Arcanist and Cyborg both show
      "INT, COOL, EMP", which may be a copy error. Re-extract the Archetypes `.docx` with
      `Extract-DocxText` (see CLAUDE.md) and check.
- [x] **Character Creation as the finale:** rewrite the intro to pull things together ("You've
      seen the pieces; here's how they come together"). Cut the "Stats, and the shape of a
      person" section, which repeats Stats & Skills. Remove the "next question is… your
      Archetype" line, now backwards. Keep "Build one right now" as the last thing on the page.
- [x] **Stats & Skills intro:** "they just tell the city how hard it has to hit before you
      break" only describes resilience; broaden it.
- [x] **Equipment:** add a one-line hook out to The World for the TAG/UBI material, or (better)
      also surface one sentence of it on The World, since it's some of the best setting detail
      on the site.
- [x] Check every cross-link that assumed the old order (The World's closing link, Home's
      Character Creation links, the pager's first/last spacer states).

**Done when:** reading all six pages in pager order, no page uses a rules term that an earlier
page hasn't introduced, and the last page ends on the character sheet.

---

## Session 3 — Home, part 1: the hook  ·  M  ·  ✅ Shipped 2026-09-26

Everything below is done. Approved copy lives in `content/drafts/home-hook.md`. One small
pull-forward from Session 4: removing the Synergy card would have left Home without any
mention of the system, so its content now opens the Core Rulebook section's intro. Session 4's
"How it plays" item only needs a check that this paragraph still fits.

**Value when shipped:** someone landing on Home learns what makes Shadows different in the
first screen and a half.

**Needs:** D4, D5. Per CLAUDE.md's working process, **draft the copy as markdown first and get
Ken's approval before touching HTML.** Draft and build can happen in the same session.

- [x] **Hero** (`index.html`): new tagline per D5; swap button priority to "Meet NYTE City"
      (primary) and "Explore the Rules" (ghost). Starting drafts:
      > *Cyberpunk and the supernatural, sharing one city. NYTE City, 2099: the corporations
      > own the skyline, vampires own the nightclubs, and the city remembers everything you do.*

      > *A tabletop RPG where the city fights back. Chrome, magic, and monsters in NYTE City,
      > 2099.*
- [x] **Replace "What is Shadows?" + "What is the Synergy System?"** with one pitch section:
      two short paragraphs built from The World's concrete images and the "city pushes back"
      idea, plus the D4 comparison line if approved. Site voice may quote the in-world line
      "Shadows is for players who want… danger with weight, power with cost, and hope that has
      to be earned."
- [x] Update Home's `description` front matter (it drives the link-preview text) to match the
      new pitch.

**Done when:** the first screen (desktop and 375px phone) names both differentiators, with no
repeated phrasing between hero and pitch.

---

## Session 4 — Home, part 2: proof, people, and "try it now"  ·  M–L  ·  ✅ Shipped 2026-09-26

Everything below is done. Deviations from the plan:
- **Five Archetypes, not six**, per D3. The roster's intro carries "everyone starts human".
  It's a row list rather than cards because the hooks run from 5 to 29 words.
- **Page height went up, not down**: 3,957 → 4,272px at 1280, 5,758 → 5,957px at 375. The
  removed steps and bottom cards were shorter than the two new jobs Home took on (the
  Archetypes roster and "Try it now"). Each section now has one job, which was the real aim;
  if Ken wants it shorter, the next cut is the Rules grid's image tiles.
- Playlist thumbnails skipped (optional). They'd need a video ID per playlist; still on the
  wishlist.
- The Synergy paragraph from Session 3 fit as-is; only its heading changed ("How it plays").

**Value when shipped:** Home becomes the full pitch in the target order, and much shorter.

**Needs:** Session 3 shipped (the new top sets the tone for everything below it). Best after
Session 2, so the Archetypes strip and Rules grid agree on order and wording.

- [x] **"Who you can be" strip:** six Archetypes, name + existing hook line, each linking to
      its `#anchor` on the Archetypes page. Consider a `_data/archetypes.yml` so the hook lines
      live in one place for both Home and the Archetypes page (same pattern as `rules.yml`).
- [x] **Move "See the game live" up** under the Archetypes strip, and lead it with one line of
      origin story from About ("a crew who couldn't find the system they wanted, built one, and
      refined it over years of play"). Optional: fold in the wishlist's playlist thumbnails.
- [x] **"How it plays":** one Synergy paragraph above the existing Rules grid.
- [x] **"Try it now" block:** the two character-sheet buttons from Character Creation, plus the
      Discord link. This answers "can I play this now?".
- [x] **Remove** "How do I make a character?" (resolves the wishlist's 4-vs-7 steps item) and
      the bottom World / Latest Update cards (The World is linked from the hero and nav).
- [x] Measure page height before and after at 1280px and 375px (wishlist noted ~4,000px on
      desktop).

**Done when:** Home matches the target shape above; each section has one job; no destination
is linked more than twice.

---

## Session 5 — Show, don't tell  ·  M, needs writing

**Value when shipped:** Rules Preview shows the game being played, not just described. This is
the single biggest remaining gap once the structure is fixed.

**Needs:** D6, and Session 2 (so scenes land on pages in their final order).

- [ ] One short example-of-play vignette on **Stats & Skills** (a check that explodes, then the
      city notices), prose only, no numbers.
- [ ] Optionally one each on **Power Levels** (the same job at Street Level vs Shadows scale)
      and **Advantages & Disadvantages** (a Disadvantage coming due mid-scene).
- [ ] Run each through the `shadows-voice-editor` skill before shipping.

**Done when:** Ken confirms the vignettes stay on the right side of the "not a copyable
ruleset" line (see memory: Rules Preview altitude).

---

## Session 6 (optional) — Jargon on-ramp  ·  M  ·  ✅ Shipped 2026-09-26

Shipped ahead of Session 5 (Ken's call). `/world/glossary/` is built from `_data/glossary.yml`
(22 terms in five groups, all sourced from the CRB v4 text, flavor-level only), and
`_includes/term.html` renders dotted-underline first-use links on Home, Archetypes, Advantages
& Disadvantages, and Equipment. The manuscript calls the network **the LINK**, not "the NET",
so Home's two "NET" mentions were changed to match. "Houses", "Jumpers", and "CRB" are in the
glossary but only linked where a page doesn't already explain them in the same sentence. If
Session 5 adds vignettes that use new terms, add them to the data file and link first uses.

Folds in the wishlist's **Glossary** item. NET, LINK, TAG, Aether, Skrip, Çredits, Houses,
Jumpers, CRB are all used without explanation. Build `/world/glossary/` from
`_data/glossary.yml`; optionally add dotted-underline first-use glosses on Rules Preview. Worth
doing after Sessions 1–5, when the pages that use the terms are stable.

---

## Outside this repo (hand-offs)

- **Possible word slips in the manuscript text on The World** (verbatim CRB, so Scott's call):
  - "malcontent of citizens" probably means "discontent".
  - "new-aged hellscape" reads like New Age crystals.
  - "twisted and maligned" probably means "malign" ("maligned" means slandered).
  - "Things have changed dramatically in the last 100 years, and not necessarily for the
    better" is a cliché right after the strong "It just stopped pretending it wouldn't."

  If the CRB changes, mirror it on `world/index.html`.

## Wishlist items this plan absorbs

- "Home's 4 steps vs Character Creation's 7" → resolved by Session 4 (step list leaves Home).
- "Home length" → Session 4.
- "Real YouTube thumbnails" → optional in Session 4.
- "Glossary of NYTE City terms" → Session 6.
