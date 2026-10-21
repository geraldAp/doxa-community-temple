# Doxa frontend conventions

Use `feat/` branch names by default. Never use a `codex/` prefix.

## Accessibility

Apply `.agents/skills/semantic-web-accessibility/SKILL.md` to web UI work. This skill was copied from the three-app `BLIP-SAFE-PAYMENTS` workspace, not the Ruby project. Use native semantics, useful names, visible focus, unique meaningful IDs, accessible dialogs, sufficient contrast and 320px reflow. Target WCAG 2.2 AA without claiming conformance from automated checks alone.

## Motion

Follow `docs/accessibility-and-motion.md`, adapted from the same workspace's marketing motion implementations and portal interaction guidance. Keep initial content visible, enhance only with transform/opacity, respect reduced motion and data saver, stop motion in hidden tabs, preserve focus, and clean up observers/listeners/animations on navigation. Prefer the existing native browser and Radix capabilities for simple motion. Do not add an animation library solely for entrance effects.

Keep the flat Doxa styling and no-eyebrow requirement. BLIP's branding, commerce rules, framework choices and package-manager conventions do not apply to this repository.
