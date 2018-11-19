import 'colors';

import {Injectable} from '@nestjs/common';

import {timeFormat} from './time-formatter';

export interface ILogger {
  info(msg: string, ...supportsDetails: any[]): void;
  err(msg: string, ...supportsDetails: any[]): void;
  log(msg: string, ...supportsDetails: any[]): void;
  warn(msg: string, ...supportsDetails: any[]): void;
}

@Injectable()
export class Logger implements ILogger {
  info(msg: string, ...supportsDetails: any[]): void {
    emitMessage('info', msg.blue, supportsDetails);
  }

  err(msg: string, ...supportsDetails: any[]): void {
    emitMessage('err', msg.red, supportsDetails);
  }

  log(msg: string, ...supportsDetails: any[]): void {
    emitMessage('log', `${timeFormat(new Date())} ${msg}`, supportsDetails);
  }

  warn(msg: string, ...supportsDetails: any[]): void {
    emitMessage('warn', msg.yellow, supportsDetails);
  }
}

type ConsoleType = 'info' | 'err' | 'warn' | 'log';

function emitMessage(
  type: ConsoleType,
  msg: string,
  ...supportsDetails: any[]
): void {
  console[type](msg, supportsDetails);
}

export let logger = new Logger();
