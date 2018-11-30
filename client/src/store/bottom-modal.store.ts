import {observable} from 'mobx';

export class BottomModalStore {
  @observable
  isView: boolean | undefined;

  @observable
  isCancel: boolean = false;
}
