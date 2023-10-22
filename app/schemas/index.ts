import * as Documents from './documents'
import * as Objects from './objects'

export const schemaTypes = [
  ...Object.values(Documents),
  ...Object.values(Objects),
]
