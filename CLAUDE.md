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
  the top-right nav corner per Ken's steer 2026-09-06; `favicon-skull-dice.png`, swapped from a
  `.jpg` 2026-09-07 — see Build status below) and
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
  "subscribe to updates" need the Google Form served. The old Google Form link is no longer used
  anywhere on the site. **Corrected 2026-09-06:** originally shipped with a second "Become a
  Patron" button alongside it, both pointing at the identical URL (reasoning at the time: Patreon
  lets a visitor pick free-follow vs. paid once they land there, so two buttons would signal both
  options exist). Ken flagged this as reading like a duplicate-button bug rather than an
  intentional choice — two CTAs going to the exact same place looks broken, not helpful. Collapsed
  to a single "Follow on Patreon" button on both Home and About.
- **Cerulean Nights fallback → Audiowide (2026-09-06):** per Ken's steer, swapped the temporary
  display-font fallback from plain Inter to **Audiowide** (Google Fonts, open-source/OFL) —
  `--font-display: 'Audiowide', 'Inter', sans-serif;` in `theme.css`, font loaded via the existing
  Google Fonts `<link>` in `_layouts/default.html`. `brand/THEME.md` updated to match. **Update
  2026-09-06/07:** the divergence noted at the time (GD using Unbounded as its own stand-in) is
  now resolved — Ken separately switched `GetDangerousGames-Site` to Audiowide too (commit
  `4268919`), so both sites currently converge on the same temporary display font. `brand/THEME.md`
  has since been corrected to match (its "Temporary stand-in, both sites now aligned" note) — no
  longer a stale-doc risk.
- **Social links made consistent with `GetDangerousGames-Site` (2026-09-07):** per Ken's ask,
  compared every social link against the GD repo and fixed real drift: `_config.yml`'s `social:`
  block now uses the exact same URL format GD uses for shared accounts (`https://www.twitch.tv/d33kode`,
  `https://www.patreon.com/d33kode` — both previously missing `www.` here). Every hardcoded
  Patreon link in `index.html`/`about/index.html` was replaced with `{{ site.social.patreon }}` so
  there's one source of truth going forward instead of three places that could drift independently.
  Added a **Discord** icon to the footer (`https://discord.gg/yMfKRtuvwt`) matching GD's — Ken
  confirmed this explicitly since the approved sitemap's footer spec never listed Discord for this
  site (Discord wasn't part of the original decision, so this needed a real yes rather than being
  assumed). `_includes/social-icons.html` is now byte-for-byte identical to
  `GetDangerousGames-Site/_includes/social-icons.html` (confirmed with a whitespace-insensitive
  diff) — same 5 icons, same order (Discord, Twitch, X, YouTube, Patreon), same SVG markup.
  **Deliberately NOT changed:** the Twitter/X account. This site uses the dedicated
  `twitter.com/Shadows_RPG` handle while GD uses the creator's personal `twitter.com/d33KODE` —
  different accounts on purpose (confirmed against `content/inventory.md`'s record of the old
  site's own footer, which already used `Shadows_RPG`), not a drift to fix.
- **First-feedback pass (2026-09-07):** Ken's first real user feedback since launch, actioned in
  one session:
  - **Home's CRB carousel replaced with a shortcut grid into Rules Preview.** The old
    `.crb-carousel` (horizontal scroll-snap filmstrip) had a real bug Ken caught: the Human and
    Cyborg archetype spreads both linked to `/rules/archetypes/` — two cards, same destination.
    Replaced with a `.rules-grid.rules-grid--home` (new compact CSS variant of the existing
    Rules-Preview-hub `.rules-grid`/`.rules-card` component — image + title only, no body copy,
    smaller tiles) linking to all 6 Rules Preview sub-pages once each — Character Creation, Power
    Levels, Stats & Skills, Advantages & Disadvantages, Archetypes, Equipment — plus a "Browse the
    full Rules Preview →" link below the grid. The old `.crb-carousel` CSS block is now dead code
    and was removed from `theme.css`.
  - **About page now names the crew**, matching how `GetDangerousGames-Site/about/index.html`
    does it (Deighton "d33Kode"/Creator, Scott "Melf"/GM & Technical Writer, Ken "Kaza"/Site &
    Systems) instead of the old generic "a small independent studio" copy — Ken's steer was that
    calling the team out by name reads better than staying anonymous. Three `.feature-card`s, role
    label + name + one Shadows-specific line each. **Crew photos added same session**: Ken
    attached the three avatars (confirmed identical to `GetDangerousGames-Site/assets/images/
    about-deighton.png`/`about-scott.png`/`about-ken.png` by direct file comparison — Deighton is
    the d33kode bear-mascot logo, Scott a cartoon avatar, Ken a stone-gargoyle photo), copied into
    this repo as `assets/img/about-{deighton,scott,ken}.png`. New `.crew-avatar` CSS in
    `theme.css` (72px circle, 2px `currentColor` border) mirrors GD's own `main.css` rule
    byte-for-byte in spirit, with each avatar's `border-color` set inline to match that person's
    role-label accent color (static-cyan / ghostly-green / neon-veil).
  - **Discord CTA added** alongside the existing Patreon button on About's closing callout-strip,
    and (for consistency, not explicitly requested but the same component appears on both pages)
    on Home's matching "Follow along and get in the game" strip too. Both use
    `{{ site.social.discord }}`, already wired up in `_config.yml` from the prior social-sync pass.
  - **Fixed an overpromise on Character Creation:** the page said "The full breakdown of Stats and
    how a check actually resolves lives on Stats & Skills" — but Stats & Skills was deliberately
    rewritten (see the 2026-09-06 Build status entry above) to drop exact formulas/tables in favor
    of plain-English gists. The link target never delivered on that specific promise. Reworded to
    "More on how Stats work, and what a Skill Check actually feels like at the table, lives on
    Stats & Skills." Found the identical pattern in two more places during a full-site text pass
    and fixed both for consistency: Home's Synergy System blurb ("Full mechanics live in Rules
    Preview" → "More on how it works lives in..."), and the Rules Preview hub's own Stats & Skills
    card blurb ("the math under everything" → "a feel for how the Synergy System's d10 skill check
    resolves").
  - **Social links (item 2 of Ken's feedback) needed no changes** — the 2026-09-07 sync entry
    above already covers this; re-verified discord/twitch/patreon/youtube URLs are still
    byte-identical to `GetDangerousGames-Site/_config.yml`, and the Twitter divergence is still
    the confirmed-intentional one.
  - **Not verified in a live browser:** this session's sandboxed tool environment has no Ruby/
    Jekyll on `PATH` (checked common install locations, none found), so `jekyll serve`/`build`
    couldn't be run to visually confirm the rendered result. All edits were hand-checked for
    balanced Liquid/HTML tags and matched against existing working patterns elsewhere in these
    same files, but a future session (or Ken locally) should run `jekyll serve` and eyeball
    `/` and `/about/` at least once before calling this fully verified.
- **Crew photos added to About (2026-09-07, same day as the feedback pass above).** Ken attached
  the three avatars used on `GetDangerousGames-Site/about/index.html` — confirmed identical to
  that repo's `assets/images/about-deighton.png`/`about-scott.png`/`about-ken.png` by direct file
  comparison (Deighton is the d33kode bear-mascot logo, Scott a cartoon avatar, Ken a
  stone-gargoyle photo) — copied into this repo as `assets/img/about-{deighton,scott,ken}.png`.
  New `.crew-avatar` CSS in `theme.css` (72px circle, 2px `currentColor` border) mirrors GD's own
  `main.css` rule, with each avatar's `border-color` set inline to match that person's role-label
  accent color (static-cyan / ghostly-green / neon-veil).
- **Google Analytics added (2026-09-07).** Ken already had a GA4 property for this site — no
  Scott/domain coordination needed, despite Scott controlling the shadowsrpg.com DNS (see the DNS
  entry below): a GA4 measurement ID is just a property Ken creates himself and pastes into
  config, unrelated to who owns the domain's DNS. `_config.yml` gained
  `google_analytics: "G-XPJHE8H4SJ"`; `_layouts/default.html` gained the same hand-rolled
  `gtag.js` snippet `GetDangerousGames-Site/_layouts/default.html` uses (GitHub Pages' legacy
  Jekyll build has no analytics plugin in its allowed list, so both sites just inline the script
  rather than relying on a plugin) — guarded by `{% if site.google_analytics %}` same as GD.
  **Not yet verified live**: same local-Ruby-unavailable limitation as the rest of this session
  applies — worth confirming the Realtime report in GA shows a hit after the next real deploy.
- **OG/Twitter-card meta tags added (2026-09-07).** Ken noticed shadowsrpg.com links weren't
  showing an image in Discord — the root cause was simply that no OG meta existed at all (this
  repo has no `jekyll-seo-tag`, unlike `GetDangerousGames-Site`). Hand-rolled in
  `_layouts/default.html` rather than pulling in the plugin: `og:title`/`og:description`/`og:url`/
  `og:image` + `twitter:card summary_large_image` and its title/description/image, all built from
  `page.title`/`page.description` (same fallback-to-site-defaults pattern the `<title>` tag
  already used) plus a new `page.image` front-matter override (matches GD's own per-page `image:`
  convention) that falls back to `hero-background.jpg` (1920×1080) site-wide when a page doesn't
  set one. No page currently sets `image:` — every page shares the hero shot as its link-preview
  image until/unless a page-specific one is added later. **Not yet verified**: Discord caches
  unfurled link previews per-URL, so re-testing the exact same previously-shared link may still
  show the old (image-less) preview even after this deploy — check with a fresh link/channel.
- **Favicon fixed (2026-09-07).** Ken flagged the tab icon rendering as basically a solid black
  square with a little purple — traced to `favicon-skull-dice.jpg` being a **JPEG** (no alpha
  channel) of the skull/d10 mark on a black background: at favicon scale, the black square reads
  as the icon instead of a transparent triangle mark. Replaced with `Logo - Shadows d10.png` from
  `C:\Users\Kazam\OneDrive\Documents\Gaming\Shadows\Core Rule Book\Art Assets\Icons\` — confirmed
  via the PNG's own header (`colortype 6` = true RGBA) that it actually carries transparency
  around the triangle, unlike the old JPG. Copied in as `assets/img/favicon-skull-dice.png`; old
  `.jpg` removed (only reference was the one `<link rel="icon">` tag, now repointed). This is the
  no-text version of the mark, matching Ken's ask ("probably best to use the one without the
  text") — the sibling file `logo png.png` in that same source folder has "shadows" text baked in
  underneath the same triangle and was deliberately not used here.
- **News restructured (2026-09-07):** Ken flagged `/news/` as feeling disjointed — it was trying
  to be both a hand-maintained Shadows-milestone archive *and* a live mirror of the studio blog,
  and Ken's plan going forward is to write all Shadows updates (dev notes, playtest calls,
  Patreon-style progress reports) on the studio blog directly, not duplicate them here. Dropped
  the manually-maintained milestone list entirely (it only ever had the one "site is being
  rebuilt" entry) and restructured the page into two sections, in this order: **"From the
  studio"** (the existing live scrape-embed of GD-blog posts tagged `Shadows`, unchanged, plus
  the "See everything" link-out immediately after it as a grouped fallback) and **"Site
  changelog"** (new — a plain dated `.news-list` of *this site's own* build changes, reusing the
  existing `.news-entry`/`.news-date` CSS, no new styling needed). Seeded with 3 entries
  covering 2026-09-06's initial build and 2026-09-07's two work sessions, written short and
  visitor-facing rather than at the file-level detail this Build status log uses.
  **New convention, going forward:** whenever a session finishes a round of visible site changes,
  add both the detailed entry here (as always) *and* a short, terse entry to `news/index.html`'s
  Site changelog list (newest first) — same discipline, two audiences: this file for future
  Claude sessions, that list for actual site visitors who want to know what changed since they
  last looked. Home's "Latest Update" card copy was also updated to match (no longer says
  "project milestones").

- **Character Creation links to the live character sheet (2026-09-07).** The Shadows-Character-Sheet
  repo shipped a real demo (interactive app) and a standalone blank/printable sheet, hosted on
  GitHub Pages at `charactersheet.shadowsrpg.com` (Ken/Scott set the DNS + Pages config; the
  Character Sheet repo's own `deploy-demo.yml` publishes on tag). Added a closing `.callout-strip`
  to `/rules/character-creation/` — "Build one right now" — with two buttons: **Launch the
  Character Sheet** (`https://charactersheet.shadowsrpg.com/`) and **Download a Blank Sheet**
  (`.../blank-sheet.html`), both external links (`target="_blank"`). Used a `.rules-section` wrapper
  around the strip rather than nesting another `.section` inside this page's single outer one —
  `.section` sets its own max-width/padding, and nesting it double-pads instead of composing.
  Verified locally via `jekyll serve` (Ruby/Jekyll are available in this environment, unlike the
  session noted below) — renders correctly, no console errors. No other pages touched; Home's own
  "How do I make a character?" section still links to this page as the entry point, so the new CTA
  only needs to exist here.

- **Light mode added (2026-09-07).** Ken supplied portable `theme.css`/`theme-init.js`/
  `theme-toggle.js` files (already proven out on `GetDangerousGames-Site` — confirmed byte-identical
  to that repo's copies via diff) implementing a shared light/dark token system + toggle button,
  used across Shadowsrpg.com, Getdangerous.net, and the Shadows Character Sheet app. Persistence
  is via `localStorage`, and `theme-init.js` runs as a blocking `<script>` before the CSS `<link>`
  in `<head>` (added to `_layouts/default.html`) so `html[data-theme]` is set before first paint —
  no dark-then-light flash on repeat visits, which was Ken's specific ask.
  This repo's `assets/css/theme.css` previously hardcoded every color as either a raw palette
  variable (`--color-signal-gold`, etc.) or literal `rgba()` — unlike GD, which had already been
  retrofitted to reference semantic tokens (`--card-bg`, `--text-primary`, `--accent-cyan`, etc.)
  everywhere a color actually paints on-page. Adding the token `:root` blocks alone would have done
  nothing visually, so the whole file was retrofitted the same way GD's `main.css` was: every card/
  border/text color now goes through the semantic tokens instead of the raw constants, and the
  `--color-*` variable names were dropped in favor of the shared system's names (`--aether-pulse`,
  `--deep-circuit`, etc., no prefix). Toggle button markup added to `_includes/nav.html` (matches
  GD's SVG sun/moon markup exactly, `data-theme-toggle` attribute wired by the shared JS).
  **Two real light-mode-only bugs found and fixed during verification** (see `brand/THEME.md`'s new
  "Light mode" section for the general rule these both fall under — fixed-dark surfaces need fixed
  colors, not theme-tracked tokens):
  1. `.btn--ghost` (used inside the home hero and every `.callout-strip`) initially used the
     theme-tracked `--text-secondary`/`--accent-cyan` tokens, which flip to dark values in light
     mode — making "Meet NYTE City" and "Join the Discord" nearly invisible against those buttons'
     always-dark backing. Fixed to fixed `rgba(255,255,255,0.8)` text + fixed `--static-cyan` hover.
  2. Plain (non-`.btn`) links inside `.callout-strip` (About's "News" link, News's "studio blog"
     link) inherited the global `a` rule's `--accent-cyan`, which resolves to the same Deep Circuit
     navy as the strip's fixed background in light mode — invisible. Added a fixed `--signal-gold`
     override for `.callout-strip a:not(.btn)`.
  Also fixed three inline-style accent colors on About's crew cards (`about/index.html`) that
  referenced the raw `--color-static-cyan`/`--color-ghostly-green`/`--color-neon-veil` directly —
  same WCAG-failure issue the shared token file warns about — now `--accent-cyan`/`--accent-green`/
  `--accent-magenta`, and the muted nickname text now uses `--text-secondary` instead of the
  near-white `--color-neutral-zone` (which would've nearly disappeared on a white card).
  Verified live via `jekyll serve`: toggled both directions on Home, confirmed `localStorage`
  persistence survives a fresh navigation (no flash), spot-checked Rules Preview hub, Character
  Creation's new character-sheet callout-strip, About, and The World in both themes, and confirmed
  dark mode is pixel-identical to before this change (regression check). `brand/THEME.md` updated
  with a "Light mode" section documenting the token system and the fixed-vs-theme-tracked rule for
  future pages/components.

- **Reddit added to socials (2026-09-07).** Ken confirmed `r/shadowsRPG` is the game's official
  subreddit. Added `reddit: https://www.reddit.com/r/shadowsRPG/` to `_config.yml`'s `social:`
  block and a Reddit badge (simple-icons mark) to `_includes/social-icons.html`, per Ken's
  requested order: Discord, Patreon, Reddit, then the rest (Twitch, X, YouTube unchanged relative
  to each other). **This is a deliberate, one-way divergence from `GetDangerousGames-Site`'s copy
  of `social-icons.html`** — the 2026-09-07 social-sync entry above notes the two were byte-for-byte
  identical at the time, but Reddit is Shadows-specific (the game's subreddit, not a studio-wide
  account) and the reorder was a Shadows-only ask, so GD's copy is intentionally left as-is rather
  than back-ported. A future full social-sync pass should treat this file's divergence as expected,
  not drift to fix.

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
  blog. Replaces the dead Blogspot embed from the old site. **Superseded 2026-09-07** — see the
  Build status entry below; the "project-milestone archive" half of this decision was dropped
  once Ken confirmed Shadows updates would be written on the studio blog going forward, not
  maintained separately here.
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

- **Blog cross-posting — link-out shipped and confirmed live 2026-09-06/07.** The GD blog
  (`GetDangerousGames-Site`) tags Shadows-relevant posts `Shadows` and has a client-side
  tag-filter UI on `/blog/`; `News` links out to `https://getdangerous.net/blog/?tag=Shadows` via
  a "Follow the studio too" strip, kept deliberately separate from the milestone list above it
  (the `/news/` archive stays a Shadows-specific log, not the GD blog — see `content/sitemap.md`
  §6). The deep-link support (`?tag=` query param support in `blog/index.html`'s tag-filter
  script) was implemented by Ken directly in that repo (commit `4268919`, alongside pointing
  getdangerous.net's DNS at GitHub Pages) rather than through the pending patch this repo had
  drafted — **verified live 2026-09-07**: `getdangerous.net/blog/?tag=Shadows` resolves, DNS is
  confirmed switched, and the "Shadows" pill pre-selects correctly, showing only the 3
  Shadows-tagged posts. The `C:\Apps\NEXT-shadows-blog-cross-link.md` / `PENDING-shadows-blog-tag-filter.patch`
  files that were sitting outside this repo for that change are now obsolete — safe to delete.
  **The client-side embed is now built, 2026-09-07** (the JSON/RSS-embed option flagged as
  unblocked, above, turned into this rather than an actual JSON feed — GD's blog has no feed
  endpoint, so the embed fetches `getdangerous.net/blog/?tag=Shadows`'s raw HTML and parses it
  with `DOMParser`, filtering `.post-card` elements by their `data-tags` attribute for `Shadows`).
  Lives in `news/index.html` as a `#gd-blog-embed` section, hidden until the fetch resolves with
  at least one matching post, rendered above the existing "Follow the studio too" link-out (kept
  as a fallback for fetch failures and as the "see everything" path). Verified working via local
  `jekyll serve` — pulled and rendered the 3 real Shadows-tagged posts with correct absolute links
  back to `getdangerous.net`. **Fragile by nature:** this scrapes GD's blog page markup rather
  than a stable data contract, so a future redesign of `GetDangerousGames-Site/blog/index.html`
  that renames `.post-card`/`.post-card-date`/`data-tags` will silently break this (it just fails
  the fetch/parse and falls back to the link-out — no visible error, so it's worth spot-checking
  `/news/` after any GD blog markup change).
- **shadowsrpg.com DNS/CNAME switch — code side done 2026-09-07, waiting on DNS propagation.**
  Scott (who controls the shadowsrpg.com domain, not Ken) gained access to the domain's DNS
  settings and pointed it at GitHub Pages using the same record set already proven out for
  getdangerous.net (GitHub Pages' 4 apex `A` records + a `www` `CNAME` to `kazamuki.github.io`).
  With that in place, this repo added the `CNAME` file (content: `shadowsrpg.com`) and flipped
  `_config.yml`'s `url` to `"https://shadowsrpg.com"` / `baseurl` to `""`. **Until DNS actually
  propagates and GitHub issues the HTTPS cert, `https://shadowsrpg.com` will keep serving the old
  Google Sites site** (same platform bundle flagged elsewhere in this file, `AIza...` keys and
  all) — that's expected, not a sign anything is broken; don't re-touch the CNAME/config over it.
  A future session should just check whether `https://shadowsrpg.com` now serves this Jekyll
  build before assuming more work is needed here.

## Conventions

- Keep `content/` for anything about what the site says (inventory, sitemap, copy drafts).
- Keep `brand/` for anything about how the site should look/sound (theme, art licensing).
- When brand reference files here fall out of sync with their sibling-repo originals, say so
  explicitly rather than silently trusting whichever copy is open in the session.
