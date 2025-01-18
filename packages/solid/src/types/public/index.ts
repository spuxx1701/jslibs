import { Color } from '@spuxx/browser-utils';
import { JSX } from 'solid-js/jsx-runtime';
import type * as CSS from 'csstype';

/**
 * A property interface for components to extend from. Includes some basic properties used
 * by almost all components.
 */
export interface ComponentProps<TElement extends HTMLElement = HTMLElement>
  extends Omit<JSX.HTMLAttributes<TElement>, 'style'> {
  /**
   * The component's style.
   */
  style?: Partial<CSS.PropertiesHyphen>;
  /**
   * The color of the component. Will be applied to the component's style directly at runtime
   *  and the result will depend on the component's variant.
   */
  color?: Color;
}
