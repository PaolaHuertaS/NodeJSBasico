import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateTaskDto } from './dto/createtask.dto';
import { UpdateTaskDto } from './dto/updatetask.dto';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = [
    ]
    
    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
       const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound){
            return new NotFoundException("Tarea sin id encontrada");
        }
    
    }

    createTask(task: CreateTaskDto){
        this.tasks.push({
            ...task, 
            id: this.tasks.length + 1,
        })
        return task
    }

    updateTask(task: UpdateTaskDto){
        console.log(task)
        return "actualizando tareas"
    }

    deleteTask(){
        return "Eliminando tarea"
    }

    updateTaskStatus(){
        return "Actualizando el estado de tarea"
    }
}