type myMax = { max: number }

// Recursive Height approach
// Complexity (worst-case): time O(n) | space O(d)
// where n is the number of nodes in the BST
// and d is the depth (height) of the BST
function binaryTreeDiameter(tree: BinaryTree | null): number {
  let result: myMax = { max: 0 };
  getHeight(tree, result)
  return result.max;
}

function getHeight(tree: BinaryTree | null, maxHeight: myMax): number {
  if (!tree) return 0;
  const leftHeight = getHeight(tree.left, maxHeight);
  const rightHeight = getHeight(tree.right, maxHeight);
  const currHeight = leftHeight + rightHeight;
  maxHeight.max = Math.max(maxHeight.max, currHeight);
  return 1 + Math.max(leftHeight, rightHeight);
}

export default binaryTreeDiameter;
