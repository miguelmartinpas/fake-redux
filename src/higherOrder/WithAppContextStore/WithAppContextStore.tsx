import React from 'react';
import { AppContextStoreProvider } from '../../contexts/AppContextStore';
import { getTasks, getUser } from '../../mocks/mocks';
import { AppStore } from '../../type/AppStore';
import { Action } from "../../type/Action";
import { Todo } from '../../type/Todo';
import { Authentication } from '../../type/Authentication';

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

const authenticationReducer = (store: Authentication, action: Action): Authentication => {
    const { type, payload } = action;

    console.log('reducer!!!', type, payload, store);
    switch(type){
        // case 'ADD_TASK':
        //     return {
        //         ...store,
        //         todo: { ...store.todo, tasks: [...store.todo.tasks, { task: payload as string, done: false }] }
        //     };
        // case 'SET_FILTER':
        //     return {
        //         ...store,
        //         ...{ ...store.todo, filter: payload }
        //     }
        default:
            throw new Error(`Action type ${type} is not supported`);
    }
}

const WithAppContextStore = ({ children }: WithAppContextStoreProps): React.ReactElement => {
    const logged = false;
    const withTasks = false;
    
    const initStore: AppStore = {
        authentication: {
            user: getUser(logged),
        },
        todo: {
            tasks: getTasks(withTasks),
            filter: 'all' // 'done' | 'all' | 'pending'
        }
    };

    const [ authentication, dispatchAuthentication ] = React.useReducer(authenticationReducer, initStore.authentication);
    const [ todo, dispatchTodo ] = React.useReducer(todoReducer, initStore.todo);

    const value = { 
        store: { 
            authentication, 
            todo 
        }, 
        dispatch: { 
            authenticate: dispatchAuthentication, 
            todo: dispatchTodo 
        } 
    };
      
    return <AppContextStoreProvider value={value}>{children}</AppContextStoreProvider>;

}

export default WithAppContextStore;
