import { Todo } from "./Todo";
import { Authentication } from "./Authentication";

export interface Task {
    task: string;
    done: boolean;
}

export interface GlobalState {
    tasks: Task[];
    filter: string;
}

export interface AppStore {
    todo: Todo;
}


export interface AuthStore {
    authentication: Authentication,
}
