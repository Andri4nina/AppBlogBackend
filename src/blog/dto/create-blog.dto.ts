import { IsNotEmpty, IsString } from 'class-validator';



export class CreateBlogDto {
    @IsNotEmpty()
    @IsString()
    readonly titre_blog: string;
    @IsString()
    readonly sous_titre_blog: string;
    @IsNotEmpty()
    @IsString()
    readonly contenu_blog: string;
    @IsString()
    readonly type_blog: string;
    @IsString()
    readonly url_blog: string;
    @IsString()
    readonly couv_blog: string;
    @IsString()
    readonly status_blog: string;
    @IsString()
    readonly approb_blog: boolean;
    @IsString()
    readonly publish_blog: boolean;
    @IsString()
    readonly date_publi_blog: string;
    @IsString()
    readonly user_id: string;
}
