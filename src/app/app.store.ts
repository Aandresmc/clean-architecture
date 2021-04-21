import { createStore, useStore as VuexStore } from "vuex";

import {
  LoginStoreModuleTypes,
  LOGIN_MODULE,
} from "./features/login/presentation/store";

type StoreModules = {
  login: LoginStoreModuleTypes;
};

export type Store = LoginStoreModuleTypes<Pick<StoreModules, "login">>;

export const store = createStore({
  strict: true,
  modules: {
    LOGIN_MODULE,
  },
});

/**
 * Returns Whole Store Object
 */
export const useStore = () => VuexStore() as Store;
