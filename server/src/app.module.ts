import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AppController} from './app.controller';
import {AppService} from './app.service';
// tslint:disable-next-line:import-path-shallowest
import {UserModule} from './core/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
  modules: [UserModule],
})
export class AppModule {}
