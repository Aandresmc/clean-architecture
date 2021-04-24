import { ActionContext } from "vuex";
import { ILogin, TokenAuth } from "../../../domain/entities/ilogin";
import { LoginMutationsTypes } from "../mutations/imutations";
import { LoginStateTypes } from "../state/istate";
import { LoginModuleTypes } from "../types";

export interface LoginActionsTypes {
  [LoginModuleTypes.ACTION_LOGIN](
    { commit, dispatch }: AugmentedActionContext,
    payload: ILogin.Params
  ): Promise<TokenAuth>;
}

type AugmentedActionContext = {
  commit<K extends keyof LoginMutationsTypes>(
    key: K,
    payload: Parameters<LoginMutationsTypes[K]>[1]
  ): ReturnType<LoginMutationsTypes[K]>;

  dispatch<K extends keyof LoginActionsTypes>(
    key: K,
    payload: Parameters<LoginActionsTypes[K]>[1]
  ): ReturnType<LoginActionsTypes[K]>;
};
