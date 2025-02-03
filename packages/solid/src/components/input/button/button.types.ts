import { IconifyIcon } from '@iconify-icon/solid';
import { JSX, ParentProps } from 'solid-js';
import { BaseColor, ContentColor } from '@spuxx/browser-utils';
import { ComponentProps } from '@spuxx/solid';

export interface ButtonProps extends ComponentProps<HTMLButtonElement>, ParentProps {
  /**
   * The variant of the button.
   * @default "contained"
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * The color of the button.
   * @default "primary"
   */
  color?: BaseColor | ContentColor;
  /**
   * The icon that should be rendered to the left of the button's content.
   * Supports both {@link IconifyIcon} and {@link JSX.Element}.
   */
  icon?: IconifyIcon | JSX.Element;
  /**
   * The title of the button.
   */
  title?: string;
  /**
   * If enabled, the icon will be rounded and no content besides the icon will be displayed.
   * @default false
   */
  rounded?: boolean;
  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the button is loading. This will display a loading indicator and disable the button.
   * @default false
   */
  loading?: boolean;
  /**
   * An alternative loader to be displayed instead of the default loading indicator.
   * @default undefined
   */
  loader?: boolean;
}
