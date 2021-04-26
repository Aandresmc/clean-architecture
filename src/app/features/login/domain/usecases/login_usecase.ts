import { injectable } from "inversify";

import { UseCase } from "@/app/core/use-case";
import { ILoginRepository } from "../repositories/ilogin_repository";
import { ILogin } from "../entities/ilogin";

@injectable()
export class LoginUseCase implements UseCase<ILogin.Params, ILogin.Response>{

    private readonly _repository: ILoginRepository;

    constructor(repository: ILoginRepository) {
        this._repository = repository;
    }

    call(params: ILogin.Params): Promise<ILogin.Response> {
        return this._repository.login(params);
    }

}