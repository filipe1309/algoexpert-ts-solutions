declare type Triplet = [number, number, number];

declare type SpecialArray = Array<number | SpecialArray>;

declare type BinaryTree = {
  value: number;
  left: BST | null;
  right: BST | null;
};

declare type BST = BinaryTree;

declare type BT = BinaryTree;

declare type BinaryTreeWithParent = {
  value: number;
  left: BinaryTreeWithParent | null;
  right: BinaryTreeWithParent | null;
  parent: BinaryTreeWithParent | null;
};

declare type BTWP = BinaryTreeWithParent;

declare interface FlatTree {
  id: string;
  left: string | null;
  right: string | null;
  value: number;
}


interface TreeArray {
  name: string;
  children: TreeArray[]
  addChild(name: string): TreeArray;
  breadthFirstSearch(array: string[]): string[];
}

type FlatTreeArray = {
  id: string;
  value: string;
  children: string[];
}
