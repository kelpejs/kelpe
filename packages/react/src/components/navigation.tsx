import { useSpecQuery } from '../util/queries'

export interface NavigationProps {
  url?: string
}

export function Navigation(props: NavigationProps) {
  const { url } = props

  const spec = useSpecQuery(url!)
  const operations = spec.data?.operations()

  return (
    <div className="flex flex-col gap-2 sticky top-0">
      {operations?.map((op, index) => {
        return (
          <a href={`#${op.id}`} key={index} className="no-underline">
            {op.id}
          </a>
        )
      })}
    </div>
  )
}
