import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {HomePage} from './home-page.entity';
import {HomePageService} from './home-page.service';

@Module({
  imports: [TypeOrmModule.forFeature([HomePage])],
  providers: [HomePageService],
})
export class HomePageModule {}
