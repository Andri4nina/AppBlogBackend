import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateTaskDto {
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly libele_task: string;

    @Prop({default : 'Create'})
    @IsString()
    readonly status_task: string;
}
