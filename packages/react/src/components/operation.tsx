import type { Operation as OperationType } from '../util/openapi'
import { Markdown } from './markdown'

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

const Left = (props: any) => (
  <div className="h-full w-full xl:w-[calc(60%)]" {...props} />
)

const Right = (props: any) => (
  <div
    className="h-fit w-full xl:w-[calc(40%)] flex flex-col sticky top-6 mb-6 bg-zinc-300/40"
    {...props}
  />
)

export function Operation(props: OperationProps) {
  const { operation } = props
  const { method, path } = operation

  return (
    <div
      id={operation.id}
      className="min-h-[100px] flex w-full flex-col xl:flex-row relative"
    >
      <Left>
        <p className="text-sm font-semibold">
          {method} {path}
        </p>
        <p>{operation.id}</p>

        <Markdown content={operation.description} />

        {Object.entries(operation.responses).map(([status, response]) => (
          <details key={status}>
            <summary>{status}</summary>
            <Schema schema={response?.schema} />
          </details>
        ))}
      </Left>

      <Right>
        <p>Examples</p>
      </Right>
    </div>
  )
}
