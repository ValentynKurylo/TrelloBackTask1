import {ApiProperty} from "@nestjs/swagger";

export class AuthDTO{
    @ApiProperty({example: "User@gmail.com"})
    readonly email
    @ApiProperty({example: "555555"})
    readonly password
}