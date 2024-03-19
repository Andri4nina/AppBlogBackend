import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    
    /* recuperation de donne */
    @Get()
    async getAllUsers(@Query() query: ExpressQuery): Promise<User[]>{
    return this.userService.findAll(query)
    }
    
    /* Creation d'utilisateur */
    @Post()
    async createUser(
        @Body()
        user: CreateUserDto,
    ): Promise<User> { 
    return this.userService.create(user)
    }
    
    @Get('/last')
    async getLastCreatedUser(): Promise<User> {
      return this.userService.findLastCreatedUser();
    }
    
    
    @Get(':id')
    async getUser(
        @Param('id')
        id : string
    ): Promise<User>{
    return this.userService.findById(id)
    }
    
    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() user: UpdateUserDto,
    ): Promise<User> { 
        return this.userService.updateById(id, user);
    }

    @Delete(':id')
    async deleteUser(
        @Param('id')
        id : string
    ): Promise<User>{
    return this.userService.deleteById(id)
    }
    
  
    
    
}
