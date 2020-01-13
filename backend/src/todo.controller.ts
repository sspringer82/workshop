import { Controller, Get, Req } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  async getAll(@Req() request) {
    
  }
}
