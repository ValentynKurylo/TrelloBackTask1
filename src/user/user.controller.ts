import {Controller, Get, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {AuthGuard} from "../roles/authGuard";
import {Roles} from "../roles/roles.decorator";
import {RoleEnum} from "../roles/role.enum";
import {RoleGuard} from "../roles/roleGuard";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserDTO} from "./userDTO";

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @ApiOperation({summary:'Get Users'})
    @ApiResponse({status: 200, type: [UserDTO]})
    @Roles(RoleEnum.ADMIN)
    @UseGuards(AuthGuard, RoleGuard)
    @Get()
    getUsers() {
        return this.userService.getUsers()
    }

}
