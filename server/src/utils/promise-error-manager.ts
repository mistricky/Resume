import {logger} from './logger';

export function PromiseCatcher(p: Promise<unknown>): void {
  p.catch(err => logger.err(err.toString()));
}
