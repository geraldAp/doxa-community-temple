# Doxa Community Temple Rebranding Plan

Initial plan and implementation record · 20 October 2026

The first implementation is complete locally: the public pages use flat surfaces, Arial/Helvetica headings and no eyebrow labels, following the later Chancelle Plus and church-site references. The church-supplied schedule and contacts are in shared configuration. Mission and vision follow the handwritten church material supplied on 20 October 2026; objectives were preserved from published Sanity content. See `publishing-guide.md` for current ownership, migration behaviour and remaining photography needs. The findings below describe the starting point.

The website should introduce Doxa clearly, help people explore the Christian faith, and make a first visit easy. Permanent church identity belongs in the application; Sanity should support the regular publishing work of the church team.

The first release should establish an authentic identity and a reliable path from discovering the church to visiting and connecting. The church's forthcoming materials will supply the approved beliefs, objectives, wording, and imagery.

## Current findings

| Finding                                     | Evidence in the repository                                                                                        | Required action                                                                              |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Church identity is mixed with daily content | `home.ts` contains mission, vision, daily verse, and events; `about.ts` contains history, objectives, and pastors | Separate permanent content from editorial documents                                          |
| Objectives and beliefs are conflated        | The `beliefs` field is titled “Our Objectives”; the about page presents it as beliefs                             | Preserve the source text and classify it with church guidance                                |
| Service times conflict                      | Homepage says Sunday at 10:00 AM; chatbot configuration says 8:00 AM and 11:00 AM                                 | Confirm the schedule and use one source across pages and chatbot                             |
| Generic imagery and copy dominate           | Home and About use Unsplash imagery; membership repeats an unattributed testimonial                               | Replace with actual church photographs and approved writing; remove unsupported testimonials |
| Visitor links lead to registration          | “Join Us This Sunday” links to `/membership`, which requests address and other personal details                   | Add a visit page that works without registration                                             |
| Events lead to absent routes                | Homepage and event cards link to `/events` and `/events/[slug]`; neither route exists                             | Build both routes before exposing these links                                                |
| Forms report success without delivery       | Membership and volunteer API routes validate input and return success without storing or sending it               | Implement an agreed destination and verify receipt before enabling enquiries                 |
| Public details are incomplete               | Footer phone is zeros and social links use `#`; root metadata still says “Create Next App”                        | Confirm real contacts, remove empty destinations, and add accurate metadata                  |
| Chatbot contains dated information          | `systemPrompt.ts` lists programmes for 2025                                                                       | Use current approved sources; resolve conflicts before retaining the assistant               |

These are findings from repository source, not a check of the live Sanity dataset or a deployed website.

## Proposed sitemap

Keep the primary navigation short: **About, Plan a visit, Church life, Articles, Events**. Use **Plan a visit** as the main header button. Giving, contact, membership, gallery, and FAQs remain easy to reach through related pages and the footer.

| Route                            | Role and content                                                                                   | Source                                                                  | Delivery                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------- |
| `/`                              | Church introduction, visit information, scripture, current stories and events                      | Static composition with Sanity sections                                 | Rebuild                                     |
| `/about`                         | Mission, vision, history, beliefs, objectives, approved leadership profiles                        | Static identity content and shared configuration                        | Refactor existing page                      |
| `/visit`                         | Verified service schedule, exact location, directions, what happens during a visit, practical FAQs | Shared configuration and static visitor copy                            | New                                         |
| `/faith`                         | Church-approved introduction to the gospel and invitation to speak with someone                    | Static approved teaching                                                | New; link from home and visit page          |
| `/church-life`                   | Approved ministries, ways to participate, membership and volunteering links                        | Static ministry descriptions                                            | New                                         |
| `/blog` and `/blog/[slug]`       | Articles, church news, teaching and outreach stories                                               | Existing Sanity posts, authors and categories                           | Retain URLs; label “Articles” in navigation |
| `/events` and `/events/[slug]`   | Upcoming gatherings and complete event details                                                     | Sanity events                                                           | New                                         |
| `/gallery` and `/gallery/[slug]` | Albums showing worship, fellowship and outreach                                                    | Sanity gallery albums                                                   | Restyle existing pages                      |
| `/give`                          | Verified giving instructions and volunteering pathway                                              | Controlled Sanity settings plus static explanation                      | Review existing page                        |
| `/membership`                    | Confirmed membership process and working enquiry form                                              | Static process; separate submission destination                         | Refactor existing page                      |
| `/contact`                       | Verified contact options and location                                                              | Shared configuration                                                    | New                                         |
| `/faq`                           | Useful visitor and member questions                                                                | Static foundational answers; retain existing CMS records until reviewed | Refactor existing page                      |
| `/privacy`                       | Actual handling of enquiries and any measurement tools                                             | Static policy matching the implemented process                          | New before forms launch                     |
| `/studio`                        | Content editing for the church team                                                                | Sanity                                                                  | Retain; keep out of public navigation       |

Avoid publishing empty ministries or incomplete pages. Route names above are proposed; preserve existing article and gallery URLs during migration.

## Proposed homepage outline

| Order | Section             | Content and purpose                                                                          | Action                               |
| ----- | ------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| 1     | Church introduction | Full church name, short welcome, one authentic photograph of the congregation                | Plan a visit; About Doxa             |
| 2     | Visit information   | Confirmed next regular service times, locality, link to exact directions                     | Service details and directions       |
| 3     | Meet Doxa           | A short approved introduction in the church's own voice, with a genuine community photograph | Our story                            |
| 4     | Explore the faith   | A welcoming introduction for people exploring Christianity, using church-approved wording    | Explore the Christian faith          |
| 5     | Scripture for today | Passage, reference, translation and optional reflection                                      | Read related articles where relevant |
| 6     | Coming up           | Up to three future published events with clear dates and venues                              | All events                           |
| 7     | Life at Doxa        | A small selection of real gallery photographs and a recent article                           | Gallery; Articles                    |
| 8     | Connect             | Verified contact route, visit invitation and participation links                             | Contact the church; Plan a visit     |

On mobile, keep the welcome and visit action visible early. Place directions and practical service details before longer editorial sections.

### Working copy for layout exploration

These lines are draft interface copy, not new doctrinal statements or an approved church slogan:

- Introductory label: “Doxa Community Temple”
- Main heading: “Join us for worship at Doxa.”
- Supporting sentence: “Learn about our church, explore the Christian faith, and find what you need for your first visit.”
- Primary action: “Plan a visit”
- Secondary action: “About Doxa”
- Scripture heading: “Verse of the day”
- Events heading: “Coming up at Doxa”
- Gallery heading: “Life at Doxa”

Write the final welcome after reviewing the church's objectives and audience. Do not invent promises about children's provision, accessibility, parking, transport, membership requirements, or pastoral availability.

## Proposed visual direction

Use a warm, photographic editorial layout with a clear hierarchy. Let the congregation, worship and outreach provide the character of the website.

| Element     | Direction                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity    | Use the actual church logo when supplied. Retain the full church name as text until then; do not invent a replacement symbol                                                 |
| Colour      | Provisionally retain the existing royal blue (`232 78% 25%`) and red (`354 70% 45%`); use blue for primary actions, red sparingly, and warm cream with dark text for reading |
| Typography  | Use Arial/Helvetica with medium weight and tight heading spacing, following the user-selected typography at The House                                                        |
| Photography | Use real worship, congregation, leadership and outreach photographs with suitable crops and permission for public use                                                        |
| Composition | One strong hero photograph, generous reading space, varied image and text sections, restrained separators, and compact event rows                                            |
| Components  | Consistent buttons, readable article layouts, dated event listings and simple album previews; use cards where grouping helps                                                 |
| Navigation  | Clear desktop and mobile menus with a consistently visible visit action and legible text over each background                                                                |
| Motion      | Limited optional transitions; respect reduced motion and keep content visible without animation                                                                              |

The existing `STYLE_GUIDE.md` describes the current implementation. Revise it after the visual direction is settled rather than treating every current effect as a requirement.

## Content ownership

| Content                                                                    | Proposed home                                           | Editorial rule                                                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Mission, vision, beliefs, objectives, history                              | `src/content/church.ts` or focused static content files | Publish the approved wording; keep objectives separate from beliefs                                                     |
| Church name, contacts, address, directions, service schedule, social links | `src/config/church.ts`                                  | One shared source; resolve all conflicts before launch                                                                  |
| Leadership and ministry descriptions                                       | Static content initially                                | Revisit CMS ownership if updates become frequent                                                                        |
| Page structure, navigation and visitor guidance                            | Application components and static content               | Keep layout decisions out of the CMS                                                                                    |
| Articles, church news and longer reflections                               | Existing Sanity `post`, `author`, `category`            | Required title, unique slug, publication date and body; image alternative text where an image is used                   |
| Gallery                                                                    | Sanity `galleryAlbum`                                   | Album title, slug, date, description, cover and accessible image descriptions                                           |
| Daily scripture                                                            | New Sanity `dailyScripture`                             | Separate publication date, passage text, Bible reference, translation and optional reflection                           |
| Events                                                                     | Sanity `event`                                          | Typed start and optional end datetime, venue, slug, description, optional image and verified directions                 |
| Giving instructions                                                        | Existing controlled Sanity `giveSettings`               | Restrict edits to appropriate staff and verify the published destination                                                |
| Form submissions                                                           | Agreed delivery or storage service                      | Success means the destination has accepted the submission; Sanity editorial documents are not the default enquiry inbox |

### Daily message behaviour

The landing page shows the existing published `home.dailyMessage` from Sanity directly below the welcome strip. Header and footer Daily message links jump to the section. Preserve the full message and paragraph breaks. Do not assign today's date to an older message or add a fallback verse. If no message is available, show an availability notice. Studio exposes the existing home document under Daily Message & Home Photo.

### Events and articles

Filter future article publication dates from public listings and detail routes. List upcoming events using a real datetime; treat an event as ongoing until its end where an end exists. Format dates consistently in `Africa/Accra`. For events with no end, define an explicit expiry rule during implementation. Avoid automatically presenting last year's programmes as this year's schedule.

## Church material to resolve

| Needed                                   | Existing lead                                                                              | Decision required                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Official logo and recent brand materials | Current code uses text for the church name and blue/red theme tokens                       | Confirm whether those colours match the intended identity                                       |
| Mission and vision                       | Wording exists in `src/util/systemPrompt.ts`; live CMS wording has not been inspected      | Supply or identify the approved version                                                         |
| Objectives and beliefs                   | Chatbot has ten “dream church” points; CMS field mixes the two concepts                    | Confirm which statements belong in each category                                                |
| Service schedule                         | Homepage: 10:00 AM; chatbot: 8:00 AM and 11:00 AM                                          | Confirm current services and weekday gatherings                                                 |
| Exact location and contacts              | Footer mentions Oyibi, Adamorobe Obama; phone is a placeholder                             | Confirm address, map pin, phone, email and official social accounts                             |
| Leadership and history                   | Existing About schema can hold both                                                        | Confirm biographies, names, roles and church history                                            |
| Photographs                              | Local public assets are framework illustrations; some components reference external images | Supply or identify church-owned photographs and suitable hero crops                             |
| Visitor support                          | No confirmed follow-up destination in the API routes                                       | Choose the recipient or system and responsible church contact                                   |
| Practical visitor details                | No verified provision recorded in reviewed source                                          | Confirm duration, arrival guidance, language, children, accessibility and parking as applicable |

## Implementation sequence

1. **Content foundation:** reconcile the church material, capture existing Sanity content, and create approved static identity and configuration sources. Keep unresolved details out of public copy.
2. **Homepage and visit experience:** create desktop and mobile homepage designs, settle the shared typography and components, then build the header, footer, homepage and visit page. Use the genuine logo and photography as available.
3. **Editorial model:** add daily scripture, strengthen event and post validation, and organise Studio around the church team's publishing tasks. Add previews and appropriate loading, empty and error behaviour.
4. **Supporting pages:** update About, Articles and Gallery, build event routes, and introduce the approved faith and church life content. Preserve working public URLs.
5. **Connection and release:** implement real form delivery, confirm giving and contact destinations, reconcile or temporarily remove outdated chatbot guidance, and complete verification.

### Migration safeguards

- Export existing documents before changing the content model. Do not delete the current home, about, FAQ or gallery documents as the first step.
- Compare CMS mission, vision and objectives with the church-approved material before committing static replacements.
- Introduce new fields and documents alongside the old fields. Populate and verify them before switching reads.
- Retain existing post and gallery slugs; redirect any deliberately changed public URLs.
- Move daily content out of the home document only after the new scripture query works. If the original verse has no known publication date, do not assign today's date to make it appear new.
- Retire old fields after confirming that public pages and the chatbot no longer depend on them.

## Release checks

- Every public link has a useful destination; no placeholder phone numbers, social links, testimonials or framework metadata remain.
- The church team has verified identity text, service times, directions, leadership and giving details.
- A visitor can find service information and directions without submitting a form.
- Form success and failure have been tested against the real destination, including receipt by the church team.
- Scripture dates, missing daily entries, future publications, expired events and empty galleries behave intentionally.
- Core identity and visit information remain usable when Sanity content is unavailable.
- Mobile layouts, keyboard access, visible focus, semantic headings, image descriptions, text contrast and reduced motion have been checked.
- Articles and events have useful page titles, descriptions and sharing previews; existing indexed URLs remain valid or redirect correctly.
- The church team can publish an article, event, album and scripture entry in Studio without changing application code.

For evangelism measurement, start with aggregate visit-page views, directions clicks and successful contact enquiries once a suitable measurement approach is agreed. Report these as engagement signals; they do not establish attendance or faith decisions.
