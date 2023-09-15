// Test: make test t=bst-traversal

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (!tree) return;

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);

  return array;
}

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (!tree) return;

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (!tree) return;

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);

  return array;
}

