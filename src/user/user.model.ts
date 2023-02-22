import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {RoleEnum} from "../roles/role.enum";
import {TaskModel} from "../task/task.model";
import {ApiProperty} from "@nestjs/swagger";

interface CreateUserModel {
    username: string,
    email: string,
    password: string
}

@Table({tableName: "users"})
export class UserModel extends Model<UserModel, CreateUserModel>{
    @ApiProperty({example: 1})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number

    @ApiProperty({example: "Valentyn Kurylo"})
    @Column({type: DataType.STRING, allowNull: false})
    username: string

    @ApiProperty({example: "aaa@gmail.com"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: "1111"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: "user"})
    @Column({type: DataType.ENUM(RoleEnum.USER, RoleEnum.ADMIN), defaultValue: RoleEnum.USER})
    role: RoleEnum

    @HasMany(()=>TaskModel)
    task: TaskModel[]
}