import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

import { CreatePartenaireDto } from './dto/create-partenaire.dto';
import { UpdatePartenaireDto } from './dto/update-partenaire.dto';
import { PartenaireService } from './partenaire.service';
import { Partenaire } from './schemas/partenaire.schemas';

@Controller('partenaire')
export class PartenaireController {
    constructor(private partenaireService: PartenaireService){}
    
    @Get()
    async getAllPartenaires(@Query() query: ExpressQuery): Promise<Partenaire[]>{
    return this.partenaireService.findAll(query)
    }
    
    /* Creation d'utilisateur */
    @Post()
    async createPartenaire(
        @Body()
        partenaire: CreatePartenaireDto,
    ): Promise<Partenaire> { 
    return this.partenaireService.create(partenaire)
    }
    
       
    @Get(':id')
    async getPartenaire(
        @Param('id')
        id : string
    ): Promise<Partenaire>{
    return this.partenaireService.findById(id)
    }
    
    @Put(':id')
    async updatePartenaire(
        @Param('id') id: string,
        @Body() partenaire: UpdatePartenaireDto,
    ): Promise<Partenaire> { 
        return this.partenaireService.updateById(id, partenaire);
    }
 
    @Delete(':id')
    async deletePartenaire(
        @Param('id')
        id : string
    ): Promise<Partenaire>{
    return this.partenaireService.deleteById(id)
    }
    
    @Get('/countEconomique/part')
        async countEconomique(): Promise<number> {
            const query = {};
            const partenaires = await this.partenaireService.findAll(query);
            return this.partenaireService.countEconomique(partenaires);
        }
        
    @Get('/countEducation/part')
    async countEducation(): Promise<number> {
        const query = {};
        const partenaires = await this.partenaireService.findAll(query);
        return this.partenaireService.countEducation(partenaires);
    }

    @Get('/countCommunautaire/part')
    async countCommunautaires(): Promise<number> {
        const query = {};
        const partenaires = await this.partenaireService.findAll(query);
        return this.partenaireService.countCommunautaire(partenaires);
        }
        
    
    
    }
