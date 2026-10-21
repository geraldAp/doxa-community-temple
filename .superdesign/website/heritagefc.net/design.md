---
version: "superdesign-alpha"
name: "Charcoal Fellowship Editorial"
description: "A black-and-white photojournalistic system with oversized condensed display type, a rounded-image hero, gray-fade bento cards, and a single charcoal pill button rationed to key actions."
colors:
  background: "#FFFFFF"
  surface-dark: "#212121"
  surface-mid: "#7A7575"
  text-primary: "#212121"
  text-on-dark: "#FFFFFF"
  text-ink: "#000000"
  accent-danger: "#FB2C36"
typography:
  display-lg:
    fontFamily: "Montserrat"
    fontSize: "112px"
    fontWeight: 700
    lineHeight: "1"
  headline-md:
    fontFamily: "Montserrat"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: "1"
  body-md:
    fontFamily: "Montserrat"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1"
  label-md:
    fontFamily: "Montserrat"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "2px"
  body-base:
    fontFamily: "Untitled Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Lato"
    fontStyle: "italic"
    fontWeight: 700
    role: "italic pull-quote interruption"
spacing:
  base: "8px"
  gap: "16px"
  gap-lg: "24px"
  gap-xl: "32px"
  section-padding: "144px"
rounded:
  control: "10px"
  card: "20px"
  pill: "70px"
  hero-media: "96px"
components:
  button-primary:
    background: "#212121"
    text-color: "#FFFFFF"
    radius: "70px"
    height: "48px"
    padding: "16px 40px"
    shadow-rest: "rgba(0, 0, 0, 0.17) 0px 0px 0px 0px"
    shadow-hover: "rgba(0, 0, 0, 0.1) 0px 3.5px 7px 0px"
  button-secondary-light:
    background: "#FFFFFF"
    text-color: "#212121"
    radius: "70px"
    height: "48px"
    padding: "16px 40px"
    shadow-rest: "rgba(0, 0, 0, 0.17) 0px 0px 0px 0px"
    shadow-hover: "rgba(0, 0, 0, 0.1) 0px 3.5px 7px 0px"
  button-outline:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "70px"
    height: "48px"
    padding: "16px 40px"
    border: "1px solid rgb(255, 255, 255)"
  button-nav-link:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "48px"
    padding: "0px"
  card-bento-gradient:
    background: "linear-gradient(rgba(255, 0, 0, 0), rgb(0, 0, 0))"
    radius: "0px"
    padding: "32px"
  card-contact:
    background: "#FFFFFF"
    radius: "20px"
    shadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px 0px"
    padding: "32px"
  card-media-scroll:
    background: "transparent"
    radius: "0px"
    padding: "0px 16px"
---
# Charcoal Fellowship Editorial
Source: https://www.heritagefc.net/

## Overview
This is a monochrome editorial system built on photojournalism and oversized condensed display type — a near-brutalist confidence softened by rounded image containers and pill buttons. The identity is carried by one gesture: a massive 112px Montserrat headline set in widely-tracked caps, punctuated by full stops, sitting directly over a large rounded photographic frame. Color is almost entirely withheld — black, white, and one warm charcoal gray — so the system reads as high-contrast, documentary, and confident rather than decorative.

## Composition
The first screen opens on a near-black band holding the display headline, which overlaps a tall rounded-corner (96px) photograph that itself nests a translucent label and a pill CTA. This overlap of type onto media is the system's signature move: text and photograph interlock rather than stack. Below the fold, the page shifts to pure white for a welcome statement, then into a horizontal scrolling rail of uniform rounded photo cards (a scrolling-rail pattern, not a grid) showing worship/ministry moments. A centered invitation block with two pill buttons follows, then a 4-up bento-style card row with gradient-washed tops fading to solid dark bottoms. A full-width mid-gray band carries a centered italic pull-quote. The footer is near-black with a 3-card contact row and a slim link list. The deliberate choice is restraint: no color accent is introduced anywhere except the implicit red-family tokens reserved for error states — the system rejects a bright accent hue in favor of value contrast alone to carry hierarchy.

## Colors
White (#FFFFFF, ~44% of pixels, declared area 78.5%) is the dominant page background for body sections. Near-black (#181818/#212121, ~28% pixels) forms the navbar, hero band, and footer — bookending the page in dark surfaces. A warm mid-gray (#787878/#7A7575, ~12% pixels) is a distinct third surface used for the pull-quote band and bento-card gradient bases, functioning as a transitional elevation between white content and black footer. Off-whites (#F0F0F0, #D8D8D8, #C0C0C0) appear only as fades at the top of gradient cards. Text ink is #212121 on light surfaces and #FFFFFF on dark ones — pure binary, no gray text. No hue is rationed as "accent" in the brand sense; the red token family (#FB2C36 etc.) exists in the codebase but is not visibly deployed on this page — treat it as reserved for error/danger states only, not for decoration.

## Typography
Montserrat carries the entire structural hierarchy: a 112px/700/lh-1 display face for the hero statement, a 27px/700 headline weight for section titles, and an 18px/400 body/label size that also serves tracked all-caps labels at 2px letter-spacing. Untitled Sans is the true reading body font at 16px/400 for paragraph copy — a quiet workhorse distinct from Montserrat's display role. Lato appears as the system's one voice break: an italic, bold pull-quote treatment spanning two centered lines on the gray band, the only non-Montserrat, non-upright text on the page. Hierarchy is therefore: Montserrat bold caps for scale and labels, Untitled Sans regular for legibility, Lato italic for a single emotional aside.

## Layout
Content is capped at a 1145px max-width and centered. Spacing runs on an 8px-rooted scale (8, 16, 24, 32px) with a large 144px section rhythm separating major bands. The photo rail mid-page is a scrolling-rail of uniform rounded cards, not a grid — items are equal-width, overflow horizontally, radius ~10-20px. The 4-up feature row is a uniform card grid at desktop (rows of [4], each card equal width, confirmed by the measured row map of near-even percentage splits) using gradient-topped cards rather than flat fills. The footer contact row is a tight 3-up card grid, centered, narrower than the full max-width. Corner radii scale by context: 10px for small media thumbnails, 20px for content/contact cards, 70px for all pill buttons, 96px for the hero's large photographic frame — radius size signals a card's prominence.

## Components
- **Navbar**: edge-to-edge, square-cornered bar (0px radius all corners), full 1920px viewport width with zero inset, transparent background sitting over the dark hero band, 1120px tall at capture (effectively the hero itself), holding a single hamburger-style trigger at top right — no visible logo mark in the measured chrome; 7 nav-link buttons live inside it as transparent, 0px-radius, 48px-tall text triggers, plus 3 outline pill buttons (transparent fill, 1px solid white border, 70px radius, 48px height, 16px/40px padding) for secondary nav actions.
- **Hero primary CTA**: a single pill button nested inside the hero photograph, observed as a near-transparent/outline treatment on the image — white text, ~70px pill radius, thin light border, sitting centered beneath a small tracked label on the photo. This is the page's primary first-screen action; do not substitute the navbar's outline buttons for it even though their specs match — this one is the hero's sole CTA, not a nav utility.
- **Button — dark solid pill**: #212121 fill, white text, 70px radius, 48px height, 16px/40px padding, resting shadow `rgba(0, 0, 0, 0.17) 0px 0px 0px 0px`, hover shadow `rgba(0, 0, 0, 0.1) 0px 3.5px 7px 0px`; used for primary actions mid-page (e.g., the invitation block's left button, bento-card arrow links).
- **Button — light solid pill**: #FFFFFF fill, #212121 text, same 70px radius/48px height/padding and shadow behavior as the dark variant; used near the page end for secondary actions paired beside the dark pill.
- **Button — outline pill**: transparent fill, white text, 1px solid white border, 70px radius, 48px height; used in the navbar and over dark/photo backgrounds where a solid fill would compete with the image.
- **Button — nav link**: transparent, white text, 0px radius (no pill), 48px height, no padding; plain text-link triggers inside the navbar.
- **Scrolling photo rail**: appears mid-page below the welcome statement; ×10 uniform cards arranged in a single horizontal row that overflows the viewport, transparent background, 0px outer radius, 0px/16px padding, each card is media-top (a full-bleed rounded photograph with no visible text overlay) — a scrolling-rail pattern of worship/community photography.
- **Bento feature row**: 4 cards in one row (uniform span, not asymmetric — row map reads as four near-equal columns), each a gradient-fill card `linear-gradient(rgba(255,0,0,0), rgb(0,0,0))` fading white-to-black top-to-bottom, 32px padding, anatomy top-to-bottom: bold headline, one line of body copy, a labeled pill-style text link with a trailing arrow glyph.
- **Pull-quote band**: full-width mid-gray (#7A7575) section, no card chrome, centered two-line italic Lato statement — a section break by color field alone, not a graphic divider.
- **Contact card family**: 3 cards in a centered row near the footer, #FFFFFF fill, 20px radius, shadow `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px`, 32px padding; anatomy top-to-bottom: a small dark rounded icon badge, a bold heading, one or two lines of plain contact detail text — no CTA button inside these cards.
- **Footer**: transparent background over the near-black page-end surface, 9 text links plus 3 social icon glyphs centered above a copyright line and a secondary attribution line — simple stacked text, no card chrome.

## Graphics & Effects
The only measured gradient, `linear-gradient(rgba(255, 0, 0, 0), rgb(0, 0, 0))`, covers roughly 2.4% of total page area — it is the fill of the bento feature cards only (white-fading-to-black vertical wash inside each ~32px-padded card), never the page or hero background. The hero itself stays a flat near-black band with color rationed entirely to the embedded photograph — the photo itself (warm skin tones, blue signage, teal accents) is the only saturated color on the first screen, occupying roughly the lower two-thirds of the hero's height within its single rounded frame. The same dark-to-transparent scrim gradient logic reappears as a subtle top-edge fade on photo-rail thumbnails for text legibility, though no caption text sits on them in this instance. Shadows are soft and low-elevation throughout: `rgba(0, 0, 0, 0.1) 0px 4px 8px 0px` and `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px` for resting cards, with buttons carrying a near-invisible resting shadow that only activates on hover (`rgba(0, 0, 0, 0.1) 0px 3.5px 7px 0px`). No noise, grain, or pattern texture is visible; surfaces are flat and clean except where live photography supplies texture.

## Motion
Transitions are gentle and utilitarian: a broad `all 0.5s ease` and `all 0.25s ease` govern most hover-state changes (button shadow, color shifts), while a slower `all 1s ease` likely governs larger reveal transitions, and `color 0.5s cubic-bezier(0.33, 0, 0.19, 1)` gives text-color changes a custom deceleration. Icon-level keyframe animations (fa-beat, fa-bounce, fa-fade, fa-beat-fade, fa-flip, fa-shake) exist in the system for small glyph emphasis — reserve these for icon badges (contact card icons, social glyphs) rather than large layout elements. Overall motion character is calm and functional: short, eased hover feedback rather than springy or bouncy entrances.

## Guardrails
- Never fill the hero background with the bento card's black-fade gradient; the hero stays a flat dark band with color confined to the single rounded photograph.
- Do not replace the hero's observed outline pill CTA with the navbar's measured outline-button values as if they were interchangeable — they share a shape but different roles.
- Keep all pill buttons at 70px radius and 48px height; never round the navbar's plain text links (0px radius) into pills.
- Preserve the rounded-image hero frame (96px radius) as distinct from the smaller 20px card radius and 10px thumbnail radius — these three radii must stay visually distinguishable.
- Do not introduce a saturated brand hue; all color must come from photography, with UI chrome staying strictly black, white, and warm gray.
- Keep the italic Lato pull-quote rare — one instance per page — so it retains its function as a tonal interruption, not a repeating style.