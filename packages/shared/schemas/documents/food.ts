import { defineType, defineField } from "sanity";
import { FoodInfo } from "../../components/infoField"
import { CustomSlugInput } from "../../components/sharedCustomSlug";

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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      components: { input: CustomSlugInput },
      options: {
      }
    })
  ]
})
