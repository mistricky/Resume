export function hasOwnProperty(target: Object, ...argArray: any[]): boolean {
  return Object.hasOwnProperty.call(target, argArray);
}
