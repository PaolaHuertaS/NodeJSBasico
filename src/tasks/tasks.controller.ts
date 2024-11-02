import { Controller, Delete, Get, Post, Put, Patch, Body, Query, Param, UsePipes, ValidationPipe } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/createtask.dto';
import { UpdateTaskDto } from './dto/updatetask.dto';

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

    @Get('/:id')
    getTasks(@Param('id')id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTasks(@Body() task: CreateTaskDto ){
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
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