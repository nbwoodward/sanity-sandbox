import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {structure, defaultDocumentNodeResolver} from './src/structure'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'thistle-magpie',

  projectId: 'q429asnu',
  dataset: 'production',

  plugins: [
    deskTool({structure, defaultDocumentNode: defaultDocumentNodeResolver}),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
