import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ObjectifController } from './objectif.controller';
import { ObjectifService } from './objectif.service';
import { objectifSchema } from './schemas/objectif.schemas';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'Objectif' ,schema : objectifSchema}])],
  providers: [ObjectifService],
  controllers: [ObjectifController]
})
export class ObjectifModule {}
