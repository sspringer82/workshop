import {
  LOAD_TODOS_SUCCESS,
  CREATE_TODO_SUCCESS,
  loadTodosSuccessAction,
  createTodoSuccessAction,
} from '../actions/todo.actions';
import update from 'immutability-helper';
import { Todo } from '../../Todo.interface';
import { ActionType } from 'typesafe-actions';

export interface State {
  todos: Todo[];
}

const initialState = {
  todos: [{ id: 'x', title: 'y', done: false }],
};

export default function(
  state: State = initialState,
  action: ActionType<
    typeof loadTodosSuccessAction | typeof createTodoSuccessAction
  >
) {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS:
      return update(state, { todos: { $set: action.payload } });
    case CREATE_TODO_SUCCESS:
      return update(state, { todos: { $push: [action.payload] } });
      break;
    default:
      return state;
  }
}
