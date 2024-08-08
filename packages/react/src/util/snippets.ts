import { HTTPSnippet } from 'httpsnippet-lite'
import urlJoin from 'url-join'

import { Operation } from './openapi'

export async function operationToSnippet(operation: Operation) {
  const snippet = new HTTPSnippet({
    method: operation.method.toUpperCase(),
    url: urlJoin(operation.api.url, operation.path),

    // @TODO: Headers
    headers: [
      { name: 'Content-Type', value: 'application/json' },
      { name: 'Authorization', value: 'Bearer 1234567890' },
    ],
    cookies: [], // @TODO: Cookies

    queryString: [], // @TODO: Query string
    headersSize: -1,
    bodySize: -1,
    httpVersion: '1.1',

    // @TODO: Body (postData)
  })

  const curl = (await snippet.convert('shell', 'curl', [])) as string | null

  return { curl }
}
