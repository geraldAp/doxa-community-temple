---
name: semantic-web-accessibility
description: Build and audit web UI with native semantics, accessible names, keyboard and focus behaviour, unique useful IDs, contrast and accessible dynamic content. Apply to BLIP web frontend changes and accessibility reviews; native mobile needs platform-specific semantics.
---

# Semantic web accessibility

Treat accessibility as a core implementation requirement. Target WCAG 2.2 AA without claiming conformance from automated checks alone. Read [research](references/research.md) for sources and unfamiliar decisions.

- Prefer native buttons, links, lists, dl, tables and time/dateTime. ARIA supplies semantics, not behaviour. Do not call ordinary navigation a menu or filter buttons tabs without the full widget keyboard pattern.
- Keep one main landmark, a descriptive h1, logical headings and a working skip link. Name multiple nav landmarks distinctly; label useful regions from headings without turning every wrapper into a landmark.
- Prefer visible text and associated labels for names. Icon-only controls need concise names. Repeated actions need item context while retaining visible label text. Use aria-describedby for help/errors. Do not put aria-label on generic spans/divs without a naming-supported role.
- Group related controls using fieldset/legend or a named group. Use native disabled/required, aria-invalid and linked field errors. Retain Radix/shadcn keyboard behaviour.
- Give landmarks, major sections and unique primary controls descriptive stable IDs. Repeated records need a non-sensitive stable key and instance scope. Reusable internal label/dialog relationships use React useId. Never generate random render IDs or duplicate IDs across desktop/mobile copies. IDs identify and connect; they do not make an element accessible by themselves. Prefer role/name testing; use data-testid for automation-only hooks.
- Keep focus visible and logical. Never use positive tabindex or add tab stops to inert cards. Dialogs/sheets need names, initial focus, containment, Escape, background isolation and focus restoration; use native dialog/proven primitives. Do not hide focused elements without deliberate focus handling.
- Announce results through one concise persistent polite status region. Avoid competing live regions. Reserve alerts for urgent errors. Preserve focus during filtering; handle disappearing pagination controls deliberately.
- Charts require a readable summary and underlying values, not only hover tooltips or colour. Keep textual statuses. Hide decorative icons from assistive technology.
- Verify normal text 4.5:1, large text 3:1 and meaningful controls/graphics 3:1. Check both themes. BLIP aims for 44px controls; WCAG 2.2 AA minimum is 24px with spacing/exceptions. Test 320 CSS-pixel reflow, zoom and reduced motion.

## Verification

Inspect rendered DOM/AX for names, landmarks, duplicate IDs and broken label/ARIA references. Test keyboard skip, tab order, dialog Escape/focus return, filters and pagination; cover desktop/mobile, both themes and empty/error states. Use automated checks where available, then manual checks. Tools cannot establish sensible names, focus order or full screen-reader interoperability. State exactly what ran and what remains untested; do not equate AX inspection with a VoiceOver/NVDA session.
