import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "photoGallery",
  title: "Photo Gallery",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      type: "string",
      name: "title",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      title: "Description",
      type: "text",
      name: "description",
    }),
    defineField({
      name: "showCaseImage",
      title: "ShowCase image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "groupedImages",
      title: "Grouped Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description:
                "Add alternative text for the image (for accessibility).",
            },
          ],
        },
      ],
    }),
  ],
});
