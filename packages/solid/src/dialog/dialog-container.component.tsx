import { Root, Trigger, Portal, Overlay, Content, Label, Description } from '@corvu/dialog';
import { Dialog } from './dialog.service';
import { createEffect, createSignal, Show, type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { DialogComponent, DialogOptions } from './dialog.types';
import { ConfirmDialog } from '@spuxx/solid';

export const DialogContainer: Component = () => {
  // const [component, setComponent] = createSignal<Component | null>(null);
  const [props, setProps] = createSignal<DialogOptions | undefined>(undefined);

  createEffect(() => {
    // setComponent(Dialog.currentDialog);
    console.log(Dialog.currentDialog);
    console.log(Dialog.currentOptions);
  });

  console.log(Dialog.currentDialog);

  // return (
  //   <>
  //     {typeof DialogService.currentDialog === 'function' ? 'function' : 'not a function'}
  //     <br />
  //     {JSON.stringify(DialogService.currentOptions) ?? 'undefined'}
  //   </>
  // );
  // if (typeof DialogService.currentDialog !== 'function') return null;
  return (
    // <Show when={typeof Dialog.currentDialog === 'function'}>
    <Root open={typeof Dialog.currentDialog === 'function'}>
      {/* <Trigger>Open Dialog</Trigger> */}
      <Portal>
        {/* <Overlay /> */}
        <Content>
          <Label>foo</Label>
          <Description>awdawd</Description>
          {/* <Dynamic component={DialogService.currentDialog!} {...DialogService.currentOptions} /> */}
        </Content>
      </Portal>
    </Root>
    // </Show>
  );
  // <Dynamic component={DialogService.currentDialog} {...DialogService.currentOptions} />
  // <Dynamic component={DialogService.currentDialog} {...DialogService.currentOptions} />
  // <Dialog>
  //   <Dialog.Portal>
  //     <Dialog.Overlay />
  //     <Dialog.Content>
  //       yolo
  //       <Dynamic component={DialogService.currentDialog} {...DialogService.currentOptions} />
  //     </Dialog.Content>
  //   </Dialog.Portal>
  // </Dialog>
};
