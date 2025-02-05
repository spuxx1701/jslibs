import { Icon } from '@iconify-icon/solid';
import { Component, Show } from 'solid-js';
import { Label, Close } from '@corvu/dialog';
import { BaseColor } from '@spuxx/browser-utils';

interface Props {
  /**
   * The modal header's title.
   */
  title: string;
  /**
   * The modal header's icon. If not provided, no icon will be shown.
   * @default undefined
   */
  icon?: string;
  /**
   * Whether too hide the close button.
   * @default false
   */
  hideClose?: boolean;
  /**
   * The color of the header.
   * @default undefined
   */
  color?: BaseColor;
}

/**
 * A template for creating modal headers.
 */
export const ModalHeader: Component<Props> = (props) => {
  const { hideClose = false } = props;

  return (
    <div class="spx spx-modal-header" spx-variant="contained" spx-color={props.color}>
      <Label>
        {props.icon && <Icon icon={props.icon} class="spx-modal-icon" />}
        {props.title}
      </Label>
      <Show when={!hideClose}>
        <Close class="spx-button" spx-color="text-default" spx-rounded>
          <Icon icon="mdi:close" />
        </Close>
      </Show>
    </div>
  );
};
