import { IsOptional, IsString } from 'class-validator';



export class UpdateUserDto {

    @IsOptional()
    @IsString()
    readonly name_user: string;

    @IsOptional()
    @IsString()
    readonly firstName_user: string;

    @IsOptional()
    @IsString()
    readonly email_user: string;

    @IsOptional()
    @IsString()
    readonly mdp_user: string;

    @IsOptional()
    @IsString()
    readonly role_user: string;

    @IsOptional()
    @IsString()
    readonly Tel_user: string;

    @IsOptional()
    @IsString()
    readonly pdp_user: string;

    
    @IsOptional()
    readonly super_user: boolean;
    
    @IsOptional()
    readonly tache: boolean;
    
    @IsOptional()
    readonly project: boolean;
    
    @IsOptional()
    readonly partenaire: boolean;
    
    @IsOptional()
    readonly create_user: boolean;
    
    @IsOptional()
    readonly updat_user: boolean;
    
    @IsOptional()
    readonly del_user: boolean;
    
    @IsOptional()
    readonly create_blog: boolean;
    
    @IsOptional()
    readonly updat_blog: boolean;
    
    @IsOptional()
    readonly del_blog: boolean;
    
    @IsOptional()
    readonly approb_blog: boolean;
    
    @IsOptional()
    readonly status_user?: string = 'offline';
    
    @IsOptional()
    readonly theme_user?: string = '#4863A0';
    
    @IsOptional()
    readonly mode_user?: string = 'light';
}
