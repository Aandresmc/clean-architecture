import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from "vuex";

import { state } from "./state/state";
import { mutations } from "./mutations/mutations";
import { actions } from "./actions/actions";
import { getters } from "./getters/getters";

import { LoginStateTypes } from "./state/istate";
import { LoginGettersTypes } from "./getters/igetters";
import { LoginMutationsTypes } from "./mutations/imutations";
import { LoginActionsTypes } from "./actions/iactions";

export const LOGIN_MODULE: Module<LoginStateTypes, any> = {
  //   namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export type LoginStoreModuleTypes<S = LoginStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof LoginMutationsTypes,
    P extends Parameters<LoginMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<LoginMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof LoginGettersTypes]: ReturnType<LoginGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof LoginActionsTypes>(
    key: K,
    payload?: Parameters<LoginActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<LoginActionsTypes[K]>;
};
