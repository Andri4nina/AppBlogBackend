import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class UpdateTaskDto {
    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly libele_task: string;

    @IsOptional()
    @Prop()
    @IsString()
    readonly status_task: string;
}
