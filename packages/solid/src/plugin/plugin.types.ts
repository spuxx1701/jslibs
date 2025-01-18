import { Color } from '@spuxx/browser-utils';

export interface PluginComponentOption {
  defaultVariant?: string;
  defaultColor?: Color;
}

export interface PluginOptions {
  components?: {
    container?: PluginComponentOption;
  };
}
