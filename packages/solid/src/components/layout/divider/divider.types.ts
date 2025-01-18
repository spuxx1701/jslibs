import { ComponentProps } from '@spuxx/solid';

export interface DividerProps extends ComponentProps<HTMLHRElement> {
  /**
   * Whether the divider is vertical.
   * @default false
   */
  vertical?: boolean;

  /**
   * The thickness of the divider.
   * @default 2px (horizontal)
   * @default 1px (vertical)
   */
  thickness?: string;
}
