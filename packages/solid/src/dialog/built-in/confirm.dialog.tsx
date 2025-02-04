import Dialog from '@corvu/dialog';
import { DialogComponent, DialogOptions } from '../dialog.types';
import { IconifyIconName } from '@iconify-icon/solid';

export interface ConfirmDialogOptions extends DialogOptions {
  title?: string;
  icon?: IconifyIconName;
  onConfirm?: () => void;
}

export const ConfirmDialog: DialogComponent<ConfirmDialogOptions> = (options) => {
  return (
    <>
      <Dialog.Close />
      <Dialog.Label>Heyo whatsup!</Dialog.Label>
      <Dialog.Description />
    </>
  );
};
