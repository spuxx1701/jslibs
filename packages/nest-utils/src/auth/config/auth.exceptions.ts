import { BadRequestException, UnauthorizedException } from '@nestjs/common';

export const authExceptions = {
  login: {
    badRequest: new BadRequestException(),
    forbiddenReturnTo: new BadRequestException(
      "The value of 'returnTo' is not allowed. Redirect URLs must match the allowed CORS origins \
or specific application endpoints. The URL must be absolute!",
    ),
    urlParsingError: new BadRequestException('An error occurred while parsing the redirect URL.'),
  },
  session: {
    unauthorized: new UnauthorizedException(),
  },
  logout: {
    badRequest: new BadRequestException(),
    forbiddenReturnTo: new BadRequestException(
      "The value of 'returnTo' is not allowed. Redirect URLs must match the allowed CORS origins \
or specific application endpoints.",
    ),
  },
};
