import React from 'react';
import { AppContextStoreProvider } from '../../contexts/AppContextStore';
import { getTasks, getUser } from '../../mocks/mocks';
import { AppStore } from '../../type/AppStore';
import { AppStoreProvider } from '../../type/AppStoreProvider';

interface WithAppContextStoreProps {
    children: React.ReactElement
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

    const [store, setStore] = React.useState<AppStore>(initStore);
      
    return <AppContextStoreProvider value={{ store, setStore }}>{children}</AppContextStoreProvider>;

}

export default WithAppContextStore;
