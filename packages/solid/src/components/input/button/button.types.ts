import { IconifyIcon } from '@iconify-icon/solid';
import { ContainerVariant } from '@spuxx/browser-utils';
import { JSX, ParentProps } from 'solid-js';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement>, ParentProps {
  icon?: IconifyIcon;
  rounded?: boolean;
  variant?: ContainerVariant;
}
