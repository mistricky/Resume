export interface Constructor<T> {
  new (...args: any[]): T;
}

export interface Dict<T> {
  [key: string]: T;
}
