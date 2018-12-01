import {LoginService, UserService, WorkExperienceService} from 'src/services';
import {ProjectExperienceService} from 'src/services/project-experience.service';

export const userService = new UserService();
export const loginService = new LoginService();
export const workExperienceService = new WorkExperienceService();
export const projectExperienceService = new ProjectExperienceService();
