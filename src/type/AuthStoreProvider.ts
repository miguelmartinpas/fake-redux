import { Dispatch } from "react";
import { Action } from "./Action";
import { AuthStore } from "./AppStore";


export interface AuthStoreProvider {
    store: AuthStore;
    dispatch: Dispatch<Action>
}
