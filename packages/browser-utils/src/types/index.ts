/**
 * The base color of an element.
 */
export const BaseColor = {
  background: 'background',
  surface: 'surface',
  gradient: 'gradient',
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

/**
 * The base color of an element.
 */
export type BaseColor = (typeof BaseColor)[keyof typeof BaseColor];

/**
 * The content color of an element.
 */
export const ContentColor = {
  default: 'text-default',
  subtle: 'text-subtle',
  highlighted: 'text-highlighted',
} as const;

/**
 * The content color of an element.
 */
export type ContentColor = (typeof ContentColor)[keyof typeof ContentColor];

/**
 * The size of a modal dialog.
 */
export const ModalSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  auto: 'auto',
  max: 'max',
};
/**
 * The size of a modal dialog.
 */
export type ModalSize = (typeof ModalSize)[keyof typeof ModalSize];
