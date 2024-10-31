import { Controller, Delete, Get, Post, Put, Patch, Body, Query } from '@nestjs/common'
import { TasksService } from './tasks.service'

@Controller('/tasks')

export class TasksController {
    tasksService:TasksService;

    constructor(tasksService:TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(@Query() query: any){
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Post()
    createTasks(@Body() task: any ){
        return this.tasksService.createTask(task);
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