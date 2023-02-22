import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {TaskModel} from "./task.model";
import {TaskDTO} from "./taskDTO";
import {StatusTaskEnum} from "./status.task.enum";


@Injectable()
export class TaskService {
    constructor(@InjectModel(TaskModel) private taskRepository: typeof TaskModel) {
    }

    async postTask(body: TaskDTO, userId: number){
        let task = await this.taskRepository.create({...body, userId: userId})
        return task
    }

    async getTasks(){
        const tasks = await this.taskRepository.findAll()
        return tasks
    }

    async getTasksByUserId(userId){
        const tasks = await this.taskRepository.findAll({where: {userId}})
        return tasks
    }

    async getTaskById(id){
        const task = await this.taskRepository.findByPk(id)
        return task
    }
    async getTakByStatus(query: string, id: number){
        const tasks = await this.taskRepository.findAll({where: {userId: id , status: query}})
        return tasks
    }

    async patchTask(id: number, status: StatusTaskEnum){
        const task = await this.taskRepository.update({status: status}, {where: {id}})
        return task
    }
    async deleteTask(id: number){
        const task = await this.taskRepository.destroy({where: {id}})
        return task
    }

}
