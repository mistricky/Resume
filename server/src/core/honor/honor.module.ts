import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HonorModule])],
  controllers: [],
  providers: [],
})
export class HonorModule {}
