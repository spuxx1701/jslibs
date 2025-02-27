import { Component, ParentProps } from 'solid-js';

interface Props extends ParentProps {}

export const ModalBody: Component<Props> = (props) => {
  return <div class="spx spx-modal-body">{props.children}</div>;
};
