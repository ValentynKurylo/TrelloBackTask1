import {Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TaskService} from "./task.service";
import {TaskDTO} from "./taskDTO";
import {AuthGuard} from "../roles/authGuard";


@ApiTags('tasks')
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {
    }

    @ApiOperation({summary:'create Task'})
    @ApiResponse({status: 201, type: TaskDTO})
    @UseGuards(AuthGuard)
    @Post()
    createTask(@Body()body: TaskDTO, @Req()req){
        let res = this.taskService.postTask(body, req.user.id)
        return res
    }

    @ApiOperation({summary:'Get Tasks'})
    @ApiResponse({status: 200, type: [TaskDTO]})
    @UseGuards(AuthGuard)
    @Get()
    getTasks(){
        return this.taskService.getTasks()
    }

    @ApiOperation({summary:'Get Task By Id'})
    @ApiResponse({status: 200, type: TaskDTO})
    @UseGuards(AuthGuard)
    @Get('byId/:id')
    getTaskById(@Param('id')id: number){
        return this.taskService.getTaskById(id)
    }

    @ApiOperation({summary:'Get Task By UserId'})
    @ApiResponse({status: 200, type: [TaskDTO]})
    @UseGuards(AuthGuard)
    @Get('user')
    getTaskByUserId(@Req()req){
        return this.taskService.getTasksByUserId(req.user.id)
    }

    @ApiOperation({summary:'Get Task By status'})
    @ApiResponse({status: 200, type: [TaskDTO]})
    @UseGuards(AuthGuard)
    @Get('status')
    getTaskByStatus(@Query('status')status: string, @Req()req){
        return this.taskService.getTakByStatus(status, req.user.id)
    }

    @ApiOperation({summary:'Patch Task'})
    @ApiResponse({status: 200, type: TaskDTO})
    @UseGuards(AuthGuard)
    @Patch('/:id')
    patchTask(@Body()body, @Param('id')id: number){
        return this.taskService.patchTask(id, body.status)
    }

    @ApiOperation({summary:'Delete Task'})
    @ApiResponse({status: 200, type: TaskDTO})
    @UseGuards(AuthGuard)
    @Delete('/:id')
    deleteTask(@Param('id')id: number){
        return this.taskService.deleteTask(id)
    }

}
