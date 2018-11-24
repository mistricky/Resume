import {hasOwnProperty} from 'shared';

import {logger} from './logger';

export function toString(_target: unknown, key: string): string {
  // tslint:disable-next-line:ban-types
  if (!hasOwnProperty(key, 'toString')) {
    logger.err('The key cannot covert to string');
  }

  return key.toString();
}
