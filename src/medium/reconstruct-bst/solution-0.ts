import { BST } from "./solution"

// External BST Insert approach
// Complexity (worst-case): time O(n) | space O(n)
function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  let bst = new BST(preOrderTraversalValues.shift() as number);
  while (preOrderTraversalValues.length) {
    reconstructBstInsert(bst ,preOrderTraversalValues.shift() as number);
  }
  return bst;
}

function reconstructBstInsert(bst: BST, value: number) {
  if (value < bst.value) {
    if (bst.left) reconstructBstInsert(bst.left, value);
    else bst.left = new BST(value);
  }

  if (value >= bst.value) {
    if (bst.right) reconstructBstInsert(bst.right, value);
    else bst.right = new BST(value);
  }
}

export default reconstructBst;
