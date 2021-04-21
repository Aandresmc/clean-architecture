import { ActionTree } from "vuex";

import { container } from "@/app/app.container";
import { UseCase } from "@/app/core/use-case";

import { LoginStateTypes } from "../state/istate";
import { LoginModuleTypes } from "../types";
import { LoginActionsTypes } from "./iactions";
import { ILogin } from "../../../domain/entities/ilogin";

export const actions: ActionTree<LoginStateTypes, any> & LoginActionsTypes = {
  [LoginModuleTypes.ACTION_LOGIN]({ commit }, payload: ILogin.Params) {
    return new Promise((resolve, reject) => {
      try {
        const authUseCase: UseCase<
          ILogin.Params,
          ILogin.Response
        > = container.get("LoginUseCase");

        authUseCase
          .call(payload)
          .then((resp) => {
            commit(LoginModuleTypes.SET_TOKEN, resp);
            resolve(resp);
          })
          .catch((err) => reject(err));
      } catch (error) {
        reject(error);
      }
    });
  },
};
