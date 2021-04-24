import { InjectionKey } from "vue";
import { createStore, useStore as VuexStore } from "vuex";

import {
  LoginStoreModuleTypes,
  LOGIN_MODULE,
} from "./features/login/presentation/store";

type StoreModules = {
  login: LoginStoreModuleTypes;
};

type Store = LoginStoreModuleTypes<Pick<StoreModules, "login">>;

export const key: InjectionKey<Store> = Symbol();

export const store = createStore({
  strict: true,
  modules: {
    LOGIN_MODULE,
  },
});

/**
 * Returns Whole Store Object
 */
export const useStore = () => VuexStore(key) as Store;
