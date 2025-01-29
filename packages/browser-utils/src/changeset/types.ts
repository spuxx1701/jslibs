export type ChangesetValidator<TRef extends object> = (
  changes: Partial<TRef>,
) => void | boolean | Promise<void | false>;

export interface ChangesetOptions<TRef extends object> {
  /**
   * The validator function to call whenever the changeset is being saved.
   * If the validator returns `false`, the changeset will not be saved.
   */
  validate?: ChangesetValidator<TRef>;
}
