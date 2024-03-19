import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('image')
export class ImageController {

    @Post('/pdp')
    @UseInterceptors(FileInterceptor('img', {
        storage: diskStorage({
            destination: './img/pdp',
            filename: (req, file, cb) => {
                const filename = `${Date.now()}-${file.originalname}`;
                cb(null, filename);
            }
        })
    }))
    handleUploadImgUser(@UploadedFile() file: Express.Multer.File) {
        console.log('file', file);
        return 'pdp ajouté';
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 /*    @Post('/pdp-partenaire')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './img/pdp-partenaire',
            filename: (req, file, cb) => {
                const filename = `${Date.now()}-${file.originalname}`;
                cb(null, filename);
            }
        })
    }))
    handleUploadImgPartenaire(@UploadedFile() file: Express.Multer.File) {
        console.log('file', file);
        return 'image partenaire ajouté';
    } */

}
