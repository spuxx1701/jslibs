import { ComponentProps } from '@main';
import { ParentProps } from 'solid-js';

export interface HeadingProps extends ComponentProps<HTMLHeadingElement>, ParentProps {
  /**
   * The level of the heading.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
