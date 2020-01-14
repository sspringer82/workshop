import React from 'react';
import { Todo as TodoType } from './Todo.interface';

const Todo: React.FC = () => {
  const todo: TodoType = {
    id: '1',
    title: 'Get up',
    done: true,
  };

  return (
    <div>
      <div>Id: {todo.id}</div>
      <div>Title: {todo.title}</div>
      <div>Done: {todo.done}</div>
    </div>
  );
};

export default Todo;
