import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

import {RequestResult, UserInfoDTO, requestResultFactory} from 'src/dtos';

import {USER_EXIST_ERROR, USER_NOT_EXIST_ERROR, UserService} from '../../core';

@Resolver('User')
export class UserResolver {
  constructor(private readonly user: UserService) {}

  @Query()
  person(): any {
    return this.user.getInfo();
  }

  @Mutation()
  async register(
    @Args('userInfo') userInfo: UserInfoDTO,
  ): Promise<RequestResult> {
    let result = await this.user.register(userInfo);

    return requestResultFactory(
      result,
      'Register Successful',
      USER_EXIST_ERROR,
    );
  }

  @Mutation()
  async login(@Args('userInfo') userInfo: UserInfoDTO): Promise<RequestResult> {
    let result = await this.user.login(userInfo);

    return requestResultFactory(
      result,
      'Login successful',
      USER_NOT_EXIST_ERROR,
    );
  }
}
