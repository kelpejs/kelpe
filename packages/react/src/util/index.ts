// Lodash-inspired utils

export function pick<T extends object, K extends keyof T>(
  object: T,
  keys: K[]
): Pick<T, K> {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key]
    }
    return obj
  }, {} as Pick<T, K>)
}

export function isObject(value: unknown): value is object {
  return value !== null && typeof value === 'object'
}

export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
