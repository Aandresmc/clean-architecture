import { TokenAuth } from "../../../domain/entities/ilogin";

export interface LoginStateTypes {
  token: TokenAuth | null;
}
