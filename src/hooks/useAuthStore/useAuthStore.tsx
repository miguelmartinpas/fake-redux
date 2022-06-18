import { Dispatch, useContext } from 'react';
import AuthContextStore from '../../contexts/AuthContextStore';
import { Action } from '../../type/Action';
import { AuthStoreProvider } from '../../type/AuthStoreProvider';
import { Authentication } from '../../type/Authentication';

const useAuthenticationStore = (): { store: Authentication, dispatch: Dispatch<Action> }  => {
    const { store: { authentication }, dispatch: dispatchAuthenticate } = useContext<AuthStoreProvider>(AuthContextStore);

    return { store: authentication, dispatch: dispatchAuthenticate };
}

export default useAuthenticationStore;
