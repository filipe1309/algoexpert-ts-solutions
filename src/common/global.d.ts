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

interface AncestralTree {
  name: string;
  ancestor: AncestralTree | null;
}

type ResultAncestralTree = {
  topAncestor?: string | AncestralTree,
  descendantOne?: string | AncestralTree,
  descendantTwo?: string | AncestralTree,
  ancestralTree?: AncestralTree
}

interface Node {
  value: number;
  prev: Node | null;
  next: Node | null;
}
