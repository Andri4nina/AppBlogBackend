import { IsNotEmpty, IsOptional, IsString } from 'class-validator';



export class UpdateBlogDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly titre_blog: string;
    
    @IsOptional()
    @IsString()
    readonly sous_titre_blog: string;
    
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly contenu_blog: string;
    
    @IsOptional()
    @IsString()
    readonly type_blog: string;
    
    @IsOptional()
    @IsString()
    readonly url_blog: string;
    
    @IsOptional()
    @IsString()
    readonly couv_blog: string;
    
    @IsOptional()
    @IsString()
    readonly status_blog: string;
    
    @IsOptional()
    @IsString()
    readonly approb_blog: boolean;
    
    @IsOptional()
    @IsString()
    readonly publish_blog: boolean;
    
    @IsOptional()
    @IsString()
    readonly date_publi_blog: string;
    
    @IsOptional()
    @IsString()
    readonly user_id: string;
}
