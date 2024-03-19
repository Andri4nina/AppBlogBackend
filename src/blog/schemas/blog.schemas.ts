/* eslint-disable prettier/prettier */
 // eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

 

@Schema({ 
    timestamps: true 
})

export class Blog{
    @Prop()
    @IsNotEmpty()
    @IsString()
    titre_blog: string;

    @Prop()
    @IsString()
    sous_titre_blog: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    contenu_blog: string;

    @Prop()
    @IsString()
    type_blog: string;


    @Prop()
    url_blog: string;

    @Prop()
    couv_blog: string;
    
    @Prop()
    status_blog: string;
    
    @Prop({ default: false })
    approb_blog: boolean;

    @Prop({ default: false })
    publish_blog: boolean;

    @Prop()
    date_publi_blog: string;
   
    @Prop()
    user_id: string;

 
}


export const BlogSchema = SchemaFactory.createForClass(Blog);