import { TestContainer } from '@spuxx/nest-testing';
import { AuthModule } from './auth.module';
import { AUTH_OPTIONS_KEY, AuthService, defaultAuthOptions } from '../main';

describe('AuthModule', () => {
  it('should be ok', async () => {
    const container = await TestContainer.create({
      imports: [AuthModule.forRoot({})],
    });
    const { module } = container;
    expect(module.get(AuthService)).toBeInstanceOf(AuthService);
    expect(module.get(AUTH_OPTIONS_KEY)).toEqual(defaultAuthOptions);
  });

  it('should merge the given options', async () => {
    const container = await TestContainer.create({
      imports: [
        AuthModule.forRoot({
          disable: true,
          oidc: {
            clientID: 'foo',
          },
        }),
      ],
    });
    const { module } = container;
    expect(module.get(AuthService)).toBeInstanceOf(AuthService);
    expect(module.get(AUTH_OPTIONS_KEY)).toEqual({
      ...defaultAuthOptions,
      disable: true,
      oidc: {
        ...defaultAuthOptions.oidc,
        clientID: 'foo',
      },
    });
  });

  it('should be ok when enabling end-to-end testing', async () => {
    const container = await TestContainer.create({
      imports: [AuthModule.forRoot({})],
      enableEndToEnd: true,
    });
    const { module } = container;
    expect(module.get(AuthService)).toBeInstanceOf(AuthService);
    expect(module.get(AUTH_OPTIONS_KEY)).toEqual(defaultAuthOptions);
  });
});
