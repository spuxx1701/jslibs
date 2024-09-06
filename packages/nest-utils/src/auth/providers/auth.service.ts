import { Injectable, Logger } from '@nestjs/common';
import { authExceptions } from '../config/auth.exceptions';
import type { Request, Response } from 'express';
import { SessionResource } from '../resources/session.resource';
import { plainToInstance } from 'class-transformer';
import { AuthOptionsProvider } from './auth-options.provider';

/**
 * The authentication service.
 */
@Injectable()
export class AuthService {
  constructor(private readonly optionsProvider: AuthOptionsProvider) {}

  get options() {
    return this.optionsProvider.options;
  }

  /**
   * Handles incoming login requests. Will redirect to the IDP's login page.
   * @param response The response object.
   * @param options.returnTo (optional) If provided, will attempt to redirect to the given URL after login.
   */
  async handleLogin(response: Response, options: { returnTo?: string }): Promise<void> {
    const { returnTo } = options;
    this.validateReturnTo(returnTo);
    return response.oidc.login({ returnTo: returnTo ?? this.options.defaultRedirectUrl });
  }

  /**
   * Handles incoming logout requests.
   * @param response The response object.
   * @param options.returnTo (optional) If provided, will attempt to redirect to the given URL after logout.
   */
  async handleLogout(response: Response, options: { returnTo?: string }): Promise<void> {
    const { returnTo } = options;
    this.validateReturnTo(returnTo);
    return response.oidc.logout({ returnTo: returnTo ?? this.options.defaultRedirectUrl });
  }

  /**
   * Extracts session details from the request object.
   * @param request The express request object.
   * @returns The session resource.
   */
  getSession(request: Request): SessionResource {
    const session: SessionResource = plainToInstance(SessionResource, request.oidc.user, {
      enableImplicitConversion: true,
      excludeExtraneousValues: false,
      strategy: 'excludeAll',
    });
    return session;
  }

  /**
   * Validates the `returnTo` query parameter against the list of allowed redirect URLs.
   * The list of allowed redirect URLs contain all allowed CORS origins as well as
   * specific URLs (like /swagger or /swagger-json). Will throw an exception
   * if validation fails.
   * @param returnTo The value of `returnTo`.
   * @returns Whether the value of `returnTo` is valid.
   */
  private validateReturnTo(returnTo?: string): boolean {
    let match: string;
    try {
      if (!returnTo) returnTo = this.options.defaultRedirectUrl;
      const { allowedRedirectHostnames } = this.options;
      // If `returnTo` starts with a slash, it is a local redirect and will be allowed.
      if (returnTo.startsWith('/')) return true;
      const returnToUrl = new URL(returnTo);
      match = allowedRedirectHostnames.find((hostname) => returnToUrl.host === hostname);
    } catch (error) {
      Logger.error(`Failed to validate 'returnTo=${returnTo}': ${error}`);
      throw authExceptions.login.urlParsingError;
    }
    Logger.verbose(`'returnTo=${returnTo}' failed the validation during login or logout.`, AuthService.name);
    if (match) return true;
    else throw authExceptions.login.forbiddenReturnTo;
  }
}
