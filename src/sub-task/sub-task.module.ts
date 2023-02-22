import { Module } from '@nestjs/common';
import { SubTaskController } from './sub-task.controller';
import { SubTaskService } from './sub-task.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModel} from "../task/task.model";
import {SubTaskModel} from "./subTask.model";
import {UserModel} from "../user/user.model";

@Module({
  controllers: [SubTaskController],
  providers: [SubTaskService],
  imports: [
    SequelizeModule.forFeature([UserModel, TaskModel, SubTaskModel]),
  ]
})
export class SubTaskModule {}
