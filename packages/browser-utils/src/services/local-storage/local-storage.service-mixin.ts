import { Logger, ServiceMixin } from '@spuxx/js-utils';
import { LocalStorageOptions } from './types';

/**
 * A mixin that provides a standardized and type-safe abstraction of the browser's
 * `localStorage` API.
 * For more information, see: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
export function LocalStorageMixin<TLocalStorage extends object>(
  options: LocalStorageOptions<TLocalStorage>,
) {
  class LocalStorage extends ServiceMixin<LocalStorage>() {
    private _defaultValues: TLocalStorage = { ...options.defaultValues };
    private _data: TLocalStorage = LocalStorage.readData();

    private static set data(data: TLocalStorage) {
      this.instance._data = data;
    }

    private static get data() {
      return this.instance._data;
    }

    private static get defaultValues() {
      return this.instance._defaultValues;
    }

    private static readData(): TLocalStorage {
      try {
        const raw = localStorage.getItem(options.key);
        const data: TLocalStorage = JSON.parse(raw ?? '{}');
        return data;
      } catch (error) {
        Logger.warn(
          'Failed to load data from local storage. Default values will be used.',
          this.constructor.name,
        );
        return {} as TLocalStorage;
      }
    }

    /**
     * (Re-)Loads the data from `localStorage` and caches it.
     * @returns The data from `localStorage`.
     */
    static load(): TLocalStorage {
      this.data = this.readData();
      return this.data;
    }

    /**
     * Saves the data to `localStorage`.
     */
    static save(): void {
      localStorage.setItem(options.key, JSON.stringify({ ...this.defaultValues, ...this.data }));
    }

    /**
     * Gets a value from `localStorage`.
     * @param key The key to get the value for.
     * @returns The value for the given key.
     */
    static get<TKey extends keyof TLocalStorage>(key: TKey): TLocalStorage[TKey] {
      let value = this.data[key];
      if (value === undefined) value = this.defaultValues[key];
      return value;
    }

    /**
     * Sets a value in `localStorage`.
     * @param key The key to get the value for.
     * @returns The value for the given key.
     */
    static set<TKey extends keyof TLocalStorage>(key: TKey, value: TLocalStorage[TKey]): void {
      this.data[key] = value;
      this.save();
    }
  }
  return LocalStorage;
}
