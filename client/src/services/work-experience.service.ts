import {observable} from 'mobx';

export class WorkExperienceService {
  @observable
  company: string = '德阳歆美科技有限公司';

  @observable
  since: number = 1;

  @observable
  beginTime: Date = new Date();

  @observable
  endTime: Date = new Date();

  @observable
  station: string = 'Web 前端工程师';

  @observable
  department: string = '研发部';
}
