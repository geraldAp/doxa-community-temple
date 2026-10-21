import { defineField, defineType } from "sanity";

export const dailyScriptureType = defineType({
  name: "dailyScripture",
  title: "Daily Scripture",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Publication date in Ghana",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "passage",
      title: "Scripture text",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "reference",
      title: "Bible reference",
      type: "string",
      description: "For example, John 3:16",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "translation",
      title: "Bible translation",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "reflection",
      title: "Optional reflection",
      type: "text",
    }),
  ],
  orderings: [
    {
      title: "Newest date",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: { select: { title: "reference", subtitle: "date" } },
});
