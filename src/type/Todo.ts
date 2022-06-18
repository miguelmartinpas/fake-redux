export interface Task {
    task: string;
    done: boolean;
}

export interface Todo {
    tasks: Task[];
    filter: string;
}
