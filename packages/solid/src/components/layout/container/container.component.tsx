import { Dynamic } from 'solid-js/web';
import { Component } from 'solid-js';
import { ContainerProps } from './container.types';
import { classNames } from '@spuxx/solid';

/**
 * A container component. Very flexible and can be used for most layout purposes.
 * @param props {@link ContainerProps}
 */
export const Container: Component<ContainerProps> = (props) => {
  const { tag = 'div', variant = undefined, color = 'surface', noPadding = undefined } = props;

  return (
    <Dynamic
      {...props.attrs}
      component={tag}
      spx-variant={variant}
      spx-color={color}
      spx-no-padding={noPadding}
      {...classNames('spx-container', props.class)}
    >
      {props.children}
    </Dynamic>
  );
};
