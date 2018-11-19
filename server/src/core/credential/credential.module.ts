import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {Credential} from './credential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Credential])],
  providers: [],
})
export class CredentialModule {}
