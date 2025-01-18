import { ContainerVariant } from '@spuxx/browser-utils';
import { ComponentProps } from '@spuxx/solid';
import { ParentProps } from 'solid-js';

export interface ContainerProps extends ComponentProps<HTMLElement>, ParentProps {
  /**
   * The tag  to use for the container.
   * @default 'div'
   */
  tag?: 'div' | 'span' | 'section' | 'article';
  /**
   * The variant of the container.
   * @default 'contained'
   */
  variant?: ContainerVariant;
  /**
   * If `true`, the default padding will be removed.
   * @default false
   */
  noPadding?: boolean;
}
