/**
 * Joins multiple class names together.
 * @param classes The class names to join.
 * @returns The joined class names.
 */
export const classNames = (...classes: (string | undefined)[]): { class: string } => {
  const classNames = ['spx', ...classes.filter(Boolean)];
  return { class: classNames.join(' ') };
};
