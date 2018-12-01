function processTime(time: number): string {
  return time.toString().length === 1 ? `0${time}` : time.toString();
}

export function formatTime(time: Date): string {
  const date = new Date(+time);

  return [
    date.getFullYear(),
    processTime(date.getMonth()),
    processTime(date.getDate()),
  ].join('/');
}
