import { BaseColor } from '@spuxx/browser-utils';
import { ComponentProps } from '@main';
import { ParentProps } from 'solid-js';

export interface ContainerProps extends ComponentProps<HTMLElement>, ParentProps {
  /**
   * The tag  to use for the container.
   * @default 'div'
   */
  tag?: 'div' | 'span' | 'section' | 'article';
  /**
   * The color of the container.
   * @default 'surface'
   */
  color?: BaseColor;
  /**
   * The variant of the container. No variant will be applied by default.
   * @default undefined
   */
  variant?: 'contained' | 'outlined' | 'colored';
  /**
   * If `true`, the default padding will be removed.
   * @default false
   */
  noPadding?: boolean;
}
