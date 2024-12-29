/**
 * A very simple transformer that will transform the response from a fetch call into a JSON object
 * and cast it to the specified type. Intended for use with `defineEndpoint`.
 * @param response The response from a fetch call.
 * @returns The transformed
 * @example
 * const endpoint = defineEndpoint({
 *   function: async (): Response => {
 *     return fetch('https://example.com/api/users');
 *   },
 *   transform: transformFetchJson<User[]>,
 */
export async function transformFetchJson<TResult>(response: Response): Promise<TResult> {
  const json = await response.json();
  return json as TResult;
}
