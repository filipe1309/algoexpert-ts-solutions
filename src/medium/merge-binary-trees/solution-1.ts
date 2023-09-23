// DFS on 1st Tree v2 approach
// Complexity (worst-case): time O(n) | space O(h)
function mergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null): BinaryTree | null {
  if (!tree1) return tree2;
  if (!tree2) return tree1;

  tree1.value += tree2.value
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left)
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right)

  return tree1;
}

export default mergeBinaryTrees;
