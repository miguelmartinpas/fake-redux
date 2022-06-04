import React from 'react';
import { Container, Avatar, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';
import { User } from '../../type/User';
import { DEFAULT_AVATAR } from '../../consts';

const TodoUserInfo = (): React.ReactElement => {
    console.log('TodoUserInfo');

    const user: User | undefined = {
        name: 'Batman',
        avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png',
    }
    // const user: User | undefined = undefined;

    const { name = 'Unknown', avatar = DEFAULT_AVATAR } = user || {} as User;

    return (
        <Container verticalAlign="vertical-center" align="start" width="100%" >
            <Avatar
                label={name}
                src={avatar}
            />
            <Container verticalAlign="vertical-center" align="start" padding="0 0 0 12px">
                <Typography variant="h5" weight='600'>{name}</Typography>
            </Container>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoUserInfo;
