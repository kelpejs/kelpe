import { HTTPSnippet } from 'httpsnippet-lite'
import urlJoin from 'url-join'
import { jsonSchemaToJson as toJson } from './transform'
import { Operation } from './openapi'
import { MediaTypeObject } from 'oas/types'

export async function operationToSnippet(operation: Operation) {
  const { parameters } = operation

  const headers = parameters
    ?.filter((param) => param.in === 'header')
    .map((param) => ({ name: param.name, value: toJson(param.schema, false) }))

  const cookies = parameters
    ?.filter((param) => param.in === 'cookie')
    .map((param) => ({ name: param.name, value: toJson(param.schema, false) }))

  const queryString = parameters
    ?.filter((param) => param.in === 'query')
    .map((param) => ({ name: param.name, value: toJson(param.schema, false) }))

  const requestBodySchema = (operation.requestBody as MediaTypeObject)?.schema

  const snippet = new HTTPSnippet({
    method: operation.method.toUpperCase(),
    url: urlJoin(operation.api.url, operation.path),

    headers,
    cookies,
    queryString,

    headersSize: -1,
    bodySize: -1,
    httpVersion: '1.1',
    postData:
      requestBodySchema && operation.isJson
        ? {
            mimeType: 'application/json',
            text: toJson(requestBodySchema, false),
          }
        : undefined,
  })

  const curl = (await snippet.convert('shell', 'curl', {})) as string | null

  return { curl }
}
