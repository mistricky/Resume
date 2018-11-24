import {Module} from '@nestjs/common';

import {GraphqlConfigService} from './graphql.service';

@Module({
  providers: [GraphqlConfigService],
})
export class GraphqlConfigModule {}
