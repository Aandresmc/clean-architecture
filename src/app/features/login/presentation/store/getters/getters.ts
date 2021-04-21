import { GetterTree } from "vuex";

import { LoginStateTypes } from "../state/istate";
import { LoginGettersTypes } from "./igetters";

export const getters: GetterTree<LoginStateTypes, any> & LoginGettersTypes = {
    token: (state) => state.token,
};