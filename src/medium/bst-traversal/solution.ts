// Test: make test t=bst-traversal

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (!tree) return array;

  if (tree?.left) inOrderTraverse(tree.left, array);

  array.push(tree.value);

  if (tree?.right) inOrderTraverse(tree.right, array);


  return array;
}

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (!tree) return array;

  array.push(tree.value);

  if (tree?.left) preOrderTraverse(tree.left, array);

  if (tree?.right) preOrderTraverse(tree.right, array);

  return array;
}

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (!tree) return array;

  if (tree?.left) postOrderTraverse(tree.left, array);

  if (tree?.right) postOrderTraverse(tree.right, array);

  array.push(tree.value);

  return array;
}

