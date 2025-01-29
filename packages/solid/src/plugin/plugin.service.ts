import { ServiceMixin } from '@spuxx/js-utils';
import { PluginComponentOption, PluginOptions } from './plugin.types';
import { defaultPluginOptions } from './plugin.defaults';
import { Color } from '@spuxx/browser-utils';

export class SpuxxSolid extends ServiceMixin<SpuxxSolid>() {
  private _options: PluginOptions = { ...defaultPluginOptions };

  /**
   * Setup the plugin. This allows you to set default options for the plugin.
   * @param options The options to set.
   */
  static async setup(options?: PluginOptions) {
    this.instance._options = { ...defaultPluginOptions, ...options };
  }

  static get options() {
    return this.instance._options;
  }
}

export function defaultColor<TKey extends keyof NonNullable<PluginOptions['components']>>(
  componentName: TKey,
): Color | undefined {
  return (SpuxxSolid.options.components?.[componentName] as PluginComponentOption)?.defaultColor;
}

export function defaultVariant<TKey extends keyof NonNullable<PluginOptions['components']>>(
  componentName: TKey,
): string | undefined {
  return (SpuxxSolid.options.components?.[componentName] as PluginComponentOption)?.defaultVariant;
}
