import {
  Controller,
  Get,
  Put,
  Body,
  Post,
  Delete,
  Param,
  UseGuards,
  Req,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { AuthGuard } from '@nestjs/passport';
import update from 'immutability-helper';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('todo')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOkResponse({
    description: 'Get a list of all todos.',
    type: [Todo],
  })
  async getAll(@Req() request): Promise<Todo[]> {
    return this.todoService.getAll();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Create a new todo.',
    type: Todo,
  })
  create(@Body() todo: Todo) {
    return this.todoService.save(Todo.create(todo));
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'Update an existing todo.',
    type: Todo,
  })
  async update(@Body() todo: Todo) {
    return this.todoService.save(todo);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({ status: 204, description: 'Delete a todo' })
  async remove(@Param('id') id: string) {
    const todoId = parseInt(id, 10);
    await this.todoService.remove(todoId);
  }
}
