import type { Operation as OperationType } from '../util/openapi'
import { markdownToHTML } from '../util/markdown'

interface OperationProps {
  operation: OperationType
}

function Schema(props: { schema: Record<string, any> }) {
  const { schema } = props

  if (!schema) return <p>No schema found</p>

  const types = Array.isArray(schema?.type) ? schema?.type : [schema?.type]

  const anyOfs = ['anyOf', 'oneOf', 'allOf', 'enum'] as const

  const isObjectSchema = types.includes('object')
  const isArraySchema = types.includes('array')
  const isAnyOfSchema = anyOfs.some((t) => Array.isArray(schema?.[t]))

  return (
    <div className="bg-violet-200 rounded-full w-min px-2 text-xs">
      {isObjectSchema ? <p>object</p> : null}
      {isArraySchema ? <p>array</p> : null}
      {isAnyOfSchema ? <p>anyOf</p> : null}
    </div>
  )
}

export function Operation(props: OperationProps) {
  const { operation } = props
  const { method, path } = operation

  return (
    <div id={operation.id} className="min-h-[100px] px-4 space-y-3">
      <p className="text-sm font-semibold">
        {method} {path}
      </p>
      <p>{operation.id}</p>

      <div
        className="p-2 bg-zinc-100 rounded-md"
        dangerouslySetInnerHTML={{
          __html: markdownToHTML(operation.description),
        }}
      />

      {Object.entries(operation.responses).map(([status, response]) => (
        <details key={status}>
          <summary>{status}</summary>
          <Schema schema={response?.schema} />
        </details>
      ))}
    </div>
  )
}
