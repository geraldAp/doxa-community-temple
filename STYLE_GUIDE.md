# Modern Church Design System & Style Guide

## Philosophy
This design system aims to reflect an **authentic religious identity** through **modern, minimalist aesthetics**. It prioritizes clarity, readability, and spiritual serenity over clutter and noise.

### Key Principles
1.  **Minimalist Aesthetics**: Clean lines, generous whitespace, and purposeful content. Avoid "AI slop" (cluttered, generic, low-quality generated content).
2.  **Responsive Grid**: A fluid, mobile-first grid system ensuring content looks great on all devices.
3.  **Strategic White Space**: Using padding and margins to create breathing room, directing focus to key messages (scripture, sermons, events).
4.  **High-Quality Imagery**: Full-width, immersive visuals with proper overlays for text readability.
5.  **Typography**: A strong typographic hierarchy using **Geist Sans** for readability and modern feel.

---

## Typography Scale
We use a fluid typography scale rooted in the `Geist Sans` font family.

-   **Display (Hero)**: `text-5xl md:text-7xl font-bold tracking-tight`
-   **H1 (Page Title)**: `text-4xl md:text-5xl font-bold tracking-tight`
-   **H2 (Section Header)**: `text-3xl md:text-4xl font-semibold tracking-tight`
-   **H3 (Card Title)**: `text-xl md:text-2xl font-semibold`
-   **Body Large (Lead)**: `text-lg md:text-xl text-muted-foreground leading-relaxed`
-   **Body (Default)**: `text-base text-foreground leading-normal`
-   **Small (Meta/Footer)**: `text-sm text-muted-foreground`

---

## Color Palette
A vibrant and spiritual palette derived from the church's visual identity.

### Core Variables (HSL)
-   **Primary**: `232 78% 25%` (Deep Royal Blue) - Used for primary actions, branding, and emphasis.
-   **Secondary**: `354 70% 45%` (Deep Red) - Used for strong accents, "Love" themes, and highlights.
-   **Accent**: `25 80% 92%` (Light Warm Orange/Peach) - Used for backgrounds, subtle highlights, and warmth.
-   **Background**: `0 0% 100%` (White) - Clean canvas.
-   **Foreground**: `220 15% 15%` (Dark Blue-Grey) - High contrast text.
-   **Muted**: `30 50% 96%` (Warm Cream) - Subtle section backgrounds.

### Usage
-   **Text**: Use `text-foreground` for main text, `text-muted-foreground` for secondary text.
-   **Primary Elements**: Buttons, active states, and key headings use `bg-primary` or `text-primary`.
-   **Accents**: Use `text-secondary` for passionate/urgent messages (e.g., "Jesus Loves You").
-   **Backgrounds**: Use `bg-muted` or `bg-accent` to create warmth and separation between white sections.

---

## Spacing System
We use a consistent spacing scale to ensure rhythm.

-   **Section Padding**: `py-16 md:py-24` (Major sections), `py-12` (Minor sections).
-   **Container Padding**: `px-4 md:px-6` (Default container).
-   **Element Spacing**: `gap-4`, `gap-8`, `gap-12` for grids and flex layouts.

---

## Components

### Buttons
-   **Primary**: Rounded, solid background, distinct shadow. `rounded-full px-8 py-3 font-medium transition-all hover:opacity-90`.
-   **Secondary/Outline**: Bordered, transparent background. `border border-input bg-background hover:bg-accent hover:text-accent-foreground`.

### Cards
-   **Modern Card**: Minimal border, soft shadow, ample internal padding (`p-6`). `bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200 border-none`.

### Navigation
-   **Header**: Sticky, glassmorphism effect (`backdrop-blur-md bg-white/80`).
-   **Links**: Clear, high-contrast links with subtle hover effects.

---

## Accessibility (WCAG 2.1 AA)
-   **Contrast**: Ensure text contrast ratio is at least 4.5:1.
-   **Focus States**: Visible focus rings on all interactive elements.
-   **Semantic HTML**: Use `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` appropriately.
-   **Alt Text**: All images must have descriptive `alt` attributes.

