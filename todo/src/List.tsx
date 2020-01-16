import React, { useState, useEffect } from 'react';
import { Todo as TodoType } from './Todo.interface';
import { PacmanLoader } from 'react-spinners';
import Todo from './Todo';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodosAction } from './todo/actions/todo.actions';

const List: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const todos = useSelector((state: any) => {
    return state.todo.todos;
  });

  useEffect(() => {
    dispatch(loadTodosAction());
    setIsLoading(false);
  }, [dispatch]);

  const handleStatusChange = (todo: TodoType) => {
    // setTodos((prevState: TodoType[]) => {
    //   const index = prevState.findIndex(t => t.id === todo.id);
    //   return update(prevState, {
    //     [index]: { $toggle: ['done'] },
    //   });
    // });
  };

  // const handleSubmit = (todo: TodoType) => {
  //   setTodos((prevState: TodoType[]) => {
  //     return update(prevState, { $push: [todo] });
  //   });
  // };

  const history = useHistory();

  if (isLoading) {
    return <PacmanLoader size={20} color={'#123abc'} loading={true} />;
  } else {
    return (
      <div>
        {todos.map((todo: any) => (
          <Todo key={todo.id} todo={todo} onStatusChange={handleStatusChange} />
        ))}
        <hr />
        {/* <TodoForm onSubmit={handleSubmit} /> */}
        <button
          onClick={() => {
            history.push('/form');
          }}
        >
          new
        </button>
      </div>
    );
  }
};

export default List;
