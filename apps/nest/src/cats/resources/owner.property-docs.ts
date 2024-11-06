import { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';

export const ownerPropertyDocs = {
  name: {
    name: 'name',
    description: 'The name of the owner',
    example: 'John Doe',
  } as ApiPropertyOptions & ApiParamOptions,

  age: {
    name: 'age',
    description: 'The age of the owner',
    example: 30,
  } as ApiPropertyOptions,
};
