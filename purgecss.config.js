module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  // Only purge site-authored CSS. Gem-built Tailwind/bootstrap-compat sheets are
  // already optimized; purging them removes navbar-expand rules and hides the menu.
  css: ["_site/assets/css/main.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    "collapse",
    "collapsing",
    "show",
    "dropdown-menu",
    "dropdown-item",
    "table",
    "table-dark",
    "table-hover",
    "table-responsive",
    "af-tooltip",
    "af-popover",
    "font-weight-bold",
    "font-weight-medium",
    "font-weight-lighter",
    // Navbar (also guarded by limiting css files above; keep for main.css rules)
    "navbar",
    "navbar-expand-sm",
    "navbar-collapse",
    "navbar-nav",
    "navbar-toggler",
    "nav-item",
    "nav-link",
    // medium-zoom injects these at runtime, so they never appear in the static
    // HTML PurgeCSS scans; without them the zoom overlay's z-index rule is purged
    // and page chrome (scroll-progress bar, ToC) bleeds through a zoomed image.
    "medium-zoom-overlay",
    "medium-zoom-image--opened",
  ],
};
