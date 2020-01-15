import React, { useState, useEffect } from 'react';
import { Todo as TodoType } from './Todo.interface';
import { PacmanLoader } from 'react-spinners';
import Todo from './Todo';
import update from 'immutability-helper';

const ListFn: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTodos([
        {
          id: '1',
          title: 'Get up',
          done: true,
        },
        {
          id: '2',
          title: 'Have Breakfast',
          done: false,
        },
      ]);
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleStatusChange = (todo: TodoType) => {
    setTodos((prevState: TodoType[]) => {
      const index = prevState.findIndex(t => t.id === todo.id);
      return update(prevState, {
        [index]: { $toggle: ['done'] },
      });
    });
  };

  if (isLoading) {
    return <PacmanLoader size={20} color={'#123abc'} loading={true} />;
  } else {
    return (
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
        ))}
      </div>
    );
  }
};

export default ListFn;