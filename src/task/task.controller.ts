import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}
    @Get()
    async getAllTasks(): Promise<Task[]>{
    return this.taskService.findAll()
    }
    
  
    @Post()
    async createTask(
        @Body()
        task: CreateTaskDto,
    ): Promise<Task> { 
    return this.taskService.create(task)
    }
    
       
    @Get(':id')
    async getTask(
        @Param('id')
        id : string
    ): Promise<Task>{
    return this.taskService.findById(id)
    }
    
    @Put(':id')
    async updateTask(
        @Param('id') id: string,
        @Body() Task:UpdateTaskDto ,
    ): Promise<Task> { 
        return this.taskService.updateById(id, Task);
    }
 
    @Delete(':id')
    async deleteTask(
        @Param('id')
        id : string
    ): Promise<Task>{
    return this.taskService.deleteById(id)
    }

    @Get('/todaytask/alltask')
    async getTodayTasks(): Promise<Task[]>{
    return this.taskService.findTodayTasks()
    }


    @Get('/todotask/alltask')
    async getTodoTasks(): Promise<Task[]>{
    return this.taskService.findTodoTask()
    }
    
    
    @Get('/InProgresstask/alltask')
    async getInProgressTasks(): Promise<Task[]>{
    return this.taskService.findInProgressTask()
    }
    
    
    @Get('/InReviewtask/alltask')
    async getInReviewTasks(): Promise<Task[]>{
    return this.taskService.findInReviewTask()
    }
    
    
    @Get('/Donetask/alltask')
    async getDoneTasks(): Promise<Task[]>{
    return this.taskService.findDoneTask()
    }
    
   


}
