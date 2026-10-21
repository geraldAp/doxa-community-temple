# Doxa Publishing and Migration Guide

The redesigned website separates permanent church identity from editorial publishing. No live Sanity documents were changed or deleted during implementation.

## Permanent church information

Update `src/content/church.ts` for mission, vision, objectives, approved beliefs, history and leadership. Mission and vision now follow the two handwritten photographs supplied by the church on 20 October 2026, replacing the earlier Sanity wording. Grammar, capitalization and punctuation were lightly normalized; the vision’s phrase “Christ Gospel” is preserved as written. The five objectives came from the publicly published Sanity about document. Objectives are presented as objectives. The placeholder “Rev. John Doe” profile was not migrated.

Update `src/config/church.ts` for service times, phone, address, map and official social links. The church supplied Sunday 8:00–11:00 AM and Wednesday and Friday 7:00–8:30 PM, Adamrobe (Obama Park), Oyibi, and +233 55 388 5938. Tuesday 11:00 AM–4:00 PM and Friday “open 24 hours” were not treated as worship gatherings. Do not reintroduce the conflicting times in legacy documents.

The carried-over homepage photograph came from the old website's public Sanity hero asset. It does not establish that the pictured people are Doxa members. Replace it with church-owned photography when available. A genuine church logo and approved leadership portraits remain outstanding.

## Publishing in Studio

Open `/studio` and sign in with an account that has access to the church's Sanity project. The public project identifier is `e9vdw5cx`, dataset `production`; environment variables can override these public defaults. A personal write token is not part of the browser configuration.

### Daily message

The landing page reads the existing `dailyMessage` text from the published `home` document. In Studio, open **Daily Message & Home Photo**, edit **Daily Message**, and publish. Blank lines separate paragraphs on the public site. This uses the church's existing message; it does not require a new scripture document, verse reference or Bible translation field.

The **Daily message** section stays visible directly below the welcome/directions strip. Header and footer links jump to `/#daily-message`. It displays the complete published message without assigning a new date or claiming that an older message was published today. A missing message or CMS outage shows a short availability notice instead of an invented verse.

The unused `dailyScripture` type remains under Legacy Content for reference. No production documents were changed or deleted for this switch.

### Articles

Create an Article with title, slug, author as applicable, publication date and body. Use a short summary for previews, or let the site take the opening words of the article. Add image descriptions when uploading images. Future publication dates stay hidden on both listings and detail pages. Drafts stay hidden through the published client perspective.

Existing `/blog` and `/blog/[slug]` URLs remain the article routes. No article content was invented to fill the empty published dataset.

### Events

Use the new start datetime and optional end datetime. Check the timezone when entering dates; public pages show Ghana time. Give each event a slug, venue and description. Events with an end disappear from the upcoming listing after that end. Events without an end remain listed through the calendar day of their start in Ghana.

The previous free-text date field remains read-only for migration reference. Existing legacy event documents are not deleted. Populate their typed dates deliberately if they need detail pages; do not relabel an event from 2025 as an upcoming event.

### Gallery albums

Publish Gallery Albums with a title, slug, images and descriptions. The first image provides the cover. Existing album slugs remain valid. Legacy flat gallery content remains under Legacy Content in Studio for review rather than being deleted.

### Giving instructions

Giving Instructions controls the payment instructions and optional volunteering introduction. If no instructions are published, the website directs visitors to contact the church. Verify payment details with the responsible church team member before publication.

## Contact behaviour

Visitors can call the church for membership, volunteering, faith questions and visit arrangements. Public pages no longer show forms that promise an enquiry has been received without any delivery mechanism. Membership and volunteer endpoints now return 503 with a useful phone contact; the outdated chatbot endpoint does the same. No enquiry data is collected by those handlers.

A future online enquiry flow needs a chosen delivery destination, a responsible recipient, appropriate abuse controls, accurate privacy wording and a verified receipt test before it replaces direct contact.

## Migration safeguards

Legacy home, about, FAQ and gallery documents remain accessible under Legacy Content in Studio. No production write token was embedded in the application, and no live content mutation was needed for the redesign. Export the dataset before any later bulk migration or deletion. Review old flat gallery images and dated devotionals before importing them into the new types.

The old components and API adapter remain in source for reference. Redesigned public routes use `src/lib/editorial.ts`; they do not fetch mission, vision or objectives from Sanity.

## Verification for this pass

Production build and TypeScript validation passed. Browser checks covered all 13 public routes, one h1 and main landmark per page, image loading, missing article/event/album routes, and contact endpoint responses. Desktop and mobile checks covered the homepage at 1440px, 390px and 320px, including menu opening, Escape, focus return and horizontal overflow. Automated axe checks were run on the public pages, and contrast on gathering numbers was corrected.

GROQ fixture checks covered the Accra midnight boundary, current and latest scripture selection, future scripture and article exclusion, ongoing and expired events, legacy events without typed dates, article excerpt generation, and CMS outage fallbacks. Real editorial entries should also receive a visual review when the church publishes them. A screen reader session and delivery of enquiries to a new backend were not part of this pass.

## Quality checks

Run `npm run lint`, `npm run typecheck`, and `npm run build` before pushing.
The GitHub Quality workflow installs the locked dependencies before running the
TypeScript and lint checks. ESLint uses the repository's `tsconfig.json`, including
its `@/` aliases, rather than a generic analyzer project. The lint rules cover
unsafe TypeScript operations, consistent declarations, null handling, async
handlers, object indexing, and HTML string handling.

`SiteMotion` has two documented inline exceptions for the HTML string heuristic:
its values are existing DOM nodes and animation handles, never strings inserted
as HTML. All other lint findings fail the workflow.
