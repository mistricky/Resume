import {observable} from 'mobx';

export interface ProjectExperience {
  company: string;
  projectName: string;
  description: string;
}

export class ProjectExperienceModel {
  @observable
  company: string;

  @observable
  projectName: string;

  @observable
  description: string;

  constructor({company, projectName, description}: ProjectExperience) {
    this.company = company;
    this.projectName = projectName;
    this.description = description;
  }
}

export class ProjectExperienceService {
  @observable
  projectExperiences: ProjectExperienceModel[] = [];

  setProjectExperiences(projectExperiences: ProjectExperience[]): void {
    projectExperiences.map(
      experience => new ProjectExperienceModel(experience),
    );
  }
}
