import { Component, ParentProps } from 'solid-js';
import { Modal } from '../modal-dialog.service';
import { ModalOptions } from '../modal.types';
import { Content, Overlay, Portal, Root } from '@corvu/dialog';

interface Props extends ModalOptions, ParentProps {}

/**
 * A template for creating modal dialogs.
 * @param options {@link ModalOptions}
 * @example
 * ```tsx
 * import { ModalTemplate, ModalHeader, ModalBody, ModalFooter, Button } from '@spuxx/solid';
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
export const ModalTemplate: Component<Props> = (options) => {
  const { size = 'auto', preventClose = false, onClose } = options;

  const handleContentPresentChange = (value: boolean) => {
    if (!value) Modal.close();
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
      <Portal mount={Modal.portal} forceMount={true}>
        <Overlay class="spx-modal-overlay" />
        <Content class="spx-modal" data-size={size}>
          {options.children}
        </Content>
      </Portal>
    </Root>
  );
};
