## Colors and Themes

### Custom Colors

Types for default colors provided by `@spuxx/styles` are defined in [`src/types/registry.ts`](packages/solidsrc/types/registry.ts).
Custom colors can be added in a type-safe way by extending the `ColorRegistry` interface.

```ts
import { Colors } from '@spuxx/solid';

declare module '@spuxx/solid' {
  interface ColorRegistry {
    myCustomColor: 'my-custom-color';
  }
}
```
