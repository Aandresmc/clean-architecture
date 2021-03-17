import { ILogin } from "../entities/ilogin";

export interface ILoginRepository {
    login(params: ILogin.Params): Promise<ILogin.Response>
}
