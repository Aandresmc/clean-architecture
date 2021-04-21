import { MutationTree } from "vuex";

import { LoginModuleTypes } from "../types";
import { LoginStateTypes } from "../state/istate";
import { LoginMutationsTypes } from "./imutations";

export const mutations: MutationTree<LoginStateTypes> &
    LoginMutationsTypes = {
    [LoginModuleTypes.SET_TOKEN](state, payload) {
        state.token = payload;
    }
};
