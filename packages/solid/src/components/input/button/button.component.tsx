import { JSX, Show, type Component } from 'solid-js';
import { ButtonProps } from './button.types';
import { Icon, IconifyIcon } from '@iconify-icon/solid';
import { classNames } from '@spuxx/solid';

export const Button: Component<ButtonProps> = (props) => {
  const { variant = 'contained', color = 'primary', rounded, loading } = props;
  const disabled = loading ? true : props.disabled;

  return (
    <button
      type="button"
      {...props.attrs}
      title={props.title}
      spx-variant={variant}
      spx-color={color}
      spx-rounded={rounded}
      disabled={disabled}
      {...classNames('spx-button', props.class)}
    >
      {/* Loader */}
      <Show when={loading}>
        <Show when={props.loader}>{props.loader}</Show>
        <Show when={!props.loader}>
          <Icon icon="svg-spinners:ring-resize" />
        </Show>
      </Show>

      {/* Icon */}
      <Show when={typeof props.icon === 'string' && !loading}>
        <Icon icon={props.icon as IconifyIcon} />
      </Show>
      <Show when={typeof props.icon === 'object'}>{props.icon as JSX.Element}</Show>

      {/* Content */}
      {props.children && <span class="spx-button-content">{props.children}</span>}
    </button>
  );
};
