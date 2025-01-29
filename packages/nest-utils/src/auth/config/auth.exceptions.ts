import { BadRequestException, UnauthorizedException } from '@nestjs/common';

export const authExceptions = {
  login: {
    badRequest: new BadRequestException(),
    forbiddenReturnTo: new BadRequestException("The value of 'returnTo' is not allowed."),
    urlParsingError: new BadRequestException('An error occurred while parsing the redirect URL.'),
  },
  session: {
    unauthorized: new UnauthorizedException(),
  },
  logout: {
    badRequest: new BadRequestException(),
    forbiddenReturnTo: new BadRequestException("The value of 'returnTo' is not allowed."),
  },
};
