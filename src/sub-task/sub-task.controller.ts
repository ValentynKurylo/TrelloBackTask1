import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {SubTaskService} from "./sub-task.service";
import {SubTaskDTO} from "./SubTaskDTO";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('Sub-Tasks')
@Controller('sub-task')
export class SubTaskController {
    constructor(private subTaskService: SubTaskService) {
    }

    @ApiOperation({summary:'create Sub-Task'})
    @ApiResponse({status: 201, type: SubTaskDTO})
    @Post()
    postSubTask(@Body()body: SubTaskDTO){
        console.log("sub")
        return this.subTaskService.postSubTask(body)
    }

    @ApiOperation({summary:'get sub-tasks'})
    @ApiResponse({status: 200, type: [SubTaskDTO]})
    @Get('task/:taskId')
    getSubTaskByTaskId(@Param('taskId')id: number){
        return this.subTaskService.getSubTaskByTaskId(id)
    }

    @ApiOperation({summary:'get sub-task by id'})
    @ApiResponse({status: 200, type: SubTaskDTO})
    @Get('byId/:id')
    getSubTaskById(@Param('id')id: number){
        return this.subTaskService.getSubTaskById(id)
    }

    @ApiOperation({summary:'patch sub-tasks'})
    @ApiResponse({status: 200, type: SubTaskDTO})
    @Patch('/:id')
    patchTask(@Body()body, @Param('id')id: number){
        return this.subTaskService.patchTask(id, body.status)
    }

    @ApiOperation({summary:'delete sub-tasks'})
    @ApiResponse({status: 200, type: SubTaskDTO})
    @Delete('/:id')
    deleteTask(@Param('id')id: number){
        return this.subTaskService.deleteSubTask(id)
    }
}
