import {logger} from './logger';

export function PromiseCatcher(p: Promise<any>): void {
  p.catch(err => logger.err(err));
}
