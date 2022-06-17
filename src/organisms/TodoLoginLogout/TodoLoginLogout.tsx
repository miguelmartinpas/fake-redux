import React from 'react';
import { Container, IconButton, Tooltip } from '@adsmurai/design-system-react';
import useAuthStore from '../../hooks/useAuthStore';

const TodoLoginLogout = (): React.ReactElement => {
    const { store: authentication, dispatch } = useAuthStore();    
    const { user } = authentication || {};

    console.log('TodoLoginLogout', authentication);

    const handleLoginLogout = () => {
        if (user) {
            dispatch({ type: 'SIGN_OUT' });
        } else {
            dispatch({ type: 'SIGN_IN' });
        }
    }

    return (
        <Container verticalAlign="vertical-center" align="end" width="100%" >
            <Tooltip title={new Date().toLocaleString()} position="left">
                <IconButton small>info</IconButton>
            </Tooltip>
            <Tooltip title={user ? 'Sing Out' : 'Sign In'}>
                <IconButton variant='primary' onClick={handleLoginLogout}>{!!user ? 'logout' : 'login'}</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoLoginLogout;
