import { Dispatch, useContext } from 'react';
import AppContextStore from '../../contexts/AppContextStore';
import { Action } from '../../type/Action';
import { AppStoreProvider } from '../../type/AppStoreProvider';
import { Authentication } from '../../type/Authentication';

const useAuthenticationStore = (): { store: Authentication, dispatch: Dispatch<Action> }  => {
    const { store: { authentication }, dispatch: { authenticate: dispatchAuthenticate } } = useContext<AppStoreProvider>(AppContextStore);

    return { store: authentication, dispatch: dispatchAuthenticate };
}

export default useAuthenticationStore;
