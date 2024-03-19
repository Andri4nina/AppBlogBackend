import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { Commentaire } from './schemas/commentaire.schemas';

@Controller('commentaire')
export class CommentaireController {
    constructor(private commentaireService: CommentaireService){}
    @Get()
        async getAllMess(): Promise<Commentaire[]>{
        return this.commentaireService.findAll()
    }

  @Post()
  async createCommentaire(
      @Body()
      commentaire:CreateCommentaireDto,
  ): Promise<Commentaire> { 
  return this.commentaireService.create(commentaire)
  }
  
  
  @Delete(':id')
  async deleteCommentaire(
      @Param('id')
      id : string
  ): Promise<Commentaire>{
  return this.commentaireService.deleteById(id)
  }
  
  @Get(':blogId/comments')
  async getCommentsByBlogId(@Param('blogId') blogId: string): Promise<Commentaire[]> {
    return this.commentaireService.findBlogComment(blogId);
  }
}
