import { Dispatch, useContext } from 'react';
import AppContextStore from '../../contexts/AppContextStore';
import { Action } from '../../type/Action';
import { AppStoreProvider } from '../../type/AppStoreProvider';
import { Todo } from '../../type/Todo';

const useTodoStore = (): { store: Todo, dispatch: Dispatch<Action> }  => {
    const { store: { todo }, dispatch: dispatchTodo } = useContext<AppStoreProvider>(AppContextStore);

    return { store: todo, dispatch: dispatchTodo };
}

export default useTodoStore;
