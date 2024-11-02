import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';
import { Controller, Get, Query, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { authExceptions } from '../config/auth.exceptions';
import { AuthService } from '../providers/auth.service';
import { AuthLoginLogoutQuery } from './queries/login-logout.query';
import { SessionResource } from '../resources/session.resource';
import { AuthGuard } from '../guards/auth.guard';

/**
 * The authentication controller.
 */
@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('login')
  @ApiOperation({
    summary: 'Log into the application.',
    description: `This endpoint will redirect the caller to the IDP's login page. This will trigger
    the OIDC Authorization Code flow (with PKCE). After successful login, the IDP will then redirect
    the caller to the application's /auth/callback endpoint to hand over the code.
    Finally, the application will redirect to the default or the provided URL.

    ℹ Note that this endpoint returns a redirect. Calling the endpoint in SwaggerUI has no effect.`,
  })
  @ApiQuery({
    name: 'returnTo',
    description: `You may provide a (URI-encoded) URL that the application will redirect to after a
    successful login. By default, you'll be redirected to /auth/session. Redirect URLs match the
    allowed CORS origins or specific application endpoints. If the default route should not be used,
    the route must be absolute.`,
    type: String,
    required: false,
  })
  @ApiResponse({
    description: `Redirects to the IDP's login page.

    ℹ After a successful login, the session tokens will be provided in two cookies. You need to
    include these cookies into any further requests.`,
    status: 302,
  })
  @ApiException(() => Object.values(authExceptions.login))
  async login(
    @Query(new ValidationPipe({ whitelist: true }))
    query: AuthLoginLogoutQuery,
    @Res() response: Response,
  ) {
    await this.service.handleLogin(response, { ...query });
  }

  @Get('session')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get information about the current session state.',
    description: `Will look for session tokens in the request's cookies. If tokens are found and
    deemed valid, the session details will be returned. Otherwise, the endpoint will return a 401.

    🔒 Application access`,
  })
  @ApiOkResponse({
    description: 'The session resource.',
    type: SessionResource,
  })
  @ApiException(() => Object.values(authExceptions.session))
  getSession(@Req() request: Request): SessionResource {
    return this.service.getSession(request);
  }

  @Get('logout')
  @ApiOperation({
    summary: 'Log out of the application.',
    description: `Will sign you out of the application by invalidating both the session cookie as
    well as validating the token on the IDP.
    Finally, the application will redirect to the default or the provided URL.

    ℹ Note that this endpoint returns a redirect. Calling the endpoint in SwaggerUI has no effect.`,
  })
  @ApiQuery({
    name: 'returnTo',
    description: `You may provide an (URI-encoded) URL that the application will redirect to after a successful
      logout. By default, you'll be redirected to /auth/session. Redirect URLs match the allowed
      CORS origins or specific application endpoints.`,
    type: String,
    required: false,
  })
  @ApiException(() => Object.values(authExceptions.logout))
  async logout(
    @Query(new ValidationPipe({ whitelist: true }))
    query: AuthLoginLogoutQuery,
    @Res() response: Response,
  ) {
    await this.service.handleLogout(response, { ...query });
  }
}
