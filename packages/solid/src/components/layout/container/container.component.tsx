import { Dynamic } from 'solid-js/web';
import { Component } from 'solid-js';
import { ContainerProps } from './container.types';
import {
  classNames,
  applyCommonAttributes,
  applyColor,
  defaultColor,
  defaultVariant,
} from '@spuxx/solid';

/**
 * A container component. Very flexible and can be used for most layout purposes.
 * @param props {@link ContainerProps}
 */
export const Container: Component<ContainerProps> = (props) => {
  const tag = props.tag || 'div';

  return (
    <Dynamic
      component={tag}
      {...props}
      {...applyColor(props, defaultVariant('container'), defaultColor('container'))}
      {...applyCommonAttributes(props, { variant: defaultVariant('container') })}
      class={classNames('spx-container', props.class)}
      no-padding={props.noPadding}
    >
      {props.children}
    </Dynamic>
  );
};
