import { useSpecQuery } from '../util/queries'
import { Markdown } from './markdown'

interface InfoProps {
  url: string
}

export function Info({ url }: InfoProps) {
  const spec = useSpecQuery(url)

  if (!spec.data) return null

  const info = spec.data.info()

  return (
    <div className=" px-4">
      <div className="flex flex-row items-center gap-2">
        <h1>{info.title}</h1>
        <small>{info.version}</small>
      </div>
      <Markdown content={info.description} />
    </div>
  )
}
