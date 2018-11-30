export function processLocation(province: string, city: string): string {
  return `${province}-${city}`;
}

export function processAge(age: number): string {
  return `${age} 岁`;
}
