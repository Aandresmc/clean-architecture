import { AsyncContainerModule, interfaces } from 'inversify';
import { enviroments } from '@/environments/environment';
import { HttpClient } from '../../../core/http/http-client';
import { UseCase } from '../../../core/use-case';
import { ILoginRepository } from '../domain/repositories/ilogin_repository';
import { LoginRepository } from '../data/repositories/login_repository';
import { LoginUseCase } from '../domain/usecases/login_usecase';
import { ILogin } from '../domain/entities/ilogin';


const providers = (): AsyncContainerModule => {

    const module = new AsyncContainerModule(
        async (bind: interfaces.Bind) => {

            //repository
            bind<ILoginRepository>('ILoginRepository')
                .toDynamicValue(context => {
                    return new LoginRepository(enviroments.security, context.container.get<HttpClient>('HttpClient'));
                });

            //usecases
            bind<UseCase<ILogin.Params, ILogin.Response>>('LoginUseCase')
                .toDynamicValue(context => {
                    return new LoginUseCase(context.container.get<ILoginRepository>('ILoginRepository'));
                });

        }
    );

    return module;
};

export default providers;