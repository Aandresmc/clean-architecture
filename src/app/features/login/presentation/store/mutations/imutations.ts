import { TokenAuth } from "@/app/features/login/domain/entities/ilogin";
import { LoginStateTypes } from "../state/istate";
import { LoginModuleTypes } from "../types";

export type LoginMutationsTypes<S = LoginStateTypes> = {
  [LoginModuleTypes.SET_TOKEN](state: S, payload: TokenAuth): void;
};
