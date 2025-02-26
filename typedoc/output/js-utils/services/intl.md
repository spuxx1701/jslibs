## Classes

### Intl

Defined in: [intl.service.ts:17](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L17)

`Intl` is a sigleton that provides i18n-related functionalities.
Instead of using it directly, you may also simply use the `intl()` function.

#### Extends

- `any`

#### Constructors

##### new Intl()

> **new Intl**(): [`Intl`](intl.md#intl)

###### Returns

[`Intl`](intl.md#intl)

###### Inherited from

`ServiceMixin<Intl>().constructor`

#### Accessors

##### currentDictionary

###### Get Signature

> **get** `static` **currentDictionary**(): `any`

Defined in: [intl.service.ts:87](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L87)

###### Returns

`any`

##### currentLocale

###### Get Signature

> **get** `static` **currentLocale**(): `any`

Defined in: [intl.service.ts:73](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L73)

###### Returns

`any`

##### dictionaries

###### Get Signature

> **get** `static` **dictionaries**(): `any`

Defined in: [intl.service.ts:80](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L80)

###### Returns

`any`

##### fallbackLocale

###### Get Signature

> **get** `static` **fallbackLocale**(): `any`

Defined in: [intl.service.ts:66](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L66)

###### Returns

`any`

##### missingLocalizationPrefix

###### Get Signature

> **get** `static` **missingLocalizationPrefix**(): `string`

Defined in: [intl.service.ts:126](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L126)

Keys that cannot be translated due to missing localization will be returned and
prefixed with this string.

###### Returns

`string`

#### Methods

##### setLocale()

> `static` **setLocale**(`locale`): `void`

Defined in: [intl.service.ts:51](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L51)

###### Parameters

###### locale

`string`

###### Returns

`void`

##### setup()

> `static` **setup**(`options`): `void`

Defined in: [intl.service.ts:36](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L36)

Sets up `Intl` with the given options. Needs to be called at application startup.

###### Parameters

###### options

`SetupOptions`

The options to use.

###### Returns

`void`

###### Example

```ts
// Using '@modyfi/vite-plugin-yaml' to import yaml files like modules
// See: https://github.com/Modyfi/vite-plugin-yaml
import { Intl } from '@spuxx/js-utils';
import de from './translations/de.yml';

Intl.setup({
  dictionaries: [{ locale: 'de', values: de }],
  fallbackLocale: 'de',
});
```

##### translate()

> `static` **translate**(`key`, `vars`?): `any`

Defined in: [intl.service.ts:108](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L108)

Translates the given key.

###### Parameters

###### key

`string`

The key to translate.

###### vars?

`Record`\<`string`, `string`\>

###### Returns

`any`

The translated value.

###### Example

```ts
// Using the service directly:
Intl.translate('foo');
// Or using the shorthand:
intl('foo');

// Using variables:
Intl.translate('foo', { bar: 'baz' });
// foo: 'Hello {bar}' -> 'Hello baz'
```

## Interfaces

### Dictionary

Defined in: [intl.service.ts:4](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L4)

#### Properties

##### locale

> **locale**: `string`

Defined in: [intl.service.ts:5](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L5)

##### values

> **values**: `Record`\<`string`, `unknown`\>

Defined in: [intl.service.ts:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L6)

## Variables

### intl

> `const` **intl**: `any`

Defined in: [intl.service.ts:149](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/js-utils/src/services/intl/intl.service.ts#L149)
