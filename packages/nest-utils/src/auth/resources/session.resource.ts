/* eslint-disable @typescript-eslint/naming-convention */
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SessionResource {
  @Expose()
  @ApiProperty({
    description: "The IDP subject (the user's unique id).",
    example: '1234567890',
  })
  sub: string;

  @Expose()
  @ApiProperty({
    description: 'The IDP session id.',
    example: '1234567890',
  })
  sid: string;

  @Expose()
  @ApiProperty({
    description: "The user's full name.",
    example: 'John Deer',
  })
  name: string;

  @Expose()
  @ApiProperty({
    description: "The user's first name.",
    example: 'John',
  })
  given_name: string;

  @Expose()
  @ApiProperty({
    description: "The user's last name.",
    example: 'Deer',
  })
  last_name: string;

  @Expose()
  @ApiProperty({
    description: "The user's email address.",
    example: 'john.deer@gmail.com',
  })
  email: string;

  @Expose()
  @ApiProperty({
    description: 'Whether the user has verified their email.',
    example: true,
  })
  email_verified: boolean;

  @Expose()
  @ApiProperty({
    description: "The user's chosen locale.",
    example: 'de',
  })
  locale: string;

  @Expose()
  @ApiProperty({
    description: 'The (client) roles the user has been assigned.',
    example: {
      roles: ['admin', 'user'],
    },
    type: String,
    isArray: true,
  })
  groups: string[];
}
