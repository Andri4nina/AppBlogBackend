import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

import { CreateProjectDto } from './dto/create-projet.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjetService } from './projet.service';
import { Projet } from './schemas/project.schema';


@Controller('projet')
export class ProjetController {
    constructor(private projetService: ProjetService){}
    
    @Get()
    async getAllProjets(@Query() query: ExpressQuery): Promise<Projet[]>{
    return this.projetService.findAll(query)
    }
    
    /* Creation d'utilisateur */
    @Post()
    async createProjet(
        @Body()
        projet: CreateProjectDto,
    ): Promise<Projet> { 
    return this.projetService.create(projet)
    }
    
       
    @Get(':id')
    async getProjet(
        @Param('id')
        id : string
    ): Promise<Projet>{
    return this.projetService.findById(id)
    }
    
    @Put(':id')
    async updateProjet(
        @Param('id') id: string,
        @Body() projet: UpdateProjectDto,
    ): Promise<Projet> { 
        return this.projetService.updateById(id, projet);
    }
 
    @Delete(':id')
    async deleteProjet(
        @Param('id')
        id : string
    ): Promise<Projet>{
    return this.projetService.deleteById(id)
    }

    @Get('give/thelastest')
    async getLastCreatedProjet(): Promise<Projet> {
      return this.projetService.findLastCreatedProjet();
    }
}
