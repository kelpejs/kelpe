import type { Operation as OperationType } from '@/util/openapi'

interface OperationProps {
  operation: OperationType
}

export function Operation(props: OperationProps) {
  const { operation } = props
  const { method, path, schema } = operation

  return (
    <div id={operation.id} className="min-h-[100px] px-4">
      <p className="text-sm font-semibold">
        {method} {path}
      </p>
      <p>{operation.id}</p>
    </div>
  )
}
