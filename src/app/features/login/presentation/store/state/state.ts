import { LoginStateTypes } from "./istate";


const initialState: LoginStateTypes = {
     token: {
          accessToken: '',
          expiresIn: 0,
          refreshToken: '',
          tokenType: ''
     }
}

export const state: LoginStateTypes = {
     ...initialState
};


export default { state, initialState };