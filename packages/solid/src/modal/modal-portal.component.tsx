import { Component, createEffect } from 'solid-js';
import { Modal } from './modal-dialog.service';

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
  let portal: HTMLDivElement | undefined;

  createEffect(() => {
    if (portal) {
      Modal.setPortal(portal);
    }
  });

  return <div ref={portal} class="spx-modal-portal" />;
};
