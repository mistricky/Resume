import {observable} from 'mobx';

export class UserService {
  @observable
  user!: string;
}
