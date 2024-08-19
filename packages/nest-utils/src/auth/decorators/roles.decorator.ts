import { SetMetadata } from '@nestjs/common';

/**
 * Use this decorator together with `AuthGuard` and specify required roles
 * as arguments. All specified roles will be required since `AuthGuard` implicitly
 * applies an 'and' condition.
 * @param roles The required roles.
 * @example
 * import { UseGuards } from '@nestjs/common';
 * import { AuthGuard, Roles } from '@spuxx/nest-utils';
 *
 * ＠UseGuards(AuthGuard)
 * ＠Roles("admin", "user")
 *
 * // When applying roles both on the controller and a method, the method decorator will "win"
 * Controller()
 * ＠UseGuards(AuthGuard)
 * ＠Roles("admin")
 * export class MyController {
 *   ＠UseGuards(AuthGuard)
 *   ＠Roles("user") // Only "user" will be required
 *   doSomething() {}
 * }
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
