import { TokenAuth } from "../../../domain/entities/ilogin";
import { LoginStateTypes } from "../state/istate";

export interface LoginGettersTypes {
    token(state: LoginStateTypes): TokenAuth | null
}
