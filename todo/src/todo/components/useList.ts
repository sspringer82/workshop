import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodosAction } from '../actions/todo.actions';
import { getTodos } from '../selectors/todo.selector';
import { Todo } from '../../Todo.interface';

export default function useList(): [boolean, Todo[], any] {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const todos = useSelector(getTodos);

  useEffect(() => {
    dispatch(loadTodosAction());
    setIsLoading(false);
  }, [dispatch]);

  const history = useHistory();
  return [isLoading, todos, history];
}
