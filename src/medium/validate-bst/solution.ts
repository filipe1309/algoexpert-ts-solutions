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
  return walk(tree, -Infinity, Infinity);
}

function walk(tree: BST | null, min: number, max: number): boolean {
  if (!tree) return true;
  if (tree.value >= max || tree.value < min) return false;

  return walk(tree.left, min, tree.value) && walk(tree.right, tree.value, max);
}

export default validateBst;
