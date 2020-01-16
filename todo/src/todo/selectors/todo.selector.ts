import { AppState } from '../../rootReducer';

export const getTodos = (state: AppState) => {
  return state.todo?.todos;
};
