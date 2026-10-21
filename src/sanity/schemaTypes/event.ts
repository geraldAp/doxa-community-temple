import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Legacy date text",
      type: "string",
      readOnly: true,
      description:
        "Preserved for migration. Enter the actual start and end below; old free-text dates are not shown in upcoming events.",
    }),
    defineField({
      name: "startsAt",
      title: "Starts at",
      type: "datetime",
      description:
        "Enter the correct local time and timezone. Public dates display in Ghana time.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endsAt",
      title: "Ends at",
      type: "datetime",
      validation: (rule) => rule.min(rule.valueOfField("startsAt")),
    }),
    defineField({
      name: "image",
      title: "Event image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Image description", type: "string" }],
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
