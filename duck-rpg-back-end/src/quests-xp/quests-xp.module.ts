import { Module } from '@nestjs/common';
import { QuestsXpController } from './quests-xp.controller';
import { QuestsXpService } from './quests-xp.service';

@Module({
  controllers: [QuestsXpController],
  providers: [QuestsXpService],
})
export class QuestsXpModule {}
