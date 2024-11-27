// deno-lint-ignore-file ban-types
/**
 * A type that extracts the optional properties from another type.
 */
export type OptionalProperties<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

/**
 * A type that represents a class constructor.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = any> = new (...args: any[]) => T;

/**
 * Creates a subsidiary type that omits all function members from a given type.
 */
export type OmitFunctionMembers<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};
