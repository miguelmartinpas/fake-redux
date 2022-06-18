import React from 'react';
import { Container, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';
import { User } from '../../type/User';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';


const TodoLoginInfo = (): React.ReactElement => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const { lastLogin = '-' } = user || {} as User;

    console.log('TodoLoginInfo', user);


    return (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="start" width="100%" spacing="small">
            <Typography variant="body2"><>Last login: {lastLogin}</></Typography>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoLoginInfo;
