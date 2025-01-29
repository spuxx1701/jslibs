import { Component, JSX } from 'solid-js';
import { DividerProps } from './divider.types';
import { applyCommonAttributes, classNames } from '@spuxx/solid';

export const Divider: Component<DividerProps> = (props) => {
  const thickness = (props.thickness ?? props.vertical) ? '1' : 2;

  const getStyle = (): JSX.CSSProperties => {
    if (props.vertical) {
      return {
        height: '100%',
        width: `${thickness}px`,
        ...(props.style as JSX.CSSProperties),
      };
    } else {
      return {
        height: `${thickness}px`,
        width: '100%',
        ...(props.style as JSX.CSSProperties),
      };
    }
  };

  return (
    <hr
      {...props}
      style={getStyle()}
      {...applyCommonAttributes(props)}
      data-vertical={props.vertical}
      class={classNames('spx-divider')}
    />
  );
};
