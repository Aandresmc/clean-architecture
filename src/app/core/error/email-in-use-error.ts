export class EmailInUseError extends Error {
    constructor () {
      super('Error en el caso de uso de e-mail')
      this.name = 'EmailInUseError'
    }
}