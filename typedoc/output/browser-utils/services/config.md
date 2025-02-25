## Classes

### Config

Defined in: [config.service.ts:52](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/config.service.ts#L52)

`Config` is a service that provides access to the application's configuration.
It supports providing a default configuration during setup as well as retrieving
configuration values from `VITE_` environment variables and configuration values
injected into the global `window` object. It can also check whether the configuration
contains all required key-value-pairs at the end of the setup process.

#### Example

```ts
// Start by defining the configuration interface anywhere in your project.
interface MyConfig {
  apiUrl: string;
  logLevel: LogLevel;
}
// Call `Config.setup()` while bootstrapping your application to initialize the service.
Config.setup<MyConfig>();
// You can now access the configuration values anywhere in your project.
const { apiUrl } = Config.getConfig<MyConfig>();

// You may provide a default configuration during setup.
Config.setup<MyConfig>({ defaultConfig: { apiUrl: 'http://localhost:3000', logLevel: 'debug' } });

// You may also provide Vite's `import.meta.env` object to the setup process to enable the service
// to access Vite's environment variables.
Config.setup<MyConfig>({ importMetaEnv: import.meta.env });

// You may also provide a list of required keys that will be checked at the end of the setup process.
// If a required key remains undefined or an empty value after the setup process has finished,
// an error will be thrown.
Config.setup<MyConfig>({ requiredKeys: ["apiUrl"] });

// You may also provide a custom key for the injected config. By default, 'INJECTED_CONFIG' is used.
Config.setup<MyConfig>({ injectedConfigKey: "MY_INJECTED_CONFIG" });

// If you want to use a injected config via e.g. NGINX, make sure to reference the script that
// injects the config object in your `index.html`.
<script type="text/javascript" src="/injected-config.js"></script>

// In some cases, you might want to setup `Config` very early during your application's bootstrapping process,
// e.g. to make sure that is already available when you start importing other modules. In this case, you can
// create a separate file to setup `Config` and import that first:

// setup-config.ts
Config.setup<MyConfig>({ requiredKeys: ["apiUrl"] });

// main.tsx
import './setup-config';
// Now you can import other modules that rely on the configuration.
```

#### Extends

- `any`

#### Constructors

##### new Config()

> **new Config**(): [`Config`](config.md#config)

###### Returns

[`Config`](config.md#config)

###### Inherited from

`ServiceMixin<Config>().constructor`

#### Methods

##### getConfig()

> `static` **getConfig**\<`TConfig`\>(): `TConfig`

Defined in: [config.service.ts:77](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/config.service.ts#L77)

###### Type Parameters

• **TConfig**

###### Returns

`TConfig`

##### getOptions()

> `static` **getOptions**\<`TConfig`\>(): [`ConfigOptions`](config.md#configoptionstconfig)\<`TConfig`\>

Defined in: [config.service.ts:70](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/config.service.ts#L70)

###### Type Parameters

• **TConfig**

###### Returns

[`ConfigOptions`](config.md#configoptionstconfig)\<`TConfig`\>

##### setup()

> `static` **setup**\<`TConfig`\>(`options`?): `void`

Defined in: [config.service.ts:60](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/config.service.ts#L60)

Sets up `Config` with the given options. Needs to be called at application startup.

###### Type Parameters

• **TConfig**

###### Parameters

###### options?

[`ConfigOptions`](config.md#configoptionstconfig)\<`TConfig`\>

(optional) The options to use.

###### Returns

`void`

## Interfaces

### ConfigOptions\<TConfig\>

Defined in: [types.ts:1](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/types.ts#L1)

#### Type Parameters

• **TConfig**

#### Properties

##### defaultConfig?

> `optional` **defaultConfig**: `Partial`\<`TConfig`\>

Defined in: [types.ts:7](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/types.ts#L7)

(optional) You may provide a default config object. This will be merged with
Vite's `import.meta.env` as well as any config injected into the window object.
The hierarchy during the merge is as follows: defaultConfig < Vite config < injected config.

##### importMetaEnv?

> `optional` **importMetaEnv**: `ImportMetaEnv`

Defined in: [types.ts:23](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/types.ts#L23)

(optional) You may provide Vite's `import.meta.env` object. If you do, it will be used
to be merged with the default config and the injected config. This is useful for testing and
during development.

##### injectedConfigKey?

> `optional` **injectedConfigKey**: `string`

Defined in: [types.ts:17](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/types.ts#L17)

(optional) The key under which the injected config is stored in the window object.
Defaults to 'INJECTED_CONFIG'.

##### requiredKeys?

> `optional` **requiredKeys**: keyof `TConfig`[]

Defined in: [types.ts:12](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/browser-utils/src/services/config/types.ts#L12)

(optional) You may provide a list of keys that are required to be defined at the end
of the setup procedure. If any of these keys are not defined, an error will be thrown.
