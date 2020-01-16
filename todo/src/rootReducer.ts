import { combineReducers } from 'redux';
import todoReducer from './todo/reducer/todo.reducer';

const createRootReducer = () =>
  combineReducers({
    todo: todoReducer,
  });

export default createRootReducer;
