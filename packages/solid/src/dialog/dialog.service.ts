import { ServiceMixin } from '@spuxx/js-utils';
import { Component, ComponentProps, createSignal } from 'solid-js';
import { DialogComponent, DialogOptions } from './dialog.types';

interface State {
  current: Component | null;
  options: DialogOptions | undefined;
}

export class Dialog extends ServiceMixin<Dialog>() {
  protected state = createSignal<State>({ current: null, options: undefined });

  /**
   * Shows the modal dialog of the given type and with the given options.
   * @param key The key of the modal to open.
   * @param options The options to pass to the modal.
   */
  static show<TDialog extends DialogComponent<DialogOptions>>(
    dialog: TDialog,
    options?: ComponentProps<TDialog>,
  ) {
    const [_state, setState] = this.instance.state;
    setState({ current: dialog, options });
  }

  /**
   * Returns the current state of the dialog service.
   */
  static get currentDialog() {
    const [state] = this.instance.state;
    return state().current;
  }

  static get currentOptions() {
    const [state] = this.instance.state;
    return state().options;
  }
}
