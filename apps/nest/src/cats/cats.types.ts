export const Breed = {
  siamese: 'Siamese',
  persian: 'Persian',
  maineCoon: 'Maine Coon',
} as const;
export type Breed = (typeof Breed)[keyof typeof Breed];
