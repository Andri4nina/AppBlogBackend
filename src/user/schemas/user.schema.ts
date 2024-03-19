import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';


@Schema({ 
    timestamps: true 
})

export class User{
    @Prop()
    @IsNotEmpty()
    @IsString()
    name_user: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    firstName_user: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    email_user: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    mdp_user: string;


    @Prop()
    role_user: string;

    @Prop()
    Tel_user: string;


    @Prop()
    pdp_user: string; 

    @Prop({ default: 'offline' })
    status_user?: string;
    
    @Prop({ default: '#4863A0' })
    theme_user?: string;
    
    @Prop({ default: 'light' })
    mode_user?: string;    

    @Prop()
    super_user: boolean;

    @Prop()
    tache: boolean;

    @Prop()
    project: boolean;

    @Prop()
    partenaire: boolean;

    @Prop()
    create_user: boolean;

    @Prop()
    updat_user: boolean;

    @Prop()
    del_user: boolean;

    @Prop()
    create_blog: boolean;

    @Prop()
    updat_blog: boolean;

    @Prop()
    del_blog: boolean;

    @Prop()
    approb_blog: boolean;
}


export const UserSchema = SchemaFactory.createForClass(User);