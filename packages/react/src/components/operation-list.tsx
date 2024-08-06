import { useSpecQuery } from '../util/queries'
import { Operation } from './operation'

export function OperationList(props: { url: string }) {
  const spec = useSpecQuery(props.url)
  const operations = spec.data?.operations()

  return (
    <div>
      {operations?.map((op) => (
        <Operation operation={op} key={op.id} />
      ))}
    </div>
  )
}
