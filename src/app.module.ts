import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {UserModel} from "./user/user.model";
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import {TaskModel} from "./task/task.model";
import { SubTaskModule } from './sub-task/sub-task.module';
import {SubTaskModel} from "./sub-task/subTask.model";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),

    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [UserModel, TaskModel, SubTaskModel],
      autoLoadModels: true
    }),

    AuthModule,

    TaskModule,

    SubTaskModule,],
})
export class AppModule {}
