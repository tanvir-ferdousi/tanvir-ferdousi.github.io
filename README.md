# tanvir-ferdousi.github.io

Source for [tanvir-ferdousi.github.io](https://tanvir-ferdousi.github.io), built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (v1.2).

al-folio v1 is a "thin starter": this repo holds the content and configuration, while layouts, styles, and scripts come from Ruby gems (`al_folio_core`, `al_folio_cv`, and other `al_*` plugins) pinned in the `Gemfile`. The upstream theme documentation is in [`docs/`](docs/).

## Contents

- [Environment setup (one time)](#environment-setup-one-time)
- [Editing content](#editing-content)
- [Building and previewing locally](#building-and-previewing-locally)
- [Publishing](#publishing)
- [Local theme overrides](#local-theme-overrides)
- [Upgrading al-folio](#upgrading-al-folio)
- [Troubleshooting](#troubleshooting)

## Environment setup (one time)

These steps are for macOS with [Homebrew](https://brew.sh/).

**1. Install Ruby and ImageMagick.** The macOS system Ruby (2.6) is too old for this site, so use Homebrew's.

```bash
brew install ruby imagemagick
```

**2. Put Homebrew Ruby and its gem binaries first on your `PATH`.** Add these lines to `~/.zshrc`, then open a new terminal:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export PATH="$(ls -d /opt/homebrew/lib/ruby/gems/*/bin | tail -1):$PATH"
```

Check that it worked: `ruby -v` should print 3.3 or newer (not 2.6).

**3. Install Bundler and the site's gems.** The version must match `BUNDLED WITH` at the bottom of `Gemfile.lock` (currently 4.0.6).

```bash
gem install bundler -v 4.0.6
cd /path/to/tanvir-ferdousi.github.io
bundle install
```

**4. Optional extras:**

- **Node.js** (`brew install node`) is only needed to run PurgeCSS locally for an exact copy of the production CSS, or the Prettier lint (`npm ci && npm run lint:prettier`). The live site's CSS is purged in CI either way.
- **Python** with `pip install -r requirements.txt` is only needed for Jupyter notebooks or RenderCV PDF generation, neither of which this site uses right now.

ImageMagick creates the responsive `.webp` image variants. Without it the build still works, but it prints warnings and serves only the original images.

## Editing content

| What you want to change          | File(s)                                                                |
| -------------------------------- | ---------------------------------------------------------------------- |
| Home page text, subtitle, phone  | [`_pages/about.md`](_pages/about.md)                                   |
| Profile photo                    | `assets/img/profile_pic.jpg` (name is set in `_pages/about.md`)        |
| Publications                     | [`_bibliography/papers.bib`](_bibliography/papers.bib)                 |
| Publication PDFs                 | `assets/pdf/`                                                          |
| Projects                         | [`_projects/*.md`](_projects/), with images in `assets/img/<project>/` |
| Project categories on the page   | `display_categories` in [`_pages/projects.md`](_pages/projects.md)     |
| CV page                          | [`_data/cv.yml`](_data/cv.yml)                                         |
| CV PDF (icon on CV page)         | `assets/pdf/tanvir_ferdousi_cv.pdf`                                    |
| Code page table                  | [`_pages/code.md`](_pages/code.md)                                     |
| Social icons and email           | [`_data/socials.yml`](_data/socials.yml)                               |
| Site name, footer, theme options | [`_config.yml`](_config.yml)                                           |
| Link and accent colors           | [`_sass/_custom.scss`](_sass/_custom.scss)                             |

### Publications

Each entry in `papers.bib` is a normal BibTeX entry plus a few al-folio fields:

```bibtex
@article{ferdousi2023machine,
  abbr={ACM/SIGSIM},           % badge shown next to the entry
  title={...},
  author={Ferdousi, Tanvir and ...},
  journal={Winter Simulation Conference},
  year={2023},
  abstract={...},              % adds an "Abs" button
  pdf={explainability_wsc23.pdf}, % file in assets/pdf/ (or a full URL)
  html={https://...},          % adds an "HTML" button
  selected={true}              % also list it on the home page
}
```

Your name is highlighted automatically using `scholar.first_name`/`last_name` in `_config.yml`.

### Projects

Each file in `_projects/` is one project card plus its detail page:

```yaml
---
layout: page
title: Generating swine movement network
description: One-line summary shown on the card
img: /assets/img/asfv/movement_net.jpg # card thumbnail
importance: 3 # lower numbers are listed first
category: graph mining # must match an entry in display_categories
---
Markdown body of the project page...
```

### CV

`_data/cv.yml` uses the RenderCV-style format that al-folio v1 expects: a top-level `cv:` key with `name`, `email`, and `sections`. The section names already in use each have their own layout:

- `Experience` entries: `position`, `company`, `start_date`, `end_date` (leave out for "Present"), `highlights`.
- `Education` entries: `studyType`, `institution`, `date` (or `start_date`/`end_date`), `highlights`.
- `Honors and Awards` entries: `title`, `date`.
- `Interests` entries: `name`, `keywords`.
- Any other section name (such as `General Information`) renders `label`/`details` pairs.

A `highlights` item can be plain text or Markdown. To group bullets under a bold heading, write the item as a block:

```yaml
highlights:
  - |
    **Project name**

    - First bullet
    - Second bullet
```

Remember to update `assets/pdf/tanvir_ferdousi_cv.pdf` too; the PDF isn't generated from `cv.yml`.

### Navigation bar

A page shows up in the top menu when its front matter has `nav: true`; `nav_order` sets its position.

### Colors

The accent color (links, the selected menu item, badges, hover effects) is set separately for light and dark mode at the top of [`_sass/_custom.scss`](_sass/_custom.scss):

```scss
$light-theme-color: #0076df; // light mode: links, selected menu item, badges
$light-hover-color: #0076df; // light mode: links on mouse-over

$dark-theme-color: #58a6ff; // dark mode
$dark-hover-color: #58a6ff;
```

Change the hex values and save. With `jekyll serve` running, the page reloads with the new colors; if it doesn't, hard-refresh (Cmd+Shift+R), because the browser may have cached the old stylesheet. For example, to make links darken on hover in light mode, set `$light-hover-color: #00369f;`.

A few ready-made options:

| Look            | Light mode | Dark mode |
| --------------- | ---------- | --------- |
| Blue (current)  | `#0076df`  | `#58a6ff` |
| Navy            | `#1f4e9c`  | `#7aa7f0` |
| Teal            | `#00838f`  | `#4dd0e1` |
| Green           | `#00873e`  | `#5fd38d` |
| Original purple | `#b509ac`  | `#2698ba` |

Pick dark-mode colors that are lighter than their light-mode partners, so links stay readable on the dark background. The light mode's faint inline-code background is tinted from `$light-theme-color` automatically.

`_custom.scss` loads after all the theme styles, so it's also the place for any other small CSS tweaks. Other theme variables you can override in the same `:root { ... }` / `html[data-theme="dark"] { ... }` blocks are listed in the theme's `_sass/_themes.scss` (run `bundle info al_folio_core --path` to find it), such as `--global-bg-color` and `--global-text-color`.

## Building and previewing locally

Start a local server that rebuilds when you save a file:

```bash
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. Changes to Markdown, data, and Liquid files show up on save. **Changes to `_config.yml` need a server restart** (Ctrl+C, then run the command again).

To build the production version exactly as CI does, without a server:

```bash
JEKYLL_ENV=production bundle exec jekyll build
npx --yes purgecss -c purgecss.config.js   # optional, needs Node
```

The output goes to `_site/` (git-ignored). To view it: `cd _site && python3 -m http.server 4000`.

## Publishing

The live site is deployed automatically by GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): every push to `master` that touches site files is built, CSS-purged, and pushed to the `gh-pages` branch, which GitHub Pages serves. It takes about 2–3 minutes.

```bash
git pull                          # a bot commits Google Scholar citation updates to _data/citations.yml
git add -A
git commit -m "Describe your change"
git push origin master
```

Check progress in the repo's **Actions** tab ("Deploy site"). If the live site still shows old content afterwards, hard-refresh the browser (Cmd+Shift+R).

Never edit or push to the `gh-pages` branch by hand; it's overwritten on every deploy.

Other checks that run on push:

- **Prettier code formatter** fails if any file isn't formatted the way Prettier wants. Before pushing, run `npx prettier . --check`, or `npx prettier --write <file>` to fix a file. Two things to watch for in Markdown:
  - A Kramdown class line such as `{:.table .table-bordered}` must sit directly under its table, with no blank line, or the table loses its styling. Prettier adds that blank line, so these tables are wrapped in `<!-- prettier-ignore-start -->` / `<!-- prettier-ignore-end -->`. Do the same for any new styled table.
  - Leave `assets/css/main.scss` alone; it's in `.prettierignore` on purpose.
- **Integration tests** and **Render a CV** are set to manual-only (`workflow_dispatch`). They're al-folio's template checks and RenderCV PDF builder, and they fail on this site by design. A future al-folio upgrade that copies in new versions of `.github/workflows/unit-tests.yml` or `render-cv.yml` will turn them back on, so keep the manual-only `on:` block when merging.

## Local theme overrides

The site overrides a few files from the theme gems. Each override shadows the gem's copy entirely:

| Local file                                                         | Why                                                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [`assets/css/main.scss`](assets/css/main.scss)                     | Identical to the theme's copy, plus one last line: `@use "custom";`, which loads `_sass/_custom.scss`. |
| [`_includes/cv/experience.liquid`](_includes/cv/experience.liquid) | CV layout: date at the top right, no location column.                                                  |
| [`_includes/cv/education.liquid`](_includes/cv/education.liquid)   | Same layout for Education.                                                                             |

Two more site-owned files support these. They aren't copies of theme files, so they never need syncing:

- [`_sass/_custom.scss`](_sass/_custom.scss) holds the colors and a navbar fix that keeps the desktop menu visible (the Bootstrap-compat layer otherwise hides it with `visibility: hidden`).
- `_includes/cv/entry_header_styles.liquid` holds the styles shared by the two CV templates.

The overrides are recorded in `.al-folio-overrides.yml`, so after updating the theme gems you can see whether the upstream files changed:

```bash
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff assets/css/main.scss   # see what changed upstream
bundle exec al-folio upgrade overrides accept assets/css/main.scss # after merging the changes in
```

When re-syncing `assets/css/main.scss`, copy the theme's new version and add `@use "custom";` back as the last line. The file is listed in `.prettierignore` so the formatter doesn't change it.

## Upgrading al-folio

`bundle update` alone does **not** upgrade the theme, because every gem is pinned to an exact version. For a new al-folio release:

1. Read the release notes (`docs/releases/` upstream, or the [GitHub releases page](https://github.com/alshedivat/al-folio/releases)).
2. Update the pinned versions in the `Gemfile`. If the release adds plugins, add them to both the `Gemfile` and the `plugins:` list in `_config.yml`; a plugin listed in only one of the two silently does nothing.
3. Install and check:

   ```bash
   bundle install
   bundle exec al-folio upgrade audit
   bundle exec al-folio upgrade overrides audit
   ```

4. Preview locally (`bundle exec jekyll serve`), especially the navbar, link colors, and the CV page, since those use overrides.
5. Commit and push.

The pre-v1 version of the site is preserved on the `backup/pre-v1-upgrade` branch.

## Troubleshooting

- **`Could not find 'bundler' (4.0.6)` or Ruby 2.6 errors:** the macOS system Ruby is first on your `PATH`. Redo step 2 of the setup and open a new terminal.
- **Build fails in `jekyll-socials`:** `_data/socials.yml` keys must use the v1 names, for example `github_username`, not `github`.
- **`Address already in use - bind(2) for 127.0.0.1:4000`:** another server is already on port 4000. Stop it, or run `bundle exec jekyll serve --livereload --port 4001`.
- **Harmless messages from `jekyll serve`:** `directory is already being watched` (from the symlinked `.claude/` and `.codex/` folders) and `jupyter-nbconvert is not on PATH` (the site has no notebooks) can both be ignored.
- **A config change doesn't show up locally:** restart `jekyll serve`.
- **Live site looks stale:** wait for the "Deploy site" action to finish, then hard-refresh.
