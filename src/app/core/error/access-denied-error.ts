export class AccessDeniedError extends Error {
    constructor () {
      super('Acesso denegado!')
      this.name = 'AccessDeniedError'
    }
}