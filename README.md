# Shadows RPG — Site

The home site for **Shadows**, a cybernetic, supernatural roleplaying game set in NYTE City,
2099. Live (once DNS finishes propagating) at **[shadowsrpg.com](https://shadowsrpg.com)**. Built
with Jekyll and hosted on GitHub Pages. Serves as a public preview/reference layer over the
Shadows Core Rulebook — Home, a Rules Preview hub (character creation, power levels, stats &
skills, advantages/disadvantages, archetypes, equipment), The World (setting/lore), News, About,
and Credits.

Shadows is part of the [Get Dangerous Games](https://getdangerous.net) family — see the sibling
`GetDangerousGames-Site` repo for the studio's own site.

For the full project history, brand/content decisions, and open items, see
[CLAUDE.md](CLAUDE.md) — this README only covers what you need to get the site running locally.

## Tech stack

- **[Jekyll](https://jekyllrb.com/)** (3.9.0, matching GitHub Pages' legacy build), run via a
  **globally installed** `jekyll` gem — **no `Gemfile`**. This is deliberate: on Ruby 4.0.x,
  loading the `github-pages` gem through Bundler breaks Jekyll's own `_plugins/*.rb`
  autoloading, so the Gemfile approach used on some sibling repos doesn't work here. GitHub
  Pages' legacy build doesn't need a Gemfile in the repo either way, so this only affects local
  previews. See [CLAUDE.md](CLAUDE.md) for the full writeup.
- Plain HTML/Liquid templates + one hand-written CSS file (`assets/css/theme.css`, palette
  lifted from `brand/THEME.md`, including the light/dark theme tokens) — no JS build step, no
  bundler/webpack
- A little vanilla JS for interactive bits (theme toggle, the News page's client-side embed of
  Shadows-tagged posts from the studio blog)

## Prerequisites

- **Ruby**, version 3.x or newer (this project is developed against Ruby 4.0.6). Get it from
  [ruby-lang.org](https://www.ruby-lang.org/en/downloads/) — on Windows, use
  [RubyInstaller](https://rubyinstaller.org/downloads/) with the **Devkit** variant, since some
  gem dependencies need to compile native extensions.
- **Jekyll**, installed as a global gem (not via Bundler):

  ```bash
  gem install jekyll
  ```

No Node/npm, no other language runtimes required.

> **Ruby 3.2+ compatibility note:** Ruby 3.2 removed `String#tainted?`/`#untaint`, but the
> Liquid 4.0.3 that ships with Jekyll 3.9.0 still calls them, which crashes `jekyll build`/`serve`
> outright on a modern Ruby. This repo carries a small shim for it —
> `_plugins/local_ruby_compat.rb` — that no-ops those two methods if they're missing. It's
> checked in and runs automatically; you shouldn't need to do anything extra. It only matters for
> local builds — GitHub Pages' own build servers run a Ruby where the methods still exist.

## Run locally

```bash
jekyll serve --destination _site --port 4000
```

Then open **http://localhost:4000**. Jekyll watches the filesystem and rebuilds automatically on
save — refresh the browser to see changes (no live-reload injection is configured). This is also
the exact command wired up in `.claude/launch.json` for previewing via Claude Code's browser
tools.

## Build / "test"

This is a static site with no test suite — the meaningful check is whether it builds cleanly and
renders correctly:

```bash
jekyll build --destination _site
```

A clean build (no errors/warnings) plus a manual look at the page(s) you changed via
`jekyll serve` is the standard way to verify a change here. There's no CI pipeline — GitHub Pages
runs its own Jekyll build directly from the `main` branch on every push.

## Project structure

- `_config.yml`, `_layouts/`, `_includes/`, `_plugins/`, `assets/` — the Jekyll site itself
- `rules/`, `world/`, `news/`, `about/`, `credits/` — top-level site pages/sections; `index.html`
  is Home
- `content/` — old-site content inventory, sitemap, and porting/decision notes (excluded from the
  built site, kept for reference)
- `brand/` — brand guide, voice guide, and asset-licensing notes (excluded from the built site)

See [CLAUDE.md](CLAUDE.md) for the full file-by-file breakdown and the reasoning behind specific
design/content decisions.

## Contributing

Branch, commit, and open a pull request into `main`:

```bash
git checkout -b feature/short-name main
# commit your changes
git push -u origin feature/short-name
```

Then open a PR (`gh pr create` or the GitHub web UI) and merge once ready.

Before opening a PR, please check [CLAUDE.md](CLAUDE.md) for brand/asset ground rules (what
art is actually cleared for use) and the voice split between site-copy and in-world content —
both are easy to get wrong without that context.
