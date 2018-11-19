import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {DescriptionTechnology} from './description-technology.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DescriptionTechnology])],
  providers: [],
  controllers: [],
})
export class DescriptionTechnologyModule {}
