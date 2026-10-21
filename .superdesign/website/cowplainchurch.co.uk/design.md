---
version: "superdesign-alpha"
name: "Steeple Serif Warmth"
description: "Light, white-dominant community system built on an italic display serif over documentary photography, with a muted slate-blue fill, a mint-outline secondary, and a single coral band reserved for closing contact information."
colors:
  background: "#FFFFFF"
  surface: "#F6F6F6"
  text-primary: "#0A0000"
  text-secondary: "#FFFFFF"
  accent: "#3E7CB1"
  accent-outline: "#3AB795"
  accent-coral: "#EA2E5B"
typography:
  display-lg:
    fontFamily: "Larken"
    fontSize: "80px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-4px"
  headline-md:
    fontFamily: "Larken"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-3px"
  body-md:
    fontFamily: "Work Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Larken"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-1.5px"
  accent-serif:
    fontFamily: "Larken"
    fontWeight: 400
    fontStyle: "italic"
  body-alt:
    fontFamily: "Untitled Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label-caps:
    fontFamily: "Montserrat"
    fontSize: "13px"
    fontWeight: 600
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "144px"
  block-gap: "80px"
  tight-gap: "24px"
rounded:
  control: "70px"
  control-sm: "78px"
  card: "20px"
  pill: "9999px"
components:
  button-primary:
    background: "#3E7CB1"
    text-color: "#FFFFFF"
    radius: "70px"
    height: "48px"
    padding: "16px 40px"
    shadow-rest: "rgba(0, 0, 0, 0.17) 0px 0px 0px 0px"
    shadow-hover: "rgba(0, 0, 0, 0.1) 0px 3.5px 7px 0px"
  button-primary-nav:
    background: "#3E7CB1"
    text-color: "#FFFFFF"
    radius: "78px"
    height: "39px"
    padding: "11.7px 19.5px"
    shadow-rest: "rgba(0, 0, 0, 0.17) 0px 0px 0px 0px"
    shadow-hover: "rgba(0, 0, 0, 0.1) 0px 3.9px 7.8px 0px"
  button-outline:
    background: "transparent"
    text-color: "#3AB795"
    radius: "70px"
    height: "48px"
    padding: "16px 40px"
    border: "1px solid rgb(58, 183, 149)"
  button-text:
    background: "transparent"
    text-color: "#0A0000"
    radius: "0px"
    height: "48px"
    padding: "0px"
  card-feature:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
  card-mini:
    background: "transparent"
    radius: "0px"
    padding: "0px 16px"
---
# Steeple Serif Warmth

Source: https://www.cowplainchurch.co.uk/

## Overview
This is an editorial, photography-led community aesthetic: a near-white page (the pixel field runs ~46% pure white, ~24% near-white `#F0F0F0`) carrying large italic serif (Larken) display type over full-bleed documentary photography, paired with a plain-spoken sans body (Work Sans / Untitled Sans). It reads as warm minimalism rather than corporate SaaS — generous negative space, zero card shadows, zero card radius, and almost no chrome. Color is rationed hard: a single slate-blue (`#3E7CB1`) carries every primary action and one full-width band, a mint (`#3AB795`) is reserved for outline buttons and borders only, and a coral (`#EA2E5B`, `#F03060` as rendered) is held back entirely for the terminal footer band. The system trusts large type and photography to do the work; structure comes from spacing, not boxes.

## Composition
The first screen is a full-bleed photographic hero (a church building against a blue sky) with a transparent, edge-to-edge navbar laid directly over it and a stacked italic-serif headline centered mid-frame, followed immediately by a flush row of five square photo tiles bleeding to the viewport edges — no gutter, no radius. Below the fold the rhythm alternates: a white two-column panel (media-right, text-left) for a single callout, then a full-width slate-blue band of centered italic serif copy, then a white three-up image/caption trio, then a light-gray band repeating the invite headline with two pill buttons, then another light-gray testimonial/video band, then a slate-blue mission-statement band, then a white social-icon row, closing on the coral footer. The deliberate choice is **flush, radius-less media blocks against a white canvas** rather than card-contained imagery with shadow/elevation — this keeps the page feeling like a magazine layout, not a dashboard, and rejects the boxed, shadowed "SaaS card" convention entirely.

## Colors
`#FFFFFF` is the page background and dominant surface (the two largest pixel-field shares, white + near-white, together cover ~70% of the page) — text panels, button-row bands, and the social-icon section all sit on it. `#F6F6F6`/`#F0F0F0` is a secondary light-gray surface used to differentiate alternating bands (the invite and video bands) from pure-white ones without adding borders. `#3E7CB1` is the brand/primary role: solid pill buttons, the mission-statement band fill, and the measured `--color-*` system's nearest declared blue — it's the only saturated color allowed to fill large areas pre-footer. `#3AB795` is a secondary accent confined to thin 1px borders and outline-button text/stroke — never a fill. `#EA2E5B`/`#F03060` is held back completely until the final footer band, where it becomes the sole background, making the page's one true accent color also its closing visual signature. `#0A0000`/`#000000` is body-text ink on white; `#FFFFFF` is text-on-color for every blue or coral band.

## Typography
Larken (serif, italic-leaning in use) carries every display, headline, and label role — `display-lg` 80px/1/-4px tracking for the hero's two-line welcome statement, `headline-md` 64px/1/-3px for section headers (often split into an upright black clause plus an italic blue clause), and `label-md` 48px/1/-1.5px for sub-headers like the mission-statement intro. Work Sans 16px/400/1.5 and Untitled Sans 16px/400/1.5 share the body role — plain, unadorned paragraph text at a consistent measure. Montserrat appears as a small all-caps label face on button text (tracked, uppercase, ~13px). The pairing logic is strict: serif italic for anything emotive or titular, plain geometric sans for anything functional or explanatory — the two never blend within one text block except where a headline itself mixes upright and italic clauses for emphasis.

## Layout
Content is capped at a 1145px max-width for text and paragraph blocks, while photographic rows and color bands run full-bleed edge-to-edge. The hero's five-image row is a uniform 5-column strip, each tile equal width, flush with no gutter — a grid, not a gallery with spacing. Mid-page two-column panels split roughly 40/60 (text-left, image-right bleeding past the text column), repeated identically for the panto promo and a second event block, each stacked full row-height (`rows [100 | 100]`). A second three-up card row (children/sermon/services) uses equal-width columns with small images, radius-less, captioned below in italic serif. Spacing is generous and large-scale: 144px separates major bands, 80px separates sub-blocks, 16-24px handles internal label/caption gaps. Nothing in the measured components carries corner radius except buttons and the footer's circular social icons — the entire card/image vocabulary is sharp-edged.

## Components
- **Navbar**: edge-to-edge, transparent, full viewport width (0/0 inset), square corners on all four corners, 689px tall on this viewport (effectively the hero's own height — it overlays the photograph rather than sitting in its own bar), no background fill, static (no scroll-state change observed). Logo at left is a wordmark pairing upright + italic halves. Items run Home, About Us, Sundays, Events, Adults, Children, then a filled CTA pill, then a final plain text-link item — eight total slots, one of which is the solid nav CTA.
- **Button — primary (page-body)**: fill `#3E7CB1`, text `#FFFFFF`, radius `70px` (full pill), height `48px`, padding `16px 40px`, resting shadow `rgba(0, 0, 0, 0.17) 0px 0px 0px 0px` (invisible at rest), hover shadow `rgba(0, 0, 0, 0.1) 0px 3.5px 7px 0px` (a soft lift). Used for directions/primary CTAs mid-page.
- **Button — primary (navbar CTA)**: same fill/text, radius `78px`, height `39px`, padding `11.7px 19.5px`, hover shadow `rgba(0, 0, 0, 0.1) 0px 3.9px 7.8px 0px` — a smaller, nav-scaled twin of the primary pill, sitting as the single filled item among plain-text nav links.
- **Button — outline/secondary**: transparent fill, text `#3AB795`, 1px solid `rgb(58, 183, 149)` border, radius `70px`, height `48px`, padding `16px 40px` — paired beside the primary pill (e.g., a "watch online" counterpart to "get directions"), always the lower-emphasis half of a two-button row.
- **Button — text link**: transparent, text `#0A0000`, `0px` radius, no padding, used for inline document-style links ("click here…") underlined within body copy.
- **Hero primary CTA**: no filled hero button is present on the first screen — the hero carries headline + subline only, with the page's action buttons deferred to the invite band below. The nearest "hero-weight" button is the `button-primary` pill described above, first appearing in the white two-column promo panel.
- **Photo-strip row (hero)**: appears directly under the hero headline; ×5 equal tiles, full-bleed flush, radius `0px`, no padding, each a cropped documentary photograph (children, worship, preaching, congregation, screen/crowd) — pure media, no overlaid text.
- **Promo panel (full-width-panel + media-right-bleed)**: appears twice mid-page (panto/event promos); ×1 per section, two-column split, left column: italic serif heading + 2-3 paragraphs of body copy + one bold underlined text link; right column: a tall photographic/illustrated poster image bleeding to the block's edge, `0px` radius, white page background throughout.
- **Three-up caption row**: appears once mid-page ("what's on" style); ×3 equal cards, transparent background, `0px` radius, `0px 16px` padding, each: a square-ish top photo plus a centered italic-serif caption label beneath — no body copy, no CTA.
- **Invite band buttons row**: a light-gray full-width band holding a centered headline (mixed upright + italic-blue clauses), one paragraph of centered body copy, then the primary pill + outline pill side by side — this is the two-button pairing referenced above.
- **Media-left card row near footer**: ×3 cards, transparent, `0px` radius, media-left-bleed only (no heading/body) — a closing photographic strip.
- **Icon-label card row near footer**: ×4 cards, transparent, `0px` radius, each pairing a small icon with a heading label only (no body) — the social-icon row (Facebook, Instagram, YouTube circles) and the footer contact-info quartet (email/phone/address/giving) both follow this heading+icon anatomy.
- **Footer**: background `transparent` over the coral `#EA2E5B`/`#F03060` band, 21 links total across a four-column icon+heading contact block and a bottom row of five small outline social glyphs — the only section where the coral fill appears, making it the page's terminal visual note.

## Graphics & Effects
No gradients are declared anywhere in the measured component set except the Instagram glyph's own conventional sunset-gradient icon fill — a small circular badge, not a page background. The hero is a single full-bleed photograph (church exterior, blue sky) with no scrim rectangle measured, but the white italic headline sits directly on sky/roofline, implying a soft natural-light photograph chosen for inherent legibility rather than an applied dark overlay. Shadows are minimal and reserved for button hover only: resting `rgba(0, 0, 0, 0.17) 0px 0px 0px 0px` (functionally none) lifting to `rgba(0, 0, 0, 0.1) 0px 4px 8px 0px` / the button-specific `3.5-3.9px` variants on interaction — no card ever carries a shadow, consistent with the flush, radius-less, shadow-less card language throughout.

## Motion
Interactions are transition-based, not keyframe-driven: `all 0.25s ease` and `all 0.5s ease` cover general hover states (button shadow lift, link color shifts), while `color 0.5s cubic-bezier(0.33, 0, 0.19, 1)` gives text-color transitions a slower, eased curve for emphasis changes. A `fa-*` icon-animation set (beat, bounce, fade, beat-fade, flip, shake) is available for icon micro-interactions such as the footer's social glyphs, implying small looping or triggered icon motion rather than page-level scroll animation. Overall the motion system is restrained and functional: soft shadow-lift on button hover, eased color transitions on links, no parallax or scroll-linked effects evidenced.

## Guardrails
- Never add drop shadows or corner radius to the photographic card/panel families — the flush, square-edged treatment is the system's signature restraint.
- Never fill a section background with the coral `#EA2E5B`/`#F03060` except the terminal footer band — it must read as rationed and singular.
- Never substitute the nav's smaller 78px/39px CTA pill for the page-body 70px/48px primary pill, or vice versa — they are distinct scale variants of the same component.
- Never apply the mint `#3AB795` as a fill — it is a border/text-only accent on the outline button.
- Keep the hero free of a filled primary button; the first solid CTA appears in the first white promo panel, not over the photograph.
- Preserve the italic-serif / upright-serif mixing within single headlines — it is the display type's core device, not a stray style accident.