import ApolloClient from 'apollo-boost';

import {GRAPHQL_ADDRESS} from 'src/constant';

// tslint:disable-next-line:no-inferred-empty-object-type
export const client = new ApolloClient({
  uri: GRAPHQL_ADDRESS,
});
