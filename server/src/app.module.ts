import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import * as database from '../.configs/database.json';

import {AppController} from './app.controller';
import {AppService} from './app.service';
// tslint:disable-next-line:import-path-shallowest
import {UserModule} from './core/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(database as TypeOrmModule), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
