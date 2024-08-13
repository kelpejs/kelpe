import { useQuery } from '@tanstack/react-query'
import Oas from 'oas'

import { OpenAPI } from './openapi'
import { operationToSnippet } from './snippets'

export function useSpecQuery(url: string) {
  return useQuery({
    queryKey: ['oas', url],
    queryFn: async () => {
      const result = await fetch(url).then((res) => res.json())
      const oas = Oas.init(result)
      await oas.dereference()

      return new OpenAPI(oas)
    },
  })
}

export function useSnippetQuery(
  input: Parameters<typeof operationToSnippet>[0]
) {
  return useQuery({
    queryKey: ['snippet', input],
    queryFn: async () => {
      return operationToSnippet(input)
    },
  })
}
