import {Module} from '@nestjs/common';

import {GraphqlConfigService} from './graphql.service';

@Module({
  providers: [GraphqlConfigService],
  exports: [GraphqlConfigService],
})
export class GraphqlConfigModule {}
