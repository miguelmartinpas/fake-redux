import React from 'react';
import { Container, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';
import { User } from '../../type/User';
import useAuthStore from '../../hooks/useAuthStore';


const TodoLoginInfo = (): React.ReactElement => {
    const { store } = useAuthStore();    
    const { user } = store || {};
    const { lastLogin = '-' } = user || {} as User;

    console.log('TodoLoginInfo', store);

    return React.useMemo(() => (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="start" width="100%" spacing="small">
            <Typography variant="body2"><>Last login: {lastLogin}</></Typography>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    ), [ lastLogin ]);
}

export default TodoLoginInfo;
