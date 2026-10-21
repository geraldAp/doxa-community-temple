# Current page dependency trees

Shared layout dependencies apply to all routes. Repeated dependencies expand once per tree.

## Shared root

- src/app/globals.css
- src/components/:ayoutComponent.tsx
  - src/components/Footer.tsx
    - src/config/church.ts
  - src/components/Header.tsx
    - src/components/ui/sheet.tsx
      - src/lib/utils.ts

## /about

Entry: `src/app/about/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/content/church.ts

## /blog/[slug]

Entry: `src/app/blog/[slug]/page.tsx`

- src/lib/editorial.ts
- src/components/shared/PortableTextRenderer.tsx
  - src/sanity/lib/image.ts
    - src/sanity/env.ts
- src/components/reusables/PageIntro.tsx
- src/components/reusables/EditorialImage.tsx
  - src/lib/editorial.ts
  - src/sanity/lib/image.ts

## /blog

Entry: `src/app/blog/page.tsx`

- src/lib/editorial.ts
- src/components/reusables/PageIntro.tsx
- src/components/reusables/EditorialImage.tsx
  - src/lib/editorial.ts
  - src/sanity/lib/image.ts
    - src/sanity/env.ts

## /church-life

Entry: `src/app/church-life/page.tsx`

- src/components/reusables/PageIntro.tsx

## /contact

Entry: `src/app/contact/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/config/church.ts

## /events/[slug]

Entry: `src/app/events/[slug]/page.tsx`

- src/lib/editorial.ts
- src/components/reusables/PageIntro.tsx
- src/components/reusables/EditorialImage.tsx
  - src/lib/editorial.ts
  - src/sanity/lib/image.ts
    - src/sanity/env.ts

## /events

Entry: `src/app/events/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/lib/editorial.ts

## /faith

Entry: `src/app/faith/page.tsx`

- src/components/reusables/PageIntro.tsx

## /faq

Entry: `src/app/faq/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/config/church.ts

## /gallery/[slug]

Entry: `src/app/gallery/[slug]/page.tsx`

- src/lib/editorial.ts
- src/components/reusables/PageIntro.tsx
- src/components/reusables/EditorialImage.tsx
  - src/lib/editorial.ts
  - src/sanity/lib/image.ts
    - src/sanity/env.ts

## /gallery

Entry: `src/app/gallery/page.tsx`

- src/lib/editorial.ts
- src/components/reusables/PageIntro.tsx
- src/components/reusables/EditorialImage.tsx
  - src/lib/editorial.ts
  - src/sanity/lib/image.ts
    - src/sanity/env.ts

## /give

Entry: `src/app/give/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/config/church.ts
- src/lib/editorial.ts

## /membership

Entry: `src/app/membership/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/config/church.ts

## /

Entry: `src/app/page.tsx`

- src/components/home/HomePage.tsx
  - src/content/church.ts
  - src/config/church.ts
  - src/lib/editorial.ts
  - src/components/reusables/EditorialImage.tsx
    - src/lib/editorial.ts
    - src/sanity/lib/image.ts
      - src/sanity/env.ts
- src/lib/editorial.ts

## /privacy

Entry: `src/app/privacy/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/config/church.ts

## /studio/[[...tool]]

Entry: `src/app/studio/[[...tool]]/page.tsx`

- sanity.config.ts
  - src/sanity/env.ts
  - src/sanity/schemaTypes/index.ts
    - src/sanity/schemaTypes/blockContentType.ts
    - src/sanity/schemaTypes/categoryType.ts
    - src/sanity/schemaTypes/postType.ts
    - src/sanity/schemaTypes/authorType.ts
    - src/sanity/schemaTypes/event.ts
    - src/sanity/schemaTypes/home.ts
    - src/sanity/schemaTypes/galleryType.ts
    - src/sanity/schemaTypes/faqType.ts
    - src/sanity/schemaTypes/about.ts
    - src/sanity/schemaTypes/galleryAlbum.ts
    - src/sanity/schemaTypes/giveSettings.ts
    - src/sanity/schemaTypes/dailyScripture.ts
  - src/sanity/structure.ts

## /visit

Entry: `src/app/visit/page.tsx`

- src/components/reusables/PageIntro.tsx
- src/config/church.ts
