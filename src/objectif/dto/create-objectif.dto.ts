import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

 
 export class CreateObjectifDto{
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly libele_obj: string;

    @Prop({default : 'waiting'})
    @IsString()
    readonly status_obj: string;
   
   
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly projId: string;
 }
 
 