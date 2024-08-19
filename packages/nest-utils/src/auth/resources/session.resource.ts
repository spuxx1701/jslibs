/* eslint-disable @typescript-eslint/naming-convention */
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RealmAccess {
  @Expose()
  @ApiProperty({
    description: "The user's realm roles.",
    example: ['admin', 'user'],
  })
  roles: string[];
}

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
    description: 'The permissions the user has on the realm.',
    example: {
      roles: ['admin', 'user'],
    },
    type: RealmAccess,
  })
  realm_access: RealmAccess;
}
