export class UnexpectedError extends Error {
  constructor () {
    super('Ha sucedido un error, intentalo de nuevo.')
    this.name = 'UnexpectedError'
  }
}
