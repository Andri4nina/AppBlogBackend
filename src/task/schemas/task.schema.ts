import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


 @Schema({ 
     timestamps: true 
 })
 
 export class Task{
    @Prop()
    @IsNotEmpty()
    @IsString()
    libele_task: string;

    @Prop({default : 'create'})
    @IsString()
    status_task: string;
   
 }
 
 
 export const taskSchema = SchemaFactory.createForClass(Task);