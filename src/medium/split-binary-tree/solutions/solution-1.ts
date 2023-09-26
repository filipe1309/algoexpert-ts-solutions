type TreeInfo = { value: number, canBeSplit: boolean }

// Total && DFS Find half in Subtrees approach
// Complexity (worst-case): time O(n) | space O(h)
function splitBinaryTree(tree: BinaryTree): number {
  let desiredSubtreeSum = getTotalSum(tree) / 2;
  let canBeSplit = trySubtrees(tree, desiredSubtreeSum);
  return canBeSplit.canBeSplit ? desiredSubtreeSum : 0;
}

function getTotalSum(tree: BinaryTree | null): number {
  if (!tree) return 0;
  return tree.value + getTotalSum(tree.left) + getTotalSum(tree.right);
}

function trySubtrees(tree: BinaryTree | null, desiredSubtreeSum: number): TreeInfo {
  if (!tree) return { value: 0, canBeSplit: false };
  const left = trySubtrees(tree.left, desiredSubtreeSum);
  const right = trySubtrees(tree.right, desiredSubtreeSum);
  const currSum = tree.value + left.value + right.value;
  const canBeSplit = left.canBeSplit || right.canBeSplit || currSum === desiredSubtreeSum;
  return { value: currSum, canBeSplit };
}

export { splitBinaryTree as solution1 };
