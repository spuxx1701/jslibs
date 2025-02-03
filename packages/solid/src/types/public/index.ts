import { JSX } from 'solid-js/jsx-runtime';
import type * as CSS from 'csstype';

/**
 * A property interface for components to extend from. Includes some basic properties used
 * by almost all components.
 */
export interface ComponentProps<TElement extends HTMLElement = HTMLElement> {
  /**
   * The component's class names.
   */
  class?: string;

  /**
   * The component's style.
   */
  style?: Partial<CSS.PropertiesHyphen>;

  /**
   * The component's attributes.
   */
  attrs?: Omit<JSX.HTMLAttributes<TElement>, 'style'>;
}
