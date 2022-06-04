import React from 'react';
import { Container, IconButton, Tooltip } from '@adsmurai/design-system-react';
import { User } from '../../type/User';

const TodoLoginLogout = (): React.ReactElement => {
    console.log('TodoLoginLogout');

    const user: User | undefined = {
        name: 'Batman',
        avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png',
    }
    // const user: User | undefined = undefined;

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
