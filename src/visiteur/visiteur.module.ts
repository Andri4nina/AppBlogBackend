import { Module } from '@nestjs/common';
import { VisiteurService } from './visiteur.service';
import { VisiteurController } from './visiteur.controller';

@Module({
  providers: [VisiteurService],
  controllers: [VisiteurController]
})
export class VisiteurModule {}
