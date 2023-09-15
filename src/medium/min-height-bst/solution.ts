// Test: make test t=min-height-bst
function minHeightBst(array: number[]): BST {
  return solutions.mySolution1(array);
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

const solutions = {
  mySolution1, // time O(n) | space O(n)
  // solution1 // time O(??) | space O(??)
  // solution2 // time O(??) | space O(??)
};

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: number[], bst: BST | null = null): BST {
  const midPos = Math.floor((array.length-1)/2);
  const midNumber = array[midPos];
  if (midNumber !== undefined) {
    if (!bst && midNumber !== undefined) bst = new BST(midNumber);
    else bst?.insert(midNumber);
    if (array.length > 1) {
      mySolution1(array.slice(0, midPos), bst)
      mySolution1(array.slice(midPos + 1), bst)
    }
  }
  return bst as BST;
}

export default minHeightBst;
