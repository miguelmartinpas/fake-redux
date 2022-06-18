import { User } from "./User";
import { Task } from "./Todo";

export interface TodoState {
    tasks: Task[];
    filter: string;
}

export interface UserState {
    user: User | null;
}
