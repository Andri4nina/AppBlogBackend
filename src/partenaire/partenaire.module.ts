import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PartenaireController } from './partenaire.controller';
import { PartenaireService } from './partenaire.service';
import { PartenaireSchema } from './schemas/partenaire.schemas';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'Partenaire' ,schema : PartenaireSchema}])],
  providers: [PartenaireService],
  controllers: [PartenaireController]
})
export class PartenaireModule {}
