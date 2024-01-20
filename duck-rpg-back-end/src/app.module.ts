import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestsXpModule } from './quests-xp/quests-xp.module';

@Module({
  imports: [QuestsXpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
