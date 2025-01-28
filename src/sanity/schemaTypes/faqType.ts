
import { defineType, defineField } from 'sanity';

export const faqType = defineType({
  name: 'faq', 
  title: 'FAQ', 
  type: 'document', 
  fields: [
    defineField({
      name: 'question', 
      title: 'Question', 
      type: 'string', 
      description: 'The frequently asked question', 
      validation: (Rule) => Rule.required(), 
    }),
    defineField({
      name: 'answer',
      title: 'Answer', 
      type: 'text',
      description: 'The answer to the frequently asked question', 
      validation: (Rule) => Rule.required(), 
    }),
  ],
});