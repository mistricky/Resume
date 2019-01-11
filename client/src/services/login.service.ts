import {observable} from 'mobx';

// import {httpService} from 'src/entrances';

export class LoginService {
  @observable
  isLogin: boolean = false;

  register(): void {
    // httpService.post('/register');
  }
}
