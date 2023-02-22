import { Injectable } from '@nestjs/common';
import {SubTaskModel} from "./subTask.model";
import {InjectModel} from "@nestjs/sequelize";
import {SubTaskDTO} from "./SubTaskDTO";
import {StatusTaskEnum} from "../task/status.task.enum";

@Injectable()
export class SubTaskService {
    constructor(@InjectModel(SubTaskModel) private subTaskRepository: typeof SubTaskModel) {
    }

    async postSubTask(body: SubTaskDTO){
        const task = await this.subTaskRepository.create(body)
        return task
    }

    async getSubTaskByTaskId(taskId: number){
        const tasks = await this.subTaskRepository.findAll({where: {taskId}})
        return tasks
    }

    async getSubTaskById(id){
        const task = await this.subTaskRepository.findByPk(id)
        return task
    }

    async patchTask(id: number, status: StatusTaskEnum){
        const task = await this.subTaskRepository.update({status: status}, {where: {id}})
        return task
    }

    async deleteSubTask(id: number){
        const task = await this.subTaskRepository.destroy({where: {id}})
        return task
    }
}
