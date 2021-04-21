
export namespace ILogin {
    export type Params = {
        email: string
        password: string
    }

    export type Response = TokenAuth
}

export type TokenAuth = {
    accessToken: string,
    tokenType: string,
    refreshToken: string,
    expiresIn: number,
}