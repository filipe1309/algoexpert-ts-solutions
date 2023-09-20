import BTWP from 'common/BinaryTreeWithParent';

type TreeInfo = {
  nodeSucessor: BTWP | null;
  lastVisitedNode: BTWP | null;
}

// ?? approach
// Complexity (worst-case): time O(n) | space O(n)
function findSuccessor(tree: BTWP, node: number) {
  const treeInfo: TreeInfo = { nodeSucessor: null, lastVisitedNode: null};
  walkInOrder(tree, node, treeInfo);
  return treeInfo.nodeSucessor?.value ?? null;
}

function walkInOrder(tree: BTWP | null, nodeValue: number, treeInfo: TreeInfo) {
  if (!tree) return;
  walkInOrder(tree.left, nodeValue, treeInfo);
  if (treeInfo.lastVisitedNode?.value === nodeValue) treeInfo.nodeSucessor = tree;
  treeInfo.lastVisitedNode = tree;
  walkInOrder(tree.right, nodeValue, treeInfo);
}

export default findSuccessor;
