import { title } from "process";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Doxa Home",
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
