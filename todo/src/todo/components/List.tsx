import React, { useState, useEffect } from 'react';
import { Todo as TodoType } from '../../Todo.interface';
import { PacmanLoader } from 'react-spinners';
import Todo from './Todo';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodosAction } from '../actions/todo.actions';
import { getTodos } from '../selectors/todo.selector';

const List: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const todos = useSelector(getTodos);

  useEffect(() => {
    dispatch(loadTodosAction());
    setIsLoading(false);
  }, [dispatch]);

  const history = useHistory();

  if (isLoading) {
    return <PacmanLoader size={20} color={'#123abc'} loading={true} />;
  } else {
    return (
      <div>
        {todos!.map((todo: any) => (
          <Todo key={todo.id} todo={todo} onStatusChange={() => {}} />
        ))}
        <hr />
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
