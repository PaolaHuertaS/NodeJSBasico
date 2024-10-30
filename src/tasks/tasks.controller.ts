import { Controller, Delete, Get, Post, Put, Patch } from '@nestjs/common'
import { TasksService } from './tasks.service'

@Controller('/tasks')

export class TasksController {
    tasksService:TasksService;

    constructor(tasksService:TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post()
    createTasks(){
        return this.tasksService.createTask();
    }

    @Put()
    updateTasks(){
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTasks(){
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }
}