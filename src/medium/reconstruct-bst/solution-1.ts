import { BST } from "./solution"

// Right Child Array Slices approach
// Complexity (worst-case): time O(n^2) | space O(n)
function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) return null;
  let currValue: number = preOrderTraversalValues[0];
  let rightSubtreeRootIdx: number = preOrderTraversalValues.length;

  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
    if (preOrderTraversalValues[idx] >= currValue) {
      rightSubtreeRootIdx = idx;
      break;
    }
  }

  let leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
  let rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));

  return new BST(currValue, leftSubtree, rightSubtree);
}

export default reconstructBst;
