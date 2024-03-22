import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateObjectifDto } from './dto/create-objectif.dto';
import { UpdateObjectifDto } from './dto/update-objectif.dto';
import { ObjectifService } from './objectif.service';
import { Objectif } from './schemas/objectif.schemas';

@Controller('objectif')
export class ObjectifController {

    constructor(private objectifService: ObjectifService){}
    
    @Get()
    async getAllObjectifs(): Promise<Objectif[]>{
    return this.objectifService.findAll()
    }
    
  
    @Post()
    async createObjectif(
        @Body()
        objectif: CreateObjectifDto,
    ): Promise<Objectif> { 
    return this.objectifService.create(objectif)
    }
    
       
    @Get(':id')
    async getObjectif(
        @Param('id')
        id : string
    ): Promise<Objectif>{
    return this.objectifService.findById(id)
    }
    
    @Put(':id')
    async updateObjectif(
        @Param('id') id: string,
        @Body() objectif:UpdateObjectifDto ,
    ): Promise<Objectif> { 
        return this.objectifService.updateById(id, objectif);
    }
 
    @Delete(':id')
    async deleteObjectif(
        @Param('id')
        id : string
    ): Promise<Objectif>{
    return this.objectifService.deleteById(id)
    }
    
    @Get('/get/:projId')
    async getObjectifsByProjectId(
        @Param('projId') projId: string,
    ): Promise<Objectif[]> {
        return this.objectifService.findTheObjectif(projId);
    }

}
