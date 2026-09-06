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
   voice/colors/fonts and `brand/GUIDE_Shadows_Voice.md` for in-world voice. Cleared to start.

Don't skip ahead to implementation even if a page's content/structure seems obvious — the whole
point of doing this in stages is to catch scope and structure questions before they're baked
into code.

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

- Is the old Google Form mailing-list link still current?

## Conventions

- Keep `content/` for anything about what the site says (inventory, sitemap, copy drafts).
- Keep `brand/` for anything about how the site should look/sound (theme, art licensing).
- When brand reference files here fall out of sync with their sibling-repo originals, say so
  explicitly rather than silently trusting whichever copy is open in the session.
