import {observable} from 'mobx';

export interface HomePage {
  type: string;
  link: string;
}

export class UserService {
  @observable
  user: string = 'Younccat';

  @observable
  avatar: string =
    'https://avatars1.githubusercontent.com/u/22574136?s=400&u=03105b1c3ce6786a1ec29d293d9dbea77909605f&v=4';

  @observable
  age: string = '19 岁';

  @observable
  station: string = 'Web 前端工程师';

  @observable
  sex: string = '男';

  @observable
  location: string = '四川省-成都市';

  @observable
  telNum: string = '18582967447';

  @observable
  email: string = 'haodawang.zhao@gmail.com';

  @observable
  description: string = '喜欢造 wheel 的普通 coder';

  @observable
  homePages: HomePage[] = [
    {
      type: 'CSDN',
      link: 'https://blog.csdn.net/HaoDaWang',
    },
    {
      type: 'Github',
      link: 'https://github.com/HaoDaWang',
    },
  ];
}
