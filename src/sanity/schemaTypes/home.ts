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
      title: "Daily Message",
      type: "text",
      description:
        "The full message shown on the landing page. Separate paragraphs with blank lines. Publish changes to update the public website.",
    }),
    defineField({
      name: "dailyVerse",
      title: "Legacy Daily Verse",
      type: "text",
      readOnly: true,
      description:
        "Retained for reference; the public site displays Daily Message instead.",
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
