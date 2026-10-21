# Doxa Website Design Guide

The public site uses flat surfaces, clear sans-serif typography and photography. Headings stand alone, with no eyebrow labels.

## Reference direction

Chancelle Plus provides the local reference for warm paper surfaces, thin dividers, square buttons and generous image sections. The active Arial/Helvetica heading styles at [The House](https://www.thehouseest.com/) inform the typography. [Cowplain Church](https://www.cowplainchurch.co.uk/) and [Heritage Fellowship](https://www.heritagefc.net/) inform visitor information and clear next steps. Their wording, logos and congregation photographs are not Doxa content.

## Typography

Use Arial, Helvetica, sans-serif for headings and body copy. Display and section headings use medium weight, normal case, normal style and close spacing around -0.055em. Body copy uses comfortable line height, around 1.8. Headings scale down for mobile; body text remains readable without zooming.

## Colour and surfaces

| Token      | Value   | Use                                  |
| ---------- | ------- | ------------------------------------ |
| Paper      | #f8f6f1 | Main background                      |
| Ink        | #17213d | Primary text                         |
| Royal blue | #101f70 | Primary actions                      |
| Red        | #b52b37 | Restrained identity accent and focus |
| Rule       | #dddcd6 | Section and row dividers             |
| Footer     | #101a35 | Footer background                    |

Use square corners and flat colour. Avoid decorative shadows, glass panels, pill buttons and rounded image masks. Use a restrained dark image overlay where text must remain readable over photography.

## Composition

The desktop container has a 1280px maximum width, with generous horizontal spacing reducing to 20px per side on phones. A full-width hero introduces the church and leads directly to visit information. Ruled rows communicate services and events. Article and album grids appear when real entries exist.

Use `PageIntro` for page titles and descriptions. Use `EditorialImage` for Sanity images and a real local asset for the homepage fallback. Preserve the actual church logo once supplied; the current text identity is provisional.

## Accessibility

Use one h1 and main landmark per public page, logical headings, a skip link, clear link names and visible keyboard focus. Keep the mobile sheet keyboard-operable with Escape and focus return. Support 320px reflow and reduced motion. Give images useful descriptions without claiming a generic photograph depicts Doxa members. Automated checks support review; they do not establish full accessibility conformance.

## Motion

Follow [accessibility and motion guidance](docs/accessibility-and-motion.md), adapted from the three-app BLIP workspace. Use one-time transform/opacity entrances with fully visible static content, reduced-motion and data-saver fallbacks, focus-safe cancellation and cleanup on navigation. Keep the flat theme and no-eyebrow requirement.
