import { defineType, defineField } from "sanity";
import { FoodInfo } from "../../src/components/infoField";


export default defineType({
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'info',
      title: 'Food Info',
      type: 'foodInfo',
      components: {
        input: FoodInfo,
      },
    }),
  ]
})
