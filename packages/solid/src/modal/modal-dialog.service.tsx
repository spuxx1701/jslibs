import { ServiceMixin } from '@spuxx/js-utils';
import { ComponentProps } from 'solid-js';
import { ModalComponent, ModalOptions } from './modal.types';
import { render } from 'solid-js/web';
import { ConfirmModal } from '@spuxx/solid';

/**
 * The `Modal` service provides global access to modal dialogs.
 * @example
 * ```tsx
 * // Provide ModalPortal somewhere in your application
 * import { Modal, ModalPortal, ConfirmModal } from '@spuxx/solid';
 * <MoalPortal />
 *
 * // Show a modal dialog
 * Modal.show(ConfirmModal, { title: 'Hello World!' });
 * ```
 */
export class Modal extends ServiceMixin<Modal>() {
  protected portal: Node | undefined;
  protected dispose = () => {};

  /**
   * Shows the modal dialog of the given type and with the given options.
   * @param key The key of the modal to open.
   * @param options The options to pass to the modal.
   */
  static show<TModal extends ModalComponent<ModalOptions>, TOptions extends ModalOptions>(
    modal: TModal,
    options?: TOptions,
  ) {
    if (!this.portal) {
      throw new Error(
        'No modal portal node has been registered. Please register a portal node first.',
      );
    }
    this.instance.dispose = render(() => modal(options ?? {}), this.portal);
  }

  /**
   * Closes the modal dialog that is currently open, if there is one.
   */
  static close() {
    this.instance.dispose();
  }

  /**
   * Returns the portal node that is used to render the modal.
   */
  static get portal(): Node | undefined {
    return this.instance.portal;
  }

  /**
   * Registers the given node as the portal node that is used to render the modal.
   * Only one portal node can be registered at a time.
   * @param node The node to register as the portal node.
   */
  static setPortal(node: Node) {
    this.instance.portal = node;
  }
}
