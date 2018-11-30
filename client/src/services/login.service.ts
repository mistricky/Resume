import {observable} from 'mobx';

export class LoginService {
  @observable
  isLogin!: boolean;
}
