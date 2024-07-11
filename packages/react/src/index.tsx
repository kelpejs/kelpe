import Oas from 'oas'
import { useQuery } from './hooks/use-query'

interface KelpeProps {
  url: string
}

export const Kelpe = (props: KelpeProps) => {
  const { url } = props

  const spec = useQuery('oas', async () => {
    const result = await fetch(url).then((res) => res.json())
    return Oas.init(result)
  })

  return <div>{spec?.data?.api?.info?.title || 'N/a'}</div>
}
