import {ApiProperty} from "@nestjs/swagger";

export class SubTaskDTO{
    @ApiProperty({example: "Task1"})
    readonly name
    @ApiProperty({example: "BKJNVLDF;NS"})
    readonly description
    @ApiProperty({example: "to-do"})
    readonly status
    @ApiProperty({example: 4})
    readonly taskId
    @ApiProperty({example: "2023-02-22 18:45:00"})
    readonly startDate
    @ApiProperty({example: "2023-03-22 18:45:00"})
    readonly endDate
}