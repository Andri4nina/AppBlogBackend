import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name)
        private taskModel : mongoose.Model<Task>
    ){}
    
    
    async findAll(): Promise<Task[]>{    
        const Tasks = await this.taskModel.find(  );
        return Tasks;
    }
    
    
    async create(task: Task): Promise<Task>{
        const res = await this.taskModel.create(task);
        return res; 
    }
    
    async findById(id: string): Promise<Task>{
        const Task = await this.taskModel.findById(id);
        return Task; 
    }
    
    async updateById(id: string , task: Task): Promise<Task>{
      return await this.taskModel.findByIdAndUpdate(id, task,{
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string ): Promise<Task>{
        return await this.taskModel.findByIdAndDelete(id);
    }
    
    
    async findTodayTasks(): Promise<Task[]> {    
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        // Recherchez les tâches créées aujourd'hui en comparant avec la date d'aujourd'hui
        const Tasks = await this.taskModel.find({ 
            createdAt: { 
                $gte: today, // Greater than or equal to today
                $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) // Less than tomorrow
            }
        }).exec();
    
        return Tasks;
    }
    
    
    async findTodoTask(): Promise<Task[]> {    
        const Tasks = await this.taskModel.find({ 
            status_task: "To do"
        }).exec();
        return Tasks;
    }
    
    async findInProgressTask(): Promise<Task[]> {    
        const Tasks = await this.taskModel.find({ 
            status_task: "In progress"
        }).exec();
        return Tasks;
    }
    
    async findInReviewTask(): Promise<Task[]> {    
        const Tasks = await this.taskModel.find({ 
            status_task: "In review"
        }).exec();
        return Tasks;
    }
    
    async findDoneTask(): Promise<Task[]> {    
        const Tasks = await this.taskModel.find({ 
            status_task: "Done"
        }).exec();
        return Tasks;
    }


}
