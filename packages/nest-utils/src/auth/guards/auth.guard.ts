import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthOptionsProvider } from '../providers/auth-options.provider';

/**
 * Use this guard on a route to protect the route and only allow authenticated users
 * to access it. By default, it will allow all authenticated users that possess _any_
 * of the roles defined in `AuthRole` to use the route. You can further limit route access
 * by using the guard together with the `@Roles` decorator like so:
 * @example
 * import { UseGuards } from '@nestjs/common';
 * import { AuthGuard } from 'src/auth/guards/auth.guard';
 * import { Roles } from 'src/auth/decorators/roles.decorator';
 *
 * ＠UseGuards(AuthGuard)
 * ＠Roles(["admin", "user"])
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly optionsProvider: AuthOptionsProvider,
  ) {}

  get options() {
    return this.optionsProvider.options;
  }

  /**
   * Is triggered when the guarded function is being executed. If it returns false,
   * the guarded function will not be entered.
   * @param context The execution context.
   * @returns Whether the guarded function may be entered.
   */
  canActivate(context: ExecutionContext): boolean {
    if (this.options.disable) return true;

    // --- Perform authentication ---
    const request: Request = context.switchToHttp().getRequest();
    const { oidc } = request;
    if (!oidc || !oidc.isAuthenticated() || !oidc.user) {
      Logger.verbose(`An unauthenticated request of the protected route '${request.url}' was denied.`, AuthGuard.name);
      throw new UnauthorizedException();
    }

    // --- Perform authorization ---
    const user = oidc.user;
    const userRoles: string[] | undefined = user.roles ?? user.realm_access?.roles;
    if (!userRoles || userRoles.length === 0) throw new ForbiddenException();
    // We need to look for roles metadata on both the handler (in case of function decorators)
    // as well as class level (in case of class decorators).
    const requiredRoles =
      this.reflector.get<string[] | undefined>('roles', context.getHandler()) ??
      this.reflector.get<string[] | undefined>('roles', context.getClass()) ??
      [];

    if (requiredRoles.length === 0) {
      try {
        // If no roles were provided, we will check whether the user has any of the application's roles
        return this.matchAnyRole(userRoles);
      } catch (error) {
        Logger.verbose(
          `An unauthorized request of the protected route '${request.url}' was denied because the user has not been granted access to the application.`,
          AuthGuard.name,
        );
        throw error;
      }
    } else {
      try {
        // If roles were provided, we will check whether the user has _all_ of the provided roles
        return this.matchRequiredRoles(requiredRoles, userRoles);
      } catch (error) {
        Logger.verbose(
          `An unauthorized request of the protected route '${request.url}' was denied. Roles '${requiredRoles.join(', ')}' were required, but the user only had '${userRoles.join(', ')}'.`,
          AuthGuard.name,
        );
        throw error;
      }
    }
  }

  /**
   * Checks whether the given roles match _any_ of the application roles.
   * Takes into account the current environment (non-prod, prod).
   * @param userRoles The user's roles.
   * @returns Whether the user has any of the application roles.
   */
  private matchAnyRole(userRoles: string[]): boolean {
    for (const role of Object.values(this.options.roles)) {
      if (userRoles.includes(role)) {
        return true;
      }
    }
    throw new ForbiddenException();
  }

  /**
   * Checks whether the given roles match _all_ of the required roles.
   * Takes into account the current environment (non-prod, prod).
   * @param requiredRoles The required role keys.
   * @param userRoles The user's roles.
   * @returns Whether the user has matches all of the required roles.
   */
  private matchRequiredRoles(requiredRoles: string[], userRoles: string[]): boolean {
    for (const requiredRole of requiredRoles) {
      if (!userRoles.includes(requiredRole)) throw new ForbiddenException();
    }
    return true;
  }
}
