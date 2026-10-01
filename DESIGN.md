---
name: Shadows RPG
description: The public home of Shadows, a tabletop RPG set in NYTE City, 2099. A rulebook lit from below.
colors:
  aether-pulse: "#712B8C"
  deep-circuit: "#203F7B"
  neutral-zone: "#E7E7E7"
  neon-veil: "#BC489A"
  midnight: "#0D1731"
  signal-gold: "#F2C94C"
  static-cyan: "#1BBBC4"
  ghostly-green: "#71C388"
  text-light: "#FFFFFF"
  text-dark: "#111111"
  card-navy: "#16294F"
  page-light: "#F5F4F2"
  card-light: "#FFFFFF"
  header-dark: "rgba(13, 23, 49, 0.88)"
  header-light: "rgba(245, 244, 242, 0.88)"
  card-border-dark: "rgba(32, 63, 123, 0.45)"
  card-border-light: "rgba(32, 63, 123, 0.22)"
  card-border-hover-dark: "rgba(27, 187, 196, 0.55)"
  card-border-hover-light: "rgba(32, 63, 123, 0.55)"
  text-secondary-dark: "rgba(255, 255, 255, 0.8)"
  text-secondary-light: "rgba(17, 17, 17, 0.78)"
  text-tertiary-dark: "rgba(255, 255, 255, 0.55)"
  text-tertiary-light: "rgba(17, 17, 17, 0.58)"
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
  reading-max: "48rem"
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
moderate. Wide sections hold grids of cards, and prose pages narrow to a 48rem reading column.

Surfaces are flat and bordered: navy cards with 1px Deep Circuit edges that brighten to cyan
on hover. There are two fixed-dark exceptions that ignore the theme toggle: photo bands (the
Home hero and The World's banner) and solid brand fills (the callout strip and the glyph
panels on image-less rules cards). Light mode is a complete, equal theme on a warm off-white
ground, not an afterthought. It keeps the navy-and-violet identity by moving accent duty onto
Deep Circuit and Aether Pulse.

This is not a generic SaaS landing page: no gradient blobs, glassmorphism cards, or
stock-icon feature grids. It is not fantasy parchment either: no aged paper, blackletter or
scroll ornaments. The supernatural half of the setting shows through violet and magenta
light, not medieval props.

**Key Characteristics:**
- Dark navy ground by default, with a full warm-light theme through semantic tokens.
- Three type voices: Audiowide signage, Inter reading, Roboto Mono HUD.
- Flat, bordered surfaces. Glow lives on type and marks, never under cards.
- Gold for headlines, cyan for sub-heads and links, magenta and violet for action and emphasis.
- Fixed-dark photo bands and brand fills that don't change with the theme.
- A 48rem reading column for prose, 72rem for grids.

## Colors

A night palette of navy and violet, with three small, hot accents (gold, cyan, green) used
like indicator lights on a dark console.

### Primary
- **Aether Pulse** (`aether-pulse`): saturated violet, unstable magic. Fills the primary
  button, forms the start of the glyph-panel gradient, and edges manuscript excerpts. In light
  mode it takes over the gold and magenta accent roles, so headlines and "Draft" tags stay
  legible.
- **Deep Circuit** (`deep-circuit`): tech blue, machine architecture. Fills the callout strip
  and the step-number badges, borders cards (at 45% in dark, 22% in light), and outlines the
  ghost button. In light mode it takes over the cyan and green accent roles.

### Secondary
- **Neon Veil** (`neon-veil`): sharp nightclub magenta. The primary button's hover fill, the
  pull-line rule, the short rule before the "In play" label, and the magenta half of every display
  glow. It is only 3.1:1 on Card Navy, so small magenta **text** on cards uses
  `--accent-magenta-text` instead: a lighter tint (`#DB7DBE`, 5.25:1) in dark mode, Aether
  Pulse in light. About's "Site & Systems" role label is the current user.
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
- **Bone Paper** (`page-light`): the light-mode page ground, a warm off-white, never pure
  white.
- **Card White** (`card-light`): the light-mode card fill, which sits just above Bone Paper.
- **Neutral Zone** (`neutral-zone`): sun-bleached bone. Used only as the hover color for
  links inside the callout strip.
- **Text ladder**: pure white or Gutter Black (`text-dark`) for primary text, then about 80%,
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
- **Body** (Inter 400, 1rem, 1.6): all reading text. The Home pitch runs at 1.075rem, and
  pull-lines at 1.3rem / 600 / 1.4. Prose measures 48rem.
- **Label** (Roboto Mono, 0.7–0.8rem, 0.05em tracking, uppercase): status tags, breadcrumbs,
  pager labels, archetype group labels, crew roles, news dates, and the voice note.

Audiowide ships in a single weight (400). The heading CSS asks for 700, so browsers
synthesize a faux bold. Treat 400 as the real weight, and set it explicitly when that rule
is next touched.

### Named Rules
**The Mixed-Case Signage Rule.** Display type is never set in all caps. The brand guide
forbids it for Cerulean Nights, and the stand-in follows the same rule so the swap is
seamless. Uppercase belongs only to the small mono labels.

**The Three Voices Rule.** Audiowide names things, Inter explains them, Roboto Mono reports
state. Don't set body copy in Audiowide or headings in mono.

## Layout

The layout uses one centered column system. Wide sections cap at 72rem (`content-max`) with
1.5rem side gutters, or 1rem under 640px. Prose-heavy pages (The World, every Rules Preview
sub-page, News, and About's solo card) narrow to a 48rem reading column (`.section--reading`),
which keeps lines around 80–90 characters. Section intros center at 42rem. Vertical rhythm is
section-based: 3.5rem of section padding (2.5rem on phones), about 2.5rem between Rules
subsections, and 1.25–2rem grid gaps.

Grids use `auto-fit, minmax(260px, 1fr)` by default. Where a count is known, the grid is fixed
to avoid a single orphaned card: Home's Rules grid is 3×2, then 2-up under 860px, and the four
playlists go 4-up, then 2×2 under 1000px, then stacked under 560px. Lists that hold uneven text
(the archetype roster, the glossary) are ruled rows, not cards.

The header is sticky and full-bleed. Its content is capped at 72rem. At 720px and below, the
brand and actions share row one and the five nav links spread across row two, so the header
stays about 86px tall. Anchors land clear of the header thanks to 5rem of `scroll-padding-top`.
Breakpoints in use: 1000, 860, 720, 640 and 560px.

## Elevation & Depth

The site is flat. No surface casts a box-shadow. Depth comes from tone: Card Navy sits one step
above the Midnight ground (Card White above Bone Paper in light mode), and a 1px border defines
each edge. Hover lifts nothing; it brightens the border from Deep Circuit to cyan. The only
layered surfaces are the translucent sticky header (88% opacity, 8px backdrop blur) and the
game modal's 85% black backdrop.

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
Surfaces stay flat.

## Shapes

Corners are gently rounded and consistent. Buttons use 4px (`rounded.sm`). Cards, pager links,
play scenes and archetype blocks use 8px (`rounded.lg`), with 6px on images inside cards. The
callout strip uses 10px. Chips and status tags are full pills (`rounded.pill`), and avatars,
step badges and the theme toggle are circles. Borders are 1px hairlines everywhere, except where
a 3px left rule marks a voice beside bare text (never on a card): Aether Pulse for manuscript
excerpts and Neon Veil for pull-lines. Card images crop with `object-fit: cover` from the top, so book
spreads show their headline art.

## Components

### Buttons
Blunt and confident: bold Inter, a small 4px radius, no icons, no shadow.
- **Shape:** slightly rounded (4px), padded `0.8em 1.6em`, Inter 700.
- **Primary:** Aether Pulse fill with white text, and a Neon Veil fill on hover. Fixed colors
  in both themes. Reserved for the single main action in a group.
- **Ghost:** transparent, with fixed 80% white text and a Deep Circuit border. On hover the
  border and text turn Static Cyan. **Only on fixed-dark surfaces** (hero, callout strip).
- **Outline:** the theme-tracked sibling of Ghost for the page background: primary text color
  and a card-hover border, turning to `--accent-cyan` on hover.
- **Focus:** the global 2px cyan `:focus-visible` ring at a 3px offset.

### Chips and Status Tags
- **Jump chips** (Archetypes' in-page nav): pill, a 6% white fill with a 12% border, and
  secondary text at 0.85rem / 600. Text and border go gold on hover.
- **Status tags** (Draft / In Progress / Final): outlined pill in `currentColor`, uppercase
  Roboto Mono at 0.7rem. Draft is magenta, In Progress gold, Final green (each through its
  `--accent-*` token). The status value comes from `_data/rules.yml`, never the page.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** `--card-bg` (Card Navy in dark mode, Card White in light).
- **Shadow Strategy:** none. See Elevation & Depth.
- **Border:** 1px `--card-border`, turning to `--card-border-hover` on hover (linked cards only).
- **Internal Padding:** 1.75rem, or 1.35rem on phones. Rules cards pad `1.25rem 1.5rem 1.5rem`
  under a 160px image (120px on Home's compact grid).

### Callout Strip
A solid Deep Circuit panel with 10px corners, 2rem padding, and centered white type. It carries
closing calls to action (Patreon, Discord, the character sheet). It is fixed-dark: ghost
buttons inside it and gold plain links (Neutral Zone on hover).

### Navigation
A sticky translucent bar with a hairline bottom border. The left side holds the skull/d10 mark
(30×34) and the "Shadows RPG" wordmark in Audiowide 1.4rem. Nav links are Inter 600 at 0.95rem
in secondary text, turning gold on hover. The current page is gold with a 2px underline, so it
doesn't rely on color alone. The right side holds the GD Games mark (34px, 85% opacity) and a
circular theme toggle. On phones, the links move to their own full-width row, spread evenly.

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

### Archetype Roster and Glossary Rows
Ruled lists, not cards. Roster rows are a two-column grid: the Audiowide name over a mono group
label, then the italic gold hook. Rows fill with the card color on hover, and the name turns
cyan. Glossary terms are Audiowide in cyan over secondary-text definitions, and the targeted
entry turns gold. First-use glossary links read as prose, with inherited color and a dotted
cyan underline.

## Do's and Don'ts

### Do:
- **Do** route every on-page color through the semantic tokens (`--text-*`, `--card-*`,
  `--accent-*`, `--border-*`) so both themes stay legible.
- **Do** use fixed colors (`--text-light`, the raw `--static-cyan` / `--signal-gold`, literal
  white rgba) on anything that stays dark in both themes: photo bands, the callout strip,
  glyph panels, the modal.
- **Do** keep prose inside the 48rem reading column, and fix grid counts so a known number of
  cards never leaves one orphaned.
- **Do** reserve glow for display type, glyphs and brand marks, in magenta, violet or cyan.
- **Do** mark voice changes with the existing treatments: a violet left rule for excerpts, a
  magenta left rule for pull-lines, and the mono "In play" label for scenes.
- **Don't** put a thick colored edge on a card. Left rules belong beside bare quoted text only
  (2026-09-30).
- **Do** check every new component in both themes, and keep tap targets at 24px or more
  (footer social icons sit in 36px boxes).

### Don't:
- **Don't** build it like a generic SaaS landing page: no gradient blobs, glassmorphism
  cards, or stock-icon feature grids.
- **Don't** reach for fantasy parchment: no aged paper textures, blackletter, or scroll and
  flourish ornaments.
- **Don't** put a box-shadow under a card, button or panel. Depth is tone plus a 1px border.
- **Don't** fill surfaces with gold, cyan or green. They're indicator lights for type,
  borders and tags.
- **Don't** set display type in all caps, or ship Cerulean Nights before its license is
  confirmed.
- **Don't** use `.btn--ghost` on the page background. Use `.btn--outline` there.
- **Don't** put a raw brand constant (`--static-cyan`, `--signal-gold`, `--neon-veil`) on
  text over the page background. It fails contrast in light mode.
