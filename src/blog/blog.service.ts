import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import mongoose from 'mongoose';

import { Blog } from './schemas/blog.schemas';

@Injectable()
export class BlogService {
    constructor(
        @InjectModel(Blog.name)
        private blogModel : mongoose.Model<Blog>
    ){}
    
    
    async findAll(query:Query): Promise<Blog[]>{
    
        let keyword: any = {};

        if (typeof query.keyword === 'string') {
            keyword = {
                $or: [
                    { titre_blog: { $regex: query.keyword, $options: 'i' } },
                    { sous_titre_blog: { $regex: query.keyword, $options: 'i' } },
                    { contenu_blog: { $regex: query.keyword, $options: 'i' } },
                    { type_blog: { $regex: query.keyword, $options: 'i' } }
                    ]};}
        
        const Blogs = await this.blogModel.find( {...keyword} );
        return Blogs;
    }
    
    
    async create(Blog: Blog): Promise<Blog>{
        const res = await this.blogModel.create(Blog);
        return res; 
    }
    
    async findById(id: string): Promise<Blog>{
        const Blog = await this.blogModel.findById(id);
        return Blog; 
    }
    
    async updateById(id: string , Blog: Blog): Promise<Blog>{
      return await this.blogModel.findByIdAndUpdate(id, Blog,{
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string ): Promise<Blog>{
        return await this.blogModel.findByIdAndDelete(id);
    }
    
   
    async findLastCreatedBlog(): Promise<Blog> {
        return this.blogModel.findOne().sort({ createdAt: -1 });
      }
      
      async getNumberOfBlogs(): Promise<Blog[]> {
        const blogs = await this.blogModel.find();
        return blogs;
      }
      
      async comparaisonBlog(): Promise<{ month: string, creations: number, publications: number }[]> {
        const currentMonth = new Date().getMonth();
        const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
        const comparaisonData: { month: string, creations: number, publications: number }[] = [];
    
        for (let i = 0; i <= currentMonth; i++) {
            const monthData = await this.blogModel.aggregate([
                {
                    $match: {
                        'date_publi_blog': { $exists: true, $ne: null }
                    }
                },
                {
                    $addFields: {
                        month: { $month: { $toDate: '$date_publi_blog' } }
                    }
                },
                {
                    $match: {
                        month: i + 1
                    }
                },
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 }
                    }
                }
            ]);
    
            const publications = monthData.length > 0 ? monthData[0].count : 0;
    
            const creations = await this.blogModel.aggregate([
                {
                    $addFields: {
                        month: { $month: { $toDate: '$createdAt' } }
                    }
                },
                {
                    $match: {
                        month: i + 1
                    }
                },
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 }
                    }
                }
            ]);
    
            const creationsCount = creations.length > 0 ? creations[0].count : 0;
    
            comparaisonData.push({
                month: months[i],
                creations: creationsCount,
                publications: publications
            });
        }
    
        return comparaisonData;
    }
      
      
}
