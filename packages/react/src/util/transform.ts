import * as sampler from 'openapi-sampler'

function jsonSchemaToJson(schema: any) {
  if (!schema) return '{}'
  return JSON.stringify(sampler.sample(schema), null, 2)
}

export { jsonSchemaToJson }
