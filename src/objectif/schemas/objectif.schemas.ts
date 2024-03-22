import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


 @Schema({ 
     timestamps: true 
 })
 
 export class Objectif{
    @Prop()
    @IsNotEmpty()
    @IsString()
    libele_obj: string;

    @Prop({default : 'waiting'})
    @IsString()
    status_obj: string;
    
    @Prop()
    @IsNotEmpty()
    @IsString()
    projId: string;
   
 }
 
 
 export const objectifSchema = SchemaFactory.createForClass(Objectif);