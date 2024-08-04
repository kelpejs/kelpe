import { useSpecQuery } from '../util/queries'

export function OperationList(props: { url: string }) {
  const spec = useSpecQuery(props.url)
  const operations = spec.data?.operations()

  return (
    <div>
      {operations?.map((op) => {
        return (
          <div id={op.id} key={op.id} className="min-h-[100px] px-4">
            <div>
              {op.method.toLocaleUpperCase()} {op.path}
            </div>
            <div className="font-sans text-xl font-semibold mt-2">{op.id}</div>
          </div>
        )
      })}
    </div>
  )
}
