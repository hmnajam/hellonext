import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'


import {visionTool} from '@sanity/vision'
//import {visionTool} from '@sanity/vision'


import {schemaTypes} from '../../schemas'
//import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: '4g77qcwa',
  dataset: 'production',
  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
