import { defineType, defineField } from "sanity";

export const aboutType = defineType({
  name: "about",
  type: "document",
  fields: [
    defineField({
      name: "ourStory",
      title: "Our Story",
      type: "text",
    }),
    defineField({
      title: "Our Beliefs",
      name: "beliefs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      title: "Our Pastors",
      name: "pastors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              description: "The name of the pastor",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "The image of the pastor",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              description: "A short description about the pastor",
            },
            {
              name: "role",
              title: "Role",
              type: "string",
              description:
                "The role of the pastor (e.g., Senior Pastor, Associate Pastor)",
            },
          ],
        },
      ],
      description:
        "A list of pastors with their images, names, and descriptions",
    }),
    defineField({
      title: "Service Activities",
      name: "serviceActivities",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
