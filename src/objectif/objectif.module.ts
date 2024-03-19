import { Module } from '@nestjs/common';
import { ObjectifService } from './objectif.service';
import { ObjectifController } from './objectif.controller';

@Module({
  providers: [ObjectifService],
  controllers: [ObjectifController]
})
export class ObjectifModule {}
