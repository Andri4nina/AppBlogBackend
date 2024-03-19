import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import mongoose from 'mongoose';

import { Partenaire } from './schemas/partenaire.schemas';

@Injectable()
export class PartenaireService {
    constructor(
        @InjectModel(Partenaire.name)
        private partenaireModel : mongoose.Model<Partenaire>
    ){}
    
    
    async findAll(query:Query): Promise<Partenaire[]>{
    
        let keyword: any = {};

        if (typeof query.keyword === 'string') {
            keyword = {
                $or: [
                    { nom_partenaire: { $regex: query.keyword, $options: 'i' } },
                    { abbrev_partenaire: { $regex: query.keyword, $options: 'i' } },
                    ]};}
        
        const Partenaires = await this.partenaireModel.find( {...keyword} );
        return Partenaires;
    }
    
    
    async create(Partenaire: Partenaire): Promise<Partenaire>{
        const res = await this.partenaireModel.create(Partenaire);
        return res; 
    }
    
    async findById(id: string): Promise<Partenaire>{
        const Partenaire = await this.partenaireModel.findById(id);
        return Partenaire; 
    }
    
    async updateById(id: string , Partenaire: Partenaire): Promise<Partenaire>{
      return await this.partenaireModel.findByIdAndUpdate(id, Partenaire,{
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string ): Promise<Partenaire>{
        return await this.partenaireModel.findByIdAndDelete(id);
    }
    
    
    async countEconomique(partenaires: any[]): Promise<number> {
        const count = partenaires.filter(partenaire => partenaire.type_partenaire === 'Economique').length;
        return count;
    }
    
    async countEducation(partenaires: any[]): Promise<number> {
        const count = partenaires.filter(partenaire => partenaire.type_partenaire === 'Education').length;
        return count;
    }
    
    async countCommunautaire(partenaires: any[]): Promise<number> {
        const count = partenaires.filter(partenaire => partenaire.type_partenaire === 'Communautaire').length;
        return count;
    }
    
   
    
    
 

}
