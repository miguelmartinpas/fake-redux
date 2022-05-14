import React from 'react';
import { Container, IconButton, Tooltip, Typography, Table, Switch } from '@adsmurai/design-system-react';

interface Task {
    task: string;
    done: boolean;
}

const columns = [
    { 
        accessor: 'task',
        Cell: (currentRow: any) => {
            console.log(currentRow);
            const { value, row } = currentRow;
            const { original } = row;
            const { done } = original;
            console.log('value', value)
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
            console.log('value', value)
            return <Container key={task} verticalAlign="vertical-center" align="end">
                        <Switch value={value} disabled={done} onChange={(value) => console.log('change value', task, value)}/>
                    </Container>
        }
    }
]

const TaskList = (): React.ReactElement => {
    console.log('TaskList');

    const tasks: Task[] = [
        {
            task: 'foooo fd of odfo sof os fosd', 
            done: false
        },{
            task: 'foooo fd of odfo sof os fosd', 
            done: true
        }];

    // const tasks: Task[] = [];

    const renderListView = (): React.ReactElement => {
        return tasks.length? 
            <Table 
            rowSize="Medium"
                columns={columns}
                data={tasks}
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
                <Typography variant="body2">X tasks</Typography>
                <Tooltip title={new Date().toLocaleString()} position="right">
                    <IconButton small>info</IconButton>
                </Tooltip>
            </Container>
        </Container>
    );
}

export default TaskList;
