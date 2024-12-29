import { transformFetchJson } from './http-client.utils';

describe('HttpClientUtils', () => {
  describe('transformFetchJson', () => {
    it('should properly transform an object', async () => {
      const obj = { str: 'foo', num: 42 };
      const response = new Response(JSON.stringify(obj), {
        status: 200,
      });
      const result = await transformFetchJson<typeof obj>(response);
      expect(result).toEqual(obj);
    });
    it('should properly transform an array of objects', async () => {
      const arr = [
        { str: 'foo', num: 42 },
        { str: 'bar', num: 420 },
      ];
      const response = new Response(JSON.stringify(arr), {
        status: 200,
      });
      const result = await transformFetchJson<typeof arr>(response);
      expect(result).toEqual(arr);
    });
  });
});
