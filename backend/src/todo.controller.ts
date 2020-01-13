import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll() {
    return this.todoService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.todoService.getOne(id);
  }

  @Post()
  create(@Body() todo: Todo) {
    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(@Body() todo: Todo) {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
