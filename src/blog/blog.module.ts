import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogSchema } from './schemas/blog.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'Blog' ,schema : BlogSchema}])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
