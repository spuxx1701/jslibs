import { type Component } from 'solid-js';
import { HeadingProps } from './heading.types';
import { classNames } from '@spuxx/solid';

export const Heading: Component<HeadingProps> = (props) => {
  const { level } = props;
  return (
    <>
      {level === 1 && (
        <h1 {...props} class={classNames('spx-heading', props.class)}>
          {props.children}
        </h1>
      )}
      {level === 2 && (
        <h2 {...props} class={classNames('spx-heading', props.class)}>
          {props.children}
        </h2>
      )}
      {level === 3 && (
        <h3 {...props} class={classNames('spx-heading', props.class)}>
          {props.children}
        </h3>
      )}
      {level === 4 && (
        <h4 {...props} class={classNames('spx-heading', props.class)}>
          {props.children}
        </h4>
      )}
      {level === 5 && (
        <h5 {...props} class={classNames('spx-heading', props.class)}>
          {props.children}
        </h5>
      )}
      {level === 6 && (
        <h6 {...props} class={classNames('spx-heading', props.class)}>
          {props.children}
        </h6>
      )}
    </>
  );
};
