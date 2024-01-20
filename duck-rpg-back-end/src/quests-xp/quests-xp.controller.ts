import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('quests-xp')
export class QuestsXpController {
  @Get()
  findAll() {
    return 1;
  }
  @Get()
  findOneById() {
    return 1;
  }
  @Post()
  create() {
    return 1;
  }
  @Patch()
  update() {
    return 1;
  }
  @Delete()
  deleteById() {
    return 1;
  }
}
