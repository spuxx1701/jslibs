import { ServiceMixin } from '@spuxx/js-utils';
import { ModalComponent, ModalOptions } from './modal.types';
import { createSignal } from 'solid-js';

interface ModalState {
  open: boolean;
  component: ModalComponent<never> | null;
  options?: ModalOptions;
}

/**
 * The `Modal` service provides global access to modal dialogs.
 * @example
 * ```tsx
 * // Provide ModalPortal somewhere in your application
 * import { Modal, ModalPortal, ConfirmModal } from '@spuxx/solid';
 * <ModalPortal />
 *
 * // Show a modal dialog
 * Modal.show(ConfirmModal, { title: 'Hello World!' });
 * ```
 */
export class Modal extends ServiceMixin<Modal>() {
  state = createSignal<ModalState>({ open: false, component: null });

  /**
   * Shows the modal dialog of the given type and with the given options.
   * @param key The key of the modal to open.
   * @param options The options to pass to the modal.
   */
  static show<TOptions extends ModalOptions>(modal: ModalComponent<TOptions>, options: TOptions) {
    this.setState({ open: true, component: modal, options });
  }

  /**
   * Closes the modal dialog that is currently open, if there is one.
   */
  static async close() {
    this.setState({ ...this.state, open: false });
  }

  /**
   * Returns the current state of the modal. The state is read-only.
   */
  static get state(): ModalState {
    const [state] = this.instance.state;
    return state();
  }

  /**
   * Sets the current state of the modal. You should avoid manipulating the modal state directly
   * and instead use `Modal.show()` and `Modal.close()`.
   */
  static setState(newState: ModalState): void {
    const [_state, setModalState] = this.instance.state;
    setModalState(newState);
  }
}
