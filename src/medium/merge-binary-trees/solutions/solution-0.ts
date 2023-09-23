// DFS on 1st Tree approach
// Complexity (worst-case): time O(n) | space O(h)
function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree): BinaryTree {
  return genMergedTree(tree1, tree2);
}

function genMergedTree(tree1: BinaryTree, tree2: BinaryTree | null): BinaryTree {
  if (!tree2) return tree1;

  tree1.value += tree2.value

  if (tree1.left) genMergedTree(tree1.left, tree2.left ?? null)
  else tree1.left = tree2.left ?? null;

  if (tree1.right) genMergedTree(tree1.right, tree2.right ?? null)
  else tree1.right = tree2.right ?? null;

  return tree1;
}

export { mergeBinaryTrees as solution0 };
