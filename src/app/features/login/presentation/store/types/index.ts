import { Getters } from "./getters";
import { Actions } from "./actions";
import { Mutations } from "./mutations";

enum Module {
  LOGIN_M = "LOGIN_M/",
}

export const LoginModuleTypes = {
  ...Module,
  ...Getters,
  ...Actions,
  ...Mutations,
};

export type LoginModuleTypes = typeof LoginModuleTypes;
