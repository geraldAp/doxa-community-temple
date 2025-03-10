import { defineType, defineField } from 'sanity';
export const galleryType =  defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // Enables image cropping
              },
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'A short description of the image for accessibility.',
            }),
          ],
        },
      ],
    }),
  ],
});