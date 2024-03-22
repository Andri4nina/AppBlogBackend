import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Objectif } from './schemas/objectif.schemas';

@Injectable()
export class ObjectifService {
    constructor(
        @InjectModel(Objectif.name)
        private objectifModel : mongoose.Model<Objectif>
    ){}

    async findAll(): Promise<Objectif[]>{    
        const Objectifs = await this.objectifModel.find(  );
        return Objectifs;
    }
    
    
    async create(Objectif: Objectif): Promise<Objectif>{
        const res = await this.objectifModel.create(Objectif);
        return res; 
    }
    
    async findById(id: string): Promise<Objectif>{
        const Objectif = await this.objectifModel.findById(id);
        return Objectif; 
    }
    
    async updateById(id: string , Objectif: Objectif): Promise<Objectif>{
      return await this.objectifModel.findByIdAndUpdate(id, Objectif,{
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string ): Promise<Objectif>{
        return await this.objectifModel.findByIdAndDelete(id);
    }
    
    async findTheObjectif(projId: string): Promise<Objectif[]> {
        const objectifs = await this.objectifModel.find({ projId: projId });
        return objectifs;
    }
}
