import { Divider } from '@spuxx/solid';
import { Component, ParentProps } from 'solid-js';

interface Props extends ParentProps {}

export const ModalFooter: Component<Props> = (props) => {
  return <div class="spx-modal-footer">{props.children}</div>;
};
