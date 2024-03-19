import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommentaireController } from './commentaire.controller';
import { CommentaireService } from './commentaire.service';
import { CommentaireSchema } from './schemas/commentaire.schemas';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'Commentaire' ,schema : CommentaireSchema}])],
  providers: [CommentaireService],
  controllers: [CommentaireController]
})
export class CommentaireModule {}
