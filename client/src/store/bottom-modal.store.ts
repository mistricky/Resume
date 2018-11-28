import {observable} from 'mobx';

export class BottomModalStore {
  @observable
  isView: boolean = false;

  @observable
  isCancel: boolean = false;
}
