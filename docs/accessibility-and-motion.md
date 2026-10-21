# Doxa Accessibility and Motion

These conventions adapt the accessibility skill and animation practices from the sibling `BLIP-SAFE-PAYMENTS` workspace containing `Blip-api`, `blip-portal` and `Blip-marketting`. No guidance was taken from the Ruby BLIP project.

## Source guidance

- `.agents/skills/semantic-web-accessibility/SKILL.md` and its research reference were copied from that workspace into this repository.
- Marketing `src/features/home/scripts/marketing-motion.ts` provides scoped, one-time section entrances and cleanup patterns.
- Marketing `src/features/home/scripts/hero-motion.ts` provides native Web Animations, static initial content and motion-preference cleanup.
- Marketing `docs/design-notes.md` and `docs/ARCHITECTURE.md` describe reduced motion, data saver, offscreen/hidden-tab behaviour, complete static fallbacks and avoiding scroll hijacking.
- Portal `docs/STYLING.md` and `docs/ACCESSIBILITY.md` describe Radix dialog semantics, 44px controls and reduced-motion transitions.

The marketing implementation also uses GSAP for its more involved scroll storytelling. Doxa's simple entrances use native Web Animations and IntersectionObserver, matching its lighter hero implementation without adding another runtime dependency.

## Implemented behaviour

`SiteMotion` enhances the public main landmark after the initial page load. Headings settle by 14px over 650ms while remaining opaque. Supporting copy, gathering rows and editorial panels settle by 20px over 500ms, starting at 70% opacity. Each target animates once on entering the viewport. Base HTML and CSS remain fully visible before JavaScript and after cancellation.

Reduced-motion and data-saver visitors skip these effects. Moving to a hidden tab cancels current effects; returning may enhance targets that have not yet appeared. Navigation disposes observers, event listeners and animations. Keyboard focus cancels animation on the focused target's container. There is no automatic scrolling, pinning, looping decoration or layout animation.

The mobile navigation retains Radix's named dialog, focus containment, Escape dismissal and focus restoration. It now has a descriptive relationship and a 44px close control. Its built-in slide/fade transitions are explicitly disabled for reduced motion and use a 300ms duration otherwise. The reduced-motion utilities use explicit precedence so the Radix open-state animation cannot override them.

## Verification

Check production build and TypeScript validation. In a real browser, verify one-time entrances, reduced motion including changing the preference while motion is running, data saver, complete content with JavaScript disabled, keyboard skip and dialog behaviour, useful IDs and descriptions, and narrow-screen reflow. Use axe as a supplement. Screen-reader interoperability and full WCAG conformance require additional manual review.

The production build passed on 20 October 2026. Chrome checks verified normal entrances, cancellation when switching to reduced motion, no sheet animation under reduced motion, data-saver suppression, readable About content with JavaScript disabled, the keyboard skip link, dialog focus containment/Escape/focus return, the 44px close control and 320px reflow. The open dialog had no axe violations, and no browser page errors were recorded. A full screen-reader session and actual background-tab lifecycle testing remain outside this verification.
