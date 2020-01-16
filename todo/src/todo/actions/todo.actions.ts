import { createAction } from 'typesafe-actions';
import { Todo } from '../../Todo.interface';

export const LOAD_TODOS = 'LOAD_TODOS';
export type LOAD_TODOS = typeof LOAD_TODOS;

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export type LOAD_TODOS_SUCCESS = typeof LOAD_TODOS_SUCCESS;

export const loadTodosAction = createAction(LOAD_TODOS)<void>();
export const loadTodosSuccessAction = createAction(LOAD_TODOS_SUCCESS)<
  Todo[]
>();
