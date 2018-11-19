function completeTime(target: number): string {
  let st = target.toString();

  return st.length === 1 ? `0${st}` : st;
}

function processYear(date: Date): string {
  return `${date.getFullYear()}-${completeTime(date.getMonth())}-${completeTime(
    date.getDay(),
  )}`;
}

function processTime(date: Date): string {
  return `${completeTime(date.getHours())}:${completeTime(
    date.getMinutes(),
  )}:${completeTime(date.getSeconds())}`;
}

export function timeFormat(date: Date): string {
  return `[ ${processYear(date)} ${processTime(date)} ]`;
}
