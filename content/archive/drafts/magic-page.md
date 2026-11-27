# Magic: S3 copy draft

Draft for `content/crb-sync-plan.md` S3 (2026-10-10). Needs Ken's approval before anything goes
into HTML. Source: `0480_Magic.md` and `0411_Arcanist.md` in the private mirror (`cea99a8`).

**Ground rules, same as every Rules page:**

- **Flavor and gists, never a ruleset.** No Target Numbers, Thresholds, tier tables, costs or
  recovery times. Mechanics are named only with words a player would hear at the table
  (Tolerance, Exhaustion, overreach).
- **Two voices, kept visibly apart.** Site voice for the wrapper (the studio talking to the
  reader). Verbatim CRB lines go in `.manuscript-excerpt` / `.pull-line`. The "In play" scene
  is new writing in the in-world voice, so it's labelled "In play" and is not quoted as the book.
- Blocks marked **[CRB]** are verbatim from the mirror; everything else is new.

---

## Decisions for Ken

- **M1. Where it goes in the reading order.** Recommended: right after Archetypes (the Arcanist is
  the last thing a reader sees before the pager). Order becomes Archetypes → **Magic** → Power
  Levels → Stats & Skills → Advantages & Disadvantages → Equipment → Character Creation (7 pages).
- **M2. Status tag.** Recommended: **In Progress**. The chapter is substantially written and the
  character sheet already runs it; the Arcanist chapter itself is still marked "under
  construction", which the Archetypes page already shows with a Draft pill.
- **M3. Card image.** Recommended: Shutterstock `February 2023/1068257321` (a figure walking into
  glowing rune circles on scorched ground). It's in the licensed catalog, unused, and literally
  shows glyph-work. Fallback: a glyph panel like Power Levels ("IV") and Equipment ("Ç").
- **M4. Glossary.** Recommended: add **Glyph**, **Grimoire** and **Resonance**, and point the
  existing **Aether** entry at the new page instead of the Arcanist section.
- **M5. Who can cast.** The book says the capacity is in everyone and Arcanists are the ones who
  made it their trade ("a fixer with one reliable trick… all of them are casting"). The draft
  says so in one line. Cut it if the team would rather keep magic Arcanist-only on the site.

---

## Front matter

- **title:** Magic
- **description:** Aether, the three disciplines, and what every spell costs the person who
  casts it in NYTE City.
- **`_data/rules.yml` blurb:** The Aether, the three ways to shape it, and the bill that comes
  with every spell.

## Page header (site voice)

> # Magic
>
> Magic in Shadows is real, it's powerful, and it's paid for in the caster's own body. Here's
> what the Aether is, the three ways people learn to shape it, and what happens when they
> reach for more than they can hold.

## Opening excerpt [CRB, `0480` Introduction]

> That force is the Aether. It infuses everything — living bodies, inert objects, the air
> between buildings at 3am. For those attuned to it, reality becomes negotiable. Like all
> negotiations, however, nothing comes freely.
>
> Magic in NYTE City is not a gift. What it costs, and how much of that cost you can bear, is a
> question everyone who reaches for the Aether must answer eventually.

## Section: Who casts

> Every person in NYTE City carries some spark of the Aether. Almost nobody develops it.
> Arcanists are the ones who made it their study and their trade, but they aren't the only
> people casting: a fixer with one reliable trick or a medic who learned to close a wound the
> fast way is working the same force, whatever they'd call it.
>
> Casting takes a voice. Not volume, but sound: gag an Arcanist, drop them underwater, or
> silence the room, and the Aether doesn't answer.

*(Gist of `0480` Potential Energy and "Casting is audible". M5 governs the first paragraph.)*

## Section: The three disciplines

Signature shape: a three-step ruled progression (like the Power Levels ladder, but three rungs
with a mono readout of *when* the work happens). Each row: name, readout, two sentences.

> **Evocation** · *in the moment*
> Aether shaped live, under pressure, into whatever the moment needs. The fastest magic there
> is, and the most dangerous: in the right hands it turns a fight, and in the wrong ones it turns
> on the caster.
>
> **Enchantment** · *before the job*
> Spells worked into objects ahead of time, carried as Talismans until someone releases them.
> A Talisman doesn't care who holds it, which makes an Enchanter the one person who can make the
> whole crew a little harder to kill.
>
> **Alchemy** · *for keeps*
> Days of ritual and rare materials, for an Artifact where the magic isn't stored in the object.
> It's a property of the object now: a vest that closes its own holes, a sidearm that has never
> jammed and never will.

Then the book's own line as a pull-line **[CRB]**:

> The Aether does not skip steps.

*(Evocation comes first, then Enchantment, then Alchemy; the pull-line carries that without a
rule sentence.)*

## Section: Five Domains

Lead-in (site voice):

> Spells are built from Glyphs, each one a shaped idea the Aether responds to, and Glyphs fall
> into five Domains. Chain more of them together and the spell does more, and gets harder to
> hold.

Then a five-row list, Domain name + its Glyphs as a mono line + one line of flavor:

> **Elements** — Fire · Lightning · Water · Air · Earth
> Raw force: heat, current, pressure, impact. The most legible magic to cast, and the most
> legible to see coming.
>
> **Force** — Shockwave · Gravity · Barrier · Telekinesis · Distortion
> Moving things, or stopping them. Leverage, and in NYTE City leverage is worth more than
> firepower most nights.
>
> **Matter** — Stone · Metal · Wood · Glass · Flesh
> What things are made of, and changing it. Healing lives here, if the person inside the flesh
> cooperates.
>
> **Mind** — Fear · Compulsion · Illusion · Insight · Memory
> Belief, perception and memory. It leaves no physical trace, but the target almost always knows
> something happened.
>
> **Soul** — Decay · Wrath · Vitality · Spirit · Binding
> The force that animates living things. It's the Domain that makes people uncomfortable, which
> is usually a sign that it works.

*(Glyph names are flavor vocabulary, not mechanics. The last Soul line is close to the book's
"Soul is the Domain that makes people uncomfortable, which is usually a sign that it works.")*

## Section: What it costs

> Every caster has a limit, and it's called **Tolerance**. It isn't health. It's how much
> Aether the body can take being forced through it before it stops cooperating.
>
> Reach for more than you can shape and the spell overreaches: the Aether collapses back
> through you, and Tolerance pays for it. Run out and you're **Exhausted**, unable to cast until
> you've rested. Push past empty and it gets worse. The Aether that couldn't be absorbed breaks
> through instead, and what it leaves behind doesn't always heal.
>
> Get it right, and the Aether you pulled through doesn't go to waste: a spell that lands with
> room to spare does more than it was asked to.

*(Rupture → "overreaches", Cascade described without the name, Overflow as the last paragraph.
All three are gists; no costs, no tables.)*

## Section: The Aether leaves marks

> Magic doesn't clean up after itself. A spell leaves **Resonance** behind, on the caster and
> in the place it was cast: scorch patterns no torch makes, a thread of something hanging in the
> air. Anyone who knows how to look can read it.
>
> Arcanists keep their spells in a **grimoire**, and it has to be written by hand, because a
> photo of a Glyph is just a photo.

Pull-line **[CRB, `0480` Grimoires]**:

> In a city that keeps everything and forgets nothing, Arcanists carry paper.

## In play: "Signature" (in-world voice, new writing)

**Placement:** after "The Aether leaves marks", before the next-step bar. Uses the same
**Missing Cargo** job as the other three scenes (the van, the Red Hands, Doc Malin). Sable is a
new, site-only character.

> The back of the van is welded shut, and the Red Hands are two blocks out. Sable doesn't have a
> torch. She has a voice, and three Glyphs she's never chained together: Fire, Metal, Force.
>
> She says them anyway. The weld runs like candle wax and the door swings wide. Then the Aether
> keeps coming, more than the door needed, more than she can hold, and it goes back through her
> the only way it can. Her nose bleeds. Her hands won't stop shaking. She's done casting until
> she's slept.
>
> The crew gets the cargo. That's the spell. Here's the rest of it: the alley still hums. There's
> a scorch pattern on the asphalt that no cutting torch leaves, and a thread in the air that
> anyone who knows how to look can read for days. Doc Malin knows someone who knows how to look.

Ledger (same component as the other scenes, flavor only):

> **Ledger · Sable**
> The weld ........................ gone
> Her Tolerance ................. spent
> The alley ........................ still humming
> Someone ......................... already reading it

Truth line:

> The Aether answered. It also signed its work.

*(Voice notes: assertive present tense, fiction first, the cost shown in the body rather than
explained, and the consequence arrives through the city's memory, matching "The fence" and
"Paid in full". No numbers. The one mechanical word, Tolerance, was introduced on the page above.)*

## Closing

Standard `next-step.html` "sheet" bar, then the pager. No new closing copy.

## Elsewhere, if approved

- Archetypes page, Arcanist block: add "More on how magic works →" linking to `/rules/magic/`.
- Rules hub intro: "who you can become in NYTE City, **how magic works**, how big a game can
  get…".
- Changelog entry, CLAUDE.md Build status, plan tick.
