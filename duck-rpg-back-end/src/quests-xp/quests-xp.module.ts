import { Module } from '@nestjs/common';
import { QuestsXpController } from './quests-xp.controller';
import { QuestsXpService } from './quests-xp.service';
import { QuestXp } from './entities/quest-xp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestXp])],
  controllers: [QuestsXpController],
  providers: [QuestsXpService],
})
export class QuestsXpModule {}
