import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AuthLoginLogoutQuery {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: `An URL you want the service to redirect to after the login or logout flow has been completed.
      By default, it will redirect to an endpoint determined by the application.`,
  })
  returnTo?: string;
}
