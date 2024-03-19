import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';


 @Schema({ 
     timestamps: true 
 })
 
 export class Partenaire{
    @Prop()
    @IsNotEmpty()
    @IsString()
    nom_partenaire: string;

    @Prop()
    @IsString()
    abbrev_partenaire: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    histoire_partenaire: string;

    @Prop()
    @IsUrl()
    siteOff_partenaire: string;

    @Prop()
    logo_partenaire: string;

    @Prop()
    status_partenaire: boolean;

    @Prop({ type: Date, default: Date.now })
    date_relation_partenaire: Date;

    @Prop()
    couv_partenaire: string;
    
    @Prop()
    @IsNotEmpty()
    type_partenaire: string;
 }
 
 
 export const PartenaireSchema = SchemaFactory.createForClass(Partenaire);