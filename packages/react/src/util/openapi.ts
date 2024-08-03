import Oas from 'oas'

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
      ...op,
      api: undefined, // Too much data, not needed
      path: op.path,
      method: op.method,
      schema: op.schema,
      id: op.getOperationId(),
    }))
  }
}
