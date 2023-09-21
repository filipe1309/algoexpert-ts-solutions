// Recursive Right/Left Most Child approach
// Complexity (worst-case): time O(n) | space O(n)
function findSuccessor(tree: BTWP, node: BTWP) {
  tree
  if (node.right) return getLeftMostChild(node.right);
  return getRightMostParent(node);
}

function getLeftMostChild(tree: BTWP): BTWP {
  let currentNode: BTWP = tree;
  while (currentNode.left) currentNode = currentNode.left;
  return currentNode;
}

function getRightMostParent(tree: BTWP): BTWP | null {
  let currentNode: BTWP = tree;
  while (currentNode.parent && currentNode.parent.right === currentNode) currentNode = currentNode.parent;
  return currentNode.parent ?? null;
}

export default findSuccessor;
