import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home Content",
  description:
    "The landing page uses the hero photograph and daily message here. Church identity is managed in the website's static content files.",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "dailyMessage",
      title: "Doxa’s Patriarch’s PEN",
      type: "text",
      description:
        "The Head Pastor’s full message shown on the landing page as Doxa’s Patriarch’s PEN. Separate paragraphs with blank lines. Publish changes to update the public website.",
    }),
    defineField({
      name: "dailyMessageDate",
      title: "Patriarch’s PEN Message Date",
      type: "date",
      description:
        "The date of the published message in Ghana. The morning publisher uses this to prevent duplicate updates.",
    }),
    defineField({
      name: "dailyVerse",
      title: "Legacy Daily Verse",
      type: "text",
      readOnly: true,
      description:
        "Retained for reference; the public site displays Doxa’s Patriarch’s PEN instead.",
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
    }),
    defineField({
      name: "churchEvents",
      title: "Church Events",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
        },
      ],
      description: "A list of events related to the church",
    }),
  ],
});
