import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {UserInfoDTO} from 'src/dtos';

import {User} from './user.entity';

interface Person {
  name: string;
  age: number;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async hasRepeatUser(userInfo: UserInfoDTO): Promise<boolean> {
    let {username, password} = userInfo;

    let result = await this.userRepository.findOne({username, password});

    return result === undefined ? false : true;
  }

  async register(userInfo: UserInfoDTO): Promise<boolean> {
    if (await this.hasRepeatUser(userInfo)) {
      return false;
    }

    let {username, password} = userInfo;
    let user = new User();

    user.password = password;
    user.username = username;

    await this.userRepository.save(user);

    return true;
  }

  async login(userInfo: UserInfoDTO): Promise<boolean> {
    let result = await this.hasRepeatUser(userInfo);

    return result;
  }

  getInfo(): Person {
    return {
      name: 'zhangsan',
      age: 19,
    };
  }
}
