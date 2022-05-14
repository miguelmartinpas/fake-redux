import React from 'react';
import { Container, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';


const TodoSummary = (): React.ReactElement => {
    console.log('TodoSummary');

    return (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="end" width="100%" spacing="small">
            <Typography variant="body2">X pending task</Typography>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoSummary;
