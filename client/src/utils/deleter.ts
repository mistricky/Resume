export function removeUnit(str: string): string {
  let result = /(^[0-9]+)\.*/.exec(str);

  if (!result) {
    throw new Error('No match');
  }

  return result[1];
}
