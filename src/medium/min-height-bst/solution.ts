// Test: make test t=min-height-bst
function minHeightBst(array: number[]): BST {
  return solutions.solution1(array);
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
  mySolution1, // time O(nlogn) | space O(n)
  solution1 // time O(nlogn) | space O(n)
  // solution2 // time O(??) | space O(??)
};

// Recursive approach
// Complexity (worst-case): time O(nlogn) | space O(n)
function mySolution1(array: number[], bst: BST | null = null): BST {
  const midPos = Math.floor((array.length-1)/2);
  const midNumber = array[midPos];
  if (midNumber === undefined) return bst as BST;
  if (!bst) bst = new BST(midNumber);
  else bst?.insert(midNumber);
  mySolution1(array.slice(0, midPos), bst)
  mySolution1(array.slice(midPos + 1), bst)
  return bst as BST;
}

// Recursive with slices approach
// Complexity (worst-case): time O(nlogn) | space O(n)
function solution1(array: number[]): BST {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

// Recursive with Idx approach
// Complexity (worst-case): time O(nlogn) | space O(n)
function constructMinHeightBst(array: number[], bst: BST | null = null, startIdx: number, endIdx: number): BST {
  if (endIdx < startIdx) return bst as BST;
  const midIdx = Math.floor((endIdx + startIdx) / 2);
  const midNumber = array[midIdx];
  if (!bst) bst = new BST(midNumber);
  else bst.insert(midNumber);
  constructMinHeightBst(array, bst, startIdx, midIdx - 1)
  constructMinHeightBst(array, bst, midIdx + 1, endIdx)
  return bst as BST;
}

export default minHeightBst;
