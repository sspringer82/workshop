import { takeLatest, put } from '@redux-saga/core/effects';
import {
  LOAD_TODOS,
  loadTodosSuccessAction,
  CREATE_TODO,
  createTodoAction,
  createTodoSuccessAction,
} from '../actions/todo.actions';

import axios from 'axios';
import { Todo } from '../../Todo.interface';
import { ActionType } from 'typesafe-actions';

function* loadTodos() {
  const { data: todos } = yield axios.get<Todo[]>(`/todo`);
  yield put(loadTodosSuccessAction(todos));
}

function* createTodo({ payload: todo }: ActionType<typeof createTodoAction>) {
  const newTodo = (yield axios.post<Todo>(`/todo/`, todo)).data;
  yield put(createTodoSuccessAction(newTodo));
}

export default function* todoSaga() {
  yield takeLatest(LOAD_TODOS, loadTodos);
  yield takeLatest(CREATE_TODO, createTodo);
}
