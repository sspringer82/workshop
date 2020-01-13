import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { AuthGuard } from '@nestjs/passport';

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
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() todo: Todo) {
    return this.todoService.create(todo);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() todo: Todo) {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
