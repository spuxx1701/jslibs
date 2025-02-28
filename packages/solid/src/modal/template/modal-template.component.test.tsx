import { describe, it, expect } from 'vitest';
import { render, testEffect } from '@solidjs/testing-library';
import { ModalTemplate } from './modal-template.component';
import { ModalHeader } from './modal-header.component';
import { ModalBody } from './modal-body.component';
import { ModalFooter } from './modal-footer.component';
import { Modal } from '../modal.service';
import { Button, ModalOptions, ModalPortal } from '../../main';
import { Component, createEffect, createSignal, Show } from 'solid-js';
import { sleep } from '@spuxx/js-utils';

interface Props extends ModalOptions {
  title: string;
  description: string;
}
const CustomModal: Component<Props> = (props) => {
  return (
    <ModalTemplate>
      <ModalHeader title={props.title} />
      <ModalBody>{props.description}</ModalBody>
      <ModalFooter>
        <Button onClick={Modal.close}>Close</Button>
      </ModalFooter>
    </ModalTemplate>
  );
};

// describe('ModalTemplate', () => {
//   let show: typeof Modal.show;

//   interface Props extends ModalOptions {
//     title: string;
//     description: string;
//   }
//   const CustomModal: Component<Props> = (props) => {
//     return (
//       <ModalTemplate>
//         <ModalHeader title={props.title} />
//         <ModalBody>{props.description}</ModalBody>
//         <ModalFooter>
//           <Button onClick={Modal.close}>Close</Button>
//         </ModalFooter>
//       </ModalTemplate>
//     );
//   };

//   const App: Component = () => {
//     Modal.instance;
//     Modal.show(CustomModal, {
//       title: 'Hello World!',
//       description: 'This is a custom modal dialog.',
//     });

//     return (
//       <div style={{ width: '1200px', height: '800px' }}>
//         <ModalPortal />
//       </div>
//     );
//   };

//   it('a custom modal should render as expected', async () => {
//     const { getByText, container } = render(() => <App />);
//     // const button = getByText('Show Modal');
//     // expect(button).toBeInTheDocument();
//     // button.click();
//     return testEffect((done) =>
//       createEffect(() => {
//         expect(getByText('Hello World!')).toBeInTheDocument();
//         done();
//       }),
//     );
//   });
// });

describe('MyComponent', () => {
  it('should update to reflect the external state change', async () => {
    const MyComponent = () => {
      return (
        <div>
          <Show when={Modal.state.component}>true</Show>
          <Show when={!Modal.state.component}>false</Show>
        </div>
      );
    };
    const { getByText, asFragment } = render(() => (
      <>
        <MyComponent />
        <ModalPortal />
      </>
    ));
    expect(getByText('false')).toBeInTheDocument();
    console.log(asFragment());
    Modal.show(CustomModal, {
      title: 'Hello World!',
      description: 'This is a custom modal.',
    });
    await Promise.resolve();
    // expect(getByText('Hello World!')).toBeInTheDocument();
    expect(getByText('true')).toBeInTheDocument();
    console.log(asFragment());
  });
});
