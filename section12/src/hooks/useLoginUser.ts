import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
