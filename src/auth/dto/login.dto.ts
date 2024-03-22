import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class LoginDto {
    @IsNotEmpty()
    @IsString()
    readonly firstName_user: string;

    @IsNotEmpty()
    @IsEmail({} , {message: 'entrer le format correct de votre email'})
    readonly email_user: string;

    @IsNotEmpty()
    @IsString()
    readonly mdp_user: string;

}
