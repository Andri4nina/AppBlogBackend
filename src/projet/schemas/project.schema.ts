import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


 @Schema({ 
     timestamps: true 
 })
 
 export class Projet{
    @Prop()
    @IsNotEmpty()
    @IsString()
    titre_project: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    contenu_project: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    zone_project: string;

    @Prop()
    status_project: string;

   
 }
 
 
 export const projetSchema = SchemaFactory.createForClass(Projet);