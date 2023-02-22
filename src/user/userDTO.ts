import {ApiProperty} from "@nestjs/swagger";

export class UserDTO{
    @ApiProperty({example: "User User"})
    readonly username
    @ApiProperty({example: "User@gmail.com"})
    readonly email
    @ApiProperty({example: "111111"})
    readonly password
}