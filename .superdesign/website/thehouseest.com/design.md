---
version: "superdesign-alpha"
name: "Lightbox Civic Grid"
description: "Off-white editorial system with a condensed display wordmark, a near-black video hero, and one saturated amber accent rationed to banners, CTAs, and a single word of color per heading."
colors:
  background: "#F6F5F5"
  surface: "#FFFFFF"
  surface-dark: "#242424"
  text-primary: "#000000"
  text-secondary: "#292929"
  accent: "#F1D044"
  border: "#D8D8D8"
typography:
  headline-md:
    fontFamily: "Arial"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "-1.9px"
  body-md:
    fontFamily: "Arial"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.7"
  label-md:
    fontFamily: "Arial"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "-2.6px"
  body-base:
    fontFamily: "Arial"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-condensed:
    fontFamily: "Untitled Sans"
    fontSize: "72px"
    fontWeight: 700
    style: "condensed, heavy-stroke display wordmark"
  accent-serif:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: 400
    style: "secondary sans used in longform body copy"
spacing:
  base: "8px"
  gap: "24px"
  section-gap-lg: "352px"
  section-gap-sm: "225px"
  card-gap: "55px"
rounded:
  control: "6px"
  card: "6px"
  sharp: "5px"
  pill: "50px"
components:
  button-primary-cta:
    background: "#F1D044"
    text-color: "#292929"
    radius: "6px"
    height: "50px"
    padding: "13px 20px"
    border: "1px solid rgb(241, 208, 68)"
    hover-background: "#292929"
    hover-text-color: "#FFFFFF"
  button-dark:
    background: "#292929"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "50px"
    padding: "13px 20px"
    border: "1px solid rgb(41, 41, 41)"
  button-text-link:
    background: "transparent"
    text-color: "#292929"
    radius: "0px"
    height: "32px"
    padding: "0px"
  card-media-panel:
    background: "#F7F7F7"
    radius: "0px"
    padding: "0px"
  card-media-rounded:
    background: "#FFFFFF"
    radius: "6px"
    padding: "0px"
    shadow: "rgba(0, 0, 0, 0.1) 0px 2px 8px 0px"
  card-text-only:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Lightbox Civic Grid
Source: https://www.thehouseest.com/

## Overview
This is an editorial, off-white minimalism system wearing one condensed-display wordmark as its signature mark, built on an Arial-driven type system and an unapologetically flat grid of sharp-cornered (0px) panels. It sits closer to Swiss/International rigor than to soft SaaS gloss — ruled dividers, left-aligned headings, no gradients on content cards — but it breaks that rigor once per page with a single saturated amber band and a near-black video-backed hero, giving the system a civic-bulletin-board character: mostly paper-white and ink-black, punctuated by one loud color used like a rubber stamp.

## Composition
The first screen is a centered oversized condensed wordmark sitting directly beneath a plain top navbar, immediately followed by a full-bleed, near-black vertical-gradient video panel that occupies most of the fold — color is entirely withheld here. Scrolling down, density increases steadily: a two-up media-card pair, a divider-separated utility row, a full-width amber callout block, a three-up event-card row, a three-column text link grid, then an amber full-bleed band pairing a photograph with a text column, and finally a near-black band holding a pull-quote and a lone amber button before the footer. The deliberate choice is to keep the hero monochrome and push all saturation into mid-page bands and the footer-adjacent sections — this rejects the more common pattern of a colorful/gradient hero with a muted body, instead treating amber as a rationed "stop here" marker that recurs roughly every second or third section.

## Colors
`#F6F5F5` is the page background and dominates the pixel field at roughly 65%, with `#F7F7F7`/`#FFFFFF` panel fills reading as the same near-white territory — this is a light-mode-default system, not dark. `#F0D848`/`#F1D044` amber is the sole accent, measured at roughly 10% of rendered pixels, landing only on: one word inside a heading, one full-width callout panel, one CTA button, and one full-bleed photo band — never on body text or structural chrome. `#303030`/`#292929` and `#181818`/`#242424` form the near-black ink and the two dark surface bands (hero video, footer-adjacent quote band), together near 15% of the field. Borders run on `#D8D8D8`/`#B9B9B9` hairlines. Text ink is `#000000` for primary copy and `#292929`/`#242424` for secondary/body copy — no separate muted-gray token is used; hierarchy comes from size and weight, not tint. White (`#FFFFFF`) is reserved for card surfaces and text-on-dark.

## Typography
A single workhorse family, Arial, carries both display and body duty: `headline-md` at 48px/500, line-height 1.1, tracking -1.9px for section titles, and a near-identical `label-md` at 48px/500, line-height 1, tighter tracking -2.6px for tighter heading contexts. Body copy sits at `body-md` 15px/400/1.7 for dense paragraph blocks and a slightly looser `body-base` 16px/400 for primary reading copy. The condensed heavy-stroke wordmark in the hero and nav logo is a distinct, much larger accent face (treated here as `accent-condensed`, Untitled Sans) — this is the system's one typographic flourish, appearing exactly twice (nav mark, hero mark) and nowhere else. A secondary humanist sans (Manrope) appears in longer-form paragraph passages as `accent-serif` role, giving slightly warmer body texture than the Arial headings.

## Layout
Content is held to a 1400px max-width with generous outer margins. Section rhythm is wide and slow: gaps of 352px and 225px separate major bands, while internal card grids use a tighter 55px, 24px, or 20px gutter. Three measured grid patterns recur: a 2-column/2-item split at roughly 41/55 proportions (service-location cards), a dense 3-column × 2-row grid at even ~32% columns (the community-ways icon/text grid), and a 2-column/2-item 49/49 split (next-steps link pairs). Card radius is either 0px (flat panel cards, text-only cards) or 6px (the three photo-topped rounded cards and all buttons) — the system deliberately mixes sharp structural panels with softly rounded media cards and pill-free, rectangular buttons. Pill radius (50px) is reserved but not used on primary buttons in the measured set, appearing instead as a shape token for smaller chip-like elements.

## Components
- **Navbar**: edge-to-edge, full-width bar at the very top, transparent/background-matching fill, sitting flush with no inset margin or capsule shape — square all four corners. Contains the condensed wordmark mark at left and a six-item text link row at right (Home-equivalent through a final utility link), each nav item a transparent 0-radius text button, 32px tall. The rightmost item reads visually as the account/support utility; no filled CTA sits in the bar itself — the navbar is link-only.
- **Hero media panel**: one per page, full-bleed below the hero wordmark, a tall near-black panel carrying a looping video (stand in with a static dark vertical gradient `linear-gradient(#303030, #181818)` for a rebuild). No text or buttons overlay it in the captured frames — color is entirely withheld here to contrast the amber used later.
- **Button — primary CTA (amber)**: appears mid-page inside the amber callout band and again as the sole CTA in the closing dark quote band. Fill `#F1D044`, text `#292929`, radius 6px (slightly-rounded), height 50px, padding `13px 20px`, border `1px solid rgb(241, 208, 68)`; hover inverts to `#292929` fill with `#FFFFFF` text. This is the system's highest-contrast, most prominent button — treat it as primary wherever present.
- **Button — dark**: paired beside the amber CTA in the "next generation" band (two buttons side by side). Fill `#292929`, text `#FFFFFF`, radius 6px, height 50px, padding `13px 20px`, border `1px solid rgb(41, 41, 41)` — same shape family as the amber button, inverted colorway, used for secondary same-weight actions.
- **Button — text link (nav/body utility)**: transparent fill, ink-colored text, 0px radius (sharp, no visible button shape), 32px height, zero or near-zero horizontal padding (`9.12px 0px` variant also present). Used eleven-plus times across the nav and inline "Get Directions"/arrow-suffixed links; these are inline affordances, not boxed buttons — never render them as pills.
- **Card family — flat media panel** (×4, "Visit"-type location cards): `#F7F7F7` fill, 0px radius, 0px padding, full-width stacked rows (each row spans 100% of its column). Anatomy top-to-bottom: a top-bleed photograph, a heading, address/body-text lines, a bold service-time label, and a trailing arrow-suffixed text link — no card border, no shadow.
- **Card family — rounded media card** (×3, event/announcement cards): `#FFFFFF` fill, 6px radius, 0px internal padding before content, drop shadow `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`. Anatomy: a top-bleed poster-style graphic (amber or neutral background with bold condensed display lettering baked into the image) covering roughly half the card height, followed by a heading with an arrow-suffix icon and a small calendar-icon date line beneath. A thin dark 1px outline rings each card.
- **Card family — text-only link row** (×7 and ×3 variants, "Ways We Do"/"Next Steps" grids): transparent background, 0px radius, 0px padding. Anatomy is heading + short body paragraph only (the 3×2 grid), or heading + trailing arrow only, divided by hairline `#D8D8D8` rules (the 2×2 next-steps grid) — no imagery, no card chrome at all.
- **Icon-only card** (×3): transparent, 0px radius, bare icon glyph with no surrounding frame — used as small supporting marks within the community grid.
- **Banner / CTA band — amber callout**: one full-width amber (`#F1D044`-family) rectangular block mid-page, 0px radius, containing a left-aligned heading plus a right-aligned two-line support paragraph and two arrow-suffixed text links stacked — this is a distinct banner family, not a card, spanning the full content width as a single panel.
- **Full-bleed photo + text band**: one amber full-bleed section pairing a single photograph (left, roughly 45% width) against a heading + two paragraphs + two dark buttons (right) — the only section mixing a photographic image directly against the accent color field.
- **Quote band**: one near-black full-width section near the page end, pairing a left-aligned heading against a right-aligned italicized-feeling pull-quote in white/light text and a single amber CTA button beneath — the darkest surface on the page outside the hero.
- **Footer**: transparent background, no visible container fill, organized as a flat multi-column link list totaling 15 links under column labels — no border, no dark footer band; it sits directly on the page background.

## Graphics & Effects
The hero surface is a live video element; its static stand-in should be a vertical dark gradient reading roughly `#303030` top to `#181818`/near-black bottom, covering the full hero panel width — this gradient belongs only to that one hero panel, never stretched across the whole page. Rounded media cards carry a soft, low-spread elevation shadow `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`; flat panels and text-only cards carry no shadow at all (shadow tokens of `0px 0px 0px 0px` effectively mean "flat, no elevation" on those families). No noise, grain, or pattern texture is visible anywhere — surfaces are clean flat fills throughout, with photographic imagery supplying the only texture.

## Motion
Transitions are broad-property and deliberate rather than snappy: `all 0.5s cubic-bezier(0.33, 0, 0.19, 1)` for primary hover/state changes (e.g., the amber-to-dark button inversion), a slower `all 1s ease` for larger surface transitions, and `all 0.25s ease` for the quickest micro-interactions. A set of icon-level keyframe utilities (beat, bounce, fade, beat-fade, flip, shake) are available for small accent-icon emphasis (arrow glyphs, calendar icons) but should be used sparingly and briefly — this is a composed, editorial system, not a kinetic one.

## Guardrails
- Never fill the hero with a saturated or multi-hue gradient — keep it a dark, near-black vertical gradient with amber withheld entirely.
- Never round the flat panel cards or text-link grids — their 0px corners are structural, not an oversight; reserve 6px rounding for photo-topped cards and buttons only.
- Never render the amber accent on more than one band/button per section — it is a rationed stamp, not a palette workhorse.
- Never substitute the nav's plain text links for boxed/pill buttons — the nav is link-only with zero added CTA chrome.
- Never swap Arial for a geometric grotesk across headings — the display condensed wordmark is the only typographic departure, confined to two instances.