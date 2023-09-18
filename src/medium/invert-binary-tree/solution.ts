
import mySolution1 from "./solution-0";
// import mySolution2 from "./solution-1";

// Test: make test t=invert-binary-tree
function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
  return solutions.mySolution1(tree);
}

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const solutions = {
  mySolution1, // time O(n) | space O(n)
  // mySolution2,// time O(??) | space O(??)
  // solution2 // time O(??) | space O(??)
};

export default invertBinaryTree;
