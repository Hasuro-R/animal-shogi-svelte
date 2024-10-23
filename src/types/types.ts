export type PieceType = {
  type: AnimalType,
  position: PositionType,
  image: string,
  player: number,
  color: string,
};

export type AnimalType = 'Lion' | 'Elephant' | 'Chicken' | 'Chick' | 'Giraffe';

export type PositionType = {
  x: number,
  y: number,
};
