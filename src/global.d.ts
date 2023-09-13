declare type Triplet = [number, number, number];

declare type SpecialArray = Array<number | SpecialArray>;

declare type BST = {
  value: number;
  left: BST | null;
  right: BST | null;
};
