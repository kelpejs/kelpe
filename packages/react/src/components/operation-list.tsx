import { useSpecQuery } from '../util/queries'

export function OperationList(props: { url: string }) {
  const spec = useSpecQuery(props.url)
  const operations = spec.data?.operations()

  return (
    <div>
      {operations?.map((op) => {
        return (
          <a id={op.id} key={op.id}>
            <div>{op.id}</div>
            <div>{op.path}</div>
          </a>
        )
      })}
    </div>
  )
}
