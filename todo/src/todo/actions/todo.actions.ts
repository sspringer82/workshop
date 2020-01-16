import { createAction } from 'typesafe-actions';
import { Todo } from '../../Todo.interface';

export const LOAD_TODOS = 'LOAD_TODOS';
export type LOAD_TODOS = typeof LOAD_TODOS;

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export type LOAD_TODOS_SUCCESS = typeof LOAD_TODOS_SUCCESS;

export const CREATE_TODO = 'CREATE_TODO';
export type CREATE_TODO = typeof CREATE_TODO;

export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export type CREATE_TODO_SUCCESS = typeof CREATE_TODO_SUCCESS;

export const loadTodosAction = createAction(LOAD_TODOS)<void>();
export const loadTodosSuccessAction = createAction(LOAD_TODOS_SUCCESS)<
  Todo[]
>();

export const createTodoAction = createAction(CREATE_TODO)<{
  title: string;
  done: boolean;
}>();
export const createTodoSuccessAction = createAction(CREATE_TODO_SUCCESS)<
  Todo
>();
