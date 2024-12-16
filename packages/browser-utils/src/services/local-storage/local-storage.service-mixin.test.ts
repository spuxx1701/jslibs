import { LocalStorageMixin } from './local-storage.service-mixin';

describe('LocalStorageMixin', () => {
  const key = 'test';
  interface ILocalStorage {
    str: string;
    num?: number;
    bool?: boolean;
    obj?: {
      str: string;
    };
  }

  class LocalStorage extends LocalStorageMixin<ILocalStorage>({
    key,
    defaultValues: {
      str: 'foo',
    },
  }) {}

  it("should return the default value if the key doesn't exist", () => {
    expect(LocalStorage.get('str')).toBe('foo');
    expect(LocalStorage.get('num')).toBeUndefined();
    expect(LocalStorage.get('bool')).toBeUndefined();
    expect(LocalStorage.get('obj')).toBeUndefined();
  });

  it('should return the value if the key exists', () => {
    expect(LocalStorage.get('str')).toBe('foo');
    localStorage.setItem(key, JSON.stringify({ str: 'bar' }));
    LocalStorage.load();
    expect(LocalStorage.get('str')).toBe('bar');
  });

  it('should save the current data', () => {
    expect(localStorage.getItem(key)).toBeNull();
    LocalStorage.save();
    expect(localStorage.getItem(key)).toBe('{"str":"foo"}');
  });

  it('should read and save properties continuously', () => {
    expect(localStorage.getItem(key)).toBeNull();
    LocalStorage.set('str', 'bar');
    expect(localStorage.getItem(key)).toBe('{"str":"bar"}');
    LocalStorage.set('num', 42);
    expect(localStorage.getItem(key)).toBe('{"str":"bar","num":42}');
    LocalStorage.set('bool', true);
    expect(localStorage.getItem(key)).toBe('{"str":"bar","num":42,"bool":true}');
    LocalStorage.set('obj', { str: 'bar' });
    expect(localStorage.getItem(key)).toBe(
      '{"str":"bar","num":42,"bool":true,"obj":{"str":"bar"}}',
    );
  });
});
