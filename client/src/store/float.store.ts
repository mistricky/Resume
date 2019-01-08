import {observable} from 'mobx';

export class FloatStore {
  @observable
  loginIsView: boolean = false;

  @observable
  registerIsView: boolean = false;
}
