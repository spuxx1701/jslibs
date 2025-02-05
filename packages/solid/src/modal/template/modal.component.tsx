import { Component, ParentProps } from 'solid-js';
import { ModalDialog } from '../modal-dialog.service';
import { ModalOptions } from '../modal.types';
import { Content, Overlay, Portal, Root } from '@corvu/dialog';

interface Props extends ModalOptions, ParentProps {}

/**
 * A template for creating modal dialogs.
 * @param options {@link ModalOptions}
 * @example
 * ```tsx
 * import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@spuxx/solid';
 * export const MyModal = (options) => {
 *   return (
 *     <Modal {...options}>
 *       <ModalHeader title="Hello World!" />
 *       <ModalBody>This is a modal dialog.</ModalBody>
 *       <ModalFooter>
 *         <Button>Close</Button>
 *       </ModalFooter>
 *     </Modal>
 *   );
 * }
 * ```
 */
export const Modal: Component<Props> = (options) => {
  const { size = 'auto', preventClose = false, onClose } = options;

  const handleContentPresentChange = (value: boolean) => {
    if (!value) ModalDialog.close();
    if (typeof onClose === 'function') onClose();
  };

  return (
    <Root
      initialOpen={true}
      modal={true}
      trapFocus={true}
      preventScroll={true}
      closeOnEscapeKeyDown={!preventClose}
      closeOnOutsidePointer={!preventClose}
      onContentPresentChange={handleContentPresentChange}
    >
      <Portal mount={ModalDialog.portal} forceMount={true}>
        <Overlay class="spx-modal-overlay" />
        <Content class="spx-modal" data-size={size}>
          {options.children}
        </Content>
      </Portal>
    </Root>
  );
};
