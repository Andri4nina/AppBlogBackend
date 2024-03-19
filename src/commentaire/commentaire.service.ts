import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Commentaire } from './schemas/commentaire.schemas';

@Injectable()
export class CommentaireService {
    constructor(
        @InjectModel(Commentaire.name)
        private commentaireModel : mongoose.Model<Commentaire>
    ){}
    
    async findAll(): Promise<Commentaire[]>{        
        const Commentaires = await this.commentaireModel.find( {} );
        return Commentaires;
    }
    
    async create(Commentaire: Commentaire): Promise<Commentaire>{
        const res = await this.commentaireModel.create(Commentaire);
        return res; 
    }

    async deleteById(id: string ): Promise<Commentaire>{
        return await this.commentaireModel.findByIdAndDelete(id);
    }
    
    async findBlogComment(blogId: string): Promise<Commentaire[]> {
        return this.commentaireModel.find({ blog_id: blogId }).exec();
      }
    
}
 