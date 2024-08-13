import * as sampler from 'openapi-sampler'

function jsonSchemaToJson(schema: any, indent: Boolean = true) {
  if (!schema) return '{}'

  try {
    return JSON.stringify(sampler.sample(schema, {}), null, indent ? 2 : 0)
  } catch (error) {
    return '{}'
  }
}

export { jsonSchemaToJson }
