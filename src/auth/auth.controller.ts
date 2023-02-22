import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {UserDTO} from "../user/userDTO";
import {AuthDTO} from "./authDTO";


@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary:'Registration'})
    @ApiResponse({status: 201, type: String})
    @Post('registration')
    registration(@Body()body: UserDTO){
        let res = this.authService.registration(body)
        return res
    }

    @ApiOperation({summary:'Login'})
    @ApiResponse({status: 201, type: String})
    @Post('login')
    login(@Body()body: AuthDTO){
        let res = this.authService.login(body)
        return res
    }
}
