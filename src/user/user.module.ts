import {forwardRef, Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {UserModel} from "./user.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {AuthModule} from "../auth/auth.module";
import {TaskModel} from "../task/task.model";
import {SubTaskModel} from "../sub-task/subTask.model";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([UserModel, TaskModel, SubTaskModel]),
    forwardRef(()=>AuthModule)
  ],
  exports: [UserService]
})
export class UserModule {}
