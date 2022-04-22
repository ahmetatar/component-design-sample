/**
 * Generates a random id by prefixing the given string
 *
 * @param prefix - to be added to randomly generated id
 * @returns random id
 */
export function generateId(prefix: string) {
  return Math.random()
    .toString(36)
    .replace('0.', prefix || '');
}
