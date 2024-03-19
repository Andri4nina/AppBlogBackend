import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';


export class CreatePartenaireDto {
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly nom_partenaire: string;

    @Prop()
    @IsString()
    readonly abbrev_partenaire: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly histoire_partenaire: string;

    @Prop()
    @IsUrl()
    readonly siteOff_partenaire: string;

    @Prop()
    readonly logo_partenaire: string;

    @Prop()
    readonly status_partenaire: boolean;

    @Prop({ type: Date, default: Date.now })
    readonly date_relation_partenaire: Date;

    @Prop()
    readonly couv_partenaire: string;
    
    @Prop()
    @IsNotEmpty()
    readonly type_partenaire: string;
}
