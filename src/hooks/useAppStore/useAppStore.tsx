import { useContext } from 'react';
import AppContextStore from '../../contexts/AppContextStore';
import { AppStoreProvider } from '../../type/AppStoreProvider';

const useAppStore = (): AppStoreProvider  => {
    const appStore = useContext<AppStoreProvider>(AppContextStore);

    return appStore;
}

export default useAppStore;
