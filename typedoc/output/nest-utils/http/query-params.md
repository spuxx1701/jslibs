

## Functions

### IncludeQueryParam()

> **IncludeQueryParam**(...`allowedRelationships`): (`target`, `propertyName`) => `void`

Defined in: [include-query-param.decorator.ts:28](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/nest-utils/src/http/query-params/include/include-query-param.decorator.ts#L28)

Decorator that provides support for the `include` query parameter specified by JSON:API.
The decorator handles transformation, validation and documentation. A list of valid
relationship names must be provided.
For more information, see https://jsonapi.org/format/#fetching-includes

#### Parameters

##### allowedRelationships

...`string`[]

The list of valid relationship names.

#### Returns

`Function`

##### Parameters

###### target

`object`

###### propertyName

`string`

##### Returns

`void`

#### Example

```ts
// In your query object definition
export class CatsQuery {
  ＠IncludeQueryParam('owner', 'toys')
  include?: string[];
}
// In your controller
＠Get('cats')
findMany(＠Query() query: CatsQuery) {
  // ...
}
```
