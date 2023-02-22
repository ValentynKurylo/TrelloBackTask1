import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {UserModel} from "../user/user.model";
import {StatusTaskEnum} from "./status.task.enum";
import {SubTaskModel} from "../sub-task/subTask.model";
import {ApiProperty} from "@nestjs/swagger";


interface CreateTaskModel{
    name: string
    description: string,
    status: StatusTaskEnum,
    startDate: string,
    endDate: string,
    userId: number
}

@Table({tableName: "tasks"})
export class TaskModel extends Model<TaskModel, CreateTaskModel>{
    @ApiProperty({example: 1})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number

    @ApiProperty({example: "task1"})
    @Column({type: DataType.STRING})
    name: string

    @ApiProperty({example: "lllllllll"})
    @Column({type: DataType.STRING})
    description: string

    @ApiProperty({example: "to-do"})
    @Column({
        type: DataType.ENUM(StatusTaskEnum.TO_DO, StatusTaskEnum.IN_PROGRESS, StatusTaskEnum.BLOCK, StatusTaskEnum.DONE),
        defaultValue: StatusTaskEnum.TO_DO
    })
    status: StatusTaskEnum

    @ApiProperty({example: "2023-02-22 18:45:00"})
    @Column({type: DataType.DATE, defaultValue: new Date()})
    startDate: string

    @ApiProperty({example: "2023-03-22 18:45:00"})
    @Column({type: DataType.DATE})
    endDate: string

    @ApiProperty({example: 5})
    @ForeignKey(()=>UserModel)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(()=>UserModel)
    user: UserModel

    @HasMany(()=>SubTaskModel)
    subTasks: SubTaskModel[]
}