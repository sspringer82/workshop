import { AppState } from '../../rootReducer';

export const getTodos = (state: AppState) => {
  return state.todo?.todos;
};

export const getTodoById = (id: string) => (state: AppState) => {
  const todos = getTodos(state);
  return todos.find(todo => todo.id === id);
};

// useSelector(getTodoById('foo'));
