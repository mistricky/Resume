import {observable} from 'mobx';

export class UserService {
  @observable
  user!: string;

  @observable
  avatar: string =
    'https://avatars1.githubusercontent.com/u/22574136?s=400&u=03105b1c3ce6786a1ec29d293d9dbea77909605f&v=4';
}
