export {};

// 扩充 includes
declare global {
  interface Array<T> {
    includes(item: T): boolean;
  }
}
