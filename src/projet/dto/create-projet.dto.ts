import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateProjectDto {
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly titre_project: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly contenu_project: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly zone_project: string;

    @Prop()
    readonly status_project: string;
}
