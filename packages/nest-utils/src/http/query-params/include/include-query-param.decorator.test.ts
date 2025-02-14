import { describe, it, expect } from 'vitest';
import { IncludeQueryParam } from './include-query-param.decorator';
import { ArgumentMetadata, BadRequestException, ValidationPipe } from '@nestjs/common';
describe('IncludeQueryParam', () => {
  class Query {
    @IncludeQueryParam('foo', 'bar')
    include: string[];
  }
  const transformMetadata: ArgumentMetadata = {
    type: 'query',
    metatype: Query,
    data: '',
  };
  const pipe = new ValidationPipe({
    transform: true,
  });

  it('should pass if include is empty, undefined or null', async () => {
    await expect(pipe.transform({ include: '' }, transformMetadata)).resolves.toEqual({
      include: [],
    });
    await expect(pipe.transform({ include: [] as string[] }, transformMetadata)).resolves.toEqual({
      include: [],
    });
    await expect(pipe.transform({ include: undefined }, transformMetadata)).resolves.toEqual({
      include: [],
    });
    await expect(pipe.transform({ include: null }, transformMetadata)).resolves.toEqual({
      include: [],
    });
    await expect(pipe.transform({}, transformMetadata)).resolves.toEqual({
      include: undefined,
    });
  });

  it('should pass if include contains only allowed values', async () => {
    await expect(pipe.transform({ include: ['foo', 'bar'] }, transformMetadata)).resolves.toEqual({
      include: ['foo', 'bar'],
    });
    await expect(pipe.transform({ include: ['foo'] }, transformMetadata)).resolves.toEqual({
      include: ['foo'],
    });
    await expect(pipe.transform({ include: ['bar'] }, transformMetadata)).resolves.toEqual({
      include: ['bar'],
    });
  });

  it('should fail if include contains any disallowed values', async () => {
    await expect(pipe.transform({ include: ['foo', 'baz'] }, transformMetadata)).rejects.toThrow(
      BadRequestException,
    );
    await expect(pipe.transform({ include: ['foz'] }, transformMetadata)).rejects.toThrow(
      BadRequestException,
    );
  });
});
