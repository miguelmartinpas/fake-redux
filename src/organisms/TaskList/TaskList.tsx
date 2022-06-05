import React from 'react';
import { Container, IconButton, Tooltip, Typography, Table, Switch } from '@adsmurai/design-system-react';
import useAppStore from '../../hooks/useAppStore';
import { DEFAULT_FILTER, DONE_FILTER } from '../../consts';

const columns = (logged = false) => [
    { 
        accessor: 'task',
        Cell: (currentRow: any) => {
            const { value, row } = currentRow;
            const { original } = row;
            const { done } = original;
            return <Container verticalAlign="vertical-center" align="start">
                       {done ?  <del>{value}</del> : value}
                    </Container>
        }
    },
    { 
        accessor: 'done',
        Cell: (currentRow: any) => {
            const { value, row } = currentRow;
            const { original } = row;
            const { task, done } = original;
            return logged ? <Container key={task} verticalAlign="vertical-center" align="end">
                        <Switch value={value} disabled={done} onChange={(value) => console.log('change value', task, value)}/>
                    </Container> : <></>
        }
    }
]

const TaskList = (): React.ReactElement => {
    const { store } = useAppStore();    
    const { todo, authentication } = store || {};
    const { user } = authentication || {};
    const { tasks, filter = DEFAULT_FILTER } = todo || {};
    
    const filterTask = filter !== DEFAULT_FILTER ? tasks.filter(task => task.done === (filter === DONE_FILTER)) : tasks;

    console.log('TaskList', store);

    const renderListView = (): React.ReactElement => {
        return tasks.length? 
            <Table 
            rowSize="Medium"
                columns={columns(!!user)}
                data={filterTask}
            /> 
            : 
            <Container className="e-todo-form" verticalAlign="vertical-center" align="center" width="100%" spacing="small">
                <Typography variant="h5">Empty!!</Typography>
            </Container>;
    }
    
    return (
        <Container direction="column" className="e-todo-form" verticalAlign="vertical-center" align="start" width="100%" spacing="small">
            {renderListView()}
            <Container className="e-todo-form" verticalAlign="vertical-center" align="end" width="100%" spacing="small">
                <Typography variant="body2"><>{tasks.length} tasks</></Typography>
                <Tooltip title={new Date().toLocaleString()} position="right">
                    <IconButton small>info</IconButton>
                </Tooltip>
            </Container>
        </Container>
    );
}

export default TaskList;
