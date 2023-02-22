import {ApiProperty} from "@nestjs/swagger";

export class TaskDTO{
    @ApiProperty({example: "task1"})
    readonly name
    @ApiProperty({example: "vm,vmfllmsdkdvk"})
    readonly description
    @ApiProperty({example: "to-do"})
    readonly status
    @ApiProperty({example: "2023-02-22 18:45:00"})
    readonly startDate
    @ApiProperty({example: "2023-03-22 18:45:00"})
    readonly endDate
}