// DFS approach
// Complexity (worst-case): time O(n) | space O(h)
function symmetricalTree(tree: BinaryTree): boolean {
  return dfs(tree.left, tree.right)
}

function dfs(tree1: BinaryTree | null | undefined, tree2: BinaryTree | null | undefined): boolean {
  if (!tree1 && !tree2) return true;
  if (tree1?.value !== tree2?.value) return false;
  const left = dfs(tree1?.left, tree2?.right)
  const right = dfs(tree1?.right, tree2?.left)
  return left && right;
}

export {symmetricalTree as solution0};
