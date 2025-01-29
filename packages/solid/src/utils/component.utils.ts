import { ComponentProps } from '@spuxx/solid';
import { Color, ContainerVariant } from '@spuxx/browser-utils';
import type * as CSS from 'csstype';

/**
 * Joins multiple class names together.
 * @param classes The class names to join.
 * @returns The joined class names.
 */
export const classNames = (...classes: (string | undefined)[]) => {
  const classNames = ['spx', ...classes.filter(Boolean)];
  return classNames.join(' ');
};

/**
 * Extracts certain common component properties (e.g. variants) and applies them as
 * data attributes.
 * @param props The component properties.
 * @returns The extracted data attributes.
 * @example
 * const MyComponent = (props) => {
 *   return <div
 *       {...props}
 *       {...applyCommonAttributes(props)}
 *     />;
 * };
 */
export const applyCommonAttributes = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: ComponentProps<any> & { variant?: string },
  defaults?: { variant?: string },
): Record<string, string> | void => {
  const attributes: Record<string, string> = { ...defaults };
  if (props.variant) {
    attributes.variant = props.variant;
  }
  return attributes;
};

/**
 * A function to extract the color value from the component property and apply it.
 * using the given
 */
export const applyColor = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: ComponentProps<any> & { variant?: ContainerVariant },
  defaultVariant?: string,
  defaultColor?: Color,
): { style: Partial<CSS.Properties> } => {
  const style: CSS.PropertiesHyphen = {};
  const variant = props.variant || defaultVariant;

  if (props.color || defaultColor) {
    const baseColor = `var(--spx-color-${props.color ?? defaultColor})`;
    const onColor = `var(--spx-color-on-${props.color ?? defaultColor})`;
    switch (variant) {
      case 'contained':
        style.background = baseColor;
        style.color = onColor;
        break;
      case 'outlined':
        style.background = 'transparent';
        style.color = onColor;
        style['border-color'] = baseColor;
        break;
      case 'transparent':
        style.background = 'transparent';
        style.color = onColor;
        break;
      default:
        // Do nothing
        break;
    }
  }

  return { style: { ...style, ...props.style } };
};
