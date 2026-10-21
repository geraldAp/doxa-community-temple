# Current flat Doxa theme

Arial/Helvetica sans-serif throughout. Headings medium weight, normal case, tracking -0.055em. Paper #f8f6f1, ink #17213d, blue #101f70, red #b52b37, rules #dddcd6, footer #101a35. Square buttons, no decorative shadows, no eyebrow labels. Container max 1280px; 56px desktop side spacing reducing to 20px mobile. Header 104px desktop and 78px mobile. Section spacing 88px desktop / 56px mobile. Tailwind default breakpoints. Reduced motion supported.

## tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "hsl(var(--foreground))",
            maxWidth: "65ch",
            "[class~='lead']": {
              color: "hsl(var(--foreground))",
            },
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "hsl(var(--primary))",
                opacity: 0.8,
              },
            },
            strong: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            "h1, h2, h3, h4": {
              color: "hsl(var(--foreground))",
              fontWeight: "700",
              scrollMarginTop: "5rem",
            },
            blockquote: {
              borderLeftColor: "hsl(var(--border))",
              color: "hsl(var(--muted-foreground))",
            },
            hr: {
              borderColor: "hsl(var(--border))",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

```

## src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 220 15% 15%;

    --card: 0 0% 100%;
    --card-foreground: 220 15% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 15% 15%;

    --primary: 232 78% 25%; /* Deep Royal Blue #0E1C71 */
    --primary-foreground: 0 0% 100%;

    --secondary: 354 70% 45%; /* Deep Red #C2222E */
    --secondary-foreground: 0 0% 100%;

    --muted: 30 50% 96%; /* Warm Cream/White for subtle backgrounds */
    --muted-foreground: 220 10% 40%;

    --accent: 25 80% 92%; /* Light Warm Orange/Peach #FCE6D6 */
    --accent-foreground: 232 78% 25%;

    --destructive: 354 70% 45%;
    --destructive-foreground: 0 0% 100%;

    --border: 30 20% 90%;
    --input: 30 20% 90%;
    --ring: 232 78% 25%;

    --radius: 0.5rem;
  }

  .dark {
    /* Enforce light theme even in dark mode */
    --background: 0 0% 100%;
    --foreground: 220 15% 15%;

    --card: 0 0% 100%;
    --card-foreground: 220 15% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 15% 15%;

    --primary: 232 78% 25%;
    --primary-foreground: 0 0% 100%;

    --secondary: 354 70% 45%;
    --secondary-foreground: 0 0% 100%;

    --muted: 30 50% 96%;
    --muted-foreground: 220 10% 40%;

    --accent: 25 80% 92%;
    --accent-foreground: 232 78% 25%;

    --destructive: 354 70% 45%;
    --destructive-foreground: 0 0% 100%;

    --border: 30 20% 90%;
    --input: 30 20% 90%;
    --ring: 232 78% 25%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans antialiased;
    --font-geist-sans: Arial, Helvetica, sans-serif;
    --font-geist-mono: monospace;
  }
}

/* Doxa public site. Headings stand alone; no eyebrow labels. */
:root {
  --church-ink: #17213d;
  --church-blue: #101f70;
  --church-red: #b52b37;
  --church-paper: #f8f6f1;
  --church-line: #dddcd6;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 7rem;
}
body {
  background: var(--church-paper);
  color: var(--church-ink);
}
::selection {
  background: #e6d3c6;
  color: #17213d;
}
a,
button,
input,
textarea,
summary {
  -webkit-tap-highlight-color: transparent;
}
:focus-visible {
  outline: 3px solid #b52b37;
  outline-offset: 5px;
}
.church-container {
  width: min(1280px, calc(100% - 112px));
  margin-inline: auto;
}
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--church-paper);
  border-bottom: 1px solid var(--church-line);
}
.header-inner {
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.wordmark {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-shrink: 0;
}
.wordmark > span:first-child {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 1;
}
.brand-dot {
  color: var(--church-red);
}
.wordmark-subtitle {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.6px;
  line-height: 1.6;
  padding-left: 15px;
  border-left: 1px solid #bdc0c7;
}
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 13px;
}
.desktop-nav a {
  padding-block: 12px;
}
.desktop-nav a:hover,
.desktop-nav a[aria-current] {
  color: var(--church-red);
}
.church-button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 16px 23px;
  background: var(--church-blue);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid var(--church-blue);
  transition: background 0.2s;
}
.church-button:hover {
  background: #263b85;
}
.header-visit {
  min-height: 44px;
  padding: 12px 19px;
}
.mobile-menu-button {
  display: none;
  min-height: 44px;
  min-width: 44px;
  align-items: center;
  justify-content: center;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 32px;
}
.mobile-nav a {
  padding-block: 14px;
  border-bottom: 1px solid var(--church-line);
}
.home-hero {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 48px;
  padding-block: 54px 60px;
  align-items: center;
}
.hero-copy {
  padding-block: 32px;
}
.hero-copy h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(42px, 4.65vw, 72px);
  line-height: 1.08;
  font-weight: 400;
  letter-spacing: -2.8px;
}
.hero-copy h1 em,
.section-heading em {
  color: inherit;
  font-weight: inherit;
  font-style: normal;
}
.hero-copy > p {
  font-size: 15px;
  line-height: 1.85;
  color: #5c6271;
  max-width: 360px;
  margin-top: 30px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
}
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 600;
  min-height: 44px;
}
.text-link:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.hero-service {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 48px;
  font-size: 12px;
}
.hero-service p {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 4px;
}
.hero-service p span {
  color: #606573;
}
.service-dot {
  width: 6px;
  height: 6px;
  background: var(--church-red);
  border-radius: 50%;
  flex-shrink: 0;
}
.hero-photo {
  position: relative;
  min-height: 520px;
  background: #d7d7d0;
  overflow: hidden;
  border-radius: 0;
}
.hero-photo img {
  object-position: center;
}
.hero-photo-empty {
  background: #e8e5dc;
}
.hero-typography {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 38px;
  color: #223472;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: clamp(30px, 4vw, 55px);
  line-height: 1.45;
}
.photo-location {
  position: absolute;
  bottom: 22px;
  left: 22px;
  right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px;
  background: var(--church-paper);
  font-size: 12px;
}
.welcome-strip {
  background: #eae7df;
}
.welcome-strip > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-block: 24px;
}
.welcome-strip p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;
}
.welcome-strip a {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 12px;
  min-height: 44px;
}
.section-space {
  padding-block: 88px;
}
.section-heading {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: clamp(33px, 3.6vw, 52px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}
.introduction-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}
.large-copy {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  line-height: 1.35;
}
.body-copy {
  color: #5c6271;
  font-size: 15px;
  line-height: 1.9;
  margin-block: 20px;
  max-width: 62ch;
}
.section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
}
.gathering-row {
  display: grid;
  grid-template-columns: 44px 1fr 240px 24px;
  gap: 24px;
  align-items: center;
  padding-block: 27px;
  border-top: 1px solid var(--church-line);
}
.gathering-row:last-child {
  border-bottom: 1px solid var(--church-line);
}
.gathering-row:hover h3 {
  color: var(--church-red);
}
.row-number {
  font-size: 11px;
  color: #626876;
}
.gathering-row h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
}
.gathering-row p {
  font-size: 13px;
}
.gathering-row p span {
  display: block;
  color: #666b75;
  margin-top: 5px;
}
.scripture-section {
  background: #192858;
  color: #fff;
  padding-block: 72px;
}
.scripture-inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
}
.scripture-inner h2 {
  font-size: 18px;
  margin-bottom: 16px;
}
.scripture-inner time {
  font-size: 12px;
  color: #d2d7e5;
}
.scripture-inner blockquote {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(25px, 2.7vw, 38px);
  line-height: 1.45;
}
.scripture-reference {
  font-size: 13px;
  margin-top: 22px;
  color: #e0ded4;
}
.scripture-reflection {
  line-height: 1.8;
  margin-top: 24px;
  color: #d8dce6;
  max-width: 62ch;
}
.articles-section {
  background: #eeece6;
}
.editorial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}
.editorial-cover {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  margin-bottom: 22px;
  background: #e4e1d9;
}
.editorial-grid time {
  font-size: 11px;
  color: #626876;
}
.editorial-grid h3,
.album-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin-block: 12px;
  line-height: 1.25;
}
.editorial-grid p {
  color: #626876;
  font-size: 14px;
  line-height: 1.75;
  margin-bottom: 16px;
}
.visit-invitation {
  background: #e8e2d6;
  padding-block: 72px;
}
.visit-invitation > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}
.visit-invitation p {
  margin-top: 20px;
  font-size: 13px;
  line-height: 1.8;
}
.light-button {
  background: transparent;
  color: var(--church-blue);
}
.light-button:hover {
  color: #fff;
}
.site-footer {
  background: #101a35;
  color: #e0e3eb;
  padding-block: 64px 24px;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 40px;
  padding-bottom: 54px;
}
.footer-wordmark {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -3px;
  color: #fff;
}
.footer-top h2 {
  font-size: 14px;
  color: #fff;
  margin-bottom: 22px;
}
.footer-top p,
.footer-top a:not(.footer-wordmark) {
  font-size: 12px;
  line-height: 1.9;
}
.footer-top a:not(.footer-wordmark) {
  display: block;
  padding-block: 5px;
}
.footer-top a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.footer-invitation {
  margin-top: 18px;
  color: #b8bece;
}
.footer-bottom {
  border-top: 1px solid #3c455b;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 11px;
  color: #bcc3d4;
}
.page-intro {
  padding-block: 76px 56px;
  border-bottom: 1px solid var(--church-line);
}
.display-heading {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 1.1;
  letter-spacing: -2px;
  font-weight: 400;
  max-width: 16ch;
}
.intro-copy {
  font-size: 17px;
  color: #5c6271;
  line-height: 1.8;
  max-width: 58ch;
  margin-top: 28px;
}
.content-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 72px;
}
.content-panel {
  border-top: 1px solid var(--church-line);
  padding-top: 26px;
}
.content-panel h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
}
.content-panel p {
  line-height: 1.85;
  color: #5c6271;
}
.service-details {
  margin-top: 24px;
}
.service-details > div {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-block: 17px;
  border-bottom: 1px solid var(--church-line);
}
.service-details dt {
  font-weight: 600;
  font-size: 14px;
}
.service-details dd {
  font-size: 14px;
  text-align: right;
}
.visit-address {
  font-style: normal;
  margin-block: 24px;
  line-height: 1.9;
}
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}
.empty-state {
  border-top: 1px solid var(--church-line);
  padding-block: 36px;
  max-width: 65ch;
}
.empty-state h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-bottom: 16px;
}
.empty-state p {
  color: #5c6271;
  line-height: 1.8;
}
.reading-width {
  max-width: 780px;
}
.article-body {
  font-size: 17px;
  line-height: 1.9;
}
.article-body h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  margin-top: 36px;
}
.pagination {
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  font-size: 13px;
}
.skip-link {
  position: fixed;
  top: -100px;
  left: 16px;
  z-index: 100;
  background: #fff;
  color: #101f70;
  padding: 16px 24px;
}
.skip-link:focus {
  top: 12px;
}
@media (min-width: 1600px) {
  .hero-copy h1 {
    font-size: 76px;
  }
}
@media (max-width: 1100px) {
  .church-container {
    width: calc(100% - 64px);
  }
  .desktop-nav {
    gap: 18px;
  }
  .home-hero {
    gap: 32px;
  }
  .hero-photo {
    min-height: 480px;
  }
  .hero-actions {
    gap: 14px;
  }
  .wordmark-subtitle {
    display: none;
  }
  .gathering-row {
    grid-template-columns: 24px 1fr 190px 24px;
  }
}
@media (max-width: 767px) {
  .church-container {
    width: calc(100% - 40px);
  }
  .header-inner {
    height: 78px;
    gap: 12px;
  }
  .wordmark > span:first-child {
    font-size: 34px;
  }
  .header-visit {
    margin-left: auto;
    font-size: 12px;
    padding: 12px;
    gap: 12px;
  }
  .desktop-nav {
    display: none;
  }
  .mobile-menu-button {
    display: flex;
  }
  .home-hero {
    grid-template-columns: 1fr;
    padding-block: 36px;
    gap: 28px;
  }
  .hero-copy {
    padding-block: 8px;
  }
  .hero-copy h1 {
    font-size: clamp(38px, 8vw, 58px);
    letter-spacing: -1.8px;
  }
  .desktop-break {
    display: none;
  }
  .hero-copy > p {
    max-width: 100%;
    margin-top: 24px;
  }
  .hero-service {
    margin-top: 28px;
  }
  .hero-photo {
    min-height: 410px;
    border-radius: 0;
  }
  .hero-typography {
    font-size: 42px;
  }
  .welcome-strip > div {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding-block: 20px;
  }
  .welcome-strip p {
    font-size: 22px;
  }
  .section-space {
    padding-block: 56px;
  }
  .introduction-grid,
  .content-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .section-top {
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 28px;
  }
  .section-top .text-link {
    flex-shrink: 0;
    font-size: 12px;
    gap: 8px;
  }
  .section-heading {
    font-size: 35px;
    letter-spacing: -1px;
  }
  .gathering-row {
    grid-template-columns: 1fr 24px;
    gap: 10px;
    padding-block: 22px;
  }
  .row-number {
    display: none;
  }
  .gathering-row h3 {
    font-size: 25px;
  }
  .gathering-row p {
    grid-column: 1;
    grid-row: 2;
  }
  .gathering-row > svg {
    grid-column: 2;
    grid-row: 1 / 3;
  }
  .scripture-section {
    padding-block: 48px;
  }
  .scripture-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .editorial-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .visit-invitation {
    padding-block: 48px;
  }
  .visit-invitation > div {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 36px 24px;
  }
  .footer-top > div:first-child {
    grid-column: 1 / -1;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
  }
  .page-intro {
    padding-block: 48px 40px;
  }
  .display-heading {
    font-size: 46px;
  }
  .intro-copy {
    font-size: 16px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@layer utilities {
  .glass {
    @apply bg-white/80 backdrop-blur-md border-b border-white/20 dark:bg-black/80 dark:border-white/10;
  }

  .text-balance {
    text-wrap: balance;
  }
}

/* Flat surfaces and close-set sans typography, informed by the supplied references. */
.hero-copy h1,
.section-heading,
.display-heading {
  font-weight: 500;
  letter-spacing: -0.055em;
}
.home-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 680px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: #252a36;
  color: #fff;
}
.hero-copy {
  position: relative;
  z-index: 2;
  width: min(1280px, calc(100% - 112px));
  margin-inline: auto;
  padding-block: 88px 64px;
}
.hero-copy h1 {
  font-size: clamp(58px, 6.5vw, 100px);
  line-height: 1;
  max-width: 950px;
}
.hero-copy > p {
  color: #fff;
  max-width: 380px;
  font-size: 16px;
}
.hero-photo {
  position: absolute;
  inset: 0;
  min-height: 0;
  border-radius: 0;
  z-index: -2;
}
.hero-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(8, 15, 32, 0.84),
    rgba(8, 15, 32, 0.35)
  );
}
.hero-photo img {
  object-position: center 42%;
}
.hero-photo-empty {
  background: #192858;
}
.hero-typography {
  display: none;
}
.photo-location {
  display: none;
}
.hero-actions .church-button {
  background: var(--church-paper);
  border-color: var(--church-paper);
  color: var(--church-ink);
}
.hero-actions .church-button:hover {
  background: #e8e2d6;
}
.hero-service p span {
  color: #e3e5eb;
}
.hero-service .service-dot {
  background: #fff;
}
.hero-actions .text-link {
  color: #fff;
}
.large-copy,
.gathering-row h3,
.content-panel h2,
.empty-state h2,
.editorial-grid h3,
.album-title {
  font-weight: 500;
  letter-spacing: -0.04em;
}
.welcome-strip p {
  font-size: 22px;
  letter-spacing: -0.035em;
}
.objective-list {
  margin-top: 36px;
}
.objective-list li {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  padding-block: 26px;
  border-top: 1px solid var(--church-line);
}
.objective-list li > span {
  color: #666b75;
  font-size: 12px;
  padding-top: 5px;
}
.objective-list p {
  max-width: 70ch;
  line-height: 1.8;
}
.faq-item {
  border-top: 1px solid var(--church-line);
}
.faq-item summary {
  padding-block: 24px;
  cursor: pointer;
  font-size: 20px;
}
.faq-item p {
  padding-bottom: 24px;
  line-height: 1.8;
  color: #5c6271;
}
.gathering-row h2 {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.04em;
}
@media (max-width: 1100px) {
  .hero-copy {
    width: calc(100% - 64px);
  }
}
@media (max-width: 767px) {
  .home-hero {
    min-height: 640px;
    padding: 0;
  }
  .hero-copy {
    width: calc(100% - 40px);
    padding-block: 72px 40px;
  }
  .hero-copy h1 {
    font-size: clamp(45px, 10.5vw, 76px);
    line-height: 1.04;
    letter-spacing: -0.055em;
  }
  .hero-photo {
    min-height: 0;
  }
  .hero-photo::after {
    background: rgba(8, 15, 32, 0.67);
  }
  .hero-copy > p {
    font-size: 15px;
  }
  .hero-actions {
    gap: 16px;
  }
  .hero-service {
    margin-top: 36px;
  }
}

```
