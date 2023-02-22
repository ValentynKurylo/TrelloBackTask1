import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "../user/user.model";
import {TaskModel} from "./task.model";
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";
import {SubTaskModel} from "../sub-task/subTask.model";

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [
      UserModule,
      JwtModule,
      AuthModule,
    SequelizeModule.forFeature([UserModel, TaskModel, SubTaskModel]),
  ]
})
export class TaskModule {}
