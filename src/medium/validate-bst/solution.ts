// Test: make test t=validate-bst
function validateBst(tree: BST): boolean {
  return solutions.mySolution1(tree);
}

const solutions = {
  mySolution1, // time O(??) | space O(??)
  // solution1 // time O(??) | space O(??)
  // solution2 // time O(??) | space O(??)
};

// Recursive approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(tree: BST): boolean {
  return walk(tree);
}

function walk(tree: BST | null, max: number | null = null, min: number | null = null): boolean {
  if (!tree) return true;
  if (max && tree.value >= max) return false;
  if (min && tree.value < min) return false;

  return  walk(tree.left, tree.value, min) && walk(tree.right, max, tree.value);
}

mySolution1({
  "value":10,
  "left":{"value":5,"left":null,"right":{"value":10,"left":null,"right":null}},
  "right":{"value":15,"left":null,"right":null}}) // false

export default validateBst;
