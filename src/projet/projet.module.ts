import { Module } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { ProjetController } from './projet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { projetSchema } from './schemas/project.schema';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'Projet' ,schema : projetSchema}])],
  providers: [ProjetService],
  controllers: [ProjetController]
})
export class ProjetModule {}
