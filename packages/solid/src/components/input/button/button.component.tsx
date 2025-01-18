import { type Component } from 'solid-js';
import { ButtonProps } from './button.types';
import { Icon } from '@iconify-icon/solid';
import './button.styles.css';
import { applyCommonAttributes } from '@spuxx/solid';

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      {...props}
      {...applyCommonAttributes(props)}
      class={`spx-button spx-color ${props.class ?? ''}`}
      data-color={props.color}
      data-rounded={props.rounded}
    >
      {props.icon && <Icon icon={props.icon} />}
      {props.children}
    </button>
  );
};
