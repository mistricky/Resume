import {observable} from 'mobx';

export interface WorkExperience {
  company: string;
  since: number;
  beginTime: Date;
  endTime: Date;
  station: string;
  department: string;
}

export class WorkExperienceModel {
  @observable
  company: string;

  @observable
  since: number;

  @observable
  beginTime: Date;

  @observable
  endTime: Date;

  @observable
  station: string;

  @observable
  department: string;

  constructor({
    company,
    since,
    beginTime,
    endTime,
    station,
    department,
  }: WorkExperience) {
    this.company = company;
    this.since = since;
    this.beginTime = beginTime;
    this.endTime = endTime;
    this.station = station;
    this.department = department;
  }
}

export class WorkExperienceService {
  @observable
  experiences!: WorkExperienceModel[];

  setExperiences(experiences: WorkExperience[]): void {
    this.experiences = experiences.map(
      experience => new WorkExperienceModel(experience),
    );
  }
}
