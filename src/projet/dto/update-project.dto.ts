import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class UpdateProjectDto {
    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly titre_project: string;

    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly contenu_project: string;

    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly zone_project: string;

    @IsOptional()
    @Prop()
    readonly status_project: string;
}
