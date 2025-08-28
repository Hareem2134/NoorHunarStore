import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// 1. Import your schema
import {schema} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Noor Hunar Store',

  // These should already be filled in from your setup
  projectId: 'z40dyn2f',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  // 2. Add the schema to the project configuration
  schema: {
    types: schema.types,
  },
})