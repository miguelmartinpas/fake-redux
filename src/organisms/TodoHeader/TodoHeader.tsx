import React from 'react';
import { Container } from '@adsmurai/design-system-react';
import TodoUserInfo from '../TodoUserInfo';
import TodoLoginLogout from '../TodoLoginLogout';

const TodoHeader = (): React.ReactElement => {
    console.log('TodoHeader');

    return (
        <Container verticalAlign="vertical-center" align="between" width="100%" >
            <Container verticalAlign="vertical-center" align="start" width="60%">
               <TodoUserInfo />
            </Container>
            <Container verticalAlign="vertical-center" align="end" width="40%">
                <TodoLoginLogout />
            </Container>
        </Container>
    );
}

export default TodoHeader;
