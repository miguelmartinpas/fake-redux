import React from 'react';
import { Container, IconButton, Tooltip, Typography } from '@adsmurai/design-system-react';
import { useAppSelector } from '../../store/hooks';
import { Task } from '../../type/Todo';


const TodoSummary = (): React.ReactElement => {
    const tasks = useAppSelector((state: any) => state.todo.tasks);

    const pendingTask = tasks.filter((task: Task) => !task.done).length;
    
    console.log('TodoSummary');

    return (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="end" width="100%" spacing="small">
            <Typography variant="body2"><>{pendingTask} pending task</></Typography>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoSummary;
