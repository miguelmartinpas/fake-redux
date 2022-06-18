import React from 'react';
import { Container, Avatar, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';
import { User } from '../../type/User';
import { DEFAULT_NAME, DEFAULT_AVATAR } from '../../consts';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

const TodoUserInfo = (): React.ReactElement => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const { name = DEFAULT_NAME, avatar = DEFAULT_AVATAR } = user || {} as User;

    console.log('TodoUserInfo', user);

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
