import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import mongoose from 'mongoose';

import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel : mongoose.Model<User>
    ){}
    
    
    async findAll(query:Query): Promise<User[]>{
    
        let keyword: any = {};

        if (typeof query.keyword === 'string') {
            keyword = {
                $or: [
                    { name_user: { $regex: query.keyword, $options: 'i' } },
                    { firstName_user: { $regex: query.keyword, $options: 'i' } },
                    { email_user: { $regex: query.keyword, $options: 'i' } },
                    { role_user: { $regex: query.keyword, $options: 'i' } },
                    {$or: [{ $and: [
                                    { name_user: { $regex: query.keyword.split(" ").join("\\s+"), $options: 'i' } },
                                    { firstName_user: { $regex: query.keyword.split(" ").reverse().join("\\s+"), $options: 'i' } }
                                ]},
                            {$and: [
                                    { name_user: { $regex: query.keyword.split(" ").reverse().join("\\s+"), $options: 'i' } },
                                    { firstName_user: { $regex: query.keyword.split(" ").join("\\s+"), $options: 'i' } }
                ]}]}]};}
        
        const users = await this.userModel.find( {...keyword} );
        return users;
    }
    
    
    async create(user: User): Promise<User>{
        const res = await this.userModel.create(user);
        return res; 
    }
    
    async findById(id: string): Promise<User>{
        const user = await this.userModel.findById(id);
        return user; 
    }
    
    async updateById(id: string , user: User): Promise<User>{
      return await this.userModel.findByIdAndUpdate(id, user,{
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string ): Promise<User>{
        return await this.userModel.findByIdAndDelete(id);
    }
    
   
    async findLastCreatedUser(): Promise<User> {
        return this.userModel.findOne().sort({ createdAt: -1 });
      }
   
}
