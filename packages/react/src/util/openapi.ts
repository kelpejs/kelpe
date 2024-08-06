import Oas from 'oas'
import { pick } from './object'

export type Operation = ReturnType<OpenAPI['operations']>[number]

export class OpenAPI {
  private oas: Oas

  constructor(spec: Oas) {
    this.oas = spec
  }

  operations() {
    const paths = this.oas.getPaths()

    const ops = Object.values(paths)
      .map((path) => Object.values(path))
      .flat()

    return ops.map((op) => ({
      // Base
      ...pick(op, ['path', 'method', 'schema']),
      // Extended
      id: op.getOperationId(),
    }))
  }
}
