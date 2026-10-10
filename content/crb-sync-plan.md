# CRB sync plan: the site vs. the private CRB mirror

Written 2026-10-10. Audited against `kazamuki/Shadows-Private` at `cea99a8` (mirror
pulled 2026-10-07, every chapter renamed to the source's four-digit numbers), and against
the character sheet's own catch-up notes (`Shadows-Character-Sheet/docs/plans/crb-catch-up.md`,
re-checked 2026-10-08). Same altitude rule as always: the site carries flavor and plain-English
gists, never a copyable ruleset. **Nothing from the Threat Codex files goes on the site**; the
mirror marks them confidential.

## Where the mirror lives

Local clone at `C:\Users\kazam\Github\Shadows-Private`, chapters in `crb/`. Read it there.
**Don't add it to this repo as a submodule.** GitHub Pages can only build submodules that point
at public repos, so a private one would break the live site's build. Nothing in this site's
build needs the CRB: the site holds hand-curated excerpts, committed here.

To see what changed in the book since this audit:

```bash
git -C ../Shadows-Private log --stat cea99a8..origin/main -- crb/
```

## Audit

### Still accurate (no change needed)

- **The World** is still word-for-word `0100_Onboarding` ("Welcome to NYTE City", "A world that
  pushes back", "Who are you?").
- **Power Levels**: the four tiers and their text match `0400`.
- **Stats & Skills**: all eight Stats, the three Attributes (TOL, WILL, SAN), the three Skill
  groups and the d10 check (explodes on 10, botches on 1) match `0200`, `0300` and `0420`. All
  three quoted skill lines are still in the book.
- **Advantages & Disadvantages**: all eight sampled entries and their flavor lines still exist
  in `0430` and `0440`.
- **Equipment**: Çredits, skrip, TAG, TAGless, UBI and the income table match `0460` exactly.
- **Character Creation**: the seven-step flow and "What a character is" match `0400`, except
  step 3 (below).
- **Professional**: the eight Professions are unchanged.
- **"In play" scenes**: Missing Cargo, Hyde Dynomat, the Red Hands and Doc Malin are all still
  in the GM Workshop chapters.

### Wrong now (fix first)

| # | What the site says | What the book says now | Where on the site |
|---|---|---|---|
| A1 | Five Archetypes including **Cyborg** | Cyborg was **cut on 2026-10-01**. The book lists Arcanist, Professional, Vampire, Werewolf and **Custom**. Cybernetics are now a list open to **Professionals only** (Arcanists, Vampires and Werewolves can't take chrome), and its rules are still being designed. | `_data/archetypes.yml`, `_data/rules.yml` (blurb + card image), Archetypes page (section, jump link, spread lightbox, meta description), Home roster + its intro, glossary `archetype` |
| A2 | Werewolf Origins: Trueborn, **Unblooded**, Forge Fangs | **Wildblood** (`0414`, and the character sheet). `1200_Powers` and the GM Workshop still say Unblooded; that's a book inconsistency, not a reason to keep the old name. | Archetypes page |
| A3 | Step 3: "**Roll** for your Stat Points" | Stats are now a **point buy**: a fixed pool set by Power Level, spent with rising costs above 6. | Character Creation step list; `next-step.html` sheet bar ("Roll your Stats") and the "Build one right now" callout |
| A4 | Glossary **Unseen Court**: the body that keeps *vampires* hidden | A council of **four houses**: Vampire, Werewolf, Deadmen and Fae, one seat each, three votes to carry. Arcanists have no seat. | `_data/glossary.yml` |
| A5 | Glossary **Houses**: "the vampire Houses" | "Houses" now means the four kinds on the Court. Vampires split into three **bloodlines**: Strigoi, Upyr, Draugur. | `_data/glossary.yml`, Vampire section |
| A6 | Glossary **NCI**: "upgrade it far enough… You're a Cyborg." **Humanity**: what cybernetics cost you | The NCI is still in `0470`, but the Cyborg payoff is gone. "Humanity" as a cost of chrome no longer appears anywhere in the book. | `_data/glossary.yml`, Archetypes page |
| A7 | Human intro hook: "vampires, werewolves, **nephilim, and demons**" | That line came from the old Human chapter, which no longer exists. The book doesn't mention nephilim at all. | Archetypes page `#human` |
| A8 | Equipment > Cybernetics: "every way to rebuild your body… gets a chapter of its own" | `0470` is still an outline, and it's being re-scoped around Professionals. | Equipment page |

### Images affected

- `crb-spreads/cyborg-archetype.jpg` is the **Archetypes card image**, the zoomable spread on the
  Archetypes page, and that page's link-preview image. All three show a cut archetype.
- `home/roster-cyborg.jpg` (Home roster thumbnail) has nothing to show any more.
- `crb-spreads/stats-and-attributes.jpg` was already flagged for showing the stat table. It now
  also shows the **old rolled-stats** table, so it's wrong as well as too detailed.
- The CRB spreads are all from an older book layout. The Human and Cyborg ones show sections
  the book no longer has.

### New in the book, not on the site yet

- **Custom archetype**: a character the city has no box for, built with the GM (in the book and
  the sheet).
- **Vampire bloodlines** (Strigoi: deception and intellect; Upyr: raw savagery; Draugur:
  discipline and war) and the **Thirst**. **Werewolf** Origins rewritten as gift, curse and
  transaction (Trueborn, Wildblood, Forge Fang), plus the Shift.
- **Three kinds of risk** (`0300`): Skill Checks (one d10), Essence Checks (a pool of dice
  counting hits, for pushing past your limits) and Breaker Checks (when something tries to
  break you). Also the Kicker die and "Take X".
- **Magic** (`0480`): three disciplines (Evocation, Enchantment, Alchemy), Aether, glyphs, and
  the cost of overreaching. Rules Preview has no Magic page, and the Arcanist is one of the
  game's biggest draws.
- **Advancement** (`0450`): Improvement Points for getting better, Milestones for becoming
  something new.
- **Gear** (`0460`): Powered Armor, Mech Suits and vehicle combat packages, plus the **Black
  TAG** (a forged identity).
- **World of Shadows** (`1000` to `1300`), the largest new section:
  - **Places**: six Territories (North Quarter, Central City, Daedalus Belt, Welterworth
    Commons, Greenwall, Southside Consortium) and the city's naming scheme (Territory → Zone →
    District → Neighborhood). 200 million people on 1,500 miles of coast.
  - **Powers**: five corporations (Covenant Medical, DarkSun, Hillcrest Pharmaceuticals, Hyde
    Dynomat, Neurodyne), the Unseen Court, and the "Other Guys" (Chrome Berets, Goblin Market,
    QUORUM, Seraphim, Technomancers, Watchers).
  - **Threats**: seven mortal kinds, seven supernatural kinds and five environmental kinds.

### Book inconsistencies to send back to the team (not site work)

- Werewolf Origin: Wildblood in `0414`, Unblooded in `1200` and `2120`.
- Investigation and Streetwise appear in both `0422_Utility_Skills` and `0423_General_Skills`.
- Power Level scopes use "borough" and "sector", but `1000` names the city Territory → Zone →
  District → Neighborhood. Also a typo in `0100`: "powers struggles".

## Decisions

**All five answered 2026-10-10: Ken went with every recommendation below.**


- **D1. What replaces the Cyborg slot?** Recommended: four Archetypes plus a short **Custom**
  entry ("something the city never catalogued"). That keeps the roster at five rows and matches
  the book and the sheet. Retire `roster-cyborg.jpg`; Custom needs a thumbnail from the
  Shutterstock catalog.
- **D2. How much to say about chrome.** Recommended: one line on the Professional ("the only
  ones who go under the knife") and a softened Equipment paragraph. No mechanics until the
  cybernetics rules settle.
- **D3. New Archetypes card image.** The Cyborg spread can't stay. Options: a catalog image, or a
  glyph panel like Power Levels and Equipment. Recommended: a catalog image.
- **D4. How much of the World of Shadows to publish.** Places and Powers aren't marked
  confidential, but they're new and still unseen by players. Recommended: publish the Territory
  and Power *names and one-line identities* in site voice, and keep stat blocks, leadership
  names and the GM-facing secrets out.
- **D5. Missing Cargo as a free quickstart?** (see "Try the game" below). Recommended: yes, but it's
  a team call because it's GM Workshop material.

## Sessions

Each session ends with a Build status entry in CLAUDE.md and a changelog entry, as usual.

**✅ S1. Correctness pass (shipped 2026-10-10).** A1 to A8 once D1 to D3 are answered: archetype data
and roster, Archetypes page (drop Cyborg, add Custom, Wildblood, bloodlines line for Vampire, a
new Human hook in the book's current voice), glossary rewrites (Unseen Court, Houses → the four
houses, NCI, drop Humanity, Archetype), "Roll" → "set" in three places, Equipment's cybernetics
paragraph, new card image, meta descriptions. Re-check the glossary's first-use links still
point at real entries. *Done; see CLAUDE.md's Build status. The Human
spread was retired too (it showed a chapter the book no longer has), and the Cyborg spread
lightbox went with it.*

**✅ S2. Rules Preview catches up (shipped 2026-10-10).** Stats & Skills: replace "How a check resolves" with a
plain-English "Three kinds of risk" (no numbers). Character Creation: one paragraph on the point
buy and one on growth (IP and Milestones). Equipment: add Powered Armor and Mechs to the
manifest and a Black TAG line. Retire the stats spread image (closes the wishlist item). *Done: the
risk section lists all four of the book's kinds (contested rolls too), and the Stats card is now
a \"d10\" glyph panel.*

**✅ S3. New Rules page: Magic (shipped 2026-10-10; copy in `content/drafts/magic-page.md`, M1-M5 approved as recommended).** Three disciplines, what Aether is, what it costs, plus a short
"In play" scene and a ledger. Slot it into `_data/rules.yml` after Archetypes. Draft copy in
`content/drafts/` first.

**✅ S4. The World grows (shipped 2026-10-10; copy in `content/drafts/world-expansion.md`, W1-W6 approved as recommended).** Following D4: a "Shape of the city" section (six Territories, with
the naming callout) and a "Who runs it" section (five corporations, the Unseen Court, the
others), as sub-pages under `/world/` if they run long. Add the new names to the glossary.
This also covers the wishlist's "Districts / map page".

**✅ S5. "What's in the dark" (shipped 2026-10-10 as `/world/threats/`; copy in `content/drafts/threats-page.md`, T1-T5 approved as recommended). All five sessions are now shipped.** A flavor-only Threats teaser: the three families and their kinds,
one line each, no stats and nothing from the Codex.

## Getting people to try the game or join the Discord

New ideas (the wishlist already has the quiz, Start here, pre-gens, dice roller, FAQ and press kit):

1. **A free one-shot: "Missing Cargo".** The site already uses this job in three scenes. A
   one-page player primer, a GM brief and three or four pre-gens that open straight in the
   character sheet would turn "this looks cool" into "we played it Friday". The strongest single
   lever for trying the game. Needs D5.
2. **"Find a table" on Discord.** Most people who want to try a TTRPG don't have a group. A
   regular newcomer one-shot run as a Discord Event, plus a looking-for-group channel, gives the
   Discord button a concrete reason ("join a game Thursday") instead of "join the community".
   The site can show the next session from a small data file. It needs someone to run the games.
3. **Discord online count.** Discord's server widget shows how many people are online right now.
   Shown next to the Discord button, it's honest social proof. Needs the server widget turned on
   in Discord's server settings first.
4. **In-context Discord prompts.** On Rules pages: "Questions about a rule? Ask in
   #rules-questions." On the sheet's next-step bar: "Share your build in #character-builds."
   These land better than a generic "Join the Discord" because they answer what the reader is
   doing at that moment. Needs the channels to exist.
5. **Playtest call.** The book is being written now, and that's a selling point. "Help test the
   book" (a Discord role plus early chapters for playtesters) gives a reason to join that only
   exists while the book is in progress.
6. **Faction cards as shareable links.** Once S4 ships, each corporation and power gets its own
   anchor and link preview, so the team can drop "meet Hyde Dynomat" into socials and Discord.
7. **Unblocked wishlist items.** The Archetype quiz can go ahead now that the archetype list has
   settled. The map page has its source (`1100_Places`). Pre-gens fold into idea 1.
