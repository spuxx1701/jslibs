import { Request } from 'express';
import { RequestContext } from 'express-openid-connect';
import { getSession, isAuthenticated } from './auth.utils';
import { SessionResource } from '../resources/session.resource';

describe('getSession', () => {
  it('should return the session resource', () => {
    const session: SessionResource = {
      sub: crypto.randomUUID(),
      sid: crypto.randomUUID(),
      email: 'john.doe@gmail.com',
      email_verified: true,
      groups: ['user', 'admin'],
      locale: 'en',
      given_name: 'John',
      last_name: 'Doe',
      name: 'John Doe',
      preferred_username: 'jd',
    };
    const request = {
      oidc: {
        user: session,
      } as unknown as RequestContext,
    } as Request;
    expect(getSession(request)).toStrictEqual(session);
  });

  it('should return undefined', () => {
    const request = {
      oidc: {
        user: undefined,
      },
    } as Request;
    expect(getSession(request)).toBeUndefined();
  });
});

describe('isAuthenticated', () => {
  it('should return true', () => {
    const request = {
      oidc: {
        isAuthenticated: () => true,
      } as RequestContext,
    } as Request;
    expect(isAuthenticated(request)).toBe(true);
  });

  it('should return false', () => {
    const request = {
      oidc: {
        isAuthenticated: () => false,
      } as RequestContext,
    } as Request;
    expect(isAuthenticated(request)).toBe(false);
  });
});
