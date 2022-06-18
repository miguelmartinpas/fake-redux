import React from 'react';
import { Container, Card, Divider } from '@adsmurai/design-system-react';
import TodoHeader from './organisms/TodoHeader';
import TodoForm from './organisms/TodoForm';
import TaskList from './organisms/TaskList';
import TodoSummary from './organisms/TodoSummary';
import './App.css';
import TodoLoginInfo from './organisms/TodoLoginInfo';
import { store } from './store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="e-todo-app">
          <Card variant="secondary">
            <Container direction='column' align="center" padding="24px" width="800px" spacing="medium">  
              <TodoHeader/>
              <Divider/>
              <TodoForm/>
              <TaskList/>
              <Divider/>
              <TodoSummary/>
              <Divider/>
              <TodoLoginInfo />
          </Container>
          </Card>
      </div>
    </Provider>
  );
}

export default App;
