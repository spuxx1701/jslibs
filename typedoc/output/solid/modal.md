## Classes

### Modal

Defined in: [modal.service.tsx:23](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.service.tsx#L23)

The `Modal` service provides global access to modal dialogs.

#### Example

```tsx
// Provide ModalPortal somewhere in your application
import { Modal, ModalPortal, ConfirmModal } from '@spuxx/solid';
<ModalPortal />;

// Show a modal dialog
Modal.show(ConfirmModal, { title: 'Hello World!' });
```

#### Extends

- `any`

#### Constructors

##### new Modal()

> **new Modal**(): [`Modal`](modal.md#modal)

###### Returns

[`Modal`](modal.md#modal)

###### Inherited from

`ServiceMixin<Modal>().constructor`

#### Properties

##### state

> **state**: `any`

Defined in: [modal.service.tsx:24](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.service.tsx#L24)

#### Accessors

##### state

###### Get Signature

> **get** `static` **state**(): `ModalState`

Defined in: [modal.service.tsx:45](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.service.tsx#L45)

Returns the current state of the modal. The state is read-only.

###### Returns

`ModalState`

#### Methods

##### close()

> `static` **close**(): `Promise`\<`void`\>

Defined in: [modal.service.tsx:38](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.service.tsx#L38)

Closes the modal dialog that is currently open, if there is one.

###### Returns

`Promise`\<`void`\>

##### setState()

> `static` **setState**(`newState`): `void`

Defined in: [modal.service.tsx:54](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.service.tsx#L54)

Sets the current state of the modal. You should avoid manipulating the modal state directly
and instead use `Modal.show()` and `Modal.close()`.

###### Parameters

###### newState

`ModalState`

###### Returns

`void`

##### show()

> `static` **show**\<`TOptions`\>(`modal`, `options`): `void`

Defined in: [modal.service.tsx:31](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.service.tsx#L31)

Shows the modal dialog of the given type and with the given options.

###### Type Parameters

• **TOptions** _extends_ [`ModalOptions`](modal.md#modaloptions)

###### Parameters

###### modal

`Component`\<`Options`\>

###### options

`TOptions`

The options to pass to the modal.

###### Returns

`void`

## Interfaces

### ConfirmModalOptions

Defined in: [built-in/confirm.modal.tsx:10](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L10)

#### Extends

- [`ModalOptions`](modal.md#modaloptions)

#### Properties

##### cancelColor?

> `optional` **cancelColor**: `any`

Defined in: [built-in/confirm.modal.tsx:65](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L65)

The color of the cancel button.

###### Default

```ts
'primary';
```

##### cancelIcon?

> `optional` **cancelIcon**: `string`

Defined in: [built-in/confirm.modal.tsx:60](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L60)

The icon of the cancel button.

###### Default

```ts
undefined;
```

##### cancelLabel

> **cancelLabel**: `string`

Defined in: [built-in/confirm.modal.tsx:55](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L55)

The label of the cancel button.

##### color?

> `optional` **color**: `BaseColor`

Defined in: [built-in/confirm.modal.tsx:19](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L19)

A color to apply to the modal.

###### Default

```ts
undefined;
```

##### confirmColor?

> `optional` **confirmColor**: `any`

Defined in: [built-in/confirm.modal.tsx:46](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L46)

The color of the confirm button.

###### Default

```ts
'primary';
```

##### confirmIcon?

> `optional` **confirmIcon**: `string`

Defined in: [built-in/confirm.modal.tsx:41](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L41)

The icon of the confirm button.

###### Default

```ts
undefined;
```

##### confirmLabel

> **confirmLabel**: `string`

Defined in: [built-in/confirm.modal.tsx:36](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L36)

The label of the confirm button.

##### content

> **content**: `string`

Defined in: [built-in/confirm.modal.tsx:28](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L28)

The content of the modal. This can be a string or a JSX element.

##### icon?

> `optional` **icon**: `string`

Defined in: [built-in/confirm.modal.tsx:24](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L24)

The icon of the modal.

###### Default

```ts
undefined;
```

##### onCancel()?

> `optional` **onCancel**: () => `void`

Defined in: [built-in/confirm.modal.tsx:51](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L51)

A callback function that will be called when the cancel button is clicked.
By default, it will simply call `Modal.close()` unless overriden.

###### Returns

`void`

##### onClose()?

> `optional` **onClose**: () => `void`

Defined in: [modal.types.ts:17](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L17)

Will be called when the modal is closed.

###### Returns

`void`

###### Inherited from

[`ModalOptions`](modal.md#modaloptions).[`onClose`](modal.md#onclose-1)

##### onConfirm()

> **onConfirm**: () => `void`

Defined in: [built-in/confirm.modal.tsx:32](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L32)

A callback function that will be called when the confirm button is clicked.

###### Returns

`void`

##### preventClose?

> `optional` **preventClose**: `boolean`

Defined in: [modal.types.ts:13](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L13)

Whether the modal can be closed by clicking outside of it or pressing escape.
When enabled, the close button will not be visible. Defaults to `false`.

###### Inherited from

[`ModalOptions`](modal.md#modaloptions).[`preventClose`](modal.md#preventclose-1)

##### size?

> `optional` **size**: `ModalSize`

Defined in: [modal.types.ts:8](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L8)

The size of the modal. Defaults to 'auto'.

###### Inherited from

[`ModalOptions`](modal.md#modaloptions).[`size`](modal.md#size-1)

##### title

> **title**: `string`

Defined in: [built-in/confirm.modal.tsx:14](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L14)

The title of the modal.

---

### ModalOptions

Defined in: [modal.types.ts:4](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L4)

#### Extended by

- [`ConfirmModalOptions`](modal.md#confirmmodaloptions)

#### Properties

##### onClose()?

> `optional` **onClose**: () => `void`

Defined in: [modal.types.ts:17](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L17)

Will be called when the modal is closed.

###### Returns

`void`

##### preventClose?

> `optional` **preventClose**: `boolean`

Defined in: [modal.types.ts:13](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L13)

Whether the modal can be closed by clicking outside of it or pressing escape.
When enabled, the close button will not be visible. Defaults to `false`.

##### size?

> `optional` **size**: `ModalSize`

Defined in: [modal.types.ts:8](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L8)

The size of the modal. Defaults to 'auto'.

---

### ModalRegistry

Defined in: [modal.types.ts:25](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L25)

The `ModalRegistry` interface represents a registry of modal types. Whenever you create
a new modal component, you need to add it to the registry.

## Type Aliases

### ModalComponent\<Options\>

> **ModalComponent**\<`Options`\>: `Component`\<`Options`\>

Defined in: [modal.types.ts:26](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L26)

#### Type Parameters

• **Options** _extends_ [`ModalOptions`](modal.md#modaloptions)

---

### Modals

> **Modals**: `Record`\<`string`, `Component`\>

Defined in: [modal.types.ts:27](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal.types.ts#L27)

## Variables

### ConfirmModal

> `const` **ConfirmModal**: [`ModalComponent`](modal.md#modalcomponentoptions)\<[`ConfirmModalOptions`](modal.md#confirmmodaloptions)\>

Defined in: [built-in/confirm.modal.tsx:68](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/built-in/confirm.modal.tsx#L68)

---

### ModalPortal

> `const` **ModalPortal**: `Component`

Defined in: [modal-portal.component.tsx:14](https://github.com/spuxx1701/jslibs/blob/1a7e07eeae1e7166b7fbfc153430c6402621f270/packages/solid/src/modal/modal-portal.component.tsx#L14)

Place this component anywhere in your application to make it the portal node for modals.
After that, you may call [Modal](modal.md#modal) to show and control modal dialogs.

#### Example

```tsx
// App.tsx
<ModalPortal />
```
