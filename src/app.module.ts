import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { HistoriqueModule } from './historique/historique.module';
import { ImageModule } from './image/image.module';
import { ObjectifModule } from './objectif/objectif.module';
import { PartenaireModule } from './partenaire/partenaire.module';
import { ProjetModule } from './projet/projet.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { VisiteurModule } from './visiteur/visiteur.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal : true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
    ImageModule,
    BlogModule,
    PartenaireModule,
    ProjetModule,
    ObjectifModule,
    HistoriqueModule,
    CommentaireModule,
    VisiteurModule,
    TaskModule,
   
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
