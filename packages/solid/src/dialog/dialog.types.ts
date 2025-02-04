import { Component } from 'solid-js';

export const DialogSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  auto: 'auto',
  max: 'max',
};
export type DialogSize = (typeof DialogSize)[keyof typeof DialogSize];

export interface DialogOptions {
  /**
   * The size of the dialog. Defaults to 'auto'.
   */
  size?: DialogSize;
  /**
   * Whether the dialog can be closed by clicking outside of it or pressing escape.
   * When enabled, the close button will not be visible. Defaults to `false`.
   */
  preventClose?: boolean;
  /**
   * Will be called when the dialog is closed.
   */
  onClose?: () => void;
}

/**
 * The `DialogRegistry` interface represents a registry of dialog types. Whenever you create
 * a new dialog component, you need to add it to the registry.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DialogRegistry {}
export type DialogComponent<Options extends DialogOptions> = Component<Options>;
export type Dialogs = Record<string, Component>;
