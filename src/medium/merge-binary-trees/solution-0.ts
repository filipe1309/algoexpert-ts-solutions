// DFS on 1st Tree approach
// Complexity (worst-case): time O(n) | space O(1)
function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree): BinaryTree {
  return genMergedTree(tree1, tree2);
}

function genMergedTree(tree1: BinaryTree, tree2: BinaryTree | null): BinaryTree {
  tree1.value = tree1.value + (tree2?.value ?? 0)
  if (tree1.left) { genMergedTree(tree1.left, tree2?.left ?? null) }
  else { tree1.left = tree2?.left ?? null; }

  if (tree1.right) { genMergedTree(tree1.right, tree2?.right ?? null) }
  else { tree1.right = tree2?.right ?? null; }

  return tree1;
}

export default mergeBinaryTrees;
