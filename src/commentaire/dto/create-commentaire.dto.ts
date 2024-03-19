import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateCommentaireDto {
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly libelle_com: string;

    @Prop()
    @IsString()
    readonly type_com: string;

    @Prop()
    @IsString()
    readonly visiteur_id: string;

    @Prop()
    @IsString()
    readonly blog_id: string;
}
