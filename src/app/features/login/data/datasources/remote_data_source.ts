import { InvalidCredentialsError, UnexpectedError } from "../../../../core/error"
import { HttpClient, HttpMethod, HttpStatusCode } from "../../../../core/http/http-client"

interface IRemoteDataSource {
    request(url: string,
        method: HttpMethod,
        params?: any): Promise<any>
}

export class RemoteDataSource implements IRemoteDataSource {
    private _httpClient: HttpClient<any>
    
    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }
    
    async request(url: string, method: HttpMethod, params?: any): Promise<any> {
        const httpResponse = await this._httpClient.request({
            url,
            method,
            body: params
        })
        switch (httpResponse?.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
            default: throw new UnexpectedError()
        }
    }
}