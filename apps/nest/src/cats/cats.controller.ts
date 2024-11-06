import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Cat } from './cats.models';
import { CatsProvider } from './cats.provider';
import { CatReadResource } from './cats.resource';
import { Mapper } from 'packages/nest-utils/dist/main';
import { CatsFindManyQuery } from './cats.queries';

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
@ApiTags('Cats')
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
