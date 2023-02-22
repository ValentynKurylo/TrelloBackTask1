import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {StatusTaskEnum} from "../task/status.task.enum";
import {TaskModel} from "../task/task.model";
import {ApiProperty} from "@nestjs/swagger";


interface CreateSubTaskModel{
    name: string
    description: string,
    status: string,
    startDate: string,
    endDate: string,
    taskId: number
}

@Table({tableName: "sub_tasks"})
export class SubTaskModel extends Model<SubTaskModel, CreateSubTaskModel>{
    @ApiProperty({example: 2})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number

    @ApiProperty({example: "sub-task3"})
    @Column({type: DataType.STRING})
    name: string

    @ApiProperty({example: "qswscsacds"})
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

    @ApiProperty({example: 3})
    @ForeignKey(()=>TaskModel)
    @Column({type: DataType.INTEGER})
    taskId: number

    @BelongsTo(()=>TaskModel)
    user: TaskModel
}