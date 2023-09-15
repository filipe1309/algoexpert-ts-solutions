// Test: make test t=min-height-bst
function minHeightBst(array: number[]): BST {
  return solutions.solution3(array);
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
  solution1,   // time O(nlogn) | space O(n)
  solution2,   // time O(n) | space O(n)
  solution3    // time O(n) | space O(n)
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

// Recursive with slices approach
// Complexity (worst-case): time O(n) | space O(n)
function solution2(array: number[]): BST {
  return constructMinHeightBst2(array, null, 0, array.length - 1);
}

// Recursive with Idx && manual inserts approach
// Complexity (worst-case): time O(n) | space O(n)
function constructMinHeightBst2(array: number[], bst: BST | null = null, startIdx: number, endIdx: number): BST {
  if (endIdx < startIdx) return bst as BST;
  const midIdx = Math.floor((endIdx + startIdx) / 2);
  const newBstNode = new BST(array[midIdx]);
  if (!bst) bst = newBstNode;
  else {
    if (array[midIdx] < bst.value) { bst.left = newBstNode; bst = bst.left; }
    else { bst.right = newBstNode; bst = bst.right; }
  }
  constructMinHeightBst2(array, bst, startIdx, midIdx - 1)
  constructMinHeightBst2(array, bst, midIdx + 1, endIdx)
  return bst as BST;
}

// Recursive with slices simplified approach
// Complexity (worst-case): time O(n) | space O(n)
function solution3(array: number[]): BST {
  return constructMinHeightBst3(array, 0, array.length - 1) as BST;
}

// Recursive with Idx && manual inserts approach
// Complexity (worst-case): time O(n) | space O(n)
function constructMinHeightBst3(array: number[], startIdx: number, endIdx: number): BST | null{
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((endIdx + startIdx) / 2);
  let bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst3(array, startIdx, midIdx - 1)
  bst.right = constructMinHeightBst3(array, midIdx + 1, endIdx)
  return bst;
}

export default minHeightBst;
