import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll() {
    return 1;
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return id;
  }

  @Post()
  create(@Body() body: string) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: string) {
    return id;
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return id;
  }
}
