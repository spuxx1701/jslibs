import { Request } from 'express';
import { SessionResource } from '../resources/session.resource';

/**
 * Attempts to extract the user session from the given request.
 * @param request The request.
 * @returns The user session or undefined if there is non.
 */
export function getSession(request: Request): SessionResource | undefined {
  return request.oidc.user as SessionResource | undefined;
}

/**
 * Checks whether the given request is authenticated.
 * @param request The request.
 * @returns Whether the request is authenticated.
 */
export function isAuthenticated(request: Request): boolean {
  return request.oidc.isAuthenticated();
}
