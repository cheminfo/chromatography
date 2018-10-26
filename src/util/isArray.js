export function isArray(object) {
  return toString.call(object).endsWith('Array]');
}
