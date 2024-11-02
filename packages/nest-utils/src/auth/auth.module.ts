import { DynamicModule, Global, INestApplication, Logger, Module } from '@nestjs/common';
import { defaultAuthOptions, type AuthOptions } from '../main';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './providers/auth.service';
import { deepMerge } from '@spuxx/js-utils';
import { AuthOptionsProvider } from './providers/auth-options.provider';

/**
 * The authentication module. This module is responsible for handling authentication and
 * authorization. It is based on the `express-openid-connect?` library and is intended
 * for use with an OIDC provider.
 * @example
 * // main.ts
 * import { AuthModule, AuthOptions } from '@nestjs-oidc/core';
 * const authConfig: AuthOptions = {
 *   // This is the minimum set of options you need to provide
 *   roles: {
 *     admin: "admin",
 *     user: "user",
 *     // ... more roles ...
 *   },
 *   oidc: {
 *     issuerBaseURL: 'https://example.com',
 *     baseURL: 'http://localhost:3000',
 *     clientID: 'client-id',
 *     clientSecret: 'client-secret',
 *     secret: 'session-secret',
 *   }
 * }
 * await AuthModule.bootstrap(app, authConfig);
 *
 * // app.module.ts
 * import { AuthModule } from '@nestjs-oidc/core';
 * ＠Module({
 *   imports: [AuthModule.forRoot(authConfig)],
 * })
 * export class AppModule {}
 */
@Global()
@Module({})
export class AuthModule {
  /**
   * Bootstraps authentication. This must be called during application bootstrapping.
   * @param app The Nest application instance.
   * @param options The authentication options.
   */
  static async bootstrap(app: INestApplication, options: AuthOptions) {
    const mergedOptions = this.mergeOptionsWithDefaultValues(options);
    const { disable, oidc } = mergedOptions;
    if (disable) {
      Logger.warn('Authentication is disabled. All routes will be accessible.', AuthModule.name);
      return;
    }
    const { auth } = await import('express-openid-connect');
    app.use(auth(oidc));
    Logger.log(
      `Authentication is enabled and will be handled by issuer at '${oidc.issuerBaseURL}'.`,
      AuthModule.name,
    );
  }

  static forRoot(options: AuthOptions): DynamicModule {
    return {
      module: AuthModule,
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: AuthOptionsProvider,
          useValue: new AuthOptionsProvider(this.mergeOptionsWithDefaultValues(options)),
        },
      ],
      exports: [AuthService, AuthOptionsProvider],
    };
  }

  static mergeOptionsWithDefaultValues(options: AuthOptions) {
    const mergedOptions = deepMerge(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      defaultAuthOptions as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options as any,
    ) as unknown as AuthOptions;
    return mergedOptions;
  }
}
