import React from 'react';
import { AuthContextStoreProvider } from '../../contexts/AuthContextStore';
import { getUser } from '../../mocks/mocks';
import { AuthStore } from '../../type/AppStore';
import { Action } from "../../type/Action";
import { Authentication } from '../../type/Authentication';

interface WithAppContextStoreProps {
    children: React.ReactElement
} 

const authenticationReducer = (store: Authentication, action: Action): Authentication => {
    const { type, payload } = action;

    console.log('reducer!!!', type, payload, store);
    switch(type){
        case 'SIGN_IN':
            return {
                ...store,
                user: getUser(true)
            };
        case 'SIGN_OUT':
            return {
                ...store,
                user: null
            }
        default:
            throw new Error(`Action type ${type} is not supported`);
    }
}

const WithAppContextStore = ({ children }: WithAppContextStoreProps): React.ReactElement => {
    const logged = false;

    const initStore: AuthStore = {
        authentication: {
            user: getUser(logged),
        },
    };

    const [ authentication, dispatchAuthentication ] = React.useReducer(authenticationReducer, initStore.authentication);

    const value = { 
        store: { 
            authentication, 
        }, 
        dispatch: dispatchAuthentication, 
    };
      
    return <AuthContextStoreProvider value={value}>{children}</AuthContextStoreProvider>;

}

export default WithAppContextStore;
