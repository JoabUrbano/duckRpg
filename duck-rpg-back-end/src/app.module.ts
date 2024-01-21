import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestsXpModule } from './quests-xp/quests-xp.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@%20Pato23%@',
      database: 'db_courses',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // Usar apenas em ambiente de desenvolvimento, para criar automaticamente as tabelas no banco de dados.
      logging: true,
    }),
    QuestsXpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
