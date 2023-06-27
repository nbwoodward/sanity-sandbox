import { defineType, defineField } from "sanity";
export default defineType({
  name: 'foodInfo',
  type: 'object',
  fields: [
    defineField({
      name: 'tastesGood',
      title: 'Tastes Good?',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'story',
      title: 'Food\'s Story',
      type: 'array',
      of: [{type: 'block'}]
    })
  ]
})
