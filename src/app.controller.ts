import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Standart')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary:'Hello'})
  @ApiResponse({status: 200, type: String})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
