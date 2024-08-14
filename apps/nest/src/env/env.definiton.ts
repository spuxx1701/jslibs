import { IsDate, IsString } from 'class-validator';

export class Environment {
  @IsString()
  APP_NAME: string = 'nest';

  @IsDate()
  START_TIME: Date;
}
