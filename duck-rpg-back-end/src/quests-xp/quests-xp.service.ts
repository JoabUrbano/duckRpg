import { Injectable, NotFoundException } from '@nestjs/common';
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
    return await this.questXpRepository.find();
  }

  async findOneById(id: number) {
    const quest = await this.questXpRepository.findOne({
      where: { id: id },
    });
    if (!quest) {
      throw new NotFoundException(`Quest ID ${id} not found!`);
    } else {
      return quest;
    }
  }

  async create(createQuestXpDto: CreateQuestXpDto) {
    const newQuest = this.questXpRepository.create(createQuestXpDto);
    return await this.questXpRepository.save(newQuest);
  }

  async update(updateQuestXpDto: UpdateQuestXpDto, id: number) {
    const quest = await this.questXpRepository.findOne({
      where: { id: id},
    });
    if (!quest) {
      throw new NotFoundException(`Quest ID ${id} not update!`);
    }

    this.questXpRepository.merge(quest, updateQuestXpDto);
  }

  async remove(id: number) {
    const quest = await this.questXpRepository.findOne({
      where: {id: id},
    });
    if (!quest) {
      throw new NotFoundException(`Quest ID ${id} not remobed!`);
    }

    await this.questXpRepository.remove(quest);
  }
}
