import { ModalComponent, ModalOptions } from '../modal.types';
import { ModalHeader } from '../template/modal-header.component';
import { ModalTemplate } from '../template/modal-template.component';
import { ModalBody } from '../template/modal-body.component';
import { ModalFooter } from '../template/modal-footer.component';
import { Button } from '../../components/input/button';
import { BaseColor, ContentColor } from '@spuxx/browser-utils';

export interface ConfirmModalOptions extends ModalOptions {
  /**
   * The title of the modal.
   */
  title: string;
  /**
   * A color to apply to the modal.
   * @default undefined
   */
  color?: BaseColor;
  /**
   * The icon of the modal.
   * @default undefined
   */
  icon?: string;
  /**
   * The content of the modal. This can be a string or a JSX element.
   */
  content: string;
  /**
   * A callback function that will be called when the confirm button is clicked.
   */
  onConfirm: () => void;
  /**
   * The label of the confirm button.
   */
  confirmLabel: string;
  /**
   * The icon of the confirm button.
   * @default undefined
   */
  confirmIcon?: string;
  /**
   * The color of the confirm button.
   * @default 'primary'
   */
  confirmColor?: BaseColor | ContentColor;
  /**
   * The label of the cancel button. Clicking the button will call `onClose()`.
   */
  cancelLabel: string;
  /**
   * The icon of the cancel button.
   * @default undefined
   */
  cancelIcon?: string;
  /**
   * The color of the cancel button.
   * @default 'primary'
   */
  cancelColor?: BaseColor | ContentColor;
}

export const ConfirmModal: ModalComponent<ConfirmModalOptions> = (options) => {
  const { confirmColor = 'primary', cancelColor = 'primary' } = options;

  return (
    <ModalTemplate {...options}>
      <ModalHeader
        icon={options.icon}
        title={options.title}
        color={options.color}
        hideClose={options.preventClose}
      />
      <ModalBody>{options.content}</ModalBody>
      <ModalFooter>
        {options.cancelLabel && (
          <Button icon={options.cancelIcon} color={cancelColor} variant="colored">
            {options.cancelLabel}
          </Button>
        )}
        <Button
          icon={options.confirmIcon}
          onClick={options.onConfirm}
          color={confirmColor}
          variant="contained"
        >
          <b>{options.confirmLabel}</b>
        </Button>
      </ModalFooter>
    </ModalTemplate>
  );
};
