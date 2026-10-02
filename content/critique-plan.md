# Whole-site critique: update plan

Written 2026-10-02 from two `/impeccable critique` runs (both 29/40, "Good"). Run 1's issues
(mechanical: Home length, Human row, close, contrast, tap targets) are **done**, see the
2026-10-02 entries in `CLAUDE.md`'s Build status. Run 2 found a different set, below. This file
is the plan for a fresh session. Full reports are in `.impeccable/critique/` (the
`16-19-26Z` snapshot is run 2). Tick items off here, and log shipped work in `CLAUDE.md`.

Ken's answers to run 2's questions (2026-10-02): do the session picture first; replace the hub's
Draft pills with one note; include The World. **Archetype art was not chosen this round.**

## Do, in this order

### 1. Put a picture of a session on Home (P1) — `/impeccable clarify` then `layout`
**Problem:** the newcomer can't picture a night at the table. "How it plays" is one paragraph,
and sits after the four playlists. No answer to "how many players, who runs it, what happens".
**Plan:**
- Move "How it plays" up, directly after "Who you can be" (and its sheet bar), before
  "Watch it played". Playlists stay as proof after it.
- Give it one concrete thing. Candidate: the **"The fence"** `.play-scene` from
  `rules/stats-and-skills/index.html` (or a short ledger-style session outline), with the sheet
  link attached. Copy first in `content/drafts/`, approved by Ken before HTML (the house
  process, see messaging-plan Sessions 3 and 5).
- Only state facts the manuscript supports for "how many players / GM". Check `010_Onboarding`
  and the GM Workshop chapters in the CRB v4 folder (re-extract; see CLAUDE.md). Don't invent.
- Keep Home's length in check: it's 7.9 screens at 375px (6,441px). Moving a section should not
  add height; trim elsewhere if it does.

### 2. Rules hub: one note instead of six Draft pills (P2) — `/impeccable clarify`
**Problem:** five of six `_data/rules.yml` entries are `draft`, so six identical pills read as
"the book is unfinished" while a newcomer is judging.
**Plan:**
- Hub (`rules/index.html`): drop the pill from the card face (`_includes/rules-card.html`), and
  replace the caveat-first intro + legend with one "Core Rulebook in development" line. Lead the
  intro with what the visitor gets. Remove or shrink `.status-legend`.
- Keep the status tag on each sub-page (`_includes/rules-header.html`). Statuses still live in
  `_data/rules.yml` only.
- Don't change any page's status without Ken saying so. Offer to ask which chapters are honestly
  "In Progress".

### 3. The World: breakout images + its own ledger (P2) — `/impeccable layout` then `bolder`
**Problem:** the hero's primary destination (Ken's decision, keep it) is ~1,000 words with only a
banner, and repeats Home's pitch (vampires/werewolves/K-pop, and the "Citizens talk. Fixers
remember. Gangs retaliate. Corporations audit." line that Home's ledger is built from).
**Plan:**
- Add 2-3 breakout images from images already in the repo or cleared in
  `brand/shutterstock-catalog.md` (see "Already in use"; `assets/img/home/pitch-*.jpg` are
  candidates). Read `brand/asset-licensing.md` before adding any new art.
- Replace the repeated "Citizens talk…" line with a `.ledger` of The World's own.
- **Manuscript text stays verbatim.** Only structure, images and the ledger change.
- Trim Home's pitch to a teaser so the two pages stop repeating each other (Home's pitch copy
  is site voice, so editing it is allowed; run it by Ken first, it's the approved D5 copy).

### 4. Polish pass (P3) — `/impeccable polish`
- Footer `.footer-copyright` and `.rules-pager-count` are 4.46:1 in **light mode**: move them to
  `--text-secondary`.
- Re-check Home's height after items 1-3.
- Not yet verified by anyone: dark-mode Ledger screenshots, light-mode Home visually, The World
  banner crop, the glossary term bubble on a real touch device.

## Parked (not chosen this round, don't lose)
- **Archetype art (P1):** Home's roster thumbnails are slivers at 375px (~72x130; Professional
  reads as a smudge, Cyborg as a rainy landscape), and the Archetypes page has images only for
  Human and Cyborg (the book spreads). Plan when picked up: art-directed crops of the painted
  images on the Archetypes page; crops whose subject survives a small square on Home; re-pick
  Professional and Cyborg art. Needs Ken's call on images (`assets/img/home/`, the catalog).
- **About copy:** `<title>` and description still say "small independent studio" while the H1 is
  "Who's making Shadows"; the callout "Track its progress on the News page" and "one rebuilt page
  at a time" are production talk (messaging-plan rule: no internal talk). The "Watch it played"
  intro and About tell the same origin story.
- **Home close copy** still says "development updates and deeper previews as chapters are
  written" (production-ish). Reword to what following gets you, with Ken's OK.
- **404:** points to Patreon/Discord; a way back into Rules/World would help a lost visitor more.
- **Smaller:** The World has no jump nav (Archetypes does); the Human spread is unreadable at
  phone width and only Cyborg's spread has a lightbox; pull-line / manuscript-excerpt / "In
  play" are easy to confuse; the hero ghost button border on the busy image at 1280 wasn't
  checked; roster hooks repeat verbatim on Home and Archetypes (by design, from
  `_data/archetypes.yml`).
- **Housekeeping:** `.impeccable/design.json` is older than `DESIGN.md`; `/impeccable document`
  refreshes it. If the Ledger close or `.roster-start`/`.playlist-*` components should be in the
  design doc, do it in the same run.

## Decisions already made (don't re-litigate)
- **The World stays the hero's primary button**; the hero tagline is Ken's D5 line.
- Dark mode flat surfaces; light mode "paper"; fixed-dark surfaces use fixed colors.
- Rules pages stay at flavor altitude: no copyable mechanics, no numbers/tables.
- **Ask Ken before replacing factual copy**, and draft copy in `content/drafts/` first.
- Don't add the hidden easter-egg game to the changelog.

## How to work (this repo's conventions)
- Read `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md` first. Add a changelog entry
  (`changelog/index.html`) for anything visitors would notice, plus a detailed `CLAUDE.md`
  build-status entry.
- Preview: `jekyll serve --destination "$TEMP/<name>" --port <free port> --host 127.0.0.1`
  (Ruby is available; use `127.0.0.1`, not `localhost`; other sessions may hold 4000-4061). The
  Browser pane caches CSS hard: after edits run
  `fetch(link.href,{cache:'reload'})` then reload. Pane `innerWidth` can read 0: re-check after
  `resize_window`. Stop the server and reset the viewport (`preset: "desktop"`) when done.
- The detector's `design-system-color` "rgb(0,0,0)" hits on raw templates are noise (it can't
  read the Liquid stylesheet link). Real hits only come from `assets/css/theme.css`.
- Re-run `/impeccable critique` when items 1-4 are done to refresh the score.

## Done in the 2026-10-02 session (for context)
Home distill (7 to 6 sections, featured Shadows 2.0 + ruled playlist list, "Try it now" removed);
`.roster-start` "Where you start" row; Home close as the `close` variant of `next-step.html`
(ledger + one Patreon button); Draft pill, nav/footer link and legend-overflow fixes; `--scrim`
token, caption glow from `--neon-veil`, breadcrumb contrast. Not committed at the time of
writing.
