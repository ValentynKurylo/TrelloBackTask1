import {Injectable} from '@nestjs/common';
import {UserModel} from "./user.model";
import {UserDTO} from "./userDTO";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel)private userRepository: typeof UserModel) {
    }

    async getUsers(){
        const users = await this.userRepository.findAll()
        return users
    }


    async postUser(body: UserDTO){
        const user = await this.userRepository.create(body)
        return user
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }

}
