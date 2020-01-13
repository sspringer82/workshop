import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  getAll() {}

  getOne(id: number) {}

  create(todo: Todo) {}

  update(todo: Todo) {}

  remove(id: number) {}
}
