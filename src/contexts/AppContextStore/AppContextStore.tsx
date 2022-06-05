import React from 'react';
import { AppStoreProvider } from '../../type/AppStoreProvider';

const AppContextStore = React.createContext({} as AppStoreProvider);

export const { Provider: AppContextStoreProvider  } = AppContextStore;

export default AppContextStore;
