export function isEmpty(str: string): boolean {
  return str === '';
}

export function isAllNumber(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

export function isAllCharator(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}
