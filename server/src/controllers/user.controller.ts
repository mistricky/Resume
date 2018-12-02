import {Body, Controller, Post} from '@nestjs/common';

import {UserService} from 'src/core';
import {UserInfoDTO} from 'src/dtos';

@Controller('register')
export class RegisterController {
  constructor(private userService: UserService) {}

  @Post()
  async register(@Body() body: UserInfoDTO): Promise<boolean> {
    let result = await this.userService.register(body);
    return result;
  }

  @Post()
  async login(@Body() body: UserInfoDTO): Promise<boolean> {
    let result = await this.userService.login(body);
    return result;
  }
}
