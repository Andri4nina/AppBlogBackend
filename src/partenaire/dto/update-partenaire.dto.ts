import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';


export class UpdatePartenaireDto {
    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly nom_partenaire: string;

    @IsOptional()
    @Prop()
    @IsString()
    readonly abbrev_partenaire: string;

    @IsOptional()
    @Prop()
    @IsNotEmpty()
    @IsString()
    readonly histoire_partenaire: string;

    @IsOptional()
    @Prop()
    @IsUrl()
    readonly siteOff_partenaire: string;

    @IsOptional()
    @Prop()
    readonly logo_partenaire: string;

    @IsOptional()
    @Prop()
    readonly status_partenaire: boolean;

    @Prop({ type: Date, default: Date.now })
    readonly date_relation_partenaire: Date;

    @IsOptional()
    @Prop()
    readonly couv_partenaire: string;
    
    @IsOptional()
    @Prop()
    @IsNotEmpty()
    readonly type_partenaire: string;
}
