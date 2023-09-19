type TreeInfo = { max: number }

// Recursive Height approach
// Complexity (worst-case): time O(n) | space O(n)
function binaryTreeDiameter(tree: BinaryTree): number {
  let result: TreeInfo = { max: 0 };
  getHeight(tree, result)
  return result.max;
}

function getHeight(tree: BinaryTree, maxHeight: TreeInfo): number {
  const leftHeight = tree.left ? getHeight(tree.left, maxHeight) : 0;
  const rightHeight = tree.right ? getHeight(tree.right, maxHeight) : 0;
  maxHeight.max = Math.max(maxHeight.max, leftHeight + rightHeight);
  return 1 + Math.max(leftHeight, rightHeight);
}

export default binaryTreeDiameter;
