import React from 'react';
import { Container, Avatar, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';

const DEFAULT_AVATAR = 'https://img2.freepng.es/20180526/kuv/kisspng-user-avatar-playerunknown-s-battlegrounds-cryptocu-5b090fc8c0a8e4.6350091115273205207892.jpg'

interface User {
    name: string;
    avatar: string;
}

const TodoHeader = (): React.ReactElement => {
    console.log('TodoHeader');

    const user: User | undefined = {
        name: 'Batman',
        avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png',
    }
    // const user: User | undefined = undefined;

    const { name = 'Unknown', avatar = DEFAULT_AVATAR } = user || {} as User;

    return (
        <Container verticalAlign="vertical-center" align="between" width="100%" >
            <Container verticalAlign="vertical-center" align="start" width="60%">
                <Avatar
                    label={name}
                    src={avatar}
                />
                <Container verticalAlign="vertical-center" align="start" padding="0 0 0 12px">
                    <Typography variant="h5" weight='600'>{name}</Typography>
                </Container>
            </Container>
            <Container verticalAlign="vertical-center" align="end" width="40%">
                <Tooltip title={new Date().toLocaleString()} position="left">
                    <IconButton small>info</IconButton>
                </Tooltip>
                <Tooltip title={user ? 'Sing Out' : 'Sign In'}>
                    <IconButton small>{!!user ? 'logout' : 'login'}</IconButton>
                </Tooltip>
            </Container>
        </Container>
    );
}

export default TodoHeader;
