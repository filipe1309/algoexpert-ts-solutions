import mySolution1 from "./solution-0";
import solution1 from "./solution-1";
import solution2 from "./solution-2";

// Test: make test t=reconstruct-bst
function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  return solutions.solution2(preOrderTraversalValues);
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const solutions = {
  mySolution1, // time O(n) | space O(n)
  solution1,   // time O(n^2) | space O(n)
  solution2    // time O(n) | space O(n)
};

export default reconstructBst;
