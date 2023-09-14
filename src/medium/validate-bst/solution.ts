// Test: make test t=validate-bst
function validateBst(tree: BST): boolean {
  return solutions.mySolution1(tree);
}

const solutions = {
  mySolution1, // time time O(n) | space O(d)
};

// Recursive approach
// Complexity (worst-case): time O(n) | space O(d)
// where n is the number of nodes in the BST
// and d is the depth (height) of the BST
function mySolution1(tree: BST): boolean {
  return walk(tree, Infinity, -Infinity);
}

function walk(tree: BST | null, max: number, min: number): boolean {
  if (!tree) return true;
  if (tree.value >= max) return false;
  if (tree.value < min) return false;

  return walk(tree.left, tree.value, min) && walk(tree.right, max, tree.value);
}

export default validateBst;
