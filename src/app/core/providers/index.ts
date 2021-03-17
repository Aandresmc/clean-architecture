
import { AsyncContainerModule, interfaces } from 'inversify';

import { HttpClient } from 'app/core/http/http-client';
import { AxiosHttpClient } from "../http";


export const CoreModule = {
    providers: () => {

        const providers = new AsyncContainerModule(
            async (bind: interfaces.Bind) => {
                bind<HttpClient>('HttpClient').to(AxiosHttpClient);
            }
        );

        return providers;
    }
}


