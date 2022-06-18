import React from 'react';
import { AuthStoreProvider } from '../../type/AuthStoreProvider';

const AuthContextStore = React.createContext({} as AuthStoreProvider);

export const { Provider: AuthContextStoreProvider  } = AuthContextStore;

export default AuthContextStore;
