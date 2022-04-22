/**
 * Extracts the query parameter from the given url
 *
 * @param url - to extract query parameter
 * @param variable - determines which parameter to exclude from the query
 */
export function getQueryParam(url: string, variable: string): string | null {
  const query = url.substring(1);
  const vars = query.split('&');

  let found = null;

  vars.forEach((x) => {
    let pair = x.split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      found = decodeURIComponent(pair[1]);
    }
  });

  return found;
}
