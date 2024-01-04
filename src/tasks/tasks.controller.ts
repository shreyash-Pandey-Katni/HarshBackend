// tasks.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    getResponseForUserMessage(@Body() message: any) {
        console.log(message.message);
        
        return this.tasksService.getResponseForUserMessage(message.message);
    }
}