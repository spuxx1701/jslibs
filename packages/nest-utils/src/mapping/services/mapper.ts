/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { MAP_METADATA_KEY } from '../mapping.constants';
import { MapMetadata, PropertyMap } from '../types/mapping.private-types';

/**
 * Provides mapping functionality for objects.
 */
@Injectable()
export class Mapper {
  /**
   * Maps properties from source to target based on the @Map decorator metadata.
   * Supports vanilla classes as well as sequelize models.
   * @param source The source object.
   * @param sourceClass The source class. This is where the @Map decorator is expected to be used.
   * @param targetClass The target class. This is where the properties will be mapped to.
   * @returns An instance of the target class with properties mapped from the source object.
   * @example
   * // Define source and target classes
   * class Source {
   *   ＠Map()
   *   foo: string = 'bar';
   * }
   *
   * class Target {
   *   ＠Map()
   *   foo: string;
   * }
   *
   * // Use the mapper
   * const source = new Source();
   * const target = mapper.map(source, Source, Target);
   * console.log(target.targetProperty); // Outputs: 'bar'
   */
  map<TSource extends object, TTarget extends object>(
    source: TSource,
    sourceClass: new () => TSource,
    targetClass: new () => TTarget,
  ): TTarget {
    let target: TTarget;
    if (typeof (targetClass as any).build === 'function') {
      // If the target class is a sequelize model, use the build method to create a new instance.
      target = (targetClass as any).build();
    } else {
      // Otherwise, use the constructor to create a new instance.
      target = new targetClass();
    }

    // Get all properties in the source object and look for the @Map decorator.
    const propertyMap: PropertyMap = {};
    let keys: string[];
    if (typeof (source as any).dataValues === 'object') {
      keys = Object.keys((source as any).dataValues);
    } else {
      keys = Object.keys(source);
    }
    for (const key of keys) {
      const metadata: MapMetadata | undefined = Reflect.getMetadata(
        MAP_METADATA_KEY,
        sourceClass.prototype,
        key,
      );
      if (metadata) {
        propertyMap[key] = metadata;
      }
    }

    for (const property in propertyMap) {
      this.mapProperty(source, target, targetClass, property, propertyMap);
    }

    return target;
  }

  private mapProperty<TSource extends object, TTarget extends object>(
    source: TSource,
    target: TTarget,
    targetClass: new () => TTarget,
    propertyKey: string,
    propertyMap: PropertyMap,
  ) {
    const sourceMetadata = propertyMap[propertyKey];
    // Check whether target property exists and is decorated
    const targetMetadata = Reflect.getMetadata(
      MAP_METADATA_KEY,
      targetClass.prototype,
      sourceMetadata.targetKey,
    );
    if (!targetMetadata) return;

    let value: any;
    const sourceType = this.getType(source, propertyKey);
    let isNestedProp = false;
    try {
      isNestedProp = sourceType.prototype.toString().includes('object');
    } catch (error) {
      // Do nothing, isNestedProp will remain false
    }
    if (isNestedProp && this.getValue(source, propertyKey)) {
      // In case the property is a nested property, map it recursively
      const targetType = this.getType(target, sourceMetadata.targetKey);
      value = this.map<object, object>(this.getValue(source, propertyKey), sourceType, targetType);
    } else {
      // Else, map it directly
      value = this.getValue(source, propertyKey);
      if (value === undefined && !propertyMap[propertyKey].preserveUndefined) {
        return;
      }
    }

    this.setValue(target, sourceMetadata.targetKey, value);
  }

  private getValue(source: object, key: string): any {
    let value: any;
    if (typeof (source as any).getDataValue === 'function') {
      value = (source as any).getDataValue(key);
    } else {
      value = (source as any)[key];
    }
    return value;
  }

  private setValue(target: object, key: string, value: any): void {
    if (typeof (target as any).setDataValue === 'function') {
      (target as any).isNewRecord = true;
      (target as any).setDataValue(key, value);
    } else {
      (target as any)[key] = value;
    }
  }

  private getType(target: object, key: string) {
    const type = Reflect.getMetadata('design:type', target, key);
    return type;
  }
}
