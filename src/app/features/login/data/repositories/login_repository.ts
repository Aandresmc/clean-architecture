import { injectable } from "inversify";

import { HttpClient } from "../../../../core/http/http-client";
import { RemoteDataSource } from "../datasources/remote_data_source";

import { ILoginRepository } from "../../domain/repositories/ilogin_repository";

import generateUri, { PathUri } from "../../../../../environments/path";
import { ILogin } from "../../domain/entities/ilogin";

@injectable()
export class LoginRepository implements ILoginRepository {

    constructor(
        private readonly url: PathUri,
        private readonly httpClient: HttpClient<ILogin.Response>
    ) { }

    async login(params: ILogin.Params): Promise<ILogin.Response> {
        let response;

        try {
            const remote = new RemoteDataSource(this.httpClient)
            const url = generateUri(this.url);
            response = await remote.request(url, 'post', params);

        } catch (error) {
            console.log('error ' + error);

            //TODO: call LocalDataSource
        }
        return response;
    }

}
