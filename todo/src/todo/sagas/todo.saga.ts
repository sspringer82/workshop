import { takeLatest, put } from '@redux-saga/core/effects';
import { LOAD_TODOS, loadTodosSuccessAction } from '../actions/todo.actions';

import axios from 'axios';
import { Todo } from '../../Todo.interface';

function* loadTodos() {
  const { data: todos } = yield axios.get<Todo[]>(`/todo`);
  yield put(loadTodosSuccessAction(todos));
}

export default function* todoSaga() {
  yield takeLatest(LOAD_TODOS, loadTodos);
}
