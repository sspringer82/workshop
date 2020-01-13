import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { generate } from 'shortid';

@Injectable()
export class TodoService {
  private db;

  constructor() {
    const adapter = new FileSync('db.json');
    this.db = low(adapter);
  }

  getAll() {
    return this.db.get('todos').value();
  }

  getOne(id: string) {
    return this.db
      .get('todos')
      .find({ id })
      .value();
  }

  create(todo: Todo) {
    const newTodo = { ...todo, id: generate() };
    this.db
      .get('todos')
      .push(newTodo)
      .write();

    return newTodo;
  }

  update(todo: Todo) {
    this.db
      .get('todos')
      .find({ id: todo.id })
      .assign(todo)
      .write();
    return todo;
  }

  remove(id: string) {
    return this.db
      .get('todos')
      .remove({ id })
      .write();
  }
}
