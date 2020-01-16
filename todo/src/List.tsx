import React, { useState, useEffect } from 'react';
import { Todo as TodoType } from './Todo.interface';
import { PacmanLoader } from 'react-spinners';
import Todo from './Todo';
import update from 'immutability-helper';
import TodoForm from './TodoForm';
import axios from 'axios';

const List: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setTodos([
    //     {
    //       id: '1',
    //       title: 'Get up',
    //       done: true,
    //     },
    //     {
    //       id: '2',
    //       title: 'Have Breakfast',
    //       done: false,
    //     },
    //   ]);
    //   setIsLoading(false);
    // }, 500);
    axios.get<TodoType[]>('http://localhost:3001/todo').then(({ data }) => {
      setTodos(data);
      setIsLoading(false);
    });
  }, []);

  const handleStatusChange = (todo: TodoType) => {
    setTodos((prevState: TodoType[]) => {
      const index = prevState.findIndex(t => t.id === todo.id);
      return update(prevState, {
        [index]: { $toggle: ['done'] },
      });
    });
  };

  const handleSubmit = (todo: TodoType) => {
    setTodos((prevState: TodoType[]) => {
      return update(prevState, { $push: [todo] });
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
        <hr />
        <TodoForm onSubmit={handleSubmit} />
      </div>
    );
  }
};

export default List;
