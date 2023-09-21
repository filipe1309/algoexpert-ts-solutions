import BTWP from 'common/BinaryTreeWithParent';


// Recursive In Order Traverse + Array approach
// Complexity (worst-case): time O(n) | space O(n)
function findSuccessor(tree: BTWP, nodeValue: number) {
  const inOrderTraversalOrder: BTWP[] = getInOrderTraversalOrder(tree) || [];
  for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
    const node = inOrderTraversalOrder[idx];
    if (node.value !== nodeValue) continue;
    return inOrderTraversalOrder[idx + 1] ? inOrderTraversalOrder[idx + 1].value : null;
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
