// Test: make test t=find-kth-largest-value-in-bst
function findKthLargestValueInBst(tree: BST, k: number): number {
  return solutions.mySolution1(tree, k) as number;
}

const solutions = {
  mySolution1, // time O(??) | space O(??)
  // solution1 // time O(??) | space O(??)
  // solution2 // time O(??) | space O(??)
};

// Recursive In Order Traverse Reverse approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(tree: BST, k: number): number {
  let array: number[] = [];
  inOrderTraverseReverse(tree, array)
  return array[k - 1];
}

function inOrderTraverseReverse(tree: BST | null, array: number[]) {
  if (!tree) return;
  inOrderTraverseReverse(tree.right, array);
  array.push(tree.value);
  inOrderTraverseReverse(tree.left, array);
  return array;
}

export default findKthLargestValueInBst;
