import Oas from 'oas'
import { pick } from '.'

export type Operation = ReturnType<OpenAPI['operations']>[number]

export class OpenAPI {
  private oas: Oas

  constructor(spec: Oas) {
    this.oas = spec
  }

  info() {
    return this.oas.api.info
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
      description: op.getDescription(),

      api: { url: this.oas.url() },

      responseStatusCodes: op.getResponseStatusCodes(),
      responses: Object.fromEntries(
        op
          .getResponseStatusCodes()
          // @TODO: Why does `getResponseAsJSONSchema` return an array?
          .map((status) => [status, op.getResponseAsJSONSchema(status)?.[0]])
      ),
    }))
  }
}
