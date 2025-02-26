## Classes

### UserAgent

Defined in: [user-agent.service.ts:14](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/browser-utils/src/services/user-agent/user-agent.service.ts#L14)

`UserAgent` provides functionality related to the user-agent.

#### Example

```ts
// Check whether the viewport is considered a desktop
const { isDesktop } = UserAgent;

// You may also customize UserAgent's behavior
UserAgent.setOptions({ desktopBreakpoint: 1200 });
```

#### Extends

- `any`

#### Constructors

##### new UserAgent()

> **new UserAgent**(): [`UserAgent`](user-agent.md#useragent)

###### Returns

[`UserAgent`](user-agent.md#useragent)

###### Inherited from

`ServiceMixin<UserAgent>().constructor`

#### Accessors

##### isDesktop

###### Get Signature

> **get** `static` **isDesktop**(): `boolean`

Defined in: [user-agent.service.ts:34](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/browser-utils/src/services/user-agent/user-agent.service.ts#L34)

Whether the current viewport is considered a desktop.

###### Returns

`boolean`

##### options

###### Get Signature

> **get** `static` **options**(): [`UserAgentOptions`](user-agent.md#useragentoptions)

Defined in: [user-agent.service.ts:27](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/browser-utils/src/services/user-agent/user-agent.service.ts#L27)

###### Returns

[`UserAgentOptions`](user-agent.md#useragentoptions)

#### Methods

##### setOptions()

> `static` **setOptions**(`options`): `void`

Defined in: [user-agent.service.ts:23](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/browser-utils/src/services/user-agent/user-agent.service.ts#L23)

Sets the `UserAgent`s options.

###### Parameters

###### options

`Partial`\<[`UserAgentOptions`](user-agent.md#useragentoptions)\>

(optional) The options to use.

###### Returns

`void`

## Interfaces

### UserAgentOptions

Defined in: [types.ts:1](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/browser-utils/src/services/user-agent/types.ts#L1)

#### Properties

##### desktopBreakpoint

> **desktopBreakpoint**: `number`

Defined in: [types.ts:6](https://github.com/spuxx1701/jslibs/blob/9e75110cf9e60ac27454c04289fa45add1887a86/packages/browser-utils/src/services/user-agent/types.ts#L6)

The minimum viewport width in pixels that will be considered a desktop device.
Defaults to 960 pixels.
