import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestXpDto } from './create-quest-xp.dto';

export class UpdateQuestXpDto extends PartialType(CreateQuestXpDto) {}
