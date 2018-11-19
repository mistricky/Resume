import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {WorkExperience} from './work-experience.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkExperience])],
  providers: [],
  controllers: [],
})
export class WorkExperienceModule {}
