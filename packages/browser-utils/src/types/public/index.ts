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
