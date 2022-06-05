import React from 'react';
import { AppContextStoreProvider } from '../../contexts/AppContextStore';
import { getTasks, getUser } from '../../mocks/mocks';
import { AppStoreProvider } from '../../type/AppStoreProvider';

interface WithAppContextStoreProps {
    children: React.ReactElement
} 

const WithAppContextStore = ({ children }: WithAppContextStoreProps): React.ReactElement => {
    const logged = true;
    const withTasks = true;

    const initStore: AppStoreProvider = {
        store: {
            authentication: {
                user: getUser(logged),
            },
            todo: {
                tasks: getTasks(withTasks),
                filter: 'all' // 'done' | 'all' | 'pending'
            }
        }
    };
      
    return <AppContextStoreProvider value={initStore}>{children}</AppContextStoreProvider>;

}

export default WithAppContextStore;
