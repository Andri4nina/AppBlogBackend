import { IsNotEmpty, IsString } from 'class-validator';



export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly name_user: string;

    @IsNotEmpty()
    @IsString()
    readonly firstName_user: string;

    @IsNotEmpty()
    @IsString()
    readonly email_user: string;

    @IsNotEmpty()
    @IsString()
    readonly mdp_user: string;

    @IsNotEmpty()
    @IsString()
    readonly role_user: string;
    
    readonly Tel_user: string;

    readonly pdp_user: string;

    readonly super_user: boolean;

    readonly tache: boolean;

    readonly project: boolean;

    readonly partenaire: boolean;

    readonly create_user: boolean;

    readonly updat_user: boolean;

    readonly del_user: boolean;

    readonly create_blog: boolean;

    readonly updat_blog: boolean;

    readonly del_blog: boolean;

    readonly approb_blog: boolean;

    readonly status_user?: string = 'offline';

    readonly theme_user?: string = '#4863A0';

    readonly mode_user?: string = 'light';
}
