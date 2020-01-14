import React from 'react';
import { Todo as TodoType } from './Todo.interface';

interface Props {
  todo: TodoType;
}

const Todo: React.FC<Props> = ({ todo: { id, title, done } }) => {
  return (
    <div>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Done: {done ? '✅' : '❌'} </div>
    </div>
  );
};

export default Todo;
