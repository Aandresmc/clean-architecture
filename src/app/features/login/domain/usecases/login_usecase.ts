import { injectable } from 'inversify';

import { UseCase } from "app/core/use_case";
import { ILogin } from "../entities/ilogin";
import { ILoginRepository } from "../repositories/ilogin_repository";

@injectable()
export class AuthenticationUseCase implements UseCase<ILogin.Params, ILogin.Response> {

    private readonly _repository: ILoginRepository;

    constructor(repository: ILoginRepository) {
        this._repository = repository;
    }

    call(params: ILogin.Params): Promise<ILogin.Response> {
        return this._repository.login(params);
    }
}