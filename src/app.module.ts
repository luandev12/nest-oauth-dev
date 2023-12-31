import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';

import { LoggerModule } from '@app/logger/logger.module';
import { TagModule } from '@app/tag/tag.module';

import { configService } from '@app/config.service';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
