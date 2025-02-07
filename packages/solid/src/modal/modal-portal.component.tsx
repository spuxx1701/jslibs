import { Component, Show } from 'solid-js';
import { Modal } from './modal.service';
import { Dynamic } from 'solid-js/web';

/**
 * Place this component anywhere in your application to make it the portal node for modals.
 * After that, you may call {@link Modal} to show and control modal dialogs.
 * @example
 * ```tsx
 * // App.tsx
 * <ModalPortal />
 * ```
 */
export const ModalPortal: Component = () => {
  return (
    <Show when={Modal.state.component}>
      <Dynamic component={Modal.state.component as Component} {...Modal.state.options} />
    </Show>
  );
};
