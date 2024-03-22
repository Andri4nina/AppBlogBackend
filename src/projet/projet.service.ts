import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import mongoose from 'mongoose';

import { Projet } from './schemas/project.schema';

@Injectable()
export class ProjetService {

    constructor(
        @InjectModel(Projet.name)
        private projetModel : mongoose.Model<Projet>
    ){}
    
    
    async findAll(query:Query): Promise<Projet[]>{
    
        let keyword: any = {};

        if (typeof query.keyword === 'string') {
            keyword = {
                $or: [
                    { titre_project: { $regex: query.keyword, $options: 'i' } },
                    { contenu_project: { $regex: query.keyword, $options: 'i' } },
                    ]};}
        
        const Projets = await this.projetModel.find( {...keyword} );
        return Projets;
    }
    
    
    async create(projet: Projet): Promise<Projet>{
        const res = await this.projetModel.create(projet);
        return res; 
    }
    
    async findById(id: string): Promise<Projet>{
        const Projet = await this.projetModel.findById(id);
        return Projet; 
    }
    
    async updateById(id: string , projet: Projet): Promise<Projet>{
      return await this.projetModel.findByIdAndUpdate(id, projet,{
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string ): Promise<Projet>{
        return await this.projetModel.findByIdAndDelete(id);
    }
    
    async findLastCreatedProjet(): Promise<Projet> {
        return this.projetModel.findOne().sort({ createdAt: -1 });
      }
    
}
