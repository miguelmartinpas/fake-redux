import { User } from "./User";
import { Todo } from "./Todo";

export interface Task {
    task: string;
    done: boolean;
}

export interface GlobalState {
    tasks: Task[];
    filter: string;
}

export interface AppStore {
    authentication: {
        user: User | null;
    },
    todo: Todo;
}