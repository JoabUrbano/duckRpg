import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { QuestsXpService } from './quests-xp.service';
import { CreateQuestXpDto } from './dto/create-quest-xp.dto';
import { UpdateQuestXpDto } from './dto/update-quest-xp.dto';

@Controller('quests-xp')
export class QuestsXpController {
  constructor(private readonly questsXpService: QuestsXpService) {}

  @Get()
  findAll() {
    return this.questsXpService.findAll();
  }
  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.questsXpService.findOneById(id);
  }
  @Post()
  create(@Body() createQuestXpDto: CreateQuestXpDto) {
    return this.questsXpService.create(createQuestXpDto);
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateQuestXpDto: UpdateQuestXpDto) {
    return this.questsXpService.update(updateQuestXpDto, id);
  }
  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.questsXpService.remove(id);
  }
}
