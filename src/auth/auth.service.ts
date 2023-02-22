import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {UserService} from "../user/user.service";
import {UserDTO} from "../user/userDTO";
import {UserModel} from "../user/user.model";
import {AuthDTO} from "./authDTO";


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UserService) {
    }

    async registration(body: UserDTO){
        const candidate = await this.userService.getUserByEmail(body.email)
        if(candidate){
            return {
                message: "User with such email already exist",
                status: 400
            }
        }

        let hashPassword = await bcrypt.hash(body.password, 4)
        let user = await this.userService.postUser({...body, password: hashPassword})
        return this.generateToken(user)
    }
    async login(body: AuthDTO){
        let isEmail = await this.userService.getUserByEmail(body.email)
        if(!isEmail){
            return {
                message: "Wrong email or password",
                status: 400
            }
        }
        let isPassword = await bcrypt.compare(body.password, isEmail.password)
        if(!isPassword){
            return {
                message: "Wrong email or password",
                status: 400
            }
        }
        return this.generateToken(isEmail)
    }

    private async generateToken(user: UserModel){
        let payload = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        return {
            token: this.jwtService.sign(payload),
            user: payload
        }
    }


}
