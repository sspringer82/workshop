import {
  LOAD_TODOS_SUCCESS,
  CREATE_TODO_SUCCESS,
} from '../actions/todo.actions';
import update from 'immutability-helper';

const initialState = {
  todos: [{ id: 'x', title: 'y', done: false }],
};

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS:
      return update(state, { todos: { $set: action.payload } });
    case CREATE_TODO_SUCCESS:
      debugger;
      break;
    default:
      return state;
  }
}
