import { ActionContext } from "vuex";
import { TokenAuth } from "../../../domain/entities/ilogin";
import { LoginMutationsTypes } from "../mutations/imutations";
import { LoginStateTypes } from "../state/istate";
import { LoginModuleTypes } from "../types";

export interface LoginActionsTypes {
  [LoginModuleTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<TokenAuth>;
}

type AugmentedActionContext = {
  commit<K extends keyof LoginMutationsTypes>(
    key: K,
    payload: Parameters<LoginMutationsTypes[K]>[1]
  ): ReturnType<LoginMutationsTypes[K]>;
} & Omit<ActionContext<LoginStateTypes, any>, "commit">;
