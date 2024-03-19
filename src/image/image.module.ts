import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { ImageSchema } from './schemas/image.schema';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'image' ,schema : ImageSchema}])],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
