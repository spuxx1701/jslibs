/**
 * Extending `ServiceMixin` will turn the inheriting class into a singleton class.
 * @see {@link https://en.wikipedia.org/wiki/Singleton_pattern|Singleton Pattern}
 * @typeParam TService - The type of the service.
 * @returns A parent class that turns the inheriting class into a singleton class.
 * @example
 * class MyService extends ServiceMixin<MyService>() {
 *   // ...
 * }
 */
export function ServiceMixin<TService>() {
  return class Service {
    /**
     * ⛔️ Do not set this and treat it as if it were `protected`! ⛔️ Unfortunately, TypeScript does not allow
     * private or protected members in declaration files yet.
     * See: {@link https://github.com/microsoft/TypeScript/issues/35822|TypeScript Issue #35822}
     * @internal
     */
    static _instance: TService | null;
    /**
     * Service classes should not be instantiated directly. Instead, access the `instance` property
     * to get the existing singleton instance or to create a new one if it does not yet exist.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {}

    /**
     * Returns the instance of the service.
     * @returns The instance of the service.
     * @example
     * const myService = MyService.instance;
     * myService.doSomething();
     */
    public static get instance(): TService {
      if (!this._instance) {
        this._instance = new this() as TService;
      }
      return this._instance;
    }

    /**
     * Destroys the existing instance of the service.
     * @example
     * const myService = MyService.instance;
     * MyService.destroy();
     * const myNewService = MyService.instance; // This will be a new instance
     */
    public static destroy() {
      this._instance = null;
    }
  };
}
