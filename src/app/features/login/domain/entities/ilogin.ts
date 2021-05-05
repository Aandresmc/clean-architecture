export namespace ILogin {
    export type Params = {
        email: string
        password: string
    }

    export type Response = {
        token: string
    }
}

