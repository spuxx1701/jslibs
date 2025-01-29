import type { ChangesetOptions, ChangesetValidator } from './types';

export class Changeset<TRef extends object> {
  protected validate: ChangesetValidator<TRef> | undefined = undefined;

  /**
   * The reference to the object that the changeset is associated with.
   */
  public readonly ref: TRef;
  /**
   * The set of unsaved changes.
   */
  public readonly changes: Partial<TRef> = {};

  constructor(ref: TRef, options?: ChangesetOptions<TRef>) {
    this.ref = ref;
    if (options?.validate) this.validate = options.validate;
  }

  /**
   * Returns a version of the original reference representing its current state, including
   * unsaved changes.
   */
  get current() {
    return { ...this.ref, ...this.changes };
  }

  /**
   * Updates a property on the changeset.
   * @param key The key of the property to set.
   * @param value The new value of the property.
   * @param callback (optional) A callback function that will be called with the new value. Useful
   * for mutating reactive state after updating the changeset.
   */
  set = <TKey extends keyof TRef>(
    key: TKey,
    value: TRef[TKey],
    callback?: (value: TRef[TKey]) => void,
  ) => {
    if (value === this.ref[key]) {
      delete this.changes[key];
    } else {
      this.changes[key] = value;
    }
    console.log({ changes: this.changes, current: this.current });
    if (callback) callback(value);
  };

  /**
   * Returns the current value of the given property key.
   */
  get = <TKey extends keyof TRef>(key: TKey) => {
    return { ...this.ref, ...this.changes }[key];
  };

  /**
   * Returns the original value of the given property key.
   */
  getOriginal = <TKey extends keyof TRef>(key: TKey) => {
    return this.ref[key];
  };

  /**
   * Whether the changeset's state currently matches the reference value.
   */
  get isClean() {
    return Object.keys(this.changes).length === 0;
  }

  /**
   * Whether the changeset's state currently differs from the reference value.
   */
  get isDirty() {
    return Object.keys(this.changes).length > 0;
  }

  /*
   * Rolls back all unsaved changes.
   * @param callback (optional) A callback function that will be called with the new state of the
   * reference object. Useful for mutating reactive state after saving.
   */
  rollback = (callback?: (current: TRef) => void) => {
    for (const key in this.changes) {
      delete this.changes[key as keyof typeof this.changes];
    }
    console.log({ changes: this.changes, current: this.current });
    if (callback) callback(this.current);
  };

  /**
   * Writes all unsaved changes to the original reference. Will call `validate` before saving
   * if it has been defined.
   * @param callback (optional) A callback function that will be called with the new state of the
   * reference object. Useful for mutating reactive state after saving.
   */
  save = async (callback?: (current: TRef) => void) => {
    if (this.validate) {
      const validationResult = await this.validate(this.changes);
      if (validationResult === false) return;
    }
    debugger;
    Object.assign(this.ref, this.changes);
    for (const key in this.changes) {
      delete this.changes[key];
    }
    console.log({ changes: this.changes, current: this.current, ref: this.ref });
    if (callback) callback(this.current);
  };
}
