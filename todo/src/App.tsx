import React from 'react';
import Todo from './Todo';
import { Todo as TodoType } from './Todo.interface';
import Lights from './Lights';

const App: React.FC = () => {
  console.log('App render');
  const todo: TodoType = {
    id: '1',
    title: 'Get up',
    done: false,
  };

  const handleStatusChange = (todo: TodoType) => {
    console.log(todo);
  };

  return (
    <>
      <Lights />
      <Todo onStatusChange={handleStatusChange} todo={todo} />
    </>
  );
};

export default App;
