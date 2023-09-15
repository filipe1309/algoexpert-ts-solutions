// Test: make test t=find-kth-largest-value-in-bst
function findKthLargestValueInBst(tree: BST, k: number): number {
  return solutions.solution2(tree, k) as number;
}

const solutions = {
  mySolution1, // time O(n) | space O(n)
  solution2    // time O(h + k) | space O(h)
  // solution2 // time O(??) | space O(??)
};

// Recursive In Order Traverse Reverse approach
// Complexity (worst-case): time O(n) | space O(n)
// where h is the height of the tree and
// k is the input parameter
function mySolution1(tree: BST, k: number): number {
  let array: number[] = [];
  inOrderTraverseReverse(tree, k, array)
  return array[k - 1];
}

function inOrderTraverseReverse(tree: BST | null, k: number, array: number[]) {
  if (!tree || array.length === k) return;
  inOrderTraverseReverse(tree.right, k, array);
  array.push(tree.value);
  inOrderTraverseReverse(tree.left, k, array);
  return array;
}

class TreeInfo {
  totalVisited: number;
  lastVisited: number;

  constructor(totalVisited: number, lastVisited: number) {
    this.totalVisited = totalVisited;
    this.lastVisited = lastVisited;
  }
}

// Recursive In Order Traverse Reverse Optimized approach
// Complexity (worst-case): time O(h + k) | space O(h)
function solution2(tree: BST, k: number): number {
  let treeInfo = new TreeInfo(0, -1);
  inOrderTraverseReverseSolution2(tree, k, treeInfo)
  return treeInfo.lastVisited;
}

function inOrderTraverseReverseSolution2(tree: BST | null, k: number, treeInfo: TreeInfo) {
  if (!tree || treeInfo.totalVisited >= k) return;
  inOrderTraverseReverseSolution2(tree.right, k, treeInfo);
  if (treeInfo.totalVisited < k) {
    treeInfo.totalVisited++;
    treeInfo.lastVisited = tree.value
    inOrderTraverseReverseSolution2(tree.left, k, treeInfo);
  }
}

export default findKthLargestValueInBst;
