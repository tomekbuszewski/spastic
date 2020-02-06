export function debounce(fn: Function, wait: number) {
  let timeout: number;

  return function() {
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(() => fn.apply(this as any, arguments), wait);
  }
}