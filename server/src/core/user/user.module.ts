import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {RegisterController} from 'src/controllers';

import {UserResolver} from '../../graphql/resolvers';

import {User} from './user.entity';
import {UserService} from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RegisterController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
