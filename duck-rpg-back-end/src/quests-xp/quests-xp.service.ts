import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestXp } from './entities/quest-xp.entity';
import { CreateQuestXpDto } from './dto/create-quest-xp.dto';
import { UpdateQuestXpDto } from './dto/update-quest-xp.dto';

@Injectable()
export class QuestsXpService {
  constructor(
    @InjectRepository(QuestXp)
    private readonly questXpRepository: Repository<QuestXp>,
  ) {}

  async findAll(): Promise<QuestXp[]> {
    return 1;
  }

  async findOneById(id: number) {
    return 1;
  }

  async create(createQuestXpDto: CreateQuestXpDto) {
    return 1;
  }

  async update(updateQuestXpDto: UpdateQuestXpDto, id: number) {
    return 1;
  }

  async remove(id: number) {
    return 1;
  }
}
