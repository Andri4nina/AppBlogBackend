import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './schemas/blog.schemas';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService){}
   /* recuperation de donne */
   @Get()
   async getAllBlogs(@Query() query: ExpressQuery): Promise<Blog[]>{
   return this.blogService.findAll(query)
   }
   
   /* Creation d'utilisateur */
   @Post()
   async createBlog(
       @Body()
       blog: CreateBlogDto,
   ): Promise<Blog> { 
   return this.blogService.create(blog)
   }
   
   @Get('/last')
   async getLastCreatedBlog(): Promise<Blog> {
     return this.blogService.findLastCreatedBlog();
   }
   
   
   @Get(':id')
   async getBlog(
       @Param('id')
       id : string
   ): Promise<Blog>{
   return this.blogService.findById(id)
   }
   
   @Put(':id')
   async updateBlog(
       @Param('id') id: string,
       @Body() blog: UpdateBlogDto,
   ): Promise<Blog> { 
       return this.blogService.updateById(id, blog);
   }

   @Delete(':id')
   async deleteBlog(
       @Param('id')
       id : string
   ): Promise<Blog>{
   return this.blogService.deleteById(id)
   }
   
   @Get('/count/AllBlog')
   async getNumberOfBlogs(): Promise<{ count: number }> {
     const blogs = await this.blogService.getNumberOfBlogs();
     return { count: blogs.length };
   }
   
   @Get('comparaison/AllBlog')
   async comparaisonBlog(): Promise<{ month: string, creations: number, publications: number }[]> {
       return await this.blogService.comparaisonBlog();
   }
   
   
   

}
