// https://www.algoexpert.io/questions/find-closest-value-in-bst

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree: BST, target: number) {
  return mySolution1(tree, target);
}

function walk(tree: BST | null, target: number, min: number): number {
  if (!tree) return min;
  if (Math.abs(tree.value - target) < Math.abs(min - target)) min = tree.value;
  if (min === target) return min;

  if (target < tree.value) return walk(tree.left, target, min);
  return walk(tree.right, target, min);
}

// Recursive
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(tree: BST, target: number) {
  return walk(tree, target, tree.value);
}

// Iterative
// Complexity (worst-case): time O(n) | space O(1)
function solution2(tree: BST, target: number) {
  let min = tree.value;
  while (tree) {
    if (Math.abs(tree.value - target) < Math.abs(min - target)) min = tree.value;
    if (min === target) break;
    tree = (target < tree.value) ? tree.left : tree.right;
  }

  return min;
}

export default findClosestValueInBst;
export { BST };
