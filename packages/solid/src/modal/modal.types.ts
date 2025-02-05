import { ModalSize } from '@spuxx/browser-utils';
import { Component } from 'solid-js';

export interface ModalOptions {
  /**
   * The size of the modal. Defaults to 'auto'.
   */
  size?: ModalSize;
  /**
   * Whether the modal can be closed by clicking outside of it or pressing escape.
   * When enabled, the close button will not be visible. Defaults to `false`.
   */
  preventClose?: boolean;
  /**
   * Will be called when the modal is closed.
   */
  onClose?: () => void;
}

/**
 * The `ModalRegistry` interface represents a registry of modal types. Whenever you create
 * a new modal component, you need to add it to the registry.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModalRegistry {}
export type ModalComponent<Options extends ModalOptions> = Component<Options>;
export type Modals = Record<string, Component>;
