// https://www.algoexpert.io/questions/find-closest-value-in-bst

/* 
  Find Closest Value In BST

  Write a function that takes in a Binary Search Tree (BST) and a target integer 
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  Each BST node has an integer value, a left child node, and a right child node.
  A node is said to be a valid BST node if and only if it satisfies the BST property:
  its value is strictly greater than the values of every node to its left; its value
  is less than or equal to the values of every node to its right; and its children nodes
  are either valid BST nodes themselves or None / null.

  Sample Input
  tree =   10
        /     \
        5      15
      /   \   /   \
      2     5 13   22
    /           \
    1           14
  target = 12

  Sample Output
  13
*/

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
