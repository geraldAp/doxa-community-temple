import { defineType, defineField } from "sanity";

export const giveSettingsType = defineType({
  name: "giveSettings",
  title: "Give & Volunteer Settings",
  type: "document",
  fields: [
    defineField({
      name: "paymentInstructions",
      title: "Payment Instructions",
      type: "text",
      description: "Bank details or link instructions for giving",
    }),
    defineField({
      name: "volunteerIntroText",
      title: "Volunteer Intro Text",
      type: "text",
      description: "Introductory text displayed above the volunteer form",
    }),
  ],
});
