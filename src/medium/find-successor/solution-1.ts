import BTWP from 'common/BinaryTreeWithParent';


// Recursive In Order Traverse + Array approach
// Complexity (worst-case): time O(n) | space O(n)
function findSuccessor(tree: BTWP, node: BTWP) {
  const inOrderTraversalOrder: BTWP[] = getInOrderTraversalOrder(tree) || [];
  for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const nodeFounded = inOrderTraversalOrder[idx];
    if (nodeFounded.value !== node.value) continue;
    return inOrderTraversalOrder[idx + 1] ? inOrderTraversalOrder[idx + 1] : null;
  }
  return null;
}

function getInOrderTraversalOrder(tree: BTWP | null, order: BTWP[] = []) {
  if (!tree) return;
  getInOrderTraversalOrder(tree.left, order);
  order.push(tree)
  getInOrderTraversalOrder(tree.right, order);
  return order;
}

export default findSuccessor;
