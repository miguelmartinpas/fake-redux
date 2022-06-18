import { User } from "./User";
import { Todo } from "./Todo";

export interface Task {
    task: string;
    done: boolean;
}

export interface TodoState {
    tasks: Task[];
    filter: string;
}

export interface UserState {
    user: User | null;
}

export interface AppStore {
    authentication: {
        user: User | null;
    },
    todo: Todo;
}