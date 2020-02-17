export function debounce(fn: Function, wait: number) {
  let timeout: number;

  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}