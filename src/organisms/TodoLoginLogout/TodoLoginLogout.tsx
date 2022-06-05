import React from 'react';
import { Container, IconButton, Tooltip } from '@adsmurai/design-system-react';
import { User } from '../../type/User';
import useAppStore from '../../hooks/useAppStore';

const TodoLoginLogout = (): React.ReactElement => {
    const { store } = useAppStore();    
    const { authentication } = store || {};
    const { user } = authentication || {};

    console.log('TodoLoginLogout', store);

    return (
        <Container verticalAlign="vertical-center" align="end" width="100%" >
            <Tooltip title={new Date().toLocaleString()} position="left">
                <IconButton small>info</IconButton>
            </Tooltip>
            <Tooltip title={user ? 'Sing Out' : 'Sign In'}>
                <IconButton variant='primary' >{!!user ? 'logout' : 'login'}</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoLoginLogout;
