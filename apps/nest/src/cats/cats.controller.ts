import {
  BadRequestException,
  Controller,
  Get,
  Query,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatsProvider } from './cats.provider';
import { Mapper } from 'packages/nest-utils/dist/main';
import { CatsFindManyQuery } from './cats.queries';
import { CatReadResource } from './resources/cat.read.resource';
import { Cat } from './models/cat.model';

import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiException } from '@nanogiants/nestjs-swagger-api-exception-decorator';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}

@Controller('cats')
@UsePipes(
  new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    whitelist: true,
  }),
)
@UseFilters(GlobalExceptionFilter)
@ApiTags('Cats')
@ApiException(() => BadRequestException)
export class CatsController {
  constructor(
    private readonly provider: CatsProvider,
    private readonly mapper: Mapper,
  ) {}
  @Get()
  @ApiOperation({
    summary: 'Get all cats.',
    description: 'Returns an array of cats.',
  })
  findMany(@Query() query: CatsFindManyQuery): CatReadResource[] {
    return this.provider.findMany(query).map((cat) => this.mapper.map(cat, Cat, CatReadResource));
  }
}
