import {NestFactory} from '@nestjs/core';

import {AppModule} from './app.module';
import {PromiseCatcher, logger} from './utils';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

PromiseCatcher(bootstrap());
