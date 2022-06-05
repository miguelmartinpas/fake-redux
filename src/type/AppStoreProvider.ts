import { Dispatch, SetStateAction } from "react";
import { AppStore } from "./AppStore";

export interface AppStoreProvider {
    store: AppStore;
    setStore: Dispatch<SetStateAction<AppStore>>;
}
