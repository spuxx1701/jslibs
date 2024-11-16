/* eslint-disable @typescript-eslint/naming-convention */
import { ConfigParams as ExpressOidcConfig } from 'express-openid-connect';

export interface AuthOptions {
  /**
   * Whether authentication should be disabled.
   * @default false
   */
  disable?: boolean;
  /**
   * The list of external hostnames the service is allowed to redirect to after login or logout.
   * Local redirects are always allowed.
   * @default []
   */
  allowedRedirectHostnames?: string[];
  /**
   * The URL that should be used as the default redirect URL after login or logout.
   * @default 'auth/session'
   */
  defaultRedirectUrl?: string;
  /**
   * The record of roles available in the application.
   */
  roles?: Record<string, string>;
  /**
   * Configuration parameters passed to `express-openid-connect`. For documentation, see:
   * https://auth0.github.io/express-openid-connect/interfaces/ConfigParams.html
   */
  oidc?: ExpressOidcConfig;
}

type DefaultAuthOptions = Partial<Omit<AuthOptions, 'oidc'>> & Pick<AuthOptions, 'oidc'>;

/**
 * Default values for the authentication options.
 */
export const defaultAuthOptions: DefaultAuthOptions = {
  disable: false,
  allowedRedirectHostnames: [],
  defaultRedirectUrl: '/',
  oidc: {
    errorOnRequiredAuth: true,
    authRequired: false,
    auth0Logout: false,
    idpLogout: true,
    enableTelemetry: false,
    authorizationParams: {
      response_type: 'code',
      response_mode: 'query',
      scope: 'openid profile email roles',
    },
    session: {
      name: `${process.env.npm_package_name}-session`,
    },
    routes: {
      login: false, // Is overwritten in AuthController
      logout: false, // Is overwritten in AuthController
      callback: '/auth/callback',
    },
  },
};
