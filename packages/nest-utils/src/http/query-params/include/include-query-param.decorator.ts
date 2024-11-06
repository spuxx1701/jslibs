import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TransformArrayString } from '../../../transformers';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Decorator that provides support for the `include` query parameter specified by JSON:API.
 * The decorator handles transformation, validation and documentation. A list of valid
 * relationship names must be provided.
 * For more information, see https://jsonapi.org/format/#fetching-includes
 * @param allowedRelationships The list of valid relationship names.
 * @example
 * // In your query object definition
 * export class CatsQuery {
 *   ＠IncludeQueryParam('owner', 'toys')
 *   include?: string[];
 * }
 * // In your controller
 * ＠Get('cats')
 * findMany(＠Query() query: CatsQuery) {
 *   // ...
 * }
 */
export function IncludeQueryParam(...allowedRelationships: string[]) {
  return (target: object, propertyName: string) => {
    TransformArrayString()(target, propertyName);
    ApiPropertyOptional({
      name: 'include',
      type: String,
      isArray: true,
      description: `A list of relationships to be fetched and included eagerly.
        See <a href="https://jsonapi.org/format/#fetching-includes" target="_blank">JSON:API specification</a>
        for details.
      
       Allowed values: ${allowedRelationships.join(', ')}`,
    })(target, propertyName);
    registerDecorator({
      target: target.constructor,
      propertyName: propertyName,
      constraints: allowedRelationships,
      validator: IncludeQueryParamConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'includeQueryParam', async: false })
class IncludeQueryParamConstraint implements ValidatorConstraintInterface {
  validate(values: string[], validationArguments: ValidationArguments): boolean {
    const allowedValues = validationArguments.constraints;
    if (!values) return true;
    for (const value of values) {
      if (!allowedValues.includes(value)) {
        return false;
      }
    }
    return true;
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    const allowedValues = validationArguments.constraints;
    return `include must only contain any of the following values: ${allowedValues.join(', ')}`;
  }
}
