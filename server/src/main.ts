import {NestFactory} from '@nestjs/core';

import * as CorsOptions from '../.configs/cors.json';

import {AppModule} from './app.module';
import {PromiseCatcher} from './utils';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors(CorsOptions);
  await app.listen(3200);
}

PromiseCatcher(bootstrap());
