type TreeInfo = {
  nodeSucessor: BTWP | null;
  lastVisitedNode: BTWP | null;
}

// Recursive In Order Traverse Saving Last Visited approach
// Complexity (worst-case): time O(n) | space O(1)
function findSuccessor(tree: BTWP, node: BTWP) {
  const treeInfo: TreeInfo = { nodeSucessor: null, lastVisitedNode: null};
  walkInOrder(tree, node.value, treeInfo);
  return treeInfo.nodeSucessor ?? null;
}

function walkInOrder(tree: BTWP | null, nodeValue: number, treeInfo: TreeInfo) {
  if (!tree) return;
  walkInOrder(tree.left, nodeValue, treeInfo);
  if (treeInfo.lastVisitedNode?.value === nodeValue) treeInfo.nodeSucessor = tree;
  treeInfo.lastVisitedNode = tree;
  walkInOrder(tree.right, nodeValue, treeInfo);
}

export default findSuccessor;
