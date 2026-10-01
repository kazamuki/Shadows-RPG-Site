---
name: Shadows RPG
description: The public home of Shadows, a tabletop RPG set in NYTE City, 2099. A rulebook lit from below.
colors:
  aether-pulse: "#712B8C"
  deep-circuit: "#203F7B"
  neutral-zone: "#E7E7E7"
  neon-veil: "#BC489A"
  magenta-text: "#DB7DBE"
  midnight: "#0D1731"
  signal-gold: "#F2C94C"
  static-cyan: "#1BBBC4"
  ghostly-green: "#71C388"
  text-light: "#FFFFFF"
  text-dark: "#111111"
  ink: "#1A1714"
  card-navy: "#16294F"
  page-light: "#F3EFE6"
  card-light: "#FBF8F1"
  header-dark: "rgba(13, 23, 49, 0.88)"
  header-light: "rgba(243, 239, 230, 0.9)"
  card-border-dark: "rgba(32, 63, 123, 0.45)"
  card-border-light: "rgba(32, 63, 123, 0.2)"
  card-border-hover-dark: "rgba(27, 187, 196, 0.55)"
  card-border-hover-light: "rgba(32, 63, 123, 0.55)"
  text-secondary-dark: "rgba(255, 255, 255, 0.8)"
  text-secondary-light: "rgba(26, 23, 20, 0.8)"
  text-tertiary-dark: "rgba(255, 255, 255, 0.55)"
  text-tertiary-light: "rgba(26, 23, 20, 0.6)"
typography:
  display:
    fontFamily: "Audiowide, Inter, sans-serif"
    fontSize: "clamp(3rem, 9vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.15
  headline:
    fontFamily: "Audiowide, Inter, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Audiowide, Inter, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.3rem)"
    fontWeight: 400
    lineHeight: 1.15
  subtitle:
    fontFamily: "Audiowide, Inter, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.6
  label:
    fontFamily: "Roboto Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "10px"
  pill: "999px"
spacing:
  gutter-phone: "1rem"
  gutter: "1.5rem"
  card: "1.75rem"
  section-phone: "2.5rem"
  section: "3.5rem"
  content-max: "72rem"
  reading-max: "40rem"
components:
  button-primary:
    backgroundColor: "{colors.aether-pulse}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.sm}"
    padding: "0.8em 1.6em"
    typography: "{typography.body-strong}"
  button-primary-hover:
    backgroundColor: "{colors.neon-veil}"
    textColor: "{colors.text-light}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary-dark}"
    rounded: "{rounded.sm}"
    padding: "0.8em 1.6em"
  button-ghost-hover:
    textColor: "{colors.static-cyan}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-light}"
    rounded: "{rounded.sm}"
    padding: "0.8em 1.6em"
  card:
    backgroundColor: "{colors.card-navy}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  callout-strip:
    backgroundColor: "{colors.deep-circuit}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.xl}"
    padding: "2rem"
  status-tag:
    backgroundColor: "transparent"
    textColor: "{colors.signal-gold}"
    rounded: "{rounded.pill}"
    padding: "0.25em 0.7em"
    typography: "{typography.label}"
  chip:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.text-secondary-dark}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.9em"
  nav-bar:
    backgroundColor: "{colors.header-dark}"
    textColor: "{colors.text-secondary-dark}"
    padding: "0.85rem 1.5rem"
  button-header:
    backgroundColor: "transparent"
    textColor: "{colors.static-cyan}"
    rounded: "{rounded.sm}"
    padding: "0.4em 0.9em"
    typography: "{typography.body-strong}"
  button-header-hover:
    backgroundColor: "{colors.static-cyan}"
    textColor: "{colors.midnight}"
  next-step-bar:
    backgroundColor: "{colors.card-navy}"
    textColor: "{colors.text-secondary-dark}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.25rem"
  stat-block:
    backgroundColor: "{colors.card-navy}"
    textColor: "{colors.text-secondary-dark}"
    rounded: "{rounded.lg}"
    padding: "1.15rem 1.25rem 1.25rem"
---

# Design System: Shadows RPG

## Overview

**Creative North Star: "The Neon Codex"**

Shadowsrpg.com is a rulebook lit from below. The ground is Midnight Underpass navy, dark enough
to feel like the city at 2am. The reading happens on it in plain, well-set Inter at a
comfortable measure. Neon arrives only where the book itself would put a light: the display
title glowing magenta and violet, a gold headline, a cyan data line, a skull-and-d10 mark
tracing its own edge. Everything else is quiet on purpose, so that when something glows it
means something.

The system has three registers of type, and each one maps to a voice. **Audiowide**, standing
in for the unlicensed Cerulean Nights, is the city's signage: titles, section heads, glossary
terms, archetype names. **Inter** is the page, used for everything read at length.
**Roboto Mono** is the HUD: status tags, breadcrumbs, dates, pager labels, group labels, and
tables. Mono text is small, uppercase and tracked, the way a readout reads. Density is
moderate. Wide sections hold grids of cards, and prose pages narrow to a 40rem reading column.

Surfaces are flat and bordered: navy cards with 1px Deep Circuit edges that brighten to cyan
on hover. There are two fixed-dark exceptions that ignore the theme toggle: photo bands (the
Home hero and The World's banner) and solid brand fills (the callout strip and the glyph
panels on image-less rules cards). Light mode is a complete, equal theme, set as a printed rulebook: a warm cream page, ink-black
type, and cards that rest on it like loose sheets. It keeps the navy-and-violet identity by
moving accent duty onto Deep Circuit and Aether Pulse.

This is not a generic SaaS landing page: no gradient blobs, glassmorphism cards, or
stock-icon feature grids. It is not fantasy parchment either: no aged or stained paper, blackletter or
scroll ornaments. Light mode's paper is a clean modern printing stock with a barely-there
grain, not a prop. The supernatural half of the setting shows through violet and magenta
light, not medieval props.

**Key Characteristics:**
- Dark navy ground by default, with a full warm-light "rulebook on paper" theme through semantic tokens.
- A mono ledger readout that records what the city wrote down; flavor only, never numbers.
- Three type voices: Audiowide signage, Inter reading, Roboto Mono HUD.
- Flat, bordered surfaces in dark mode (soft paper shadows in light). Glow lives on type and marks, never under cards.
- Gold for headlines, cyan for sub-heads and links, magenta and violet for action and emphasis.
- Fixed-dark photo bands and brand fills that don't change with the theme.
- A 40rem reading column for prose, 72rem for grids.

## Colors

A night palette of navy and violet, with three small, hot accents (gold, cyan, green) used
like indicator lights on a dark console.

### Primary
- **Aether Pulse** (`aether-pulse`): saturated violet, unstable magic. Fills the primary
  button, forms the start of the glyph-panel gradient, and edges manuscript excerpts. In light
  mode it takes over the gold and magenta accent roles, so headlines and "Draft" tags stay
  legible.
- **Deep Circuit** (`deep-circuit`): tech blue, machine architecture. Fills the callout strip
  and the step-number badges, and borders cards (at 45% in dark, 22% in light). In light mode it takes over the cyan and green accent roles.

### Secondary
- **Neon Veil** (`neon-veil`): sharp nightclub magenta. The primary button's hover fill, the
  pull-line rule, the short rule before the "In play" label, and the magenta half of every display
  glow. It is only 3.1:1 on Card Navy, so small magenta **text** on cards uses Neon Veil Text
  instead.
- **Neon Veil Text** (`magenta-text`, `--accent-magenta-text`): a lighter tint of Neon Veil
  (5.25:1 on Card Navy) for small magenta type on cards: About's "Site & Systems" role label and
  the roster's supernatural group labels. Site-specific, outside the shared three-repo token
  set, and it folds into Aether Pulse in light mode.
- **Signal Gold** (`signal-gold`): warm, aether-touched gold. Every H2 in dark mode, the
  hover color for nav, footer and chip links, archetype hook lines, the "In Progress" tag,
  and the skip link's fill.

### Tertiary
- **Static Cyan** (`static-cyan`): the HUD ping. H3s, body links, the focus ring, card hover
  borders, dates, glossary terms, and the dotted underline on first-use glossary links.
- **Ghostly Green** (`ghostly-green`): the bio-monitor. Link hover and the "Final" status tag.
  Used the least of the three accents.

### Neutral
- **Midnight Underpass** (`midnight`): the dark-mode page ground, and the base of every
  photo-band scrim.
- **Card Navy** (`card-navy`): the dark-mode card fill, one step up from the ground.
- **Bone Paper** (`page-light`): the light-mode page ground, a warm printed cream, never pure
  white. Carries a fixed 5% SVG-noise grain.
- **Card Sheet** (`card-light`): the light-mode card fill, a lighter cream that sits just above
  Bone Paper like a loose sheet.
- **Neutral Zone** (`neutral-zone`): sun-bleached bone. Used only as the hover color for
  links inside the callout strip.
- **Text ladder**: pure white or Ink (`ink`, a warm near-black) for primary text, then about 80%,
  55% and 28% opacity steps for secondary, tertiary and faint text in each theme.
  Translucent header bars (`header-dark`, `header-light`) sit at 88% over an 8px blur.

### Named Rules
**The Indicator Light Rule.** Gold, cyan and green are indicator lights, not paint. They color
type, borders, tags and icons, and never fill a surface. Balance target per page: about 60%
ground, 25% primary, 10% secondary, 5% accent.

**The Semantic Token Rule.** Anything that paints on the page background uses a semantic token
(`--text-*`, `--card-*`, `--accent-*`, `--border-*`), never a raw brand constant. Cyan, gold,
green and Neon Veil text all fail WCAG contrast on Bone Paper. The tokens swap them for Deep
Circuit or Aether Pulse; a raw constant won't.

**The Fixed-Dark Rule.** Any surface that stays dark in both themes (photo bands, the callout
strip, glyph panels, the game modal) uses fixed colors: `--text-light`, literal
`rgba(255,255,255,x)`, and the raw `--static-cyan` or `--signal-gold`. Theme-tracked tokens
there go invisible in light mode. This has already caused two real bugs.

## Typography

**Display Font:** Audiowide (with Inter, sans-serif). A stand-in for Cerulean Nights, which
must not ship until Ken confirms its license.
**Body Font:** Inter (with system-ui, sans-serif). Loaded weights: 300, 400, 600 and 700, plus
italic 400.
**Label/Mono Font:** Roboto Mono (with ui-monospace, monospace). Loaded weights: 400 and 700.

**Character:** A wide, rounded techno face for the city's signs, over a neutral grotesque
built for reading, with a mono face for anything that reads like a machine. The contrast in
character between Audiowide and Inter carries the hierarchy, more than size does.

### Hierarchy
- **Display** (Audiowide, `clamp(3rem, 9vw, 5.5rem)`, 1.15): the Home hero title only. White,
  with a triple glow (Neon Veil, then Aether Pulse, then a dark drop).
- **Headline** (Audiowide, `clamp(2.2rem, 5vw, 3.4rem)`, 1.15): page H1s. Inherits text
  color. The World's banner H1 gets the same glow as the display title.
- **Title** (Audiowide, `clamp(1.6rem, 3.4vw, 2.3rem)`, 1.15): H2 section heads, in gold
  (`--accent-gold`). Inside Rules Preview they get a subtle bottom rule.
- **Subtitle** (Audiowide, 1.3rem): H3s, in cyan (`--accent-cyan`). On cards and archetype
  blocks they switch to the primary text color.
- **Body** (Inter 400, 1rem, 1.6): all reading text. The Home pitch, hero lead and archetype roster names use the Lead step (`--fs-lead`, 1.125rem), and
  pull-lines at 1.3rem / 600 / 1.4. Prose measures 40rem (about 70 characters).
- **Small** (Inter, `--fs-small`, 0.95rem): nav links, card blurbs, table text, footer links.
- **Label** (Roboto Mono, `--fs-label`, 0.75rem, 0.05em tracking, uppercase): status tags, breadcrumbs,
  pager labels, archetype group labels, crew roles, news dates, and the voice note.

Audiowide ships in a single weight (400), and headings are set to 400 so browsers never
synthesize a faux bold. The only sizes off this ramp are decorative: the 3.4rem and 2.6rem
glyphs on image-less cards, the 1.8rem modal close, and the fluid lead pull-line.

### Named Rules
**The Mixed-Case Signage Rule.** Display type is never set in all caps. The brand guide
forbids it for Cerulean Nights, and the stand-in follows the same rule so the swap is
seamless. Uppercase belongs only to the small mono labels.

**The Three Voices Rule.** Audiowide names things, Inter explains them, Roboto Mono reports
state. Don't set body copy in Audiowide or headings in mono.

## Layout

The layout uses one centered column system. Wide sections cap at 72rem (`content-max`) with
1.5rem side gutters, or 1rem under 640px. Prose-heavy pages (The World, every Rules Preview
sub-page, News, and About's solo card) narrow to a 40rem reading column (`.section--reading`),
which keeps lines near 70 characters. Section intros center at 42rem. Vertical rhythm is
section-based: 3.5rem of section padding (2.5rem on phones), about 2.5rem between Rules
subsections, and 1.25–2rem grid gaps.

Grids use `auto-fit, minmax(260px, 1fr)` by default. Where a count is known, the grid is fixed
to avoid a single orphaned card: Home's Rules grid is 3×2, then 2-up under 860px, and the four
playlists go 4-up, then 2×2 under 1000px, then stacked under 560px. Lists that hold uneven text
(the archetype roster, the glossary, the gear manifest, the balance sheet) are ruled rows, not
cards. Two-column readouts inside the reading column (the stat block, the balance sheet, the gear
manifest) drop to one column under 640px.

One element may break out of the reading column on purpose: Home's pitch pair, two painted
panels at `min(56rem, 100vw - 2rem)` centered over the 40rem copy, stacking under 560px.

The header is sticky and full-bleed. Its content is capped at 72rem. At 720px and below, the
brand and actions share row one and the five nav links spread across row two, so the header
stays about 95px tall. Under 480px the header button shortens to "Sheet" and the gaps tighten so
brand and actions keep one row. Anchors land clear of the header thanks to 5rem of
`scroll-padding-top`. Breakpoints in use: 1000, 860, 720, 640, 560 and 480px.

## Elevation & Depth

Dark mode is flat. No surface casts a box-shadow: depth comes from tone (Card Navy one step
above the Midnight ground) and a 1px border that brightens from Deep Circuit to cyan on hover.
Light mode is the same structure with one addition: cards, play scenes, the stat block and roster rows rest on
the paper with a soft offset shadow, because a sheet on a desk casts one. The only other
layered surfaces are the translucent sticky header (88-90% opacity, 8px backdrop blur), the
85% black backdrop behind the game modal and the spread lightbox, and the glossary tooltip.

### Shadow Vocabulary
- **Paper shadow** (`box-shadow: 0 1px 2px rgba(26,23,20,0.08), 0 6px 16px -8px rgba(26,23,20,0.18)`):
  light mode only, on `.feature-card`, `.rules-card`, `.play-scene`, `.stat-block` and roster rows. Soft,
  offset, ink-tinted. Never in dark mode.

### Glow Vocabulary
Glow represents light in the fiction: neon or aether. It is not an elevation effect.
- **Title glow** (`text-shadow: 0 0 12px rgba(188,72,154,0.8), 0 0 40px rgba(113,43,140,0.7), 0 2px 4px rgba(0,0,0,0.6)`):
  the hero title and The World's banner H1 only.
- **Glyph glow** (`text-shadow: 0 0 10px rgba(188,72,154,0.9), 0 0 28px rgba(27,187,196,0.45)`):
  glyphs on the rules-card art panels. It intensifies on card hover.
- **Mark trace** (`filter: drop-shadow(0 0 1px rgba(255,255,255,0.75)) drop-shadow(0 0 6px rgba(188,72,154,0.6))`):
  the skull/d10 nav mark in dark mode, so the black-ink mark reads without being recolored.

### Named Rules
**The Glow Is Light Rule.** Glow only ever appears on display type, glyphs and brand marks, as
magenta, violet or cyan light. It never appears as a box-shadow under a card, button or panel.

**The Sheet Not Scroll Rule.** Light mode's depth is a paper shadow and a fine grain, nothing
more: no texture images, stains, curled edges or aged tones. It should read as a printed book
page, not a fantasy prop.

## Shapes

Corners are gently rounded and consistent. Buttons use 4px (`rounded.sm`). Cards, pager links,
play scenes and archetype blocks use 8px (`rounded.lg`), with 6px on images inside cards. The
callout strip uses 10px. Chips and status tags are full pills (`rounded.pill`), and avatars,
step badges and the theme toggle are circles. Borders are 1px hairlines everywhere, except where
a 3px left rule marks a voice beside bare text (never on a card): Aether Pulse for manuscript
excerpts and Neon Veil for pull-lines. Card images crop with `object-fit: cover` from the top, so book
spreads show their headline art.

### Named Rules
**The Ruled Page Rule.** A 3px double rule (`--border-visible`) marks the top of a ruled
record, like a printed form: the header in light mode, the derived Attributes block, and the
balance sheet. Everything inside it is divided by 1px hairlines, never boxed again.

## Components

### Buttons
Blunt and confident: bold Inter, a small 4px radius, no icons, no shadow.
- **Shape:** slightly rounded (4px), padded `0.8em 1.6em`, Inter 700.
- **Primary:** Aether Pulse fill with white text, and a Neon Veil fill on hover. Fixed colors
  in both themes. Reserved for the single main action in a group.
- **Ghost:** transparent, with fixed 80% white text and a fixed 55% white border (a Deep
  Circuit border disappeared on the callout strip's Deep Circuit fill). On hover the
  border and text turn Static Cyan. **Only on fixed-dark surfaces** (hero, callout strip).
- **Outline:** the theme-tracked sibling of Ghost for the page background: primary text color
  and a card-hover border, turning to `--accent-cyan` on hover.
- **Header:** the "Character Sheet" link in the nav bar. A small outline in `--accent-cyan`
  (1px border, 4px radius, `0.4em 0.9em`, Inter 700 at 0.95rem) that fills cyan with page-colored
  text on hover. An outline, not a fill, so the hero's primary button stays the loudest thing on
  Home. Theme-tracked.
- **Focus:** the global 2px cyan `:focus-visible` ring at a 3px offset.

### Chips and Status Tags
- **Jump chips** (Archetypes' in-page nav): pill, a 6% white fill with a 12% border, and
  secondary text at 0.85rem / 600. Text and border go gold on hover.
- **Status tags** (Draft / In Progress / Final): outlined pill in `currentColor`, uppercase
  Roboto Mono at 0.7rem. Draft is magenta, In Progress gold, Final green (each through its
  `--accent-*` token). The status value comes from `_data/rules.yml`, never the page.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** `--card-bg` (Card Navy in dark mode, Card Sheet in light).
- **Shadow Strategy:** none in dark mode; the paper shadow in light mode. See Elevation & Depth.
- **Border:** 1px `--card-border`, turning to `--card-border-hover` on hover (linked cards only).
- **Internal Padding:** 1.75rem, or 1.35rem on phones. Rules cards pad `1.25rem 1.5rem 1.5rem`
  under a 160px image (120px on Home's compact grid).

### Callout Strip
A solid Deep Circuit panel with 10px corners, 2rem padding, and centered white type. It carries
closing calls to action (Patreon, Discord, the character sheet). It is fixed-dark: ghost
buttons inside it and gold plain links (Neutral Zone on hover).

### Navigation
A sticky translucent bar with a hairline bottom border (a 3px double rule in light mode, like a ruled page). The left side holds the skull/d10 mark
(30×34) and the "Shadows RPG" wordmark in Audiowide 1.4rem. Nav links are Inter 600 at 0.95rem
in secondary text, turning gold on hover. The current page is gold with a 2px underline, so it
doesn't rely on color alone. The right side holds the GD Games mark (34px, 85% opacity) and a
circular theme toggle, led by the header button (see Buttons). On phones, the links move to
their own full-width row, spread evenly.

### Rules Card Art Panel (signature)
Rules cards without an image get a 160px fixed-dark panel instead: faint 4px scanlines, a
magenta radial bloom at the top right, and a 135° gradient from Aether Pulse through Deep
Circuit to Midnight. A short Audiowide glyph sits centered in white with the glyph glow ("IV"
for Power Levels, "Ç" for Equipment). This is the fallback until real cleared art exists.

### Voice Markers (signature)
Three treatments mark whose voice a passage is in:
- **Manuscript excerpt:** a 3px Aether Pulse left rule, italic, secondary text. Quoted CRB
  text.
- **Pull-line:** a 3px Neon Veil left rule, Inter 600 at 1.3rem. The manuscript's standalone
  one-line beats.
- **"In play" scene:** a plain card (1px border all round, no colored edge) headed by an
  "In play" label in the HUD voice: uppercase Roboto Mono in secondary text, led by a short
  2px magenta rule. The magenta stays on the rule because Neon Veil text on Card Navy is only
  3.1:1. Site-written example-of-play scenes in the in-world voice, kept visibly
  separate from quoted book text.

### Ledger (signature)
The "city keeps score" motif: a mono readout of what a scene or a bad night left on the books.
A `.ledger-title` in the HUD voice ("Ledger · one bad night", led by the same 1.5rem magenta
rule as the "In play" label) over a `<dl>` between 1px hairlines. Each row is an account (Roboto
Mono, secondary text) and an entry (primary text, right-aligned) joined by a dotted leader. Under
480px each row stacks. It sits in prose, never in a card of its own, and states consequences in
words only: **no numbers, no mechanics**, so it can't read as a ruleset. Used on Home's pitch
and closing each "In play" scene.

### Next-step Bar and Rules Pager
The closing block of every Rules page. The **next-step bar** is one wide link on a card surface
(8px, `1rem 1.25rem`): a mono status line ("Character sheet · live") led by a 0.5rem green dot,
a line of secondary text, and a bold cyan action that turns green on hover. The dot is a literal
indicator light. The **pager** sits 1.5rem under it: previous and next as 8px card links (mono
direction label in tertiary text over an Inter 600 title), with a centered cyan hub link and a
mono "n of 6" count between them. Under 560px the hub drops to its own row.

### Spread Lightbox and Glossary Tooltip
- **Spread lightbox:** a CRB spread inside a button with a fixed-dark mono pill ("Read the book
  page") in its lower-left corner, Aether Pulse on hover. It opens a native `<dialog>` on
  Midnight with a cyan-hover border and an 85% black backdrop; the close button is
  fixed-dark like a ghost button.
- **Glossary tooltip:** a small bubble (max 18rem, 6px corners, a 1px cyan-hover border) on the
  page background color, showing a term's short definition over a mono cyan "Glossary entry →"
  line. Hover or focus opens it; on touch, the first tap does. It has no shadow, even in light mode.

### Rules page signatures
Each long Rules page has one shape of its own, so the six don't read as the same stack of cards:
- **Power Levels:** the widening ladder (`.power-ladder`).
- **Stats & Skills:** a **stat block** (`.stat-block`), one bordered panel split by 1px
  `--border-visible` hairlines into cells, like the character sheet. Each cell has the stat icon,
  the Audiowide abbreviation, a mono full name and a short line in secondary text. Two across,
  one under 640px. The derived Attributes use it three across under a 3px double top rule.
- **Advantages & Disadvantages:** a **balance sheet** (`.balance-sheet`): two ruled columns
  under a double rule, "Earned" (cyan lead rule) and "Carried" (magenta), with Audiowide names
  over secondary text. Stacks under 640px.
- **Equipment:** the pay table's income cells carry a magenta bar at their share of the top
  bracket (`td.income`, `--share`), and the gear is a ruled **manifest** (`.gear-manifest`):
  name and a mono list of what it includes on the left, the description on the right.

### Archetype Roster and Glossary Rows
Ruled lists, not cards. Roster rows are a three-column grid: a painted thumbnail (8rem, 1px
card border, slightly desaturated until the row is hovered or focused), the Audiowide name over
a mono group label, then the italic gold hook. A 1rem magenta rule leads each name and draws
out to nearly double on hover (`transform: scaleX`, 0.25s, an exponential ease-out), the
only authored motion on the site. Supernatural rows color their group label with Neon Veil Text.
Rows fill with the card color on hover, and the name turns cyan. Under 560px the thumbnail
shrinks to 4.5rem and the hook moves under the name. Glossary terms are Audiowide in cyan over secondary-text definitions, and the targeted
entry turns gold. First-use glossary links read as prose, with inherited color and a dotted
cyan underline.

## Do's and Don'ts

### Do:
- **Do** route every on-page color through the semantic tokens (`--text-*`, `--card-*`,
  `--accent-*`, `--border-*`) so both themes stay legible.
- **Do** use fixed colors (`--text-light`, the raw `--static-cyan` / `--signal-gold`, literal
  white rgba) on anything that stays dark in both themes: photo bands, the callout strip,
  glyph panels, the modal.
- **Do** keep prose inside the 40rem reading column, and fix grid counts so a known number of
  cards never leaves one orphaned.
- **Do** reserve glow for display type, glyphs and brand marks, in magenta, violet or cyan.
- **Do** mark voice changes with the existing treatments: a violet left rule for excerpts, a
  magenta left rule for pull-lines, and the mono "In play" label for scenes.
- **Do** close new "In play" scenes with a ledger (words only, never numbers).
- **Do** give a long Rules page one shape of its own (ladder, stat block, balance sheet,
  manifest) instead of another stack of same-size cards.
- **Do** use Neon Veil Text, not Neon Veil, for small magenta type on a card.
- **Do** check every new component in both themes, and keep tap targets at 24px or more
  (footer social icons sit in 36px boxes).

### Don't:
- **Don't** build it like a generic SaaS landing page: no gradient blobs, glassmorphism
  cards, or stock-icon feature grids.
- **Don't** reach for fantasy parchment: no aged or stained paper, blackletter, or scroll and
  flourish ornaments. Light mode's clean 5% grain is the ceiling.
- **Don't** put a box-shadow under a card, button or panel in dark mode, and in light mode use only the paper shadow. Dark depth is tone plus a 1px border.
- **Don't** fill surfaces with gold, cyan or green. They're indicator lights for type,
  borders and tags.
- **Don't** set display type in all caps, or ship Cerulean Nights before its license is
  confirmed.
- **Don't** put a thick colored edge on a card. Left rules belong beside bare quoted text only.
- **Don't** use `.btn--ghost` on the page background. Use `.btn--outline` there.
- **Don't** put a raw brand constant (`--static-cyan`, `--signal-gold`, `--neon-veil`) on
  text over the page background. It fails contrast in light mode.
