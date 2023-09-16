// Test: make test t=reconstruct-bst
function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  return solutions.mySolution1(preOrderTraversalValues);
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
  // solution1 // time O(??) | space O(??)
  // solution2 // time O(??) | space O(??)
};

// External BST Insert approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(preOrderTraversalValues: number[]): BST | null {
  let bst = new BST(preOrderTraversalValues.shift() as number);
  while (preOrderTraversalValues.length) {
    mySolution1Insert(bst ,preOrderTraversalValues.shift() as number);
  }
  return bst;
}

function mySolution1Insert(bst: BST, value: number) {
  if (value < bst.value) {
    if (bst.left) mySolution1Insert(bst.left, value);
    else bst.left = new BST(value);
  }

  if (value >= bst.value) {
    if (bst.right) mySolution1Insert(bst.right, value);
    else bst.right = new BST(value);
  }
}

export default reconstructBst;
