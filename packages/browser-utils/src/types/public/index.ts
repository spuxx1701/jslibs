/**
 * The color of an element.
 */
export const Color = {
  background: 'background',
  surface: 'surface',
  accent: 'accent',
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

/**
 * The color of an element.
 */
export type Color = (typeof Color)[keyof typeof Color];

/**
 * The variant of a container-type component (like containers or buttons).
 */
export const ContainerVariant = {
  contained: 'contained',
  outlined: 'outlined',
  transparent: 'transparent',
} as const;

/**
 * Commonly available variants for container-type components (like containers or buttons).
 */
export type ContainerVariant = (typeof ContainerVariant)[keyof typeof ContainerVariant];
