/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

@Schema({ 
    timestamps: true 
})

export class Commentaire{
    @Prop()
    @IsNotEmpty()
    @IsString()
    libelle_com: string;

    @Prop()
    @IsString()
    type_com: string;


    @Prop()
    @IsString()
    visiteur_id: string;

    @Prop()
    @IsString()
    blog_id: string;
 
}


export const CommentaireSchema = SchemaFactory.createForClass(Commentaire);