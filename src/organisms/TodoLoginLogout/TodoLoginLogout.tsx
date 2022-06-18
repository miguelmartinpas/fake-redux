import React from 'react';
import { Container, IconButton, Tooltip } from '@adsmurai/design-system-react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { signIn, signOut, logIn } from '../../store/slices/auth';
import { RootState } from '../../store/store';

const TodoLoginLogout = (): React.ReactElement => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch()

    console.log('TodoLoginLogout', user);

    const handleSingInSingOut = (): void => {
        if (user) {
            dispatch(signOut());
        } else {
            dispatch(logIn());
            // dispatch(signIn());
        }
    }

    return (
        <Container verticalAlign="vertical-center" align="end" width="100%" >
            <Tooltip title={new Date().toLocaleString()} position="left">
                <IconButton small>info</IconButton>
            </Tooltip>
            <Tooltip title={user ? 'Sing Out' : 'Sign In'}>
                <IconButton onClick={handleSingInSingOut} variant='primary' >{!!user ? 'logout' : 'login'}</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoLoginLogout;
