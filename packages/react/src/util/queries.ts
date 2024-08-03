import { useQuery } from '@tanstack/react-query'
import Oas from 'oas'

import { OpenAPI } from './openapi'

export function useSpecQuery(url: string) {
  return useQuery({
    queryKey: ['oas', url],
    queryFn: async () => {
      const result = await fetch(url).then((res) => res.json())
      const oas = Oas.init(result)

      return new OpenAPI(oas)
    },
  })
}
