import React from 'react';
import { AppContextStoreProvider } from '../../contexts/AppContextStore';
import { getTasks } from '../../mocks/mocks';
import { AppStore } from '../../type/AppStore';
import { Action } from "../../type/Action";
import { Todo } from '../../type/Todo';

interface WithAppContextStoreProps {
    children: React.ReactElement
} 

const todoReducer = (store: Todo, action: Action): Todo => {
    const { type, payload } = action;

    console.log('reducer!!!', type, payload, store);
    switch(type){
        case 'ADD_TASK':
            return {
                ...store, tasks: [...store.tasks, { task: payload as string, done: false }] 
            };
        case 'SET_FILTER':
            return {
                ...store,
               filter: payload as string
            }
        default:
            throw new Error(`Action type ${type} is not supported`);
    }
}

const WithAppContextStore = ({ children }: WithAppContextStoreProps): React.ReactElement => {
    const withTasks = false;
    
    const initStore: AppStore = {
        todo: {
            tasks: getTasks(withTasks),
            filter: 'all' // 'done' | 'all' | 'pending'
        }
    };

    const [ todo, dispatchTodo ] = React.useReducer(todoReducer, initStore.todo);

    const value = { 
        store: { 
            todo 
        }, 
        dispatch: dispatchTodo 

    };
      
    return <AppContextStoreProvider value={value}>{children}</AppContextStoreProvider>;

}

export default WithAppContextStore;
