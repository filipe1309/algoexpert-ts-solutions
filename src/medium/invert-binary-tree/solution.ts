
import mySolution1 from "./solution-0";
import solution1 from "./solution-1";

// Test: make test t=invert-binary-tree
function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
  return solutions.solution1(tree);
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
  solution1,   // time O(n) | space O(d)
  // solution2 // time O(??) | space O(??)
};

export default invertBinaryTree;
