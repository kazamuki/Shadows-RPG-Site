# Shadowsrpg.com — Wishlist

A running list of ideas to add or improve, written 2026-09-22 after the full-site design pass
(see CLAUDE.md's Build status). Nothing here is approved or scheduled. It's a menu to pick from.

**How to use this file:** when an item ships, delete it from here and log it in CLAUDE.md's
Build status (plus the News changelog if visitors would notice), tagging the Build status
entry with the wishlist item it closed, e.g. "(wishlist P1)". When Ken rules an idea out,
move it to "Decided against" with a one-line reason, so it doesn't get re-proposed.

Effort key: **S** = an hour or two · **M** = a session · **L** = several sessions or needs new content

---

## Needs a decision first

These came up during the design pass and block or shape other work.

- **Stats spread image leaks the ruleset.** `assets/img/crb-spreads/stats-and-attributes.jpg`
  is legible and shows the stat-bonus table + point-buy math that the 2026-09-06 steer pulled
  from page text. Options: swap it for a different spread, crop to the art only, or blur the
  table area. **S** once decided.
- **Analytics consent.** GA4 runs with no consent banner. For EU/UK visitors that's a GDPR
  gap. Options: add a minimal consent banner, or switch to a cookieless tool (Plausible,
  GoatCounter, Cloudflare Web Analytics) that doesn't need one. GD's site has the same setup,
  so decide for both at once. **S–M**
- **YouTube thumbnails on Home's "Watch it played" include art we can't use.** Each playlist's
  first-video thumbnail is available (via YouTube oEmbed: `bxjEln6QhWQ`, `Hr7OZzsm7hY`,
  `v0EDZyG1tGY`, `ocZsqTajNJk`), but The Old Regime's has a visible "ARTURSADLOS" watermark,
  and `brand/asset-licensing.md` says not to carry Artur Sadlos art forward. Options: use
  thumbnails for the other three and a glyph panel for The Old Regime, make new thumbnails
  from cleared art, or skip thumbnails. **S** once decided.

## Quick wins

- **Stat icons on Stats & Skills.** The CRB spread has a distinct icon per Stat (BOD, REF,
  MOB…). If those are in `Art Assets/Icons` and cleared per `brand/asset-licensing.md`,
  putting them on the eight Stat cards would make that page read like the book. **S**
- **Real art for the Power Levels and Equipment cards.** The new glyph panels ("IV", "Ç") are
  a good stand-in. A matching image from `brand/shutterstock-catalog.md` would be better. **S**

## Bigger features

- **"Which Archetype are you?" quiz.** Six or seven questions ending on an Archetype, with a
  button that opens the character sheet. Shareable, fun, and a real on-ramp for new players.
  Pure client-side JS, no backend. **M**
- **New-player "Start here" path.** A short page for people new to tabletop RPGs: what a
  session looks like, what you need (d10s, a sheet, a GM), where to watch one (the playlists),
  where to find a group (Discord). Ken's own story as a newcomer on About is a natural hook. **M**
- **Ready-to-play pre-gens.** Three or four sample characters (one per Archetype family) as
  cards, each linking into the character sheet app with the character preloaded, if the app
  can accept that via URL or file. The fastest path from "curious" to "at the table". **M–L**,
  needs a Character Sheet repo change.
- **A "feel" dice roller.** A single d10 roller that shows the exploding high roll and the
  worse-than-fail low roll, with **no numbers or formulas**, to stay inside the "not a
  copyable ruleset" rule. Could live on Stats & Skills. **M**, needs Ken's OK on where the line is.
- **In-world flavor layer.** Small doses of NYTE City speaking as itself: a rotating "NYTE Net"
  headline ticker on Home, or classified-ad-style blurbs for factions and districts. Uses the
  in-world voice from `brand/GUIDE_Shadows_Voice.md`. **M**, needs content.
- **Districts / map page.** A sketch of NYTE City's boroughs and sectors, if the manuscript has
  or will have that material. Probably the most-requested thing a setting site can have. **L**
- **Press & creator kit.** Logos, a one-paragraph pitch, key art and contact, for streamers,
  reviewers and con organizers. Mostly assembly of existing assets. **M**
- **FAQ.** "When's the book out?", "Can I play now?", "What dice do I need?", "Is it 5e-based?"
  Seed it from questions that actually come up in Discord. **S–M**
- **Support / buy-the-book page.** Already decided (2026-09-05) to promote Home's support
  section into its own page once there's a real purchase path. Listed here so it isn't
  forgotten at launch. **M**

## From the 2026-09-29 Impeccable critique (29/40, "Good")

Whole-site critique: a design review plus the `impeccable detect` scan of `_site`. Ken's
steer: **conversion paths first**, and "targeted shape" (not a full codex push) for the
same-looking pages. Suggested command in brackets.

## Design polish

- **Cerulean Nights.** Swap in the real display font once the Chequered Ink license is sorted
  (open item in `brand/THEME.md`). Do it on both sites in the same sitting. **S** after licensing.
- **Hero atmosphere.** A subtle animated rain or neon-flicker layer on Home's hero and The
  World's banner, off under `prefers-reduced-motion`. **S–M**
- **Print stylesheet for Rules Preview.** Players print rules to bring to the table. A light
  `@media print` pass (no nav or footer, black on white, no card chrome). **S**

## Housekeeping & infrastructure

- **Replace the GD blog scrape with a feed.** News scrapes `getdangerous.net/blog/` HTML and
  silently breaks if GD renames `.post-card`. A Liquid-generated `/blog/feed.json` in
  `GetDangerousGames-Site` would give this site a stable contract. **S** in each repo.
- **Automated link checking.** A scheduled GitHub Action (e.g. `lychee`, which needs no Ruby or
  Gemfile) to catch dead YouTube, Patreon or Discord links and the embed breaking. **S**
- **One source for the shared theme files.** `theme.css` tokens, `theme-init.js` and
  `theme-toggle.js` are hand-synced across three repos, and `brand/THEME.md` already flags
  having no canonical source. Options: a tiny shared repo pulled in by a sync script, or a
  documented "GD is canonical, copy from there" rule. **M**
- **Self-host the web fonts.** Removes the Google Fonts round-trip (faster first paint) and a
  third-party request (privacy). **S**
- **Accessibility audit.** Run axe or Lighthouse across every page in both themes and fix what
  surfaces. The design pass fixed focus rings and tap targets, but hasn't done a full audit. **S–M**

## Decided against

*(Nothing yet. Move items here with a one-line reason when Ken rules them out.)*
