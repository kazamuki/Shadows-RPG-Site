# Shadows RPG Site — CLAUDE.md

Map for future sessions working in this repo. Read this before doing anything else here.

## What this repo is

A hand-built static site for **Shadowsrpg.com**, replacing an old Google Sites build, to be
hosted on GitHub Pages. This is a **two-property brand**: Shadowsrpg.com (this repo) and
Getdangerous.net (sibling repo `GetDangerousGames-Site`, converted separately). The two repos
stand alone technically but must read as one brand visually and tonally.

## Where things are

- `Google-Page-Original/DRAFT/` — the original Google Takeout export of the old site. Read-only
  source material, not something to build from directly (see the inventory's warning about why
  it's called `DRAFT` and only has 4 pages). **Local-only, gitignored as of 2026-09-05** — the
  exported HTML embeds several Google-owned `AIza...` API keys as part of the Sites platform's
  own bundled JS (identical across all 4 pages, not anything Ken generated), which tripped
  GitHub secret scanning once this repo was pushed. Everything worth keeping from this folder is
  already mined into `content/inventory.md`, so there's no need to re-track it — if a future
  session doesn't find this folder on disk, that's expected; work from the inventory instead.
- `content/inventory.md` — full content inventory of the old site, mined page-by-page. Confirmed
  by Ken: the `DRAFT` export is the actual latest/only version of the old site, not a partial
  snapshot — it just hasn't been touched in a few years, so its content is known to be stale.
  Still the right starting scaffold rather than building from nothing.
- `content/sitemap.md` — approved sitemap for the rebuild (as of 2026-09-05). Key framing
  carried in from Ken: this site should work as a **visual shorthand for the CRB** (a public
  preview/reference layer over the book's actual content), not just marketing copy about it —
  that's why the sitemap centers a "Rules Preview" hub rather than two flat pages. Also
  references the live CRB v4 manuscript at
  `C:\Users\Kazam\OneDrive\Documents\Gaming\Shadows\Core Rule Book\CRB in progress\CRB v4\`
  (`.docx` chapter files) as the real content source for Rules Preview and The World — richer
  and more current than the old site export, and already uses the setting year **2099** (the old
  site's "2079" is stale, don't carry it forward).
- `brand/THEME.md` — color palette, typography, and site-copy voice guidance. **Duplicated** from
  a file Ken maintains outside any repo; also duplicated into `GetDangerousGames-Site`. If it's
  edited here, the other copies are stale until manually synced — there is no canonical source
  yet (flagged as an open item inside the file itself).
- `brand/shutterstock-catalog.md` — mirror of `GetDangerousGames-Site/brand/shutterstock-catalog.md`.
  Catalog of the 40 confirmed-licensed Shutterstock images in the shared art library, with fit
  recommendations per site section. Check here before hunting for a new background image.
- `brand/asset-licensing.md` — mirror of `GetDangerousGames-Site/brand/asset-licensing.md`. Rules
  for what art from the shared `Shadows/Core Rule Book/Art Assets/` and `Shadows/GD Assets/`
  libraries is actually clear to use on a public site vs. restricted. **Read before pulling any
  image into this site that isn't already in this repo.**
- `brand/GUIDE_Shadows_Voice.md` — mirror of Ken's CRB reference doc (OneDrive, outside any repo:
  `Core Rule Book/CRB in progress/AI References/GUIDE_Shadows_Voice.md`; a fuller `.docx` version
  also exists at `Core Rule Book/CRB in progress/Guides/GUIDE_Shadows Voice & Style Guide.docx`,
  not yet reviewed). Governs the CRB's **in-world** voice (NYTE City speaking as itself) —
  deliberately different from THEME.md's site-copy voice. See `content/sitemap.md`'s "Voice"
  section for exactly which pages use which register.

## Working process for this project (Ken's stated order)

1. **Inventory** the old content — done, see `content/inventory.md`.
2. **Propose a sitemap** as a markdown outline (not code) — done and fully approved, see
   `content/sitemap.md`. No open items remain.
3. **Only after sitemap approval**, move to actual HTML/CSS, using `brand/THEME.md` for site-copy
   voice/colors/fonts and `brand/GUIDE_Shadows_Voice.md` for in-world voice. **Started 2026-09-06.**

Don't skip ahead to implementation even if a page's content/structure seems obvious — the whole
point of doing this in stages is to catch scope and structure questions before they're baked
into code.

## Site architecture (chosen 2026-09-06)

**Jekyll**, building at the repo root, deployed via GitHub Pages' native Jekyll build (no
Actions workflow, no Gemfile — see below on why). Ken picked this over hand-duplicated HTML or a
custom build script specifically so nav/footer/status-tags live once in `_includes/` instead of
being copy-pasted across every page.

- `_config.yml` — site config; `exclude:` keeps `content/`, `brand/`, `Google-Page-Original/`,
  and `CLAUDE.md` out of the Jekyll build (they're working docs, not site pages, even though some
  have YAML front matter that would otherwise make Jekyll try to render them).
- `_layouts/default.html` + `_includes/nav.html` / `footer.html` — shared chrome for every page.
- `assets/css/theme.css` — hand-rolled CSS, variables lifted straight from `brand/THEME.md`. Keep
  the two in sync if the palette changes.
- `assets/img/` — brand marks (`gd-logo-mark.png` is GD Assets' `LOGO NO TEXT.png`, used small in
  the top-right nav corner per Ken's steer 2026-09-06; `favicon-skull-dice.jpg`) and
  `assets/img/crb-spreads/` (the 5 real CRB book-spread screenshots from the old site's Home
  carousel, resized/compressed for web — originals in `Google-Page-Original/DRAFT/Home/` were
  3-6MB each straight out of the export). `hero-background.jpg` is also from that same old-export
  folder (`02e5d996...jpg`) — Ken confirmed 2026-09-06 he wants to keep this specific image (a
  moody cyberpunk figure in neon rain) even though the inventory's original pass undersold it as
  "generic dark texture, not distinctive"; it's actually the exact hero image still live at
  shadowsrpg.com today. Since this file's provenance is otherwise unverified per
  `brand/asset-licensing.md`'s old-export caution, treat Ken's 2026-09-06 confirmation as the
  clearance for this one file specifically, not a blanket exception for the rest of that folder.
- **No `Gemfile`.** One was tried and tracked down to a real bug: on this machine's Ruby 4.0.6,
  loading the `github-pages` gem via Bundler silently breaks Jekyll's own `_plugins/*.rb`
  autoloading (confirmed by reproducing with a debug plugin file — it loads fine without a
  Gemfile, never loads with one present, regardless of safe mode or plugin path config). Skipping
  the Gemfile and running the globally-installed `jekyll` gem directly (matches GitHub Pages'
  own build) sidesteps it. GitHub Pages' legacy build doesn't require a Gemfile in the repo, so
  this doesn't affect the live build — only local `jekyll build`/`serve`.
- `_plugins/local_ruby_compat.rb` — a **local-dev-only** shim. Ruby 3.2+ removed
  `String#tainted?`/`#untaint`, but the Liquid 4.0.3 that ships with Jekyll 3.9.0 (GitHub Pages'
  pinned version) still calls it, which crashes `jekyll build`/`serve` outright on this machine's
  Ruby 4.0.6. The shim no-ops those two methods only if they're missing. GitHub Pages' own build
  servers run a Ruby where the methods still exist, and custom plugins are ignored by the legacy
  GitHub Pages build anyway — so this file only ever does anything on a local modern-Ruby preview.
- `.claude/launch.json` — `jekyll serve --destination _site --port 4000`, for previewing in the
  Browser pane via `preview_start`.
- Stub pages remain at `/news/`, `/about/`, `/credits/` (just a status tag + one-liner) so primary
  nav doesn't 404 while those sections aren't built yet — not real content.
- CRB manuscript chapters get extracted to plain text before writing a page against them —
  `.docx` isn't directly readable, so a small PowerShell function (`Extract-DocxText`, unzips the
  `.docx` and strips `word/document.xml`'s XML) dumps each chapter to
  `Google-Page-Original/crb-extracted/*.txt` first. That folder is inside the gitignored
  `Google-Page-Original/` tree, so it's local scratch, not tracked — re-run the extraction in a
  future session rather than looking for those `.txt` files to still be there.

## Build status

- **Home (`/`) — built**, 2026-09-06. Full content per `content/sitemap.md` §1, copy adapted from
  the old site's actual extracted text (not just the inventory summary) with the 2079→2099 fix
  and a rewritten CRB-status line (the old "getting close to making it a reality" line was stale
  per the inventory's own warning — replaced with something that doesn't overpromise timeline).
- **Rules Preview hub + all 6 sub-pages — built**, 2026-09-06: `/rules/`, `character-creation/`,
  `power-levels/`, `stats-and-skills/`, `advantages-disadvantages/`, `archetypes/`, `equipment/`.
  Sourced directly from the CRB v4 manuscript (020/030/040/041/042/043/044 + `Gear.docx`), not the
  old site — the manuscript has moved on in real ways the old site doesn't reflect (e.g. Power
  Levels dropped from the old site's 7 named tiers to 4: Street Level, Heroic, Shadows, World
  Coming Down). These are deliberately curated *samples* of much larger manuscript tables
  (Advantages/Disadvantages, the Gear catalog, Archetype milestone trees) rather than full
  transcriptions — matches the "shorthand, not the book" framing in `content/sitemap.md`.
  **Corrected once already, 2026-09-06:** the first pass on Character Creation and Stats & Skills
  leaned too far into verbatim CRB mechanics — the actual stat bonus table, dice formulas, and
  skill-check math, not just flavor text. Ken's steer: keep these pages high-level enough to give
  a sense of the Synergy System's tone, never a copy-able ruleset. Rewritten to drop exact
  numbers/tables/formulas in favor of plain-English gists; Advantages & Disadvantages trimmed from
  a costed sample table to ~4 flavor-only examples per side. Keep this in mind for any future
  Rules Preview page sourced from the manuscript. Arcanist
  is tagged "under construction" because the manuscript itself says so inline.
- **The World (`/world/`) — built**, 2026-09-06, from `010_Onboarding.docx`, almost entirely
  verbatim in the manuscript's in-world voice per the sitemap's voice-split decision — this page
  intentionally carries almost no site-voice wrapper, since it's meant to read as an actual page
  out of the book. Left out `010_Onboarding.docx`'s "What play at the table looks like" section
  (table-procedure content, not setting/world content — out of scope for this page).
- **News, About, Credits — built**, 2026-09-06, per `content/sitemap.md` §5/§6. News seeded
  with one real, factual milestone entry (the site rebuild itself) rather than inventing past
  history — future entries get appended chronologically as real milestones happen, newest first.
  About is pure site-copy voice (studio blurb + GD family framing, mailing list/Patreon CTAs
  reused from Home). Credits carries the Dean Spencer required credit line (per
  `brand/asset-licensing.md`) plus stock-photography and brand-mark attribution, kept generic
  about which specific images it covers since that's unverified — the CRB archetype spread
  screenshots on Home plausibly contain his art, so the line errs toward compliance rather than
  waiting for certainty. All three skip the Rules-Preview-style status tag (Draft/In
  Progress/Final) since that convention is scoped to Rules Preview WIP content, not general
  pages — same precedent as Home.
- No remaining stub pages — every page in the approved sitemap is now built.
- **Footer social icons + "See the game live" (2026-09-06):** caught a real gap against
  `content/sitemap.md`'s footer spec — YouTube was missing from the footer social row, and it was
  plain text links instead of the "clean icon assets" the sitemap called for. Fixed: added a
  `social:` block to `_config.yml` (twitch/patreon/twitter/youtube), a shared
  `_includes/social-icons.html` (simple-icons SVGs, same markup/paths as
  `GetDangerousGames-Site/_includes/social-icons.html` for brand consistency — Discord
  intentionally omitted here since Shadows doesn't have its own Discord presence), and matching
  `.social-row`/`.social-badge` CSS in `theme.css`. Separately, Home gained a **"See the game
  live"** section (after the CRB carousel, before the Rules Preview/World/News quick-links grid)
  linking directly to the 4 real Shadows actual-play YouTube playlists (Shadows 2.0, World's
  Apart, The Old Regime, 13th Floor) — playlist URLs pulled straight from
  `GetDangerousGames-Site/youtube/index.html`'s "Shadows RPG, at the table" section rather than
  re-curated, so they stay identical to the canonical list over there. No GD-repo edits were
  needed for this — pure read, no write.
- **Mailing list → Patreon (2026-09-06):** replaced the "Join the mailing list" button
  (`https://forms.gle/q9SjtWLFTzedQiT39`, on Home and About) with a "Get updates on Patreon"
  button pointing to `patreon.com/d33kode` — Patreon's free-follow tier covers the same
  "subscribe to updates" need the Google Form served. Kept the existing "Become a Patron" button
  alongside it (both point to the same URL, on purpose — Patreon lets a visitor pick free-follow
  vs. paid membership once they land there; the two buttons signal both options exist). The old
  Google Form link is no longer used anywhere on the site.
- **Cerulean Nights fallback → Audiowide (2026-09-06):** per Ken's steer, swapped the temporary
  display-font fallback from plain Inter to **Audiowide** (Google Fonts, open-source/OFL) —
  `--font-display: 'Audiowide', 'Inter', sans-serif;` in `theme.css`, font loaded via the existing
  Google Fonts `<link>` in `_layouts/default.html`. `brand/THEME.md` updated to match, with a
  divergence note: `GetDangerousGames-Site` already uses a *different* stand-in (Unbounded) for
  itself, so the two sites currently render display type in two different temporary fonts — this
  is accepted, not a bug, until Cerulean Nights is actually licensed and self-hosted on both.

## Brand/asset ground rules (see `brand/asset-licensing.md` for full detail)

- **Cleared for use:** images in `brand/shutterstock-catalog.md`'s pool (Shutterstock, unlimited
  distribution license) and Ken's own GD Assets brand marks (logo, skull/dice icon, etc.).
- **Not cleared without asking Ken first:** anything from the old Google Sites export's image
  folders (provenance unknown — Google Sites strips original filenames on upload, so a hash
  match against Shutterstock IDs isn't possible; verify by *visual* comparison to the catalog
  instead, as done once already in the inventory), Dean Spencer commissioned art (CRB-book-only
  license), DriveThruRPG marketplace art packs, and anything with an ambiguous/scraped-looking
  filename.
- **Cerulean Nights** (the display font in THEME.md) is not yet commercially licensed — don't
  ship it on the live site until Ken confirms the license is purchased. Fall back to Inter for
  display type until then.

## Decisions locked in (2026-09-05)

- **News** `/news/` is a real page — an archive of dated project-milestone entries, not a live
  blog. Replaces the dead Blogspot embed from the old site.
- **Rules Preview** WIP status is handled per-page/per-section with `Draft` / `In Progress` /
  `Final` tags (mirrors the manuscript's own "(under construction)" convention) rather than one
  blanket site-wide disclaimer.
- **Equipment** page is real, seeded from `Gear.docx` in the CRB v4 folder above — tag it
  `In Progress` since Gear isn't yet numbered into the book's own chapter sequence.
- **The World** page is real, seeded from `010_Onboarding.docx`'s "Welcome to NYTE City" section
  — not a placeholder, not blocked on new writing.
- **Support** starts as a Home section, not a standalone page, until there's an actual "buy the
  book" mechanism. Promote later.
- **Credits** stays a separate page from About — it's tied to the Dean Spencer art-credit
  licensing requirement, and shouldn't depend on how a later redesign groups pages.
- **"Get Dangerous Home"** moves from a text nav link to a small GD Games logo mark (the logo
  itself lives in the shared `GD Assets` folder) — framing Shadows as part of the GD family via
  the actual brand mark rather than a generic nav item.
- **Voice is a deliberate two-register split**, confirmed against `brand/GUIDE_Shadows_Voice.md`:
  in-world voice (NYTE City speaking as itself) on The World page and any manuscript excerpt
  content on Rules Preview pages; site-copy voice (THEME.md, the studio speaking to the reader)
  everywhere else, including the wrapper/intro copy around those same Rules Preview pages. The
  old site's "bucko"/"grasshopper" Character Creation narrator voice matches neither register and
  should not be revived — `GUIDE_Shadows_Voice.md` explicitly names that kind of reader-aside
  humor as the in-world voice's failure mode.

## Still open

- **Blog cross-posting — link-out shipped 2026-09-06, feed/embed still deferred.** Old-site
  content is now fully ported, so this was revisited (per the deferral note that used to live
  here). The GD blog (`GetDangerousGames-Site`) already tags Shadows-relevant posts `Shadows` and
  has a client-side tag-filter UI on `/blog/`; `News` now links out to
  `https://getdangerous.net/blog/?tag=Shadows` via a "Follow the studio too" strip, kept
  deliberately separate from the milestone list above it (the `/news/` archive stays a
  Shadows-specific log, not the GD blog — see `content/sitemap.md` §6). To make that link
  deep-linkable, `GetDangerousGames-Site/blog/index.html`'s tag-filter script was extended to
  read a `?tag=` query param on load and pre-select the matching pill — see that repo's CLAUDE.md.
  **Not done:** pulling GD posts to render inline on this site (JSON/RSS fetched client-side).
  Blocked on confirming GitHub Pages actually serves cross-origin-readable responses between
  shadowsrpg.com and getdangerous.net once both custom domains are live post-DNS-migration — untested,
  don't assume it works. Revisit once DNS settles and that's been checked in a real browser.

## Conventions

- Keep `content/` for anything about what the site says (inventory, sitemap, copy drafts).
- Keep `brand/` for anything about how the site should look/sound (theme, art licensing).
- When brand reference files here fall out of sync with their sibling-repo originals, say so
  explicitly rather than silently trusting whichever copy is open in the session.
