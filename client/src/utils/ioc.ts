import 'reflect-metadata';

import {Constructor} from 'shared';

const ClassPool: Function[] = [];

export type InjectableDecorator<T> = (target: Constructor<T>) => void;

export function ClassFactory<T>(constructor: Constructor<T>): T {
  let paramTypes: Constructor<unknown>[] = Reflect.getMetadata(
    'design:paramtypes',
    constructor,
  );

  return new constructor(
    ...paramTypes.map(paramConstructor => {
      if (ClassPool.includes(paramConstructor)) {
        return paramConstructor;
      }

      if (paramConstructor.length) {
        return ClassFactory(paramConstructor);
      } else {
        return new paramConstructor();
      }
    }),
  );
}

export function Injectable<T>(): InjectableDecorator<T> {
  return (constructor: Constructor<T>): void => {
    let paramTypes = Reflect.getMetadata('design:paramtypes', constructor);

    for (let param of paramTypes) {
      if (!ClassPool.includes(param)) {
        continue;
      }

      if (param === constructor) {
        throw new Error('Cannot dependent yourself');
      } else {
        ClassPool.push(param);
      }
    }
  };
}

export function Inject<T>(
  constructor: Constructor<T>,
  paramName: string | symbol,
  _paramIndex: number,
): unknown {
  let paramType = Reflect.getMetadata(
    'design:paramtypes',
    constructor,
    paramName,
  );

  let instance;

  try {
    instance = new paramType[0]();
  } catch (e) {
    throw new Error('Please make sure the param instance of class.');
  }

  return instance;
}
