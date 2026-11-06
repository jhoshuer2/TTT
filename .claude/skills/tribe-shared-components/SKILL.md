---
name: tribe-shared-components
description: Build or change pages and sections on The Test Tribe static site so they reuse shared components and match the homepage look and feel. Use whenever adding a page, section, card, form, FAQ, nav item, CTA or footer link, or when a requirement doc has to be mapped onto an existing page.
---

# Test Tribe shared components

The site is plain static HTML on Vercel: no build step, no framework. Consistency
comes from one token file, two shared stylesheets and custom elements. Follow
this skill so every new piece looks like it came from the homepage.

## Source of truth

- **Homepage:** `the-test-tribe-home-5-illustrated.html`. When unsure how
  something should look, open it and copy its spacing, type scale and tone.
- **Tokens:** `the-test-tribe-tokens.css` (`--v` #E5482D, `--v2`, `--brown`, `--ink`,
  `--muted`, `--line`, `--blush`, `--peach`, `--sand`, `--stone`, spacing and radius
  scales). Pages also use `--page-*` aliases from `site-pages.css`.
- **Type:** Schibsted Grotesk for text and JetBrains Mono for eyebrows and labels.
  Both load from the Google Fonts link already in every page `<head>`.
- **Shapes:** 4px radius on buttons and inputs, 8px on cards, 16px on large
  panels. Warm neutrals only, with one orange accent. Avoid new hex colours.
  Pick the nearest token.

## Page skeleton (copy from `testers.html`)

```html
<head> tokens.css → site-pages.css → site-components.css (+ shared-trusted-logos.css if logos) → fonts </head>
<body>
<tribe-site-nav></tribe-site-nav>
<main> hero → sections (alternate plain / section-soft; one section-dark; end with cta-band) </main>
<tribe-site-footer></tribe-site-footer>
<script src="site-components.js"></script><script src="site-pages.js"></script>
```

Never hand-write the nav, drawer or footer. They live in `site-components.js`.

## Shared custom elements (`site-components.js`)

| Element | Use |
|---|---|
| `<tribe-site-nav>` | Global nav, floating on scroll, mobile drawer. Add `home` on the homepage, `variant="teams"` on the Teams page (anchor links plus a discovery-call CTA). |
| `<tribe-site-footer>` | Newsletter, link columns, wordmark, policies. `variant="teams"` swaps in team newsletter copy and quick links. |
| `<tribe-journeys current="teams">` | Cards linking to the other audience journeys, leaving out the current one. |
| `<tribe-community-stats [variant="teams"]>` | Community numbers; `variant="teams"` shows the three corporate-training numbers in the same layout. |
| `<tribe-page-faq page="teams">` | FAQ accordion. Content comes from `pageFaqContent[page]`. |
| `<tribe-upcoming-events limit="3" compact>` | Event cards. |
| `<tribe-chapter-card>` | Chapter call-out card. |
| `<tribe-research-reports [compact]>` and `<tribe-report-cover>` | Research banners and covers. |
| `<tribe-trusted-logos [variant="clients"]>` (`shared-trusted-logos.js`) | Scrolling logo section with heading and note. Default is member companies; `variant="clients"` is the corporate-training client set. |

## Shared building blocks (`site-pages.css`)

- **Layout:** `.wrap` (max 1180px), `.section`, `.section-soft`, `.section-dark`,
  `.section-accent`, `.split`, `.hero` > `.hero-grid` > `.hero-copy` + `.hero-art`.
- **Headings:** `.section-heading` containing `.eyebrow`, `h2` and `p`. Centred,
  with the eyebrow in accent colour.
- **Content:** `.cards` (3 columns) > `.card` > `.icon-box` + `h3` + `p` + `.card-link`.
  Also `.pills` and `.pill`, `.bullet-list`, `.feature-panel`, `.event-card`, `.faq`,
  `.cta-band`.
- **Buttons:** `.btn` with `.btn-primary` (orange), `.btn-outline` or `.btn-light`.
  Primary CTA first, secondary second, in `.hero-actions`. External links use
  `↗` and `target="_blank" rel="noopener noreferrer"`.
- **Forms:** use `.form-panel` > `.form-grid` > `.form-field` (`.form-field-wide`),
  `.form-submit` and `.form-fallback`. `partners.html` and `corporate-training.html`
  both use them. New forms reuse these classes, not a new style.
- **Illustrations:** isometric blocks on a warm 24px grid with one accent,
  using the `.gateway-illustration` and `.illo` animation classes (`flow`, `pulse`,
  `bob`, `ghost`). Copy the SVG pattern from `testers.html` and give clipPath IDs
  a unique suffix. Icons use `.gateway-mark` on a 48x48 viewBox.

## Rules

1. **Reuse before you write.** Search `site-components.js`, `site-pages.css` and
   `site-components.css` for an existing block first. Style a new block only
   when nothing fits.
2. **Put anything used on two or more pages in the shared files.** Make it a
   custom element when it has markup or data, or a class in `site-pages.css`
   when it is only styling. Page-specific blocks get a page prefix (`teams-*`,
   `leader-*`, `partner-*`) and sit under a comment banner in `site-pages.css`.
   If a page-specific block turns out to be reused, rename it and move it.
3. **No inline `<style>` or `style=""`** except illustration `<style>` blocks
   and the one-off colour overrides that already exist.
4. **Copy lives with its component.** FAQ answers go in `pageFaqContent`.
   Nav links go in `TribeSiteNav`. Footer links go in `TribeSiteFooter`.
   Never duplicate them in page HTML.
5. **Per-page differences go through attributes**, not forks. Examples:
   `<tribe-site-nav variant="teams">` switches the link set and CTA, and
   `<tribe-site-footer variant="teams">` switches the newsletter copy and links.
   Add a new variant in the component when another page needs one.
6. **Responsive by default.** Check 1280, 900 and 390px. Grids collapse at 900px
   and 680px as in `site-pages.css`. Hero buttons stack full-width on mobile.
7. **Accessibility.** Keep the `:focus-visible` ring and give every section an
   `aria-labelledby` or `aria-label`. Respect `prefers-reduced-motion`. Give
   every form field a `label` and `autocomplete`.
8. **Tone.** Sentence case, UK spelling (organisation, programme), plain
   confident copy. Eyebrow, then a one-sentence `h2`, then one supporting
   line.
9. **Link the other journeys consistently.** Testers → `testers.html`, Leaders →
   `leaders.html`, Partners → `partners.html`, Teams → `corporate-training.html`.
   Home is `the-test-tribe-home-5-illustrated.html`.

## Checklist for a new section or page

1. Find the closest existing section on the homepage or in `testers.html`,
   `leaders.html`, `partners.html` or `corporate-training.html`.
2. Build it from the shared blocks above. Add shared pieces to the shared files.
3. Preview at 1280 and 390px with Playwright (`python3 -m http.server`) and check
   for horizontal scroll, orphaned headings and contrast on `.section-dark`.
4. Diff against the requirement: every named heading, CTA and list item should
   exist, or be flagged as a gap with a reason.
5. Commit CSS/JS changes separately from copy changes where practical.
