import { AsyncContainerModule, interfaces } from 'inversify';

import { enviroments } from 'environments/enviroment';
import { HttpClient } from 'app/core/http/http-client';

import { UseCase } from 'app/core/use_case';

import { ILoginRepository } from '../domain/repositories/ilogin_repository';
import { LoginRepository } from '../data/repositories/login_repository';

import { ILogin } from '../domain/entities/ilogin';
import { AuthenticationUseCase } from '../domain/usecases/login_usecase';

const providers = (): AsyncContainerModule => {

    const module = new AsyncContainerModule(
        async (bind: interfaces.Bind) => {
            
            //repository
            bind<ILoginRepository>('ILoginRepository')
                .toDynamicValue(context => {
                    return new LoginRepository(enviroments.security, context.container.get<HttpClient>('HttpClient'));
                });

            //usecases

            bind<UseCase<ILogin.Params, ILogin.Response>>('AuthenticationUseCase')
                .toDynamicValue(context => {
                    return new AuthenticationUseCase(context.container.get<ILoginRepository>('ILoginRepository'));
                });
        }
    );

    return module;
};

export default providers;


