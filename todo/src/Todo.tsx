import React from 'react';
import { Todo as TodoType } from './Todo.interface';

interface Props {
  todo: TodoType;
  onStatusChange: (todo: TodoType) => void;
}

const Todo: React.FC<Props> = ({ todo, onStatusChange }) => {
  const { id, title, done } = todo;
  return (
    <div>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div
        onClick={() => {
          onStatusChange(todo);
        }}
      >
        Done: {done ? '✅' : '❌'}{' '}
      </div>
    </div>
  );
};

export default Todo;
