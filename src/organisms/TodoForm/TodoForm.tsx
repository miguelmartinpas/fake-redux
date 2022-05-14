import React, { useState } from 'react';
import { Container, TextField, Select, IconButton, Tooltip } from '@adsmurai/design-system-react';
import { OptionsType, OptionTypeBase, ActionMeta } from 'react-select';

const TodoForm = (): React.ReactElement => {
    console.log('TodoForm');
    const [taskText, setTaskText] = useState<string>('');

    const onSubmit = () => {
        console.log('TodoForm > submit', taskText);
        setTaskText('');
    }

    const onHandleFilter = (value: OptionsType<OptionTypeBase>, action: ActionMeta<OptionTypeBase>) => {
        console.log('TodoForm > filter', value);
    }

    return (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="between" width="100%"  spacing="small">
            <Container verticalAlign="vertical-center" align="start" width="60%">
                <TextField 
                    placeHolder="Add a new task" 
                    value={taskText}
                    onChange={setTaskText}
                    />
            </Container>
            <IconButton square onClick={onSubmit} variant="primary">add</IconButton>
            <Container verticalAlign="vertical-center" align="end" width="40%">
                <Select 
                    className="e-filter"
                    name="foo"
                    onChange={onHandleFilter}
                    options={[{ value: 'all', label: 'All'}, { value: 'done', label: 'Done'}, { value: 'pending', label: "Pending"}]}  
                />
            </Container>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoForm;
