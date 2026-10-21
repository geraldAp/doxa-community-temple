# Research

Reviewed 18 October 2026. WCAG is the conformance standard; WAI tutorials, APG patterns and Understanding documents provide implementation guidance. Use native semantics and test real interaction rather than adding ARIA everywhere.

- Native semantics and role promises: https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
- Regions/headings: https://www.w3.org/WAI/tutorials/page-structure/
- Naming precedence and descriptions: https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/
- Labels: https://www.w3.org/WAI/tutorials/forms/labels/
- Visible labels in names (speech input): https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html
- Unique IDs: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/id
- Dialog keyboard/focus: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- Result announcements without focus movement: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html
- Linked validation feedback: https://www.w3.org/WAI/tutorials/forms/notifications/
- Chart alternatives: https://www.w3.org/WAI/tutorials/images/complex/
- Text contrast: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- Targets (24px AA with exceptions; BLIP aims for 44px): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Unobscured focus: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html
- Reflow at 320 CSS pixels: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html

For BLIP, preserve feature ownership. Share proven primitives rather than accessibility wrappers without a concrete need. Stable IDs serve page anchors and record identification; useId serves repeated internal relationships. Never put secrets or personal data in identifiers. Keep previews and unavailable states accessible without weakening auth. Report implemented fixes separately from untested assistive-technology combinations.
