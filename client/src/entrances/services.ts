import {
  APIService,
  LoginService,
  ProjectExperienceService,
  UserService,
  WorkExperienceService,
} from 'src/services';

export const userService = new UserService();
export const loginService = new LoginService();
export const workExperienceService = new WorkExperienceService();
export const projectExperienceService = new ProjectExperienceService();
export const apiService = new APIService();
