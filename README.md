# Doxa Community Temple

Church website built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS and Sanity Studio.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run typecheck
npm run build
npm start
```

The public identifiers in `.env.example` match the existing church website. Copy that file to `.env.local` if you need explicit environment configuration. Read access to published public content does not require a write token. Keep any migration credentials in ignored local environment files and out of `NEXT_PUBLIC_` variables.

`SANITY_DISABLED=1` runs the public site without contacting Sanity. The homepage still shows the welcome, locally carried-over photograph, contact information and service schedule.

## Content ownership

- `src/content/church.ts`: published mission, vision and objectives, plus space for approved history, beliefs and leadership. Empty fields remain hidden.
- `src/config/church.ts`: church contacts, map link, service schedule and social links supplied by the church.
- `src/lib/editorial.ts`: server-only published Sanity reads and date-aware content selection.
- `src/components/home/HomePage.tsx`: homepage presentation; the route loads editorial content on the server.
- `src/app/globals.css`: flat public theme with Arial/Helvetica headings, square actions, thin rules and no eyebrow labels.
- `/studio`: Sanity publishing for the existing home daily message, articles, events, albums and giving instructions.

See [the design guide](STYLE_GUIDE.md), [the rebranding plan](docs/rebranding-plan.md) and [publishing and migration notes](docs/publishing-guide.md).

## Contact and enquiries

Membership and volunteering use direct church contact. The earlier API endpoints only returned success without delivering submissions; they now return 503 with the church telephone number. The old chatbot is not mounted, and its endpoint directs visitors to the church team because its previous instructions contained conflicting schedules and 2025 programmes.

Legacy page components and the old `src/lib/api.ts` are retained for reference, but the redesigned public routes use the new editorial boundary and static identity files.

## Verification

Run `npm run typecheck` and `npm run build` after source changes. The existing lint command needs an ESLint setup before it can be used independently. Browser verification for this pass covered all 13 public routes, 320px and 390px homepage reflow, mobile navigation, missing editorial routes and contact endpoint responses. The publishing guide records the scope and limitations.
