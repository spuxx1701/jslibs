/* eslint-disable @typescript-eslint/ban-types */
/**
 * A type that extracts the optional properties from another type.
 * @typeParam T The type to extract optional properties from.
 * @example
 * interface MyInterface {
 *   foo: string;
 *   bar?: string;
 * }
 * type Opt = OptionalProperties<MyInterface>; // { bar?: string; }
 */
export type OptionalProperties<T> = {
  [K in keyof T as {} extends { [P in K]: T[K] } ? K : never]: T[K];
};

/**
 * A type that represents a class constructor.
 * @typeParam T The class.
 * @example
 * class MyClass {}
 * type MyConstructor = Constructor<MyClass>;
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = any> = new (...args: any[]) => T;

/**
 * Creates a subsidiary type that omits all function members from a given type.
 */
export type OmitFunctionMembers<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};
