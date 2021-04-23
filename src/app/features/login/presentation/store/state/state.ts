import { LoginStateTypes } from "./istate";

const initialState: LoginStateTypes = {
  token: null,
};

export const state: LoginStateTypes = {
  ...initialState,
};

export default { state, initialState };
