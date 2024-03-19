import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Image extends Document {
  @Prop()
  image: string;

  @Prop({ required: false })
  id_user?: string;

  @Prop({ required: false })
  id_partner?: string;

  @Prop({ required: false })
  id_project?: string;

  @Prop({ required: false })
  id_gallery?: string;


  @Prop({ required: false })
  id_blog?: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
