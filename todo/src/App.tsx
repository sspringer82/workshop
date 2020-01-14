import React from 'react';
import Name from './Name';
import Todo from './Todo';
import { Todo as TodoType } from './Todo.interface';

const App: React.FC = () => {
  const todo: TodoType = {
    id: '1',
    title: 'Get up',
    done: false,
  };

  const handleClick = (name: string) => {
    alert('you clicked the ' + name);
  };

  const handleStatusChange = (todo: TodoType) => {
    console.log(todo);
  };

  return (
    <>
      <Todo onStatusChange={handleStatusChange} todo={todo} />
      <Name name="Basti" onClick={handleClick} />
    </>
  );
};

export default App;
