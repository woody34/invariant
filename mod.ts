export function invariant (condition: boolean, message?: string | (() => string)): asserts condition {
  if (condition) {
    return
  }

  const _message = typeof message === 'function' ? message() : message
  throw new Error(`Invariant failed: ${_message}`)
} 
