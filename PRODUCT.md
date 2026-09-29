# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: cold newcomers.** Tabletop RPG players who have never heard of Shadows, arriving
from a shared link, a stream, the subreddit, or Discord. They know what a TTRPG is but not
this one, and they're deciding in the first screen or two whether it's worth their evening.
Their job: work out what Shadows is, why it's different, and whether they want in.

**Secondary: the existing community.** Players, actual-play viewers, and Patreon followers
who use the site as a quick reference over the Core Rulebook (CRB) while it's still being
written. They're served by the same pages, but they don't come first when choices conflict
(confirmed by Ken, 2026-09-28).

## Product Purpose

Shadowsrpg.com is the public home of **Shadows**, a tabletop RPG by Get Dangerous Games, set
in NYTE City in 2099. It does two jobs:

1. **Sell the premise to a stranger**, fast.
2. **Work as a visual shorthand for the CRB**: a public preview and reference layer over the
   book's real content (The World, Archetypes, Power Levels, Stats & Skills, Advantages &
   Disadvantages, Equipment, Character Creation). It shows the book's content; it doesn't
   just talk about the book.

**Success, while the book isn't for sale yet** (confirmed 2026-09-28), is a visitor who does
one of these:

- follows on Patreon (free or paid),
- joins the Discord,
- builds a character in the live character sheet.

Watching actual play is proof that persuades them. It isn't itself a success goal.

## Positioning

Cyberpunk and the supernatural share one city, and the city pushes back. Vampires own the
nightclubs, werewolves clock in for security work, the Fae own K-pop, and NYTE City keeps
score. Everyone starts human: Professionals train until they can compete with monsters,
Cyborgs add tech that works like magic, Arcanists learn magic, and Vampires and Werewolves
were turned before the story starts. It runs on the studio's own **Synergy System** (d10),
refined over years of real play at the table.

Other games are not named in comparisons (decision D4, 2026-09-26). The approved line is:
"If you've ever wanted cyberpunk and urban fantasy at the same table, this is that game."

## Operating Context

- Visitors navigate Home → The World → Archetypes → through Rules Preview → Character
  Creation, which ends on "Build one right now" (see `content/messaging-plan.md`).
- The character sheet lives outside this repo at `charactersheet.shadowsrpg.com` (live app
  plus a printable blank sheet).
- Shadows updates are written on the studio blog (`getdangerous.net/blog/?tag=Shadows`) and
  embedded on `/news/`. This site keeps only its own changelog at `/changelog/`.
- Sister property: **Getdangerous.net** (repo `GetDangerousGames-Site`), the studio site.
  Separate codebases, but both must read as one brand visually and tonally.
- Content source of truth is the live CRB v4 manuscript (`.docx` chapters on Ken's
  OneDrive). The site follows the manuscript. When the book renames or changes something,
  the site changes to match.

## Capabilities and Constraints

- **Stack:** Jekyll, built natively by GitHub Pages (legacy build, no Gemfile, no Actions,
  no third-party plugins). Data files in `_data/` drive repeated content. Static only.
- **Rules altitude:** Rules Preview stays at flavor level. No verbatim mechanics, stat
  tables, dice formulas, or costs. It gives a feel for the Synergy System, never a ruleset
  someone could copy.
- **Status tags:** Rules Preview content carries Draft / In Progress / Final tags per page,
  set in `_data/rules.yml`, mirroring the manuscript's own "under construction" convention.
- **The CRB is in development**, with no release date, store, or crowdfunding plan set
  (confirmed 2026-09-28). Don't imply a timeline or a purchase path.
- **Setting year is 2099.** The old site's 2079 is stale.
- **Terminology:** NYTE City, the LINK (not "NET"), TAG, Çredits, Skrip, Aether, the Unseen
  Court, Houses. The canonical list is `_data/glossary.yml`.
- **Light and dark themes** share a token system with Getdangerous.net and the character
  sheet app.
- **Analytics:** GA4, currently with no consent banner. That's an open decision in
  `content/wishlist.md`.

## Brand Commitments

- **Two voices, used on purpose.** *In-world voice* (`brand/GUIDE_Shadows_Voice.md`: NYTE
  City speaking as itself, confident, no hedging, dry in-world humor only) on The World and
  on any manuscript excerpt or "In play" scene. *Site-copy voice* (`brand/THEME.md`: the
  studio speaking to the reader, gritty but hopeful, confident but never arrogant,
  player-first) everywhere else. The old site's "bucko"/"grasshopper" narrator voice is
  retired.
- **Visitor-facing copy never narrates the site's own production** (chapter numbering,
  "preview layer", unwritten sections).
- **Brand marks:** the Shadows skull/d10 mark and the GD Games logo mark (top-right nav,
  framing Shadows as part of the GD family).
- **Display font:** Cerulean Nights is the intended face but isn't licensed yet. It must not
  ship until Ken confirms the license. Audiowide is the agreed stand-in on both sites.
- **Art licensing:** only images cleared in `brand/asset-licensing.md` /
  `brand/shutterstock-catalog.md`. Dean Spencer art is licensed for the book only. Artur
  Sadlos art must not be carried forward. Old Google Sites images need Ken's sign-off one at
  a time.

## Evidence on Hand

- **Actual play:** four YouTube playlists (Shadows 2.0, World's Apart, The Old Regime, 13th
  Floor). Shadows 2.0 has 60-plus episodes.
- **The crew, named, with avatars:** Deighton "d33Kode" (creator, 25+ years behind the GM
  screen), Scott "Melf" (GM and technical writer, joined in 2019), Ken "Kaza" (site and
  systems).
- **Real CRB content:** manuscript text for the setting, Archetypes, Gear, and GM Workshop
  (the Missing Cargo job). Five real CRB book-spread screenshots are in
  `assets/img/crb-spreads/`.
- **A working product to try:** the live character sheet and blank sheet.
- **Community:** Discord, `r/shadowsRPG`, Patreon (`d33kode`), Twitch, X (`@Shadows_RPG`).
- **Absent, and not to be invented:** reviews, testimonials, press, sales or backer numbers,
  a release date, pricing, awards, player counts.

## Product Principles

1. **Hook before system.** Lead with the city and who you can be. Mechanics come after the
   visitor cares.
2. **Show the book, don't describe it.** Real manuscript text, real spreads, and in-world
   scenes beat marketing claims about them.
3. **Flavor, never a copyable ruleset.** Rules Preview gives a feel for play without giving
   the game away.
4. **Every page points somewhere real.** Each page should hand the visitor to Patreon,
   Discord, the character sheet, or the next step on the path, never a dead end.
5. **The manuscript is the source of truth.** When the book changes, the site follows it.
   Stale or invented facts are bugs.

## Accessibility & Inclusion

No formal standard is mandated. The working target is **WCAG 2.2 AA** (set 2026-09-28): AA
contrast in both themes, visible focus, 24px minimum tap targets, and respect for
`prefers-reduced-motion`. That covers what the site already does.
