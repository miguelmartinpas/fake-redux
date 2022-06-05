import React from 'react';
import { AppContextStoreProvider } from '../../contexts/AppContextStore';
import { getTasks, getUser } from '../../mocks/mocks';
import { AppStore } from '../../type/AppStore';
import { Action } from "../../type/Action";

interface WithAppContextStoreProps {
    children: React.ReactElement
} 

const reducer = (store: AppStore, action: Action): AppStore => {
    const { type, payload } = action;

    console.log('reducer!!!', type, payload, store);
    switch(type){
        case 'ADD_TASK':
            return {
                ...store,
                todo: { ...store.todo, tasks: [...store.todo.tasks, { task: payload as string, done: false }] }
            };
        case 'SET_FILTER':
            return {
                ...store,
                ...{ ...store.todo, filter: payload }
            }
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

    const [ store, dispatch ] = React.useReducer(reducer, initStore);
      
    return <AppContextStoreProvider value={{ store, dispatch }}>{children}</AppContextStoreProvider>;

}

export default WithAppContextStore;
