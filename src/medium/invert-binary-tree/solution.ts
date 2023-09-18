
import mySolution1 from "./solution-0";
import solution1 from "./solution-1";
import solution2 from "./solution-2";

// Test: make test t=invert-binary-tree
function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
  return solutions.solution2(tree);
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
  solution1,   // time O(n) | space O(n)
  solution2,   // time O(n) | space O(d)
};

export default invertBinaryTree;
