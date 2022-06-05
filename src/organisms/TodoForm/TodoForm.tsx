import React, { useState } from 'react';
import { Container, InputField, Select, IconButton, Tooltip } from '@adsmurai/design-system-react';
import { OptionsType, OptionTypeBase, ActionMeta } from 'react-select';
import useAppStore from '../../hooks/useAppStore';
import { DEFAULT_FILTER } from '../../consts';

const TodoForm = (): React.ReactElement => {
    const { store, setStore } = useAppStore();    
    const { todo } = store || {};
    const { filter = DEFAULT_FILTER } = todo || {};

    console.log('TodoForm', store);
    
    const [taskText, setTaskText] = useState<string>('');

    const onSubmit = () => {
        setStore({ ...store, todo: { ...todo, tasks: [...todo.tasks, { task: taskText, done: false }] } });
        setTaskText('');
    }

    const onHandleFilter = (value: OptionsType<OptionTypeBase>, action: ActionMeta<OptionTypeBase>) => {
        // @ts-ignore
        setStore({ ...store, todo: { ...todo, filter: value.value } });
    }

    const getOptions = () => [{ value: 'all', label: 'All'}, { value: 'done', label: 'Done'}, { value: 'pending', label: "Pending"}];

    const getLabelForOptionValue = (): string => {
        return filter === DEFAULT_FILTER ? 'All' : filter === 'done' ? 'Done' : 'Pending';
    }

    return (
        <Container className="e-todo-form" verticalAlign="vertical-center" align="between" width="100%"  spacing="small">
            <Container verticalAlign="vertical-center" align="start" width="60%">
                <InputField 
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
                    value={{ value: filter, label: getLabelForOptionValue()}}
                    options={getOptions()}  
                />
            </Container>
            <Tooltip title={new Date().toLocaleString()} position="right">
                <IconButton small>info</IconButton>
            </Tooltip>
        </Container>
    );
}

export default TodoForm;
