import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';



 
 export class UpdateObjectifDto{
    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly libele_obj: string;

    @IsOptional()
    @Prop({default : 'waiting'})
    @IsString()
    readonly status_obj: string;
   
    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly projId: string;
 }
 
