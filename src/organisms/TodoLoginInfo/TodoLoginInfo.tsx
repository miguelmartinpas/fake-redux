import React from 'react';
import { Container, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';
import { User } from '../../type/User';


const TodoLoginInfo = (): React.ReactElement => {
    console.log('TodoLoginInfo');

    const user: User | undefined = {
        name: 'Batman',
        avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png',
        lastLogin: new Date().toISOString()
    }

    return (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="start" width="100%" spacing="small">
            <Typography variant="body2"><>Last login: {user.lastLogin}</></Typography>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoLoginInfo;
