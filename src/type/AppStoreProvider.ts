import { Dispatch } from "react";
import { Action } from "./Action";
import { AppStore } from "./AppStore";

export interface AppStoreProvider {
    store: AppStore;
    dispatch:{
        authenticate: Dispatch<Action>
        todo: Dispatch<Action>
    };
}
